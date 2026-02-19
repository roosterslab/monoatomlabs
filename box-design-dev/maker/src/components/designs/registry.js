import WrapBase from './base/wrap'
import BackBase from './base/back'
import FlapsBase from './base/flaps'
import QRBase from './base/qr'

import WrapCerapheneV1 from './wrap/CerapheneV1'
import BackCerapheneV1 from './back/CerapheneV1'
import BackCerapheneV2 from './back/CerapheneV2'
import FlapsCerapheneV1 from './flaps/CerapheneV1'
import QRCerapheneV1 from './qr/CerapheneV1'
import QRCerapheneV2 from './qr/CerapheneV2'

import WrapGrapheneV1 from './wrap/GrapheneV1'
import BackGrapheneV1 from './back/GrapheneV1'
import FlapsGrapheneV1 from './flaps/GrapheneV1'
import QRGrapheneV1 from './qr/GrapheneV1'

import WrapGrapheneV2 from './wrap/GrapheneV2'
import BackGrapheneV2 from './back/GrapheneV2'
import FlapsGrapheneV2 from './flaps/GrapheneV2'
import QRGrapheneV2 from './qr/GrapheneV2'

import WrapGrapheneV3 from './wrap/GrapheneV3'
import BackGrapheneV3 from './back/GrapheneV3'
import FlapsGrapheneV3 from './flaps/GrapheneV3'
import QRGrapheneV3 from './qr/GrapheneV3'

import WrapGrapheneV4 from './wrap/GrapheneV4'
import BackGrapheneV4 from './back/GrapheneV4'
import FlapsGrapheneV4 from './flaps/GrapheneV4'
import QRGrapheneV4 from './qr/GrapheneV4'

import WrapGrapheneV5 from './wrap/GrapheneV5'
import BackGrapheneV5 from './back/GrapheneV5'
import FlapsGrapheneV5 from './flaps/GrapheneV5'
import QRGrapheneV5 from './qr/GrapheneV5'

import WrapGrapheneV6 from './wrap/GrapheneV6'
import BackGrapheneV6 from './back/GrapheneV6'
import FlapsGrapheneV6 from './flaps/GrapheneV6'
import QRGrapheneV6 from './qr/GrapheneV6'

import WrapGrapheneV7 from './wrap/GrapheneV7'
import BackGrapheneV7 from './back/GrapheneV7'
import FlapsGrapheneV7 from './flaps/GrapheneV7'
import QRGrapheneV7 from './qr/GrapheneV7'

import WrapGrapheneV8 from './wrap/GrapheneV8'
import BackGrapheneV8 from './back/GrapheneV8'
import FlapsGrapheneV8 from './flaps/GrapheneV8'
import QRGrapheneV8 from './qr/GrapheneV8'

import WrapGrapheneV9 from './wrap/GrapheneV9'
import BackGrapheneV9 from './back/GrapheneV9'
import FlapsGrapheneV9 from './flaps/GrapheneV9'
import QRGrapheneV9 from './qr/GrapheneV9'

import WrapGrapheneV10 from './wrap/GrapheneV10'
import BackGrapheneV10 from './back/GrapheneV10'
import FlapsGrapheneV10 from './flaps/GrapheneV10'
import QRGrapheneV10 from './qr/GrapheneV10'

/**
 * DESIGNS registry — add new design variants here.
 */
