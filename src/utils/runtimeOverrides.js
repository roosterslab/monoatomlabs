const CALC_OVERRIDES_GLOBAL = '__MONOATOM_CALC_OVERRIDES__';

function normalizeKey(key) {
	if (!key) return '';
	return String(key)
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}

export function getCalculatorOverrides(productNameOrKey) {
	const globalValue = globalThis?.[CALC_OVERRIDES_GLOBAL];
	if (!globalValue || typeof globalValue !== 'object') return null;

	const normalizedKey = normalizeKey(productNameOrKey);
	return globalValue[normalizedKey] ?? globalValue[productNameOrKey] ?? null;
}

export function mergeInputConfigs(baseConfigs, overrideConfigs) {
	if (!overrideConfigs || typeof overrideConfigs !== 'object') return baseConfigs;

	const merged = { ...baseConfigs };
	for (const [key, override] of Object.entries(overrideConfigs)) {
		const base = baseConfigs?.[key];
		if (base && override && typeof override === 'object' && !Array.isArray(override)) {
			merged[key] = { ...base, ...override };
		} else {
			merged[key] = override;
		}
	}
	return merged;
}
