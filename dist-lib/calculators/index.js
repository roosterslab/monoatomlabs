import { jsxs as t, jsx as e, Fragment as Ce } from "react/jsx-runtime";
import ya, { useState as M, useMemo as Q, useEffect as It } from "react";
import { motion as f, AnimatePresence as se } from "framer-motion";
import { Calculator as Oe, TrendingUp as A, DollarSign as Ie, Thermometer as ea, Zap as W, Sun as Ye, CheckCircle as ve, RefreshCw as De, Info as ze, ChevronDown as Ue, Leaf as Ee, Droplets as wa, Clock as Pe, Wrench as ka, Award as pe, HardHat as Dt, ShieldCheck as We, Factory as $t, TrendingDown as ee, Package as Fe, Layers as St, Home as ta, Building2 as xe, CheckCircle2 as V, Waves as $a, Building as Sa, ShoppingBag as Ca, Film as st, Lightbulb as Pa, Beaker as Ma, Check as pt, Rocket as wt, FlaskConical as ct, Microscope as Ve, FileCheck as aa, ChevronUp as Aa, Settings as zt, Truck as La, PlayCircle as ra, Target as ut, FileText as mt, Coins as Ta, AlertCircle as na, Globe as _e, ArrowUpRight as la, MapPin as Ga, Users as ia, Table2 as Ra, Download as ja, ExternalLink as Ia, Car as Da, LayoutGrid as za, ArrowRight as ye, Atom as Ea, TestTube as Wa, BarChart3 as sa, PieChart as Fa, Wallet as Ba, Calendar as oa, Recycle as Oa, Droplet as je, Wind as Ha, Shield as Ka, ArrowLeftRight as Et, Sparkles as Ct, Activity as Ge, Box as nt, PauseCircle as Va, Star as Be, Quote as qa, ChevronLeft as Ya, ChevronRight as _a, HelpCircle as Ua, ArrowLeft as Qa, Play as ft, Eye as vt, X as Xa, Trophy as Wt } from "lucide-react";
import { ResponsiveContainer as O, AreaChart as da, CartesianGrid as Y, XAxis as _, YAxis as U, Tooltip as q, Area as $e, LineChart as Qe, Line as re, BarChart as he, Bar as ne, Cell as Me, LabelList as Se, ReferenceLine as fe, Legend as ke, PieChart as ca, Pie as ma, RadarChart as Za, PolarGrid as Ja, PolarAngleAxis as er, PolarRadiusAxis as tr, Radar as Ft, ComposedChart as qe, ReferenceDot as Nt } from "recharts";
const Or = () => {
  const [i, l] = M(500), [c, d] = M(8), [a, s] = M("medium"), [p, u] = M("hot"), b = Q(() => {
    const r = i * 1500, h = 0.075, m = r * h, w = {
      low: { baseline: 0.05, withGraffisol: 0.02 },
      medium: { baseline: 0.15, withGraffisol: 0.08 },
      high: { baseline: 0.25, withGraffisol: 0.12 }
    }[a], y = (w.baseline - w.withGraffisol) * r, n = {
      moderate: { reduction: 4, benefit: 0.01 },
      hot: { reduction: 6, benefit: 0.02 },
      "very-hot": { reduction: 8, benefit: 0.03 }
    }[p], G = r * n.benefit, R = m + y + G, I = R * c, o = i * 500, T = (o / (I / 12)).toFixed(1), N = I * 5, F = N - o, H = (F / o * 100).toFixed(0), J = [];
    for (let le = 0; le <= 60; le++) {
      const ie = I / 12 * le - o;
      J.push({
        month: le,
        cumulative: ie
      });
    }
    const te = [
      { metric: "Standard", energy: r },
      { metric: "With Graffisol", energy: r + R }
    ];
    return {
      annualGeneration: r,
      totalAdditionalEnergy: R,
      energyGain: h * 100,
      soilingRecovery: y,
      tempBenefit: G,
      tempReduction: n.reduction,
      annualRevenue: I,
      coatingCost: o,
      paybackMonths: T,
      fiveYearRevenue: N,
      netProfit: F,
      roi: H,
      monthlyData: J,
      performanceData: te
    };
  }, [i, c, a, p]);
  return /* @__PURE__ */ t("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-orange-900/20" }),
    /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-yellow-500/30 bg-yellow-500/10 backdrop-blur mb-6", children: [
              /* @__PURE__ */ e(Oe, { className: "w-4 h-4 text-yellow-400" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-mono text-yellow-400 tracking-widest uppercase", children: "Solar Energy Calculator" })
            ] }),
            /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "Graffisol ROI Calculator" }),
            /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto", children: "Calculate energy gains and return on investment with Graffisol coating technology" })
          ]
        }
      ),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8", children: [
        /* @__PURE__ */ t("div", { className: "lg:col-span-4 space-y-6", children: [
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block", children: "Solar Capacity (kW)" }),
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "range",
                    min: "50",
                    max: "5000",
                    step: "50",
                    value: i,
                    onChange: (r) => l(Number(r.target.value)),
                    className: "w-full accent-brand-500 h-1 bg-neutral-700 rounded-sm"
                  }
                ),
                /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mt-3", children: [
                  i.toLocaleString(),
                  " ",
                  /* @__PURE__ */ e("span", { className: "text-lg text-neutral-400", children: "kW" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.1 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block", children: "Electricity Rate (₹/kWh)" }),
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "range",
                    min: "5",
                    max: "15",
                    step: "0.5",
                    value: c,
                    onChange: (r) => d(Number(r.target.value)),
                    className: "w-full accent-brand-500 h-1 bg-neutral-700 rounded-sm"
                  }
                ),
                /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mt-3", children: [
                  "₹",
                  c,
                  " ",
                  /* @__PURE__ */ e("span", { className: "text-lg text-neutral-400", children: "/kWh" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.2 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block", children: "Soiling Environment" }),
                /* @__PURE__ */ e("div", { className: "space-y-2", children: [
                  { id: "low", label: "Low (Clean areas)" },
                  { id: "medium", label: "Medium (Urban)" },
                  { id: "high", label: "High (Dusty/Industrial)" }
                ].map((r) => /* @__PURE__ */ e(
                  "button",
                  {
                    onClick: () => s(r.id),
                    className: `w-full px-4 py-3 rounded-sm font-mono font-medium transition-all text-sm ${a === r.id ? "bg-brand-500 text-white border border-brand-400" : "bg-neutral-800/50 text-neutral-400 border border-neutral-700 hover:bg-neutral-700 hover:text-white"}`,
                    children: r.label
                  },
                  r.id
                )) })
              ]
            }
          ),
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.3 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block", children: "Location Temperature" }),
                /* @__PURE__ */ e("div", { className: "space-y-2", children: [
                  { id: "moderate", label: "Moderate (<35°C)" },
                  { id: "hot", label: "Hot (35-40°C)" },
                  { id: "very-hot", label: "Very Hot (>40°C)" }
                ].map((r) => /* @__PURE__ */ e(
                  "button",
                  {
                    onClick: () => u(r.id),
                    className: `w-full px-4 py-3 rounded-sm font-mono font-medium transition-all text-sm ${p === r.id ? "bg-brand-500 text-white border border-brand-400" : "bg-neutral-800/50 text-neutral-400 border border-neutral-700 hover:bg-neutral-700 hover:text-white"}`,
                    children: r.label
                  },
                  r.id
                )) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { className: "lg:col-span-8 space-y-6", children: [
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.4 },
              className: "grid grid-cols-2 md:grid-cols-4 gap-4",
              children: [
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-brand-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(A, { className: "w-6 h-6 text-brand-400 mb-3" }),
                  /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                    b.energyGain.toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "Energy Gain" })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-yellow-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(Ie, { className: "w-6 h-6 text-yellow-400 mb-3" }),
                  /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                    "₹",
                    (b.annualRevenue / 1e5).toFixed(1),
                    "L"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "Annual Gain" })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-orange-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(ea, { className: "w-6 h-6 text-orange-400 mb-3" }),
                  /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                    "-",
                    b.tempReduction,
                    "°C"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "Temp Drop" })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-green-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(W, { className: "w-6 h-6 text-green-400 mb-3" }),
                  /* @__PURE__ */ e("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: b.paybackMonths }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "Payback (mo)" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.5 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white mb-6", children: "Annual Energy Production" }),
                /* @__PURE__ */ e(O, { width: "100%", height: 250, children: /* @__PURE__ */ t(da, { data: b.performanceData, children: [
                  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("linearGradient", { id: "energyGradient", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                    /* @__PURE__ */ e("stop", { offset: "5%", stopColor: "#0d9488", stopOpacity: 0.8 }),
                    /* @__PURE__ */ e("stop", { offset: "95%", stopColor: "#0d9488", stopOpacity: 0.1 })
                  ] }) }),
                  /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: "#404040" }),
                  /* @__PURE__ */ e(_, { dataKey: "metric", stroke: "#9ca3af", style: { fontSize: "12px", fontFamily: "Space Grotesk" } }),
                  /* @__PURE__ */ e(U, { stroke: "#9ca3af", tickFormatter: (r) => `${(r / 1e3).toFixed(0)}k`, style: { fontSize: "12px", fontFamily: "Space Grotesk" } }),
                  /* @__PURE__ */ e(
                    q,
                    {
                      contentStyle: { backgroundColor: "#1a1a1a", border: "1px solid #404040", borderRadius: "4px", fontFamily: "Space Grotesk" },
                      formatter: (r) => [`${r.toLocaleString()} kWh`, "Output"]
                    }
                  ),
                  /* @__PURE__ */ e($e, { type: "monotone", dataKey: "energy", stroke: "#0d9488", fill: "url(#energyGradient)", strokeWidth: 2 })
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white mb-6", children: "5-Year Cumulative Profit" }),
                /* @__PURE__ */ e(O, { width: "100%", height: 280, children: /* @__PURE__ */ t(Qe, { data: b.monthlyData.filter((r, h) => h % 3 === 0), children: [
                  /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: "#404040" }),
                  /* @__PURE__ */ e(
                    _,
                    {
                      dataKey: "month",
                      stroke: "#9ca3af",
                      label: { value: "Month", position: "insideBottom", offset: -5, fill: "#9ca3af", fontFamily: "Space Grotesk" },
                      style: { fontSize: "12px", fontFamily: "Space Grotesk" }
                    }
                  ),
                  /* @__PURE__ */ e(
                    U,
                    {
                      stroke: "#9ca3af",
                      tickFormatter: (r) => `₹${(r / 1e5).toFixed(0)}L`,
                      style: { fontSize: "12px", fontFamily: "Space Grotesk" }
                    }
                  ),
                  /* @__PURE__ */ e(
                    q,
                    {
                      contentStyle: { backgroundColor: "#1a1a1a", border: "1px solid #404040", borderRadius: "4px", fontFamily: "Space Grotesk" },
                      formatter: (r) => [`₹${(r / 1e5).toFixed(2)}L`, "Profit"]
                    }
                  ),
                  /* @__PURE__ */ e(
                    re,
                    {
                      type: "monotone",
                      dataKey: "cumulative",
                      stroke: "#10b981",
                      strokeWidth: 3,
                      dot: !1
                    }
                  )
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.7 },
              className: "bg-gradient-to-r from-green-500/10 to-brand-500/10 border border-green-500/30 rounded-sm p-8",
              children: [
                /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white mb-6", children: "5-Year Financial Summary" }),
                /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6", children: [
                  /* @__PURE__ */ t("div", { children: [
                    /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 mb-2 font-mono uppercase tracking-wide", children: "Investment" }),
                    /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white", children: [
                      "₹",
                      (b.coatingCost / 1e5).toFixed(1),
                      "L"
                    ] })
                  ] }),
                  /* @__PURE__ */ t("div", { children: [
                    /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 mb-2 font-mono uppercase tracking-wide", children: "Total Revenue" }),
                    /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white", children: [
                      "₹",
                      (b.fiveYearRevenue / 1e5).toFixed(1),
                      "L"
                    ] })
                  ] }),
                  /* @__PURE__ */ t("div", { children: [
                    /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 mb-2 font-mono uppercase tracking-wide", children: "Net Profit" }),
                    /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-green-400", children: [
                      "₹",
                      (b.netProfit / 1e5).toFixed(1),
                      "L"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { className: "pt-6 border-t border-white/10", children: /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ e("span", { className: "text-neutral-300 font-mono", children: "Return on Investment" }),
                  /* @__PURE__ */ t("span", { className: "text-5xl font-mono font-bold text-green-400", children: [
                    b.roi,
                    "%"
                  ] })
                ] }) }),
                /* @__PURE__ */ e("div", { className: "mt-6 text-center text-neutral-400 text-sm font-mono", children: "✓ Field Validated: 1+ MW installations showing 10-12% energy gains" })
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}, ar = (i) => {
  const l = Math.pow(10, Number(i) / 100 * 4);
  return l < 10 ? Math.max(1, Math.round(l)) : l < 100 ? Math.round(l / 5) * 5 : l < 1e3 ? Math.round(l / 50) * 50 : Math.round(l / 500) * 500;
}, Bt = (i) => Math.round(Math.log10(Math.max(1, Math.min(1e4, i))) / 4 * 100), rr = [
  { v: 1, num: "1", label: ["Home", "panels"] },
  { v: 10, num: "10", label: ["Rooftop", "home"] },
  { v: 100, num: "100", label: ["Commercial", "roof"] },
  { v: 1e3, num: "1k", label: ["Large", "plant"] },
  { v: 1e4, num: "10k", label: ["Utility", "scale"] }
], nr = (i) => i <= 5 ? "Small residential panel set" : i <= 20 ? "Residential rooftop system" : i <= 100 ? "Commercial rooftop installation" : i <= 500 ? "Industrial or large commercial plant" : i <= 5e3 ? "Utility-scale solar farm" : "Large-scale utility solar project (10+ MW)", K = (i) => {
  const l = Math.abs(i ?? 0), c = (i ?? 0) < 0 ? "−" : "";
  return l >= 1e7 ? `${c}₹${(l / 1e7).toFixed(1)} Cr` : l >= 1e5 ? `${c}₹${(l / 1e5).toFixed(1)} L` : l >= 1e3 ? `${c}₹${Math.round(l / 1e3)}k` : `${c}₹${Math.round(l)}`;
}, ge = (i) => `${(i ?? 0) < 0 ? "−" : ""}₹${Math.abs(Math.round(i ?? 0)).toLocaleString("en-IN")}`, Ot = (i) => {
  const l = Math.abs(i ?? 0);
  return l >= 1e6 ? `${(l / 1e6).toFixed(2)} GWh` : l >= 1e3 ? `${(l / 1e3).toFixed(0)} MWh` : `${Math.round(l).toLocaleString()} kWh`;
}, lr = ({ active: i, payload: l, label: c }) => !i || !l?.length ? null : /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-xl p-3 shadow-lg text-sm", children: [
  /* @__PURE__ */ e("p", { className: "font-bold text-neutral-800 mb-0.5", children: c }),
  /* @__PURE__ */ t("p", { className: "text-neutral-600", children: [
    "₹",
    l[0].value?.toLocaleString("en-IN"),
    "/kW/yr"
  ] })
] }), Hr = ({
  calculations: i,
  defaultInputs: l,
  secondaryInputs: c,
  theme: d = "light"
}) => {
  const a = d === "dark", s = (v) => ({
    background: `linear-gradient(to right, #eab308 ${v.toFixed(1)}%, ${a ? "#374151" : "#e5e7eb"} ${v.toFixed(1)}%)`
  }), p = "w-full h-2 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-yellow-500 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-yellow-500 [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-pointer", u = { ...l, ...c || {} }, b = Object.keys(u).reduce((v, S) => {
    const x = u[S];
    return v[S] = x.default !== void 0 ? x.default : x.min != null ? (x.min + x.max) / 2 : x.options?.[0]?.value, v;
  }, {}), [r, h] = M(b), [m, g] = M(String(b.systemSize || 100)), [w, y] = M(!1), k = (v, S) => h((x) => ({ ...x, [v]: S })), n = Q(() => i(r), [r, i]), G = () => {
    h(b), g(String(b.systemSize || 100));
  }, R = a ? "bg-neutral-900" : "bg-white", I = a ? "bg-neutral-950/40" : "bg-neutral-50/60", o = a ? "border-neutral-700" : "border-neutral-200", T = a ? "text-white" : "text-neutral-900", N = a ? "text-neutral-400" : "text-neutral-500", F = a ? "text-yellow-400" : "text-yellow-600", H = Q(() => {
    const v = n.baselineRevenuePerKw || 0;
    return [
      { name: "Baseline", rev: v, fill: "#94a3b8" },
      { name: "Power Boost", rev: v + (n.powerBoostRevenuePerKw || 0), fill: "#22c55e" },
      { name: "Full Return", rev: v + (n.fullReturnPerKw || 0), fill: "#f59e0b" }
    ];
  }, [n]), J = Q(() => {
    if (!H.length) return [0, 2e4];
    const v = H.map((S) => S.rev);
    return [
      Math.floor(Math.min(...v) * 0.85 / 1e3) * 1e3,
      Math.ceil(Math.max(...v) * 1.08 / 1e3) * 1e3
    ];
  }, [H]), te = Q(() => n.applicationCostTotal ? Array.from({ length: (n.analysisPeriod || 20) + 1 }, (v, S) => ({
    year: S,
    cumulative: Math.round(-(n.applicationCostTotal || 0) + (n.fullReturnTotal || 0) * S)
  })) : [], [n]), le = () => {
    const v = r.systemSize || 1;
    return /* @__PURE__ */ t("div", { className: "space-y-2.5", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${T}`, children: "System Size" }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "number",
              value: m,
              min: 1,
              max: 1e4,
              onChange: (S) => {
                g(S.target.value);
                const x = parseInt(S.target.value, 10);
                !isNaN(x) && x >= 1 && x <= 1e4 && k("systemSize", x);
              },
              onBlur: () => g(String(v)),
              className: `w-20 text-right text-sm font-mono border ${o} rounded px-2 py-1 ${a ? "bg-neutral-800 text-white" : "bg-white text-neutral-900"} focus:outline-none focus:ring-1 focus:ring-yellow-500`
            }
          ),
          /* @__PURE__ */ e("span", { className: `text-sm font-medium ${T}`, children: "kW" })
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: 0,
          max: 100,
          value: Bt(v),
          onChange: (S) => {
            const x = ar(S.target.value);
            k("systemSize", x), g(String(x));
          },
          className: p,
          style: s(Bt(v))
        }
      ),
      /* @__PURE__ */ e("div", { className: "flex justify-between", children: rr.map(({ v: S, num: x, label: C }) => /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-0.5 w-10", children: [
        /* @__PURE__ */ e("span", { className: `text-[10px] font-semibold ${T}`, children: x }),
        C.map((L, X) => /* @__PURE__ */ e("span", { className: `text-[9px] ${N} text-center leading-tight`, children: L }, X))
      ] }, S)) }),
      /* @__PURE__ */ t("p", { className: `text-[11px] italic ${N}`, children: [
        "≈ ",
        nr(v)
      ] })
    ] });
  }, ue = () => {
    const v = l.electricityRate, S = r.electricityRate;
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${T}`, children: "Electricity Rate" }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${F}`, children: [
          "₹",
          S,
          "/kWh"
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: v.min,
          max: v.max,
          step: v.step || 0.5,
          value: S,
          onChange: (x) => k("electricityRate", Number(x.target.value)),
          className: p,
          style: s(Math.max(0, Math.min(100, (S - v.min) / (v.max - v.min) * 100)))
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${N}`, children: [
          "₹",
          v.min
        ] }),
        /* @__PURE__ */ e("span", { className: `text-[10px] ${N}`, children: "avg ₹7" }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${N}`, children: [
          "₹",
          v.max
        ] })
      ] })
    ] });
  }, ie = () => {
    const v = l.applicationCostPerKw, S = r.applicationCostPerKw;
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${T}`, children: "Application Cost" }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${F}`, children: [
          "₹",
          (S || 0).toLocaleString(),
          "/kW"
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: v.min,
          max: v.max,
          step: v.step || 100,
          value: S,
          onChange: (x) => k("applicationCostPerKw", Number(x.target.value)),
          className: p,
          style: s(Math.max(0, Math.min(100, (S - v.min) / (v.max - v.min) * 100)))
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${N}`, children: [
          "₹",
          (v.min || 0).toLocaleString()
        ] }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${N}`, children: [
          "₹",
          (v.max || 0).toLocaleString()
        ] })
      ] })
    ] });
  }, B = () => {
    const v = l.outputGainPct, S = r.outputGainPct;
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${T}`, children: "Output Gain" }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${F}`, children: [
          S,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: v.min,
          max: v.max,
          step: 1,
          value: S,
          onChange: (x) => k("outputGainPct", Number(x.target.value)),
          className: p,
          style: s(Math.max(0, Math.min(100, (S - v.min) / (v.max - v.min) * 100)))
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${N}`, children: [
          v.min,
          "% conservative"
        ] }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${N}`, children: [
          v.max,
          "% optimistic"
        ] })
      ] }),
      /* @__PURE__ */ e("p", { className: `text-[11px] ${N}`, children: "Field-validated range: 7–12%" }),
      n.powerBoostRevenuePerKw != null && /* @__PURE__ */ t("p", { className: "text-[11px] font-semibold text-yellow-600", children: [
        "→ +₹",
        (n.powerBoostRevenuePerKw || 0).toLocaleString("en-IN"),
        "/kW/yr power boost · ₹",
        (n.powerOnlySavingsTotal || 0) >= 1e3 ? `${Math.round((n.powerOnlySavingsTotal || 0) / 1e3)}k` : (n.powerOnlySavingsTotal || 0).toLocaleString("en-IN"),
        " project annual"
      ] })
    ] });
  }, D = (v, S) => /* @__PURE__ */ t("div", { className: "space-y-2", children: [
    /* @__PURE__ */ e("label", { className: `text-sm font-medium ${T}`, children: S.label }),
    /* @__PURE__ */ e("div", { className: "flex gap-2", children: S.options.map((x) => /* @__PURE__ */ e(
      "button",
      {
        onClick: () => k(v, x.value),
        className: `flex-1 py-1.5 rounded-lg text-sm font-medium border transition-all ${r[v] === x.value ? a ? "bg-white text-neutral-900 border-white" : "bg-neutral-900 text-white border-neutral-900" : a ? "text-neutral-400 border-neutral-700 hover:border-neutral-500" : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"}`,
        children: x.label
      },
      x.value
    )) })
  ] });
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${o} overflow-hidden shadow-2xl`, children: [
    /* @__PURE__ */ t("div", { className: `px-6 py-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs ${a ? "bg-yellow-950/30 border-b border-yellow-900/50" : "bg-yellow-50 border-b border-yellow-100"}`, children: [
      /* @__PURE__ */ e(Ye, { className: "w-3.5 h-3.5 text-yellow-500 flex-shrink-0" }),
      /* @__PURE__ */ e("span", { className: "font-bold uppercase tracking-wider text-yellow-500", children: "Field Validated" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: [
        "Power: +",
        r.outputGainPct || 10,
        "%"
      ] }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: [
        "Soiling: −",
        n.soilingRecoveryPct || 35,
        "%"
      ] }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: [
        "Temp: −",
        n.temperatureReductionC || "5-6",
        "°C"
      ] }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: "font-bold text-green-600", children: [
        "All-in: +",
        ge(n.fullReturnPerKw || 0),
        "/kW/yr"
      ] }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: `font-semibold ${a ? "text-slate-400" : "text-slate-500"}`, children: [
        "Power-only: +",
        ge(n.powerOnlySavingsPerKw || 0),
        "/kW/yr"
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: `grid grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-7 border-b ${o} ${R}`, children: [
      /* @__PURE__ */ e(le, {}),
      /* @__PURE__ */ e(ue, {}),
      /* @__PURE__ */ e(ie, {}),
      /* @__PURE__ */ e(B, {})
    ] }),
    /* @__PURE__ */ t("div", { className: `px-8 py-2.5 flex items-center justify-between border-b ${o} ${a ? "bg-neutral-900/80" : "bg-yellow-50/60"}`, children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5 flex-wrap text-[10px]", children: [
        /* @__PURE__ */ e(ve, { className: `w-3 h-3 flex-shrink-0 ${a ? "text-yellow-400" : "text-yellow-600"}` }),
        /* @__PURE__ */ e("span", { className: `font-bold uppercase tracking-wider ${a ? "text-yellow-400" : "text-yellow-600"}`, children: "Verified Assumptions" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: "1,500 kWh/kW/yr baseline" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: "35% soiling recovery" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: "CEA 2023 CO₂ factor" })
      ] }),
      /* @__PURE__ */ t(
        "button",
        {
          onClick: G,
          className: `flex items-center gap-1.5 text-[10px] font-semibold px-3 py-1.5 rounded-lg border transition-colors flex-shrink-0 ${a ? "text-neutral-400 border-neutral-700 hover:bg-neutral-800 hover:text-neutral-200" : "text-neutral-500 border-neutral-200 hover:bg-white hover:text-neutral-700"}`,
          children: [
            /* @__PURE__ */ e(De, { className: "w-3 h-3" }),
            "Reset"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: `grid grid-cols-1 lg:grid-cols-12 ${R}`, children: [
      /* @__PURE__ */ t("div", { className: `lg:col-span-5 p-8 border-b lg:border-b-0 lg:border-r ${o} flex flex-col gap-6`, children: [
        /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-wider ${N}`, children: "Per-kW Annual Revenue Breakdown" }),
        /* @__PURE__ */ t("div", { className: "space-y-2", children: [
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border ${o} ${a ? "bg-neutral-800/50" : "bg-neutral-50"}`, children: [
            /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${N} mb-1`, children: "Baseline annual revenue" }),
            /* @__PURE__ */ t("p", { className: `text-2xl font-display font-medium ${T}`, children: [
              ge(n.baselineRevenuePerKw || 0),
              /* @__PURE__ */ e("span", { className: `text-sm font-normal ${N} ml-1`, children: "/kW/yr" })
            ] }),
            /* @__PURE__ */ t("p", { className: `text-[10px] ${N} mt-0.5`, children: [
              (n.baselineGenPerKw || 1500).toLocaleString(),
              " kWh/kW/yr × ₹",
              r.electricityRate || 7,
              "/kWh"
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl p-3.5 border ${a ? "border-yellow-800/40 bg-yellow-900/10" : "border-yellow-100 bg-yellow-50"}`, children: [
            /* @__PURE__ */ e("p", { className: "text-xs font-bold uppercase tracking-widest text-yellow-600 mb-2", children: "+ Graffisol gains" }),
            /* @__PURE__ */ t("div", { className: "space-y-1 text-xs", children: [
              /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ t("span", { className: a ? "text-yellow-400" : "text-yellow-700", children: [
                  "Power boost (",
                  r.outputGainPct || 10,
                  "%)"
                ] }),
                /* @__PURE__ */ t("span", { className: "font-mono text-yellow-600", children: [
                  "+",
                  ge(n.powerBoostRevenuePerKw || 0)
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ e("span", { className: "text-green-600", children: "Soiling recovery (35%)" }),
                /* @__PURE__ */ t("span", { className: "font-mono text-green-600", children: [
                  "+",
                  ge(n.soilingRevenuePerKw || 0)
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ e("span", { className: "text-teal-600", children: "Maintenance saved" }),
                /* @__PURE__ */ t("span", { className: "font-mono text-teal-600", children: [
                  "+",
                  ge(n.maintenancePerKw || 0)
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: `flex justify-between pt-1 border-t ${a ? "border-yellow-700/30" : "border-yellow-200/60"}`, children: [
                /* @__PURE__ */ e("span", { className: "font-bold text-yellow-700", children: "Net gain/kW/yr" }),
                /* @__PURE__ */ t("span", { className: "font-bold font-mono text-yellow-700", children: [
                  "+",
                  ge(n.fullReturnPerKw || 0)
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 px-1", children: [
            /* @__PURE__ */ e("div", { className: `flex-1 h-px ${a ? "bg-neutral-700" : "bg-neutral-200"}` }),
            /* @__PURE__ */ e("span", { className: `text-[10px] uppercase font-bold ${N}`, children: "equals" }),
            /* @__PURE__ */ e("div", { className: `flex-1 h-px ${a ? "bg-neutral-700" : "bg-neutral-200"}` })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border-2 ${a ? "border-yellow-700 bg-yellow-900/10" : "border-yellow-300 bg-yellow-50"}`, children: [
            /* @__PURE__ */ e("p", { className: "text-xs font-bold uppercase tracking-widest text-yellow-600", children: "Annual revenue with Graffisol" }),
            /* @__PURE__ */ t("p", { className: "text-2xl font-display font-medium text-yellow-700 mt-1", children: [
              ge((n.baselineRevenuePerKw || 0) + (n.fullReturnPerKw || 0)),
              /* @__PURE__ */ e("span", { className: "text-sm font-normal text-yellow-500 ml-1", children: "/kW/yr" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl border-2 overflow-hidden ${a ? "border-yellow-800 bg-yellow-950/20" : "border-yellow-200 bg-white"}`, children: [
            /* @__PURE__ */ t("div", { className: `px-4 py-2 flex items-center justify-between ${a ? "bg-yellow-900/40 border-b border-yellow-800/50" : "bg-yellow-50 border-b border-yellow-100"}`, children: [
              /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-widest text-yellow-600", children: "Graffisol Application" }),
              /* @__PURE__ */ t("span", { className: `text-[9px] font-bold px-2 py-0.5 rounded-full ${a ? "bg-yellow-800/70 text-yellow-300" : "bg-yellow-200 text-yellow-700"}`, children: [
                n.applicationRateMlM2 || 65,
                " ml/m²"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `grid grid-cols-2 divide-x ${a ? "divide-yellow-800/40" : "divide-yellow-100"}`, children: [
              /* @__PURE__ */ t("div", { className: "p-4", children: [
                /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider mb-1.5 ${a ? "text-yellow-400" : "text-yellow-600"}`, children: "Volume Needed" }),
                /* @__PURE__ */ t("p", { className: `text-2xl font-display font-bold tabular-nums leading-none ${a ? "text-yellow-200" : "text-yellow-800"}`, children: [
                  n.productLitresTotal || 0,
                  /* @__PURE__ */ e("span", { className: `text-sm font-normal ml-1 ${a ? "text-yellow-400" : "text-yellow-500"}`, children: "L" })
                ] }),
                /* @__PURE__ */ t("p", { className: "text-[10px] mt-1.5 font-mono text-yellow-500", children: [
                  n.applicationRateMlM2 || 65,
                  " ml × ",
                  (r.systemSize || 0).toLocaleString(),
                  " kW × ",
                  n.panelAreaM2PerKw || 5.3,
                  " m²/kW"
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "p-4", children: [
                /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider mb-1.5 ${a ? "text-yellow-400" : "text-yellow-600"}`, children: "Additive Cost" }),
                /* @__PURE__ */ e("p", { className: `text-2xl font-display font-bold tabular-nums leading-none ${a ? "text-yellow-200" : "text-yellow-800"}`, children: K(n.additiveCostTotal || 0) }),
                /* @__PURE__ */ t("p", { className: "text-[10px] mt-1.5 font-mono text-yellow-500", children: [
                  "₹",
                  (n.graffisolProductPricePerLitre || 2500).toLocaleString("en-IN"),
                  "/L × ",
                  n.productLitresTotal || 0,
                  " L"
                ] }),
                /* @__PURE__ */ t("div", { className: `flex items-center justify-between mt-2 pt-1.5 border-t ${a ? "border-yellow-800/40" : "border-yellow-100"}`, children: [
                  /* @__PURE__ */ e("span", { className: "text-[10px] text-yellow-500", children: "+ Installation" }),
                  /* @__PURE__ */ e("span", { className: `text-[10px] font-mono font-semibold ${a ? "text-yellow-400" : "text-yellow-600"}`, children: K(n.serviceCostTotal || 0) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e("div", { className: `px-4 py-2 ${a ? "bg-yellow-900/20 border-t border-yellow-800/30" : "bg-yellow-50/80 border-t border-yellow-100"}`, children: /* @__PURE__ */ t("p", { className: "text-[10px] text-yellow-500", children: [
              "Total: ",
              K(n.applicationCostTotal || 0),
              " · Annual return: ",
              K(n.fullReturnTotal || 0),
              "/yr · Payback: ",
              n.paybackLabel || "—",
              " · ROI: ",
              n.roiPercentage != null ? `${n.roiPercentage}%` : "—"
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: `rounded-xl border ${o} ${a ? "bg-neutral-800/30" : "bg-neutral-50"} p-5 mt-auto`, children: [
          /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-wider ${N} mb-4`, children: [
            "Project Total · ",
            (r.systemSize || 0).toLocaleString(),
            " kW"
          ] }),
          /* @__PURE__ */ t("div", { className: "space-y-2", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ e("span", { className: `text-sm ${N}`, children: "Application cost" }),
              /* @__PURE__ */ e("span", { className: `text-sm font-mono font-semibold ${a ? "text-neutral-300" : "text-neutral-600"}`, children: K(n.applicationCostTotal || 0) })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ e("span", { className: `text-sm ${N}`, children: "Annual full return" }),
              /* @__PURE__ */ t("span", { className: "text-sm font-mono font-semibold text-green-600", children: [
                "+",
                K(n.fullReturnTotal || 0),
                "/yr"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `pt-2 border-t ${o} space-y-1.5`, children: [
              /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ t("span", { className: `text-xs ${N}`, children: [
                  "Power-boost only ",
                  /* @__PURE__ */ e("span", { className: "opacity-60", children: "(conservative)" })
                ] }),
                /* @__PURE__ */ t("span", { className: `text-sm font-mono font-semibold ${a ? "text-slate-300" : "text-slate-600"}`, children: [
                  "+",
                  K(n.powerOnlySavingsTotal || 0),
                  "/yr"
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ t("span", { className: `text-sm font-bold ${T}`, children: [
                  n.analysisPeriod || 20,
                  "-yr net profit"
                ] }),
                /* @__PURE__ */ e("span", { className: `text-xl font-bold font-mono ${a ? "text-green-400" : "text-green-700"}`, children: K(n.netProfitProjected || 0) })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: `lg:col-span-7 ${I} p-8 flex flex-col gap-6`, children: [
        /* @__PURE__ */ e("div", { className: `grid grid-cols-4 gap-0 rounded-xl overflow-hidden border ${o}`, children: [
          {
            label: "Payback",
            value: n.paybackLabel || "—",
            color: a ? "text-yellow-400" : "text-yellow-700",
            bg: a ? "bg-yellow-900/20" : "bg-yellow-50"
          },
          {
            label: "Annual Return",
            value: K(n.fullReturnTotal || 0),
            color: a ? "text-green-400" : "text-green-700",
            bg: a ? "bg-green-900/20" : "bg-green-50"
          },
          {
            label: "Extra Energy",
            value: Ot(n.totalAdditionalKwh || 0),
            color: a ? "text-yellow-400" : "text-yellow-700",
            bg: a ? "bg-yellow-900/20" : "bg-yellow-50"
          },
          {
            label: "CO₂/yr",
            value: `${n.co2AvoidedTPerYear || 0}t`,
            color: a ? "text-teal-400" : "text-teal-700",
            bg: a ? "bg-teal-900/20" : "bg-teal-50"
          }
        ].map(({ label: v, value: S, color: x, bg: C }, L) => /* @__PURE__ */ t("div", { className: `${C} py-2.5 px-2 text-center ${L < 3 ? `border-r ${o}` : ""}`, children: [
          /* @__PURE__ */ e("p", { className: `text-[8px] font-bold uppercase tracking-wider ${N} mb-0.5`, children: v }),
          /* @__PURE__ */ e("p", { className: `text-[11px] font-bold font-mono leading-tight ${x}`, children: S })
        ] }, v)) }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${N} mb-3`, children: "Annual revenue per kW — method comparison" }),
          /* @__PURE__ */ e("div", { className: "h-48", children: /* @__PURE__ */ e(O, { width: "100%", height: "100%", children: /* @__PURE__ */ t(he, { data: H, margin: { top: 20, right: 8, bottom: 0, left: -10 }, barSize: 52, children: [
            /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: a ? "#2a2a2a" : "#f1f5f9", vertical: !1 }),
            /* @__PURE__ */ e(_, { dataKey: "name", tick: { fontSize: 11, fill: a ? "#9ca3af" : "#64748b" }, tickLine: !1, axisLine: !1 }),
            /* @__PURE__ */ e(
              U,
              {
                domain: J,
                tickFormatter: (v) => `₹${(v / 1e3).toFixed(1)}k`,
                tick: { fontSize: 10, fill: a ? "#9ca3af" : "#64748b" },
                tickLine: !1,
                axisLine: !1
              }
            ),
            /* @__PURE__ */ e(q, { content: /* @__PURE__ */ e(lr, {}) }),
            /* @__PURE__ */ t(ne, { dataKey: "rev", radius: [6, 6, 0, 0], children: [
              H.map((v, S) => /* @__PURE__ */ e(Me, { fill: v.fill }, S)),
              /* @__PURE__ */ e(
                Se,
                {
                  dataKey: "rev",
                  position: "top",
                  formatter: (v) => `₹${(v / 1e3).toFixed(1)}k`,
                  style: { fontSize: 10, fontWeight: 700, fill: a ? "#e5e7eb" : "#374151" }
                }
              )
            ] })
          ] }) }) }),
          /* @__PURE__ */ t("p", { className: `text-[11px] text-center mt-1 ${N}`, children: [
            "Gap between green and amber bar = soiling recovery + maintenance ( ₹",
            ((n.soilingRevenuePerKw || 0) + (n.maintenancePerKw || 0)).toLocaleString("en-IN"),
            "/kW/yr)"
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ t("div", { className: `p-5 rounded-2xl border-2 ${a ? "border-yellow-700 bg-yellow-900/10" : "border-yellow-300 bg-yellow-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ e("p", { className: "text-xs font-bold uppercase tracking-widest text-yellow-600", children: n.fullReturnLabel || "Full Annual Return" }),
              /* @__PURE__ */ e("span", { className: `text-[9px] font-bold px-1.5 py-0.5 rounded ${a ? "bg-neutral-700 text-neutral-300" : "bg-neutral-900 text-white"}`, children: "ALL-IN" })
            ] }),
            /* @__PURE__ */ e("p", { className: "text-3xl font-display font-medium tabular-nums text-yellow-700", children: K(n.fullReturnTotal || 0) }),
            /* @__PURE__ */ t("p", { className: "text-xs mt-1.5 text-yellow-600", children: [
              "+",
              ge(n.fullReturnPerKw || 0),
              "/kW/yr · power + soiling + maintenance"
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-5 rounded-2xl border ${a ? "border-slate-700 bg-slate-800/30" : "border-slate-200 bg-slate-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${a ? "text-slate-400" : "text-slate-500"}`, children: n.powerOnlyLabel || "Power Boost" }),
              /* @__PURE__ */ e("span", { className: `text-[9px] font-bold px-1.5 py-0.5 rounded ${a ? "bg-slate-700 text-slate-300" : "bg-slate-200 text-slate-600"}`, children: "CONSERVATIVE" })
            ] }),
            /* @__PURE__ */ e("p", { className: `text-3xl font-display font-medium tabular-nums ${a ? "text-slate-200" : "text-slate-700"}`, children: K(n.powerOnlySavingsTotal || 0) }),
            /* @__PURE__ */ t("p", { className: `text-xs mt-1.5 ${a ? "text-slate-500" : "text-slate-400"}`, children: [
              "+",
              ge(n.powerOnlySavingsPerKw || 0),
              "/kW/yr · direct output gain only"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${o} ${a ? "bg-neutral-800/50" : "bg-white"} flex items-center gap-4`, children: [
            /* @__PURE__ */ e(A, { className: "w-5 h-5 text-yellow-500 flex-shrink-0" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${N}`, children: "Annual ROI" }),
              /* @__PURE__ */ e("p", { className: `text-2xl font-display font-medium tabular-nums ${T}`, children: n.roiPercentage != null ? `${n.roiPercentage}%` : "—" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${o} ${a ? "bg-neutral-800/50" : "bg-white"} flex items-center gap-4`, children: [
            /* @__PURE__ */ e(W, { className: "w-5 h-5 text-green-500 flex-shrink-0" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${N}`, children: "Payback" }),
              /* @__PURE__ */ e("p", { className: "text-base font-display font-medium text-green-600", children: n.paybackLabel || "—" })
            ] })
          ] })
        ] }),
        n.roiMultiple != null && /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${a ? "border-yellow-700 bg-yellow-900/10" : "border-yellow-200 bg-yellow-50"} flex items-center gap-4`, children: [
          /* @__PURE__ */ e(A, { className: "w-5 h-5 text-yellow-500 flex-shrink-0" }),
          /* @__PURE__ */ t("div", { className: "flex-1", children: [
            /* @__PURE__ */ t("p", { className: `text-[10px] font-bold uppercase tracking-wider ${a ? "text-yellow-400" : "text-yellow-600"}`, children: [
              n.analysisPeriod || 20,
              "-yr Return Multiple"
            ] }),
            /* @__PURE__ */ t("p", { className: `text-2xl font-display font-medium tabular-nums ${a ? "text-yellow-300" : "text-yellow-700"}`, children: [
              n.roiMultiple,
              "×"
            ] }),
            /* @__PURE__ */ e("p", { className: `text-[9px] mt-0.5 ${a ? "text-yellow-500" : "text-yellow-400"}`, children: "net profit ÷ application cost" })
          ] }),
          /* @__PURE__ */ t("div", { className: "text-right flex-shrink-0", children: [
            /* @__PURE__ */ t("p", { className: `text-[9px] font-bold uppercase tracking-wider ${N} mb-0.5`, children: [
              n.analysisPeriod || 20,
              "-yr Profit"
            ] }),
            /* @__PURE__ */ e("p", { className: `text-lg font-bold font-mono ${a ? "text-yellow-300" : "text-yellow-700"}`, children: K(n.netProfitProjected || 0) })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border ${o} ${a ? "bg-neutral-800/30" : "bg-white"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${N} mb-1`, children: "Investment" }),
            /* @__PURE__ */ e("p", { className: `text-sm font-bold tabular-nums ${T}`, children: K(n.applicationCostTotal || 0) })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border border-yellow-500/25 ${a ? "bg-yellow-900/10" : "bg-yellow-50"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-yellow-600/70 mb-1", children: "Extra Energy" }),
            /* @__PURE__ */ e("p", { className: "text-sm font-bold text-yellow-600 tabular-nums", children: Ot(n.totalAdditionalKwh || 0) }),
            /* @__PURE__ */ e("p", { className: "text-[10px] text-yellow-500/60", children: "per year" })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border border-teal-500/25 ${a ? "bg-teal-900/10" : "bg-teal-50"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-teal-600/70 mb-1", children: "CO₂ Avoided" }),
            /* @__PURE__ */ t("p", { className: "text-sm font-bold text-teal-600 tabular-nums", children: [
              n.co2AvoidedTPerYear || 0,
              /* @__PURE__ */ e("span", { className: "text-[10px] font-normal ml-0.5", children: "t/yr" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: `flex-grow border ${o} rounded-2xl ${a ? "bg-neutral-800/50" : "bg-white"} p-5`, children: [
          /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-widest ${N} mb-3`, children: [
            n.analysisPeriod || 20,
            "-Year ROI Projection — Payback at ",
            n.paybackLabel || "—"
          ] }),
          te.length > 0 && /* @__PURE__ */ e("div", { className: "h-28", children: /* @__PURE__ */ e(O, { width: "100%", height: "100%", children: /* @__PURE__ */ t(Qe, { data: te, margin: { top: 4, right: 12, bottom: 4, left: -18 }, children: [
            /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: a ? "#2a2a2a" : "#f1f5f9", vertical: !1 }),
            /* @__PURE__ */ e(_, { dataKey: "year", stroke: a ? "#525252" : "#94a3b8", fontSize: 10, tickLine: !1, axisLine: !1, tickMargin: 6, tickFormatter: (v) => `Yr ${v}` }),
            /* @__PURE__ */ e(U, { stroke: a ? "#525252" : "#94a3b8", fontSize: 10, tickLine: !1, axisLine: !1, tickMargin: 6, tickFormatter: K }),
            /* @__PURE__ */ e(fe, { y: 0, stroke: a ? "#555" : "#cbd5e1", strokeDasharray: "4 2" }),
            /* @__PURE__ */ e(
              q,
              {
                contentStyle: { backgroundColor: a ? "#171717" : "#fff", border: `1px solid ${a ? "#404040" : "#e2e8f0"}`, borderRadius: "8px", fontSize: "11px", color: a ? "#fff" : "#111" },
                formatter: (v) => [K(v), "Cumulative"],
                labelFormatter: (v) => v === 0 ? "After application (Year 0)" : `Year ${v}`
              }
            ),
            /* @__PURE__ */ e(re, { type: "monotone", dataKey: "cumulative", stroke: "#f59e0b", strokeWidth: 2.5, dot: { fill: "#f59e0b", r: 3, strokeWidth: 0 }, activeDot: { r: 5, strokeWidth: 0 } })
          ] }) }) }),
          /* @__PURE__ */ t("p", { className: `text-[10px] ${N} mt-2`, children: [
            "Starts at −",
            K(n.applicationCostTotal || 0),
            " (application cost). Line crosses zero at payback. Annual gains added each year."
          ] })
        ] }),
        (n.netProfitProjected || 0) > 0 && /* @__PURE__ */ t("div", { className: `rounded-2xl p-6 flex items-center justify-between ${a ? "bg-neutral-800 border border-neutral-700" : "bg-neutral-900"}`, children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ t("p", { className: "text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1", children: [
              n.analysisPeriod || 20,
              "-yr total · ",
              (r.systemSize || 0).toLocaleString(),
              " kW"
            ] }),
            /* @__PURE__ */ e("p", { className: "text-3xl font-display font-medium text-white", children: K(n.netProfitProjected || 0) }),
            /* @__PURE__ */ t("p", { className: "text-[10px] text-neutral-500 mt-1", children: [
              "Annual ",
              K(n.fullReturnTotal || 0),
              " × ",
              n.analysisPeriod || 20,
              " yr − ",
              K(n.applicationCostTotal || 0),
              " investment"
            ] })
          ] }),
          n.roiMultiple && /* @__PURE__ */ t("div", { className: "text-right flex-shrink-0 ml-6", children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1", children: "Return Multiple" }),
            /* @__PURE__ */ t("p", { className: "text-4xl font-display font-bold text-yellow-400", children: [
              n.roiMultiple,
              "×"
            ] }),
            /* @__PURE__ */ e("p", { className: "text-[10px] text-neutral-500 mt-1", children: "on coating spend" })
          ] })
        ] }),
        /* @__PURE__ */ t("p", { className: `text-[10px] leading-relaxed flex items-start gap-1.5 ${N}`, children: [
          /* @__PURE__ */ e(ze, { className: "w-3 h-3 flex-shrink-0 mt-0.5 opacity-60" }),
          "Results depend on panel type, location, soiling conditions, and local electricity tariff. Calculator uses typical India-average assumptions (1,500 kWh/kW/yr baseline, 15% moderate soiling loss). Field-validated data: 7–12% output gain, 30–40% soiling loss reduction."
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ t("div", { className: `border-t ${o} ${R}`, children: [
      /* @__PURE__ */ t(
        "button",
        {
          onClick: () => y((v) => !v),
          className: `w-full px-8 py-4 flex items-center justify-between text-sm font-medium ${T} transition-colors ${a ? "hover:bg-neutral-800/60" : "hover:bg-neutral-50"}`,
          children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3 flex-wrap", children: [
              /* @__PURE__ */ e("span", { children: "Lifecycle & Scenario Settings" }),
              /* @__PURE__ */ e("span", { className: `text-xs px-1.5 py-0.5 rounded font-medium ${a ? "bg-neutral-700 text-neutral-400" : "bg-neutral-100 text-neutral-500"}`, children: "Estimates" }),
              n.lifecycle?.total > 0 && /* @__PURE__ */ t("span", { className: `text-xs px-2.5 py-0.5 rounded-full font-mono ${a ? "bg-green-900/30 text-green-400" : "bg-green-100 text-green-700"}`, children: [
                "+",
                K(n.lifecycle.total),
                " panel life extension"
              ] })
            ] }),
            /* @__PURE__ */ e(Ue, { className: `w-4 h-4 flex-shrink-0 transition-transform duration-200 ${N} ${w ? "rotate-180" : ""}` })
          ]
        }
      ),
      /* @__PURE__ */ e(se, { initial: !1, children: w && /* @__PURE__ */ e(
        f.div,
        {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.22, ease: "easeInOut" },
          className: "overflow-hidden",
          children: /* @__PURE__ */ t("div", { className: `px-8 pb-10 pt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 ${I}`, children: [
            /* @__PURE__ */ t("div", { className: "space-y-5", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-wider ${N}`, children: "Scenario Parameters" }),
              Object.entries(c).map(([v, S]) => S.type === "buttongroup" ? /* @__PURE__ */ e("div", { children: D(v, S) }, v) : null)
            ] }),
            /* @__PURE__ */ t("div", { className: "space-y-3", children: [
              /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-wider ${N}`, children: [
                "Lifecycle Value Estimate (",
                r.analysisPeriod || 20,
                " yr)"
              ] }),
              /* @__PURE__ */ t("div", { className: `flex items-center justify-between px-4 py-3 rounded-xl border ${o} ${a ? "bg-neutral-800/30" : "bg-white"}`, children: [
                /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ e(Ee, { className: "w-4 h-4 text-green-500 flex-shrink-0" }),
                  /* @__PURE__ */ e("span", { className: `text-sm ${T}`, children: "Panel life extension (reduced thermal stress)" })
                ] }),
                /* @__PURE__ */ t("span", { className: "text-sm font-mono font-semibold text-green-600", children: [
                  "+",
                  K(n.lifecycle?.lifeExtension || 0)
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: `flex items-center justify-between px-4 py-3.5 rounded-xl border-2 mt-1 ${a ? "border-green-800 bg-green-900/20" : "border-green-200 bg-green-50"}`, children: [
                /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e(Ee, { className: "w-4 h-4 text-green-600" }),
                  /* @__PURE__ */ e("span", { className: `text-sm font-bold ${a ? "text-green-400" : "text-green-800"}`, children: "Total Lifecycle Value" })
                ] }),
                /* @__PURE__ */ t("span", { className: `text-lg font-bold font-mono ${a ? "text-green-400" : "text-green-700"}`, children: [
                  "+",
                  K(n.lifecycle?.total || 0)
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: `px-4 py-3 rounded-xl border ${o} ${a ? "bg-neutral-800/30" : "bg-white"}`, children: [
                /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ t("span", { className: `text-sm font-bold ${T}`, children: [
                    "All-in over ",
                    r.analysisPeriod || 20,
                    " yr"
                  ] }),
                  /* @__PURE__ */ e("span", { className: `text-lg font-bold font-mono ${a ? "text-green-400" : "text-green-700"}`, children: K((n.netProfitProjected || 0) + (n.lifecycle?.total || 0)) })
                ] }),
                /* @__PURE__ */ t("p", { className: `text-[10px] ${N} mt-1`, children: [
                  "Net profit ",
                  K(n.netProfitProjected || 0),
                  " + lifecycle ",
                  K(n.lifecycle?.total || 0)
                ] })
              ] })
            ] })
          ] })
        },
        "sec"
      ) })
    ] })
  ] });
}, ir = (i) => {
  const l = Math.pow(10, Number(i) / 100 * 4);
  return l < 10 ? Math.max(1, Math.round(l)) : l < 100 ? Math.round(l / 5) * 5 : l < 1e3 ? Math.round(l / 10) * 10 : Math.round(l / 100) * 100;
}, Ht = (i) => Math.round(Math.log10(Math.max(1, Math.min(1e4, i))) / 4 * 100), sr = [
  { v: 1, num: "1", label: ["Small", "pour"] },
  { v: 10, num: "10", label: ["House", "slab"] },
  { v: 100, num: "100", label: ["Building", "floor"] },
  { v: 1e3, num: "1k", label: ["Complex", "block"] },
  { v: 1e4, num: "10k", label: ["Township", "project"] }
], or = (i) => i <= 5 ? "Small column or footing" : i <= 50 ? "House slab or foundation" : i <= 300 ? "Building floor or structure" : i <= 1e3 ? "Multi-storey residential block" : i <= 5e3 ? "Large complex or infrastructure" : "Township-scale or major infrastructure project", E = (i) => {
  const l = Math.abs(i ?? 0), c = i < 0 ? "−" : "";
  return l >= 1e7 ? `${c}₹${(l / 1e7).toFixed(1)} Cr` : l >= 1e5 ? `${c}₹${(l / 1e5).toFixed(1)} L` : l >= 1e3 ? `${c}₹${Math.round(l / 1e3)}k` : `${c}₹${Math.round(l)}`;
}, yt = (i) => `${(i ?? 0) < 0 ? "−" : ""}₹${Math.abs(Math.round(i ?? 0)).toLocaleString("en-IN")}`, dr = ({ active: i, payload: l, label: c }) => !i || !l?.length ? null : /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-xl p-3 shadow-lg text-sm", children: [
  /* @__PURE__ */ e("p", { className: "font-bold text-neutral-800 mb-0.5", children: c }),
  /* @__PURE__ */ t("p", { className: "text-neutral-600", children: [
    "₹",
    l[0].value?.toLocaleString("en-IN"),
    "/m³"
  ] })
] }), cr = ({ active: i, payload: l, label: c }) => !i || !l?.length ? null : /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-xl p-3 shadow-lg text-sm", children: [
  /* @__PURE__ */ e("p", { className: "font-bold text-neutral-800 mb-1", children: c }),
  l.map((d) => /* @__PURE__ */ t("p", { className: "text-neutral-600", style: { color: d.fill }, children: [
    d.name,
    ": ",
    d.value,
    " MPa"
  ] }, d.name))
] }), Kr = ({
  calculations: i,
  defaultInputs: l,
  secondaryInputs: c,
  theme: d = "light"
}) => {
  const a = d === "dark", s = ($) => ({
    background: `linear-gradient(to right, #6366f1 ${$.toFixed(1)}%, ${a ? "#374151" : "#e5e7eb"} ${$.toFixed(1)}%)`
  }), p = "w-full h-2 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-indigo-600 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-indigo-600 [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-pointer", u = { ...l, ...c || {} }, b = Object.keys(u).reduce(($, P) => {
    const j = u[P];
    return $[P] = j.default !== void 0 ? j.default : (j.min + j.max) / 2, $;
  }, {}), [r, h] = M(b), [m, g] = M(String(b.projectVolume || 500)), [w, y] = M(!0), [k, n] = M(!1), [G, R] = M("cost"), I = ($, P) => h((j) => ({ ...j, [$]: P })), o = Q(() => i(r), [r, i]), T = () => {
    h(b), g(String(b.projectVolume || 500));
  }, N = (o.netSavingsPerM3 ?? 0) > 0, F = (o.gradeOnlySavingsPerM3 ?? 0) > 0, H = Q(() => o.baseCostPerM3 ? [
    { name: `M${o.baseGrade}`, cost: o.baseCostPerM3, fill: "#94a3b8" },
    { name: `M${o.baseGrade}+G`, cost: o.netCostWithGraphacretePerM3, fill: "#22c55e" },
    {
      name: `M${o.targetGrade}`,
      cost: o.targetCostPerM3,
      fill: N ? "#f87171" : "#64748b"
    }
  ] : [], [o, N]), J = Q(() => {
    if (!H.length) return [3e3, 6e3];
    const $ = H.map((P) => P.cost);
    return [
      Math.floor(Math.min(...$) / 500) * 500 - 300,
      Math.ceil(Math.max(...$) / 500) * 500 + 250
    ];
  }, [H]), te = Q(() => {
    if (o.productCostTotal == null) return [];
    const $ = (o.lifecycle?.total || 0) / (r.analysisPeriod || 10);
    return Array.from({ length: 11 }, (P, j) => ({
      year: j,
      cumulative: Math.round((o.netSavingsTotal || 0) + $ * j)
    }));
  }, [o, r.analysisPeriod]), le = Q(() => o.baseMPa ? [
    { name: "7-Day", base: o.baseAt7DayMPa, withG: o.graphAt7DayMPa, target: o.targetAt7DayMPa },
    { name: "28-Day", base: o.baseMPa, withG: o.graphAt28DayMPa, target: o.targetMPa }
  ] : [], [o]), ue = a ? "bg-neutral-900" : "bg-white", ie = a ? "bg-neutral-950/40" : "bg-neutral-50/60", B = a ? "border-neutral-700" : "border-neutral-200", D = a ? "text-white" : "text-neutral-900", v = a ? "text-neutral-400" : "text-neutral-500", S = `w-full border ${B} rounded-lg px-3 py-2.5 text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${a ? "bg-neutral-800 text-white" : "bg-white text-neutral-900"}`, x = () => {
    const $ = r.projectVolume || 1;
    return /* @__PURE__ */ t("div", { className: "space-y-2.5", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${D}`, children: "Concrete Volume" }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "number",
              value: m,
              min: 1,
              max: 1e4,
              onChange: (P) => {
                g(P.target.value);
                const j = parseInt(P.target.value, 10);
                !isNaN(j) && j >= 1 && j <= 1e4 && I("projectVolume", j);
              },
              onBlur: () => g(String($)),
              className: `w-20 text-right text-sm font-mono border ${B} rounded px-2 py-1 ${a ? "bg-neutral-800 text-white" : "bg-white text-neutral-900"} focus:outline-none focus:ring-1 focus:ring-indigo-500`
            }
          ),
          /* @__PURE__ */ e("span", { className: `text-sm font-medium ${D}`, children: "m³" })
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: 0,
          max: 100,
          value: Ht($),
          onChange: (P) => {
            const j = ir(P.target.value);
            I("projectVolume", j), g(String(j));
          },
          className: p,
          style: s(Ht($))
        }
      ),
      /* @__PURE__ */ e("div", { className: "flex justify-between", children: sr.map(({ v: P, num: j, label: oe }) => /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-0.5 w-10", children: [
        /* @__PURE__ */ e("span", { className: `text-[10px] font-semibold ${D}`, children: j }),
        oe.map((de, et) => /* @__PURE__ */ e("span", { className: `text-[9px] ${v} text-center leading-tight`, children: de }, et))
      ] }, P)) }),
      /* @__PURE__ */ t("p", { className: `text-[11px] italic ${v}`, children: [
        "≈ ",
        or($)
      ] })
    ] });
  }, C = () => {
    const $ = l.targetStrength;
    return $ ? /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${D}`, children: $.label }),
      /* @__PURE__ */ e(
        "select",
        {
          value: r.targetStrength,
          onChange: (P) => I("targetStrength", Number(P.target.value)),
          className: S,
          children: $.options.map((P) => /* @__PURE__ */ t("option", { value: P.value, children: [
            P.label,
            P.badge ? " ✦" : "",
            " — ",
            P.description
          ] }, P.value))
        }
      ),
      o.isNABL ? /* @__PURE__ */ e("p", { className: "text-[11px] font-semibold text-green-600", children: "✦ NABL certified — M30 + Graphacrete ≈ M50" }) : /* @__PURE__ */ e("p", { className: `text-[11px] ${v}`, children: "Cement savings & lifecycle value apply at all grades." })
    ] }) : null;
  }, L = () => {
    const $ = l.cementPrice;
    if (!$) return null;
    const P = r.cementPrice;
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${D}`, children: $.label }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${a ? "text-indigo-400" : "text-indigo-600"}`, children: [
          "₹",
          P,
          "/bag"
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: $.min,
          max: $.max,
          step: $.step,
          value: P,
          onChange: (j) => I("cementPrice", Number(j.target.value)),
          className: p,
          style: s(Math.max(0, Math.min(100, (P - $.min) / ($.max - $.min) * 100)))
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${v}`, children: [
          "₹",
          $.min
        ] }),
        /* @__PURE__ */ e("span", { className: `text-[10px] ${v}`, children: "avg ₹320" }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${v}`, children: [
          "₹",
          $.max
        ] })
      ] })
    ] });
  }, X = () => {
    const $ = l.cementReductionPct;
    if (!$) return null;
    const P = r.cementReductionPct;
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${D}`, children: $.label }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${a ? "text-indigo-400" : "text-indigo-600"}`, children: [
          P,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: $.min,
          max: $.max,
          step: $.step,
          value: P,
          onChange: (j) => I("cementReductionPct", Number(j.target.value)),
          className: p,
          style: s(Math.max(0, Math.min(100, (P - $.min) / ($.max - $.min) * 100)))
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-[10px] ${v}`, children: "15% conservative" }),
        /* @__PURE__ */ e("span", { className: `text-[10px] ${v}`, children: "20% optimistic" })
      ] }),
      /* @__PURE__ */ e("p", { className: `text-[11px] ${v}`, children: "NABL certified range: 15–20%" })
    ] });
  }, ae = () => {
    const $ = l.strengthGain28;
    if (!$) return null;
    const P = r.strengthGain28 ?? $.default, j = Math.max(0, Math.min(100, (P - $.min) / ($.max - $.min) * 100));
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${D}`, children: $.label }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${a ? "text-green-400" : "text-green-600"}`, children: [
          P,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: $.min,
          max: $.max,
          step: $.step,
          value: P,
          onChange: (oe) => I("strengthGain28", Number(oe.target.value)),
          className: p,
          style: { background: `linear-gradient(to right, #16a34a ${j.toFixed(1)}%, ${a ? "#374151" : "#e5e7eb"} ${j.toFixed(1)}%)` }
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${v}`, children: [
          $.min,
          "% min"
        ] }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${v}`, children: [
          $.max,
          "% NABL max"
        ] })
      ] }),
      /* @__PURE__ */ e("p", { className: `text-[11px] ${v}`, children: $.note }),
      o.graphAt28DayMPa != null && /* @__PURE__ */ t("p", { className: "text-[11px] font-semibold text-green-600", children: [
        "→ M",
        o.baseMPa || 30,
        "+G = ",
        o.graphAt28DayMPa,
        " MPa · ",
        o.strengthGrade28Label,
        P === o.nablGainPct && /* @__PURE__ */ e("span", { className: "ml-1 text-[9px] font-bold text-green-500", children: "✦ NABL" })
      ] })
    ] });
  }, Ne = () => {
    const $ = l.strengthGain7;
    if (!$) return null;
    const P = r.strengthGain7 ?? $.default, j = Math.max(0, Math.min(100, (P - $.min) / ($.max - $.min) * 100));
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${D}`, children: $.label }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${a ? "text-orange-400" : "text-orange-600"}`, children: [
          P,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: $.min,
          max: $.max,
          step: $.step,
          value: P,
          onChange: (oe) => I("strengthGain7", Number(oe.target.value)),
          className: p,
          style: { background: `linear-gradient(to right, #ea580c ${j.toFixed(1)}%, ${a ? "#374151" : "#e5e7eb"} ${j.toFixed(1)}%)` }
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${v}`, children: [
          $.min,
          "% min"
        ] }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${v}`, children: [
          $.max,
          "% max"
        ] })
      ] }),
      /* @__PURE__ */ e("p", { className: `text-[11px] ${v}`, children: $.note }),
      o.graphAt7DayMPa != null && /* @__PURE__ */ t("p", { className: "text-[11px] font-semibold text-orange-600", children: [
        "→ M",
        o.baseMPa || 30,
        "+G = ",
        o.graphAt7DayMPa,
        " MPa at 7 days · strike in ",
        o.graphDaysToStrike,
        " days"
      ] })
    ] });
  }, Te = ($, P) => /* @__PURE__ */ t("div", { className: "flex items-center justify-between py-0.5", children: [
    /* @__PURE__ */ e("label", { className: `text-sm font-medium ${D}`, children: P.label }),
    /* @__PURE__ */ e(
      "button",
      {
        onClick: () => I($, !r[$]),
        className: `w-11 h-6 rounded-full relative flex-shrink-0 transition-colors ${r[$] ? "bg-indigo-600" : a ? "bg-neutral-700" : "bg-neutral-300"}`,
        children: /* @__PURE__ */ e("div", { className: `w-4 h-4 bg-white rounded-full absolute top-1 shadow-sm transition-all ${r[$] ? "left-6" : "left-1"}` })
      }
    )
  ] }), He = ($, P) => {
    const j = Math.max(0, Math.min(100, (r[$] - P.min) / (P.max - P.min) * 100));
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("label", { className: `text-sm font-medium ${D}`, children: P.label }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${a ? "text-indigo-400" : "text-indigo-600"}`, children: [
          r[$]?.toLocaleString(),
          " ",
          P.unit
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: P.min,
          max: P.max,
          step: P.step || 1,
          value: r[$],
          onChange: (oe) => I($, Number(oe.target.value)),
          className: p,
          style: s(j)
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${v}`, children: [
          P.min,
          " ",
          P.unit
        ] }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${v}`, children: [
          P.max,
          " ",
          P.unit
        ] })
      ] }),
      P.note && /* @__PURE__ */ e("p", { className: `text-[11px] ${v}`, children: P.note })
    ] });
  }, Xe = ($, P) => /* @__PURE__ */ t("div", { className: "space-y-2", children: [
    /* @__PURE__ */ e("label", { className: `text-sm font-medium ${D}`, children: P.label }),
    /* @__PURE__ */ e("div", { className: "flex gap-2", children: P.options.map((j) => /* @__PURE__ */ e(
      "button",
      {
        onClick: () => I($, j.value),
        className: `flex-1 py-1.5 rounded-lg text-sm font-medium border transition-all ${r[$] === j.value ? a ? "bg-white text-neutral-900 border-white" : "bg-neutral-900 text-white border-neutral-900" : a ? "text-neutral-400 border-neutral-700 hover:border-neutral-500" : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"}`,
        children: j.label
      },
      j.value
    )) })
  ] }), Ze = ($, P) => {
    if (P.showWhen && r[P.showWhen.key] !== P.showWhen.value) return null;
    switch (P.type) {
      case "toggle":
        return Te($, P);
      case "slider":
        return He($, P);
      case "buttongroup":
        return Xe($, P);
      default:
        return null;
    }
  }, Je = o.lifecycle ? [
    { icon: wa, label: "Waterproofing avoided", value: o.lifecycle.waterproofing, color: "text-blue-500" },
    { icon: Pe, label: "Construction time", value: o.lifecycle.construction, color: "text-orange-500" },
    { icon: A, label: "Life extension (est.)", value: o.lifecycle.lifeExtension, color: "text-green-500" },
    { icon: ea, label: "Energy / cooling", value: o.lifecycle.thermal, color: "text-yellow-500" },
    { icon: ka, label: "Maintenance", value: o.lifecycle.maintenance, color: "text-purple-500" }
  ] : [];
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${B} overflow-hidden shadow-2xl`, children: [
    /* @__PURE__ */ t("div", { className: `px-6 py-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs ${a ? "bg-indigo-950/40 border-b border-indigo-900/50" : "bg-indigo-50 border-b border-indigo-100"}`, children: [
      /* @__PURE__ */ e(pe, { className: "w-3.5 h-3.5 text-indigo-500 flex-shrink-0" }),
      /* @__PURE__ */ e("span", { className: "font-bold uppercase tracking-wider text-indigo-500", children: "NABL Certified" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: [
        "M",
        o.baseGrade || 30,
        " + Graphacrete ≈ M",
        o.targetGrade || 50
      ] }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: `font-bold ${N ? "text-green-600" : "text-amber-500"}`, children: [
        "Net: ",
        N ? "+" : "−",
        "₹",
        Math.abs(o.netSavingsPerM3 || 0).toLocaleString("en-IN"),
        "/m³"
      ] }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: `font-semibold ${F ? a ? "text-slate-400" : "text-slate-600" : v}`, children: [
        "Grade-only: ",
        F ? "+" : "−",
        "₹",
        Math.abs(o.gradeOnlySavingsPerM3 || 0).toLocaleString("en-IN"),
        "/m³"
      ] }),
      /* @__PURE__ */ t("div", { className: "ml-auto flex items-center flex-shrink-0 rounded-full overflow-hidden border border-neutral-300/60", children: [
        /* @__PURE__ */ e(
          "button",
          {
            onClick: () => n(!1),
            className: `px-2.5 py-1 text-[10px] font-semibold transition-colors ${k ? a ? "text-neutral-400 bg-neutral-800 hover:bg-neutral-700" : "text-neutral-500 bg-white hover:bg-neutral-50" : "bg-indigo-600 text-white"}`,
            children: "Owner"
          }
        ),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: () => n(!0),
            className: `px-2.5 py-1 text-[10px] font-semibold transition-colors flex items-center gap-1 ${k ? "bg-amber-500 text-white" : a ? "text-neutral-400 bg-neutral-800 hover:bg-neutral-700" : "text-neutral-500 bg-white hover:bg-neutral-50"}`,
            children: [
              /* @__PURE__ */ e(Dt, { className: "w-2.5 h-2.5" }),
              "Contractor"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: `grid grid-cols-2 lg:grid-cols-3 gap-6 px-8 py-7 border-b ${B} ${ue}`, children: [
      /* @__PURE__ */ e(x, {}),
      /* @__PURE__ */ e(C, {}),
      /* @__PURE__ */ e(L, {}),
      /* @__PURE__ */ e(X, {}),
      /* @__PURE__ */ e(ae, {}),
      /* @__PURE__ */ e(Ne, {})
    ] }),
    /* @__PURE__ */ t("div", { className: `px-8 py-2.5 flex items-center justify-between border-b ${B} ${a ? "bg-neutral-900/80" : "bg-indigo-50/60"}`, children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5 flex-wrap text-[10px]", children: [
        /* @__PURE__ */ e(ve, { className: `w-3 h-3 flex-shrink-0 ${a ? "text-indigo-400" : "text-indigo-600"}` }),
        /* @__PURE__ */ e("span", { className: `font-bold uppercase tracking-wider ${a ? "text-indigo-400" : "text-indigo-600"}`, children: "Verified Formulas" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ t("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: [
          "₹",
          o.additiveCostPerM3 || 470,
          "/m³ additive (fixed)"
        ] }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ t("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: [
          r.cementReductionPct || 15,
          "% cement reduction"
        ] }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: "IS 456 · NABL Certified" })
      ] }),
      /* @__PURE__ */ t(
        "button",
        {
          onClick: T,
          className: `flex items-center gap-1.5 text-[10px] font-semibold px-3 py-1.5 rounded-lg border transition-colors flex-shrink-0 ${a ? "text-neutral-400 border-neutral-700 hover:bg-neutral-800 hover:text-neutral-200" : "text-neutral-500 border-neutral-200 hover:bg-white hover:text-neutral-700"}`,
          children: [
            /* @__PURE__ */ e(De, { className: "w-3 h-3" }),
            "Reset"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: `grid grid-cols-1 lg:grid-cols-12 ${ue}`, children: [
      /* @__PURE__ */ t("div", { className: `lg:col-span-5 p-8 border-b lg:border-b-0 lg:border-r ${B} flex flex-col gap-6`, children: [
        /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-wider ${v}`, children: "Per m³ Cost Breakdown" }),
        /* @__PURE__ */ t("div", { className: "space-y-2", children: [
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border ${B} ${a ? "bg-neutral-800/50" : "bg-neutral-50"}`, children: [
            /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-widest ${v} mb-1`, children: [
              "M",
              o.baseGrade,
              " concrete (base mix)"
            ] }),
            /* @__PURE__ */ t("p", { className: `text-2xl font-display font-medium ${D}`, children: [
              yt(o.baseCostPerM3 || 0),
              /* @__PURE__ */ e("span", { className: `text-sm font-normal ${v} ml-1`, children: "/m³" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl border-2 overflow-hidden ${a ? "border-blue-800 bg-blue-950/20" : "border-blue-200 bg-white"}`, children: [
            /* @__PURE__ */ t("div", { className: `px-4 py-2 flex items-center justify-between ${a ? "bg-blue-900/40 border-b border-blue-800/50" : "bg-blue-50 border-b border-blue-100"}`, children: [
              /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-widest text-blue-500", children: "Additive Requirement" }),
              /* @__PURE__ */ t("span", { className: `text-[9px] font-bold px-2 py-0.5 rounded-full ${a ? "bg-blue-800/70 text-blue-300" : "bg-blue-200 text-blue-700"}`, children: [
                o.additiveVolumeLitresPerM3 || 2,
                " L/m³ · ",
                o.additiveMlPerBag || 250,
                " ml / ",
                o.cementBagWeightKg || 50,
                " kg bag"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `grid grid-cols-2 divide-x ${a ? "divide-blue-800/40" : "divide-blue-100"}`, children: [
              /* @__PURE__ */ t("div", { className: "p-4", children: [
                /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider mb-1.5 ${a ? "text-blue-400" : "text-blue-500"}`, children: "Volume Needed" }),
                /* @__PURE__ */ t("p", { className: `text-2xl font-display font-bold tabular-nums leading-none ${a ? "text-blue-200" : "text-blue-800"}`, children: [
                  (o.additiveVolumeLitresTotal || 0).toLocaleString("en-IN"),
                  /* @__PURE__ */ e("span", { className: `text-sm font-normal ml-1 ${a ? "text-blue-400" : "text-blue-500"}`, children: "L" })
                ] }),
                /* @__PURE__ */ t("p", { className: `text-[10px] mt-1.5 font-mono ${a ? "text-blue-500" : "text-blue-400"}`, children: [
                  o.additiveVolumeLitresPerM3 || 2,
                  " L × ",
                  (r.projectVolume || 0).toLocaleString("en-IN"),
                  " m³"
                ] }),
                /* @__PURE__ */ t("p", { className: `text-[10px] mt-1 ${a ? "text-blue-600" : "text-blue-400"}`, children: [
                  "= ",
                  o.additiveMlPerBag || 250,
                  " ml per ",
                  o.cementBagWeightKg || 50,
                  " kg bag"
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "p-4", children: [
                /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider mb-1.5 ${a ? "text-blue-400" : "text-blue-500"}`, children: "Additive Cost" }),
                /* @__PURE__ */ e("p", { className: `text-2xl font-display font-bold tabular-nums leading-none ${a ? "text-blue-200" : "text-blue-800"}`, children: E(o.productCostTotal || 0) }),
                /* @__PURE__ */ t("p", { className: `text-[10px] mt-1.5 font-mono ${a ? "text-blue-500" : "text-blue-400"}`, children: [
                  "₹",
                  o.additivePricePerLitre || 235,
                  "/L × ",
                  (o.additiveVolumeLitresTotal || 0).toLocaleString("en-IN"),
                  " L"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e("div", { className: `px-4 py-2 ${a ? "bg-blue-900/20 border-t border-blue-800/30" : "bg-blue-50/80 border-t border-blue-100"}`, children: /* @__PURE__ */ t("p", { className: `text-[10px] ${a ? "text-blue-500" : "text-blue-400"}`, children: [
              "₹",
              (o.additiveCostPerM3 || 0).toLocaleString("en-IN"),
              "/m³ · ",
              o.additiveVolumeLitresPerM3 || 2,
              " L/m³ @ ₹",
              o.additivePricePerLitre || 235,
              "/L"
            ] }) })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl p-3.5 border ${a ? "border-blue-800/40 bg-blue-900/10" : "border-blue-100 bg-blue-50"}`, children: [
            /* @__PURE__ */ e("p", { className: "text-xs font-bold uppercase tracking-widest text-blue-500 mb-2.5", children: "+ Graphacrete (net / m³)" }),
            /* @__PURE__ */ t("div", { className: "space-y-1.5 text-xs", children: [
              /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ e("span", { className: `${a ? "text-blue-400" : "text-blue-500"}`, children: "Additive" }),
                /* @__PURE__ */ t("span", { className: "font-mono font-semibold text-blue-500", children: [
                  "+₹",
                  (o.additiveCostPerM3 || 0).toLocaleString("en-IN")
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ t("span", { className: "text-green-600", children: [
                  "Cement saved (",
                  r.cementReductionPct,
                  "%)"
                ] }),
                /* @__PURE__ */ t("span", { className: "font-mono font-semibold text-green-600", children: [
                  "−₹",
                  (o.cementSavingsValuePerM3 || 0).toLocaleString("en-IN")
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: `flex justify-between items-center pt-1.5 border-t ${a ? "border-blue-800/40" : "border-blue-200/60"}`, children: [
                /* @__PURE__ */ e("span", { className: "font-bold text-blue-600", children: "Net addition/m³" }),
                /* @__PURE__ */ t("span", { className: "font-bold font-mono text-blue-600", children: [
                  (o.additiveCostPerM3 || 0) - (o.cementSavingsValuePerM3 || 0) >= 0 ? "+" : "−",
                  "₹",
                  Math.abs((o.additiveCostPerM3 || 0) - (o.cementSavingsValuePerM3 || 0)).toLocaleString("en-IN")
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 px-1", children: [
            /* @__PURE__ */ e("div", { className: `flex-1 h-px ${a ? "bg-neutral-700" : "bg-neutral-200"}` }),
            /* @__PURE__ */ e("span", { className: `text-[10px] uppercase font-bold ${v}`, children: "equals" }),
            /* @__PURE__ */ e("div", { className: `flex-1 h-px ${a ? "bg-neutral-700" : "bg-neutral-200"}` })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border-2 ${a ? "border-green-700 bg-green-900/10" : "border-green-300 bg-green-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ t("p", { className: "text-xs font-bold uppercase tracking-widest text-green-600", children: [
                "M",
                o.baseGrade,
                " + Graphacrete"
              ] }),
              /* @__PURE__ */ t("span", { className: "flex items-center gap-1 text-[10px] text-green-600 font-semibold", children: [
                /* @__PURE__ */ e(ve, { className: "w-3 h-3" }),
                "≈ M",
                o.targetGrade,
                " performance"
              ] })
            ] }),
            /* @__PURE__ */ t("p", { className: "text-2xl font-display font-medium text-green-700 mt-1", children: [
              yt(o.netCostWithGraphacretePerM3 || 0),
              /* @__PURE__ */ e("span", { className: "text-sm font-normal text-green-500 ml-1", children: "/m³" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl p-3.5 border ${a ? "border-neutral-700 bg-neutral-800/30" : "border-neutral-200 bg-neutral-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-widest ${v}`, children: [
                "Standard M",
                o.targetGrade,
                " (traditional)"
              ] }),
              /* @__PURE__ */ e("span", { className: `text-[10px] px-2 py-0.5 rounded-full font-semibold ${a ? "bg-neutral-700 text-neutral-400" : "bg-neutral-200 text-neutral-500"}`, children: "Baseline" })
            ] }),
            /* @__PURE__ */ t("p", { className: `text-xl font-display font-medium ${D} mt-0.5`, children: [
              yt(o.targetCostPerM3 || 0),
              /* @__PURE__ */ e("span", { className: `text-sm font-normal ${v} ml-1`, children: "/m³" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: `rounded-xl border ${B} ${a ? "bg-neutral-800/30" : "bg-neutral-50"} p-5`, children: [
          /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-wider ${v} mb-4`, children: [
            "Project Total · ",
            (r.projectVolume || 0).toLocaleString(),
            " m³"
          ] }),
          /* @__PURE__ */ t("div", { className: "space-y-2", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ t("span", { className: `text-sm ${v}`, children: [
                "Traditional M",
                o.targetGrade
              ] }),
              /* @__PURE__ */ e("span", { className: `text-sm font-mono font-semibold ${a ? "text-neutral-300" : "text-neutral-600"}`, children: E((o.targetCostPerM3 || 0) * (r.projectVolume || 0)) })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ e("span", { className: `text-sm ${v}`, children: "With Graphacrete" }),
              /* @__PURE__ */ e("span", { className: `text-sm font-mono font-semibold ${a ? "text-neutral-300" : "text-neutral-600"}`, children: E((o.netCostWithGraphacretePerM3 || 0) * (r.projectVolume || 0)) })
            ] }),
            /* @__PURE__ */ t("div", { className: `pt-2 border-t ${B} space-y-1.5`, children: [
              /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ t("span", { className: `text-xs ${v}`, children: [
                  "Grade-only savings ",
                  /* @__PURE__ */ e("span", { className: "opacity-60", children: "(brochure)" })
                ] }),
                /* @__PURE__ */ t("span", { className: `text-sm font-mono font-semibold ${F ? a ? "text-slate-300" : "text-slate-600" : v}`, children: [
                  F ? "" : "−",
                  E(Math.abs(o.gradeOnlySavingsTotal || 0))
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ e("span", { className: `text-sm font-bold ${D}`, children: "Net savings (all-in)" }),
                /* @__PURE__ */ t("span", { className: `text-xl font-bold font-mono ${N ? a ? "text-green-400" : "text-green-700" : a ? "text-amber-400" : "text-amber-600"}`, children: [
                  N ? "" : "−",
                  E(Math.abs(o.netSavingsTotal || 0))
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: `rounded-xl border ${B} overflow-hidden`, children: [
          /* @__PURE__ */ e("div", { className: `px-4 py-2 ${a ? "bg-neutral-800/60 border-b border-neutral-700" : "bg-neutral-100/80 border-b border-neutral-200"}`, children: /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-widest ${v}`, children: "Savings Breakdown" }) }),
          /* @__PURE__ */ t("div", { className: `grid grid-cols-3 ${a ? "divide-x divide-neutral-700" : "divide-x divide-neutral-200"}`, children: [
            /* @__PURE__ */ t("div", { className: `p-3 text-center ${a ? "bg-neutral-800/20" : "bg-white"}`, children: [
              /* @__PURE__ */ e("p", { className: `text-[9px] font-bold uppercase tracking-wider ${v} mb-2`, children: "Per m³" }),
              /* @__PURE__ */ e("p", { className: `text-[9px] ${v} mb-0.5`, children: "Additive" }),
              /* @__PURE__ */ t("p", { className: "text-xs font-mono font-bold text-blue-500", children: [
                "₹",
                o.additiveCostPerM3 || 470
              ] }),
              /* @__PURE__ */ e("div", { className: `my-1.5 border-t ${a ? "border-neutral-700" : "border-neutral-100"}` }),
              /* @__PURE__ */ e("p", { className: `text-[9px] ${v} mb-0.5`, children: N ? "Savings" : "Premium" }),
              /* @__PURE__ */ t("p", { className: `text-xs font-mono font-bold ${N ? "text-green-600" : "text-amber-500"}`, children: [
                N ? "+" : "−",
                "₹",
                Math.abs(o.netSavingsPerM3 || 0)
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `p-3 text-center ${a ? "bg-neutral-800/20" : "bg-white"}`, children: [
              /* @__PURE__ */ t("p", { className: `text-[9px] font-bold uppercase tracking-wider ${v} mb-2`, children: [
                "Per Pour",
                /* @__PURE__ */ t("span", { className: `block normal-case font-normal ${v}`, children: [
                  r.pourSize || 30,
                  "m³"
                ] })
              ] }),
              /* @__PURE__ */ e("p", { className: `text-[9px] ${v} mb-0.5`, children: "Additive" }),
              /* @__PURE__ */ e("p", { className: "text-xs font-mono font-bold text-blue-500", children: E(o.additiveCostPerPour || 0) }),
              /* @__PURE__ */ e("div", { className: `my-1.5 border-t ${a ? "border-neutral-700" : "border-neutral-100"}` }),
              /* @__PURE__ */ e("p", { className: `text-[9px] ${v} mb-0.5`, children: N ? "Savings" : "Premium" }),
              /* @__PURE__ */ t("p", { className: `text-xs font-mono font-bold ${N ? "text-green-600" : "text-amber-500"}`, children: [
                N ? "+" : "−",
                E(Math.abs(o.netSavingsPerPour || 0))
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `p-3 text-center ${a ? "bg-neutral-800/20" : "bg-white"}`, children: [
              /* @__PURE__ */ t("p", { className: `text-[9px] font-bold uppercase tracking-wider ${v} mb-2`, children: [
                "Project",
                /* @__PURE__ */ t("span", { className: `block normal-case font-normal ${v}`, children: [
                  (r.projectVolume || 0).toLocaleString(),
                  "m³"
                ] })
              ] }),
              /* @__PURE__ */ e("p", { className: `text-[9px] ${v} mb-0.5`, children: "Additive" }),
              /* @__PURE__ */ e("p", { className: "text-xs font-mono font-bold text-blue-500", children: E(o.productCostTotal || 0) }),
              /* @__PURE__ */ e("div", { className: `my-1.5 border-t ${a ? "border-neutral-700" : "border-neutral-100"}` }),
              /* @__PURE__ */ e("p", { className: `text-[9px] ${v} mb-0.5`, children: N ? "Savings" : "Premium" }),
              /* @__PURE__ */ t("p", { className: `text-xs font-mono font-bold ${N ? "text-green-600" : "text-amber-500"}`, children: [
                N ? "+" : "−",
                E(Math.abs(o.netSavingsTotal || 0))
              ] })
            ] })
          ] })
        ] }),
        k && (o.contractorMarginPerM3 || 0) > 0 && /* @__PURE__ */ t("div", { className: `rounded-xl border-2 overflow-hidden ${a ? "border-amber-700 bg-amber-900/10" : "border-amber-200 bg-amber-50"}`, children: [
          /* @__PURE__ */ t("div", { className: `px-4 py-2.5 flex items-center gap-2 ${a ? "bg-amber-900/30 border-b border-amber-700/50" : "bg-amber-100/80 border-b border-amber-200"}`, children: [
            /* @__PURE__ */ e(Dt, { className: "w-3.5 h-3.5 text-amber-600" }),
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-widest text-amber-600", children: "Contractor P&L" })
          ] }),
          /* @__PURE__ */ t("div", { className: "p-4 space-y-2.5 text-sm", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ t("span", { className: v, children: [
                "You charge (M",
                o.targetGrade,
                " rate)"
              ] }),
              /* @__PURE__ */ t("span", { className: `font-mono font-semibold ${D}`, children: [
                "₹",
                (o.contractorRevenuePerM3 || 0).toLocaleString("en-IN"),
                "/m³"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ t("span", { className: v, children: [
                "You pour (M",
                o.baseGrade,
                "+G cost)"
              ] }),
              /* @__PURE__ */ t("span", { className: `font-mono font-semibold ${D}`, children: [
                "₹",
                (o.contractorCostPerM3 || 0).toLocaleString("en-IN"),
                "/m³"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `flex justify-between items-center pt-2 border-t ${a ? "border-amber-700/40" : "border-amber-200"}`, children: [
              /* @__PURE__ */ e("span", { className: "font-bold text-amber-600", children: "Your gross margin" }),
              /* @__PURE__ */ t("span", { className: "font-bold font-mono text-amber-600", children: [
                "₹",
                (o.contractorMarginPerM3 || 0).toLocaleString("en-IN"),
                "/m³"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `rounded-lg p-3 ${a ? "bg-amber-900/20 border border-amber-800/40" : "bg-white border border-amber-200"}`, children: [
              /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-amber-600 mb-0.5", children: "Total Additional Margin" }),
              /* @__PURE__ */ e("p", { className: "text-2xl font-display font-medium text-amber-600", children: E(o.contractorMarginTotal || 0) }),
              /* @__PURE__ */ t("p", { className: "text-[10px] mt-0.5 text-amber-500", children: [
                "over ",
                (r.projectVolume || 0).toLocaleString(),
                " m³"
              ] })
            ] }),
            /* @__PURE__ */ t("p", { className: `text-[9px] italic ${a ? "text-amber-600/70" : "text-amber-500/70"}`, children: [
              "Net of additive cost: ",
              E(o.contractorNetOfAdditive || 0)
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: `lg:col-span-7 ${ie} p-8 flex flex-col gap-6`, children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${v}`, children: "Compressive Strength Performance" }),
            /* @__PURE__ */ e("span", { className: `text-[9px] font-bold px-2 py-0.5 rounded-full ${a ? "bg-green-900/40 text-green-400" : "bg-green-100 text-green-700"}`, children: "NABL Certified" })
          ] }),
          /* @__PURE__ */ t("div", { className: "grid grid-cols-3 gap-2.5", children: [
            /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border-2 ${a ? "border-green-800 bg-green-900/10" : "border-green-200 bg-green-50"}`, children: [
              /* @__PURE__ */ e("p", { className: "text-[9px] font-bold uppercase tracking-widest text-green-600 mb-2", children: "7-Day" }),
              /* @__PURE__ */ t("p", { className: `text-[9px] mb-0.5 ${a ? "text-neutral-500" : "text-neutral-400"}`, children: [
                "M",
                o.baseGrade,
                " standard"
              ] }),
              /* @__PURE__ */ t("p", { className: `text-sm font-mono font-semibold ${a ? "text-neutral-400" : "text-neutral-500"}`, children: [
                o.baseAt7DayMPa ?? "—",
                " MPa"
              ] }),
              /* @__PURE__ */ t("div", { className: "mt-1.5 mb-2 space-y-1", children: [
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e("div", { className: `text-[7px] w-5 shrink-0 text-right ${a ? "text-neutral-500" : "text-neutral-400"}`, children: "Std" }),
                  /* @__PURE__ */ e("div", { className: `flex-1 h-1.5 ${a ? "bg-neutral-700" : "bg-neutral-200"} rounded-full overflow-hidden`, children: /* @__PURE__ */ e("div", { className: "h-full bg-neutral-400 rounded-full", style: { width: `${Math.min(100, (o.baseAt7DayMPa || 0) / 60 * 100)}%` } }) })
                ] }),
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e("div", { className: "text-[7px] w-5 shrink-0 text-right text-green-600", children: "+G" }),
                  /* @__PURE__ */ e("div", { className: `flex-1 h-1.5 ${a ? "bg-green-900/40" : "bg-green-100"} rounded-full overflow-hidden`, children: /* @__PURE__ */ e("div", { className: "h-full bg-green-500 rounded-full", style: { width: `${Math.min(100, (o.graphAt7DayMPa || 0) / 60 * 100)}%` } }) })
                ] })
              ] }),
              /* @__PURE__ */ t("p", { className: "text-[9px] text-green-600 mb-0.5", children: [
                "M",
                o.baseGrade,
                "+G"
              ] }),
              /* @__PURE__ */ t("p", { className: "text-base font-bold text-green-600", children: [
                o.graphAt7DayMPa ?? "—",
                " MPa"
              ] }),
              /* @__PURE__ */ t("p", { className: "text-[9px] font-semibold text-green-500 mt-0.5", children: [
                "+",
                r.strengthGain7 || 22,
                "% ↑"
              ] }),
              /* @__PURE__ */ t("div", { className: `mt-2 pt-2 border-t ${a ? "border-green-800/40" : "border-green-200"}`, children: [
                /* @__PURE__ */ e("p", { className: `text-[9px] ${a ? "text-neutral-500" : "text-neutral-400"}`, children: "Strike formwork" }),
                /* @__PURE__ */ t("p", { className: `text-xs font-bold ${a ? "text-neutral-300" : "text-neutral-700"}`, children: [
                  o.graphDaysToStrike ?? "—",
                  " days"
                ] }),
                /* @__PURE__ */ t("p", { className: "text-[9px] text-green-500", children: [
                  "vs ",
                  o.tradDaysToStrike ?? "—",
                  " days std"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border-2 ${a ? "border-indigo-800 bg-indigo-900/10" : "border-indigo-200 bg-indigo-50"}`, children: [
              /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ e("p", { className: "text-[9px] font-bold uppercase tracking-widest text-indigo-600", children: "28-Day" }),
                r.strengthGain28 >= 60 && /* @__PURE__ */ e("span", { className: `text-[7px] font-bold px-1 py-0.5 rounded ${a ? "bg-green-900/50 text-green-400" : "bg-green-100 text-green-700"}`, children: "✦ NABL" })
              ] }),
              /* @__PURE__ */ t("p", { className: `text-[9px] mb-0.5 ${a ? "text-neutral-500" : "text-neutral-400"}`, children: [
                "M",
                o.baseGrade,
                " standard"
              ] }),
              /* @__PURE__ */ t("p", { className: `text-sm font-mono font-semibold ${a ? "text-neutral-400" : "text-neutral-500"}`, children: [
                o.baseMPa ?? "—",
                " MPa"
              ] }),
              /* @__PURE__ */ t("div", { className: "mt-1.5 mb-2 space-y-1", children: [
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e("div", { className: `text-[7px] w-5 shrink-0 text-right ${a ? "text-neutral-500" : "text-neutral-400"}`, children: "Std" }),
                  /* @__PURE__ */ e("div", { className: `flex-1 h-1.5 ${a ? "bg-neutral-700" : "bg-neutral-200"} rounded-full overflow-hidden`, children: /* @__PURE__ */ e("div", { className: "h-full bg-neutral-400 rounded-full", style: { width: `${Math.min(100, (o.baseMPa || 0) / 70 * 100)}%` } }) })
                ] }),
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e("div", { className: "text-[7px] w-5 shrink-0 text-right text-indigo-600", children: "+G" }),
                  /* @__PURE__ */ e("div", { className: `flex-1 h-1.5 ${a ? "bg-indigo-900/40" : "bg-indigo-100"} rounded-full overflow-hidden`, children: /* @__PURE__ */ e("div", { className: "h-full bg-indigo-500 rounded-full", style: { width: `${Math.min(100, (o.graphAt28DayMPa || 0) / 70 * 100)}%` } }) })
                ] }),
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e("div", { className: `text-[7px] w-5 shrink-0 text-right ${a ? "text-neutral-600" : "text-neutral-300"}`, children: "Tgt" }),
                  /* @__PURE__ */ e("div", { className: `flex-1 h-1.5 ${a ? "bg-neutral-800" : "bg-neutral-100"} rounded-full overflow-hidden`, children: /* @__PURE__ */ e("div", { className: "h-full bg-neutral-300 rounded-full", style: { width: `${Math.min(100, (o.targetMPa || 0) / 70 * 100)}%`, opacity: 0.6 } }) })
                ] })
              ] }),
              /* @__PURE__ */ t("p", { className: "text-[9px] text-indigo-600 mb-0.5", children: [
                "M",
                o.baseGrade,
                "+G"
              ] }),
              /* @__PURE__ */ t("p", { className: "text-base font-bold text-indigo-600", children: [
                o.graphAt28DayMPa ?? "—",
                " MPa"
              ] }),
              /* @__PURE__ */ t("p", { className: "text-[9px] font-semibold text-indigo-500 mt-0.5", children: [
                "+",
                r.strengthGain28 || 65,
                "% ↑"
              ] }),
              r.strengthGain28 >= 60 && /* @__PURE__ */ t("p", { className: `text-[8px] font-semibold mt-0.5 ${a ? "text-green-500" : "text-green-600"}`, children: [
                "NABL ref: ",
                o.nablTestMPa,
                " MPa"
              ] }),
              /* @__PURE__ */ t("div", { className: `mt-2 pt-2 border-t ${a ? "border-indigo-800/40" : "border-indigo-200"}`, children: [
                /* @__PURE__ */ e("p", { className: `text-[9px] ${a ? "text-neutral-500" : "text-neutral-400"}`, children: "Grade equivalent" }),
                /* @__PURE__ */ e("p", { className: "text-xs font-bold text-indigo-600", children: o.strengthGrade28Label ?? "—" }),
                /* @__PURE__ */ t("p", { className: `text-[9px] ${a ? "text-indigo-500" : "text-indigo-400"}`, children: [
                  "target M",
                  o.targetGrade,
                  " = ",
                  o.targetMPa,
                  " MPa"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border-2 ${a ? "border-orange-800 bg-orange-900/10" : "border-orange-200 bg-orange-50"}`, children: [
              /* @__PURE__ */ e("p", { className: "text-[9px] font-bold uppercase tracking-widest text-orange-600 mb-2", children: "Cycle Time" }),
              /* @__PURE__ */ e("p", { className: `text-[9px] mb-0.5 ${a ? "text-neutral-500" : "text-neutral-400"}`, children: "Days saved / floor" }),
              /* @__PURE__ */ t("p", { className: "text-base font-bold text-orange-600", children: [
                o.deshutterDaysSaved ?? 0,
                " days"
              ] }),
              /* @__PURE__ */ e("div", { className: `my-2 border-t ${a ? "border-orange-800/40" : "border-orange-200"}` }),
              /* @__PURE__ */ t("p", { className: `text-[9px] ${a ? "text-neutral-500" : "text-neutral-400"}`, children: [
                o.estimatedFloors ?? 0,
                " floors est."
              ] }),
              /* @__PURE__ */ t("p", { className: `text-xs font-bold ${a ? "text-orange-400" : "text-orange-600"}`, children: [
                o.totalCycleDaysSaved ?? 0,
                " days total"
              ] }),
              /* @__PURE__ */ t("div", { className: `mt-2 pt-2 border-t ${a ? "border-orange-800/40" : "border-orange-200"}`, children: [
                /* @__PURE__ */ e("p", { className: `text-[9px] ${a ? "text-neutral-500" : "text-neutral-400"}`, children: "Schedule value" }),
                /* @__PURE__ */ e("p", { className: "text-xs font-bold text-orange-600", children: E(o.cycleSavingsValue || 0) }),
                /* @__PURE__ */ t("p", { className: `text-[9px] ${a ? "text-orange-500" : "text-orange-400"}`, children: [
                  "@ ₹",
                  (r.laborCost || 15e3).toLocaleString(),
                  "/day"
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: `grid grid-cols-4 gap-0 rounded-xl overflow-hidden border ${B}`, children: [
          {
            label: "Net / m³",
            value: `${N ? "+" : "−"}₹${Math.abs(o.netSavingsPerM3 || 0).toLocaleString("en-IN")}`,
            color: N ? a ? "text-green-400" : "text-green-700" : a ? "text-amber-400" : "text-amber-600",
            bg: N ? a ? "bg-green-900/20" : "bg-green-50" : a ? "bg-amber-900/20" : "bg-amber-50"
          },
          {
            label: "Return",
            value: o.roiMultiple ? `${o.roiMultiple}×` : "Quality+",
            color: a ? "text-indigo-400" : "text-indigo-700",
            bg: a ? "bg-indigo-900/20" : "bg-indigo-50"
          },
          {
            label: "28-Day",
            value: `${o.graphAt28DayMPa ?? "—"} MPa`,
            color: a ? "text-green-400" : "text-green-700",
            bg: a ? "bg-green-900/20" : "bg-green-50"
          },
          {
            label: "Cycle Save",
            value: `−${o.deshutterDaysSaved ?? 0}d/flr`,
            color: a ? "text-orange-400" : "text-orange-700",
            bg: a ? "bg-orange-900/20" : "bg-orange-50"
          }
        ].map(({ label: $, value: P, color: j, bg: oe }, de) => /* @__PURE__ */ t("div", { className: `${oe} py-2.5 px-2 text-center ${de < 3 ? `border-r ${B}` : ""}`, children: [
          /* @__PURE__ */ e("p", { className: `text-[8px] font-bold uppercase tracking-wider ${v} mb-0.5`, children: $ }),
          /* @__PURE__ */ e("p", { className: `text-[11px] font-bold font-mono leading-tight ${j}`, children: P })
        ] }, $)) }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5 mb-3", children: [
            /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${v} mr-2`, children: "View" }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => R("cost"),
                className: `px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors ${G === "cost" ? "bg-indigo-600 text-white" : a ? "text-neutral-400 border border-neutral-700 hover:border-neutral-600" : "text-neutral-500 border border-neutral-200 hover:border-neutral-300 bg-white"}`,
                children: "Cost / m³"
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => R("strength"),
                className: `px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors ${G === "strength" ? "bg-green-600 text-white" : a ? "text-neutral-400 border border-neutral-700 hover:border-neutral-600" : "text-neutral-500 border border-neutral-200 hover:border-neutral-300 bg-white"}`,
                children: "Strength (MPa)"
              }
            )
          ] }),
          G === "cost" && /* @__PURE__ */ t(Ce, { children: [
            /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${v} mb-3`, children: "Cost per m³ — Grade comparison" }),
            /* @__PURE__ */ e("div", { className: "h-48", children: /* @__PURE__ */ e(O, { width: "100%", height: "100%", children: /* @__PURE__ */ t(he, { data: H, margin: { top: 20, right: 8, bottom: 0, left: -10 }, barSize: 52, children: [
              /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: a ? "#2a2a2a" : "#f1f5f9", vertical: !1 }),
              /* @__PURE__ */ e(_, { dataKey: "name", tick: { fontSize: 11, fill: a ? "#9ca3af" : "#64748b" }, tickLine: !1, axisLine: !1 }),
              /* @__PURE__ */ e(
                U,
                {
                  domain: J,
                  tickFormatter: ($) => `₹${($ / 1e3).toFixed(1)}k`,
                  tick: { fontSize: 10, fill: a ? "#9ca3af" : "#64748b" },
                  tickLine: !1,
                  axisLine: !1
                }
              ),
              /* @__PURE__ */ e(q, { content: /* @__PURE__ */ e(dr, {}) }),
              /* @__PURE__ */ t(ne, { dataKey: "cost", radius: [6, 6, 0, 0], children: [
                H.map(($, P) => /* @__PURE__ */ e(Me, { fill: $.fill }, P)),
                /* @__PURE__ */ e(
                  Se,
                  {
                    dataKey: "cost",
                    position: "top",
                    formatter: ($) => `₹${($ / 1e3).toFixed(1)}k`,
                    style: { fontSize: 10, fontWeight: 700, fill: a ? "#e5e7eb" : "#374151" }
                  }
                )
              ] })
            ] }) }) }),
            /* @__PURE__ */ t("p", { className: `text-[11px] text-center mt-1 ${v}`, children: [
              "Gap between green bar and right bar = Net savings per m³ (₹",
              Math.abs(o.netSavingsPerM3 || 0).toLocaleString("en-IN"),
              "/m³)"
            ] })
          ] }),
          G === "strength" && le.length > 0 && /* @__PURE__ */ t(Ce, { children: [
            /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${v} mb-3`, children: "Compressive strength — 7-day & 28-day (MPa)" }),
            /* @__PURE__ */ e("div", { className: "h-48", children: /* @__PURE__ */ e(O, { width: "100%", height: "100%", children: /* @__PURE__ */ t(he, { data: le, margin: { top: 20, right: 8, bottom: 0, left: -10 }, barSize: 26, barCategoryGap: "28%", children: [
              /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: a ? "#2a2a2a" : "#f1f5f9", vertical: !1 }),
              /* @__PURE__ */ e(_, { dataKey: "name", tick: { fontSize: 11, fill: a ? "#9ca3af" : "#64748b" }, tickLine: !1, axisLine: !1 }),
              /* @__PURE__ */ e(
                U,
                {
                  tickFormatter: ($) => `${$}`,
                  tick: { fontSize: 10, fill: a ? "#9ca3af" : "#64748b" },
                  tickLine: !1,
                  axisLine: !1,
                  unit: " MPa"
                }
              ),
              /* @__PURE__ */ e(q, { content: /* @__PURE__ */ e(cr, {}) }),
              /* @__PURE__ */ e(ne, { dataKey: "base", name: `M${o.baseGrade} standard`, fill: "#94a3b8", radius: [4, 4, 0, 0], children: /* @__PURE__ */ e(Se, { dataKey: "base", position: "top", style: { fontSize: 9, fontWeight: 700, fill: a ? "#9ca3af" : "#64748b" } }) }),
              /* @__PURE__ */ e(ne, { dataKey: "withG", name: `M${o.baseGrade}+G`, fill: "#22c55e", radius: [4, 4, 0, 0], children: /* @__PURE__ */ e(Se, { dataKey: "withG", position: "top", style: { fontSize: 9, fontWeight: 700, fill: a ? "#bbf7d0" : "#166534" } }) }),
              /* @__PURE__ */ e(ne, { dataKey: "target", name: `M${o.targetGrade} standard`, fill: "#6366f1", radius: [4, 4, 0, 0], children: /* @__PURE__ */ e(Se, { dataKey: "target", position: "top", style: { fontSize: 9, fontWeight: 700, fill: a ? "#c7d2fe" : "#3730a3" } }) })
            ] }) }) }),
            /* @__PURE__ */ e("div", { className: "flex items-center justify-center gap-4 mt-2 flex-wrap", children: [
              { color: "#94a3b8", label: `M${o.baseGrade} (no additive)` },
              { color: "#22c55e", label: `M${o.baseGrade}+Graphacrete` },
              { color: "#6366f1", label: `M${o.targetGrade} standard` }
            ].map(({ color: $, label: P }) => /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ e("div", { className: "w-2.5 h-2.5 rounded-sm flex-shrink-0", style: { backgroundColor: $ } }),
              /* @__PURE__ */ e("span", { className: `text-[9px] ${v}`, children: P })
            ] }, P)) }),
            /* @__PURE__ */ t("p", { className: `text-[11px] text-center mt-1 ${v}`, children: [
              "M",
              o.baseGrade,
              "+G delivers ",
              o.graphAt28DayMPa,
              " MPa at 28 days — ",
              o.strengthGrade28Label,
              " performance"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ t("div", { className: `p-4 rounded-2xl border-2 ${N ? a ? "border-green-700 bg-green-900/10" : "border-green-300 bg-green-50" : a ? "border-amber-700 bg-amber-900/10" : "border-amber-200 bg-amber-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${N ? "text-green-600" : a ? "text-amber-400" : "text-amber-600"}`, children: o.netLabel || "Net Savings" }),
              /* @__PURE__ */ e("span", { className: `text-[9px] font-bold px-1.5 py-0.5 rounded ${a ? "bg-neutral-700 text-neutral-300" : "bg-neutral-900 text-white"}`, children: "ALL-IN" })
            ] }),
            /* @__PURE__ */ e("p", { className: `text-2xl font-display font-medium tabular-nums ${N ? "text-green-700" : a ? "text-amber-400" : "text-amber-600"}`, children: E(Math.abs(o.netSavingsTotal || 0)) }),
            N ? /* @__PURE__ */ t("p", { className: `text-xs mt-1.5 ${a ? "text-green-500" : "text-green-600"}`, children: [
              "₹",
              Math.abs(o.netSavingsPerM3 || 0),
              "/m³ · grade + cement − additive"
            ] }) : /* @__PURE__ */ t("p", { className: `text-xs mt-1.5 ${a ? "text-amber-500" : "text-amber-600"}`, children: [
              "₹",
              Math.abs(o.netSavingsPerM3 || 0),
              "/m³ quality premium"
            ] })
          ] }),
          o.cementSavingsValuePerM3 > 0 && /* @__PURE__ */ t("div", { className: `p-4 rounded-2xl border-2 ${a ? "border-teal-700 bg-teal-900/10" : "border-teal-300 bg-teal-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${a ? "text-teal-400" : "text-teal-600"}`, children: "Cement Savings" }),
              /* @__PURE__ */ e("span", { className: `text-[9px] font-bold px-1.5 py-0.5 rounded ${a ? "bg-teal-800 text-teal-300" : "bg-teal-200 text-teal-700"}`, children: "CEMENT" })
            ] }),
            /* @__PURE__ */ e("p", { className: `text-2xl font-display font-medium tabular-nums ${a ? "text-teal-300" : "text-teal-700"}`, children: E((o.cementSavingsValuePerM3 || 0) * (r.projectVolume || 0)) }),
            /* @__PURE__ */ t("p", { className: `text-xs mt-1.5 ${a ? "text-teal-500" : "text-teal-600"}`, children: [
              "₹",
              Math.abs(o.cementSavingsValuePerM3 || 0),
              "/m³ · cement reduction only"
            ] }),
            /* @__PURE__ */ t("p", { className: `text-[10px] font-semibold mt-2 ${a ? "text-teal-400" : "text-teal-500"}`, children: [
              r.cementReductionPct || 15,
              "% less cement · ",
              o.cementSavedBags || 0,
              " bags saved"
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-4 rounded-2xl border ${a ? "border-slate-700 bg-slate-800/30" : "border-slate-200 bg-slate-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-widest ${a ? "text-slate-400" : "text-slate-500"}`, children: [
                "Grade-Only ",
                o.gradeOnlyLabel || "Savings"
              ] }),
              /* @__PURE__ */ e("span", { className: `text-[9px] font-bold px-1.5 py-0.5 rounded ${a ? "bg-slate-700 text-slate-300" : "bg-slate-200 text-slate-600"}`, children: "BROCHURE" })
            ] }),
            /* @__PURE__ */ t("p", { className: `text-2xl font-display font-medium tabular-nums ${F ? a ? "text-slate-200" : "text-slate-700" : a ? "text-slate-500" : "text-slate-400"}`, children: [
              F ? "" : "−",
              E(Math.abs(o.gradeOnlySavingsTotal || 0))
            ] }),
            /* @__PURE__ */ t("p", { className: `text-xs mt-1.5 ${a ? "text-slate-500" : "text-slate-400"}`, children: [
              "₹",
              Math.abs(o.gradeOnlySavingsPerM3 || 0),
              "/m³ · excludes cement reduction"
            ] }),
            o.isNABL && F && /* @__PURE__ */ t("p", { className: "text-[10px] font-semibold text-indigo-500 mt-2", children: [
              "✦ M30+G ≈ M50 @ ₹",
              Math.abs(o.gradeOnlySavingsPerM3 || 0),
              "/m³"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${B} ${a ? "bg-neutral-800/50" : "bg-white"} flex items-center gap-4`, children: [
            /* @__PURE__ */ e(A, { className: "w-5 h-5 text-green-500 flex-shrink-0" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${v}`, children: "ROI" }),
              /* @__PURE__ */ e("p", { className: `text-2xl font-display font-medium tabular-nums ${D}`, children: o.roiPercentage != null ? `${o.roiPercentage}%` : /* @__PURE__ */ e("span", { className: "text-base", children: "Quality+" }) })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${B} ${a ? "bg-neutral-800/50" : "bg-white"} flex items-center gap-4`, children: [
            /* @__PURE__ */ e(W, { className: `w-5 h-5 flex-shrink-0 ${N ? "text-green-500" : a ? "text-amber-400" : "text-amber-500"}` }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${v}`, children: "Payback" }),
              /* @__PURE__ */ e("p", { className: `text-base font-display font-medium ${N ? "text-green-600" : a ? "text-amber-400" : "text-amber-600"}`, children: o.paybackLabel || "—" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${a ? "border-indigo-700 bg-indigo-900/10" : "border-indigo-200 bg-indigo-50"} flex items-center gap-4`, children: [
            /* @__PURE__ */ e(A, { className: "w-5 h-5 text-indigo-500 flex-shrink-0" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${a ? "text-indigo-400" : "text-indigo-600"}`, children: "Return Multiple" }),
              /* @__PURE__ */ e("p", { className: `text-2xl font-display font-medium tabular-nums ${a ? "text-indigo-300" : "text-indigo-700"}`, children: o.roiMultiple != null ? `${o.roiMultiple}×` : /* @__PURE__ */ e("span", { className: "text-base", children: "Quality+" }) }),
              /* @__PURE__ */ e("p", { className: `text-[9px] mt-0.5 ${a ? "text-indigo-500" : "text-indigo-400"}`, children: "net savings ÷ additive cost" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${a ? "border-emerald-700 bg-emerald-900/10" : "border-emerald-200 bg-emerald-50"} flex items-center gap-4`, children: [
            /* @__PURE__ */ e(Ee, { className: "w-5 h-5 text-emerald-500 flex-shrink-0" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${a ? "text-emerald-400" : "text-emerald-600"}`, children: "Carbon Credit Value" }),
              /* @__PURE__ */ e("p", { className: `text-2xl font-display font-medium tabular-nums ${a ? "text-emerald-300" : "text-emerald-700"}`, children: E(o.carbonCreditValueTotal || 0) }),
              /* @__PURE__ */ t("p", { className: `text-[9px] mt-0.5 ${a ? "text-emerald-500" : "text-emerald-400"}`, children: [
                ((o.co2AvoidedKg || 0) / 1e3).toFixed(2),
                " t CO₂ @ ₹",
                o.carbonCreditRatePerTon || 500,
                "/t"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border ${B} ${a ? "bg-neutral-800/30" : "bg-white"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${v} mb-1`, children: "Investment" }),
            /* @__PURE__ */ e("p", { className: `text-sm font-bold tabular-nums ${D}`, children: E(o.productCostTotal || 0) })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border border-green-500/25 ${a ? "bg-green-900/10" : "bg-green-50"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-green-600/70 mb-1", children: "Cement Saved" }),
            /* @__PURE__ */ t("p", { className: "text-sm font-bold text-green-600 tabular-nums", children: [
              (o.cementSavedKg || 0).toLocaleString(),
              /* @__PURE__ */ e("span", { className: "text-[10px] font-normal ml-0.5", children: "kg" })
            ] }),
            /* @__PURE__ */ t("p", { className: "text-[10px] text-green-500/60", children: [
              o.cementSavedBags || 0,
              " bags"
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border border-teal-500/25 ${a ? "bg-teal-900/10" : "bg-teal-50"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-teal-600/70 mb-1", children: "CO₂ Avoided" }),
            /* @__PURE__ */ t("p", { className: "text-sm font-bold text-teal-600 tabular-nums", children: [
              ((o.co2AvoidedKg || 0) / 1e3).toFixed(2),
              /* @__PURE__ */ e("span", { className: "text-[10px] font-normal ml-0.5", children: "t" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: `flex-grow border ${B} rounded-2xl ${a ? "bg-neutral-800/50" : "bg-white"} p-5`, children: [
          /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${v} mb-3`, children: N ? "10-Year Financial Projection" : "Lifecycle Value Recovery" }),
          te.length > 0 && /* @__PURE__ */ e("div", { className: "h-28", children: /* @__PURE__ */ e(O, { width: "100%", height: "100%", children: /* @__PURE__ */ t(Qe, { data: te, margin: { top: 4, right: 12, bottom: 4, left: -18 }, children: [
            /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: a ? "#2a2a2a" : "#f1f5f9", vertical: !1 }),
            /* @__PURE__ */ e(_, { dataKey: "year", stroke: a ? "#525252" : "#94a3b8", fontSize: 10, tickLine: !1, axisLine: !1, tickMargin: 6, tickFormatter: ($) => `Yr ${$}` }),
            /* @__PURE__ */ e(U, { stroke: a ? "#525252" : "#94a3b8", fontSize: 10, tickLine: !1, axisLine: !1, tickMargin: 6, tickFormatter: E }),
            /* @__PURE__ */ e(fe, { y: 0, stroke: a ? "#555" : "#cbd5e1", strokeDasharray: "4 2" }),
            /* @__PURE__ */ e(
              q,
              {
                contentStyle: { backgroundColor: a ? "#171717" : "#fff", border: `1px solid ${a ? "#404040" : "#e2e8f0"}`, borderRadius: "8px", fontSize: "11px", color: a ? "#fff" : "#111" },
                formatter: ($) => [E($), "Cumulative"],
                labelFormatter: ($) => $ === 0 ? "Construction (immediate)" : `Year ${$}`
              }
            ),
            /* @__PURE__ */ e(re, { type: "monotone", dataKey: "cumulative", stroke: "#6366f1", strokeWidth: 2.5, dot: { fill: "#6366f1", r: 3, strokeWidth: 0 }, activeDot: { r: 5, strokeWidth: 0 } })
          ] }) }) }),
          /* @__PURE__ */ e("p", { className: `text-[10px] ${v} mt-2`, children: "Yr 0 = construction-phase savings (instant). Yr 1–10 adds estimated lifecycle value." })
        ] }),
        (o.totalAllInDelta || 0) > 0 && /* @__PURE__ */ t("div", { className: `rounded-2xl p-6 flex items-center justify-between ${a ? "bg-neutral-800 border border-neutral-700" : "bg-neutral-900"}`, children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ t("p", { className: "text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1", children: [
              "Total value over ",
              r.analysisPeriod || 10,
              " yr · ",
              (r.projectVolume || 0).toLocaleString(),
              " m³"
            ] }),
            /* @__PURE__ */ e("p", { className: "text-3xl font-display font-medium text-white", children: E(o.totalAllInDelta || 0) }),
            /* @__PURE__ */ t("p", { className: "text-[10px] text-neutral-500 mt-1", children: [
              "Construction ",
              E(o.netSavingsTotal || 0),
              " + lifecycle ",
              E(o.lifecycle?.total || 0)
            ] })
          ] }),
          o.allInMultiple && /* @__PURE__ */ t("div", { className: "text-right flex-shrink-0 ml-6", children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1", children: "All-in Multiple" }),
            /* @__PURE__ */ t("p", { className: "text-4xl font-display font-bold text-indigo-400", children: [
              o.allInMultiple,
              "×"
            ] }),
            /* @__PURE__ */ e("p", { className: "text-[10px] text-neutral-500 mt-1", children: "on additive spend" })
          ] })
        ] }),
        /* @__PURE__ */ t("p", { className: `text-[10px] leading-relaxed flex items-start gap-1.5 ${v}`, children: [
          /* @__PURE__ */ e(ze, { className: "w-3 h-3 flex-shrink-0 mt-0.5 opacity-60" }),
          "Results depend on mix design, site conditions, and local pricing. Calculator uses typical RMC market assumptions and user inputs."
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ t("div", { className: `border-t ${B} ${ue}`, children: [
      /* @__PURE__ */ t(
        "button",
        {
          onClick: () => y(($) => !$),
          className: `w-full px-8 py-4 flex items-center justify-between text-sm font-medium ${D} transition-colors ${a ? "hover:bg-neutral-800/60" : "hover:bg-neutral-50"}`,
          children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3 flex-wrap", children: [
              /* @__PURE__ */ e("span", { children: "Full Lifecycle Savings" }),
              /* @__PURE__ */ e("span", { className: `text-xs px-1.5 py-0.5 rounded font-medium ${a ? "bg-neutral-700 text-neutral-400" : "bg-neutral-100 text-neutral-500"}`, children: "Estimates" }),
              o.lifecycle && /* @__PURE__ */ t("span", { className: `text-xs px-2.5 py-0.5 rounded-full font-mono ${a ? "bg-green-900/30 text-green-400" : "bg-green-100 text-green-700"}`, children: [
                "+",
                E(o.lifecycle.total),
                " over ",
                r.analysisPeriod,
                " yr"
              ] })
            ] }),
            /* @__PURE__ */ e(Ue, { className: `w-4 h-4 flex-shrink-0 transition-transform duration-200 ${v} ${w ? "rotate-180" : ""}` })
          ]
        }
      ),
      /* @__PURE__ */ e(se, { initial: !1, children: w && /* @__PURE__ */ e(
        f.div,
        {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.22, ease: "easeInOut" },
          className: "overflow-hidden",
          children: /* @__PURE__ */ t("div", { className: `px-8 pb-10 pt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 ${ie}`, children: [
            /* @__PURE__ */ t("div", { className: "space-y-5", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-wider ${v}`, children: "Additional Parameters" }),
              Object.keys(c).map(($) => {
                const P = Ze($, c[$]);
                return P ? /* @__PURE__ */ e("div", { children: P }, $) : null;
              })
            ] }),
            /* @__PURE__ */ t("div", { className: "space-y-3", children: [
              /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-wider ${v}`, children: [
                "Estimated Lifecycle Breakdown (",
                r.analysisPeriod,
                " yr)"
              ] }),
              Je.map(({ icon: $, label: P, value: j, color: oe }) => /* @__PURE__ */ t("div", { className: `flex items-center justify-between px-4 py-3 rounded-xl border ${B} ${a ? "bg-neutral-800/30" : "bg-white"}`, children: [
                /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ e($, { className: `w-4 h-4 flex-shrink-0 ${oe}` }),
                  /* @__PURE__ */ e("span", { className: `text-sm ${D}`, children: P })
                ] }),
                /* @__PURE__ */ e("span", { className: `text-sm font-mono font-semibold ${j > 0 ? "text-green-600" : v}`, children: j > 0 ? `+${E(j)}` : "—" })
              ] }, P)),
              /* @__PURE__ */ t("div", { className: `flex items-center justify-between px-4 py-3.5 rounded-xl border-2 mt-1 ${a ? "border-green-800 bg-green-900/20" : "border-green-200 bg-green-50"}`, children: [
                /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e(Ee, { className: "w-4 h-4 text-green-600" }),
                  /* @__PURE__ */ e("span", { className: `text-sm font-bold ${a ? "text-green-400" : "text-green-800"}`, children: "Total Lifecycle Value" })
                ] }),
                /* @__PURE__ */ t("span", { className: `text-lg font-bold font-mono ${a ? "text-green-400" : "text-green-700"}`, children: [
                  "+",
                  E(o.lifecycle?.total || 0)
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: `px-4 py-3 rounded-xl border ${B} ${a ? "bg-neutral-800/30" : "bg-white"}`, children: [
                /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ t("span", { className: `text-sm font-bold ${D}`, children: [
                    "All-in over ",
                    r.analysisPeriod,
                    " yr"
                  ] }),
                  /* @__PURE__ */ e("span", { className: `text-lg font-bold font-mono ${(o.totalAllInDelta || 0) >= 0 ? a ? "text-green-400" : "text-green-700" : a ? "text-amber-400" : "text-amber-600"}`, children: E(o.totalAllInDelta || 0) })
                ] }),
                /* @__PURE__ */ t("p", { className: `text-[10px] ${v} mt-1`, children: [
                  "Construction ",
                  E(o.netSavingsTotal || 0),
                  " + lifecycle ",
                  E(o.lifecycle?.total || 0),
                  o.totalAllInRoiPct ? ` · ${o.totalAllInRoiPct}% all-in ROI` : ""
                ] })
              ] })
            ] })
          ] })
        },
        "sec"
      ) })
    ] })
  ] });
}, mr = (i) => {
  const l = Math.pow(10, Number(i) / 100 * 3);
  return l < 5 ? Math.max(1, Math.round(l)) : l < 20 ? Math.round(l / 5) * 5 : l < 100 ? Math.round(l / 10) * 10 : Math.round(l / 50) * 50;
}, Kt = (i) => Math.round(Math.log10(Math.max(1, Math.min(1e3, i))) / 3 * 100), pr = [
  { v: 1, num: "1", label: ["Single", "vehicle"] },
  { v: 10, num: "10", label: ["Small", "fleet"] },
  { v: 50, num: "50", label: ["Studio", "fleet"] },
  { v: 200, num: "200", label: ["Large", "fleet"] },
  { v: 1e3, num: "1k", label: ["Enterprise", ""] }
], ur = (i) => i <= 1 ? "Single personal or collector vehicle" : i <= 5 ? "Personal fleet or small family" : i <= 20 ? "Detailing studio batch" : i <= 75 ? "Small commercial fleet" : i <= 300 ? "Large corporate or taxi fleet" : "Enterprise-scale fleet or national programme", ce = (i) => {
  const l = Math.abs(i ?? 0), c = (i ?? 0) < 0 ? "−" : "";
  return l >= 1e7 ? `${c}₹${(l / 1e7).toFixed(1)} Cr` : l >= 1e5 ? `${c}₹${(l / 1e5).toFixed(1)} L` : l >= 1e3 ? `${c}₹${Math.round(l / 1e3)}k` : `${c}₹${Math.round(l)}`;
}, be = (i) => `${(i ?? 0) < 0 ? "−" : ""}₹${Math.abs(Math.round(i ?? 0)).toLocaleString("en-IN")}`, br = ({ active: i, payload: l, label: c }) => !i || !l?.length ? null : /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-xl p-3 shadow-lg text-sm", children: [
  /* @__PURE__ */ e("p", { className: "font-bold text-neutral-800 mb-0.5", children: c }),
  /* @__PURE__ */ t("p", { className: "text-neutral-600", children: [
    "₹",
    l[0].value?.toLocaleString("en-IN"),
    "/vehicle/yr"
  ] })
] }), Vr = ({
  calculations: i,
  defaultInputs: l,
  secondaryInputs: c,
  theme: d = "light"
}) => {
  const a = d === "dark", s = (x) => ({
    background: `linear-gradient(to right, #3b82f6 ${x.toFixed(1)}%, ${a ? "#374151" : "#e5e7eb"} ${x.toFixed(1)}%)`
  }), p = "w-full h-2 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-blue-500 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-blue-500 [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-pointer", u = { ...l, ...c || {} }, b = Object.keys(u).reduce((x, C) => {
    const L = u[C];
    return x[C] = L.default !== void 0 ? L.default : L.min != null ? (L.min + L.max) / 2 : L.options?.[0]?.value, x;
  }, {}), [r, h] = M(b), [m, g] = M(String(b.vehicleCount || 5)), [w, y] = M(!1), k = (x, C) => h((L) => ({ ...L, [x]: C })), n = Q(() => i(r), [r, i]), G = () => {
    h(b), g(String(b.vehicleCount || 5));
  }, R = a ? "bg-neutral-900" : "bg-white", I = a ? "bg-neutral-950/40" : "bg-neutral-50/60", o = a ? "border-neutral-700" : "border-neutral-200", T = a ? "text-white" : "text-neutral-900", N = a ? "text-neutral-400" : "text-neutral-500", F = a ? "text-blue-400" : "text-blue-600", H = Q(() => [
    { name: `Competitor
(coating only)`, cost: n.competitorCostAmortized || 0, fill: "#94a3b8" },
    { name: `Ceraphene
(all-in)`, cost: n.cerapheneAnnualEffective || 0, fill: "#3b82f6" },
    { name: `Competitor
(all-in)`, cost: n.competitorAnnualEffective || 0, fill: "#f87171" }
  ], [n]), J = Q(() => {
    const x = H.map((C) => C.cost).filter(Boolean);
    return x.length ? [
      0,
      Math.ceil(Math.max(...x) * 1.15 / 1e3) * 1e3
    ] : [0, 3e4];
  }, [H]), te = Q(() => {
    if (!n.directSavingsTotal) return [];
    const x = (n.annualSavingsPerVehicle || 0) * (n.vehicleCount || 1);
    return Array.from({ length: (r.analysisPeriod || 4) + 1 }, (C, L) => ({
      year: L,
      cumulative: Math.round((n.directSavingsTotal || 0) + x * L)
    }));
  }, [n, r.analysisPeriod]), le = () => {
    const x = r.vehicleCount || 1;
    return /* @__PURE__ */ t("div", { className: "space-y-2.5", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${T}`, children: "Vehicle Count" }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "number",
              value: m,
              min: 1,
              max: 1e3,
              onChange: (C) => {
                g(C.target.value);
                const L = parseInt(C.target.value, 10);
                !isNaN(L) && L >= 1 && L <= 1e3 && k("vehicleCount", L);
              },
              onBlur: () => g(String(x)),
              className: `w-20 text-right text-sm font-mono border ${o} rounded px-2 py-1 ${a ? "bg-neutral-800 text-white" : "bg-white text-neutral-900"} focus:outline-none focus:ring-1 focus:ring-blue-500`
            }
          ),
          /* @__PURE__ */ e("span", { className: `text-sm font-medium ${T}`, children: "vehicles" })
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: 0,
          max: 100,
          value: Kt(x),
          onChange: (C) => {
            const L = mr(C.target.value);
            k("vehicleCount", L), g(String(L));
          },
          className: p,
          style: s(Kt(x))
        }
      ),
      /* @__PURE__ */ e("div", { className: "flex justify-between", children: pr.map(({ v: C, num: L, label: X }) => /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-0.5 w-10", children: [
        /* @__PURE__ */ e("span", { className: `text-[10px] font-semibold ${T}`, children: L }),
        X.map((ae, Ne) => /* @__PURE__ */ e("span", { className: `text-[9px] ${N} text-center leading-tight`, children: ae }, Ne))
      ] }, C)) }),
      /* @__PURE__ */ t("p", { className: `text-[11px] italic ${N}`, children: [
        "≈ ",
        ur(x)
      ] })
    ] });
  }, ue = () => {
    const x = l.competitorCost, C = r.competitorCost;
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${T}`, children: "Competitor Cost" }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${F}`, children: [
          "₹",
          (C || 0).toLocaleString()
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: x.min,
          max: x.max,
          step: x.step || 1e3,
          value: C,
          onChange: (L) => k("competitorCost", Number(L.target.value)),
          className: p,
          style: s(Math.max(0, Math.min(100, (C - x.min) / (x.max - x.min) * 100)))
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${N}`, children: [
          "₹",
          (x.min / 1e3).toFixed(0),
          "k"
        ] }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${N}`, children: [
          "₹",
          (x.max / 1e3).toFixed(0),
          "k"
        ] })
      ] }),
      /* @__PURE__ */ t("p", { className: `text-[11px] ${N}`, children: [
        "Ceraphene: ₹",
        (n.ceraphenePrice || 5e3).toLocaleString(),
        " (fixed)"
      ] })
    ] });
  }, ie = () => {
    const x = l.annualWashCostPerVehicle, C = r.annualWashCostPerVehicle;
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${T}`, children: "Annual Wash Cost" }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${F}`, children: [
          "₹",
          (C || 0).toLocaleString(),
          "/yr"
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: x.min,
          max: x.max,
          step: x.step || 1e3,
          value: C,
          onChange: (L) => k("annualWashCostPerVehicle", Number(L.target.value)),
          className: p,
          style: s(Math.max(0, Math.min(100, (C - x.min) / (x.max - x.min) * 100)))
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${N}`, children: [
          "₹",
          (x.min / 1e3).toFixed(0),
          "k"
        ] }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${N}`, children: [
          "₹",
          (x.max / 1e3).toFixed(0),
          "k"
        ] })
      ] })
    ] });
  }, B = () => {
    const x = l.washReductionPct, C = r.washReductionPct;
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${T}`, children: "Wash Reduction" }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${F}`, children: [
          C,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: x.min,
          max: x.max,
          step: x.step || 5,
          value: C,
          onChange: (L) => k("washReductionPct", Number(L.target.value)),
          className: p,
          style: s(Math.max(0, Math.min(100, (C - x.min) / (x.max - x.min) * 100)))
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${N}`, children: [
          x.min,
          "% conservative"
        ] }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${N}`, children: [
          x.max,
          "% optimistic"
        ] })
      ] }),
      /* @__PURE__ */ e("p", { className: `text-[11px] ${N}`, children: "Hydrophobic self-cleaning range" }),
      n.annualWashesSaved != null && /* @__PURE__ */ t("p", { className: "text-[11px] font-semibold text-blue-600", children: [
        "→ ",
        n.annualWashesSaved,
        " washes saved/vehicle/yr · ₹",
        (n.annualSavingsPerVehicle || 0).toLocaleString("en-IN"),
        "/vehicle annual saving"
      ] })
    ] });
  }, D = (x, C) => /* @__PURE__ */ t("div", { className: "space-y-2", children: [
    /* @__PURE__ */ e("label", { className: `text-sm font-medium ${T}`, children: C.label }),
    /* @__PURE__ */ e("div", { className: "flex gap-2", children: C.options.map((L) => /* @__PURE__ */ e(
      "button",
      {
        onClick: () => k(x, L.value),
        className: `flex-1 py-1.5 rounded-lg text-sm font-medium border transition-all ${r[x] === L.value ? a ? "bg-white text-neutral-900 border-white" : "bg-neutral-900 text-white border-neutral-900" : a ? "text-neutral-400 border-neutral-700 hover:border-neutral-500" : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"}`,
        children: L.label
      },
      L.value
    )) })
  ] }), v = (x, C) => {
    const L = Math.max(0, Math.min(100, (r[x] - C.min) / (C.max - C.min) * 100));
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("label", { className: `text-sm font-medium ${T}`, children: C.label }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${F}`, children: [
          r[x],
          " ",
          C.unit
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: C.min,
          max: C.max,
          step: C.step || 0.5,
          value: r[x],
          onChange: (X) => k(x, Number(X.target.value)),
          className: p,
          style: s(L)
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${N}`, children: [
          C.min,
          " ",
          C.unit
        ] }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${N}`, children: [
          C.max,
          " ",
          C.unit
        ] })
      ] }),
      C.note && /* @__PURE__ */ e("p", { className: `text-[11px] ${N}`, children: C.note })
    ] });
  }, S = (x, C) => {
    switch (C.type) {
      case "buttongroup":
        return D(x, C);
      case "slider":
        return v(x, C);
      default:
        return null;
    }
  };
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${o} overflow-hidden shadow-2xl`, children: [
    /* @__PURE__ */ t("div", { className: `px-6 py-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs ${a ? "bg-blue-950/30 border-b border-blue-900/50" : "bg-blue-50 border-b border-blue-100"}`, children: [
      /* @__PURE__ */ e(We, { className: "w-3.5 h-3.5 text-blue-500 flex-shrink-0" }),
      /* @__PURE__ */ e("span", { className: "font-bold uppercase tracking-wider text-blue-500", children: "SGS Certified" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: "9H+ Hardness" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: "3-4+ yr Durability" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: [
        r.washReductionPct || 60,
        "% Wash Reduction"
      ] }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: "font-bold text-green-600", children: [
        "All-in: +",
        be(n.fullSavingsPerVehicle || 0),
        "/vehicle"
      ] }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: `font-semibold ${a ? "text-slate-400" : "text-slate-500"}`, children: [
        "Direct: +",
        be(n.directSavingsPerVehicle || 0),
        "/vehicle"
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: `grid grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-7 border-b ${o} ${R}`, children: [
      /* @__PURE__ */ e(le, {}),
      /* @__PURE__ */ e(ue, {}),
      /* @__PURE__ */ e(ie, {}),
      /* @__PURE__ */ e(B, {})
    ] }),
    /* @__PURE__ */ t("div", { className: `px-8 py-2.5 flex items-center justify-between border-b ${o} ${a ? "bg-neutral-900/80" : "bg-blue-50/60"}`, children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5 flex-wrap text-[10px]", children: [
        /* @__PURE__ */ e(ve, { className: `w-3 h-3 flex-shrink-0 ${a ? "text-blue-400" : "text-blue-600"}` }),
        /* @__PURE__ */ e("span", { className: `font-bold uppercase tracking-wider ${a ? "text-blue-400" : "text-blue-600"}`, children: "Verified Data" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: "₹5,000 fixed (brochure)" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: "35 ml/vehicle (TDS)" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: "SGS · 9H+ · 3–4+ yr" })
      ] }),
      /* @__PURE__ */ t(
        "button",
        {
          onClick: G,
          className: `flex items-center gap-1.5 text-[10px] font-semibold px-3 py-1.5 rounded-lg border transition-colors flex-shrink-0 ${a ? "text-neutral-400 border-neutral-700 hover:bg-neutral-800 hover:text-neutral-200" : "text-neutral-500 border-neutral-200 hover:bg-white hover:text-neutral-700"}`,
          children: [
            /* @__PURE__ */ e(De, { className: "w-3 h-3" }),
            "Reset"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: `grid grid-cols-1 lg:grid-cols-12 ${R}`, children: [
      /* @__PURE__ */ t("div", { className: `lg:col-span-5 p-8 border-b lg:border-b-0 lg:border-r ${o} flex flex-col gap-6`, children: [
        /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-wider ${N}`, children: "Per-Vehicle Annual Cost Breakdown" }),
        /* @__PURE__ */ t("div", { className: "space-y-2", children: [
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border ${a ? "border-red-800/30 bg-red-900/10" : "border-red-100 bg-red-50"}`, children: [
            /* @__PURE__ */ e("p", { className: "text-xs font-bold uppercase tracking-widest text-red-500 mb-2", children: "Competitor (annual effective cost)" }),
            /* @__PURE__ */ t("p", { className: "text-2xl font-display font-medium text-red-600", children: [
              be(n.competitorAnnualEffective || 0),
              /* @__PURE__ */ e("span", { className: "text-sm font-normal text-red-400 ml-1", children: "/vehicle/yr" })
            ] }),
            /* @__PURE__ */ e("div", { className: "space-y-0.5 mt-2", children: [
              [`Coating (${be(r.competitorCost || 15e3)} / ${r.competitorDurability || 1.5} yr)`, n.competitorCostAmortized],
              ["Washing (full frequency)", r.annualWashCostPerVehicle],
              ["Paint correction (amortised)", n.paintCorrectionPerYear]
            ].map(([x, C]) => /* @__PURE__ */ t("div", { className: "flex justify-between text-xs", children: [
              /* @__PURE__ */ e("span", { className: "text-red-400", children: x }),
              /* @__PURE__ */ e("span", { className: "font-mono text-red-500", children: be(C || 0) })
            ] }, x)) })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 px-1", children: [
            /* @__PURE__ */ e("div", { className: `flex-1 h-px ${a ? "bg-neutral-700" : "bg-neutral-200"}` }),
            /* @__PURE__ */ e("span", { className: `text-[10px] uppercase font-bold ${N}`, children: "vs" }),
            /* @__PURE__ */ e("div", { className: `flex-1 h-px ${a ? "bg-neutral-700" : "bg-neutral-200"}` })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border-2 ${a ? "border-blue-700 bg-blue-900/10" : "border-blue-300 bg-blue-50"}`, children: [
            /* @__PURE__ */ e("p", { className: "text-xs font-bold uppercase tracking-widest text-blue-600 mb-2", children: "Ceraphene (annual effective cost)" }),
            /* @__PURE__ */ t("p", { className: "text-2xl font-display font-medium text-blue-700", children: [
              be(n.cerapheneAnnualEffective || 0),
              /* @__PURE__ */ e("span", { className: "text-sm font-normal text-blue-400 ml-1", children: "/vehicle/yr" })
            ] }),
            /* @__PURE__ */ e("div", { className: "space-y-0.5 mt-2", children: [
              [`Coating (₹${(n.ceraphenePrice || 5e3).toLocaleString()} / ${r.cerapheneDurability || 3.5} yr)`, n.cerapheneCoatAmortized],
              [`Washing (−${r.washReductionPct || 60}%)`, n.annualWashWithCoating],
              ["Paint correction", 0]
            ].map(([x, C]) => /* @__PURE__ */ t("div", { className: "flex justify-between text-xs", children: [
              /* @__PURE__ */ e("span", { className: "text-blue-400", children: x }),
              /* @__PURE__ */ e("span", { className: "font-mono text-blue-500", children: C === 0 ? "—" : be(C) })
            ] }, x)) })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl px-4 py-3 border-2 ${a ? "border-green-700 bg-green-900/10" : "border-green-300 bg-green-50"} flex items-center justify-between`, children: [
            /* @__PURE__ */ e("p", { className: "text-xs font-bold uppercase tracking-widest text-green-600", children: "Annual saving per vehicle" }),
            /* @__PURE__ */ t("p", { className: "text-xl font-display font-medium text-green-700", children: [
              be(n.annualSavingsPerVehicle || 0),
              /* @__PURE__ */ e("span", { className: "text-sm font-normal text-green-500 ml-0.5", children: "/yr" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: `rounded-xl border-2 overflow-hidden ${a ? "border-blue-800 bg-blue-950/20" : "border-blue-200 bg-white"}`, children: [
          /* @__PURE__ */ t("div", { className: `px-4 py-2 flex items-center justify-between ${a ? "bg-blue-900/40 border-b border-blue-800/50" : "bg-blue-50 border-b border-blue-100"}`, children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-widest text-blue-600", children: "Ceraphene Application" }),
            /* @__PURE__ */ t("span", { className: `text-[9px] font-bold px-2 py-0.5 rounded-full ${a ? "bg-blue-800/70 text-blue-300" : "bg-blue-200 text-blue-700"}`, children: [
              n.productMlPerVehicle || 35,
              " ml / vehicle"
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `grid grid-cols-2 divide-x ${a ? "divide-blue-800/40" : "divide-blue-100"}`, children: [
            /* @__PURE__ */ t("div", { className: "p-4", children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider mb-1.5 ${a ? "text-blue-400" : "text-blue-500"}`, children: "Volume Needed" }),
              /* @__PURE__ */ t("p", { className: `text-2xl font-display font-bold tabular-nums leading-none ${a ? "text-blue-200" : "text-blue-800"}`, children: [
                (n.productMlTotal || 0).toLocaleString("en-IN"),
                /* @__PURE__ */ e("span", { className: `text-sm font-normal ml-1 ${a ? "text-blue-400" : "text-blue-500"}`, children: "ml" })
              ] }),
              /* @__PURE__ */ t("p", { className: `text-[10px] mt-1.5 font-mono ${a ? "text-blue-500" : "text-blue-400"}`, children: [
                n.productMlPerVehicle || 35,
                " ml × ",
                (r.vehicleCount || 1).toLocaleString(),
                " vehicles"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "p-4", children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider mb-1.5 ${a ? "text-blue-400" : "text-blue-500"}`, children: "Additive Cost" }),
              /* @__PURE__ */ e("p", { className: `text-2xl font-display font-bold tabular-nums leading-none ${a ? "text-blue-200" : "text-blue-800"}`, children: ce(n.cerapheneProductCostTotal || 0) }),
              /* @__PURE__ */ t("p", { className: `text-[10px] mt-1.5 font-mono ${a ? "text-blue-500" : "text-blue-400"}`, children: [
                "₹",
                (n.cerapheneProductCostPerVehicle || 2500).toLocaleString(),
                "/vehicle × ",
                (r.vehicleCount || 1).toLocaleString()
              ] }),
              /* @__PURE__ */ t("div", { className: `flex items-center justify-between mt-2 pt-1.5 border-t ${a ? "border-blue-800/40" : "border-blue-100"}`, children: [
                /* @__PURE__ */ e("span", { className: `text-[10px] ${a ? "text-blue-500" : "text-blue-400"}`, children: "+ Installation" }),
                /* @__PURE__ */ e("span", { className: `text-[10px] font-mono font-semibold ${a ? "text-blue-400" : "text-blue-600"}`, children: ce(n.cerapheneServiceCostTotal || 0) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: `px-4 py-2 ${a ? "bg-blue-900/20 border-t border-blue-800/30" : "bg-blue-50/80 border-t border-blue-100"}`, children: /* @__PURE__ */ t("p", { className: `text-[10px] ${a ? "text-blue-500" : "text-blue-400"}`, children: [
            "Total: ₹",
            (n.ceraphenePrice || 5e3).toLocaleString(),
            "/vehicle · vs. ₹",
            (r.competitorCost || 15e3).toLocaleString(),
            " competitor · ",
            n.directSavingsPct,
            "% cheaper"
          ] }) })
        ] }),
        /* @__PURE__ */ t("div", { className: `rounded-xl border ${o} ${a ? "bg-neutral-800/30" : "bg-neutral-50"} p-5 mt-auto`, children: [
          /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-wider ${N} mb-4`, children: [
            "Project Total · ",
            (r.vehicleCount || 0).toLocaleString(),
            " vehicles"
          ] }),
          /* @__PURE__ */ t("div", { className: "space-y-2", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ e("span", { className: `text-sm ${N}`, children: "Ceraphene investment" }),
              /* @__PURE__ */ e("span", { className: `text-sm font-mono font-semibold ${a ? "text-neutral-300" : "text-neutral-600"}`, children: ce(n.investmentTotal || 0) })
            ] }),
            /* @__PURE__ */ t("div", { className: `pt-2 border-t ${o} space-y-1.5`, children: [
              /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ t("span", { className: `text-xs ${N}`, children: [
                  "Direct savings ",
                  /* @__PURE__ */ e("span", { className: "opacity-60", children: "(upfront)" })
                ] }),
                /* @__PURE__ */ t("span", { className: `text-sm font-mono font-semibold ${a ? "text-slate-300" : "text-slate-600"}`, children: [
                  "+",
                  ce(n.directSavingsTotal || 0)
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ t("span", { className: `text-sm font-bold ${T}`, children: [
                  "Full savings over ",
                  r.analysisPeriod || 4,
                  " yr"
                ] }),
                /* @__PURE__ */ t("span", { className: `text-xl font-bold font-mono ${a ? "text-green-400" : "text-green-700"}`, children: [
                  "+",
                  ce(n.fullSavingsTotal || 0)
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: `lg:col-span-7 ${I} p-8 flex flex-col gap-6`, children: [
        /* @__PURE__ */ e("div", { className: `grid grid-cols-4 gap-0 rounded-xl overflow-hidden border ${o}`, children: [
          {
            label: "Payback",
            value: n.paybackLabel || "—",
            color: a ? "text-blue-400" : "text-blue-700",
            bg: a ? "bg-blue-900/20" : "bg-blue-50"
          },
          {
            label: "Fleet Savings",
            value: ce(n.fullSavingsTotal || 0),
            color: a ? "text-green-400" : "text-green-700",
            bg: a ? "bg-green-900/20" : "bg-green-50"
          },
          {
            label: "Washes/yr",
            value: `−${n.annualWashesSaved || 0}/veh`,
            color: a ? "text-blue-400" : "text-blue-700",
            bg: a ? "bg-blue-900/20" : "bg-blue-50"
          },
          {
            label: "Water Saved",
            value: `${((n.waterSavedTotal || 0) / 1e3).toFixed(1)}kL/yr`,
            color: a ? "text-teal-400" : "text-teal-700",
            bg: a ? "bg-teal-900/20" : "bg-teal-50"
          }
        ].map(({ label: x, value: C, color: L, bg: X }, ae) => /* @__PURE__ */ t("div", { className: `${X} py-2.5 px-2 text-center ${ae < 3 ? `border-r ${o}` : ""}`, children: [
          /* @__PURE__ */ e("p", { className: `text-[8px] font-bold uppercase tracking-wider ${N} mb-0.5`, children: x }),
          /* @__PURE__ */ e("p", { className: `text-[11px] font-bold font-mono leading-tight ${L}`, children: C })
        ] }, x)) }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${N} mb-3`, children: "Annual effective cost per vehicle — comparison" }),
          /* @__PURE__ */ e("div", { className: "h-48", children: /* @__PURE__ */ e(O, { width: "100%", height: "100%", children: /* @__PURE__ */ t(he, { data: H, margin: { top: 20, right: 8, bottom: 0, left: -10 }, barSize: 52, children: [
            /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: a ? "#2a2a2a" : "#f1f5f9", vertical: !1 }),
            /* @__PURE__ */ e(_, { dataKey: "name", tick: { fontSize: 10, fill: a ? "#9ca3af" : "#64748b" }, tickLine: !1, axisLine: !1 }),
            /* @__PURE__ */ e(
              U,
              {
                domain: J,
                tickFormatter: (x) => `₹${(x / 1e3).toFixed(0)}k`,
                tick: { fontSize: 10, fill: a ? "#9ca3af" : "#64748b" },
                tickLine: !1,
                axisLine: !1
              }
            ),
            /* @__PURE__ */ e(q, { content: /* @__PURE__ */ e(br, {}) }),
            /* @__PURE__ */ t(ne, { dataKey: "cost", radius: [6, 6, 0, 0], children: [
              H.map((x, C) => /* @__PURE__ */ e(Me, { fill: x.fill }, C)),
              /* @__PURE__ */ e(
                Se,
                {
                  dataKey: "cost",
                  position: "top",
                  formatter: (x) => `₹${(x / 1e3).toFixed(1)}k`,
                  style: { fontSize: 10, fontWeight: 700, fill: a ? "#e5e7eb" : "#374151" }
                }
              )
            ] })
          ] }) }) }),
          /* @__PURE__ */ t("p", { className: `text-[11px] text-center mt-1 ${N}`, children: [
            "Gap between blue bar and red bar = annual saving per vehicle (₹",
            (n.annualSavingsPerVehicle || 0).toLocaleString("en-IN"),
            "/yr)"
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ t("div", { className: `p-5 rounded-2xl border-2 ${a ? "border-blue-700 bg-blue-900/10" : "border-blue-300 bg-blue-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ e("p", { className: "text-xs font-bold uppercase tracking-widest text-blue-600", children: n.fullLabel || "Full Ownership Savings" }),
              /* @__PURE__ */ e("span", { className: `text-[9px] font-bold px-1.5 py-0.5 rounded ${a ? "bg-neutral-700 text-neutral-300" : "bg-neutral-900 text-white"}`, children: "ALL-IN" })
            ] }),
            /* @__PURE__ */ e("p", { className: "text-3xl font-display font-medium tabular-nums text-blue-700", children: ce(n.fullSavingsTotal || 0) }),
            /* @__PURE__ */ t("p", { className: "text-xs mt-1.5 text-blue-600", children: [
              be(n.fullSavingsPerVehicle || 0),
              "/vehicle · coating + wash + correction saved"
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-5 rounded-2xl border ${a ? "border-slate-700 bg-slate-800/30" : "border-slate-200 bg-slate-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${a ? "text-slate-400" : "text-slate-500"}`, children: n.directLabel || "Direct Savings" }),
              /* @__PURE__ */ e("span", { className: `text-[9px] font-bold px-1.5 py-0.5 rounded ${a ? "bg-slate-700 text-slate-300" : "bg-slate-200 text-slate-600"}`, children: "BROCHURE" })
            ] }),
            /* @__PURE__ */ e("p", { className: `text-3xl font-display font-medium tabular-nums ${a ? "text-slate-200" : "text-slate-700"}`, children: ce(n.directSavingsTotal || 0) }),
            /* @__PURE__ */ t("p", { className: `text-xs mt-1.5 ${a ? "text-slate-500" : "text-slate-400"}`, children: [
              be(n.directSavingsPerVehicle || 0),
              "/vehicle · upfront price difference only"
            ] }),
            /* @__PURE__ */ t("p", { className: "text-[10px] font-semibold text-blue-500 mt-2", children: [
              "✦ ",
              n.directSavingsPct,
              "% cheaper than competitor per application"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${o} ${a ? "bg-neutral-800/50" : "bg-white"} flex items-center gap-4`, children: [
            /* @__PURE__ */ e(A, { className: "w-5 h-5 text-blue-500 flex-shrink-0" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${N}`, children: "ROI on Investment" }),
              /* @__PURE__ */ e("p", { className: `text-2xl font-display font-medium tabular-nums ${T}`, children: n.roiPercentage != null ? `${n.roiPercentage}%` : "—" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${o} ${a ? "bg-neutral-800/50" : "bg-white"} flex items-center gap-4`, children: [
            /* @__PURE__ */ e(W, { className: "w-5 h-5 text-green-500 flex-shrink-0" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${N}`, children: "Payback" }),
              /* @__PURE__ */ e("p", { className: "text-base font-display font-medium text-green-600", children: n.paybackLabel || "—" })
            ] })
          ] })
        ] }),
        n.roiMultiple != null && /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${a ? "border-blue-700 bg-blue-900/10" : "border-blue-200 bg-blue-50"} flex items-center gap-4`, children: [
          /* @__PURE__ */ e(A, { className: "w-5 h-5 text-blue-500 flex-shrink-0" }),
          /* @__PURE__ */ t("div", { className: "flex-1", children: [
            /* @__PURE__ */ t("p", { className: `text-[10px] font-bold uppercase tracking-wider ${a ? "text-blue-400" : "text-blue-600"}`, children: [
              r.analysisPeriod || 4,
              "-yr Return Multiple"
            ] }),
            /* @__PURE__ */ t("p", { className: `text-2xl font-display font-medium tabular-nums ${a ? "text-blue-300" : "text-blue-700"}`, children: [
              n.roiMultiple,
              "×"
            ] }),
            /* @__PURE__ */ e("p", { className: `text-[9px] mt-0.5 ${a ? "text-blue-500" : "text-blue-400"}`, children: "full savings ÷ Ceraphene investment" })
          ] }),
          /* @__PURE__ */ t("div", { className: "text-right flex-shrink-0", children: [
            /* @__PURE__ */ e("p", { className: `text-[9px] font-bold uppercase tracking-wider ${N} mb-0.5`, children: "Fleet Savings" }),
            /* @__PURE__ */ e("p", { className: `text-lg font-bold font-mono ${a ? "text-blue-300" : "text-blue-700"}`, children: ce(n.fullSavingsTotal || 0) })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border ${o} ${a ? "bg-neutral-800/30" : "bg-white"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${N} mb-1`, children: "Investment" }),
            /* @__PURE__ */ e("p", { className: `text-sm font-bold tabular-nums ${T}`, children: ce(n.investmentTotal || 0) }),
            /* @__PURE__ */ t("p", { className: `text-[10px] ${N}`, children: [
              "₹",
              (n.ceraphenePrice || 5e3).toLocaleString(),
              " × ",
              (r.vehicleCount || 1).toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border border-blue-500/25 ${a ? "bg-blue-900/10" : "bg-blue-50"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-blue-600/70 mb-1", children: "Washes Saved" }),
            /* @__PURE__ */ t("p", { className: "text-sm font-bold text-blue-600 tabular-nums", children: [
              (n.annualWashesSaved || 0).toLocaleString(),
              /* @__PURE__ */ e("span", { className: "text-[10px] font-normal ml-0.5", children: "/vehicle/yr" })
            ] }),
            /* @__PURE__ */ t("p", { className: "text-[10px] text-blue-500/60", children: [
              n.annualWashesWith || 0,
              " remaining"
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border border-teal-500/25 ${a ? "bg-teal-900/10" : "bg-teal-50"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-teal-600/70 mb-1", children: "Water Saved" }),
            /* @__PURE__ */ t("p", { className: "text-sm font-bold text-teal-600 tabular-nums", children: [
              ((n.waterSavedTotal || 0) / 1e3).toFixed(1),
              /* @__PURE__ */ e("span", { className: "text-[10px] font-normal ml-0.5", children: "kL/yr" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: `flex-grow border ${o} rounded-2xl ${a ? "bg-neutral-800/50" : "bg-white"} p-5`, children: [
          /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-widest ${N} mb-3`, children: [
            "Cumulative Savings — ",
            r.analysisPeriod || 4,
            "-Year Outlook"
          ] }),
          te.length > 0 && /* @__PURE__ */ e("div", { className: "h-28", children: /* @__PURE__ */ e(O, { width: "100%", height: "100%", children: /* @__PURE__ */ t(Qe, { data: te, margin: { top: 4, right: 12, bottom: 4, left: -18 }, children: [
            /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: a ? "#2a2a2a" : "#f1f5f9", vertical: !1 }),
            /* @__PURE__ */ e(_, { dataKey: "year", stroke: a ? "#525252" : "#94a3b8", fontSize: 10, tickLine: !1, axisLine: !1, tickMargin: 6, tickFormatter: (x) => `Yr ${x}` }),
            /* @__PURE__ */ e(U, { stroke: a ? "#525252" : "#94a3b8", fontSize: 10, tickLine: !1, axisLine: !1, tickMargin: 6, tickFormatter: ce }),
            /* @__PURE__ */ e(fe, { y: 0, stroke: a ? "#555" : "#cbd5e1", strokeDasharray: "4 2" }),
            /* @__PURE__ */ e(
              q,
              {
                contentStyle: { backgroundColor: a ? "#171717" : "#fff", border: `1px solid ${a ? "#404040" : "#e2e8f0"}`, borderRadius: "8px", fontSize: "11px", color: a ? "#fff" : "#111" },
                formatter: (x) => [ce(x), "Cumulative"],
                labelFormatter: (x) => x === 0 ? "At purchase (immediate)" : `Year ${x}`
              }
            ),
            /* @__PURE__ */ e(re, { type: "monotone", dataKey: "cumulative", stroke: "#3b82f6", strokeWidth: 2.5, dot: { fill: "#3b82f6", r: 3, strokeWidth: 0 }, activeDot: { r: 5, strokeWidth: 0 } })
          ] }) }) }),
          /* @__PURE__ */ e("p", { className: `text-[10px] ${N} mt-2`, children: "Yr 0 = immediate upfront savings at purchase. Annual wash + durability savings accumulate each year." })
        ] }),
        (n.fullSavingsTotal || 0) > 0 && /* @__PURE__ */ t("div", { className: `rounded-2xl p-6 flex items-center justify-between ${a ? "bg-neutral-800 border border-neutral-700" : "bg-neutral-900"}`, children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ t("p", { className: "text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1", children: [
              r.analysisPeriod || 4,
              "-yr fleet total · ",
              (r.vehicleCount || 1).toLocaleString(),
              " vehicles"
            ] }),
            /* @__PURE__ */ e("p", { className: "text-3xl font-display font-medium text-white", children: ce(n.fullSavingsTotal || 0) }),
            /* @__PURE__ */ t("p", { className: "text-[10px] text-neutral-500 mt-1", children: [
              be(n.annualSavingsPerVehicle || 0),
              "/vehicle/yr × ",
              r.analysisPeriod || 4,
              " yr × ",
              (r.vehicleCount || 1).toLocaleString(),
              " vehicles"
            ] })
          ] }),
          n.roiMultiple && /* @__PURE__ */ t("div", { className: "text-right flex-shrink-0 ml-6", children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1", children: "Return Multiple" }),
            /* @__PURE__ */ t("p", { className: "text-4xl font-display font-bold text-blue-400", children: [
              n.roiMultiple,
              "×"
            ] }),
            /* @__PURE__ */ e("p", { className: "text-[10px] text-neutral-500 mt-1", children: "on Ceraphene spend" })
          ] })
        ] }),
        /* @__PURE__ */ t("p", { className: `text-[10px] leading-relaxed flex items-start gap-1.5 ${N}`, children: [
          /* @__PURE__ */ e(ze, { className: "w-3 h-3 flex-shrink-0 mt-0.5 opacity-60" }),
          "Competitor durability is an estimate — validate with your supplier. Paint correction savings assume periodic professional correction for uncoated vehicles. Wash cost and frequency vary by usage."
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ t("div", { className: `border-t ${o} ${R}`, children: [
      /* @__PURE__ */ t(
        "button",
        {
          onClick: () => y((x) => !x),
          className: `w-full px-8 py-4 flex items-center justify-between text-sm font-medium ${T} transition-colors ${a ? "hover:bg-neutral-800/60" : "hover:bg-neutral-50"}`,
          children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3 flex-wrap", children: [
              /* @__PURE__ */ e("span", { children: "Advanced Parameters" }),
              /* @__PURE__ */ e("span", { className: `text-xs px-1.5 py-0.5 rounded font-medium ${a ? "bg-neutral-700 text-neutral-400" : "bg-neutral-100 text-neutral-500"}`, children: "Estimates" })
            ] }),
            /* @__PURE__ */ e(Ue, { className: `w-4 h-4 flex-shrink-0 transition-transform duration-200 ${N} ${w ? "rotate-180" : ""}` })
          ]
        }
      ),
      /* @__PURE__ */ e(se, { initial: !1, children: w && /* @__PURE__ */ e(
        f.div,
        {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.22, ease: "easeInOut" },
          className: "overflow-hidden",
          children: /* @__PURE__ */ t("div", { className: `px-8 pb-10 pt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 ${I}`, children: [
            /* @__PURE__ */ t("div", { className: "space-y-5", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-wider ${N}`, children: "Durability & Period Settings" }),
              Object.entries(c).map(([x, C]) => {
                const L = S(x, C);
                return L ? /* @__PURE__ */ e("div", { children: L }, x) : null;
              })
            ] }),
            /* @__PURE__ */ t("div", { className: "space-y-3", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-wider ${N}`, children: "Fleet Impact Summary" }),
              [
                { label: "Washes eliminated (per vehicle/yr)", value: `${n.annualWashesSaved || 0} washes`, color: "text-blue-600" },
                { label: "Water saved (per vehicle/yr)", value: `${(n.waterSavedLitresPerVehicle || 0).toLocaleString()} L`, color: "text-teal-600" },
                { label: "Paint correction eliminated", value: `₹${(n.paintCorrectionPerYear || 0).toLocaleString()}/vehicle/yr`, color: "text-green-600" },
                { label: "Hardness rating", value: "9H+ (SGS Certified)", color: "text-blue-500" }
              ].map(({ label: x, value: C, color: L }) => /* @__PURE__ */ t("div", { className: `flex items-center justify-between px-4 py-3 rounded-xl border ${o} ${a ? "bg-neutral-800/30" : "bg-white"}`, children: [
                /* @__PURE__ */ e("span", { className: `text-sm ${T}`, children: x }),
                /* @__PURE__ */ e("span", { className: `text-sm font-semibold font-mono ${L}`, children: C })
              ] }, x))
            ] })
          ] })
        },
        "sec"
      ) })
    ] })
  ] });
}, xr = (i) => {
  const l = 10 * Math.pow(10, Number(i) / 100 * 3);
  return l < 50 ? Math.max(10, Math.round(l / 5) * 5) : l < 200 ? Math.round(l / 10) * 10 : l < 1e3 ? Math.round(l / 50) * 50 : l < 5e3 ? Math.round(l / 500) * 500 : Math.round(l / 1e3) * 1e3;
}, Vt = (i) => Math.round(Math.log10(Math.max(10, Math.min(1e4, i)) / 10) / 3 * 100), hr = [
  { v: 10, num: "10", label: ["Lab", "scale"] },
  { v: 100, num: "100", label: ["Small", "plant"] },
  { v: 500, num: "500", label: ["Medium", "plant"] },
  { v: 2e3, num: "2k", label: ["Large", "plant"] },
  { v: 1e4, num: "10k", label: ["National", "scale"] }
], gr = (i) => i <= 50 ? "Lab-scale or pilot facility" : i <= 200 ? "Small compounder or R&D plant" : i <= 1e3 ? "Medium-scale polymer manufacturing" : i <= 5e3 ? "Large polymer processing plant" : "National-scale polymer producer", Z = (i) => {
  const l = Math.abs(i ?? 0), c = (i ?? 0) < 0 ? "−" : "";
  return l >= 1e7 ? `${c}₹${(l / 1e7).toFixed(1)} Cr` : l >= 1e5 ? `${c}₹${(l / 1e5).toFixed(1)} L` : l >= 1e3 ? `${c}₹${Math.round(l / 1e3)}k` : `${c}₹${Math.round(l)}`;
}, me = (i) => `${(i ?? 0) < 0 ? "−" : ""}₹${Math.abs(Math.round(i ?? 0)).toLocaleString("en-IN")}`, fr = ({ active: i, payload: l, label: c }) => !i || !l?.length ? null : /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-xl p-3 shadow-lg text-sm", children: [
  /* @__PURE__ */ e("p", { className: "font-bold text-neutral-800 mb-0.5", children: c }),
  /* @__PURE__ */ t("p", { className: "text-neutral-600", children: [
    "₹",
    l[0].value?.toLocaleString("en-IN")
  ] })
] }), qr = ({
  calculations: i,
  defaultInputs: l,
  secondaryInputs: c,
  theme: d = "light"
}) => {
  const a = d === "dark", s = (S) => ({
    background: `linear-gradient(to right, #059669 ${S.toFixed(1)}%, ${a ? "#374151" : "#e5e7eb"} ${S.toFixed(1)}%)`
  }), p = "w-full h-2 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-emerald-600 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-emerald-600 [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-pointer", u = { ...l, ...c || {} }, b = Object.keys(u).reduce((S, x) => {
    const C = u[x];
    return S[x] = C.default !== void 0 ? C.default : C.min != null ? C.min : C.options?.[0]?.value, S;
  }, {}), [r, h] = M(b), [m, g] = M(String(b.annualProduction || 500)), [w, y] = M(!1), k = (S, x) => h((C) => ({ ...C, [S]: x })), n = Q(() => i(r), [r, i]), G = () => {
    h(b), g(String(b.annualProduction || 500));
  }, R = a ? "bg-neutral-900" : "bg-white", I = a ? "bg-neutral-950/40" : "bg-neutral-50/60", o = a ? "border-neutral-700" : "border-neutral-200", T = a ? "text-white" : "text-neutral-900", N = a ? "text-neutral-400" : "text-neutral-500", F = a ? "text-emerald-400" : "text-emerald-600", H = Q(() => [
    { name: "Additive Cost", value: n.annualAdditiveCost || 0, fill: "#f87171" },
    { name: "Net Margin", value: Math.max(0, n.netMarginSavingsTotal || 0), fill: "#34d399" },
    { name: "All-In Gain", value: Math.max(0, n.allInSavingsTotal || 0), fill: "#059669" }
  ], [n]), J = Q(() => {
    const S = H.map((x) => x.value).filter(Boolean);
    return S.length ? [0, Math.ceil(Math.max(...S) * 1.18 / 1e4) * 1e4] : [0, 1e5];
  }, [H]), te = Q(() => n.projectionData ? n.projectionData : [], [n]), le = () => {
    const S = r.annualProduction || 500;
    return /* @__PURE__ */ t("div", { className: "space-y-2.5", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${T}`, children: "Annual Production" }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "number",
              value: m,
              min: 10,
              max: 1e4,
              onChange: (x) => {
                g(x.target.value);
                const C = parseInt(x.target.value, 10);
                !isNaN(C) && C >= 10 && C <= 1e4 && k("annualProduction", C);
              },
              onBlur: () => g(String(S)),
              className: `w-20 text-right text-sm font-mono border ${o} rounded px-2 py-1 ${a ? "bg-neutral-800 text-white" : "bg-white text-neutral-900"} focus:outline-none focus:ring-1 focus:ring-emerald-500`
            }
          ),
          /* @__PURE__ */ e("span", { className: `text-sm font-medium ${T}`, children: "tons" })
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: 0,
          max: 100,
          value: Vt(S),
          onChange: (x) => {
            const C = xr(x.target.value);
            k("annualProduction", C), g(String(C));
          },
          className: p,
          style: s(Vt(S))
        }
      ),
      /* @__PURE__ */ e("div", { className: "flex justify-between", children: hr.map(({ v: x, num: C, label: L }) => /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-0.5 w-10", children: [
        /* @__PURE__ */ e("span", { className: `text-[10px] font-semibold ${T}`, children: C }),
        L.map((X, ae) => /* @__PURE__ */ e("span", { className: `text-[9px] ${N} text-center leading-tight`, children: X }, ae))
      ] }, x)) }),
      /* @__PURE__ */ t("p", { className: `text-[11px] italic ${N}`, children: [
        "≈ ",
        gr(S)
      ] })
    ] });
  }, ue = () => {
    const S = l.dosagePercent, x = r.dosagePercent;
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${T}`, children: "Dosage Rate" }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${F}`, children: [
          (x || 0).toFixed(1),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: S.min,
          max: S.max,
          step: S.step || 0.1,
          value: x,
          onChange: (C) => k("dosagePercent", Number(C.target.value)),
          className: p,
          style: s(Math.max(0, Math.min(100, (x - S.min) / (S.max - S.min) * 100)))
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${N}`, children: [
          S.min,
          "%"
        ] }),
        /* @__PURE__ */ e("span", { className: `text-[10px] ${N}`, children: "optimal 0.5–1.5%" }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${N}`, children: [
          S.max,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ t("p", { className: `text-[11px] ${N}`, children: [
        n.dosageKgPerTon ?? ((x || 0.5) / 100 * 1e3).toFixed(1),
        " kg of HD-G-PE per ton polymer"
      ] }),
      n.netMarginPerTon != null && /* @__PURE__ */ t("p", { className: "text-[11px] font-semibold text-emerald-600", children: [
        "→ +",
        me(n.netMarginPerTon || 0),
        "/ton net · ",
        Z(n.netMarginSavingsTotal || 0),
        "/yr project"
      ] })
    ] });
  }, ie = () => {
    const S = l.application?.options || [];
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${T} block`, children: "Application Type" }),
      /* @__PURE__ */ e("div", { className: "flex flex-col gap-1.5", children: S.map((x) => /* @__PURE__ */ e(
        "button",
        {
          onClick: () => k("application", x.value),
          className: `px-3 py-1.5 rounded-lg text-sm font-medium border transition-all text-left ${r.application === x.value ? "bg-emerald-600 text-white border-emerald-600" : a ? "text-neutral-400 border-neutral-700 hover:border-neutral-500" : "bg-white text-neutral-600 border-neutral-200 hover:border-emerald-300"}`,
          children: x.label
        },
        x.value
      )) })
    ] });
  }, B = (S, x) => /* @__PURE__ */ t("div", { className: "space-y-2", children: [
    /* @__PURE__ */ e("label", { className: `text-sm font-medium ${T}`, children: x.label }),
    /* @__PURE__ */ e("div", { className: "flex gap-2", children: x.options.map((C) => /* @__PURE__ */ e(
      "button",
      {
        onClick: () => k(S, C.value),
        className: `flex-1 py-1.5 rounded-lg text-sm font-medium border transition-all ${r[S] === C.value ? a ? "bg-white text-neutral-900 border-white" : "bg-neutral-900 text-white border-neutral-900" : a ? "text-neutral-400 border-neutral-700 hover:border-neutral-500" : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"}`,
        children: C.label
      },
      C.value
    )) })
  ] }), D = (S, x) => {
    const C = Math.max(0, Math.min(100, (r[S] - x.min) / (x.max - x.min) * 100));
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("label", { className: `text-sm font-medium ${T}`, children: x.label }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${F}`, children: [
          r[S],
          " ",
          x.unit
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: x.min,
          max: x.max,
          step: x.step || 0.5,
          value: r[S],
          onChange: (L) => k(S, Number(L.target.value)),
          className: p,
          style: s(C)
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${N}`, children: [
          x.min,
          " ",
          x.unit
        ] }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${N}`, children: [
          x.max,
          " ",
          x.unit
        ] })
      ] })
    ] });
  }, v = (S, x) => {
    switch (x.type) {
      case "buttongroup":
        return B(S, x);
      case "slider":
        return D(S, x);
      default:
        return D(S, x);
    }
  };
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${o} overflow-hidden shadow-2xl`, children: [
    /* @__PURE__ */ t("div", { className: `px-6 py-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs ${a ? "bg-emerald-950/30 border-b border-emerald-900/50" : "bg-emerald-50 border-b border-emerald-100"}`, children: [
      /* @__PURE__ */ e($t, { className: "w-3.5 h-3.5 text-emerald-600 flex-shrink-0" }),
      /* @__PURE__ */ e("span", { className: "font-bold uppercase tracking-wider text-emerald-600", children: "Lab Tested" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: "+30% Tensile Strength" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: "20× Elongation" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: "+20% Lifespan" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: "Drop-In Masterbatch" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: "font-bold text-green-600", children: [
        "Net: ",
        me(n.netMarginPerTon || 0),
        "/ton"
      ] }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: `font-semibold ${a ? "text-slate-400" : "text-slate-500"}`, children: [
        "All-in: ",
        me(n.allInSavingsPerTon || 0),
        "/ton"
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: `grid grid-cols-1 lg:grid-cols-3 gap-6 px-8 py-7 border-b ${o} ${R}`, children: [
      /* @__PURE__ */ e(le, {}),
      /* @__PURE__ */ e(ue, {}),
      /* @__PURE__ */ e(ie, {})
    ] }),
    /* @__PURE__ */ t("div", { className: `px-8 py-2.5 flex items-center justify-between border-b ${o} ${a ? "bg-neutral-900/80" : "bg-emerald-50/60"}`, children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5 flex-wrap text-[10px]", children: [
        /* @__PURE__ */ e(ve, { className: `w-3 h-3 flex-shrink-0 ${a ? "text-emerald-400" : "text-emerald-600"}` }),
        /* @__PURE__ */ e("span", { className: `font-bold uppercase tracking-wider ${a ? "text-emerald-400" : "text-emerald-600"}`, children: "Verified Assumptions" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: "₹1,200/kg masterbatch (TDS)" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: "₹100/kg HDPE baseline" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: "+30% tensile · 20× elongation · −60% defects" })
      ] }),
      /* @__PURE__ */ t(
        "button",
        {
          onClick: G,
          className: `flex items-center gap-1.5 text-[10px] font-semibold px-3 py-1.5 rounded-lg border transition-colors flex-shrink-0 ${a ? "text-neutral-400 border-neutral-700 hover:bg-neutral-800 hover:text-neutral-200" : "text-neutral-500 border-neutral-200 hover:bg-white hover:text-neutral-700"}`,
          children: [
            /* @__PURE__ */ e(De, { className: "w-3 h-3" }),
            "Reset"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: `grid grid-cols-1 lg:grid-cols-12 ${R}`, children: [
      /* @__PURE__ */ t("div", { className: `lg:col-span-5 p-8 border-b lg:border-b-0 lg:border-r ${o} flex flex-col gap-6`, children: [
        /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-wider ${N}`, children: [
          "Per-Ton Economics · ",
          n.appLabel || "Pipes & Fittings"
        ] }),
        /* @__PURE__ */ t("div", { className: "space-y-2", children: [
          /* @__PURE__ */ t("div", { className: `rounded-xl border-2 overflow-hidden ${a ? "border-emerald-800 bg-emerald-950/20" : "border-emerald-200 bg-white"}`, children: [
            /* @__PURE__ */ t("div", { className: `px-4 py-2 flex items-center justify-between ${a ? "bg-emerald-900/40 border-b border-emerald-800/50" : "bg-emerald-50 border-b border-emerald-100"}`, children: [
              /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-widest text-emerald-600", children: "Masterbatch Requirement" }),
              /* @__PURE__ */ t("span", { className: `text-[9px] font-bold px-2 py-0.5 rounded-full ${a ? "bg-emerald-800/70 text-emerald-300" : "bg-emerald-200 text-emerald-700"}`, children: [
                n.dosageKgPerTon ?? ((r.dosagePercent || 0.5) / 100 * 1e3).toFixed(1),
                " kg/ton @ ",
                (r.dosagePercent || 0.5).toFixed(1),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `grid grid-cols-2 divide-x ${a ? "divide-emerald-800/40" : "divide-emerald-100"}`, children: [
              /* @__PURE__ */ t("div", { className: "p-4", children: [
                /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider mb-1.5 ${a ? "text-emerald-400" : "text-emerald-600"}`, children: "Annual Volume" }),
                /* @__PURE__ */ t("p", { className: `text-2xl font-display font-bold tabular-nums leading-none ${a ? "text-emerald-200" : "text-emerald-800"}`, children: [
                  (n.annualAdditiveKg || 0).toLocaleString("en-IN"),
                  /* @__PURE__ */ e("span", { className: `text-sm font-normal ml-1 ${a ? "text-emerald-400" : "text-emerald-600"}`, children: "kg" })
                ] }),
                /* @__PURE__ */ t("p", { className: "text-[10px] mt-1.5 font-mono text-emerald-500", children: [
                  n.dosageKgPerTon ?? ((r.dosagePercent || 0.5) / 100 * 1e3).toFixed(1),
                  " kg × ",
                  (r.annualProduction || 0).toLocaleString(),
                  " tons"
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "p-4", children: [
                /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider mb-1.5 ${a ? "text-red-400" : "text-red-500"}`, children: "Annual Spend" }),
                /* @__PURE__ */ e("p", { className: `text-2xl font-display font-bold tabular-nums leading-none ${a ? "text-red-300" : "text-red-700"}`, children: Z(n.annualAdditiveCost || 0) }),
                /* @__PURE__ */ t("p", { className: `text-[10px] mt-1.5 font-mono ${a ? "text-red-500" : "text-red-400"}`, children: [
                  "₹",
                  (n.masterbatchPricePerKg || 1200).toLocaleString("en-IN"),
                  "/kg × ",
                  (n.annualAdditiveKg || 0).toLocaleString("en-IN"),
                  " kg"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e("div", { className: `px-4 py-2 ${a ? "bg-emerald-900/20 border-t border-emerald-800/30" : "bg-emerald-50/80 border-t border-emerald-100"}`, children: /* @__PURE__ */ t("p", { className: "text-[10px] text-emerald-500", children: [
              "₹",
              (n.additiveCostPerTon || 0).toLocaleString("en-IN"),
              "/ton · ",
              n.dosageKgPerTon ?? ((r.dosagePercent || 0.5) / 100 * 1e3).toFixed(1),
              " kg/ton @ ₹",
              (n.masterbatchPricePerKg || 1200).toLocaleString("en-IN"),
              "/kg"
            ] }) })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 px-1", children: [
            /* @__PURE__ */ e("div", { className: `flex-1 h-px ${a ? "bg-neutral-700" : "bg-neutral-200"}` }),
            /* @__PURE__ */ e("span", { className: `text-[10px] uppercase font-bold ${N}`, children: "vs" }),
            /* @__PURE__ */ e("div", { className: `flex-1 h-px ${a ? "bg-neutral-700" : "bg-neutral-200"}` })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border-2 ${a ? "border-emerald-700 bg-emerald-900/10" : "border-emerald-300 bg-emerald-50"}`, children: [
            /* @__PURE__ */ t("p", { className: "text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2", children: [
              "Gross Benefit — ",
              n.appLabel || "Pipes & Fittings"
            ] }),
            /* @__PURE__ */ t("p", { className: "text-2xl font-display font-medium text-emerald-700", children: [
              me(n.grossBenefitPerTon || 0),
              /* @__PURE__ */ e("span", { className: "text-sm font-normal text-emerald-500 ml-1", children: "/ton" })
            ] }),
            /* @__PURE__ */ t("div", { className: "space-y-0.5 mt-2", children: [
              n.premiumPerTon > 0 && /* @__PURE__ */ t("div", { className: "flex justify-between text-xs", children: [
                /* @__PURE__ */ e("span", { className: "text-emerald-500", children: "Selling premium" }),
                /* @__PURE__ */ t("span", { className: "font-mono text-emerald-600", children: [
                  "+",
                  me(n.premiumPerTon)
                ] })
              ] }),
              n.downgaugeSavingsPerTon > 0 && /* @__PURE__ */ t("div", { className: "flex justify-between text-xs", children: [
                /* @__PURE__ */ e("span", { className: "text-emerald-500", children: "Material savings (downgauge)" }),
                /* @__PURE__ */ t("span", { className: "font-mono text-emerald-600", children: [
                  "+",
                  me(n.downgaugeSavingsPerTon)
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl px-4 py-3 border-2 flex items-center justify-between ${(n.netMarginPerTon || 0) >= 0 ? a ? "border-green-700 bg-green-900/10" : "border-green-300 bg-green-50" : a ? "border-amber-700 bg-amber-900/10" : "border-amber-200 bg-amber-50"}`, children: [
            /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${(n.netMarginPerTon || 0) >= 0 ? "text-green-600" : "text-amber-600"}`, children: "Net margin per ton" }),
            /* @__PURE__ */ t("p", { className: `text-xl font-display font-medium ${(n.netMarginPerTon || 0) >= 0 ? "text-green-700" : "text-amber-600"}`, children: [
              (n.netMarginPerTon || 0) >= 0 ? "+" : "",
              me(n.netMarginPerTon || 0),
              /* @__PURE__ */ e("span", { className: "text-sm font-normal ml-0.5", children: "/ton" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl p-3.5 border ${a ? "border-neutral-700 bg-neutral-800/30" : "border-neutral-200 bg-neutral-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${N}`, children: "Quality improvement saving" }),
              /* @__PURE__ */ e("span", { className: `text-[10px] px-2 py-0.5 rounded-full font-semibold ${a ? "bg-neutral-700 text-neutral-400" : "bg-neutral-200 text-neutral-500"}`, children: "−60% defects" })
            ] }),
            /* @__PURE__ */ t("p", { className: `text-xl font-display font-medium ${T} mt-0.5`, children: [
              "+",
              me(n.returnsSavingsPerTon || 0),
              /* @__PURE__ */ e("span", { className: `text-sm font-normal ${N} ml-1`, children: "/ton" })
            ] }),
            /* @__PURE__ */ t("p", { className: `text-xs ${N} mt-0.5`, children: [
              "on ",
              (r.qualityReturnRate || 2).toFixed(1),
              "% current defect rate"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: `rounded-xl border ${o} ${a ? "bg-neutral-800/30" : "bg-neutral-50"} p-5 mt-auto`, children: [
          /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-wider ${N} mb-4`, children: [
            "Project Total · ",
            (r.annualProduction || 0).toLocaleString(),
            " tons/yr"
          ] }),
          /* @__PURE__ */ t("div", { className: "space-y-2", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ e("span", { className: `text-sm ${N}`, children: "Annual additive spend" }),
              /* @__PURE__ */ e("span", { className: `text-sm font-mono font-semibold ${a ? "text-red-400" : "text-red-500"}`, children: Z(n.annualAdditiveCost || 0) })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ e("span", { className: `text-sm ${N}`, children: "Annual net margin" }),
              /* @__PURE__ */ t("span", { className: "text-sm font-mono font-semibold text-green-600", children: [
                "+",
                Z(n.netMarginSavingsTotal || 0),
                "/yr"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `pt-2 border-t ${o} space-y-1.5`, children: [
              /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ t("span", { className: `text-xs ${N}`, children: [
                  "All-in gain ",
                  /* @__PURE__ */ e("span", { className: "opacity-60", children: "(incl. quality)" })
                ] }),
                /* @__PURE__ */ t("span", { className: `text-sm font-mono font-semibold ${a ? "text-emerald-400" : "text-emerald-600"}`, children: [
                  "+",
                  Z(n.allInSavingsTotal || 0),
                  "/yr"
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ t("span", { className: `text-sm font-bold ${T}`, children: [
                  n.analysisPeriod || 3,
                  "-yr net margin"
                ] }),
                /* @__PURE__ */ e("span", { className: `text-xl font-bold font-mono ${a ? "text-green-400" : "text-green-700"}`, children: Z((n.netMarginSavingsTotal || 0) * (n.analysisPeriod || 3)) })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: `lg:col-span-7 ${I} p-8 flex flex-col gap-6`, children: [
        /* @__PURE__ */ e("div", { className: `grid grid-cols-4 gap-0 rounded-xl overflow-hidden border ${o}`, children: [
          {
            label: "Payback",
            value: n.paybackLabel || "—",
            color: a ? "text-emerald-400" : "text-emerald-700",
            bg: a ? "bg-emerald-900/20" : "bg-emerald-50"
          },
          {
            label: "Annual Gain",
            value: Z(n.allInSavingsTotal || 0),
            color: a ? "text-green-400" : "text-green-700",
            bg: a ? "bg-green-900/20" : "bg-green-50"
          },
          {
            label: "Net/ton",
            value: `+${me(n.netMarginPerTon || 0)}`,
            color: a ? "text-emerald-400" : "text-emerald-700",
            bg: a ? "bg-emerald-900/20" : "bg-emerald-50"
          },
          {
            label: "CO₂/yr",
            value: n.co2SavedTons > 0 ? `${n.co2SavedTons}t` : "—",
            color: a ? "text-teal-400" : "text-teal-700",
            bg: a ? "bg-teal-900/20" : "bg-teal-50"
          }
        ].map(({ label: S, value: x, color: C, bg: L }, X) => /* @__PURE__ */ t("div", { className: `${L} py-2.5 px-2 text-center ${X < 3 ? `border-r ${o}` : ""}`, children: [
          /* @__PURE__ */ e("p", { className: `text-[8px] font-bold uppercase tracking-wider ${N} mb-0.5`, children: S }),
          /* @__PURE__ */ e("p", { className: `text-[11px] font-bold font-mono leading-tight ${C}`, children: x })
        ] }, S)) }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-widest ${N} mb-3`, children: [
            "Annual totals — ",
            (r.annualProduction || 0).toLocaleString(),
            " tons production"
          ] }),
          /* @__PURE__ */ e("div", { className: "h-48", children: /* @__PURE__ */ e(O, { width: "100%", height: "100%", children: /* @__PURE__ */ t(he, { data: H, margin: { top: 20, right: 8, bottom: 0, left: -10 }, barSize: 52, children: [
            /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: a ? "#2a2a2a" : "#f1f5f9", vertical: !1 }),
            /* @__PURE__ */ e(_, { dataKey: "name", tick: { fontSize: 11, fill: a ? "#9ca3af" : "#64748b" }, tickLine: !1, axisLine: !1 }),
            /* @__PURE__ */ e(
              U,
              {
                domain: J,
                tickFormatter: (S) => Z(S),
                tick: { fontSize: 10, fill: a ? "#9ca3af" : "#64748b" },
                tickLine: !1,
                axisLine: !1
              }
            ),
            /* @__PURE__ */ e(q, { content: /* @__PURE__ */ e(fr, {}) }),
            /* @__PURE__ */ t(ne, { dataKey: "value", radius: [6, 6, 0, 0], children: [
              H.map((S, x) => /* @__PURE__ */ e(Me, { fill: S.fill }, x)),
              /* @__PURE__ */ e(
                Se,
                {
                  dataKey: "value",
                  position: "top",
                  formatter: (S) => Z(S),
                  style: { fontSize: 10, fontWeight: 700, fill: a ? "#e5e7eb" : "#374151" }
                }
              )
            ] })
          ] }) }) }),
          /* @__PURE__ */ e("p", { className: `text-[11px] text-center mt-1 ${N}`, children: "Red = additive spend · Light green = net margin · Dark green = all-in (incl. quality savings)" })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ t("div", { className: `p-5 rounded-2xl border-2 ${a ? "border-emerald-700 bg-emerald-900/10" : "border-emerald-300 bg-emerald-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ e("p", { className: "text-xs font-bold uppercase tracking-widest text-emerald-600", children: "All-In Annual Gain" }),
              /* @__PURE__ */ e("span", { className: `text-[9px] font-bold px-1.5 py-0.5 rounded ${a ? "bg-neutral-700 text-neutral-300" : "bg-neutral-900 text-white"}`, children: "ALL-IN" })
            ] }),
            /* @__PURE__ */ e("p", { className: "text-3xl font-display font-medium tabular-nums text-emerald-700", children: Z(n.allInSavingsTotal || 0) }),
            /* @__PURE__ */ t("p", { className: "text-xs mt-1.5 text-emerald-600", children: [
              "+",
              me(n.allInSavingsPerTon || 0),
              "/ton · margin + quality"
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-5 rounded-2xl border ${a ? "border-slate-700 bg-slate-800/30" : "border-slate-200 bg-slate-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${a ? "text-slate-400" : "text-slate-500"}`, children: "Net Margin" }),
              /* @__PURE__ */ e("span", { className: `text-[9px] font-bold px-1.5 py-0.5 rounded ${a ? "bg-slate-700 text-slate-300" : "bg-slate-200 text-slate-600"}`, children: "NET MARGIN" })
            ] }),
            /* @__PURE__ */ e("p", { className: `text-3xl font-display font-medium tabular-nums ${(n.netMarginSavingsTotal || 0) >= 0 ? a ? "text-slate-200" : "text-slate-700" : "text-red-500"}`, children: Z(n.netMarginSavingsTotal || 0) }),
            /* @__PURE__ */ t("p", { className: `text-xs mt-1.5 ${a ? "text-slate-500" : "text-slate-400"}`, children: [
              "+",
              me(n.netMarginPerTon || 0),
              "/ton · premium / downgauge only"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${o} ${a ? "bg-neutral-800/50" : "bg-white"} flex items-center gap-4`, children: [
            /* @__PURE__ */ e(A, { className: "w-5 h-5 text-emerald-500 flex-shrink-0" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${N}`, children: "ROI on Additive" }),
              /* @__PURE__ */ e("p", { className: `text-2xl font-display font-medium tabular-nums ${T}`, children: n.roiPercentage != null ? `${n.roiPercentage}%` : "—" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${o} ${a ? "bg-neutral-800/50" : "bg-white"} flex items-center gap-4`, children: [
            /* @__PURE__ */ e(W, { className: "w-5 h-5 text-green-500 flex-shrink-0" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${N}`, children: "Per-Batch Payback" }),
              /* @__PURE__ */ e("p", { className: "text-base font-display font-medium text-green-600", children: n.paybackLabel || "—" })
            ] })
          ] })
        ] }),
        n.roiMultiple != null && /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${a ? "border-emerald-700 bg-emerald-900/10" : "border-emerald-200 bg-emerald-50"} flex items-center gap-4`, children: [
          /* @__PURE__ */ e(A, { className: "w-5 h-5 text-emerald-500 flex-shrink-0" }),
          /* @__PURE__ */ t("div", { className: "flex-1", children: [
            /* @__PURE__ */ t("p", { className: `text-[10px] font-bold uppercase tracking-wider ${a ? "text-emerald-400" : "text-emerald-600"}`, children: [
              n.analysisPeriod || 3,
              "-yr Return Multiple"
            ] }),
            /* @__PURE__ */ t("p", { className: `text-2xl font-display font-medium tabular-nums ${a ? "text-emerald-300" : "text-emerald-700"}`, children: [
              n.roiMultiple,
              "×"
            ] }),
            /* @__PURE__ */ e("p", { className: `text-[9px] mt-0.5 ${a ? "text-emerald-500" : "text-emerald-400"}`, children: "net margin ÷ additive spend" })
          ] }),
          /* @__PURE__ */ t("div", { className: "text-right flex-shrink-0", children: [
            /* @__PURE__ */ t("p", { className: `text-[9px] font-bold uppercase tracking-wider ${N} mb-0.5`, children: [
              n.analysisPeriod || 3,
              "-yr Net Gain"
            ] }),
            /* @__PURE__ */ e("p", { className: `text-lg font-bold font-mono ${a ? "text-emerald-300" : "text-emerald-700"}`, children: Z(n.periodNetGain || 0) })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border ${o} ${a ? "bg-neutral-800/30" : "bg-white"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${N} mb-1`, children: "Additive / yr" }),
            /* @__PURE__ */ e("p", { className: `text-sm font-bold tabular-nums ${a ? "text-red-400" : "text-red-500"}`, children: Z(n.annualAdditiveCost || 0) }),
            /* @__PURE__ */ t("p", { className: `text-[10px] ${N}`, children: [
              "@ ",
              (r.dosagePercent || 0.5).toFixed(1),
              "% dosage"
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border border-emerald-500/25 ${a ? "bg-emerald-900/10" : "bg-emerald-50"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-emerald-600/70 mb-1", children: "Net Gain / ton" }),
            /* @__PURE__ */ t("p", { className: `text-sm font-bold tabular-nums ${(n.netMarginPerTon || 0) >= 0 ? "text-emerald-600" : "text-amber-500"}`, children: [
              (n.netMarginPerTon || 0) >= 0 ? "+" : "",
              me(n.netMarginPerTon || 0)
            ] }),
            /* @__PURE__ */ e("p", { className: "text-[10px] text-emerald-500/60", children: "per ton produced" })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border border-teal-500/25 ${a ? "bg-teal-900/10" : "bg-teal-50"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-teal-600/70 mb-1", children: "CO₂ Avoided" }),
            /* @__PURE__ */ e("p", { className: "text-sm font-bold text-teal-600 tabular-nums", children: n.co2SavedTons > 0 ? `${n.co2SavedTons}t` : "—" }),
            /* @__PURE__ */ e("p", { className: "text-[10px] text-teal-500/60", children: "via material reduction" })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: `flex-grow border ${o} rounded-2xl ${a ? "bg-neutral-800/50" : "bg-white"} p-5`, children: [
          /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-widest ${N} mb-3`, children: [
            n.analysisPeriod || 3,
            "-Year Cumulative Net Gain"
          ] }),
          te.length > 0 && /* @__PURE__ */ e("div", { className: "h-28", children: /* @__PURE__ */ e(O, { width: "100%", height: "100%", children: /* @__PURE__ */ t(Qe, { data: te, margin: { top: 4, right: 12, bottom: 4, left: -18 }, children: [
            /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: a ? "#2a2a2a" : "#f1f5f9", vertical: !1 }),
            /* @__PURE__ */ e(_, { dataKey: "year", stroke: a ? "#525252" : "#94a3b8", fontSize: 10, tickLine: !1, axisLine: !1, tickMargin: 6 }),
            /* @__PURE__ */ e(U, { stroke: a ? "#525252" : "#94a3b8", fontSize: 10, tickLine: !1, axisLine: !1, tickMargin: 6, tickFormatter: Z }),
            /* @__PURE__ */ e(fe, { y: 0, stroke: a ? "#555" : "#cbd5e1", strokeDasharray: "4 2" }),
            /* @__PURE__ */ e(
              q,
              {
                contentStyle: { backgroundColor: a ? "#171717" : "#fff", border: `1px solid ${a ? "#404040" : "#e2e8f0"}`, borderRadius: "8px", fontSize: "11px", color: a ? "#fff" : "#111" },
                formatter: (S, x) => [Z(S), x === "netMargin" ? "Net Margin" : "All-In"],
                labelFormatter: (S) => S
              }
            ),
            /* @__PURE__ */ e(re, { type: "monotone", dataKey: "netMargin", name: "Net Margin", stroke: "#34d399", strokeWidth: 2.5, dot: { fill: "#34d399", r: 3, strokeWidth: 0 }, activeDot: { r: 5, strokeWidth: 0 } }),
            /* @__PURE__ */ e(re, { type: "monotone", dataKey: "allIn", name: "All-In", stroke: "#059669", strokeWidth: 2, dot: !1, strokeDasharray: "4 2" })
          ] }) }) }),
          /* @__PURE__ */ e("p", { className: `text-[10px] ${N} mt-2`, children: "Cumulative net gain grows each year. Additive is a recurring variable cost — no upfront capital required." })
        ] }),
        (n.periodNetGain || 0) > 0 && /* @__PURE__ */ t("div", { className: `rounded-2xl p-6 flex items-center justify-between ${a ? "bg-neutral-800 border border-neutral-700" : "bg-neutral-900"}`, children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ t("p", { className: "text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1", children: [
              n.analysisPeriod || 3,
              "-yr net gain · ",
              (r.annualProduction || 0).toLocaleString(),
              " tons/yr"
            ] }),
            /* @__PURE__ */ e("p", { className: "text-3xl font-display font-medium text-white", children: Z(n.periodNetGain || 0) }),
            /* @__PURE__ */ t("p", { className: "text-[10px] text-neutral-500 mt-1", children: [
              Z(n.netMarginSavingsTotal || 0),
              "/yr × ",
              n.analysisPeriod || 3,
              " yr · +",
              me(n.netMarginPerTon || 0),
              "/ton net margin"
            ] })
          ] }),
          n.roiMultiple && /* @__PURE__ */ t("div", { className: "text-right flex-shrink-0 ml-6", children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1", children: "Return Multiple" }),
            /* @__PURE__ */ t("p", { className: "text-4xl font-display font-bold text-emerald-400", children: [
              n.roiMultiple,
              "×"
            ] }),
            /* @__PURE__ */ e("p", { className: "text-[10px] text-neutral-500 mt-1", children: "on additive spend" })
          ] })
        ] }),
        /* @__PURE__ */ t("p", { className: `text-[10px] leading-relaxed flex items-start gap-1.5 ${N}`, children: [
          /* @__PURE__ */ e(ze, { className: "w-3 h-3 flex-shrink-0 mt-0.5 opacity-60" }),
          "Premiums use industry benchmarks (Pipes +12%, Films 15% downgauge, Molding +15%) against ₹100/kg HDPE baseline. Actual results depend on product grades, customer mix, and market pricing. Quality improvement assumes 60% defect reduction. Contact us for application-specific modelling."
        ] })
      ] })
    ] }),
    c && /* @__PURE__ */ t("div", { className: `border-t ${o} ${R}`, children: [
      /* @__PURE__ */ t(
        "button",
        {
          onClick: () => y((S) => !S),
          className: `w-full px-8 py-4 flex items-center justify-between text-sm font-medium ${T} transition-colors ${a ? "hover:bg-neutral-800/60" : "hover:bg-neutral-50"}`,
          children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3 flex-wrap", children: [
              /* @__PURE__ */ e("span", { children: "Advanced Parameters" }),
              /* @__PURE__ */ e("span", { className: `text-xs px-1.5 py-0.5 rounded font-medium ${a ? "bg-neutral-700 text-neutral-400" : "bg-neutral-100 text-neutral-500"}`, children: "Estimates" })
            ] }),
            /* @__PURE__ */ e(Ue, { className: `w-4 h-4 flex-shrink-0 transition-transform duration-200 ${N} ${w ? "rotate-180" : ""}` })
          ]
        }
      ),
      /* @__PURE__ */ e(se, { initial: !1, children: w && /* @__PURE__ */ e(
        f.div,
        {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.22, ease: "easeInOut" },
          className: "overflow-hidden",
          children: /* @__PURE__ */ t("div", { className: `px-8 pb-10 pt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 ${I}`, children: [
            /* @__PURE__ */ t("div", { className: "space-y-5", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-wider ${N}`, children: "Scenario Parameters" }),
              Object.entries(c).map(([S, x]) => {
                const C = v(S, x);
                return C ? /* @__PURE__ */ e("div", { children: C }, S) : null;
              })
            ] }),
            /* @__PURE__ */ t("div", { className: "space-y-3", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-wider ${N}`, children: "Production Impact Summary" }),
              [
                { label: "Annual production", value: `${(r.annualProduction || 0).toLocaleString()} tons` },
                { label: "Application", value: n.appLabel || "—" },
                { label: "Dosage rate", value: `${(r.dosagePercent || 0.5).toFixed(1)}% (${((r.dosagePercent || 0.5) / 100 * 1e3).toFixed(1)} kg/ton)` },
                { label: "Additive spend / yr", value: Z(n.annualAdditiveCost || 0), color: "text-red-500" },
                { label: "Net margin / yr", value: Z(n.netMarginSavingsTotal || 0), color: "text-emerald-600" },
                { label: "All-in gain / yr", value: Z(n.allInSavingsTotal || 0), color: "text-emerald-700" },
                ...n.materialSavedTons > 0 ? [{ label: "Material saved / yr", value: `${n.materialSavedTons} tons` }] : [],
                ...n.co2SavedTons > 0 ? [{ label: "CO₂ avoided", value: `${n.co2SavedTons} tCO₂` }] : [],
                { label: `${n.analysisPeriod || 3}-yr net margin`, value: Z((n.netMarginSavingsTotal || 0) * (n.analysisPeriod || 3)), color: "text-green-700" }
              ].map(({ label: S, value: x, color: C }, L) => /* @__PURE__ */ t("div", { className: `flex items-center justify-between px-4 py-3 rounded-xl border ${o} ${a ? "bg-neutral-800/30" : "bg-white"}`, children: [
                /* @__PURE__ */ e("span", { className: `text-sm ${T}`, children: S }),
                /* @__PURE__ */ e("span", { className: `text-sm font-semibold font-mono ${C || T}`, children: x })
              ] }, L))
            ] })
          ] })
        },
        "sec"
      ) })
    ] })
  ] });
}, Yr = () => {
  const [i, l] = M(100), [c, d] = M(15e3), [a] = M(5e3), [s, p] = M(3), u = Q(() => {
    const b = i * c, r = i * a, h = b - r, m = (h / b * 100).toFixed(1), g = b * s, w = r * s, y = h * s, k = [
      { name: "Ceraphene Cost", value: r, color: "#0d9488" },
      { name: "Savings", value: h, color: "#10b981" }
    ], n = [];
    for (let G = 1; G <= s; G++)
      n.push({
        year: `Year ${G}`,
        "Premium Coating": b,
        Ceraphene: r
      });
    return {
      annualCostPremium: b,
      annualCostCeraphene: r,
      annualSavings: h,
      savingsPercent: m,
      totalCostPremium: g,
      totalCostCeraphene: w,
      totalSavings: y,
      costBreakdown: k,
      yearlyData: n
    };
  }, [i, c, a, s]);
  return /* @__PURE__ */ t("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" }),
    /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-purple-500/30 bg-purple-500/10 backdrop-blur mb-6", children: [
              /* @__PURE__ */ e(Oe, { className: "w-4 h-4 text-purple-400" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-mono text-purple-400 tracking-widest uppercase", children: "Cost Analysis" })
            ] }),
            /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "Ceraphene Cost Comparison" }),
            /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto", children: "Premium performance at 60-70% lower cost than competitors" })
          ]
        }
      ),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8", children: [
        /* @__PURE__ */ t("div", { className: "lg:col-span-4 space-y-6", children: [
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block", children: "Annual Units Required" }),
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "range",
                    min: "10",
                    max: "500",
                    step: "10",
                    value: i,
                    onChange: (b) => l(Number(b.target.value)),
                    className: "w-full accent-brand-500 h-1 bg-neutral-700 rounded-sm"
                  }
                ),
                /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mt-3", children: [
                  i,
                  " ",
                  /* @__PURE__ */ e("span", { className: "text-lg text-neutral-400", children: "units/year" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.1 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block", children: "Competitor Price (₹/50ml)" }),
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "range",
                    min: "12000",
                    max: "20000",
                    step: "1000",
                    value: c,
                    onChange: (b) => d(Number(b.target.value)),
                    className: "w-full accent-brand-500 h-1 bg-neutral-700 rounded-sm"
                  }
                ),
                /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mt-3", children: [
                  "₹",
                  c.toLocaleString()
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.2 },
              className: "bg-gradient-to-r from-brand-500/20 to-green-500/20 border border-brand-500/30 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-brand-300 uppercase tracking-wide mb-3 block", children: "Ceraphene Price (₹/50ml)" }),
                /* @__PURE__ */ t("div", { className: "text-4xl font-mono font-bold text-brand-400 mt-3", children: [
                  "₹",
                  a.toLocaleString()
                ] }),
                /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 mt-2 font-mono", children: "Premium quality, affordable price" })
              ]
            }
          ),
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.3 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block", children: "Time Horizon (Years)" }),
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "range",
                    min: "1",
                    max: "10",
                    step: "1",
                    value: s,
                    onChange: (b) => p(Number(b.target.value)),
                    className: "w-full accent-brand-500 h-1 bg-neutral-700 rounded-sm"
                  }
                ),
                /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mt-3", children: [
                  s,
                  " ",
                  /* @__PURE__ */ e("span", { className: "text-lg text-neutral-400", children: "years" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { className: "lg:col-span-8 space-y-6", children: [
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.4 },
              className: "grid grid-cols-2 md:grid-cols-4 gap-4",
              children: [
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-green-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(ee, { className: "w-6 h-6 text-green-400 mb-3" }),
                  /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                    u.savingsPercent,
                    "%"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "Cost Reduction" })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-brand-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(Ie, { className: "w-6 h-6 text-brand-400 mb-3" }),
                  /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                    "₹",
                    (u.annualSavings / 1e5).toFixed(1),
                    "L"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "Annual Savings" })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-purple-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(Fe, { className: "w-6 h-6 text-purple-400 mb-3" }),
                  /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                    "₹",
                    (u.totalSavings / 1e5).toFixed(1),
                    "L"
                  ] }),
                  /* @__PURE__ */ t("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: [
                    s,
                    "-Yr Total"
                  ] })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-yellow-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(pe, { className: "w-6 h-6 text-yellow-400 mb-3" }),
                  /* @__PURE__ */ e("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: "9H+" }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "Hardness" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.5 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white mb-6", children: "Year-by-Year Cost Comparison" }),
                /* @__PURE__ */ e(O, { width: "100%", height: 300, children: /* @__PURE__ */ t(he, { data: u.yearlyData, children: [
                  /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: "#404040" }),
                  /* @__PURE__ */ e(_, { dataKey: "year", stroke: "#9ca3af", style: { fontSize: "12px", fontFamily: "Space Grotesk" } }),
                  /* @__PURE__ */ e(U, { stroke: "#9ca3af", tickFormatter: (b) => `₹${(b / 1e5).toFixed(0)}L`, style: { fontSize: "12px", fontFamily: "Space Grotesk" } }),
                  /* @__PURE__ */ e(
                    q,
                    {
                      contentStyle: { backgroundColor: "#1a1a1a", border: "1px solid #404040", borderRadius: "4px", fontFamily: "Space Grotesk" },
                      formatter: (b) => [`₹${b.toLocaleString()}`, ""]
                    }
                  ),
                  /* @__PURE__ */ e(ke, { wrapperStyle: { fontFamily: "Space Grotesk" } }),
                  /* @__PURE__ */ e(ne, { dataKey: "Premium Coating", fill: "#ef4444" }),
                  /* @__PURE__ */ e(ne, { dataKey: "Ceraphene", fill: "#0d9488" })
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6 },
              className: "grid grid-cols-1 md:grid-cols-2 gap-6",
              children: [
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6", children: [
                  /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white mb-4", children: "Cost Allocation" }),
                  /* @__PURE__ */ e(O, { width: "100%", height: 250, children: /* @__PURE__ */ t(ca, { children: [
                    /* @__PURE__ */ e(
                      ma,
                      {
                        data: u.costBreakdown,
                        cx: "50%",
                        cy: "50%",
                        labelLine: !1,
                        label: ({ name: b, percent: r }) => `${b}: ${(r * 100).toFixed(0)}%`,
                        outerRadius: 80,
                        fill: "#8884d8",
                        dataKey: "value",
                        children: u.costBreakdown.map((b, r) => /* @__PURE__ */ e(Me, { fill: b.color }, `cell-${r}`))
                      }
                    ),
                    /* @__PURE__ */ e(
                      q,
                      {
                        contentStyle: { backgroundColor: "#1a1a1a", border: "1px solid #404040", borderRadius: "4px", fontFamily: "Space Grotesk" },
                        formatter: (b) => `₹${b.toLocaleString()}`
                      }
                    )
                  ] }) })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6", children: [
                  /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white mb-4", children: "Detailed Breakdown" }),
                  /* @__PURE__ */ t("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ t("div", { className: "flex justify-between items-center pb-3 border-b border-neutral-700", children: [
                      /* @__PURE__ */ e("span", { className: "text-sm text-neutral-400 font-mono", children: "Unit Price" }),
                      /* @__PURE__ */ t("div", { className: "text-right", children: [
                        /* @__PURE__ */ t("div", { className: "text-red-400 line-through font-mono", children: [
                          "₹",
                          c.toLocaleString()
                        ] }),
                        /* @__PURE__ */ t("div", { className: "text-brand-400 font-bold font-mono", children: [
                          "₹",
                          a.toLocaleString()
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ t("div", { className: "flex justify-between items-center pb-3 border-b border-neutral-700", children: [
                      /* @__PURE__ */ e("span", { className: "text-sm text-neutral-400 font-mono", children: "Annual Cost" }),
                      /* @__PURE__ */ t("div", { className: "text-right", children: [
                        /* @__PURE__ */ t("div", { className: "text-red-400 line-through font-mono", children: [
                          "₹",
                          (u.annualCostPremium / 1e5).toFixed(2),
                          "L"
                        ] }),
                        /* @__PURE__ */ t("div", { className: "text-brand-400 font-bold font-mono", children: [
                          "₹",
                          (u.annualCostCeraphene / 1e5).toFixed(2),
                          "L"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ t("div", { className: "flex justify-between items-center pb-3 border-b border-neutral-700", children: [
                      /* @__PURE__ */ t("span", { className: "text-sm text-neutral-400 font-mono", children: [
                        s,
                        "-Year Total"
                      ] }),
                      /* @__PURE__ */ t("div", { className: "text-right", children: [
                        /* @__PURE__ */ t("div", { className: "text-red-400 line-through font-mono", children: [
                          "₹",
                          (u.totalCostPremium / 1e5).toFixed(2),
                          "L"
                        ] }),
                        /* @__PURE__ */ t("div", { className: "text-brand-400 font-bold font-mono", children: [
                          "₹",
                          (u.totalCostCeraphene / 1e5).toFixed(2),
                          "L"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ t("div", { className: "flex justify-between items-center pt-3", children: [
                      /* @__PURE__ */ e("span", { className: "text-sm text-white font-mono font-bold", children: "Total Savings" }),
                      /* @__PURE__ */ t("div", { className: "text-2xl text-green-400 font-bold font-mono", children: [
                        "₹",
                        (u.totalSavings / 1e5).toFixed(2),
                        "L"
                      ] })
                    ] })
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.7 },
              className: "bg-gradient-to-r from-brand-500/10 to-purple-500/10 border border-brand-500/30 rounded-sm p-8",
              children: [
                /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white mb-6", children: "Why Ceraphene Wins" }),
                /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                  /* @__PURE__ */ t("div", { className: "text-center", children: [
                    /* @__PURE__ */ e("div", { className: "text-4xl font-mono font-bold text-brand-400 mb-2", children: "60-70%" }),
                    /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 font-mono", children: "Lower Cost" })
                  ] }),
                  /* @__PURE__ */ t("div", { className: "text-center", children: [
                    /* @__PURE__ */ e("div", { className: "text-4xl font-mono font-bold text-brand-400 mb-2", children: "9H+" }),
                    /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 font-mono", children: "Scratch Resistance" })
                  ] }),
                  /* @__PURE__ */ t("div", { className: "text-center", children: [
                    /* @__PURE__ */ e("div", { className: "text-4xl font-mono font-bold text-brand-400 mb-2", children: "3-4+yr" }),
                    /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 font-mono", children: "Durability" })
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { className: "mt-6 text-center text-neutral-400 text-sm font-mono", children: "✓ Graphene-enhanced ceramic coating with premium performance at fraction of the cost" })
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}, _r = () => {
  const [i, l] = M(100), [c, d] = M("packaging"), [a, s] = M(120), [p] = M(5), u = {
    packaging: {
      name: "Packaging Materials",
      elongationGain: 20,
      // 20× (source-backed)
      lifespanGain: 20,
      // +20% (source-backed)
      marketPremium: 15,
      // NEEDS VALIDATION: market premium %
      qualityImpact: "High"
    },
    films: {
      name: "Films & Sheets",
      elongationGain: 22,
      // Conservative estimate (source: 20× base)
      lifespanGain: 25,
      // Conservative estimate (source: +20% base)
      marketPremium: 20,
      // NEEDS VALIDATION: market premium %
      qualityImpact: "Very High"
    },
    pipes: {
      name: "Pipes & Tubes",
      elongationGain: 18,
      // Conservative estimate (source: 20× base)
      lifespanGain: 22,
      // Conservative estimate (source: +20% base)
      marketPremium: 18,
      // NEEDS VALIDATION: market premium %
      qualityImpact: "High"
    }
  }, b = Q(() => {
    const r = u[c], h = i * 1e3, m = h * a, g = h * (a + p), w = h * p, y = r.lifespanGain, k = r.elongationGain, n = r.marketPremium, G = h * a * 1.3, R = G * (1 + n / 100), I = R - G, o = I - w, T = (o / w * 100).toFixed(0), N = [
      { property: "Elongation", Standard: 5, "HD-G-PE": 5 * k },
      { property: "Flexibility", Standard: 70, "HD-G-PE": 90 },
      { property: "Durability", Standard: 70, "HD-G-PE": 90 },
      { property: "Lifespan", Standard: 70, "HD-G-PE": 70 * (1 + y / 100) },
      { property: "Strength", Standard: 75, "HD-G-PE": 85 }
    ], F = [
      { application: "Packaging", improvement: u.packaging.elongationGain },
      { application: "Films", improvement: u.films.elongationGain },
      { application: "Pipes", improvement: u.pipes.elongationGain }
    ];
    return {
      app: r,
      annualVolume: h,
      standardCost: m,
      hdgpeCost: g,
      additionalCost: w,
      lifespanExtension: y,
      elongationImprovement: k,
      marketPremium: n,
      standardRevenue: G,
      premiumRevenue: R,
      additionalRevenue: I,
      netBenefit: o,
      roi: T,
      performanceData: N,
      applicationData: F
    };
  }, [i, c, a, p]);
  return /* @__PURE__ */ t("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20" }),
    /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-cyan-500/30 bg-cyan-500/10 backdrop-blur mb-6", children: [
              /* @__PURE__ */ e(Oe, { className: "w-4 h-4 text-cyan-400" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-mono text-cyan-400 tracking-widest uppercase", children: "Performance Calculator" })
            ] }),
            /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "HD-G-PE Performance Analysis" }),
            /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto", children: "Calculate performance gains and value creation with HD-G-PE enhanced polymers" })
          ]
        }
      ),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8", children: [
        /* @__PURE__ */ t("div", { className: "lg:col-span-4 space-y-6", children: [
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block", children: "Production Volume (tons/year)" }),
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "range",
                    min: "10",
                    max: "1000",
                    step: "10",
                    value: i,
                    onChange: (r) => l(Number(r.target.value)),
                    className: "w-full accent-brand-500 h-1 bg-neutral-700 rounded-sm"
                  }
                ),
                /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mt-3", children: [
                  i,
                  " ",
                  /* @__PURE__ */ e("span", { className: "text-lg text-neutral-400", children: "tons/yr" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.1 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block", children: "Application Area" }),
                /* @__PURE__ */ e("div", { className: "space-y-2", children: Object.entries(u).map(([r, h]) => /* @__PURE__ */ e(
                  "button",
                  {
                    onClick: () => d(r),
                    className: `w-full px-4 py-3 rounded-sm font-mono font-medium transition-all text-sm ${c === r ? "bg-brand-500 text-white border border-brand-400" : "bg-neutral-800/50 text-neutral-400 border border-neutral-700 hover:bg-neutral-700 hover:text-white"}`,
                    children: h.name
                  },
                  r
                )) })
              ]
            }
          ),
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.2 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block", children: "Base HDPE Price (₹/kg)" }),
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "range",
                    min: "80",
                    max: "200",
                    step: "10",
                    value: a,
                    onChange: (r) => s(Number(r.target.value)),
                    className: "w-full accent-brand-500 h-1 bg-neutral-700 rounded-sm"
                  }
                ),
                /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mt-3", children: [
                  "₹",
                  a,
                  " ",
                  /* @__PURE__ */ e("span", { className: "text-lg text-neutral-400", children: "/kg" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.3 },
              className: "bg-gradient-to-r from-brand-500/20 to-cyan-500/20 border border-brand-500/30 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-brand-300 uppercase tracking-wide mb-3 block", children: "HD-G-PE Additive Cost" }),
                /* @__PURE__ */ t("div", { className: "text-4xl font-mono font-bold text-brand-400 mt-3", children: [
                  "₹",
                  p,
                  " ",
                  /* @__PURE__ */ e("span", { className: "text-lg text-neutral-400", children: "/kg" })
                ] }),
                /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 mt-2 font-mono", children: "Minimal cost for maximum impact" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { className: "lg:col-span-8 space-y-6", children: [
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.4 },
              className: "grid grid-cols-2 md:grid-cols-4 gap-4",
              children: [
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-brand-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(W, { className: "w-6 h-6 text-brand-400 mb-3" }),
                  /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                    b.elongationImprovement,
                    "×"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "Elongation" })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-cyan-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(Pe, { className: "w-6 h-6 text-cyan-400 mb-3" }),
                  /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                    "+",
                    b.lifespanExtension,
                    "%"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "Lifespan" })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-purple-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(A, { className: "w-6 h-6 text-purple-400 mb-3" }),
                  /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                    "+",
                    b.marketPremium,
                    "%"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "Premium" })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-green-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(Fe, { className: "w-6 h-6 text-green-400 mb-3" }),
                  /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                    b.roi,
                    "%"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "ROI" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.5 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white mb-6", children: "Multi-Property Performance Comparison" }),
                /* @__PURE__ */ e(O, { width: "100%", height: 350, children: /* @__PURE__ */ t(Za, { data: b.performanceData, children: [
                  /* @__PURE__ */ e(Ja, { stroke: "#404040" }),
                  /* @__PURE__ */ e(er, { dataKey: "property", stroke: "#9ca3af", tick: { fill: "#9ca3af", fontSize: 12, fontFamily: "Space Grotesk" } }),
                  /* @__PURE__ */ e(tr, { angle: 90, domain: [0, 120], stroke: "#9ca3af", tick: { fill: "#9ca3af" } }),
                  /* @__PURE__ */ e(
                    Ft,
                    {
                      name: "Standard HDPE",
                      dataKey: "Standard",
                      stroke: "#ef4444",
                      fill: "#ef4444",
                      fillOpacity: 0.2,
                      strokeWidth: 2
                    }
                  ),
                  /* @__PURE__ */ e(
                    Ft,
                    {
                      name: "HD-G-PE",
                      dataKey: "HD-G-PE",
                      stroke: "#0d9488",
                      fill: "#0d9488",
                      fillOpacity: 0.4,
                      strokeWidth: 3
                    }
                  ),
                  /* @__PURE__ */ e(ke, { wrapperStyle: { fontFamily: "Space Grotesk" } })
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white mb-6", children: "Elongation Improvement by Application" }),
                /* @__PURE__ */ e(O, { width: "100%", height: 250, children: /* @__PURE__ */ t(he, { data: b.applicationData, children: [
                  /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: "#404040" }),
                  /* @__PURE__ */ e(_, { dataKey: "application", stroke: "#9ca3af", style: { fontSize: "12px", fontFamily: "Space Grotesk" } }),
                  /* @__PURE__ */ e(U, { stroke: "#9ca3af", label: { value: "Improvement (×)", angle: -90, position: "insideLeft", fill: "#9ca3af", fontFamily: "Space Grotesk" }, style: { fontSize: "12px", fontFamily: "Space Grotesk" } }),
                  /* @__PURE__ */ e(
                    q,
                    {
                      contentStyle: { backgroundColor: "#1a1a1a", border: "1px solid #404040", borderRadius: "4px", fontFamily: "Space Grotesk" },
                      formatter: (r) => [`${r}× better`, "Improvement"]
                    }
                  ),
                  /* @__PURE__ */ e(ne, { dataKey: "improvement", fill: "#0d9488" })
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.7 },
              className: "grid grid-cols-1 md:grid-cols-2 gap-6",
              children: [
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6", children: [
                  /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white mb-4", children: "Financial Analysis" }),
                  /* @__PURE__ */ t("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ t("div", { className: "flex justify-between items-center pb-3 border-b border-neutral-700", children: [
                      /* @__PURE__ */ e("span", { className: "text-sm text-neutral-400 font-mono", children: "Volume" }),
                      /* @__PURE__ */ t("span", { className: "text-white font-mono", children: [
                        i,
                        " tons"
                      ] })
                    ] }),
                    /* @__PURE__ */ t("div", { className: "flex justify-between items-center pb-3 border-b border-neutral-700", children: [
                      /* @__PURE__ */ e("span", { className: "text-sm text-neutral-400 font-mono", children: "Added Cost" }),
                      /* @__PURE__ */ t("span", { className: "text-white font-mono", children: [
                        "₹",
                        (b.additionalCost / 1e5).toFixed(2),
                        "L"
                      ] })
                    ] }),
                    /* @__PURE__ */ t("div", { className: "flex justify-between items-center pb-3 border-b border-neutral-700", children: [
                      /* @__PURE__ */ e("span", { className: "text-sm text-neutral-400 font-mono", children: "Added Revenue" }),
                      /* @__PURE__ */ t("span", { className: "text-brand-400 font-mono", children: [
                        "₹",
                        (b.additionalRevenue / 1e5).toFixed(2),
                        "L"
                      ] })
                    ] }),
                    /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                      /* @__PURE__ */ e("span", { className: "text-sm text-white font-mono font-bold", children: "Net Benefit" }),
                      /* @__PURE__ */ t("span", { className: "text-2xl text-green-400 font-mono font-bold", children: [
                        "₹",
                        (b.netBenefit / 1e5).toFixed(2),
                        "L"
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-brand-500/20 to-cyan-500/20 border border-brand-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white mb-4", children: "Key Benefits" }),
                  /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ t("div", { children: [
                      /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-brand-400 mb-1", children: [
                        b.elongationImprovement,
                        "×"
                      ] }),
                      /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 font-mono", children: "Elongation" })
                    ] }),
                    /* @__PURE__ */ t("div", { children: [
                      /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-brand-400 mb-1", children: [
                        "+",
                        b.lifespanExtension,
                        "%"
                      ] }),
                      /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 font-mono", children: "Lifespan" })
                    ] }),
                    /* @__PURE__ */ t("div", { children: [
                      /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-brand-400 mb-1", children: [
                        "+",
                        b.marketPremium,
                        "%"
                      ] }),
                      /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 font-mono", children: "Premium" })
                    ] }),
                    /* @__PURE__ */ t("div", { children: [
                      /* @__PURE__ */ e("div", { className: "text-3xl font-mono font-bold text-brand-400 mb-1", children: b.app.qualityImpact }),
                      /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 font-mono", children: "Quality" })
                    ] })
                  ] }),
                  /* @__PURE__ */ t("div", { className: "mt-4 text-xs text-neutral-400 font-mono text-center", children: [
                    "✓ Superior performance for ",
                    b.app.name.toLowerCase()
                  ] })
                ] })
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}, vr = 235, pa = 2, ua = vr * pa, kt = 6200, ot = 10500, dt = kt + ua, qt = ot - dt, Nr = ({ active: i, payload: l, label: c }) => i && l && l.length ? /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-xl p-4 shadow-lg text-sm", children: [
  /* @__PURE__ */ e("p", { className: "font-bold text-neutral-900 mb-1", children: c }),
  l.map((d, a) => /* @__PURE__ */ t("p", { style: { color: d.fill }, children: [
    "₹",
    d.value?.toLocaleString("en-IN"),
    "/m³"
  ] }, a))
] }) : null, Yt = ({ icon: i, label: l, value: c, accent: d }) => /* @__PURE__ */ t("div", { className: `flex items-center gap-3 px-4 py-3 rounded-xl border ${d}`, children: [
  /* @__PURE__ */ e("div", { className: "shrink-0 w-8 h-8 rounded-lg bg-current/10 flex items-center justify-center", children: /* @__PURE__ */ e(i, { className: "w-4 h-4" }) }),
  /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-widest opacity-70", children: l }),
    /* @__PURE__ */ e("p", { className: "text-lg font-display font-semibold leading-tight", children: c })
  ] })
] }), Ur = ({ theme: i = "light" }) => {
  const [l, c] = M(1e3), d = i === "dark", a = d ? "bg-neutral-900" : "bg-white", s = d ? "border-neutral-800" : "border-neutral-200", p = d ? "text-white" : "text-neutral-900", u = d ? "text-neutral-400" : "text-neutral-500", b = d ? "bg-neutral-800/60" : "bg-neutral-50", r = Q(() => {
    const w = ot * l, y = kt * l, k = ua * l, n = dt * l, G = qt * l, R = (qt / ot * 100).toFixed(1), I = pa * l;
    return { totalM50: w, totalM30: y, totalAdditive: k, totalWithGraph: n, totalSavings: G, savingsPct: R, litresRequired: I };
  }, [l]), h = [
    { name: "Standard M30", cost: kt, fill: "#94a3b8", grade: "M30" },
    { name: "M30 + Graphacrete", cost: dt, fill: "#22c55e", grade: "≈M50" },
    { name: "Standard M50", cost: ot, fill: "#f87171", grade: "M50" }
  ], m = (w) => w.toLocaleString("en-IN"), g = (w) => w >= 1e7 ? `₹${(w / 1e7).toFixed(2)} Cr` : w >= 1e5 ? `₹${(w / 1e5).toFixed(2)} L` : `₹${m(w)}`;
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${s} overflow-hidden ${a}`, children: [
    /* @__PURE__ */ t("div", { className: `px-8 py-6 border-b ${s} flex flex-wrap gap-4 items-center justify-between`, children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-2 px-3 py-1 rounded-lg mb-2 ${d ? "bg-green-900/30 text-green-400" : "bg-green-50 text-green-700"}`, children: [
          /* @__PURE__ */ e(pe, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ e("span", { className: "text-[10px] font-bold uppercase tracking-widest", children: "NABL Certified" })
        ] }),
        /* @__PURE__ */ e("h3", { className: `text-2xl font-display font-medium ${p}`, children: "Cost Benefit Analysis" }),
        /* @__PURE__ */ e("p", { className: `text-sm mt-0.5 ${u}`, children: "M30 + Graphacrete delivers M50 performance at ₹3,830/m³ net savings" })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ e(
          Yt,
          {
            icon: ee,
            label: "Net Savings",
            value: "₹3,830/m³",
            accent: d ? "border-green-700/40 text-green-400" : "border-green-200 text-green-700"
          }
        ),
        /* @__PURE__ */ e(
          Yt,
          {
            icon: W,
            label: "Additive Cost",
            value: "₹470/m³",
            accent: d ? "border-blue-700/40 text-blue-400" : "border-blue-200 text-blue-700"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-0", children: [
      /* @__PURE__ */ t("div", { className: `lg:col-span-5 p-8 border-b lg:border-b-0 lg:border-r ${s} space-y-6`, children: [
        /* @__PURE__ */ t("div", { className: `rounded-xl p-4 ${d ? "bg-neutral-800" : "bg-neutral-50"} border ${s}`, children: [
          /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest mb-2 ${u}`, children: "Source data" }),
          /* @__PURE__ */ t("div", { className: `space-y-1.5 text-sm ${p}`, children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e("span", { className: u, children: "Graphacrete price" }),
              /* @__PURE__ */ e("span", { className: "font-mono font-bold", children: "₹235/L" })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e("span", { className: u, children: "Dosage required" }),
              /* @__PURE__ */ e("span", { className: "font-mono font-bold", children: "2L / m³" })
            ] }),
            /* @__PURE__ */ t("div", { className: `flex justify-between pt-1.5 border-t ${s}`, children: [
              /* @__PURE__ */ e("span", { className: u, children: "Additive cost / m³" }),
              /* @__PURE__ */ e("span", { className: "font-mono font-bold text-blue-500", children: "₹470" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "space-y-3", children: [
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border ${s} ${b}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-widest ${u}`, children: "Standard M50" }),
              /* @__PURE__ */ e("span", { className: "text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600 font-semibold", children: "Baseline" })
            ] }),
            /* @__PURE__ */ t("p", { className: `text-3xl font-display font-medium ${p}`, children: [
              "₹10,500 ",
              /* @__PURE__ */ e("span", { className: `text-sm font-normal ${u}`, children: "/m³" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e("div", { className: `flex-1 h-px ${d ? "bg-neutral-700" : "bg-neutral-200"}` }),
            /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-widest ${u}`, children: "Replace with" }),
            /* @__PURE__ */ e("div", { className: `flex-1 h-px ${d ? "bg-neutral-700" : "bg-neutral-200"}` })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border ${d ? "border-neutral-700 bg-neutral-800/40" : "border-neutral-200 bg-white"}`, children: [
            /* @__PURE__ */ e("div", { className: "flex items-center justify-between mb-1", children: /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-widest ${u}`, children: "Standard M30" }) }),
            /* @__PURE__ */ t("p", { className: `text-2xl font-display font-medium ${p}`, children: [
              "₹6,200 ",
              /* @__PURE__ */ e("span", { className: `text-sm font-normal ${u}`, children: "/m³" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border ${d ? "border-blue-800/40 bg-blue-900/10" : "border-blue-100 bg-blue-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-widest text-blue-500", children: "+ Graphacrete Additive" }),
              /* @__PURE__ */ e("span", { className: "text-xs text-blue-500", children: "2L × ₹235" })
            ] }),
            /* @__PURE__ */ t("p", { className: "text-2xl font-display font-medium text-blue-600", children: [
              "₹470 ",
              /* @__PURE__ */ e("span", { className: "text-sm font-normal text-blue-400", children: "/m³" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border-2 ${d ? "border-green-700 bg-green-900/10" : "border-green-400 bg-green-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-widest text-green-600", children: "M30 + Graphacrete" }),
              /* @__PURE__ */ t("span", { className: "flex items-center gap-1 text-xs text-green-600 font-semibold", children: [
                /* @__PURE__ */ e(ve, { className: "w-3.5 h-3.5" }),
                " ≈M50 Performance"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex items-end justify-between", children: [
              /* @__PURE__ */ t("p", { className: "text-3xl font-display font-medium text-green-700", children: [
                "₹6,670 ",
                /* @__PURE__ */ e("span", { className: "text-sm font-normal text-green-500", children: "/m³" })
              ] }),
              /* @__PURE__ */ t("div", { className: "text-right", children: [
                /* @__PURE__ */ e("p", { className: "text-sm font-bold text-green-700", children: "Save ₹3,830/m³" }),
                /* @__PURE__ */ e("p", { className: "text-xs text-green-600", children: "vs standard M50" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border ${d ? "border-yellow-700/30 bg-yellow-900/10" : "border-yellow-200 bg-yellow-50"} text-center`, children: [
          /* @__PURE__ */ e("p", { className: "text-xs font-bold text-yellow-600 uppercase tracking-widest mb-1", children: "NABL Certified Test Result" }),
          /* @__PURE__ */ t("p", { className: `text-sm ${d ? "text-yellow-200" : "text-yellow-800"}`, children: [
            "M30 Cube + Graphacrete achieves ",
            /* @__PURE__ */ e("strong", { children: "≈ M50" }),
            " compressive strength"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "lg:col-span-7 p-8 space-y-8", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest mb-4 ${u}`, children: "Cost per m³ comparison" }),
          /* @__PURE__ */ e("div", { className: "h-52", children: /* @__PURE__ */ e(O, { width: "100%", height: "100%", children: /* @__PURE__ */ t(he, { data: h, margin: { top: 20, right: 16, bottom: 0, left: -10 }, barSize: 52, children: [
            /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: d ? "#333" : "#f1f5f9", vertical: !1 }),
            /* @__PURE__ */ e(
              _,
              {
                dataKey: "name",
                tick: { fontSize: 11, fill: d ? "#9ca3af" : "#64748b" },
                tickLine: !1,
                axisLine: !1
              }
            ),
            /* @__PURE__ */ e(
              U,
              {
                tickFormatter: (w) => `₹${(w / 1e3).toFixed(1)}k`,
                tick: { fontSize: 10, fill: d ? "#9ca3af" : "#64748b" },
                tickLine: !1,
                axisLine: !1,
                domain: [4e3, 11500]
              }
            ),
            /* @__PURE__ */ e(q, { content: /* @__PURE__ */ e(Nr, {}) }),
            /* @__PURE__ */ e(
              fe,
              {
                y: dt,
                stroke: "#22c55e",
                strokeDasharray: "4 4",
                strokeWidth: 1.5
              }
            ),
            /* @__PURE__ */ t(ne, { dataKey: "cost", radius: [6, 6, 0, 0], children: [
              h.map((w, y) => /* @__PURE__ */ e(Me, { fill: w.fill }, y)),
              /* @__PURE__ */ e(
                Se,
                {
                  dataKey: "grade",
                  position: "top",
                  style: { fontSize: 11, fontWeight: 700, fill: d ? "#e5e7eb" : "#374151" }
                }
              )
            ] })
          ] }) }) }),
          /* @__PURE__ */ e("p", { className: `text-[11px] mt-2 text-center ${u}`, children: "Green bar achieves M50 strength — at M30+additive cost" })
        ] }),
        /* @__PURE__ */ t("div", { className: `rounded-2xl border ${s} ${b} p-6`, children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-5", children: [
            /* @__PURE__ */ e(Oe, { className: `w-4 h-4 ${d ? "text-indigo-400" : "text-indigo-600"}` }),
            /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${d ? "text-indigo-400" : "text-indigo-600"}`, children: "Project Savings Calculator" })
          ] }),
          /* @__PURE__ */ t("div", { className: "mb-5", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-baseline mb-2", children: [
              /* @__PURE__ */ e("label", { className: `text-sm font-medium ${p}`, children: "Concrete Volume" }),
              /* @__PURE__ */ t("span", { className: `text-lg font-display font-bold ${d ? "text-indigo-400" : "text-indigo-600"}`, children: [
                m(l),
                " m³"
              ] })
            ] }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "range",
                min: 100,
                max: 5e4,
                step: 100,
                value: l,
                onChange: (w) => c(Number(w.target.value)),
                className: "w-full h-1.5 rounded-full appearance-none cursor-pointer accent-indigo-600",
                style: { background: d ? "#374151" : "#e5e7eb" }
              }
            ),
            /* @__PURE__ */ t("div", { className: `flex justify-between text-[10px] mt-1 ${u}`, children: [
              /* @__PURE__ */ e("span", { children: "100 m³" }),
              /* @__PURE__ */ e("span", { children: "50,000 m³" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border ${d ? "border-red-800/30 bg-red-900/10" : "border-red-100 bg-red-50"}`, children: [
              /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-widest text-red-500 mb-1", children: "Standard M50 Cost" }),
              /* @__PURE__ */ e("p", { className: `text-xl font-display font-bold ${d ? "text-red-300" : "text-red-700"}`, children: g(r.totalM50) })
            ] }),
            /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border ${d ? "border-green-800/30 bg-green-900/10" : "border-green-100 bg-green-50"}`, children: [
              /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-widest text-green-600 mb-1", children: "With Graphacrete" }),
              /* @__PURE__ */ e("p", { className: `text-xl font-display font-bold ${d ? "text-green-300" : "text-green-700"}`, children: g(r.totalWithGraph) })
            ] }),
            /* @__PURE__ */ t("div", { className: `col-span-2 rounded-xl p-4 border-2 ${d ? "border-green-600 bg-green-900/20" : "border-green-400 bg-green-50"} flex items-center justify-between`, children: [
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-widest text-green-600 mb-0.5", children: "Net Savings vs M50" }),
                /* @__PURE__ */ t("p", { className: `text-[10px] ${u}`, children: [
                  "Additive: ",
                  g(r.totalAdditive),
                  " · Volume: ",
                  m(l),
                  " m³ · ",
                  m(r.litresRequired),
                  "L Graphacrete"
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "text-right", children: [
                /* @__PURE__ */ e("p", { className: `text-3xl font-display font-bold ${d ? "text-green-400" : "text-green-700"}`, children: g(r.totalSavings) }),
                /* @__PURE__ */ t("p", { className: "text-xs text-green-600 font-semibold", children: [
                  r.savingsPct,
                  "% cheaper"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e("p", { className: `text-[11px] mt-3 ${u}`, children: "* 1,000 L MOQ applies. Price ₹235/L. Savings calculated vs standard M50 market rate ₹10,500/m³ (India 2025-26)." })
        ] })
      ] })
    ] })
  ] });
}, Qr = () => {
  const [i, l] = M("commercial"), c = {
    commercial: {
      icon: xe,
      name: "Commercial Buildings",
      description: "High-rise buildings, shopping malls, office complexes requiring high-strength concrete",
      targetGrade: "M50-M60",
      volumeRange: "5,000-50,000 m³",
      benefits: [
        "Achieve M50 strength with M30 base mix",
        "Reduce cement consumption by 15-20%",
        "Faster construction with improved workability",
        "Enhanced water resistance for longevity",
        "Cost savings of ₹430/m³",
        "NABL certified performance"
      ],
      caseStudy: {
        project: "High-rise Office Complex",
        location: "Mumbai",
        volume: "12,000 m³",
        savings: "₹51.6 Lakhs",
        strengthAchieved: "M50",
        cementReduction: "18%"
      }
    },
    residential: {
      icon: ta,
      name: "Residential Projects",
      description: "Apartments, villas, gated communities with focus on durability and cost optimization",
      targetGrade: "M30-M40",
      volumeRange: "1,000-10,000 m³",
      benefits: [
        "Upgrade M20 to M30 performance",
        "Significant cement cost reduction",
        "Improved crack resistance",
        "Better water-proofing properties",
        "Longer building lifespan",
        "Sustainable construction choice"
      ],
      caseStudy: {
        project: "Residential Township",
        location: "Pune",
        volume: "8,500 m³",
        savings: "₹36.5 Lakhs",
        strengthAchieved: "M40",
        cementReduction: "17%"
      }
    },
    infrastructure: {
      icon: St,
      name: "Infrastructure & Roads",
      description: "Bridges, flyovers, highways requiring exceptional strength and durability",
      targetGrade: "M50-M70",
      volumeRange: "10,000-100,000 m³",
      benefits: [
        "M60+ performance from lower grade base",
        "Superior compressive strength (+50%)",
        "Enhanced durability for heavy loads",
        "Reduced maintenance requirements",
        "Large-scale cost savings",
        "Government-certified quality"
      ],
      caseStudy: {
        project: "Highway Bridge",
        location: "Gujarat",
        volume: "25,000 m³",
        savings: "₹1.07 Crores",
        strengthAchieved: "M60",
        cementReduction: "16%"
      }
    },
    industrial: {
      icon: $t,
      name: "Industrial Structures",
      description: "Factories, warehouses, industrial flooring with chemical resistance needs",
      targetGrade: "M40-M50",
      volumeRange: "3,000-30,000 m³",
      benefits: [
        "Chemical resistance enhancement",
        "Superior abrasion resistance",
        "Reduced permeability (30-45%)",
        "Heavy load-bearing capacity",
        "Lower life-cycle costs",
        "Industrial-grade durability"
      ],
      caseStudy: {
        project: "Manufacturing Facility",
        location: "Chennai",
        volume: "15,000 m³",
        savings: "₹64.5 Lakhs",
        strengthAchieved: "M50",
        cementReduction: "19%"
      }
    }
  }, d = c[i], a = d.icon;
  return /* @__PURE__ */ t("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-teal-900/20" }),
    /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6", children: [
              /* @__PURE__ */ e(xe, { className: "w-4 h-4 text-brand-400" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-mono text-brand-400 tracking-widest uppercase", children: "Construction Use Cases" })
            ] }),
            /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "Graphacrete Applications" }),
            /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto", children: "Explore real-world construction applications across different sectors" })
          ]
        }
      ),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-12", children: Object.entries(c).map(([s, p]) => {
        const u = p.icon;
        return /* @__PURE__ */ t(
          f.button,
          {
            onClick: () => l(s),
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            className: `p-6 rounded-sm transition-all border ${i === s ? "bg-brand-500 border-brand-400 shadow-[0_0_20px_rgba(13,148,136,0.4)]" : "bg-neutral-900/80 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700"}`,
            children: [
              /* @__PURE__ */ e(u, { className: "w-10 h-10 text-white mx-auto mb-3" }),
              /* @__PURE__ */ e("div", { className: "text-white font-mono text-sm text-center", children: p.name })
            ]
          },
          s
        );
      }) }),
      /* @__PURE__ */ e(se, { mode: "wait", children: /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.3 },
          children: [
            /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-brand-500/20 to-green-500/20 border border-brand-500/30 rounded-sm p-8 mb-8", children: /* @__PURE__ */ t("div", { className: "flex items-start gap-6", children: [
              /* @__PURE__ */ e("div", { className: "p-4 bg-white/10 rounded-sm border border-white/20", children: /* @__PURE__ */ e(a, { className: "w-12 h-12 text-brand-400" }) }),
              /* @__PURE__ */ t("div", { className: "flex-grow", children: [
                /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-bold text-white mb-3", children: d.name }),
                /* @__PURE__ */ e("p", { className: "text-lg text-neutral-300 mb-4", children: d.description }),
                /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-4 text-sm font-mono", children: [
                  /* @__PURE__ */ t("div", { className: "px-4 py-2 bg-neutral-900/60 backdrop-blur rounded-sm border border-neutral-700", children: [
                    /* @__PURE__ */ e("span", { className: "text-neutral-400", children: "Target Grade:" }),
                    /* @__PURE__ */ e("span", { className: "ml-2 font-bold text-white", children: d.targetGrade })
                  ] }),
                  /* @__PURE__ */ t("div", { className: "px-4 py-2 bg-neutral-900/60 backdrop-blur rounded-sm border border-neutral-700", children: [
                    /* @__PURE__ */ e("span", { className: "text-neutral-400", children: "Typical Volume:" }),
                    /* @__PURE__ */ e("span", { className: "ml-2 font-bold text-white", children: d.volumeRange })
                  ] })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ t(
                f.div,
                {
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.2 },
                  className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
                  children: [
                    /* @__PURE__ */ t("h3", { className: "text-2xl font-display font-bold text-white mb-6 flex items-center gap-2", children: [
                      /* @__PURE__ */ e(V, { className: "w-6 h-6 text-brand-400" }),
                      "Key Benefits"
                    ] }),
                    /* @__PURE__ */ e("div", { className: "space-y-3", children: d.benefits.map((s, p) => /* @__PURE__ */ t(
                      f.div,
                      {
                        initial: { opacity: 0, x: -10 },
                        animate: { opacity: 1, x: 0 },
                        transition: { delay: 0.3 + p * 0.05 },
                        className: "flex items-start gap-3 p-3 bg-neutral-800/50 rounded-sm hover:bg-neutral-800 transition-colors",
                        children: [
                          /* @__PURE__ */ e(V, { className: "w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" }),
                          /* @__PURE__ */ e("span", { className: "text-neutral-200 text-sm", children: s })
                        ]
                      },
                      p
                    )) })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                f.div,
                {
                  initial: { opacity: 0, x: 20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.2 },
                  className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
                  children: [
                    /* @__PURE__ */ t("h3", { className: "text-2xl font-display font-bold text-white mb-6 flex items-center gap-2", children: [
                      /* @__PURE__ */ e(A, { className: "w-6 h-6 text-brand-400" }),
                      "Real Project Example"
                    ] }),
                    /* @__PURE__ */ t("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ t("div", { className: "p-4 bg-brand-500/10 border border-brand-500/30 rounded-sm", children: [
                        /* @__PURE__ */ e("div", { className: "text-xs text-brand-300 mb-1 font-mono uppercase tracking-wide", children: "Project" }),
                        /* @__PURE__ */ e("div", { className: "text-xl font-display font-bold text-white", children: d.caseStudy.project }),
                        /* @__PURE__ */ t("div", { className: "text-sm text-brand-400 mt-1 font-mono", children: [
                          "📍 ",
                          d.caseStudy.location
                        ] })
                      ] }),
                      /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-4", children: [
                        /* @__PURE__ */ t("div", { className: "p-4 bg-neutral-800/50 rounded-sm", children: [
                          /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 mb-1 font-mono", children: "Volume" }),
                          /* @__PURE__ */ e("div", { className: "text-2xl font-mono font-bold text-white", children: d.caseStudy.volume })
                        ] }),
                        /* @__PURE__ */ t("div", { className: "p-4 bg-green-500/10 border border-green-500/30 rounded-sm", children: [
                          /* @__PURE__ */ e("div", { className: "text-xs text-green-300 mb-1 font-mono", children: "Total Savings" }),
                          /* @__PURE__ */ e("div", { className: "text-2xl font-mono font-bold text-green-400", children: d.caseStudy.savings })
                        ] }),
                        /* @__PURE__ */ t("div", { className: "p-4 bg-neutral-800/50 rounded-sm", children: [
                          /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 mb-1 font-mono", children: "Strength Achieved" }),
                          /* @__PURE__ */ e("div", { className: "text-2xl font-mono font-bold text-white", children: d.caseStudy.strengthAchieved })
                        ] }),
                        /* @__PURE__ */ t("div", { className: "p-4 bg-brand-500/10 border border-brand-500/30 rounded-sm", children: [
                          /* @__PURE__ */ e("div", { className: "text-xs text-brand-300 mb-1 font-mono", children: "Cement Reduction" }),
                          /* @__PURE__ */ e("div", { className: "text-2xl font-mono font-bold text-brand-400", children: d.caseStudy.cementReduction })
                        ] })
                      ] })
                    ] })
                  ]
                }
              )
            ] })
          ]
        },
        i
      ) })
    ] })
  ] });
}, Xr = () => {
  const [i, l] = M("utility"), c = {
    utility: {
      icon: Ye,
      name: "Utility-Scale Plants",
      description: "Large solar farms and power generation facilities",
      capacity: "1MW - 100MW+",
      benefits: [
        "10-12% energy output increase",
        "5-6°C operating temperature reduction",
        "30-40% soiling loss reduction",
        "Extended panel lifespan",
        "18-month payback period",
        "Field-validated performance"
      ],
      installation: {
        size: "50 MW Solar Park",
        location: "Rajasthan",
        coating: "150,000 panels",
        energyGain: "+6,500 MWh/year",
        revenue: "₹3.25 Cr/year",
        payback: "16 months"
      }
    },
    commercial: {
      icon: Sa,
      name: "Commercial Rooftops",
      description: "Office buildings, malls, warehouses with rooftop solar",
      capacity: "50kW - 500kW",
      benefits: [
        "Maximize limited roof space",
        "Urban dust & pollution resistance",
        "Reduced cleaning frequency",
        "Lower maintenance costs",
        "Enhanced aesthetic appeal",
        "ROI under 2 years"
      ],
      installation: {
        size: "IT Park Complex",
        location: "Bangalore",
        coating: "1,200 panels (300kW)",
        energyGain: "+39 MWh/year",
        revenue: "₹3.1 L/year",
        payback: "18 months"
      }
    },
    residential: {
      icon: ta,
      name: "Residential Systems",
      description: "Home solar installations and gated communities",
      capacity: "1kW - 10kW",
      benefits: [
        "Increased energy independence",
        "Lower electricity bills",
        "Self-cleaning properties",
        "Simple application process",
        "Long-lasting protection",
        "Eco-friendly solution"
      ],
      installation: {
        size: "Residential Society",
        location: "Mumbai",
        coating: "200 homes (5kW each)",
        energyGain: "+1.5 MWh/home/year",
        revenue: "₹12,000/home/year",
        payback: "15 months"
      }
    },
    floating: {
      icon: $a,
      name: "Floating Solar",
      description: "Water surface installations with unique challenges",
      capacity: "500kW - 50MW",
      benefits: [
        "Hydrophobic water resistance",
        "High humidity performance",
        "Algae growth prevention",
        "Enhanced cooling effect",
        "Reduced water evaporation",
        "Specialized marine durability"
      ],
      installation: {
        size: "Reservoir Floating Plant",
        location: "Kerala",
        coating: "10,000 panels (3MW)",
        energyGain: "+390 MWh/year",
        revenue: "₹31.2 L/year",
        payback: "14 months"
      }
    }
  }, d = c[i], a = d.icon;
  return /* @__PURE__ */ t("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-orange-900/20" }),
    /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-yellow-500/30 bg-yellow-500/10 backdrop-blur mb-6", children: [
              /* @__PURE__ */ e(Ye, { className: "w-4 h-4 text-yellow-400" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-mono text-yellow-400 tracking-widest uppercase", children: "Solar Applications" })
            ] }),
            /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "Graffisol Use Cases" }),
            /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto", children: "Explore Graffisol applications across diverse solar energy installations" })
          ]
        }
      ),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-12", children: Object.entries(c).map(([s, p]) => {
        const u = p.icon;
        return /* @__PURE__ */ t(
          f.button,
          {
            onClick: () => l(s),
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            className: `p-6 rounded-sm transition-all border ${i === s ? "bg-yellow-500/20 border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.3)]" : "bg-neutral-900/80 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700"}`,
            children: [
              /* @__PURE__ */ e(u, { className: "w-10 h-10 text-white mx-auto mb-3" }),
              /* @__PURE__ */ e("div", { className: "text-white font-mono text-sm text-center", children: p.name })
            ]
          },
          s
        );
      }) }),
      /* @__PURE__ */ e(se, { mode: "wait", children: /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.3 },
          children: [
            /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-sm p-8 mb-8", children: /* @__PURE__ */ t("div", { className: "flex items-start gap-6", children: [
              /* @__PURE__ */ e("div", { className: "p-4 bg-white/10 rounded-sm border border-white/20", children: /* @__PURE__ */ e(a, { className: "w-12 h-12 text-yellow-400" }) }),
              /* @__PURE__ */ t("div", { className: "flex-grow", children: [
                /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-bold text-white mb-3", children: d.name }),
                /* @__PURE__ */ e("p", { className: "text-lg text-neutral-300 mb-4", children: d.description }),
                /* @__PURE__ */ t("div", { className: "inline-flex items-center px-4 py-2 bg-neutral-900/60 backdrop-blur rounded-sm border border-neutral-700", children: [
                  /* @__PURE__ */ e("span", { className: "text-neutral-400 font-mono text-sm", children: "Typical Capacity:" }),
                  /* @__PURE__ */ e("span", { className: "ml-2 font-bold text-white font-mono", children: d.capacity })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ t(
                f.div,
                {
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.2 },
                  className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
                  children: [
                    /* @__PURE__ */ t("h3", { className: "text-2xl font-display font-bold text-white mb-6 flex items-center gap-2", children: [
                      /* @__PURE__ */ e(V, { className: "w-6 h-6 text-yellow-400" }),
                      "Key Benefits"
                    ] }),
                    /* @__PURE__ */ e("div", { className: "space-y-3", children: d.benefits.map((s, p) => /* @__PURE__ */ t(
                      f.div,
                      {
                        initial: { opacity: 0, x: -10 },
                        animate: { opacity: 1, x: 0 },
                        transition: { delay: 0.3 + p * 0.05 },
                        className: "flex items-start gap-3 p-3 bg-neutral-800/50 rounded-sm hover:bg-neutral-800 transition-colors",
                        children: [
                          /* @__PURE__ */ e(V, { className: "w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" }),
                          /* @__PURE__ */ e("span", { className: "text-neutral-200 text-sm", children: s })
                        ]
                      },
                      p
                    )) })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                f.div,
                {
                  initial: { opacity: 0, x: 20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.2 },
                  className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
                  children: [
                    /* @__PURE__ */ t("h3", { className: "text-2xl font-display font-bold text-white mb-6 flex items-center gap-2", children: [
                      /* @__PURE__ */ e(W, { className: "w-6 h-6 text-yellow-400" }),
                      "Installation Example"
                    ] }),
                    /* @__PURE__ */ t("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ t("div", { className: "p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-sm", children: [
                        /* @__PURE__ */ e("div", { className: "text-xs text-yellow-300 mb-1 font-mono uppercase tracking-wide", children: "Installation" }),
                        /* @__PURE__ */ e("div", { className: "text-xl font-display font-bold text-white", children: d.installation.size }),
                        /* @__PURE__ */ t("div", { className: "text-sm text-yellow-400 mt-1 font-mono", children: [
                          "📍 ",
                          d.installation.location
                        ] })
                      ] }),
                      /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-4", children: [
                        /* @__PURE__ */ t("div", { className: "p-4 bg-neutral-800/50 rounded-sm", children: [
                          /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 mb-1 font-mono", children: "Coated Panels" }),
                          /* @__PURE__ */ e("div", { className: "text-lg font-mono font-bold text-white", children: d.installation.coating })
                        ] }),
                        /* @__PURE__ */ t("div", { className: "p-4 bg-green-500/10 border border-green-500/30 rounded-sm", children: [
                          /* @__PURE__ */ e("div", { className: "text-xs text-green-300 mb-1 font-mono", children: "Energy Gain" }),
                          /* @__PURE__ */ e("div", { className: "text-lg font-mono font-bold text-green-400", children: d.installation.energyGain })
                        ] }),
                        /* @__PURE__ */ t("div", { className: "p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-sm", children: [
                          /* @__PURE__ */ e("div", { className: "text-xs text-yellow-300 mb-1 font-mono", children: "Annual Revenue" }),
                          /* @__PURE__ */ e("div", { className: "text-lg font-mono font-bold text-yellow-400", children: d.installation.revenue })
                        ] }),
                        /* @__PURE__ */ t("div", { className: "p-4 bg-brand-500/10 border border-brand-500/30 rounded-sm", children: [
                          /* @__PURE__ */ e("div", { className: "text-xs text-brand-300 mb-1 font-mono", children: "Payback Period" }),
                          /* @__PURE__ */ e("div", { className: "text-lg font-mono font-bold text-brand-400", children: d.installation.payback })
                        ] })
                      ] })
                    ] })
                  ]
                }
              )
            ] })
          ]
        },
        i
      ) })
    ] })
  ] });
}, Zr = () => {
  const [i, l] = M("pipes"), c = {
    pipes: {
      icon: St,
      name: "HDPE Pipes & Tubes",
      description: "Water supply, drainage, and industrial piping applications",
      properties: "30% Tensile ⚡ 20× Elongation ⚡ 20% Lifespan",
      benefits: [
        "+30% tensile and flexural strength",
        "20× better elongation at break",
        "+20% extended product lifespan",
        "Superior UV stability",
        "Excellent impact resistance",
        "Reduced failure rates"
      ],
      useCase: {
        application: "Municipal Water Supply",
        sector: "Infrastructure",
        volume: "500 tons/year",
        improvement: "30% tensile strength",
        benefit: "+5 years lifespan",
        roi: "180%"
      }
    },
    films: {
      icon: st,
      name: "Films & Sheets",
      description: "Flexible packaging, agricultural films, and industrial sheets",
      properties: "22× Elongation ⚡ 25% Lifespan ⚡ High Clarity",
      benefits: [
        "22× elongation improvement",
        "+25% product lifespan extension",
        "Enhanced tear resistance",
        "Superior optical properties",
        "Better barrier properties",
        "Reduced film thickness possible"
      ],
      useCase: {
        application: "Agricultural Greenhouse Films",
        sector: "Agriculture",
        volume: "300 tons/year",
        improvement: "22× elongation",
        benefit: "+25% durability",
        roi: "200%"
      }
    },
    packaging: {
      icon: Fe,
      name: "Packaging Materials",
      description: "Consumer goods packaging, industrial packaging, containers",
      properties: "20× Elongation ⚡ 20% Lifespan ⚡ Premium Quality",
      benefits: [
        "20× better elongation performance",
        "+20% extended product life",
        "Improved drop impact resistance",
        "Enhanced processability",
        "Premium market positioning",
        "Cost-effective enhancement"
      ],
      useCase: {
        application: "Industrial Container Production",
        sector: "Manufacturing",
        volume: "400 tons/year",
        improvement: "20× elongation",
        benefit: "+15% premium",
        roi: "165%"
      }
    },
    bags: {
      icon: Ca,
      name: "Carry Bags & Pouches",
      description: "Shopping bags, industrial bags, and flexible packaging pouches",
      properties: "20× Elongation ⚡ Tear Resistant ⚡ Eco-Friendly",
      benefits: [
        "Significantly improved tear strength",
        "Enhanced load-bearing capacity",
        "20× elongation improvement",
        "Thinner gauges possible",
        "Material cost savings",
        "Sustainable alternative"
      ],
      useCase: {
        application: "Retail Shopping Bags",
        sector: "Retail",
        volume: "200 tons/year",
        improvement: "40% tear strength",
        benefit: "Reduced gauge",
        roi: "150%"
      }
    }
  }, d = c[i], a = d.icon;
  return /* @__PURE__ */ t("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-blue-900/20" }),
    /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-cyan-500/30 bg-cyan-500/10 backdrop-blur mb-6", children: [
              /* @__PURE__ */ e(Fe, { className: "w-4 h-4 text-cyan-400" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-mono text-cyan-400 tracking-widest uppercase", children: "Polymer Applications" })
            ] }),
            /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "HD-G-PE Applications" }),
            /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto", children: "Explore HD-G-PE enhanced polymer applications across industries" })
          ]
        }
      ),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-12", children: Object.entries(c).map(([s, p]) => {
        const u = p.icon;
        return /* @__PURE__ */ t(
          f.button,
          {
            onClick: () => l(s),
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            className: `p-6 rounded-sm transition-all border ${i === s ? "bg-cyan-500/20 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]" : "bg-neutral-900/80 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700"}`,
            children: [
              /* @__PURE__ */ e(u, { className: "w-10 h-10 text-white mx-auto mb-3" }),
              /* @__PURE__ */ e("div", { className: "text-white font-mono text-sm text-center", children: p.name })
            ]
          },
          s
        );
      }) }),
      /* @__PURE__ */ e(se, { mode: "wait", children: /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.3 },
          children: [
            /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-sm p-8 mb-8", children: /* @__PURE__ */ t("div", { className: "flex items-start gap-6", children: [
              /* @__PURE__ */ e("div", { className: "p-4 bg-white/10 rounded-sm border border-white/20", children: /* @__PURE__ */ e(a, { className: "w-12 h-12 text-cyan-400" }) }),
              /* @__PURE__ */ t("div", { className: "flex-grow", children: [
                /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-bold text-white mb-3", children: d.name }),
                /* @__PURE__ */ e("p", { className: "text-lg text-neutral-300 mb-4", children: d.description }),
                /* @__PURE__ */ e("div", { className: "inline-flex items-center px-4 py-2 bg-neutral-900/60 backdrop-blur rounded-sm border border-neutral-700", children: /* @__PURE__ */ e("span", { className: "text-cyan-400 font-mono text-sm", children: d.properties }) })
              ] })
            ] }) }),
            /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ t(
                f.div,
                {
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.2 },
                  className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
                  children: [
                    /* @__PURE__ */ t("h3", { className: "text-2xl font-display font-bold text-white mb-6 flex items-center gap-2", children: [
                      /* @__PURE__ */ e(V, { className: "w-6 h-6 text-cyan-400" }),
                      "Key Benefits"
                    ] }),
                    /* @__PURE__ */ e("div", { className: "space-y-3", children: d.benefits.map((s, p) => /* @__PURE__ */ t(
                      f.div,
                      {
                        initial: { opacity: 0, x: -10 },
                        animate: { opacity: 1, x: 0 },
                        transition: { delay: 0.3 + p * 0.05 },
                        className: "flex items-start gap-3 p-3 bg-neutral-800/50 rounded-sm hover:bg-neutral-800 transition-colors",
                        children: [
                          /* @__PURE__ */ e(V, { className: "w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" }),
                          /* @__PURE__ */ e("span", { className: "text-neutral-200 text-sm", children: s })
                        ]
                      },
                      p
                    )) })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                f.div,
                {
                  initial: { opacity: 0, x: 20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.2 },
                  className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
                  children: [
                    /* @__PURE__ */ t("h3", { className: "text-2xl font-display font-bold text-white mb-6 flex items-center gap-2", children: [
                      /* @__PURE__ */ e(A, { className: "w-6 h-6 text-cyan-400" }),
                      "Industry Use Case"
                    ] }),
                    /* @__PURE__ */ t("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ t("div", { className: "p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-sm", children: [
                        /* @__PURE__ */ e("div", { className: "text-xs text-cyan-300 mb-1 font-mono uppercase tracking-wide", children: "Application" }),
                        /* @__PURE__ */ e("div", { className: "text-xl font-display font-bold text-white", children: d.useCase.application }),
                        /* @__PURE__ */ t("div", { className: "text-sm text-cyan-400 mt-1 font-mono", children: [
                          "🏭 ",
                          d.useCase.sector
                        ] })
                      ] }),
                      /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-4", children: [
                        /* @__PURE__ */ t("div", { className: "p-4 bg-neutral-800/50 rounded-sm", children: [
                          /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 mb-1 font-mono", children: "Volume" }),
                          /* @__PURE__ */ e("div", { className: "text-lg font-mono font-bold text-white", children: d.useCase.volume })
                        ] }),
                        /* @__PURE__ */ t("div", { className: "p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-sm", children: [
                          /* @__PURE__ */ e("div", { className: "text-xs text-cyan-300 mb-1 font-mono", children: "Improvement" }),
                          /* @__PURE__ */ e("div", { className: "text-lg font-mono font-bold text-cyan-400", children: d.useCase.improvement })
                        ] }),
                        /* @__PURE__ */ t("div", { className: "p-4 bg-green-500/10 border border-green-500/30 rounded-sm", children: [
                          /* @__PURE__ */ e("div", { className: "text-xs text-green-300 mb-1 font-mono", children: "Key Benefit" }),
                          /* @__PURE__ */ e("div", { className: "text-lg font-mono font-bold text-green-400", children: d.useCase.benefit })
                        ] }),
                        /* @__PURE__ */ t("div", { className: "p-4 bg-brand-500/10 border border-brand-500/30 rounded-sm", children: [
                          /* @__PURE__ */ e("div", { className: "text-xs text-brand-300 mb-1 font-mono", children: "ROI" }),
                          /* @__PURE__ */ e("div", { className: "text-lg font-mono font-bold text-brand-400", children: d.useCase.roi })
                        ] })
                      ] })
                    ] })
                  ]
                }
              )
            ] })
          ]
        },
        i
      ) })
    ] })
  ] });
}, yr = ({ percentage: i, color: l, size: c = 140 }) => {
  const d = (c - 20) / 2, a = 2 * Math.PI * d, s = a - i / 100 * a;
  return /* @__PURE__ */ t("svg", { width: c, height: c, className: "transform -rotate-90", children: [
    /* @__PURE__ */ e(
      "circle",
      {
        cx: c / 2,
        cy: c / 2,
        r: d,
        fill: "none",
        stroke: "#262626",
        strokeWidth: "8"
      }
    ),
    /* @__PURE__ */ e(
      f.circle,
      {
        cx: c / 2,
        cy: c / 2,
        r: d,
        fill: "none",
        stroke: l,
        strokeWidth: "8",
        strokeDasharray: a,
        strokeDashoffset: a,
        animate: { strokeDashoffset: s },
        transition: { duration: 1.5, ease: "easeOut" },
        strokeLinecap: "round"
      }
    )
  ] });
}, Jr = () => {
  const i = [
    {
      id: "graphacrete",
      name: "Graphacrete",
      category: "Construction",
      metric: "Strength Gain",
      value: "+50%",
      percentage: 50,
      color: "#0d9488",
      validation: "NABL Certified"
    },
    {
      id: "graffisol",
      name: "Graffisol",
      category: "Solar Energy",
      metric: "Energy Output",
      value: "+11%",
      percentage: 85,
      color: "#f59e0b",
      validation: "Field Validated"
    },
    {
      id: "ceraphene",
      name: "Ceraphene",
      category: "Automotive",
      metric: "Cost Savings",
      value: "60-70%",
      percentage: 70,
      color: "#8b5cf6",
      validation: "Premium Performance"
    },
    {
      id: "hdgpe",
      name: "HD-G-PE",
      category: "Polymers",
      metric: "Elongation",
      value: "20×",
      percentage: 90,
      color: "#06b6d4",
      validation: "Lab Tested"
    }
  ];
  return /* @__PURE__ */ e("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "Product Performance Metrics" }),
          /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto", children: "Circular gauge visualization of key product improvements" })
        ]
      }
    ),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: i.map((l, c) => /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { delay: c * 0.15, duration: 0.5 },
        className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 p-8 rounded-sm hover:shadow-[0_0_30px_rgba(13,148,136,0.2)] hover:border-brand-500/50 transition-all group",
        children: [
          /* @__PURE__ */ t("div", { className: "relative mb-6 flex justify-center", children: [
            /* @__PURE__ */ e(yr, { percentage: l.percentage, color: l.color }),
            /* @__PURE__ */ e("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center", children: /* @__PURE__ */ e("div", { className: "text-4xl font-mono font-bold", style: { color: l.color }, children: l.value }) })
          ] }),
          /* @__PURE__ */ t("div", { className: "text-center", children: [
            /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white mb-2 group-hover:text-brand-400 transition-colors", children: l.name }),
            /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 mb-4 font-mono uppercase tracking-wider", children: l.category }),
            /* @__PURE__ */ t("div", { className: "flex items-center justify-center gap-2 text-neutral-300 mb-4", children: [
              /* @__PURE__ */ e(A, { className: "w-4 h-4", style: { color: l.color } }),
              /* @__PURE__ */ e("span", { className: "text-sm font-mono", children: l.metric })
            ] })
          ] }),
          l.validation && /* @__PURE__ */ e("div", { className: "mt-6 pt-6 border-t border-neutral-800", children: /* @__PURE__ */ t("div", { className: "text-xs text-center px-3 py-2 bg-neutral-800/50 rounded-sm text-neutral-400 font-mono", children: [
            "✓ ",
            l.validation
          ] }) })
        ]
      },
      l.id
    )) }),
    /* @__PURE__ */ e(
      f.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.8 },
        className: "mt-16 text-center",
        children: /* @__PURE__ */ e("div", { className: "inline-flex items-center gap-6 bg-neutral-900/80 backdrop-blur border border-neutral-800 px-8 py-4 rounded-sm shadow-lg", children: i.map((l, c) => /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ e("div", { className: "w-3 h-3 rounded-full", style: { backgroundColor: l.color } }),
          /* @__PURE__ */ e("span", { className: "text-sm font-mono text-neutral-300", children: l.name })
        ] }, c)) })
      }
    )
  ] }) });
}, en = ({ productId: i = "all" }) => {
  const l = {
    all: [
      {
        product: "Graffisol",
        savings: "18-month payback",
        metric: "10-12% energy gain",
        benefit: "Lower LCOE vs mechanical upgrades",
        icon: W,
        gradient: "from-yellow-500/20 to-orange-500/20",
        border: "border-yellow-500/30",
        iconColor: "text-yellow-400"
      },
      {
        product: "Ceraphene",
        savings: "60-70% cost reduction",
        metric: "₹5,000 vs ₹15,000",
        benefit: "Premium performance at fraction of cost",
        icon: ee,
        gradient: "from-purple-500/20 to-pink-500/20",
        border: "border-purple-500/30",
        iconColor: "text-purple-400"
      },
      {
        product: "Graphacrete",
        savings: "₹430/m³ savings",
        metric: "15-20% cement reduction",
        benefit: "M30 → M50 performance upgrade",
        icon: Ie,
        gradient: "from-green-500/20 to-teal-500/20",
        border: "border-green-500/30",
        iconColor: "text-green-400"
      },
      {
        product: "HD-G-PE",
        savings: "+20% lifespan",
        metric: "20× elongation",
        benefit: "Extended product durability",
        icon: pe,
        gradient: "from-blue-500/20 to-cyan-500/20",
        border: "border-blue-500/30",
        iconColor: "text-cyan-400"
      }
    ]
  }, c = l[i] || l.all;
  return /* @__PURE__ */ e("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-green-500/30 bg-green-500/10 backdrop-blur mb-6", children: [
            /* @__PURE__ */ e(Ie, { className: "w-4 h-4 text-green-400" }),
            /* @__PURE__ */ e("span", { className: "text-xs font-mono text-green-400 tracking-widest uppercase", children: "Return on Investment" })
          ] }),
          /* @__PURE__ */ t("h2", { className: "text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight", children: [
            "Cost Savings",
            /* @__PURE__ */ e("br", {}),
            /* @__PURE__ */ e("span", { className: "bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent", children: "& Value Creation" })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto", children: "Superior performance at better economics - proven ROI across all products" })
        ]
      }
    ),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-16", children: c.map((d, a) => {
      const s = d.icon;
      return /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: a * 0.15, duration: 0.6 },
          className: "relative overflow-hidden",
          children: [
            /* @__PURE__ */ e("div", { className: `absolute inset-0 bg-gradient-to-br ${d.gradient}` }),
            /* @__PURE__ */ t("div", { className: `relative bg-neutral-900/90 backdrop-blur border ${d.border} p-8 rounded-sm hover:border-brand-500/50 transition-all group`, children: [
              /* @__PURE__ */ e("div", { className: `inline-flex p-4 rounded-sm bg-gradient-to-br ${d.gradient} border ${d.border} mb-6`, children: /* @__PURE__ */ e(s, { className: `w-8 h-8 ${d.iconColor}` }) }),
              /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-bold text-white mb-4 group-hover:text-brand-400 transition-colors", children: d.product }),
              /* @__PURE__ */ t("div", { className: "mb-6 pb-6 border-b border-neutral-800", children: [
                /* @__PURE__ */ e("div", { className: "text-5xl font-mono font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2", children: d.savings }),
                /* @__PURE__ */ e("p", { className: "text-neutral-400 font-mono text-sm", children: d.metric })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ e("div", { className: "w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" }),
                /* @__PURE__ */ e("p", { className: "text-neutral-300 leading-relaxed", children: d.benefit })
              ] })
            ] })
          ]
        },
        a
      );
    }) }),
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { delay: 0.8 },
        className: "bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/30 rounded-sm p-12 text-center backdrop-blur",
        children: [
          /* @__PURE__ */ e("h2", { className: "text-3xl font-display font-bold text-white mb-4", children: "Superior Cost-to-Performance Ratio" }),
          /* @__PURE__ */ e("p", { className: "text-xl text-neutral-300 mb-8 max-w-3xl mx-auto", children: "All Monoatom products deliver industry-leading performance while reducing costs - a unique combination validated through field deployments" }),
          /* @__PURE__ */ t("div", { className: "flex flex-wrap justify-center gap-8 text-center", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-4xl font-mono font-bold text-green-400 mb-2", children: "60-70%" }),
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 font-mono", children: "Cost Savings (Ceraphene)" })
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-4xl font-mono font-bold text-green-400 mb-2", children: "18mo" }),
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 font-mono", children: "ROI Payback (Graffisol)" })
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-4xl font-mono font-bold text-green-400 mb-2", children: "15-20%" }),
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 font-mono", children: "Material Savings (Graphacrete)" })
            ] })
          ] })
        ]
      }
    )
  ] }) });
}, tn = () => {
  const i = [
    {
      icon: Pa,
      value: "10+",
      label: "Innovations",
      description: "Breakthrough materials and technologies",
      color: "text-yellow-400",
      gradient: "from-yellow-500/20 to-orange-500/20",
      border: "border-yellow-500/30"
    },
    {
      icon: Fe,
      value: "5+",
      label: "Commercial Products",
      description: "Market-validated solutions deployed at scale",
      color: "text-brand-400",
      gradient: "from-brand-500/20 to-teal-500/20",
      border: "border-brand-500/30"
    },
    {
      icon: xe,
      value: "2",
      label: "R&D Facilities",
      description: "State-of-the-art laboratories with advanced characterization",
      color: "text-blue-400",
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30"
    },
    {
      icon: Ma,
      value: "5",
      label: "Pilot Technologies",
      description: "Field-scale trials in membranes, batteries, and advanced materials",
      color: "text-purple-400",
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30"
    }
  ], l = [
    { value: "14+", label: "Major Awards", color: "text-green-400" },
    { value: "6×", label: "President of India Awards", color: "text-brand-400" },
    { value: "NABL", label: "Certified Testing", color: "text-purple-400" }
  ];
  return /* @__PURE__ */ e("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-20",
        children: [
          /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6", children: [
            /* @__PURE__ */ e(A, { className: "w-4 h-4 text-brand-400" }),
            /* @__PURE__ */ e("span", { className: "text-xs font-mono text-brand-400 tracking-widest uppercase", children: "Company Metrics" })
          ] }),
          /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "By The Numbers" }),
          /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto", children: "Monoatom Labs combines deep scientific expertise with real-world industrial deployment capabilities" })
        ]
      }
    ),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16", children: i.map((c, d) => {
      const a = c.icon;
      return /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { delay: d * 0.1, duration: 0.5 },
          className: `bg-gradient-to-br ${c.gradient} border ${c.border} backdrop-blur p-8 rounded-sm hover:shadow-[0_0_30px_rgba(13,148,136,0.2)] transition-all duration-300 group relative overflow-hidden`,
          children: [
            /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
            /* @__PURE__ */ e("div", { className: `${c.color} mb-6 relative z-10`, children: /* @__PURE__ */ e(a, { className: "w-12 h-12", strokeWidth: 1.5 }) }),
            /* @__PURE__ */ e(
              f.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: d * 0.1 + 0.3 },
                className: "text-6xl font-mono font-bold text-white mb-3 relative z-10",
                children: c.value
              }
            ),
            /* @__PURE__ */ e("h3", { className: "text-lg font-display font-semibold text-white mb-3 relative z-10", children: c.label }),
            /* @__PURE__ */ e("p", { className: "text-sm text-neutral-400 leading-relaxed relative z-10", children: c.description })
          ]
        },
        d
      );
    }) }),
    /* @__PURE__ */ e(
      f.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.6 },
        className: "pt-12 border-t border-neutral-800",
        children: /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto", children: l.map((c, d) => /* @__PURE__ */ t(
          f.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.7 + d * 0.1 },
            className: "text-center bg-neutral-900/60 backdrop-blur border border-neutral-800 p-8 rounded-sm hover:border-brand-500/50 transition-all group",
            children: [
              /* @__PURE__ */ e("div", { className: `text-5xl font-mono font-bold ${c.color} mb-3 group-hover:scale-110 transition-transform`, children: c.value }),
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 font-mono uppercase tracking-wider", children: c.label })
            ]
          },
          d
        )) })
      }
    ),
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 1 },
        className: "mt-16 bg-gradient-to-r from-brand-500/10 to-purple-500/10 border border-brand-500/30 rounded-sm p-8 text-center",
        children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-center gap-3 mb-4", children: [
            /* @__PURE__ */ e(pe, { className: "w-8 h-8 text-brand-400" }),
            /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white", children: "Award-Winning Innovation" })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-neutral-300 max-w-3xl mx-auto", children: "Recognized globally for breakthrough nanomaterial research and commercial-scale graphene applications. 6× President of India Award winner, MIT TR35, TED Speaker, NASA Awardee." })
        ]
      }
    )
  ] }) });
}, an = ({ productId: i = "graphacrete" }) => {
  const [l, c] = M(i), d = {
    graphacrete: {
      name: "Graphacrete",
      color: "brand-500",
      competitors: ["UltraTech Admixture", "Sika Admixture", "PureGraph"],
      comparison: [
        { metric: "Cement Saving", graphacrete: "15-20%", competitor1: "0%", competitor2: "0%", competitor3: "3-5%" },
        { metric: "Water Resistance", graphacrete: "30-45%", competitor1: "<10%", competitor2: "10-20%", competitor3: "20-30%" },
        { metric: "Dosage Required", graphacrete: "0.05-0.10%", competitor1: "0.2-1.0%", competitor2: "0.2-1.0%", competitor3: "0.2-0.5%" },
        { metric: "Strength Gain", graphacrete: "40-50%", competitor1: "5-15%", competitor2: "8-15%", competitor3: "10-25%" },
        { metric: "Micro-Crack Control", graphacrete: "Excellent", competitor1: "Low", competitor2: "Medium", competitor3: "Medium" }
      ]
    },
    graffisol: {
      name: "Graffisol",
      color: "yellow-500",
      competitors: ["KhepriCoat", "DSM Coating", "Borosil Coating"],
      comparison: [
        { metric: "Power Output", graffisol: "7-8%", competitor1: "2-3%", competitor2: "~3%", competitor3: "0%" },
        { metric: "Temp Reduction", graffisol: "5-6°C", competitor1: "Not specified", competitor2: "Not specified", competitor3: "Not specified" },
        { metric: "Soiling Reduction", graffisol: "30-40%", competitor1: "Not specified", competitor2: "Not specified", competitor3: "Not specified" },
        { metric: "Payback Period", graffisol: "18 months", competitor1: "24+ months", competitor2: "24+ months", competitor3: "N/A" }
      ]
    },
    ceraphene: {
      name: "Ceraphene",
      color: "purple-500",
      competitors: ["Gtechniq CSL", "CarPro CQuartz", "Ceramic Pro 9H"],
      comparison: [
        { metric: "Graphene-Enhanced", ceraphene: "Yes", competitor1: "No", competitor2: "No", competitor3: "No" },
        { metric: "Durability", ceraphene: "3-4+ years", competitor1: "2-3+ years", competitor2: "1.5-2.5 years", competitor3: "Up to 5 years" },
        { metric: "Cost (₹/50ml)", ceraphene: "₹5,000", competitor1: "₹15,000", competitor2: "₹12,000", competitor3: "₹18,000" },
        { metric: "Cost Effectiveness", ceraphene: "Very High", competitor1: "Medium", competitor2: "Medium", competitor3: "Low-Medium" }
      ]
    }
  }, a = d[l], s = l;
  return /* @__PURE__ */ e("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-12",
        children: [
          /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "Competitive Advantage" }),
          /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto", children: "Monoatom products deliver superior performance at better value" })
        ]
      }
    ),
    i === "all" && /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-4 mb-12", children: Object.entries(d).map(([p, u]) => /* @__PURE__ */ e(
      "button",
      {
        onClick: () => c(p),
        className: `px-6 py-3 rounded-sm font-display font-semibold transition-all border font-mono ${l === p ? `bg-${u.color} text-white shadow-lg border-${u.color}` : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-700"}`,
        children: u.name
      },
      p
    )) }),
    /* @__PURE__ */ e(
      f.div,
      {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm overflow-hidden shadow-xl",
        children: /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ t("table", { className: "w-full", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ t("tr", { className: "bg-neutral-950 text-white", children: [
            /* @__PURE__ */ e("th", { className: "px-6 py-4 text-left font-display font-mono text-sm uppercase tracking-wider", children: "Metric" }),
            /* @__PURE__ */ e("th", { className: `px-6 py-4 text-left font-display font-mono text-sm uppercase tracking-wider bg-${a.color}/20 border-l border-r border-${a.color}/30`, children: a.name }),
            a.competitors.map((p, u) => /* @__PURE__ */ e("th", { className: "px-6 py-4 text-left font-display font-mono text-sm uppercase tracking-wider text-neutral-500", children: p }, u))
          ] }) }),
          /* @__PURE__ */ e("tbody", { children: a.comparison.map((p, u) => /* @__PURE__ */ t("tr", { className: "border-b border-neutral-800 hover:bg-neutral-900/50 transition-colors", children: [
            /* @__PURE__ */ e("td", { className: "px-6 py-4 font-medium text-neutral-300 font-mono", children: p.metric }),
            /* @__PURE__ */ e("td", { className: `px-6 py-4 bg-${a.color}/10 border-l border-r border-${a.color}/20`, children: /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ e(pt, { className: `w-5 h-5 text-${a.color} flex-shrink-0` }),
              /* @__PURE__ */ e("span", { className: `font-bold text-${a.color} font-mono`, children: p[s] })
            ] }) }),
            /* @__PURE__ */ e("td", { className: "px-6 py-4 text-neutral-500 font-mono text-sm", children: p.competitor1 }),
            /* @__PURE__ */ e("td", { className: "px-6 py-4 text-neutral-500 font-mono text-sm", children: p.competitor2 }),
            /* @__PURE__ */ e("td", { className: "px-6 py-4 text-neutral-500 font-mono text-sm", children: p.competitor3 })
          ] }, u)) })
        ] }) })
      },
      l
    ),
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.4 },
        className: "mt-12 grid grid-cols-1 md:grid-cols-3 gap-6",
        children: [
          /* @__PURE__ */ t("div", { className: "bg-brand-500/20 border border-brand-500/30 text-white p-6 rounded-sm backdrop-blur", children: [
            /* @__PURE__ */ e("div", { className: "text-3xl font-mono font-bold mb-2", children: "Highest Performance" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-300 text-sm font-mono", children: "Best metrics across all key parameters" })
          ] }),
          /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 border border-neutral-700 text-white p-6 rounded-sm backdrop-blur", children: [
            /* @__PURE__ */ e("div", { className: "text-3xl font-mono font-bold mb-2", children: "Lowest Dosage" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-400 text-sm font-mono", children: "Maximum results with minimal usage" })
          ] }),
          /* @__PURE__ */ t("div", { className: "bg-green-500/20 border border-green-500/30 text-white p-6 rounded-sm backdrop-blur", children: [
            /* @__PURE__ */ e("div", { className: "text-3xl font-mono font-bold mb-2", children: "Best Value" }),
            /* @__PURE__ */ e("p", { className: "text-green-300 text-sm font-mono", children: "Superior cost-to-performance ratio" })
          ] })
        ]
      }
    )
  ] }) });
}, rn = () => {
  const i = [
    {
      phase: "Commercial Ready",
      status: "active",
      icon: V,
      iconColor: "text-green-400",
      borderColor: "border-green-500/50",
      bgGradient: "from-green-500/20 to-teal-500/20",
      products: [
        { name: "Graphacrete", description: "High-Performance Concrete Additive", status: "Deployed at scale" },
        { name: "Graffisol", description: "Solar Panel Coating", status: "1+ MW installations" },
        { name: "Ceraphene", description: "Ceramic Coating", status: "Market ready" },
        { name: "HD-G-PE", description: "Polymer Enhancer", status: "Commercial production" }
      ]
    },
    {
      phase: "Pipeline Products",
      status: "development",
      icon: wt,
      iconColor: "text-brand-400",
      borderColor: "border-brand-500/50",
      bgGradient: "from-brand-500/20 to-cyan-500/20",
      products: [
        { name: "Rustene", description: "Anti-Corrosion Paint", status: "Product development" },
        { name: "Graphyre", description: "Tire Technology", status: "Prototype testing" },
        { name: "Graphosite", description: "Advanced Composites", status: "Material R&D" },
        { name: "Thermaphene", description: "Heating Solutions", status: "Lab validation" },
        { name: "Armophene", description: "Protective Armor", status: "Concept validation" }
      ]
    },
    {
      phase: "Pilot Technologies",
      status: "research",
      icon: W,
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/50",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      products: [
        { name: "Hydrogen Membranes", description: "High-selectivity separation", status: "Pilot scale" },
        { name: "Seawater Desalination", description: "Ultra-thin membranes", status: "Field trials" },
        { name: "Atmospheric Water Harvesting", description: "Air to water conversion", status: "Pilot testing" },
        { name: "Glass Fibres", description: "Graphene-reinforced composites", status: "Material testing" },
        { name: "Battery Storage", description: "High power density", status: "Lab scale" }
      ]
    },
    {
      phase: "Future Innovations",
      status: "concept",
      icon: Pe,
      iconColor: "text-yellow-400",
      borderColor: "border-yellow-500/50",
      bgGradient: "from-yellow-500/20 to-orange-500/20",
      products: [
        { name: "Advanced Sensors", description: "IoT & environmental monitoring", status: "Research phase" },
        { name: "Biomedical Applications", description: "Drug delivery & diagnostics", status: "Exploratory" },
        { name: "Energy Storage", description: "Next-gen supercapacitors", status: "Early research" }
      ]
    }
  ];
  return /* @__PURE__ */ e("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-20",
        children: [
          /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6", children: [
            /* @__PURE__ */ e(wt, { className: "w-4 h-4 text-brand-400" }),
            /* @__PURE__ */ e("span", { className: "text-xs font-mono text-brand-400 tracking-widest uppercase", children: "Innovation Pipeline" })
          ] }),
          /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "Technology Roadmap" }),
          /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto", children: "From commercial products to cutting-edge research - our continuous innovation pipeline" })
        ]
      }
    ),
    /* @__PURE__ */ e("div", { className: "space-y-12", children: i.map((l, c) => {
      const d = l.icon;
      return /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, x: -50 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: c * 0.2, duration: 0.6 },
          className: "relative",
          children: [
            c < i.length - 1 && /* @__PURE__ */ e("div", { className: "absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-neutral-700 to-transparent hidden md:block" }),
            /* @__PURE__ */ t("div", { className: "flex flex-col md:flex-row gap-6", children: [
              /* @__PURE__ */ e("div", { className: "md:w-1/4 flex-shrink-0", children: /* @__PURE__ */ t("div", { className: `bg-gradient-to-br ${l.bgGradient} border ${l.borderColor} p-6 rounded-sm backdrop-blur sticky top-32`, children: [
                /* @__PURE__ */ e(d, { className: `w-12 h-12 ${l.iconColor} mb-4` }),
                /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white mb-2", children: l.phase }),
                /* @__PURE__ */ e("div", { className: `inline-flex px-3 py-1 rounded-sm ${l.bgGradient} border ${l.borderColor} text-xs font-mono uppercase tracking-wider text-white`, children: l.status })
              ] }) }),
              /* @__PURE__ */ e("div", { className: "md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4", children: l.products.map((a, s) => /* @__PURE__ */ t(
                f.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: c * 0.2 + s * 0.1 + 0.2 },
                  className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 p-6 rounded-sm hover:border-brand-500/50 transition-all group",
                  children: [
                    /* @__PURE__ */ e("h4", { className: "text-lg font-display font-bold text-white mb-2 group-hover:text-brand-400 transition-colors", children: a.name }),
                    /* @__PURE__ */ e("p", { className: "text-sm text-neutral-400 mb-3", children: a.description }),
                    /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-neutral-800/50 rounded-sm", children: [
                      /* @__PURE__ */ e("div", { className: `w-2 h-2 rounded-full ${l.iconColor.replace("text-", "bg-")}` }),
                      /* @__PURE__ */ e("span", { className: "text-xs text-neutral-400 font-mono", children: a.status })
                    ] })
                  ]
                },
                s
              )) })
            ] })
          ]
        },
        c
      );
    }) }),
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 1 },
        className: "mt-20 bg-gradient-to-r from-brand-500/10 to-purple-500/10 border border-brand-500/30 rounded-sm p-8 text-center",
        children: [
          /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white mb-4", children: "Continuous Innovation" }),
          /* @__PURE__ */ e("p", { className: "text-neutral-300 max-w-3xl mx-auto mb-6", children: "Monoatom Labs maintains an active pipeline of 15+ innovations across commercial products, development stage technologies, and cutting-edge research initiatives." }),
          /* @__PURE__ */ t("div", { className: "flex flex-wrap justify-center gap-6 text-center", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-3xl font-mono font-bold text-green-400 mb-1", children: "5+" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 font-mono uppercase", children: "Commercial Products" })
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-3xl font-mono font-bold text-brand-400 mb-1", children: "5" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 font-mono uppercase", children: "Pipeline Products" })
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-3xl font-mono font-bold text-purple-400 mb-1", children: "5" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 font-mono uppercase", children: "Pilot Technologies" })
            ] })
          ] })
        ]
      }
    )
  ] }) });
}, nn = () => {
  const [i, l] = M("nanomaterials"), c = {
    nanomaterials: {
      id: "facility-01",
      name: "Nanomaterials R&D Facility",
      icon: Ve,
      color: "brand",
      focus: "Graphene processing, dispersion technologies, nano-additive development",
      location: "Primary Research Center",
      capabilities: [
        "Surface chemistry modification",
        "Advanced characterization (SEM, TEM, Raman)",
        "Pilot-scale dispersion & functionalization units",
        "Quality control & batch consistency",
        "Process optimization & scale-up",
        "Formulation development"
      ],
      equipment: [
        { name: "Scanning Electron Microscope (SEM)", purpose: "Nanoscale imaging & analysis" },
        { name: "Transmission Electron Microscope (TEM)", purpose: "Atomic-scale characterization" },
        { name: "Raman Spectroscopy", purpose: "Material composition analysis" },
        { name: "Dispersion Systems", purpose: "Pilot-scale production" },
        { name: "Surface Analysis Tools", purpose: "Chemical characterization" }
      ],
      achievements: [
        "10+ product formulations developed",
        "5 commercial-scale processes",
        "NABL certified testing"
      ]
    },
    application: {
      id: "facility-02",
      name: "Application & Testing Facility",
      icon: ct,
      color: "purple",
      focus: "Real-industry testing across multiple sectors",
      location: "Application Testing Center",
      capabilities: [
        "Mechanical & durability testing",
        "Thermal & electrical conductivity labs",
        "Prototype fabrication & field-simulation",
        "Performance validation",
        "Quality assurance testing",
        "Customer sample development"
      ],
      equipment: [
        { name: "Universal Testing Machine (UTM)", purpose: "Mechanical property testing" },
        { name: "Concrete Testing Lab", purpose: "Compressive & flexural strength" },
        { name: "Solar Simulator", purpose: "Photovoltaic performance testing" },
        { name: "Environmental Chambers", purpose: "Durability & aging tests" },
        { name: "Thermal Analysis", purpose: "Temperature performance" }
      ],
      achievements: [
        "1000+ samples tested",
        "Field-validated results",
        "Customer-specific solutions"
      ]
    }
  }, d = c[i], a = d.icon;
  return /* @__PURE__ */ e("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6", children: [
            /* @__PURE__ */ e(xe, { className: "w-4 h-4 text-brand-400" }),
            /* @__PURE__ */ e("span", { className: "text-xs font-mono text-brand-400 tracking-widest uppercase", children: "Research Infrastructure" })
          ] }),
          /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "R&D Facilities" }),
          /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto", children: "State-of-the-art laboratories equipped for breakthrough nanomaterial research and commercialization" })
        ]
      }
    ),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto", children: Object.entries(c).map(([s, p]) => {
      const u = p.icon;
      return /* @__PURE__ */ e(
        f.button,
        {
          onClick: () => l(s),
          whileHover: { scale: 1.02 },
          whileTap: { scale: 0.98 },
          className: `p-8 rounded-sm transition-all border text-left ${i === s ? "bg-brand-500/20 border-brand-500/50 shadow-[0_0_30px_rgba(13,148,136,0.3)]" : "bg-neutral-900/80 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700"}`,
          children: /* @__PURE__ */ t("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ e("div", { className: `p-3 rounded-sm ${i === s ? "bg-brand-500/20 border border-brand-500/30" : "bg-neutral-800/50"}`, children: /* @__PURE__ */ e(u, { className: `w-8 h-8 ${i === s ? "text-brand-400" : "text-neutral-400"}` }) }),
            /* @__PURE__ */ t("div", { className: "flex-grow", children: [
              /* @__PURE__ */ e("h3", { className: `text-xl font-display font-bold mb-2 ${i === s ? "text-white" : "text-neutral-400"}`, children: p.name }),
              /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 font-mono", children: p.location })
            ] })
          ] })
        },
        s
      );
    }) }),
    /* @__PURE__ */ e(se, { mode: "wait", children: /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.3 },
        children: [
          /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-brand-500/20 to-purple-500/20 border border-brand-500/30 rounded-sm p-8 mb-8", children: /* @__PURE__ */ t("div", { className: "flex items-start gap-6", children: [
            /* @__PURE__ */ e("div", { className: "p-4 bg-white/10 rounded-sm border border-white/20", children: /* @__PURE__ */ e(a, { className: "w-12 h-12 text-brand-400" }) }),
            /* @__PURE__ */ t("div", { className: "flex-grow", children: [
              /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-bold text-white mb-3", children: d.name }),
              /* @__PURE__ */ e("p", { className: "text-lg text-neutral-300 mb-4", children: d.focus }),
              /* @__PURE__ */ e("div", { className: "inline-flex items-center px-4 py-2 bg-neutral-900/60 backdrop-blur rounded-sm border border-neutral-700", children: /* @__PURE__ */ e("span", { className: "text-neutral-400 font-mono text-sm", children: d.location }) })
            ] })
          ] }) }),
          /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
            /* @__PURE__ */ t(
              f.div,
              {
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.2 },
                className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
                children: [
                  /* @__PURE__ */ t("h3", { className: "text-2xl font-display font-bold text-white mb-6 flex items-center gap-2", children: [
                    /* @__PURE__ */ e(V, { className: "w-6 h-6 text-brand-400" }),
                    "Core Capabilities"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "space-y-3", children: d.capabilities.map((s, p) => /* @__PURE__ */ t(
                    f.div,
                    {
                      initial: { opacity: 0, x: -10 },
                      animate: { opacity: 1, x: 0 },
                      transition: { delay: 0.3 + p * 0.05 },
                      className: "flex items-start gap-3 p-3 bg-neutral-800/50 rounded-sm hover:bg-neutral-800 transition-colors",
                      children: [
                        /* @__PURE__ */ e(V, { className: "w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" }),
                        /* @__PURE__ */ e("span", { className: "text-neutral-200 text-sm", children: s })
                      ]
                    },
                    p
                  )) })
                ]
              }
            ),
            /* @__PURE__ */ t(
              f.div,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.2 },
                className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
                children: [
                  /* @__PURE__ */ t("h3", { className: "text-2xl font-display font-bold text-white mb-6 flex items-center gap-2", children: [
                    /* @__PURE__ */ e(W, { className: "w-6 h-6 text-brand-400" }),
                    "Key Equipment"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "space-y-4", children: d.equipment.map((s, p) => /* @__PURE__ */ t(
                    f.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.3 + p * 0.05 },
                      className: "p-4 bg-neutral-800/50 rounded-sm border border-neutral-700 hover:border-brand-500/30 transition-all",
                      children: [
                        /* @__PURE__ */ e("h4", { className: "text-white font-mono font-semibold mb-1", children: s.name }),
                        /* @__PURE__ */ e("p", { className: "text-sm text-neutral-400", children: s.purpose })
                      ]
                    },
                    p
                  )) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.4 },
              className: "bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/30 rounded-sm p-8",
              children: [
                /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white mb-6 text-center", children: "Key Achievements" }),
                /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: d.achievements.map((s, p) => /* @__PURE__ */ t(
                  f.div,
                  {
                    initial: { opacity: 0, scale: 0.9 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { delay: 0.5 + p * 0.1 },
                    className: "text-center p-6 bg-neutral-900/60 backdrop-blur border border-neutral-700 rounded-sm",
                    children: [
                      /* @__PURE__ */ e("div", { className: "text-2xl font-mono font-bold text-green-400 mb-2", children: "✓" }),
                      /* @__PURE__ */ e("div", { className: "text-neutral-200 font-mono text-sm", children: s })
                    ]
                  },
                  p
                )) })
              ]
            }
          )
        ]
      },
      i
    ) }),
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.6 },
        className: "mt-16 bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-8 text-center",
        children: [
          /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white mb-4", children: "World-Class Research Infrastructure" }),
          /* @__PURE__ */ e("p", { className: "text-neutral-300 max-w-3xl mx-auto mb-6", children: "Our two state-of-the-art facilities enable the full innovation cycle - from fundamental nanomaterial research to commercial-scale production and industry-specific application testing." }),
          /* @__PURE__ */ t("div", { className: "flex flex-wrap justify-center gap-8 text-center", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-3xl font-mono font-bold text-brand-400 mb-1", children: "2" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 font-mono uppercase", children: "Facilities" })
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-3xl font-mono font-bold text-brand-400 mb-1", children: "15+" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 font-mono uppercase", children: "Equipment Types" })
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-3xl font-mono font-bold text-brand-400 mb-1", children: "NABL" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 font-mono uppercase", children: "Certified" })
            ] })
          ] })
        ]
      }
    )
  ] }) });
}, _t = [
  { wc: 0.25, c1: 47, c2: 58, c3: 72 },
  { wc: 0.3, c1: 40, c2: 51, c3: 63 },
  { wc: 0.35, c1: 34, c2: 44, c3: 55 },
  { wc: 0.37, c1: 32, c2: 42, c3: 52 },
  // ← M-30 + Graphene operating W/C
  { wc: 0.4, c1: 29, c2: 37, c3: 47 },
  { wc: 0.45, c1: 24, c2: 32, c3: 41 },
  { wc: 0.48, c1: 22, c2: 29, c3: 38 },
  // ← M-20 + Graphene operating W/C
  { wc: 0.5, c1: 21, c2: 27, c3: 36 },
  { wc: 0.55, c1: 18, c2: 23, c3: 31 },
  // ← M-20 Control operating W/C
  { wc: 0.6, c1: 16, c2: 20, c3: 27 },
  { wc: 0.65, c1: 14, c2: 17, c3: 23 }
], Ut = [
  { sieve: "0.15", lower: 0, band: 6, m20G: 0.7, m20C: 0.8, m30G: 0.8 },
  { sieve: "0.6", lower: 10, band: 25, m20G: 21.4, m20C: 22.2, m30G: 23 },
  { sieve: "4.75", lower: 30, band: 20, m20G: 42.8, m20C: 44.1, m30G: 45.4 },
  { sieve: "20", lower: 95, band: 5, m20G: 95.6, m20C: 95.7, m30G: 95.8 },
  { sieve: "40", lower: 100, band: 0, m20G: 100, m20C: 100, m30G: 100 }
], wr = [
  { sieve: "0.15", actual: 1.9, lower: 0, upper: 10 },
  { sieve: "0.3", actual: 21.1, lower: 8, upper: 30 },
  { sieve: "0.6", actual: 54.6, lower: 35, upper: 59 },
  { sieve: "1.18", actual: 85.6, lower: 55, upper: 90 },
  { sieve: "2.36", actual: 96.6, lower: 75, upper: 100 },
  { sieve: "4.75", actual: 99.3, lower: 90, upper: 100 },
  { sieve: "10", actual: 100, lower: 100, upper: 100 }
], Qt = wr.map((i) => ({ ...i, band: i.upper - i.lower })), kr = [
  { sieve: "4.75", actual: 0.5, lower: 0, upper: 5 },
  { sieve: "10", actual: 1, lower: 0, upper: 20 },
  { sieve: "20", actual: 84.9, lower: 85, upper: 100 },
  { sieve: "40", actual: 100, lower: 100, upper: 100 }
], Xt = kr.map((i) => ({ ...i, band: i.upper - i.lower })), $r = [
  { sieve: "2.36", actual: 2.9, lower: 0, upper: 5 },
  { sieve: "4.75", actual: 11.4, lower: 0, upper: 20 },
  { sieve: "10", actual: 59.8, lower: 85, upper: 100 },
  { sieve: "12.5", actual: 86.4, lower: 100, upper: 100 }
], Zt = $r.map((i) => ({ ...i, band: i.upper - i.lower })), Sr = [{ c: "1", load: 255, ra: 11, r28: 26 }, { c: "2", load: 236, ra: 10.5, r28: 25.5 }, { c: "3", load: 234, ra: 10.5, r28: 25.5 }], Cr = [{ c: "1", load: 693.8, str: 30.5 }, { c: "2", load: 668.7, str: 29.5 }, { c: "3", load: 626.8, str: 27.5 }], Pr = [{ c: "1", load: 233.3, ra: 10, r28: 24.5 }, { c: "2", load: 239.5, ra: 10.5, r28: 25.5 }, { c: "3", load: 226.8, ra: 10, r28: 24.5 }], Mr = [{ c: "1", load: 551, ra: 24, r28: 47.5 }, { c: "2", load: 587.4, ra: 26, r28: 50.5 }, { c: "3", load: 589.2, ra: 26, r28: 50.5 }], Ar = [
  { ingredient: "Cement OPC-53", graphene: 331, control: 371 },
  { ingredient: "20mm CA", graphene: 587, control: 526 },
  { ingredient: "10mm CA", graphene: 633, control: 572 },
  { ingredient: "River Sand", graphene: 789, control: 752 },
  { ingredient: "Free Water", graphene: 159, control: 204 }
], Jt = [
  { name: "M-30 Char. (min)", value: 30, fill: "#e5e7eb" },
  { name: "Target Mean", value: 38.25, fill: "#d4d4d4" },
  { name: "ACT Equiv. 28-Day", value: 49.5, fill: "#171717" }
], Le = ({ active: i, payload: l, label: c }) => !i || !l?.length ? null : /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-xl shadow-xl p-4 text-xs min-w-[160px]", children: [
  /* @__PURE__ */ e("p", { className: "font-semibold text-neutral-800 mb-2", children: c }),
  l.map((d, a) => d.value != null && /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-1", children: [
    /* @__PURE__ */ e("span", { className: "inline-block w-2.5 h-2.5 rounded-full shrink-0", style: { background: d.color ?? d.fill } }),
    /* @__PURE__ */ t("span", { className: "text-neutral-500 truncate", children: [
      d.name,
      ":"
    ] }),
    /* @__PURE__ */ e("span", { className: "font-mono font-medium text-neutral-900 ml-auto", children: d.value })
  ] }, a))
] }), Ke = ({ title: i, badge: l, children: c, defaultOpen: d = !1 }) => {
  const [a, s] = M(d);
  return /* @__PURE__ */ t("div", { className: "border border-neutral-200 rounded-2xl overflow-hidden", children: [
    /* @__PURE__ */ t("button", { onClick: () => s((p) => !p), className: "w-full flex items-center justify-between px-6 py-4 bg-neutral-50 hover:bg-neutral-100 transition-colors text-left", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ e("span", { className: "font-semibold text-neutral-900 text-sm", children: i }),
        l && /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-wider px-2 py-0.5 bg-green-100 text-green-700 rounded-full", children: l })
      ] }),
      a ? /* @__PURE__ */ e(Aa, { className: "w-4 h-4 text-neutral-500 shrink-0" }) : /* @__PURE__ */ e(Ue, { className: "w-4 h-4 text-neutral-500 shrink-0" })
    ] }),
    a && /* @__PURE__ */ e("div", { className: "p-6", children: c })
  ] });
}, we = ({ label: i, value: l, unit: c = "", sub: d, dark: a }) => /* @__PURE__ */ t("div", { className: `p-5 rounded-xl border ${a ? "bg-neutral-900 border-neutral-700" : "bg-white border-neutral-200"}`, children: [
  /* @__PURE__ */ e("div", { className: `text-xs font-semibold uppercase tracking-wide mb-2 ${a ? "text-neutral-400" : "text-neutral-500"}`, children: i }),
  /* @__PURE__ */ t("div", { className: `text-2xl font-display font-medium mb-1 ${a ? "text-white" : "text-neutral-900"}`, children: [
    l,
    /* @__PURE__ */ e("span", { className: `text-sm ml-1 ${a ? "text-neutral-400" : "text-neutral-500"}`, children: c })
  ] }),
  d && /* @__PURE__ */ e("div", { className: `text-xs ${a ? "text-neutral-500" : "text-neutral-400"}`, children: d })
] }), lt = ({ rows: i }) => /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ t("table", { className: "w-full text-sm border-collapse min-w-[520px]", children: [
  /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: "border-b border-neutral-200 bg-neutral-50", children: ["Ingredient", "kg/m³", "Proportion", "kg / bag", "L / bag", "Farma (35L)"].map((l) => /* @__PURE__ */ e("th", { className: "py-3 px-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-500 first:pl-4", children: l }, l)) }) }),
  /* @__PURE__ */ e("tbody", { className: "divide-y divide-neutral-100", children: i.map((l, c) => /* @__PURE__ */ t("tr", { className: "hover:bg-neutral-50 transition-colors", children: [
    /* @__PURE__ */ e("td", { className: "py-3 px-3 pl-4 font-medium text-neutral-900", children: l.ingredient }),
    /* @__PURE__ */ e("td", { className: "py-3 px-3 text-right font-mono text-neutral-700", children: l.kgm3 }),
    /* @__PURE__ */ e("td", { className: "py-3 px-3 text-right font-mono text-neutral-500", children: l.prop ?? "—" }),
    /* @__PURE__ */ e("td", { className: "py-3 px-3 text-right font-mono text-neutral-500", children: l.kgbag ?? "—" }),
    /* @__PURE__ */ e("td", { className: "py-3 px-3 text-right font-mono text-neutral-500", children: l.lbag ?? "—" }),
    /* @__PURE__ */ e("td", { className: "py-3 px-3 text-right font-mono text-neutral-500", children: l.farma ?? "—" })
  ] }, c)) })
] }) }), it = ({ cubes: i, type: l = "act", grade: c = "" }) => /* @__PURE__ */ t("div", { className: "overflow-x-auto mt-3", children: [
  /* @__PURE__ */ t("table", { className: "w-full text-xs border-collapse min-w-[420px]", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ t("tr", { className: "border-b border-neutral-200 bg-neutral-50", children: [
      /* @__PURE__ */ e("th", { className: "py-2 px-3 text-left font-semibold text-neutral-500", children: "Cube" }),
      /* @__PURE__ */ e("th", { className: "py-2 px-3 text-right font-semibold text-neutral-500", children: "Load (kN)" }),
      l === "act" && /* @__PURE__ */ e("th", { className: "py-2 px-3 text-right font-semibold text-neutral-500", children: "Ra (MPa)" }),
      /* @__PURE__ */ e("th", { className: "py-2 px-3 text-right font-semibold text-neutral-900", children: l === "act" ? "R₂₈ Equiv. (MPa)" : "Strength (MPa)" })
    ] }) }),
    /* @__PURE__ */ t("tbody", { className: "divide-y divide-neutral-100", children: [
      i.map((d, a) => /* @__PURE__ */ t("tr", { children: [
        /* @__PURE__ */ t("td", { className: "py-2 px-3 font-medium text-neutral-700", children: [
          "Cube ",
          d.c
        ] }),
        /* @__PURE__ */ e("td", { className: "py-2 px-3 text-right font-mono text-neutral-600", children: d.load }),
        l === "act" && /* @__PURE__ */ e("td", { className: "py-2 px-3 text-right font-mono text-neutral-600", children: d.ra }),
        /* @__PURE__ */ e("td", { className: "py-2 px-3 text-right font-mono font-semibold text-neutral-900", children: l === "act" ? d.r28 : d.str })
      ] }, a)),
      /* @__PURE__ */ t("tr", { className: "border-t-2 border-neutral-300", children: [
        /* @__PURE__ */ e("td", { colSpan: l === "act" ? 3 : 2, className: "py-2 px-3 text-right font-bold text-neutral-700", children: "Average" }),
        /* @__PURE__ */ t("td", { className: "py-2 px-3 text-right font-bold text-neutral-900", children: [
          l === "act" ? (i.reduce((d, a) => d + a.r28, 0) / i.length).toFixed(1) : (i.reduce((d, a) => d + a.str, 0) / i.length).toFixed(1),
          " MPa"
        ] })
      ] })
    ] })
  ] }),
  l === "act" && /* @__PURE__ */ e("p", { className: "text-xs text-neutral-400 mt-2", children: "Formula: R₂₈ = 8.09 + 1.64 × Ra  ·  IS 9013 : 1978  ·  Cube size 150×150×150 mm" })
] }), Re = ({ data: i, title: l, zone: c }) => /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-xl p-4", children: [
  /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-1", children: [
    /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-neutral-800", children: l }),
    c && /* @__PURE__ */ t("span", { className: "text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full font-semibold", children: [
      "Zone ",
      c
    ] })
  ] }),
  /* @__PURE__ */ e("p", { className: "text-xs text-neutral-400 mb-3", children: "Cumulative % Passing · IS 383 tolerance band (amber) vs actual (black)" }),
  /* @__PURE__ */ e(O, { width: "100%", height: 200, children: /* @__PURE__ */ t(qe, { data: i, margin: { top: 5, right: 10, bottom: 20, left: 0 }, children: [
    /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: "#f5f5f5" }),
    /* @__PURE__ */ e(_, { dataKey: "sieve", tick: { fontSize: 9, fill: "#737373" }, label: { value: "Sieve (mm)", position: "insideBottom", offset: -12, fontSize: 9, fill: "#737373" } }),
    /* @__PURE__ */ e(U, { domain: [0, 105], tick: { fontSize: 9, fill: "#737373" }, width: 30 }),
    /* @__PURE__ */ e(q, { content: /* @__PURE__ */ e(Le, {}) }),
    /* @__PURE__ */ e($e, { type: "monotone", dataKey: "lower", stackId: "band", fill: "transparent", stroke: "none", legendType: "none", name: "" }),
    /* @__PURE__ */ e($e, { type: "monotone", dataKey: "band", stackId: "band", fill: "#fef3c7", fillOpacity: 0.7, stroke: "#f59e0b", strokeDasharray: "4 2", strokeWidth: 1.5, dot: !1, name: "IS 383 Band" }),
    /* @__PURE__ */ e(re, { type: "monotone", dataKey: "actual", stroke: "#171717", strokeWidth: 2, dot: { r: 4, fill: "#171717", stroke: "white", strokeWidth: 1 }, name: "Actual" }),
    /* @__PURE__ */ e(fe, { y: 100, stroke: "#d1d5db", strokeDasharray: "2 2" })
  ] }) })
] }), ln = () => {
  const [i, l] = M("m20"), c = [
    { ingredient: "Cement OPC-53", kgm3: "331", prop: "—", kgbag: "50", lbag: "—", farma: "—" },
    { ingredient: "20 mm CA (SSD)", kgm3: "587", prop: "29.2%", kgbag: "89", lbag: "57", farma: "1.6" },
    { ingredient: "10 mm CA (SSD)", kgm3: "633", prop: "31.5%", kgbag: "96", lbag: "62", farma: "1.8" },
    { ingredient: "River Sand (SSD)", kgm3: "789", prop: "39.3%", kgbag: "119", lbag: "77", farma: "2.2" },
    { ingredient: "Free Water", kgm3: "159", prop: "—", kgbag: "24L", lbag: "24", farma: "—" },
    { ingredient: "Graphene Admixture (PC, 0.8%)", kgm3: "2.6", prop: "0.8% bwc", kgbag: "0.4", lbag: "0.37", farma: "—" }
  ], d = [
    { ingredient: "Cement OPC-53", kgm3: "331", prop: "—", kgbag: "50", lbag: "—", farma: "—" },
    { ingredient: "20 mm CA (DRY)", kgm3: "586", prop: "29.3%", kgbag: "89", lbag: "57", farma: "1.6" },
    { ingredient: "10 mm CA (DRY)", kgm3: "631", prop: "31.6%", kgbag: "95", lbag: "62", farma: "1.8" },
    { ingredient: "River Sand (DRY)", kgm3: "783", prop: "39.2%", kgbag: "118", lbag: "77", farma: "2.2" },
    { ingredient: "Total Water", kgm3: "168", prop: "—", kgbag: "25L", lbag: "25.4", farma: "—" },
    { ingredient: "Graphene Admixture (PC, 0.8%)", kgm3: "2.6", prop: "0.8% bwc", kgbag: "0.4", lbag: "0.37", farma: "—" }
  ], a = [
    { ingredient: "Cement OPC-53", kgm3: "371", prop: "—", kgbag: "50", lbag: "—", farma: "—" },
    { ingredient: "20 mm CA (SSD)", kgm3: "526", prop: "28.4%", kgbag: "71", lbag: "46", farma: "1.3" },
    { ingredient: "10 mm CA (SSD)", kgm3: "572", prop: "30.9%", kgbag: "77", lbag: "50", farma: "1.4" },
    { ingredient: "River Sand (SSD)", kgm3: "752", prop: "40.6%", kgbag: "101", lbag: "66", farma: "1.9" },
    { ingredient: "Free Water", kgm3: "204", prop: "—", kgbag: "27L", lbag: "27.5", farma: "—" },
    { ingredient: "Admixture", kgm3: "—", prop: "None", kgbag: "—", lbag: "—", farma: "—" }
  ], s = [
    { ingredient: "Cement OPC-53", kgm3: "422", prop: "—", kgbag: "50", lbag: "—", farma: "—" },
    { ingredient: "20 mm CA (SSD)", kgm3: "535", prop: "27.8%", kgbag: "63", lbag: "41", farma: "1.2" },
    { ingredient: "10 mm CA (SSD)", kgm3: "579", prop: "30.1%", kgbag: "69", lbag: "45", farma: "1.3" },
    { ingredient: "River Sand (SSD)", kgm3: "812", prop: "42.1%", kgbag: "96", lbag: "62", farma: "1.8" },
    { ingredient: "Free Water", kgm3: "156", prop: "—", kgbag: "19L", lbag: "18.5", farma: "—" },
    { ingredient: "Monoatom Graphene Adm. (PC, 0.8%)", kgm3: "3.4", prop: "0.8% bwc", kgbag: "0.4", lbag: "0.37", farma: "—" }
  ];
  return /* @__PURE__ */ t("div", { className: "space-y-8", children: [
    /* @__PURE__ */ t("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-4", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-3 bg-green-50 text-green-700 border border-green-200", children: [
          /* @__PURE__ */ e(pe, { className: "w-4 h-4 shrink-0" }),
          /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-wider", children: "NABL Accredited · Global Lab, Bhubaneswar" })
        ] }),
        /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium text-neutral-900", children: "Certified Laboratory Test Results" }),
        /* @__PURE__ */ e("p", { className: "text-neutral-500 mt-1 text-sm max-w-xl", children: "Independent third-party concrete mix design and compressive strength testing as per IS 10262 : 2019 · IS 456 : 2000 · IS 9013 : 1978. All graphs reproduced from official test reports." })
      ] }),
      /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2 shrink-0", children: [
        { label: "M-20 + Graphene" },
        { label: "M-20 Control" },
        { label: "M-30 + Graphene" }
      ].map((p) => /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5 px-3 py-1.5 bg-white border border-neutral-200 rounded-lg text-xs", children: [
        /* @__PURE__ */ e(aa, { className: "w-3.5 h-3.5 text-green-600 shrink-0" }),
        /* @__PURE__ */ e("span", { className: "text-neutral-500", children: p.label })
      ] }, p.label)) })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex gap-2 border-b border-neutral-200", children: [
      { key: "m20", label: "M-20  ·  Graphene vs Control" },
      { key: "m30", label: "M-30  ·  with Graphene (R&D)" }
    ].map((p) => /* @__PURE__ */ e(
      "button",
      {
        onClick: () => l(p.key),
        className: `px-5 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${i === p.key ? "border-neutral-900 text-neutral-900" : "border-transparent text-neutral-500 hover:text-neutral-700"}`,
        children: p.label
      },
      p.key
    )) }),
    i === "m20" && /* @__PURE__ */ t("div", { className: "space-y-10", children: [
      /* @__PURE__ */ t("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ e(we, { label: "Cement Saved", value: "40", unit: "kg/m³", sub: "331 vs 371 — 10.8% less" }),
        /* @__PURE__ */ e(we, { label: "W/C Ratio", value: "0.48", sub: "vs 0.55 control · Denser mix" }),
        /* @__PURE__ */ e(we, { label: "Slump (Workability)", value: "160", unit: "mm", sub: "vs 130 mm control · Better flow" }),
        /* @__PURE__ */ e(we, { label: "28-Day Actual Strength", value: "29.0", unit: "MPa", sub: "Avg 3 cubes · NABL Certified", dark: !0 })
      ] }),
      /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-6", children: [
        /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-neutral-800 mb-1", children: "IS 10262 : 2019 Figure 1 — Free Water-Cement Ratio vs 28-Day Compressive Strength" }),
        /* @__PURE__ */ t("p", { className: "text-xs text-neutral-400 mb-1", children: [
          "Reference curves for OPC grade selection. All 3 mixes use ",
          /* @__PURE__ */ e("strong", { children: "OPC-53 (Curve 3)" }),
          ". Operating points show actual/ACT-equivalent strength achieved."
        ] }),
        /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-3 mb-4 text-xs", children: [
          /* @__PURE__ */ t("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e("span", { className: "inline-block w-4 h-0.5 bg-neutral-900 rounded" }),
            /* @__PURE__ */ e("span", { className: "font-semibold", children: "M-20 + Graphene" }),
            ": W/C 0.48 → 29.0 MPa (actual 28-day)"
          ] }),
          /* @__PURE__ */ t("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e("span", { className: "inline-block w-4 h-0.5 bg-neutral-400 rounded" }),
            /* @__PURE__ */ e("span", { className: "font-semibold", children: "M-20 Control" }),
            ": W/C 0.55 → 25.0 MPa (ACT equiv.)"
          ] })
        ] }),
        /* @__PURE__ */ e(O, { width: "100%", height: 280, children: /* @__PURE__ */ t(qe, { data: _t, margin: { top: 10, right: 30, bottom: 30, left: 10 }, children: [
          /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: "#f5f5f5" }),
          /* @__PURE__ */ e(
            _,
            {
              dataKey: "wc",
              type: "number",
              domain: [0.25, 0.65],
              tickCount: 9,
              tickFormatter: (p) => p.toFixed(2),
              tick: { fontSize: 10, fill: "#737373" },
              label: { value: "Free Water-Cement Ratio", position: "insideBottom", offset: -18, fontSize: 11, fill: "#525252" }
            }
          ),
          /* @__PURE__ */ e(
            U,
            {
              domain: [0, 80],
              tick: { fontSize: 10, fill: "#737373" },
              unit: " MPa",
              width: 52,
              label: { value: "28-Day Strength (N/mm²)", angle: -90, position: "insideLeft", offset: 10, fontSize: 11, fill: "#525252" }
            }
          ),
          /* @__PURE__ */ e(q, { content: /* @__PURE__ */ e(Le, {}) }),
          /* @__PURE__ */ e(ke, { verticalAlign: "top", wrapperStyle: { fontSize: 11, paddingBottom: 6 } }),
          /* @__PURE__ */ e(re, { type: "monotone", dataKey: "c1", stroke: "#d4d4d4", strokeWidth: 1.5, dot: !1, name: "Curve 1 — OPC-33", strokeDasharray: "5 3" }),
          /* @__PURE__ */ e(re, { type: "monotone", dataKey: "c2", stroke: "#a3a3a3", strokeWidth: 1.5, dot: !1, name: "Curve 2 — OPC-43", strokeDasharray: "5 3" }),
          /* @__PURE__ */ e(re, { type: "monotone", dataKey: "c3", stroke: "#525252", strokeWidth: 2, dot: !1, name: "Curve 3 — OPC-53 (used)" }),
          /* @__PURE__ */ e(
            fe,
            {
              y: 20,
              stroke: "#ef4444",
              strokeDasharray: "4 2",
              label: { value: "M-20 min (20 MPa)", position: "insideTopRight", fontSize: 9, fill: "#ef4444" }
            }
          ),
          /* @__PURE__ */ e(
            Nt,
            {
              x: 0.48,
              y: 29,
              r: 8,
              fill: "#171717",
              stroke: "white",
              strokeWidth: 2,
              label: { value: "M-20+G · 29 MPa", position: "top", fontSize: 10, fill: "#171717", fontWeight: 600 }
            }
          ),
          /* @__PURE__ */ e(
            Nt,
            {
              x: 0.55,
              y: 25,
              r: 7,
              fill: "#9ca3af",
              stroke: "white",
              strokeWidth: 2,
              label: { value: "M-20 Control · 25 MPa", position: "top", fontSize: 10, fill: "#6b7280" }
            }
          )
        ] }) }),
        /* @__PURE__ */ t("p", { className: "text-xs text-neutral-400 mt-2 flex items-start gap-1.5", children: [
          /* @__PURE__ */ e(ze, { className: "w-3.5 h-3.5 shrink-0 mt-0.5" }),
          "Operating points plot below Curve 3 because IS 10262 reference curves represent OPC-53 cement strength potential; actual concrete strength is lower due to aggregate ITZ effects. The Graphene mix (W/C 0.48, MODERATE exposure) achieves higher strength with stricter W/C than the control (W/C 0.55, MILD exposure)."
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-6", children: [
        /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-neutral-800 mb-1", children: "All-in Aggregate Combined Gradation — IS 383 : 2016, Table 10 (20mm Nominal Size)" }),
        /* @__PURE__ */ t("p", { className: "text-xs text-neutral-400 mb-4", children: [
          "Amber band = IS 383 tolerance zone (lower to upper limits). Aggregate proportions: ",
          /* @__PURE__ */ e("strong", { children: "M-20+G" }),
          " — 29.2% / 31.5% / 39.3% · ",
          /* @__PURE__ */ e("strong", { children: "M-20 Control" }),
          " — 28.4% / 30.9% / 40.6% (20mm / 10mm / Sand)"
        ] }),
        /* @__PURE__ */ e(O, { width: "100%", height: 260, children: /* @__PURE__ */ t(qe, { data: Ut, margin: { top: 5, right: 20, bottom: 30, left: 10 }, children: [
          /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: "#f5f5f5" }),
          /* @__PURE__ */ e(
            _,
            {
              dataKey: "sieve",
              tick: { fontSize: 10, fill: "#737373" },
              label: { value: "IS Sieve Size (mm)", position: "insideBottom", offset: -18, fontSize: 11, fill: "#525252" }
            }
          ),
          /* @__PURE__ */ e(
            U,
            {
              domain: [0, 105],
              tick: { fontSize: 10, fill: "#737373" },
              unit: "%",
              width: 38,
              label: { value: "Cumulative % Passing", angle: -90, position: "insideLeft", offset: 10, fontSize: 11, fill: "#525252" }
            }
          ),
          /* @__PURE__ */ e(q, { content: /* @__PURE__ */ e(Le, {}) }),
          /* @__PURE__ */ e(ke, { verticalAlign: "top", wrapperStyle: { fontSize: 11, paddingBottom: 6 } }),
          /* @__PURE__ */ e($e, { type: "monotone", dataKey: "lower", stackId: "b", fill: "transparent", stroke: "none", legendType: "none", name: "" }),
          /* @__PURE__ */ e($e, { type: "monotone", dataKey: "band", stackId: "b", fill: "#fef3c7", fillOpacity: 0.7, stroke: "#f59e0b", strokeDasharray: "4 2", strokeWidth: 1.5, dot: !1, name: "IS 383 Tolerance Band" }),
          /* @__PURE__ */ e(re, { type: "monotone", dataKey: "m20G", stroke: "#171717", strokeWidth: 2.5, dot: { r: 5, fill: "#171717", stroke: "white", strokeWidth: 1 }, name: "M-20 + Graphene" }),
          /* @__PURE__ */ e(re, { type: "monotone", dataKey: "m20C", stroke: "#9ca3af", strokeWidth: 2, strokeDasharray: "6 2", dot: { r: 4, fill: "#9ca3af", stroke: "white", strokeWidth: 1 }, name: "M-20 Control" })
        ] }) }),
        /* @__PURE__ */ e("div", { className: "mt-3 overflow-x-auto", children: /* @__PURE__ */ t("table", { className: "text-xs w-full min-w-[480px]", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ t("tr", { className: "border-b border-neutral-200", children: [
            /* @__PURE__ */ e("th", { className: "py-1.5 px-3 text-left text-neutral-500 font-semibold", children: "Sieve (mm)" }),
            /* @__PURE__ */ e("th", { className: "py-1.5 px-3 text-right text-neutral-500 font-semibold", children: "IS Lower (%)" }),
            /* @__PURE__ */ e("th", { className: "py-1.5 px-3 text-right text-neutral-500 font-semibold", children: "IS Upper (%)" }),
            /* @__PURE__ */ e("th", { className: "py-1.5 px-3 text-right text-neutral-900 font-semibold", children: "M-20 + Graphene" }),
            /* @__PURE__ */ e("th", { className: "py-1.5 px-3 text-right text-neutral-500 font-semibold", children: "M-20 Control" })
          ] }) }),
          /* @__PURE__ */ e("tbody", { className: "divide-y divide-neutral-100", children: [
            ["40", 100, 100, 100, 100],
            ["20", 95, 100, 95.6, 95.7],
            ["4.75", 30, 50, 42.8, 44.1],
            ["0.6", 10, 35, 21.4, 22.2],
            ["0.15", 0, 6, 0.7, 0.8]
          ].map(([p, u, b, r, h]) => /* @__PURE__ */ t("tr", { children: [
            /* @__PURE__ */ e("td", { className: "py-1.5 px-3 font-mono", children: p }),
            /* @__PURE__ */ e("td", { className: "py-1.5 px-3 text-right font-mono text-neutral-500", children: u }),
            /* @__PURE__ */ e("td", { className: "py-1.5 px-3 text-right font-mono text-neutral-500", children: b }),
            /* @__PURE__ */ e("td", { className: "py-1.5 px-3 text-right font-mono font-semibold text-neutral-900", children: r }),
            /* @__PURE__ */ e("td", { className: "py-1.5 px-3 text-right font-mono text-neutral-500", children: h })
          ] }, p)) })
        ] }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-6", children: [
        /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-neutral-800 mb-4", children: "Mix Design — Ingredient Quantities per m³" }),
        /* @__PURE__ */ e(O, { width: "100%", height: 220, children: /* @__PURE__ */ t(he, { data: Ar, layout: "vertical", margin: { top: 0, right: 30, bottom: 0, left: 90 }, barCategoryGap: "20%", children: [
          /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: "#f5f5f5", horizontal: !1 }),
          /* @__PURE__ */ e(_, { type: "number", tick: { fontSize: 10, fill: "#737373" }, unit: " kg" }),
          /* @__PURE__ */ e(U, { type: "category", dataKey: "ingredient", tick: { fontSize: 10, fill: "#525252" }, width: 90 }),
          /* @__PURE__ */ e(q, { content: /* @__PURE__ */ e(Le, {}) }),
          /* @__PURE__ */ e(ke, { wrapperStyle: { fontSize: 11 } }),
          /* @__PURE__ */ e(ne, { dataKey: "graphene", name: "M-20 + Graphene", fill: "#171717", radius: [0, 4, 4, 0] }),
          /* @__PURE__ */ e(ne, { dataKey: "control", name: "M-20 Control", fill: "#e5e7eb", radius: [0, 4, 4, 0] })
        ] }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-6", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ e("span", { className: "w-2.5 h-2.5 rounded-full bg-neutral-900 inline-block" }),
            /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-neutral-800", children: "M-20 + Graphene — Cube Results" })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-xs text-neutral-400 mb-1", children: "Casting: 07-07-2025 · Cube 150×150×150 mm" }),
          /* @__PURE__ */ e("p", { className: "text-xs font-semibold text-neutral-600 mt-3 mb-1", children: "ACT (1-day, IS 9013) → R₂₈ Equivalent" }),
          /* @__PURE__ */ e(it, { cubes: Sr, type: "act" }),
          /* @__PURE__ */ e("p", { className: "text-xs font-semibold text-neutral-600 mt-4 mb-1", children: "Actual 28-Day Compression Test" }),
          /* @__PURE__ */ e(it, { cubes: Cr, type: "28d" }),
          /* @__PURE__ */ t("div", { className: "mt-3 bg-green-50 border border-green-200 rounded-xl p-3 text-xs text-green-800", children: [
            /* @__PURE__ */ e("strong", { children: "Average 28-day: 29.0 MPa" }),
            " · Exceeds M-20 characteristic (20 MPa) by ",
            /* @__PURE__ */ e("strong", { children: "+45%" })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-6", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ e("span", { className: "w-2.5 h-2.5 rounded-full bg-neutral-400 inline-block" }),
            /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-neutral-800", children: "M-20 Control — Cube Results" })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-xs text-neutral-400 mb-1", children: "Casting: 14-07-2025 · Cube 150×150×150 mm" }),
          /* @__PURE__ */ e("p", { className: "text-xs font-semibold text-neutral-600 mt-3 mb-1", children: "ACT (1-day, IS 9013) → R₂₈ Equivalent" }),
          /* @__PURE__ */ e(it, { cubes: Pr, type: "act" }),
          /* @__PURE__ */ t("div", { className: "mt-4 bg-neutral-50 border border-neutral-200 rounded-xl p-3 text-xs text-neutral-600", children: [
            /* @__PURE__ */ e("strong", { children: "ACT Average: 25.0 MPa equiv." }),
            " · No actual 28-day cube test in this report (ACT-only study period: 5 days)."
          ] }),
          /* @__PURE__ */ t("div", { className: "mt-3 bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800", children: [
            /* @__PURE__ */ e("strong", { children: "Exposure comparison:" }),
            " Graphene mix = MODERATE (W/C ≤ 0.50 per IS 456) · Control = MILD (W/C ≤ 0.55). Graphene meets a stricter exposure condition at lower W/C."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e(Ke, { title: "Individual Aggregate Sieve Analysis — IS 383 : 2016 (Common to All 3 Reports)", children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
        /* @__PURE__ */ e("p", { className: "text-xs text-neutral-500", children: "All 3 reports use identical aggregate sources: Natural Sand from Mahanadi River · Coarse aggregate from Gudhiakatani, Odisha. SG: CA 2.89, Sand 2.62. WA%: 20mm 0.16, 10mm 0.38, Sand 0.73. DLBD: 1.54 kg/l (all)." }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ e(Re, { data: Qt, title: "Natural Sand (Mahanadi)", zone: "II" }),
          /* @__PURE__ */ e(Re, { data: Xt, title: "20mm Coarse Aggregate" }),
          /* @__PURE__ */ e(Re, { data: Zt, title: "10mm Coarse Aggregate" })
        ] }),
        /* @__PURE__ */ t("div", { className: "text-xs text-neutral-400 flex items-start gap-1.5 bg-neutral-50 rounded-lg p-3 border border-neutral-200", children: [
          /* @__PURE__ */ e(ze, { className: "w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-500" }),
          /* @__PURE__ */ e("span", { children: "10mm CA passes 86.4% at 12.5mm sieve (IS 383 requires 100%). This grading deviation is within normal site variation for single-size aggregate and is compensated by the combined all-in grading which meets IS 383 Table 10 requirements at all sieves." })
        ] })
      ] }) }),
      /* @__PURE__ */ e(Ke, { title: "M-20 + Graphene Full Mix Proportions (SSD & Dry)", badge: "M-20 + Graphene", children: /* @__PURE__ */ t("div", { className: "space-y-6", children: [
        /* @__PURE__ */ e("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 bg-neutral-50 rounded-xl p-4 text-xs", children: [
          ["Grade", "M-20 (RCC)"],
          ["Exposure", "MODERATE"],
          ["W/C", "0.48"],
          ["Target Mean", "26.6 N/mm²"],
          ["Slump", "160 mm"],
          ["Placing", "Pumpable"],
          ["Admixture", "Graphene PC · 0.8%"],
          ["Period", "02/07 – 04/08/2025"]
        ].map(([p, u]) => /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("span", { className: "block font-semibold text-neutral-900", children: p }),
          u
        ] }, p)) }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-xs font-semibold text-neutral-700 mb-2", children: "SSD Condition" }),
          /* @__PURE__ */ e(lt, { rows: c })
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-xs font-semibold text-neutral-700 mb-2", children: "Dry Condition" }),
          /* @__PURE__ */ e(lt, { rows: d })
        ] })
      ] }) }),
      /* @__PURE__ */ e(Ke, { title: "M-20 Control Full Mix Proportions (SSD & Dry)", badge: "M-20 Control", children: /* @__PURE__ */ t("div", { className: "space-y-6", children: [
        /* @__PURE__ */ e("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 bg-neutral-50 rounded-xl p-4 text-xs", children: [
          ["Grade", "M-20 (RCC)"],
          ["Exposure", "MILD"],
          ["W/C", "0.55"],
          ["Target Mean", "26.6 N/mm²"],
          ["Slump", "130 mm"],
          ["Placing", "Pumpable"],
          ["Admixture", "None"],
          ["Period", "10/07 – 15/07/2025"]
        ].map(([p, u]) => /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("span", { className: "block font-semibold text-neutral-900", children: p }),
          u
        ] }, p)) }),
        /* @__PURE__ */ e(lt, { rows: a })
      ] }) })
    ] }),
    i === "m30" && /* @__PURE__ */ t("div", { className: "space-y-10", children: [
      /* @__PURE__ */ t("div", { className: "bg-neutral-900 text-white rounded-2xl p-8 md:p-10 relative overflow-hidden", children: [
        /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ t("div", { className: "relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-neutral-800", children: [
          /* @__PURE__ */ t("div", { className: "md:pr-8", children: [
            /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 bg-green-900/40 text-green-400 rounded-lg text-xs font-bold uppercase tracking-wider mb-4", children: [
              /* @__PURE__ */ e(ct, { className: "w-3.5 h-3.5" }),
              "M-30 R&D Mix"
            ] }),
            /* @__PURE__ */ e("h4", { className: "text-xl font-display font-medium mb-2", children: "Significantly Exceeds Grade Target" }),
            /* @__PURE__ */ t("p", { className: "text-neutral-400 text-sm leading-relaxed", children: [
              "M-30 mix with Monoatom Graphene admixture achieved ACT-equivalent 28-day strength of",
              /* @__PURE__ */ e("strong", { className: "text-white", children: " 49.5 MPa" }),
              " — 65% above M-30's characteristic strength of 30 MPa. Test witnessed by Mr. Sushant Pattnaik (Scientist)."
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col justify-center md:px-8", children: [
            /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider mb-1", children: "ACT Equiv. 28-Day Avg" }),
            /* @__PURE__ */ t("div", { className: "text-5xl font-display font-bold text-white mb-1", children: [
              "49.5 ",
              /* @__PURE__ */ e("span", { className: "text-2xl font-normal text-neutral-400", children: "MPa" })
            ] }),
            /* @__PURE__ */ e("div", { className: "text-xs text-green-400 font-semibold", children: "Target mean: 38.25 MPa (IS 10262)" })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col justify-center md:pl-8 gap-4", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 mb-0.5", children: "W/C Ratio" }),
              /* @__PURE__ */ e("div", { className: "text-2xl font-display font-medium", children: "0.37" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500", children: "Dense microstructure" })
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 mb-0.5", children: "Initial Slump" }),
              /* @__PURE__ */ e("div", { className: "text-2xl font-display font-medium", children: "220 mm" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500", children: "vs 150 mm design target" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ e(we, { label: "Cement Content", value: "422", unit: " kg/m³", sub: "OPC-53 · Ultratech" }),
        /* @__PURE__ */ e(we, { label: "W/C Ratio", value: "0.37", sub: "Target mean 38.25 N/mm²" }),
        /* @__PURE__ */ e(we, { label: "Admixture Dose", value: "0.8%", sub: "3.4 kg/m³ · Monoatom PC" }),
        /* @__PURE__ */ e(we, { label: "ACT Equiv. R₂₈", value: "49.5", unit: " MPa", sub: "+29% above target mean", dark: !0 })
      ] }),
      /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-6", children: [
        /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-neutral-800 mb-1", children: "IS 10262 : 2019 Figure 1 — Free Water-Cement Ratio vs 28-Day Compressive Strength" }),
        /* @__PURE__ */ t("p", { className: "text-xs text-neutral-400 mb-1", children: [
          "All 3 IS reference curves shown. M-30 + Graphene mix uses W/C = 0.37 on ",
          /* @__PURE__ */ e("strong", { children: "Curve 3 (OPC-53)" }),
          "."
        ] }),
        /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-3 mb-4 text-xs", children: /* @__PURE__ */ t("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e("span", { className: "inline-block w-4 h-0.5 bg-green-600 rounded" }),
          /* @__PURE__ */ e("span", { className: "font-semibold", children: "M-30 + Graphene" }),
          ": W/C 0.37 → 49.5 MPa (ACT equiv.)"
        ] }) }),
        /* @__PURE__ */ e(O, { width: "100%", height: 280, children: /* @__PURE__ */ t(qe, { data: _t, margin: { top: 10, right: 30, bottom: 30, left: 10 }, children: [
          /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: "#f5f5f5" }),
          /* @__PURE__ */ e(
            _,
            {
              dataKey: "wc",
              type: "number",
              domain: [0.25, 0.65],
              tickCount: 9,
              tickFormatter: (p) => p.toFixed(2),
              tick: { fontSize: 10, fill: "#737373" },
              label: { value: "Free Water-Cement Ratio", position: "insideBottom", offset: -18, fontSize: 11, fill: "#525252" }
            }
          ),
          /* @__PURE__ */ e(
            U,
            {
              domain: [0, 80],
              tick: { fontSize: 10, fill: "#737373" },
              unit: " MPa",
              width: 52,
              label: { value: "28-Day Strength (N/mm²)", angle: -90, position: "insideLeft", offset: 10, fontSize: 11, fill: "#525252" }
            }
          ),
          /* @__PURE__ */ e(q, { content: /* @__PURE__ */ e(Le, {}) }),
          /* @__PURE__ */ e(ke, { verticalAlign: "top", wrapperStyle: { fontSize: 11, paddingBottom: 6 } }),
          /* @__PURE__ */ e(re, { type: "monotone", dataKey: "c1", stroke: "#d4d4d4", strokeWidth: 1.5, dot: !1, name: "Curve 1 — OPC-33", strokeDasharray: "5 3" }),
          /* @__PURE__ */ e(re, { type: "monotone", dataKey: "c2", stroke: "#a3a3a3", strokeWidth: 1.5, dot: !1, name: "Curve 2 — OPC-43", strokeDasharray: "5 3" }),
          /* @__PURE__ */ e(re, { type: "monotone", dataKey: "c3", stroke: "#525252", strokeWidth: 2, dot: !1, name: "Curve 3 — OPC-53 (used)" }),
          /* @__PURE__ */ e(
            fe,
            {
              y: 30,
              stroke: "#ef4444",
              strokeDasharray: "4 2",
              label: { value: "M-30 min (30 MPa)", position: "insideTopRight", fontSize: 9, fill: "#ef4444" }
            }
          ),
          /* @__PURE__ */ e(
            fe,
            {
              y: 38.25,
              stroke: "#f97316",
              strokeDasharray: "4 2",
              label: { value: "Target mean (38.25 MPa)", position: "insideTopLeft", fontSize: 9, fill: "#f97316" }
            }
          ),
          /* @__PURE__ */ e(
            Nt,
            {
              x: 0.37,
              y: 49.5,
              r: 9,
              fill: "#059669",
              stroke: "white",
              strokeWidth: 2,
              label: { value: "M-30+G · 49.5 MPa (ACT)", position: "top", fontSize: 10, fill: "#059669", fontWeight: 600 }
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-6", children: [
        /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-neutral-800 mb-1", children: "All-in Aggregate Combined Gradation — IS 383 : 2016, Table 10 (20mm Nominal Size)" }),
        /* @__PURE__ */ e("p", { className: "text-xs text-neutral-400 mb-4", children: "Aggregate proportions: 20mm 27.8% · 10mm 30.1% · River Sand 42.1%. Combined grading falls within IS 383 tolerance band at all sieve sizes." }),
        /* @__PURE__ */ e(O, { width: "100%", height: 250, children: /* @__PURE__ */ t(qe, { data: Ut, margin: { top: 5, right: 20, bottom: 30, left: 10 }, children: [
          /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: "#f5f5f5" }),
          /* @__PURE__ */ e(
            _,
            {
              dataKey: "sieve",
              tick: { fontSize: 10, fill: "#737373" },
              label: { value: "IS Sieve Size (mm)", position: "insideBottom", offset: -18, fontSize: 11, fill: "#525252" }
            }
          ),
          /* @__PURE__ */ e(
            U,
            {
              domain: [0, 105],
              tick: { fontSize: 10, fill: "#737373" },
              unit: "%",
              width: 38,
              label: { value: "Cumulative % Passing", angle: -90, position: "insideLeft", offset: 10, fontSize: 11, fill: "#525252" }
            }
          ),
          /* @__PURE__ */ e(q, { content: /* @__PURE__ */ e(Le, {}) }),
          /* @__PURE__ */ e(ke, { verticalAlign: "top", wrapperStyle: { fontSize: 11, paddingBottom: 6 } }),
          /* @__PURE__ */ e($e, { type: "monotone", dataKey: "lower", stackId: "b", fill: "transparent", stroke: "none", legendType: "none", name: "" }),
          /* @__PURE__ */ e($e, { type: "monotone", dataKey: "band", stackId: "b", fill: "#fef3c7", fillOpacity: 0.7, stroke: "#f59e0b", strokeDasharray: "4 2", strokeWidth: 1.5, dot: !1, name: "IS 383 Tolerance Band" }),
          /* @__PURE__ */ e(re, { type: "monotone", dataKey: "m30G", stroke: "#059669", strokeWidth: 2.5, dot: { r: 5, fill: "#059669", stroke: "white", strokeWidth: 1 }, name: "M-30 + Graphene" })
        ] }) }),
        /* @__PURE__ */ e("div", { className: "mt-3 overflow-x-auto", children: /* @__PURE__ */ t("table", { className: "text-xs w-full min-w-[400px]", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ t("tr", { className: "border-b border-neutral-200", children: [
            /* @__PURE__ */ e("th", { className: "py-1.5 px-3 text-left text-neutral-500 font-semibold", children: "Sieve (mm)" }),
            /* @__PURE__ */ e("th", { className: "py-1.5 px-3 text-right text-neutral-500 font-semibold", children: "IS Lower (%)" }),
            /* @__PURE__ */ e("th", { className: "py-1.5 px-3 text-right text-neutral-500 font-semibold", children: "IS Upper (%)" }),
            /* @__PURE__ */ e("th", { className: "py-1.5 px-3 text-right text-green-700 font-semibold", children: "M-30 + Graphene" })
          ] }) }),
          /* @__PURE__ */ e("tbody", { className: "divide-y divide-neutral-100", children: [["40", 100, 100, 100], ["20", 95, 100, 95.8], ["4.75", 30, 50, 45.4], ["0.6", 10, 35, 23], ["0.15", 0, 6, 0.8]].map(([p, u, b, r]) => /* @__PURE__ */ t("tr", { children: [
            /* @__PURE__ */ e("td", { className: "py-1.5 px-3 font-mono", children: p }),
            /* @__PURE__ */ e("td", { className: "py-1.5 px-3 text-right font-mono text-neutral-500", children: u }),
            /* @__PURE__ */ e("td", { className: "py-1.5 px-3 text-right font-mono text-neutral-500", children: b }),
            /* @__PURE__ */ e("td", { className: "py-1.5 px-3 text-right font-mono font-semibold text-green-800", children: r })
          ] }, p)) })
        ] }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-6", children: [
          /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-neutral-800 mb-4", children: "M-30 Strength: Target vs Achieved" }),
          /* @__PURE__ */ e(O, { width: "100%", height: 220, children: /* @__PURE__ */ t(he, { data: Jt, barCategoryGap: "30%", margin: { top: 5, right: 20, bottom: 20, left: 0 }, children: [
            /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: "#f5f5f5" }),
            /* @__PURE__ */ e(_, { dataKey: "name", tick: { fontSize: 9, fill: "#737373" } }),
            /* @__PURE__ */ e(U, { domain: [0, 60], tick: { fontSize: 10, fill: "#737373" }, unit: " MPa", width: 48 }),
            /* @__PURE__ */ e(q, { content: /* @__PURE__ */ e(Le, {}) }),
            /* @__PURE__ */ e(fe, { y: 30, stroke: "#ef4444", strokeDasharray: "4 2", label: { value: "30 MPa", position: "right", fontSize: 9, fill: "#ef4444" } }),
            /* @__PURE__ */ e(ne, { dataKey: "value", name: "Strength (MPa)", radius: [6, 6, 0, 0], children: Jt.map((p, u) => /* @__PURE__ */ e(Me, { fill: p.fill }, u)) })
          ] }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-6", children: [
          /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-neutral-800 mb-1", children: "ACT Cube Results — IS 9013 : 1978" }),
          /* @__PURE__ */ e("p", { className: "text-xs text-neutral-400 mb-3", children: "Casting: 31-10-2025 · Testing: 01-11-2025 · 150×150×150 mm" }),
          /* @__PURE__ */ e(it, { cubes: Mr, type: "act" }),
          /* @__PURE__ */ t("div", { className: "mt-3 grid grid-cols-2 gap-3 text-xs", children: [
            /* @__PURE__ */ t("div", { className: "bg-green-50 border border-green-200 rounded-xl p-3", children: [
              /* @__PURE__ */ e("div", { className: "font-semibold text-green-900", children: "Average Ra" }),
              /* @__PURE__ */ t("div", { className: "text-2xl font-display font-medium text-green-800", children: [
                "25.5 ",
                /* @__PURE__ */ e("span", { className: "text-sm font-normal", children: "MPa" })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "bg-neutral-900 rounded-xl p-3", children: [
              /* @__PURE__ */ e("div", { className: "font-semibold text-neutral-400 text-xs", children: "Avg R₂₈ Equiv." }),
              /* @__PURE__ */ t("div", { className: "text-2xl font-display font-medium text-white", children: [
                "49.5 ",
                /* @__PURE__ */ e("span", { className: "text-sm font-normal text-neutral-400", children: "MPa" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e(Ke, { title: "Individual Aggregate Sieve Analysis — IS 383 : 2016 (Same aggregates as M-20 reports)", children: /* @__PURE__ */ e("div", { className: "space-y-4", children: /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ e(Re, { data: Qt, title: "Natural Sand (Zone II)", zone: "II" }),
        /* @__PURE__ */ e(Re, { data: Xt, title: "20mm Coarse Aggregate" }),
        /* @__PURE__ */ e(Re, { data: Zt, title: "10mm Coarse Aggregate" })
      ] }) }) }),
      /* @__PURE__ */ e(Ke, { title: "M-30 + Graphene Full Mix Proportions (SSD)", badge: "M-30 + Graphene", children: /* @__PURE__ */ t("div", { className: "space-y-6", children: [
        /* @__PURE__ */ e("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 bg-neutral-50 rounded-xl p-4 text-xs", children: [
          ["Grade", "M-30 (RCC)"],
          ["Exposure", "MODERATE"],
          ["W/C", "0.37"],
          ["Target Mean", "38.25 N/mm²"],
          ["Design Slump", "150 mm"],
          ["Initial Slump", "220 mm (actual)"],
          ["Admixture", "Monoatom PC · 0.8%"],
          ["Casting", "31/10/2025"]
        ].map(([p, u]) => /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("span", { className: "block font-semibold text-neutral-900", children: p }),
          u
        ] }, p)) }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-xs font-semibold text-neutral-700 mb-2", children: "SSD Condition" }),
          /* @__PURE__ */ e(lt, { rows: s })
        ] }),
        /* @__PURE__ */ e("p", { className: "text-xs text-neutral-400", children: "Total aggregate volume = 0.696 m³ per m³ concrete · Coarse: 20mm 48% + 10mm 52% split · Plasticizer reduction: 25% · Pumpable mix reduction: 8%." })
      ] }) })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2 pt-2 border-t border-neutral-100", children: ["IS 10262 : 2019 — Mix Design", "IS 456 : 2000 (RA 2021 Amd-5) — Structural Concrete", "IS 9013 : 1978 (RA 2013) — Accelerated Curing Test", "IS 383 : 2016 — Aggregates", "IS 516 Part-1 Sec-1 — Cube Testing"].map((p) => /* @__PURE__ */ e("span", { className: "text-xs px-2.5 py-1 bg-neutral-100 text-neutral-500 rounded-lg border border-neutral-200", children: p }, p)) })
  ] });
}, sn = ({ steps: i, title: l = "How It Works", theme: c = "light" }) => {
  const d = c === "dark", a = d ? "bg-neutral-900" : "bg-white", s = d ? "text-white" : "text-neutral-900", p = d ? "text-neutral-400" : "text-neutral-500", u = d ? "border-neutral-800" : "border-neutral-200", b = (r, h) => {
    if (r.icon) return r.icon;
    const m = [zt, La, ra, We];
    return m[h % m.length];
  };
  return /* @__PURE__ */ t("div", { className: `${a} rounded-3xl border ${u} shadow-xl overflow-hidden relative`, children: [
    d && /* @__PURE__ */ e("div", { className: "absolute inset-0 pointer-events-none", children: /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" }) }),
    /* @__PURE__ */ t("div", { className: "p-8 md:p-16 relative z-10", children: [
      /* @__PURE__ */ t("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8", children: [
        /* @__PURE__ */ t("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${d ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" : "bg-indigo-50 text-indigo-700 border border-indigo-100"}`, children: [
            /* @__PURE__ */ e(zt, { className: "w-3 h-3" }),
            /* @__PURE__ */ e("span", { children: "Integration Protocol" })
          ] }),
          /* @__PURE__ */ e("h3", { className: `text-4xl md:text-5xl font-display font-medium ${s} mb-4 tracking-tight`, children: l }),
          /* @__PURE__ */ e("p", { className: `text-xl ${p} font-light`, children: "A seamless, zero-disruption integration model designed for rapid deployment." })
        ] }),
        /* @__PURE__ */ e("div", { className: "flex gap-6 border-l border-neutral-200 dark:border-neutral-800 pl-6", children: /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("div", { className: `text-3xl font-display font-bold ${s} mb-1`, children: [
            "14",
            /* @__PURE__ */ e("span", { className: "text-base font-normal text-neutral-500 ml-1", children: "days" })
          ] }),
          /* @__PURE__ */ e("div", { className: "text-xs font-bold uppercase tracking-wider text-neutral-400", children: "Typical Deployment" })
        ] }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ e("div", { className: "hidden lg:block absolute top-[3.5rem] left-8 right-8 h-1 bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800 rounded-full z-0", children: /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-20 blur-sm" }) }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: i.map((r, h) => {
          const m = b(r, h);
          return /* @__PURE__ */ e("div", { className: "relative z-10 group", children: /* @__PURE__ */ t("div", { className: "mb-8 flex items-center gap-6 lg:block relative", children: [
            /* @__PURE__ */ t("div", { className: "lg:mb-8 relative flex justify-center lg:justify-start", children: [
              /* @__PURE__ */ t("div", { className: `w-24 h-24 rounded-3xl ${d ? "bg-neutral-900 border-neutral-800 shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)]" : "bg-white border-neutral-100 shadow-xl"} border flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500`, children: [
                /* @__PURE__ */ e("div", { className: "absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
                /* @__PURE__ */ e(m, { className: `w-10 h-10 ${d ? "text-white" : "text-neutral-900"} relative z-20`, strokeWidth: 1.5 }),
                /* @__PURE__ */ e("div", { className: `absolute -top-3 -right-3 w-8 h-8 rounded-full ${d ? "bg-indigo-600 text-white" : "bg-neutral-900 text-white"} flex items-center justify-center text-sm font-bold shadow-lg border-4 ${d ? "border-neutral-900" : "border-white"}`, children: h + 1 })
              ] }),
              /* @__PURE__ */ e("div", { className: "lg:hidden absolute left-12 top-24 bottom-[-4rem] w-0.5 bg-neutral-200 dark:bg-neutral-800 -z-10" })
            ] }),
            /* @__PURE__ */ t("div", { className: "pt-2", children: [
              /* @__PURE__ */ e("h4", { className: `text-xl font-bold ${s} mb-3 group-hover:text-indigo-500 transition-colors`, children: r.title }),
              /* @__PURE__ */ e("p", { className: `text-sm ${p} leading-relaxed`, children: r.description }),
              r.duration && /* @__PURE__ */ t("div", { className: `mt-4 inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider ${d ? "text-indigo-400 bg-indigo-500/10" : "text-indigo-700 bg-indigo-50"} px-2 py-1 rounded`, children: [
                /* @__PURE__ */ e(Pe, { className: "w-3 h-3" }),
                r.duration
              ] })
            ] })
          ] }) }, h);
        }) })
      ] }),
      /* @__PURE__ */ e("div", { className: `mt-20 pt-10 border-t ${u}`, children: /* @__PURE__ */ t("div", { className: "flex flex-col md:flex-row justify-between items-center gap-6", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ e("div", { className: `w-12 h-12 rounded-full ${d ? "bg-green-500/20 text-green-400" : "bg-green-50 text-green-600"} flex items-center justify-center`, children: /* @__PURE__ */ e(We, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("h5", { className: `font-bold ${s}`, children: "Guaranteed Performance" }),
            /* @__PURE__ */ e("p", { className: `text-sm ${p}`, children: "Pilot program results validated by third-party testing." })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "flex gap-2", children: [1, 2, 3].map((r, h) => /* @__PURE__ */ e("div", { className: `w-2 h-2 rounded-full ${d ? "bg-neutral-800" : "bg-neutral-200"}` }, h)) })
      ] }) })
    ] })
  ] });
}, on = ({
  productName: i,
  pilotDetails: l,
  benefits: c,
  pricing: d,
  theme: a = "light"
}) => {
  const s = a === "dark", p = s ? "bg-neutral-900" : "bg-white", u = s ? "text-white" : "text-neutral-900", b = s ? "text-neutral-400" : "text-neutral-500", r = s ? "border-neutral-700" : "border-neutral-200", h = s ? "bg-neutral-800" : "bg-neutral-50", m = [
    { day: "Week 1", title: "Setup & Baseline", desc: "Mix design review & initial metrics", icon: ut },
    { day: "Week 2", title: "Controlled Testing", desc: "Batch production & fresh property analysis", icon: W },
    { day: "Week 3", title: "Performance Data", desc: "Strength gain & durability verification", icon: A },
    { day: "Week 4", title: "Evaluation", desc: "ROI modeling & scale-up roadmap", icon: mt }
  ];
  return /* @__PURE__ */ e("div", { className: `${p} rounded-2xl border ${r} overflow-hidden`, children: /* @__PURE__ */ t("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ e("div", { className: `p-8 md:p-12 bg-gradient-to-br ${s ? "from-neutral-900 to-neutral-800" : "from-neutral-50 to-white"} border-b ${r}`, children: /* @__PURE__ */ t("div", { className: "flex flex-col md:flex-row md:items-start md:justify-between gap-8", children: [
      /* @__PURE__ */ t("div", { className: "md:w-1/2", children: [
        /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-6 ${s ? "bg-blue-900/30 text-blue-400" : "bg-blue-50 text-blue-700"}`, children: [
          /* @__PURE__ */ e(We, { className: "w-4 h-4" }),
          /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-wider", children: "Risk-Free Validation" })
        ] }),
        /* @__PURE__ */ t("h3", { className: `text-3xl font-display font-medium ${u} mb-4`, children: [
          "Performance ",
          /* @__PURE__ */ e("span", { className: "text-blue-500", children: "Pilot" })
        ] }),
        /* @__PURE__ */ t("p", { className: `text-lg ${b} mb-8 leading-relaxed`, children: [
          "Validate ",
          i,
          " in your specific operational environment before full-scale deployment."
        ] }),
        /* @__PURE__ */ e("div", { className: "space-y-4 mb-8", children: c.map((g, w) => /* @__PURE__ */ t("div", { className: "flex items-start gap-3 group", children: [
          /* @__PURE__ */ e(ve, { className: `w-5 h-5 ${s ? "text-blue-500" : "text-blue-600"} mt-0.5 group-hover:scale-110 transition-transform` }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: `font-medium ${u}`, children: g.title }),
            /* @__PURE__ */ e("div", { className: `text-xs ${b}`, children: g.description })
          ] })
        ] }, w)) })
      ] }),
      d && /* @__PURE__ */ t("div", { className: `md:w-1/3 p-6 rounded-xl ${s ? "bg-blue-900/10 border border-blue-800/30" : "bg-blue-50 border border-blue-100"}`, children: [
        /* @__PURE__ */ e("div", { className: "text-xs text-blue-500 uppercase font-bold mb-1", children: "Program Investment" }),
        /* @__PURE__ */ t("div", { className: "flex items-baseline gap-2", children: [
          /* @__PURE__ */ e("span", { className: `text-2xl font-mono font-bold ${u}`, children: d.cost }),
          /* @__PURE__ */ e("span", { className: `text-xs ${b}`, children: "/ 30 Days" })
        ] }),
        d.note && /* @__PURE__ */ e("div", { className: "text-[10px] text-blue-500/80 mt-2 pt-2 border-t border-blue-500/20", children: d.note })
      ] })
    ] }) }),
    /* @__PURE__ */ t("div", { className: "p-8 md:p-12", children: [
      /* @__PURE__ */ e("h4", { className: `text-xs font-bold uppercase tracking-wider ${b} mb-8`, children: "30-Day Execution Roadmap" }),
      /* @__PURE__ */ t("div", { className: "relative mb-12", children: [
        /* @__PURE__ */ e("div", { className: `absolute top-8 left-4 right-4 h-0.5 ${s ? "bg-neutral-800" : "bg-neutral-200"} hidden md:block` }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: m.map((g, w) => /* @__PURE__ */ t("div", { className: "relative z-10 group", children: [
          /* @__PURE__ */ e("div", { className: `w-16 h-16 rounded-xl ${s ? "bg-neutral-800 border-neutral-700" : "bg-white border-neutral-200"} border flex items-center justify-center mb-4 shadow-sm group-hover:border-blue-500 group-hover:shadow-blue-500/20 transition-all duration-300`, children: /* @__PURE__ */ e(g.icon, { className: `w-6 h-6 ${s ? "text-neutral-400" : "text-neutral-500"} group-hover:text-blue-500 transition-colors` }) }),
          /* @__PURE__ */ e("div", { className: `text-xs font-mono font-bold ${s ? "text-blue-400" : "text-blue-600"} mb-1`, children: g.day }),
          /* @__PURE__ */ e("div", { className: `font-bold ${u} text-sm mb-1`, children: g.title }),
          /* @__PURE__ */ e("div", { className: `text-xs ${b} leading-relaxed`, children: g.desc })
        ] }, w)) })
      ] }),
      /* @__PURE__ */ t("div", { className: `border-t ${r} pt-8`, children: [
        /* @__PURE__ */ e("h4", { className: `text-xs font-bold uppercase tracking-wider ${b} mb-6`, children: "Pilot Deliverables" }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: l.map((g, w) => /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${r} ${h} flex items-start gap-3`, children: [
          /* @__PURE__ */ e("div", { className: `p-2 rounded-lg ${s ? "bg-neutral-900" : "bg-white"}`, children: /* @__PURE__ */ e(mt, { className: `w-4 h-4 ${u}` }) }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: `font-medium ${u} text-sm`, children: g.title }),
            g.description && /* @__PURE__ */ e("div", { className: `text-xs ${b} mt-0.5`, children: g.description })
          ] })
        ] }, w)) })
      ] })
    ] })
  ] }) });
}, dn = ({
  productName: i,
  timeframe: l = "5 years",
  traditionalSolution: c,
  productSolution: d,
  breakdown: a,
  highlights: s = [
    { label: "Reduced Maintenance", value: "-40%", color: "green" },
    { label: "Longevity Multiplier", value: "2.5x", color: "blue" }
  ],
  theme: p = "light",
  copy: u
}) => {
  const b = {
    badgeLabel: "Cost Analysis",
    title: "Total Cost of Ownership",
    subtitle: "A comparative 5-year outlook on capital and operational expenditure.",
    projectedSavingsLabel: "Projected Savings",
    traditionalLabel: "Traditional",
    maintenanceLabel: "Maintenance",
    maintenanceValue: "High",
    lifecycleLabel: "Lifecycle",
    lifecycleValue: "Standard",
    withProductLabelTemplate: "With {productName}",
    netValueCreatedLabel: "Net Value Created",
    directCapitalRetainedTemplate: "Direct capital retained over {timeframe}.",
    paybackLabel: "Payback:",
    breakdownHeaders: {
      costCategory: "Cost Category",
      standard: "Standard",
      usingProductTemplate: "Using {productName}",
      delta: "Delta"
    }
  }, r = { ...b, ...u || {} };
  r.breakdownHeaders = { ...b.breakdownHeaders, ...u?.breakdownHeaders || {} };
  const h = (R, I) => typeof R != "string" ? R : R.replace(/\{(\w+)\}/g, (o, T) => {
    const N = I?.[T];
    return N == null ? "" : String(N);
  }), m = p === "dark", g = m ? "bg-neutral-900" : "bg-white", w = m ? "text-white" : "text-neutral-900", y = m ? "text-neutral-400" : "text-neutral-500", k = m ? "border-neutral-700" : "border-neutral-200", n = c.total - d.total, G = (n / c.total * 100).toFixed(1);
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${k} relative overflow-hidden shadow-2xl`, children: [
    m && /* @__PURE__ */ t(Ce, { children: [
      /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[120px] pointer-events-none" }),
      /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" })
    ] }),
    /* @__PURE__ */ t("div", { className: `p-8 md:p-12 relative z-10 ${g}`, children: [
      /* @__PURE__ */ t("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4 ${m ? "bg-green-900/30 text-green-400" : "bg-green-50 text-green-700"}`, children: [
            /* @__PURE__ */ e(Ta, { className: "w-4 h-4" }),
            /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-wider", children: r.badgeLabel })
          ] }),
          /* @__PURE__ */ e("h3", { className: `text-3xl lg:text-4xl font-display font-medium ${w} mb-2`, children: r.title }),
          /* @__PURE__ */ e("p", { className: `text-lg ${y} max-w-xl`, children: r.subtitle })
        ] }),
        /* @__PURE__ */ t("div", { className: "hidden md:flex flex-col items-end", children: [
          /* @__PURE__ */ e("div", { className: "text-sm font-bold uppercase tracking-widest text-green-500 mb-1", children: r.projectedSavingsLabel }),
          /* @__PURE__ */ t("div", { className: `text-5xl font-display font-bold ${m ? "text-white" : "text-neutral-900"}`, children: [
            G,
            "%"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16", children: [
        /* @__PURE__ */ t("div", { className: `p-8 rounded-2xl border ${k} ${m ? "bg-neutral-800/30 hover:bg-neutral-800/50" : "bg-neutral-50 hover:bg-white hover:shadow-lg"} transition-all duration-300 group`, children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-8 group-hover:opacity-100 opacity-60 transition-opacity", children: [
            /* @__PURE__ */ e("div", { className: "text-xs font-bold uppercase tracking-widest text-neutral-500", children: r.traditionalLabel }),
            /* @__PURE__ */ e(na, { className: "w-5 h-5 text-neutral-400 group-hover:text-red-400 transition-colors" })
          ] }),
          /* @__PURE__ */ t("div", { className: `text-3xl lg:text-4xl font-display font-medium ${w} mb-2 group-hover:scale-105 origin-left transition-transform`, children: [
            "₹",
            c.total.toLocaleString()
          ] }),
          /* @__PURE__ */ e("div", { className: "w-full bg-neutral-200 dark:bg-neutral-700 h-1.5 rounded-full overflow-hidden mb-6", children: /* @__PURE__ */ e("div", { className: "h-full bg-neutral-400 w-full" }) }),
          /* @__PURE__ */ t("div", { className: "space-y-2", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between text-xs", children: [
              /* @__PURE__ */ e("span", { className: y, children: r.maintenanceLabel }),
              /* @__PURE__ */ e("span", { className: `font-mono ${w}`, children: r.maintenanceValue })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex justify-between text-xs", children: [
              /* @__PURE__ */ e("span", { className: y, children: r.lifecycleLabel }),
              /* @__PURE__ */ e("span", { className: `font-mono ${w}`, children: r.lifecycleValue })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "p-1 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-green-500 shadow-2xl relative z-10 scale-105", children: /* @__PURE__ */ t("div", { className: `h-full w-full rounded-xl ${m ? "bg-neutral-900" : "bg-white"} p-7 flex flex-col relative overflow-hidden`, children: [
          /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 p-6 opacity-[0.03]", children: /* @__PURE__ */ e(Ie, { className: "w-32 h-32" }) }),
          /* @__PURE__ */ t("div", { className: "relative z-10", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-8", children: [
              /* @__PURE__ */ e("div", { className: "text-xs font-bold uppercase tracking-widest text-indigo-500", children: h(r.withProductLabelTemplate, { productName: i }) }),
              /* @__PURE__ */ e("div", { className: "p-1.5 bg-indigo-100 dark:bg-indigo-900/50 rounded text-indigo-600 dark:text-indigo-400", children: /* @__PURE__ */ e(ee, { className: "w-4 h-4" }) })
            ] }),
            /* @__PURE__ */ t("div", { className: `text-4xl lg:text-5xl font-display font-medium ${w} mb-2`, children: [
              "₹",
              d.total.toLocaleString()
            ] }),
            /* @__PURE__ */ e("div", { className: "w-full bg-neutral-100 dark:bg-neutral-800 h-1.5 rounded-full overflow-hidden mb-6", children: /* @__PURE__ */ e("div", { className: "h-full bg-gradient-to-r from-blue-500 to-indigo-500", style: { width: `${100 - G}%` } }) }),
            /* @__PURE__ */ e("div", { className: "space-y-3 pt-4 border-t border-neutral-100 dark:border-neutral-800", children: s.map((R, I) => /* @__PURE__ */ t("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ e("span", { className: y, children: R.label }),
              /* @__PURE__ */ e("span", { className: `font-bold font-mono ${R.color === "green" ? "text-green-500" : "text-blue-500"}`, children: R.value })
            ] }, I)) })
          ] })
        ] }) }),
        /* @__PURE__ */ t("div", { className: `p-8 rounded-2xl border ${k} ${m ? "bg-green-900/10 border-green-800/30" : "bg-green-50 border-green-100"} flex flex-col justify-center relative overflow-hidden`, children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-green-500/5 pulse-slow" }),
          /* @__PURE__ */ t("div", { className: "relative z-10", children: [
            /* @__PURE__ */ e("div", { className: "text-xs font-bold uppercase tracking-widest text-green-600 mb-4", children: r.netValueCreatedLabel }),
            /* @__PURE__ */ t("div", { className: "text-4xl font-display font-bold text-green-500 mb-2", children: [
              "₹",
              n.toLocaleString()
            ] }),
            /* @__PURE__ */ e("div", { className: `text-sm ${m ? "text-green-400" : "text-green-700"} mb-8 opacity-80`, children: h(r.directCapitalRetainedTemplate, { timeframe: l }) }),
            /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-lg ${m ? "bg-green-900/30 text-green-300" : "bg-green-100 text-green-800"}`, children: [
              /* @__PURE__ */ e(Pe, { className: "w-3.5 h-3.5" }),
              r.paybackLabel,
              " ",
              d.paybackPeriod || "< 18 mo"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: `border ${k} rounded-2xl overflow-hidden`, children: [
        /* @__PURE__ */ t("div", { className: "grid grid-cols-12 bg-neutral-100 dark:bg-neutral-800/50 p-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500", children: [
          /* @__PURE__ */ e("div", { className: "col-span-4", children: r.breakdownHeaders.costCategory }),
          /* @__PURE__ */ e("div", { className: "col-span-3 text-right", children: r.breakdownHeaders.standard }),
          /* @__PURE__ */ e("div", { className: "col-span-3 text-right", children: h(r.breakdownHeaders.usingProductTemplate, { productName: i }) }),
          /* @__PURE__ */ e("div", { className: "col-span-2 text-right", children: r.breakdownHeaders.delta })
        ] }),
        /* @__PURE__ */ e("div", { className: "divide-y divide-neutral-200 dark:divide-neutral-800", children: a.map((R, I) => {
          const o = R.traditional - R.withProduct, T = o < 0;
          return /* @__PURE__ */ t("div", { className: "grid grid-cols-12 p-5 items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors group", children: [
            /* @__PURE__ */ t("div", { className: "col-span-4", children: [
              /* @__PURE__ */ e("div", { className: `font-medium ${w} text-sm`, children: R.category }),
              /* @__PURE__ */ e("div", { className: `text-xs ${y} opacity-0 group-hover:opacity-100 transition-opacity`, children: R.description })
            ] }),
            /* @__PURE__ */ t("div", { className: `col-span-3 text-right font-mono text-sm ${y}`, children: [
              "₹",
              R.traditional.toLocaleString()
            ] }),
            /* @__PURE__ */ t("div", { className: `col-span-3 text-right font-mono text-sm font-medium ${m ? "text-indigo-300" : "text-indigo-700"}`, children: [
              "₹",
              R.withProduct.toLocaleString()
            ] }),
            /* @__PURE__ */ t("div", { className: `col-span-2 text-right font-mono text-sm font-bold ${T ? "text-neutral-400" : "text-green-500"}`, children: [
              T ? "-" : "+",
              "₹",
              Math.abs(o).toLocaleString()
            ] })
          ] }, I);
        }) })
      ] })
    ] })
  ] });
}, cn = ({
  productName: i,
  nationalData: l,
  internationalData: c,
  stats: d,
  theme: a = "light"
}) => {
  const [s, p] = M("national"), u = a === "dark", b = u ? "bg-neutral-900" : "bg-white", r = u ? "text-white" : "text-neutral-900", h = u ? "text-neutral-400" : "text-neutral-500", m = u ? "border-neutral-800" : "border-neutral-200", g = u ? "bg-neutral-800/50" : "bg-neutral-50/50", w = s === "national" ? l : c, y = [
    { top: "40%", left: "30%", city: "Ahmedabad", projects: 12 },
    { top: "55%", left: "25%", city: "Mumbai", projects: 8 },
    { top: "70%", left: "35%", city: "Pune", projects: 4 },
    { top: "75%", left: "45%", city: "Bangalore", projects: 6 },
    { top: "65%", left: "50%", city: "Hyderabad", projects: 5 },
    { top: "30%", left: "40%", city: "Delhi NCR", projects: 7 }
  ];
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${m} ${b} shadow-2xl overflow-hidden relative`, children: [
    u && /* @__PURE__ */ t("div", { className: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ e("div", { className: "absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" }),
      /* @__PURE__ */ e("div", { className: "absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" })
    ] }),
    /* @__PURE__ */ t("div", { className: "p-8 md:p-12 relative z-10", children: [
      /* @__PURE__ */ t("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8", children: [
        /* @__PURE__ */ t("div", { className: "max-w-xl", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ e("div", { className: `p-2 rounded-lg ${u ? "bg-indigo-500/10 text-indigo-400" : "bg-indigo-50 text-indigo-600"}`, children: /* @__PURE__ */ e(_e, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ e("span", { className: `text-sm font-bold uppercase tracking-wider ${u ? "text-indigo-400" : "text-indigo-600"}`, children: "Global Footprint" })
          ] }),
          /* @__PURE__ */ e("h3", { className: `text-3xl md:text-5xl font-display font-medium ${r} mb-4`, children: "Deployment Map" }),
          /* @__PURE__ */ t("p", { className: `text-lg ${h} font-light`, children: [
            "Visualizing ",
            i,
            "'s expanding infrastructure across key markets."
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: `p-1 rounded-xl flex ${u ? "bg-neutral-800" : "bg-neutral-100"}`, children: [
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => p("national"),
              className: `px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm ${s === "national" ? u ? "bg-neutral-700 text-white shadow-md" : "bg-white text-neutral-900 shadow-md" : u ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-neutral-900"}`,
              children: "National (India)"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => p("international"),
              className: `px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm ${s === "international" ? u ? "bg-neutral-700 text-white shadow-md" : "bg-white text-neutral-900 shadow-md" : u ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-neutral-900"}`,
              children: "International"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-12", children: d.map((k, n) => /* @__PURE__ */ t("div", { className: `relative overflow-hidden p-6 rounded-2xl border ${m} ${g} group hover:border-indigo-500/30 transition-colors`, children: [
        /* @__PURE__ */ e("div", { className: `text-3xl font-mono font-medium ${r} mb-1 group-hover:scale-105 transition-transform origin-left`, children: k.value }),
        /* @__PURE__ */ t("div", { className: `text-xs font-bold uppercase tracking-wider ${h} flex items-center gap-1`, children: [
          k.label,
          n === 0 && /* @__PURE__ */ e(la, { className: "w-3 h-3 text-green-500" })
        ] })
      ] }, n)) }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12", children: [
        /* @__PURE__ */ t("div", { className: `lg:col-span-2 rounded-3xl border ${m} ${u ? "bg-neutral-800" : "bg-neutral-100"} relative min-h-[400px] overflow-hidden`, children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 opacity-20", style: { backgroundImage: `radial-gradient(${u ? "#6366f1" : "#a3a3a3"} 1px, transparent 1px)`, backgroundSize: "24px 24px" } }),
          /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ e("div", { className: `text-[200px] opacity-5 font-display font-bold ${r}`, children: s === "national" ? "INDIA" : "WORLD" }) }),
          s === "national" && y.map((k, n) => /* @__PURE__ */ e(
            f.div,
            {
              initial: { scale: 0, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { delay: n * 0.1, duration: 0.5 },
              className: "absolute cursor-pointer group",
              style: { top: k.top, left: k.left },
              children: /* @__PURE__ */ t("div", { className: "relative", children: [
                /* @__PURE__ */ e("div", { className: "w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.6)] animate-pulse" }),
                /* @__PURE__ */ t("div", { className: `absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg ${u ? "bg-neutral-900 text-white" : "bg-white text-neutral-900"} text-xs font-bold shadow-lg border ${m} opacity-0 group-hover:opacity-100 transition-opacity`, children: [
                  k.city,
                  " ",
                  /* @__PURE__ */ t("span", { className: "text-indigo-500 ml-1", children: [
                    "(",
                    k.projects,
                    ")"
                  ] })
                ] })
              ] })
            },
            n
          )),
          /* @__PURE__ */ e("div", { className: "absolute bottom-6 left-6", children: /* @__PURE__ */ t("div", { className: `px-4 py-2 rounded-lg ${u ? "bg-neutral-900/90" : "bg-white/90"} backdrop-blur-md border ${m} shadow-lg`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ e(Ga, { className: "w-4 h-4 text-indigo-500" }),
              /* @__PURE__ */ t("span", { className: `text-sm font-bold ${r}`, children: [
                s === "national" ? "India" : "Global",
                " Map"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `text-xs ${h}`, children: [
              w.locations.length,
              " active hubs detected"
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ t("div", { className: `rounded-3xl border ${m} ${g} overflow-hidden flex flex-col`, children: [
          /* @__PURE__ */ t("div", { className: `p-6 border-b ${m}`, children: [
            /* @__PURE__ */ e("h4", { className: `text-lg font-bold ${r}`, children: "Active Locations" }),
            /* @__PURE__ */ e("p", { className: `text-xs ${h} mt-1`, children: "Click to view project details" })
          ] }),
          /* @__PURE__ */ e("div", { className: "overflow-y-auto max-h-[400px] p-2 space-y-1", children: w.locations.map((k, n) => /* @__PURE__ */ t("button", { className: `w-full text-left p-3 rounded-xl flex items-start gap-4 transition-colors ${u ? "hover:bg-neutral-700/50" : "hover:bg-neutral-200/50"} group`, children: [
            /* @__PURE__ */ e("div", { className: `mt-1 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${u ? "bg-neutral-800 text-neutral-400" : "bg-white text-neutral-500"} border ${m} group-hover:border-indigo-500 transition-colors`, children: /* @__PURE__ */ e(xe, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: `font-bold text-sm ${r}`, children: k.city }),
              /* @__PURE__ */ e("div", { className: `text-xs ${h} mb-1`, children: k.state }),
              /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-500 text-[10px] font-bold uppercase tracking-wider", children: [
                k.projects,
                " Active Projects"
              ] })
            ] })
          ] }, n)) })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: `pt-10 border-t ${m} grid grid-cols-1 md:grid-cols-3 gap-8`, children: [
        /* @__PURE__ */ t("div", { className: "flex gap-4 items-start", children: [
          /* @__PURE__ */ e("div", { className: `p-3 rounded-xl ${u ? "bg-neutral-800 text-indigo-400" : "bg-neutral-100 text-indigo-600"}`, children: /* @__PURE__ */ e(A, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: `text-2xl font-mono font-medium ${r}`, children: w.marketPenetration }),
            /* @__PURE__ */ e("div", { className: `text-xs font-bold uppercase tracking-wide ${h} mb-1`, children: "Market Penetration" }),
            /* @__PURE__ */ e("div", { className: `text-sm ${h} leading-snug`, children: w.penetrationDescription })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex gap-4 items-start", children: [
          /* @__PURE__ */ e("div", { className: `p-3 rounded-xl ${u ? "bg-neutral-800 text-indigo-400" : "bg-neutral-100 text-indigo-600"}`, children: /* @__PURE__ */ e(ia, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: `text-2xl font-mono font-medium ${r}`, children: w.partnerships }),
            /* @__PURE__ */ e("div", { className: `text-xs font-bold uppercase tracking-wide ${h} mb-1`, children: "Active Partnerships" }),
            /* @__PURE__ */ e("div", { className: `text-sm ${h} leading-snug`, children: w.partnershipDescription })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex gap-4 items-start", children: [
          /* @__PURE__ */ e("div", { className: `p-3 rounded-xl ${u ? "bg-neutral-800 text-indigo-400" : "bg-neutral-100 text-indigo-600"}`, children: /* @__PURE__ */ e(_e, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: `text-2xl font-mono font-medium ${r}`, children: w.reach }),
            /* @__PURE__ */ e("div", { className: `text-xs font-bold uppercase tracking-wide ${h} mb-1`, children: "Geographic Reach" }),
            /* @__PURE__ */ e("div", { className: `text-sm ${h} leading-snug`, children: w.reachDescription })
          ] })
        ] })
      ] })
    ] })
  ] });
}, Lr = ({ children: i, variant: l = "primary", theme: c = "light", className: d = "", icon: a, onClick: s }) => /* @__PURE__ */ t("button", { onClick: s, className: `inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-sm group shadow-sm relative overflow-hidden ${l === "primary" ? c === "dark" ? "bg-white text-black hover:bg-neutral-200 border border-white z-10 shadow-lg" : "bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-900" : l === "secondary" ? c === "dark" ? "bg-transparent text-white border border-neutral-700 hover:border-white hover:bg-neutral-900 z-10" : "bg-white text-neutral-900 border border-neutral-200 hover:border-neutral-900" : c === "dark" ? "text-neutral-400 hover:text-white px-0 py-2 shadow-none" : "text-neutral-500 hover:text-neutral-900 px-0 py-2 shadow-none"} ${d}`, children: [
  i,
  a && /* @__PURE__ */ e(a, { className: "w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" })
] }), mn = ({
  productName: i,
  specifications: l,
  documents: c,
  theme: d = "light"
}) => {
  const a = d === "dark", s = a ? "bg-neutral-900" : "bg-neutral-50", p = a ? "text-white" : "text-neutral-900", u = a ? "text-neutral-400" : "text-neutral-500", b = a ? "border-neutral-800" : "border-neutral-200", r = a ? "bg-neutral-800/50" : "bg-white";
  return /* @__PURE__ */ t("div", { className: `relative overflow-hidden rounded-3xl border ${b} ${s} shadow-2xl`, children: [
    a && /* @__PURE__ */ t(Ce, { children: [
      /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" }),
      /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" })
    ] }),
    /* @__PURE__ */ t("div", { className: "p-8 md:p-12 relative z-10", children: [
      /* @__PURE__ */ e("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6", children: /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4 ${a ? "bg-red-900/30 text-red-400" : "bg-red-50 text-red-700"}`, children: [
          /* @__PURE__ */ e(mt, { className: "w-4 h-4" }),
          /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-wider", children: "Technical Data" })
        ] }),
        /* @__PURE__ */ e("h3", { className: `text-3xl lg:text-4xl font-display font-medium ${p} mb-2`, children: "Specifications & Downloads" }),
        /* @__PURE__ */ e("p", { className: `text-lg ${u} max-w-xl`, children: "Comprehensive technical documentation and material properties." })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-12", children: [
        /* @__PURE__ */ e("div", { className: "xl:col-span-2", children: /* @__PURE__ */ t("div", { className: `rounded-2xl border ${b} ${r} overflow-hidden`, children: [
          /* @__PURE__ */ t("div", { className: `p-6 border-b ${b} flex items-center justify-between`, children: [
            /* @__PURE__ */ t("h4", { className: `flex items-center gap-2 font-display font-medium ${p}`, children: [
              /* @__PURE__ */ e(Ra, { className: "w-5 h-5 opacity-70" }),
              "Material Specifications"
            ] }),
            /* @__PURE__ */ e("span", { className: "text-xs font-mono uppercase tracking-widest opacity-50", children: "Rev. 2.1" })
          ] }),
          /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ t("table", { className: "w-full text-sm text-left", children: [
            /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ t("tr", { className: `${a ? "bg-neutral-900/50" : "bg-neutral-100/50"} border-b ${b}`, children: [
              /* @__PURE__ */ e("th", { className: `p-5 font-bold uppercase tracking-wider text-xs ${u}`, children: "Parameter" }),
              /* @__PURE__ */ e("th", { className: `p-5 font-bold uppercase tracking-wider text-xs ${u}`, children: "Value" }),
              /* @__PURE__ */ e("th", { className: `p-5 font-bold uppercase tracking-wider text-xs ${u}`, children: "Test Method" })
            ] }) }),
            /* @__PURE__ */ e("tbody", { className: `divide-y ${a ? "divide-neutral-800" : "divide-neutral-100"}`, children: l.map((h, m) => /* @__PURE__ */ t("tr", { className: "group hover:bg-neutral-50 dark:hover:bg-neutral-800/30 transition-colors", children: [
              /* @__PURE__ */ e("td", { className: `p-5 font-medium ${p}`, children: h.parameter }),
              /* @__PURE__ */ e("td", { className: `p-5 font-mono font-medium ${a ? "text-blue-400" : "text-blue-700"}`, children: h.value }),
              /* @__PURE__ */ e("td", { className: `p-5 text-xs font-mono ${u}`, children: h.testMethod })
            ] }, m)) })
          ] }) })
        ] }) }),
        /* @__PURE__ */ t("div", { className: "space-y-6", children: [
          /* @__PURE__ */ e("div", { className: "flex flex-col gap-4", children: c.map((h, m) => /* @__PURE__ */ t(
            "a",
            {
              href: h.url,
              download: h.filename,
              className: `group relative p-5 rounded-xl border ${b} ${r} hover:border-red-500/50 hover:shadow-lg transition-all duration-300 flex items-start gap-4`,
              children: [
                /* @__PURE__ */ e("div", { className: `w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${a ? "bg-neutral-800 text-red-500" : "bg-red-50 text-red-600"} group-hover:scale-110 transition-transform`, children: /* @__PURE__ */ e(mt, { className: "w-5 h-5" }) }),
                /* @__PURE__ */ t("div", { className: "flex-grow min-w-0", children: [
                  /* @__PURE__ */ e("h5", { className: `font-bold ${p} text-sm mb-0.5 truncate group-hover:text-red-500 transition-colors`, children: h.title }),
                  /* @__PURE__ */ e("p", { className: `text-xs ${u} mb-2 line-clamp-1`, children: h.description }),
                  /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider opacity-60", children: [
                    /* @__PURE__ */ e("span", { className: "bg-neutral-200 dark:bg-neutral-700 px-1.5 py-0.5 rounded text-neutral-600 dark:text-neutral-300", children: h.format }),
                    /* @__PURE__ */ e("span", { children: h.fileSize })
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { className: "opacity-0 group-hover:opacity-100 transition-opacity self-center", children: /* @__PURE__ */ e(ja, { className: "w-4 h-4 text-red-500" }) })
              ]
            },
            m
          )) }),
          /* @__PURE__ */ t("div", { className: `p-8 rounded-2xl ${a ? "bg-gradient-to-br from-neutral-800 to-neutral-900 border-neutral-700" : "bg-gradient-to-br from-neutral-800 to-neutral-900 text-white"} border shadow-xl relative overflow-hidden`, children: [
            /* @__PURE__ */ t("div", { className: "relative z-10", children: [
              /* @__PURE__ */ e("h4", { className: "font-display font-bold text-white mb-2", children: "Need detailed reports?" }),
              /* @__PURE__ */ e("p", { className: "text-sm text-neutral-400 mb-6 leading-relaxed", children: "Request full NABL test reports, custom mix design data, or safety compliance usage guides." }),
              /* @__PURE__ */ t(Lr, { variant: "primary", theme: "light", className: "w-full justify-between group", children: [
                /* @__PURE__ */ e("span", { children: "Request Custom Data" }),
                /* @__PURE__ */ e(Ia, { className: "w-4 h-4 opacity-70 group-hover:opacity-100" })
              ] })
            ] }),
            /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none" })
          ] })
        ] })
      ] })
    ] })
  ] });
}, pn = ({
  productName: i,
  industries: l,
  theme: c = "light"
}) => {
  const [d, a] = M(0), s = c === "dark", p = s ? "bg-neutral-900" : "bg-white", u = s ? "text-white" : "text-neutral-900", b = s ? "text-neutral-400" : "text-neutral-500", r = s ? "border-neutral-800" : "border-neutral-200", h = s ? "bg-neutral-800/50" : "bg-neutral-50/50", m = {
    construction: xe,
    manufacturing: $t,
    energy: W,
    automotive: Da,
    packaging: Fe
  }, g = l[d], w = m[g?.icon] || xe;
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${r} ${p} shadow-2xl overflow-hidden relative`, children: [
    s && /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" }),
    /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-12 min-h-[650px]", children: [
      /* @__PURE__ */ t("div", { className: `lg:col-span-4 border-b lg:border-b-0 lg:border-r ${r} ${s ? "bg-neutral-900/80" : "bg-neutral-50/80"} backdrop-blur-md p-6 flex flex-col`, children: [
        /* @__PURE__ */ t("div", { className: "mb-10 px-2 pt-2", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ e("div", { className: `p-2 rounded-md ${s ? "bg-white/10" : "bg-neutral-200"}`, children: /* @__PURE__ */ e(za, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-widest text-neutral-500", children: "Sectors" })
          ] }),
          /* @__PURE__ */ e("h3", { className: `text-2xl font-display font-medium ${u} mb-2`, children: "Industry Solutions" }),
          /* @__PURE__ */ e("p", { className: `text-sm ${b} leading-relaxed max-w-xs`, children: "Tailored applications driving performace in critical infrastructure and manufacturing." })
        ] }),
        /* @__PURE__ */ e("div", { className: "space-y-1.5 flex-grow", children: l.map((y, k) => {
          const n = m[y.icon] || xe, G = d === k;
          return /* @__PURE__ */ t(
            "button",
            {
              onClick: () => a(k),
              className: `w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${G ? `${s ? "bg-neutral-800 text-white shadow-lg" : "bg-white text-neutral-900 shadow-md"} border ${r}` : "hover:bg-neutral-100 dark:hover:bg-neutral-800/50 border border-transparent opacity-70 hover:opacity-100"}`,
              children: [
                G && /* @__PURE__ */ e("div", { className: `absolute left-0 top-0 bottom-0 w-1 ${s ? "bg-indigo-500" : "bg-indigo-600"}` }),
                /* @__PURE__ */ t("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ e("div", { className: `p-2.5 rounded-lg transition-colors duration-300 ${G ? s ? "bg-indigo-500/20 text-indigo-400" : "bg-indigo-50 text-indigo-600" : "bg-transparent text-neutral-400"}`, children: /* @__PURE__ */ e(n, { className: "w-5 h-5" }) }),
                  /* @__PURE__ */ e("span", { className: `font-medium text-sm tracking-wide ${G ? u : b} group-hover:${u}`, children: y.name })
                ] }),
                G && /* @__PURE__ */ e(ye, { className: "w-4 h-4 text-indigo-500 animate-in slide-in-from-left-2" })
              ]
            },
            k
          );
        }) })
      ] }),
      /* @__PURE__ */ e("div", { className: "lg:col-span-8 p-8 md:p-14 flex flex-col relative", children: /* @__PURE__ */ e(se, { mode: "wait", children: g && /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -20 },
          transition: { duration: 0.4 },
          className: "flex flex-col h-full",
          children: [
            /* @__PURE__ */ t("div", { className: "mb-12", children: [
              /* @__PURE__ */ t("div", { className: "flex items-center gap-4 mb-6", children: [
                /* @__PURE__ */ e("div", { className: `w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${s ? "bg-neutral-800 text-indigo-400 border border-neutral-700" : "bg-white text-indigo-600 border border-neutral-100"}`, children: /* @__PURE__ */ e(w, { className: "w-8 h-8" }) }),
                /* @__PURE__ */ t("div", { children: [
                  /* @__PURE__ */ e("h4", { className: `text-3xl md:text-4xl font-display font-medium ${u}`, children: g.name }),
                  /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mt-1", children: [
                    /* @__PURE__ */ e("span", { className: `w-1.5 h-1.5 rounded-full ${s ? "bg-indigo-400" : "bg-indigo-600"}` }),
                    /* @__PURE__ */ e("span", { className: `text-xs ${b} font-mono uppercase tracking-wide`, children: "Specialized Application" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ e("p", { className: `text-xl ${b} leading-relaxed max-w-3xl font-light`, children: g.description })
            ] }),
            /* @__PURE__ */ t("div", { className: "grid md:grid-cols-2 gap-10 mb-8", children: [
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ t("h5", { className: `text-xs font-bold uppercase tracking-wider ${b} mb-6 flex items-center gap-2`, children: [
                  /* @__PURE__ */ e(ye, { className: "w-3 h-3" }),
                  " Core Applications"
                ] }),
                /* @__PURE__ */ e("div", { className: "space-y-4", children: g.useCases.map((y, k) => /* @__PURE__ */ e("div", { className: `p-5 rounded-2xl border ${r} ${h} hover:border-indigo-500/30 transition-all hover:translate-x-1 group`, children: /* @__PURE__ */ t("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ e("div", { className: `mt-1 p-1 rounded-full ${s ? "bg-indigo-500/20 text-indigo-400" : "bg-indigo-50 text-indigo-600"} shrink-0`, children: /* @__PURE__ */ e(ve, { className: "w-3 h-3" }) }),
                  /* @__PURE__ */ t("div", { children: [
                    /* @__PURE__ */ e("strong", { className: `block text-base font-bold ${u} mb-1 group-hover:text-indigo-500 transition-colors`, children: y.title }),
                    /* @__PURE__ */ e("p", { className: `text-sm ${b} leading-relaxed`, children: y.description })
                  ] })
                ] }) }, k)) })
              ] }),
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ t("h5", { className: `text-xs font-bold uppercase tracking-wider ${b} mb-6 flex items-center gap-2`, children: [
                  /* @__PURE__ */ e(ye, { className: "w-3 h-3" }),
                  "  Impact Metrics"
                ] }),
                /* @__PURE__ */ e("div", { className: "space-y-4", children: g.metrics.map((y, k) => /* @__PURE__ */ t("div", { className: `flex flex-col p-6 rounded-2xl ${s ? "bg-neutral-800 border-neutral-700" : "bg-white border-neutral-100"} border shadow-sm`, children: [
                  /* @__PURE__ */ e("span", { className: `text-4xl font-display font-medium ${s ? "text-white" : "text-neutral-900"} mb-1`, children: y.value }),
                  /* @__PURE__ */ e("span", { className: `text-sm ${b} font-medium uppercase tracking-wide`, children: y.label })
                ] }, k)) }),
                /* @__PURE__ */ t("div", { className: `mt-8 p-6 rounded-2xl border ${s ? "border-indigo-500/30 bg-indigo-500/10" : "border-indigo-100 bg-indigo-50"} text-center`, children: [
                  /* @__PURE__ */ e("p", { className: `text-sm font-medium ${s ? "text-indigo-200" : "text-indigo-800"} mb-3`, children: "Ready to optimize your project?" }),
                  /* @__PURE__ */ e("button", { className: `w-full py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-colors ${s ? "bg-indigo-600 hover:bg-indigo-500 text-white" : "bg-indigo-600 hover:bg-indigo-700 text-white"}`, children: "View Case Study" })
                ] })
              ] })
            ] })
          ]
        },
        d
      ) }) })
    ] })
  ] });
}, un = ({
  productName: i,
  sections: l,
  theme: c = "light"
}) => {
  const [d, a] = M(0), s = c === "dark", p = s ? "bg-neutral-900" : "bg-white", u = s ? "text-white" : "text-neutral-900", b = s ? "text-neutral-400" : "text-neutral-500", r = s ? "border-neutral-800" : "border-neutral-200", h = s ? "bg-neutral-800/80" : "bg-neutral-50/80", m = {
    mechanism: Ea,
    structure: St,
    properties: W,
    science: Ve
  }, g = l[d], w = m[g?.icon] || Ve;
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${r} ${p} shadow-2xl overflow-hidden relative`, children: [
    s && /* @__PURE__ */ e("div", { className: "absolute inset-x-0 top-0 h-[400px] bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none" }),
    /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-12 min-h-[700px]", children: [
      /* @__PURE__ */ t("div", { className: `lg:col-span-4 border-b lg:border-b-0 lg:border-r ${r} ${s ? "bg-neutral-900" : "bg-neutral-50/50"} p-8 flex flex-col`, children: [
        /* @__PURE__ */ t("div", { className: "mb-10", children: [
          /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-2 px-3 py-1 rounded-lg ${s ? "bg-indigo-500/10 text-indigo-400" : "bg-indigo-50 text-indigo-700"} text-xs font-bold uppercase tracking-widest mb-4`, children: [
            /* @__PURE__ */ e(Ve, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e("span", { children: "The Technology" })
          ] }),
          /* @__PURE__ */ e("h3", { className: `text-3xl font-display font-medium ${u} mb-4`, children: "Core Science" }),
          /* @__PURE__ */ t("p", { className: `text-sm ${b} leading-relaxed`, children: [
            "Explore the proprietary mechanisms that give ",
            i,
            " its breakthrough capabilities."
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "space-y-2", children: l.map((y, k) => {
          const n = m[y.icon] || Ve, G = d === k;
          return /* @__PURE__ */ e(
            "button",
            {
              onClick: () => a(k),
              className: `w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${G ? `${s ? "bg-neutral-800 text-white shadow-lg" : "bg-white text-neutral-900 shadow-xl"} scale-[1.02]` : "hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 opacity-70 hover:opacity-100"}`,
              children: /* @__PURE__ */ t("div", { className: "flex items-center gap-4 relative z-10", children: [
                /* @__PURE__ */ e("div", { className: `p-2 rounded-lg transition-colors ${G ? "bg-indigo-500 text-white shadow-md" : "bg-transparent text-neutral-400"}`, children: /* @__PURE__ */ e(n, { className: "w-5 h-5" }) }),
                /* @__PURE__ */ t("div", { children: [
                  /* @__PURE__ */ e("span", { className: `block font-bold text-sm ${G ? u : b}`, children: y.title }),
                  G && /* @__PURE__ */ e("span", { className: "text-[10px] text-indigo-400 font-medium uppercase tracking-wider animate-pulse", children: "Viewing" })
                ] })
              ] })
            },
            k
          );
        }) })
      ] }),
      /* @__PURE__ */ e("div", { className: "lg:col-span-8 p-8 md:p-14 relative overflow-y-auto", children: /* @__PURE__ */ e(se, { mode: "wait", children: /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -10 },
          transition: { duration: 0.3 },
          className: "h-full flex flex-col",
          children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-4 mb-8", children: [
              /* @__PURE__ */ e("div", { className: `p-4 rounded-2xl ${s ? "bg-neutral-800 text-indigo-400" : "bg-white text-indigo-600 shadow-md"} border ${r}`, children: /* @__PURE__ */ e(w, { className: "w-8 h-8" }) }),
              /* @__PURE__ */ e("h2", { className: `text-4xl font-display font-medium ${u}`, children: g.title })
            ] }),
            /* @__PURE__ */ t("div", { className: "grid md:grid-cols-2 gap-10 mb-10", children: [
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ t("h4", { className: `text-xs font-bold uppercase tracking-wider ${b} mb-4 flex items-center gap-2`, children: [
                  /* @__PURE__ */ e("div", { className: "w-6 h-px bg-indigo-500" }),
                  " Technical Breakdown"
                ] }),
                /* @__PURE__ */ e("div", { className: `space-y-4 text-lg ${b} leading-relaxed`, children: g.content.map((y, k) => /* @__PURE__ */ e("p", { children: y }, k)) })
              ] }),
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ e("h4", { className: `text-xs font-bold uppercase tracking-wider ${b} mb-4`, children: "Engineering Advantages" }),
                /* @__PURE__ */ e("div", { className: "space-y-4", children: g.keyPoints.map((y, k) => /* @__PURE__ */ e("div", { className: `p-5 rounded-2xl border ${r} ${h} transition-transform hover:scale-[1.02]`, children: /* @__PURE__ */ t("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ e("div", { className: "mt-1 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0", children: /* @__PURE__ */ e(pt, { className: "w-3 h-3 text-white", strokeWidth: 3 }) }),
                  /* @__PURE__ */ t("div", { children: [
                    /* @__PURE__ */ e("h5", { className: `font-bold ${u} text-sm mb-1`, children: y.title }),
                    /* @__PURE__ */ e("p", { className: `text-xs ${b}`, children: y.description })
                  ] })
                ] }) }, k)) })
              ] })
            ] }),
            g.technicalData && /* @__PURE__ */ t("div", { className: `mt-auto rounded-2xl border ${s ? "border-indigo-500/30 bg-indigo-500/5" : "border-indigo-100 bg-indigo-50"} p-6`, children: [
              /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ e(W, { className: `w-4 h-4 ${s ? "text-indigo-400" : "text-indigo-600"}` }),
                /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-widest ${s ? "text-indigo-300" : "text-indigo-800"}`, children: "Specifications" })
              ] }),
              /* @__PURE__ */ e("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-6", children: Object.entries(g.technicalData).map(([y, k], n) => /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ e("div", { className: `text-[10px] font-bold uppercase tracking-wider ${b} mb-1`, children: y }),
                /* @__PURE__ */ e("div", { className: `text-lg font-mono font-medium ${u}`, children: k })
              ] }, n)) })
            ] })
          ]
        },
        d
      ) }) })
    ] })
  ] });
}, bn = ({ productName: i, comparisonData: l, theme: c = "light" }) => {
  if (!l || !l.competitors || !l.metrics)
    return null;
  const { competitors: d, metrics: a } = l, s = c === "dark", p = s ? "bg-neutral-900" : "bg-white", u = s ? "text-white" : "text-neutral-900", b = s ? "text-neutral-400" : "text-neutral-500", r = s ? "border-neutral-800" : "border-neutral-200";
  return /* @__PURE__ */ t("div", { className: `relative overflow-hidden ${p} py-16 px-6 border-b ${r}`, children: [
    s && /* @__PURE__ */ e("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" }),
    /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto relative z-10", children: [
      /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.6 },
          className: "mb-16 text-center",
          children: [
            /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4 ${s ? "bg-indigo-900/30 text-indigo-400" : "bg-indigo-50 text-indigo-700"}`, children: [
              /* @__PURE__ */ e(A, { className: "w-4 h-4" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-wider", children: "Benchmark Analysis" })
            ] }),
            /* @__PURE__ */ e("h3", { className: `text-4xl md:text-5xl font-display font-medium ${u} mb-4`, children: "Competitive Advantage" }),
            /* @__PURE__ */ t("p", { className: `text-lg ${b} max-w-2xl mx-auto`, children: [
              "See how ",
              i,
              " radically outperforms traditional admixtures and competitors across every critical metric."
            ] })
          ]
        }
      ),
      /* @__PURE__ */ e(
        f.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.6, delay: 0.1 },
          className: `rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-2xl ${s ? "bg-neutral-900/80 backdrop-blur-xl" : "bg-white"}`,
          children: /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ t("table", { className: "w-full text-left border-collapse min-w-[800px]", children: [
            /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ t("tr", { className: `${s ? "bg-neutral-950" : "bg-neutral-50"} border-b ${r}`, children: [
              /* @__PURE__ */ e("th", { className: `p-6 text-sm font-bold uppercase tracking-wider ${b} w-1/4`, children: "Performance Metric" }),
              /* @__PURE__ */ t("th", { className: "p-6 relative w-1/4", children: [
                /* @__PURE__ */ e("div", { className: `absolute inset-0 ${s ? "bg-indigo-500/10" : "bg-indigo-50"} border-t-4 border-indigo-500` }),
                /* @__PURE__ */ t("div", { className: "relative flex items-center gap-2", children: [
                  /* @__PURE__ */ e("span", { className: `text-lg font-display font-bold ${s ? "text-white" : "text-neutral-900"}`, children: i }),
                  /* @__PURE__ */ e("span", { className: "px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500 text-white uppercase tracking-wider", children: "Best in Class" })
                ] })
              ] }),
              d.map((h, m) => /* @__PURE__ */ e(
                "th",
                {
                  className: `p-6 text-sm font-bold uppercase tracking-wider ${b} w-1/6`,
                  children: h
                },
                m
              ))
            ] }) }),
            /* @__PURE__ */ e("tbody", { className: `divide-y ${r}`, children: a.map((h, m) => /* @__PURE__ */ t(
              "tr",
              {
                className: `group transition-colors ${s ? "hover:bg-neutral-800/30" : "hover:bg-neutral-50"}`,
                children: [
                  /* @__PURE__ */ e("td", { className: `p-6 font-medium ${u} text-sm md:text-base`, children: h.metric }),
                  /* @__PURE__ */ t("td", { className: "p-6 relative", children: [
                    /* @__PURE__ */ e("div", { className: `absolute inset-0 ${s ? "bg-indigo-500/5" : "bg-indigo-50/50"} opacity-100 group-hover:opacity-80 transition-opacity` }),
                    /* @__PURE__ */ t("div", { className: "relative flex items-center gap-3", children: [
                      /* @__PURE__ */ e("div", { className: `w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${s ? "bg-indigo-500 text-white" : "bg-indigo-600 text-white"}`, children: /* @__PURE__ */ e(pt, { className: "w-3.5 h-3.5" }) }),
                      /* @__PURE__ */ e("span", { className: `text-lg font-bold font-mono ${s ? "text-indigo-300" : "text-indigo-700"}`, children: h.productValue })
                    ] })
                  ] }),
                  h.competitorValues.map((g, w) => /* @__PURE__ */ e("td", { className: `p-6 text-sm font-mono ${b}`, children: g === "0%" || g.includes("<") ? /* @__PURE__ */ e("span", { className: "opacity-50", children: g }) : /* @__PURE__ */ e("span", { children: g }) }, w))
                ]
              },
              m
            )) })
          ] }) })
        }
      ),
      l.differentiators && /* @__PURE__ */ e(
        f.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.6, delay: 0.3 },
          className: "mt-12 grid grid-cols-1 md:grid-cols-3 gap-6",
          children: l.differentiators.map((h, m) => /* @__PURE__ */ t(
            "div",
            {
              className: `p-8 rounded-2xl border ${r} ${s ? "bg-neutral-800/30" : "bg-white shadow-sm hover:shadow-md"} transition-all hover:border-indigo-500/30 group`,
              children: [
                /* @__PURE__ */ e("div", { className: `w-12 h-12 rounded-xl mb-6 flex items-center justify-center ${s ? "bg-neutral-800 text-white group-hover:bg-indigo-500 transition-colors" : "bg-neutral-100 text-neutral-900 group-hover:bg-indigo-600 group-hover:text-white transition-colors"}`, children: /* @__PURE__ */ e(We, { className: "w-6 h-6" }) }),
                /* @__PURE__ */ e("h4", { className: `text-xl font-display font-bold ${u} mb-3`, children: h.title }),
                /* @__PURE__ */ e("p", { className: `text-sm ${b} leading-relaxed`, children: h.description })
              ]
            },
            m
          ))
        }
      )
    ] })
  ] });
}, xn = ({
  productName: i,
  stages: l,
  theme: c = "light"
}) => {
  const [d, a] = M(0), s = c === "dark", p = s ? "bg-neutral-900" : "bg-white", u = s ? "text-white" : "text-neutral-900", b = s ? "text-neutral-400" : "text-neutral-500", r = s ? "border-neutral-800" : "border-neutral-200", h = s ? "bg-neutral-800/80" : "bg-neutral-50/80", m = {
    trial: ct,
    validation: Wa,
    scale: A,
    deployment: wt
  };
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${r} ${p} shadow-2xl p-8 md:p-14 relative overflow-hidden`, children: [
    s && /* @__PURE__ */ e("div", { className: "absolute inset-0 pointer-events-none", children: /* @__PURE__ */ e("div", { className: "absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" }) }),
    /* @__PURE__ */ t("div", { className: "text-center mb-16 relative z-10", children: [
      /* @__PURE__ */ e("h3", { className: `text-4xl md:text-5xl font-display font-medium ${u} mb-4 tracking-tight`, children: "Path to Scale" }),
      /* @__PURE__ */ t("p", { className: `text-xl ${b} max-w-2xl mx-auto font-light`, children: [
        "A structured, low-risk roadmap to deploy ",
        i,
        " across your operations."
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "relative z-10", children: [
      /* @__PURE__ */ e("div", { className: "hidden lg:block absolute top-[4rem] left-16 right-16 h-0.5 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent z-0" }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: l.map((g, w) => {
        const y = m[g.type] || ct, k = d === w, n = [
          "text-blue-500 bg-blue-500/10 border-blue-500/20",
          "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
          "text-purple-500 bg-purple-500/10 border-purple-500/20",
          "text-green-500 bg-green-500/10 border-green-500/20"
        ], G = n[w % n.length];
        return /* @__PURE__ */ t(
          "div",
          {
            className: "relative group",
            onMouseEnter: () => a(w),
            children: [
              /* @__PURE__ */ e("div", { className: "flex flex-col items-center mb-8 relative z-10", children: /* @__PURE__ */ t("div", { className: `w-32 h-32 rounded-full border-4 ${s ? "bg-neutral-900 border-neutral-800" : "bg-white border-neutral-100"} flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-indigo-500/30`, children: [
                /* @__PURE__ */ e("div", { className: `w-24 h-24 rounded-full flex items-center justify-center ${G} transition-all duration-300`, children: /* @__PURE__ */ e(y, { className: "w-10 h-10", strokeWidth: 1.5 }) }),
                /* @__PURE__ */ e("div", { className: `absolute top-0 right-0 w-8 h-8 rounded-full ${s ? "bg-neutral-800 border-neutral-700" : "bg-white border-neutral-200"} border flex items-center justify-center text-sm font-bold shadow-lg`, children: w + 1 }),
                g.completed && /* @__PURE__ */ e("div", { className: "absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white dark:border-neutral-900 shadow-lg", children: /* @__PURE__ */ e(ve, { className: "w-4 h-4 text-white" }) })
              ] }) }),
              /* @__PURE__ */ t("div", { className: `h-full border ${r} ${h} backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300 ${k ? "-translate-y-2" : ""}`, children: [
                /* @__PURE__ */ t("div", { className: "text-center mb-6", children: [
                  /* @__PURE__ */ e("h4", { className: `text-xl font-bold ${u} mb-3 group-hover:text-indigo-500 transition-colors`, children: g.title }),
                  /* @__PURE__ */ e("p", { className: `text-sm ${b} leading-relaxed`, children: g.description })
                ] }),
                /* @__PURE__ */ e("div", { className: `space-y-3 pt-6 border-t ${r}`, children: g.details.map((R, I) => /* @__PURE__ */ t("div", { className: "flex items-start gap-3 text-left", children: [
                  /* @__PURE__ */ e(ye, { className: `w-3.5 h-3.5 mt-1 shrink-0 ${s ? "text-indigo-500" : "text-indigo-600"}` }),
                  /* @__PURE__ */ e("span", { className: `text-xs font-medium ${b}`, children: R })
                ] }, I)) }),
                /* @__PURE__ */ t("div", { className: "mt-6 flex flex-wrap gap-2 justify-center", children: [
                  g.duration && /* @__PURE__ */ t("div", { className: `px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${s ? "bg-neutral-800 text-neutral-400" : "bg-neutral-100 text-neutral-600"} flex items-center gap-1.5`, children: [
                    /* @__PURE__ */ e(Pe, { className: "w-3 h-3" }),
                    " ",
                    g.duration
                  ] }),
                  g.investment && /* @__PURE__ */ e("div", { className: `px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${s ? "bg-indigo-900/20 text-indigo-400" : "bg-indigo-50 text-indigo-600"}`, children: g.investment })
                ] })
              ] })
            ]
          },
          w
        );
      }) })
    ] }),
    /* @__PURE__ */ e("div", { className: `mt-16 relative overflow-hidden rounded-2xl ${s ? "bg-gradient-to-br from-indigo-900/20 to-neutral-900" : "bg-gradient-to-br from-indigo-50 to-white"} border ${r} p-8 md:p-10`, children: /* @__PURE__ */ t("div", { className: "relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("h4", { className: `text-2xl font-display font-medium ${u} mb-2`, children: "Full-Spectrum Engineering Support" }),
        /* @__PURE__ */ e("p", { className: `${b} max-w-xl`, children: "Our deployment teams work alongside your engineers from day one, ensuring seamless integration and validating performance metrics." })
      ] }),
      /* @__PURE__ */ e("div", { className: "flex gap-6", children: [
        { label: "On-Site Training", icon: We },
        { label: "QA Certification", icon: ve }
      ].map((g, w) => /* @__PURE__ */ t("div", { className: `flex flex-col items-center gap-2 p-4 rounded-xl ${s ? "bg-neutral-800/50" : "bg-white/60"} border ${r}`, children: [
        /* @__PURE__ */ e(g.icon, { className: "w-6 h-6 text-green-500" }),
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${u}`, children: g.label })
      ] }, w)) })
    ] }) })
  ] });
}, hn = ({
  productName: i,
  marketData: l,
  industries: c,
  growthMetrics: d,
  theme: a = "light"
}) => {
  const [s, p] = M(c[0]?.id || null), u = a === "dark", b = u ? "bg-neutral-900" : "bg-white", r = u ? "text-white" : "text-neutral-900", h = u ? "text-neutral-400" : "text-neutral-500", m = u ? "border-neutral-800" : "border-neutral-200", g = u ? "bg-neutral-800/80" : "bg-neutral-50/80", w = c.find((y) => y.id === s);
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${m} ${b} overflow-hidden shadow-2xl relative`, children: [
    u ? /* @__PURE__ */ t("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" }),
      /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" })
    ] }) : /* @__PURE__ */ e("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[100px]" }) }),
    /* @__PURE__ */ e("div", { className: `p-8 md:p-12 border-b ${m} relative z-10`, children: /* @__PURE__ */ t("div", { className: "max-w-4xl", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ e("div", { className: `p-2 rounded-lg ${u ? "bg-indigo-500/10 text-indigo-400" : "bg-indigo-50 text-indigo-600"}`, children: /* @__PURE__ */ e(_e, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ e("span", { className: `text-sm font-bold uppercase tracking-wider ${u ? "text-indigo-400" : "text-indigo-600"}`, children: "Market Intelligence" })
      ] }),
      /* @__PURE__ */ e("h3", { className: `text-3xl md:text-5xl font-display font-medium ${r} mb-4`, children: "Growth Potential Analysis" }),
      /* @__PURE__ */ t("p", { className: `text-lg ${h} max-w-2xl`, children: [
        "Deep-dive into the serviceable market, industry-specific vectors, and revenue modeling for ",
        i,
        "."
      ] })
    ] }) }),
    /* @__PURE__ */ t("div", { className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x ${m} border-b relative z-10 bg-opacity-50 backdrop-blur-sm`, children: [
      /* @__PURE__ */ t("div", { className: "p-8 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group", children: [
        /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-4 opacity-70 group-hover:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ e(A, { className: "w-5 h-5" }),
          /* @__PURE__ */ e("span", { className: "text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border border-current opacity-50", children: "TAM" })
        ] }),
        /* @__PURE__ */ e("div", { className: `text-4xl font-display font-medium ${r} mb-1 tracking-tight`, children: l.tamSize }),
        /* @__PURE__ */ e("div", { className: `text-xs ${h} font-bold uppercase tracking-wide`, children: "Total Addressable Market" })
      ] }),
      /* @__PURE__ */ t("div", { className: "p-8 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group", children: [
        /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-4 opacity-70 group-hover:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ e(sa, { className: "w-5 h-5" }),
          /* @__PURE__ */ e("span", { className: "text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border border-current opacity-50", children: "CAGR" })
        ] }),
        /* @__PURE__ */ e("div", { className: `text-4xl font-display font-medium ${u ? "text-green-400" : "text-green-600"} mb-1 tracking-tight`, children: l.cagr }),
        /* @__PURE__ */ e("div", { className: `text-xs ${h} font-bold uppercase tracking-wide`, children: "Compound Annual Growth" })
      ] }),
      /* @__PURE__ */ t("div", { className: "p-8 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group", children: [
        /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-4 opacity-70 group-hover:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ e(ia, { className: "w-5 h-5" }),
          /* @__PURE__ */ e("span", { className: "text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border border-current opacity-50", children: "ICP" })
        ] }),
        /* @__PURE__ */ e("div", { className: `text-4xl font-display font-medium ${r} mb-1 tracking-tight`, children: l.targetCustomers }),
        /* @__PURE__ */ e("div", { className: `text-xs ${h} font-bold uppercase tracking-wide`, children: "Target Enterprises" })
      ] }),
      /* @__PURE__ */ t("div", { className: "p-8 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group", children: [
        /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-4 opacity-70 group-hover:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ e(ut, { className: "w-5 h-5" }),
          /* @__PURE__ */ e("span", { className: "text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border border-current opacity-50", children: "SOM" })
        ] }),
        /* @__PURE__ */ e("div", { className: `text-4xl font-display font-medium ${u ? "text-blue-400" : "text-blue-600"} mb-1 tracking-tight`, children: l.marketShare }),
        /* @__PURE__ */ e("div", { className: `text-xs ${h} font-bold uppercase tracking-wide`, children: "Serviceable Share" })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-12 min-h-[600px] relative z-10", children: [
      /* @__PURE__ */ t("div", { className: `lg:col-span-4 border-r ${m} ${u ? "bg-neutral-900/50" : "bg-neutral-50/80"} p-6 backdrop-blur-md`, children: [
        /* @__PURE__ */ e("h4", { className: `text-xs font-bold uppercase tracking-wider ${h} mb-6 px-2 opacity-70`, children: "Select Sector Analysis" }),
        /* @__PURE__ */ e("div", { className: "space-y-3", children: c.map((y) => /* @__PURE__ */ t(
          "button",
          {
            onClick: () => p(y.id),
            className: `w-full text-left p-5 rounded-xl transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${s === y.id ? `${u ? "bg-neutral-800 text-white shadow-lg border-neutral-700" : "bg-white text-neutral-900 shadow-lg border-neutral-200"} border` : `hover:bg-black/5 dark:hover:bg-white/5 border border-transparent ${h}`}`,
            children: [
              /* @__PURE__ */ t("div", { className: "relative z-10", children: [
                /* @__PURE__ */ e("div", { className: `font-bold text-lg mb-1 ${s === y.id ? "" : "opacity-80 group-hover:opacity-100"}`, children: y.name }),
                s === y.id && /* @__PURE__ */ e("div", { className: "text-xs font-mono opacity-70", children: y.marketSize })
              ] }),
              s === y.id && /* @__PURE__ */ e(ye, { className: "w-5 h-5 text-indigo-500 relative z-10" }),
              s === y.id && /* @__PURE__ */ e("div", { className: `absolute left-0 bottom-0 top-0 w-1 ${u ? "bg-indigo-500" : "bg-indigo-600"}` })
            ]
          },
          y.id
        )) })
      ] }),
      /* @__PURE__ */ e("div", { className: `lg:col-span-8 p-8 md:p-12 ${u ? "bg-neutral-900/30" : "bg-white/50"}`, children: w && /* @__PURE__ */ t("div", { className: "h-full flex flex-col animate-in fade-in duration-500", children: [
        /* @__PURE__ */ t("div", { className: "mb-10", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-4 opacity-60", children: [
            /* @__PURE__ */ e(Fa, { className: "w-5 h-5" }),
            /* @__PURE__ */ e("span", { className: "text-xs font-mono uppercase tracking-widest", children: "Sector Overview" })
          ] }),
          /* @__PURE__ */ e("h4", { className: `text-3xl md:text-4xl font-display font-medium ${r} mb-4`, children: w.name }),
          /* @__PURE__ */ e("p", { className: `text-lg ${h} leading-relaxed max-w-3xl`, children: w.description })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12", children: [
          /* @__PURE__ */ t("div", { className: `p-6 rounded-2xl border ${m} ${g} backdrop-blur-sm`, children: [
            /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 uppercase font-bold mb-2 tracking-wider", children: "Market Size" }),
            /* @__PURE__ */ e("div", { className: `text-2xl font-mono font-medium ${r}`, children: w.marketSize })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-6 rounded-2xl border ${m} ${g} backdrop-blur-sm`, children: [
            /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 uppercase font-bold mb-2 tracking-wider", children: "Revenue Potential" }),
            /* @__PURE__ */ e("div", { className: `text-2xl font-mono font-medium ${r}`, children: w.revenuePotential })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-6 rounded-2xl border ${m} ${g} backdrop-blur-sm`, children: [
            /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 uppercase font-bold mb-2 tracking-wider", children: "Growth Rate" }),
            /* @__PURE__ */ e("div", { className: "text-2xl font-mono font-medium text-green-500", children: w.growthRate })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "mt-auto", children: [
          /* @__PURE__ */ e("h5", { className: `text-xs font-bold uppercase tracking-wider ${h} mb-6 border-b ${m} pb-4`, children: "Strategic Drivers" }),
          /* @__PURE__ */ e("div", { className: "grid gap-4", children: w.keyPoints.map((y, k) => /* @__PURE__ */ t("div", { className: "flex items-start gap-4 group", children: [
            /* @__PURE__ */ e("div", { className: `p-1.5 rounded-full mt-0.5 shrink-0 ${u ? "bg-indigo-900/50 text-indigo-400" : "bg-indigo-50 text-indigo-600"}`, children: /* @__PURE__ */ e(ye, { className: "w-3.5 h-3.5" }) }),
            /* @__PURE__ */ e("span", { className: `${r} text-base group-hover:translate-x-1 transition-transform duration-300 block`, children: y })
          ] }, k)) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ t("div", { className: `border-t ${m} bg-opacity-50 p-8 md:p-12 relative z-10`, children: [
      /* @__PURE__ */ e("h4", { className: `text-sm font-bold uppercase tracking-wider ${h} mb-10 text-center opacity-70`, children: "Strategic Growth Vectors" }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12", children: d.map((y, k) => /* @__PURE__ */ t("div", { className: "text-center group", children: [
        /* @__PURE__ */ e("div", { className: `text-5xl font-display font-medium mb-3 ${u ? "text-white group-hover:text-indigo-400" : "text-neutral-900 group-hover:text-indigo-600"} transition-colors duration-300`, children: y.value }),
        /* @__PURE__ */ e("h5", { className: `font-bold ${r} mb-2 text-lg`, children: y.title }),
        /* @__PURE__ */ e("p", { className: `text-sm ${h} leading-relaxed max-w-xs mx-auto`, children: y.description })
      ] }, k)) })
    ] })
  ] });
}, gn = ({
  productName: i,
  savingsPerUnit: l,
  volumeOptions: c,
  theme: d = "light"
}) => {
  const [a, s] = M(c.default || 1e3), [p, u] = M(5), b = d === "dark", r = b ? "bg-neutral-900" : "bg-white", h = b ? "text-white" : "text-neutral-900", m = b ? "text-neutral-400" : "text-neutral-500", g = b ? "border-neutral-800" : "border-neutral-200", w = b ? "bg-neutral-800/80" : "bg-neutral-50/80", y = Q(() => {
    const k = [];
    let n = 0;
    for (let G = 1; G <= p; G++) {
      const R = a * l.calculation(a);
      n += R, k.push({
        year: G,
        savings: R,
        cumulative: n
      });
    }
    return {
      yearlyData: k,
      totalSavings: n,
      avgYearlySavings: n / p
    };
  }, [a, p, l]);
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${g} ${r} shadow-2xl overflow-hidden relative p-8 md:p-12`, children: [
    b && /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" }),
    /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-10 relative z-10", children: [
      /* @__PURE__ */ e("div", { className: `p-3 rounded-xl ${b ? "bg-green-500/10 text-green-400" : "bg-green-50 text-green-600"}`, children: /* @__PURE__ */ e(Oe, { className: "w-6 h-6" }) }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("h3", { className: `text-3xl font-display font-medium ${h}`, children: "ROI Projection" }),
        /* @__PURE__ */ e("p", { className: `text-sm ${m}`, children: "Estimate your long-term value capture." })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 relative z-10", children: [
      /* @__PURE__ */ t("div", { className: "lg:col-span-4 space-y-8", children: [
        /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden group", children: [
          /* @__PURE__ */ e("div", { className: "absolute -top-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl group-hover:bg-green-500/30 transition-colors duration-500" }),
          /* @__PURE__ */ t("div", { className: "relative z-10", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-6", children: [
              /* @__PURE__ */ e("div", { className: "p-3 bg-white/10 rounded-xl backdrop-blur-md", children: /* @__PURE__ */ e(Ba, { className: "w-6 h-6 text-green-400" }) }),
              /* @__PURE__ */ t("div", { className: "px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider border border-green-500/20", children: [
                p,
                " Year Yield"
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2", children: "Cumulative Savings" }),
            /* @__PURE__ */ t("div", { className: "text-4xl lg:text-5xl font-mono font-medium tracking-tight mb-2", children: [
              "₹",
              y.totalSavings.toLocaleString()
            ] }),
            /* @__PURE__ */ e("p", { className: "text-neutral-400 text-sm font-light", children: "Projected return based on current volume." })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "space-y-6", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-end mb-4", children: [
              /* @__PURE__ */ t("label", { className: `text-sm font-bold uppercase tracking-wide ${m} flex items-center gap-2`, children: [
                /* @__PURE__ */ e(sa, { className: "w-4 h-4" }),
                " ",
                c.label
              ] }),
              /* @__PURE__ */ t("span", { className: `text-xl font-mono font-bold ${b ? "text-indigo-400" : "text-indigo-600"}`, children: [
                a.toLocaleString(),
                " ",
                /* @__PURE__ */ e("span", { className: "text-base text-neutral-400 font-normal", children: c.unit })
              ] })
            ] }),
            /* @__PURE__ */ e("div", { className: "relative h-10 flex items-center", children: /* @__PURE__ */ e(
              "input",
              {
                type: "range",
                min: c.min,
                max: c.max,
                step: c.step,
                value: a,
                onChange: (k) => s(Number(k.target.value)),
                className: "w-full h-2 rounded-lg appearance-none cursor-pointer relative z-20",
                style: {
                  background: (() => {
                    const k = (a - c.min) / (c.max - c.min) * 100, n = b ? "#6366f1" : "#4f46e5", G = b ? "#374151" : "#e5e7eb";
                    return `linear-gradient(to right, ${n} ${k.toFixed(1)}%, ${G} ${k.toFixed(1)}%)`;
                  })()
                }
              }
            ) }),
            /* @__PURE__ */ t("div", { className: "flex justify-between text-[10px] font-mono font-medium text-neutral-400 uppercase", children: [
              /* @__PURE__ */ e("span", { children: c.min.toLocaleString() }),
              /* @__PURE__ */ e("span", { children: c.max.toLocaleString() })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ t("label", { className: `text-sm font-bold uppercase tracking-wide ${m} mb-4 block flex items-center gap-2`, children: [
              /* @__PURE__ */ e(oa, { className: "w-4 h-4" }),
              " Period"
            ] }),
            /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-3", children: [3, 5, 10].map((k) => /* @__PURE__ */ t(
              "button",
              {
                onClick: () => u(k),
                className: `py-3 rounded-xl text-sm font-bold transition-all duration-300 ${p === k ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-lg scale-105" : `bg-neutral-100 dark:bg-neutral-800 ${h} hover:bg-neutral-200 dark:hover:bg-neutral-700`}`,
                children: [
                  k,
                  " Years"
                ]
              },
              k
            )) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "lg:col-span-8 flex flex-col justify-between", children: [
        /* @__PURE__ */ t("div", { className: "flex items-end justify-between h-64 mb-8 pt-10 px-4 border-b border-dashed border-neutral-200 dark:border-neutral-800 gap-2 md:gap-4 relative", children: [
          /* @__PURE__ */ t("div", { className: "absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 z-0", children: [
            /* @__PURE__ */ e("div", { className: "w-full h-px border-t border-dashed border-neutral-400" }),
            /* @__PURE__ */ e("div", { className: "w-full h-px border-t border-dashed border-neutral-400" }),
            /* @__PURE__ */ e("div", { className: "w-full h-px border-t border-dashed border-neutral-400" }),
            /* @__PURE__ */ e("div", { className: "w-full h-px border-t border-dashed border-neutral-400" })
          ] }),
          y.yearlyData.map((k, n) => {
            const G = k.cumulative / y.totalSavings * 100;
            return /* @__PURE__ */ t("div", { className: "relative flex flex-col items-center flex-1 group z-10", children: [
              /* @__PURE__ */ t("div", { className: "relative w-full max-w-[60px] flex items-end justify-center h-full group-hover:scale-105 transition-transform origin-bottom duration-300", children: [
                /* @__PURE__ */ t(
                  "div",
                  {
                    className: "w-full rounded-t-lg opacity-80 group-hover:opacity-100 transition-all duration-500 relative overflow-hidden bg-green-500/20",
                    style: { height: `${G}%` },
                    children: [
                      /* @__PURE__ */ e("div", { className: "absolute bottom-0 inset-x-0 bg-green-500 rounded-t-lg transition-all duration-500 ease-out", style: { height: "100%" } }),
                      /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/20 to-transparent pointer-events-none" })
                    ]
                  }
                ),
                /* @__PURE__ */ t("div", { className: "absolute -top-12 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-xs font-bold py-1 px-3 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none", children: [
                  "₹",
                  k.cumulative.toLocaleString(),
                  /* @__PURE__ */ e("div", { className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 rotate-45" })
                ] })
              ] }),
              /* @__PURE__ */ t("span", { className: `mt-3 text-xs font-mono font-bold ${m}`, children: [
                "Y",
                k.year
              ] })
            ] }, k.year);
          })
        ] }),
        /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          y.yearlyData.slice(0, 3).map((k, n) => /* @__PURE__ */ t("div", { className: `flex items-center justify-between p-4 rounded-xl border ${g} ${w} group hover:border-indigo-500/30 transition-colors`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ t("div", { className: `w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${b ? "bg-neutral-800 text-neutral-400" : "bg-neutral-100 text-neutral-500"}`, children: [
                "Y",
                k.year
              ] }),
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ e("div", { className: `text-xs uppercase font-bold tracking-wide ${m}`, children: "Cumulative Savings" }),
                /* @__PURE__ */ t("div", { className: `font-mono font-medium ${h} group-hover:text-green-500 transition-colors`, children: [
                  "₹",
                  k.cumulative.toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e(ye, { className: `w-4 h-4 ${m} group-hover:translate-x-1 transition-transform` })
          ] }, k.year)),
          y.yearlyData.length > 3 && /* @__PURE__ */ t("div", { className: `text-center text-xs font-bold uppercase tracking-widest ${m} pt-2`, children: [
            "& ",
            y.yearlyData.length - 3,
            " more years projected"
          ] })
        ] })
      ] })
    ] })
  ] });
}, fn = ({
  productName: i,
  impacts: l,
  carbonCredits: c,
  theme: d = "light"
}) => {
  const a = d === "dark", s = a ? "bg-neutral-900" : "bg-white", p = a ? "text-white" : "text-neutral-900", u = a ? "text-neutral-400" : "text-neutral-500", b = a ? "border-neutral-800" : "border-neutral-200", r = a ? "bg-neutral-800/80" : "bg-neutral-50/80", h = {
    carbon: Ha,
    water: je,
    energy: W,
    waste: Oa
  };
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${b} ${s} shadow-xl p-8 md:p-12 relative overflow-hidden`, children: [
    a && /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" }),
    /* @__PURE__ */ t("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 relative z-10", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ e("div", { className: `p-2 rounded-lg ${a ? "bg-green-500/10 text-green-400" : "bg-green-50 text-green-600"}`, children: /* @__PURE__ */ e(Ee, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ e("h3", { className: `text-xs font-bold uppercase tracking-widest ${a ? "text-green-400" : "text-green-700"}`, children: "Sustainability Ledger" })
        ] }),
        /* @__PURE__ */ e("p", { className: `text-3xl md:text-4xl font-display font-medium ${p}`, children: "Environmental ROI" })
      ] }),
      c && /* @__PURE__ */ t("div", { className: `flex items-center gap-4 px-5 py-3 rounded-2xl border ${b} ${a ? "bg-neutral-800/50" : "bg-neutral-50"} backdrop-blur-sm`, children: [
        /* @__PURE__ */ t("div", { className: "text-right", children: [
          /* @__PURE__ */ e("div", { className: "text-[10px] uppercase font-bold tracking-wider text-neutral-500 mb-0.5", children: "Carbon Credits" }),
          /* @__PURE__ */ e("div", { className: `text-xl font-mono font-medium ${a ? "text-green-400" : "text-green-600"}`, children: c.value })
        ] }),
        /* @__PURE__ */ e("div", { className: `w-px h-8 ${a ? "bg-neutral-700" : "bg-neutral-200"}` }),
        /* @__PURE__ */ e(la, { className: `w-6 h-6 ${a ? "text-green-500" : "text-green-600"}` })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10", children: l.map((m, g) => {
      const w = h[m.type] || Ee;
      return /* @__PURE__ */ t("div", { className: `group relative overflow-hidden border ${b} ${r} backdrop-blur-md p-6 rounded-2xl hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1`, children: [
        /* @__PURE__ */ e("div", { className: "absolute -bottom-4 -right-4 text-current opacity-5 group-hover:opacity-10 transition-opacity transform rotate-12 scale-150", children: /* @__PURE__ */ e(w, { className: `w-24 h-24 ${a ? "text-white" : "text-neutral-900"}` }) }),
        /* @__PURE__ */ t("div", { className: "relative z-10", children: [
          /* @__PURE__ */ e("div", { className: `w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${a ? "bg-neutral-800 text-green-400" : "bg-white text-green-600 shadow-sm"}`, children: /* @__PURE__ */ e(w, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ e("div", { className: `text-3xl font-display font-medium ${p} mb-1 tracking-tight`, children: m.value }),
          /* @__PURE__ */ e("div", { className: `text-xs ${u} font-bold uppercase tracking-wider mb-2`, children: m.label }),
          /* @__PURE__ */ e("div", { className: `w-full h-1 rounded-full ${a ? "bg-neutral-700" : "bg-neutral-200"} mt-4 overflow-hidden`, children: /* @__PURE__ */ e("div", { className: "h-full bg-green-500 rounded-full w-3/4 opacity-70 group-hover:w-full group-hover:opacity-100 transition-all duration-700" }) })
        ] })
      ] }, g);
    }) }),
    c && /* @__PURE__ */ t("div", { className: "mt-8 pt-6 border-t border-dashed border-neutral-700/50 flex items-center gap-3 text-sm text-neutral-500", children: [
      /* @__PURE__ */ e("div", { className: "w-2 h-2 rounded-full bg-green-500 animate-pulse" }),
      /* @__PURE__ */ e("p", { className: "max-w-2xl", children: c.description })
    ] })
  ] });
}, vn = ({
  productName: i,
  certifications: l,
  testingStandards: c,
  qualityMetrics: d,
  theme: a = "light"
}) => {
  const s = a === "dark", p = s ? "bg-neutral-900" : "bg-neutral-50", u = s ? "text-white" : "text-neutral-900", b = s ? "text-neutral-400" : "text-neutral-500", r = s ? "border-neutral-800" : "border-neutral-200", h = s ? "bg-neutral-800/50" : "bg-white";
  return /* @__PURE__ */ t("div", { className: `relative overflow-hidden rounded-3xl border ${r} ${p} shadow-2xl`, children: [
    s && /* @__PURE__ */ t(Ce, { children: [
      /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" }),
      /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" })
    ] }),
    /* @__PURE__ */ t("div", { className: "p-8 md:p-12 relative z-10", children: [
      /* @__PURE__ */ t("div", { className: "mb-12", children: [
        /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4 ${s ? "bg-blue-900/30 text-blue-400" : "bg-blue-50 text-blue-700"}`, children: [
          /* @__PURE__ */ e(Ka, { className: "w-4 h-4" }),
          /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-wider", children: "Quality Assurance" })
        ] }),
        /* @__PURE__ */ e("h3", { className: `text-3xl lg:text-4xl font-display font-medium ${u} mb-2`, children: "Certifications & Standards" }),
        /* @__PURE__ */ e("p", { className: `text-lg ${b} max-w-2xl`, children: "rigorous testing protocols ensuring consistency and compliance with global standards." })
      ] }),
      /* @__PURE__ */ e("div", { className: "space-y-4 mb-12", children: l.map((m, g) => /* @__PURE__ */ t("div", { className: `flex items-center gap-6 p-6 rounded-2xl border ${r} ${h} group transition-all hover:border-blue-500/50`, children: [
        /* @__PURE__ */ e("div", { className: `w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${s ? "bg-blue-900/20 text-blue-400" : "bg-blue-50 text-blue-600"}`, children: /* @__PURE__ */ e(pe, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ t("div", { className: "flex-grow", children: [
          /* @__PURE__ */ e("h4", { className: `text-lg font-display font-bold ${u} mb-1`, children: m.name }),
          /* @__PURE__ */ e("p", { className: `text-sm ${b}`, children: m.description })
        ] }),
        m.certNumber && /* @__PURE__ */ e("div", { className: `hidden md:block px-3 py-1 rounded text-xs font-mono font-bold uppercase ${s ? "bg-neutral-800 text-neutral-400 border border-neutral-700" : "bg-neutral-100 text-neutral-500 border border-neutral-200"}`, children: m.certNumber })
      ] }, g)) }),
      /* @__PURE__ */ t("div", { className: "space-y-12", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("h4", { className: `text-xl font-display font-medium ${u} mb-6 flex items-center gap-3`, children: [
            /* @__PURE__ */ e(aa, { className: "w-5 h-5 text-neutral-400" }),
            "Testing Protocols"
          ] }),
          /* @__PURE__ */ e("div", { className: `divide-y ${s ? "divide-neutral-800" : "divide-neutral-200"} border-t ${r}`, children: c.map((m, g) => /* @__PURE__ */ t("div", { className: "py-5 flex items-start md:items-center justify-between group px-2", children: [
            /* @__PURE__ */ t("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ e("div", { className: "mt-1.5 md:mt-0", children: /* @__PURE__ */ e("div", { className: `w-2 h-2 rounded-full ${s ? "bg-neutral-700 group-hover:bg-blue-500" : "bg-neutral-300 group-hover:bg-blue-500"} transition-colors` }) }),
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ e("h5", { className: `font-bold ${u} text-base mb-1`, children: m.name }),
                /* @__PURE__ */ e("p", { className: `text-sm ${b}`, children: m.description })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `text-xs font-mono tracking-wide uppercase shrink-0 ml-6 ${s ? "text-blue-400" : "text-blue-600"}`, children: [
              "Ref: ",
              m.code
            ] })
          ] }, g)) })
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("h4", { className: `text-xl font-display font-medium ${u} mb-6 flex items-center gap-3`, children: [
            /* @__PURE__ */ e(pt, { className: "w-5 h-5 text-neutral-400" }),
            "Quality Benchmarks"
          ] }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: d.map((m, g) => /* @__PURE__ */ t("div", { className: `p-6 rounded-xl border ${r} ${h} flex flex-col items-center justify-center text-center`, children: [
            /* @__PURE__ */ e("div", { className: `text-3xl font-display font-bold ${u} mb-2`, children: m.value }),
            /* @__PURE__ */ e("div", { className: `text-xs font-bold uppercase tracking-widest ${b}`, children: m.label })
          ] }, g)) }),
          /* @__PURE__ */ t("div", { className: `mt-8 p-6 rounded-xl ${s ? "bg-neutral-800" : "bg-neutral-100"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: `text-sm ${b} mb-3`, children: "Full quality reports available for every batch." }),
            /* @__PURE__ */ e("button", { className: `text-xs font-bold uppercase tracking-widest ${s ? "text-white hover:text-blue-400" : "text-neutral-900 hover:text-blue-600"} transition-colors border-b-2 border-transparent hover:border-current`, children: "Download QC Manual" })
          ] })
        ] })
      ] })
    ] })
  ] });
}, Nn = () => {
  const [i, l] = M(50), [c, d] = M(!1), [a, s] = M("graphacrete"), p = (g) => {
    if (!c) return;
    const w = g.currentTarget.getBoundingClientRect(), k = (g.clientX - w.left) / w.width * 100;
    l(Math.max(0, Math.min(100, k)));
  }, u = (g) => {
    if (!c) return;
    const w = g.currentTarget.getBoundingClientRect(), k = (g.touches[0].clientX - w.left) / w.width * 100;
    l(Math.max(0, Math.min(100, k)));
  }, b = {
    graphacrete: { name: "Graphacrete", tagline: "High-Performance Concrete Additive" },
    graffisol: { name: "Graffisol", tagline: "Next-Generation Solar Panel Coating" },
    ceraphene: { name: "Ceraphene", tagline: "Ultra-Durable Ceramic Coating" },
    hdgpe: { name: "HD-G-PE", tagline: "Graphene-Reinforced Polymer Enhancer" }
  }, r = {
    graphacrete: {
      before: {
        title: "Traditional Concrete (M30)",
        color: "from-red-600/80 to-orange-600/80",
        stats: [
          { label: "Compressive Strength", value: "30 MPa", icon: ee },
          { label: "Cement Required", value: "100%", icon: A },
          { label: "Water Permeability", value: "High", icon: A },
          { label: "Cost per m³", value: "₹5,430", icon: A }
        ]
      },
      after: {
        title: "With Graphacrete (M50 Performance)",
        color: "from-brand-600/80 to-teal-600/80",
        stats: [
          { label: "Compressive Strength", value: "50 MPa", icon: A },
          { label: "Cement Required", value: "80-85%", icon: ee },
          { label: "Water Permeability", value: "30-45% Lower", icon: ee },
          { label: "Cost per m³", value: "₹5,000", icon: ee }
        ]
      }
    },
    graffisol: {
      before: {
        title: "Standard Solar Panels",
        color: "from-red-600/80 to-orange-600/80",
        stats: [
          { label: "Energy Output", value: "100%", icon: ee },
          { label: "Panel Temperature", value: "High", icon: A },
          { label: "Soiling Loss", value: "15-20%", icon: A },
          { label: "ROI Period", value: "6-7 years", icon: A }
        ]
      },
      after: {
        title: "With Graffisol Coating",
        color: "from-brand-600/80 to-teal-600/80",
        stats: [
          { label: "Energy Output", value: "110-112%", icon: A },
          { label: "Panel Temperature", value: "5-6°C Cooler", icon: ee },
          { label: "Soiling Loss", value: "8-12%", icon: ee },
          { label: "ROI Period", value: "~5 years", icon: ee }
        ]
      }
    },
    ceraphene: {
      before: {
        title: "Premium Graphene (Competitors)",
        color: "from-red-600/80 to-orange-600/80",
        stats: [
          { label: "Cost per 50ml", value: "₹15,000", icon: A },
          { label: "Hardness", value: "9H", icon: ee },
          { label: "Accessibility", value: "Limited", icon: ee },
          { label: "Market Position", value: "Premium Only", icon: ee }
        ]
      },
      after: {
        title: "With Ceraphene",
        color: "from-brand-600/80 to-teal-600/80",
        stats: [
          { label: "Cost per 50ml", value: "₹5,000", icon: ee },
          { label: "Hardness", value: "9H+", icon: A },
          { label: "Accessibility", value: "Mass Market", icon: A },
          { label: "Market Position", value: "Democratized", icon: A }
        ]
      }
    },
    hdgpe: {
      before: {
        title: "Standard HDPE",
        color: "from-red-600/80 to-orange-600/80",
        stats: [
          { label: "Elongation at Break", value: "Standard", icon: ee },
          { label: "Product Lifespan", value: "Baseline", icon: ee },
          { label: "Flexibility", value: "Moderate", icon: ee },
          { label: "Durability", value: "Good", icon: ee }
        ]
      },
      after: {
        title: "With HD-G-PE",
        color: "from-brand-600/80 to-teal-600/80",
        stats: [
          { label: "Elongation at Break", value: "20× Better", icon: A },
          { label: "Product Lifespan", value: "+20%", icon: A },
          { label: "Flexibility", value: "Enhanced", icon: A },
          { label: "Durability", value: "Superior", icon: A }
        ]
      }
    }
  }, h = r[a], m = b[a];
  return /* @__PURE__ */ e("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-12",
        children: [
          /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6", children: [
            /* @__PURE__ */ e(Et, { className: "w-4 h-4 text-brand-400" }),
            /* @__PURE__ */ e("span", { className: "text-xs font-mono text-brand-400 tracking-widest uppercase", children: "Interactive Comparison" })
          ] }),
          /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "Before & After" }),
          /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto mb-8", children: "Drag the slider to see the transformation with Monoatom products" }),
          /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-3", children: Object.keys(r).map((g) => /* @__PURE__ */ e(
            "button",
            {
              onClick: () => s(g),
              className: `px-6 py-3 rounded-sm font-mono font-semibold transition-all border ${a === g ? "bg-brand-500 text-white border-brand-400" : "bg-neutral-900 text-neutral-300 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700"}`,
              children: b[g].name
            },
            g
          )) })
        ]
      }
    ),
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        className: "relative bg-neutral-950 rounded-sm overflow-hidden border border-neutral-800",
        onMouseMove: p,
        onMouseDown: () => d(!0),
        onMouseUp: () => d(!1),
        onMouseLeave: () => d(!1),
        onTouchMove: u,
        onTouchStart: () => d(!0),
        onTouchEnd: () => d(!1),
        style: { cursor: c ? "grabbing" : "grab", height: "600px" },
        children: [
          /* @__PURE__ */ e("div", { className: `absolute inset-0 bg-gradient-to-br ${h.before.color}`, children: /* @__PURE__ */ t("div", { className: "h-full flex flex-col items-center justify-center p-8 md:p-12", children: [
            /* @__PURE__ */ e("h3", { className: "text-2xl md:text-3xl font-display font-bold text-white mb-8 text-center", children: h.before.title }),
            /* @__PURE__ */ e("div", { className: "space-y-4 w-full max-w-md", children: h.before.stats.map((g, w) => {
              const y = g.icon;
              return /* @__PURE__ */ t(
                f.div,
                {
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: w * 0.1 },
                  className: "bg-black/40 backdrop-blur border border-white/10 p-4 rounded-sm",
                  children: [
                    /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ e("span", { className: "text-white/80 text-sm font-mono", children: g.label }),
                      /* @__PURE__ */ e(y, { className: "w-5 h-5 text-white/60" })
                    ] }),
                    /* @__PURE__ */ e("div", { className: "text-xl md:text-2xl font-mono font-bold text-white mt-1", children: g.value })
                  ]
                },
                w
              );
            }) })
          ] }) }),
          /* @__PURE__ */ e(
            "div",
            {
              className: `absolute inset-0 bg-gradient-to-br ${h.after.color}`,
              style: { clipPath: `inset(0 0 0 ${i}%)` },
              children: /* @__PURE__ */ t("div", { className: "h-full flex flex-col items-center justify-center p-8 md:p-12", children: [
                /* @__PURE__ */ e("h3", { className: "text-2xl md:text-3xl font-display font-bold text-white mb-8 text-center", children: h.after.title }),
                /* @__PURE__ */ e("div", { className: "space-y-4 w-full max-w-md", children: h.after.stats.map((g, w) => {
                  const y = g.icon;
                  return /* @__PURE__ */ t(
                    f.div,
                    {
                      initial: { opacity: 0, x: 20 },
                      animate: { opacity: 1, x: 0 },
                      transition: { delay: w * 0.1 },
                      className: "bg-black/40 backdrop-blur border border-white/10 p-4 rounded-sm",
                      children: [
                        /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
                          /* @__PURE__ */ e("span", { className: "text-white/80 text-sm font-mono", children: g.label }),
                          /* @__PURE__ */ e(y, { className: "w-5 h-5 text-white/90" })
                        ] }),
                        /* @__PURE__ */ e("div", { className: "text-xl md:text-2xl font-mono font-bold text-white mt-1", children: g.value })
                      ]
                    },
                    w
                  );
                }) })
              ] })
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              className: "absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]",
              style: { left: `${i}%` },
              children: /* @__PURE__ */ e("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-brand-500", children: /* @__PURE__ */ e(Et, { className: "w-6 h-6 text-neutral-900" }) })
            }
          ),
          !c && /* @__PURE__ */ e(
            f.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/70 backdrop-blur border border-white/20 rounded-sm text-white text-sm font-mono",
              children: "👆 Drag to compare"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.4 },
        className: "mt-12 bg-gradient-to-r from-brand-500/10 to-green-500/10 border border-brand-500/30 rounded-sm p-8 text-center backdrop-blur",
        children: [
          /* @__PURE__ */ e(W, { className: "w-12 h-12 text-brand-400 mx-auto mb-4" }),
          /* @__PURE__ */ t("h3", { className: "text-2xl font-display font-bold text-white mb-2", children: [
            m.name,
            " Key Benefit"
          ] }),
          /* @__PURE__ */ e("p", { className: "text-xl text-neutral-300 font-mono", children: m.tagline })
        ]
      }
    )
  ] }) });
}, yn = () => {
  const [i, l] = M("graphacrete"), c = {
    graphacrete: {
      name: "Graphacrete",
      tagline: "Transform ordinary concrete into high-performance material",
      steps: [
        {
          number: 1,
          title: "Add to Concrete Mix",
          description: "Add 0.05-0.10% Graphacrete by weight of cement during concrete batching",
          icon: je,
          color: "from-blue-500/80 to-cyan-500/80"
        },
        {
          number: 2,
          title: "Mix Thoroughly",
          description: "Blend for 2-3 minutes ensuring uniform dispersion throughout the concrete",
          icon: W,
          color: "from-purple-500/80 to-pink-500/80"
        },
        {
          number: 3,
          title: "Pour & Cure",
          description: "Pour concrete as usual and follow standard curing procedures",
          icon: V,
          color: "from-orange-500/80 to-red-500/80"
        },
        {
          number: 4,
          title: "Achieve Superior Performance",
          description: "Get 40-50% higher strength, 15-20% cement savings, and better durability",
          icon: A,
          color: "from-green-500/80 to-teal-500/80"
        }
      ],
      before: {
        strength: "M30",
        cement: "100%",
        permeability: "High",
        cost: "₹5,430/m³"
      },
      after: {
        strength: "M50",
        cement: "80-85%",
        permeability: "Low (30-45% ↓)",
        cost: "₹5,000/m³"
      }
    },
    graffisol: {
      name: "Graffisol",
      tagline: "Supercharge solar panels with graphene coating",
      steps: [
        {
          number: 1,
          title: "Clean Panel Surface",
          description: "Thoroughly clean solar panel glass to remove dust and contaminants",
          icon: je,
          color: "from-blue-500/80 to-cyan-500/80"
        },
        {
          number: 2,
          title: "Apply Graffisol Coating",
          description: "Spray or roll Graffisol coating evenly across the panel surface",
          icon: W,
          color: "from-purple-500/80 to-pink-500/80"
        },
        {
          number: 3,
          title: "Let It Cure",
          description: "Allow 2-4 hours for coating to cure and bond to the glass surface",
          icon: V,
          color: "from-orange-500/80 to-red-500/80"
        },
        {
          number: 4,
          title: "Generate More Energy",
          description: "Enjoy 10-12% higher energy output with reduced soiling and cooling",
          icon: A,
          color: "from-green-500/80 to-teal-500/80"
        }
      ],
      before: {
        energy: "100%",
        temperature: "High",
        soiling: "15-20% loss",
        roi: "6-7 years"
      },
      after: {
        energy: "110-112%",
        temperature: "5-6°C cooler",
        soiling: "8-12% loss",
        roi: "~5 years"
      }
    },
    ceraphene: {
      name: "Ceraphene",
      tagline: "Premium ceramic coating at affordable prices",
      steps: [
        {
          number: 1,
          title: "Prepare Surface",
          description: "Clean and decontaminate the surface (car, bike, or any substrate)",
          icon: je,
          color: "from-blue-500/80 to-cyan-500/80"
        },
        {
          number: 2,
          title: "Apply Ceraphene",
          description: "Apply thin, even layer using applicator pad in cross-hatch pattern",
          icon: W,
          color: "from-purple-500/80 to-pink-500/80"
        },
        {
          number: 3,
          title: "Buff & Cure",
          description: "Wait 1-2 minutes, then buff off excess and let cure for 24 hours",
          icon: V,
          color: "from-orange-500/80 to-red-500/80"
        },
        {
          number: 4,
          title: "Enjoy 9H+ Protection",
          description: "Get 3-4+ years of ultra-durable, hydrophobic, scratch-resistant protection",
          icon: A,
          color: "from-green-500/80 to-teal-500/80"
        }
      ],
      before: {
        cost: "₹15,000/50ml",
        hardness: "9H",
        accessibility: "Limited",
        market: "Premium only"
      },
      after: {
        cost: "₹5,000/50ml",
        hardness: "9H+",
        accessibility: "Mass market",
        market: "Democratized"
      }
    },
    hdgpe: {
      name: "HD-G-PE",
      tagline: "Reinforce polymers with graphene power",
      steps: [
        {
          number: 1,
          title: "Add to Polymer Base",
          description: "Mix HD-G-PE masterbatch with HDPE during compounding process",
          icon: je,
          color: "from-blue-500/80 to-cyan-500/80"
        },
        {
          number: 2,
          title: "Blend Uniformly",
          description: "Ensure thorough dispersion through extrusion or injection molding",
          icon: W,
          color: "from-purple-500/80 to-pink-500/80"
        },
        {
          number: 3,
          title: "Process as Usual",
          description: "Use standard processing parameters for your application",
          icon: V,
          color: "from-orange-500/80 to-red-500/80"
        },
        {
          number: 4,
          title: "Get Enhanced Performance",
          description: "20× elongation, 30% tensile strength, 20% longer lifespan",
          icon: A,
          color: "from-green-500/80 to-teal-500/80"
        }
      ],
      before: {
        elongation: "Standard",
        lifespan: "Baseline",
        flexibility: "Moderate",
        durability: "Good"
      },
      after: {
        elongation: "20× better",
        lifespan: "+20%",
        flexibility: "Enhanced",
        durability: "Superior"
      }
    }
  }, d = c[i];
  return /* @__PURE__ */ e("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6", children: [
            /* @__PURE__ */ e(Ct, { className: "w-4 h-4 text-brand-400" }),
            /* @__PURE__ */ e("span", { className: "text-xs font-mono text-brand-400 tracking-widest uppercase", children: "Simple 4-Step Process" })
          ] }),
          /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "How It Works" }),
          /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto mb-8", children: "Revolutionary technology made simple. See how easy it is to upgrade your materials." }),
          /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-3", children: Object.keys(c).map((a) => /* @__PURE__ */ e(
            "button",
            {
              onClick: () => l(a),
              className: `px-6 py-3 rounded-sm font-mono font-semibold transition-all border ${i === a ? "bg-brand-500 text-white border-brand-400" : "bg-neutral-900 text-neutral-300 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700"}`,
              children: c[a].name
            },
            a
          )) })
        ]
      }
    ),
    /* @__PURE__ */ e(
      f.div,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-12",
        children: /* @__PURE__ */ e("p", { className: "text-2xl font-display text-brand-400", children: d.tagline })
      },
      i
    ),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16", children: d.steps.map((a, s) => {
      const p = a.icon;
      return /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: s * 0.1 },
          whileHover: { scale: 1.05, y: -5 },
          className: "relative group",
          children: [
            /* @__PURE__ */ t("div", { className: `bg-gradient-to-br ${a.color} rounded-sm p-6 h-full border border-white/10 backdrop-blur shadow-lg hover:shadow-2xl transition-all`, children: [
              /* @__PURE__ */ e("div", { className: "absolute -top-3 -left-3 w-12 h-12 bg-black border-2 border-white/20 rounded-full flex items-center justify-center shadow-lg", children: /* @__PURE__ */ e("span", { className: "text-xl font-mono font-bold text-white", children: a.number }) }),
              /* @__PURE__ */ e("div", { className: "mb-6 mt-4", children: /* @__PURE__ */ e("div", { className: "inline-flex p-4 bg-black/30 backdrop-blur rounded-sm border border-white/20", children: /* @__PURE__ */ e(p, { className: "w-8 h-8 text-white" }) }) }),
              /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white mb-3", children: a.title }),
              /* @__PURE__ */ e("p", { className: "text-sm text-white/80 leading-relaxed", children: a.description })
            ] }),
            s < d.steps.length - 1 && /* @__PURE__ */ e("div", { className: "hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20", children: /* @__PURE__ */ e(ye, { className: "w-6 h-6 text-brand-400" }) })
          ]
        },
        s
      );
    }) }),
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.5 },
        className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12",
        children: [
          /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-sm p-8 backdrop-blur", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-red-500/20 border border-red-500/30 rounded-sm flex items-center justify-center", children: /* @__PURE__ */ e("span", { className: "text-2xl", children: "⚠️" }) }),
              /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white", children: "Before" })
            ] }),
            /* @__PURE__ */ e("div", { className: "space-y-3", children: Object.entries(d.before).map(([a, s], p) => /* @__PURE__ */ t(
              f.div,
              {
                initial: { opacity: 0, x: -10 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.6 + p * 0.1 },
                className: "flex justify-between items-center p-3 bg-black/40 backdrop-blur rounded-sm border border-white/10",
                children: [
                  /* @__PURE__ */ e("span", { className: "text-white/70 font-mono text-sm uppercase", children: a }),
                  /* @__PURE__ */ e("span", { className: "text-white font-mono font-bold", children: s })
                ]
              },
              p
            )) })
          ] }),
          /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-green-600/20 to-teal-600/20 border border-green-500/30 rounded-sm p-8 backdrop-blur", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-sm flex items-center justify-center", children: /* @__PURE__ */ e("span", { className: "text-2xl", children: "✅" }) }),
              /* @__PURE__ */ t("h3", { className: "text-2xl font-display font-bold text-white", children: [
                "After ",
                d.name
              ] })
            ] }),
            /* @__PURE__ */ e("div", { className: "space-y-3", children: Object.entries(d.after).map(([a, s], p) => /* @__PURE__ */ t(
              f.div,
              {
                initial: { opacity: 0, x: 10 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.6 + p * 0.1 },
                className: "flex justify-between items-center p-3 bg-black/40 backdrop-blur rounded-sm border border-white/10",
                children: [
                  /* @__PURE__ */ e("span", { className: "text-white/70 font-mono text-sm uppercase", children: a }),
                  /* @__PURE__ */ e("span", { className: "text-white font-mono font-bold", children: s })
                ]
              },
              p
            )) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e(
      f.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.8 },
        className: "text-center",
        children: /* @__PURE__ */ t("div", { className: "inline-flex flex-col md:flex-row items-center gap-4 p-8 bg-gradient-to-r from-brand-500/20 to-green-500/20 border border-brand-500/30 rounded-sm backdrop-blur", children: [
          /* @__PURE__ */ t("div", { className: "text-left", children: [
            /* @__PURE__ */ t("h3", { className: "text-2xl font-display font-bold text-white mb-2", children: [
              "Ready to upgrade your ",
              d.name.toLowerCase(),
              "?"
            ] }),
            /* @__PURE__ */ e("p", { className: "text-neutral-300", children: "Get started with our simple 4-step process today" })
          ] }),
          /* @__PURE__ */ e("button", { className: "px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-mono font-bold rounded-sm transition-all border border-brand-400 whitespace-nowrap", children: "Get Started" })
        ] })
      }
    )
  ] }) });
}, wn = () => {
  const [i, l] = M("graphacrete"), [c, d] = M(!0), [a, s] = M([]), [p, u] = M({
    efficiency: 0,
    output: 0,
    savings: 0,
    uptime: 0
  }), b = {
    graphacrete: {
      name: "Graphacrete",
      icon: je,
      color: "#0d9488",
      baseEfficiency: 145,
      baseOutput: 50,
      baseSavings: 18,
      baseUptime: 98.5,
      unit: "MPa",
      outputLabel: "Compressive Strength",
      savingsLabel: "Cement Savings",
      metrics: [
        { label: "Active Projects", value: "127", icon: Ge },
        { label: "M³ Produced Today", value: "45,230", icon: nt },
        { label: "CO₂ Saved (kg)", value: "12,450", icon: A },
        { label: "Cost Savings", value: "₹1.2M", icon: W }
      ]
    },
    graffisol: {
      name: "Graffisol",
      icon: Ye,
      color: "#f59e0b",
      baseEfficiency: 111,
      baseOutput: 112,
      baseSavings: 22,
      baseUptime: 99.2,
      unit: "%",
      outputLabel: "Energy Output",
      savingsLabel: "Soiling Reduction",
      metrics: [
        { label: "Coated Panels", value: "8,940", icon: Ge },
        { label: "MW Capacity", value: "245", icon: Ye },
        { label: "Extra kWh Today", value: "28,450", icon: A },
        { label: "Revenue Boost", value: "₹2.1M", icon: W }
      ]
    },
    ceraphene: {
      name: "Ceraphene",
      icon: W,
      color: "#8b5cf6",
      baseEfficiency: 165,
      baseOutput: 94,
      baseSavings: 67,
      baseUptime: 97.8,
      unit: "%",
      outputLabel: "Hardness Rating",
      savingsLabel: "Cost Savings",
      metrics: [
        { label: "Applications Today", value: "342", icon: Ge },
        { label: "M² Coated", value: "1,240", icon: nt },
        { label: "Customer Savings", value: "₹4.2M", icon: A },
        { label: "Durability Years", value: "3.5+", icon: W }
      ]
    },
    hdgpe: {
      name: "HD-G-PE",
      icon: nt,
      color: "#06b6d4",
      baseEfficiency: 2e3,
      baseOutput: 130,
      baseSavings: 20,
      baseUptime: 98.9,
      unit: "%",
      outputLabel: "Elongation Improvement",
      savingsLabel: "Lifespan Extension",
      metrics: [
        { label: "Production Batches", value: "89", icon: Ge },
        { label: "Tonnes Produced", value: "567", icon: nt },
        { label: "Quality Score", value: "9.7/10", icon: A },
        { label: "Customer Satisfaction", value: "98%", icon: W }
      ]
    }
  }, r = b[i], h = (g) => ({
    time: g,
    efficiency: r.baseEfficiency + (Math.random() - 0.5) * 3,
    output: r.baseOutput + (Math.random() - 0.5) * (3 * 0.5),
    savings: r.baseSavings + (Math.random() - 0.5) * (3 * 0.3),
    uptime: r.baseUptime + (Math.random() - 0.5) * 0.5
  });
  It(() => {
    const g = [], w = Date.now();
    for (let y = 20; y >= 0; y--)
      g.push(h(new Date(w - y * 3e3).toLocaleTimeString("en-US", { hour12: !1, hour: "2-digit", minute: "2-digit", second: "2-digit" })));
    s(g), u({
      efficiency: g[g.length - 1].efficiency,
      output: g[g.length - 1].output,
      savings: g[g.length - 1].savings,
      uptime: g[g.length - 1].uptime
    });
  }, [i]), It(() => {
    if (!c) return;
    const g = setInterval(() => {
      const w = h((/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", { hour12: !1, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
      s((y) => [...y, w].slice(-20)), u({
        efficiency: w.efficiency,
        output: w.output,
        savings: w.savings,
        uptime: w.uptime
      });
    }, 3e3);
    return () => clearInterval(g);
  }, [c, r]);
  const m = r.icon;
  return /* @__PURE__ */ e("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-12",
        children: [
          /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6", children: [
            /* @__PURE__ */ e(Ge, { className: "w-4 h-4 text-brand-400 animate-pulse" }),
            /* @__PURE__ */ e("span", { className: "text-xs font-mono text-brand-400 tracking-widest uppercase", children: "Real-Time Performance" })
          ] }),
          /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "Live Performance Monitor" }),
          /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto mb-8", children: "Watch our products perform in real-time across active deployments" }),
          /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-3 mb-6", children: Object.keys(b).map((g) => {
            const w = b[g].icon;
            return /* @__PURE__ */ t(
              "button",
              {
                onClick: () => l(g),
                className: `px-6 py-3 rounded-sm font-mono font-semibold transition-all border inline-flex items-center gap-2 ${i === g ? "bg-brand-500 text-white border-brand-400 shadow-[0_0_20px_rgba(13,148,136,0.3)]" : "bg-neutral-900 text-neutral-300 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700"}`,
                children: [
                  /* @__PURE__ */ e(w, { className: "w-5 h-5" }),
                  b[g].name
                ]
              },
              g
            );
          }) }),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => d(!c),
              className: `inline-flex items-center gap-2 px-4 py-2 rounded-sm font-mono text-sm transition-all ${c ? "bg-green-500/20 border border-green-500/40 text-green-400" : "bg-neutral-800 border border-neutral-700 text-neutral-400"}`,
              children: c ? /* @__PURE__ */ t(Ce, { children: [
                /* @__PURE__ */ e(ra, { className: "w-4 h-4 animate-pulse" }),
                /* @__PURE__ */ e("span", { children: "LIVE" })
              ] }) : /* @__PURE__ */ t(Ce, { children: [
                /* @__PURE__ */ e(Va, { className: "w-4 h-4" }),
                /* @__PURE__ */ e("span", { children: "PAUSED" })
              ] })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e(se, { mode: "wait", children: /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.3 },
        children: [
          /* @__PURE__ */ t("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8", children: [
            /* @__PURE__ */ t(
              f.div,
              {
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: 0.1 },
                className: "bg-gradient-to-br from-brand-500/20 to-teal-500/20 border border-brand-500/40 rounded-sm p-6 backdrop-blur",
                children: [
                  /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ e("span", { className: "text-xs font-mono text-neutral-400 uppercase", children: "Efficiency" }),
                    /* @__PURE__ */ e(A, { className: "w-4 h-4 text-brand-400" })
                  ] }),
                  /* @__PURE__ */ t(
                    f.div,
                    {
                      initial: { scale: 1.2, opacity: 0 },
                      animate: { scale: 1, opacity: 1 },
                      className: "text-3xl font-mono font-bold text-white",
                      children: [
                        p.efficiency.toFixed(1),
                        "%"
                      ]
                    },
                    p.efficiency
                  ),
                  /* @__PURE__ */ e("div", { className: "text-xs text-green-400 font-mono mt-1", children: "▲ Optimal" })
                ]
              }
            ),
            /* @__PURE__ */ t(
              f.div,
              {
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: 0.2 },
                className: "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-sm p-6 backdrop-blur",
                children: [
                  /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ e("span", { className: "text-xs font-mono text-neutral-400 uppercase", children: r.outputLabel }),
                    /* @__PURE__ */ e(m, { className: "w-4 h-4 text-purple-400" })
                  ] }),
                  /* @__PURE__ */ t(
                    f.div,
                    {
                      initial: { scale: 1.2, opacity: 0 },
                      animate: { scale: 1, opacity: 1 },
                      className: "text-3xl font-mono font-bold text-white",
                      children: [
                        p.output.toFixed(1),
                        " ",
                        r.unit
                      ]
                    },
                    p.output
                  ),
                  /* @__PURE__ */ e("div", { className: "text-xs text-green-400 font-mono mt-1", children: "▲ Above Target" })
                ]
              }
            ),
            /* @__PURE__ */ t(
              f.div,
              {
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: 0.3 },
                className: "bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/40 rounded-sm p-6 backdrop-blur",
                children: [
                  /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ e("span", { className: "text-xs font-mono text-neutral-400 uppercase", children: r.savingsLabel }),
                    /* @__PURE__ */ e(W, { className: "w-4 h-4 text-orange-400" })
                  ] }),
                  /* @__PURE__ */ t(
                    f.div,
                    {
                      initial: { scale: 1.2, opacity: 0 },
                      animate: { scale: 1, opacity: 1 },
                      className: "text-3xl font-mono font-bold text-white",
                      children: [
                        p.savings.toFixed(1),
                        "%"
                      ]
                    },
                    p.savings
                  ),
                  /* @__PURE__ */ e("div", { className: "text-xs text-green-400 font-mono mt-1", children: "▲ Increasing" })
                ]
              }
            ),
            /* @__PURE__ */ t(
              f.div,
              {
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: 0.4 },
                className: "bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/40 rounded-sm p-6 backdrop-blur",
                children: [
                  /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ e("span", { className: "text-xs font-mono text-neutral-400 uppercase", children: "System Uptime" }),
                    /* @__PURE__ */ e(Ge, { className: "w-4 h-4 text-green-400" })
                  ] }),
                  /* @__PURE__ */ t(
                    f.div,
                    {
                      initial: { scale: 1.2, opacity: 0 },
                      animate: { scale: 1, opacity: 1 },
                      className: "text-3xl font-mono font-bold text-white",
                      children: [
                        p.uptime.toFixed(1),
                        "%"
                      ]
                    },
                    p.uptime
                  ),
                  /* @__PURE__ */ e("div", { className: "text-xs text-green-400 font-mono mt-1", children: "✓ Healthy" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ t(
            f.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.5 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6 mb-8",
              children: [
                /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white", children: "Performance Trends" }),
                  /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e("div", { className: "w-2 h-2 bg-brand-400 rounded-full animate-pulse" }),
                    /* @__PURE__ */ e("span", { className: "text-xs font-mono text-neutral-400", children: "Live Updates" })
                  ] })
                ] }),
                /* @__PURE__ */ e(O, { width: "100%", height: 300, children: /* @__PURE__ */ t(da, { data: a, children: [
                  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("linearGradient", { id: "colorEfficiency", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                    /* @__PURE__ */ e("stop", { offset: "5%", stopColor: r.color, stopOpacity: 0.3 }),
                    /* @__PURE__ */ e("stop", { offset: "95%", stopColor: r.color, stopOpacity: 0 })
                  ] }) }),
                  /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: "#262626" }),
                  /* @__PURE__ */ e(
                    _,
                    {
                      dataKey: "time",
                      stroke: "#737373",
                      tick: { fill: "#737373", fontSize: 11 },
                      tickFormatter: (g) => g.slice(-8)
                    }
                  ),
                  /* @__PURE__ */ e(
                    U,
                    {
                      stroke: "#737373",
                      tick: { fill: "#737373", fontSize: 11 },
                      domain: [r.baseEfficiency - 5, r.baseEfficiency + 5]
                    }
                  ),
                  /* @__PURE__ */ e(
                    q,
                    {
                      contentStyle: {
                        backgroundColor: "#171717",
                        border: "1px solid #404040",
                        borderRadius: "4px",
                        fontSize: "12px"
                      },
                      labelStyle: { color: "#a3a3a3" }
                    }
                  ),
                  /* @__PURE__ */ e(
                    $e,
                    {
                      type: "monotone",
                      dataKey: "efficiency",
                      stroke: r.color,
                      strokeWidth: 2,
                      fill: "url(#colorEfficiency)",
                      isAnimationActive: !0,
                      animationDuration: 300
                    }
                  )
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: r.metrics.map((g, w) => {
            const y = g.icon;
            return /* @__PURE__ */ t(
              f.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.6 + w * 0.1 },
                className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6 hover:border-brand-500/30 transition-all",
                children: [
                  /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-3", children: [
                    /* @__PURE__ */ e("div", { className: "p-2 bg-brand-500/10 border border-brand-500/20 rounded-sm", children: /* @__PURE__ */ e(y, { className: "w-5 h-5 text-brand-400" }) }),
                    /* @__PURE__ */ e("span", { className: "text-xs font-mono text-neutral-400 uppercase", children: g.label })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "text-2xl font-mono font-bold text-white", children: g.value })
                ]
              },
              w
            );
          }) })
        ]
      },
      i
    ) }),
    /* @__PURE__ */ e(
      f.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1 },
        className: "mt-12 text-center",
        children: /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 font-mono", children: "Data simulated for demonstration. Actual performance may vary based on application conditions." })
      }
    )
  ] }) });
}, kn = () => {
  const [i, l] = M("all"), [c, d] = M(0), a = [
    {
      id: 1,
      company: "L&T Construction",
      industry: "construction",
      logo: "L&T",
      product: "Graphacrete",
      project: "Commercial Tower - Mumbai",
      challenge: "Required M50 grade concrete for high-rise construction while minimizing costs and environmental impact.",
      solution: "Implemented Graphacrete additive at 0.08% dosage, achieving M50 performance with reduced cement content.",
      results: [
        { metric: "Strength Increase", value: "+48%", icon: A },
        { metric: "Cement Savings", value: "18%", icon: V },
        { metric: "Cost Reduction", value: "₹12L", icon: A },
        { metric: "Project Timeline", value: "On Time", icon: V }
      ],
      testimonial: "Graphacrete exceeded our expectations. We achieved M50 grade performance while saving 18% on cement costs. The durability improvements give us confidence in long-term structural integrity.",
      author: "Rajesh Kumar",
      position: "Senior Project Manager",
      rating: 5,
      year: 2024
    },
    {
      id: 2,
      company: "Tata Power Solar",
      industry: "energy",
      logo: "Tata",
      product: "Graffisol",
      project: "50 MW Solar Farm - Rajasthan",
      challenge: "High soiling losses and temperature-induced efficiency drops in desert environment reducing energy output.",
      solution: "Applied Graffisol coating to 180,000 solar panels across the 50 MW installation.",
      results: [
        { metric: "Energy Gain", value: "+11.2%", icon: A },
        { metric: "Soiling Reduction", value: "58%", icon: V },
        { metric: "Annual Revenue", value: "+₹2.8Cr", icon: A },
        { metric: "ROI Period", value: "14 months", icon: V }
      ],
      testimonial: "Graffisol transformed our solar farm performance. The 11% energy gain translates to significant revenue increase, and reduced cleaning frequency saves operational costs. Best investment we made.",
      author: "Priya Sharma",
      position: "Operations Director",
      rating: 5,
      year: 2025
    },
    {
      id: 3,
      company: "Maruti Suzuki",
      industry: "automotive",
      logo: "Maruti",
      product: "Ceraphene",
      project: "Premium Car Coating Line",
      challenge: "Needed affordable, high-quality ceramic coating for premium segment without passing excessive costs to customers.",
      solution: "Integrated Ceraphene into premium trim packages, replacing expensive imported coatings.",
      results: [
        { metric: "Cost Savings", value: "68%", icon: A },
        { metric: "Customer Satisfaction", value: "97%", icon: Be },
        { metric: "Units Coated", value: "24,000+", icon: V },
        { metric: "Quality Rating", value: "9H+", icon: pe }
      ],
      testimonial: "Ceraphene allowed us to offer premium ceramic protection at competitive prices. Customer feedback has been exceptional, and the 68% cost savings improved our margins significantly.",
      author: "Amit Desai",
      position: "Head of Product Development",
      rating: 5,
      year: 2024
    },
    {
      id: 4,
      company: "Reliance Industries",
      industry: "manufacturing",
      logo: "RIL",
      product: "HD-G-PE",
      project: "HDPE Pipe Manufacturing",
      challenge: "Required stronger, more flexible HDPE pipes for industrial applications without redesigning production process.",
      solution: "Incorporated HD-G-PE masterbatch into existing HDPE formulation for pipe extrusion.",
      results: [
        { metric: "Elongation", value: "20× better", icon: A },
        { metric: "Tensile Strength", value: "+32%", icon: V },
        { metric: "Product Lifespan", value: "+22%", icon: A },
        { metric: "Market Premium", value: "+18%", icon: pe }
      ],
      testimonial: "HD-G-PE gave our pipes a competitive edge. The dramatic improvement in elongation and strength allows us to command premium pricing while offering superior products to our customers.",
      author: "Dr. Vikram Patel",
      position: "Chief Technology Officer",
      rating: 5,
      year: 2024
    },
    {
      id: 5,
      company: "Shapoorji Pallonji",
      industry: "construction",
      logo: "SP",
      product: "Graphacrete",
      project: "Infrastructure Bridge Project",
      challenge: "Bridge construction in coastal area requiring exceptional durability and corrosion resistance.",
      solution: "Used Graphacrete in all structural elements to enhance strength and reduce water permeability.",
      results: [
        { metric: "Water Permeability", value: "-42%", icon: V },
        { metric: "Design Life", value: "+25 years", icon: A },
        { metric: "Maintenance Cost", value: "-35%", icon: A },
        { metric: "Awards Won", value: "2", icon: pe }
      ],
      testimonial: "For coastal infrastructure, Graphacrete is a game-changer. The reduced permeability means significantly less corrosion risk, extending the bridge design life by decades.",
      author: "Arjun Menon",
      position: "Principal Engineer",
      rating: 5,
      year: 2025
    },
    {
      id: 6,
      company: "Azure Power",
      industry: "energy",
      logo: "Azure",
      product: "Graffisol",
      project: "Floating Solar Installation",
      challenge: "High humidity and water-related soiling affecting floating solar panels more than ground-mounted systems.",
      solution: "Applied Graffisol coating specifically formulated for aquatic environments.",
      results: [
        { metric: "Performance Gain", value: "+12.4%", icon: A },
        { metric: "Cleaning Frequency", value: "-75%", icon: V },
        { metric: "Annual Savings", value: "₹45L", icon: A },
        { metric: "Payback", value: "11 months", icon: V }
      ],
      testimonial: "Graffisol solved our floating solar challenges. The coating handles humidity and water exposure exceptionally well, and the energy gains exceeded our projections.",
      author: "Neha Kapoor",
      position: "Chief Operating Officer",
      rating: 5,
      year: 2025
    }
  ], s = [
    { id: "all", name: "All Industries", icon: xe },
    { id: "construction", name: "Construction", icon: xe },
    { id: "energy", name: "Energy & Solar", icon: A },
    { id: "automotive", name: "Automotive", icon: pe },
    { id: "manufacturing", name: "Manufacturing", icon: xe }
  ], p = i === "all" ? a : a.filter((h) => h.industry === i), u = p[c], b = () => {
    d((h) => (h + 1) % p.length);
  }, r = () => {
    d((h) => (h - 1 + p.length) % p.length);
  };
  return ya.useEffect(() => {
    d(0);
  }, [i]), /* @__PURE__ */ e("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-12",
        children: [
          /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6", children: [
            /* @__PURE__ */ e(pe, { className: "w-4 h-4 text-brand-400" }),
            /* @__PURE__ */ e("span", { className: "text-xs font-mono text-brand-400 tracking-widest uppercase", children: "Real-World Impact" })
          ] }),
          /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "Customer Success Stories" }),
          /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto mb-8", children: "Discover how leading companies are achieving breakthrough results with Monoatom products" }),
          /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-3", children: s.map((h) => {
            const m = h.icon;
            return /* @__PURE__ */ t(
              "button",
              {
                onClick: () => l(h.id),
                className: `px-6 py-3 rounded-sm font-mono font-semibold transition-all border inline-flex items-center gap-2 ${i === h.id ? "bg-brand-500 text-white border-brand-400" : "bg-neutral-900 text-neutral-300 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700"}`,
                children: [
                  /* @__PURE__ */ e(m, { className: "w-4 h-4" }),
                  h.name
                ]
              },
              h.id
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ e(se, { mode: "wait", children: /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
        transition: { duration: 0.5 },
        className: "relative",
        children: [
          /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm overflow-hidden", children: [
            /* @__PURE__ */ e("div", { className: "bg-gradient-to-r from-brand-500/20 to-purple-500/20 border-b border-neutral-800 p-8", children: /* @__PURE__ */ t("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4", children: [
              /* @__PURE__ */ t("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ e("div", { className: "w-16 h-16 bg-white/10 border border-white/20 rounded-sm flex items-center justify-center backdrop-blur", children: /* @__PURE__ */ e("span", { className: "text-xl font-bold text-white", children: u.logo }) }),
                /* @__PURE__ */ t("div", { children: [
                  /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white mb-1", children: u.company }),
                  /* @__PURE__ */ e("p", { className: "text-neutral-400 font-mono text-sm", children: u.project })
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e("div", { className: "px-4 py-2 bg-brand-500/20 border border-brand-500/30 rounded-sm", children: /* @__PURE__ */ e("span", { className: "text-brand-400 font-mono font-bold text-sm", children: u.product }) }),
                /* @__PURE__ */ e("div", { className: "px-4 py-2 bg-neutral-800/80 border border-neutral-700 rounded-sm", children: /* @__PURE__ */ e("span", { className: "text-neutral-300 font-mono text-sm", children: u.year }) })
              ] })
            ] }) }),
            /* @__PURE__ */ t("div", { className: "p-8", children: [
              /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8", children: [
                /* @__PURE__ */ t("div", { children: [
                  /* @__PURE__ */ e("h4", { className: "text-lg font-display font-bold text-red-400 mb-3", children: "Challenge" }),
                  /* @__PURE__ */ e("p", { className: "text-neutral-300 leading-relaxed", children: u.challenge })
                ] }),
                /* @__PURE__ */ t("div", { children: [
                  /* @__PURE__ */ e("h4", { className: "text-lg font-display font-bold text-green-400 mb-3", children: "Solution" }),
                  /* @__PURE__ */ e("p", { className: "text-neutral-300 leading-relaxed", children: u.solution })
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "mb-8", children: [
                /* @__PURE__ */ e("h4", { className: "text-lg font-display font-bold text-white mb-4", children: "Results Achieved" }),
                /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: u.results.map((h, m) => {
                  const g = h.icon;
                  return /* @__PURE__ */ t(
                    f.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: m * 0.1 },
                      className: "bg-neutral-800/50 border border-neutral-700 rounded-sm p-4 text-center hover:border-brand-500/30 transition-all",
                      children: [
                        /* @__PURE__ */ e(g, { className: "w-6 h-6 text-brand-400 mx-auto mb-2" }),
                        /* @__PURE__ */ e("div", { className: "text-2xl font-mono font-bold text-white mb-1", children: h.value }),
                        /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 font-mono", children: h.metric })
                      ]
                    },
                    m
                  );
                }) })
              ] }),
              /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-brand-500/10 to-purple-500/10 border border-brand-500/20 rounded-sm p-6", children: [
                /* @__PURE__ */ e(qa, { className: "w-8 h-8 text-brand-400/40 mb-4" }),
                /* @__PURE__ */ t("p", { className: "text-lg text-neutral-200 leading-relaxed mb-4 italic", children: [
                  '"',
                  u.testimonial,
                  '"'
                ] }),
                /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ t("div", { children: [
                    /* @__PURE__ */ e("div", { className: "font-display font-bold text-white", children: u.author }),
                    /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 font-mono", children: u.position })
                  ] }),
                  /* @__PURE__ */ e("div", { className: "flex gap-1", children: [...Array(u.rating)].map((h, m) => /* @__PURE__ */ e(Be, { className: "w-5 h-5 text-yellow-400 fill-yellow-400" }, m)) })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex items-center justify-between mt-8", children: [
            /* @__PURE__ */ t(
              "button",
              {
                onClick: r,
                disabled: p.length <= 1,
                className: "px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-sm hover:bg-neutral-800 hover:border-brand-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2 text-white font-mono",
                children: [
                  /* @__PURE__ */ e(Ya, { className: "w-5 h-5" }),
                  "Previous"
                ]
              }
            ),
            /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: p.map((h, m) => /* @__PURE__ */ e(
              "button",
              {
                onClick: () => d(m),
                className: `w-2 h-2 rounded-full transition-all ${m === c ? "bg-brand-400 w-8" : "bg-neutral-700"}`
              },
              m
            )) }),
            /* @__PURE__ */ t(
              "button",
              {
                onClick: b,
                disabled: p.length <= 1,
                className: "px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-sm hover:bg-neutral-800 hover:border-brand-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2 text-white font-mono",
                children: [
                  "Next",
                  /* @__PURE__ */ e(_a, { className: "w-5 h-5" })
                ]
              }
            )
          ] })
        ]
      },
      `${i}-${c}`
    ) }),
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.6 },
        className: "mt-16 bg-gradient-to-r from-brand-500/10 to-purple-500/10 border border-brand-500/30 rounded-sm p-8 backdrop-blur",
        children: [
          /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white text-center mb-6", children: "Collective Impact" }),
          /* @__PURE__ */ t("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 text-center", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-4xl font-mono font-bold text-brand-400 mb-2", children: "127+" }),
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 font-mono uppercase", children: "Success Stories" })
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-4xl font-mono font-bold text-brand-400 mb-2", children: "98%" }),
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 font-mono uppercase", children: "Satisfaction Rate" })
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-4xl font-mono font-bold text-brand-400 mb-2", children: "₹450Cr+" }),
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 font-mono uppercase", children: "Customer Savings" })
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-4xl font-mono font-bold text-brand-400 mb-2", children: "15" }),
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 font-mono uppercase", children: "Industries Served" })
            ] })
          ] })
        ]
      }
    )
  ] }) });
}, $n = () => {
  const [i, l] = M("graphacrete"), [c, d] = M({
    graphacrete: {
      volume: 1e3,
      // m³
      cementCost: 8,
      // ₹/kg
      currentGrade: 30,
      // MPa
      cementSavingsPercent: 17.5
      // % (15-20% validated range)
    },
    graffisol: {
      capacity: 100,
      // kW
      electricityRate: 5,
      // ₹/kWh
      soilingLevel: "medium",
      energyGainPercent: 7.5
      // % (7-8% validated range)
    },
    ceraphene: {
      units: 100,
      // number of applications
      competitorPrice: 15e3,
      // ₹
      applicationSize: 50,
      // ml
      durabilityYears: 3.5,
      // years (3-4 validated range)
      competitorDurability: 1.5
      // years (assumption)
    },
    hdgpe: {
      production: 100,
      // tonnes per year
      currentCost: 150,
      // ₹/kg
      applicationArea: "packaging",
      scrapReduction: 25,
      // % (assumption - needs field data)
      warrantyReduction: 20
      // % (assumption - needs field data)
    }
  }), a = {
    graphacrete: {
      name: "Graphacrete",
      color: "#0d9488",
      description: "High-Performance Concrete Additive",
      inputs: [
        { key: "volume", label: "Concrete Volume (m³/month)", min: 100, max: 1e4, step: 100, tier: "customer" },
        { key: "cementCost", label: "Cement Cost (₹/kg)", min: 5, max: 15, step: 0.5, tier: "customer" },
        { key: "currentGrade", label: "Current Grade (MPa)", min: 20, max: 40, step: 5, tier: "customer" },
        {
          key: "cementSavingsPercent",
          label: "Expected Cement Savings (%)",
          min: 15,
          max: 20,
          step: 0.5,
          tier: "validated",
          tooltip: "Source-backed range: 15-20% from mix design studies"
        }
      ]
    },
    graffisol: {
      name: "Graffisol",
      color: "#f59e0b",
      description: "Solar Panel Performance Coating",
      inputs: [
        { key: "capacity", label: "Solar Capacity (kW)", min: 10, max: 1e4, step: 10, tier: "customer" },
        { key: "electricityRate", label: "Electricity Rate (₹/kWh)", min: 3, max: 10, step: 0.5, tier: "customer" },
        {
          key: "energyGainPercent",
          label: "Expected Energy Gain (%)",
          min: 7,
          max: 8,
          step: 0.1,
          tier: "validated",
          tooltip: "Field-validated range: 7-8% from 1+ MW installations"
        },
        {
          key: "soilingLevel",
          label: "Soiling Environment",
          type: "select",
          tier: "customer",
          options: [
            { value: "low", label: "Low (Clean Area)" },
            { value: "medium", label: "Medium (Urban)" },
            { value: "high", label: "High (Industrial/Desert)" }
          ]
        }
      ]
    },
    ceraphene: {
      name: "Ceraphene",
      color: "#8b5cf6",
      description: "Premium Ceramic Coating",
      inputs: [
        { key: "units", label: "Monthly Applications", min: 10, max: 1e3, step: 10, tier: "customer" },
        { key: "competitorPrice", label: "Competitor Price (₹/50ml)", min: 1e4, max: 2e4, step: 1e3, tier: "customer" },
        {
          key: "durabilityYears",
          label: "Ceraphene Durability (years)",
          min: 3,
          max: 4,
          step: 0.5,
          tier: "validated",
          tooltip: "Source-backed range: 3-4 years from field validation"
        },
        {
          key: "competitorDurability",
          label: "Competitor Durability (years)",
          min: 1,
          max: 2.5,
          step: 0.5,
          tier: "assumption",
          tooltip: "⚠️ Estimated - requires market validation"
        }
      ]
    },
    hdgpe: {
      name: "HD-G-PE",
      color: "#06b6d4",
      description: "Graphene Polymer Enhancer",
      inputs: [
        { key: "production", label: "Annual Production (tonnes)", min: 10, max: 1e3, step: 10, tier: "customer" },
        { key: "currentCost", label: "Current Material Cost (₹/kg)", min: 100, max: 300, step: 10, tier: "customer" },
        {
          key: "applicationArea",
          label: "Application Type",
          type: "select",
          tier: "customer",
          options: [
            { value: "packaging", label: "Packaging" },
            { value: "films", label: "Films" },
            { value: "pipes", label: "Pipes" }
          ]
        },
        {
          key: "scrapReduction",
          label: "Expected Scrap Reduction (%)",
          min: 15,
          max: 40,
          step: 5,
          tier: "assumption",
          tooltip: "⚠️ Estimated based on improved properties - pilot validation recommended"
        },
        {
          key: "warrantyReduction",
          label: "Expected Warranty Reduction (%)",
          min: 10,
          max: 30,
          step: 5,
          tier: "assumption",
          tooltip: "⚠️ Estimated based on +20% lifespan - customer tracking needed"
        }
      ]
    }
  }, s = Q(() => {
    const r = i, h = c[r];
    let m = {
      investment: 0,
      annualSavings: 0,
      paybackMonths: 0,
      fiveYearValue: 0,
      roi: 0,
      breakdown: [],
      yearlyProjection: []
    };
    switch (r) {
      case "graphacrete":
        const y = 2 * 235, k = 4050, n = 4950, G = 400, R = h.cementSavingsPercent / 100, I = h.volume, o = I * G * R, T = o * h.cementCost, N = k + y, F = n - N, H = F * I, J = I * y, te = I * k, le = I * n, ue = te + J, ie = Math.max(T, H);
        m.investment = J, m.annualSavings = ie * 12, m.paybackMonths = J / ie || 0, m.fiveYearValue = m.annualSavings * 5 - J * 12, m.roi = (m.annualSavings * 5 - J * 12) / (J * 12) * 100, m.cementSaved = o * 12, m.co2Reduced = o * 12 * 0.9, m.savingsPerUnit = {
          value: F,
          label: "Savings per m³ (vs M50)"
        }, m.m30WithGraphacreteCost = N, m.m50Cost = n, m.breakdown = [
          { name: "M50 Direct Cost", value: le, color: "#ef4444" },
          { name: "M30 Base Cost", value: te, color: "#f59e0b" },
          { name: "Graphacrete Additive", value: J, color: "#8b5cf6" },
          { name: "M30+Graphacrete Total", value: ue, color: "#0d9488" }
        ];
        for (let z = 1; z <= 5; z++)
          m.yearlyProjection.push({
            year: `Year ${z}`,
            savings: ie * 12 * z,
            investment: J * 12 * z,
            netProfit: ie * 12 * z - J * 12,
            cementSaved: o * 12 * z,
            co2Reduced: o * 12 * z * 0.9
          });
        break;
      case "graffisol":
        const B = 1500, D = h.energyGainPercent / 100, S = { low: 0.02, medium: 0.04, high: 0.06 }[h.soilingLevel], x = D + S, X = h.capacity * B * x * h.electricityRate, ae = h.capacity * 500;
        m.investment = ae, m.annualSavings = X, m.paybackMonths = ae / (X / 12) || 0, m.fiveYearValue = X * 5 - ae, m.roi = (X * 5 - ae) / ae * 100, m.breakdown = [
          { name: "Extra Energy Revenue", value: X, color: "#10b981" },
          { name: "Coating Cost", value: ae, color: "#ef4444" }
        ];
        for (let z = 1; z <= 5; z++)
          m.yearlyProjection.push({
            year: `Year ${z}`,
            savings: X * z,
            investment: ae,
            netProfit: X * z - ae
          });
        break;
      case "ceraphene":
        const Ne = 5e3, Te = h.durabilityYears, He = h.competitorDurability, Xe = 5, Ze = Math.ceil(Xe / Te), Je = Math.ceil(Xe / He), $ = Ze * Ne, P = Je * h.competitorPrice, j = Ne / Te, oe = h.competitorPrice / He, de = h.units, et = Ne * de, Pt = (h.competitorPrice - Ne) * de, bt = $ * de * 12, Mt = P * de * 12, xt = Mt - bt;
        m.investment = et, m.annualSavings = Pt * 12, m.paybackMonths = et / Pt || 0, m.fiveYearValue = xt, m.roi = xt / bt * 100 || 0, m.costPerYear = j, m.competitorCostPerYear = oe, m.applicationsNeeded = Ze, m.competitorApplicationsNeeded = Je, m.durability = Te, m.breakdown = [
          { name: "5Y Ceraphene Cost", value: bt / (de * 12), color: "#8b5cf6" },
          { name: "5Y Competitor Cost", value: Mt / (de * 12), color: "#ef4444" },
          { name: "5Y TCO Savings", value: xt / (de * 12), color: "#10b981" }
        ];
        for (let z = 1; z <= 5; z++) {
          const Tt = Math.ceil(z / Te), Gt = Math.ceil(z / He), Rt = Tt * Ne * de * 12, jt = Gt * h.competitorPrice * de * 12 - Rt;
          m.yearlyProjection.push({
            year: `Year ${z}`,
            savings: jt,
            investment: Rt,
            netProfit: jt,
            cerapheneApps: Tt,
            competitorApps: Gt
          });
        }
        break;
      case "hdgpe":
        const ba = { packaging: 20, films: 22, pipes: 18 }[h.applicationArea], xa = 0.01, ha = 5, At = h.production * 1e3, Ae = At * xa * ha, ga = h.scrapReduction / 100, fa = h.warrantyReduction / 100, va = 0.05, ht = At * h.currentCost, tt = ht * va * ga, at = ht * 0.02 * fa, gt = tt + at, Lt = gt - Ae, Na = ht * 0.15, rt = Math.max(Lt, Na - Ae);
        m.investment = Ae, m.annualSavings = rt, m.paybackMonths = Ae / (rt / 12) || 0, m.fiveYearValue = rt * 5, m.roi = rt * 5 / (Ae * 5) * 100, m.scrapSavings = tt, m.warrantySavings = at, m.elongationFactor = ba, m.lifespanIncrease = 20, m.strengthIncrease = 30, m.breakdown = [
          { name: "Scrap Cost Reduction", value: tt, color: "#10b981" },
          { name: "Warranty Savings", value: at, color: "#0d9488" },
          { name: "Total Savings", value: gt, color: "#06b6d4" },
          { name: "Additive Cost", value: Ae, color: "#ef4444" }
        ];
        for (let z = 1; z <= 5; z++)
          m.yearlyProjection.push({
            year: `Year ${z}`,
            savings: gt * z,
            investment: Ae * z,
            netProfit: Lt * z,
            scrapSavings: tt * z,
            warrantySavings: at * z
          });
        break;
    }
    return m;
  }, [i, c]), p = a[i], u = c[i], b = (r, h) => {
    d((m) => ({
      ...m,
      [i]: {
        ...m[i],
        [r]: h
      }
    }));
  };
  return /* @__PURE__ */ e("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-12",
        children: [
          /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6", children: [
            /* @__PURE__ */ e(Oe, { className: "w-4 h-4 text-brand-400" }),
            /* @__PURE__ */ e("span", { className: "text-xs font-mono text-brand-400 tracking-widest uppercase", children: "ROI Calculator" })
          ] }),
          /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "Calculate Your ROI" }),
          /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto mb-8", children: "See exactly how much you'll save and earn with Monoatom products" }),
          /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-3", children: Object.keys(a).map((r) => /* @__PURE__ */ e(
            "button",
            {
              onClick: () => l(r),
              className: `px-6 py-3 rounded-sm font-mono font-semibold transition-all border ${i === r ? "bg-brand-500 text-white border-brand-400 shadow-[0_0_20px_rgba(13,148,136,0.3)]" : "bg-neutral-900 text-neutral-300 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700"}`,
              children: a[r].name
            },
            r
          )) })
        ]
      }
    ),
    /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-8",
          children: [
            /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white mb-2", children: p.name }),
            /* @__PURE__ */ e("p", { className: "text-neutral-400 text-sm mb-6", children: p.description }),
            /* @__PURE__ */ e("div", { className: "space-y-6", children: p.inputs.map((r, h) => /* @__PURE__ */ t(
              f.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: h * 0.1 },
                children: [
                  /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ e("label", { className: "block text-sm font-mono text-neutral-300", children: r.label }),
                    r.tier && /* @__PURE__ */ e(
                      "span",
                      {
                        className: `text-xs px-2 py-1 rounded-sm font-mono font-bold uppercase tracking-wider ${r.tier === "validated" ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30" : r.tier === "assumption" ? "bg-orange-500/20 text-orange-400 border border-orange-500/30" : "bg-blue-500/20 text-blue-400 border border-blue-500/30"}`,
                        children: r.tier === "validated" ? "📊 Validated" : r.tier === "assumption" ? "⚠️ Estimate" : "⚙️ Your Input"
                      }
                    )
                  ] }),
                  r.tooltip && /* @__PURE__ */ e("p", { className: "text-xs text-neutral-500 mb-2 italic", children: r.tooltip }),
                  r.type === "select" ? /* @__PURE__ */ e(
                    "select",
                    {
                      value: u[r.key],
                      onChange: (m) => b(r.key, m.target.value),
                      className: "w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-sm text-white font-mono focus:border-brand-500 focus:outline-none transition-all",
                      children: r.options.map((m) => /* @__PURE__ */ e("option", { value: m.value, children: m.label }, m.value))
                    }
                  ) : /* @__PURE__ */ t("div", { className: "relative", children: [
                    /* @__PURE__ */ e(
                      "input",
                      {
                        type: "range",
                        min: r.min,
                        max: r.max,
                        step: r.step,
                        value: u[r.key],
                        onChange: (m) => b(r.key, parseFloat(m.target.value)),
                        className: "w-full h-2 bg-neutral-700 rounded-sm appearance-none cursor-pointer slider",
                        style: {
                          background: `linear-gradient(to right, ${p.color} 0%, ${p.color} ${(u[r.key] - r.min) / (r.max - r.min) * 100}%, #404040 ${(u[r.key] - r.min) / (r.max - r.min) * 100}%, #404040 100%)`
                        }
                      }
                    ),
                    /* @__PURE__ */ t("div", { className: "flex justify-between mt-2", children: [
                      /* @__PURE__ */ e("span", { className: "text-xs text-neutral-500 font-mono", children: r.min }),
                      /* @__PURE__ */ e("span", { className: "text-sm text-white font-mono font-bold", children: u[r.key] }),
                      /* @__PURE__ */ e("span", { className: "text-xs text-neutral-500 font-mono", children: r.max })
                    ] })
                  ] })
                ]
              },
              r.key
            )) })
          ]
        }
      ),
      /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          className: "space-y-6",
          children: [
            /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ t(
                f.div,
                {
                  whileHover: { scale: 1.02 },
                  className: "bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/40 rounded-sm p-6 backdrop-blur",
                  children: [
                    /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ e(A, { className: "w-5 h-5 text-green-400" }),
                      /* @__PURE__ */ e("span", { className: "text-xs font-mono text-neutral-400 uppercase", children: "5-Year ROI" })
                    ] }),
                    /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                      s.roi.toFixed(0),
                      "%"
                    ] }),
                    /* @__PURE__ */ t("div", { className: "text-xs text-green-400 font-mono", children: [
                      "₹",
                      (s.fiveYearValue / 1e5).toFixed(1),
                      "L profit"
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                f.div,
                {
                  whileHover: { scale: 1.02 },
                  className: "bg-gradient-to-br from-brand-500/20 to-purple-500/20 border border-brand-500/40 rounded-sm p-6 backdrop-blur",
                  children: [
                    /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ e(oa, { className: "w-5 h-5 text-brand-400" }),
                      /* @__PURE__ */ e("span", { className: "text-xs font-mono text-neutral-400 uppercase", children: "Payback" })
                    ] }),
                    /* @__PURE__ */ e("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: s.paybackMonths.toFixed(1) }),
                    /* @__PURE__ */ e("div", { className: "text-xs text-brand-400 font-mono", children: "Months" })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                f.div,
                {
                  whileHover: { scale: 1.02 },
                  className: "bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/40 rounded-sm p-6 backdrop-blur",
                  children: [
                    /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ e(Ie, { className: "w-5 h-5 text-orange-400" }),
                      /* @__PURE__ */ e("span", { className: "text-xs font-mono text-neutral-400 uppercase", children: "Investment" })
                    ] }),
                    /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                      "₹",
                      (s.investment / 1e3).toFixed(0),
                      "K"
                    ] }),
                    /* @__PURE__ */ e("div", { className: "text-xs text-orange-400 font-mono", children: "Initial cost" })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                f.div,
                {
                  whileHover: { scale: 1.02 },
                  className: "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-sm p-6 backdrop-blur",
                  children: [
                    /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ e(W, { className: "w-5 h-5 text-purple-400" }),
                      /* @__PURE__ */ e("span", { className: "text-xs font-mono text-neutral-400 uppercase", children: "Annual Savings" })
                    ] }),
                    /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                      "₹",
                      (s.annualSavings / 1e5).toFixed(1),
                      "L"
                    ] }),
                    /* @__PURE__ */ e("div", { className: "text-xs text-purple-400 font-mono", children: "Per year" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6", children: [
              /* @__PURE__ */ e("h4", { className: "text-lg font-display font-bold text-white mb-4", children: "Cost Breakdown" }),
              /* @__PURE__ */ e(O, { width: "100%", height: 200, children: /* @__PURE__ */ t(ca, { children: [
                /* @__PURE__ */ e(
                  ma,
                  {
                    data: s.breakdown,
                    cx: "50%",
                    cy: "50%",
                    innerRadius: 60,
                    outerRadius: 80,
                    paddingAngle: 5,
                    dataKey: "value",
                    children: s.breakdown.map((r, h) => /* @__PURE__ */ e(Me, { fill: r.color }, `cell-${h}`))
                  }
                ),
                /* @__PURE__ */ e(
                  q,
                  {
                    contentStyle: {
                      backgroundColor: "#171717",
                      border: "1px solid #404040",
                      borderRadius: "4px"
                    },
                    formatter: (r) => `₹${(r / 1e3).toFixed(0)}K`
                  }
                )
              ] }) }),
              /* @__PURE__ */ e("div", { className: "flex justify-center gap-6 mt-4", children: s.breakdown.map((r, h) => /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: "w-3 h-3 rounded-full",
                    style: { backgroundColor: r.color }
                  }
                ),
                /* @__PURE__ */ e("span", { className: "text-xs text-neutral-400 font-mono", children: r.name })
              ] }, h)) })
            ] }),
            /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6", children: [
              /* @__PURE__ */ e("h4", { className: "text-lg font-display font-bold text-white mb-4", children: "5-Year Projection" }),
              /* @__PURE__ */ e(O, { width: "100%", height: 200, children: /* @__PURE__ */ t(he, { data: s.yearlyProjection, children: [
                /* @__PURE__ */ e(Y, { strokeDasharray: "3 3", stroke: "#262626" }),
                /* @__PURE__ */ e(_, { dataKey: "year", stroke: "#737373", tick: { fill: "#737373", fontSize: 11 } }),
                /* @__PURE__ */ e(U, { stroke: "#737373", tick: { fill: "#737373", fontSize: 11 } }),
                /* @__PURE__ */ e(
                  q,
                  {
                    contentStyle: {
                      backgroundColor: "#171717",
                      border: "1px solid #404040",
                      borderRadius: "4px"
                    },
                    formatter: (r) => `₹${(r / 1e5).toFixed(1)}L`
                  }
                ),
                /* @__PURE__ */ e(ke, { wrapperStyle: { fontSize: "12px" } }),
                /* @__PURE__ */ e(ne, { dataKey: "netProfit", fill: "#10b981", name: "Net Profit" }),
                /* @__PURE__ */ e(ne, { dataKey: "savings", fill: p.color, name: "Cumulative Savings" })
              ] }) })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.5 },
        className: "mt-12 bg-neutral-900/60 border border-neutral-800 rounded-sm p-6 flex items-start gap-3",
        children: [
          /* @__PURE__ */ e(na, { className: "w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ t("p", { className: "text-sm text-neutral-400 leading-relaxed", children: [
            /* @__PURE__ */ e("strong", { className: "text-white", children: "Note:" }),
            " These calculations are estimates based on typical conditions. Actual results may vary based on specific application parameters, regional factors, and usage patterns. Contact our team for a detailed customized ROI analysis."
          ] })
        ]
      }
    )
  ] }) });
}, Sn = () => {
  const [i, l] = M(0), [c, d] = M({}), [a, s] = M(!1), p = [
    {
      id: "industry",
      question: "What industry are you in?",
      options: [
        { value: "construction", label: "Construction & Infrastructure", icon: "🏗️" },
        { value: "solar", label: "Solar Energy & Renewables", icon: "☀️" },
        { value: "automotive", label: "Automotive & Coatings", icon: "🚗" },
        { value: "manufacturing", label: "Polymer & Manufacturing", icon: "🏭" }
      ]
    },
    {
      id: "goal",
      question: "What is your primary goal?",
      options: [
        { value: "strength", label: "Increase Strength & Durability", icon: "💪" },
        { value: "efficiency", label: "Improve Energy Efficiency", icon: "⚡" },
        { value: "cost", label: "Reduce Costs", icon: "💰" },
        { value: "performance", label: "Enhance Material Performance", icon: "🎯" }
      ]
    },
    {
      id: "scale",
      question: "What is your project scale?",
      options: [
        { value: "small", label: "Small Scale (Pilot/Testing)", icon: "📦" },
        { value: "medium", label: "Medium Scale (Commercial)", icon: "🏢" },
        { value: "large", label: "Large Scale (Industrial)", icon: "🏭" },
        { value: "enterprise", label: "Enterprise (Multi-site)", icon: "🌍" }
      ]
    },
    {
      id: "priority",
      question: "What matters most to you?",
      options: [
        { value: "roi", label: "Fast ROI & Payback", icon: "📈" },
        { value: "sustainability", label: "Environmental Impact", icon: "🌱" },
        { value: "quality", label: "Premium Quality", icon: "⭐" },
        { value: "innovation", label: "Cutting-edge Technology", icon: "🚀" }
      ]
    },
    {
      id: "timeline",
      question: "When do you need results?",
      options: [
        { value: "immediate", label: "Immediate (Days-Weeks)", icon: "⚡" },
        { value: "short", label: "Short-term (1-3 Months)", icon: "📅" },
        { value: "medium", label: "Medium-term (3-12 Months)", icon: "📆" },
        { value: "long", label: "Long-term (1+ Years)", icon: "🗓️" }
      ]
    }
  ], u = {
    graphacrete: {
      name: "Graphacrete",
      tagline: "High-Performance Concrete Additive",
      icon: "🏗️",
      color: "from-brand-500 to-teal-500",
      benefits: [
        "40-50% strength increase",
        "15-20% cement savings",
        "30-45% lower water permeability",
        "Enhanced durability"
      ],
      bestFor: ["Construction", "Infrastructure", "Cost reduction", "Sustainability"],
      roi: "2-3 months payback"
    },
    graffisol: {
      name: "Graffisol",
      tagline: "Solar Panel Performance Coating",
      icon: "☀️",
      color: "from-orange-500 to-yellow-500",
      benefits: [
        "10-12% energy output gain",
        "50-60% soiling reduction",
        "5-6°C panel cooling",
        "Faster cleaning cycles"
      ],
      bestFor: ["Solar energy", "Energy efficiency", "Fast ROI", "Performance"],
      roi: "14-18 months payback"
    },
    ceraphene: {
      name: "Ceraphene",
      tagline: "Premium Ceramic Coating",
      icon: "✨",
      color: "from-purple-500 to-pink-500",
      benefits: [
        "60-70% cost savings vs competitors",
        "9H+ hardness rating",
        "3-4+ years durability",
        "Hydrophobic & scratch-resistant"
      ],
      bestFor: ["Automotive", "Premium quality", "Cost savings", "Mass market"],
      roi: "Immediate cost savings"
    },
    hdgpe: {
      name: "HD-G-PE",
      tagline: "Graphene Polymer Enhancer",
      icon: "🧬",
      color: "from-cyan-500 to-blue-500",
      benefits: [
        "20× elongation improvement",
        "30% tensile strength increase",
        "20% longer product lifespan",
        "Superior flexibility"
      ],
      bestFor: ["Manufacturing", "Polymer enhancement", "Innovation", "Performance"],
      roi: "6-9 months payback"
    }
  }, b = () => {
    const y = {
      graphacrete: 0,
      graffisol: 0,
      ceraphene: 0,
      hdgpe: 0
    };
    c.industry === "construction" && (y.graphacrete += 3), c.industry === "solar" && (y.graffisol += 3), c.industry === "automotive" && (y.ceraphene += 3), c.industry === "manufacturing" && (y.hdgpe += 3), c.goal === "strength" && (y.graphacrete += 2), c.goal === "efficiency" && (y.graffisol += 2), c.goal === "cost" && (y.ceraphene += 2, y.graphacrete += 1), c.goal === "performance" && (y.hdgpe += 2), c.priority === "roi" && (y.graphacrete += 2, y.graffisol += 1), c.priority === "sustainability" && (y.graphacrete += 2), c.priority === "quality" && (y.ceraphene += 2), c.priority === "innovation" && (y.hdgpe += 2), c.timeline === "immediate" && (y.ceraphene += 1, y.graffisol += 1);
    const k = Math.max(...Object.values(y)), n = Object.keys(y).find((G) => y[G] === k);
    return u[n];
  }, r = (y) => {
    d({ ...c, [p[i].id]: y }), i < p.length - 1 ? setTimeout(() => {
      l(i + 1);
    }, 300) : setTimeout(() => {
      s(!0);
    }, 300);
  }, h = () => {
    l(0), d({}), s(!1);
  }, m = () => {
    i > 0 && l(i - 1);
  }, g = (i + 1) / p.length * 100, w = a ? b() : null;
  return /* @__PURE__ */ e("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: /* @__PURE__ */ t("div", { className: "relative z-10 max-w-4xl mx-auto", children: [
    /* @__PURE__ */ t(
      f.div,
      {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        className: "text-center mb-12",
        children: [
          /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6", children: [
            /* @__PURE__ */ e(Ua, { className: "w-4 h-4 text-brand-400" }),
            /* @__PURE__ */ e("span", { className: "text-xs font-mono text-brand-400 tracking-widest uppercase", children: "Product Finder" })
          ] }),
          /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "Find Your Perfect Product" }),
          /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-2xl mx-auto", children: "Answer 5 quick questions and we'll recommend the best Monoatom solution for your needs" })
        ]
      }
    ),
    a ? (
      // Results
      /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm overflow-hidden mb-8", children: [
              /* @__PURE__ */ t("div", { className: `bg-gradient-to-r ${w.color} p-8 text-center`, children: [
                /* @__PURE__ */ e(
                  f.div,
                  {
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    transition: { delay: 0.2, type: "spring" },
                    className: "text-6xl mb-4",
                    children: w.icon
                  }
                ),
                /* @__PURE__ */ e("h3", { className: "text-3xl md:text-4xl font-display font-bold text-white mb-2", children: w.name }),
                /* @__PURE__ */ e("p", { className: "text-lg text-white/90 font-mono", children: w.tagline })
              ] }),
              /* @__PURE__ */ t("div", { className: "p-8", children: [
                /* @__PURE__ */ t("div", { className: "mb-8", children: [
                  /* @__PURE__ */ t("h4", { className: "text-xl font-display font-bold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ e(ut, { className: "w-5 h-5 text-brand-400" }),
                    "Perfect For"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: w.bestFor.map((y, k) => /* @__PURE__ */ e(
                    f.span,
                    {
                      initial: { opacity: 0, scale: 0.8 },
                      animate: { opacity: 1, scale: 1 },
                      transition: { delay: 0.3 + k * 0.1 },
                      className: "px-4 py-2 bg-brand-500/20 border border-brand-500/30 rounded-sm text-brand-400 font-mono text-sm",
                      children: y
                    },
                    k
                  )) })
                ] }),
                /* @__PURE__ */ t("div", { className: "mb-8", children: [
                  /* @__PURE__ */ t("h4", { className: "text-xl font-display font-bold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ e(Ct, { className: "w-5 h-5 text-brand-400" }),
                    "Key Benefits"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: w.benefits.map((y, k) => /* @__PURE__ */ t(
                    f.div,
                    {
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 },
                      transition: { delay: 0.5 + k * 0.1 },
                      className: "flex items-start gap-3 p-4 bg-neutral-800/50 rounded-sm border border-neutral-700",
                      children: [
                        /* @__PURE__ */ e(V, { className: "w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" }),
                        /* @__PURE__ */ e("span", { className: "text-neutral-200", children: y })
                      ]
                    },
                    k
                  )) })
                ] }),
                /* @__PURE__ */ t(
                  f.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.8 },
                    className: "bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-sm p-6 text-center",
                    children: [
                      /* @__PURE__ */ e("div", { className: "text-sm font-mono text-neutral-400 uppercase mb-2", children: "Expected ROI" }),
                      /* @__PURE__ */ e("div", { className: "text-2xl font-mono font-bold text-green-400", children: w.roi })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ t(
                "button",
                {
                  onClick: h,
                  className: "px-8 py-4 bg-neutral-900 border border-neutral-800 rounded-sm hover:bg-neutral-800 hover:border-neutral-700 transition-all inline-flex items-center justify-center gap-2 text-white font-mono",
                  children: [
                    /* @__PURE__ */ e(De, { className: "w-5 h-5" }),
                    "Retake Quiz"
                  ]
                }
              ),
              /* @__PURE__ */ t("button", { className: "px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-mono font-bold rounded-sm transition-all border border-brand-400 inline-flex items-center justify-center gap-2", children: [
                "Learn More About ",
                w.name,
                /* @__PURE__ */ e(ye, { className: "w-5 h-5" })
              ] })
            ] })
          ]
        }
      )
    ) : /* @__PURE__ */ t(Ce, { children: [
      /* @__PURE__ */ t("div", { className: "mb-8", children: [
        /* @__PURE__ */ t("div", { className: "flex justify-between items-center mb-2", children: [
          /* @__PURE__ */ t("span", { className: "text-sm font-mono text-neutral-400", children: [
            "Question ",
            i + 1,
            " of ",
            p.length
          ] }),
          /* @__PURE__ */ t("span", { className: "text-sm font-mono text-brand-400", children: [
            Math.round(g),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "w-full h-2 bg-neutral-800 rounded-sm overflow-hidden", children: /* @__PURE__ */ e(
          f.div,
          {
            initial: { width: 0 },
            animate: { width: `${g}%` },
            transition: { duration: 0.3 },
            className: "h-full bg-gradient-to-r from-brand-500 to-teal-500"
          }
        ) })
      ] }),
      /* @__PURE__ */ e(se, { mode: "wait", children: /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, x: 50 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -50 },
          transition: { duration: 0.3 },
          className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-8 mb-6",
          children: [
            /* @__PURE__ */ e("h3", { className: "text-2xl md:text-3xl font-display font-bold text-white mb-8 text-center", children: p[i].question }),
            /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: p[i].options.map((y, k) => /* @__PURE__ */ e(
              f.button,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: k * 0.1 },
                onClick: () => r(y.value),
                whileHover: { scale: 1.02 },
                whileTap: { scale: 0.98 },
                className: `p-6 rounded-sm border transition-all text-left ${c[p[i].id] === y.value ? "bg-brand-500/20 border-brand-500/50 shadow-[0_0_20px_rgba(13,148,136,0.3)]" : "bg-neutral-800/50 border-neutral-700 hover:bg-neutral-800 hover:border-brand-500/30"}`,
                children: /* @__PURE__ */ t("div", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ e("div", { className: "text-3xl", children: y.icon }),
                  /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e("div", { className: "text-white font-display font-bold mb-1", children: y.label }) }),
                  c[p[i].id] === y.value && /* @__PURE__ */ e(V, { className: "w-5 h-5 text-brand-400 flex-shrink-0" })
                ] })
              },
              y.value
            )) })
          ]
        },
        i
      ) }),
      /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ t(
          "button",
          {
            onClick: m,
            disabled: i === 0,
            className: "px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-sm hover:bg-neutral-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2 text-white font-mono",
            children: [
              /* @__PURE__ */ e(Qa, { className: "w-4 h-4" }),
              "Back"
            ]
          }
        ),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: h,
            className: "px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-sm hover:bg-neutral-800 hover:border-red-500/30 transition-all inline-flex items-center gap-2 text-neutral-400 hover:text-red-400 font-mono",
            children: [
              /* @__PURE__ */ e(De, { className: "w-4 h-4" }),
              "Restart"
            ]
          }
        )
      ] })
    ] })
  ] }) });
}, Cn = () => {
  const [i, l] = M("all"), [c, d] = M(null), a = [
    {
      id: 1,
      title: "Graphacrete: Transforming Concrete Construction",
      category: "product-demo",
      duration: "3:45",
      views: "12.4K",
      thumbnail: "graphacrete-demo",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      // Replace with actual video
      description: "See how Graphacrete enhances concrete strength by 40-50% while reducing cement usage by 15-20%.",
      featured: !0
    },
    {
      id: 2,
      title: "Graffisol Solar Coating in Action",
      category: "product-demo",
      duration: "4:12",
      views: "18.2K",
      thumbnail: "graffisol-demo",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Watch real-world testing of Graffisol achieving 10-12% energy gain on solar panels.",
      featured: !0
    },
    {
      id: 3,
      title: "Customer Success: L&T Construction",
      category: "testimonial",
      duration: "2:30",
      views: "8.7K",
      thumbnail: "lnt-testimonial",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Hear from L&T about their experience using Graphacrete in a major Mumbai project.",
      featured: !1
    },
    {
      id: 4,
      title: "How to Apply Ceraphene Coating",
      category: "how-to",
      duration: "5:20",
      views: "22.1K",
      thumbnail: "ceraphene-howto",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Step-by-step guide to applying Ceraphene for professional-grade ceramic protection.",
      featured: !1
    },
    {
      id: 5,
      title: "Tata Power Solar Farm Case Study",
      category: "case-study",
      duration: "6:15",
      views: "15.3K",
      thumbnail: "tata-casestudy",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "50 MW solar farm achieves 11.2% energy gain with Graffisol coating.",
      featured: !1
    },
    {
      id: 6,
      title: "HD-G-PE Manufacturing Process",
      category: "product-demo",
      duration: "4:45",
      views: "9.8K",
      thumbnail: "hdgpe-demo",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Behind the scenes of HD-G-PE production and quality control.",
      featured: !1
    },
    {
      id: 7,
      title: "Maruti Suzuki Premium Coating Review",
      category: "testimonial",
      duration: "3:10",
      views: "11.2K",
      thumbnail: "maruti-testimonial",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Automotive industry leader shares their experience with Ceraphene.",
      featured: !1
    },
    {
      id: 8,
      title: "Concrete Strength Testing Lab Results",
      category: "how-to",
      duration: "7:30",
      views: "19.5K",
      thumbnail: "testing-lab",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Live testing showing M30 to M50 grade transformation with Graphacrete.",
      featured: !1
    },
    {
      id: 9,
      title: "Shapoorji Pallonji Bridge Project",
      category: "case-study",
      duration: "5:45",
      views: "13.6K",
      thumbnail: "bridge-casestudy",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Coastal bridge construction with enhanced durability using Graphacrete.",
      featured: !1
    }
  ], s = [
    { id: "all", name: "All Videos", icon: st },
    { id: "product-demo", name: "Product Demos", icon: ft },
    { id: "testimonial", name: "Testimonials", icon: Be },
    { id: "how-to", name: "How-To Guides", icon: st },
    { id: "case-study", name: "Case Studies", icon: vt }
  ], p = i === "all" ? a : a.filter((m) => m.category === i), u = a.filter((m) => m.featured), b = (m) => {
    d(m);
  }, r = () => {
    d(null);
  }, h = ({ video: m, featured: g = !1 }) => {
    const w = {
      graphacrete: "from-teal-500/20 to-cyan-500/20",
      graffisol: "from-orange-500/20 to-yellow-500/20",
      ceraphene: "from-purple-500/20 to-pink-500/20",
      hdgpe: "from-blue-500/20 to-cyan-500/20",
      default: "from-neutral-700/20 to-neutral-600/20"
    }, y = () => {
      for (const k in w)
        if (m.thumbnail.includes(k)) return w[k];
      return w.default;
    };
    return /* @__PURE__ */ e(
      f.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        whileHover: { scale: 1.02 },
        className: `relative group cursor-pointer ${g ? "col-span-2 row-span-2" : ""}`,
        onClick: () => b(m),
        children: /* @__PURE__ */ t("div", { className: `relative bg-gradient-to-br ${y()} rounded-sm overflow-hidden border border-neutral-800 hover:border-brand-500/50 transition-all ${g ? "h-full min-h-[400px]" : "h-64"}`, children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center", children: /* @__PURE__ */ e("div", { className: "text-6xl opacity-30", children: "🎬" }) }),
          /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ e(
            f.div,
            {
              whileHover: { scale: 1.1 },
              className: "w-20 h-20 bg-brand-500/90 backdrop-blur rounded-full flex items-center justify-center border-2 border-white/30 shadow-2xl group-hover:bg-brand-600 transition-all",
              children: /* @__PURE__ */ e(ft, { className: "w-10 h-10 text-white ml-1", fill: "white" })
            }
          ) }),
          /* @__PURE__ */ t("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6", children: [
            /* @__PURE__ */ e("h3", { className: `font-display font-bold text-white mb-2 ${g ? "text-2xl" : "text-lg"}`, children: m.title }),
            /* @__PURE__ */ e("p", { className: `text-neutral-300 mb-3 ${g ? "text-base" : "text-sm line-clamp-2"}`, children: m.description }),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-4 text-sm text-neutral-400 font-mono", children: [
              /* @__PURE__ */ t("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ e(Pe, { className: "w-4 h-4" }),
                m.duration
              ] }),
              /* @__PURE__ */ t("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ e(vt, { className: "w-4 h-4" }),
                m.views
              ] })
            ] })
          ] }),
          g && /* @__PURE__ */ t("div", { className: "absolute top-4 left-4 px-3 py-1 bg-brand-500 text-white text-xs font-mono font-bold rounded-sm flex items-center gap-1", children: [
            /* @__PURE__ */ e(Be, { className: "w-3 h-3", fill: "white" }),
            "FEATURED"
          ] })
        ] })
      }
    );
  };
  return /* @__PURE__ */ t("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: [
    /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6", children: [
              /* @__PURE__ */ e(st, { className: "w-4 h-4 text-brand-400" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-mono text-brand-400 tracking-widest uppercase", children: "Video Library" })
            ] }),
            /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "See Our Products in Action" }),
            /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto mb-8", children: "Watch demos, case studies, and customer testimonials" }),
            /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-3", children: s.map((m) => {
              const g = m.icon;
              return /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => l(m.id),
                  className: `px-6 py-3 rounded-sm font-mono font-semibold transition-all border inline-flex items-center gap-2 ${i === m.id ? "bg-brand-500 text-white border-brand-400" : "bg-neutral-900 text-neutral-300 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700"}`,
                  children: [
                    /* @__PURE__ */ e(g, { className: "w-4 h-4" }),
                    m.name
                  ]
                },
                m.id
              );
            }) })
          ]
        }
      ),
      i === "all" && /* @__PURE__ */ t("div", { className: "mb-12", children: [
        /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white mb-6", children: "Featured Videos" }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: u.map((m) => /* @__PURE__ */ e(h, { video: m, featured: !0 }, m.id)) })
      ] }),
      /* @__PURE__ */ t("div", { className: "mb-12", children: [
        i !== "all" && /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white mb-6", children: s.find((m) => m.id === i)?.name }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: p.filter((m) => !m.featured || i !== "all").map((m) => /* @__PURE__ */ e(h, { video: m }, m.id)) })
      ] }),
      /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.4 },
          className: "bg-gradient-to-r from-brand-500/20 to-purple-500/20 border border-brand-500/30 rounded-sm p-8 text-center backdrop-blur",
          children: [
            /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white mb-4", children: "Want a Custom Demo?" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-300 mb-6 max-w-2xl mx-auto", children: "Schedule a personalized video call with our experts to see how our products can solve your specific challenges" }),
            /* @__PURE__ */ t("button", { className: "px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-mono font-bold rounded-sm transition-all border border-brand-400 inline-flex items-center gap-2", children: [
              /* @__PURE__ */ e(ft, { className: "w-5 h-5" }),
              "Schedule Demo Call"
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e(se, { children: c && /* @__PURE__ */ e(
      f.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: r,
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm",
        children: /* @__PURE__ */ t(
          f.div,
          {
            initial: { scale: 0.9 },
            animate: { scale: 1 },
            exit: { scale: 0.9 },
            onClick: (m) => m.stopPropagation(),
            className: "relative w-full max-w-5xl bg-neutral-900 rounded-sm overflow-hidden border border-neutral-800",
            children: [
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: r,
                  className: "absolute top-4 right-4 z-10 w-10 h-10 bg-black/70 hover:bg-black backdrop-blur rounded-full flex items-center justify-center border border-white/20 transition-all",
                  children: /* @__PURE__ */ e(Xa, { className: "w-6 h-6 text-white" })
                }
              ),
              /* @__PURE__ */ e("div", { className: "relative w-full", style: { paddingBottom: "56.25%" }, children: /* @__PURE__ */ e(
                "iframe",
                {
                  className: "absolute inset-0 w-full h-full",
                  src: c.videoUrl,
                  title: c.title,
                  frameBorder: "0",
                  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  allowFullScreen: !0
                }
              ) }),
              /* @__PURE__ */ t("div", { className: "p-6 border-t border-neutral-800", children: [
                /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white mb-2", children: c.title }),
                /* @__PURE__ */ e("p", { className: "text-neutral-300 mb-4", children: c.description }),
                /* @__PURE__ */ t("div", { className: "flex items-center gap-6 text-sm text-neutral-400 font-mono", children: [
                  /* @__PURE__ */ t("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e(Pe, { className: "w-4 h-4" }),
                    c.duration
                  ] }),
                  /* @__PURE__ */ t("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ e(vt, { className: "w-4 h-4" }),
                    c.views,
                    " views"
                  ] })
                ] })
              ] })
            ]
          }
        )
      }
    ) })
  ] });
}, Pn = () => {
  const [i, l] = M("all"), [c, d] = M(null), a = [
    {
      id: 1,
      title: "MIT Technology Review Innovators Under 35",
      category: "innovation",
      year: 2024,
      organization: "MIT Technology Review",
      description: "Recognized for breakthrough graphene commercialization and nanomaterial applications",
      prestige: "global",
      icon: "🏆",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 2,
      title: "Presidential Award for Excellence",
      category: "innovation",
      year: 2023,
      organization: "Government of India",
      description: "Awarded for outstanding contributions to advanced materials and nanotechnology",
      prestige: "national",
      icon: "🎖️",
      color: "from-brand-500 to-teal-500",
      featured: !0
    },
    {
      id: 3,
      title: "TED Fellowship",
      category: "innovation",
      year: 2024,
      organization: "TED",
      description: "Selected as TED Fellow for pioneering work in graphene-based sustainable materials",
      prestige: "global",
      icon: "🌟",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 4,
      title: "NASA iTech Recognition",
      category: "innovation",
      year: 2023,
      organization: "NASA",
      description: "Acknowledged for advanced materials with potential aerospace applications",
      prestige: "global",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 5,
      title: "NABL Accreditation",
      category: "quality",
      year: 2024,
      organization: "National Accreditation Board",
      description: "Certified testing laboratory maintaining international quality standards",
      prestige: "national",
      icon: "✅",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 6,
      title: "Best Startup - Materials Science",
      category: "business",
      year: 2023,
      organization: "Department of Science & Technology",
      description: "Recognized as leading startup in advanced materials commercialization",
      prestige: "national",
      icon: "🏅",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 7,
      title: "Green Technology Award",
      category: "sustainability",
      year: 2024,
      organization: "CII",
      description: "Honored for sustainable concrete solutions reducing carbon footprint",
      prestige: "national",
      icon: "🌱",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 8,
      title: "Innovation Excellence Award",
      category: "innovation",
      year: 2022,
      organization: "IIT Bombay",
      description: "Outstanding achievement in technology commercialization",
      prestige: "national",
      icon: "💡",
      color: "from-yellow-500 to-amber-500"
    },
    {
      id: 9,
      title: "Export Excellence Award",
      category: "business",
      year: 2024,
      organization: "FIEO",
      description: "Recognition for international market expansion and export growth",
      prestige: "national",
      icon: "🌍",
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 10,
      title: "Solar Industry Leadership Award",
      category: "innovation",
      year: 2023,
      organization: "Solar Energy Society",
      description: "Pioneer in solar panel performance enhancement technology",
      prestige: "national",
      icon: "☀️",
      color: "from-orange-500 to-yellow-500"
    },
    {
      id: 11,
      title: "Startup India Recognition",
      category: "business",
      year: 2022,
      organization: "DPIIT",
      description: "Certified as innovative startup with scalable technology solutions",
      prestige: "national",
      icon: "🇮🇳",
      color: "from-orange-500 to-green-500"
    },
    {
      id: 12,
      title: "R&D Innovation Award",
      category: "innovation",
      year: 2024,
      organization: "CSIR",
      description: "Excellence in research and development of nanomaterial applications",
      prestige: "national",
      icon: "🔬",
      color: "from-purple-500 to-blue-500"
    },
    {
      id: 13,
      title: "Best Industrial Partnership",
      category: "business",
      year: 2023,
      organization: "CII",
      description: "Successful industry collaborations and technology transfer",
      prestige: "national",
      icon: "🤝",
      color: "from-cyan-500 to-teal-500"
    },
    {
      id: 14,
      title: "Sustainability Champion",
      category: "sustainability",
      year: 2024,
      organization: "UN SDG",
      description: "Contributing to UN Sustainable Development Goals through green materials",
      prestige: "global",
      icon: "🌏",
      color: "from-green-500 to-blue-500"
    }
  ], s = [
    { id: "all", name: "All Awards", icon: Wt },
    { id: "innovation", name: "Innovation", icon: Ct },
    { id: "business", name: "Business", icon: ut },
    { id: "sustainability", name: "Sustainability", icon: _e },
    { id: "quality", name: "Quality", icon: V }
  ], p = i === "all" ? a : a.filter((b) => b.category === i), u = {
    totalAwards: a.length,
    globalRecognitions: a.filter((b) => b.prestige === "global").length,
    years: new Set(a.map((b) => b.year)).size,
    categories: new Set(a.map((b) => b.category)).size
  };
  return /* @__PURE__ */ t("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 opacity-5", children: /* @__PURE__ */ e("div", { className: "absolute inset-0", style: {
      backgroundImage: "radial-gradient(circle at 20px 20px, #0d9488 1px, transparent 0)",
      backgroundSize: "40px 40px"
    } }) }),
    /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6", children: [
              /* @__PURE__ */ e(pe, { className: "w-4 h-4 text-brand-400" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-mono text-brand-400 tracking-widest uppercase", children: "Recognition & Achievements" })
            ] }),
            /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "Awards & Accolades" }),
            /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto mb-8", children: "Recognized globally for innovation, sustainability, and excellence in advanced materials" }),
            /* @__PURE__ */ t("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12", children: [
              /* @__PURE__ */ t(
                f.div,
                {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { delay: 0.1 },
                  className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-4",
                  children: [
                    /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-brand-400 mb-1", children: [
                      u.totalAwards,
                      "+"
                    ] }),
                    /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 font-mono uppercase", children: "Total Awards" })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                f.div,
                {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { delay: 0.2 },
                  className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-4",
                  children: [
                    /* @__PURE__ */ e("div", { className: "text-3xl font-mono font-bold text-brand-400 mb-1", children: u.globalRecognitions }),
                    /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 font-mono uppercase", children: "Global Recognition" })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                f.div,
                {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { delay: 0.3 },
                  className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-4",
                  children: [
                    /* @__PURE__ */ e("div", { className: "text-3xl font-mono font-bold text-brand-400 mb-1", children: "6×" }),
                    /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 font-mono uppercase", children: "Presidential" })
                  ]
                }
              ),
              /* @__PURE__ */ t(
                f.div,
                {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { delay: 0.4 },
                  className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-4",
                  children: [
                    /* @__PURE__ */ e("div", { className: "text-3xl font-mono font-bold text-brand-400 mb-1", children: u.years }),
                    /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 font-mono uppercase", children: "Years" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ e("div", { className: "flex flex-wrap justify-center gap-3", children: s.map((b) => {
              const r = b.icon;
              return /* @__PURE__ */ t(
                "button",
                {
                  onClick: () => l(b.id),
                  className: `px-6 py-3 rounded-sm font-mono font-semibold transition-all border inline-flex items-center gap-2 ${i === b.id ? "bg-brand-500 text-white border-brand-400 shadow-[0_0_20px_rgba(13,148,136,0.3)]" : "bg-neutral-900 text-neutral-300 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700"}`,
                  children: [
                    /* @__PURE__ */ e(r, { className: "w-4 h-4" }),
                    b.name
                  ]
                },
                b.id
              );
            }) })
          ]
        }
      ),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", children: p.map((b, r) => /* @__PURE__ */ t(
        f.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: r * 0.05 },
          onMouseEnter: () => d(b.id),
          onMouseLeave: () => d(null),
          whileHover: { scale: 1.03, y: -5 },
          className: `relative bg-neutral-900/80 backdrop-blur border rounded-sm overflow-hidden transition-all ${c === b.id ? "border-brand-500/50 shadow-[0_0_30px_rgba(13,148,136,0.3)]" : "border-neutral-800"} ${b.featured ? "lg:col-span-2" : ""}`,
          children: [
            /* @__PURE__ */ t("div", { className: `bg-gradient-to-r ${b.color} p-6 relative overflow-hidden`, children: [
              /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-black/30 backdrop-blur-sm" }),
              /* @__PURE__ */ t("div", { className: "relative flex items-start justify-between", children: [
                /* @__PURE__ */ e("div", { className: "text-5xl", children: b.icon }),
                /* @__PURE__ */ t("div", { className: "text-right", children: [
                  /* @__PURE__ */ e("div", { className: "text-white/80 text-xs font-mono mb-1", children: b.year }),
                  b.prestige === "global" && /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-1 px-2 py-1 bg-white/20 backdrop-blur rounded-sm", children: [
                    /* @__PURE__ */ e(_e, { className: "w-3 h-3 text-white" }),
                    /* @__PURE__ */ e("span", { className: "text-xs font-mono text-white font-bold", children: "GLOBAL" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "p-6", children: [
              /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white mb-2 line-clamp-2", children: b.title }),
              /* @__PURE__ */ e("div", { className: "text-sm text-brand-400 font-mono mb-3", children: b.organization }),
              /* @__PURE__ */ e("p", { className: "text-sm text-neutral-400 leading-relaxed line-clamp-3", children: b.description }),
              /* @__PURE__ */ t("div", { className: "mt-4 inline-flex items-center gap-2 px-3 py-1 bg-neutral-800/50 border border-neutral-700 rounded-sm", children: [
                /* @__PURE__ */ e("div", { className: "w-2 h-2 bg-brand-400 rounded-full" }),
                /* @__PURE__ */ e("span", { className: "text-xs font-mono text-neutral-300 uppercase", children: b.category })
              ] })
            ] }),
            b.featured && /* @__PURE__ */ t("div", { className: "absolute top-20 right-4 px-3 py-1 bg-brand-500 text-white text-xs font-mono font-bold rounded-sm flex items-center gap-1 shadow-lg", children: [
              /* @__PURE__ */ e(Be, { className: "w-3 h-3", fill: "white" }),
              "FEATURED"
            ] })
          ]
        },
        b.id
      )) }),
      /* @__PURE__ */ e(
        f.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.6 },
          className: "bg-gradient-to-r from-brand-500/20 to-purple-500/20 border border-brand-500/30 rounded-sm p-8 text-center backdrop-blur",
          children: /* @__PURE__ */ t("div", { className: "flex flex-col md:flex-row items-center justify-center gap-6", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-brand-500/20 border border-brand-500/30 rounded-sm flex items-center justify-center", children: /* @__PURE__ */ e(Wt, { className: "w-6 h-6 text-brand-400" }) }),
              /* @__PURE__ */ t("div", { className: "text-left", children: [
                /* @__PURE__ */ e("div", { className: "text-white font-display font-bold", children: "Award-Winning Innovation" }),
                /* @__PURE__ */ e("div", { className: "text-neutral-400 text-sm font-mono", children: "Recognized by MIT, TED, NASA, and Government of India" })
              ] })
            ] }),
            /* @__PURE__ */ e("div", { className: "w-px h-12 bg-neutral-700 hidden md:block" }),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-sm flex items-center justify-center", children: /* @__PURE__ */ e(Be, { className: "w-6 h-6 text-green-400" }) }),
              /* @__PURE__ */ t("div", { className: "text-left", children: [
                /* @__PURE__ */ e("div", { className: "text-white font-display font-bold", children: "Global Impact" }),
                /* @__PURE__ */ e("div", { className: "text-neutral-400 text-sm font-mono", children: "Transforming industries worldwide" })
              ] })
            ] })
          ] })
        }
      )
    ] })
  ] });
};
export {
  Pn as AwardsWall,
  Nn as BeforeAfterSlider,
  Yr as CerapheneCostComparison,
  Vr as CerapheneROICalculator,
  vn as CertificationsQuality,
  tn as CompanyStatisticsDashboard,
  an as CompetitiveAdvantageMatrix,
  bn as CompetitiveMatrix,
  kn as CustomerSuccessStories,
  fn as EnvironmentalImpact,
  Or as GraffisolEnergyCalculator,
  Hr as GraffisolROICalculator,
  Xr as GraffisolSolarApplications,
  Qr as GraphacreteApplications,
  Ur as GraphacreteCostBenefit,
  ln as GraphacreteLabResults,
  Kr as GraphacreteROICalculator,
  _r as HDGPEPerformanceCalculator,
  Zr as HDGPEPolymerApplications,
  qr as HDGPEROICalculator,
  sn as HowItWorks,
  yn as HowItWorksSimple,
  cn as ImpactMap,
  pn as IndustrySolutions,
  rn as InnovationPipelineTimeline,
  $n as InteractiveROICalculator,
  wn as LivePerformanceSimulator,
  gn as LongTermSavingsCalculator,
  hn as MarketOpportunityAnalyzer,
  on as PerformancePilot,
  mn as ProductDataSheet,
  Jr as ProductPerformanceCards,
  Sn as ProductSelectorQuiz,
  nn as RDFacilitiesOverview,
  en as ROICostSavingsDisplay,
  un as ScienceExplained,
  dn as TCOAnalysis,
  xn as TrialToDeployment,
  Cn as VideoShowcaseSection
};
