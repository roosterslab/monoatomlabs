import React from 'react'

function Section({ title, children }) {
  return (
    <div className="border-b border-gray-700">
      <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 px-4 pt-4 pb-2">
        {title}
      </h3>
      <div className="px-4 pb-4 space-y-2">{children}</div>
    </div>
  )
}

function Field({ label, value, onChange, textarea, rows = 3, mono }) {
  const base =
    'w-full bg-gray-700 border border-gray-600 rounded px-3 py-1.5 text-sm text-white focus:outline-none focus:border-teal-500 transition-colors'
  return (
    <div>
      <label className="block text-xs text-gray-400 mb-1">{label}</label>
      {textarea ? (
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          rows={rows}
          className={`${base} resize-none ${mono ? 'font-mono text-xs' : ''}`}
        />
      ) : (
        <input
          value={value}
          onChange={e => onChange(e.target.value)}
          className={`${base} ${mono ? 'font-mono text-xs' : ''}`}
        />
      )}
    </div>
  )
}

const PANEL_SECTIONS = {
  wrap: ['brand', 'product', 'frontFeatures'],
  back: ['backFeatures'],
  flaps: ['boxContents'],
  qr: ['website'],
}

export default function BoxForm({ data, onChange, activePanel }) {
  const show = PANEL_SECTIONS[activePanel] || []

  return (
    <div>
      {/* Brand */}
      {show.includes('brand') && (
        <Section title="Brand">
          <Field
            label="Brand Name"
            value={data.brandName}
            onChange={v => onChange('brandName', v)}
          />
        </Section>
      )}

      {/* Product Identity */}
      {show.includes('product') && (
        <Section title="Product Identity">
          <Field
            label="Main Product Name (large)"
            value={data.productName}
            onChange={v => onChange('productName', v)}
          />
          <Field
            label="Product Subtitle"
            value={data.productSubtitle}
            onChange={v => onChange('productSubtitle', v)}
          />
        </Section>
      )}

      {/* Front Feature Icons */}
      {show.includes('frontFeatures') && (
        <Section title="Front Feature Labels">
          {data.frontFeatures.map((f, i) => (
            <Field
              key={i}
              label={`Icon ${i + 1} Label`}
              value={f.label}
              onChange={v => {
                const updated = [...data.frontFeatures]
                updated[i] = { ...updated[i], label: v }
                onChange('frontFeatures', updated)
              }}
            />
          ))}
        </Section>
      )}

      {/* Box Contents */}
      {show.includes('boxContents') && (
        <Section title="Box Contents">
          <Field
            label="Contents (one item per line)"
            value={data.boxContents.join('\n')}
            onChange={v => onChange('boxContents', v.split('\n'))}
            textarea
            rows={4}
          />
          <Field
            label="Bonus Text"
            value={data.boxBonus}
            onChange={v => onChange('boxBonus', v)}
          />
        </Section>
      )}

      {/* Back Features */}
      {show.includes('backFeatures') && (
        <Section title="Back Panel Features">
          {data.backFeatures.map((f, i) => (
            <div key={i} className="space-y-1.5 pb-3 border-b border-gray-700 last:border-0 last:pb-0">
              <div className="text-xs text-gray-500 font-medium">Feature {i + 1}</div>
              <Field
                label="#HashWord (white part)"
                value={f.hashWord}
                onChange={v => {
                  const updated = [...data.backFeatures]
                  updated[i] = { ...updated[i], hashWord: v }
                  onChange('backFeatures', updated)
                }}
              />
              <Field
                label="Type Word (teal part)"
                value={f.typeWord}
                onChange={v => {
                  const updated = [...data.backFeatures]
                  updated[i] = { ...updated[i], typeWord: v }
                  onChange('backFeatures', updated)
                }}
              />
              <Field
                label="Description"
                value={f.description}
                onChange={v => {
                  const updated = [...data.backFeatures]
                  updated[i] = { ...updated[i], description: v }
                  onChange('backFeatures', updated)
                }}
                textarea
                rows={2}
              />
            </div>
          ))}
        </Section>
      )}

      {/* Website */}
      {show.includes('website') && (
        <Section title="Website / QR Code">
          <Field
            label="Website URL (encoded in QR)"
            value={data.websiteUrl}
            onChange={v => onChange('websiteUrl', v)}
          />
        </Section>
      )}
    </div>
  )
}
