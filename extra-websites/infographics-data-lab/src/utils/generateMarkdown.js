/**
 * Generate Markdown file from form data
 * @param {Object} formData - Form data object
 * @param {string} productName - Product name
 * @returns {string} Markdown content
 */
export const generateMarkdown = (formData, productName) => {
  const timestamp = new Date().toISOString();
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  let markdown = `# ROI Calculator Data Submission\n\n`;
  markdown += `**Product**: ${productName}\n`;
  markdown += `**Submission Date**: ${date}\n`;
  markdown += `**Submitted By**: ${formData.submitterName || 'N/A'}\n`;
  markdown += `**Department**: ${formData.submitterDepartment || 'N/A'}\n`;
  markdown += `**Email**: ${formData.submitterEmail || 'N/A'}\n\n`;
  markdown += `---\n\n`;

  // Product-specific data
  markdown += `## Data Submitted\n\n`;

  switch (productName.toLowerCase()) {
    case 'ceraphene':
      markdown += generateCerapheneData(formData);
      break;
    case 'graffisol':
      markdown += generateGraffisolData(formData);
      break;
    case 'graphacrete':
      markdown += generateGraphacreteData(formData);
      break;
    case 'hdgpe':
    case 'hd-g-pe':
      markdown += generateHDGPEData(formData);
      break;
    default:
      markdown += generateGenericData(formData);
  }

  markdown += `\n---\n\n`;
  markdown += `## Next Steps\n\n`;
  markdown += `Please send this file to: **data-team@monoatomlabs.com**\n\n`;
  markdown += `Or save it to:\n`;
  markdown += `\`C:\\Users\\globql-ws\\Documents\\projects-2\\monoatomlabs\\monoatomlabs_dev_root\\website-infographics-data-lab\\submissions\\\`\n\n`;
  markdown += `**Thank you for your contribution!**\n\n`;
  markdown += `---\n\n`;
  markdown += `*Generated: ${timestamp}*\n`;

  return markdown;
};

const generateCerapheneData = (data) => {
  let md = `### Competitor Durability Benchmarks\n\n`;

  if (data.premiumDurability) {
    md += `**Premium Tier (₹12,000-₹20,000/50ml)**:\n`;
    md += `- Durability: ${data.premiumDurability} years\n\n`;
  }

  if (data.midRangeDurability) {
    md += `**Mid-Range (₹8,000-₹12,000/50ml)**:\n`;
    md += `- Durability: ${data.midRangeDurability} years\n\n`;
  }

  if (data.economyDurability) {
    md += `**Economy (<₹8,000/50ml)**:\n`;
    md += `- Durability: ${data.economyDurability} years\n\n`;
  }

  if (data.dataSource) {
    md += `**Data Source**: ${data.dataSource}\n\n`;
  }

  if (data.additionalNotes) {
    md += `**Additional Notes**:\n${data.additionalNotes}\n\n`;
  }

  return md;
};

const generateGraffisolData = (data) => {
  let md = `### Installed Coating Cost Structure\n\n`;

  if (data.materialCost) {
    md += `**Material Cost**: ₹${data.materialCost} per ${data.materialUnit || 'kW'}\n\n`;
  }

  if (data.laborCost) {
    md += `**Labor Cost**: ₹${data.laborCost} per kW\n`;
    if (data.laborHours) {
      md += `- Labor Hours: ${data.laborHours} hours per kW\n`;
    }
    md += `\n`;
  }

  if (data.equipmentOverhead) {
    md += `**Equipment/Travel Overhead**: ₹${data.equipmentOverhead} per project\n\n`;
  }

  md += `### Volume Pricing Tiers\n\n`;
  if (data.tier1Price) md += `- **10-100 kW**: ₹${data.tier1Price}/kW\n`;
  if (data.tier2Price) md += `- **100-500 kW**: ₹${data.tier2Price}/kW\n`;
  if (data.tier3Price) md += `- **500-1000 kW**: ₹${data.tier3Price}/kW\n`;
  if (data.tier4Price) md += `- **1+ MW**: ₹${data.tier4Price}/kW\n`;
  md += `\n`;

  if (data.additionalNotes) {
    md += `**Additional Notes**:\n${data.additionalNotes}\n\n`;
  }

  return md;
};

