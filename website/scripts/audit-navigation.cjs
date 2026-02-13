#!/usr/bin/env node

/**
 * Navigation Audit Script
 * Checks all buttons and links in the home page components
 */

const fs = require('fs');
const path = require('path');

const issues = [];
const fixes = [];

console.log('\n🔍 Navigation Audit Report\n');
console.log('═'.repeat(60));

// Define expected navigation mappings
const expectedRoutes = {
  'graphacrete': '/products/graphacrete',
  'graffisol': '/products/graffisol',
  'ceraphene': '/products/ceraphene',
  'hdgpe': '/products/hd-g-pe',
  'hdpe': '/products/hd-g-pe',
  'technology': '/technology',
  'platform': '/technology/platform',
  'documentation': '/technology/platform', // or /about
  'contact': '/contact',
  'partnership': '/partnership',
  'products': '/products',
  'about': '/about',
  'industries': '/industries'
};

// Check Hero component
console.log('\n📍 Checking Hero Component...');
const heroPath = path.join(__dirname, '../src/components/hero/Hero.jsx');
const heroContent = fs.readFileSync(heroPath, 'utf-8');

if (heroContent.includes('<Button') && !heroContent.includes('from \'react-router-dom\'')) {
  issues.push({
    file: 'Hero.jsx',
    issue: 'Buttons present but no Link import from react-router-dom',
    buttons: [
      { text: 'Our Technology', expected: '/technology' },
      { text: 'View Documentation', expected: '/technology/platform' }
    ]
  });
  console.log('  ❌ Missing navigation: "Our Technology" and "View Documentation" buttons');
} else {
  console.log('  ✅ Navigation links present');
}

// Check ProductsSection component
console.log('\n📍 Checking ProductsSection Component...');
const productsPath = path.join(__dirname, '../src/components/home/ProductsSection.jsx');
const productsContent = fs.readFileSync(productsPath, 'utf-8');

if (productsContent.includes('View Technical Data') && !productsContent.includes('to={`/products/')) {
  issues.push({
    file: 'ProductsSection.jsx',
    issue: 'View Technical Data button has no navigation',
    fix: 'Should navigate to /products/{productId}'
  });
  console.log('  ❌ Missing navigation: "View Technical Data" button');
} else if (productsContent.includes('to={`/products/')) {
  console.log('  ✅ Dynamic navigation to product pages implemented');
}

// Check all Link components in home sections
console.log('\n📍 Checking All Home Section Links...');
const homeSections = fs.readdirSync(path.join(__dirname, '../src/components/home'));

homeSections.forEach(file => {
  if (!file.endsWith('.jsx')) return;

  const filePath = path.join(__dirname, '../src/components/home', file);
  const content = fs.readFileSync(filePath, 'utf-8');

  // Check for Link components with to="#"
  if (content.includes('to="#"') || content.includes("to='#'")) {
    issues.push({
      file: `home/${file}`,
      issue: 'Link with placeholder href "#"'
    });
    console.log(`  ⚠️  ${file}: Contains placeholder links (to="#")`);
  }
});

// Summary
console.log('\n' + '═'.repeat(60));
console.log('\n📊 AUDIT SUMMARY\n');

if (issues.length === 0) {
  console.log('✅ All navigation links are properly configured!\n');
} else {
  console.log(`❌ Found ${issues.length} issue(s):\n`);

  issues.forEach((issue, idx) => {
    console.log(`${idx + 1}. ${issue.file}`);
    console.log(`   Issue: ${issue.issue}`);
    if (issue.buttons) {
      issue.buttons.forEach(btn => {
        console.log(`   - "${btn.text}" → ${btn.expected}`);
      });
    }
    if (issue.fix) {
      console.log(`   Fix: ${issue.fix}`);
    }
    console.log('');
  });
}

console.log('═'.repeat(60));
console.log('\n🔧 Required Fixes:\n');

console.log('1. Hero.jsx:');
console.log('   - Wrap "Our Technology" button with <Link to="/technology">');
console.log('   - Wrap "View Documentation" button with <Link to="/technology/platform">');

console.log('\n2. ProductsSection.jsx:');
console.log('   - Wrap "View Technical Data" button with <Link to={`/products/${products[activeProduct].id}`}>');

console.log('\n✨ After fixing, run: npm run dev and test navigation\n');

process.exit(issues.length > 0 ? 1 : 0);
