import React from 'react'

import TechnicalSpecsSection from '../sections/TechnicalSpecsSection'

export default function ProductTechnicalSpecsTab({ sectionCopy, specifications, tables }) {
  return (
    <TechnicalSpecsSection
      title={sectionCopy?.title}
      subtitle={sectionCopy?.subtitle}
      specifications={specifications}
      tables={tables}
    />
  )
}
