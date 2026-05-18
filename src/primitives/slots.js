import React from 'react'

export function isElement(node) {
  return Boolean(node) && typeof node === 'object' && 'type' in node
}

export function isElementOfType(node, type) {
  return isElement(node) && node.type === type
}

export function findFirstSlot(children, SlotType) {
  let slot = null
  React.Children.forEach(children, (child) => {
    if (!slot && isElementOfType(child, SlotType)) slot = child
  })
  return slot
}

export function getSlotChildren(children, SlotType) {
  const slot = findFirstSlot(children, SlotType)
  return slot ? slot.props.children : null
}

export function getSlotProps(children, SlotType) {
  const slot = findFirstSlot(children, SlotType)
  return slot ? slot.props : null
}

export function getAllChildrenExcludingSlots(children, SlotTypes) {
  const types = new Set(SlotTypes)
  const out = []
  React.Children.forEach(children, (child) => {
    if (isElement(child) && types.has(child.type)) return
    out.push(child)
  })
  return out
}
