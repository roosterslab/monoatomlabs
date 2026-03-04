import React from 'react'
import { getDesignComponent } from '../designs/registry'

/**
 * Hidden off-screen component — always mounted in the DOM.
 * Uses the selected design variant per panel for export.
 */
export default function ExportAllView({ surfs, selectedDesigns }) {
  const WrapPanel  = getDesignComponent('wrap',  selectedDesigns.wrap)
  const BackPanel  = getDesignComponent('back',  selectedDesigns.back)
  const FlapsPanel = getDesignComponent('flaps', selectedDesigns.flaps)
  const QRPanel    = getDesignComponent('qr',    selectedDesigns.qr)

  return (
    <div
      id="export-all-container"
      style={{ position: 'fixed', top: 0, left: '-99999px', zIndex: -9999 }}
      aria-hidden="true"
    >
      <div id="export-wrap-panel" style={{ display: 'inline-block', lineHeight: 0 }}>
        <WrapPanel scale={1.0}
          surfBack={surfs.wrapBack}
          surfLeft={surfs.wrapLeft}
          surfFront={surfs.wrapFront}
          surfRight={surfs.wrapRight}
        />
      </div>

      <div id="export-back-panel" style={{ display: 'inline-block', lineHeight: 0 }}>
        <BackPanel scale={1.0} surf={surfs.back} />
      </div>

      <FlapsPanel
        scale={1.0}
        hideLabels
        contentsFlapId="export-flap-contents"
        logoFlapId="export-flap-logo"
        surfContents={surfs.flapsContents}
        surfLogo={surfs.flapsLogo}
      />

      <div id="export-qr-panel" style={{ display: 'inline-block', lineHeight: 0 }}>
        <QRPanel scale={1.0} surf={surfs.qr} />
      </div>
    </div>
  )
}
