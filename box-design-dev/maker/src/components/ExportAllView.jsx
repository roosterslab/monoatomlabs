import React from 'react'
import WrapPanel from './designs/WrapPanel'
import BackPanel from './designs/BackPanel'
import FlapsPanel from './designs/FlapsPanel'
import QRPanel from './designs/QRPanel'

/**
 * Hidden off-screen component — always mounted in the DOM.
 * Each panel has its own wrapper div with a stable ID so
 * pdfExporter can capture them individually and place them
 * at their exact labeled inch dimensions in the PDF.
 *
 * All panels use scale=1 (96 dpi native), html2canvas then
 * captures at 3× for ~288 dpi print quality.
 */
export default function ExportAllView({ hexTime }) {
  return (
    <div
      id="export-all-container"
      style={{ position: 'fixed', top: 0, left: '-99999px', zIndex: -9999 }}
      aria-hidden="true"
    >
      {/* Wrap panel — 15.567" × 6.65" */}
      <div id="export-wrap-panel" style={{ display: 'inline-block', lineHeight: 0 }}>
        <WrapPanel scale={1.0} hexTime={hexTime} />
      </div>

      {/* Back panel — 15.567" × 6.65" */}
      <div id="export-back-panel" style={{ display: 'inline-block', lineHeight: 0 }}>
        <BackPanel scale={1.0} hexTime={hexTime} />
      </div>

      {/* Flap panels — 5.2" × 2.13" each, individually addressable */}
      <FlapsPanel
        scale={1.0}
        hideLabels
        contentsFlapId="export-flap-contents"
        logoFlapId="export-flap-logo"
        hexTime={hexTime}
      />

      {/* QR panel — 6.303" × 5.123" */}
      <div id="export-qr-panel" style={{ display: 'inline-block', lineHeight: 0 }}>
        <QRPanel scale={1.0} hexTime={hexTime} />
      </div>
    </div>
  )
}
