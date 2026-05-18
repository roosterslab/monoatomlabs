import React from 'react'

import { Page } from '../semantic'
import { ProductDetailTemplate } from '@monoatom/sections'

import { pipelineProducts } from '../../data/pipelineProducts'

export default function ThermaphenePipelinePage() {
  return (
    <Page>
      <ProductDetailTemplate data={pipelineProducts.thermaphene} />
    </Page>
  )
}
