import React from 'react'

import { TCOAnalysis } from '@monoatom/calculators'

import SectionWrapper from './shared/SectionWrapper'

export default function RoiSection({ title, subtitle, tcoAnalysisProps, tcoCopy, theme = 'light' }) {
  return (
    <SectionWrapper title={title} subtitle={subtitle}>
      <TCOAnalysis {...tcoAnalysisProps} copy={tcoCopy} theme={theme} />
    </SectionWrapper>
  )
}
