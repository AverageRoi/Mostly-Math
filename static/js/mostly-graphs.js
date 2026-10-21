/* Mostly Math: small reusable JSXGraph figures, with a dependency-free Canvas fallback.
 * Graphs are calculated at runtime. No static or AI-generated chart images.
 * Source: https://jsxgraph.org/ (MIT / LGPL) via CDN; fallback is plain Canvas.
 */
(() => {
  'use strict';
  const NAVY = '#83b5d5';
  const OCHRE = '#efb184';
  const GUIDE = '#b8bcc5';
  const GAMMA = 0.5772156649015329;
  const isDark = () => document.documentElement.dataset.scheme === 'dark' || document.body.classList.contains('dark');
  let counter = 0;

  const linspace = (a, b, n, fn) => {
    const xs = [], ys = [];
    for (let k = 0; k <= n; k++) {
      const x = a + (b - a) * (k / n);
      xs.push(x);
      ys.push(fn(x));
    }
    return {x: xs, y: ys};
  };

  function describe(kind, n) {
    if (kind === 'products') {
      const xs = [], sums = [], products = [];
      let sum = 0, product = 1;
      for (let k = 1; k <= n; k++) {
        sum += 1 / (k * k);
        product /= k * k;
        xs.push(k); sums.push(sum); products.push(product);
      }
      return {
        bounds: [0, 1.86, Math.max(11, n + 1), -0.1],
        paths: [
          {x: xs, y: sums, color: NAVY, width: 3},
          {x: xs, y: products, color: OCHRE, width: 3},
          {x: [0, Math.max(11, n + 1)], y: [Math.PI * Math.PI / 6, Math.PI * Math.PI / 6], color: GUIDE, width: 1.7, dash: true}
        ],
        dots: [
          {x: n, y: sums[sums.length - 1], color: NAVY, radius: 4},
          {x: n, y: products[products.length - 1], color: OCHRE, radius: 4}
        ]
      };
    }
    if (kind === 'logarithms') {
      const f = u => u / Math.log10(u);
      return {
        bounds: [0, 24, n + 0.3, -19],
        paths: [
          {...linspace(0.07, 0.97, 180, f), color: NAVY, width: 2.8},
          {...linspace(1.08, n, 420, f), color: NAVY, width: 2.8},
          {x: [1, 1], y: [-19, 24], color: GUIDE, width: 1.5, dash: true}
        ],
        dots: [{x: Math.E, y: Math.E * Math.log(10), color: OCHRE, radius: 5}]
      };
    }
    if (kind === 'harmonic') {
      const xs = [], ys = [];
      let h = 0;
      for (let k = 1; k <= n; k++) {
        h += 1 / k;
        xs.push(k); ys.push(h);
      }
      const comparison = linspace(1, n, 240, x => Math.log(x) + GAMMA);
      return {
        bounds: [0, h + 0.55, n + 1, -0.2],
        paths: [
          {x: xs, y: ys, color: NAVY, width: 3},
          {...comparison, color: OCHRE, width: 2.2, dash: true}
        ],
        dots: xs.map((x, i) => ({x, y: ys[i], color: NAVY, radius: 2.5}))
      };
    }
    return null;
  }

  function canvasRenderer(el) {
    const canvas = document.createElement('canvas');
    canvas.className = 'mm-graph-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    el.replaceChildren(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return () => {};

    return function render(data) {
      const ratio = Math.min(window.devicePixelRatio || 1, 2.5);
      const w = Math.max(el.clientWidth || 300, 220);
      const h = Math.max(el.clientHeight || 280, 190);
      canvas.width = Math.round(w * ratio);
      canvas.height = Math.round(h * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const dark = isDark();
      ctx.fillStyle = dark ? '#424242' : '#ffffff';
      ctx.fillRect(0, 0, w, h);
      const m = {l: 44, r: 14, t: 16, b: 29};
      const plotW = Math.max(50, w - m.l - m.r);
      const plotH = Math.max(50, h - m.t - m.b);
      const [xmin, ymax, xmax, ymin] = data.bounds;
      const X = x => m.l + ((x - xmin) / (xmax - xmin)) * plotW;
      const Y = y => m.t + ((ymax - y) / (ymax - ymin)) * plotH;
      const muted = dark ? 'rgba(255,255,255,.45)' : '#8d9399';
      const grid = dark ? 'rgba(255,255,255,.10)' : '#e7eaf0';
      ctx.font = '12px -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif';
      ctx.lineWidth = 1;
      ctx.strokeStyle = grid;
      ctx.fillStyle = muted;
      const number = v => Math.abs(v) >= 10 ? String(Math.round(v)) : String(Number(v.toFixed(1)));
      for (let t = 0; t <= 5; t++) {
        const vx = xmin + (xmax - xmin) * t / 5;
        const px = X(vx);
        ctx.beginPath();ctx.moveTo(px, m.t);ctx.lineTo(px, m.t + plotH);ctx.stroke();
        ctx.textAlign = 'center';ctx.fillText(number(vx), px, h - 9);
        const vy = ymin + (ymax - ymin) * t / 5;
        const py = Y(vy);
        ctx.beginPath();ctx.moveTo(m.l,py);ctx.lineTo(m.l+plotW,py);ctx.stroke();
        ctx.textAlign = 'right';ctx.fillText(number(vy), m.l - 8, py + 4);
      }
      ctx.strokeStyle = dark ? '#9da6b0' : '#b7bec8';
      ctx.strokeRect(m.l, m.t, plotW, plotH);
      ctx.save(); ctx.beginPath(); ctx.rect(m.l, m.t, plotW, plotH);ctx.clip();
      for (const path of data.paths) {
        ctx.beginPath();
        ctx.strokeStyle = path.color;
        ctx.lineWidth = path.width || 2;
        ctx.setLineDash(path.dash ? [7, 5] : []);
        for (let i = 0; i < path.x.length; i++) {
          const x = path.x[i], y = path.y[i];
          if (!Number.isFinite(x) || !Number.isFinite(y)) continue;
          if (i === 0) ctx.moveTo(X(x), Y(y)); else ctx.lineTo(X(x),Y(y));
        }
        ctx.stroke(); ctx.setLineDash([]);
      }
      for (const dot of data.dots) {
        ctx.beginPath();ctx.fillStyle = dot.color;
        ctx.arc(X(dot.x),Y(dot.y),dot.radius || 3,0,Math.PI*2);ctx.fill();
      }
      ctx.restore();
    };
  }

  function jsxRenderer(el) {
    const id = `mm-board-${++counter}`;
    el.id = id;
    const board = window.JXG.JSXGraph.initBoard(id, {
      boundingbox: [0, 2, 10, -0.1], axis: true,
      showNavigation: false, showCopyright: false,
      keepAspectRatio: false, pan: {enabled: false}, zoom: {enabled: false}
    });
    let objects = [];
    return function render(data) {
      board.suspendUpdate();
      for (const obj of objects) board.removeObject(obj);
      objects = [];
      board.setBoundingBox(data.bounds, false);
      for (const path of data.paths) {
        objects.push(board.create('curve', [path.x, path.y], {
          strokeColor: path.color, strokeWidth: path.width,
          dash: path.dash ? 2 : 0, fixed: true, highlight: false
        }));
      }
      for (const dot of data.dots) {
        objects.push(board.create('point', [dot.x, dot.y], {
          name: '', size: Math.max(1.3, dot.radius / 2), fillColor: dot.color,
          strokeColor: dot.color, fixed: true, highlight: false, showInfobox: false
        }));
      }
      board.unsuspendUpdate();
      board.update();
    };
  }

  function initGraph(container) {
    const kind = container.dataset.mmGraph;
    const input = container.querySelector('input[type=range]');
    const output = container.querySelector('output');
    const el = container.querySelector('.mm-graph-board');
    if (!input || !output || !el) return;
    let render;
    if (window.JXG && window.JXG.JSXGraph) {
      try {render = jsxRenderer(el);} catch (err) {console.warn('JSXGraph unavailable, using built-in plot', err);}
    }
    if (!render) render = canvasRenderer(el);
    const redraw = () => {
      const n = Number(input.value);
      output.textContent = String(n);
      const data = describe(kind, n);
      if (data) render(data);
    };
    input.addEventListener('input', redraw);
    redraw();
    if (window.ResizeObserver) {
      new ResizeObserver(() => {
        // The canvas renderer needs resampling on resize; JSXGraph also resizes itself.
        if (el.querySelector('canvas.mm-graph-canvas')) redraw();
      }).observe(el);
    } else {
      window.addEventListener('resize', redraw, {passive: true});
    }
    document.addEventListener('mm-theme-changed', () => {if (el.querySelector('canvas.mm-graph-canvas')) redraw();});
  }

  function init() {
    document.querySelectorAll('.mm-graph[data-mm-graph]').forEach(initGraph);
  }
  window.MostlyMathInitGraphs = init;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
