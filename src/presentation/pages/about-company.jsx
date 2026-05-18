import React from 'react'

import { Page } from '../semantic'
import { PageHeader, AboutVisionMissionNorthStar, AboutDifferentiators, TrustValidation, AboutCTAHub } from '@monoatom/sections'

import { aboutCompanyPresentation } from './about-company.copy'

export default function AboutCompanyPage() {
  const copy = aboutCompanyPresentation

  return (
    <Page>
      <PageHeader category="Company" title={copy.pageHeader?.title} subtitle={copy.pageHeader?.subtitle} />
      <AboutVisionMissionNorthStar copy={copy.visionMissionNorthStar} />
      <AboutDifferentiators copy={copy.differentiators} />
      <TrustValidation copy={copy.trustValidation} />
      <AboutCTAHub copy={copy.ctaHub} />
    </Page>
  )
}
