import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import Puppeteer from 'puppeteer';

/**
 * Create a screenshot from an HTML file and save it as image.
 * @param filePath Path of an HTML file
 * @param fileName Name of the output image
 */
export const createScreenshot = async (filePath: string, fileName: string) => {
  const browser = await Puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ height: 10, width: 1000 });

    // Read HTML and replace relative SVG paths with absolute file:// paths
    // so setContent() can resolve them without a navigation base URL
    const baseDir = dirname(filePath);
    const html = readFileSync(filePath, 'utf-8').replace(
      /src="(\.[^"]+\.svg)"/g,
      (_, rel) => `src="file://${resolve(baseDir, rel)}"`
    );

    await page.setContent(html, {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });

    await page.screenshot({
      path: `images/${fileName}.png`,
      omitBackground: true,
      fullPage: true,
    });

    await browser.close();
  } catch (error) {
    console.error(error);
    throw Error('Could not create screenshot for a preview');
  } finally {
    const pages = await browser.pages();
    for (const page of pages) await page.close();
  }
};
