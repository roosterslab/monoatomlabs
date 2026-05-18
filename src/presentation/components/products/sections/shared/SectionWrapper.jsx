import React from 'react'

import { ContentSection } from '@monoatom/sections'

export default function SectionWrapper({ title, subtitle, content, subsections, children }) {
  return (
    <ContentSection title={title} subtitle={subtitle} content={content} subsections={subsections}>
      {children}
    </ContentSection>
  )
}
