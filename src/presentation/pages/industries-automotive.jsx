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

import { industriesAutomotivePresentation } from './industries-automotive'

export default function IndustriesAutomotivePage() {
  const copy = industriesAutomotivePresentation

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

            <Card
              theme="dark"
              header={copy.sections?.featuredProduct?.heading}
              hoverable
              link="/products/graffisol"
            >
              <Card.Title theme="dark">{copy.sections?.featuredProduct?.name}</Card.Title>
              <div style={{ height: 8 }} />
              <Card.Description theme="dark">{copy.sections?.featuredProduct?.body}</Card.Description>
              <div style={{ height: 12 }} />
              <Card.Description theme="dark">{copy.sections?.featuredProduct?.ctaLabel}</Card.Description>
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
