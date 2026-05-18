import React from 'react'
import { getSlotChildren } from './slots'

export const SectionKicker = ({ children }) => <>{children}</>
export const SectionTitle = ({ children }) => <>{children}</>
export const SectionSubtitle = ({ children }) => <>{children}</>
export const SectionBody = ({ children }) => <>{children}</>
export const SectionActions = ({ children }) => <>{children}</>

export function Section({ id, tone = 'light', children }) {
  const kicker = getSlotChildren(children, SectionKicker)
  const title = getSlotChildren(children, SectionTitle)
  const subtitle = getSlotChildren(children, SectionSubtitle)
  const body = getSlotChildren(children, SectionBody)
  const actions = getSlotChildren(children, SectionActions)

  const toneClass = tone === 'dark' ? 'bg-black text-white border-neutral-900' : 'bg-white text-neutral-900 border-neutral-200'
  const subtitleClass = tone === 'dark' ? 'text-neutral-400' : 'text-neutral-600'

  return (
    <section id={id} className={`py-24 px-6 border-b ${toneClass}`}>
      <div className="max-w-7xl mx-auto">
        {(kicker || title || subtitle) && (
          <div className="mb-16">
            {kicker && <div className="mb-6">{kicker}</div>}
            {title && <div className="mb-4">{title}</div>}
            {subtitle && <div className={`max-w-3xl ${subtitleClass}`}>{subtitle}</div>}
          </div>
        )}

        {body}

        {actions && <div className="mt-12">{actions}</div>}
      </div>
    </section>
  )
}
