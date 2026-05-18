import React from 'react'

import ProductTabbedPage from '../components/products/ProductTabbedPage'

import { products } from '../../data/content'
import { productCeraphenePresentation } from './product-ceraphene.copy'
import { howItWorksSteps, tcoAnalysisData } from '../../data/cerapheneData'

export default function CerapheneProductPage() {
  const product = products.ceraphene
  const copy = productCeraphenePresentation

  return (
    <ProductTabbedPage
      product={product}
      copy={copy}
      howItWorksSteps={howItWorksSteps}
      tcoAnalysisData={tcoAnalysisData}
      theme="light"
    />
  )
}
