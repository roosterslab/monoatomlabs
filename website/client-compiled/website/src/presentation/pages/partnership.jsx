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

import { partnership } from '../../data/content'

export default function PartnershipPage() {
  return (
    <Page>
      <PageHeader
        category="Partnership"
        title="Partnership Opportunities"
        subtitle="Explore flexible collaboration models to accelerate commercialization and maximize value."
      />

      <Section tone="dark">
        <SectionTitle>Partnership Models</SectionTitle>
        <SectionSubtitle>Choose a structure that fits your objectives—licensing, joint ventures, manufacturing, or co-development.</SectionSubtitle>
        <SectionBody>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {(partnership?.models ?? []).map((model) => (
              <Card key={model.name} theme="dark" header={model.name}>
                <Card.Description theme="dark">{model.description}</Card.Description>
                <div style={{ height: 12 }} />
                <Card.Title theme="dark">Benefits</Card.Title>
                <div style={{ height: 8 }} />
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {(model.benefits ?? []).map((b) => (
                    <li key={b}>
                      <Card.Description theme="dark">{b}</Card.Description>
                    </li>
                  ))}
                </ul>
                {model.suitableFor && (
                  <>
                    <div style={{ height: 12 }} />
                    <Card.Description theme="dark">Suitable for: {model.suitableFor}</Card.Description>
                  </>
                )}
              </Card>
            ))}
          </div>
        </SectionBody>
        <SectionActions>
          <ActionGroup>
            <PrimaryButton to="/contact">Start a Conversation</PrimaryButton>
            <SecondaryButton to="/technology/platform">Explore Our Technology</SecondaryButton>
          </ActionGroup>
        </SectionActions>
      </Section>
    </Page>
  )
}
