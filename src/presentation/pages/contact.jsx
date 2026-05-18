import React from 'react'

import { Page } from '../semantic'
import { ContactPageTemplate } from '@monoatom/sections'

import { companyInfo } from '../../data/content'
import { contactPresentation } from './contact.copy'

export default function ContactPage() {
  return (
    <Page>
      <ContactPageTemplate copy={contactPresentation} contact={companyInfo.contact} />
    </Page>
  )
}
