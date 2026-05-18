const HIDDEN_PRODUCT_IDS = new Set(['rustene', 'atmospheric-harvesting'])
const HIDDEN_PRODUCT_NAMES = new Set([
  'rustene',
  'aerophenter',
  'atmospheric-harvesting',
  'atmospheric-water-harvesting',
])

function normalize(value) {
  if (value == null) return ''
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[_\s]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

export function isHiddenProduct(productOrKey) {
  if (!productOrKey) return false

  if (typeof productOrKey === 'string') {
    const key = normalize(productOrKey)
    return HIDDEN_PRODUCT_IDS.has(key) || HIDDEN_PRODUCT_NAMES.has(key)
  }

  const id = normalize(productOrKey.id)
  const name = normalize(productOrKey.name ?? productOrKey.title)

  return (id && HIDDEN_PRODUCT_IDS.has(id)) || (name && HIDDEN_PRODUCT_NAMES.has(name))
}

export function filterVisibleProducts(products) {
  if (!Array.isArray(products)) return []
  return products.filter((p) => !isHiddenProduct(p))
}

export function mapWithVisibleProducts(phases) {
  if (!Array.isArray(phases)) return []

  return phases.map((phase) => {
    if (!phase || typeof phase !== 'object') return phase
    return {
      ...phase,
      products: filterVisibleProducts(phase.products),
    }
  })
}
