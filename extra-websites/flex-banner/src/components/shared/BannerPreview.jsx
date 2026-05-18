import React from 'react'
import { DESIGNS } from '../designs/registry'

const SIZE_META = {
  '3x6': { wFt: 3, hFt: 6, label: '3×6 ft', inches: '36" × 72"' },
  '4x6': { wFt: 4, hFt: 6, label: '4×6 ft', inches: '48" × 72"' },
  '4x8': { wFt: 4, hFt: 8, label: '4×8 ft', inches: '48" × 96"' },
  '2x4': { wFt: 2, hFt: 4, label: '2×4 ft', inches: '24" × 48"' },
}

const MAX_PREVIEW_H = 600
const MAX_PREVIEW_W = 520

export default function BannerPreview({ product, size, designId }) {
  const productDesigns = DESIGNS[product]
  if (!productDesigns) return <div className="text-neutral-500 text-sm">No product selected.</div>

  const sizeDesigns = productDesigns[size]
  if (!sizeDesigns) return <div className="text-neutral-500 text-sm">No designs for this size.</div>

  const designEntry = sizeDesigns.find(d => d.id === designId) || sizeDesigns[0]
  if (!designEntry) return <div className="text-neutral-500 text-sm">Design not found.</div>

  const { Component } = designEntry
  const meta = SIZE_META[size]

  // Base dimensions at 1x (96dpi)
  const baseW = meta.wFt * 96
  const baseH = meta.hFt * 96

  // Scale to fit within preview box
  const scaleH = MAX_PREVIEW_H / baseH
  const scaleW = MAX_PREVIEW_W / baseW
  const scale = Math.min(scaleH, scaleW, 1)

  const previewW = Math.round(baseW * scale)
  const previewH = Math.round(baseH * scale)

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Banner label */}
      <div className="flex items-center gap-3">
        <span className="text-white font-display font-semibold text-lg">{meta.label}</span>
        <span className="text-neutral-400 text-sm">{meta.inches}</span>
        <span className="text-neutral-600 text-xs">({designEntry.label})</span>
      </div>

      {/* Banner rendered */}
      <div
        className="rounded overflow-hidden shadow-2xl"
        style={{ width: previewW, height: previewH }}
      >
        <Component scale={scale} />
      </div>

      {/* Scale info */}
      <div className="text-neutral-600 text-xs">
        Preview at {Math.round(scale * 100)}% · Actual {meta.wFt}ft × {meta.hFt}ft
      </div>
    </div>
  )
}
