import React from 'react'
import StatCard from '../components/ui/StatCard'

export const StatsGrid = ({ children }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-800 pt-8">
    {children}
  </div>
)

export const Stat = ({ value, label, tone = 'dark' }) => (
  <StatCard value={value} label={label} theme={tone} />
)
