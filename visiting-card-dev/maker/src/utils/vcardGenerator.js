/**
 * Generate vCard 3.0 format string from contact data
 * @param {Object} data - Contact information
 * @returns {string} vCard formatted string
 */
export function generateVCard(data) {
  const {
    name = '',
    title = '',
    company = '',
    phone = '',
    email = '',
    website = '',
    address = '',
    linkedin = '',
    twitter = '',
    github = ''
  } = data;

  let vcard = `BEGIN:VCARD
VERSION:3.0
FN:${name}`;

  if (company) vcard += `\nORG:${company}`;
  if (title) vcard += `\nTITLE:${title}`;
  if (phone) vcard += `\nTEL;TYPE=WORK,VOICE:${phone}`;
  if (email) vcard += `\nEMAIL;TYPE=PREF,INTERNET:${email}`;
  if (website) vcard += `\nURL:${website}`;
  if (address) vcard += `\nADR;TYPE=WORK:;;${address}`;
  if (linkedin) vcard += `\nX-SOCIALPROFILE;TYPE=linkedin:${linkedin}`;
  if (twitter) vcard += `\nX-SOCIALPROFILE;TYPE=twitter:${twitter}`;
  if (github) vcard += `\nX-SOCIALPROFILE;TYPE=github:${github}`;

  vcard += '\nEND:VCARD';

  return vcard;
}

/**
 * Download vCard as .vcf file
 * @param {Object} data - Contact information
 */
export function downloadVCard(data) {
  const vcard = generateVCard(data);
  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = `${data.name.replace(/\s+/g, '_') || 'contact'}.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
