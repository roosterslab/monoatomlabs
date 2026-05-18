import React from 'react'

import ProductTabbedPage from '../components/products/ProductTabbedPage'

import { products } from '../../data/content'
import { productGraphacretePresentation } from './product-graphacrete.copy'
import { howItWorksSteps, tcoAnalysisData } from '../../data/graphacreteData'

export default function GraphacreteProductPage() {
  const product = products.graphacrete
  const copy = productGraphacretePresentation

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
