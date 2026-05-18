import React from 'react'

import { Page } from '../semantic'
import { PageHeader, AboutLeadership, HallOfFame, AboutCTAHub } from '@monoatom/sections'

import { aboutFoundersPresentation } from './about-founders.copy'

export default function AboutFoundersPage() {
  const copy = aboutFoundersPresentation

  return (
    <Page>
      <PageHeader category="Leadership" title={copy.pageHeader?.title} subtitle={copy.pageHeader?.subtitle} />
      <AboutLeadership copy={copy.leadership} />
      <HallOfFame copy={copy.hallOfFame} />
      <AboutCTAHub copy={copy.ctaHub} />
    </Page>
  )
}
