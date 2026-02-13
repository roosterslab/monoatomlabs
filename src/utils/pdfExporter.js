import rasterizeHTML from 'rasterizehtml';
import jsPDF from 'jspdf';

/**
 * Wait for all fonts and resources to load
 */
async function waitForResources() {
  // Wait for fonts to load
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  }

  // Additional delay to ensure all rendering is complete
  await new Promise(resolve => setTimeout(resolve, 500));
}

/**
 * Render HTML element to canvas using RasterizeHTML
 */
async function renderToCanvas(element, scale = 3) {
  const width = element.offsetWidth;
  const height = element.offsetHeight;

  // Create canvas with proper dimensions
  const canvas = document.createElement('canvas');
  canvas.width = width * scale;
  canvas.height = height * scale;

  // Clone the element and get its HTML
  const clone = element.cloneNode(true);

  // Convert all canvas elements to images
  const originalCanvases = element.querySelectorAll('canvas');
  const clonedCanvases = clone.querySelectorAll('canvas');

  originalCanvases.forEach((originalCanvas, index) => {
    if (clonedCanvases[index]) {
      // Convert canvas to image
      const img = document.createElement('img');
      img.src = originalCanvas.toDataURL('image/png');
      img.style.cssText = originalCanvas.style.cssText;
      img.style.position = window.getComputedStyle(originalCanvas).position;
      img.style.top = window.getComputedStyle(originalCanvas).top;
      img.style.left = window.getComputedStyle(originalCanvas).left;
      img.style.width = window.getComputedStyle(originalCanvas).width;
      img.style.height = window.getComputedStyle(originalCanvas).height;
      img.style.zIndex = window.getComputedStyle(originalCanvas).zIndex;
      img.style.opacity = window.getComputedStyle(originalCanvas).opacity;

      // Replace canvas with image in clone
      clonedCanvases[index].parentNode.replaceChild(img, clonedCanvases[index]);
    }
  });

  const html = clone.outerHTML;

  // Get all stylesheets
  let styles = '';
  for (let i = 0; i < document.styleSheets.length; i++) {
    try {
      const sheet = document.styleSheets[i];
      if (sheet.cssRules) {
        for (let j = 0; j < sheet.cssRules.length; j++) {
          styles += sheet.cssRules[j].cssText + '\n';
        }
      }
    } catch (e) {
      // Skip external stylesheets that can't be accessed
    }
  }

  // Create complete HTML document
  const fullHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>${styles}</style>
      </head>
      <body style="margin:0;padding:0;width:${width}px;height:${height}px;">
        ${html}
      </body>
    </html>
  `;

  // Render to canvas
  await rasterizeHTML.drawHTML(fullHtml, canvas, {
    width: width,
    height: height,
    zoom: scale
  });

  return canvas;
}

/**
 * Export visiting card as print-ready PDF
 * @param {HTMLElement} frontElement - Front card DOM element
 * @param {HTMLElement} backElement - Back card DOM element
 * @param {Object} data - Contact data for filename
 * @returns {Promise<void>}
 */
export async function exportCardAsPDF(frontElement, backElement, data) {
  try {
    // Wait for all resources to load
    await waitForResources();

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
    const frontCanvas = await renderToCanvas(frontElement, 3);

    // Add front card to PDF (page 1)
    const frontImg = frontCanvas.toDataURL('image/png', 1.0);
    pdf.addImage(frontImg, 'PNG', 0, 0, cardWidth, cardHeight, '', 'FAST');

    // Capture back card
    const backCanvas = await renderToCanvas(backElement, 3);

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
    // Wait for all resources to load
    await waitForResources();

    // Render to canvas with high resolution
    const canvas = await renderToCanvas(cardElement, 4);

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
