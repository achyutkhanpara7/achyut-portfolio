// node render.js <dir> <scene> [fps] [dur]  → frames/<scene>/f0000.jpg …
const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const [dir, scene, fps = 30, dur = 10, only] = process.argv.slice(2);
  const out = `${dir}/frames/${scene}`;
  fs.rmSync(out, { recursive: true, force: true });
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1.25 })).newPage();
  await p.goto(`file://${dir}/${scene}.html`);
  await p.waitForTimeout(500);
  const n = Math.round(dur * fps);
  const list = only ? only.split(',').map(Number) : [...Array(n).keys()];
  for (const i of list) {
    await p.evaluate((t) => window.seek(t), only ? i : i / fps);
    await p.screenshot({ path: `${out}/f${String(only ? Math.round(i * 10) : i).padStart(4, '0')}.jpg`, type: 'jpeg', quality: 92 });
  }
  await b.close();
})();
