import React from 'react'

import { Page } from '../semantic'
import { PageHeader, ProductsSection } from '@monoatom/sections'

import { productsOverviewPresentation } from './products-overview.copy'

export default function ProductsOverviewPage() {
  const copy = productsOverviewPresentation

  return (
    <Page>
      <PageHeader category="Products" title={copy.pageHeader?.title} subtitle={copy.pageHeader?.subtitle} />
      <ProductsSection copy={copy.productsSection} />
    </Page>
  )
}
