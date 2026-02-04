#!/usr/bin/env node
/**
 * Post-build script to make CSS load asynchronously
 * Converts: <link rel="stylesheet" href="*.css">
 * To: <link rel="stylesheet" href="*.css" media="print" onload="this.media='all'">
 */

const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const htmlFile = path.join(distDir, 'index.html');

if (!fs.existsSync(htmlFile)) {
  console.error('dist/index.html not found. Run build first.');
  process.exit(1);
}

let html = fs.readFileSync(htmlFile, 'utf8');

// Find CSS links (but not the ones already async like fonts)
// Match: <link rel="stylesheet" href="something.css">
// But not ones that already have media="print" or onload
const cssLinkRegex = /<link\s+rel="stylesheet"\s+href="([^"]+\.css)"(?![^>]*(?:media=|onload=))[^>]*>/g;

let modified = false;

html = html.replace(cssLinkRegex, (match, href) => {
  // Skip external CSS (fonts, CDN) - only transform local CSS
  if (href.startsWith('http') || href.startsWith('//')) {
    return match;
  }

  modified = true;
  const asyncLink = `<link rel="stylesheet" href="${href}" media="print" onload="this.media='all'">`;
  const noscript = `<noscript><link rel="stylesheet" href="${href}"></noscript>`;

  return asyncLink + '\n    ' + noscript;
});

if (modified) {
  fs.writeFileSync(htmlFile, html);
  console.log('✓ CSS links converted to async loading');
} else {
  console.log('No CSS links to convert (may already be async)');
}