const generateGraphacreteData = (data) => {
  let md = `### Cement Content by Grade\n\n`;

  if (data.m20Cement) md += `- **M20**: ${data.m20Cement} kg/m³\n`;
  if (data.m25Cement) md += `- **M25**: ${data.m25Cement} kg/m³\n`;
  if (data.m30Cement) md += `- **M30**: ${data.m30Cement} kg/m³\n`;
  if (data.m35Cement) md += `- **M35**: ${data.m35Cement} kg/m³\n`;
  if (data.m40Cement) md += `- **M40**: ${data.m40Cement} kg/m³\n`;
  if (data.m50Cement) md += `- **M50**: ${data.m50Cement} kg/m³\n`;
  md += `\n`;

  md += `### Dosage Range by Application\n\n`;
  if (data.dosageLowGrade) md += `- **M20-M30**: ${data.dosageLowGrade} L/m³\n`;
  if (data.dosageMidGrade) md += `- **M35-M40**: ${data.dosageMidGrade} L/m³\n`;
  if (data.dosageHighGrade) md += `- **M50+**: ${data.dosageHighGrade} L/m³\n`;
  md += `\n`;

  if (data.maxDosage) md += `**Maximum Dosage**: ${data.maxDosage} L/m³\n\n`;
  if (data.minDosage) md += `**Minimum for Effect**: ${data.minDosage} L/m³\n\n`;

  if (data.dataSource) {
    md += `**Data Source**: ${data.dataSource}\n\n`;
  }

  if (data.additionalNotes) {
    md += `**Additional Notes**:\n${data.additionalNotes}\n\n`;
  }

  return md;
};

const generateHDGPEData = (data) => {
  let md = `### Pricing Structure\n\n`;

  if (data.basePrice) md += `**Base Price**: ₹${data.basePrice}/kg\n\n`;

  md += `**Volume Pricing Tiers**:\n`;
  if (data.tier1Price) md += `- **1-10 tonnes**: ₹${data.tier1Price}/kg\n`;
  if (data.tier2Price) md += `- **10-50 tonnes**: ₹${data.tier2Price}/kg\n`;
  if (data.tier3Price) md += `- **50-100 tonnes**: ₹${data.tier3Price}/kg\n`;
  if (data.tier4Price) md += `- **100+ tonnes**: ₹${data.tier4Price}/kg\n`;
  md += `\n`;

  if (data.moq) md += `**MOQ (Minimum Order Quantity)**: ${data.moq} kg\n\n`;

  md += `### Dosage by Application\n\n`;
  if (data.pipesDosage) md += `- **HDPE Pipes**: ${data.pipesDosage}% by weight\n`;
  if (data.filmsDosage) md += `- **Packaging Films**: ${data.filmsDosage}% by weight\n`;
  if (data.extrusionDosage) md += `- **Extrusion**: ${data.extrusionDosage}% by weight\n`;
  if (data.moldingDosage) md += `- **Blow Molding**: ${data.moldingDosage}% by weight\n`;
  md += `\n`;

  if (data.scrapReduction) {
    md += `### Performance Data\n\n`;
    md += `**Scrap Reduction**: ${data.scrapReduction}%\n`;
    if (data.scrapSource) md += `- Source: ${data.scrapSource}\n`;
    md += `\n`;
  }

  if (data.warrantyReduction) {
    if (!data.scrapReduction) md += `### Performance Data\n\n`;
    md += `**Warranty Reduction**: ${data.warrantyReduction}%\n`;
    if (data.warrantySource) md += `- Source: ${data.warrantySource}\n`;
    md += `\n`;
  }

  if (data.additionalNotes) {
    md += `**Additional Notes**:\n${data.additionalNotes}\n\n`;
  }

  return md;
};

const generateGenericData = (data) => {
  let md = '';
  Object.entries(data).forEach(([key, value]) => {
    if (key.startsWith('submitter')) return; // Skip submitter fields
    if (value && value !== '') {
      const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      md += `**${label}**: ${value}\n\n`;
    }
  });
  return md;
};

/**
 * Download markdown file
 * @param {string} content - Markdown content
 * @param {string} filename - Filename
 */
export const downloadMarkdown = (content, filename) => {
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);

  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
