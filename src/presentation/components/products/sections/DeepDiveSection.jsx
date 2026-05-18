import React from 'react'

import SectionWrapper from './shared/SectionWrapper'

import { buildDeepDiveSubsections } from './deepDive/buildDeepDiveSubsections'

export default function DeepDiveSection({ title, subtitle, subsections }) {
  return <SectionWrapper title={title} subtitle={subtitle} subsections={buildDeepDiveSubsections(subsections)} />
}
