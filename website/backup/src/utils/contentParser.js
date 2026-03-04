/**
 * Content Parser Utility
 * Parses markdown content and converts to structured data for React components
 */

/**
 * Parse markdown metadata (frontmatter-like metadata at the top of files)
 * @param {string} content - The markdown content
 * @returns {object} - Parsed metadata
 */
export function parseMetadata(content) {
  const lines = content.split('\n');
  const metadata = {};

  // Extract metadata from first few lines (before first ---)
  let inMetadata = true;
  for (let i = 1; i < lines.length && inMetadata; i++) {
    const line = lines[i].trim();

    if (line === '---') {
      inMetadata = false;
      break;
    }

    // Parse lines like "**URL:** `/products/ceraphene`"
    const match = line.match(/\*\*(.+?):\*\*\s*(.+)/);
    if (match) {
      const key = match[1].toLowerCase().replace(/\s+/g, '_');
      metadata[key] = match[2].replace(/`/g, '');
    }
  }

  return metadata;
}

/**
 * Parse sections from markdown content
 * @param {string} content - The markdown content
 * @returns {array} - Array of section objects
 */
export function parseSections(content) {
  const lines = content.split('\n');
  const sections = [];
  let currentSection = null;
  let inMetadata = true;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Skip metadata section
    if (inMetadata) {
      if (line.trim() === '---' && i > 0) {
        inMetadata = false;
      }
      continue;
    }

    // H2 headers (##) start new sections
    if (line.startsWith('## ')) {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        title: line.replace('## ', '').trim(),
        content: [],
        subsections: []
      };
    }
    // H3 headers (###) are subsections
    else if (line.startsWith('### ') && currentSection) {
      currentSection.subsections.push({
        title: line.replace('### ', '').trim(),
        content: []
      });
    }
    // Add content to current section or subsection
    else if (currentSection) {
      if (currentSection.subsections.length > 0) {
        const lastSubsection = currentSection.subsections[currentSection.subsections.length - 1];
        lastSubsection.content.push(line);
      } else {
        currentSection.content.push(line);
      }
    }
  }

  // Add the last section
  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
}

/**
 * Parse bullet points/list items from content
 * @param {array} contentLines - Array of content lines
 * @returns {array} - Array of parsed items
 */
export function parseListItems(contentLines) {
  const items = [];
  let currentItem = null;

  for (const line of contentLines) {
    const trimmed = line.trim();

    // Match bullet points (-, *, or numbered)
    const bulletMatch = trimmed.match(/^[-*]\s+(.+)/);
    const numberedMatch = trimmed.match(/^\d+\.\s+(.+)/);

    if (bulletMatch || numberedMatch) {
      const text = bulletMatch ? bulletMatch[1] : numberedMatch[1];

      // Check if it's a bold item (key-value format)
      const boldMatch = text.match(/^\*\*(.+?)\*\*:?\s*(.+)?/);
      if (boldMatch) {
        currentItem = {
          title: boldMatch[1],
          description: boldMatch[2] || '',
          details: []
        };
        items.push(currentItem);
      } else {
        items.push({
          text: text,
          details: []
        });
        currentItem = items[items.length - 1];
      }
    }
    // Add details to current item (indented lines)
    else if (currentItem && trimmed.startsWith('-') && trimmed.length > 1) {
      currentItem.details.push(trimmed.substring(1).trim());
    }
  }

  return items;
}

/**
 * Parse table from markdown
 * @param {array} contentLines - Array of content lines
 * @returns {object} - Parsed table with headers and rows
 */
export function parseTable(contentLines) {
  const table = {
    headers: [],
    rows: []
  };

  let inTable = false;

  for (let i = 0; i < contentLines.length; i++) {
    const line = contentLines[i].trim();

    // Check if line contains table separator (|---|---|)
    if (line.includes('|') && line.includes('---')) {
      inTable = true;
      // Previous line should be headers
      if (i > 0) {
        const headerLine = contentLines[i - 1].trim();
        table.headers = headerLine
          .split('|')
          .map(h => h.trim())
          .filter(h => h.length > 0)
          .map(h => h.replace(/\*\*/g, '')); // Remove bold markers
      }
      continue;
    }

    // Parse table rows
    if (inTable && line.includes('|')) {
      const cells = line
        .split('|')
        .map(c => c.trim())
        .filter(c => c.length > 0)
        .map(c => c.replace(/\*\*/g, '')); // Remove bold markers

      if (cells.length > 0) {
        table.rows.push(cells);
      }
    }
    // End of table
    else if (inTable && !line.includes('|')) {
      break;
    }
  }

  return table;
}

/**
 * Find and parse all tables in content
 * @param {array} contentLines - Array of content lines
 * @returns {array} - Array of parsed tables
 */
export function findTables(contentLines) {
  const tables = [];
  let currentTableLines = [];
  let inTable = false;

  for (const line of contentLines) {
    if (line.trim().includes('|')) {
      inTable = true;
      currentTableLines.push(line);
    } else if (inTable) {
      // End of table
      if (currentTableLines.length > 0) {
        const table = parseTable(currentTableLines);
        if (table.headers.length > 0) {
          tables.push(table);
        }
      }
      currentTableLines = [];
      inTable = false;
    }
  }

  // Check for table at end
  if (currentTableLines.length > 0) {
    const table = parseTable(currentTableLines);
    if (table.headers.length > 0) {
      tables.push(table);
    }
  }

  return tables;
}

/**
 * Parse key-value specifications (like technical specs)
 * @param {array} contentLines - Array of content lines
 * @returns {object} - Object with key-value pairs
 */
export function parseSpecifications(contentLines) {
  const specs = {};
  let currentCategory = null;

  for (const line of contentLines) {
    const trimmed = line.trim();

    // Category headers (bold text followed by colon)
    const categoryMatch = trimmed.match(/^\*\*(.+?):\*\*$/);
    if (categoryMatch) {
      currentCategory = categoryMatch[1];
      specs[currentCategory] = {};
      continue;
    }

    // Key-value pairs
    const kvMatch = trimmed.match(/^[-*]?\s*(.+?):\s*(.+)/);
    if (kvMatch && currentCategory) {
      const key = kvMatch[1].trim();
      const value = kvMatch[2].trim();
      specs[currentCategory][key] = value;
    }
  }

  return specs;
}

/**
 * Extract benefits/features from a section
 * @param {object} section - Section object from parseSections
 * @returns {array} - Array of benefit objects
 */
export function extractBenefits(section) {
  const benefits = [];

  // Look through subsections and numbered lists
  for (const subsection of section.subsections) {
    const content = subsection.content.join('\n');

    // Match numbered benefits like "1. **Title** - description"
    const matches = content.matchAll(/\d+\.\s+\*\*(.+?)\*\*\s*\n\s*-?\s*(.+)/g);

    for (const match of matches) {
      benefits.push({
        title: match[1].trim(),
        description: match[2].trim(),
        details: []
      });
    }
  }

  // Also parse as list items if no numbered format found
  if (benefits.length === 0 && section.content.length > 0) {
    return parseListItems(section.content);
  }

  return benefits;
}

/**
 * Clean markdown formatting from text
 * @param {string} text - Text with markdown formatting
 * @returns {string} - Clean text
 */
export function cleanMarkdown(text) {
  if (!text) return '';

  return text
    .replace(/\*\*(.+?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.+?)\*/g, '$1') // Remove italic
    .replace(/`(.+?)`/g, '$1') // Remove code blocks
    .replace(/\[(.+?)\]\(.+?\)/g, '$1') // Remove links, keep text
    .replace(/^#+\s+/gm, '') // Remove headers
    .trim();
}

/**
 * Parse contact information from content
 * @param {string} content - Markdown content
 * @returns {object} - Structured contact info
 */
export function parseContactInfo(content) {
  const contact = {
    email: [],
    phone: [],
    address: {},
    social: {}
  };

  // Extract emails
  const emailMatches = content.matchAll(/(?:Email|E-mail):\s*([^\n]+)/gi);
  for (const match of emailMatches) {
    const email = match[1].trim();
    if (email && !contact.email.includes(email)) {
      contact.email.push(email);
    }
  }

  // Extract phone numbers
  const phoneMatches = content.matchAll(/(?:Phone|Tel|Call):\s*([^\n]+)/gi);
  for (const match of phoneMatches) {
    const phone = match[1].trim();
    if (phone && !contact.phone.includes(phone)) {
      contact.phone.push(phone);
    }
  }

  // Extract address
  const addressMatch = content.match(/Address:\s*([^\n]+(?:\n[^\n]+)*?)(?=\n\n|\n\*\*|$)/i);
  if (addressMatch) {
    const addressLines = addressMatch[1].trim().split('\n').map(line => line.trim());
    contact.address = {
      full: addressLines.join(', '),
      lines: addressLines
    };
  }

  // Extract website
  const websiteMatch = content.match(/Website:\s*([^\n]+)/i);
  if (websiteMatch) {
    contact.website = websiteMatch[1].trim();
  }

  return contact;
}

/**
 * Extract pricing information from content
 * @param {string} content - Markdown content
 * @returns {object} - Pricing information
 */
export function parsePricing(content) {
  const pricing = {
    price: null,
    currency: 'INR',
    unit: null,
    comparison: []
  };

  // Find price patterns like "₹5,000/50ml" or "₹5,000 per 50ml"
  const priceMatch = content.match(/₹\s*([\d,]+)\s*[/]?\s*(\w+)?/);
  if (priceMatch) {
    pricing.price = priceMatch[1].replace(/,/g, '');
    pricing.unit = priceMatch[2] || null;
  }

  return pricing;
}

/**
 * Main parser function - parse complete markdown file
 * @param {string} content - Complete markdown content
 * @returns {object} - Structured content object
 */
export function parseMarkdownContent(content) {
  const metadata = parseMetadata(content);
  const sections = parseSections(content);
  const contact = parseContactInfo(content);

  return {
    metadata,
    sections,
    contact,
    rawContent: content
  };
}

/**
 * Parse product-specific content
 * @param {string} content - Product markdown content
 * @returns {object} - Structured product data
 */
export function parseProductContent(content) {
  const base = parseMarkdownContent(content);
  const sections = base.sections;

  // Extract specific product sections
  const product = {
    ...base.metadata,
    name: base.metadata.page_title?.split('|')[0]?.trim() || '',
    tagline: base.metadata.meta_description || '',
    overview: {},
    benefits: [],
    specifications: {},
    applications: [],
    pricing: {},
    howItWorks: {},
    competitive: {},
    faqs: []
  };

  // Extract sections by title
  sections.forEach(section => {
    const title = section.title.toLowerCase();

    if (title.includes('overview')) {
      product.overview = {
        title: section.title,
        content: section.content.join('\n'),
        subsections: section.subsections
      };
    }
    else if (title.includes('benefit')) {
      product.benefits = extractBenefits(section);
    }
    else if (title.includes('specification') || title.includes('technical')) {
      product.specifications = parseSpecifications(section.content);
      product.specTables = findTables(section.content);
    }
    else if (title.includes('application')) {
      product.applications = parseListItems(section.content);
    }
    else if (title.includes('how it works')) {
      product.howItWorks = {
        title: section.title,
        subsections: section.subsections
      };
    }
    else if (title.includes('competitive') || title.includes('comparison')) {
      product.competitive = {
        title: section.title,
        tables: findTables(section.content),
        content: section.subsections
      };
    }
    else if (title.includes('pricing') || title.includes('cost')) {
      product.pricing = {
        title: section.title,
        details: section.content.join('\n'),
        tables: findTables(section.content)
      };
    }
    else if (title.includes('faq')) {
      // Parse FAQs (Q: / A: format)
      const faqContent = section.content.join('\n');
      const faqMatches = faqContent.matchAll(/\*\*Q:\s*(.+?)\*\*\s*\n\s*A:\s*(.+?)(?=\n\*\*Q:|$)/gs);

      for (const match of faqMatches) {
        product.faqs.push({
          question: match[1].trim(),
          answer: match[2].trim()
        });
      }
    }
  });

  return product;
}

export default {
  parseMetadata,
  parseSections,
  parseListItems,
  parseTable,
  findTables,
  parseSpecifications,
  extractBenefits,
  cleanMarkdown,
  parseContactInfo,
  parsePricing,
  parseMarkdownContent,
  parseProductContent
};
