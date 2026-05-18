import React from 'react'

import ProductOverviewTab from './tabs/ProductOverviewTab'
import ProductBenefitsRoiTab from './tabs/ProductBenefitsRoiTab'
import ProductHowItWorksTab from './tabs/ProductHowItWorksTab'
import ProductTechnicalSpecsTab from './tabs/ProductTechnicalSpecsTab'
import ProductDeepDiveTab from './tabs/ProductDeepDiveTab'

export function createProductTabs({ product, copy, howItWorksSteps, tcoAnalysisData, theme = 'light' }) {
  return [
    {
      id: 'overview',
      label: copy?.tabs?.overview,
      content: React.createElement(ProductOverviewTab, {
        sectionCopy: copy?.sections?.overview,
        fallbackContent: product?.description,
      }),
    },
    {
      id: 'benefits',
      label: copy?.tabs?.benefitsRoi,
      content: React.createElement(ProductBenefitsRoiTab, {
        sectionCopy: copy?.sections?.benefitsRoi,
        benefits: product?.benefits,
        tcoAnalysisProps: tcoAnalysisData,
        theme,
      }),
    },
    {
      id: 'howItWorks',
      label: copy?.tabs?.howItWorks,
      content: React.createElement(ProductHowItWorksTab, {
        sectionCopy: copy?.sections?.howItWorks,
        steps: howItWorksSteps,
        theme,
      }),
    },
    {
      id: 'technical',
      label: copy?.tabs?.technicalSpecs,
      content: React.createElement(ProductTechnicalSpecsTab, {
        sectionCopy: copy?.sections?.technicalSpecs,
        specifications: product?.specifications,
        tables: product?.specTables,
      }),
    },
    {
      id: 'deepDive',
      label: copy?.tabs?.deepDive,
      content: React.createElement(ProductDeepDiveTab, {
        sectionCopy: copy?.sections?.deepDive,
      }),
    },
  ]
}
