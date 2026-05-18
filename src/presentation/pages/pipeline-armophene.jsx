import React from 'react'

import { Page } from '../semantic'
import { ProductDetailTemplate } from '@monoatom/sections'

import { pipelineProducts } from '../../data/pipelineProducts'

export default function ArmophenePipelinePage() {
  return (
    <Page>
      <ProductDetailTemplate data={pipelineProducts.armophene} />
    </Page>
  )
}
