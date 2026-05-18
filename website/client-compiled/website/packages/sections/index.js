import { jsxs as t, jsx as e, Fragment as J } from "react/jsx-runtime";
import K, { useRef as we, useEffect as ce, useState as L } from "react";
import { Link as v } from "react-router-dom";
import { ArrowRight as S, MessageSquare as ut, FileText as ye, Phone as G, Mail as ke, Shield as V, Microscope as me, FileCheck as Ee, Activity as Be, Binary as It, CheckCircle2 as ie, CheckCircle as C, Rocket as We, FlaskConical as B, Clock as ht, TrendingUp as A, HelpCircle as De, AlertCircle as pt, ChevronDown as Tt, Leaf as Ce, Trees as Ke, Car as ze, Home as Je, Info as At, Users as Oe, Award as ue, Repeat as $t, Zap as Z, Factory as q, Network as Mt, Bot as Lt, Truck as jt, Package as He, CircleDot as Dt, Wind as he, Droplets as Fe, Heart as Ge, Beaker as Ve, Sparkles as Pe, User as bt, BarChart3 as qe, Handshake as _e, Lightbulb as zt, Check as de, ChevronLeft as Se, ChevronRight as X, Maximize2 as gt, X as ne, Layers as Ue, Sun as Ie, Target as xt, Building2 as ft, ArrowUpRight as Rt, DollarSign as Xe, Calendar as Ye, Percent as Et, Hexagon as Bt, Download as Re, Calculator as Wt, MapPin as vt, Briefcase as Nt, GraduationCap as Ot, Globe as wt, ClipboardCheck as Ht, Trophy as Ft, Star as Ze, Atom as Gt, Minus as Vt, Droplet as qt, Battery as _t, Building as Ut, ArrowDown as Yt, ArrowLeft as Qt } from "lucide-react";
import { motion as f, AnimatePresence as yt } from "framer-motion";
const I = ({ children: r, variant: n = "primary", theme: l = "light", className: a = "", icon: i, onClick: s }) => /* @__PURE__ */ t("button", { onClick: s, className: `inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-sm group shadow-sm relative overflow-hidden ${n === "primary" ? l === "dark" ? "bg-white text-black hover:bg-neutral-200 border border-white z-10 shadow-lg" : "bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-900" : n === "secondary" ? l === "dark" ? "bg-transparent text-white border border-neutral-700 hover:border-white hover:bg-neutral-900 z-10" : "bg-white text-neutral-900 border border-neutral-200 hover:border-neutral-900" : l === "dark" ? "text-neutral-400 hover:text-white px-0 py-2 shadow-none" : "text-neutral-500 hover:text-neutral-900 px-0 py-2 shadow-none"} ${a}`, children: [
  r,
  i && /* @__PURE__ */ e(i, { className: "w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" })
] }), be = ({ value: r, label: n, theme: l = "dark", className: a = "", valueClassName: i = "", labelClassName: s = "" }) => /* @__PURE__ */ t("div", { className: `border-l pl-6 py-2 group transition-colors duration-300 ${l === "dark" ? "border-neutral-800 hover:border-white" : "border-neutral-200 hover:border-neutral-900"} ${a}`, children: [
  /* @__PURE__ */ e("div", { className: `text-4xl font-light mb-1 transition-colors ${l === "dark" ? "text-white group-hover:text-neutral-200" : "text-neutral-900"} ${i}`, children: r }),
  /* @__PURE__ */ e("div", { className: `text-xs uppercase tracking-wider font-medium ${l === "dark" ? "text-neutral-500 group-hover:text-neutral-300" : "text-neutral-500"} ${s}`, children: n })
] }), Kt = ({ className: r = "absolute inset-0 z-0" }) => {
  const n = we(null), l = we({ x: 0, y: 0 }), a = we(!1);
  return ce(() => {
    const i = n.current;
    if (!i) return;
    const s = i.getContext("2d", {
      alpha: !1,
      // Opaque canvas = faster rendering
      desynchronized: !0,
      // Allow GPU to render async
      willReadFrequently: !1
      // We only write, never read
    });
    let o, c, m = [], d = [], u;
    const p = 800;
    let g = !1;
    const w = { x: 0, y: 0 }, j = () => {
      o = i.width = window.innerWidth, c = i.height = window.innerHeight, m = [], d = [];
      const R = 40, H = R * Math.sqrt(3), F = R * 1.5, te = Math.ceil(o / H) + 4, _ = Math.ceil(c / F) + 4, re = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Set();
      for (let U = -Math.floor(te / 2); U < te / 2; U++)
        for (let W = -Math.floor(_ / 2); W < _ / 2; W++) {
          let pe = U * H, $ = W * F;
          W % 2 !== 0 && (pe += H / 2);
          const k = [];
          for (let M = 0; M < 6; M++) {
            const P = Math.PI / 180 * (60 * M + 30), T = pe + R * Math.cos(P), E = $ + R * Math.sin(P), Y = `${Math.round(T)},${Math.round(E)}`;
            let ae;
            if (re.has(Y))
              ae = re.get(Y);
            else {
              const Te = T * 3e-3, Pt = E * 3e-3, Qe = Math.sin(Te * 2) * 80 + Math.cos(Pt * 2) * 80;
              m.push({
                x: T,
                y: E,
                z: Qe,
                ox: T,
                oy: E,
                oz: Qe
              }), ae = m.length - 1, re.set(Y, ae);
            }
            k.push(ae);
          }
          for (let M = 0; M < 6; M++) {
            const P = k[M], T = k[(M + 1) % 6], E = P < T ? `${P},${T}` : `${T},${P}`;
            se.has(E) || (d.push([P, T]), se.add(E));
          }
        }
      a.current = !0;
    }, h = (R) => {
      if (!s || !a.current) return;
      s.fillStyle = "#000", s.fillRect(0, 0, o, c);
      const H = l.current.y * 5e-4 + Math.sin(R * 2e-4) * 0.1, F = l.current.x * 5e-4 + R * 1e-4, te = Math.cos(H), _ = Math.sin(H), re = Math.cos(F), se = Math.sin(F), U = m.length, W = new Array(U);
      for (let $ = 0; $ < U; $++) {
        const k = m[$], M = k.oy * te - k.oz * _, P = k.oy * _ + k.oz * te, T = k.ox * re - P * se, E = k.ox * se + P * re, Y = p / (p + E + 500), ae = T * Y + o / 2, Te = M * Y + c / 2;
        W[$] = { x: ae, y: Te, scale: Y, z: E };
      }
      s.strokeStyle = "#333", s.lineWidth = 1, s.beginPath();
      const pe = d.length;
      for (let $ = 0; $ < pe; $++) {
        const [k, M] = d[$], P = W[k], T = W[M];
        if (P.scale > 0 && T.scale > 0) {
          const E = Math.min(P.scale, T.scale) * 0.15;
          s.strokeStyle = `rgba(255, 255, 255, ${E})`, s.moveTo(P.x, P.y), s.lineTo(T.x, T.y);
        }
      }
      s.stroke();
      for (let $ = 0; $ < U; $++) {
        const k = W[$];
        if (k.scale > 0) {
          const M = k.scale, P = k.scale * 2;
          s.fillStyle = `rgba(255, 255, 255, ${M})`, s.beginPath(), s.arc(k.x, k.y, P, 0, Math.PI * 2), s.fill();
        }
      }
      u = requestAnimationFrame(h);
    }, b = (R) => {
      w.x = R.clientX - window.innerWidth / 2, w.y = R.clientY - window.innerHeight / 2, g || (g = !0, requestAnimationFrame(() => {
        l.current.x = w.x, l.current.y = w.y, g = !1;
      }));
    }, ee = ((R, H) => {
      let F;
      return function(..._) {
        clearTimeout(F), F = setTimeout(() => R(..._), H);
      };
    })(() => {
      a.current = !1, j();
    }, 250), St = setTimeout(() => {
      j(), u = requestAnimationFrame(h);
    }, 100);
    return window.addEventListener("resize", ee), window.addEventListener("mousemove", b, { passive: !0 }), () => {
      clearTimeout(St), window.removeEventListener("resize", ee), window.removeEventListener("mousemove", b), u && cancelAnimationFrame(u), a.current = !1, m = [], d = [];
    };
  }, []), /* @__PURE__ */ e("canvas", { ref: n, className: r });
}, Jt = {
  hero: {
    badge: "Unlocking Trillion Dollar Economy",
    headingLine1: "The Future is",
    headingHighlight: "Graphene.",
    tagline: "We engineer Graphene at the atomic level to make the impossible possible.",
    ctaPrimary: { label: "Explore Products", to: "/products" },
    ctaSecondary: { label: "Learn About Us", to: "/about" },
    stats: {
      innovation: { value: "10+", label: "Breakthrough Innovations" },
      commercial: { value: "5", label: "Commercial Products" },
      facilities: { value: "2", label: "Advanced Facilities" },
      pilot: { value: "11", label: "Pilot Technologies" }
    }
  }
}, Dr = () => {
  const r = Jt;
  return /* @__PURE__ */ t("section", { className: "relative pt-40 pb-24 md:pt-56 md:pb-40 px-6 bg-black overflow-hidden border-b border-neutral-800", children: [
    /* @__PURE__ */ e(Kt, {}),
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0 bg-radial-gradient from-transparent to-black pointer-events-none", style: { background: "radial-gradient(circle at center, transparent 0%, #000 90%)" } }),
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" }),
    /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto relative z-10 text-center md:text-left fade-in", children: [
      /* @__PURE__ */ t("div", { className: "relative inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-10", style: {
        background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 0 24px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.1)"
      }, children: [
        /* @__PURE__ */ e("div", { className: "absolute inset-0 rounded-full blur-md opacity-20", style: { background: "linear-gradient(135deg, #fff 0%, transparent 100%)" } }),
        /* @__PURE__ */ t("span", { className: "relative flex h-2 w-2", children: [
          /* @__PURE__ */ e("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" }),
          /* @__PURE__ */ e("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-white" })
        ] }),
        /* @__PURE__ */ e("span", { className: "relative text-xs font-semibold tracking-[0.2em] uppercase", style: {
          background: "linear-gradient(90deg, #ffffff 0%, #a3a3a3 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }, children: r.hero.badge })
      ] }),
      /* @__PURE__ */ t("h1", { className: "text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white tracking-tighter leading-tight mb-8 drop-shadow-xl", children: [
        r.hero.headingLine1,
        " ",
        /* @__PURE__ */ e("br", {}),
        /* @__PURE__ */ e("span", { className: "text-neutral-500", children: r.hero.headingHighlight })
      ] }),
      /* @__PURE__ */ e("p", { className: "text-xl md:text-2xl text-neutral-400 max-w-2xl mb-12 font-light leading-relaxed", children: r.hero.tagline }),
      /* @__PURE__ */ t("div", { className: "flex flex-col sm:flex-row gap-4 mb-20", children: [
        /* @__PURE__ */ e(v, { to: r.hero.ctaPrimary.to, children: /* @__PURE__ */ e(I, { variant: "primary", theme: "dark", icon: S, children: r.hero.ctaPrimary.label }) }),
        /* @__PURE__ */ e(v, { to: r.hero.ctaSecondary.to, children: /* @__PURE__ */ e(I, { variant: "secondary", theme: "dark", children: r.hero.ctaSecondary.label }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-800 pt-8", children: [
        /* @__PURE__ */ e(be, { value: r.hero.stats.innovation.value, label: r.hero.stats.innovation.label, theme: "dark" }),
        /* @__PURE__ */ e(be, { value: r.hero.stats.commercial.value, label: r.hero.stats.commercial.label, theme: "dark" }),
        /* @__PURE__ */ e(be, { value: r.hero.stats.facilities.value, label: r.hero.stats.facilities.label, theme: "dark" }),
        /* @__PURE__ */ e(be, { value: r.hero.stats.pilot.value, label: r.hero.stats.pilot.label, theme: "dark" })
      ] })
    ] })
  ] });
}, zr = () => /* @__PURE__ */ t("section", { className: "py-24 px-6 bg-black border-t border-neutral-800 relative overflow-hidden", children: [
  /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" }),
  /* @__PURE__ */ e("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" }),
  /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto relative z-10", children: /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch", children: [
    /* @__PURE__ */ t("div", { className: "bg-neutral-900/50 border border-neutral-800 p-10 md:p-16 rounded-3xl backdrop-blur-md flex flex-col justify-between group hover:border-brand-500/30 transition-all duration-500", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-bold uppercase tracking-wider mb-8", children: [
          /* @__PURE__ */ e("span", { className: "w-2 h-2 rounded-full bg-brand-500 animate-pulse" }),
          "Recommended"
        ] }),
        /* @__PURE__ */ t("h2", { className: "text-4xl md:text-5xl font-display font-medium text-white mb-6 leading-tight", children: [
          "Ready to deploy",
          /* @__PURE__ */ e("br", {}),
          /* @__PURE__ */ e("span", { className: "text-neutral-500", children: "Infrastructure 2.0?" })
        ] }),
        /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-md mb-12", children: "Start with a pilot program. Verify performance on your site with zero risk." })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex flex-col sm:flex-row gap-4", children: [
        /* @__PURE__ */ t("button", { className: "flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-white text-black rounded-xl font-bold hover:bg-neutral-200 transition-colors", children: [
          "Book Pilot Demo ",
          /* @__PURE__ */ e(S, { className: "w-5 h-5" })
        ] }),
        /* @__PURE__ */ t("button", { className: "flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-neutral-800 text-white border border-neutral-700 rounded-xl font-bold hover:bg-neutral-700 transition-colors", children: [
          "Talk to Engineer ",
          /* @__PURE__ */ e(ut, { className: "w-5 h-5" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ t("div", { className: "bg-neutral-900/30 border border-neutral-800 p-8 rounded-3xl hover:bg-neutral-800/50 hover:border-neutral-700 transition-all cursor-pointer group/card flex flex-col justify-between min-h-[240px]", children: [
        /* @__PURE__ */ e("div", { className: "w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover/card:scale-110 transition-transform", children: /* @__PURE__ */ e(ye, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("h3", { className: "text-xl font-bold text-white mb-2", children: "Technical Specs" }),
          /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 mb-6", children: "Download detailed datasheets." }),
          /* @__PURE__ */ t("span", { className: "text-brand-400 text-sm font-bold flex items-center gap-2", children: [
            "Download PDF ",
            /* @__PURE__ */ e(S, { className: "w-4 h-4" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "bg-neutral-900/30 border border-neutral-800 p-8 rounded-3xl hover:bg-neutral-800/50 hover:border-neutral-700 transition-all cursor-pointer group/card flex flex-col justify-between min-h-[240px]", children: [
        /* @__PURE__ */ e("div", { className: "w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover/card:scale-110 transition-transform", children: /* @__PURE__ */ e(G, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("h3", { className: "text-xl font-bold text-white mb-2", children: "Sales Inquiry" }),
          /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 mb-6", children: "Volume pricing & quotes." }),
          /* @__PURE__ */ t("span", { className: "text-brand-400 text-sm font-bold flex items-center gap-2", children: [
            "Contact Sales ",
            /* @__PURE__ */ e(S, { className: "w-4 h-4" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "col-span-1 sm:col-span-2 bg-gradient-to-r from-brand-900/20 to-neutral-900/30 border border-neutral-800 p-8 rounded-3xl flex items-center justify-between group/card hover:border-brand-500/20 transition-all", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-6", children: [
          /* @__PURE__ */ e("div", { className: "hidden sm:flex w-12 h-12 rounded-full border-2 border-brand-500/20 items-center justify-center", children: /* @__PURE__ */ e(ke, { className: "w-5 h-5 text-brand-400" }) }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "text-sm text-brand-400 font-bold uppercase tracking-wider mb-1", children: "Direct Line" }),
            /* @__PURE__ */ e("div", { className: "text-xl text-white font-mono", children: "info@monoatoms.com" })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover/card:bg-brand-500 group-hover/card:text-black transition-all", children: /* @__PURE__ */ e(S, { className: "w-5 h-5" }) })
      ] })
    ] })
  ] }) })
] }), y = ({ number: r, title: n, subtitle: l, theme: a = "light", accent: i = !1 }) => /* @__PURE__ */ t("div", { className: "mb-12 md:mb-20 group", children: [
  /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6 transition-all duration-300 ${a === "dark" ? "bg-neutral-800/50 border border-neutral-700/50 backdrop-blur-sm" : i ? "bg-gradient-to-r from-brand-50 to-teal-50 border border-brand-200 shadow-sm group-hover:shadow-md group-hover:border-brand-300" : "bg-gradient-to-r from-neutral-100 to-neutral-50 border border-neutral-200/70 shadow-sm group-hover:shadow-md"}`, children: [
    /* @__PURE__ */ e("span", { className: `font-mono text-xs tracking-widest uppercase font-bold ${a === "dark" ? "text-neutral-400" : i ? "text-brand-600" : "text-neutral-600"}`, children: r }),
    /* @__PURE__ */ e("span", { className: `w-1 h-1 rounded-full ${a === "dark" ? "bg-neutral-600" : i ? "bg-brand-500" : "bg-neutral-400"}` }),
    /* @__PURE__ */ e("span", { className: `font-mono text-xs tracking-wider uppercase font-semibold ${a === "dark" ? "text-neutral-500" : i ? "text-brand-600" : "text-neutral-500"}`, children: n })
  ] }),
  /* @__PURE__ */ e("h2", { className: `text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-2xl ${a === "dark" ? "text-white" : "text-neutral-900"}`, children: l })
] }), Xt = ({ icon: r, title: n, description: l, items: a, color: i, badges: s }) => /* @__PURE__ */ t("div", { className: "group relative bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8 hover:bg-neutral-900/60 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden backdrop-blur-sm", children: [
  /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" }),
  /* @__PURE__ */ t("div", { className: "relative z-10", children: [
    /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-6", children: [
      /* @__PURE__ */ e("div", { className: `p-3 rounded-xl bg-${i}-500/10 text-${i}-400 border border-${i}-500/20 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-500`, children: /* @__PURE__ */ e(r, { className: "w-8 h-8", strokeWidth: 1.5 }) }),
      s && /* @__PURE__ */ e("div", { className: "flex -space-x-2", children: s.map((o, c) => /* @__PURE__ */ e("div", { className: "w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[10px] text-neutral-400 font-mono font-bold", children: o }, c)) })
    ] }),
    /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors", children: n }),
    /* @__PURE__ */ e("p", { className: "text-neutral-400 text-sm mb-6 leading-relaxed", children: l }),
    /* @__PURE__ */ e("ul", { className: "space-y-3 border-t border-white/5 pt-4", children: a.map((o, c) => /* @__PURE__ */ t("li", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ e(ie, { className: `w-4 h-4 text-${i}-500/80` }),
      /* @__PURE__ */ e("span", { className: "text-sm text-neutral-300 font-medium", children: o })
    ] }, c)) })
  ] })
] }), Zt = ({ name: r, id: n, status: l }) => /* @__PURE__ */ t("div", { className: "flex items-center justify-between p-4 bg-black/40 border border-white/5 rounded-lg hover:border-cyan-500/30 transition-colors group", children: [
  /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ e("div", { className: `w-2 h-2 rounded-full ${l === "Active" ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}` }),
    /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ e("div", { className: "text-sm font-mono font-bold text-neutral-300 group-hover:text-white transition-colors", children: r }),
      /* @__PURE__ */ e("div", { className: "text-[10px] text-neutral-600 font-mono tracking-wider", children: n })
    ] })
  ] }),
  /* @__PURE__ */ e("div", { className: "px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-500 font-mono group-hover:text-cyan-400 transition-colors", children: l })
] }), Rr = () => {
  const r = [
    {
      icon: V,
      title: "Accredited Excellence",
      description: "Certified by the National Accreditation Board for Testing (NABL) & ISO standards.",
      color: "cyan",
      items: ["ISO/IEC 17025:2017", "ISO 9001:2015", "Traceable Validation"],
      badges: ["ISO", "BIS", "CE"]
    },
    {
      icon: me,
      title: "Atomic Verification",
      description: "Every batch undergoes multi-spectrum analysis from raw material to dispatch.",
      color: "purple",
      items: ["SEM/TEM Imaging", "Raman Spectroscopy", "Molecular Analysis"],
      badges: ["99%", "QC"]
    },
    {
      icon: Ee,
      title: "Transparent Reporting",
      description: "Digital Certificates of Analysis (CoA) accessible for every shipment.",
      color: "emerald",
      items: ["Cloud-Hosted Reports", "QR Code Traceability", "Third-Party Audits"],
      badges: ["CoA", "PDF"]
    }
  ], n = [
    { name: "Field Emission SEM", id: "Lab-A12", status: "Active" },
    { name: "Raman Spectrometer", id: "Lab-B04", status: "Active" },
    { name: "Universal Testing", id: "Mech-X9", status: "Calibrated" },
    { name: "Thermal Analyzer", id: "Therm-D2", status: "Active" },
    { name: "Particle Size Analyzer", id: "Nano-S1", status: "Active" },
    { name: "Optical Profilometer", id: "Surf-M3", status: "Maintenance" }
  ];
  return /* @__PURE__ */ e("section", { className: "py-24 px-6 border-b border-neutral-800 bg-black/10 relative", children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ e(
      y,
      {
        number: "07",
        title: "Certified Trust",
        subtitle: "",
        theme: "dark"
      }
    ),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16 mb-12", children: r.map((l, a) => /* @__PURE__ */ e(Xt, { ...l }, a)) }),
    /* @__PURE__ */ t("div", { className: "relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/50 backdrop-blur-md", children: [
      /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" }),
      /* @__PURE__ */ t("div", { className: "absolute top-0 right-0 p-4 flex gap-2", children: [
        /* @__PURE__ */ e("div", { className: "w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" }),
        /* @__PURE__ */ e("div", { className: "w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" }),
        /* @__PURE__ */ e("div", { className: "w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" })
      ] }),
      /* @__PURE__ */ t("div", { className: "p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 mb-6", children: [
            /* @__PURE__ */ e(Be, { className: "w-5 h-5 text-emerald-400 animate-pulse" }),
            /* @__PURE__ */ e("span", { className: "text-sm font-mono font-bold text-emerald-400 uppercase tracking-widest", children: "Live Lab Status" })
          ] }),
          /* @__PURE__ */ t("h3", { className: "text-3xl font-display font-bold text-white mb-4", children: [
            "State-of-the-Art ",
            /* @__PURE__ */ e("br", {}),
            /* @__PURE__ */ e("span", { className: "text-neutral-500", children: "Characterization Suite" })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-neutral-400 leading-relaxed mb-8", children: "Our in-house characterization facility ensures that every nanometer of material meets the strictest global standards before it leaves our facility." }),
          /* @__PURE__ */ t("a", { href: "/lab-spec-sheet.pdf", download: "MonoAtom-Labs-Spec-Sheet.pdf", className: "group inline-flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all", children: [
            /* @__PURE__ */ e(It, { className: "w-4 h-4 text-neutral-400 group-hover:text-cyan-400" }),
            /* @__PURE__ */ e("span", { className: "font-mono text-sm", children: "Download Lab Spec Sheet" })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4", children: n.map((l, a) => /* @__PURE__ */ e(Zt, { ...l }, a)) })
      ] })
    ] })
  ] }) }) });
}, et = {
  sectionHeading: {
    number: "02",
    title: "How We Work Together",
    subtitle: "A clear, structured process from discovery to deployment—designed to minimize risk and maximize results"
  },
  steps: [
    {
      step: "1",
      title: "Discovery Call",
      subtitle: "Understanding Your Needs",
      icon: "Phone",
      duration: "1 Week",
      color: "blue",
      activities: [
        "Initial consultation to understand your requirements",
        "Recommend appropriate product solutions",
        "Share technical specifications and performance data",
        "Discuss pricing and implementation options"
      ]
    },
    {
      step: "2",
      title: "Sample & Testing",
      subtitle: "Proof of Performance",
      icon: "FlaskConical",
      duration: "2-4 Weeks",
      color: "purple",
      activities: [
        "Provide product samples for your evaluation",
        "Support pilot testing in your environment",
        "Analyze results and optimize formulation",
        "Address technical questions from your team"
      ]
    },
    {
      step: "3",
      title: "Pilot Deployment",
      subtitle: "Small-Scale Implementation",
      icon: "Rocket",
      duration: "1-2 Months",
      color: "emerald",
      activities: [
        "Limited production run or site trial",
        "Monitor performance metrics closely",
        "Optimize application process",
        "Train your team on best practices"
      ]
    },
    {
      step: "4",
      title: "Full Rollout",
      subtitle: "Scale to Production",
      icon: "CheckCircle",
      duration: "Ongoing",
      color: "orange",
      activities: [
        "Manufacturing partnership or technology licensing",
        "Full-scale production integration",
        "Continuous technical support",
        "Performance monitoring and optimization"
      ]
    }
  ],
  bottomCards: {
    left: {
      title: "Partnership Models",
      items: [
        {
          title: "Technology Licensing",
          description: "Integrate our IP into your production lines with full technical support and royalty-based model"
        },
        {
          title: "JV-SPV Model",
          description: "Joint ventures for co-development, manufacturing, and commercialization with shared IP value"
        }
      ]
    },
    right: {
      title: "What You Get",
      items: [
        "NABL-certified performance guarantees",
        "Full technical documentation",
        "Application training for your team",
        "Ongoing optimization support",
        "Access to R&D expertise",
        "Manufacturing process guidance"
      ]
    }
  }
}, er = {
  Phone: G,
  FlaskConical: B,
  Rocket: We,
  CheckCircle: C
}, Er = ({ copy: r = et }) => {
  const n = (r.steps ?? et.steps).map((a) => ({
    ...a,
    icon: er[a.icon] ?? G
  })), l = (a) => ({
    blue: {
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
      border: "border-blue-200",
      hoverBorder: "hover:border-blue-400"
    },
    purple: {
      gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      border: "border-purple-200",
      hoverBorder: "hover:border-purple-400"
    },
    emerald: {
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
      border: "border-emerald-200",
      hoverBorder: "hover:border-emerald-400"
    },
    orange: {
      gradient: "bg-gradient-to-br from-orange-500 to-red-600",
      border: "border-orange-200",
      hoverBorder: "hover:border-orange-400"
    }
  })[a];
  return /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-gradient-to-b from-white to-neutral-50 border-b border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ e(
      y,
      {
        number: r.sectionHeading?.number ?? "02",
        title: r.sectionHeading?.title ?? "How We Work Together",
        subtitle: r.sectionHeading?.subtitle ?? "A clear, structured process from discovery to deployment—designed to minimize risk and maximize results",
        theme: "light"
      }
    ),
    /* @__PURE__ */ t("div", { className: "relative mt-16", children: [
      /* @__PURE__ */ e("div", { className: "hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-neutral-200 -translate-y-1/2" }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 relative", children: n.map((a, i) => {
        const s = a.icon, o = l(a.color), c = i === n.length - 1;
        return /* @__PURE__ */ t("div", { className: "relative", children: [
          /* @__PURE__ */ t("div", { className: `bg-white border-2 ${o.border} rounded-2xl p-8 ${o.hoverBorder} hover:shadow-2xl transition-all h-full`, children: [
            /* @__PURE__ */ e("div", { className: `inline-flex p-4 ${o.gradient} rounded-xl mb-6`, children: /* @__PURE__ */ e(s, { className: "w-8 h-8 text-white" }) }),
            /* @__PURE__ */ e("div", { className: "text-4xl font-display font-bold text-neutral-900 mb-2", children: a.step }),
            /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-neutral-900 mb-2", children: a.title }),
            /* @__PURE__ */ e("p", { className: "text-neutral-600 mb-4", children: a.subtitle }),
            /* @__PURE__ */ e("div", { className: "inline-flex items-center gap-2 bg-neutral-100 px-3 py-1 rounded-full mb-6", children: /* @__PURE__ */ e("span", { className: "text-sm font-bold text-neutral-600", children: a.duration }) }),
            /* @__PURE__ */ e("ul", { className: "space-y-3", children: a.activities.map((m, d) => /* @__PURE__ */ t("li", { className: "flex items-start gap-2 text-sm text-neutral-700", children: [
              /* @__PURE__ */ e(C, { className: "w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ e("span", { children: m })
            ] }, d)) })
          ] }),
          !c && /* @__PURE__ */ e(S, { className: "hidden lg:block absolute top-1/2 -right-4 w-8 h-8 text-neutral-400 -translate-y-1/2 z-10" })
        ] }, i);
      }) })
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-16 grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ t("div", { className: "bg-neutral-900 text-white rounded-2xl p-10", children: [
        /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold mb-4", children: r.bottomCards?.left?.title ?? "Partnership Models" }),
        /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("h4", { className: "font-bold mb-2", children: r.bottomCards?.left?.items?.[0]?.title ?? "Technology Licensing" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-300 text-sm font-light", children: r.bottomCards?.left?.items?.[0]?.description ?? "Integrate our IP into your production lines with full technical support and royalty-based model" })
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("h4", { className: "font-bold mb-2", children: r.bottomCards?.left?.items?.[1]?.title ?? "JV-SPV Model" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-300 text-sm font-light", children: r.bottomCards?.left?.items?.[1]?.description ?? "Joint ventures for co-development, manufacturing, and commercialization with shared IP value" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-10", children: [
        /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-neutral-900 mb-4", children: r.bottomCards?.right?.title ?? "What You Get" }),
        /* @__PURE__ */ e("ul", { className: "space-y-3", children: (r.bottomCards?.right?.items ?? [
          "NABL-certified performance guarantees",
          "Full technical documentation",
          "Application training for your team",
          "Ongoing optimization support",
          "Access to R&D expertise",
          "Manufacturing process guidance"
        ]).map((a, i) => /* @__PURE__ */ t("li", { className: "flex items-center gap-2 text-neutral-700", children: [
          /* @__PURE__ */ e(C, { className: "w-5 h-5 text-green-600 flex-shrink-0" }),
          /* @__PURE__ */ e("span", { className: "font-medium", children: a })
        ] }, i)) })
      ] })
    ] })
  ] }) });
}, tr = ({ question: r, answer: n, icon: l, isOpen: a, onClick: i }) => /* @__PURE__ */ t("div", { className: `group border border-neutral-200 rounded-xl overflow-hidden transition-all duration-300 ${a ? "bg-white shadow-xl ring-1 ring-neutral-200" : "bg-white hover:border-neutral-300"}`, children: [
  /* @__PURE__ */ t(
    "button",
    {
      onClick: i,
      className: "w-full flex items-center gap-4 p-6 text-left",
      children: [
        /* @__PURE__ */ e("div", { className: `flex-shrink-0 p-2 rounded-lg ${a ? "bg-brand-50 text-brand-600" : "bg-neutral-100 text-neutral-500"} transition-colors`, children: /* @__PURE__ */ e(l, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e("h3", { className: `text-lg font-display font-medium transition-colors ${a ? "text-neutral-900" : "text-neutral-700 group-hover:text-black"}`, children: r }) }),
        /* @__PURE__ */ e(
          Tt,
          {
            className: `flex-shrink-0 w-5 h-5 text-neutral-400 transition-transform duration-300 ${a ? "rotate-180 text-brand-500" : ""}`
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ e(
    "div",
    {
      className: `overflow-hidden transition-all duration-300 ease-in-out ${a ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
      children: /* @__PURE__ */ e("div", { className: "px-6 pb-6 pl-[76px] text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4", children: n })
    }
  )
] }), tt = {
  rose: {
    hoverBorder: "hover:border-rose-200",
    blob: "bg-rose-50 group-hover:bg-rose-100",
    icon: "text-rose-500",
    border: "border-rose-200 group-hover:border-rose-400"
  },
  amber: {
    hoverBorder: "hover:border-amber-200",
    blob: "bg-amber-50 group-hover:bg-amber-100",
    icon: "text-amber-500",
    border: "border-amber-200 group-hover:border-amber-400"
  },
  cyan: {
    hoverBorder: "hover:border-cyan-200",
    blob: "bg-cyan-50 group-hover:bg-cyan-100",
    icon: "text-cyan-500",
    border: "border-cyan-200 group-hover:border-cyan-400"
  },
  purple: {
    hoverBorder: "hover:border-purple-200",
    blob: "bg-purple-50 group-hover:bg-purple-100",
    icon: "text-purple-500",
    border: "border-purple-200 group-hover:border-purple-400"
  }
}, rr = ({ title: r, response: n, color: l }) => {
  const a = tt[l] || tt.purple;
  return /* @__PURE__ */ t(
    "div",
    {
      className: `relative overflow-hidden bg-white border border-neutral-200 p-6 rounded-2xl ${a.hoverBorder} hover:shadow-lg transition-all duration-300 group`,
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: `absolute top-0 right-0 w-32 h-32 ${a.blob} rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 transition-colors`
          }
        ),
        /* @__PURE__ */ t("h4", { className: "font-display font-bold text-lg mb-4 text-neutral-900 flex items-center gap-2", children: [
          /* @__PURE__ */ e(pt, { className: `w-5 h-5 ${a.icon}` }),
          r
        ] }),
        /* @__PURE__ */ e("div", { className: `relative pl-4 border-l-2 ${a.border} transition-colors`, children: /* @__PURE__ */ t("p", { className: "text-neutral-600 text-sm leading-relaxed", children: [
          /* @__PURE__ */ e("span", { className: "text-neutral-900 font-bold block mb-1", children: "Reality:" }),
          n
        ] }) })
      ]
    }
  );
}, Ae = {
  sectionHeading: {
    number: "11",
    title: "Knowledge Base",
    subtitle: "Expert answers to technical and commercial questions."
  },
  concernsTitle: "Common Concerns",
  faqs: [
    {
      question: "How long does it take to see ROI from your products?",
      answer: "Most customers see positive ROI within 18 months on average. Graffisol (solar coating) typically pays back in 18 months, while Graphacrete shows immediate cost savings through cement reduction. We provide detailed ROI calculators and pilot programs to verify results.",
      icon: "TrendingUp"
    },
    {
      question: "Are your products certified and tested?",
      answer: "Yes, all our products undergo rigorous NABL-certified testing. We maintain two state-of-the-art R&D and testing facilities with ISO-standard equipment. Our products are validated through both lab testing and real-world field trials.",
      icon: "Shield"
    },
    {
      question: "What is the minimum order quantity?",
      answer: "We offer flexible order quantities to suit different project sizes. For pilot programs, we can start with small batches (kg-scale). For full-scale deployment, we have ton-scale manufacturing capabilities.",
      icon: "Clock"
    },
    {
      question: "Do you provide on-site technical support?",
      answer: "Absolutely! We provide comprehensive technical support including on-site training, application guidelines, troubleshooting assistance, and ongoing consultation to ensure optimal performance.",
      icon: "CheckCircle2"
    }
  ],
  objections: [
    {
      title: '"Graphene is too expensive"',
      response: "Our ultra-low dosage (0.05%) makes it highly cost-effective per unit, often reducing total material costs by displacing expensive additives.",
      color: "rose"
    },
    {
      title: `"It's not proven at scale"`,
      response: "We operate a ton-scale facility and have deployed successfully in major infrastructure projects. We are not a lab experiment; we are an industrial supplier.",
      color: "amber"
    },
    {
      title: '"Integration is complex"',
      response: "Our products are designed as drop-in additives. No major machinery changes are required. We provide the dosing protocols.",
      color: "cyan"
    },
    {
      title: '"ROI is uncertain"',
      response: "We offer performance warranties and pilot programs to validate ROI on your specific site before you commit to a full contract.",
      color: "purple"
    }
  ]
}, Br = ({ copy: r = Ae }) => {
  const [n, l] = L(0), a = {
    TrendingUp: A,
    Shield: V,
    Clock: ht,
    CheckCircle2: ie
  }, i = ((r.faqs ?? Ae.faqs) || []).map((o) => ({
    question: o.question,
    answer: o.answer,
    icon: a[o.icon] ?? De
  })), s = r.objections ?? Ae.objections;
  return /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-white border-b border-neutral-200", children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12", children: [
    /* @__PURE__ */ t("div", { className: "lg:col-span-5 space-y-8", children: [
      /* @__PURE__ */ e(
        y,
        {
          number: r.sectionHeading?.number ?? "11",
          title: r.sectionHeading?.title ?? "Knowledge Base",
          subtitle: r.sectionHeading?.subtitle ?? "Expert answers to technical and commercial questions.",
          theme: "light"
        }
      ),
      /* @__PURE__ */ t("div", { className: "bg-neutral-50 border border-neutral-200 rounded-3xl p-8", children: [
        /* @__PURE__ */ t("h3", { className: "text-xl font-display font-medium text-neutral-900 mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ e(De, { className: "w-5 h-5 text-neutral-500" }),
          r.concernsTitle ?? "Common Concerns"
        ] }),
        /* @__PURE__ */ e("div", { className: "space-y-4", children: s.map((o, c) => /* @__PURE__ */ e(rr, { ...o }, c)) })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "lg:col-span-7 space-y-4 pt-8 lg:pt-0", children: i.map((o, c) => /* @__PURE__ */ e(
      tr,
      {
        question: o.question,
        answer: o.answer,
        icon: o.icon,
        isOpen: n === c,
        onClick: () => l(n === c ? -1 : c)
      },
      c
    )) })
  ] }) }) });
}, ar = ({ icon: r, value: n, unit: l, label: a, color: i, delay: s }) => /* @__PURE__ */ t(
  "div",
  {
    className: "relative group bg-white border border-neutral-100 p-8 rounded-3xl hover:border-neutral-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden",
    style: { animationDelay: `${s}ms` },
    children: [
      /* @__PURE__ */ e("div", { className: `absolute -top-20 -right-20 w-40 h-40 bg-${i}-500/10 rounded-full blur-[80px] group-hover:bg-${i}-500/20 transition-all duration-700` }),
      /* @__PURE__ */ t("div", { className: "relative z-10 flex flex-col h-full justify-between", children: [
        /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-8", children: [
          /* @__PURE__ */ e("div", { className: `p-3 rounded-2xl bg-${i}-50 text-${i}-600 border border-${i}-100 group-hover:scale-110 transition-transform duration-500`, children: /* @__PURE__ */ e(r, { className: "w-8 h-8", strokeWidth: 1.5 }) }),
          /* @__PURE__ */ e(A, { className: `w-5 h-5 text-${i}-500 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform` })
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("div", { className: "flex items-baseline gap-2 mb-2", children: [
            /* @__PURE__ */ e("span", { className: `text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-neutral-900 tracking-tighter group-hover:text-${i}-600 transition-colors`, children: n }),
            /* @__PURE__ */ e("span", { className: `text-sm font-bold text-${i}-600 uppercase tracking-widest`, children: l })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-neutral-500 text-sm font-medium leading-relaxed group-hover:text-neutral-700 transition-colors", children: a })
        ] })
      ] })
    ]
  }
), lr = ({ icon: r, value: n, label: l, description: a, color: i }) => /* @__PURE__ */ t("div", { className: "flex items-center gap-6 p-6 bg-white border border-neutral-100 rounded-2xl hover:border-neutral-300 hover:shadow-lg transition-all duration-300 group", children: [
  /* @__PURE__ */ e("div", { className: `flex-shrink-0 w-14 h-14 rounded-full bg-${i}-50 flex items-center justify-center text-${i}-600 border border-${i}-100 transition-colors`, children: /* @__PURE__ */ e(r, { className: "w-6 h-6" }) }),
  /* @__PURE__ */ t("div", { className: "flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 items-center", children: [
    /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ e("div", { className: "text-lg font-bold text-neutral-900 mb-1", children: l }),
      /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 font-mono", children: a })
    ] }),
    /* @__PURE__ */ e("div", { className: "text-right md:text-right", children: /* @__PURE__ */ e("span", { className: `text-3xl font-display font-bold text-${i}-600`, children: n }) })
  ] })
] }), Wr = () => {
  const r = [
    {
      icon: Ce,
      value: "25K+",
      unit: "TONS",
      label: "CO₂ Emissions Eliminated",
      color: "emerald",
      delay: 0
    },
    {
      icon: Ke,
      value: "1.2M",
      unit: "TREES",
      label: "Equivalent Forest Impact",
      color: "green",
      delay: 100
    },
    {
      icon: ze,
      value: "5.4K",
      unit: "CARS",
      label: "Passenger Vehicles off Road",
      color: "cyan",
      delay: 200
    },
    {
      icon: Je,
      value: "8K+",
      unit: "HOMES",
      label: "Annual Energy Powered",
      color: "amber",
      delay: 300
    }
  ], n = [
    {
      icon: Ce,
      value: "₹25 Cr",
      label: "Carbon Credit Value",
      description: "Market potential at $20/ton",
      color: "emerald"
    },
    {
      icon: Ke,
      value: "42,000 ha",
      label: "Forest Conservation",
      description: "Land area required for same offset",
      color: "green"
    },
    {
      icon: ze,
      value: "54M km",
      label: "Distance Saved",
      description: "Total zero-emission mileage",
      color: "cyan"
    },
    {
      icon: Je,
      value: "195 GWh",
      label: "Direct Energy Savings",
      description: "From solar efficiency gains",
      color: "amber"
    }
  ];
  return /* @__PURE__ */ t("section", { className: "py-24 bg-gradient-to-b from-white to-neutral-50 border-t border-neutral-200 relative overflow-hidden", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_70%,transparent_100%)]" }),
    /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto px-6 relative z-10", children: [
      /* @__PURE__ */ t("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8", children: [
        /* @__PURE__ */ e("div", {}),
        /* @__PURE__ */ e("p", { className: "text-neutral-500 max-w-sm text-lg leading-relaxed mb-2", children: "Tracking the real-time environmental benefits of every kilogram of Monoatom material deployed globally." })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", children: r.map((l, a) => /* @__PURE__ */ e(ar, { ...l }, a)) }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20", children: [
        /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-100 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-500", children: [
          /* @__PURE__ */ t("h3", { className: "text-2xl font-display font-bold text-neutral-900 mb-8 flex items-center gap-3", children: [
            /* @__PURE__ */ e(At, { className: "w-5 h-5 text-neutral-400" }),
            "Equivalent Impact"
          ] }),
          /* @__PURE__ */ e("div", { className: "space-y-4", children: n.map((l, a) => /* @__PURE__ */ e(lr, { ...l }, a)) })
        ] }),
        /* @__PURE__ */ t("div", { className: "relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 p-10 flex flex-col justify-center shadow-sm", children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40" }),
          /* @__PURE__ */ e("div", { className: "absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-200 rounded-full blur-[100px] opacity-60" }),
          /* @__PURE__ */ t("div", { className: "relative z-10", children: [
            /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-bold text-emerald-900 mb-6", children: "Sustainability as a Service" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-600 text-lg leading-relaxed mb-10", children: "Investing in graphene isn't just about performance—it's the most efficient way to decarbonize industrial supply chains." }),
            /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-4", children: [
              /* @__PURE__ */ e("div", { className: "px-5 py-3 rounded-xl bg-white border border-emerald-100 text-emerald-700 font-mono text-sm shadow-sm font-bold", children: "ESG Compliant" }),
              /* @__PURE__ */ e("div", { className: "px-5 py-3 rounded-xl bg-white border border-emerald-100 text-emerald-700 font-mono text-sm shadow-sm font-bold", children: "Carbon Negative" }),
              /* @__PURE__ */ e("div", { className: "px-5 py-3 rounded-xl bg-white border border-emerald-100 text-emerald-700 font-mono text-sm shadow-sm font-bold", children: "LEED Credits" })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}, Or = () => {
  const r = [
    {
      icon: Ce,
      value: 50,
      suffix: "M+",
      unit: "kg",
      label: "CO₂ Saved",
      description: "Carbon emissions prevented through graphene-enhanced materials",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Oe,
      value: 100,
      suffix: "+",
      unit: "",
      label: "Installations",
      description: "Active deployments across construction, solar, and industrial sectors",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: A,
      value: 25,
      suffix: "%",
      unit: "",
      label: "Cost Reduction",
      description: "Average cost savings achieved by customers vs traditional solutions",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: ue,
      value: 99.5,
      suffix: "%",
      unit: "",
      label: "Satisfaction",
      description: "Customer satisfaction rating based on post-deployment surveys",
      color: "from-orange-500 to-red-600"
    }
  ], n = ({ value: l, suffix: a, unit: i }) => {
    const [s, o] = L(0), [c, m] = L(!1), d = we(null);
    return ce(() => {
      const u = new IntersectionObserver(
        ([p]) => {
          if (p.isIntersecting && !c) {
            m(!0);
            const g = 2e3, w = 60, j = l / w;
            let h = 0;
            const b = setInterval(() => {
              h += j, h >= l ? (o(l), clearInterval(b)) : o(Math.floor(h * 10) / 10);
            }, g / w);
            return () => clearInterval(b);
          }
        },
        { threshold: 0.1 }
      );
      return d.current && u.observe(d.current), () => {
        d.current && u.unobserve(d.current);
      };
    }, [l, c]), /* @__PURE__ */ t("div", { ref: d, className: "text-4xl sm:text-5xl md:text-6xl font-display font-bold", children: [
      s.toFixed(l % 1 !== 0 ? 1 : 0),
      a,
      i && /* @__PURE__ */ e("span", { className: "text-xl sm:text-2xl md:text-3xl ml-1", children: i })
    ] });
  };
  return /* @__PURE__ */ e("section", { className: "py-24 px-6 border-b border-neutral-900 text-white bg-black/10 relative", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ e("div", { className: "text-center mb-16", children: /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6", children: [
      /* @__PURE__ */ e(A, { className: "w-4 h-4 text-green-400" }),
      /* @__PURE__ */ e("span", { className: "text-sm font-bold text-green-300 uppercase tracking-wide", children: "Real Impact" })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: r.map((l, a) => {
      const i = l.icon;
      return /* @__PURE__ */ t(
        "div",
        {
          className: "bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-8 hover:border-white/30 hover:bg-white/10 transition-all",
          children: [
            /* @__PURE__ */ e("div", { className: `inline-flex p-4 bg-gradient-to-br ${l.color} rounded-xl mb-6`, children: /* @__PURE__ */ e(i, { className: "w-8 h-8 text-white" }) }),
            /* @__PURE__ */ e(
              n,
              {
                value: l.value,
                suffix: l.suffix,
                unit: l.unit
              }
            ),
            /* @__PURE__ */ e("h3", { className: "text-2xl font-bold mt-4 mb-2", children: l.label }),
            /* @__PURE__ */ e("p", { className: "text-neutral-400 text-sm leading-relaxed font-light", children: l.description })
          ]
        },
        a
      );
    }) }),
    /* @__PURE__ */ t("div", { className: "mt-16 grid grid-cols-1 md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ t("div", { className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8", children: [
        /* @__PURE__ */ e("div", { className: "text-3xl font-display font-bold text-green-400 mb-2", children: "5+" }),
        /* @__PURE__ */ e("h4", { className: "text-lg font-bold mb-2", children: "Commercial Products" }),
        /* @__PURE__ */ e("p", { className: "text-neutral-400 text-sm font-light", children: "Market-ready solutions deployed across industries" })
      ] }),
      /* @__PURE__ */ t("div", { className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8", children: [
        /* @__PURE__ */ e("div", { className: "text-3xl font-display font-bold text-blue-400 mb-2", children: "15+" }),
        /* @__PURE__ */ e("h4", { className: "text-lg font-bold mb-2", children: "Field Validations" }),
        /* @__PURE__ */ e("p", { className: "text-neutral-400 text-sm font-light", children: "Independent testing and NABL certification" })
      ] }),
      /* @__PURE__ */ t("div", { className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8", children: [
        /* @__PURE__ */ e("div", { className: "text-3xl font-display font-bold text-purple-400 mb-2", children: "₹430" }),
        /* @__PURE__ */ e("h4", { className: "text-lg font-bold mb-2", children: "Avg. Savings per m³" }),
        /* @__PURE__ */ e("p", { className: "text-neutral-400 text-sm font-light", children: "Cost reduction for concrete applications" })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "text-center mt-12", children: /* @__PURE__ */ e("p", { className: "text-neutral-500 text-sm font-light", children: "Data updated monthly • Last updated: February 2026" }) })
  ] }) });
}, x = {
  badge: "01 — Industry 4.0 Enabler",
  titleAccent: "Advanced",
  titleLine1: "Materials for the",
  titleLine2: "4th Industrial Revolution",
  valueProp: {
    before: "Our breakthrough materials deliver",
    emphasis: "superior strength, conductivity, and durability",
    after: "—essential building blocks for smart manufacturing and autonomous systems."
  },
  features: [
    {
      title: "Ultra Strong but Light",
      description: "200x stronger than steel at a fraction of the weight — enabling structures that were previously impossible to build."
    },
    {
      title: "Super Hard but Flexible",
      description: "The hardest material known, yet it bends without breaking — delivering durability and adaptability at the atomic scale."
    },
    {
      title: "Highly Conductive but Stable",
      description: "Exceptional electrical and thermal conductivity with outstanding chemical stability — performing reliably in extreme conditions."
    }
  ],
  applicationsTitle: "Applications",
  applications: [
    "Smart Manufacturing & Automation",
    "IoT-Enabled Infrastructure",
    "Advanced Robotics & Composites",
    "Clean Energy Systems",
    "Next-Gen Transportation",
    "Digital Supply Chains"
  ],
  differentiator: {
    headingLine1: "From Lab Prototype to",
    headingHighlight: "Mass Manufacturing",
    description: "Unlike academic research that never leaves the lab, we ensure every innovation scales. Our approach bridges deep-tech expertise with real-world deployment.",
    ctaLabel: "View Solutions",
    ctaTo: "/products"
  },
  tagline: "Building the material foundation for tomorrow"
}, Hr = ({ copy: r = x }) => {
  const n = [
    {
      icon: V,
      title: r.features?.[0]?.title ?? x.features[0].title,
      description: r.features?.[0]?.description ?? x.features[0].description
    },
    {
      icon: $t,
      title: r.features?.[1]?.title ?? x.features[1].title,
      description: r.features?.[1]?.description ?? x.features[1].description
    },
    {
      icon: Z,
      title: r.features?.[2]?.title ?? x.features[2].title,
      description: r.features?.[2]?.description ?? x.features[2].description
    }
  ], l = [
    { title: r.applications?.[0] ?? x.applications[0], icon: q },
    { title: r.applications?.[1] ?? x.applications[1], icon: Mt },
    { title: r.applications?.[2] ?? x.applications[2], icon: Lt },
    { title: r.applications?.[3] ?? x.applications[3], icon: Ce },
    { title: r.applications?.[4] ?? x.applications[4], icon: jt },
    { title: r.applications?.[5] ?? x.applications[5], icon: He }
  ];
  return /* @__PURE__ */ t("section", { className: "py-16 md:py-24 lg:py-32 px-6 bg-white border-b border-neutral-200 relative overflow-hidden", children: [
    /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/4" }),
    /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 w-[600px] h-[600px] bg-neutral-100/80 rounded-full blur-3xl opacity-60 pointer-events-none translate-y-1/3 -translate-x-1/4" }),
    /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto relative z-10", children: [
      /* @__PURE__ */ t("div", { className: "mb-20", children: [
        /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-6", children: [
          /* @__PURE__ */ e("span", { className: "w-2 h-2 rounded-full bg-blue-600" }),
          r.badge ?? x.badge
        ] }),
        /* @__PURE__ */ t("h2", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-medium tracking-tight text-neutral-900 leading-[1.1] mb-6 max-w-4xl", children: [
          /* @__PURE__ */ e("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800", children: r.titleAccent ?? x.titleAccent }),
          " ",
          r.titleLine1 ?? x.titleLine1,
          /* @__PURE__ */ e("br", { className: "hidden md:block" }),
          " ",
          r.titleLine2 ?? x.titleLine2
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "grid md:grid-cols-12 gap-12 mb-24", children: [
        /* @__PURE__ */ e("div", { className: "md:col-span-8", children: /* @__PURE__ */ t("p", { className: "text-2xl md:text-3xl leading-relaxed text-neutral-600 font-light", children: [
          r.valueProp?.before ?? x.valueProp.before,
          " ",
          /* @__PURE__ */ e("span", { className: "text-neutral-900 font-medium border-b-2 border-blue-200", children: r.valueProp?.emphasis ?? x.valueProp.emphasis }),
          r.valueProp?.after ?? x.valueProp.after
        ] }) }),
        /* @__PURE__ */ e("div", { className: "md:col-span-4 flex items-end", children: /* @__PURE__ */ e("div", { className: "w-full h-px bg-neutral-200 mb-6" }) })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid md:grid-cols-3 gap-6 mb-24", children: n.map((a, i) => {
        const s = a.icon;
        return /* @__PURE__ */ t(
          "div",
          {
            className: "group p-8 bg-neutral-50 rounded-2xl border border-neutral-100 hover:bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300",
            children: [
              /* @__PURE__ */ e("div", { className: "mb-6 inline-flex p-3 rounded-lg bg-white border border-neutral-200 text-neutral-900 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors", children: /* @__PURE__ */ e(s, { className: "w-6 h-6", strokeWidth: 1.5 }) }),
              /* @__PURE__ */ e("h4", { className: "text-lg font-bold mb-3 text-neutral-900 group-hover:text-blue-700 transition-colors", children: a.title }),
              /* @__PURE__ */ e("p", { className: "text-neutral-500 leading-relaxed font-light", children: a.description })
            ]
          },
          i
        );
      }) }),
      /* @__PURE__ */ t("div", { className: "grid lg:grid-cols-2 gap-16 items-start mb-20", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("h3", { className: "text-sm font-mono font-semibold text-neutral-400 uppercase tracking-widest mb-8", children: r.applicationsTitle ?? x.applicationsTitle }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-1 gap-3", children: l.map((a, i) => {
            const s = a.icon;
            return /* @__PURE__ */ e(
              "div",
              {
                className: "flex items-center p-4 border-b border-neutral-200",
                children: /* @__PURE__ */ t("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600", children: /* @__PURE__ */ e(s, { className: "w-5 h-5", strokeWidth: 1.5 }) }),
                  /* @__PURE__ */ e("span", { className: "text-lg text-neutral-700 font-light", children: a.title })
                ] })
              },
              i
            );
          }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "relative", children: [
          /* @__PURE__ */ e("div", { className: "absolute -inset-1 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[2rem] opacity-10 blur-xl" }),
          /* @__PURE__ */ t("div", { className: "relative bg-neutral-900 rounded-[1.5rem] p-10 md:p-12 text-white overflow-hidden", children: [
            /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" }),
            /* @__PURE__ */ t("div", { className: "relative z-10 flex flex-col h-full", children: [
              /* @__PURE__ */ e(q, { className: "w-12 h-12 text-blue-400 mb-8", strokeWidth: 1.5 }),
              /* @__PURE__ */ t("h3", { className: "text-3xl font-display font-bold mb-6 leading-tight", children: [
                "From Lab Prototype to ",
                /* @__PURE__ */ e("br", {}),
                /* @__PURE__ */ e("span", { className: "text-blue-400", children: "Mass Manufacturing" })
              ] }),
              /* @__PURE__ */ e("p", { className: "text-neutral-300 leading-relaxed font-light mb-10", children: r.differentiator?.description ?? x.differentiator.description }),
              /* @__PURE__ */ e("div", { className: "mt-auto pt-8 border-t border-white/10 flex flex-wrap gap-4", children: /* @__PURE__ */ e(v, { to: r.differentiator?.ctaTo ?? x.differentiator.ctaTo, children: /* @__PURE__ */ e(I, { variant: "primary", theme: "dark", icon: S, children: r.differentiator?.ctaLabel ?? x.differentiator.ctaLabel }) }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "text-center pt-8 border-t border-neutral-100", children: /* @__PURE__ */ e("p", { className: "text-sm font-mono text-neutral-400 uppercase tracking-widest", children: r.tagline ?? x.tagline }) })
    ] })
  ] });
}, rt = {
  sectionHeading: {
    number: "08",
    title: "Innovation Pipeline",
    subtitle: "Pushing the boundaries of material science from lab to market.",
    theme: "light"
  },
  phases: [
    {
      icon: "Package",
      title: "Market Ready",
      subtitle: "Deployed & generating revenue",
      color: "emerald",
      step: 1,
      products: [
        { name: "Graphacrete", category: "Construction", status: "READY", icon: "🏗️" },
        { name: "Graffisol", category: "Solar Yield", status: "READY", icon: "☀️" },
        { name: "Ceraphene", category: "Coatings", status: "READY", icon: "💎" },
        { name: "HD-G-PE", category: "Polymers", status: "READY", icon: "📦" }
      ]
    },
    {
      icon: "Rocket",
      title: "In Pipeline",
      subtitle: "Scaling for industrial pilots",
      color: "blue",
      step: 2,
      products: [
        { name: "Rustene", category: "Anti-Corrosion", status: "DEV", icon: "🛡️" },
        { name: "Graphyre", category: "Automotive", status: "DEV", icon: "🚗" },
        { name: "Thermaphene", category: "Textiles", status: "DEV", icon: "🔥" },
        { name: "Armophene", category: "Defense", status: "DEV", icon: "🎖️" }
      ]
    },
    {
      icon: "FlaskConical",
      title: "Future Pilots",
      subtitle: "Breakthrough R&D Concepts",
      color: "purple",
      step: 3,
      products: [
        { name: "H₂ Membranes", category: "Energy", status: "PILOT", icon: "⚡" },
        { name: "Desalination", category: "Water", status: "PILOT", icon: "💧" },
        { name: "Li-Ion+", category: "Storage", status: "PILOT", icon: "🔋" },
        { name: "Bio-Sensors", category: "Medical", status: "PILOT", icon: "🧬" }
      ]
    }
  ],
  bottomBanner: {
    title: "The Future is Built on Graphene",
    description: "We are continuously expanding our portfolio. Have a specific challenge? Our materials science team can engineer a solution.",
    buttonLabel: "View Tech Roadmap"
  },
  labels: {
    stepPrefix: "Step"
  }
};
function kt(r, n) {
  if (!n) return r;
  const l = { ...r };
  for (const a of Object.keys(n)) {
    const i = n[a], s = r[a];
    i && typeof i == "object" && !Array.isArray(i) && s && typeof s == "object" && !Array.isArray(s) ? l[a] = kt(s, i) : l[a] = i;
  }
  return l;
}
const ir = ({ name: r, category: n, status: l, icon: a, color: i }) => /* @__PURE__ */ t("div", { className: `group flex items-center gap-4 bg-white border border-neutral-100 rounded-xl p-4 hover:border-${i}-500 hover:shadow-lg transition-all duration-300 cursor-default`, children: [
  /* @__PURE__ */ e("div", { className: `w-10 h-10 rounded-lg flex items-center justify-center text-xl bg-${i}-50 text-${i}-600 group-hover:bg-${i}-500 group-hover:text-white transition-colors`, children: a }),
  /* @__PURE__ */ t("div", { className: "flex-1", children: [
    /* @__PURE__ */ e("h4", { className: "text-base font-bold text-neutral-900 group-hover:text-${color}-600 transition-colors", children: r }),
    /* @__PURE__ */ e("p", { className: "text-xs text-neutral-500 font-medium uppercase tracking-wide", children: n })
  ] }),
  /* @__PURE__ */ e("div", { className: `w-2 h-2 rounded-full bg-${i}-500` })
] }), nr = ({ icon: r, title: n, subtitle: l, products: a, color: i, step: s, isLast: o, stepPrefix: c = "Step" }) => /* @__PURE__ */ t("div", { className: "relative", children: [
  !o && /* @__PURE__ */ e("div", { className: "hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-neutral-200 to-neutral-100 -z-10 transform translate-x-1/2" }),
  /* @__PURE__ */ t("div", { className: "flex flex-col items-center text-center mb-8 relative z-10", children: [
    /* @__PURE__ */ e("div", { className: `w-16 h-16 rounded-2xl bg-white border-2 border-${i}-100 flex items-center justify-center text-${i}-600 shadow-xl shadow-${i}-100/50 mb-4`, children: /* @__PURE__ */ e(r, { className: "w-8 h-8", strokeWidth: 1.5 }) }),
    /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${i}-50 text-${i}-700 text-xs font-bold uppercase tracking-wider mb-2`, children: [
      /* @__PURE__ */ e(Dt, { className: "w-3 h-3" }),
      " ",
      c,
      " 0",
      s
    ] }),
    /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-neutral-900", children: n }),
    /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 font-medium", children: l })
  ] }),
  /* @__PURE__ */ t("div", { className: "space-y-3 relative z-10", children: [
    /* @__PURE__ */ e("div", { className: `absolute inset-0 bg-gradient-to-b from-${i}-50/50 to-transparent -z-10 rounded-3xl -m-4` }),
    a.map((m, d) => /* @__PURE__ */ e(ir, { ...m, color: i }, d))
  ] })
] }), Fr = ({ copy: r }) => {
  const n = kt(rt, r), l = { Package: He, Rocket: We, FlaskConical: B }, a = Array.isArray(n.phases) ? n.phases : rt.phases;
  return /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-white border-b border-neutral-100 overflow-hidden", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ e(
      y,
      {
        number: n.sectionHeading?.number,
        title: n.sectionHeading?.title,
        subtitle: n.sectionHeading?.subtitle,
        theme: n.sectionHeading?.theme
      }
    ),
    /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16 relative", children: [
      /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50 pointer-events-none" }),
      a.map((i, s) => {
        const o = typeof i.icon == "string" ? l[i.icon] : i.icon;
        return /* @__PURE__ */ e(
          nr,
          {
            icon: o,
            title: i.title,
            subtitle: i.subtitle,
            products: i.products,
            color: i.color,
            step: i.step,
            isLast: s === a.length - 1,
            stepPrefix: n.labels?.stepPrefix
          },
          s
        );
      })
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-20 relative rounded-2xl overflow-hidden bg-neutral-900 text-white p-12", children: [
      /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" }),
      /* @__PURE__ */ e("div", { className: "absolute right-0 top-0 w-96 h-96 bg-brand-500/20 rounded-full blur-[100px]" }),
      /* @__PURE__ */ t("div", { className: "relative z-10 flex flex-col md:flex-row items-center justify-between gap-8", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-bold mb-2", children: n.bottomBanner?.title }),
          /* @__PURE__ */ e("p", { className: "text-neutral-400 max-w-xl", children: n.bottomBanner?.description })
        ] }),
        /* @__PURE__ */ t("button", { className: "flex items-center gap-3 px-8 py-4 bg-white text-neutral-900 font-bold rounded-xl hover:bg-neutral-200 transition-colors", children: [
          n.bottomBanner?.buttonLabel,
          " ",
          /* @__PURE__ */ e(S, { className: "w-5 h-5" })
        ] })
      ] })
    ] })
  ] }) });
}, at = {
  cyan: { icon: "text-cyan-600", bg: "bg-cyan-50", border: "group-hover:border-cyan-400", glow: "bg-cyan-500/10" },
  blue: { icon: "text-blue-600", bg: "bg-blue-50", border: "group-hover:border-blue-400", glow: "bg-blue-500/10" },
  amber: { icon: "text-amber-600", bg: "bg-amber-50", border: "group-hover:border-amber-400", glow: "bg-amber-500/10" },
  rose: { icon: "text-rose-600", bg: "bg-rose-50", border: "group-hover:border-rose-400", glow: "bg-rose-500/10" }
}, ge = ({ icon: r, title: n, subtitle: l, color: a }) => {
  const i = at[a] || at.cyan;
  return /* @__PURE__ */ t("div", { className: "relative group cursor-pointer", children: [
    /* @__PURE__ */ e("div", { className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full border border-neutral-100 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out scale-90 group-hover:scale-100 ${i.glow}` }),
    /* @__PURE__ */ e("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-neutral-100 opacity-50 group-hover:opacity-100 transition-all duration-700 delay-75" }),
    /* @__PURE__ */ t("div", { className: `relative w-full aspect-square rounded-full border border-neutral-200 bg-white hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-center p-6 text-center z-10 ${i.border}`, children: [
      /* @__PURE__ */ e("div", { className: `mb-4 text-neutral-400 group-hover:${i.icon} transition-colors duration-500 transform group-hover:scale-110`, children: /* @__PURE__ */ e(r, { strokeWidth: 1.5, className: "w-10 h-10" }) }),
      /* @__PURE__ */ e("h3", { className: "text-xs font-bold tracking-[0.2em] text-neutral-800 uppercase mb-2 group-hover:text-black transition-colors", children: n }),
      /* @__PURE__ */ e("p", { className: "text-[10px] font-medium text-neutral-400 uppercase tracking-wider group-hover:text-neutral-600 transition-colors", children: l })
    ] })
  ] });
}, Gr = () => /* @__PURE__ */ t("section", { className: "py-24 px-6 bg-white border-b border-neutral-200 relative overflow-hidden", children: [
  /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem]" }),
  /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto relative z-10", children: /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch", children: [
    /* @__PURE__ */ t("div", { className: "flex flex-col justify-between", children: [
      /* @__PURE__ */ e(
        y,
        {
          number: "01",
          title: "Our Mission",
          subtitle: /* @__PURE__ */ t(J, { children: [
            "Advanced Nanomaterials for ",
            /* @__PURE__ */ e("br", { className: "hidden md:block" }),
            " ",
            /* @__PURE__ */ e("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-500", children: "Better Quality of Life" })
          ] }),
          theme: "light"
        }
      ),
      /* @__PURE__ */ e("div", { className: "hidden lg:block h-[1px] w-full bg-neutral-100 mt-12" })
    ] }),
    /* @__PURE__ */ t("div", { className: "pt-4", children: [
      /* @__PURE__ */ e("p", { className: "text-2xl text-neutral-800 font-light leading-relaxed mb-12", children: "We create commercially viable graphene solutions that address humanity's most pressing challenges across four critical pillars of sustainable development." }),
      /* @__PURE__ */ e("div", { className: "relative mt-12", children: /* @__PURE__ */ t("div", { className: "grid grid-cols-2 md:grid-cols-2 gap-8 max-w-lg mx-auto md:mx-0", children: [
        /* @__PURE__ */ e(
          ge,
          {
            icon: he,
            title: "Clean Air",
            subtitle: "Carbon Capture",
            color: "cyan"
          }
        ),
        /* @__PURE__ */ e(
          ge,
          {
            icon: Fe,
            title: "Clean Water",
            subtitle: "Desalination",
            color: "blue"
          }
        ),
        /* @__PURE__ */ e(
          ge,
          {
            icon: Z,
            title: "Clean Energy",
            subtitle: "Storage & Efficiency",
            color: "amber"
          }
        ),
        /* @__PURE__ */ e(
          ge,
          {
            icon: Ge,
            title: "Better Life",
            subtitle: "Health & Safety",
            color: "rose"
          }
        )
      ] }) })
    ] })
  ] }) })
] }), z = {
  badge: "From Lab to Manufacturing",
  titleLine1: "We Don't Just Innovate",
  titleLine2: "We Scale to Market",
  description: "We don't just innovate in the lab—we ensure every breakthrough can scale from prototype to mass manufacturing. Our approach bridges deep-tech expertise with real-world industrial deployment, supply-chain integration, and national-scale production.",
  stages: [
    { title: "Lab Prototype", description: "Breakthrough innovation" },
    { title: "Field Validation", description: "Real-world testing" },
    { title: "Scale-Up", description: "Process optimization" },
    { title: "Mass Production", description: "Industrial scale" }
  ]
}, Vr = ({ copy: r = z }) => {
  const n = [
    {
      number: "1",
      icon: B,
      title: r.stages?.[0]?.title ?? z.stages[0].title,
      description: r.stages?.[0]?.description ?? z.stages[0].description,
      color: "blue"
    },
    {
      number: "2",
      icon: ie,
      title: r.stages?.[1]?.title ?? z.stages[1].title,
      description: r.stages?.[1]?.description ?? z.stages[1].description,
      color: "indigo"
    },
    {
      number: "3",
      icon: A,
      title: r.stages?.[2]?.title ?? z.stages[2].title,
      description: r.stages?.[2]?.description ?? z.stages[2].description,
      color: "purple"
    },
    {
      number: "4",
      icon: q,
      title: r.stages?.[3]?.title ?? z.stages[3].title,
      description: r.stages?.[3]?.description ?? z.stages[3].description,
      color: "emerald"
    }
  ], l = (a) => ({
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      hoverBorder: "hover:border-blue-400",
      iconBg: "bg-blue-600",
      iconText: "text-blue-600",
      arrow: "text-blue-400"
    },
    indigo: {
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      hoverBorder: "hover:border-indigo-400",
      iconBg: "bg-indigo-600",
      iconText: "text-indigo-600",
      arrow: "text-indigo-400"
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      hoverBorder: "hover:border-purple-400",
      iconBg: "bg-purple-600",
      iconText: "text-purple-600",
      arrow: "text-purple-400"
    },
    emerald: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      hoverBorder: "hover:border-emerald-400",
      iconBg: "bg-emerald-600",
      iconText: "text-emerald-600",
      arrow: "text-emerald-400"
    }
  })[a];
  return /* @__PURE__ */ e("section", { className: "py-24 px-6 border-b border-neutral-900 bg-black/10 relative", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ t("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ e("div", { className: "inline-block bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 text-neutral-200 font-semibold mb-6", children: r.badge ?? z.badge }),
      /* @__PURE__ */ t("h2", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight tracking-tight text-white", children: [
        r.titleLine1 ?? z.titleLine1,
        /* @__PURE__ */ e("br", {}),
        /* @__PURE__ */ e("span", { className: "text-neutral-400", children: r.titleLine2 ?? z.titleLine2 })
      ] }),
      /* @__PURE__ */ e("p", { className: "text-xl md:text-2xl leading-relaxed max-w-5xl mx-auto text-neutral-300 font-light", children: r.description ?? z.description })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16", children: n.map((a, i) => {
      const s = a.icon, o = l(a.color), c = i === n.length - 1;
      return /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ t("div", { className: `bg-black/40 backdrop-blur-sm border-2 ${o.border} rounded-2xl p-6 hover:bg-black/60 transition-all group ${o.hoverBorder}`, children: [
          /* @__PURE__ */ e("div", { className: `${o.iconBg} w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto`, children: /* @__PURE__ */ e("span", { className: "text-2xl font-bold text-white", children: a.number }) }),
          /* @__PURE__ */ e(s, { className: `w-10 h-10 mx-auto mb-3 ${o.iconText}` }),
          /* @__PURE__ */ e("h3", { className: "text-center font-medium mb-2 text-white", children: a.title }),
          /* @__PURE__ */ e("p", { className: "text-sm text-center text-neutral-300", children: a.description })
        ] }),
        !c && /* @__PURE__ */ e("div", { className: "hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20", children: /* @__PURE__ */ e(S, { className: `w-6 h-6 ${o.arrow}` }) })
      ] }, i);
    }) })
  ] }) });
}, sr = ({ icon: r, number: n, title: l, description: a, features: i, isLast: s }) => /* @__PURE__ */ t(J, { children: [
  /* @__PURE__ */ e("div", { className: "group relative", children: /* @__PURE__ */ t("div", { className: "relative bg-neutral-900/40 border border-neutral-700/50 rounded-2xl p-8 hover:bg-neutral-800/60 hover:border-brand-500/30 hover:shadow-2xl transition-all duration-500 h-full backdrop-blur-md", children: [
    /* @__PURE__ */ e("div", { className: "absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-800 text-white font-display font-bold text-xl rounded-full flex items-center justify-center shadow-lg z-10 border border-brand-500/30", children: n }),
    /* @__PURE__ */ e("div", { className: "mb-6 mt-4", children: /* @__PURE__ */ e("div", { className: "inline-flex p-4 bg-white/5 rounded-2xl text-neutral-400 group-hover:bg-brand-500 group-hover:text-white transition-all duration-500 group-hover:scale-110 transform border border-white/10 group-hover:border-brand-400", children: /* @__PURE__ */ e(r, { className: "w-10 h-10", strokeWidth: 1.5 }) }) }),
    /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white mb-3 group-hover:text-brand-400 transition-colors", children: l }),
    /* @__PURE__ */ e("p", { className: "text-neutral-400 mb-6 leading-relaxed", children: a }),
    /* @__PURE__ */ e("div", { className: "space-y-2", children: i.map((o, c) => /* @__PURE__ */ t("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ e("div", { className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-brand-500 transition-colors flex-shrink-0" }),
      /* @__PURE__ */ e("p", { className: "text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors", children: o })
    ] }, c)) }),
    /* @__PURE__ */ e("div", { className: "absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full pointer-events-none" })
  ] }) }),
  !s && /* @__PURE__ */ e("div", { className: "hidden lg:flex items-center justify-center", children: /* @__PURE__ */ t("div", { className: "relative", children: [
    /* @__PURE__ */ e(S, { className: "w-8 h-8 text-neutral-600", strokeWidth: 2 }),
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-brand-500 blur-2xl opacity-0 group-hover:opacity-20 animate-pulse transition-opacity" })
  ] }) })
] }), N = {
  badge: "Our Process",
  titleLine1: "From Atomic Scale to",
  titleLine2: "Industrial Reality",
  description: "We don't just innovate in the lab—we ensure every breakthrough scales from prototype to mass manufacturing, bridging the critical gap between nanoscale research and real-world impact.",
  processes: [
    {
      number: 1,
      title: "Research & Innovation",
      description: "World-class nanomaterials R&D with advanced characterization and testing capabilities",
      features: [
        "Graphene synthesis & functionalization",
        "Surface chemistry modification",
        "Advanced testing (SEM, TEM, Raman)",
        "Pilot-scale dispersion technology"
      ]
    },
    {
      number: 2,
      title: "Application Development",
      description: "Real-world testing across multiple industrial sectors with rigorous validation protocols",
      features: [
        "Multi-sector application testing",
        "Mechanical & durability analysis",
        "Thermal & electrical characterization",
        "Field-scale performance validation"
      ]
    }
  ],
  stats: [
    { value: "2", label: "State-of-the-Art Facilities" },
    { value: "14+", label: "Years R&D Experience" },
    { value: "Ton", label: "Scale Production" },
    { value: "100%", label: "Quality Validated" }
  ]
}, qr = ({ copy: r = N }) => {
  const n = [
    {
      icon: me,
      number: r.processes?.[0]?.number ?? N.processes[0].number,
      title: r.processes?.[0]?.title ?? N.processes[0].title,
      description: r.processes?.[0]?.description ?? N.processes[0].description,
      features: r.processes?.[0]?.features ?? N.processes[0].features
    },
    {
      icon: Ve,
      number: r.processes?.[1]?.number ?? N.processes[1].number,
      title: r.processes?.[1]?.title ?? N.processes[1].title,
      description: r.processes?.[1]?.description ?? N.processes[1].description,
      features: r.processes?.[1]?.features ?? N.processes[1].features
    }
  ];
  return /* @__PURE__ */ e("section", { className: "py-16 md:py-24 lg:py-32 px-6 border-t border-neutral-900 bg-black/10 relative", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto relative z-10", children: [
    /* @__PURE__ */ t("div", { className: "text-center mb-20", children: [
      /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6 backdrop-blur-sm", children: [
        /* @__PURE__ */ e(Pe, { className: "w-4 h-4 text-brand-400" }),
        /* @__PURE__ */ e("span", { className: "text-xs font-bold text-neutral-300 tracking-wide uppercase", children: r.badge ?? N.badge })
      ] }),
      /* @__PURE__ */ t("h2", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight drop-shadow-xl", children: [
        r.titleLine1 ?? N.titleLine1,
        /* @__PURE__ */ e("br", {}),
        /* @__PURE__ */ e("span", { className: "text-brand-100 pb-2 inline-block drop-shadow-md", children: r.titleLine2 ?? N.titleLine2 })
      ] }),
      /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed", children: r.description ?? N.description })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center mb-16 max-w-5xl mx-auto", children: n.map((l, a) => /* @__PURE__ */ e(
      sr,
      {
        ...l,
        isLast: a === n.length - 1
      },
      a
    )) }),
    /* @__PURE__ */ t("div", { className: "bg-neutral-900/60 border border-neutral-800 text-white rounded-3xl p-12 backdrop-blur-md relative overflow-hidden", children: [
      /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-r from-brand-500/5 to-transparent opacity-50" }),
      /* @__PURE__ */ t("div", { className: "relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center", children: [
        /* @__PURE__ */ t("div", { className: "group", children: [
          /* @__PURE__ */ e("div", { className: "text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300", children: r.stats?.[0]?.value ?? N.stats[0].value }),
          /* @__PURE__ */ e("div", { className: "text-sm text-neutral-500 uppercase tracking-wide group-hover:text-brand-400 transition-colors", children: r.stats?.[0]?.label ?? N.stats[0].label })
        ] }),
        /* @__PURE__ */ t("div", { className: "group", children: [
          /* @__PURE__ */ e("div", { className: "text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300", children: r.stats?.[1]?.value ?? N.stats[1].value }),
          /* @__PURE__ */ e("div", { className: "text-sm text-neutral-500 uppercase tracking-wide group-hover:text-brand-400 transition-colors", children: r.stats?.[1]?.label ?? N.stats[1].label })
        ] }),
        /* @__PURE__ */ t("div", { className: "group", children: [
          /* @__PURE__ */ e("div", { className: "text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300", children: r.stats?.[2]?.value ?? N.stats[2].value }),
          /* @__PURE__ */ e("div", { className: "text-sm text-neutral-500 uppercase tracking-wide group-hover:text-brand-400 transition-colors", children: r.stats?.[2]?.label ?? N.stats[2].label })
        ] }),
        /* @__PURE__ */ t("div", { className: "group", children: [
          /* @__PURE__ */ e("div", { className: "text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300", children: r.stats?.[3]?.value ?? N.stats[3].value }),
          /* @__PURE__ */ e("div", { className: "text-sm text-neutral-500 uppercase tracking-wide group-hover:text-brand-400 transition-colors", children: r.stats?.[3]?.label ?? N.stats[3].label })
        ] })
      ] })
    ] })
  ] }) });
}, _r = () => /* @__PURE__ */ e("section", { id: "about", className: "py-24 px-6 bg-white border-b border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ e(
    y,
    {
      number: "03",
      title: "Leadership",
      subtitle: "Deep science meets industrial scale.",
      theme: "light"
    }
  ),
  /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
    /* @__PURE__ */ t("div", { className: "group p-10 border border-neutral-200 bg-neutral-50 hover:bg-white hover:shadow-xl transition-all duration-300", children: [
      /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-8", children: [
        /* @__PURE__ */ e("div", { className: "p-3 bg-white border border-neutral-200 shadow-sm rounded-full", children: /* @__PURE__ */ e(bt, { className: "w-6 h-6 text-neutral-900" }) }),
        /* @__PURE__ */ t("div", { className: "text-right", children: [
          /* @__PURE__ */ e("h3", { className: "text-2xl text-neutral-900 font-medium", children: "Sushanth Paatnaik" }),
          /* @__PURE__ */ e("p", { className: "text-xs text-neutral-500 uppercase tracking-widest font-bold mt-1", children: "Co-Founder & CEO" })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "h-px bg-neutral-200 w-full mb-8 group-hover:bg-neutral-900 transition-colors" }),
      /* @__PURE__ */ e("p", { className: "text-neutral-600 leading-relaxed mb-8", children: "Materials innovator and entrepreneur. 6-time President of India Awardee. Global recognitions include MIT TR35, TED India Speaker, NASA-recognized innovator. Focused on building next-generation technologies rooted in graphene, nanomaterials, and advanced chemical engineering." }),
      /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: ["MIT TR35", "TED Speaker", "NASA Awardee", "6× President of India"].map((r) => /* @__PURE__ */ e("span", { className: "text-xs font-medium border border-neutral-200 bg-white px-3 py-1 text-neutral-600 rounded-full", children: r }, r)) })
    ] }),
    /* @__PURE__ */ t("div", { className: "group p-10 border border-neutral-200 bg-neutral-50 hover:bg-white hover:shadow-xl transition-all duration-300", children: [
      /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-8", children: [
        /* @__PURE__ */ e("div", { className: "p-3 bg-white border border-neutral-200 shadow-sm rounded-full", children: /* @__PURE__ */ e(qe, { className: "w-6 h-6 text-neutral-900" }) }),
        /* @__PURE__ */ t("div", { className: "text-right", children: [
          /* @__PURE__ */ e("h3", { className: "text-2xl text-neutral-900 font-medium", children: "Aayush Bansal" }),
          /* @__PURE__ */ e("p", { className: "text-xs text-neutral-500 uppercase tracking-widest font-bold mt-1", children: "Co-Founder & Strategic Investor" })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "h-px bg-neutral-200 w-full mb-8 group-hover:bg-neutral-900 transition-colors" }),
      /* @__PURE__ */ e("p", { className: "text-neutral-600 leading-relaxed mb-8", children: "Promoter of Kalika Steel, one of India's leading steel manufacturing groups. Computer Science Engineer with MBA in Technology Management. Expertise in large-scale industrial operations and market expansion, enabling bridge between breakthrough innovations and real-world manufacturing." }),
      /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: ["Industrial Scaling", "Strategic Investor", "Market Expansion"].map((r) => /* @__PURE__ */ e("span", { className: "text-xs font-medium border border-neutral-200 bg-white px-3 py-1 text-neutral-600 rounded-full", children: r }, r)) })
    ] })
  ] })
] }) }), xe = ({ icon: r, title: n, color: l, delay: a }) => /* @__PURE__ */ t(
  "div",
  {
    className: `group relative overflow-hidden bg-gradient-to-br ${l} rounded-2xl p-8 hover:scale-105 transition-all duration-500 cursor-pointer`,
    style: { animationDelay: `${a}ms` },
    children: [
      /* @__PURE__ */ t("div", { className: "relative z-10", children: [
        /* @__PURE__ */ e("div", { className: "mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500", children: /* @__PURE__ */ e(r, { className: "w-12 h-12 text-white", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white mb-2", children: n }),
        /* @__PURE__ */ e("div", { className: "h-1 w-16 bg-white/40 rounded-full group-hover:w-full transition-all duration-500" })
      ] }),
      /* @__PURE__ */ e("div", { className: "absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" }),
      /* @__PURE__ */ e("div", { className: "absolute -top-8 -left-8 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" })
    ]
  }
), Ur = () => /* @__PURE__ */ t("section", { className: "relative py-16 md:py-24 lg:py-32 px-6 bg-gradient-to-br from-black via-neutral-900 to-black overflow-hidden", children: [
  /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" }),
  /* @__PURE__ */ e("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-neutral-500/20 rounded-full blur-3xl animate-pulse-slow" }),
  /* @__PURE__ */ e("div", { className: "absolute bottom-0 right-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl animate-pulse-slow", style: { animationDelay: "1s" } }),
  /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto relative z-10", children: [
    /* @__PURE__ */ t("div", { className: "text-center mb-20", children: [
      /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-neutral-700 bg-neutral-900/50 backdrop-blur mb-6", children: [
        /* @__PURE__ */ e("span", { className: "w-2 h-2 rounded-full bg-white animate-pulse" }),
        /* @__PURE__ */ e("span", { className: "text-xs font-bold text-neutral-300 tracking-wide uppercase", children: "Our Mission" })
      ] }),
      /* @__PURE__ */ t("h2", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-6 leading-tight", children: [
        "Advanced Nanomaterials for",
        /* @__PURE__ */ e("br", {}),
        /* @__PURE__ */ e("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-white", children: "Better Quality of Life" })
      ] }),
      /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed", children: "We create commercially viable graphene solutions that address humanity's most pressing challenges across four critical pillars of sustainable development." })
    ] }),
    /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ e(
        xe,
        {
          icon: he,
          title: "Clean Air",
          color: "from-blue-600 to-blue-700",
          delay: 0
        }
      ),
      /* @__PURE__ */ e(
        xe,
        {
          icon: Fe,
          title: "Clean Water",
          color: "from-cyan-600 to-cyan-700",
          delay: 100
        }
      ),
      /* @__PURE__ */ e(
        xe,
        {
          icon: Z,
          title: "Clean Energy",
          color: "from-yellow-500 to-orange-600",
          delay: 200
        }
      ),
      /* @__PURE__ */ e(
        xe,
        {
          icon: Ge,
          title: "Better Life",
          color: "from-rose-600 to-pink-700",
          delay: 300
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "mt-20 text-center", children: /* @__PURE__ */ t("p", { className: "text-neutral-500 text-sm font-medium tracking-wide", children: [
      "World's only ",
      /* @__PURE__ */ e("span", { className: "text-white font-bold", children: "Trillion Dollar Nanomaterial" }),
      " — Now Accessible"
    ] }) })
  ] })
] }), $e = ({ icon: r, title: n, subtitle: l, features: a, cta: i, color: s, delay: o, link: c }) => /* @__PURE__ */ t(
  "div",
  {
    className: `group relative bg-white border-2 border-neutral-200 rounded-3xl p-8 hover:border-${s}-300 hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col h-full`,
    style: { animationDelay: `${o}ms` },
    children: [
      /* @__PURE__ */ e("div", { className: `absolute -top-20 -right-20 w-48 h-48 bg-${s}-500/10 rounded-full blur-[80px] group-hover:opacity-100 opacity-0 transition-opacity duration-700 pointer-events-none` }),
      /* @__PURE__ */ e("div", { className: "mb-8 relative z-10", children: /* @__PURE__ */ e("div", { className: `inline-flex p-4 rounded-2xl bg-${s}-50 border border-${s}-100 text-${s}-600 group-hover:bg-${s}-100 group-hover:border-${s}-300 transition-all duration-500`, children: /* @__PURE__ */ e(r, { className: "w-8 h-8", strokeWidth: 1.5 }) }) }),
      /* @__PURE__ */ e("h3", { className: `text-2xl font-display font-medium text-neutral-900 mb-3 group-hover:text-${s}-600 transition-colors`, children: n }),
      /* @__PURE__ */ e("p", { className: "text-neutral-600 mb-8 leading-relaxed h-12", children: l }),
      /* @__PURE__ */ e("ul", { className: "space-y-4 mb-10 flex-grow relative z-10", children: a.map((m, d) => /* @__PURE__ */ t("li", { className: "flex items-start gap-3 text-sm text-neutral-700", children: [
        /* @__PURE__ */ e("div", { className: `mt-0.5 w-5 h-5 rounded-full bg-${s}-50 flex items-center justify-center flex-shrink-0 border border-${s}-200 text-${s}-600`, children: /* @__PURE__ */ e(de, { className: "w-3 h-3" }) }),
        /* @__PURE__ */ e("span", { children: m })
      ] }, d)) }),
      /* @__PURE__ */ e(v, { to: c, children: /* @__PURE__ */ t("button", { className: `w-full flex items-center justify-center gap-2 px-6 py-4 bg-neutral-900 border border-neutral-900 text-white rounded-xl hover:bg-${s}-600 hover:border-${s}-600 hover:shadow-lg transition-all duration-300 group-hover:translate-y-[-2px]`, children: [
        /* @__PURE__ */ e("span", { className: "font-semibold tracking-wide", children: i }),
        /* @__PURE__ */ e(S, { className: "w-4 h-4" })
      ] }) })
    ]
  }
), Yr = () => /* @__PURE__ */ e("section", { className: "py-16 md:py-24 lg:py-32 px-6 bg-gradient-to-b from-white via-neutral-50 to-white border-b border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-20", children: [
    /* @__PURE__ */ e(
      $e,
      {
        icon: He,
        title: "Direct Supply",
        subtitle: "Purchase market-ready graphene formulations for immediate deployment.",
        features: [
          "Ton-Scale Availability",
          "24h Dispatch for Stock",
          "Volume-Tiered Pricing",
          "Quality Certification (CoA)",
          "Technical Integration Support"
        ],
        cta: "Request Quote",
        color: "cyan",
        delay: 0,
        link: "/contact"
      }
    ),
    /* @__PURE__ */ e(
      $e,
      {
        icon: _e,
        title: "Strategic Alliance",
        subtitle: "Co-create value with territory exclusivity and joint ventures.",
        features: [
          "Territorial Exclusivity",
          "Co-Branding Options",
          "Joint Go-to-Market",
          "Priority Manufacturing",
          "Revenue Sharing Models"
        ],
        cta: "Partner With Us",
        color: "amber",
        delay: 100,
        link: "/contact"
      }
    ),
    /* @__PURE__ */ e(
      $e,
      {
        icon: zt,
        title: "Custom R&D",
        subtitle: "Leverage our lab to engineer a proprietary material solution.",
        features: [
          "Dedicated Scientist Team",
          "IP Co-Ownership",
          "Application Specific Dev",
          "Pilot Line Priority",
          "Lab-to-Fab Roadmap"
        ],
        cta: "Start R&D Project",
        color: "purple",
        delay: 200,
        link: "/contact"
      }
    )
  ] }),
  /* @__PURE__ */ t("div", { className: "relative rounded-3xl p-12 overflow-hidden text-center border-2 border-neutral-200 bg-neutral-50", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-neutral-100 to-transparent opacity-50" }),
    /* @__PURE__ */ t("div", { className: "relative z-10", children: [
      /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium text-neutral-900 mb-6", children: "Enterprise or Government Inquiry?" }),
      /* @__PURE__ */ e("p", { className: "text-neutral-600 mb-8 max-w-xl mx-auto", children: "We offer specialized procurement channels for large-scale infrastructure projects and government tenders." }),
      /* @__PURE__ */ e(v, { to: "/contact", children: /* @__PURE__ */ t("button", { className: "inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white font-bold rounded-xl hover:bg-neutral-800 transition-all duration-300 shadow-lg hover:shadow-xl", children: [
        "Contact Executive Team",
        /* @__PURE__ */ e(S, { className: "w-5 h-5" })
      ] }) })
    ] })
  ] })
] }) }), or = ({ name: r, category: n, metric: l, value: a, percentage: i, color: s, icon: o }) => {
  const c = 2 * Math.PI * 45, m = c - c * i / 100;
  return /* @__PURE__ */ e("div", { className: "group bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-neutral-400 hover:shadow-2xl transition-all duration-500", children: /* @__PURE__ */ t("div", { className: "text-center", children: [
    /* @__PURE__ */ t("div", { className: "relative w-32 h-32 mx-auto mb-6", children: [
      /* @__PURE__ */ t("svg", { className: "w-full h-full transform -rotate-90", children: [
        /* @__PURE__ */ e(
          "circle",
          {
            cx: "64",
            cy: "64",
            r: "45",
            className: "fill-none stroke-neutral-100",
            strokeWidth: "8"
          }
        ),
        /* @__PURE__ */ e(
          "circle",
          {
            cx: "64",
            cy: "64",
            r: "45",
            className: `fill-none stroke-${s}-500 transition-all duration-1000`,
            strokeWidth: "8",
            strokeLinecap: "round",
            strokeDasharray: c,
            strokeDashoffset: m,
            style: { transition: "stroke-dashoffset 1s ease-in-out" }
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ t("div", { className: "text-center", children: [
        /* @__PURE__ */ e("div", { className: "text-3xl font-display font-bold text-neutral-900", children: a }),
        /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wide", children: l })
      ] }) })
    ] }),
    /* @__PURE__ */ t("div", { className: "mb-4", children: [
      /* @__PURE__ */ e("span", { className: "text-2xl mb-2 block", children: o }),
      /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-neutral-900 mb-1 group-hover:text-brand-600 transition-colors", children: r }),
      /* @__PURE__ */ e("p", { className: "text-xs text-neutral-500 uppercase tracking-wide font-semibold", children: n })
    ] }),
    /* @__PURE__ */ e("div", { className: "h-2 bg-neutral-100 rounded-full overflow-hidden", children: /* @__PURE__ */ e(
      "div",
      {
        className: `h-full bg-gradient-to-r from-${s}-500 to-${s}-600 transition-all duration-1000 ease-out`,
        style: { width: `${i}%` }
      }
    ) })
  ] }) });
}, Qr = () => /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-white border-b border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ e(
    y,
    {
      number: "03",
      title: "Product Performance Gauges",
      subtitle: "Market-ready solutions with validated, measurable performance improvements.",
      theme: "light"
    }
  ),
  /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16", children: [
    {
      name: "Graphacrete",
      category: "Construction",
      metric: "Strength",
      value: "+50%",
      percentage: 90,
      color: "blue",
      icon: "🏗️"
    },
    {
      name: "Graffisol",
      category: "Solar Energy",
      metric: "Output",
      value: "+10%",
      percentage: 85,
      color: "amber",
      icon: "☀️"
    },
    {
      name: "Ceraphene",
      category: "Automotive",
      metric: "Hardness",
      value: "9H+",
      percentage: 95,
      color: "purple",
      icon: "💎"
    },
    {
      name: "HD-G-PE",
      category: "Polymers",
      metric: "Elongation",
      value: "20×",
      percentage: 100,
      color: "green",
      icon: "📦"
    }
  ].map((n, l) => /* @__PURE__ */ e(or, { ...n }, l)) }),
  /* @__PURE__ */ t("div", { className: "mt-16 text-center", children: [
    /* @__PURE__ */ t("p", { className: "text-neutral-600 mb-6", children: [
      "All products are ",
      /* @__PURE__ */ e("span", { className: "font-bold text-brand-600", children: "NABL certified" }),
      " and ",
      /* @__PURE__ */ e("span", { className: "font-bold text-brand-600", children: "field-validated" })
    ] }),
    /* @__PURE__ */ t("button", { className: "inline-flex items-center gap-3 px-8 py-4 bg-neutral-700 text-white font-semibold rounded-xl hover:bg-neutral-800 hover:shadow-lg transition-all duration-300", children: [
      "View Detailed Specifications",
      /* @__PURE__ */ e("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
    ] })
  ] })
] }) }), dr = ({ src: r, images: n, alt: l, className: a = "", imageFit: i = "object-cover", innerClassName: s = "bg-neutral-100" }) => {
  const [o, c] = L(!1), [m, d] = L(0), u = n || (r ? [r] : []), p = u.length > 1, g = u[m] || r;
  ce(() => {
    if (!p || o) return;
    const h = setInterval(() => {
      d((b) => (b + 1) % u.length);
    }, 4e3);
    return () => clearInterval(h);
  }, [p, u.length, o]);
  const w = (h) => {
    h?.stopPropagation(), d((b) => (b + 1) % u.length);
  }, j = (h) => {
    h?.stopPropagation(), d((b) => (b - 1 + u.length) % u.length);
  };
  return /* @__PURE__ */ t(J, { children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: `relative rounded-2xl overflow-hidden border border-neutral-200 shadow-sm group cursor-pointer ${a}`,
        onClick: () => c(!0),
        children: [
          /* @__PURE__ */ e("div", { className: `w-full h-full flex items-center justify-center ${s}`, children: /* @__PURE__ */ e(
            "img",
            {
              src: g,
              alt: l,
              className: `w-full h-full ${i} transition-transform duration-700 group-hover:scale-105`
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition-colors duration-300" }),
          p && /* @__PURE__ */ t(J, { children: [
            /* @__PURE__ */ e(
              "button",
              {
                onClick: j,
                className: "absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm text-neutral-800 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white z-10",
                "aria-label": "Previous Image",
                children: /* @__PURE__ */ e(Se, { size: 20 })
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: w,
                className: "absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm text-neutral-800 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white z-10",
                "aria-label": "Next Image",
                children: /* @__PURE__ */ e(X, { size: 20 })
              }
            ),
            /* @__PURE__ */ e("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10", children: u.map((h, b) => /* @__PURE__ */ e(
              "button",
              {
                onClick: (D) => {
                  D.stopPropagation(), d(b);
                },
                className: `w-2 h-2 rounded-full transition-all duration-300 ${b === m ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"}`,
                "aria-label": `Go to image ${b + 1}`
              },
              b
            )) })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              className: "absolute bottom-4 right-4 p-2 bg-white/90 backdrop-blur-sm text-neutral-800 rounded-full shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white z-10",
              "aria-label": "View Full Image",
              children: /* @__PURE__ */ e(gt, { size: 20 })
            }
          )
        ]
      }
    ),
    o && /* @__PURE__ */ t(
      "div",
      {
        className: "fixed inset-0 z-[100] bg-neutral-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-200",
        onClick: () => c(!1),
        children: [
          /* @__PURE__ */ e(
            "button",
            {
              className: "absolute top-6 right-6 p-2 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors z-50 cursor-pointer",
              onClick: (h) => {
                h.stopPropagation(), c(!1);
              },
              children: /* @__PURE__ */ e(ne, { size: 24 })
            }
          ),
          p && /* @__PURE__ */ t(J, { children: [
            /* @__PURE__ */ e(
              "button",
              {
                onClick: j,
                className: "absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors z-50",
                "aria-label": "Previous Image",
                children: /* @__PURE__ */ e(Se, { size: 28 })
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: w,
                className: "absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors z-50",
                "aria-label": "Next Image",
                children: /* @__PURE__ */ e(X, { size: 28 })
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "relative max-w-6xl w-full h-full flex flex-col items-center justify-center pointer-events-none", children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: "relative w-full max-w-5xl h-full flex items-center justify-center pointer-events-auto",
                onClick: (h) => h.stopPropagation(),
                children: /* @__PURE__ */ e(
                  "img",
                  {
                    src: g,
                    alt: l,
                    className: "max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                  }
                )
              }
            ),
            /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-4 mt-6", children: [
              /* @__PURE__ */ e("h3", { className: "text-white font-display text-2xl font-medium tracking-wide", children: l }),
              p && /* @__PURE__ */ e("div", { className: "flex gap-2", children: u.map((h, b) => /* @__PURE__ */ e(
                "button",
                {
                  onClick: (D) => {
                    D.stopPropagation(), d(b);
                  },
                  className: `w-2.5 h-2.5 rounded-full transition-all duration-300 ${b === m ? "bg-white w-8" : "bg-white/40 hover:bg-white/70"}`,
                  "aria-label": `Go to image ${b + 1}`
                },
                b
              )) })
            ] })
          ] })
        ]
      }
    )
  ] });
}, fe = {
  // Commercial Products
  ceraphene: {
    image: "/images/ceraphene-studio.png"
  },
  graphacrete: {
    image: "/images/graphacrete-studio.png"
  },
  graffisol: {
    image: "/images/graffisol-studio.png"
  },
  hdgpe: {
    image: "/images/hdgpe-studio.png"
  }
}, O = [
  {
    id: "graphacrete",
    title: "Graphacrete",
    category: "Construction",
    icon: Ue,
    description: "High-Performance Concrete Additive",
    features: ["40-50% Strength Gain", "15-20% Cement Savings", "30-45% Water Resistance"],
    detail: "Transform standard concrete into high-performance material with 50% strength increase, 15-20% cement reduction, and excellent crack resistance. NABL certified: M30 + Graphacrete ≈ M50.",
    stats: [{ label: "Strength", value: "+50%" }, { label: "Cement Savings", value: "15-20%" }],
    image: fe.graphacrete.image
  },
  {
    id: "graffisol",
    title: "Graffisol",
    category: "Solar Energy",
    icon: Ie,
    description: "Next-Generation Solar Panel Coating",
    features: ["8-12% Energy Output Increase", "Thermal Dissipation", "Hydrophobic & Anti-Soiling"],
    detail: "8-12% increase in solar panel energy output (field & lab validated). Reduced surface reflection for improved light harvesting and long-lasting durability.",
    stats: [{ label: "Energy Output", value: "+8-12%" }, { label: "ROI Period", value: "18mo" }],
    image: fe.graffisol.image
  },
  {
    id: "ceraphene",
    title: "Ceraphene",
    category: "Automotive",
    icon: V,
    description: "Ultra-Durable Ceramic Coating",
    features: ["9H+ Scratch Resistance", "3-4+ Years Lifecycle", "Ultra-Hydrophobic"],
    detail: "Graphene-enhanced ceramic coating with 9H+ hardness providing industry-leading protection at 60-70% lower cost than premium alternatives.",
    stats: [{ label: "Hardness", value: "9H+" }, { label: "Life", value: "3-4yr+" }],
    image: fe.ceraphene.image
  },
  {
    id: "hdgpe",
    title: "HD-G-PE",
    category: "Industrial Polymers",
    icon: Ve,
    description: "Graphene-Reinforced Polymer Enhancer",
    features: ["+30% Tensile Strength", "Enhanced Thermal Stability", "Improved Barrier Properties"],
    detail: "Transform HDPE materials with 30% strength improvement, enhanced thermal stability, and improved barrier properties for pipes, films, and packaging.",
    stats: [{ label: "Strength", value: "+30%" }, { label: "Thermal", value: "Enhanced" }],
    image: fe.hdgpe.image
  }
], lt = [
  { id: "rustene", title: "Rustene", category: "Anti-Corrosion", status: "R&D Pipeline", path: "/products/pipeline/rustene", image: "/images/pipeline/studio/Rustene.png" },
  { id: "graphyre", title: "Graphyre", category: "Performance Tyres", status: "R&D Pipeline", path: "/products/pipeline/graphyre", image: "/images/pipeline/studio/Graphyre.png" },
  { id: "graphosite", title: "Graphosite", category: "Structural Composites", status: "R&D Pipeline", path: "/products/pipeline/graphosite", image: "/images/pipeline/studio/Graphosite.png" },
  { id: "thermaphene", title: "Thermaphene", category: "Smart Thermal", status: "R&D Pipeline", path: "/products/pipeline/thermaphene", image: "/images/pipeline/studio/thermophene.png" },
  { id: "armophene", title: "Armophene", category: "Ballistics", status: "R&D Pipeline", path: "/products/pipeline/armophene", image: "/images/pipeline/studio/Armophene.png" },
  { id: "graphenode", title: "Graphenode", category: "Energy Storage", status: "R&D Pipeline", path: "/products/pipeline/graphenode", image: "/images/pipeline/studio/Graphosite.png" },
  { id: "hydrogen-membranes", title: "Gryogen", category: "Hydrogen Separation", status: "Pilot Trial", path: "/products/pipeline/hydrogen-membranes", image: "/images/pipeline/studio/Gryogen.png" },
  { id: "desalination-membranes", title: "Mariphene", category: "Desalination", status: "Pilot Trial", path: "/products/pipeline/desalination-membranes", image: "/images/pipeline/studio/mariphene.png" },
  { id: "atmospheric-harvesting", title: "Aerophenter", category: "Atmospheric Water", status: "Pilot Trial", path: "/products/pipeline/atmospheric-harvesting", image: "/images/pipeline/studio/Gryogen.png" },
  { id: "graphene-glass-fibres", title: "Glasphene", category: "Glass Fibres", status: "Pilot Trial", path: "/products/pipeline/graphene-glass-fibres", image: "/images/pipeline/studio/Glasephene.png" },
  { id: "battery-storage", title: "Voltaphene", category: "Battery Storage", status: "Pilot Trial", path: "/products/pipeline/battery-storage", image: "/images/pipeline/studio/Voltaphene.png" }
], it = ({ product: r }) => /* @__PURE__ */ e(v, { to: r.path, className: "group block", children: /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-400 hover:shadow-md transition-all duration-200", children: [
  /* @__PURE__ */ e("div", { className: "h-32 bg-neutral-50 flex items-center justify-center p-4 overflow-hidden", children: /* @__PURE__ */ e(
    "img",
    {
      src: r.image,
      alt: r.title,
      className: "h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
    }
  ) }),
  /* @__PURE__ */ t("div", { className: "p-4", children: [
    /* @__PURE__ */ e("div", { className: `inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-2 ${r.status === "Pilot Trial" ? "bg-purple-50 text-purple-600" : "bg-blue-50 text-blue-600"}`, children: r.status }),
    /* @__PURE__ */ e("h4", { className: "text-sm font-bold text-neutral-900 mb-0.5 group-hover:text-blue-600 transition-colors", children: r.title }),
    /* @__PURE__ */ e("p", { className: "text-xs text-neutral-400 font-mono", children: r.category })
  ] })
] }) }), ve = {
  sectionHeading: {
    number: "02",
    title: "Product Suite",
    subtitle: "Commercially viable graphene solutions — from market-ready products to the next generation in development."
  }
}, Kr = ({ copy: r = ve }) => {
  const [n, l] = L(0), [a, i] = L("commercial");
  return /* @__PURE__ */ t("section", { className: "py-24 px-6 bg-white border-b border-neutral-200 relative overflow-hidden", children: [
    /* @__PURE__ */ e("div", { className: "absolute top-20 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" }),
    /* @__PURE__ */ e("div", { className: "absolute bottom-20 left-0 w-96 h-96 bg-neutral-100 rounded-full blur-3xl opacity-50 pointer-events-none" }),
    /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto relative z-10", children: [
      /* @__PURE__ */ e(
        y,
        {
          number: r.sectionHeading?.number ?? ve.sectionHeading.number,
          title: r.sectionHeading?.title ?? ve.sectionHeading.title,
          subtitle: r.sectionHeading?.subtitle ?? ve.sectionHeading.subtitle,
          theme: "light"
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-1 mt-10 mb-8 bg-neutral-100 rounded-xl p-1 w-fit", children: [
        /* @__PURE__ */ t(
          "button",
          {
            onClick: () => i("commercial"),
            className: `flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${a === "commercial" ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-500 hover:text-neutral-700"}`,
            children: [
              /* @__PURE__ */ e("span", { className: "w-2 h-2 rounded-full bg-green-500" }),
              "Commercial Ready",
              /* @__PURE__ */ e("span", { className: "text-xs font-mono text-neutral-400", children: "4" })
            ]
          }
        ),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: () => i("pipeline"),
            className: `flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${a === "pipeline" ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-500 hover:text-neutral-700"}`,
            children: [
              /* @__PURE__ */ e(B, { className: "w-3.5 h-3.5" }),
              "In Development",
              /* @__PURE__ */ e("span", { className: "text-xs font-mono text-neutral-400", children: "11" })
            ]
          }
        )
      ] }),
      a === "commercial" && /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6 min-h-[500px]", children: [
        /* @__PURE__ */ e("div", { className: "md:col-span-1 lg:col-span-4 flex flex-col gap-3", children: O.map((s, o) => {
          const c = n === o;
          return /* @__PURE__ */ e(
            "div",
            {
              onClick: () => l(o),
              className: `group relative p-6 cursor-pointer transition-all duration-300 border ${c ? "bg-white border-neutral-200 shadow-xl border-l-4 border-l-blue-600 translate-x-2" : "bg-white border-neutral-100 hover:bg-neutral-50 hover:border-neutral-200"}`,
              children: /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ t("div", { className: "flex items-center space-x-4", children: [
                  /* @__PURE__ */ e("div", { className: `p-2 rounded-sm ${c ? "bg-blue-50 text-blue-600" : "bg-neutral-100 text-neutral-400 group-hover:text-neutral-600"}`, children: K.createElement(s.icon, { size: 20 }) }),
                  /* @__PURE__ */ t("div", { children: [
                    /* @__PURE__ */ e("h3", { className: `font-display font-medium text-lg leading-none mb-1 ${c ? "text-neutral-900" : "text-neutral-500 group-hover:text-neutral-800"}`, children: s.title }),
                    /* @__PURE__ */ e("span", { className: "text-xs uppercase tracking-wider text-neutral-400 font-mono", children: s.category })
                  ] })
                ] }),
                /* @__PURE__ */ e(S, { className: `w-4 h-4 transition-all ${c ? "text-blue-600 opacity-100" : "text-neutral-400 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-50"}` })
              ] })
            },
            s.id
          );
        }) }),
        /* @__PURE__ */ e("div", { className: "md:col-span-2 lg:col-span-8 relative", children: /* @__PURE__ */ t("div", { className: "h-full bg-white border border-neutral-200 shadow-2xl p-8 md:p-12 flex flex-col relative overflow-hidden", children: [
          /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 p-4 opacity-5 pointer-events-none", children: /* @__PURE__ */ e(xt, { className: "w-24 h-24 text-neutral-900", strokeWidth: 0.5 }) }),
          /* @__PURE__ */ t("div", { className: "relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 h-full", children: [
            /* @__PURE__ */ t("div", { className: "flex flex-col justify-between", children: [
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-3 py-1 bg-green-50 border border-green-100 rounded-full text-xs font-mono text-green-700 mb-6", children: [
                  /* @__PURE__ */ e(Be, { size: 12 }),
                  /* @__PURE__ */ e("span", { children: "COMMERCIAL READY" })
                ] }),
                /* @__PURE__ */ e("h2", { className: "text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6 tracking-tight", children: O[n].title }),
                /* @__PURE__ */ e("p", { className: "text-lg text-neutral-600 leading-relaxed mb-8", children: O[n].detail }),
                /* @__PURE__ */ e("div", { className: "space-y-3 mb-8", children: O[n].features.map((s, o) => /* @__PURE__ */ t("div", { className: "flex items-center space-x-3", children: [
                  /* @__PURE__ */ e(Z, { className: "w-4 h-4 text-blue-600 flex-shrink-0" }),
                  /* @__PURE__ */ e("span", { className: "text-neutral-700 font-medium", children: s })
                ] }, o)) })
              ] }),
              /* @__PURE__ */ e("div", { className: "pt-8 border-t border-neutral-100", children: /* @__PURE__ */ e(v, { to: `/products/${O[n].id === "hdgpe" ? "hd-g-pe" : O[n].id}`, children: /* @__PURE__ */ e(I, { variant: "primary", theme: "light", className: "shadow-lg w-full sm:w-auto", children: "View Technical Data" }) }) })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex flex-col gap-6", children: [
              /* @__PURE__ */ e(
                dr,
                {
                  src: O[n].image,
                  alt: O[n].title,
                  className: "aspect-[4/3] w-full"
                }
              ),
              /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-4", children: O[n].stats.map((s, o) => /* @__PURE__ */ t("div", { className: "p-4 bg-neutral-50 rounded-xl border border-neutral-100", children: [
                /* @__PURE__ */ e("div", { className: "text-2xl md:text-3xl font-mono text-neutral-900 mb-1", children: s.value }),
                /* @__PURE__ */ e("div", { className: "text-xs uppercase tracking-widest text-neutral-500", children: s.label })
              ] }, o)) })
            ] })
          ] })
        ] }) })
      ] }),
      a === "pipeline" && /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ t("div", { className: "mb-10", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-5", children: [
            /* @__PURE__ */ e("span", { className: "w-2 h-2 rounded-full bg-blue-500" }),
            /* @__PURE__ */ e("h3", { className: "text-xs font-bold uppercase tracking-widest text-neutral-400", children: "R&D Pipeline" }),
            /* @__PURE__ */ e("div", { className: "flex-1 h-px bg-neutral-100" })
          ] }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4", children: lt.filter((s) => s.status === "R&D Pipeline").map((s) => /* @__PURE__ */ e(it, { product: s }, s.id)) })
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-5", children: [
            /* @__PURE__ */ e("span", { className: "w-2 h-2 rounded-full bg-purple-500" }),
            /* @__PURE__ */ e("h3", { className: "text-xs font-bold uppercase tracking-widest text-neutral-400", children: "Pilot Trials" }),
            /* @__PURE__ */ e("div", { className: "flex-1 h-px bg-neutral-100" })
          ] }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4", children: lt.filter((s) => s.status === "Pilot Trial").map((s) => /* @__PURE__ */ e(it, { product: s }, s.id)) })
        ] })
      ] })
    ] })
  ] });
}, cr = {
  blue: {
    iconBg: "bg-blue-500/10",
    iconText: "text-blue-400",
    badgeBg: "bg-blue-600",
    heroText: "text-blue-400",
    glow: "from-blue-500/20",
    bullet: "bg-blue-500",
    arrow: "text-blue-400"
  },
  amber: {
    iconBg: "bg-amber-500/10",
    iconText: "text-amber-400",
    badgeBg: "bg-amber-600",
    heroText: "text-amber-400",
    glow: "from-amber-500/20",
    bullet: "bg-amber-500",
    arrow: "text-amber-400"
  },
  purple: {
    iconBg: "bg-purple-500/10",
    iconText: "text-purple-400",
    badgeBg: "bg-purple-600",
    heroText: "text-purple-400",
    glow: "from-purple-500/20",
    bullet: "bg-purple-500",
    arrow: "text-purple-400"
  }
}, mr = ({ icon: r, company: n, category: l, challenge: a, results: i, heroStat: s, heroLabel: o, theme: c }) => {
  const m = cr[c];
  return /* @__PURE__ */ t("div", { className: "group flex flex-col justify-between bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-500 relative overflow-hidden backdrop-blur-sm", children: [
    /* @__PURE__ */ e("div", { className: `absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${m.glow} to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none` }),
    /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-6 relative z-10", children: [
        /* @__PURE__ */ e("div", { className: `p-3 rounded-2xl ${m.iconBg} border border-white/5 ${m.iconText} transition-colors duration-300`, children: /* @__PURE__ */ e(r, { className: "w-6 h-6", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ e("div", { className: `px-3 py-1 rounded-full ${m.badgeBg} text-white text-[10px] font-bold uppercase tracking-wider shadow-lg`, children: l })
      ] }),
      /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white mb-4 leading-tight group-hover:text-neutral-200 transition-colors", children: n }),
      /* @__PURE__ */ t("p", { className: "text-neutral-400 text-sm leading-relaxed mb-8 border-l-2 border-neutral-700 pl-4 py-1", children: [
        '"',
        a,
        '"'
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "relative z-10 bg-black/40 rounded-2xl p-6 border border-white/5 group-hover:border-white/10 transition-all duration-500", children: [
      /* @__PURE__ */ t("div", { className: "flex items-end gap-2 mb-1", children: [
        /* @__PURE__ */ e("span", { className: `text-4xl font-display font-bold ${m.heroText}`, children: s }),
        /* @__PURE__ */ e(Rt, { className: `w-6 h-6 ${m.arrow} mb-2` })
      ] }),
      /* @__PURE__ */ e("div", { className: "text-xs font-bold text-neutral-500 uppercase tracking-wider mb-6 group-hover:text-neutral-400 transition-colors", children: o }),
      /* @__PURE__ */ e("div", { className: "space-y-3 pt-4 border-t border-white/10", children: i.map((d, u) => /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ e("div", { className: `w-1.5 h-1.5 rounded-full ${m.bullet}` }),
        /* @__PURE__ */ e("span", { className: "text-sm font-medium text-neutral-400 group-hover:text-neutral-300", children: d })
      ] }, u)) })
    ] })
  ] });
}, Jr = () => /* @__PURE__ */ e("section", { id: "proven-impact", className: "py-24 px-6 border-b border-neutral-800 bg-black/10", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ e(
    y,
    {
      number: "04",
      title: "Real-World Impact",
      subtitle: "Measurable results from deploying our graphene solutions in industrial applications.",
      theme: "dark"
    }
  ),
  /* @__PURE__ */ e("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16 mb-20", children: [
    {
      icon: ft,
      company: "Major Infra Project",
      category: "Construction",
      challenge: "Need for M50 grade concrete with inconsistent traditional mixes and high costs.",
      heroStat: "₹430/m³",
      heroLabel: "Cost Reduction",
      theme: "blue",
      results: [
        "40-50% Strength Gain",
        "15-20% Less Cement",
        "Water Resistant Upgrade"
      ]
    },
    {
      icon: Ie,
      company: "50MW Solar Plant",
      category: "Energy",
      challenge: "Significant power loss (15-20%) due to desert soiling and heat.",
      heroStat: "+8%",
      heroLabel: "Energy Output",
      theme: "amber",
      results: [
        "5-6°C Cooler Panels",
        "30-40% Less Soiling",
        "Self-Cleaning Surface"
      ]
    },
    {
      icon: q,
      company: "Auto Manufacturing",
      category: "Coatings",
      challenge: "Prohibitive costs of premium ceramic coatings for mass-market vehicles.",
      heroStat: "65%",
      heroLabel: "Cost Savings",
      theme: "purple",
      results: [
        "9H+ Surface Hardness",
        "3-4 Years Durability",
        "Mass Market Viability"
      ]
    }
  ].map((n, l) => /* @__PURE__ */ e(mr, { ...n }, l)) }),
  /* @__PURE__ */ t("div", { className: "relative overflow-hidden bg-white/5 border border-white/10 rounded-3xl p-12 text-white backdrop-blur-md", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" }),
    /* @__PURE__ */ e("div", { className: "absolute -top-24 -right-24 w-64 h-64 bg-brand-500 rounded-full blur-[100px] opacity-10" }),
    /* @__PURE__ */ t("div", { className: "relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 text-center", children: [
      /* @__PURE__ */ t("div", { className: "group", children: [
        /* @__PURE__ */ e("div", { className: "text-4xl md:text-5xl font-display font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300", children: "100+" }),
        /* @__PURE__ */ e("div", { className: "text-xs md:text-sm text-neutral-400 font-bold uppercase tracking-widest group-hover:text-cyan-400/70 transition-colors", children: "Deployments" })
      ] }),
      /* @__PURE__ */ t("div", { className: "group", children: [
        /* @__PURE__ */ e("div", { className: "text-4xl md:text-5xl font-display font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300", children: "18mo" }),
        /* @__PURE__ */ e("div", { className: "text-xs md:text-sm text-neutral-400 font-bold uppercase tracking-widest group-hover:text-emerald-400/70 transition-colors", children: "Avg. ROI" })
      ] }),
      /* @__PURE__ */ t("div", { className: "group", children: [
        /* @__PURE__ */ e("div", { className: "text-4xl md:text-5xl font-display font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300", children: "70%" }),
        /* @__PURE__ */ e("div", { className: "text-xs md:text-sm text-neutral-400 font-bold uppercase tracking-widest group-hover:text-amber-400/70 transition-colors", children: "Cost Save" })
      ] }),
      /* @__PURE__ */ t("div", { className: "group", children: [
        /* @__PURE__ */ e("div", { className: "text-4xl md:text-5xl font-display font-bold text-violet-400 mb-2 group-hover:scale-110 transition-transform duration-300", children: "5+" }),
        /* @__PURE__ */ e("div", { className: "text-xs md:text-sm text-neutral-400 font-bold uppercase tracking-widest group-hover:text-violet-400/70 transition-colors", children: "Industries" })
      ] })
    ] })
  ] })
] }) }), ur = ({ product: r, icon: n, roi: l, savings: a, payback: i, colorName: s }) => {
  const o = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100" },
    amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100" },
    neutral: { bg: "bg-neutral-100", text: "text-neutral-700", border: "border-neutral-200" }
  }, c = o[s] || o.neutral;
  return /* @__PURE__ */ e("div", { className: `group relative bg-white border ${c.border} rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500`, children: /* @__PURE__ */ t("div", { className: "relative z-10", children: [
    /* @__PURE__ */ e("div", { className: `w-16 h-16 rounded-2xl ${c.bg} ${c.text} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`, children: n }),
    /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-neutral-900 mb-6 group-hover:text-neutral-700 transition-colors", children: r }),
    /* @__PURE__ */ t("div", { className: "space-y-4", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ e("div", { className: "p-2 bg-neutral-50 rounded-lg text-neutral-400", children: /* @__PURE__ */ e(Ye, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("div", { className: "text-2xl font-bold text-neutral-900", children: i }),
          /* @__PURE__ */ e("div", { className: "text-xs font-bold text-neutral-400 uppercase tracking-wide", children: "Payback" })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "h-px bg-neutral-100" }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ e("div", { className: "p-2 bg-neutral-50 rounded-lg text-neutral-400", children: /* @__PURE__ */ e(Et, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("div", { className: "text-2xl font-bold text-neutral-900", children: a }),
          /* @__PURE__ */ e("div", { className: "text-xs font-bold text-neutral-400 uppercase tracking-wide", children: "Savings" })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "h-px bg-neutral-100" }),
      /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ e("div", { className: "p-2 bg-neutral-50 rounded-lg text-neutral-400", children: /* @__PURE__ */ e(A, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("div", { className: `text-3xl font-bold ${c.text}`, children: l }),
          /* @__PURE__ */ e("div", { className: "text-xs font-bold text-neutral-400 uppercase tracking-wide", children: "Annual ROI" })
        ] })
      ] })
    ] })
  ] }) });
}, Xr = () => /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-white border-t border-neutral-100", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ t("div", { className: "text-center mb-16", children: [
    /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-neutral-200 bg-neutral-50 mb-6", children: [
      /* @__PURE__ */ e(Xe, { className: "w-4 h-4 text-emerald-600" }),
      /* @__PURE__ */ e("span", { className: "text-xs font-bold text-neutral-600 tracking-wide uppercase", children: "Financial Impact" })
    ] }),
    /* @__PURE__ */ e("h2", { className: "text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4", children: "ROI That Speaks for Itself" }),
    /* @__PURE__ */ e("p", { className: "text-xl text-neutral-500 max-w-3xl mx-auto", children: "Transparent, validated return on investment across all product lines" })
  ] }),
  /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16", children: [
    {
      product: "Graphacrete",
      icon: "🏗️",
      roi: "67%",
      savings: "15-20%",
      payback: "18 mo",
      colorName: "blue"
    },
    {
      product: "Graffisol",
      icon: "☀️",
      roi: "72%",
      savings: "10-12%",
      payback: "18 mo",
      colorName: "amber"
    },
    {
      product: "Ceraphene",
      icon: "💎",
      roi: "200%",
      savings: "60-70%",
      payback: "6 mo",
      colorName: "purple"
    },
    {
      product: "HD-G-PE",
      icon: "📦",
      roi: "85%",
      savings: "20%+",
      payback: "12 mo",
      colorName: "neutral"
    }
  ].map((n, l) => /* @__PURE__ */ e(ur, { ...n }, l)) }),
  /* @__PURE__ */ e("div", { className: "bg-neutral-50 rounded-2xl p-12 border border-neutral-200", children: /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 text-center", children: [
    /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ e("div", { className: "inline-flex p-4 bg-white rounded-2xl text-emerald-600 shadow-sm mb-4 border border-neutral-100", children: /* @__PURE__ */ e(Xe, { className: "w-8 h-8" }) }),
      /* @__PURE__ */ e("div", { className: "text-4xl font-display font-bold text-neutral-900 mb-2", children: "₹50+ Cr" }),
      /* @__PURE__ */ e("div", { className: "text-sm font-bold text-neutral-500 uppercase tracking-wide", children: "Customer Savings Generated" })
    ] }),
    /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ e("div", { className: "inline-flex p-4 bg-white rounded-2xl text-blue-600 shadow-sm mb-4 border border-neutral-100", children: /* @__PURE__ */ e(A, { className: "w-8 h-8" }) }),
      /* @__PURE__ */ e("div", { className: "text-4xl font-display font-bold text-neutral-900 mb-2", children: "100%" }),
      /* @__PURE__ */ e("div", { className: "text-sm font-bold text-neutral-500 uppercase tracking-wide", children: "ROI Validation Rate" })
    ] }),
    /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ e("div", { className: "inline-flex p-4 bg-white rounded-2xl text-amber-600 shadow-sm mb-4 border border-neutral-100", children: /* @__PURE__ */ e(Ye, { className: "w-8 h-8" }) }),
      /* @__PURE__ */ e("div", { className: "text-4xl font-display font-bold text-neutral-900 mb-2", children: "18 mo" }),
      /* @__PURE__ */ e("div", { className: "text-sm font-bold text-neutral-500 uppercase tracking-wide", children: "Average Payback Period" })
    ] })
  ] }) })
] }) }), Zr = () => /* @__PURE__ */ e("section", { id: "technology", className: "py-24 px-6 bg-neutral-50 relative overflow-hidden border-b border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10", children: [
  /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ e(
      y,
      {
        number: "10",
        title: "From Lab to Manufacturing",
        subtitle: "We don't just innovate in the lab—we ensure every breakthrough can scale from prototype to mass manufacturing.",
        theme: "light"
      }
    ),
    /* @__PURE__ */ t("div", { className: "space-y-12", children: [
      /* @__PURE__ */ t("div", { className: "flex gap-6 group", children: [
        /* @__PURE__ */ e("div", { className: "w-16 h-16 flex items-center justify-center bg-white border border-neutral-200 text-neutral-900 font-light text-2xl shrink-0 rounded-sm shadow-sm group-hover:bg-neutral-900 group-hover:text-white transition-colors", children: "1" }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("h4", { className: "text-neutral-900 text-xl font-medium mb-2", children: "Nanomaterials R&D Facility" }),
          /* @__PURE__ */ e("p", { className: "text-neutral-500 text-base leading-relaxed", children: "Graphene processing and dispersion technologies, surface chemistry modification, advanced characterization with SEM, TEM, Raman, and pilot-scale functionalization units." })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex gap-6 group", children: [
        /* @__PURE__ */ e("div", { className: "w-16 h-16 flex items-center justify-center bg-white border border-neutral-200 text-neutral-900 font-light text-2xl shrink-0 rounded-sm shadow-sm group-hover:bg-neutral-900 group-hover:text-white transition-colors", children: "2" }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("h4", { className: "text-neutral-900 text-xl font-medium mb-2", children: "Application & Testing Facility" }),
          /* @__PURE__ */ e("p", { className: "text-neutral-500 text-base leading-relaxed", children: "Real-industry testing across multiple sectors. Mechanical, thermal, electrical conductivity labs. Prototype fabrication, field simulation, and performance validation." })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex gap-6 group", children: [
        /* @__PURE__ */ e("div", { className: "w-16 h-16 flex items-center justify-center bg-neutral-900 border border-neutral-900 text-white font-light text-2xl shrink-0 rounded-sm shadow-md", children: "3" }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("h4", { className: "text-neutral-900 text-xl font-medium mb-2", children: "Industrial Deployment" }),
          /* @__PURE__ */ e("p", { className: "text-neutral-500 text-base leading-relaxed", children: "Deep-tech expertise with real-world industrial deployment, supply-chain integration, and national-scale production capabilities." })
        ] })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ t("div", { className: "relative h-full min-h-[400px] border border-neutral-200 bg-white/50 backdrop-blur-sm p-8 flex items-center justify-center rounded-sm", children: [
    /* @__PURE__ */ t("div", { className: "relative z-10 text-center", children: [
      /* @__PURE__ */ e(Bt, { className: "w-32 h-32 text-neutral-900 mx-auto mb-6 animate-spin-slow", strokeWidth: 0.5 }),
      /* @__PURE__ */ e("h5", { className: "text-neutral-900 font-mono text-sm tracking-widest uppercase mb-2", children: "Graphene Nano-Platelets" }),
      /* @__PURE__ */ e("p", { className: "text-neutral-500 text-xs", children: "High Aspect Ratio • High Purity" })
    ] }),
    /* @__PURE__ */ t("div", { className: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ e("div", { className: "absolute top-1/2 left-1/2 w-[300px] h-[300px] border border-neutral-300 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-40" }),
      /* @__PURE__ */ e("div", { className: "absolute top-1/2 left-1/2 w-[400px] h-[400px] border border-neutral-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30" })
    ] })
  ] })
] }) }), ea = () => /* @__PURE__ */ t("section", { className: "py-24 px-6 bg-white border-b border-neutral-200 relative overflow-hidden", children: [
  /* @__PURE__ */ e("div", { className: "absolute top-20 right-0 w-96 h-96 bg-neutral-100 rounded-full blur-3xl opacity-50" }),
  /* @__PURE__ */ e("div", { className: "absolute bottom-20 left-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50" }),
  /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto relative z-10", children: [
    /* @__PURE__ */ e(
      y,
      {
        number: "01",
        title: "The MonoAtoms Edge",
        subtitle: "Bridging the gap between atomic potential and industrial scale.",
        theme: "light"
      }
    ),
    /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-6 mt-16 auto-rows-[minmax(200px,auto)]", children: [
      /* @__PURE__ */ t("div", { className: "lg:col-span-5 lg:row-span-2 bg-neutral-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden group flex flex-col justify-between shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500", children: [
        /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 p-12 opacity-5 scale-150 transform group-hover:rotate-12 transition-transform duration-1000 pointer-events-none", children: /* @__PURE__ */ e(me, { size: 240, strokeWidth: 0.5 }) }),
        /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" }),
        /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent pointer-events-none" }),
        /* @__PURE__ */ t("div", { className: "relative z-10", children: [
          /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-medium tracking-wider uppercase mb-8", children: [
            /* @__PURE__ */ e("span", { className: "w-2 h-2 rounded-full bg-brand-500 animate-pulse" }),
            "Lab-to-Life"
          ] }),
          /* @__PURE__ */ t("h3", { className: "text-4xl md:text-5xl font-display font-medium mb-6 leading-tight", children: [
            "Deep Science",
            /* @__PURE__ */ e("br", {}),
            /* @__PURE__ */ e("span", { className: "text-neutral-500", children: "Heritage" })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-neutral-400 text-lg leading-relaxed mb-8 max-w-sm", children: "Born from 14+ years of rigorous R&D. We don't just use graphene; we engineer it." })
        ] }),
        /* @__PURE__ */ e("div", { className: "relative z-10 space-y-4 border-t border-white/10 pt-8", children: [
          { text: "6× President Awards", icon: ue },
          { text: "NASA Recognized Tech", icon: Z },
          { text: "NABL Validated", icon: ie }
        ].map((r, n) => /* @__PURE__ */ t("div", { className: "flex items-center gap-4 group/item", children: [
          /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:border-brand-500/50 group-hover/item:bg-brand-500/10 transition-colors", children: /* @__PURE__ */ e(r.icon, { className: "w-5 h-5 text-neutral-400 group-hover/item:text-brand-400 transition-colors" }) }),
          /* @__PURE__ */ e("span", { className: "text-lg text-neutral-200 font-medium", children: r.text })
        ] }, n)) })
      ] }),
      /* @__PURE__ */ t("div", { className: "lg:col-span-7 bg-white border border-neutral-200 rounded-3xl p-8 md:p-12 hover:border-neutral-300 hover:shadow-xl transition-all duration-300 relative group overflow-hidden", children: [
        /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100/50 transition-colors" }),
        /* @__PURE__ */ t("div", { className: "relative z-10", children: [
          /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-6", children: [
            /* @__PURE__ */ e("div", { className: "w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100", children: /* @__PURE__ */ e(q, { className: "w-7 h-7" }) }),
            /* @__PURE__ */ e("div", { className: "px-3 py-1 rounded-full bg-neutral-100 text-neutral-500 text-xs font-bold uppercase tracking-wide", children: "Industrial Scale" })
          ] }),
          /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-bold text-neutral-900 mb-4", children: "Manufacturing Mastery" }),
          /* @__PURE__ */ e("p", { className: "text-neutral-500 mb-8 max-w-lg text-lg", children: `We've solved the "Graphene Bottleneck"—scaling from grams to tons without compromising quality.` }),
          /* @__PURE__ */ t("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ t("div", { className: "flex-1 p-5 bg-neutral-50 rounded-2xl border border-neutral-100 group-hover:border-blue-200 transition-colors", children: [
              /* @__PURE__ */ e("div", { className: "text-4xl font-display font-bold text-neutral-900 mb-1", children: "Ton" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wide font-bold", children: "Scale Capacity" })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex-1 p-5 bg-neutral-50 rounded-2xl border border-neutral-100 group-hover:border-blue-200 transition-colors", children: [
              /* @__PURE__ */ e("div", { className: "text-4xl font-display font-bold text-neutral-900 mb-1", children: "99.9%" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wide font-bold", children: "Purity Control" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "lg:col-span-7 bg-gradient-to-br from-neutral-50 via-white to-emerald-50/30 border border-neutral-200 rounded-3xl p-8 md:p-12 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 relative group overflow-hidden", children: [
        /* @__PURE__ */ e("div", { className: "absolute bottom-0 right-0 w-64 h-64 bg-emerald-50/50 rounded-full blur-[80px] translate-y-1/2 translate-x-1/2" }),
        /* @__PURE__ */ t("div", { className: "relative z-10", children: [
          /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-6", children: [
            /* @__PURE__ */ e("div", { className: "w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100", children: /* @__PURE__ */ e(A, { className: "w-7 h-7" }) }),
            /* @__PURE__ */ e("div", { className: "px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-700 text-xs font-bold uppercase tracking-wide border border-emerald-200/50", children: "Market Viable" })
          ] }),
          /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-bold text-neutral-900 mb-4", children: "Commanding Economics" }),
          /* @__PURE__ */ e("p", { className: "text-neutral-500 mb-8 max-w-lg text-lg", children: "Not just better performance—better pricing. We deliver ROI that makes adoption an obvious choice." }),
          /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-3", children: [
            /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-2 px-4 py-2 bg-white text-emerald-700 rounded-lg text-sm font-bold border border-emerald-100 shadow-sm", children: [
              /* @__PURE__ */ e(qe, { className: "w-4 h-4" }),
              " 60% Cost Reduction"
            ] }),
            /* @__PURE__ */ t("span", { className: "inline-flex items-center gap-2 px-4 py-2 bg-white text-emerald-700 rounded-lg text-sm font-bold border border-emerald-100 shadow-sm", children: [
              /* @__PURE__ */ e(Z, { className: "w-4 h-4" }),
              " 18-Mo Payback"
            ] })
          ] })
        ] })
      ] })
    ] })
  ] })
] }), hr = ({ title: r, icon: n, traditional: l, graphene: a }) => /* @__PURE__ */ t("div", { className: "group relative bg-white border border-neutral-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full", children: [
  /* @__PURE__ */ e("div", { className: "p-8 pb-6 border-b border-neutral-100 bg-neutral-50/50", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-4 mb-4", children: [
    /* @__PURE__ */ e("div", { className: "w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 shadow-sm", children: /* @__PURE__ */ e(n, { className: "w-6 h-6", strokeWidth: 1.5 }) }),
    /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-neutral-900", children: r })
  ] }) }),
  /* @__PURE__ */ t("div", { className: "flex-1 flex flex-col", children: [
    /* @__PURE__ */ t("div", { className: "p-8 pt-6 pb-6 border-b border-neutral-100 bg-white opacity-80 group-hover:opacity-60 transition-opacity", children: [
      /* @__PURE__ */ e("div", { className: "flex items-center gap-2 mb-4", children: /* @__PURE__ */ e("span", { className: "text-xs font-bold text-neutral-400 uppercase tracking-wider", children: "Traditional Standard" }) }),
      /* @__PURE__ */ e("ul", { className: "space-y-3", children: l.map((i, s) => /* @__PURE__ */ t("li", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ e(ne, { className: "w-4 h-4 text-neutral-300 mt-1 flex-shrink-0" }),
        /* @__PURE__ */ e("span", { className: "text-sm text-neutral-500 font-medium line-through decoration-neutral-300", children: i })
      ] }, s)) })
    ] }),
    /* @__PURE__ */ t("div", { className: "flex-1 p-8 bg-neutral-900 text-white relative overflow-hidden group-hover:bg-neutral-950 transition-colors duration-500", children: [
      /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" }),
      /* @__PURE__ */ t("div", { className: "relative z-10", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ e("span", { className: "text-xs font-bold text-green-400 uppercase tracking-wider", children: "Monoatom Enhanced" }),
          /* @__PURE__ */ e("div", { className: "px-2 py-1 rounded bg-green-500/20 text-green-400 text-[10px] font-bold border border-green-500/30", children: "PROVEN" })
        ] }),
        /* @__PURE__ */ e("ul", { className: "space-y-4", children: a.map((i, s) => /* @__PURE__ */ t("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ e("div", { className: "mt-0.5 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0", children: /* @__PURE__ */ e(de, { className: "w-3 h-3", strokeWidth: 3 }) }),
          /* @__PURE__ */ e("span", { className: "text-sm text-neutral-200 font-medium", children: i })
        ] }, s)) })
      ] })
    ] })
  ] })
] }), ta = () => /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-white border-b border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ e(
    y,
    {
      number: "02",
      title: "The Performance Gap",
      subtitle: "Why traditional materials can't compete with atomic engineering.",
      theme: "light"
    }
  ),
  /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mt-16", children: [
    {
      title: "Concrete (Graphacrete)",
      icon: Ue,
      traditional: [
        "Heavy cement usage",
        "High micro-crack risk",
        "Water permeable",
        "30–50 yr lifespan only"
      ],
      graphene: [
        "Up to 30% Cement Reduction",
        "Zero Micro-cracks",
        "50–100 yr Durability",
        "LEED Credit Points"
      ]
    },
    {
      title: "Solar (Graffisol)",
      icon: Ie,
      traditional: [
        "15-20% Soiling Loss",
        "Overheating Panels",
        "Monthly Cleaning",
        "Standard Output"
      ],
      graphene: [
        "Self-Cleaning Surface",
        "Thermal Dissipation",
        "Annual Maintenance",
        "+12% Efficiency"
      ]
    },
    {
      title: "Coating (Ceraphene)",
      icon: V,
      traditional: [
        "Expensive (₹15k+)",
        "2-Year Lifespan",
        "Professional Only",
        "Standard Gloss"
      ],
      graphene: [
        "Accessible (₹5k)",
        "5-Year Durability",
        "Easy Application",
        "9H+ Hardness"
      ]
    }
  ].map((n, l) => /* @__PURE__ */ e(hr, { ...n }, l)) })
] }) }), pr = ({ number: r, icon: n, title: l, duration: a, activities: i, deliverables: s, isActive: o, onClick: c, isLast: m }) => /* @__PURE__ */ t(
  "div",
  {
    className: `relative group cursor-pointer transition-all duration-500 ease-out h-full ${o ? "col-span-1 md:col-span-2 lg:col-span-1 bg-neutral-900 text-white shadow-2xl scale-105 ring-4 ring-neutral-100 z-10" : "bg-white text-neutral-900 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg opacity-60 hover:opacity-100"} rounded-3xl p-8 flex flex-col`,
    onClick: c,
    children: [
      o && /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[60px] translate-x-1/3 -translate-y-1/3 pointer-events-none" }),
      /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-8 relative z-10", children: [
        /* @__PURE__ */ e("div", { className: `p-4 rounded-2xl ${o ? "bg-brand-500 text-white" : "bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200"} transition-colors duration-300`, children: /* @__PURE__ */ e(n, { className: "w-6 h-6", strokeWidth: 2 }) }),
        /* @__PURE__ */ e("span", { className: `text-xs font-bold ${o ? "text-brand-400" : "text-neutral-400"} uppercase tracking-wider border px-3 py-1 rounded-full ${o ? "border-brand-500/30" : "border-neutral-200"}`, children: a })
      ] }),
      /* @__PURE__ */ t("div", { className: `text-xs font-bold uppercase tracking-wider mb-2 ${o ? "text-neutral-400" : "text-neutral-500"}`, children: [
        "Phase ",
        r < 10 ? `0${r}` : r
      ] }),
      /* @__PURE__ */ e("h3", { className: `text-2xl font-display font-bold mb-4 ${o ? "text-white" : "text-neutral-900"}`, children: l }),
      /* @__PURE__ */ e("div", { className: `transition-all duration-500 overflow-hidden ${o ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"}`, children: /* @__PURE__ */ t("div", { className: "space-y-6", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("h4", { className: "text-xs font-bold uppercase tracking-wide mb-3 text-brand-400", children: "Key Activities" }),
          /* @__PURE__ */ e("ul", { className: "space-y-2", children: i.map((d, u) => /* @__PURE__ */ t("li", { className: "flex items-start gap-3 text-sm text-neutral-300", children: [
            /* @__PURE__ */ e(ie, { className: "w-4 h-4 flex-shrink-0 mt-0.5 text-brand-500" }),
            /* @__PURE__ */ e("span", { children: d })
          ] }, u)) })
        ] }),
        /* @__PURE__ */ e("div", { className: "h-px bg-white/10" }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("h4", { className: "text-xs font-bold uppercase tracking-wide mb-3 text-brand-400", children: "Deliverables" }),
          /* @__PURE__ */ e("ul", { className: "space-y-2", children: s.map((d, u) => /* @__PURE__ */ t("li", { className: "flex items-start gap-3 text-sm text-neutral-300", children: [
            /* @__PURE__ */ e("div", { className: "w-1.5 h-1.5 rounded-full bg-neutral-500 mt-2 flex-shrink-0" }),
            /* @__PURE__ */ e("span", { children: d })
          ] }, u)) })
        ] })
      ] }) }),
      !o && /* @__PURE__ */ e("div", { className: "mt-auto pt-8 border-t border-neutral-100", children: /* @__PURE__ */ t("div", { className: "flex items-center text-sm font-bold text-neutral-400 group-hover:text-brand-600 transition-colors", children: [
        "View Details ",
        /* @__PURE__ */ e(S, { className: "w-4 h-4 ml-2" })
      ] }) })
    ]
  }
), ra = () => {
  const [r, n] = L(0), l = [
    {
      number: 1,
      icon: ut,
      title: "Discovery",
      duration: "1-2 Weeks",
      activities: [
        "Initial requirement gathering",
        "Site assessment & analysis",
        "Technical feasibility study",
        "Custom solution design"
      ],
      deliverables: [
        "Detailed requirement document",
        "Technical proposal",
        "Cost-benefit analysis"
      ]
    },
    {
      number: 2,
      icon: B,
      title: "Pilot Program",
      duration: "4-8 Weeks",
      activities: [
        "Small-scale deployment",
        "Performance monitoring",
        "Optimization & fine-tuning",
        "ROI validation"
      ],
      deliverables: [
        "Pilot performance report",
        "Validated ROI data",
        "Scale-up roadmap"
      ]
    },
    {
      number: 3,
      icon: We,
      title: "Integration",
      duration: "2-6 Months",
      activities: [
        "Production-scale roll-out",
        "On-site team training",
        "Process integration",
        "QA protocols setup"
      ],
      deliverables: [
        "Full product supply",
        "SOP documentation",
        "QA/QC certificates"
      ]
    },
    {
      number: 4,
      icon: qe,
      title: "Optimization",
      duration: "Ongoing",
      activities: [
        "Continuous tracking",
        "Quarterly reviews",
        "Issue resolution",
        "Future-proofing"
      ],
      deliverables: [
        "Monthly reports",
        "Continuous improvement plan",
        "24/7 Support access"
      ]
    }
  ];
  return /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-neutral-50 border-b border-neutral-200 overflow-hidden", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ e(
      y,
      {
        number: "10",
        title: "Working With Us",
        subtitle: "A proven 4-phase process from discovery to deployment and beyond.",
        theme: "light"
      }
    ),
    /* @__PURE__ */ t("div", { className: "relative mt-20 mb-20", children: [
      /* @__PURE__ */ e("div", { className: "hidden lg:block relative h-1 bg-neutral-200 w-full mb-12 top-[340px] -z-10 rounded-full", children: /* @__PURE__ */ e(
        "div",
        {
          className: "absolute h-full bg-brand-500 transition-all duration-500 ease-out rounded-full",
          style: { width: `${r / (l.length - 1) * 100}%` }
        }
      ) }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start", children: l.map((a, i) => /* @__PURE__ */ e(
        pr,
        {
          ...a,
          isActive: r === i,
          onClick: () => n(i),
          isLast: i === l.length - 1
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ e("div", { className: "bg-white border border-neutral-200 rounded-3xl p-12 shadow-xl shadow-neutral-100/50", children: /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-100", children: [
      /* @__PURE__ */ t("div", { className: "group", children: [
        /* @__PURE__ */ e("div", { className: "text-5xl font-display font-bold text-neutral-900 mb-2 group-hover:scale-110 transition-transform duration-300", children: "100%" }),
        /* @__PURE__ */ e("div", { className: "text-sm font-bold text-neutral-400 uppercase tracking-widest group-hover:text-brand-600 transition-colors", children: "Client Retention" })
      ] }),
      /* @__PURE__ */ t("div", { className: "group pt-8 md:pt-0", children: [
        /* @__PURE__ */ e("div", { className: "text-5xl font-display font-bold text-neutral-900 mb-2 group-hover:scale-110 transition-transform duration-300", children: "<24h" }),
        /* @__PURE__ */ e("div", { className: "text-sm font-bold text-neutral-400 uppercase tracking-widest group-hover:text-brand-600 transition-colors", children: "Response Time" })
      ] }),
      /* @__PURE__ */ t("div", { className: "group pt-8 md:pt-0", children: [
        /* @__PURE__ */ e("div", { className: "text-5xl font-display font-bold text-neutral-900 mb-2 group-hover:scale-110 transition-transform duration-300", children: "100+" }),
        /* @__PURE__ */ e("div", { className: "text-sm font-bold text-neutral-400 uppercase tracking-widest group-hover:text-brand-600 transition-colors", children: "Projects Delivered" })
      ] })
    ] }) })
  ] }) });
}, aa = () => {
  const r = [
    {
      audience: "Manufacturers",
      icon: Re,
      ctas: [
        { text: "Download Catalog", icon: ye, link: "/contact" },
        { text: "Tech Specs", icon: ye, link: "/contact" }
      ],
      description: "Get detailed specs, performance data, and application guides for integration."
    },
    {
      audience: "Decision Makers",
      icon: A,
      ctas: [
        { text: "Schedule Consultation", icon: G, link: "/contact" },
        { text: "ROI Calculator", icon: Wt, link: "/products/graphacrete" }
      ],
      description: "Understand business impact, ROI, and strategic advantages with expert guidance."
    },
    {
      audience: "Partners",
      icon: _e,
      ctas: [
        { text: "Licensing Options", icon: ye, link: "/partnership" },
        { text: "JV Opportunities", icon: Ye, link: "/contact" }
      ],
      description: "Explore technology licensing, joint ventures, and strategic alliances."
    },
    {
      audience: "Researchers",
      icon: B,
      ctas: [
        { text: "White Papers", icon: Re, link: "/contact" },
        { text: "Sample Kit", icon: B, link: "/contact" }
      ],
      description: "Access technical documentation, validation reports, and material samples."
    }
  ], n = [
    { text: "View All Products", link: "/products" },
    { text: "Competitive Comparison", link: "/products/graphacrete" },
    { text: "Case Studies", link: "/contact" },
    { text: "Certifications", link: "/contact" },
    { text: "Technical Support", link: "/contact" },
    { text: "Schedule Site Visit", link: "/contact" }
  ];
  return /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-neutral-50 border-t border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ t("div", { className: "text-center mb-20", children: [
      /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-6", children: [
        /* @__PURE__ */ e(A, { className: "w-3 h-3" }),
        "Next Steps"
      ] }),
      /* @__PURE__ */ e("h2", { className: "text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-6", children: "Start Your Transformation" }),
      /* @__PURE__ */ e("p", { className: "text-xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed", children: "Choose the path that matches your role and requirements to accelerate your journey with advanced materials." })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24", children: r.map((l, a) => {
      const i = l.icon;
      return /* @__PURE__ */ t(
        "div",
        {
          className: "bg-white p-8 rounded-2xl border border-neutral-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group flex flex-col",
          children: [
            /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ e(i, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ t("h3", { className: "text-lg font-bold text-neutral-900 mb-2", children: [
              "For ",
              l.audience
            ] }),
            /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 leading-relaxed mb-8 flex-grow", children: l.description }),
            /* @__PURE__ */ e("div", { className: "space-y-3 mt-auto", children: l.ctas.map((s, o) => {
              const c = s.icon;
              return /* @__PURE__ */ e(v, { to: s.link, className: "block", children: /* @__PURE__ */ t("button", { className: `w-full flex items-center justify-between text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${o === 0 ? "bg-neutral-900 text-white hover:bg-black group-hover:shadow-md" : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-400 hover:text-neutral-900"}`, children: [
                /* @__PURE__ */ t("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e(c, { className: "w-4 h-4" }),
                  s.text
                ] }),
                o === 0 && /* @__PURE__ */ e(S, { className: "w-4 h-4 opacity-70" })
              ] }) }, o);
            }) })
          ]
        },
        a
      );
    }) }),
    /* @__PURE__ */ t("div", { className: "grid lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ t("div", { className: "lg:col-span-2 bg-white rounded-2xl border border-neutral-200 p-8 md:p-12", children: [
        /* @__PURE__ */ t("h3", { className: "text-xl font-display font-medium text-neutral-900 mb-8 flex items-center gap-3", children: [
          /* @__PURE__ */ e(Pe, { className: "w-5 h-5 text-blue-500" }),
          "Quick Access"
        ] }),
        /* @__PURE__ */ e("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4", children: n.map((l, a) => /* @__PURE__ */ t(v, { to: l.link, className: "flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-colors group", children: [
          /* @__PURE__ */ e("div", { className: "w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-blue-500 transition-colors" }),
          /* @__PURE__ */ e("span", { className: "text-sm font-medium text-neutral-600 group-hover:text-neutral-900 transition-colors", children: l.text })
        ] }, a)) })
      ] }),
      /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-12 text-white flex flex-col justify-between shadow-2xl shadow-neutral-900/20", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("h3", { className: "text-xl font-display font-medium mb-2", children: "Need Guidance?" }),
          /* @__PURE__ */ e("p", { className: "text-neutral-400 text-sm leading-relaxed mb-8", children: "Not sure where to start? Our technical team is ready to help you define your requirements." }),
          /* @__PURE__ */ t("div", { className: "space-y-4 mb-8", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3 text-sm text-neutral-300", children: [
              /* @__PURE__ */ e(ke, { className: "w-4 h-4 text-blue-400" }),
              "info@monoatomlabs.com"
            ] }),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3 text-sm text-neutral-300", children: [
              /* @__PURE__ */ e(G, { className: "w-4 h-4 text-blue-400" }),
              "+91 989 819 9809"
            ] }),
            /* @__PURE__ */ t("div", { className: "flex items-start gap-3 text-sm text-neutral-300", children: [
              /* @__PURE__ */ e(vt, { className: "w-4 h-4 text-blue-400 mt-0.5" }),
              /* @__PURE__ */ e("span", { children: "iHub Gujarat, Ahmedabad" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e(v, { to: "/contact", children: /* @__PURE__ */ t("button", { className: "w-full py-4 bg-white text-neutral-900 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ e(G, { className: "w-4 h-4" }),
          "Schedule Discovery Call"
        ] }) })
      ] })
    ] })
  ] }) });
}, br = {
  blue: "text-blue-600",
  emerald: "text-emerald-600",
  indigo: "text-indigo-600",
  purple: "text-purple-600",
  amber: "text-amber-600",
  pink: "text-pink-600"
}, gr = [
  { value: "100+", label: "Installations", color: "blue" },
  { value: "50M+", label: "kg CO₂ Saved", color: "emerald" },
  { value: "5", label: "Core Products", color: "indigo" },
  { value: "15+", label: "Validations", color: "purple" },
  { value: "2", label: "R&D Facilities", color: "amber" },
  { value: "99.5%", label: "Satisfaction", color: "pink" }
], la = ({ copy: r }) => {
  const n = Array.isArray(r?.stats) ? r.stats : gr;
  return /* @__PURE__ */ e("div", { className: "relative -mt-8 mb-24 z-10 px-6", children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ e("div", { className: "bg-white rounded-2xl shadow-xl border border-neutral-100 p-8 grid grid-cols-2 lg:grid-cols-6 gap-8 divide-x divide-neutral-100/50", children: n.map((l, a) => /* @__PURE__ */ t(
    "div",
    {
      className: `text-center ${a % 2 !== 0 ? "border-none md:border-l lg:border-none" : ""}`,
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: `text-3xl md:text-4xl font-display font-bold ${br[l.color] || "text-blue-600"} mb-1`,
            children: l.value
          }
        ),
        /* @__PURE__ */ e("div", { className: "text-[10px] font-mono text-neutral-400 uppercase tracking-widest", children: l.label })
      ]
    },
    a
  )) }) }) });
}, xr = {
  wind: he,
  droplets: Fe,
  zap: Z,
  heart: Ge
}, fr = {
  visionBadge: "Our Vision",
  visionTitleLine1: "Advanced Nanomaterials for",
  visionTitleHighlight: "Better Quality of Life",
  visionBody: "We see graphene and advanced nanomaterials as the foundation of a transformation that will touch every aspect of human life—from the air we breathe to the energy we consume.",
  missionTitle: "Our Mission",
  missionBody: "To create commercially viable graphene solutions for industrial applications. We develop, validate, and commercialize graphene innovations to provide:",
  missionTiles: [
    { iconKey: "wind", label: "Clean Air" },
    { iconKey: "droplets", label: "Clean Water" },
    { iconKey: "zap", label: "Clean Energy" },
    { iconKey: "heart", label: "Better Life" }
  ],
  coreIdentityLabel: "Core Identity",
  coreIdentityP1: "Monoatom Labs develops breakthrough materials engineered for the future—graphene derivatives, functional nanomaterials, bio-inspired chemistries, and performance-enhancing additives.",
  coreIdentityP2: "Our innovations are designed to deliver superior strength, conductivity, durability, and environmental efficiency, enabling enterprises to rapidly transition into Industry 4.0."
}, ia = ({ copy: r }) => {
  const n = { ...fr, ...r || {} };
  return /* @__PURE__ */ t("section", { className: "py-24 px-6 bg-white text-neutral-900 relative overflow-hidden border-b border-neutral-200", children: [
    /* @__PURE__ */ t("div", { className: "max-w-5xl mx-auto relative z-10 text-center mb-24", children: [
      /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-8", children: [
        /* @__PURE__ */ e(Pe, { className: "w-3 h-3" }),
        n.visionBadge
      ] }),
      /* @__PURE__ */ t("h2", { className: "text-4xl md:text-6xl font-display font-medium leading-tight mb-8", children: [
        n.visionTitleLine1,
        " ",
        /* @__PURE__ */ e("br", {}),
        /* @__PURE__ */ e("span", { className: "text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600", children: n.visionTitleHighlight })
      ] }),
      /* @__PURE__ */ e("p", { className: "text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light", children: n.visionBody })
    ] }),
    /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto relative z-10", children: /* @__PURE__ */ t("div", { className: "grid md:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ t("h3", { className: "text-3xl font-display font-medium mb-8 flex items-center gap-4 text-neutral-900", children: [
          /* @__PURE__ */ e(xt, { className: "w-8 h-8 text-blue-600" }),
          n.missionTitle
        ] }),
        /* @__PURE__ */ e("p", { className: "text-lg text-neutral-600 font-light leading-relaxed mb-10", children: n.missionBody }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-4", children: (Array.isArray(n.missionTiles) ? n.missionTiles : []).map((l, a) => {
          const i = xr[l.iconKey] || he;
          return /* @__PURE__ */ t(
            "div",
            {
              className: "p-4 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-blue-300 transition-colors flex items-center gap-3",
              children: [
                /* @__PURE__ */ e(i, { className: "w-5 h-5 text-blue-600" }),
                /* @__PURE__ */ e("span", { className: "font-medium text-neutral-900", children: l.label })
              ]
            },
            a
          );
        }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ e("div", { className: "absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-10 blur-lg" }),
        /* @__PURE__ */ t("div", { className: "relative bg-white border border-neutral-200 rounded-2xl p-10 shadow-sm", children: [
          /* @__PURE__ */ e("h4", { className: "text-sm font-mono text-neutral-500 uppercase tracking-widest mb-6 border-b border-neutral-100 pb-4", children: n.coreIdentityLabel }),
          /* @__PURE__ */ e("p", { className: "text-neutral-600 leading-relaxed mb-6", children: n.coreIdentityP1 }),
          /* @__PURE__ */ e("p", { className: "text-neutral-600 leading-relaxed", children: n.coreIdentityP2 })
        ] })
      ] })
    ] }) })
  ] });
}, nt = {
  badge: "01 — Why Us",
  heading: "What Makes Us Different",
  cards: [
    {
      title: "Deep Scientific Expertise",
      desc: "Combined materials science, chemical engineering, and nanotechnology expertise from IISc, IIT, and NCL."
    },
    {
      title: "Industrial Scale Capability",
      desc: "Scaling from prototype to mass manufacturing with pilot-scale facilities and process optimization."
    },
    {
      title: "Real-World Validation",
      desc: "Rigorous field trials, NABL-certified lab testing, and independent third-party validation."
    },
    {
      title: "IP-Driven Innovation",
      desc: "Proprietary technology, formulation patents, and trade secrets protecting our dispersion technologies."
    }
  ]
}, na = ({ copy: r }) => {
  const n = { ...nt, ...r || {} }, l = Array.isArray(n.cards) ? n.cards : nt.cards;
  return /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-neutral-50 border-b border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ t("div", { className: "mb-16", children: [
      /* @__PURE__ */ e("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200 border border-neutral-300 text-neutral-600 text-xs font-mono font-medium tracking-wider uppercase mb-6", children: n.badge }),
      /* @__PURE__ */ e("h2", { className: "text-4xl font-display font-medium text-neutral-900", children: n.heading })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: l.map((a, i) => /* @__PURE__ */ t(
      "div",
      {
        className: "bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group",
        children: [
          /* @__PURE__ */ e("h3", { className: "text-lg font-bold text-neutral-900 mb-4 group-hover:text-blue-700 transition-colors", children: a.title }),
          /* @__PURE__ */ e("p", { className: "text-sm text-neutral-600 leading-relaxed", children: a.desc })
        ]
      },
      i
    )) })
  ] }) });
}, Q = ({ children: r }) => /* @__PURE__ */ e("span", { className: "inline-flex items-center px-2.5 py-1 rounded bg-neutral-100 border border-neutral-200 text-[10px] font-mono font-medium text-neutral-600 uppercase tracking-wide", children: r }), sa = () => /* @__PURE__ */ e("section", { id: "founders", className: "py-24 px-6 bg-transparent text-white", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ t("div", { className: "mb-20 border-b border-neutral-800 pb-8", children: [
    /* @__PURE__ */ e("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-400 text-xs font-mono font-medium tracking-wider uppercase mb-6", children: "02 — Leadership" }),
    /* @__PURE__ */ e("h2", { className: "text-4xl md:text-5xl font-display font-medium mb-4", children: "Leadership Team" }),
    /* @__PURE__ */ e("p", { className: "text-neutral-400 max-w-2xl text-lg font-light", children: "Built on decades of innovation expertise and industrial excellence." })
  ] }),
  /* @__PURE__ */ t("div", { className: "grid lg:grid-cols-2 gap-12 mb-24", children: [
    /* @__PURE__ */ t("div", { className: "group", children: [
      /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-6", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-medium mb-1", children: "Sushanth Paatnaik" }),
          /* @__PURE__ */ e("p", { className: "text-blue-400 font-mono text-sm uppercase tracking-wider", children: "Co-Founder & CEO" })
        ] }),
        /* @__PURE__ */ e("div", { className: "p-3 bg-neutral-800 rounded-lg border border-neutral-700 group-hover:border-blue-500/50 transition-colors", children: /* @__PURE__ */ e(ue, { className: "w-6 h-6 text-blue-400" }) })
      ] }),
      /* @__PURE__ */ e("p", { className: "text-neutral-300 leading-relaxed font-light mb-8 pr-8", children: "Materials innovator and entrepreneur. His innovation journey started at age 11. Focused on building next-generation technologies rooted in graphene, nanomaterials, and advanced chemical engineering. Experts in deep-tech commercialization and scaling science-driven ventures." }),
      /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ e(Q, { children: "6× President of India Awardee" }),
        /* @__PURE__ */ e(Q, { children: "MIT TR35" }),
        /* @__PURE__ */ e(Q, { children: "TED Speaker" }),
        /* @__PURE__ */ e(Q, { children: "NASA Awardee" })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "group lg:pl-12 lg:border-l border-neutral-800", children: [
      /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-6", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-medium mb-1", children: "Aayush Bansal" }),
          /* @__PURE__ */ e("p", { className: "text-emerald-400 font-mono text-sm uppercase tracking-wider", children: "Co-Founder & Strategic Investor" })
        ] }),
        /* @__PURE__ */ e("div", { className: "p-3 bg-neutral-800 rounded-lg border border-neutral-700 group-hover:border-emerald-500/50 transition-colors", children: /* @__PURE__ */ e(Nt, { className: "w-6 h-6 text-emerald-400" }) })
      ] }),
      /* @__PURE__ */ e("p", { className: "text-neutral-300 leading-relaxed font-light mb-8 pr-8", children: "Promoter of Kalika Steel. Computer Science Engineer with MBA in Technology Management. With over 38 years of experience in steel manufacturing and large-scale industrial operations, he bridges the gap between breakthrough innovations and real-world manufacturing." }),
      /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ e(Q, { children: "Kalika Steel Promoter" }),
        /* @__PURE__ */ e(Q, { children: "Industrial Scale-up" }),
        /* @__PURE__ */ e(Q, { children: "MBA Tech Management" })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ e("div", { className: "grid md:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800 rounded-2xl overflow-hidden", children: [
    {
      icon: Ot,
      title: "Scientific Excellence",
      desc: "Materials science, chem e, and nano experts from premier institutions."
    },
    {
      icon: q,
      title: "Industrial Experience",
      desc: "Manufacturing, scale-up, and commercialization specialists."
    },
    {
      icon: Oe,
      title: "Research Partnerships",
      desc: "Collaborations with IISc, IIT, and National Chemical Laboratory."
    },
    {
      icon: wt,
      title: "Global Recognition",
      desc: "Multiple international recognitions for innovation and impact."
    }
  ].map((r, n) => /* @__PURE__ */ t("div", { className: "bg-neutral-900 p-8 hover:bg-neutral-800 transition-colors group", children: [
    /* @__PURE__ */ e(
      r.icon,
      {
        className: "w-8 h-8 text-neutral-500 group-hover:text-white mb-6 transition-colors",
        strokeWidth: 1.5
      }
    ),
    /* @__PURE__ */ e("h4", { className: "text-white font-medium mb-2", children: r.title }),
    /* @__PURE__ */ e("p", { className: "text-sm text-neutral-400 leading-relaxed", children: r.desc })
  ] }, n)) })
] }) }), le = ({ children: r }) => /* @__PURE__ */ t("li", { className: "flex items-start text-neutral-600 gap-3 group", children: [
  /* @__PURE__ */ e("span", { className: "w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 group-hover:bg-blue-600 group-hover:scale-125 transition-all" }),
  /* @__PURE__ */ e("span", { className: "group-hover:text-neutral-900 transition-colors", children: r })
] }), oa = () => /* @__PURE__ */ e("section", { id: "facilities", className: "py-24 px-6 bg-white", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ t("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6", children: [
    /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ e("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-6", children: "03 — Infrastructure" }),
      /* @__PURE__ */ e("h2", { className: "text-4xl font-display font-medium text-neutral-900", children: "Facilities & Capabilities" })
    ] }),
    /* @__PURE__ */ e("p", { className: "text-neutral-500 max-w-md text-right md:text-left", children: "State-of-the-art research, testing, and manufacturing facilities designed for scaling deep-tech." })
  ] }),
  /* @__PURE__ */ t("div", { className: "grid lg:grid-cols-2 gap-8", children: [
    /* @__PURE__ */ t("div", { className: "border border-neutral-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-neutral-50/50", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-8 pb-8 border-b border-neutral-200", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-white rounded-xl border border-neutral-200 flex items-center justify-center text-blue-600 shadow-sm", children: /* @__PURE__ */ e(me, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "text-[10px] font-mono uppercase tracking-widest text-neutral-400", children: "Unit 01" }),
            /* @__PURE__ */ e("h3", { className: "text-xl font-bold text-neutral-900", children: "Nanomaterials R&D" })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "px-3 py-1 bg-white border border-neutral-200 rounded text-xs font-medium text-neutral-500", children: "Operational" })
      ] }),
      /* @__PURE__ */ e("p", { className: "text-neutral-600 mb-8 font-light", children: "Focused on graphene processing, dispersion technologies, and high-purity nano-additive development." }),
      /* @__PURE__ */ t("ul", { className: "space-y-2", children: [
        /* @__PURE__ */ e(le, { children: "Surface chemistry modification" }),
        /* @__PURE__ */ e(le, { children: "Advanced characterization (SEM, TEM, Raman)" }),
        /* @__PURE__ */ e(le, { children: "Pilot-scale dispersion & functionalization" })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "border border-neutral-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-neutral-50/50", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-8 pb-8 border-b border-neutral-200", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-white rounded-xl border border-neutral-200 flex items-center justify-center text-blue-600 shadow-sm", children: /* @__PURE__ */ e(Ht, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "text-[10px] font-mono uppercase tracking-widest text-neutral-400", children: "Unit 02" }),
            /* @__PURE__ */ e("h3", { className: "text-xl font-bold text-neutral-900", children: "Application & Testing" })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "px-3 py-1 bg-white border border-neutral-200 rounded text-xs font-medium text-neutral-500", children: "Operational" })
      ] }),
      /* @__PURE__ */ e("p", { className: "text-neutral-600 mb-8 font-light", children: "Real-industry testing for coatings, concrete, composites, energy systems, and bio-chemical applications." }),
      /* @__PURE__ */ t("ul", { className: "space-y-2", children: [
        /* @__PURE__ */ e(le, { children: "Mechanical & durability testing" }),
        /* @__PURE__ */ e(le, { children: "Thermal & electrical conductivity labs" }),
        /* @__PURE__ */ e(le, { children: "Prototype fabrication & field-simulation" })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ t("div", { className: "mt-8 border border-neutral-200 rounded-2xl p-8 bg-white", children: [
    /* @__PURE__ */ e("h4", { className: "text-sm font-mono text-neutral-400 uppercase tracking-widest mb-6", children: "Equipment Specs" }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
      "Graphene synthesis",
      "Process development",
      "Nanomaterial functionalization",
      "Quality control systems",
      "Advanced characterization",
      "Coating application",
      "Dispersion technology",
      "Material testing"
    ].map((r, n) => /* @__PURE__ */ e(
      "div",
      {
        className: "px-4 py-3 bg-neutral-50 rounded border border-neutral-100 text-sm text-neutral-600",
        children: r
      },
      n
    )) })
  ] })
] }) }), da = () => {
  const [r, n] = L(null), l = [
    {
      src: "/images/hall-of-fame/conf1.jpeg",
      alt: "Conference Presentation",
      caption: "Global Innovation Summit",
      description: "Unveiling our breakthrough graphene dispersion technology to industry leaders from 30 countries."
    },
    {
      src: "/images/hall-of-fame/conf2.jpeg",
      alt: "Award Ceremony",
      caption: "Industry Recognition",
      description: 'Honored with the "Sustainability Tech of the Year" award for our contributions to reducing carbon footprints.'
    },
    {
      src: "/images/hall-of-fame/conf3.jpeg",
      alt: "Panel Discussion",
      caption: "Thought Leadership",
      description: "Our CEO discussing the future of advanced materials policy and standardization."
    }
  ], a = (s) => {
    s.stopPropagation();
    const c = (l.findIndex((m) => m.src === r.src) + 1) % l.length;
    n(l[c]);
  }, i = (s) => {
    s.stopPropagation();
    const c = (l.findIndex((m) => m.src === r.src) - 1 + l.length) % l.length;
    n(l[c]);
  };
  return /* @__PURE__ */ t("section", { className: "py-24 px-6 border-t border-b border-neutral-800 relative overflow-hidden", children: [
    /* @__PURE__ */ t("div", { className: "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ e("div", { className: "absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] animate-pulse" }),
      /* @__PURE__ */ e("div", { className: "absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse", style: { animationDelay: "2s" } })
    ] }),
    /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto relative z-10", children: [
      /* @__PURE__ */ t("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-800/80 border border-neutral-700 text-purple-300 text-xs font-mono font-medium tracking-wider uppercase mb-8 shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-md", children: [
          /* @__PURE__ */ e(Ft, { className: "w-3.5 h-3.5 text-purple-400" }),
          "Milestones & Recognition"
        ] }),
        /* @__PURE__ */ t("h2", { className: "text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: [
          "Hall of ",
          /* @__PURE__ */ e("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400", children: "Fame" })
        ] }),
        /* @__PURE__ */ e("p", { className: "text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed", children: "Celebrating our journey of breakthroughs, global recognitions, and the moments that define our legacy." })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid md:grid-cols-3 gap-8", children: l.map((s, o) => /* @__PURE__ */ t(
        f.div,
        {
          layoutId: `card-${o}`,
          onClick: () => n(s),
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { delay: o * 0.15, duration: 0.6 },
          className: "group relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-500 ring-1 ring-white/5 hover:ring-purple-500/50",
          children: [
            /* @__PURE__ */ e(
              f.img,
              {
                layoutId: `image-${s.src}`,
                src: s.src,
                alt: s.alt,
                className: "object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              }
            ),
            /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" }),
            /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100 translate-y-4 group-hover:translate-y-0", children: /* @__PURE__ */ e("div", { className: "w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.2)]", children: /* @__PURE__ */ e(gt, { className: "w-6 h-6" }) }) }),
            /* @__PURE__ */ t("div", { className: "absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out", children: [
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100", children: [
                /* @__PURE__ */ e(Ze, { className: "w-3.5 h-3.5 text-purple-400 fill-purple-400" }),
                /* @__PURE__ */ e("span", { className: "text-xs font-mono text-purple-200 uppercase tracking-widest", children: "Featured Moment" })
              ] }),
              /* @__PURE__ */ e("h3", { className: "text-white font-bold text-xl leading-tight border-l-4 border-purple-500 pl-4 group-hover:border-white transition-colors", children: s.caption })
            ] })
          ]
        },
        o
      )) })
    ] }),
    /* @__PURE__ */ e(yt, { children: r && /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12",
        onClick: () => n(null),
        children: [
          /* @__PURE__ */ e("button", { className: "absolute top-8 right-8 p-3 rounded-full bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-700 text-white transition-all z-50 group", children: /* @__PURE__ */ e(ne, { className: "w-6 h-6 group-hover:rotate-90 transition-transform" }) }),
          /* @__PURE__ */ e(
            "button",
            {
              className: "absolute left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-700 text-white transition-all z-50 hidden md:flex hover:-translate-x-1",
              onClick: i,
              children: /* @__PURE__ */ e(Se, { className: "w-8 h-8" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: "absolute right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-700 text-white transition-all z-50 hidden md:flex hover:translate-x-1",
              onClick: a,
              children: /* @__PURE__ */ e(X, { className: "w-8 h-8" })
            }
          ),
          /* @__PURE__ */ t(
            f.div,
            {
              layoutId: `card-${l.findIndex((s) => s.src === r.src)}`,
              className: "relative max-w-6xl w-full max-h-[85vh] grid grid-cols-1 lg:grid-cols-3 bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 shadow-[0_0_50px_rgba(0,0,0,0.5)]",
              onClick: (s) => s.stopPropagation(),
              children: [
                /* @__PURE__ */ e("div", { className: "lg:col-span-2 relative h-[50vh] lg:h-auto bg-black flex items-center justify-center p-4", children: /* @__PURE__ */ e(
                  f.img,
                  {
                    layoutId: `image-${r.src}`,
                    src: r.src,
                    alt: r.alt,
                    className: "max-w-full max-h-full object-contain drop-shadow-2xl"
                  }
                ) }),
                /* @__PURE__ */ t("div", { className: "p-8 lg:p-12 flex flex-col justify-center bg-neutral-900 border-t lg:border-t-0 lg:border-l border-neutral-800", children: [
                  /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-widest w-fit mb-8", children: [
                    /* @__PURE__ */ e(Ze, { className: "w-3.5 h-3.5 fill-current" }),
                    /* @__PURE__ */ e("span", { children: "Milestone" })
                  ] }),
                  /* @__PURE__ */ e("h3", { className: "text-3xl lg:text-4xl font-display font-bold text-white mb-6 leading-tight", children: r.caption }),
                  /* @__PURE__ */ e("p", { className: "text-neutral-300 text-lg leading-relaxed font-light mb-10", children: r.description }),
                  /* @__PURE__ */ t("div", { className: "mt-auto pt-8 border-t border-neutral-800 flex justify-between items-center text-xs text-neutral-500 font-mono uppercase tracking-wider", children: [
                    /* @__PURE__ */ t("span", { children: [
                      "Image ",
                      l.findIndex((s) => s.src === r.src) + 1,
                      " / ",
                      l.length
                    ] }),
                    /* @__PURE__ */ e("span", { children: "MONOATOM LABS © 2026" })
                  ] })
                ] })
              ]
            }
          )
        ]
      }
    ) })
  ] });
}, ca = () => /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-neutral-50 border-b border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-5xl mx-auto", children: [
  /* @__PURE__ */ t("div", { className: "mb-16", children: [
    /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ e(pt, { className: "w-8 h-8 text-neutral-600" }),
      /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl font-display font-bold text-neutral-900", children: "The Challenge" })
    ] }),
    /* @__PURE__ */ e("p", { className: "text-xl md:text-2xl text-neutral-600 leading-relaxed font-light", children: 'Graphene has been called the "miracle material" for over two decades. Despite thousands of research papers, 99% of innovations never transition from lab to manufacturing.' })
  ] }),
  /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ e(ie, { className: "w-8 h-8 text-green-600" }),
      /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl font-display font-bold text-neutral-900", children: "Our Solution" })
    ] }),
    /* @__PURE__ */ e("p", { className: "text-xl md:text-2xl text-neutral-600 leading-relaxed font-light", children: "We bridge this gap with real-world industrial deployment capabilities, ensuring every product is designed for commercial-scale manufacturing from day one." })
  ] })
] }) }), Ne = ({ icon: r, title: n, description: l, benefits: a }) => /* @__PURE__ */ t("div", { className: "p-8 bg-white border border-neutral-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 group", children: [
  /* @__PURE__ */ e(r, { className: "w-10 h-10 text-neutral-400 mb-6 group-hover:text-blue-600 transition-colors" }),
  /* @__PURE__ */ e("h3", { className: "text-xl font-display font-medium text-neutral-900 mb-4", children: n }),
  /* @__PURE__ */ e("p", { className: "text-neutral-600 mb-6 leading-relaxed font-light", children: l }),
  /* @__PURE__ */ e("ul", { className: "space-y-2", children: a.map((i, s) => /* @__PURE__ */ t("li", { className: "flex items-start text-sm text-neutral-600", children: [
    /* @__PURE__ */ e("span", { className: "w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" }),
    i
  ] }, s)) })
] }), ma = () => /* @__PURE__ */ e("section", { className: "py-24 px-6 border-b border-neutral-200 bg-neutral-50", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ t("div", { className: "mb-16", children: [
    /* @__PURE__ */ e("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-6", children: "04 — Technology" }),
    /* @__PURE__ */ e("h2", { className: "text-4xl font-display font-medium text-neutral-900 mb-4", children: "Core Technology Platform" }),
    /* @__PURE__ */ e("p", { className: "text-neutral-600 max-w-3xl text-lg font-light", children: "A comprehensive technology platform transforming graphene science into verified commercial reality through integrated synthesis, functionalization, and application development." })
  ] }),
  /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
    /* @__PURE__ */ e(
      Ne,
      {
        icon: Gt,
        title: "Graphene Synthesis",
        description: "Proprietary processes to synthesize high-purity graphene tailored for commercial scalability.",
        benefits: ["99%+ Purity", "Consistent Batch Quality", "Cost-Effective Scale-up"]
      }
    ),
    /* @__PURE__ */ e(
      Ne,
      {
        icon: B,
        title: "Functionalization",
        description: "Surface chemistry modification to ensure graphene integrates perfectly with host materials.",
        benefits: ["Covalent Bonding", "Polymer Compatibility", "Dispersion Stability"]
      }
    ),
    /* @__PURE__ */ e(
      Ne,
      {
        icon: me,
        title: "Advanced Characterization",
        description: "Atomic-scale analysis ensuring every batch meets rigorous performance standards.",
        benefits: ["SEM & TEM Imaging", "Raman Spectroscopy", "Mechanical Testing"]
      }
    ),
    /* @__PURE__ */ e(
      Ne,
      {
        icon: q,
        title: "Commercial Scale-up",
        description: "Bridging the gap between lab innovation and industrial mass production.",
        benefits: ["Pilot Production", "Process Engineering", "Quality Assurance"]
      }
    )
  ] })
] }) }), vr = {
  threePillars: {
    heading: "Why Monoatom Labs is Different",
    pillars: [
      {
        iconKey: "flask",
        title: "Scientific Excellence",
        items: ["IISc, IIT, NCL partnerships", "6× President of India Awardee", "MIT TR35, NASA recognized"],
        color: "blue"
      },
      {
        iconKey: "factory",
        title: "Industrial Scale",
        items: ["Manufacturing-ready processes", "5+ commercial products", "Field-scale pilot trials"],
        color: "emerald"
      },
      {
        iconKey: "check",
        title: "Proven Performance",
        items: ["NABL certified results", "Field-tested applications", "60-70% cost savings"],
        color: "purple"
      }
    ]
  }
}, ua = () => {
  const r = vr, n = {
    flask: B,
    factory: q,
    check: C
  }, l = (r.threePillars?.pillars || []).map((i) => ({
    ...i,
    icon: n[i.iconKey] || B
  })), a = (i) => ({
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      hoverBorder: "hover:border-blue-400",
      text: "text-blue-600"
    },
    emerald: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      hoverBorder: "hover:border-emerald-400",
      text: "text-emerald-600"
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      hoverBorder: "hover:border-purple-400",
      text: "text-purple-600"
    }
  })[i];
  return /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-white border-b border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ e("h2", { className: "text-4xl md:text-5xl font-display font-medium text-center mb-16 text-neutral-900", children: r.threePillars.heading }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12", children: l.map((i, s) => {
      const o = i.icon, c = a(i.color);
      return /* @__PURE__ */ t("div", { className: "text-center", children: [
        /* @__PURE__ */ e("div", { className: `w-16 h-16 mx-auto mb-6 ${c.bg} rounded-xl flex items-center justify-center border-2 ${c.border}`, children: /* @__PURE__ */ e(o, { className: `w-8 h-8 ${c.text}` }) }),
        /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold mb-6 text-neutral-900", children: i.title }),
        /* @__PURE__ */ e("ul", { className: "text-left text-neutral-600 space-y-3", children: i.items.map((m, d) => /* @__PURE__ */ t("li", { className: "flex items-start", children: [
          /* @__PURE__ */ e(C, { className: "w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ e("span", { className: "font-light", children: m })
        ] }, d)) })
      ] }, s);
    }) })
  ] }) });
}, ha = () => {
  const r = [
    {
      icon: V,
      title: "NABL Certified",
      description: "All performance claims independently verified by National Accreditation Board for Testing",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: B,
      title: "Scientific Validation",
      description: "Partnerships with IISc, IIT, NCL ensure rigorous research standards",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: A,
      title: "Field-Tested Results",
      description: "5 field-scale pilot trials demonstrating real-world performance",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: ue,
      title: "Award-Winning Team",
      description: "Led by 6× President of India Awardee, MIT TR35, NASA recognized founders",
      color: "from-yellow-500 to-orange-600"
    }
  ], n = [
    {
      name: "NABL Accreditation",
      description: "National Accreditation Board for Testing and Calibration Laboratories",
      status: "Certified",
      icon: V
    },
    {
      name: "Field Validation",
      description: "Real-world testing across multiple industrial applications",
      status: "5 Pilot Trials",
      icon: C
    },
    {
      name: "Scientific Partnerships",
      description: "Collaboration with premier research institutes",
      status: "IISc, IIT, NCL",
      icon: Oe
    },
    {
      name: "Performance Verification",
      description: "Independent third-party testing and validation",
      status: "Verified",
      icon: Ee
    }
  ];
  return /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-black/10 border-b border-neutral-800", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ t("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6", children: [
        /* @__PURE__ */ e(V, { className: "w-4 h-4 text-blue-400" }),
        /* @__PURE__ */ e("span", { className: "text-sm font-bold text-blue-300 uppercase tracking-wide", children: "Trust & Validation" })
      ] }),
      /* @__PURE__ */ t("h2", { className: "text-4xl md:text-5xl font-display font-medium text-white mb-6", children: [
        "Every Claim is Verified.",
        /* @__PURE__ */ e("br", {}),
        "Every Result is Certified."
      ] }),
      /* @__PURE__ */ e("p", { className: "text-xl text-neutral-300 max-w-3xl mx-auto font-light", children: "We don't just make promises—we provide NABL-certified proof, scientific validation, and real-world field test results" })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20", children: r.map((l, a) => {
      const i = l.icon;
      return /* @__PURE__ */ t(
        "div",
        {
          className: "bg-white/5 border-2 border-white/10 rounded-2xl p-6 text-center hover:border-white/30 hover:shadow-xl transition-all group backdrop-blur-sm",
          children: [
            /* @__PURE__ */ e("div", { className: `inline-flex p-4 bg-gradient-to-br ${l.color} rounded-xl mb-4 group-hover:scale-110 transition-transform`, children: /* @__PURE__ */ e(i, { className: "w-8 h-8 text-white" }) }),
            /* @__PURE__ */ e("h3", { className: "text-lg font-bold text-white mb-2", children: l.title }),
            /* @__PURE__ */ e("p", { className: "text-sm text-neutral-300 leading-relaxed font-light", children: l.description })
          ]
        },
        a
      );
    }) }),
    /* @__PURE__ */ t("div", { className: "bg-white/5 border-2 border-white/20 rounded-2xl p-10 mb-16 backdrop-blur-sm", children: [
      /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-bold text-white mb-8 text-center", children: "Certifications & Validations" }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: n.map((l, a) => {
        const i = l.icon;
        return /* @__PURE__ */ t(
          "div",
          {
            className: "flex items-start gap-4 p-6 bg-black/20 rounded-xl border border-white/10 hover:border-white/20 transition-all",
            children: [
              /* @__PURE__ */ e("div", { className: "p-3 bg-white/10 rounded-lg shrink-0 border border-white/20", children: /* @__PURE__ */ e(i, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ t("div", { className: "flex-1", children: [
                /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-2", children: [
                  /* @__PURE__ */ e("h4", { className: "font-bold text-white", children: l.name }),
                  /* @__PURE__ */ e("span", { className: "text-xs font-bold text-green-400 bg-green-500/20 px-2 py-1 rounded-full border border-green-500/30", children: l.status })
                ] }),
                /* @__PURE__ */ e("p", { className: "text-sm text-neutral-300 font-light", children: l.description })
              ] })
            ]
          },
          a
        );
      }) })
    ] }),
    /* @__PURE__ */ t("div", { className: "bg-white/5 border-2 border-white/20 rounded-2xl p-10 backdrop-blur-sm", children: [
      /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-bold text-white mb-8 text-center", children: "Backed by India's Premier Research Institutes" }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8", children: [
        {
          name: "Indian Institute of Science",
          acronym: "IISc",
          description: "Advanced materials research collaboration"
        },
        {
          name: "Indian Institute of Technology",
          acronym: "IIT",
          description: "Technology development partnerships"
        },
        {
          name: "National Chemical Laboratory",
          acronym: "NCL",
          description: "Chemical engineering validation"
        }
      ].map((l, a) => /* @__PURE__ */ t(
        "div",
        {
          className: "text-center p-6 bg-black/20 rounded-xl border border-white/10 hover:border-white/20 transition-all",
          children: [
            /* @__PURE__ */ e("div", { className: "w-20 h-20 bg-white/10 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border border-white/20", children: l.acronym }),
            /* @__PURE__ */ e("h4", { className: "font-bold text-white mb-2", children: l.name }),
            /* @__PURE__ */ e("p", { className: "text-sm text-neutral-300 font-light", children: l.description })
          ]
        },
        a
      )) }),
      /* @__PURE__ */ e("p", { className: "text-center text-neutral-300 font-light", children: "Our team includes scientists from these institutes working alongside industrial manufacturing experts to ensure every innovation meets the highest standards of scientific rigor and real-world applicability." })
    ] }),
    /* @__PURE__ */ t("div", { className: "text-center mt-16", children: [
      /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white mb-4", children: "Want to See the Certified Data?" }),
      /* @__PURE__ */ e("p", { className: "text-neutral-300 mb-8 font-light", children: "Download complete technical specifications, NABL certificates, and field test reports" }),
      /* @__PURE__ */ t("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ e(v, { to: "/contact", children: /* @__PURE__ */ e(I, { variant: "primary", theme: "dark", children: "Download Certification Documents" }) }),
        /* @__PURE__ */ e(v, { to: "/contact", children: /* @__PURE__ */ e(I, { variant: "secondary", theme: "dark", children: "Request Field Test Data" }) })
      ] })
    ] })
  ] }) });
}, pa = () => /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-white border-b border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ t("div", { className: "text-center mb-16", children: [
    /* @__PURE__ */ e("h2", { className: "text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-6", children: "Advanced Nanomaterials for Better Quality of Life" }),
    /* @__PURE__ */ e("p", { className: "text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed font-light", children: "To create commercially viable graphene solutions for industrial applications. We develop, validate, and make commercial-scale manufacturing of graphene innovations to provide clean air, clean water, clean energy, and better life." })
  ] }),
  /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
    /* @__PURE__ */ t("div", { className: "p-8 bg-neutral-50 border border-neutral-200 rounded-xl hover:border-neutral-300 hover:shadow-lg transition-all", children: [
      /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold mb-4 text-neutral-900", children: "Scientific Excellence" }),
      /* @__PURE__ */ e("p", { className: "text-neutral-600 font-light", children: "IISc, IIT, NCL partnerships with state-of-the-art R&D labs" })
    ] }),
    /* @__PURE__ */ t("div", { className: "p-8 bg-neutral-50 border border-neutral-200 rounded-xl hover:border-neutral-300 hover:shadow-lg transition-all", children: [
      /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold mb-4 text-neutral-900", children: "Industrial Scale" }),
      /* @__PURE__ */ e("p", { className: "text-neutral-600 font-light", children: "5+ commercially available manufacturing-ready products" })
    ] }),
    /* @__PURE__ */ t("div", { className: "p-8 bg-neutral-50 border border-neutral-200 rounded-xl hover:border-neutral-300 hover:shadow-lg transition-all", children: [
      /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold mb-4 text-neutral-900", children: "Proven Performance" }),
      /* @__PURE__ */ e("p", { className: "text-neutral-600 font-light", children: "NABL certified, field-tested with 60-70% cost savings" })
    ] })
  ] })
] }) }), st = ({
  table: r,
  highlightProduct: n,
  variant: l = "default",
  // default, compact, detailed
  showIcons: a = !0,
  className: i = ""
}) => {
  if (!r || !r.headers || !r.rows) return null;
  const s = n ? r.headers.findIndex(
    (m) => m.toLowerCase().includes(n.toLowerCase())
  ) : -1, o = (m) => {
    const d = String(m).toLowerCase();
    return d === "yes" || d === "true" || d === "excellent" || d === "superior" ? /* @__PURE__ */ e(de, { className: "w-5 h-5 text-green-500" }) : d === "no" || d === "false" ? /* @__PURE__ */ e(ne, { className: "w-5 h-5 text-red-500" }) : d === "medium" || d === "moderate" || d === "good" ? /* @__PURE__ */ e(Vt, { className: "w-5 h-5 text-amber-500" }) : null;
  }, c = (m, d) => {
    const u = a ? o(m) : null;
    return u ? /* @__PURE__ */ t("div", { className: "flex items-center justify-center gap-2", children: [
      u,
      /* @__PURE__ */ e("span", { className: d ? "font-semibold" : "", children: m })
    ] }) : /* @__PURE__ */ e("span", { className: d ? "font-semibold" : "", children: m });
  };
  return /* @__PURE__ */ e(
    f.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0 },
      transition: { duration: 0.6 },
      className: `overflow-x-auto ${i}`,
      children: /* @__PURE__ */ t("table", { className: "w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg", children: [
        /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: "bg-slate-900 text-white", children: r.headers.map((m, d) => /* @__PURE__ */ e(
          "th",
          {
            className: `py-4 px-6 text-left font-semibold ${d === s ? "bg-blue-600" : ""}`,
            children: m
          },
          d
        )) }) }),
        /* @__PURE__ */ e("tbody", { children: r.rows.map((m, d) => /* @__PURE__ */ e(
          f.tr,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.5, delay: d * 0.05 },
            className: `border-b border-slate-200 ${d % 2 === 0 ? "bg-white" : "bg-slate-50"} hover:bg-blue-50 transition-colors`,
            children: m.map((u, p) => /* @__PURE__ */ e(
              "td",
              {
                className: `py-4 px-6 ${p === 0 ? "font-medium text-slate-900" : "text-slate-700"} ${p === s ? "bg-blue-50 font-semibold" : ""}`,
                children: p === 0 ? u : c(u, p === s)
              },
              p
            ))
          },
          d
        )) })
      ] })
    }
  );
}, Me = ({
  title: r,
  subtitle: n,
  content: l,
  subsections: a = [],
  children: i,
  className: s = "",
  containerClassName: o = "container mx-auto px-6",
  variant: c = "default"
  // default, centered, wide
}) => {
  const m = {
    default: "max-w-5xl",
    centered: "max-w-4xl mx-auto text-center",
    wide: "max-w-7xl"
  };
  return /* @__PURE__ */ e("section", { className: `py-16 ${s}`, children: /* @__PURE__ */ e("div", { className: o, children: /* @__PURE__ */ t(
    f.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0 },
      transition: { duration: 0.6 },
      className: m[c],
      children: [
        r && /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: r }),
        n && /* @__PURE__ */ e("p", { className: "text-lg text-slate-600 mb-8", children: n }),
        l && /* @__PURE__ */ e("div", { className: "prose prose-lg max-w-none mb-8", children: typeof l == "string" ? /* @__PURE__ */ e(
          "div",
          {
            className: "text-slate-700 leading-relaxed whitespace-pre-line",
            dangerouslySetInnerHTML: { __html: l }
          }
        ) : l }),
        a.length > 0 && /* @__PURE__ */ e("div", { className: "space-y-12 mt-12", children: a.map((d, u) => /* @__PURE__ */ t(
          f.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.5, delay: u * 0.1 },
            className: "subsection",
            children: [
              /* @__PURE__ */ e("h3", { className: "text-2xl font-semibold mb-4 text-slate-900", children: d.title }),
              d.content && /* @__PURE__ */ e("div", { className: "text-slate-700 leading-relaxed space-y-4", children: Array.isArray(d.content) ? d.content.map((p, g) => p.trim() ? p.trim().startsWith("-") || p.trim().startsWith("*") ? /* @__PURE__ */ e("ul", { className: "list-disc list-inside space-y-2 ml-4", children: /* @__PURE__ */ e("li", { className: "text-slate-700", children: p.trim().substring(1).trim() }) }, g) : /* @__PURE__ */ e("p", { className: "text-slate-700", children: p }, g) : null) : /* @__PURE__ */ e("p", { className: "text-slate-700", children: d.content }) })
            ]
          },
          u
        )) }),
        i && /* @__PURE__ */ e("div", { className: "mt-8", children: i })
      ]
    }
  ) }) });
}, ot = ({
  features: r = [],
  variant: n = "default",
  // default, detailed, simple, compact, cards
  columns: l = 2,
  showIcon: a = !0,
  iconType: i = "check",
  // check, chevron, sparkle, custom
  customIcon: s,
  className: o = ""
}) => {
  if (!r || r.length === 0) return null;
  const c = () => {
    if (s) return s;
    switch (i) {
      case "check":
        return /* @__PURE__ */ e(de, { className: "w-5 h-5" });
      case "chevron":
        return /* @__PURE__ */ e(X, { className: "w-5 h-5" });
      case "sparkle":
        return /* @__PURE__ */ e(Pe, { className: "w-5 h-5" });
      default:
        return /* @__PURE__ */ e(de, { className: "w-5 h-5" });
    }
  }, m = {
    1: "grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4"
  };
  return n === "simple" ? /* @__PURE__ */ e("div", { className: `grid ${m[l]} gap-4 ${o}`, children: r.map((d, u) => {
    const p = d.title || d.text || d;
    return /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, x: -20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: !0 },
        transition: { duration: 0.5, delay: u * 0.05 },
        className: "flex items-start gap-3",
        children: [
          a && /* @__PURE__ */ e("div", { className: "mt-0.5 text-blue-600 flex-shrink-0", children: c() }),
          /* @__PURE__ */ e("span", { className: "text-slate-700", children: p })
        ]
      },
      u
    );
  }) }) : n === "compact" ? /* @__PURE__ */ e("div", { className: `space-y-2 ${o}`, children: r.map((d, u) => {
    const p = d.title || d.text || d;
    return /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, x: -20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: !0 },
        transition: { duration: 0.5, delay: u * 0.05 },
        className: "flex items-center gap-3 text-slate-700",
        children: [
          a && /* @__PURE__ */ e("div", { className: "text-blue-600 flex-shrink-0", children: c() }),
          /* @__PURE__ */ e("span", { children: p })
        ]
      },
      u
    );
  }) }) : n === "cards" ? /* @__PURE__ */ e("div", { className: `grid ${m[l]} gap-6 ${o}`, children: r.map((d, u) => /* @__PURE__ */ t(
    f.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0 },
      transition: { duration: 0.5, delay: u * 0.1 },
      className: "bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all",
      children: [
        a && /* @__PURE__ */ e("div", { className: "w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4", children: c() }),
        /* @__PURE__ */ e("h3", { className: "text-lg font-semibold mb-2 text-slate-900", children: d.title || d.text || d }),
        d.description && /* @__PURE__ */ e("p", { className: "text-slate-600 leading-relaxed", children: d.description }),
        d.details && d.details.length > 0 && /* @__PURE__ */ e("ul", { className: "mt-4 space-y-2", children: d.details.map((p, g) => /* @__PURE__ */ t("li", { className: "text-sm text-slate-600 flex items-start gap-2", children: [
          /* @__PURE__ */ e(X, { className: "w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" }),
          /* @__PURE__ */ e("span", { children: p })
        ] }, g)) })
      ]
    },
    u
  )) }) : /* @__PURE__ */ e("div", { className: `grid ${m[l]} gap-8 ${o}`, children: r.map((d, u) => /* @__PURE__ */ e(
    f.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0 },
      transition: { duration: 0.5, delay: u * 0.1 },
      className: "feature-item",
      children: /* @__PURE__ */ t("div", { className: "flex items-start gap-4", children: [
        a && /* @__PURE__ */ e("div", { className: "mt-1 text-blue-600 flex-shrink-0", children: /* @__PURE__ */ e("div", { className: "w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center", children: c() }) }),
        /* @__PURE__ */ t("div", { className: "flex-1", children: [
          /* @__PURE__ */ e("h3", { className: "text-lg font-semibold mb-2 text-slate-900", children: d.title || d.text || d }),
          d.description && /* @__PURE__ */ e("p", { className: "text-slate-600 leading-relaxed mb-3", children: d.description }),
          d.details && d.details.length > 0 && /* @__PURE__ */ e("ul", { className: "space-y-2", children: d.details.map((p, g) => /* @__PURE__ */ t("li", { className: "text-sm text-slate-600 flex items-start gap-2", children: [
            /* @__PURE__ */ e(X, { className: "w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" }),
            /* @__PURE__ */ e("span", { children: p })
          ] }, g)) })
        ] })
      ] })
    },
    u
  )) });
}, Nr = ({
  specifications: r = {},
  tables: n = [],
  variant: l = "default",
  // default, compact, detailed, cards
  className: a = ""
}) => {
  const i = () => !r || Object.keys(r).length === 0 ? null : l === "cards" ? /* @__PURE__ */ e("div", { className: "grid md:grid-cols-2 gap-6", children: Object.entries(r).map(([o, c], m) => /* @__PURE__ */ e(
    f.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0 },
      transition: { duration: 0.5, delay: m * 0.1 },
      className: "bg-white border border-slate-200 rounded-lg p-6",
      children: typeof c == "object" && c !== null ? /* @__PURE__ */ t(J, { children: [
        /* @__PURE__ */ e("h3", { className: "text-lg font-semibold mb-4 text-slate-900 capitalize", children: o.replace(/_/g, " ") }),
        /* @__PURE__ */ e("dl", { className: "space-y-2", children: Object.entries(c).map(([d, u]) => /* @__PURE__ */ t("div", { className: "flex justify-between gap-4", children: [
          /* @__PURE__ */ t("dt", { className: "text-slate-600 font-medium", children: [
            d,
            ":"
          ] }),
          /* @__PURE__ */ e("dd", { className: "text-slate-900 font-semibold text-right", children: u })
        ] }, d)) })
      ] }) : /* @__PURE__ */ t("div", { className: "flex justify-between items-center gap-4", children: [
        /* @__PURE__ */ t("dt", { className: "text-slate-600 font-medium capitalize", children: [
          o.replace(/_/g, " "),
          ":"
        ] }),
        /* @__PURE__ */ e("dd", { className: "text-slate-900 font-semibold", children: c })
      ] })
    },
    o
  )) }) : /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ e("table", { className: "w-full border-collapse", children: /* @__PURE__ */ e("tbody", { children: Object.entries(r).map(([o, c], m) => /* @__PURE__ */ t(
    f.tr,
    {
      initial: { opacity: 0, x: -20 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: !0 },
      transition: { duration: 0.5, delay: m * 0.05 },
      className: "border-b border-slate-200 hover:bg-slate-50",
      children: [
        /* @__PURE__ */ e("td", { className: "py-4 px-6 font-medium text-slate-700 capitalize bg-slate-50", children: o.replace(/_/g, " ") }),
        /* @__PURE__ */ e("td", { className: "py-4 px-6 text-slate-900", children: typeof c == "object" && c !== null ? /* @__PURE__ */ e("dl", { className: "space-y-1", children: Object.entries(c).map(([d, u]) => /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("span", { className: "font-medium", children: [
            d,
            ": "
          ] }),
          /* @__PURE__ */ e("span", { children: u })
        ] }, d)) }) : c })
      ]
    },
    o
  )) }) }) }), s = () => !n || n.length === 0 ? null : n.map((o, c) => /* @__PURE__ */ e(
    f.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: !0 },
      transition: { duration: 0.6 },
      className: `overflow-x-auto ${c > 0 ? "mt-8" : ""}`,
      children: /* @__PURE__ */ t("table", { className: "w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm", children: [
        o.headers && o.headers.length > 0 && /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: "bg-slate-900 text-white", children: o.headers.map((m, d) => /* @__PURE__ */ e(
          "th",
          {
            className: "py-4 px-6 text-left font-semibold",
            children: m
          },
          d
        )) }) }),
        /* @__PURE__ */ e("tbody", { children: o.rows && o.rows.map((m, d) => /* @__PURE__ */ e(
          f.tr,
          {
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.5, delay: d * 0.05 },
            className: "border-b border-slate-200 hover:bg-slate-50",
            children: m.map((u, p) => /* @__PURE__ */ e(
              "td",
              {
                className: `py-4 px-6 ${p === 0 ? "font-medium text-slate-900" : "text-slate-700"}`,
                children: u
              },
              p
            ))
          },
          d
        )) })
      ] })
    },
    c
  ));
  return /* @__PURE__ */ t("div", { className: a, children: [
    i(),
    s()
  ] });
}, wr = {
  hero: {
    primaryCtaLabel: "Request Quote",
    secondaryCtaLabel: "Download Technical Data"
  },
  overview: {
    fallbackTitle: "Product Overview"
  },
  benefits: {
    title: "Key Benefits",
    subtitle: null
  },
  specifications: {
    title: "Technical Specifications"
  },
  applications: {
    title: "Applications",
    subtitle: "Versatile solutions across multiple industries"
  },
  competitive: {
    fallbackTitle: "Competitive Advantage",
    subtitleTemplate: "See how {productName} compares to alternatives"
  },
  faqs: {
    title: "Frequently Asked Questions"
  },
  cta: {
    titleTemplate: "Ready to Experience {productName}?",
    subtitle: "Contact our team to learn more or request a quote",
    primaryButtonLabel: "Contact Sales",
    secondaryButtonLabel: "Technical Support"
  }
};
function Ct(r, n) {
  if (!n) return r;
  const l = { ...r };
  for (const a of Object.keys(n)) {
    const i = n[a], s = r[a];
    i && typeof i == "object" && !Array.isArray(i) && s && typeof s == "object" && !Array.isArray(s) ? l[a] = Ct(s, i) : l[a] = i;
  }
  return l;
}
function dt(r, n) {
  return typeof r != "string" ? r : r.replace(/\{(\w+)\}/g, (l, a) => {
    const i = n?.[a];
    return i == null ? "" : String(i);
  });
}
const ba = ({
  product: r,
  showHero: n = !0,
  showBenefits: l = !0,
  showSpecifications: a = !0,
  showApplications: i = !0,
  showComparison: s = !0,
  showCTA: o = !0,
  className: c = "",
  copy: m
}) => {
  if (!r) return null;
  const d = Ct(wr, m);
  return /* @__PURE__ */ t("div", { className: `product-page ${c}`, children: [
    n && /* @__PURE__ */ e("section", { className: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20", children: /* @__PURE__ */ e("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "max-w-4xl",
        children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ e("span", { className: "px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium", children: r.category }),
            r.status && /* @__PURE__ */ e("span", { className: `px-4 py-1.5 rounded-full text-sm font-medium ${r.status === "Commercial" ? "bg-green-500/20 border border-green-400/30 text-green-300" : "bg-amber-500/20 border border-amber-400/30 text-amber-300"}`, children: r.status })
          ] }),
          /* @__PURE__ */ e("h1", { className: "text-5xl md:text-6xl font-bold mb-4", children: r.name }),
          /* @__PURE__ */ e("p", { className: "text-xl md:text-2xl text-slate-300 mb-8", children: r.tagline }),
          /* @__PURE__ */ e("p", { className: "text-lg text-slate-400 mb-8 max-w-3xl", children: r.description }),
          r.keyMetrics && r.keyMetrics.length > 0 && /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-12", children: r.keyMetrics.map((u, p) => /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.2 + p * 0.1 },
              className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4",
              children: [
                /* @__PURE__ */ e("div", { className: "text-3xl font-bold text-blue-400 mb-1", children: u.value }),
                /* @__PURE__ */ e("div", { className: "text-sm text-slate-400", children: u.label })
              ]
            },
            p
          )) }),
          /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-4 mt-8", children: [
            /* @__PURE__ */ e(I, { variant: "primary", size: "lg", children: d.hero.primaryCtaLabel }),
            /* @__PURE__ */ e(I, { variant: "outline", size: "lg", children: d.hero.secondaryCtaLabel })
          ] })
        ]
      }
    ) }) }),
    r.overview && /* @__PURE__ */ e(
      Me,
      {
        title: r.overview.title || d.overview.fallbackTitle,
        content: r.overview.content,
        className: "bg-white"
      }
    ),
    l && r.benefits && r.benefits.length > 0 && /* @__PURE__ */ e("section", { className: "py-16 bg-slate-50", children: /* @__PURE__ */ t("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: d.benefits.title }),
      /* @__PURE__ */ e("p", { className: "text-lg text-slate-600 mb-12 max-w-3xl", children: d.benefits.subtitle ?? r.shortDescription }),
      /* @__PURE__ */ e(
        ot,
        {
          features: r.benefits,
          variant: "detailed",
          columns: 2
        }
      )
    ] }) }),
    r.howItWorks && r.howItWorks.subsections && /* @__PURE__ */ e(
      Me,
      {
        title: r.howItWorks.title,
        subsections: r.howItWorks.subsections,
        className: "bg-white"
      }
    ),
    a && r.specifications && /* @__PURE__ */ e("section", { className: "py-16 bg-slate-50", children: /* @__PURE__ */ t("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl font-bold mb-12", children: d.specifications.title }),
      /* @__PURE__ */ e(
        Nr,
        {
          specifications: r.specifications,
          tables: r.specTables
        }
      )
    ] }) }),
    i && r.applications && r.applications.length > 0 && /* @__PURE__ */ e("section", { className: "py-16 bg-white", children: /* @__PURE__ */ t("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: d.applications.title }),
      /* @__PURE__ */ e("p", { className: "text-lg text-slate-600 mb-12", children: d.applications.subtitle }),
      /* @__PURE__ */ e(
        ot,
        {
          features: r.applications.map((u) => ({ title: u })),
          variant: "simple",
          columns: 3
        }
      )
    ] }) }),
    s && r.competitive && r.competitive.tables && r.competitive.tables.length > 0 && /* @__PURE__ */ e("section", { className: "py-16 bg-slate-900 text-white", children: /* @__PURE__ */ t("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: r.competitive.title || d.competitive.fallbackTitle }),
      /* @__PURE__ */ e("p", { className: "text-lg text-slate-300 mb-12", children: dt(d.competitive.subtitleTemplate, { productName: r.name }) }),
      r.competitive.tables.map((u, p) => /* @__PURE__ */ e(
        st,
        {
          table: u,
          highlightProduct: r.name
        },
        p
      ))
    ] }) }),
    r.pricing && r.pricing.details && /* @__PURE__ */ e(
      Me,
      {
        title: r.pricing.title,
        content: r.pricing.details,
        className: "bg-slate-50",
        children: r.pricing.tables && r.pricing.tables.length > 0 && /* @__PURE__ */ e("div", { className: "mt-8", children: r.pricing.tables.map((u, p) => /* @__PURE__ */ e(
          st,
          {
            table: u
          },
          p
        )) })
      }
    ),
    r.faqs && r.faqs.length > 0 && /* @__PURE__ */ e("section", { className: "py-16 bg-white", children: /* @__PURE__ */ t("div", { className: "container mx-auto px-6 max-w-4xl", children: [
      /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl font-bold mb-12", children: d.faqs.title }),
      /* @__PURE__ */ e("div", { className: "space-y-6", children: r.faqs.map((u, p) => /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.5, delay: p * 0.1 },
          className: "border-b border-slate-200 pb-6",
          children: [
            /* @__PURE__ */ e("h3", { className: "text-lg font-semibold mb-2 text-slate-900", children: u.question }),
            /* @__PURE__ */ e("p", { className: "text-slate-600 leading-relaxed", children: u.answer })
          ]
        },
        p
      )) })
    ] }) }),
    o && /* @__PURE__ */ e("section", { className: "py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white", children: /* @__PURE__ */ e("div", { className: "container mx-auto px-6 text-center", children: /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: !0 },
        transition: { duration: 0.6 },
        className: "max-w-3xl mx-auto",
        children: [
          /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: dt(d.cta.titleTemplate, { productName: r.name }) }),
          /* @__PURE__ */ e("p", { className: "text-xl mb-8 text-blue-100", children: d.cta.subtitle }),
          /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-4 justify-center", children: [
            /* @__PURE__ */ e(I, { variant: "white", size: "lg", children: d.cta.primaryButtonLabel }),
            /* @__PURE__ */ e(I, { variant: "outline-white", size: "lg", children: d.cta.secondaryButtonLabel })
          ] })
        ]
      }
    ) }) })
  ] });
}, yr = ({ title: r, subtitle: n, category: l, transparent: a = !1 }) => /* @__PURE__ */ e("section", { className: `pt-40 pb-16 px-6 border-b ${a ? "border-neutral-200 bg-transparent" : "border-neutral-900 bg-black/10"}`, children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ t(
  f.div,
  {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    children: [
      l && /* @__PURE__ */ e("span", { className: "inline-block py-1 px-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-medium mb-6 tracking-wide uppercase", children: l }),
      /* @__PURE__ */ e("h1", { className: "text-4xl md:text-5xl font-display font-medium text-white mb-6", children: r }),
      /* @__PURE__ */ e("p", { className: "text-lg text-neutral-400 max-w-2xl leading-relaxed", children: n })
    ]
  }
) }) }), ga = ({ product: r }) => {
  const l = {
    graphacrete: {
      name: "Graphacrete",
      tagline: "vs Traditional Concrete Admixtures",
      color: "from-orange-500 to-red-600",
      competitors: ["Graphacrete", "UltraTech Admixture", "Sika Admixture", "PureGraph"],
      metrics: [
        {
          name: "Compressive Strength Gain",
          values: ["40-50%", "5-15%", "8-15%", "10-25%"],
          winner: 0
        },
        {
          name: "Cement Saving",
          values: ["15-20%", "0%", "0%", "3-5%"],
          winner: 0
        },
        {
          name: "Water Resistance Improvement",
          values: ["30-45%", "<10%", "10-20%", "20-30%"],
          winner: 0
        },
        {
          name: "Dosage Required",
          values: ["0.05-0.10%", "0.2-1.0%", "0.2-1.0%", "0.2-0.5%"],
          winner: 0,
          unit: "by weight of cement",
          lower: !0
        },
        {
          name: "Micro-Crack Control",
          values: ["Excellent", "Low", "Medium", "Medium"],
          winner: 0
        },
        {
          name: "Environmental Benefit",
          values: ["15-20% CO₂ reduction", "None", "None", "Minimal"],
          winner: 0
        }
      ],
      advantage: "Only solution offering strength + durability + waterproofing + micro-crack control + cement reduction in a single product"
    },
    graffisol: {
      name: "Graffisol",
      tagline: "vs Solar Panel Coatings",
      color: "from-blue-500 to-cyan-600",
      competitors: ["Graffisol", "KhepriCoat", "DSM Coating", "Borosil Coating"],
      metrics: [
        {
          name: "Power Output Gain",
          values: ["7-8%", "2-3%", "~3%", "0%"],
          winner: 0,
          unit: "real-world"
        },
        {
          name: "Operating Temp Reduction",
          values: ["5-6°C", "Not specified", "Not specified", "Not specified"],
          winner: 0
        },
        {
          name: "Soiling Loss Reduction",
          values: ["30-40%", "Not specified", "Not specified", "Not specified"],
          winner: 0
        },
        {
          name: "Light Transmission",
          values: [">98%", "Not specified", "Not specified", ">94%"],
          winner: 0
        },
        {
          name: "UV Protection",
          values: ["Extended panel life", "Durability testing", "Reduced maintenance", "Not specified"],
          winner: 0
        },
        {
          name: "ROI Payback",
          values: ["18 months", "Not specified", "Not specified", "Not specified"],
          winner: 0,
          lower: !0
        }
      ],
      advantage: "Highest efficiency gain in the market (7-8% real-world) with triple benefits: efficiency + thermal management + surface protection"
    },
    ceraphene: {
      name: "Ceraphene",
      tagline: "vs Premium Ceramic Coatings",
      color: "from-purple-500 to-pink-600",
      competitors: ["Ceraphene", "Gtechniq CSL/CSU", "CarPro CQuartz", "Ceramic Pro 9H"],
      metrics: [
        {
          name: "Graphene-Enhanced",
          values: ["Yes", "No", "No", "No"],
          winner: 0
        },
        {
          name: "Durability",
          values: ["3-4+ years", "2-3+ years", "1.5-2.5 years", "Up to 5 years"],
          winner: 0
        },
        {
          name: "Hardness",
          values: ["9H+", "9H", "9H", "9H"],
          winner: 0
        },
        {
          name: "Price (50ml)",
          values: ["₹5,000", "₹15,000", "₹12,000", "₹18,000"],
          winner: 0,
          lower: !0
        },
        {
          name: "Cost Advantage",
          values: ["60-70% lower", "Standard", "Standard", "Premium"],
          winner: 0
        },
        {
          name: "Cost Per Protection Year",
          values: ["Lowest", "Medium", "Medium", "High"],
          winner: 0,
          lower: !0
        }
      ],
      advantage: "Only graphene-enhanced formulation at this price point—premium performance at ceramic-only pricing"
    },
    hdgpe: {
      name: "HD-G-PE",
      tagline: "vs Standard HDPE Additives",
      color: "from-green-500 to-emerald-600",
      competitors: ["HD-G-PE", "Standard HDPE", "Basic Enhancer", "Premium Additive"],
      metrics: [
        {
          name: "Elongation Improvement",
          values: ["20×", "Baseline", "2-3×", "5-8×"],
          winner: 0
        },
        {
          name: "Tensile Strength Gain",
          values: ["+30%", "0%", "+10%", "+15-20%"],
          winner: 0
        },
        {
          name: "Product Lifespan Increase",
          values: ["+20%", "0%", "+5%", "+10%"],
          winner: 0
        },
        {
          name: "UV Stability",
          values: ["Superior", "Standard", "Good", "Good"],
          winner: 0
        },
        {
          name: "Crack Resistance",
          values: ["Excellent", "Standard", "Improved", "Improved"],
          winner: 0
        },
        {
          name: "Process Compatibility",
          values: ["Drop-in", "N/A", "Minimal changes", "Some changes"],
          winner: 0
        }
      ],
      advantage: "Massive 20× elongation strength improvement—unmatched in the industry for HDPE enhancement"
    }
  }[r];
  return l ? /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-white border-b border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ t("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6", children: [
        /* @__PURE__ */ e(ue, { className: "w-4 h-4 text-green-600" }),
        /* @__PURE__ */ e("span", { className: "text-sm font-bold text-green-700 uppercase tracking-wide", children: "Competitive Advantage" })
      ] }),
      /* @__PURE__ */ e("h2", { className: "text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-6", children: "See How We Compare" }),
      /* @__PURE__ */ e("p", { className: "text-xl text-neutral-600 max-w-3xl mx-auto font-light", children: "Direct, metric-by-metric comparison with leading competitors. We win on every measure that matters." })
    ] }),
    /* @__PURE__ */ t("div", { children: [
      /* @__PURE__ */ t("div", { className: `bg-gradient-to-br ${l.color} text-white rounded-t-2xl p-8`, children: [
        /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-bold mb-2", children: l.name }),
        /* @__PURE__ */ e("p", { className: "text-xl opacity-90", children: l.tagline })
      ] }),
      /* @__PURE__ */ t("div", { className: "bg-white border-2 border-neutral-200 rounded-b-2xl overflow-x-auto", children: [
        /* @__PURE__ */ t("div", { className: "grid grid-cols-5 gap-2 md:gap-4 p-4 md:p-6 bg-neutral-50 border-b border-neutral-200 font-bold text-xs md:text-sm", children: [
          /* @__PURE__ */ e("div", { children: "Performance Metric" }),
          l.competitors.map((a, i) => /* @__PURE__ */ t("div", { className: i === 0 ? "text-green-600" : "text-neutral-600", children: [
            a,
            i === 0 && " ✓"
          ] }, i))
        ] }),
        l.metrics.map((a, i) => /* @__PURE__ */ t(
          "div",
          {
            className: "grid grid-cols-5 gap-2 md:gap-4 p-4 md:p-6 border-b border-neutral-200 hover:bg-neutral-50 transition-colors items-center",
            children: [
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ e("div", { className: "font-bold text-neutral-900", children: a.name }),
                a.unit && /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 mt-1 font-light", children: a.unit })
              ] }),
              a.values.map((s, o) => {
                const c = o === a.winner, m = o !== a.winner && s !== "Not specified" && s !== "N/A";
                return /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                  c && /* @__PURE__ */ e(C, { className: "w-5 h-5 text-green-600 flex-shrink-0" }),
                  m && /* @__PURE__ */ e(ne, { className: "w-5 h-5 text-neutral-300 flex-shrink-0" }),
                  /* @__PURE__ */ e("span", { className: `${c ? "font-bold text-green-600 text-lg" : s === "Not specified" ? "text-neutral-400 italic text-sm" : "text-neutral-600"}`, children: s })
                ] }, o);
              })
            ]
          },
          i
        ))
      ] }),
      /* @__PURE__ */ e("div", { className: "mt-8 p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl", children: /* @__PURE__ */ t("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ e("div", { className: "p-3 bg-green-500 rounded-full flex-shrink-0", children: /* @__PURE__ */ e(A, { className: "w-6 h-6 text-white" }) }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("h4", { className: "text-xl font-display font-bold text-neutral-900 mb-3", children: [
            "Why ",
            l.name,
            " is Superior"
          ] }),
          /* @__PURE__ */ e("p", { className: "text-neutral-700 leading-relaxed text-lg font-light", children: l.advantage })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ t("div", { className: "mt-16 grid grid-cols-1 md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ t("div", { className: "text-center p-8 bg-neutral-900 text-white rounded-2xl", children: [
        /* @__PURE__ */ e("div", { className: "text-5xl font-display font-bold mb-2", children: "100%" }),
        /* @__PURE__ */ e("div", { className: "text-neutral-300 font-light", children: "Win Rate on Key Metrics" })
      ] }),
      /* @__PURE__ */ t("div", { className: "text-center p-8 bg-neutral-900 text-white rounded-2xl", children: [
        /* @__PURE__ */ e("div", { className: "text-5xl font-display font-bold mb-2", children: "NABL" }),
        /* @__PURE__ */ e("div", { className: "text-neutral-300 font-light", children: "Certified Performance Data" })
      ] }),
      /* @__PURE__ */ t("div", { className: "text-center p-8 bg-neutral-900 text-white rounded-2xl", children: [
        /* @__PURE__ */ e("div", { className: "text-5xl font-display font-bold mb-2", children: "Field" }),
        /* @__PURE__ */ e("div", { className: "text-neutral-300 font-light", children: "Tested in Real Applications" })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "text-center mt-16", children: [
      /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-neutral-900 mb-4", children: "Ready to Switch to Superior Performance?" }),
      /* @__PURE__ */ e("p", { className: "text-neutral-600 mb-8 font-light", children: "Download detailed comparison reports with full performance data" }),
      /* @__PURE__ */ e(v, { to: "/contact", children: /* @__PURE__ */ e(I, { variant: "primary", theme: "light", children: "Download Comparison Report" }) })
    ] })
  ] }) }) : null;
}, xa = ({ product: r }) => {
  const n = [
    {
      industry: "Infrastructure & Construction",
      icon: ft,
      color: "from-blue-500 to-cyan-600",
      title: "Infrastructure Giant Reduces Cement by 18%",
      company: "Leading Indian Infrastructure Developer",
      challenge: "Rising cement costs and sustainability goals required material innovation without compromising structural strength.",
      solution: "Deployed Graphacrete (M50 grade) in 15,000 m³ of structural concrete across 3 high-rise projects.",
      results: [
        { metric: "18%", label: "Cement Reduction", icon: A },
        { metric: "₹64.5L", label: "Total Savings", icon: C },
        { metric: "230 tons", label: "CO₂ Prevented", icon: C },
        { metric: "35% faster", label: "Curing Time", icon: C }
      ],
      quote: "Graphacrete delivered M50 performance at M40 cement dosage. The cost savings and environmental benefits made it an easy decision.",
      role: "Chief Materials Engineer",
      product: "graphacrete"
    },
    {
      industry: "Solar Energy",
      icon: Ie,
      color: "from-orange-500 to-red-600",
      title: "Solar Farm Achieves 8.2% Output Gain",
      company: "250 MW Solar Installation, Rajasthan",
      challenge: "Desert dust accumulation reduced panel efficiency by 12-15%, requiring frequent costly cleaning operations.",
      solution: "Applied Graffisol nano-coating to 800,000+ solar panels with automated spray system.",
      results: [
        { metric: "8.2%", label: "Output Increase", icon: A },
        { metric: "18 months", label: "Payback Period", icon: C },
        { metric: "85%", label: "Cleaning Reduction", icon: C },
        { metric: "₹2.4Cr/yr", label: "Revenue Gain", icon: C }
      ],
      quote: "The hydrophobic coating keeps panels clean in harsh desert conditions. We're seeing consistent 8%+ gains across the entire farm.",
      role: "Operations Director",
      product: "graffisol"
    },
    {
      industry: "Automotive Manufacturing",
      icon: ze,
      color: "from-purple-500 to-pink-600",
      title: "Automotive Coating - 70% Cost Reduction",
      company: "Tier-1 Auto Component Manufacturer",
      challenge: "Premium ceramic coatings were too expensive for mass production. Needed high-temperature resistance at lower cost.",
      solution: "Switched to Ceraphene for thermal barrier coating on exhaust components and engine parts.",
      results: [
        { metric: "70%", label: "Cost Reduction", icon: A },
        { metric: "1200°C", label: "Heat Resistance", icon: C },
        { metric: "5 years", label: "Durability", icon: C },
        { metric: "100%", label: "Quality Maintained", icon: C }
      ],
      quote: "Ceraphene matches premium ceramic performance at a fraction of the cost. It's transformed our coating economics.",
      role: "VP Manufacturing",
      product: "ceraphene"
    }
  ], l = r ? n.filter((a) => a.product === r) : n;
  return /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-gradient-to-b from-white to-neutral-50 border-b border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ t("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6", children: [
        /* @__PURE__ */ e(C, { className: "w-4 h-4 text-green-600" }),
        /* @__PURE__ */ e("span", { className: "text-sm font-bold text-green-700 uppercase tracking-wide", children: "Proven Results" })
      ] }),
      /* @__PURE__ */ e("h2", { className: "text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-6", children: "Real Stories, Real Numbers" }),
      /* @__PURE__ */ e("p", { className: "text-xl text-neutral-600 max-w-3xl mx-auto font-light", children: "See how industry leaders are achieving measurable results with our graphene nano-platelets" })
    ] }),
    /* @__PURE__ */ e("div", { className: "space-y-12", children: l.map((a, i) => {
      const s = a.icon;
      return /* @__PURE__ */ e(
        "div",
        {
          className: "bg-white border-2 border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-900 hover:shadow-2xl transition-all",
          children: /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-0", children: [
            /* @__PURE__ */ t("div", { className: `bg-gradient-to-br ${a.color} text-white p-10 flex flex-col justify-between`, children: [
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-6", children: [
                  /* @__PURE__ */ e("div", { className: "p-3 bg-white/20 rounded-lg", children: /* @__PURE__ */ e(s, { className: "w-8 h-8" }) }),
                  /* @__PURE__ */ e("div", { className: "text-sm font-bold opacity-90 uppercase tracking-wide", children: a.industry })
                ] }),
                /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-bold mb-4 leading-tight", children: a.title }),
                /* @__PURE__ */ e("div", { className: "text-sm opacity-90 mb-6", children: a.company })
              ] }),
              /* @__PURE__ */ t("div", { className: "border-t border-white/20 pt-6", children: [
                /* @__PURE__ */ e("div", { className: "text-sm font-bold mb-2 uppercase tracking-wide", children: "The Challenge" }),
                /* @__PURE__ */ e("p", { className: "text-sm opacity-90 leading-relaxed font-light", children: a.challenge })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "lg:col-span-2 p-10", children: [
              /* @__PURE__ */ t("div", { className: "mb-8", children: [
                /* @__PURE__ */ e("h4", { className: "text-sm font-bold text-neutral-500 mb-3 uppercase tracking-wide", children: "The Solution" }),
                /* @__PURE__ */ e("p", { className: "text-neutral-700 leading-relaxed font-light", children: a.solution })
              ] }),
              /* @__PURE__ */ t("div", { className: "mb-8", children: [
                /* @__PURE__ */ e("h4", { className: "text-sm font-bold text-neutral-500 mb-4 uppercase tracking-wide", children: "The Results" }),
                /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: a.results.map((o, c) => {
                  const m = o.icon;
                  return /* @__PURE__ */ t("div", { className: "bg-neutral-50 border border-neutral-200 rounded-lg p-4 hover:border-neutral-900 transition-all", children: [
                    /* @__PURE__ */ e(m, { className: "w-5 h-5 text-green-600 mb-2" }),
                    /* @__PURE__ */ e("div", { className: "text-2xl font-display font-bold text-neutral-900 mb-1", children: o.metric }),
                    /* @__PURE__ */ e("div", { className: "text-xs text-neutral-600 font-light", children: o.label })
                  ] }, c);
                }) })
              ] }),
              /* @__PURE__ */ t("div", { className: "bg-neutral-900 text-white rounded-xl p-6 relative", children: [
                /* @__PURE__ */ e("div", { className: "text-6xl absolute top-4 left-4 opacity-20 font-serif", children: '"' }),
                /* @__PURE__ */ e("p", { className: "text-lg italic mb-4 relative z-10 pl-8 font-light", children: a.quote }),
                /* @__PURE__ */ t("div", { className: "text-sm opacity-80 pl-8 font-light", children: [
                  "— ",
                  a.role
                ] })
              ] })
            ] })
          ] })
        },
        i
      );
    }) }),
    /* @__PURE__ */ t("div", { className: "mt-16 text-center bg-neutral-900 text-white rounded-2xl p-12", children: [
      /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-bold mb-4", children: "Want Similar Results?" }),
      /* @__PURE__ */ e("p", { className: "text-neutral-300 mb-8 max-w-2xl mx-auto font-light", children: "Every application is unique. Let's discuss how graphene nano-platelets can deliver measurable ROI for your specific requirements." }),
      /* @__PURE__ */ t("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ e(v, { to: "/contact", children: /* @__PURE__ */ t("button", { className: "bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-neutral-200 transition-all inline-flex items-center gap-2", children: [
          /* @__PURE__ */ e(Re, { className: "w-5 h-5" }),
          "Download Full Case Studies"
        ] }) }),
        /* @__PURE__ */ e(v, { to: "/contact", children: /* @__PURE__ */ t("button", { className: "border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all inline-flex items-center gap-2", children: [
          /* @__PURE__ */ e(G, { className: "w-5 h-5" }),
          "Schedule Consultation"
        ] }) })
      ] })
    ] })
  ] }) });
}, fa = () => {
  const r = [
    {
      icon: Be,
      name: "Hydrogen Separation",
      description: "High-selectivity graphene membranes for efficient hydrogen production",
      status: "Field Trials",
      color: "blue",
      link: "/products/pipeline/hydrogen-membranes"
    },
    {
      icon: qt,
      name: "Seawater Desalination",
      description: "Ultra-thin membranes for low-energy water purification",
      status: "Field Trials",
      color: "cyan",
      link: "/products/pipeline/desalination-membranes"
    },
    {
      icon: he,
      name: "Atmospheric Harvesting",
      description: "Converting air into potable water efficiently",
      status: "Field Trials",
      color: "teal",
      link: "/products/pipeline/atmospheric-harvesting"
    },
    {
      icon: Ue,
      name: "Graphene Glass Fibres",
      description: "Enhanced composites for structural applications",
      status: "Field Trials",
      color: "purple",
      link: "/products/pipeline/graphene-glass-fibres"
    },
    {
      icon: _t,
      name: "Graphene Battery Storage",
      description: "Higher power density with extended lifecycle",
      status: "Field Trials",
      color: "amber",
      link: "/products/pipeline/battery-storage"
    }
  ], n = (l) => {
    const a = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-100",
        text: "text-blue-600",
        icon: "text-blue-600",
        hoverBorder: "group-hover:border-blue-300",
        badge: "bg-blue-100 text-blue-700 border-blue-200"
      },
      cyan: {
        bg: "bg-cyan-50",
        border: "border-cyan-100",
        text: "text-cyan-600",
        icon: "text-cyan-600",
        hoverBorder: "group-hover:border-cyan-300",
        badge: "bg-cyan-100 text-cyan-700 border-cyan-200"
      },
      teal: {
        bg: "bg-teal-50",
        border: "border-teal-100",
        text: "text-teal-600",
        icon: "text-teal-600",
        hoverBorder: "group-hover:border-teal-300",
        badge: "bg-teal-100 text-teal-700 border-teal-200"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-100",
        text: "text-purple-600",
        icon: "text-purple-600",
        hoverBorder: "group-hover:border-purple-300",
        badge: "bg-purple-100 text-purple-700 border-purple-200"
      },
      amber: {
        bg: "bg-amber-50",
        border: "border-amber-100",
        text: "text-amber-600",
        icon: "text-amber-600",
        hoverBorder: "group-hover:border-amber-300",
        badge: "bg-amber-100 text-amber-700 border-amber-200"
      }
    };
    return a[l] || a.blue;
  };
  return /* @__PURE__ */ e("section", { className: "bg-white text-neutral-900 py-24 px-6 border-b border-neutral-100", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ t("div", { className: "text-center mb-20", children: [
      /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-6", children: [
        /* @__PURE__ */ e(Ve, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ e("span", { children: "Pilot-Scale Technologies" })
      ] }),
      /* @__PURE__ */ e("h2", { className: "text-4xl md:text-5xl font-display font-medium mb-6 text-neutral-900", children: "Field Trials Advancing to Market" }),
      /* @__PURE__ */ e("p", { className: "text-xl text-neutral-500 max-w-3xl mx-auto font-light leading-relaxed", children: "Five breakthrough technologies in real-world field testing, moving from pilot to commercial scale." })
    ] }),
    /* @__PURE__ */ t("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16", children: [
      r.map((l, a) => {
        const i = l.icon, s = n(l.color);
        return /* @__PURE__ */ t(
          v,
          {
            to: l.link,
            className: `bg-white border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group ${s.hoverBorder} border-neutral-200`,
            children: [
              /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-8", children: [
                /* @__PURE__ */ e("div", { className: `p-3 rounded-xl ${s.bg} ${s.border} border`, children: /* @__PURE__ */ e(i, { className: `w-8 h-8 ${s.icon}`, strokeWidth: 1.5 }) }),
                /* @__PURE__ */ e("span", { className: `px-2.5 py-1 rounded text-[10px] font-bold border uppercase tracking-wider ${s.badge}`, children: l.status })
              ] }),
              /* @__PURE__ */ e("h3", { className: "text-xl font-bold mb-3 text-neutral-900 group-hover:text-blue-700 transition-colors", children: l.name }),
              /* @__PURE__ */ e("p", { className: "text-neutral-500 leading-relaxed font-light text-sm mb-6 min-h-[40px]", children: l.description }),
              /* @__PURE__ */ t("div", { className: "flex items-center text-sm font-medium text-neutral-400 group-hover:text-blue-600 transition-colors", children: [
                /* @__PURE__ */ e("span", { children: "Learn more" }),
                /* @__PURE__ */ e(S, { className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" })
              ] })
            ]
          },
          a
        );
      }),
      /* @__PURE__ */ t("div", { className: "bg-neutral-50 border border-dashed border-neutral-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-blue-50/50 hover:border-blue-200 transition-all group", children: [
        /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-white rounded-full border border-neutral-200 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform", children: /* @__PURE__ */ e(S, { className: "w-5 h-5 text-neutral-400 group-hover:text-blue-500" }) }),
        /* @__PURE__ */ e("h3", { className: "text-xl font-bold mb-2 text-neutral-900", children: "Want to see more?" }),
        /* @__PURE__ */ e("p", { className: "text-neutral-500 mb-6 font-light text-sm", children: "Explore our complete pilot technology data and validation reports." }),
        /* @__PURE__ */ e(v, { to: "/contact", children: /* @__PURE__ */ e(I, { variant: "secondary", className: "text-sm", children: "Contact R&D Team" }) })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "bg-neutral-50 border border-neutral-100 rounded-2xl p-8 md:p-12 text-center", children: [
      /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium mb-4 text-neutral-900", children: "From Lab Prototype to Industrial Scale" }),
      /* @__PURE__ */ e("p", { className: "text-lg text-neutral-500 max-w-4xl mx-auto font-light leading-relaxed", children: "Each pilot technology undergoes rigorous field testing and validation before commercialization. We ensure every innovation can scale from prototype to mass manufacturing with proven performance." })
    ] })
  ] }) });
}, ct = {
  pageHeader: {
    title: "Contact Monoatom Labs",
    subtitle: "Let’s route your inquiry to the right expert."
  },
  pageHeaderCategory: "Connect"
}, Le = ({ icon: r, title: n, content: l, href: a, subtext: i }) => /* @__PURE__ */ t("div", { className: "group p-8 bg-white border border-neutral-200 rounded-2xl hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 h-full", children: [
  /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-50 group-hover:border-blue-100", children: /* @__PURE__ */ e(r, { className: "w-6 h-6 text-neutral-600 group-hover:text-blue-600 transition-colors", strokeWidth: 1.5 }) }),
  /* @__PURE__ */ e("h3", { className: "text-xl font-display font-medium text-neutral-900 mb-2", children: n }),
  a ? /* @__PURE__ */ e("a", { href: a, className: "text-lg text-neutral-600 hover:text-blue-600 transition-colors font-medium block mb-1", children: l }) : /* @__PURE__ */ e("p", { className: "text-lg text-neutral-600 leading-relaxed max-w-xs font-medium mb-1", children: l }),
  i && /* @__PURE__ */ e("p", { className: "text-sm text-neutral-400", children: i })
] }), je = ({ question: r, answer: n }) => /* @__PURE__ */ t("div", { className: "mb-6 last:mb-0", children: [
  /* @__PURE__ */ t("h4", { className: "font-bold text-neutral-900 mb-2 flex items-start gap-2", children: [
    /* @__PURE__ */ e(De, { className: "w-4 h-4 text-blue-500 mt-1 shrink-0" }),
    r
  ] }),
  /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 leading-relaxed pl-6", children: n })
] });
function kr(r) {
  return r ? typeof r == "string" ? r : r.full || [r.line1, r.line2, r.line3].filter(Boolean).join(", ") : "";
}
const va = ({ copy: r, contact: n }) => {
  const l = {
    ...ct,
    ...r || {},
    pageHeader: { ...ct.pageHeader, ...r?.pageHeader || {} }
  }, a = n?.email || "", i = n?.phone || "", s = kr(n?.address), [o, c] = L("idle"), m = (d) => {
    d.preventDefault(), c("submitting"), setTimeout(() => {
      c("success");
    }, 1500);
  };
  return /* @__PURE__ */ t("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ e(
      yr,
      {
        category: l.pageHeaderCategory,
        title: l.pageHeader.title,
        subtitle: l.pageHeader.subtitle
      }
    ),
    /* @__PURE__ */ t("div", { className: "bg-white border-t border-neutral-200 relative z-10", children: [
      /* @__PURE__ */ e("section", { className: "py-24 px-6", children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-32 relative z-20", children: [
        /* @__PURE__ */ e(
          Le,
          {
            icon: ke,
            title: "Email Us",
            content: a,
            href: a ? `mailto:${a}` : void 0,
            subtext: "Response within 24 hours"
          }
        ),
        /* @__PURE__ */ e(
          Le,
          {
            icon: G,
            title: "Call Us",
            content: i,
            href: i ? `tel:${i}` : void 0,
            subtext: "Mon-Fri, 9am - 6pm IST"
          }
        ),
        /* @__PURE__ */ e(
          Le,
          {
            icon: vt,
            title: "Visit HQ",
            content: s,
            subtext: "Ahmedabad, Gujarat, India"
          }
        )
      ] }) }) }),
      /* @__PURE__ */ e("section", { className: "py-12 px-6 border-b border-neutral-100", children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ t("div", { className: "grid lg:grid-cols-2 gap-16 items-start", children: [
        /* @__PURE__ */ t("div", { className: "bg-neutral-50 rounded-3xl p-8 md:p-12 border border-neutral-200", children: [
          /* @__PURE__ */ e("h2", { className: "text-3xl font-display font-medium text-neutral-900 mb-2", children: "Send us a Message" }),
          /* @__PURE__ */ e("p", { className: "text-neutral-500 mb-8 font-light", children: "Fill out the form below and we'll route your inquiry to the right expert." }),
          o === "success" ? /* @__PURE__ */ t("div", { className: "bg-green-50 border border-green-200 rounded-xl p-8 text-center", children: [
            /* @__PURE__ */ e("div", { className: "w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ e(C, { className: "w-8 h-8" }) }),
            /* @__PURE__ */ e("h3", { className: "text-xl font-bold text-green-800 mb-2", children: "Message Sent!" }),
            /* @__PURE__ */ e("p", { className: "text-green-700", children: "Thank you for contacting Monoatom Labs. We will be in touch shortly." }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => c("idle"),
                className: "mt-6 text-sm font-bold text-green-800 underline",
                children: "Send another message"
              }
            )
          ] }) : /* @__PURE__ */ t("form", { onSubmit: m, className: "space-y-6", children: [
            /* @__PURE__ */ t("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ t("div", { className: "space-y-2", children: [
                /* @__PURE__ */ e("label", { className: "text-xs font-bold text-neutral-500 uppercase tracking-wider", children: "Full Name" }),
                /* @__PURE__ */ t("div", { className: "relative", children: [
                  /* @__PURE__ */ e(bt, { className: "absolute top-3.5 left-4 w-5 h-5 text-neutral-400" }),
                  /* @__PURE__ */ e(
                    "input",
                    {
                      type: "text",
                      required: !0,
                      className: "w-full bg-white border border-neutral-200 rounded-xl py-3 pl-12 pr-4 text-neutral-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
                      placeholder: "John Doe"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "space-y-2", children: [
                /* @__PURE__ */ e("label", { className: "text-xs font-bold text-neutral-500 uppercase tracking-wider", children: "Organization" }),
                /* @__PURE__ */ t("div", { className: "relative", children: [
                  /* @__PURE__ */ e(Ut, { className: "absolute top-3.5 left-4 w-5 h-5 text-neutral-400" }),
                  /* @__PURE__ */ e(
                    "input",
                    {
                      type: "text",
                      className: "w-full bg-white border border-neutral-200 rounded-xl py-3 pl-12 pr-4 text-neutral-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
                      placeholder: "Company Name"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e("label", { className: "text-xs font-bold text-neutral-500 uppercase tracking-wider", children: "Email Address" }),
              /* @__PURE__ */ t("div", { className: "relative", children: [
                /* @__PURE__ */ e(ke, { className: "absolute top-3.5 left-4 w-5 h-5 text-neutral-400" }),
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "email",
                    required: !0,
                    className: "w-full bg-white border border-neutral-200 rounded-xl py-3 pl-12 pr-4 text-neutral-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
                    placeholder: "john@company.com"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e("label", { className: "text-xs font-bold text-neutral-500 uppercase tracking-wider", children: "Nature of Inquiry" }),
              /* @__PURE__ */ t("div", { className: "relative", children: [
                /* @__PURE__ */ e(Nt, { className: "absolute top-3.5 left-4 w-5 h-5 text-neutral-400" }),
                /* @__PURE__ */ t("select", { className: "w-full bg-white border border-neutral-200 rounded-xl py-3 pl-12 pr-4 text-neutral-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none", children: [
                  /* @__PURE__ */ e("option", { children: "Product Inquiry" }),
                  /* @__PURE__ */ e("option", { children: "Partnership / JV" }),
                  /* @__PURE__ */ e("option", { children: "Technical Support" }),
                  /* @__PURE__ */ e("option", { children: "Investment" }),
                  /* @__PURE__ */ e("option", { children: "Other" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e("label", { className: "text-xs font-bold text-neutral-500 uppercase tracking-wider", children: "Message" }),
              /* @__PURE__ */ e(
                "textarea",
                {
                  required: !0,
                  rows: 4,
                  className: "w-full bg-white border border-neutral-200 rounded-xl p-4 text-neutral-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all",
                  placeholder: "How can we help you today?"
                }
              )
            ] }),
            /* @__PURE__ */ e(
              I,
              {
                type: "submit",
                variant: "primary",
                className: "w-full justify-center py-4 text-base",
                disabled: o === "submitting",
                children: o === "submitting" ? "Sending..." : "Send Message"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("div", { className: "mb-12", children: [
            /* @__PURE__ */ e("h3", { className: "text-xl font-display font-medium text-neutral-900 mb-6", children: "Frequently Asked Questions" }),
            /* @__PURE__ */ t("div", { className: "space-y-6", children: [
              /* @__PURE__ */ e(
                je,
                {
                  question: "What is your typical lead time for product samples?",
                  answer: "Standard samples are dispatched within 3-5 business days. Custom formulations may take 2-3 weeks depending on complexity."
                }
              ),
              /* @__PURE__ */ e(
                je,
                {
                  question: "Do you offer technical support for integration?",
                  answer: "Yes, our application engineering team provides full support to integrate our additives into your existing production lines."
                }
              ),
              /* @__PURE__ */ e(
                je,
                {
                  question: "Are your products certified?",
                  answer: "Yes, our core products like Graphacrete are NABL certified. Detailed MSDS and TDS are available upon request."
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "bg-blue-50 rounded-2xl p-8 border border-blue-100", children: [
            /* @__PURE__ */ t("h3", { className: "text-lg font-bold text-blue-900 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ e(ht, { className: "w-5 h-5" }),
              "Business Hours"
            ] }),
            /* @__PURE__ */ t("div", { className: "space-y-2 text-blue-800", children: [
              /* @__PURE__ */ t("div", { className: "flex justify-between border-b border-blue-200 pb-2", children: [
                /* @__PURE__ */ e("span", { children: "Monday - Friday" }),
                /* @__PURE__ */ e("span", { className: "font-medium", children: "9:00 AM - 6:00 PM IST" })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex justify-between border-b border-blue-200 pb-2", children: [
                /* @__PURE__ */ e("span", { children: "Saturday" }),
                /* @__PURE__ */ e("span", { className: "font-medium", children: "10:00 AM - 2:00 PM IST" })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ e("span", { children: "Sunday" }),
                /* @__PURE__ */ e("span", { className: "font-medium", children: "Closed" })
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "mt-4 text-xs text-blue-600", children: "* We typically respond to email inquiries within 24 hours, even on weekends." })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-neutral-50", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ t("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
          /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase mb-6", children: [
            /* @__PURE__ */ e(wt, { className: "w-3 h-3" }),
            "Strategic Collaboration"
          ] }),
          /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl font-display font-medium text-neutral-900 mb-6", children: "Engagement Models" }),
          /* @__PURE__ */ e("p", { className: "text-lg text-neutral-500 font-light", children: "We offer flexible partnership structures designed to accelerate commercialization and maximize value." })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ t("div", { className: "bg-white p-10 rounded-3xl border border-neutral-200 shadow-sm hover:border-blue-200 hover:shadow-lg transition-all duration-300 group", children: [
            /* @__PURE__ */ e("div", { className: "w-14 h-14 bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-8 rounded-2xl group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors", children: /* @__PURE__ */ e(_e, { className: "w-7 h-7 text-neutral-700 group-hover:text-blue-600 transition-colors", strokeWidth: 1.5 }) }),
            /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium text-neutral-900 mb-4", children: "JV – SPV Model" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-500 mb-8 leading-relaxed font-light", children: "Co-develop, manufacture, and commercialise graphene-enabled products through Joint Ventures. Shared risk, shared IP value creation, and long-term strategic alignment." }),
            /* @__PURE__ */ e(v, { to: "/contact", children: /* @__PURE__ */ e(I, { variant: "primary", className: "w-full justify-center", children: "Discuss JV Opportunity" }) })
          ] }),
          /* @__PURE__ */ t("div", { className: "bg-white p-10 rounded-3xl border border-neutral-200 shadow-sm hover:border-purple-200 hover:shadow-lg transition-all duration-300 group", children: [
            /* @__PURE__ */ e("div", { className: "w-14 h-14 bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-8 rounded-2xl group-hover:bg-purple-50 group-hover:border-purple-100 transition-colors", children: /* @__PURE__ */ e(Ee, { className: "w-7 h-7 text-neutral-700 group-hover:text-purple-600 transition-colors", strokeWidth: 1.5 }) }),
            /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium text-neutral-900 mb-4", children: "Technology Licensing" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-500 mb-8 leading-relaxed font-light", children: "Rapidly integrate graphene innovations into existing production lines. Access proprietary formulations, processes, and application-specific IP with full technical support." }),
            /* @__PURE__ */ e(v, { to: "/contact", children: /* @__PURE__ */ e(I, { variant: "secondary", className: "w-full justify-center", children: "Explore Licensing" }) })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}, Cr = ({
  images: r = [],
  interval: n = 5e3,
  transitionDuration: l = 1e3,
  className: a = ""
}) => {
  const [i, s] = L(0);
  return ce(() => {
    if (!r || r.length <= 1) return;
    const o = setInterval(() => {
      s((c) => (c + 1) % r.length);
    }, n);
    return () => clearInterval(o);
  }, [r, n]), !r || r.length === 0 ? null : /* @__PURE__ */ e("div", { className: `absolute inset-0 w-full h-full overflow-hidden ${a}`, children: r.map((o, c) => /* @__PURE__ */ e(
    "div",
    {
      className: "absolute inset-0 w-full h-full transition-opacity duration-[1000ms] ease-in-out",
      style: {
        opacity: c === i ? 1 : 0,
        transitionDuration: `${l}ms`,
        zIndex: c === i ? 1 : 0
      },
      children: /* @__PURE__ */ e(
        "img",
        {
          src: o,
          alt: `Background slide ${c + 1}`,
          className: "w-full h-full object-cover"
        }
      )
    },
    c
  )) });
}, Sr = ({
  title: r,
  subtitle: n,
  category: l,
  categoryColor: a = "bg-white",
  categoryTone: i,
  images: s = [],
  buttons: o = [],
  className: c = "",
  theme: m = "dark"
}) => {
  const d = m === "light", p = i && {
    commercial: "bg-green-400",
    success: "bg-green-400",
    pipeline: "bg-amber-400",
    warning: "bg-amber-400",
    info: "bg-brand-600",
    brand: "bg-brand-600",
    neutral: "bg-neutral-400"
  }[i] || a;
  return /* @__PURE__ */ t("section", { className: `relative overflow-hidden rounded-3xl ${d ? "bg-neutral-50 text-neutral-900" : "bg-black text-white"} isolate ${c}`, children: [
    /* @__PURE__ */ t("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ e(
        Cr,
        {
          images: s,
          interval: 5e3,
          transitionDuration: 2e3
        }
      ),
      /* @__PURE__ */ e(
        "div",
        {
          className: "absolute inset-0 z-10",
          style: {
            background: d ? "linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.6) 35%, transparent 60%)" : "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 35%, transparent 60%)"
          }
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "relative z-10 p-8 md:p-12 lg:p-16 max-w-lg", children: [
      l && /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-6 ${d ? "bg-white/50 border-neutral-200 text-neutral-500" : "bg-white/10 border-white/20 text-white"}`, children: [
        /* @__PURE__ */ e("span", { className: `w-2 h-2 rounded-full ${p}` }),
        l
      ] }),
      /* @__PURE__ */ e("h2", { className: `text-3xl md:text-4xl font-display font-medium mb-4 leading-tight tracking-tight ${d ? "text-neutral-900" : "text-white"}`, children: r }),
      /* @__PURE__ */ e("p", { className: `text-sm md:text-base leading-relaxed mb-8 font-light ${d ? "text-neutral-500" : "text-neutral-300"}`, children: n }),
      o.length > 0 && /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-4", children: o.map((g, w) => /* @__PURE__ */ e(K.Fragment, { children: g.link.startsWith("#") ? /* @__PURE__ */ e("a", { href: g.link, children: /* @__PURE__ */ e(I, { variant: g.variant || "primary", theme: m, children: g.text }) }) : /* @__PURE__ */ e(v, { to: g.link, children: /* @__PURE__ */ e(I, { variant: g.variant || "primary", theme: m, children: g.text }) }) }, w)) })
    ] })
  ] });
}, mt = ({ children: r, className: n = "" }) => /* @__PURE__ */ e("div", { className: `grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)] ${n}`, children: r }), oe = ({
  children: r,
  className: n = "",
  colSpan: l = 1,
  rowSpan: a = 1,
  theme: i = "light"
}) => {
  const s = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3"
  }, o = {
    1: "md:row-span-1",
    2: "md:row-span-2",
    3: "md:row-span-3"
  }, c = `${s[l] || "md:col-span-1"} ${o[a] || "md:row-span-1"}`;
  return /* @__PURE__ */ e("div", { className: `
            rounded-3xl border p-6 flex flex-col justify-between overflow-hidden relative group transition-all duration-500
            ${c} ${i === "dark" ? "bg-gradient-to-br from-neutral-900 via-neutral-900 to-black border-neutral-800/50 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)]" : "bg-gradient-to-br from-white to-neutral-50/30 border-neutral-200/70 text-neutral-900 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)]"} ${n}
        `, children: r });
}, Pr = ({
  images: r,
  alt: n,
  className: l = "",
  interval: a = 4e3,
  showGradient: i = !1,
  showDots: s = !0,
  showNavigation: o = !0,
  pauseOnHover: c = !0
}) => {
  const [m, d] = L(0), [u, p] = L(!1), g = r.length > 1, w = () => {
    d((b) => (b + 1) % r.length);
  }, j = () => {
    d((b) => (b - 1 + r.length) % r.length);
  }, h = (b) => {
    d(b);
  };
  return ce(() => {
    let b;
    return g && !u && (b = setInterval(() => {
      w();
    }, a)), () => clearInterval(b);
  }, [g, r.length, a, u, m]), /* @__PURE__ */ t(
    "div",
    {
      className: `relative overflow-hidden ${l}`,
      onMouseEnter: () => c && p(!0),
      onMouseLeave: () => c && p(!1),
      children: [
        /* @__PURE__ */ e(yt, { mode: "wait", children: /* @__PURE__ */ e(
          f.img,
          {
            src: r[m],
            alt: `${n} - Image ${m + 1}`,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.5 },
            className: "absolute inset-0 w-full h-full object-cover"
          },
          m
        ) }),
        i && /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" }),
        g && o && /* @__PURE__ */ t(J, { children: [
          /* @__PURE__ */ e(
            "button",
            {
              onClick: j,
              className: "absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-lg transition-all opacity-0 hover:opacity-100 group-hover:opacity-100 z-20",
              "aria-label": "Previous image",
              children: /* @__PURE__ */ e(Se, { className: "w-5 h-5 text-neutral-900" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: w,
              className: "absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-lg transition-all opacity-0 hover:opacity-100 group-hover:opacity-100 z-20",
              "aria-label": "Next image",
              children: /* @__PURE__ */ e(X, { className: "w-5 h-5 text-neutral-900" })
            }
          )
        ] }),
        g && s && /* @__PURE__ */ e("div", { className: "absolute top-4 right-4 flex gap-1.5 z-20", children: r.map((b, D) => /* @__PURE__ */ e(
          "button",
          {
            onClick: () => h(D),
            className: `w-2 h-2 rounded-full transition-all cursor-pointer ${D === m ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60"}`,
            "aria-label": `Go to image ${D + 1}`
          },
          D
        )) })
      ]
    }
  );
}, Ir = ({ items: r = [], theme: n = "light", accentColor: l = "blue" }) => {
  const a = n === "dark", i = {
    blue: { dot: "bg-blue-600", ring: "ring-blue-100" },
    emerald: { dot: "bg-emerald-500", ring: "ring-emerald-100" },
    purple: { dot: "bg-purple-600", ring: "ring-purple-100" },
    slate: { dot: "bg-slate-700", ring: "ring-slate-200" }
  }, s = i[l] || i.blue;
  return /* @__PURE__ */ e("div", { className: "relative pl-8 border-l border-neutral-200 dark:border-neutral-800 space-y-12", children: r.map((o, c) => /* @__PURE__ */ t("div", { className: "relative", children: [
    /* @__PURE__ */ e("div", { className: `
                        absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 
                        ${o.status === "completed" ? "bg-emerald-500 border-white ring-2 ring-emerald-100" : o.status === "current" ? `${s.dot} border-white ring-2 ${s.ring} animate-pulse` : "bg-neutral-300 border-white"}
                    ` }),
    /* @__PURE__ */ t("div", { className: "flex flex-col sm:flex-row gap-2 sm:items-baseline", children: [
      /* @__PURE__ */ e("span", { className: "text-sm font-bold uppercase tracking-wider text-neutral-500", children: o.phase }),
      /* @__PURE__ */ e("h4", { className: `text-lg font-medium ${a ? "text-white" : "text-neutral-900"}`, children: o.title })
    ] }),
    /* @__PURE__ */ e("p", { className: `mt-2 text-base ${a ? "text-neutral-400" : "text-neutral-600"} max-w-lg`, children: o.description }),
    o.date && /* @__PURE__ */ t("span", { className: "mt-2 inline-block px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded font-medium", children: [
      "Target: ",
      o.date
    ] })
  ] }, c)) });
}, Tr = ({ steps: r = [], theme: n = "light", accentColor: l = "blue" }) => {
  const a = n === "dark", i = {
    blue: { bgLight: "bg-blue-50", textLight: "text-blue-600", textDark: "text-blue-400" },
    emerald: { bgLight: "bg-emerald-50", textLight: "text-emerald-600", textDark: "text-emerald-400" },
    purple: { bgLight: "bg-purple-50", textLight: "text-purple-600", textDark: "text-purple-400" },
    slate: { bgLight: "bg-slate-50", textLight: "text-slate-800", textDark: "text-slate-200" }
  }, s = i[l] || i.blue;
  return /* @__PURE__ */ e("div", { className: "flex flex-col md:flex-row gap-4 items-center justify-center py-8", children: r.map((o, c) => /* @__PURE__ */ t(K.Fragment, { children: [
    /* @__PURE__ */ t("div", { className: `
                        relative flex-1 p-6 rounded-2xl border text-center min-h-[160px] flex flex-col items-center justify-center
                        ${a ? "bg-neutral-900 border-neutral-800 text-white" : "bg-white border-neutral-200 text-neutral-900 shadow-sm"}
                    `, children: [
      /* @__PURE__ */ e("div", { className: `
                            w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl
                            ${a ? `bg-neutral-800 ${s.textDark}` : `${s.bgLight} ${s.textLight}`}
                        `, children: o.icon }),
      /* @__PURE__ */ e("h4", { className: "font-semibold mb-2", children: o.title }),
      /* @__PURE__ */ e("p", { className: `text-sm ${a ? "text-neutral-400" : "text-neutral-600"}`, children: o.description }),
      /* @__PURE__ */ t("div", { className: "absolute top-4 right-4 text-xs font-mono opacity-30", children: [
        "0",
        c + 1
      ] })
    ] }),
    c < r.length - 1 && /* @__PURE__ */ t("div", { className: `${a ? "text-neutral-700" : "text-neutral-300"}`, children: [
      /* @__PURE__ */ e(S, { className: "hidden md:block w-6 h-6" }),
      /* @__PURE__ */ e(Yt, { className: "block md:hidden w-6 h-6" })
    ] })
  ] }, c)) });
}, Na = ({ data: r, customSections: n }) => {
  const {
    title: l,
    subtitle: a,
    category: i,
    heroImages: s,
    introduction: o,
    processFlow: c,
    features: m,
    gallery: d,
    timeline: u,
    applications: p,
    cta: g
  } = r, [w, j] = L(null);
  return /* @__PURE__ */ t("div", { className: "min-h-screen bg-white font-sans", children: [
    /* @__PURE__ */ t("div", { className: "max-w-[1400px] mx-auto px-6 pt-40 pb-20", children: [
      /* @__PURE__ */ e("div", { className: "mb-8", children: /* @__PURE__ */ t(
        v,
        {
          to: "/products/pipeline",
          className: "inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-brand-600 transition-colors group",
          children: [
            /* @__PURE__ */ e(Qt, { className: "w-4 h-4 group-hover:-translate-x-1 transition-transform" }),
            /* @__PURE__ */ e("span", { children: "Back to Innovation Pipeline" })
          ]
        }
      ) }),
      /* @__PURE__ */ e(
        Sr,
        {
          title: l,
          subtitle: a,
          category: i,
          categoryColor: "bg-brand-600 text-white",
          images: s,
          theme: "light",
          className: "h-[75vh] rounded-2xl overflow-hidden shadow-xl border border-neutral-200"
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "max-w-[1400px] mx-auto px-6 pb-20", children: [
      /* @__PURE__ */ e("section", { className: "mb-24", children: /* @__PURE__ */ t("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e(
            y,
            {
              number: "01",
              title: o.title,
              subtitle: o.subtitle
            }
          ),
          o.description.map((h, b) => /* @__PURE__ */ e(
            "p",
            {
              className: `text-lg text-neutral-600 leading-relaxed ${b < o.description.length - 1 ? "mb-6" : ""}`,
              children: h
            },
            b
          ))
        ] }),
        /* @__PURE__ */ e("div", { className: "relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-50", children: /* @__PURE__ */ e(
          Pr,
          {
            images: o.images,
            alt: `${l} Context`,
            className: "absolute inset-0 w-full h-full object-cover"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ t("section", { className: "mb-24", children: [
        /* @__PURE__ */ e(
          y,
          {
            number: "02",
            title: c.title,
            subtitle: c.subtitle
          }
        ),
        /* @__PURE__ */ e("div", { className: "bg-neutral-50 rounded-2xl p-8 md:p-12 border border-neutral-200", children: /* @__PURE__ */ e(
          Tr,
          {
            steps: c.steps.map((h) => ({
              icon: K.createElement(h.icon, { className: "w-6 h-6" }),
              title: h.title,
              description: h.description
            })),
            accentColor: "teal"
          }
        ) })
      ] }),
      /* @__PURE__ */ t("section", { className: "mb-24", children: [
        /* @__PURE__ */ e(
          y,
          {
            number: "03",
            title: m.title,
            subtitle: m.subtitle,
            accent: !0
          }
        ),
        /* @__PURE__ */ t(mt, { children: [
          m.hero && /* @__PURE__ */ t(
            oe,
            {
              colSpan: 2,
              rowSpan: 2,
              theme: "dark",
              className: "relative group overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 border border-brand-500",
              children: [
                /* @__PURE__ */ t("div", { className: "h-full flex flex-col justify-between relative z-10 p-8", children: [
                  /* @__PURE__ */ e("div", { className: "w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center shadow-lg", children: m.hero.icon && K.createElement(m.hero.icon, { className: "w-8 h-8 text-white" }) }),
                  /* @__PURE__ */ t("div", { children: [
                    /* @__PURE__ */ e("h3", { className: "text-3xl md:text-4xl font-display font-semibold text-white mb-4", children: m.hero.title }),
                    /* @__PURE__ */ e("p", { className: "text-lg text-white leading-relaxed max-w-md", children: m.hero.description })
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" })
              ]
            }
          ),
          m.secondary && m.secondary.map((h, b) => /* @__PURE__ */ e(
            oe,
            {
              colSpan: 1,
              rowSpan: 1,
              theme: "light",
              className: "bg-white hover:bg-neutral-50 transition-colors border border-neutral-200",
              children: /* @__PURE__ */ t("div", { className: "h-full flex flex-col justify-between p-6", children: [
                /* @__PURE__ */ e("div", { className: "w-14 h-14 rounded-xl bg-brand-600 flex items-center justify-center mb-6", children: h.icon && K.createElement(h.icon, { className: "w-7 h-7 text-white" }) }),
                /* @__PURE__ */ t("div", { children: [
                  /* @__PURE__ */ e("h4", { className: "text-xl font-semibold text-neutral-900 mb-3", children: h.title }),
                  /* @__PURE__ */ e("p", { className: "text-sm text-neutral-600 leading-relaxed", children: h.description })
                ] })
              ] })
            },
            `sec-${b}`
          )),
          m.stats && m.stats.map((h, b) => /* @__PURE__ */ e(
            oe,
            {
              colSpan: 1,
              rowSpan: 1,
              theme: "light",
              className: "bg-white hover:bg-neutral-50 transition-colors border border-neutral-200",
              children: /* @__PURE__ */ t("div", { className: "h-full flex flex-col justify-between p-6", children: [
                h.icon ? /* @__PURE__ */ e("div", { className: "w-14 h-14 rounded-xl bg-neutral-800 flex items-center justify-center mb-6", children: K.createElement(h.icon, { className: "w-7 h-7 text-white" }) }) : /* @__PURE__ */ e("div", { className: "text-5xl font-display font-bold mb-4 text-neutral-800", children: h.value }),
                /* @__PURE__ */ t("div", { children: [
                  h.title && /* @__PURE__ */ e("h4", { className: "text-lg font-semibold text-neutral-900 mb-2", children: h.title }),
                  h.label && /* @__PURE__ */ e("div", { className: "text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2", children: h.label }),
                  /* @__PURE__ */ e("p", { className: "text-sm text-neutral-600 leading-relaxed", children: h.description })
                ] })
              ] })
            },
            `stat-${b}`
          )),
          m.metrics && m.metrics.map((h, b) => /* @__PURE__ */ e(
            oe,
            {
              colSpan: 1,
              rowSpan: 1,
              theme: "light",
              className: "bg-white hover:bg-neutral-50 border border-neutral-200 flex items-center justify-center text-center transition-colors",
              children: /* @__PURE__ */ t("div", { className: "p-6", children: [
                /* @__PURE__ */ e("div", { className: "text-4xl font-display font-bold mb-2 text-neutral-800", children: h.value }),
                /* @__PURE__ */ e("div", { className: "text-xs font-semibold uppercase tracking-wider text-neutral-500", children: h.label })
              ] })
            },
            `met-${b}`
          ))
        ] })
      ] }),
      n && /* @__PURE__ */ e("div", { className: "mb-24", children: n }),
      /* @__PURE__ */ t("section", { className: "mb-24", children: [
        /* @__PURE__ */ e(
          y,
          {
            number: "04",
            title: d.title,
            subtitle: d.subtitle
          }
        ),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: (d.images || []).map((h, b) => {
          if (typeof h == "object" && h.type === "video")
            return /* @__PURE__ */ t(
              "div",
              {
                className: "relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-neutral-200",
                children: [
                  /* @__PURE__ */ e(
                    "iframe",
                    {
                      src: h.url,
                      title: h.label || "Product Video",
                      className: "absolute inset-0 w-full h-full",
                      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                      allowFullScreen: !0
                    }
                  ),
                  h.label && /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-900/90 to-transparent p-4", children: /* @__PURE__ */ e("p", { className: "text-white text-sm font-medium", children: h.label }) })
                ]
              },
              b
            );
          const D = typeof h == "string" ? h : h.image || h.images && h.images[0], ee = typeof h == "string" ? "Gallery Image" : h.label || "View";
          return D ? /* @__PURE__ */ t(
            "div",
            {
              onClick: () => j({ src: D, label: ee }),
              className: "group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow border border-neutral-200",
              children: [
                /* @__PURE__ */ e(
                  "img",
                  {
                    src: D,
                    alt: ee,
                    className: "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  }
                ),
                /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 right-0 p-6", children: /* @__PURE__ */ e("p", { className: "text-white font-medium", children: ee }) }) })
              ]
            },
            b
          ) : null;
        }) })
      ] }),
      /* @__PURE__ */ e("section", { className: "mb-24", children: /* @__PURE__ */ t("div", { className: "grid lg:grid-cols-12 gap-12", children: [
        /* @__PURE__ */ t("div", { className: "lg:col-span-4", children: [
          /* @__PURE__ */ e(
            y,
            {
              number: "05",
              title: u.title,
              subtitle: u.subtitle
            }
          ),
          /* @__PURE__ */ e("p", { className: "text-neutral-600 leading-relaxed mt-6", children: "Our development velocity is accelerating. Track our key milestones from lab synthesization to industrial scale-up." })
        ] }),
        /* @__PURE__ */ e("div", { className: "lg:col-span-8", children: /* @__PURE__ */ e("div", { className: "bg-neutral-50 rounded-2xl p-8 md:p-12 border border-neutral-200", children: /* @__PURE__ */ e(Ir, { items: u.events || [], accentColor: "teal" }) }) })
      ] }) }),
      /* @__PURE__ */ t("section", { className: "mb-24", children: [
        /* @__PURE__ */ e(
          y,
          {
            number: "06",
            title: p.title,
            subtitle: p.subtitle
          }
        ),
        /* @__PURE__ */ e("div", { className: "mt-12", children: /* @__PURE__ */ e(mt, { children: (p.items || []).map((h, b) => /* @__PURE__ */ e(
          oe,
          {
            colSpan: b === 0 ? 2 : 1,
            rowSpan: 1,
            theme: "light",
            className: "bg-white hover:bg-neutral-50 border border-neutral-200 transition-colors",
            children: /* @__PURE__ */ t("div", { className: "h-full flex flex-col justify-between p-6", children: [
              /* @__PURE__ */ t("div", { className: "mb-6", children: [
                /* @__PURE__ */ t("div", { className: "inline-block px-3 py-1.5 rounded-full bg-brand-600 text-xs font-bold uppercase tracking-wider text-white mb-4", children: [
                  "Sector ",
                  b + 1
                ] }),
                /* @__PURE__ */ e("h3", { className: "text-2xl font-semibold text-neutral-900 mb-4", children: h.title }),
                /* @__PURE__ */ e("p", { className: "text-neutral-600 leading-relaxed", children: h.description })
              ] }),
              /* @__PURE__ */ e("div", { className: "w-full h-2 bg-neutral-200 rounded-full overflow-hidden", children: /* @__PURE__ */ e(
                "div",
                {
                  className: "h-full bg-brand-600 rounded-full",
                  style: { width: `${75 - b * 5}%` }
                }
              ) })
            ] })
          },
          b
        )) }) })
      ] }),
      /* @__PURE__ */ t("section", { className: "relative rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden px-8 py-16 md:p-20 text-center border border-neutral-700", children: [
        /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" }),
        /* @__PURE__ */ t("div", { className: "relative z-10 max-w-3xl mx-auto", children: [
          /* @__PURE__ */ e("h2", { className: "text-4xl md:text-6xl font-display font-semibold text-white mb-6", children: g.title }),
          /* @__PURE__ */ e("p", { className: "text-xl text-neutral-300 mb-10 leading-relaxed", children: g.description }),
          /* @__PURE__ */ t("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
            /* @__PURE__ */ e(v, { to: g.primaryButton?.link || "/contact", className: "w-full sm:w-auto", children: /* @__PURE__ */ e("button", { className: "w-full sm:w-auto px-8 py-4 bg-white text-neutral-900 border-2 border-white rounded-lg font-semibold text-base hover:bg-neutral-50 hover:border-neutral-200 transition-all duration-300 shadow-lg", children: g.primaryButton?.text || "Contact Us" }) }),
            /* @__PURE__ */ e(v, { to: g.secondaryButton?.link || "/products/pipeline", className: "w-full sm:w-auto", children: /* @__PURE__ */ e("button", { className: "w-full sm:w-auto px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-base hover:bg-white hover:text-neutral-900 transition-all duration-300", children: g.secondaryButton?.text || "View Full Pipeline" }) })
          ] })
        ] })
      ] })
    ] }),
    w && /* @__PURE__ */ t(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4",
        onClick: () => j(null),
        children: [
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => j(null),
              className: "absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors",
              children: /* @__PURE__ */ e(ne, { className: "w-6 h-6" })
            }
          ),
          /* @__PURE__ */ t("div", { className: "max-w-7xl max-h-[90vh] relative", children: [
            /* @__PURE__ */ e(
              "img",
              {
                src: w.src,
                alt: w.label,
                className: "max-w-full max-h-[90vh] object-contain rounded-lg",
                onClick: (h) => h.stopPropagation()
              }
            ),
            /* @__PURE__ */ e("p", { className: "text-white text-center mt-4 text-lg font-medium", children: w.label })
          ] })
        ]
      }
    )
  ] });
};
export {
  aa as AboutCTAHub,
  na as AboutDifferentiators,
  oa as AboutFacilities,
  la as AboutKeyMetricsStrip,
  sa as AboutLeadership,
  ua as AboutThreePillars,
  ia as AboutVisionMissionNorthStar,
  Rr as CertificationsSection,
  st as ComparisonTable,
  ga as CompetitiveComparison,
  va as ContactPageTemplate,
  Me as ContentSection,
  Er as CustomerJourney,
  Br as FAQSection,
  ot as FeatureList,
  da as HallOfFame,
  Dr as Hero,
  zr as HomeCTAHub,
  ea as HomeThreePillars,
  Wr as ImpactMetrics,
  Or as ImpactMetricsDashboard,
  Hr as Industry40Enabler,
  Fr as InnovationPipeline,
  Gr as Introduction,
  Vr as LabToManufacturing,
  qr as LabToScale,
  _r as LeadershipSection,
  Ur as MissionImpact,
  yr as PageHeader,
  Yr as PartnershipModels,
  fa as PilotTechnologies,
  ca as ProblemSolution,
  Na as ProductDetailTemplate,
  Qr as ProductGauges,
  ba as ProductPage,
  xa as ProductsCustomerSuccessStories,
  Kr as ProductsSection,
  Jr as ProvenImpact,
  Xr as ROIDisplay,
  Nr as SpecTable,
  ma as TechnologyCapabilities,
  Zr as TechnologySection,
  ta as TraditionalVsGraphene,
  ha as TrustValidation,
  pa as VisionMission,
  ra as WorkingWithUs
};
