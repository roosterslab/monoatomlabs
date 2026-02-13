import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

/**
 * Export visiting card as print-ready PDF
 * @param {HTMLElement} frontElement - Front card DOM element
 * @param {HTMLElement} backElement - Back card DOM element
 * @param {Object} data - Contact data for filename
 * @returns {Promise<void>}
 */
export async function exportCardAsPDF(frontElement, backElement, data) {
  try {
    // Standard business card size: 3.5" × 2"
    const cardWidth = 3.5;
    const cardHeight = 2;

    // Create PDF in landscape orientation
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'in',
      format: [cardWidth, cardHeight],
      compress: true
    });

    // Capture front card as high-resolution canvas (300 DPI for print quality)
    const frontCanvas = await html2canvas(frontElement, {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false,
      width: frontElement.offsetWidth,
      height: frontElement.offsetHeight
    });

    // Add front card to PDF (page 1)
    const frontImg = frontCanvas.toDataURL('image/png', 1.0);
    pdf.addImage(frontImg, 'PNG', 0, 0, cardWidth, cardHeight, '', 'FAST');

    // Capture back card
    const backCanvas = await html2canvas(backElement, {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false,
      width: backElement.offsetWidth,
      height: backElement.offsetHeight
    });

    // Add back card to PDF (page 2)
    pdf.addPage();
    const backImg = backCanvas.toDataURL('image/png', 1.0);
    pdf.addImage(backImg, 'PNG', 0, 0, cardWidth, cardHeight, '', 'FAST');

    // Generate filename from contact name
    const filename = `${data.name.replace(/\s+/g, '-') || 'business-card'}.pdf`;
    pdf.save(filename);

    return { success: true };
  } catch (error) {
    console.error('PDF export failed:', error);
    throw new Error('Failed to generate PDF. Please try again.');
  }
}

/**
 * Export single card side as PNG image
 * @param {HTMLElement} cardElement - Card DOM element
 * @param {string} filename - Download filename
 * @returns {Promise<void>}
 */
export async function exportCardAsImage(cardElement, filename = 'card.png') {
  try {
    const canvas = await html2canvas(cardElement, {
      scale: 4, // High resolution for print (400 DPI equivalent)
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false
    });

    // Convert to blob and download
    canvas.toBlob((blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }, 'image/png', 1.0);

    return { success: true };
  } catch (error) {
    console.error('Image export failed:', error);
    throw new Error('Failed to generate image. Please try again.');
  }
}
