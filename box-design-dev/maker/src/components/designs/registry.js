import WrapGrapheneV1 from './wrap/GrapheneV1'
import BackGrapheneV1 from './back/GrapheneV1'
import FlapsGrapheneV1 from './flaps/GrapheneV1'
import QRGrapheneV1 from './qr/GrapheneV1'

/**
 * DESIGNS registry — add new design variants here.
 *
 * Structure:
 *   { [panelType]: [{ id, label, Component }] }
 *
 * To add a new design:
 *   1. Create designs/<panel>/<YourName>/index.jsx
 *   2. Import it here
 *   3. Push a new entry into the panel's array
 */
export const DESIGNS = {
  wrap: [
    { id: 'GrapheneV1', label: 'Graphene V1', Component: WrapGrapheneV1 },
  ],
  back: [
    { id: 'GrapheneV1', label: 'Graphene V1', Component: BackGrapheneV1 },
  ],
  flaps: [
    { id: 'GrapheneV1', label: 'Graphene V1', Component: FlapsGrapheneV1 },
  ],
  qr: [
    { id: 'GrapheneV1', label: 'Graphene V1', Component: QRGrapheneV1 },
  ],
}

export const DEFAULT_SELECTED = {
  wrap:  'GrapheneV1',
  back:  'GrapheneV1',
  flaps: 'GrapheneV1',
  qr:    'GrapheneV1',
}

export function getDesignComponent(panel, selectedId) {
  const list = DESIGNS[panel]
  return list.find(d => d.id === selectedId)?.Component ?? list[0].Component
}
