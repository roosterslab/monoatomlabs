import React from 'react'

import { ProductHero, ProductTabs } from '@monoatom/ui'

import { Page } from '../../semantic'
import { createProductTabs } from './createProductTabs'

export default function ProductTabbedPage({ product, copy, howItWorksSteps, tcoAnalysisData, theme = 'light' }) {
  const tabs = createProductTabs({ product, copy, howItWorksSteps, tcoAnalysisData, theme })

  return (
    <Page>
      <ProductHero
        title={copy?.hero?.title}
        subtitle={copy?.hero?.subtitle}
        category={product?.status}
        categoryTone={copy?.hero?.categoryTone}
        images={[product?.image].filter(Boolean)}
        buttons={copy?.hero?.buttons}
        theme={theme}
      />

      <ProductTabs tabs={tabs} />
    </Page>
  )
}
