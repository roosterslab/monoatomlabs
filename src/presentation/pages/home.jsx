import React, { lazy, Suspense } from 'react'

import {
  Page,
  Hero,
  Eyebrow,
  Heading,
  Highlight,
  Lead,
  HeroActions,
  StatGrid,
  ActionGroup,
  PrimaryButton,
  SecondaryButton,
  Stat,
} from '../semantic'

import { Industry40Enabler } from '@monoatom/sections'
import { homePresentation } from './home.copy'

const LabToScale = lazy(() => import('@monoatom/sections').then((m) => ({ default: m.LabToScale })))
const ProductsSection = lazy(() => import('@monoatom/sections').then((m) => ({ default: m.ProductsSection })))
const LabToManufacturing = lazy(() => import('@monoatom/sections').then((m) => ({ default: m.LabToManufacturing })))
const CustomerJourney = lazy(() => import('@monoatom/sections').then((m) => ({ default: m.CustomerJourney })))
const FAQSection = lazy(() => import('@monoatom/sections').then((m) => ({ default: m.FAQSection })))

const SectionLoader = () => <div style={{ height: 80 }} />

export default function HomePresentationPage() {
  const copy = homePresentation
  const hero = copy.hero

  return (
    <Page>
      <Hero>
        <Eyebrow>{hero.badge}</Eyebrow>
        <Heading>
          {hero.headingLine1} <Highlight>{hero.headingHighlight}</Highlight>
        </Heading>
        <Lead>{hero.tagline}</Lead>

        <HeroActions>
          <ActionGroup>
            <PrimaryButton to={hero.ctaPrimary?.to}>{hero.ctaPrimary?.label}</PrimaryButton>
            <SecondaryButton to={hero.ctaSecondary?.to}>{hero.ctaSecondary?.label}</SecondaryButton>
          </ActionGroup>
        </HeroActions>

        <StatGrid>
          <Stat value={hero.stats?.innovation?.value} label={hero.stats?.innovation?.label} />
          <Stat value={hero.stats?.commercial?.value} label={hero.stats?.commercial?.label} />
          <Stat value={hero.stats?.facilities?.value} label={hero.stats?.facilities?.label} />
          <Stat value={hero.stats?.pilot?.value} label={hero.stats?.pilot?.label} />
        </StatGrid>
      </Hero>

      <Industry40Enabler copy={copy.industry40Enabler} />

      <Suspense fallback={<SectionLoader />}>
        <LabToScale copy={copy.labToScale} />
        <ProductsSection copy={copy.productsSection} />
        <LabToManufacturing copy={copy.labToManufacturing} />
        <CustomerJourney copy={copy.customerJourney} />
        <FAQSection copy={copy.faqSection} />
      </Suspense>
    </Page>
  )
}
