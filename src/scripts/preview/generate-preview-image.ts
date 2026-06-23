import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import Puppeteer from 'puppeteer';

const ICONS_DIR = resolve(import.meta.dirname, '../../../icons');
const OUTPUT_DIR = resolve(import.meta.dirname, '../../../images');

const FILE_ICONS = [
  // Languages
  'javascript',
  'typescript',
  'python',
  'rust',
  'go',
  'java',
  'kotlin',
  'swift',
  'php',
  'ruby',
  'csharp',
  'cpp',
  'c',
  'r',
  'scala',
  'elixir',
  // Frontend
  'react',
  'vue',
  'angular',
  'svelte',
  'html',
  'css',
  'sass',
  'tailwindcss',
  // Backend / Runtime
  'nodejs',
  'deno',
  'bun',
  'django',
  'laravel',
  'flask',
  'rails',
  'spring',
  // Data
  'json',
  'yaml',
  'toml',
  'xml',
  'csv',
  'graphql',
  'prisma',
  // DevOps
  'docker',
  'kubernetes',
  'terraform',
  'ansible',
  // Tools
  'git',
  'github',
  'gitlab',
  'npm',
  'yarn',
  'pnpm',
  // Editors / Config
  'vscode',
  'vim',
  'editorconfig',
  'eslint',
  'prettier',
  // Docs / Misc
  'markdown',
  'pdf',
  'zip',
  'env',
];

const FOLDER_ICONS = [
  'folder',
  'folder-src',
  'folder-dist',
  'folder-components',
  'folder-views',
  'folder-pages',
  'folder-api',
  'folder-models',
  'folder-controllers',
  'folder-tests',
  'folder-hooks',
  'folder-utils',
  'folder-config',
  'folder-public',
  'folder-assets',
  'folder-images',
  'folder-styles',
  'folder-scripts',
  'folder-docs',
  'folder-git',
  'folder-github',
  'folder-node',
  'folder-docker',
  'folder-kubernetes',
  'folder-ci',
  'folder-middleware',
  'folder-services',
  'folder-types',
  'folder-routes',
  'folder-database',
  'folder-migrations',
  'folder-cache',
  'folder-temp',
];

function toDataUri(svgPath: string): string {
  try {
    const svg = readFileSync(svgPath, 'utf-8');
    const b64 = Buffer.from(svg).toString('base64');
    return `data:image/svg+xml;base64,${b64}`;
  } catch {
    return '';
  }
}

function buildHtml(icons: string[], prefix = ''): string {
  const cells = icons
    .map((name) => {
      const uri = toDataUri(resolve(ICONS_DIR, `${prefix}${name}.svg`));
      if (!uri) return '';
      const label = name.replace(/^folder-/, '');
      return `<div class="cell"><img src="${uri}" width="40" height="40"><span>${label}</span></div>`;
    })
    .filter(Boolean)
    .join('\n');

  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { margin: 0; padding: 16px; background: #1e1e2e; font-family: sans-serif; }
  .grid { display: flex; flex-wrap: wrap; gap: 12px; }
  .cell { display: flex; flex-direction: column; align-items: center; gap: 4px; width: 60px; }
  .cell img { width: 40px; height: 40px; }
  .cell span { color: #cdd6f4; font-size: 9px; text-align: center; word-break: break-all; line-height: 1.2; }
</style>
</head>
<body>
<div class="grid">
${cells}
</div>
</body>
</html>`;
}

async function screenshot(html: string, output: string) {
  const browser = await Puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 600 });
  await page.setContent(html, {
    waitUntil: 'domcontentloaded',
    timeout: 30000,
  });
  await page.screenshot({
    path: output,
    fullPage: true,
    omitBackground: false,
  });
  await browser.close();
}

console.log('Gerando preview de ícones de arquivos...');
await screenshot(buildHtml(FILE_ICONS), `${OUTPUT_DIR}/fileIconsPreview.png`);
console.log('OK: fileIconsPreview.png');

console.log('Gerando preview de ícones de pastas...');
await screenshot(
  buildHtml(FOLDER_ICONS, ''),
  `${OUTPUT_DIR}/folderIconsPreview.png`
);
console.log('OK: folderIconsPreview.png');
