import { generateVCard } from './vcardGenerator';

/**
 * Generate QR code URL using QR Server API
 * @param {Object} data - Contact information
 * @param {Object} options - QR code options
 * @returns {string} QR code image URL
 */
export function generateQRCodeURL(data, options = {}) {
  const {
    size = '400x400',
    format = 'png',
    errorCorrection = 'M', // L, M, Q, H
    margin = 10
  } = options;

  const vcardData = generateVCard(data);

  const qrURL = `https://api.qrserver.com/v1/create-qr-code/?` +
    `size=${size}` +
    `&data=${encodeURIComponent(vcardData)}` +
    `&format=${format}` +
    `&ecc=${errorCorrection}` +
    `&margin=${margin}`;

  return qrURL;
}

/**
 * Download standalone QR code image
 * @param {string} qrURL - QR code image URL
 * @param {string} filename - Download filename
 */
export async function downloadQRCode(qrURL, filename = 'qr-code.png') {
  try {
    const response = await fetch(qrURL);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Failed to download QR code:', error);
    throw error;
  }
}
