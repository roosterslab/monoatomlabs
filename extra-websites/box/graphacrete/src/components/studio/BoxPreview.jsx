import React from 'react'
import { DESIGNS, getDesignComponent } from '../designs/registry'

export default function BoxPreview({ activePanel, surfs, selectedDesigns }) {
  const WrapPanel  = getDesignComponent('wrap',  selectedDesigns.wrap)
  const BackPanel  = getDesignComponent('back',  selectedDesigns.back)
  const FlapsPanel = getDesignComponent('flaps', selectedDesigns.flaps)
  const QRPanel    = getDesignComponent('qr',    selectedDesigns.qr)

  return (
    <div className="w-full overflow-x-auto" id="box-preview-root">
      {activePanel === 'wrap' && (
        <div id="panel-wrap">
          <WrapPanel scale={0.72}
            surfBack={surfs.wrapBack}
            surfLeft={surfs.wrapLeft}
            surfFront={surfs.wrapFront}
            surfRight={surfs.wrapRight}
          />
        </div>
      )}
      {activePanel === 'back' && (
        <div id="panel-back">
          <BackPanel scale={0.72} surf={surfs.back} />
        </div>
      )}
      {activePanel === 'flaps' && (
        <div id="panel-flaps" className="flex flex-col gap-6">
          <FlapsPanel scale={1.4}
            surfContents={surfs.flapsContents}
            surfLogo={surfs.flapsLogo}
          />
        </div>
      )}
      {activePanel === 'qr' && (
        <div id="panel-qr">
          <QRPanel scale={1.1} surf={surfs.qr} />
        </div>
      )}
    </div>
  )
}
