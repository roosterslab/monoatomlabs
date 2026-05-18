import React from 'react'

import { ProcessFlow } from '@monoatom/ui'

import { createProcessFlowSteps } from '../helpers/createProcessFlowSteps'
import SectionWrapper from './shared/SectionWrapper'

export default function HowItWorksSection({ title, subtitle, steps, accentColor, theme = 'light' }) {
  return (
    <SectionWrapper title={title} subtitle={subtitle}>
      <ProcessFlow steps={createProcessFlowSteps(steps)} theme={theme} accentColor={accentColor} />
    </SectionWrapper>
  )
}
