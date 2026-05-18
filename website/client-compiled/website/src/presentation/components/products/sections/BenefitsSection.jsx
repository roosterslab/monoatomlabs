import React from 'react'

import { FeatureList } from '@monoatom/sections'

import SectionWrapper from './shared/SectionWrapper'

export default function BenefitsSection({ title, subtitle, benefits, columns = 2 }) {
  return (
    <SectionWrapper title={title} subtitle={subtitle}>
      <FeatureList features={benefits} variant="detailed" columns={columns} />
    </SectionWrapper>
  )
}
