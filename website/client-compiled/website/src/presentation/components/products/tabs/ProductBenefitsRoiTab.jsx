import React from 'react'

import BenefitsSection from '../sections/BenefitsSection'
import RoiSection from '../sections/RoiSection'

export default function ProductBenefitsRoiTab({ sectionCopy, benefits, tcoAnalysisProps, theme = 'light' }) {
  return (
    <>
      <BenefitsSection
        title={sectionCopy?.benefitsTitle}
        subtitle={sectionCopy?.benefitsSubtitle}
        benefits={benefits}
      />

      <RoiSection
        title={sectionCopy?.roiTitle}
        subtitle={sectionCopy?.roiSubtitle}
        tcoAnalysisProps={tcoAnalysisProps}
        tcoCopy={sectionCopy?.tcoCopy}
        theme={theme}
      />
    </>
  )
}
