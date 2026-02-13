import React, { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { generateQRCodeURL } from '../utils/qrGenerator';

const CardTemplate = ({ data, side = 'front' }) => {
  const canvasRef = useRef(null);
  const qrCodeURL = generateQRCodeURL(data, { size: '300x300' });

  // Hexagon Wave Animation for Front Card
  useEffect(() => {
    if (side !== 'front' || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const width = 600;
    const height = 340;
    const scale = window.devicePixelRatio || 2;

    canvas.width = width * scale;
    canvas.height = height * scale;
    ctx.scale(scale, scale);

    const hexRadius = 24;
    const xSpacing = 52;
    const ySpacing = 46;
    const STATIC_TIME = 2800;

    const particles = [];
    const rows = Math.ceil(height / ySpacing) + 2;
    const cols = Math.ceil(width / xSpacing) + 2;

    for (let y = -1; y < rows; y++) {
      for (let x = -1; x < cols; x++) {
        let xPos = x * xSpacing;
        let yPos = y * ySpacing;
        if (y % 2 !== 0) xPos += xSpacing / 2;
        particles.push({ originX: xPos, originY: yPos, size: hexRadius });
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);

      const timeScale = STATIC_TIME * 0.0008;

      particles.forEach(p => {
        const waveX = Math.sin(p.originY * 0.008 + p.originX * 0.005 + timeScale) * 10;
        const waveY = Math.cos(p.originX * 0.005 + p.originY * 0.008 + timeScale) * 10;
        const depth = Math.sin(p.originX * 0.01 + timeScale * 1.5);
        const opacity = 0.1 + (depth + 1) * 0.15;

        const currentX = p.originX + waveX;
        const currentY = p.originY + waveY;

        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.05})`;
        ctx.lineWidth = 1.5;

        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i + (Math.PI / 6);
          const px = currentX + p.size * Math.cos(angle);
          const py = currentY + p.size * Math.sin(angle);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
      });
    };

    render();
  }, [side]);

  if (side === 'back') {
    return (
      <div style={styles.cardBack}>
        {/* Hexagon Background Pattern */}
        <div style={styles.hexBg}></div>

        {/* Black Left Sidebar */}
        <div style={styles.sideBar}></div>

        <div style={styles.contentContainer}>
          {/* Left Section - Contact Info */}
          <div style={styles.leftSection}>
            {/* Header */}
            <div style={styles.backHeader}>
              <h2 style={styles.backCompanyName}>{data.name || 'SUSHANTH PAATNAIK'}</h2>
              <p style={styles.taglineBack}>{data.title || 'CO-FOUNDER & CEO'}</p>
            </div>

            {/* Contact Grid */}
            <div style={styles.contactGrid}>
              <div style={styles.contactBlock}>
                <p style={styles.contactLabel}>Direct</p>
                <div style={styles.contactRow}>
                  <Phone size={14} style={{ color: '#000' }} />
                  <span style={styles.contactValue}>{data.phone || '+91 989 919 9809'}</span>
                </div>
              </div>

              <div style={styles.contactBlock}>
                <p style={styles.contactLabel}>Email</p>
                <div style={styles.contactRow}>
                  <Mail size={14} style={{ color: '#000' }} />
                  <span style={styles.contactValue}>{data.email || 'info@monoatomlabs.com'}</span>
                </div>
              </div>

              <div style={styles.contactBlock}>
                <p style={styles.contactLabel}>Headquarters</p>
                <div style={styles.contactRow}>
                  <MapPin size={14} style={{ color: '#000', marginTop: '2px' }} />
                  <span style={styles.contactValue}>{data.address || '3rd Floor, iHub, Ahmedabad, Gujarat'}</span>
                </div>
              </div>
            </div>

            {/* Footer - Recognition (Optional, Customizable) */}
            {data.showRecognition && (data.recognition1 || data.recognition2 || data.recognition3) && (
              <div style={styles.recognition}>
                <p style={styles.contactLabel}>Recognition</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {data.recognition1 && <span style={styles.badge}>{data.recognition1}</span>}
                  {data.recognition2 && <span style={styles.badge}>{data.recognition2}</span>}
                  {data.recognition3 && <span style={styles.badge}>{data.recognition3}</span>}
                </div>
              </div>
            )}
          </div>

          {/* Right Section - QR Code */}
          <div style={styles.rightSection}>
            {/* QR Code (Clean, No Corners) */}
            <div style={styles.qrBox}>
              <img src={qrCodeURL} alt="QR Code" style={styles.qrImageBack} crossOrigin="anonymous" />
            </div>

            <div style={styles.qrTextSection}>
              <p style={styles.scanText}>Scan to Connect</p>
              <p style={styles.sloganText}>Unlocking Trillion Dollar Economy</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // FRONT CARD
  return (
    <div className="card-front" style={styles.cardFront}>
      {/* Canvas Background */}
      <canvas ref={canvasRef} style={styles.waveCanvas}></canvas>

      {/* Gradient Overlay */}
      <div style={styles.gradientOverlay}></div>

      {/* Content Layer */}
      <div style={styles.contentLayer}>

        {/* Monoatom Logo - Top Right Corner */}
        <img
          src="/logo.svg"
          alt="Monoatom Logo"
          style={styles.logoIcon}
        />

        {/* Top Branding */}
        <div>
          <div style={styles.brandingLeft}>
            <h2 style={styles.companyTitle}>{data.company || 'MONOATOM'}</h2>
            <p style={styles.labsText}>LABS</p>
          </div>
        </div>

        {/* Bottom Identity */}
        <div style={styles.bottomIdentity}>
          <h1 style={styles.nameText}>{data.name || 'SUSHANTH PAATNAIK'}</h1>
          <div style={styles.titleRow}>
            <span style={styles.emeraldLine}></span>
            <p style={styles.titleText}>{data.title || 'CO-FOUNDER & CEO'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  // FRONT CARD STYLES
  cardFront: {
    width: '600px',
    height: '340px',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '12px',
    boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#050505',
    color: 'white',
  },
  waveCanvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    opacity: 0.6,
  },
  gradientOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top right, #000000 10%, rgba(0,0,0,0.4) 60%, transparent 100%)',
    zIndex: 1,
    pointerEvents: 'none',
  },
  contentLayer: {
    position: 'relative',
    zIndex: 10,
    height: '100%',
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  logoIcon: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    width: '160px',
    height: '160px',
    opacity: 1,
    filter: 'invert(1) brightness(0.6) saturate(0.5) hue-rotate(180deg)',
  },
  brandingLeft: {
    borderLeft: '4px solid #64748B',
    paddingLeft: '1rem',
  },
  companyTitle: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: '0.2em',
    fontSize: '1.5rem',
    lineHeight: '1',
    margin: 0,
  },
  labsText: {
    color: 'white',
    fontSize: '1rem',
    fontFamily: 'monospace',
    letterSpacing: '0.4em',
    textTransform: 'uppercase',
    marginTop: '0.5rem',
  },
  bottomIdentity: {
    marginTop: 'auto',
  },
  nameText: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    letterSpacing: 'tight',
    color: 'white',
    marginBottom: '0.5rem',
    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  emeraldLine: {
    height: '2px',
    width: '2rem',
    backgroundColor: '#64748B',
    boxShadow: '0 0 10px rgba(100,116,139,0.8)',
  },
  titleText: {
    color: '#94A3B8',
    fontFamily: 'monospace',
    fontSize: '1rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    fontWeight: '600',
  },

  // BACK CARD STYLES
  cardBack: {
    width: '600px',
    height: '340px',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '24px',
    boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    color: '#000000',
    border: '1px solid #e5e5e5',
    display: 'flex',
  },
  hexBg: {
    position: 'absolute',
    inset: '-20px',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v13.2l11 6.35 11-6.35V17.9l-11-6.35L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L10.98 40v6.35L0 40v-6.5zM14.98 0v7.5l13 7.5-13-7.5zm13 26.5l-13 7.5V49l13-7.5V26.5z' fill='%23f1f5f9' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    backgroundSize: '50px 88px',
    backgroundPosition: 'center',
    zIndex: 0,
    opacity: 0.9,
  },
  sideBar: {
    width: '12px',
    height: '100%',
    backgroundColor: '#000',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 20,
  },
  contentContainer: {
    position: 'relative',
    zIndex: 10,
    width: '100%',
    height: '100%',
    display: 'flex',
    paddingLeft: '12px',
  },
  leftSection: {
    flex: '1.6',
    padding: '2.5rem 1.5rem 2.5rem 2.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRight: '1px dashed #e5e5e5',
  },
  backHeader: {
    borderBottom: '2px solid #000',
    paddingBottom: '1rem',
    marginBottom: '0.5rem',
  },
  backCompanyName: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    letterSpacing: '0.15em',
    color: '#000',
    margin: 0,
  },
  taglineBack: {
    fontSize: '9px',
    fontWeight: 'bold',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    marginTop: '0.25rem',
  },
  contactGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  contactBlock: {
    display: 'flex',
    flexDirection: 'column',
  },
  contactLabel: {
    fontSize: '8px',
    fontWeight: 'bold',
    color: '#9ca3af',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '0.125rem',
  },
  contactRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  contactValue: {
    fontSize: '0.75rem',
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'monospace',
  },
  recognition: {
    marginTop: 'auto',
    paddingTop: '1rem',
  },
  badge: {
    fontSize: '9px',
    fontWeight: '600',
    backgroundColor: '#f3f4f6',
    padding: '0.25rem 0.5rem',
    border: '1px solid #e5e7eb',
    color: '#000',
  },
  rightSection: {
    flex: '0.9',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255,255,255,0.5)',
  },
  qrBox: {
    width: '176px',
    height: '176px',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.15)',
  },
  qrImageBack: {
    width: '160px',
    height: '160px',
    objectFit: 'contain',
  },
  qrTextSection: {
    textAlign: 'center',
    marginTop: '0.75rem',
  },
  scanText: {
    fontSize: '8px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: '#9ca3af',
    marginBottom: '0.25rem',
  },
  sloganText: {
    fontSize: '10px',
    fontWeight: 'bold',
    color: '#000',
    lineHeight: '1.3',
    maxWidth: '150px',
    margin: '0 auto',
  },
};

export default CardTemplate;
