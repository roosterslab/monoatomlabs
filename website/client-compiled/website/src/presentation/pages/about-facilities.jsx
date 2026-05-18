import React from 'react'

import { Page } from '../semantic'
import { PageHeader, AboutFacilities, TrustValidation, AboutCTAHub } from '@monoatom/sections'

import { aboutFacilitiesPresentation } from './about-facilities.copy'

export default function AboutFacilitiesPage() {
  const copy = aboutFacilitiesPresentation

  return (
    <Page>
      <PageHeader category="Infrastructure" title={copy.pageHeader?.title} subtitle={copy.pageHeader?.subtitle} />
      <AboutFacilities copy={copy.facilities} />
      <TrustValidation copy={copy.trustValidation} />
      <AboutCTAHub copy={copy.ctaHub} />
    </Page>
  )
}
