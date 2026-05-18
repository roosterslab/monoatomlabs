import React from 'react'

// Layer 2 (Semantic Authoring)
// - No Tailwind here.
// - These are thin semantic aliases over the compiled design system.

export const Page = ({ children }) => <>{children}</>

// Hero (Home)
export {
  HomeHero as Hero,
  Eyebrow,
  Heading,
  Highlight,
  Lead,
  Actions as HeroActions,
  StatGrid,
} from '@monoatom/primitives'

// Typography
export {
  Kicker,
  DisplayTitle,
  PageTitle,
  Paragraph,
  Muted,
  Emphasis,
  GradientAccent,
} from '@monoatom/primitives'

// Sections
export {
  Section,
  SectionKicker,
  SectionTitle,
  SectionSubtitle,
  SectionBody,
  SectionActions,
} from '@monoatom/primitives'

// Actions
export {
  ActionGroup,
  PrimaryAction as PrimaryButton,
  SecondaryAction as SecondaryButton,
} from '@monoatom/primitives'

// Stats
export { Stat } from '@monoatom/primitives'
