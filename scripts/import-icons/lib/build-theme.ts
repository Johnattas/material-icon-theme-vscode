import { existsSync } from 'node:fs';
import { basename, join } from 'node:path';
import type { Manifest } from 'material-icon-theme';
import type { GeneratedIcon } from './types';

const DEF_PREFIX = 'mbip-';

export function buildTheme(
  base: Manifest,
  generated: GeneratedIcon[]
): Manifest {
  const theme: any = structuredClone(base);
  theme.iconDefinitions ??= {};
  theme.fileExtensions ??= {};
  theme.fileNames ??= {};
  theme.folderNames ??= {};

  for (const g of generated) {
    const def = `${DEF_PREFIX}${g.concept}`;
    theme.iconDefinitions[def] = { iconPath: `icons/${g.iconFile}` };
    for (const ext of g.extensions) theme.fileExtensions[ext] = def;
    for (const name of g.fileNames) {
      if (g.kind === 'folder') theme.folderNames[name] = def;
      else theme.fileNames[name] = def;
    }
  }
  return theme as Manifest;
}

export function validateTheme(theme: Manifest, iconsDir: string): string[] {
  const t: any = theme;
  const problems: string[] = [];
  for (const [def, val] of Object.entries<any>(t.iconDefinitions ?? {})) {
    const file = basename(val.iconPath ?? '');
    if (!file || !existsSync(join(iconsDir, file))) {
      problems.push(`def ${def}: arquivo ausente (${val.iconPath})`);
    }
  }
  const defs = new Set(Object.keys(t.iconDefinitions ?? {}));
  for (const map of ['fileExtensions', 'fileNames', 'folderNames'] as const) {
    for (const [key, def] of Object.entries<string>(t[map] ?? {})) {
      if (!defs.has(def))
        problems.push(`${map}[${key}] -> def inexistente ${def}`);
    }
  }
  return problems;
}
