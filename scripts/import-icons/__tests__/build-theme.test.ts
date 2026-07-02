import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { buildTheme, validateTheme } from '../lib/build-theme';
import type { GeneratedIcon } from '../lib/types';

const base: any = {
  iconDefinitions: { typescript: { iconPath: './icons/typescript.svg' } },
  fileExtensions: { ts: 'typescript' },
  fileNames: {},
  folderNames: {},
};
const generated: GeneratedIcon[] = [
  {
    concept: 'pinia',
    kind: 'file',
    iconFile: 'pinia.svg',
    extensions: ['pinia'],
    fileNames: [],
    source: 'atom',
  },
];

describe('buildTheme', () => {
  it('adiciona def e associação de extensão', () => {
    const t: any = buildTheme(base, generated);
    expect(t.iconDefinitions['mbip-pinia']).toEqual({
      iconPath: 'icons/pinia.svg',
    });
    expect(t.fileExtensions['pinia']).toBe('mbip-pinia');
    expect(t.fileExtensions['ts']).toBe('typescript'); // base preservada
  });

  it('valida arquivos presentes', () => {
    const dir = mkdtempSync(join(tmpdir(), 'theme-'));
    writeFileSync(join(dir, 'pinia.svg'), '<svg/>');
    const t: any = {
      iconDefinitions: { 'mbip-pinia': { iconPath: 'icons/pinia.svg' } },
      fileExtensions: { pinia: 'mbip-pinia' },
    };
    expect(validateTheme(t, dir)).toEqual([]);
    const bad: any = {
      iconDefinitions: { x: { iconPath: 'icons/missing.svg' } },
      fileExtensions: {},
    };
    expect(validateTheme(bad, dir).length).toBe(1);
  });
});
