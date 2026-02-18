import React from 'react'
import WrapPanel from './designs/WrapPanel'
import BackPanel from './designs/BackPanel'
import FlapsPanel from './designs/FlapsPanel'
import QRPanel from './designs/QRPanel'

export default function BoxPreview({ activePanel, hexTime }) {
  return (
    <div className="w-full overflow-x-auto" id="box-preview-root">
      {activePanel === 'wrap' && (
        <div id="panel-wrap">
          <WrapPanel scale={0.72} hexTime={hexTime} />
        </div>
      )}
      {activePanel === 'back' && (
        <div id="panel-back">
          <BackPanel scale={0.72} hexTime={hexTime} />
        </div>
      )}
      {activePanel === 'flaps' && (
        <div id="panel-flaps" className="flex flex-col gap-6">
          <FlapsPanel scale={1.4} hexTime={hexTime} />
        </div>
      )}
      {activePanel === 'qr' && (
        <div id="panel-qr">
          <QRPanel scale={1.1} hexTime={hexTime} />
        </div>
      )}
    </div>
  )
}
