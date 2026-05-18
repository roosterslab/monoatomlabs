import React from 'react'
import Logo from './Logo'

export default function PageHeader({ product, title, pageNum, color }) {
  return (
    <div style={{
      height: 40,
      background: '#f8f9fa',
      borderBottom: '1px solid #e5e7eb',
      borderLeft: `4px solid ${color}`,
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      gap: 0,
      flexShrink: 0,
    }}>
      <span style={{
        fontFamily: 'Rajdhani, sans-serif',
        fontWeight: 700,
        fontSize: 13,
        color: color,
        letterSpacing: 2,
        textTransform: 'uppercase',
        minWidth: 120,
      }}>{product}</span>
      <div style={{ width: 1, height: 20, background: '#d1d5db', margin: '0 14px' }} />
      <span style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: 11,
        color: '#6b7280',
        letterSpacing: 2,
        textTransform: 'uppercase',
        flex: 1,
      }}>{title}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#9ca3af', letterSpacing: 1 }}>
          Page {pageNum}
        </span>
        <div style={{ width: 1, height: 16, background: '#d1d5db' }} />
        <Logo size={8} theme="light" />
      </div>
    </div>
  )
}
