import WrapBase from './base/wrap'
import BackBase from './base/back'
import FlapsBase from './base/flaps'
import QRBase from './base/qr'
import WrapHdgpeV1 from './wrap/HdgpeV1'
import BackHdgpeV1 from './back/HdgpeV1'
import FlapsHdgpeV1 from './flaps/HdgpeV1'
import QRHdgpeV1 from './qr/HdgpeV1'
import WrapHdgpeV2 from './wrap/HdgpeV2'

export const DESIGNS = {
  wrap:  [{ id: 'Base', label: 'Base', Component: WrapBase }, { id: 'HdgpeV1', label: 'HD-G-PE V1', Component: WrapHdgpeV1 }, { id: 'HdgpeV2', label: 'HD-G-PE V2 — Photo', Component: WrapHdgpeV2 }],
  back:  [{ id: 'Base', label: 'Base', Component: BackBase }, { id: 'HdgpeV1', label: 'HD-G-PE V1', Component: BackHdgpeV1 }],
  flaps: [{ id: 'Base', label: 'Base', Component: FlapsBase }, { id: 'HdgpeV1', label: 'HD-G-PE V1', Component: FlapsHdgpeV1 }],
  qr:    [{ id: 'Base', label: 'Base', Component: QRBase }, { id: 'HdgpeV1', label: 'HD-G-PE V1', Component: QRHdgpeV1 }],
}

export const DEFAULT_SELECTED = { wrap: 'HdgpeV1', back: 'HdgpeV1', flaps: 'HdgpeV1', qr: 'HdgpeV1' }

export function getDesignComponent(panel, selectedId) {
  const list = DESIGNS[panel]
  return list.find(d => d.id === selectedId)?.Component ?? list[0].Component
}
