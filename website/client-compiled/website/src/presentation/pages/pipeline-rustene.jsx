import React from 'react'

import { Page } from '../semantic'
import { ProductDetailTemplate } from '@monoatom/sections'

import { pipelineProducts } from '../../data/pipelineProducts'

export default function RustenePipelinePage() {
  return (
    <Page>
      <ProductDetailTemplate data={pipelineProducts.rustene} />
    </Page>
  )
}
