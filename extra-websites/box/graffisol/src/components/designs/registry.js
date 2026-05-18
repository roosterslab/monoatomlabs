import WrapBase from './base/wrap'
import BackBase from './base/back'
import FlapsBase from './base/flaps'
import QRBase from './base/qr'
import WrapGraffisolV1 from './wrap/GraffisolV1'
import BackGraffisolV1 from './back/GraffisolV1'
import FlapsGraffisolV1 from './flaps/GraffisolV1'
import QRGraffisolV1 from './qr/GraffisolV1'
import WrapGraffisolV2 from './wrap/GraffisolV2'

export const DESIGNS = {
  wrap:  [{ id: 'Base', label: 'Base', Component: WrapBase }, { id: 'GraffisolV1', label: 'Graffisol V1', Component: WrapGraffisolV1 }, { id: 'GraffisolV2', label: 'Graffisol V2 — Photo', Component: WrapGraffisolV2 }],
  back:  [{ id: 'Base', label: 'Base', Component: BackBase }, { id: 'GraffisolV1', label: 'Graffisol V1', Component: BackGraffisolV1 }],
  flaps: [{ id: 'Base', label: 'Base', Component: FlapsBase }, { id: 'GraffisolV1', label: 'Graffisol V1', Component: FlapsGraffisolV1 }],
  qr:    [{ id: 'Base', label: 'Base', Component: QRBase }, { id: 'GraffisolV1', label: 'Graffisol V1', Component: QRGraffisolV1 }],
}

export const DEFAULT_SELECTED = { wrap: 'GraffisolV1', back: 'GraffisolV1', flaps: 'GraffisolV1', qr: 'GraffisolV1' }

export function getDesignComponent(panel, selectedId) {
  const list = DESIGNS[panel]
  return list.find(d => d.id === selectedId)?.Component ?? list[0].Component
}
