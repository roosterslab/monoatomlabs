import React from 'react'

import { Page } from '../semantic'
import {
  PageHeader,
  AboutKeyMetricsStrip,
  AboutVisionMissionNorthStar,
  AboutDifferentiators,
  AboutLeadership,
  TrustValidation,
  HallOfFame,
  AboutCTAHub,
  TechnologyCapabilities,
  PartnershipModels,
} from '@monoatom/sections'

import { aboutPresentation } from './about.copy'

export default function AboutPage() {
  const copy = aboutPresentation

  return (
    <Page>
      <PageHeader category="Company" title={copy.pageHeader?.title} subtitle={copy.pageHeader?.subtitle} />
      <AboutKeyMetricsStrip copy={copy.keyMetricsStrip} />
      <AboutVisionMissionNorthStar copy={copy.visionMissionNorthStar} />
      <AboutDifferentiators copy={copy.differentiators} />
      <AboutLeadership copy={copy.leadership} />
      <TrustValidation copy={copy.trustValidation} />
      <TechnologyCapabilities copy={copy.technologyCapabilities} />
      <PartnershipModels copy={copy.partnershipModels} />
      <HallOfFame copy={copy.hallOfFame} />
      <AboutCTAHub copy={copy.ctaHub} />
    </Page>
  )
}
