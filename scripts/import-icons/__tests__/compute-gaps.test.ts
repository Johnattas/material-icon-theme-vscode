import { describe, expect, it } from 'vitest';
import { computeGaps } from '../lib/compute-gaps';
import type { AfiEntry, AtomEntry } from '../lib/types';

const coverage = {
  extensions: new Set(['ts']),
  fileNames: new Set<string>(),
  folderNames: new Set<string>(),
  concepts: new Set(['typescript']),
};

const atom: AtomEntry[] = [
  {
    concept: 'pinia',
    kind: 'file',
    extensions: ['pinia'],
    fileNames: [],
    colour: 'medium-yellow',
    priority: 1,
  },
  {
    concept: 'typescript',
    kind: 'file',
    extensions: ['ts'],
    fileNames: [],
    colour: 'medium-blue',
    priority: 1,
  },
  {
    concept: 'nofont',
    kind: 'file',
    extensions: ['zz'],
    fileNames: [],
    colour: 'red',
    priority: 1,
  },
];
const afi: AfiEntry[] = [
  { concept: 'file_type_pinia', extensions: ['pinia'], color: 'yellow' }, // já coberto por atom
  { concept: 'file_type_deno', extensions: ['deno'], color: 'green' }, // lacuna nova via afi
];

const glyphs = new Map([
  ['pinia', { font: 'file-icons.woff2', codepoint: 0xe111 }],
  ['typescript', { font: 'file-icons.woff2', codepoint: 0xe0a2 }],
  ['nofont', { font: null, codepoint: 0xf000 }], // octicons -> descartado
]);
const colours = new Map([
  ['medium-yellow', '#f4bf75'],
  ['medium-blue', '#6a9fb5'],
  ['red', '#ac4142'],
]);

describe('computeGaps', () => {
  it('prioriza atom, descarta cobertos e sem-fonte, e usa afi só p/ o resto', () => {
    const gaps = computeGaps({
      atom,
      afi,
      coverage,
      glyphs,
      colours,
      afiPngDir: '/nonexistent',
      afiColors: new Map(),
    });
    const concepts = gaps.map((g) => g.concept).sort();
    // pinia (atom) entra; typescript (coberto) sai; nofont (sem font) sai;
    // file_type_pinia (dup) sai; file_type_deno -> PNG inexistente -> sai
    expect(concepts).toEqual(['pinia']);
    expect(gaps[0].source).toBe('atom');
    expect(gaps[0].hex).toBe('#f4bf75');
  });
});
