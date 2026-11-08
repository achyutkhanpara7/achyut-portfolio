// Tiny deterministic timeline: tw() records tweens, seek(t) paints the frame for time t (seconds).
(function () {
  const tweens = [];
  const fns = [];
  const E = {
    out: (p) => 1 - Math.pow(1 - p, 3),
    inout: (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2),
    lin: (p) => p,
    back: (p) => { const c = 1.70158, c3 = c + 1; return 1 + c3 * Math.pow(p - 1, 3) + c * Math.pow(p - 1, 2); },
  };
  window.tw = (sel, start, dur, props, ease = 'out') => {
    const els = typeof sel === 'string' ? [...document.querySelectorAll(sel)] : [].concat(sel);
    els.forEach((el) => tweens.push({ el, start, dur, props, ease: E[ease] || E.out }));
  };
  window.stagger = (sel, start, gap, dur, props, ease) =>
    [...document.querySelectorAll(sel)].forEach((el, i) => tw(el, start + i * gap, dur, props, ease));
  window.fn = (start, dur, cb, ease = 'out') => fns.push({ start, dur, cb, ease: E[ease] || E.out });
  const lerp = (a, b, p) => (typeof a === 'number' ? a + (b - a) * p : p < 0.5 ? a : b);
  window.seek = (t) => {
    const state = new Map();
    // group by element+prop, ordered by start
    const byKey = new Map();
    tweens.forEach((tn) => Object.keys(tn.props).forEach((k) => {
      const key = tn.el; if (!byKey.has(key)) byKey.set(key, {});
      (byKey.get(key)[k] = byKey.get(key)[k] || []).push(tn);
    }));
    byKey.forEach((props, el) => {
      const v = {};
      Object.entries(props).forEach(([k, list]) => {
        list.sort((a, b) => a.start - b.start);
        let cur = list[0];
        if (t < cur.start) { v[k] = cur.props[k][0]; return; }
        for (const tn of list) if (tn.start <= t) cur = tn;
        const p = cur.dur ? Math.min(1, Math.max(0, (t - cur.start) / cur.dur)) : 1;
        v[k] = lerp(cur.props[k][0], cur.props[k][1], cur.ease(p));
      });
      const tr = [];
      if ('x' in v || 'y' in v) tr.push(`translate(${v.x || 0}px, ${v.y || 0}px)`);
      if ('scale' in v) tr.push(`scale(${v.scale})`);
      if ('rotate' in v) tr.push(`rotate(${v.rotate}deg)`);
      if (tr.length) el.style.transform = tr.join(' ');
      if ('opacity' in v) el.style.opacity = v.opacity;
      if ('w' in v) el.style.width = v.w + '%';
      if ('h' in v) el.style.height = v.h + '%';
      if ('wpx' in v) el.style.width = v.wpx + 'px';
      if ('hpx' in v) el.style.height = v.hpx + 'px';
      if ('dash' in v) el.style.strokeDashoffset = v.dash;
      if ('blur' in v) el.style.filter = `blur(${v.blur}px)`;
      if ('bg' in v) el.style.background = v.bg;
      if ('color' in v) el.style.color = v.color;
      if ('clipr' in v) el.style.clipPath = `inset(0 ${v.clipr}% 0 0)`;
      if ('clipb' in v) el.style.clipPath = `inset(0 0 ${v.clipb}% 0)`;
    });
    fns.forEach((f) => { const p = Math.min(1, Math.max(0, (t - f.start) / f.dur)); f.cb(f.ease(p), t); });
  };
  window.typer = (el, text, start, dur) => fn(start, dur, (p) => { el.textContent = text.slice(0, Math.round(text.length * p)); }, 'lin');
  window.count = (el, from, to, start, dur, fmt = (n) => Math.round(n)) => fn(start, dur, (p) => { el.textContent = fmt(from + (to - from) * p); });
})();
