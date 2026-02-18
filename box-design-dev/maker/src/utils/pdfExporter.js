import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

// ─── Source PDF exact dimensions (inches) ──────────────────────────────────
const DIM = {
  wrap: { w: 15.567, h: 6.65  },
  back: { w: 15.567, h: 6.65  },
  flap: { w: 5.2,    h: 2.13  },  // each individual flap
  qr:   { w: 6.303,  h: 5.123 },
}

// Layout constants (inches)
const MARGIN  = 0.87   // page margin all sides
const GAP     = 0.38   // vertical gap between sections
const LABEL_H = 0.26   // height reserved for a dimension label row
const FLAP_GAP = 0.25  // horizontal gap between the two flap panels

// Derived page width — same for both pages so they are identical width
const PAGE_W = MARGIN + DIM.wrap.w + MARGIN  // 17.307"

// ─── Helpers ───────────────────────────────────────────────────────────────

async function waitForResources() {
  await document.fonts.ready
  const imgs = Array.from(document.images)
  await Promise.all(
    imgs.map(img =>
      img.complete
        ? Promise.resolve()
        : new Promise(res => { img.onload = res; img.onerror = res })
    )
  )
  await new Promise(res => setTimeout(res, 400))
}

/**
 * Capture a DOM element as a data URL.
 * pixelRatio=3 gives ~288 dpi at 96-dpi screen rendering.
 */
async function captureElement(id, pixelRatio = 3) {
  const el = document.getElementById(id)
  if (!el) throw new Error(`Export element #${id} not found in DOM`)
  const canvas = await html2canvas(el, {
    scale: pixelRatio,
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#0c0c0c',
    logging: false,
    imageTimeout: 12000,
  })
  return canvas.toDataURL('image/png')
}

// ─── Single panel exports ──────────────────────────────────────────────────

export async function exportPanelAsPNG(elementId, filename, pixelRatio = 4) {
  const el = document.getElementById(elementId)
  if (!el) throw new Error(`#${elementId} not found`)
  await waitForResources()
  const canvas = await html2canvas(el, {
    scale: pixelRatio,
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#0c0c0c',
    logging: false,
  })
  const link = document.createElement('a')
  link.download = filename || 'panel.png'
  link.href = canvas.toDataURL('image/png')
  link.click()
}

export async function exportPanelAsPDF(elementId, panelId, filename) {
  const el = document.getElementById(elementId)
  if (!el) throw new Error(`#${elementId} not found`)

  const dimMap = { wrap: DIM.wrap, back: DIM.back, flaps: { w: DIM.flap.w * 2 + FLAP_GAP, h: DIM.flap.h }, qr: DIM.qr }
  const { w: pW, h: pH } = dimMap[panelId] || DIM.wrap

  await waitForResources()
  const canvas = await html2canvas(el, { scale: 3, useCORS: true, allowTaint: true, backgroundColor: '#0c0c0c', logging: false })
  const pdf = new jsPDF({ orientation: pW > pH ? 'landscape' : 'portrait', unit: 'in', format: [pW, pH] })
  pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, pW, pH)
  pdf.save(filename || `${panelId}-panel.pdf`)
}

// ─── Export All — exact source PDF layout ──────────────────────────────────

/**
 * Generates a 2-page PDF that exactly matches the source PDF layout:
 *
 * PAGE 1 (identical page width as page 2):
 *   [label: 15.567" x 6.65"]
 *   [Wrap panel  — exactly 15.567" × 6.65"]
 *   [label: 5.2" X 2.13"]
 *   [Contents flap 5.2"×2.13"] [gap] [Logo flap 5.2"×2.13"]
 *
 * PAGE 2:
 *   [Back panel  — exactly 15.567" × 6.65"]
 *   [label: 15.567" x 6.65" (left)]   [label: 6.303"X5.123" (right)]
 *                                      [QR panel — 6.303" × 5.123" (right)]
 *
 * All panel images are embedded at their exact labeled inch dimensions
 * so render sizes are consistent regardless of the source pixel count.
 */
export async function exportAllPanelsAsSourcePDF() {
  await waitForResources()

  // Capture all panels individually at 3× (288 dpi)
  const [imgWrap, imgBack, imgFlapC, imgFlapL, imgQR] = await Promise.all([
    captureElement('export-wrap-panel'),
    captureElement('export-back-panel'),
    captureElement('export-flap-contents'),
    captureElement('export-flap-logo'),
    captureElement('export-qr-panel'),
  ])

  // ── Page 1 height ──────────────────────────────────────────────────────
  //   margin + label + gap + wrap.h + gap + label + gap + flap.h + margin
  const P1_H =
    MARGIN +
    LABEL_H + GAP * 0.4 +
    DIM.wrap.h +
    GAP +
    LABEL_H + GAP * 0.4 +
    DIM.flap.h +
    MARGIN

  // ── Page 2 height ──────────────────────────────────────────────────────
  //   margin + back.h + gap + label row + gap + qr.h + margin
  const P2_H =
    MARGIN +
    DIM.back.h +
    GAP +
    LABEL_H + GAP * 0.4 +
    DIM.qr.h +
    MARGIN

  // Label style helper
  const label = (pdf, text, x, y, align = 'left') => {
    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(13)
    pdf.setTextColor(20, 20, 20)
    pdf.text(text, x, y, { align })
  }

  // ── Build Page 1 ───────────────────────────────────────────────────────
  const pdf = new jsPDF({
    orientation: PAGE_W > P1_H ? 'landscape' : 'portrait',
    unit: 'in',
    format: [PAGE_W, P1_H],
  })

  let y = MARGIN

  // Dimension label — centered
  label(pdf, '15.567" x 6.65"', PAGE_W / 2, y + LABEL_H * 0.75, 'center')
  y += LABEL_H + GAP * 0.4

  // Wrap panel at exact dimensions
  pdf.addImage(imgWrap, 'PNG', MARGIN, y, DIM.wrap.w, DIM.wrap.h)
  y += DIM.wrap.h + GAP

  // Flap dimension label
  label(pdf, '5.2" X 2.13"', MARGIN, y + LABEL_H * 0.75)
  y += LABEL_H + GAP * 0.4

  // Two flap panels side-by-side at exact dimensions
  pdf.addImage(imgFlapC, 'PNG', MARGIN, y, DIM.flap.w, DIM.flap.h)
  pdf.addImage(imgFlapL, 'PNG', MARGIN + DIM.flap.w + FLAP_GAP, y, DIM.flap.w, DIM.flap.h)

  // ── Build Page 2 ───────────────────────────────────────────────────────
  pdf.addPage(
    [PAGE_W, P2_H],
    PAGE_W > P2_H ? 'landscape' : 'portrait'
  )

  y = MARGIN

  // Back panel at exact dimensions
  pdf.addImage(imgBack, 'PNG', MARGIN, y, DIM.back.w, DIM.back.h)
  y += DIM.back.h + GAP

  // Bottom-left: back panel dimension label
  label(pdf, '15.567" x 6.65"', MARGIN, y + LABEL_H * 0.75)

  // Bottom-right: QR label + QR panel
  const qrX = PAGE_W - MARGIN - DIM.qr.w
  label(pdf, '6.303"X5.123"', qrX, y + LABEL_H * 0.75)
  y += LABEL_H + GAP * 0.4
  pdf.addImage(imgQR, 'PNG', qrX, y, DIM.qr.w, DIM.qr.h)

  pdf.save('graphene-box-design.pdf')
}
