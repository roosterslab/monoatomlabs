import { jsx as e, jsxs as s, Fragment as y } from "react/jsx-runtime";
import j, { useState as $, useEffect as S } from "react";
import { Link as k } from "react-router-dom";
import { ArrowLeft as T, ArrowRight as N, ChevronLeft as z, ChevronRight as I, ArrowDown as D, Maximize2 as M, X as F, Microscope as W, FileText as G, Settings as A, TrendingUp as H, LayoutGrid as L } from "lucide-react";
import { motion as P, AnimatePresence as R } from "framer-motion";
const K = ({ to: t, label: l }) => /* @__PURE__ */ e("div", { className: "bg-white border-b border-neutral-200", children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto px-6 py-4", children: /* @__PURE__ */ s(
  k,
  {
    to: t,
    className: "inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors group",
    children: [
      /* @__PURE__ */ e(T, { className: "w-4 h-4 group-hover:-translate-x-1 transition-transform" }),
      l
    ]
  }
) }) }), _ = ({
  images: t = [],
  interval: l = 5e3,
  transitionDuration: r = 1e3,
  className: a = ""
}) => {
  const [o, n] = $(0);
  return S(() => {
    if (!t || t.length <= 1) return;
    const i = setInterval(() => {
      n((d) => (d + 1) % t.length);
    }, l);
    return () => clearInterval(i);
  }, [t, l]), !t || t.length === 0 ? null : /* @__PURE__ */ e("div", { className: `absolute inset-0 w-full h-full overflow-hidden ${a}`, children: t.map((i, d) => /* @__PURE__ */ e(
    "div",
    {
      className: "absolute inset-0 w-full h-full transition-opacity duration-[1000ms] ease-in-out",
      style: {
        opacity: d === o ? 1 : 0,
        transitionDuration: `${r}ms`,
        zIndex: d === o ? 1 : 0
      },
      children: /* @__PURE__ */ e(
        "img",
        {
          src: i,
          alt: `Background slide ${d + 1}`,
          className: "w-full h-full object-cover"
        }
      )
    },
    d
  )) });
}, Q = ({ children: t, className: l = "" }) => /* @__PURE__ */ e("div", { className: `grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)] ${l}`, children: t }), f = ({ children: t, variant: l = "primary", theme: r = "light", className: a = "", icon: o, onClick: n }) => /* @__PURE__ */ s("button", { onClick: n, className: `inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-sm group shadow-sm relative overflow-hidden ${l === "primary" ? r === "dark" ? "bg-white text-black hover:bg-neutral-200 border border-white z-10 shadow-lg" : "bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-900" : l === "secondary" ? r === "dark" ? "bg-transparent text-white border border-neutral-700 hover:border-white hover:bg-neutral-900 z-10" : "bg-white text-neutral-900 border border-neutral-200 hover:border-neutral-900" : r === "dark" ? "text-neutral-400 hover:text-white px-0 py-2 shadow-none" : "text-neutral-500 hover:text-neutral-900 px-0 py-2 shadow-none"} ${a}`, children: [
  t,
  o && /* @__PURE__ */ e(o, { className: "w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" })
] }), Y = ({
  title: t,
  description: l,
  primaryButton: r,
  secondaryButton: a,
  variant: o = "default",
  // 'default', 'compact', 'split'
  theme: n = "dark",
  // 'dark', 'light'
  className: i = "",
  icon: d
}) => {
  const h = {
    default: "py-24",
    compact: "py-16",
    split: "py-24"
  }, x = {
    dark: "bg-neutral-950 text-white border-neutral-900",
    light: "bg-white text-neutral-900 border-neutral-200"
  };
  return o === "split" ? /* @__PURE__ */ e("section", { className: `border-t ${x[n]} ${h[o]} ${i}`, children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ s("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ s("div", { children: [
      d && /* @__PURE__ */ e(d, { className: `w-12 h-12 mb-6 ${n === "dark" ? "text-white" : "text-neutral-900"}`, strokeWidth: 1 }),
      /* @__PURE__ */ e("h2", { className: `text-4xl md:text-5xl font-medium tracking-tight mb-4 ${n === "dark" ? "text-white" : "text-neutral-900"}`, children: t }),
      /* @__PURE__ */ e("p", { className: `text-lg md:text-xl ${n === "dark" ? "text-neutral-400" : "text-neutral-600"}`, children: l })
    ] }),
    /* @__PURE__ */ s("div", { className: "flex flex-col sm:flex-row gap-4 lg:justify-end", children: [
      r && (r.link ? /* @__PURE__ */ e(k, { to: r.link, children: /* @__PURE__ */ e(
        f,
        {
          variant: "primary",
          theme: n,
          icon: r.icon || N,
          children: r.text
        }
      ) }) : /* @__PURE__ */ e(
        f,
        {
          variant: "primary",
          theme: n,
          icon: r.icon || N,
          onClick: r.onClick,
          children: r.text
        }
      )),
      a && (a.link ? /* @__PURE__ */ e(k, { to: a.link, children: /* @__PURE__ */ e(
        f,
        {
          variant: "secondary",
          theme: n,
          className: n === "dark" ? "border-neutral-800" : "",
          children: a.text
        }
      ) }) : /* @__PURE__ */ e(
        f,
        {
          variant: "secondary",
          theme: n,
          className: n === "dark" ? "border-neutral-800" : "",
          onClick: a.onClick,
          children: a.text
        }
      ))
    ] })
  ] }) }) }) : /* @__PURE__ */ e("section", { className: `border-t ${x[n]} ${h[o]} ${i}`, children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ s("div", { className: "max-w-4xl mx-auto text-center", children: [
    d && /* @__PURE__ */ e(d, { className: `w-12 h-12 mx-auto mb-6 ${n === "dark" ? "text-white" : "text-neutral-900"}`, strokeWidth: 1 }),
    /* @__PURE__ */ e("h2", { className: `text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 ${n === "dark" ? "text-white" : "text-neutral-900"}`, children: t }),
    l && /* @__PURE__ */ e("p", { className: `text-lg md:text-xl mb-10 max-w-2xl mx-auto ${n === "dark" ? "text-neutral-400" : "text-neutral-600"}`, children: l }),
    /* @__PURE__ */ s("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
      r && (r.link ? /* @__PURE__ */ e(k, { to: r.link, children: /* @__PURE__ */ e(
        f,
        {
          variant: "primary",
          theme: n,
          icon: r.icon || N,
          children: r.text
        }
      ) }) : /* @__PURE__ */ e(
        f,
        {
          variant: "primary",
          theme: n,
          icon: r.icon || N,
          onClick: r.onClick,
          children: r.text
        }
      )),
      a && (a.link ? /* @__PURE__ */ e(k, { to: a.link, children: /* @__PURE__ */ e(
        f,
        {
          variant: "secondary",
          theme: n,
          className: n === "dark" ? "border-neutral-800" : "",
          children: a.text
        }
      ) }) : /* @__PURE__ */ e(
        f,
        {
          variant: "secondary",
          theme: n,
          className: n === "dark" ? "border-neutral-800" : "",
          onClick: a.onClick,
          children: a.text
        }
      ))
    ] })
  ] }) }) });
}, C = ({
  children: t,
  header: l,
  footer: r,
  variant: a = "default",
  // 'default', 'bordered', 'elevated', 'flat'
  theme: o = "dark",
  // 'dark', 'light'
  hoverable: n = !1,
  clickable: i = !1,
  link: d,
  onClick: h,
  className: x = "",
  icon: m
}) => {
  const p = "rounded-sm transition-all duration-300", b = {
    default: o === "dark" ? "bg-neutral-900 border border-neutral-800" : "bg-white border border-neutral-200",
    bordered: o === "dark" ? "bg-transparent border border-neutral-800" : "bg-transparent border border-neutral-200",
    elevated: o === "dark" ? "bg-neutral-900 border border-neutral-800 shadow-lg" : "bg-white border border-neutral-200 shadow-lg",
    flat: o === "dark" ? "bg-neutral-900" : "bg-white"
  }, g = n || i ? o === "dark" ? "hover:border-neutral-600 hover:shadow-xl hover:-translate-y-1" : "hover:border-neutral-400 hover:shadow-xl hover:-translate-y-1" : "", w = i || d ? "cursor-pointer" : "", u = `${p} ${b[a]} ${g} ${w} ${x}`, c = /* @__PURE__ */ s(y, { children: [
    (l || m) && /* @__PURE__ */ e("div", { className: `p-6 border-b ${o === "dark" ? "border-neutral-800" : "border-neutral-200"}`, children: /* @__PURE__ */ s("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ s("div", { className: "flex-1", children: [
        m && /* @__PURE__ */ e(m, { className: `w-8 h-8 mb-4 ${o === "dark" ? "text-white" : "text-neutral-900"}`, strokeWidth: 1.5 }),
        typeof l == "string" ? /* @__PURE__ */ e("h3", { className: `text-xl font-medium ${o === "dark" ? "text-white" : "text-neutral-900"}`, children: l }) : l
      ] }),
      (i || d) && /* @__PURE__ */ e(N, { className: `w-5 h-5 transition-transform group-hover:translate-x-1 ${o === "dark" ? "text-neutral-500" : "text-neutral-400"}` })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "p-6", children: t }),
    r && /* @__PURE__ */ e("div", { className: `p-6 border-t ${o === "dark" ? "border-neutral-800 bg-neutral-950/50" : "border-neutral-200 bg-neutral-50"}`, children: r })
  ] });
  return d ? /* @__PURE__ */ e(k, { to: d, className: `${u} group block`, children: c }) : i && h ? /* @__PURE__ */ e("div", { onClick: h, className: `${u} group`, children: c }) : /* @__PURE__ */ e("div", { className: u, children: c });
};
C.Header = ({ children: t, className: l = "", theme: r = "dark" }) => /* @__PURE__ */ e("div", { className: `p-6 border-b ${r === "dark" ? "border-neutral-800" : "border-neutral-200"} ${l}`, children: t });
C.Body = ({ children: t, className: l = "" }) => /* @__PURE__ */ e("div", { className: `p-6 ${l}`, children: t });
C.Footer = ({ children: t, className: l = "", theme: r = "dark" }) => /* @__PURE__ */ e("div", { className: `p-6 border-t ${r === "dark" ? "border-neutral-800 bg-neutral-950/50" : "border-neutral-200 bg-neutral-50"} ${l}`, children: t });
C.Title = ({ children: t, className: l = "", theme: r = "dark" }) => /* @__PURE__ */ e("h3", { className: `text-xl font-medium ${r === "dark" ? "text-white" : "text-neutral-900"} ${l}`, children: t });
C.Description = ({ children: t, className: l = "", theme: r = "dark" }) => /* @__PURE__ */ e("p", { className: `text-sm ${r === "dark" ? "text-neutral-400" : "text-neutral-600"} ${l}`, children: t });
const Z = ({ to: t = "/products/pipeline", label: l = "Back to Innovation Pipeline" }) => /* @__PURE__ */ e(
  P.div,
  {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { delay: 1, duration: 0.5 },
    className: "fixed top-6 right-6 z-50",
    children: /* @__PURE__ */ s(k, { to: t, className: "group flex items-center gap-3 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-neutral-200 shadow-sm hover:shadow-md transition-all", children: [
      /* @__PURE__ */ e("span", { className: "text-sm font-bold uppercase tracking-wider text-neutral-600 group-hover:text-neutral-900 transition-colors", children: l }),
      /* @__PURE__ */ e("div", { className: "w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-colors", children: /* @__PURE__ */ e(N, { size: 16 }) })
    ] })
  }
), B = ({
  images: t,
  alt: l,
  className: r = "",
  interval: a = 4e3,
  showGradient: o = !1,
  showDots: n = !0,
  showNavigation: i = !0,
  pauseOnHover: d = !0
}) => {
  const [h, x] = $(0), [m, p] = $(!1), b = t.length > 1, g = () => {
    x((c) => (c + 1) % t.length);
  }, w = () => {
    x((c) => (c - 1 + t.length) % t.length);
  }, u = (c) => {
    x(c);
  };
  return S(() => {
    let c;
    return b && !m && (c = setInterval(() => {
      g();
    }, a)), () => clearInterval(c);
  }, [b, t.length, a, m, h]), /* @__PURE__ */ s(
    "div",
    {
      className: `relative overflow-hidden ${r}`,
      onMouseEnter: () => d && p(!0),
      onMouseLeave: () => d && p(!1),
      children: [
        /* @__PURE__ */ e(R, { mode: "wait", children: /* @__PURE__ */ e(
          P.img,
          {
            src: t[h],
            alt: `${l} - Image ${h + 1}`,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.5 },
            className: "absolute inset-0 w-full h-full object-cover"
          },
          h
        ) }),
        o && /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" }),
        b && i && /* @__PURE__ */ s(y, { children: [
          /* @__PURE__ */ e(
            "button",
            {
              onClick: w,
              className: "absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-lg transition-all opacity-0 hover:opacity-100 group-hover:opacity-100 z-20",
              "aria-label": "Previous image",
              children: /* @__PURE__ */ e(z, { className: "w-5 h-5 text-neutral-900" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: g,
              className: "absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-lg transition-all opacity-0 hover:opacity-100 group-hover:opacity-100 z-20",
              "aria-label": "Next image",
              children: /* @__PURE__ */ e(I, { className: "w-5 h-5 text-neutral-900" })
            }
          )
        ] }),
        b && n && /* @__PURE__ */ e("div", { className: "absolute top-4 right-4 flex gap-1.5 z-20", children: t.map((c, v) => /* @__PURE__ */ e(
          "button",
          {
            onClick: () => u(v),
            className: `w-2 h-2 rounded-full transition-all cursor-pointer ${v === h ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60"}`,
            "aria-label": `Go to image ${v + 1}`
          },
          v
        )) })
      ]
    }
  );
}, ee = ({ title: t, subtitle: l, category: r, transparent: a = !1 }) => /* @__PURE__ */ e("section", { className: `pt-40 pb-16 px-6 border-b ${a ? "border-neutral-200 bg-transparent" : "border-neutral-900 bg-black/10"}`, children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ s(
  P.div,
  {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    children: [
      r && /* @__PURE__ */ e("span", { className: "inline-block py-1 px-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-medium mb-6 tracking-wide uppercase", children: r }),
      /* @__PURE__ */ e("h1", { className: "text-4xl md:text-5xl font-display font-medium text-white mb-6", children: t }),
      /* @__PURE__ */ e("p", { className: "text-lg text-neutral-400 max-w-2xl leading-relaxed", children: l })
    ]
  }
) }) }), te = ({ steps: t = [], theme: l = "light", accentColor: r = "blue" }) => {
  const a = l === "dark", o = {
    blue: { bgLight: "bg-blue-50", textLight: "text-blue-600", textDark: "text-blue-400" },
    emerald: { bgLight: "bg-emerald-50", textLight: "text-emerald-600", textDark: "text-emerald-400" },
    purple: { bgLight: "bg-purple-50", textLight: "text-purple-600", textDark: "text-purple-400" },
    slate: { bgLight: "bg-slate-50", textLight: "text-slate-800", textDark: "text-slate-200" }
  }, n = o[r] || o.blue;
  return /* @__PURE__ */ e("div", { className: "flex flex-col md:flex-row gap-4 items-center justify-center py-8", children: t.map((i, d) => /* @__PURE__ */ s(j.Fragment, { children: [
    /* @__PURE__ */ s("div", { className: `
                        relative flex-1 p-6 rounded-2xl border text-center min-h-[160px] flex flex-col items-center justify-center
                        ${a ? "bg-neutral-900 border-neutral-800 text-white" : "bg-white border-neutral-200 text-neutral-900 shadow-sm"}
                    `, children: [
      /* @__PURE__ */ e("div", { className: `
                            w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl
                            ${a ? `bg-neutral-800 ${n.textDark}` : `${n.bgLight} ${n.textLight}`}
                        `, children: i.icon }),
      /* @__PURE__ */ e("h4", { className: "font-semibold mb-2", children: i.title }),
      /* @__PURE__ */ e("p", { className: `text-sm ${a ? "text-neutral-400" : "text-neutral-600"}`, children: i.description }),
      /* @__PURE__ */ s("div", { className: "absolute top-4 right-4 text-xs font-mono opacity-30", children: [
        "0",
        d + 1
      ] })
    ] }),
    d < t.length - 1 && /* @__PURE__ */ s("div", { className: `${a ? "text-neutral-700" : "text-neutral-300"}`, children: [
      /* @__PURE__ */ e(N, { className: "hidden md:block w-6 h-6" }),
      /* @__PURE__ */ e(D, { className: "block md:hidden w-6 h-6" })
    ] })
  ] }, d)) });
}, re = ({
  title: t,
  subtitle: l,
  category: r,
  categoryColor: a = "bg-white",
  categoryTone: o,
  images: n = [],
  buttons: i = [],
  className: d = "",
  theme: h = "dark"
}) => {
  const x = h === "light", p = o && {
    commercial: "bg-green-400",
    success: "bg-green-400",
    pipeline: "bg-amber-400",
    warning: "bg-amber-400",
    info: "bg-brand-600",
    brand: "bg-brand-600",
    neutral: "bg-neutral-400"
  }[o] || a;
  return /* @__PURE__ */ s("section", { className: `relative overflow-hidden rounded-3xl ${x ? "bg-neutral-50 text-neutral-900" : "bg-black text-white"} isolate ${d}`, children: [
    /* @__PURE__ */ s("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ e(
        _,
        {
          images: n,
          interval: 5e3,
          transitionDuration: 2e3
        }
      ),
      /* @__PURE__ */ e(
        "div",
        {
          className: "absolute inset-0 z-10",
          style: {
            background: x ? "linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.6) 35%, transparent 60%)" : "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 35%, transparent 60%)"
          }
        }
      )
    ] }),
    /* @__PURE__ */ s("div", { className: "relative z-10 p-8 md:p-12 lg:p-16 max-w-lg", children: [
      r && /* @__PURE__ */ s("div", { className: `inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-6 ${x ? "bg-white/50 border-neutral-200 text-neutral-500" : "bg-white/10 border-white/20 text-white"}`, children: [
        /* @__PURE__ */ e("span", { className: `w-2 h-2 rounded-full ${p}` }),
        r
      ] }),
      /* @__PURE__ */ e("h2", { className: `text-3xl md:text-4xl font-display font-medium mb-4 leading-tight tracking-tight ${x ? "text-neutral-900" : "text-white"}`, children: t }),
      /* @__PURE__ */ e("p", { className: `text-sm md:text-base leading-relaxed mb-8 font-light ${x ? "text-neutral-500" : "text-neutral-300"}`, children: l }),
      i.length > 0 && /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-4", children: i.map((b, g) => /* @__PURE__ */ e(j.Fragment, { children: b.link.startsWith("#") ? /* @__PURE__ */ e("a", { href: b.link, children: /* @__PURE__ */ e(f, { variant: b.variant || "primary", theme: h, children: b.text }) }) : /* @__PURE__ */ e(k, { to: b.link, children: /* @__PURE__ */ e(f, { variant: b.variant || "primary", theme: h, children: b.text }) }) }, g)) })
    ] })
  ] });
}, ae = ({ src: t, images: l, alt: r, className: a = "", imageFit: o = "object-cover", innerClassName: n = "bg-neutral-100" }) => {
  const [i, d] = $(!1), [h, x] = $(0), m = l || (t ? [t] : []), p = m.length > 1, b = m[h] || t;
  S(() => {
    if (!p || i) return;
    const u = setInterval(() => {
      x((c) => (c + 1) % m.length);
    }, 4e3);
    return () => clearInterval(u);
  }, [p, m.length, i]);
  const g = (u) => {
    u?.stopPropagation(), x((c) => (c + 1) % m.length);
  }, w = (u) => {
    u?.stopPropagation(), x((c) => (c - 1 + m.length) % m.length);
  };
  return /* @__PURE__ */ s(y, { children: [
    /* @__PURE__ */ s(
      "div",
      {
        className: `relative rounded-2xl overflow-hidden border border-neutral-200 shadow-sm group cursor-pointer ${a}`,
        onClick: () => d(!0),
        children: [
          /* @__PURE__ */ e("div", { className: `w-full h-full flex items-center justify-center ${n}`, children: /* @__PURE__ */ e(
            "img",
            {
              src: b,
              alt: r,
              className: `w-full h-full ${o} transition-transform duration-700 group-hover:scale-105`
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition-colors duration-300" }),
          p && /* @__PURE__ */ s(y, { children: [
            /* @__PURE__ */ e(
              "button",
              {
                onClick: w,
                className: "absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm text-neutral-800 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white z-10",
                "aria-label": "Previous Image",
                children: /* @__PURE__ */ e(z, { size: 20 })
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: g,
                className: "absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm text-neutral-800 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white z-10",
                "aria-label": "Next Image",
                children: /* @__PURE__ */ e(I, { size: 20 })
              }
            ),
            /* @__PURE__ */ e("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10", children: m.map((u, c) => /* @__PURE__ */ e(
              "button",
              {
                onClick: (v) => {
                  v.stopPropagation(), x(c);
                },
                className: `w-2 h-2 rounded-full transition-all duration-300 ${c === h ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"}`,
                "aria-label": `Go to image ${c + 1}`
              },
              c
            )) })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              className: "absolute bottom-4 right-4 p-2 bg-white/90 backdrop-blur-sm text-neutral-800 rounded-full shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white z-10",
              "aria-label": "View Full Image",
              children: /* @__PURE__ */ e(M, { size: 20 })
            }
          )
        ]
      }
    ),
    i && /* @__PURE__ */ s(
      "div",
      {
        className: "fixed inset-0 z-[100] bg-neutral-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-200",
        onClick: () => d(!1),
        children: [
          /* @__PURE__ */ e(
            "button",
            {
              className: "absolute top-6 right-6 p-2 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors z-50 cursor-pointer",
              onClick: (u) => {
                u.stopPropagation(), d(!1);
              },
              children: /* @__PURE__ */ e(F, { size: 24 })
            }
          ),
          p && /* @__PURE__ */ s(y, { children: [
            /* @__PURE__ */ e(
              "button",
              {
                onClick: w,
                className: "absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors z-50",
                "aria-label": "Previous Image",
                children: /* @__PURE__ */ e(z, { size: 28 })
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: g,
                className: "absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors z-50",
                "aria-label": "Next Image",
                children: /* @__PURE__ */ e(I, { size: 28 })
              }
            )
          ] }),
          /* @__PURE__ */ s("div", { className: "relative max-w-6xl w-full h-full flex flex-col items-center justify-center pointer-events-none", children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: "relative w-full max-w-5xl h-full flex items-center justify-center pointer-events-auto",
                onClick: (u) => u.stopPropagation(),
                children: /* @__PURE__ */ e(
                  "img",
                  {
                    src: b,
                    alt: r,
                    className: "max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                  }
                )
              }
            ),
            /* @__PURE__ */ s("div", { className: "flex flex-col items-center gap-4 mt-6", children: [
              /* @__PURE__ */ e("h3", { className: "text-white font-display text-2xl font-medium tracking-wide", children: r }),
              p && /* @__PURE__ */ e("div", { className: "flex gap-2", children: m.map((u, c) => /* @__PURE__ */ e(
                "button",
                {
                  onClick: (v) => {
                    v.stopPropagation(), x(c);
                  },
                  className: `w-2.5 h-2.5 rounded-full transition-all duration-300 ${c === h ? "bg-white w-8" : "bg-white/40 hover:bg-white/70"}`,
                  "aria-label": `Go to image ${c + 1}`
                },
                c
              )) })
            ] })
          ] })
        ]
      }
    )
  ] });
}, le = ({ tabs: t, defaultTab: l = 0 }) => {
  const [r, a] = $(l), o = {
    overview: L,
    benefits: H,
    howItWorks: A,
    technical: G,
    deepDive: W
  };
  return /* @__PURE__ */ s("div", { className: "bg-white", children: [
    /* @__PURE__ */ e("div", { className: "sticky top-[112px] z-40 bg-white border-b border-neutral-200 shadow-sm transition-all duration-300", children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ e("div", { className: "flex overflow-x-auto no-scrollbar", children: t.map((n, i) => {
      const d = o[n.id] || L, h = r === i;
      return /* @__PURE__ */ s(
        "button",
        {
          onClick: () => {
            a(i), window.scrollTo({ top: 0, behavior: "smooth" });
          },
          className: `
                    flex items-center space-x-3 px-8 py-5 text-sm uppercase tracking-widest transition-all duration-300 border-b-2 whitespace-nowrap outline-none
                    ${h ? "border-neutral-900 text-neutral-900 bg-white" : "border-transparent text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50"}
                  `,
          children: [
            /* @__PURE__ */ e(d, { className: `w-4 h-4 ${h ? "text-neutral-900" : "text-neutral-400"}`, strokeWidth: h ? 2 : 1.5 }),
            /* @__PURE__ */ e("span", { className: `font-medium ${h ? "font-bold" : ""}`, children: n.label })
          ]
        },
        i
      );
    }) }) }) }),
    /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto", children: t.map((n, i) => /* @__PURE__ */ e(
      "div",
      {
        className: `
              transition-opacity duration-300
              ${r === i ? "block" : "hidden"}
            `,
        children: n.content
      },
      i
    )) })
  ] });
}, ne = ({ number: t, title: l, subtitle: r, theme: a = "light", accent: o = !1 }) => /* @__PURE__ */ s("div", { className: "mb-12 md:mb-20 group", children: [
  /* @__PURE__ */ s("div", { className: `inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6 transition-all duration-300 ${a === "dark" ? "bg-neutral-800/50 border border-neutral-700/50 backdrop-blur-sm" : o ? "bg-gradient-to-r from-brand-50 to-teal-50 border border-brand-200 shadow-sm group-hover:shadow-md group-hover:border-brand-300" : "bg-gradient-to-r from-neutral-100 to-neutral-50 border border-neutral-200/70 shadow-sm group-hover:shadow-md"}`, children: [
    /* @__PURE__ */ e("span", { className: `font-mono text-xs tracking-widest uppercase font-bold ${a === "dark" ? "text-neutral-400" : o ? "text-brand-600" : "text-neutral-600"}`, children: t }),
    /* @__PURE__ */ e("span", { className: `w-1 h-1 rounded-full ${a === "dark" ? "bg-neutral-600" : o ? "bg-brand-500" : "bg-neutral-400"}` }),
    /* @__PURE__ */ e("span", { className: `font-mono text-xs tracking-wider uppercase font-semibold ${a === "dark" ? "text-neutral-500" : o ? "text-brand-600" : "text-neutral-500"}`, children: l })
  ] }),
  /* @__PURE__ */ e("h2", { className: `text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-2xl ${a === "dark" ? "text-white" : "text-neutral-900"}`, children: r })
] }), oe = ({ value: t, label: l, theme: r = "dark", className: a = "", valueClassName: o = "", labelClassName: n = "" }) => /* @__PURE__ */ s("div", { className: `border-l pl-6 py-2 group transition-colors duration-300 ${r === "dark" ? "border-neutral-800 hover:border-white" : "border-neutral-200 hover:border-neutral-900"} ${a}`, children: [
  /* @__PURE__ */ e("div", { className: `text-4xl font-light mb-1 transition-colors ${r === "dark" ? "text-white group-hover:text-neutral-200" : "text-neutral-900"} ${o}`, children: t }),
  /* @__PURE__ */ e("div", { className: `text-xs uppercase tracking-wider font-medium ${r === "dark" ? "text-neutral-500 group-hover:text-neutral-300" : "text-neutral-500"} ${n}`, children: l })
] }), E = ({
  tabs: t = [],
  defaultTab: l = 0,
  onChange: r,
  theme: a = "dark",
  // 'dark', 'light'
  variant: o = "default",
  // 'default', 'pills', 'underline'
  className: n = "",
  orientation: i = "horizontal"
  // 'horizontal', 'vertical'
}) => {
  const [d, h] = $(l), x = (u) => {
    h(u), r && r(u);
  }, m = "px-6 py-3 text-sm font-medium transition-all duration-300 cursor-pointer", p = (u) => o === "pills" ? u ? a === "dark" ? "bg-white text-black rounded-sm" : "bg-neutral-900 text-white rounded-sm" : a === "dark" ? "text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-sm" : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-sm" : o === "underline" ? u ? a === "dark" ? "text-white border-b-2 border-white" : "text-neutral-900 border-b-2 border-neutral-900" : a === "dark" ? "text-neutral-400 hover:text-white border-b-2 border-transparent" : "text-neutral-600 hover:text-neutral-900 border-b-2 border-transparent" : u ? a === "dark" ? "text-white bg-neutral-900 border border-neutral-800 rounded-t-sm" : "text-neutral-900 bg-white border border-neutral-200 rounded-t-sm" : a === "dark" ? "text-neutral-400 hover:text-white border border-transparent" : "text-neutral-600 hover:text-neutral-900 border border-transparent", b = i === "horizontal" ? "flex flex-col" : "flex flex-row gap-6", g = i === "horizontal" ? "flex flex-wrap gap-2 border-b " + (a === "dark" ? "border-neutral-800" : "border-neutral-200") : "flex flex-col gap-2 min-w-[200px]", w = i === "horizontal" ? "py-6" : "flex-1";
  return /* @__PURE__ */ s("div", { className: `${b} ${n}`, children: [
    /* @__PURE__ */ e("div", { className: g, role: "tablist", children: t.map((u, c) => /* @__PURE__ */ s(
      "button",
      {
        role: "tab",
        "aria-selected": d === c,
        "aria-controls": `tabpanel-${c}`,
        onClick: () => x(c),
        className: `${m} ${p(d === c)}`,
        children: [
          u.icon && /* @__PURE__ */ s("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ e(u.icon, { className: "w-4 h-4" }),
            u.label
          ] }),
          !u.icon && u.label
        ]
      },
      c
    )) }),
    /* @__PURE__ */ e("div", { className: w, children: t.map((u, c) => /* @__PURE__ */ e(
      "div",
      {
        role: "tabpanel",
        id: `tabpanel-${c}`,
        hidden: d !== c,
        className: d === c ? "animate-in fade-in duration-300" : "",
        children: d === c && u.content
      },
      c
    )) })
  ] });
}, O = ({
  tabs: t = [],
  activeTab: l,
  onChange: r,
  theme: a = "dark",
  variant: o = "default",
  className: n = "",
  orientation: i = "horizontal"
}) => {
  const d = "px-6 py-3 text-sm font-medium transition-all duration-300 cursor-pointer", h = (b) => o === "pills" ? b ? a === "dark" ? "bg-white text-black rounded-sm" : "bg-neutral-900 text-white rounded-sm" : a === "dark" ? "text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-sm" : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-sm" : o === "underline" ? b ? a === "dark" ? "text-white border-b-2 border-white" : "text-neutral-900 border-b-2 border-neutral-900" : a === "dark" ? "text-neutral-400 hover:text-white border-b-2 border-transparent" : "text-neutral-600 hover:text-neutral-900 border-b-2 border-transparent" : b ? a === "dark" ? "text-white bg-neutral-900 border border-neutral-800 rounded-t-sm" : "text-neutral-900 bg-white border border-neutral-200 rounded-t-sm" : a === "dark" ? "text-neutral-400 hover:text-white border border-transparent" : "text-neutral-600 hover:text-neutral-900 border border-transparent", x = i === "horizontal" ? "flex flex-col" : "flex flex-row gap-6", m = i === "horizontal" ? "flex flex-wrap gap-2 border-b " + (a === "dark" ? "border-neutral-800" : "border-neutral-200") : "flex flex-col gap-2 min-w-[200px]", p = i === "horizontal" ? "py-6" : "flex-1";
  return /* @__PURE__ */ s("div", { className: `${x} ${n}`, children: [
    /* @__PURE__ */ e("div", { className: m, role: "tablist", children: t.map((b, g) => /* @__PURE__ */ s(
      "button",
      {
        role: "tab",
        "aria-selected": l === g,
        onClick: () => r(g),
        className: `${d} ${h(l === g)}`,
        children: [
          b.icon && /* @__PURE__ */ s("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ e(b.icon, { className: "w-4 h-4" }),
            b.label
          ] }),
          !b.icon && b.label
        ]
      },
      g
    )) }),
    /* @__PURE__ */ e("div", { className: p, children: t.map((b, g) => /* @__PURE__ */ e(
      "div",
      {
        role: "tabpanel",
        hidden: l !== g,
        className: l === g ? "animate-in fade-in duration-300" : "",
        children: l === g && b.content
      },
      g
    )) })
  ] });
};
E.Controlled = O;
const ie = ({ items: t = [], theme: l = "light", accentColor: r = "blue" }) => {
  const a = l === "dark", o = {
    blue: { dot: "bg-blue-600", ring: "ring-blue-100" },
    emerald: { dot: "bg-emerald-500", ring: "ring-emerald-100" },
    purple: { dot: "bg-purple-600", ring: "ring-purple-100" },
    slate: { dot: "bg-slate-700", ring: "ring-slate-200" }
  }, n = o[r] || o.blue;
  return /* @__PURE__ */ e("div", { className: "relative pl-8 border-l border-neutral-200 dark:border-neutral-800 space-y-12", children: t.map((i, d) => /* @__PURE__ */ s("div", { className: "relative", children: [
    /* @__PURE__ */ e("div", { className: `
                        absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 
                        ${i.status === "completed" ? "bg-emerald-500 border-white ring-2 ring-emerald-100" : i.status === "current" ? `${n.dot} border-white ring-2 ${n.ring} animate-pulse` : "bg-neutral-300 border-white"}
                    ` }),
    /* @__PURE__ */ s("div", { className: "flex flex-col sm:flex-row gap-2 sm:items-baseline", children: [
      /* @__PURE__ */ e("span", { className: "text-sm font-bold uppercase tracking-wider text-neutral-500", children: i.phase }),
      /* @__PURE__ */ e("h4", { className: `text-lg font-medium ${a ? "text-white" : "text-neutral-900"}`, children: i.title })
    ] }),
    /* @__PURE__ */ e("p", { className: `mt-2 text-base ${a ? "text-neutral-400" : "text-neutral-600"} max-w-lg`, children: i.description }),
    i.date && /* @__PURE__ */ s("span", { className: "mt-2 inline-block px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded font-medium", children: [
      "Target: ",
      i.date
    ] })
  ] }, d)) });
};
export {
  K as BackNavigation,
  _ as BackgroundSlideshow,
  Q as BentoGrid,
  f as Button,
  Y as CallToAction,
  C as Card,
  Z as FloatingBackNav,
  B as ImageCarousel,
  ee as PageHeader,
  te as ProcessFlow,
  re as ProductHero,
  ae as ProductLightbox,
  le as ProductTabs,
  ne as SectionHeading,
  oe as StatCard,
  E as Tabs,
  ie as Timeline
};
