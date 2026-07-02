import { describe, it, expect } from 'vitest';
import { resolve } from 'node:path';
import { parseColours } from '../lib/parse-colours';

const COLOURS = resolve(__dirname, '../../../atom-master/styles/colours.less');

describe('parseColours', () => {
  it('resolve cores base e derivadas para hex', async () => {
    const m = await parseColours(COLOURS);
    expect(m.get('medium-green')).toBe('#90a959'); // @green
    // dark-green = darken(@green,15%) -> mais escuro que o base
    const dark = m.get('dark-green')!;
    expect(dark).toMatch(/^#[0-9a-f]{6}$/);
    expect(dark).not.toBe('#90a959');
  });
});
