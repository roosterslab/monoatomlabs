export function normalizeDeepDiveSubsection(subsection) {
  if (!subsection || typeof subsection !== 'object') return null

  const title = typeof subsection.title === 'string' ? subsection.title : ''
  const content = Array.isArray(subsection.content) ? subsection.content : []

  return { ...subsection, title, content }
}

export function buildDeepDiveSubsections(subsections) {
  if (!Array.isArray(subsections)) return []

  return subsections.map(normalizeDeepDiveSubsection).filter(Boolean)
}
