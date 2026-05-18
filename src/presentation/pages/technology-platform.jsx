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

import { technologyPlatformPresentation } from './technology-platform'

export default function TechnologyPlatformPage() {
  const copy = technologyPlatformPresentation

  return (
    <Page>
      <PageHeader category="Technology" title={copy.hero?.title} subtitle={copy.hero?.subtitle} />

      <Section tone="dark">
        <SectionTitle>{copy.sections?.platform?.heading}</SectionTitle>
        <SectionSubtitle>{copy.sections?.platform?.body}</SectionSubtitle>

        <SectionBody>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {(copy.sections?.capabilities?.items ?? []).map((cap) => (
              <Card key={cap.title} theme="dark" header={cap.title}>
                <Card.Description theme="dark">{cap.body}</Card.Description>
              </Card>
            ))}
          </div>
        </SectionBody>

        <SectionActions>
          <ActionGroup>
            <PrimaryButton to="/technology/capabilities">View Capabilities</PrimaryButton>
            <SecondaryButton to="/technology/pilot-projects">Pilot Projects</SecondaryButton>
          </ActionGroup>
        </SectionActions>
      </Section>

      <Section tone="dark">
        <SectionTitle>{copy.sections?.process?.heading}</SectionTitle>
        <SectionBody>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {(copy.sections?.process?.steps ?? []).map((step) => (
              <Card key={step.title} theme="dark" header={step.title}>
                <Card.Description theme="dark">{step.body}</Card.Description>
              </Card>
            ))}
          </div>
        </SectionBody>
        <SectionActions>
          <ActionGroup>
            <PrimaryButton to="/products">Explore Products</PrimaryButton>
            <SecondaryButton to="/partnership">{copy.sections?.learnMore?.partnershipLinkLabel ?? 'Partnership'}</SecondaryButton>
          </ActionGroup>
        </SectionActions>
      </Section>
    </Page>
  )
}
