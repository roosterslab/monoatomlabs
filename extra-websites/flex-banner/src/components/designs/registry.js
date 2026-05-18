import CerapheneV1_3x6 from '../../designs/ceraphene/V1_3x6'
import CerapheneV1_4x6 from '../../designs/ceraphene/V1_4x6'
import CerapheneV1_4x8 from '../../designs/ceraphene/V1_4x8'
import CerapheneV1_2x4 from '../../designs/ceraphene/V1_2x4'
import GraphacreteV1_3x6 from '../../designs/graphacrete/V1_3x6'
import GraphacreteV1_4x6 from '../../designs/graphacrete/V1_4x6'
import GraphacreteV1_4x8 from '../../designs/graphacrete/V1_4x8'
import GraphacreteV1_2x4 from '../../designs/graphacrete/V1_2x4'
import GraffisolV1_3x6 from '../../designs/graffisol/V1_3x6'
import GraffisolV1_4x6 from '../../designs/graffisol/V1_4x6'
import GraffisolV1_4x8 from '../../designs/graffisol/V1_4x8'
import GraffisolV1_2x4 from '../../designs/graffisol/V1_2x4'
import HdgpeV1_3x6 from '../../designs/hdgpe/V1_3x6'
import HdgpeV1_4x6 from '../../designs/hdgpe/V1_4x6'
import HdgpeV1_4x8 from '../../designs/hdgpe/V1_4x8'
import HdgpeV1_2x4 from '../../designs/hdgpe/V1_2x4'

export const DESIGNS = {
  CERAPHENE: {
    '3x6': [{ id: 'V1', label: 'Classic V1', Component: CerapheneV1_3x6 }],
    '4x6': [{ id: 'V1', label: 'Classic V1', Component: CerapheneV1_4x6 }],
    '4x8': [{ id: 'V1', label: 'Classic V1', Component: CerapheneV1_4x8 }],
    '2x4': [{ id: 'V1', label: 'Classic V1', Component: CerapheneV1_2x4 }],
  },
  GRAPHACRETE: {
    '3x6': [{ id: 'V1', label: 'Classic V1', Component: GraphacreteV1_3x6 }],
    '4x6': [{ id: 'V1', label: 'Classic V1', Component: GraphacreteV1_4x6 }],
    '4x8': [{ id: 'V1', label: 'Classic V1', Component: GraphacreteV1_4x8 }],
    '2x4': [{ id: 'V1', label: 'Classic V1', Component: GraphacreteV1_2x4 }],
  },
  GRAFFISOL: {
    '3x6': [{ id: 'V1', label: 'Classic V1', Component: GraffisolV1_3x6 }],
    '4x6': [{ id: 'V1', label: 'Classic V1', Component: GraffisolV1_4x6 }],
    '4x8': [{ id: 'V1', label: 'Classic V1', Component: GraffisolV1_4x8 }],
    '2x4': [{ id: 'V1', label: 'Classic V1', Component: GraffisolV1_2x4 }],
  },
  'HD-G-PE': {
    '3x6': [{ id: 'V1', label: 'Classic V1', Component: HdgpeV1_3x6 }],
    '4x6': [{ id: 'V1', label: 'Classic V1', Component: HdgpeV1_4x6 }],
    '4x8': [{ id: 'V1', label: 'Classic V1', Component: HdgpeV1_4x8 }],
    '2x4': [{ id: 'V1', label: 'Classic V1', Component: HdgpeV1_2x4 }],
  },
}

export const DEFAULT_DESIGNS = {
  CERAPHENE:   { '3x6': 'V1', '4x6': 'V1', '4x8': 'V1', '2x4': 'V1' },
  GRAPHACRETE: { '3x6': 'V1', '4x6': 'V1', '4x8': 'V1', '2x4': 'V1' },
  GRAFFISOL:   { '3x6': 'V1', '4x6': 'V1', '4x8': 'V1', '2x4': 'V1' },
  'HD-G-PE':   { '3x6': 'V1', '4x6': 'V1', '4x8': 'V1', '2x4': 'V1' },
}
