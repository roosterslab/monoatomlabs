import React from 'react'

import ProductTabbedPage from '../components/products/ProductTabbedPage'

import { products } from '../../data/content'
import { productGraffisolPresentation } from './product-graffisol.copy'
import { howItWorksSteps, tcoAnalysisData } from '../../data/graffisolData'

export default function GraffisolProductPage() {
  const product = products.graffisol
  const copy = productGraffisolPresentation

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
