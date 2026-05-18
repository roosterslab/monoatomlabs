import React from 'react'

import HowItWorksSection from '../sections/HowItWorksSection'

export default function ProductHowItWorksTab({ sectionCopy, steps, theme = 'light' }) {
  return (
    <HowItWorksSection
      title={sectionCopy?.title}
      subtitle={sectionCopy?.subtitle}
      steps={steps}
      accentColor={sectionCopy?.accentColor}
      theme={theme}
    />
  )
}
