import React from 'react'

import { Page } from '../semantic'
import { PageHeader, InnovationPipeline } from '@monoatom/sections'

import { pipelineOverviewPresentation } from './pipeline-overview.copy'

export default function PipelineOverviewPage() {
  const copy = pipelineOverviewPresentation

  return (
    <Page>
      <PageHeader category="Pipeline" title={copy.pageHeader?.title} subtitle={copy.pageHeader?.subtitle} />
      <InnovationPipeline copy={copy.innovationPipeline} />
    </Page>
  )
}
