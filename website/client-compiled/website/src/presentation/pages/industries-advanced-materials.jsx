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

import { industriesAdvancedMaterialsPresentation } from './industries-advanced-materials'

export default function IndustriesAdvancedMaterialsPage() {
  const copy = industriesAdvancedMaterialsPresentation

  return (
    <Page>
      <PageHeader category="Industries" title={copy.hero?.title} subtitle={copy.hero?.subtitle} />

      <Section tone="dark">
        <SectionTitle>{copy.sections?.solutions?.heading}</SectionTitle>
        <SectionSubtitle>{copy.sections?.solutions?.body}</SectionSubtitle>
        <SectionBody>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            <Card theme="dark" header={copy.sections?.applications?.heading}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                {(copy.sections?.applications?.items ?? []).map((item) => (
                  <li key={item}>
                    <Card.Description theme="dark">{item}</Card.Description>
                  </li>
                ))}
              </ul>
            </Card>

            <Card theme="dark" header={copy.sections?.pipelineProducts?.heading}>
              <div style={{ display: 'grid', gap: 12 }}>
                <Card theme="dark" variant="bordered" hoverable link="/products/pipeline/graphosite" header={copy.sections?.pipelineProducts?.graphosite?.name}>
                  <Card.Description theme="dark">{copy.sections?.pipelineProducts?.graphosite?.body}</Card.Description>
                </Card>
                <Card theme="dark" variant="bordered" hoverable link="/products/pipeline/armophene" header={copy.sections?.pipelineProducts?.armophene?.name}>
                  <Card.Description theme="dark">{copy.sections?.pipelineProducts?.armophene?.body}</Card.Description>
                </Card>
              </div>
            </Card>
          </div>
        </SectionBody>
        <SectionActions>
          <ActionGroup>
            <PrimaryButton to="/products">Explore Products</PrimaryButton>
            <SecondaryButton to="/contact">Contact Us</SecondaryButton>
          </ActionGroup>
        </SectionActions>
      </Section>
    </Page>
  )
}
