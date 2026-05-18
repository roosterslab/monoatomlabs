import React from 'react'

import { SpecTable } from '@monoatom/sections'

import SectionWrapper from './shared/SectionWrapper'

export default function TechnicalSpecsSection({ title, subtitle, specifications, tables }) {
  return (
    <SectionWrapper title={title} subtitle={subtitle}>
      <SpecTable specifications={specifications} tables={tables} />
    </SectionWrapper>
  )
}
