/* OKLCH → relative luminance, the same maths the browser uses to paint the swatch.
   Used to measure contrast live in the WorldKit playground and to draw the hue sweep. */

export function luminance(L: number, C: number, h: number): number {
  const r = (h * Math.PI) / 180;
  const a = C * Math.cos(r);
  const b = C * Math.sin(r);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  const clip = (v: number) => Math.min(1, Math.max(0, v));
  const R = clip(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s);
  const G = clip(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s);
  const B = clip(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

export function contrast(y1: number, y2: number): number {
  const [hi, lo] = y1 > y2 ? [y1, y2] : [y2, y1];
  return (hi + 0.05) / (lo + 0.05);
}

/* The shared ramp curve from primitives.css / modes.css: [lightness, chroma] per step 1–12. */
export const LIGHT: [number, number][] = [
  [0.988, 0.01], [0.972, 0.02], [0.948, 0.038], [0.915, 0.055], [0.875, 0.075], [0.825, 0.095],
  [0.76, 0.12], [0.675, 0.16], [0.495, 0.195], [0.445, 0.185], [0.4, 0.15], [0.29, 0.08],
];
export const DARK: [number, number][] = [
  [0.245, 0.02], [0.285, 0.04], [0.33, 0.07], [0.37, 0.085], [0.415, 0.1], [0.46, 0.115],
  [0.51, 0.135], [0.62, 0.17], [0.7, 0.185], [0.76, 0.17], [0.805, 0.115], [0.93, 0.05],
];
