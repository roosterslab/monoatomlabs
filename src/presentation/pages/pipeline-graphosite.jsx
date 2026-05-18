import React from 'react'

import { Page } from '../semantic'
import { ProductDetailTemplate } from '@monoatom/sections'

import { pipelineProducts } from '../../data/pipelineProducts'

export default function GraphositePipelinePage() {
  return (
    <Page>
      <ProductDetailTemplate data={pipelineProducts.graphosite} />
    </Page>
  )
}
