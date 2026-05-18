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

import { technologyCapabilitiesPresentation } from './technology-capabilities'

export default function TechnologyCapabilitiesPage() {
  const copy = technologyCapabilitiesPresentation

  return (
    <Page>
      <PageHeader category="Technology" title={copy.hero?.title} subtitle={copy.hero?.subtitle} />

      <Section tone="dark">
        <SectionTitle>{copy.sections?.research?.heading}</SectionTitle>
        <SectionBody>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {(copy.sections?.research?.areas ?? []).map((area) => (
              <Card key={area.title} theme="dark" header={area.title}>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {(area.bullets ?? []).map((bullet) => (
                    <li key={bullet}>
                      <Card.Description theme="dark">{bullet.replace(/^•\s*/, '')}</Card.Description>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </SectionBody>
      </Section>

      <Section tone="dark">
        <SectionTitle>{copy.sections?.partnership?.heading}</SectionTitle>
        <SectionSubtitle>{copy.sections?.partnership?.intro}</SectionSubtitle>
        <SectionBody>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {(copy.sections?.partnership?.partners ?? []).map((p) => (
              <Card key={p.name} theme="dark" header={p.name}>
                <Card.Description theme="dark">{p.label}</Card.Description>
              </Card>
            ))}
          </div>
        </SectionBody>
        <SectionActions>
          <ActionGroup>
            <PrimaryButton to="/contact">Contact Us</PrimaryButton>
            <SecondaryButton to="/partnership">Partnership Opportunities</SecondaryButton>
          </ActionGroup>
        </SectionActions>
      </Section>
    </Page>
  )
}
