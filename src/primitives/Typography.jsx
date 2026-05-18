import React from 'react'

export const Kicker = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200 border border-neutral-300 text-neutral-600 text-xs font-mono font-medium tracking-wider uppercase">
    {children}
  </div>
)

export const DisplayTitle = ({ as: Tag = 'h2', children }) => (
  <Tag className="text-4xl md:text-6xl font-display font-medium leading-tight tracking-tight text-neutral-900">
    {children}
  </Tag>
)

export const PageTitle = ({ as: Tag = 'h1', children }) => (
  <Tag className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white tracking-tighter leading-tight drop-shadow-xl">
    {children}
  </Tag>
)

export const Paragraph = ({ children }) => (
  <p className="text-lg text-neutral-600 leading-relaxed font-light">{children}</p>
)

export const Muted = ({ children }) => (
  <span className="text-neutral-400">{children}</span>
)

export const Emphasis = ({ children }) => (
  <span className="text-neutral-900 font-medium">{children}</span>
)

export const GradientAccent = ({ children }) => (
  <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600">
    {children}
  </span>
)
