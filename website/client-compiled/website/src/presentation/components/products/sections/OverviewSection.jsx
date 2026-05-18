import React from 'react'

import SectionWrapper from './shared/SectionWrapper'

export default function OverviewSection({ title, subtitle, content, fallbackContent }) {
  return <SectionWrapper title={title} subtitle={subtitle} content={content ?? fallbackContent} />
}
