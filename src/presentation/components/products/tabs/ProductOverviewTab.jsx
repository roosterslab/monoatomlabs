import React from 'react'

import OverviewSection from '../sections/OverviewSection'

export default function ProductOverviewTab({ sectionCopy, fallbackContent }) {
  return (
    <OverviewSection
      title={sectionCopy?.title}
      subtitle={sectionCopy?.subtitle}
      content={sectionCopy?.content}
      fallbackContent={fallbackContent}
    />
  )
}
