import React from 'react'

import { Page } from '../semantic'
import { PageHeader, TeamLeadership } from '@monoatom/sections'

import { teamPresentation } from './team.copy'

export default function TeamPage() {
  const copy = teamPresentation

  return (
    <Page>
      <PageHeader category="Leadership" title={copy.pageHeader.title} subtitle={copy.pageHeader.subtitle} />
      <TeamLeadership
        copy={{
          heading: 'Meet the Team',
          subheading: copy.pageHeader.subtitle,
          leaders: copy.leaders,
          composition: copy.composition,
          recognitions: copy.recognitions,
          nextSteps: copy.nextSteps,
        }}
      />
    </Page>
  )
}
