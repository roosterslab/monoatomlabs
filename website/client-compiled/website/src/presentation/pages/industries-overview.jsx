import React from 'react'

import { Page, Section, SectionTitle, SectionSubtitle, SectionBody } from '../semantic'
import { PageHeader } from '@monoatom/sections'
import { Card } from '@monoatom/ui'

import { industriesOverviewPresentation } from './industries-overview'

const industryLinks = [
  {
    title: 'Construction',
    subtitle: 'High-performance concrete and durable materials for sustainable construction.',
    to: '/industries/construction',
  },
  {
    title: 'Solar Energy',
    subtitle: 'Next-generation coatings and materials for higher efficiency and durability.',
    to: '/industries/solar-energy',
  },
  {
    title: 'Automotive',
    subtitle: 'Coatings, additives, and materials engineered for performance and reliability.',
    to: '/industries/automotive',
  },
  {
    title: 'Advanced Materials',
    subtitle: 'Breakthrough materials for aerospace, defense, and specialized applications.',
    to: '/industries/advanced-materials',
  },
]

export default function IndustriesOverviewPage() {
  const copy = industriesOverviewPresentation

  return (
    <Page>
      <PageHeader category="Industries" title={copy.hero?.title} subtitle={copy.hero?.subtitle} />

      <Section tone="dark">
        <SectionTitle>Explore Industry Applications</SectionTitle>
        <SectionSubtitle>
          Select an industry to see where our graphene-enabled solutions deliver measurable performance gains.
        </SectionSubtitle>
        <SectionBody>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {industryLinks.map((item) => (
              <Card key={item.to} theme="dark" variant="default" hoverable link={item.to} header={item.title}>
                <Card.Description theme="dark">{item.subtitle}</Card.Description>
              </Card>
            ))}
          </div>
        </SectionBody>
      </Section>
    </Page>
  )
}