export const DESIGNS = {
  wrap: [
    { id: 'Base', label: 'Base (Background Only)', Component: WrapBase },
    { id: 'CerapheneV1', label: 'Ceraphene V1', Component: WrapCerapheneV1 },
    { id: 'GrapheneV1', label: 'Graphene V1', Component: WrapGrapheneV1 },
    { id: 'GrapheneV2', label: 'Graphene V2 (Circuit)', Component: WrapGrapheneV2 },
    { id: 'GrapheneV3', label: 'Graphene V3 (Lab Protocol)', Component: WrapGrapheneV3 },
    { id: 'GrapheneV4', label: 'Graphene V4 (Tactical)', Component: WrapGrapheneV4 },
    { id: 'GrapheneV5', label: 'Graphene V5 (Layers)', Component: WrapGrapheneV5 },
    { id: 'GrapheneV6', label: 'Graphene V6 (Performance)', Component: WrapGrapheneV6 },
    { id: 'GrapheneV7', label: 'Graphene V7 (Chronicle)', Component: WrapGrapheneV7 },
    { id: 'GrapheneV8', label: 'Graphene V8 (Invisible Shield)', Component: WrapGrapheneV8 },
    { id: 'GrapheneV9', label: 'Graphene V9 (Water Science)', Component: WrapGrapheneV9 },
    { id: 'GrapheneV10', label: 'Graphene V10 (9 Threats)', Component: WrapGrapheneV10 },
  ],
  back: [
    { id: 'Base', label: 'Base (Background Only)', Component: BackBase },
    { id: 'CerapheneV1', label: 'Ceraphene V1', Component: BackCerapheneV1 },
    { id: 'CerapheneV2', label: 'Ceraphene V2 (Tech Manual)', Component: BackCerapheneV2 },
    { id: 'GrapheneV1', label: 'Graphene V1', Component: BackGrapheneV1 },
    { id: 'GrapheneV2', label: 'Graphene V2 (Circuit)', Component: BackGrapheneV2 },
    { id: 'GrapheneV3', label: 'Graphene V3 (Lab Protocol)', Component: BackGrapheneV3 },
    { id: 'GrapheneV4', label: 'Graphene V4 (Tactical)', Component: BackGrapheneV4 },
    { id: 'GrapheneV5', label: 'Graphene V5 (Layers)', Component: BackGrapheneV5 },
    { id: 'GrapheneV6', label: 'Graphene V6 (Performance)', Component: BackGrapheneV6 },
    { id: 'GrapheneV7', label: 'Graphene V7 (Chronicle)', Component: BackGrapheneV7 },
    { id: 'GrapheneV8', label: 'Graphene V8 (Invisible Shield)', Component: BackGrapheneV8 },
    { id: 'GrapheneV9', label: 'Graphene V9 (Water Science)', Component: BackGrapheneV9 },
    { id: 'GrapheneV10', label: 'Graphene V10 (9 Threats)', Component: BackGrapheneV10 },
  ],
  flaps: [
    { id: 'Base', label: 'Base (Background Only)', Component: FlapsBase },
    { id: 'CerapheneV1', label: 'Ceraphene V1', Component: FlapsCerapheneV1 },
    { id: 'GrapheneV1', label: 'Graphene V1', Component: FlapsGrapheneV1 },
    { id: 'GrapheneV2', label: 'Graphene V2 (Circuit)', Component: FlapsGrapheneV2 },
    { id: 'GrapheneV3', label: 'Graphene V3 (Lab Protocol)', Component: FlapsGrapheneV3 },
    { id: 'GrapheneV4', label: 'Graphene V4 (Tactical)', Component: FlapsGrapheneV4 },
    { id: 'GrapheneV5', label: 'Graphene V5 (Layers)', Component: FlapsGrapheneV5 },
    { id: 'GrapheneV6', label: 'Graphene V6 (Performance)', Component: FlapsGrapheneV6 },
    { id: 'GrapheneV7', label: 'Graphene V7 (Chronicle)', Component: FlapsGrapheneV7 },
    { id: 'GrapheneV8', label: 'Graphene V8 (Invisible Shield)', Component: FlapsGrapheneV8 },
    { id: 'GrapheneV9', label: 'Graphene V9 (Water Science)', Component: FlapsGrapheneV9 },
    { id: 'GrapheneV10', label: 'Graphene V10 (9 Threats)', Component: FlapsGrapheneV10 },
  ],
  qr: [
    { id: 'Base', label: 'Base (Background Only)', Component: QRBase },
    { id: 'CerapheneV1', label: 'Ceraphene V1', Component: QRCerapheneV1 },
    { id: 'CerapheneV2', label: 'Ceraphene V2 (Professional)', Component: QRCerapheneV2 },
    { id: 'GrapheneV1', label: 'Graphene V1', Component: QRGrapheneV1 },
    { id: 'GrapheneV2', label: 'Graphene V2 (Circuit)', Component: QRGrapheneV2 },
    { id: 'GrapheneV3', label: 'Graphene V3 (Lab Protocol)', Component: QRGrapheneV3 },
    { id: 'GrapheneV4', label: 'Graphene V4 (Tactical)', Component: QRGrapheneV4 },
    { id: 'GrapheneV5', label: 'Graphene V5 (Layers)', Component: QRGrapheneV5 },
    { id: 'GrapheneV6', label: 'Graphene V6 (Performance)', Component: QRGrapheneV6 },
    { id: 'GrapheneV7', label: 'Graphene V7 (Chronicle)', Component: QRGrapheneV7 },
    { id: 'GrapheneV8', label: 'Graphene V8 (Invisible Shield)', Component: QRGrapheneV8 },
    { id: 'GrapheneV9', label: 'Graphene V9 (Water Science)', Component: QRGrapheneV9 },
    { id: 'GrapheneV10', label: 'Graphene V10 (9 Threats)', Component: QRGrapheneV10 },
  ],
}

export const DEFAULT_SELECTED = {
  wrap: 'GrapheneV1',
  back: 'GrapheneV1',
  flaps: 'GrapheneV1',
  qr: 'GrapheneV1',
}

export function getDesignComponent(panel, selectedId) {
  const list = DESIGNS[panel]
  return list.find(d => d.id === selectedId)?.Component ?? list[0].Component
}
