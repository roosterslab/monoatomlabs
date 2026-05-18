import React from 'react'

export function createProcessFlowSteps(steps, { iconSize = 24 } = {}) {
  return (steps || []).map((step) => ({
    icon: step?.icon ? React.createElement(step.icon, { size: iconSize }) : null,
    title: step?.title,
    description: step?.description,
  }))
}
