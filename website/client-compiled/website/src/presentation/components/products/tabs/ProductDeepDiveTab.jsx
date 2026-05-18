import React from 'react'

import DeepDiveSection from '../sections/DeepDiveSection'

export default function ProductDeepDiveTab({ sectionCopy }) {
  return <DeepDiveSection title={sectionCopy?.title} subtitle={sectionCopy?.subtitle} subsections={sectionCopy?.subsections} />
}
