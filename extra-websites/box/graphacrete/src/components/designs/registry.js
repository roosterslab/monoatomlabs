import WrapBase from './base/wrap'
import BackBase from './base/back'
import FlapsBase from './base/flaps'
import QRBase from './base/qr'
import WrapGraphacreteV1 from './wrap/GraphacreteV1'
import BackGraphacreteV1 from './back/GraphacreteV1'
import FlapsGraphacreteV1 from './flaps/GraphacreteV1'
import QRGraphacreteV1 from './qr/GraphacreteV1'
import WrapGraphacreteV2 from './wrap/GraphacreteV2'

export const DESIGNS = {
  wrap:  [{ id: 'Base', label: 'Base', Component: WrapBase }, { id: 'GraphacreteV1', label: 'Graphacrete V1', Component: WrapGraphacreteV1 }, { id: 'GraphacreteV2', label: 'Graphacrete V2 — Photo', Component: WrapGraphacreteV2 }],
  back:  [{ id: 'Base', label: 'Base', Component: BackBase }, { id: 'GraphacreteV1', label: 'Graphacrete V1', Component: BackGraphacreteV1 }],
  flaps: [{ id: 'Base', label: 'Base', Component: FlapsBase }, { id: 'GraphacreteV1', label: 'Graphacrete V1', Component: FlapsGraphacreteV1 }],
  qr:    [{ id: 'Base', label: 'Base', Component: QRBase }, { id: 'GraphacreteV1', label: 'Graphacrete V1', Component: QRGraphacreteV1 }],
}

export const DEFAULT_SELECTED = { wrap: 'GraphacreteV1', back: 'GraphacreteV1', flaps: 'GraphacreteV1', qr: 'GraphacreteV1' }

export function getDesignComponent(panel, selectedId) {
  const list = DESIGNS[panel]
  return list.find(d => d.id === selectedId)?.Component ?? list[0].Component
}
