import React from 'react'

export default function PageFooter({ color, dark = false }) {
  if (dark) {
    return (
      <div style={{
        height: 28,
        background: '#0f172a',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        flexShrink: 0,
      }}>
        <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: 2 }}>
          MONOATOM LABS
        </span>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {color && <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, display: 'inline-block' }} />}
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.3)', letterSpacing: 1 }}>
            www.monoatomlabs.com &nbsp;|&nbsp; Confidential
          </span>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      height: 28,
      background: '#f8f9fa',
      borderTop: '1px solid #e5e7eb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      flexShrink: 0,
    }}>
      <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 11, color: '#9ca3af', letterSpacing: 2 }}>
        MONOATOM LABS
      </span>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        {color && <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, display: 'inline-block' }} />}
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#9ca3af', letterSpacing: 1 }}>
          www.monoatomlabs.com &nbsp;|&nbsp; Confidential
        </span>
      </div>
    </div>
  )
}
