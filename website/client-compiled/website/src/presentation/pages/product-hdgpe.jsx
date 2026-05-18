import React from 'react'

import ProductTabbedPage from '../components/products/ProductTabbedPage'

import { products } from '../../data/content'
import { howItWorksSteps, tcoAnalysisData } from '../../data/hdgpeData'
import { productHDGPEPresentation } from './product-hdgpe.copy'

export default function HDGPEProductPage() {
  const product = products.hdgpe
  const copy = productHDGPEPresentation

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
