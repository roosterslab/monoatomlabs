import React from 'react'

import {
  Page,
  Section,
  SectionTitle,
  SectionSubtitle,
  SectionBody,
  SectionActions,
  ActionGroup,
  PrimaryButton,
  SecondaryButton,
} from '../semantic'
import { PageHeader } from '@monoatom/sections'
import { Card } from '@monoatom/ui'

import { technologyPilotProjectsPresentation } from './technology-pilot-projects'

export default function TechnologyPilotProjectsPage() {
  const copy = technologyPilotProjectsPresentation

  return (
    <Page>
      <PageHeader category="Technology" title={copy.hero?.title} subtitle={copy.hero?.subtitle} />

      <Section tone="dark">
        <SectionTitle>{copy.sections?.active?.heading}</SectionTitle>
        <SectionSubtitle>{copy.intro?.body}</SectionSubtitle>
        <SectionBody>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {(copy.projects ?? []).map((proj) => (
              <Card key={proj.title} theme="dark" header={proj.title}>
                <Card.Description theme="dark">{proj.description}</Card.Description>
                <div style={{ height: 12 }} />
                <Card.Description theme="dark">Status: {proj.status}</Card.Description>
              </Card>
            ))}
          </div>
        </SectionBody>
        <SectionActions>
          <ActionGroup>
            <PrimaryButton to="/partnership">{copy.sections?.cta?.buttonLabel ?? 'Explore Partnerships'}</PrimaryButton>
            <SecondaryButton to="/contact">Contact Us</SecondaryButton>
          </ActionGroup>
        </SectionActions>
      </Section>
    </Page>
  )
}
