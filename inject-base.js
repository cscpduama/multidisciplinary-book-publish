/**
 * inject-base.js
 * Automatically injects the correct <base href> into every HTML file
 * before Vercel deploys. Run as the Vercel build command.
 *
 * Rules:
 *  - index.html at root  ? /multidisciplinary-book-publish/
 *  - edition-1/index.html ? /multidisciplinary-book-publish/edition-1/
 *  - edition-2/index.html ? /multidisciplinary-book-publish/edition-2/
 *  - any future edition-N/ folder is picked up automatically
 */

const fs   = require('fs');
const path = require('path');

const ROOT     = __dirname;
const PROXY    = '/multidisciplinary-book-publish';

function findHtmlFiles(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      findHtmlFiles(full, results);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

function baseHrefFor(filePath) {
  const rel  = path.relative(ROOT, filePath).replace(/\\/g, '/');
  const dir  = path.dirname(rel);              // e.g. "edition-2" or "."
  const base = dir === '.' ? '' : '/' + dir;   // e.g. "/edition-2" or ""
  return PROXY + base + '/';
}

let changed = 0;

for (const file of findHtmlFiles(ROOT)) {
  let html = fs.readFileSync(file, 'utf8');

  // Remove any existing <base href> so we never duplicate
  const withoutBase = html.replace(/<base\s+href="[^"]*"\s*\/?>/gi, '').trim();

  const href = baseHrefFor(file);
  const tag  = `<base href="${href}"/>`;

  // Inject right after <meta name="viewport" ...>  (or after <meta charset> as fallback)
  let injected = withoutBase.replace(
    /(<meta\s+name="viewport"[^>]*>)/i,
    `$1\n${tag}`
  );

  // Fallback: after <meta charset> if no viewport tag found
  if (!injected.includes(tag)) {
    injected = withoutBase.replace(
      /(<meta\s+charset[^>]*>)/i,
      `$1\n${tag}`
    );
  }

  if (injected !== html) {
    fs.writeFileSync(file, injected, 'utf8');
    console.log(`?  ${path.relative(ROOT, file)}  ?  base href="${href}"`);
    changed++;
  } else {
    console.log(`–   ${path.relative(ROOT, file)}  (unchanged)`);
  }
}

console.log(`\nDone. ${changed} file(s) updated.`);
