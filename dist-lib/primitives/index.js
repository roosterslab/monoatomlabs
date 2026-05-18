import { jsx as e, Fragment as h, jsxs as w } from "react/jsx-runtime";
import Y, { useRef as H, useEffect as J } from "react";
import { Link as K } from "react-router-dom";
import { ArrowRight as Q } from "lucide-react";
const V = ({ className: t = "absolute inset-0 z-0" }) => {
  const r = H(null), n = H({ x: 0, y: 0 }), a = H(!1);
  return J(() => {
    const i = r.current;
    if (!i) return;
    const o = i.getContext("2d", {
      alpha: !1,
      // Opaque canvas = faster rendering
      desynchronized: !0,
      // Allow GPU to render async
      willReadFrequently: !1
      // We only write, never read
    });
    let v, f, g = [], k = [], F;
    const q = 800;
    let j = !1;
    const R = { x: 0, y: 0 }, B = () => {
      v = i.width = window.innerWidth, f = i.height = window.innerHeight, g = [], k = [];
      const x = 40, b = x * Math.sqrt(3), y = x * 1.5, z = Math.ceil(v / b) + 4, N = Math.ceil(f / y) + 4, $ = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Set();
      for (let S = -Math.floor(z / 2); S < z / 2; S++)
        for (let p = -Math.floor(N / 2); p < N / 2; p++) {
          let L = S * b, d = p * y;
          p % 2 !== 0 && (L += b / 2);
          const s = [];
          for (let u = 0; u < 6; u++) {
            const l = Math.PI / 180 * (60 * u + 30), c = L + x * Math.cos(l), m = d + x * Math.sin(l), M = `${Math.round(c)},${Math.round(m)}`;
            let C;
            if ($.has(M))
              C = $.get(M);
            else {
              const P = c * 3e-3, D = m * 3e-3, X = Math.sin(P * 2) * 80 + Math.cos(D * 2) * 80;
              g.push({
                x: c,
                y: m,
                z: X,
                ox: c,
                oy: m,
                oz: X
              }), C = g.length - 1, $.set(M, C);
            }
            s.push(C);
          }
          for (let u = 0; u < 6; u++) {
            const l = s[u], c = s[(u + 1) % 6], m = l < c ? `${l},${c}` : `${c},${l}`;
            T.has(m) || (k.push([l, c]), T.add(m));
          }
        }
      a.current = !0;
    }, G = (x) => {
      if (!o || !a.current) return;
      o.fillStyle = "#000", o.fillRect(0, 0, v, f);
      const b = n.current.y * 5e-4 + Math.sin(x * 2e-4) * 0.1, y = n.current.x * 5e-4 + x * 1e-4, z = Math.cos(b), N = Math.sin(b), $ = Math.cos(y), T = Math.sin(y), S = g.length, p = new Array(S);
      for (let d = 0; d < S; d++) {
        const s = g[d], u = s.oy * z - s.oz * N, l = s.oy * N + s.oz * z, c = s.ox * $ - l * T, m = s.ox * T + l * $, M = q / (q + m + 500), C = c * M + v / 2, P = u * M + f / 2;
        p[d] = { x: C, y: P, scale: M, z: m };
      }
      o.strokeStyle = "#333", o.lineWidth = 1, o.beginPath();
      const L = k.length;
      for (let d = 0; d < L; d++) {
        const [s, u] = k[d], l = p[s], c = p[u];
        if (l.scale > 0 && c.scale > 0) {
          const m = Math.min(l.scale, c.scale) * 0.15;
          o.strokeStyle = `rgba(255, 255, 255, ${m})`, o.moveTo(l.x, l.y), o.lineTo(c.x, c.y);
        }
      }
      o.stroke();
      for (let d = 0; d < S; d++) {
        const s = p[d];
        if (s.scale > 0) {
          const u = s.scale, l = s.scale * 2;
          o.fillStyle = `rgba(255, 255, 255, ${u})`, o.beginPath(), o.arc(s.x, s.y, l, 0, Math.PI * 2), o.fill();
        }
      }
      F = requestAnimationFrame(G);
    }, W = (x) => {
      R.x = x.clientX - window.innerWidth / 2, R.y = x.clientY - window.innerHeight / 2, j || (j = !0, requestAnimationFrame(() => {
        n.current.x = R.x, n.current.y = R.y, j = !1;
      }));
    }, I = ((x, b) => {
      let y;
      return function(...N) {
        clearTimeout(y), y = setTimeout(() => x(...N), b);
      };
    })(() => {
      a.current = !1, B();
    }, 250), U = setTimeout(() => {
      B(), F = requestAnimationFrame(G);
    }, 100);
    return window.addEventListener("resize", I), window.addEventListener("mousemove", W, { passive: !0 }), () => {
      clearTimeout(U), window.removeEventListener("resize", I), window.removeEventListener("mousemove", W), F && cancelAnimationFrame(F), a.current = !1, g = [], k = [];
    };
  }, []), /* @__PURE__ */ e("canvas", { ref: r, className: t });
};
function Z(t, r) {
  return !!t && typeof t == "object" && t.type === r;
}
function _(t, r) {
  let n = null;
  return Y.Children.forEach(t, (a) => {
    !n && Z(a, r) && (n = a);
  }), n;
}
function A(t, r) {
  const n = _(t, r);
  return n ? n.props.children : null;
}
const tt = ({ children: t }) => /* @__PURE__ */ e(h, { children: t }), et = ({ children: t }) => /* @__PURE__ */ e(h, { children: t }), nt = ({ children: t }) => /* @__PURE__ */ e(h, { children: t }), rt = ({ children: t }) => /* @__PURE__ */ e(h, { children: t }), ot = ({ children: t }) => /* @__PURE__ */ e(h, { children: t }), yt = ({ children: t }) => /* @__PURE__ */ e("span", { className: "text-neutral-500", children: t }), wt = ({ children: t }) => {
  const r = A(t, tt), n = A(t, et), a = A(t, nt), i = A(t, rt), o = A(t, ot);
  return /* @__PURE__ */ w("section", { className: "relative pt-40 pb-24 md:pt-56 md:pb-40 px-6 bg-black overflow-hidden border-b border-neutral-800", children: [
    /* @__PURE__ */ e(V, {}),
    /* @__PURE__ */ e(
      "div",
      {
        className: "absolute inset-0 z-0 bg-radial-gradient from-transparent to-black pointer-events-none",
        style: { background: "radial-gradient(circle at center, transparent 0%, #000 90%)" }
      }
    ),
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" }),
    /* @__PURE__ */ w("div", { className: "max-w-7xl mx-auto relative z-10 text-center md:text-left fade-in", children: [
      r && /* @__PURE__ */ w(
        "div",
        {
          className: "relative inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-10",
          style: {
            background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 0 24px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.1)"
          },
          children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: "absolute inset-0 rounded-full blur-md opacity-20",
                style: { background: "linear-gradient(135deg, #fff 0%, transparent 100%)" }
              }
            ),
            /* @__PURE__ */ w("span", { className: "relative flex h-2 w-2", children: [
              /* @__PURE__ */ e("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" }),
              /* @__PURE__ */ e("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-white" })
            ] }),
            /* @__PURE__ */ e(
              "span",
              {
                className: "relative text-xs font-semibold tracking-[0.2em] uppercase",
                style: {
                  background: "linear-gradient(90deg, #ffffff 0%, #a3a3a3 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                },
                children: r
              }
            )
          ]
        }
      ),
      n && /* @__PURE__ */ e("h1", { className: "text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white tracking-tighter leading-tight mb-8 drop-shadow-xl", children: n }),
      a && /* @__PURE__ */ e("p", { className: "text-xl md:text-2xl text-neutral-400 max-w-2xl mb-12 font-light leading-relaxed", children: a }),
      i && /* @__PURE__ */ e("div", { className: "flex flex-col sm:flex-row gap-4 mb-20", children: i }),
      o && /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-800 pt-8", children: o })
    ] })
  ] });
};
function at(t) {
  return !!t && typeof t == "object" && "type" in t;
}
function st(t, r) {
  return at(t) && t.type === r;
}
function lt(t, r) {
  let n = null;
  return Y.Children.forEach(t, (a) => {
    !n && st(a, r) && (n = a);
  }), n;
}
function E(t, r) {
  const n = lt(t, r);
  return n ? n.props.children : null;
}
const it = ({ children: t }) => /* @__PURE__ */ e(h, { children: t }), ct = ({ children: t }) => /* @__PURE__ */ e(h, { children: t }), dt = ({ children: t }) => /* @__PURE__ */ e(h, { children: t }), ut = ({ children: t }) => /* @__PURE__ */ e(h, { children: t }), xt = ({ children: t }) => /* @__PURE__ */ e(h, { children: t });
function vt({ id: t, tone: r = "light", children: n }) {
  const a = E(n, it), i = E(n, ct), o = E(n, dt), v = E(n, ut), f = E(n, xt), g = r === "dark" ? "bg-black text-white border-neutral-900" : "bg-white text-neutral-900 border-neutral-200", k = r === "dark" ? "text-neutral-400" : "text-neutral-600";
  return /* @__PURE__ */ e("section", { id: t, className: `py-24 px-6 border-b ${g}`, children: /* @__PURE__ */ w("div", { className: "max-w-7xl mx-auto", children: [
    (a || i || o) && /* @__PURE__ */ w("div", { className: "mb-16", children: [
      a && /* @__PURE__ */ e("div", { className: "mb-6", children: a }),
      i && /* @__PURE__ */ e("div", { className: "mb-4", children: i }),
      o && /* @__PURE__ */ e("div", { className: `max-w-3xl ${k}`, children: o })
    ] }),
    v,
    f && /* @__PURE__ */ e("div", { className: "mt-12", children: f })
  ] }) });
}
const kt = ({ children: t }) => /* @__PURE__ */ e("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200 border border-neutral-300 text-neutral-600 text-xs font-mono font-medium tracking-wider uppercase", children: t }), Nt = ({ as: t = "h2", children: r }) => /* @__PURE__ */ e(t, { className: "text-4xl md:text-6xl font-display font-medium leading-tight tracking-tight text-neutral-900", children: r }), St = ({ as: t = "h1", children: r }) => /* @__PURE__ */ e(t, { className: "text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white tracking-tighter leading-tight drop-shadow-xl", children: r }), Mt = ({ children: t }) => /* @__PURE__ */ e("p", { className: "text-lg text-neutral-600 leading-relaxed font-light", children: t }), zt = ({ children: t }) => /* @__PURE__ */ e("span", { className: "text-neutral-400", children: t }), $t = ({ children: t }) => /* @__PURE__ */ e("span", { className: "text-neutral-900 font-medium", children: t }), Ct = ({ children: t }) => /* @__PURE__ */ e("span", { className: "text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600", children: t }), O = ({ children: t, variant: r = "primary", theme: n = "light", className: a = "", icon: i, onClick: o }) => /* @__PURE__ */ w("button", { onClick: o, className: `inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-sm group shadow-sm relative overflow-hidden ${r === "primary" ? n === "dark" ? "bg-white text-black hover:bg-neutral-200 border border-white z-10 shadow-lg" : "bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-900" : r === "secondary" ? n === "dark" ? "bg-transparent text-white border border-neutral-700 hover:border-white hover:bg-neutral-900 z-10" : "bg-white text-neutral-900 border border-neutral-200 hover:border-neutral-900" : n === "dark" ? "text-neutral-400 hover:text-white px-0 py-2 shadow-none" : "text-neutral-500 hover:text-neutral-900 px-0 py-2 shadow-none"} ${a}`, children: [
  t,
  i && /* @__PURE__ */ e(i, { className: "w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" })
] }), Tt = ({ children: t }) => /* @__PURE__ */ e("div", { className: "flex flex-col sm:flex-row gap-4", children: t }), At = ({ to: t, children: r }) => /* @__PURE__ */ e(K, { to: t, children: /* @__PURE__ */ e(O, { variant: "primary", theme: "dark", icon: Q, children: r }) }), Et = ({ to: t, children: r }) => /* @__PURE__ */ e(K, { to: t, children: /* @__PURE__ */ e(O, { variant: "secondary", theme: "dark", children: r }) }), mt = ({ value: t, label: r, theme: n = "dark", className: a = "", valueClassName: i = "", labelClassName: o = "" }) => /* @__PURE__ */ w("div", { className: `border-l pl-6 py-2 group transition-colors duration-300 ${n === "dark" ? "border-neutral-800 hover:border-white" : "border-neutral-200 hover:border-neutral-900"} ${a}`, children: [
  /* @__PURE__ */ e("div", { className: `text-4xl font-light mb-1 transition-colors ${n === "dark" ? "text-white group-hover:text-neutral-200" : "text-neutral-900"} ${i}`, children: t }),
  /* @__PURE__ */ e("div", { className: `text-xs uppercase tracking-wider font-medium ${n === "dark" ? "text-neutral-500 group-hover:text-neutral-300" : "text-neutral-500"} ${o}`, children: r })
] }), Ft = ({ children: t }) => /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-800 pt-8", children: t }), Rt = ({ value: t, label: r, tone: n = "dark" }) => /* @__PURE__ */ e(mt, { value: t, label: r, theme: n });
export {
  Tt as ActionGroup,
  rt as Actions,
  Nt as DisplayTitle,
  $t as Emphasis,
  tt as Eyebrow,
  Ct as GradientAccent,
  et as Heading,
  yt as Highlight,
  wt as HomeHero,
  kt as Kicker,
  nt as Lead,
  zt as Muted,
  St as PageTitle,
  Mt as Paragraph,
  At as PrimaryAction,
  Et as SecondaryAction,
  vt as Section,
  xt as SectionActions,
  ut as SectionBody,
  it as SectionKicker,
  dt as SectionSubtitle,
  ct as SectionTitle,
  Rt as Stat,
  ot as StatGrid,
  Ft as StatsGrid
};
