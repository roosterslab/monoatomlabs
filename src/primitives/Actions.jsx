import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Button from '../components/ui/Button'

export const ActionGroup = ({ children }) => (
  <div className="flex flex-col sm:flex-row gap-4">{children}</div>
)

export const PrimaryAction = ({ to, children }) => (
  <Link to={to}>
    <Button variant="primary" theme="dark" icon={ArrowRight}>
      {children}
    </Button>
  </Link>
)

export const SecondaryAction = ({ to, children }) => (
  <Link to={to}>
    <Button variant="secondary" theme="dark">
      {children}
    </Button>
  </Link>
)
