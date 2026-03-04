import React from 'react'
import { Award } from 'lucide-react'

const QCSeal = ({ size, color = '#64748B' }) => (
    <div style={{ width: size, height: size, borderRadius: '50%', border: `1px solid ${color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 4, position: 'relative', boxShadow: `0 0 10px ${color}40` }}>
        <div style={{ position: 'absolute', inset: 2, borderRadius: '50%', border: '1px dashed rgba(255,255,255,0.3)' }} />
        <div style={{ textAlign: 'center' }}>
            <Award size={size * 0.3} color={color} style={{ margin: '0 auto 2px' }} />
            <div style={{ color: 'white', fontSize: size * 0.12, fontWeight: 700, letterSpacing: '0.05em' }}>VERIFIED</div>
        </div>
    </div>
)

export default QCSeal
