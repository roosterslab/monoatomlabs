import React from 'react'

import { Page } from '../semantic'
import { ProductDetailTemplate } from '@monoatom/sections'

import { pipelineProducts } from '../../data/pipelineProducts'

export default function GraphenodePipelinePage() {
  return (
    <Page>
      <ProductDetailTemplate data={pipelineProducts.graphenode} />
    </Page>
  )
}
