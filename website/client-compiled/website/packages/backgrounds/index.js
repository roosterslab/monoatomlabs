import { jsx as A, jsxs as _ } from "react/jsx-runtime";
import { useRef as Y, useEffect as H } from "react";
const B = ({ className: I = "absolute inset-0 z-0" }) => {
  const P = Y(null);
  return H(() => {
    const m = P.current;
    if (!m) return;
    const c = m.getContext("2d");
    let s, i, y = [], b;
    const x = () => {
      const { offsetWidth: M, offsetHeight: S } = m;
      s = m.width = M, i = m.height = S, y = [];
      const u = 25, g = 60, p = 50, d = Math.ceil(i / p) + 2, l = Math.ceil(s / g) + 2;
      for (let n = -1; n < d; n++)
        for (let t = -1; t < l; t++) {
          let e = t * g, o = n * p;
          n % 2 !== 0 && (e += g / 2), y.push({
            x: e,
            y: o,
            originX: e,
            originY: o,
            size: u,
            phase: Math.random() * Math.PI * 2
          });
        }
    }, $ = (M, S, u, g) => {
      M.beginPath();
      for (let p = 0; p < 6; p++) {
        const d = Math.PI / 3 * p + Math.PI / 6, l = S + g * Math.cos(d), n = u + g * Math.sin(d);
        p === 0 ? M.moveTo(l, n) : M.lineTo(l, n);
      }
      M.closePath(), M.stroke(), M.fill();
    }, C = (M) => {
      if (!c) return;
      c.clearRect(0, 0, s, i);
      const S = M * 8e-4;
      y.forEach((u, g) => {
        const p = Math.sin(u.originY * 8e-3 + u.originX * 5e-3 + S) * 15, d = Math.cos(u.originX * 5e-3 + u.originY * 8e-3 + S) * 15, n = 0.1 + (Math.sin(u.originX * 0.01 + S * 1.5) + 1) * 0.25;
        u.x = u.originX + p, u.y = u.originY + d, c.strokeStyle = `rgba(255, 255, 255, ${n})`, c.fillStyle = `rgba(255, 255, 255, ${n * 0.15})`, c.lineWidth = 1.5, $(c, u.x, u.y, u.size);
      }), b = requestAnimationFrame(C);
    };
    return x(), window.addEventListener("resize", x), b = requestAnimationFrame(C), () => {
      window.removeEventListener("resize", x), cancelAnimationFrame(b);
    };
  }, []), /* @__PURE__ */ A("canvas", { ref: P, className: I, style: { width: "100%", height: "100%" } });
}, D = ({ className: I = "absolute inset-0 z-0" }) => {
  const P = Y(null);
  Y(null);
  const m = Y(!1);
  return H(() => {
    const c = P.current;
    if (!c) return;
    const s = c.getContext("2d", {
      alpha: !0,
      desynchronized: !0,
      // Allow async GPU rendering
      willReadFrequently: !1
      // We only write, never read
    });
    let i, y, b = [], x;
    const $ = [], C = (d) => {
      const l = [];
      for (let n = 0; n < 6; n++) {
        const t = Math.PI / 3 * n + Math.PI / 6;
        l.push({
          cos: Math.cos(t) * d,
          sin: Math.sin(t) * d
        });
      }
      return l;
    }, M = () => {
      const { offsetWidth: d, offsetHeight: l } = c;
      i = c.width = d, y = c.height = l, b = [];
      const n = 25, t = 60, e = 50, o = Math.ceil(y / e) + 2, a = Math.ceil(i / t) + 2;
      $.length = 0, $.push(...C(n));
      for (let r = -1; r < o; r++)
        for (let h = -1; h < a; h++) {
          let f = h * t, w = r * e;
          r % 2 !== 0 && (f += t / 2), b.push({
            originX: f,
            originY: w,
            x: f,
            y: w,
            size: n,
            // Pre-calculated constants for wave equations
            waveConstY: w * 8e-3,
            waveConstX: f * 5e-3,
            depthConst: f * 0.01
          });
        }
      m.current = !0;
    }, S = (d) => {
      if (!s || !m.current) return;
      s.globalCompositeOperation = "source-over", s.fillStyle = "rgba(0, 0, 0, 0)", s.clearRect(0, 0, i, y);
      const l = d * 8e-4, n = Math.cos(l), t = Math.sin(l * 1.5), e = /* @__PURE__ */ new Map(), o = b.length;
      for (let a = 0; a < o; a++) {
        const r = b[a], h = Math.sin(r.waveConstY + r.waveConstX + l) * 15, f = n * (r.waveConstY + r.waveConstX) * 3;
        r.x = r.originX + h, r.y = r.originY + f;
        const w = t * Math.sin(r.depthConst), z = Math.round((0.1 + (w + 1) * 0.25) * 10) / 10;
        e.has(z) || e.set(z, []), e.get(z).push(r);
      }
      e.forEach((a, r) => {
        s.strokeStyle = `rgba(255, 255, 255, ${r})`, s.fillStyle = `rgba(255, 255, 255, ${r * 0.15})`, s.lineWidth = 1.5, s.beginPath(), a.forEach((h) => {
          $.forEach((f, w) => {
            const z = h.x + f.cos, k = h.y + f.sin;
            w === 0 ? s.moveTo(z, k) : s.lineTo(z, k);
          }), s.closePath();
        }), s.fill(), s.stroke();
      }), x = requestAnimationFrame(S);
    }, g = ((d, l) => {
      let n;
      return function(...e) {
        clearTimeout(n), n = setTimeout(() => d(...e), l);
      };
    })(() => {
      m.current = !1, M();
    }, 250), p = setTimeout(() => {
      M(), x = requestAnimationFrame(S);
    }, 100);
    return window.addEventListener("resize", g), () => {
      clearTimeout(p), window.removeEventListener("resize", g), x && cancelAnimationFrame(x), m.current = !1, b = [], $.length = 0;
    };
  }, []), /* @__PURE__ */ A("canvas", { ref: P, className: I, style: { width: "100%", height: "100%" } });
}, V = ({
  children: I,
  className: P = "",
  contentClassName: m = "",
  hexOpacity: c = 70
}) => /* @__PURE__ */ _("section", { className: `relative bg-black overflow-hidden ${P}`, children: [
  /* @__PURE__ */ _("div", { className: "absolute inset-0 z-0", children: [
    /* @__PURE__ */ A(B, { className: `w-full h-full opacity-${c}` }),
    /* @__PURE__ */ A("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" })
  ] }),
  /* @__PURE__ */ A("div", { className: `relative z-10 ${m}`, children: I })
] }), J = ({
  children: I,
  className: P = "",
  contentClassName: m = "",
  hexOpacity: c = 70
}) => /* @__PURE__ */ _("section", { className: `relative bg-black overflow-hidden ${P}`, children: [
  /* @__PURE__ */ _("div", { className: "absolute inset-0 z-0", children: [
    /* @__PURE__ */ A(D, { className: `w-full h-full opacity-${c}` }),
    /* @__PURE__ */ A("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" })
  ] }),
  /* @__PURE__ */ A("div", { className: `relative z-10 ${m}`, children: I })
] }), Q = ({
  children: I,
  className: P = "",
  contentClassName: m = ""
}) => /* @__PURE__ */ A("section", { className: `relative bg-black overflow-hidden ${P}`, children: /* @__PURE__ */ A("div", { className: `relative z-10 ${m}`, children: I }) }), U = ({ scrollSpeed: I = 0.8, hexRadius: P = 30, className: m = "" }) => {
  const c = Y(null);
  return H(() => {
    const s = c.current;
    if (!s) return;
    const i = s.getContext("2d");
    let y, b, x = [], $, C = 0;
    const M = P, S = I;
    class u {
      constructor(l, n) {
        this.gridX = l, this.gridY = n, this.x = l, this.y = n, this.phase = Math.random() * Math.PI * 2, this.driftSpeed = Math.random() * 0.5 + 0.2, this.randomOffsetX = (Math.random() - 0.5) * 100, this.randomOffsetY = (Math.random() - 0.5) * 100, this.neighbors = [];
      }
      update(l, n) {
        let t = (this.gridX + l) % (y + M * 4);
        t > y + 100 && (t -= y + 200);
        const e = t / y;
        let o = 0, a = 1;
        if (e < 0.35 ? (o = 1, a = 0.4) : e < 0.65 ? (o = 1 - (e - 0.35) / 0.3, a = 0.6 + (1 - o) * 0.4) : (o = 0, a = 0.3), o > 0.01) {
          const r = Math.sin(n * 2 + this.phase) * 30 * o, h = Math.cos(n * 1.5 + this.phase) * 30 * o, f = this.randomOffsetX * o, w = this.randomOffsetY * o;
          this.x = t + r + f, this.y = this.gridY + h + w;
        } else
          this.x = t, this.y = this.gridY;
        return { chaos: o, opacity: a };
      }
    }
    const g = () => {
      y = s.width = window.innerWidth, b = s.height = window.innerHeight, x = [];
      const d = M * 1.5, l = M * Math.sqrt(3), n = Math.ceil(y / d) + 6, t = Math.ceil(b / l) + 4, e = [];
      for (let o = 0; o < n; o++) {
        e[o] = [];
        for (let a = 0; a < t; a++) {
          let r = o * d - 100, h = a * l - 50;
          o % 2 !== 0 && (h += l / 2);
          const f = new u(r, h);
          x.push(f), e[o][a] = f;
        }
      }
    }, p = (d) => {
      const l = d * 1e-3;
      C += S, i.clearRect(0, 0, y, b), x.forEach((n) => {
        const { chaos: t, opacity: e } = n.update(C, l);
        if (!(n.x < -50 || n.x > y + 50))
          if (t > 0.8)
            i.fillStyle = `rgba(255, 255, 255, ${e})`, i.beginPath(), i.arc(n.x, n.y, 2, 0, Math.PI * 2), i.fill();
          else if (t > 0.01) {
            const o = 1 - t;
            i.strokeStyle = `rgba(255, 255, 255, ${e * 0.5})`, i.lineWidth = 1, i.beginPath();
            for (let a = 0; a < 6; a++) {
              if (Math.random() > o + 0.2) continue;
              const r = Math.PI / 3 * a, h = n.x + M * Math.cos(r), f = n.y + M * Math.sin(r), w = (Math.random() - 0.5) * 10 * t, z = (Math.random() - 0.5) * 10 * t;
              a === 0 ? i.moveTo(h + w, f + z) : i.lineTo(h + w, f + z);
            }
            t < 0.2 && i.closePath(), i.stroke(), i.fillStyle = `rgba(255, 255, 255, ${e})`, i.beginPath(), i.arc(n.x, n.y, 1.5, 0, Math.PI * 2), i.fill();
          } else {
            i.strokeStyle = "rgba(255, 255, 255, 0.4)", i.lineWidth = 1.5, i.beginPath();
            for (let o = 0; o < 6; o++) {
              const a = Math.PI / 3 * o, r = n.x + M * Math.cos(a), h = n.y + M * Math.sin(a);
              o === 0 ? i.moveTo(r, h) : i.lineTo(r, h);
            }
            i.closePath(), i.stroke(), i.fillStyle = "rgba(255, 255, 255, 0.03)", i.fill();
          }
      }), $ = requestAnimationFrame(p);
    };
    return g(), window.addEventListener("resize", g), $ = requestAnimationFrame(p), () => {
      window.removeEventListener("resize", g), cancelAnimationFrame($);
    };
  }, [I, P]), /* @__PURE__ */ A(
    "canvas",
    {
      ref: c,
      className: `absolute inset-0 w-full h-full block bg-black ${m}`
    }
  );
}, Z = ({
  children: I,
  className: P = "",
  contentClassName: m = "",
  scrollSpeed: c = 0.8,
  hexRadius: s = 30,
  showVignette: i = !0,
  showGradient: y = !0
}) => /* @__PURE__ */ _("section", { className: `relative bg-black overflow-hidden ${P}`, children: [
  /* @__PURE__ */ _("div", { className: "absolute inset-0 z-0", children: [
    /* @__PURE__ */ A(U, { scrollSpeed: c, hexRadius: s }),
    y && /* @__PURE__ */ A("div", { className: "absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black pointer-events-none" }),
    i && /* @__PURE__ */ A("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" })
  ] }),
  /* @__PURE__ */ A("div", { className: `relative z-10 ${m}`, children: I })
] }), ee = ({ className: I = "absolute inset-0 z-0" }) => {
  const P = Y(null), m = Y({ x: 0, y: 0 });
  return H(() => {
    const c = P.current;
    if (!c) return;
    const s = c.getContext("2d");
    let i, y, b = [], x = [], $;
    const C = 800, M = () => {
      i = c.width = window.innerWidth, y = c.height = window.innerHeight, b = [], x = [];
      const g = 40, p = g * Math.sqrt(3), d = g * 1.5, l = Math.ceil(i / p) + 4, n = Math.ceil(y / d) + 4, t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set();
      for (let o = -Math.floor(l / 2); o < l / 2; o++)
        for (let a = -Math.floor(n / 2); a < n / 2; a++) {
          let r = o * p, h = a * d;
          a % 2 !== 0 && (r += p / 2);
          const f = [];
          for (let w = 0; w < 6; w++) {
            const z = Math.PI / 180 * (60 * w + 30), k = r + g * Math.cos(z), F = h + g * Math.sin(z), E = `${Math.round(k)},${Math.round(F)}`;
            let v;
            if (t.has(E))
              v = t.get(E);
            else {
              const X = k * 3e-3, R = F * 3e-3, T = Math.sin(X * 2) * 80 + Math.cos(R * 2) * 80;
              b.push({
                x: k,
                y: F,
                z: T,
                ox: k,
                oy: F,
                oz: T
              }), v = b.length - 1, t.set(E, v);
            }
            f.push(v);
          }
          for (let w = 0; w < 6; w++) {
            const z = f[w], k = f[(w + 1) % 6], F = z < k ? `${z},${k}` : `${k},${z}`;
            e.has(F) || (x.push([z, k]), e.add(F));
          }
        }
    }, S = (g) => {
      if (!s) return;
      s.fillStyle = "#000", s.fillRect(0, 0, i, y);
      const p = m.current.y * 5e-4 + Math.sin(g * 2e-4) * 0.1, d = m.current.x * 5e-4 + g * 1e-4, l = b.map((n) => {
        let t = n.oy * Math.cos(p) - n.oz * Math.sin(p), e = n.oy * Math.sin(p) + n.oz * Math.cos(p), o = n.ox * Math.cos(d) - e * Math.sin(d), a = n.ox * Math.sin(d) + e * Math.cos(d);
        const r = C / (C + a + 500), h = o * r + i / 2, f = t * r + y / 2;
        return { x: h, y: f, scale: r, z: a };
      });
      s.strokeStyle = "#333", s.lineWidth = 1, x.forEach(([n, t]) => {
        const e = l[n], o = l[t];
        if (e.scale > 0 && o.scale > 0) {
          const a = Math.min(e.scale, o.scale) * 0.5;
          s.strokeStyle = `rgba(255, 255, 255, ${a * 0.3})`, s.beginPath(), s.moveTo(e.x, e.y), s.lineTo(o.x, o.y), s.stroke();
        }
      }), l.forEach((n) => {
        if (n.scale > 0) {
          const t = n.scale, e = n.scale * 2;
          s.fillStyle = `rgba(255, 255, 255, ${t})`, s.beginPath(), s.arc(n.x, n.y, e, 0, Math.PI * 2), s.fill();
        }
      }), $ = requestAnimationFrame(S);
    }, u = (g) => {
      m.current = {
        x: g.clientX - window.innerWidth / 2,
        y: g.clientY - window.innerHeight / 2
      };
    };
    return M(), window.addEventListener("resize", M), window.addEventListener("mousemove", u), $ = requestAnimationFrame(S), () => {
      window.removeEventListener("resize", M), window.removeEventListener("mousemove", u), cancelAnimationFrame($);
    };
  }, []), /* @__PURE__ */ A("canvas", { ref: P, className: I });
}, te = ({ className: I = "absolute inset-0 z-0" }) => {
  const P = Y(null), m = Y({ x: 0, y: 0 }), c = Y(!1);
  return H(() => {
    const s = P.current;
    if (!s) return;
    const i = s.getContext("2d", {
      alpha: !1,
      // Opaque canvas = faster rendering
      desynchronized: !0,
      // Allow GPU to render async
      willReadFrequently: !1
      // We only write, never read
    });
    let y, b, x = [], $ = [], C;
    const M = 800;
    let S = !1;
    const u = { x: 0, y: 0 }, g = () => {
      y = s.width = window.innerWidth, b = s.height = window.innerHeight, x = [], $ = [];
      const e = 40, o = e * Math.sqrt(3), a = e * 1.5, r = Math.ceil(y / o) + 4, h = Math.ceil(b / a) + 4, f = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Set();
      for (let z = -Math.floor(r / 2); z < r / 2; z++)
        for (let k = -Math.floor(h / 2); k < h / 2; k++) {
          let F = z * o, E = k * a;
          k % 2 !== 0 && (F += o / 2);
          const v = [];
          for (let X = 0; X < 6; X++) {
            const R = Math.PI / 180 * (60 * X + 30), T = F + e * Math.cos(R), N = E + e * Math.sin(R), L = `${Math.round(T)},${Math.round(N)}`;
            let q;
            if (f.has(L))
              q = f.get(L);
            else {
              const W = T * 3e-3, j = N * 3e-3, O = Math.sin(W * 2) * 80 + Math.cos(j * 2) * 80;
              x.push({
                x: T,
                y: N,
                z: O,
                ox: T,
                oy: N,
                oz: O
              }), q = x.length - 1, f.set(L, q);
            }
            v.push(q);
          }
          for (let X = 0; X < 6; X++) {
            const R = v[X], T = v[(X + 1) % 6], N = R < T ? `${R},${T}` : `${T},${R}`;
            w.has(N) || ($.push([R, T]), w.add(N));
          }
        }
      c.current = !0;
    }, p = (e) => {
      if (!i || !c.current) return;
      i.fillStyle = "#000", i.fillRect(0, 0, y, b);
      const o = m.current.y * 5e-4 + Math.sin(e * 2e-4) * 0.1, a = m.current.x * 5e-4 + e * 1e-4, r = Math.cos(o), h = Math.sin(o), f = Math.cos(a), w = Math.sin(a), z = x.length, k = new Array(z);
      for (let E = 0; E < z; E++) {
        const v = x[E], X = v.oy * r - v.oz * h, R = v.oy * h + v.oz * r, T = v.ox * f - R * w, N = v.ox * w + R * f, L = M / (M + N + 500), q = T * L + y / 2, W = X * L + b / 2;
        k[E] = { x: q, y: W, scale: L, z: N };
      }
      i.strokeStyle = "#333", i.lineWidth = 1, i.beginPath();
      const F = $.length;
      for (let E = 0; E < F; E++) {
        const [v, X] = $[E], R = k[v], T = k[X];
        if (R.scale > 0 && T.scale > 0) {
          const N = Math.min(R.scale, T.scale) * 0.15;
          i.strokeStyle = `rgba(255, 255, 255, ${N})`, i.moveTo(R.x, R.y), i.lineTo(T.x, T.y);
        }
      }
      i.stroke();
      for (let E = 0; E < z; E++) {
        const v = k[E];
        if (v.scale > 0) {
          const X = v.scale, R = v.scale * 2;
          i.fillStyle = `rgba(255, 255, 255, ${X})`, i.beginPath(), i.arc(v.x, v.y, R, 0, Math.PI * 2), i.fill();
        }
      }
      C = requestAnimationFrame(p);
    }, d = (e) => {
      u.x = e.clientX - window.innerWidth / 2, u.y = e.clientY - window.innerHeight / 2, S || (S = !0, requestAnimationFrame(() => {
        m.current.x = u.x, m.current.y = u.y, S = !1;
      }));
    }, n = ((e, o) => {
      let a;
      return function(...h) {
        clearTimeout(a), a = setTimeout(() => e(...h), o);
      };
    })(() => {
      c.current = !1, g();
    }, 250), t = setTimeout(() => {
      g(), C = requestAnimationFrame(p);
    }, 100);
    return window.addEventListener("resize", n), window.addEventListener("mousemove", d, { passive: !0 }), () => {
      clearTimeout(t), window.removeEventListener("resize", n), window.removeEventListener("mousemove", d), C && cancelAnimationFrame(C), c.current = !1, x = [], $ = [];
    };
  }, []), /* @__PURE__ */ A("canvas", { ref: P, className: I });
}, ne = ({ className: I = "absolute inset-0 z-0" }) => {
  const P = Y(null), m = Y({ x: -500, y: -500 });
  return H(() => {
    const c = P.current;
    if (!c) return;
    const s = c.getContext("2d");
    let i, y, b;
    const x = 30, $ = 4, C = 0.25, M = 0.94;
    let S = [], u = [];
    const g = /* @__PURE__ */ new Map(), p = (t, e) => {
      const o = `${t.toFixed(1)},${e.toFixed(1)}`;
      return g.has(o) || g.set(o, { x: t, y: e, neighbors: [], energy: 0 }), g.get(o);
    }, d = () => {
      i = c.width = window.innerWidth, y = c.height = window.innerHeight;
      const t = c.getBoundingClientRect();
      i = c.width = t.width, y = c.height = t.height, S = [], u = [], g.clear();
      const e = x * 3 / 2, o = x * Math.sqrt(3), a = Math.ceil(i / e) + 2, r = Math.ceil(y / o) + 2;
      for (let h = -1; h < a; h++)
        for (let f = -1; f < r; f++) {
          const w = h * e, z = f * o + (h % 2 !== 0 ? o / 2 : 0), k = [];
          for (let F = 0; F < 6; F++) {
            const E = Math.PI / 180 * (60 * F), v = w + x * Math.cos(E), X = z + x * Math.sin(E);
            k.push(p(v, X));
          }
          for (let F = 0; F < 6; F++) {
            const E = k[F], v = k[(F + 1) % 6];
            E.neighbors.includes(v) || (E.neighbors.push(v), v.neighbors.push(E));
          }
        }
      S = Array.from(g.values());
    }, l = () => {
      if (s) {
        if (s.fillStyle = "rgba(10, 10, 10, 0.4)", s.fillRect(0, 0, i, y), s.strokeStyle = "#262626", s.lineWidth = 1, s.beginPath(), S.forEach((t) => {
          t.neighbors.forEach((e) => {
            s.moveTo(t.x, t.y), s.lineTo(e.x, e.y);
          });
        }), s.stroke(), Math.random() < C) {
          const t = S[Math.floor(Math.random() * S.length)];
          if (t && t.neighbors.length > 0) {
            const e = t.neighbors[Math.floor(Math.random() * t.neighbors.length)];
            u.push({
              start: t,
              end: e,
              progress: 0,
              type: Math.random() > 0.5 ? "bright" : "dim"
              // Variation in brightness
            });
          }
        }
        s.shadowBlur = 8;
        for (let t = u.length - 1; t >= 0; t--) {
          const e = u[t], o = Math.hypot(e.start.x - e.end.x, e.start.y - e.end.y);
          if (e.progress += $ / o, e.progress >= 1)
            if (e.end.energy = 1, Math.random() > 0.1 && e.end.neighbors.length > 0) {
              const a = e.end.neighbors.filter((r) => r !== e.start);
              if (a.length > 0) {
                const r = a[Math.floor(Math.random() * a.length)];
                e.start = e.end, e.end = r, e.progress = 0;
              } else
                u.splice(t, 1);
            } else
              u.splice(t, 1);
          else {
            const a = e.start.x + (e.end.x - e.start.x) * e.progress, r = e.start.y + (e.end.y - e.start.y) * e.progress, h = e.type === "bright" ? "#ffffff" : "#a3a3a3";
            s.shadowColor = "#ffffff", s.fillStyle = h, s.beginPath(), s.arc(a, r, 1.8, 0, Math.PI * 2), s.fill();
          }
        }
        s.shadowBlur = 0, S.forEach((t) => {
          Math.hypot(t.x - m.current.x, t.y - m.current.y) < 150 && (t.energy = Math.min(t.energy + 0.1, 1)), t.energy > 0.01 && (s.fillStyle = `rgba(255, 255, 255, ${t.energy})`, s.beginPath(), s.arc(t.x, t.y, 1.5 + t.energy * 2, 0, Math.PI * 2), s.fill(), t.energy *= M);
        }), b = requestAnimationFrame(l);
      }
    }, n = (t) => {
      const e = c.getBoundingClientRect();
      m.current = {
        x: t.clientX - e.left,
        y: t.clientY - e.top
      };
    };
    return d(), window.addEventListener("resize", d), window.addEventListener("mousemove", n), b = requestAnimationFrame(l), () => {
      window.removeEventListener("resize", d), window.removeEventListener("mousemove", n), cancelAnimationFrame(b);
    };
  }, []), /* @__PURE__ */ A("canvas", { ref: P, className: I });
};
export {
  U as AtomsToIndustry,
  Z as AtomsToIndustryBackground,
  Q as DarkBackground,
  V as DarkHexBackground,
  J as DarkHexBackgroundOptimized,
  ee as GrapheneLattice,
  te as GrapheneLatticeOptimized,
  B as HexagonWave,
  D as HexagonWaveOptimized,
  ne as MonochromeGrid
};
