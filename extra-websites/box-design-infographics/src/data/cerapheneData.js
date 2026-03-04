/**
 * Verified CERAPHENE product data from source-contents.
 * All specs from brochure / company profile.
 */

export const product = {
  name: 'Ceraphene',
  fullName: 'CERAPHENE Graphene Ceramic Coating',
  taglines: [
    '9 Threats. Zero Damage.',
    'The Invisible Shield',
    'Nano-Precision Protection',
    'Graphene. Engineered for Roads.',
    '115° Superhydrophobic — The Lotus Effect',
    'Molecularly Bonded. Physically Unbeatable.',
    'Thinner Than a Hair. Stronger Than Steel.',
  ],
  price: { in: '₹5,000', per: '50 ml' },
  competitorPrice: { in: '₹15,000', per: '50 ml' },
  costSaving: '60–70%',
}

export const specs = {
  hardness: { value: '9H+', label: 'Hardness Rating', unit: 'Pencil Scale', context: 'Diamond is 10H' },
  thickness: { value: '3–4 μm', label: 'Coating Thickness', unit: 'Microns', context: '1/20th of a human hair' },
  contactAngle: { value: '115°', label: 'Water Contact Angle', unit: 'Degrees', context: 'Superhydrophobic (>90° = hydrophobic)' },
  durability: { value: '3–4+ Years', label: 'Durability', unit: 'Years', context: 'Under typical road conditions' },
  heatResistance: { value: '700°C', label: 'Heat Resistance', unit: 'Celsius', context: 'Brake rotor temps reach ~300–600°C' },
  chemicalResistance: { value: 'pH 2–12', label: 'Chemical Resistance', unit: 'pH Range', context: 'From strong acids to strong alkalis' },
  lifecycleExtension: { value: '+25–40%', label: 'Coating Lifecycle Extension', unit: '%', context: 'vs unprotected clearcoat' },
  humanHair: { value: '70 μm', label: 'Human Hair Thickness', unit: 'Microns', context: 'For comparison — CERAPHENE is 1/20th' },
}

export const threats = [
  { id: 1, label: 'Acid Rain', detail: 'pH as low as 4.2 — etches bare paint', icon: 'CloudRain' },
  { id: 2, label: 'Bird Droppings', detail: 'Uric acid causes permanent etching within hours', icon: 'Bug' },
  { id: 3, label: 'Rock Chips', detail: 'High-velocity road debris impact', icon: 'Disc' },
  { id: 4, label: 'Brake Heat', detail: 'Radiant heat up to 600°C on wheel faces', icon: 'Flame' },
  { id: 5, label: 'Industrial Fallout', detail: 'Metallic particles embed in paint', icon: 'Wind' },
  { id: 6, label: 'Road Chemicals', detail: 'Salt, de-icers, and petrochemicals', icon: 'Zap' },
  { id: 7, label: 'UV Radiation', detail: 'Oxidation and colour fade over time', icon: 'Sun' },
  { id: 8, label: 'Water Spotting', detail: 'Mineral deposits from tap and rain water', icon: 'Droplets' },
  { id: 9, label: 'Oxidation', detail: 'Clearcoat degradation from oxygen exposure', icon: 'Shield' },
]

export const competitors = [
  { name: 'Gtechniq CSL', price: '₹15,000+', hardness: '9H', years: '3–5 yr', hydro: '104°', cost: 'Premium' },
  { name: 'CarPro CQuartz', price: '₹12,000+', hardness: '9H', years: '2–3 yr', hydro: '108°', cost: 'Premium' },
  { name: 'Ceramic Pro 9H', price: '₹18,000+', hardness: '9H', years: '3–5 yr', hydro: '110°', cost: 'Ultra Premium' },
  { name: 'CERAPHENE', price: '₹5,000', hardness: '9H+', years: '3–4+ yr', hydro: '115°', cost: '60–70% cheaper', highlight: true },
]

export const applications = [
  'Automotive exterior paint',
  'Two-wheelers & motorcycles',
  'Luxury & commercial vehicles',
  'Marine painted surfaces',
  'Exterior painted metal/alloy',
  'Architectural painted panels',
  'Industrial painted equipment',
]

export const mechanism = [
  { step: 1, title: 'Graphene Nano-Platelets', detail: 'High aspect ratio (2,000–4,000:1) platelets distributed uniformly in ceramic matrix' },
  { step: 2, title: 'Ceramic Matrix Bonding', detail: 'Forms dense, chemically bonded protective layer on clearcoat surface' },
  { step: 3, title: 'Molecular Adhesion', detail: 'Covalent bonding at 3–4 μm depth — not just a surface film' },
  { step: 4, title: 'Superhydrophobic Surface', detail: 'Structured surface creates 115° water contact angle — lotus effect' },
]

export const boxDimensions = {
  back: { w: 1494, h: 638, label: 'Back Panel' },
  front: { w: 499, h: 638, label: 'Front Panel' },
  side: { w: 204, h: 638, label: 'Side Panel' },
  flap: { w: 499, h: 204, label: 'Flap' },
  qr: { w: 605, h: 492, label: 'QR Panel' },
}
