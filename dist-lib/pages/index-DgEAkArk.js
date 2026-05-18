import { H as Xe, P as Ze, M as Je, T as et, L as tt, E as at, C as rt, a as lt, I as nt, b as st, c as it, S as dt, G as ot } from "./pages-CY_1hnak.js";
import { d as vt, e as $t, f as yt, g as wt, h as Mt, i as kt } from "./pages-CY_1hnak.js";
import { jsxs as t, jsx as e, Fragment as ae } from "react/jsx-runtime";
import { useState as L, useMemo as G } from "react";
import { AnimatePresence as Le, motion as B } from "framer-motion";
import { ResponsiveContainer as O, BarChart as U, CartesianGrid as z, XAxis as E, YAxis as F, Tooltip as W, Bar as D, Cell as de, LabelList as I, LineChart as Ge, ReferenceLine as oe, Line as je } from "recharts";
import { Droplets as Ae, Clock as Te, TrendingUp as K, Thermometer as De, Wrench as Ie, Award as ce, HardHat as re, CheckCircle as X, RefreshCw as Re, Zap as me, Leaf as le, Info as Ve, ChevronDown as Be, TrendingDown as Oe, Calculator as ze, Check as Ee, ShieldCheck as Fe } from "lucide-react";
const We = (m) => {
  const i = Math.pow(10, Number(m) / 100 * 4);
  return i < 10 ? Math.max(1, Math.round(i)) : i < 100 ? Math.round(i / 5) * 5 : i < 1e3 ? Math.round(i / 10) * 10 : Math.round(i / 100) * 100;
}, ne = (m) => Math.round(Math.log10(Math.max(1, Math.min(1e4, m))) / 4 * 100), Ke = [
  { v: 1, num: "1", label: ["Small", "pour"] },
  { v: 10, num: "10", label: ["House", "slab"] },
  { v: 100, num: "100", label: ["Building", "floor"] },
  { v: 1e3, num: "1k", label: ["Complex", "block"] },
  { v: 1e4, num: "10k", label: ["Township", "project"] }
], _e = (m) => m <= 5 ? "Small column or footing" : m <= 50 ? "House slab or foundation" : m <= 300 ? "Building floor or structure" : m <= 1e3 ? "Multi-storey residential block" : m <= 5e3 ? "Large complex or infrastructure" : "Township-scale or major infrastructure project", b = (m) => {
  const i = Math.abs(m ?? 0), u = m < 0 ? "−" : "";
  return i >= 1e7 ? `${u}₹${(i / 1e7).toFixed(1)} Cr` : i >= 1e5 ? `${u}₹${(i / 1e5).toFixed(1)} L` : i >= 1e3 ? `${u}₹${Math.round(i / 1e3)}k` : `${u}₹${Math.round(i)}`;
}, Q = (m) => `${(m ?? 0) < 0 ? "−" : ""}₹${Math.abs(Math.round(m ?? 0)).toLocaleString("en-IN")}`, He = ({ active: m, payload: i, label: u }) => !m || !i?.length ? null : /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-xl p-3 shadow-lg text-sm", children: [
  /* @__PURE__ */ e("p", { className: "font-bold text-neutral-800 mb-0.5", children: u }),
  /* @__PURE__ */ t("p", { className: "text-neutral-600", children: [
    "₹",
    i[0].value?.toLocaleString("en-IN"),
    "/m³"
  ] })
] }), Ye = ({ active: m, payload: i, label: u }) => !m || !i?.length ? null : /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-xl p-3 shadow-lg text-sm", children: [
  /* @__PURE__ */ e("p", { className: "font-bold text-neutral-800 mb-1", children: u }),
  i.map((o) => /* @__PURE__ */ t("p", { className: "text-neutral-600", style: { color: o.fill }, children: [
    o.name,
    ": ",
    o.value,
    " MPa"
  ] }, o.name))
] }), ht = ({
  calculations: m,
  defaultInputs: i,
  secondaryInputs: u,
  theme: o = "light"
}) => {
  const a = o === "dark", x = (l) => ({
    background: `linear-gradient(to right, #6366f1 ${l.toFixed(1)}%, ${a ? "#374151" : "#e5e7eb"} ${l.toFixed(1)}%)`
  }), v = "w-full h-2 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-indigo-600 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-indigo-600 [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-pointer", h = { ...i, ...u || {} }, w = Object.keys(h).reduce((l, n) => {
    const c = h[n];
    return l[n] = c.default !== void 0 ? c.default : (c.min + c.max) / 2, l;
  }, {}), [d, $] = L(w), [M, y] = L(String(w.projectVolume || 500)), [f, j] = L(!0), [A, R] = L(!1), [C, V] = L("cost"), k = (l, n) => $((c) => ({ ...c, [l]: n })), r = G(() => m(d), [d, m]), pe = () => {
    $(w), y(String(w.projectVolume || 500));
  }, p = (r.netSavingsPerM3 ?? 0) > 0, P = (r.gradeOnlySavingsPerM3 ?? 0) > 0, T = G(() => r.baseCostPerM3 ? [
    { name: `M${r.baseGrade}`, cost: r.baseCostPerM3, fill: "#94a3b8" },
    { name: `M${r.baseGrade}+G`, cost: r.netCostWithGraphacretePerM3, fill: "#22c55e" },
    {
      name: `M${r.targetGrade}`,
      cost: r.targetCostPerM3,
      fill: p ? "#f87171" : "#64748b"
    }
  ] : [], [r, p]), he = G(() => {
    if (!T.length) return [3e3, 6e3];
    const l = T.map((n) => n.cost);
    return [
      Math.floor(Math.min(...l) / 500) * 500 - 300,
      Math.ceil(Math.max(...l) / 500) * 500 + 250
    ];
  }, [T]), J = G(() => {
    if (r.productCostTotal == null) return [];
    const l = (r.lifecycle?.total || 0) / (d.analysisPeriod || 10);
    return Array.from({ length: 11 }, (n, c) => ({
      year: c,
      cumulative: Math.round((r.netSavingsTotal || 0) + l * c)
    }));
  }, [r, d.analysisPeriod]), ee = G(() => r.baseMPa ? [
    { name: "7-Day", base: r.baseAt7DayMPa, withG: r.graphAt7DayMPa, target: r.targetAt7DayMPa },
    { name: "28-Day", base: r.baseMPa, withG: r.graphAt28DayMPa, target: r.targetMPa }
  ] : [], [r]), Y = a ? "bg-neutral-900" : "bg-white", te = a ? "bg-neutral-950/40" : "bg-neutral-50/60", N = a ? "border-neutral-700" : "border-neutral-200", g = a ? "text-white" : "text-neutral-900", s = a ? "text-neutral-400" : "text-neutral-500", ue = `w-full border ${N} rounded-lg px-3 py-2.5 text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${a ? "bg-neutral-800 text-white" : "bg-white text-neutral-900"}`, ge = () => {
    const l = d.projectVolume || 1;
    return /* @__PURE__ */ t("div", { className: "space-y-2.5", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${g}`, children: "Concrete Volume" }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "number",
              value: M,
              min: 1,
              max: 1e4,
              onChange: (n) => {
                y(n.target.value);
                const c = parseInt(n.target.value, 10);
                !isNaN(c) && c >= 1 && c <= 1e4 && k("projectVolume", c);
              },
              onBlur: () => y(String(l)),
              className: `w-20 text-right text-sm font-mono border ${N} rounded px-2 py-1 ${a ? "bg-neutral-800 text-white" : "bg-white text-neutral-900"} focus:outline-none focus:ring-1 focus:ring-indigo-500`
            }
          ),
          /* @__PURE__ */ e("span", { className: `text-sm font-medium ${g}`, children: "m³" })
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: 0,
          max: 100,
          value: ne(l),
          onChange: (n) => {
            const c = We(n.target.value);
            k("projectVolume", c), y(String(c));
          },
          className: v,
          style: x(ne(l))
        }
      ),
      /* @__PURE__ */ e("div", { className: "flex justify-between", children: Ke.map(({ v: n, num: c, label: S }) => /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-0.5 w-10", children: [
        /* @__PURE__ */ e("span", { className: `text-[10px] font-semibold ${g}`, children: c }),
        S.map((q, Ce) => /* @__PURE__ */ e("span", { className: `text-[9px] ${s} text-center leading-tight`, children: q }, Ce))
      ] }, n)) }),
      /* @__PURE__ */ t("p", { className: `text-[11px] italic ${s}`, children: [
        "≈ ",
        _e(l)
      ] })
    ] });
  }, fe = () => {
    const l = i.targetStrength;
    return l ? /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${g}`, children: l.label }),
      /* @__PURE__ */ e(
        "select",
        {
          value: d.targetStrength,
          onChange: (n) => k("targetStrength", Number(n.target.value)),
          className: ue,
          children: l.options.map((n) => /* @__PURE__ */ t("option", { value: n.value, children: [
            n.label,
            n.badge ? " ✦" : "",
            " — ",
            n.description
          ] }, n.value))
        }
      ),
      r.isNABL ? /* @__PURE__ */ e("p", { className: "text-[11px] font-semibold text-green-600", children: "✦ NABL certified — M30 + Graphacrete ≈ M50" }) : /* @__PURE__ */ e("p", { className: `text-[11px] ${s}`, children: "Cement savings & lifecycle value apply at all grades." })
    ] }) : null;
  }, Ne = () => {
    const l = i.cementPrice;
    if (!l) return null;
    const n = d.cementPrice;
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${g}`, children: l.label }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${a ? "text-indigo-400" : "text-indigo-600"}`, children: [
          "₹",
          n,
          "/bag"
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: l.min,
          max: l.max,
          step: l.step,
          value: n,
          onChange: (c) => k("cementPrice", Number(c.target.value)),
          className: v,
          style: x(Math.max(0, Math.min(100, (n - l.min) / (l.max - l.min) * 100)))
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${s}`, children: [
          "₹",
          l.min
        ] }),
        /* @__PURE__ */ e("span", { className: `text-[10px] ${s}`, children: "avg ₹320" }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${s}`, children: [
          "₹",
          l.max
        ] })
      ] })
    ] });
  }, ve = () => {
    const l = i.cementReductionPct;
    if (!l) return null;
    const n = d.cementReductionPct;
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${g}`, children: l.label }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${a ? "text-indigo-400" : "text-indigo-600"}`, children: [
          n,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: l.min,
          max: l.max,
          step: l.step,
          value: n,
          onChange: (c) => k("cementReductionPct", Number(c.target.value)),
          className: v,
          style: x(Math.max(0, Math.min(100, (n - l.min) / (l.max - l.min) * 100)))
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-[10px] ${s}`, children: "15% conservative" }),
        /* @__PURE__ */ e("span", { className: `text-[10px] ${s}`, children: "20% optimistic" })
      ] }),
      /* @__PURE__ */ e("p", { className: `text-[11px] ${s}`, children: "NABL certified range: 15–20%" })
    ] });
  }, $e = () => {
    const l = i.strengthGain28;
    if (!l) return null;
    const n = d.strengthGain28 ?? l.default, c = Math.max(0, Math.min(100, (n - l.min) / (l.max - l.min) * 100));
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${g}`, children: l.label }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${a ? "text-green-400" : "text-green-600"}`, children: [
          n,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: l.min,
          max: l.max,
          step: l.step,
          value: n,
          onChange: (S) => k("strengthGain28", Number(S.target.value)),
          className: v,
          style: { background: `linear-gradient(to right, #16a34a ${c.toFixed(1)}%, ${a ? "#374151" : "#e5e7eb"} ${c.toFixed(1)}%)` }
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${s}`, children: [
          l.min,
          "% min"
        ] }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${s}`, children: [
          l.max,
          "% NABL max"
        ] })
      ] }),
      /* @__PURE__ */ e("p", { className: `text-[11px] ${s}`, children: l.note }),
      r.graphAt28DayMPa != null && /* @__PURE__ */ t("p", { className: "text-[11px] font-semibold text-green-600", children: [
        "→ M",
        r.baseMPa || 30,
        "+G = ",
        r.graphAt28DayMPa,
        " MPa · ",
        r.strengthGrade28Label,
        n === r.nablGainPct && /* @__PURE__ */ e("span", { className: "ml-1 text-[9px] font-bold text-green-500", children: "✦ NABL" })
      ] })
    ] });
  }, ye = () => {
    const l = i.strengthGain7;
    if (!l) return null;
    const n = d.strengthGain7 ?? l.default, c = Math.max(0, Math.min(100, (n - l.min) / (l.max - l.min) * 100));
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${g}`, children: l.label }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${a ? "text-orange-400" : "text-orange-600"}`, children: [
          n,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: l.min,
          max: l.max,
          step: l.step,
          value: n,
          onChange: (S) => k("strengthGain7", Number(S.target.value)),
          className: v,
          style: { background: `linear-gradient(to right, #ea580c ${c.toFixed(1)}%, ${a ? "#374151" : "#e5e7eb"} ${c.toFixed(1)}%)` }
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${s}`, children: [
          l.min,
          "% min"
        ] }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${s}`, children: [
          l.max,
          "% max"
        ] })
      ] }),
      /* @__PURE__ */ e("p", { className: `text-[11px] ${s}`, children: l.note }),
      r.graphAt7DayMPa != null && /* @__PURE__ */ t("p", { className: "text-[11px] font-semibold text-orange-600", children: [
        "→ M",
        r.baseMPa || 30,
        "+G = ",
        r.graphAt7DayMPa,
        " MPa at 7 days · strike in ",
        r.graphDaysToStrike,
        " days"
      ] })
    ] });
  }, we = (l, n) => /* @__PURE__ */ t("div", { className: "flex items-center justify-between py-0.5", children: [
    /* @__PURE__ */ e("label", { className: `text-sm font-medium ${g}`, children: n.label }),
    /* @__PURE__ */ e(
      "button",
      {
        onClick: () => k(l, !d[l]),
        className: `w-11 h-6 rounded-full relative flex-shrink-0 transition-colors ${d[l] ? "bg-indigo-600" : a ? "bg-neutral-700" : "bg-neutral-300"}`,
        children: /* @__PURE__ */ e("div", { className: `w-4 h-4 bg-white rounded-full absolute top-1 shadow-sm transition-all ${d[l] ? "left-6" : "left-1"}` })
      }
    )
  ] }), Me = (l, n) => {
    const c = Math.max(0, Math.min(100, (d[l] - n.min) / (n.max - n.min) * 100));
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("label", { className: `text-sm font-medium ${g}`, children: n.label }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${a ? "text-indigo-400" : "text-indigo-600"}`, children: [
          d[l]?.toLocaleString(),
          " ",
          n.unit
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: n.min,
          max: n.max,
          step: n.step || 1,
          value: d[l],
          onChange: (S) => k(l, Number(S.target.value)),
          className: v,
          style: x(c)
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${s}`, children: [
          n.min,
          " ",
          n.unit
        ] }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${s}`, children: [
          n.max,
          " ",
          n.unit
        ] })
      ] }),
      n.note && /* @__PURE__ */ e("p", { className: `text-[11px] ${s}`, children: n.note })
    ] });
  }, ke = (l, n) => /* @__PURE__ */ t("div", { className: "space-y-2", children: [
    /* @__PURE__ */ e("label", { className: `text-sm font-medium ${g}`, children: n.label }),
    /* @__PURE__ */ e("div", { className: "flex gap-2", children: n.options.map((c) => /* @__PURE__ */ e(
      "button",
      {
        onClick: () => k(l, c.value),
        className: `flex-1 py-1.5 rounded-lg text-sm font-medium border transition-all ${d[l] === c.value ? a ? "bg-white text-neutral-900 border-white" : "bg-neutral-900 text-white border-neutral-900" : a ? "text-neutral-400 border-neutral-700 hover:border-neutral-500" : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"}`,
        children: c.label
      },
      c.value
    )) })
  ] }), Se = (l, n) => {
    if (n.showWhen && d[n.showWhen.key] !== n.showWhen.value) return null;
    switch (n.type) {
      case "toggle":
        return we(l, n);
      case "slider":
        return Me(l, n);
      case "buttongroup":
        return ke(l, n);
      default:
        return null;
    }
  }, Pe = r.lifecycle ? [
    { icon: Ae, label: "Waterproofing avoided", value: r.lifecycle.waterproofing, color: "text-blue-500" },
    { icon: Te, label: "Construction time", value: r.lifecycle.construction, color: "text-orange-500" },
    { icon: K, label: "Life extension (est.)", value: r.lifecycle.lifeExtension, color: "text-green-500" },
    { icon: De, label: "Energy / cooling", value: r.lifecycle.thermal, color: "text-yellow-500" },
    { icon: Ie, label: "Maintenance", value: r.lifecycle.maintenance, color: "text-purple-500" }
  ] : [];
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${N} overflow-hidden shadow-2xl`, children: [
    /* @__PURE__ */ t("div", { className: `px-6 py-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs ${a ? "bg-indigo-950/40 border-b border-indigo-900/50" : "bg-indigo-50 border-b border-indigo-100"}`, children: [
      /* @__PURE__ */ e(ce, { className: "w-3.5 h-3.5 text-indigo-500 flex-shrink-0" }),
      /* @__PURE__ */ e("span", { className: "font-bold uppercase tracking-wider text-indigo-500", children: "NABL Certified" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: [
        "M",
        r.baseGrade || 30,
        " + Graphacrete ≈ M",
        r.targetGrade || 50
      ] }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: `font-bold ${p ? "text-green-600" : "text-amber-500"}`, children: [
        "Net: ",
        p ? "+" : "−",
        "₹",
        Math.abs(r.netSavingsPerM3 || 0).toLocaleString("en-IN"),
        "/m³"
      ] }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: `font-semibold ${P ? a ? "text-slate-400" : "text-slate-600" : s}`, children: [
        "Grade-only: ",
        P ? "+" : "−",
        "₹",
        Math.abs(r.gradeOnlySavingsPerM3 || 0).toLocaleString("en-IN"),
        "/m³"
      ] }),
      /* @__PURE__ */ t("div", { className: "ml-auto flex items-center flex-shrink-0 rounded-full overflow-hidden border border-neutral-300/60", children: [
        /* @__PURE__ */ e(
          "button",
          {
            onClick: () => R(!1),
            className: `px-2.5 py-1 text-[10px] font-semibold transition-colors ${A ? a ? "text-neutral-400 bg-neutral-800 hover:bg-neutral-700" : "text-neutral-500 bg-white hover:bg-neutral-50" : "bg-indigo-600 text-white"}`,
            children: "Owner"
          }
        ),
        /* @__PURE__ */ t(
          "button",
          {
            onClick: () => R(!0),
            className: `px-2.5 py-1 text-[10px] font-semibold transition-colors flex items-center gap-1 ${A ? "bg-amber-500 text-white" : a ? "text-neutral-400 bg-neutral-800 hover:bg-neutral-700" : "text-neutral-500 bg-white hover:bg-neutral-50"}`,
            children: [
              /* @__PURE__ */ e(re, { className: "w-2.5 h-2.5" }),
              "Contractor"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: `grid grid-cols-2 lg:grid-cols-3 gap-6 px-8 py-7 border-b ${N} ${Y}`, children: [
      /* @__PURE__ */ e(ge, {}),
      /* @__PURE__ */ e(fe, {}),
      /* @__PURE__ */ e(Ne, {}),
      /* @__PURE__ */ e(ve, {}),
      /* @__PURE__ */ e($e, {}),
      /* @__PURE__ */ e(ye, {})
    ] }),
    /* @__PURE__ */ t("div", { className: `px-8 py-2.5 flex items-center justify-between border-b ${N} ${a ? "bg-neutral-900/80" : "bg-indigo-50/60"}`, children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5 flex-wrap text-[10px]", children: [
        /* @__PURE__ */ e(X, { className: `w-3 h-3 flex-shrink-0 ${a ? "text-indigo-400" : "text-indigo-600"}` }),
        /* @__PURE__ */ e("span", { className: `font-bold uppercase tracking-wider ${a ? "text-indigo-400" : "text-indigo-600"}`, children: "Verified Formulas" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ t("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: [
          "₹",
          r.additiveCostPerM3 || 470,
          "/m³ additive (fixed)"
        ] }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ t("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: [
          d.cementReductionPct || 15,
          "% cement reduction"
        ] }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: "IS 456 · NABL Certified" })
      ] }),
      /* @__PURE__ */ t(
        "button",
        {
          onClick: pe,
          className: `flex items-center gap-1.5 text-[10px] font-semibold px-3 py-1.5 rounded-lg border transition-colors flex-shrink-0 ${a ? "text-neutral-400 border-neutral-700 hover:bg-neutral-800 hover:text-neutral-200" : "text-neutral-500 border-neutral-200 hover:bg-white hover:text-neutral-700"}`,
          children: [
            /* @__PURE__ */ e(Re, { className: "w-3 h-3" }),
            "Reset"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: `grid grid-cols-1 lg:grid-cols-12 ${Y}`, children: [
      /* @__PURE__ */ t("div", { className: `lg:col-span-5 p-8 border-b lg:border-b-0 lg:border-r ${N} flex flex-col gap-6`, children: [
        /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-wider ${s}`, children: "Per m³ Cost Breakdown" }),
        /* @__PURE__ */ t("div", { className: "space-y-2", children: [
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border ${N} ${a ? "bg-neutral-800/50" : "bg-neutral-50"}`, children: [
            /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-widest ${s} mb-1`, children: [
              "M",
              r.baseGrade,
              " concrete (base mix)"
            ] }),
            /* @__PURE__ */ t("p", { className: `text-2xl font-display font-medium ${g}`, children: [
              Q(r.baseCostPerM3 || 0),
              /* @__PURE__ */ e("span", { className: `text-sm font-normal ${s} ml-1`, children: "/m³" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl border-2 overflow-hidden ${a ? "border-blue-800 bg-blue-950/20" : "border-blue-200 bg-white"}`, children: [
            /* @__PURE__ */ t("div", { className: `px-4 py-2 flex items-center justify-between ${a ? "bg-blue-900/40 border-b border-blue-800/50" : "bg-blue-50 border-b border-blue-100"}`, children: [
              /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-widest text-blue-500", children: "Additive Requirement" }),
              /* @__PURE__ */ t("span", { className: `text-[9px] font-bold px-2 py-0.5 rounded-full ${a ? "bg-blue-800/70 text-blue-300" : "bg-blue-200 text-blue-700"}`, children: [
                r.additiveVolumeLitresPerM3 || 2,
                " L/m³ · ",
                r.additiveMlPerBag || 250,
                " ml / ",
                r.cementBagWeightKg || 50,
                " kg bag"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `grid grid-cols-2 divide-x ${a ? "divide-blue-800/40" : "divide-blue-100"}`, children: [
              /* @__PURE__ */ t("div", { className: "p-4", children: [
                /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider mb-1.5 ${a ? "text-blue-400" : "text-blue-500"}`, children: "Volume Needed" }),
                /* @__PURE__ */ t("p", { className: `text-2xl font-display font-bold tabular-nums leading-none ${a ? "text-blue-200" : "text-blue-800"}`, children: [
                  (r.additiveVolumeLitresTotal || 0).toLocaleString("en-IN"),
                  /* @__PURE__ */ e("span", { className: `text-sm font-normal ml-1 ${a ? "text-blue-400" : "text-blue-500"}`, children: "L" })
                ] }),
                /* @__PURE__ */ t("p", { className: `text-[10px] mt-1.5 font-mono ${a ? "text-blue-500" : "text-blue-400"}`, children: [
                  r.additiveVolumeLitresPerM3 || 2,
                  " L × ",
                  (d.projectVolume || 0).toLocaleString("en-IN"),
                  " m³"
                ] }),
                /* @__PURE__ */ t("p", { className: `text-[10px] mt-1 ${a ? "text-blue-600" : "text-blue-400"}`, children: [
                  "= ",
                  r.additiveMlPerBag || 250,
                  " ml per ",
                  r.cementBagWeightKg || 50,
                  " kg bag"
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "p-4", children: [
                /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider mb-1.5 ${a ? "text-blue-400" : "text-blue-500"}`, children: "Additive Cost" }),
                /* @__PURE__ */ e("p", { className: `text-2xl font-display font-bold tabular-nums leading-none ${a ? "text-blue-200" : "text-blue-800"}`, children: b(r.productCostTotal || 0) }),
                /* @__PURE__ */ t("p", { className: `text-[10px] mt-1.5 font-mono ${a ? "text-blue-500" : "text-blue-400"}`, children: [
                  "₹",
                  r.additivePricePerLitre || 235,
                  "/L × ",
                  (r.additiveVolumeLitresTotal || 0).toLocaleString("en-IN"),
                  " L"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e("div", { className: `px-4 py-2 ${a ? "bg-blue-900/20 border-t border-blue-800/30" : "bg-blue-50/80 border-t border-blue-100"}`, children: /* @__PURE__ */ t("p", { className: `text-[10px] ${a ? "text-blue-500" : "text-blue-400"}`, children: [
              "₹",
              (r.additiveCostPerM3 || 0).toLocaleString("en-IN"),
              "/m³ · ",
              r.additiveVolumeLitresPerM3 || 2,
              " L/m³ @ ₹",
              r.additivePricePerLitre || 235,
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
                  (r.additiveCostPerM3 || 0).toLocaleString("en-IN")
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ t("span", { className: "text-green-600", children: [
                  "Cement saved (",
                  d.cementReductionPct,
                  "%)"
                ] }),
                /* @__PURE__ */ t("span", { className: "font-mono font-semibold text-green-600", children: [
                  "−₹",
                  (r.cementSavingsValuePerM3 || 0).toLocaleString("en-IN")
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: `flex justify-between items-center pt-1.5 border-t ${a ? "border-blue-800/40" : "border-blue-200/60"}`, children: [
                /* @__PURE__ */ e("span", { className: "font-bold text-blue-600", children: "Net addition/m³" }),
                /* @__PURE__ */ t("span", { className: "font-bold font-mono text-blue-600", children: [
                  (r.additiveCostPerM3 || 0) - (r.cementSavingsValuePerM3 || 0) >= 0 ? "+" : "−",
                  "₹",
                  Math.abs((r.additiveCostPerM3 || 0) - (r.cementSavingsValuePerM3 || 0)).toLocaleString("en-IN")
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 px-1", children: [
            /* @__PURE__ */ e("div", { className: `flex-1 h-px ${a ? "bg-neutral-700" : "bg-neutral-200"}` }),
            /* @__PURE__ */ e("span", { className: `text-[10px] uppercase font-bold ${s}`, children: "equals" }),
            /* @__PURE__ */ e("div", { className: `flex-1 h-px ${a ? "bg-neutral-700" : "bg-neutral-200"}` })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border-2 ${a ? "border-green-700 bg-green-900/10" : "border-green-300 bg-green-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ t("p", { className: "text-xs font-bold uppercase tracking-widest text-green-600", children: [
                "M",
                r.baseGrade,
                " + Graphacrete"
              ] }),
              /* @__PURE__ */ t("span", { className: "flex items-center gap-1 text-[10px] text-green-600 font-semibold", children: [
                /* @__PURE__ */ e(X, { className: "w-3 h-3" }),
                "≈ M",
                r.targetGrade,
                " performance"
              ] })
            ] }),
            /* @__PURE__ */ t("p", { className: "text-2xl font-display font-medium text-green-700 mt-1", children: [
              Q(r.netCostWithGraphacretePerM3 || 0),
              /* @__PURE__ */ e("span", { className: "text-sm font-normal text-green-500 ml-1", children: "/m³" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl p-3.5 border ${a ? "border-neutral-700 bg-neutral-800/30" : "border-neutral-200 bg-neutral-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-widest ${s}`, children: [
                "Standard M",
                r.targetGrade,
                " (traditional)"
              ] }),
              /* @__PURE__ */ e("span", { className: `text-[10px] px-2 py-0.5 rounded-full font-semibold ${a ? "bg-neutral-700 text-neutral-400" : "bg-neutral-200 text-neutral-500"}`, children: "Baseline" })
            ] }),
            /* @__PURE__ */ t("p", { className: `text-xl font-display font-medium ${g} mt-0.5`, children: [
              Q(r.targetCostPerM3 || 0),
              /* @__PURE__ */ e("span", { className: `text-sm font-normal ${s} ml-1`, children: "/m³" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: `rounded-xl border ${N} ${a ? "bg-neutral-800/30" : "bg-neutral-50"} p-5`, children: [
          /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-wider ${s} mb-4`, children: [
            "Project Total · ",
            (d.projectVolume || 0).toLocaleString(),
            " m³"
          ] }),
          /* @__PURE__ */ t("div", { className: "space-y-2", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ t("span", { className: `text-sm ${s}`, children: [
                "Traditional M",
                r.targetGrade
              ] }),
              /* @__PURE__ */ e("span", { className: `text-sm font-mono font-semibold ${a ? "text-neutral-300" : "text-neutral-600"}`, children: b((r.targetCostPerM3 || 0) * (d.projectVolume || 0)) })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ e("span", { className: `text-sm ${s}`, children: "With Graphacrete" }),
              /* @__PURE__ */ e("span", { className: `text-sm font-mono font-semibold ${a ? "text-neutral-300" : "text-neutral-600"}`, children: b((r.netCostWithGraphacretePerM3 || 0) * (d.projectVolume || 0)) })
            ] }),
            /* @__PURE__ */ t("div", { className: `pt-2 border-t ${N} space-y-1.5`, children: [
              /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ t("span", { className: `text-xs ${s}`, children: [
                  "Grade-only savings ",
                  /* @__PURE__ */ e("span", { className: "opacity-60", children: "(brochure)" })
                ] }),
                /* @__PURE__ */ t("span", { className: `text-sm font-mono font-semibold ${P ? a ? "text-slate-300" : "text-slate-600" : s}`, children: [
                  P ? "" : "−",
                  b(Math.abs(r.gradeOnlySavingsTotal || 0))
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ e("span", { className: `text-sm font-bold ${g}`, children: "Net savings (all-in)" }),
                /* @__PURE__ */ t("span", { className: `text-xl font-bold font-mono ${p ? a ? "text-green-400" : "text-green-700" : a ? "text-amber-400" : "text-amber-600"}`, children: [
                  p ? "" : "−",
                  b(Math.abs(r.netSavingsTotal || 0))
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: `rounded-xl border ${N} overflow-hidden`, children: [
          /* @__PURE__ */ e("div", { className: `px-4 py-2 ${a ? "bg-neutral-800/60 border-b border-neutral-700" : "bg-neutral-100/80 border-b border-neutral-200"}`, children: /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-widest ${s}`, children: "Savings Breakdown" }) }),
          /* @__PURE__ */ t("div", { className: `grid grid-cols-3 ${a ? "divide-x divide-neutral-700" : "divide-x divide-neutral-200"}`, children: [
            /* @__PURE__ */ t("div", { className: `p-3 text-center ${a ? "bg-neutral-800/20" : "bg-white"}`, children: [
              /* @__PURE__ */ e("p", { className: `text-[9px] font-bold uppercase tracking-wider ${s} mb-2`, children: "Per m³" }),
              /* @__PURE__ */ e("p", { className: `text-[9px] ${s} mb-0.5`, children: "Additive" }),
              /* @__PURE__ */ t("p", { className: "text-xs font-mono font-bold text-blue-500", children: [
                "₹",
                r.additiveCostPerM3 || 470
              ] }),
              /* @__PURE__ */ e("div", { className: `my-1.5 border-t ${a ? "border-neutral-700" : "border-neutral-100"}` }),
              /* @__PURE__ */ e("p", { className: `text-[9px] ${s} mb-0.5`, children: p ? "Savings" : "Premium" }),
              /* @__PURE__ */ t("p", { className: `text-xs font-mono font-bold ${p ? "text-green-600" : "text-amber-500"}`, children: [
                p ? "+" : "−",
                "₹",
                Math.abs(r.netSavingsPerM3 || 0)
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `p-3 text-center ${a ? "bg-neutral-800/20" : "bg-white"}`, children: [
              /* @__PURE__ */ t("p", { className: `text-[9px] font-bold uppercase tracking-wider ${s} mb-2`, children: [
                "Per Pour",
                /* @__PURE__ */ t("span", { className: `block normal-case font-normal ${s}`, children: [
                  d.pourSize || 30,
                  "m³"
                ] })
              ] }),
              /* @__PURE__ */ e("p", { className: `text-[9px] ${s} mb-0.5`, children: "Additive" }),
              /* @__PURE__ */ e("p", { className: "text-xs font-mono font-bold text-blue-500", children: b(r.additiveCostPerPour || 0) }),
              /* @__PURE__ */ e("div", { className: `my-1.5 border-t ${a ? "border-neutral-700" : "border-neutral-100"}` }),
              /* @__PURE__ */ e("p", { className: `text-[9px] ${s} mb-0.5`, children: p ? "Savings" : "Premium" }),
              /* @__PURE__ */ t("p", { className: `text-xs font-mono font-bold ${p ? "text-green-600" : "text-amber-500"}`, children: [
                p ? "+" : "−",
                b(Math.abs(r.netSavingsPerPour || 0))
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `p-3 text-center ${a ? "bg-neutral-800/20" : "bg-white"}`, children: [
              /* @__PURE__ */ t("p", { className: `text-[9px] font-bold uppercase tracking-wider ${s} mb-2`, children: [
                "Project",
                /* @__PURE__ */ t("span", { className: `block normal-case font-normal ${s}`, children: [
                  (d.projectVolume || 0).toLocaleString(),
                  "m³"
                ] })
              ] }),
              /* @__PURE__ */ e("p", { className: `text-[9px] ${s} mb-0.5`, children: "Additive" }),
              /* @__PURE__ */ e("p", { className: "text-xs font-mono font-bold text-blue-500", children: b(r.productCostTotal || 0) }),
              /* @__PURE__ */ e("div", { className: `my-1.5 border-t ${a ? "border-neutral-700" : "border-neutral-100"}` }),
              /* @__PURE__ */ e("p", { className: `text-[9px] ${s} mb-0.5`, children: p ? "Savings" : "Premium" }),
              /* @__PURE__ */ t("p", { className: `text-xs font-mono font-bold ${p ? "text-green-600" : "text-amber-500"}`, children: [
                p ? "+" : "−",
                b(Math.abs(r.netSavingsTotal || 0))
              ] })
            ] })
          ] })
        ] }),
        A && (r.contractorMarginPerM3 || 0) > 0 && /* @__PURE__ */ t("div", { className: `rounded-xl border-2 overflow-hidden ${a ? "border-amber-700 bg-amber-900/10" : "border-amber-200 bg-amber-50"}`, children: [
          /* @__PURE__ */ t("div", { className: `px-4 py-2.5 flex items-center gap-2 ${a ? "bg-amber-900/30 border-b border-amber-700/50" : "bg-amber-100/80 border-b border-amber-200"}`, children: [
            /* @__PURE__ */ e(re, { className: "w-3.5 h-3.5 text-amber-600" }),
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-widest text-amber-600", children: "Contractor P&L" })
          ] }),
          /* @__PURE__ */ t("div", { className: "p-4 space-y-2.5 text-sm", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ t("span", { className: s, children: [
                "You charge (M",
                r.targetGrade,
                " rate)"
              ] }),
              /* @__PURE__ */ t("span", { className: `font-mono font-semibold ${g}`, children: [
                "₹",
                (r.contractorRevenuePerM3 || 0).toLocaleString("en-IN"),
                "/m³"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ t("span", { className: s, children: [
                "You pour (M",
                r.baseGrade,
                "+G cost)"
              ] }),
              /* @__PURE__ */ t("span", { className: `font-mono font-semibold ${g}`, children: [
                "₹",
                (r.contractorCostPerM3 || 0).toLocaleString("en-IN"),
                "/m³"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `flex justify-between items-center pt-2 border-t ${a ? "border-amber-700/40" : "border-amber-200"}`, children: [
              /* @__PURE__ */ e("span", { className: "font-bold text-amber-600", children: "Your gross margin" }),
              /* @__PURE__ */ t("span", { className: "font-bold font-mono text-amber-600", children: [
                "₹",
                (r.contractorMarginPerM3 || 0).toLocaleString("en-IN"),
                "/m³"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `rounded-lg p-3 ${a ? "bg-amber-900/20 border border-amber-800/40" : "bg-white border border-amber-200"}`, children: [
              /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-amber-600 mb-0.5", children: "Total Additional Margin" }),
              /* @__PURE__ */ e("p", { className: "text-2xl font-display font-medium text-amber-600", children: b(r.contractorMarginTotal || 0) }),
              /* @__PURE__ */ t("p", { className: "text-[10px] mt-0.5 text-amber-500", children: [
                "over ",
                (d.projectVolume || 0).toLocaleString(),
                " m³"
              ] })
            ] }),
            /* @__PURE__ */ t("p", { className: `text-[9px] italic ${a ? "text-amber-600/70" : "text-amber-500/70"}`, children: [
              "Net of additive cost: ",
              b(r.contractorNetOfAdditive || 0)
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: `lg:col-span-7 ${te} p-8 flex flex-col gap-6`, children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${s}`, children: "Compressive Strength Performance" }),
            /* @__PURE__ */ e("span", { className: `text-[9px] font-bold px-2 py-0.5 rounded-full ${a ? "bg-green-900/40 text-green-400" : "bg-green-100 text-green-700"}`, children: "NABL Certified" })
          ] }),
          /* @__PURE__ */ t("div", { className: "grid grid-cols-3 gap-2.5", children: [
            /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border-2 ${a ? "border-green-800 bg-green-900/10" : "border-green-200 bg-green-50"}`, children: [
              /* @__PURE__ */ e("p", { className: "text-[9px] font-bold uppercase tracking-widest text-green-600 mb-2", children: "7-Day" }),
              /* @__PURE__ */ t("p", { className: `text-[9px] mb-0.5 ${a ? "text-neutral-500" : "text-neutral-400"}`, children: [
                "M",
                r.baseGrade,
                " standard"
              ] }),
              /* @__PURE__ */ t("p", { className: `text-sm font-mono font-semibold ${a ? "text-neutral-400" : "text-neutral-500"}`, children: [
                r.baseAt7DayMPa ?? "—",
                " MPa"
              ] }),
              /* @__PURE__ */ t("div", { className: "mt-1.5 mb-2 space-y-1", children: [
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e("div", { className: `text-[7px] w-5 shrink-0 text-right ${a ? "text-neutral-500" : "text-neutral-400"}`, children: "Std" }),
                  /* @__PURE__ */ e("div", { className: `flex-1 h-1.5 ${a ? "bg-neutral-700" : "bg-neutral-200"} rounded-full overflow-hidden`, children: /* @__PURE__ */ e("div", { className: "h-full bg-neutral-400 rounded-full", style: { width: `${Math.min(100, (r.baseAt7DayMPa || 0) / 60 * 100)}%` } }) })
                ] }),
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e("div", { className: "text-[7px] w-5 shrink-0 text-right text-green-600", children: "+G" }),
                  /* @__PURE__ */ e("div", { className: `flex-1 h-1.5 ${a ? "bg-green-900/40" : "bg-green-100"} rounded-full overflow-hidden`, children: /* @__PURE__ */ e("div", { className: "h-full bg-green-500 rounded-full", style: { width: `${Math.min(100, (r.graphAt7DayMPa || 0) / 60 * 100)}%` } }) })
                ] })
              ] }),
              /* @__PURE__ */ t("p", { className: "text-[9px] text-green-600 mb-0.5", children: [
                "M",
                r.baseGrade,
                "+G"
              ] }),
              /* @__PURE__ */ t("p", { className: "text-base font-bold text-green-600", children: [
                r.graphAt7DayMPa ?? "—",
                " MPa"
              ] }),
              /* @__PURE__ */ t("p", { className: "text-[9px] font-semibold text-green-500 mt-0.5", children: [
                "+",
                d.strengthGain7 || 22,
                "% ↑"
              ] }),
              /* @__PURE__ */ t("div", { className: `mt-2 pt-2 border-t ${a ? "border-green-800/40" : "border-green-200"}`, children: [
                /* @__PURE__ */ e("p", { className: `text-[9px] ${a ? "text-neutral-500" : "text-neutral-400"}`, children: "Strike formwork" }),
                /* @__PURE__ */ t("p", { className: `text-xs font-bold ${a ? "text-neutral-300" : "text-neutral-700"}`, children: [
                  r.graphDaysToStrike ?? "—",
                  " days"
                ] }),
                /* @__PURE__ */ t("p", { className: "text-[9px] text-green-500", children: [
                  "vs ",
                  r.tradDaysToStrike ?? "—",
                  " days std"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border-2 ${a ? "border-indigo-800 bg-indigo-900/10" : "border-indigo-200 bg-indigo-50"}`, children: [
              /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ e("p", { className: "text-[9px] font-bold uppercase tracking-widest text-indigo-600", children: "28-Day" }),
                d.strengthGain28 >= 60 && /* @__PURE__ */ e("span", { className: `text-[7px] font-bold px-1 py-0.5 rounded ${a ? "bg-green-900/50 text-green-400" : "bg-green-100 text-green-700"}`, children: "✦ NABL" })
              ] }),
              /* @__PURE__ */ t("p", { className: `text-[9px] mb-0.5 ${a ? "text-neutral-500" : "text-neutral-400"}`, children: [
                "M",
                r.baseGrade,
                " standard"
              ] }),
              /* @__PURE__ */ t("p", { className: `text-sm font-mono font-semibold ${a ? "text-neutral-400" : "text-neutral-500"}`, children: [
                r.baseMPa ?? "—",
                " MPa"
              ] }),
              /* @__PURE__ */ t("div", { className: "mt-1.5 mb-2 space-y-1", children: [
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e("div", { className: `text-[7px] w-5 shrink-0 text-right ${a ? "text-neutral-500" : "text-neutral-400"}`, children: "Std" }),
                  /* @__PURE__ */ e("div", { className: `flex-1 h-1.5 ${a ? "bg-neutral-700" : "bg-neutral-200"} rounded-full overflow-hidden`, children: /* @__PURE__ */ e("div", { className: "h-full bg-neutral-400 rounded-full", style: { width: `${Math.min(100, (r.baseMPa || 0) / 70 * 100)}%` } }) })
                ] }),
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e("div", { className: "text-[7px] w-5 shrink-0 text-right text-indigo-600", children: "+G" }),
                  /* @__PURE__ */ e("div", { className: `flex-1 h-1.5 ${a ? "bg-indigo-900/40" : "bg-indigo-100"} rounded-full overflow-hidden`, children: /* @__PURE__ */ e("div", { className: "h-full bg-indigo-500 rounded-full", style: { width: `${Math.min(100, (r.graphAt28DayMPa || 0) / 70 * 100)}%` } }) })
                ] }),
                /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ e("div", { className: `text-[7px] w-5 shrink-0 text-right ${a ? "text-neutral-600" : "text-neutral-300"}`, children: "Tgt" }),
                  /* @__PURE__ */ e("div", { className: `flex-1 h-1.5 ${a ? "bg-neutral-800" : "bg-neutral-100"} rounded-full overflow-hidden`, children: /* @__PURE__ */ e("div", { className: "h-full bg-neutral-300 rounded-full", style: { width: `${Math.min(100, (r.targetMPa || 0) / 70 * 100)}%`, opacity: 0.6 } }) })
                ] })
              ] }),
              /* @__PURE__ */ t("p", { className: "text-[9px] text-indigo-600 mb-0.5", children: [
                "M",
                r.baseGrade,
                "+G"
              ] }),
              /* @__PURE__ */ t("p", { className: "text-base font-bold text-indigo-600", children: [
                r.graphAt28DayMPa ?? "—",
                " MPa"
              ] }),
              /* @__PURE__ */ t("p", { className: "text-[9px] font-semibold text-indigo-500 mt-0.5", children: [
                "+",
                d.strengthGain28 || 65,
                "% ↑"
              ] }),
              d.strengthGain28 >= 60 && /* @__PURE__ */ t("p", { className: `text-[8px] font-semibold mt-0.5 ${a ? "text-green-500" : "text-green-600"}`, children: [
                "NABL ref: ",
                r.nablTestMPa,
                " MPa"
              ] }),
              /* @__PURE__ */ t("div", { className: `mt-2 pt-2 border-t ${a ? "border-indigo-800/40" : "border-indigo-200"}`, children: [
                /* @__PURE__ */ e("p", { className: `text-[9px] ${a ? "text-neutral-500" : "text-neutral-400"}`, children: "Grade equivalent" }),
                /* @__PURE__ */ e("p", { className: "text-xs font-bold text-indigo-600", children: r.strengthGrade28Label ?? "—" }),
                /* @__PURE__ */ t("p", { className: `text-[9px] ${a ? "text-indigo-500" : "text-indigo-400"}`, children: [
                  "target M",
                  r.targetGrade,
                  " = ",
                  r.targetMPa,
                  " MPa"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border-2 ${a ? "border-orange-800 bg-orange-900/10" : "border-orange-200 bg-orange-50"}`, children: [
              /* @__PURE__ */ e("p", { className: "text-[9px] font-bold uppercase tracking-widest text-orange-600 mb-2", children: "Cycle Time" }),
              /* @__PURE__ */ e("p", { className: `text-[9px] mb-0.5 ${a ? "text-neutral-500" : "text-neutral-400"}`, children: "Days saved / floor" }),
              /* @__PURE__ */ t("p", { className: "text-base font-bold text-orange-600", children: [
                r.deshutterDaysSaved ?? 0,
                " days"
              ] }),
              /* @__PURE__ */ e("div", { className: `my-2 border-t ${a ? "border-orange-800/40" : "border-orange-200"}` }),
              /* @__PURE__ */ t("p", { className: `text-[9px] ${a ? "text-neutral-500" : "text-neutral-400"}`, children: [
                r.estimatedFloors ?? 0,
                " floors est."
              ] }),
              /* @__PURE__ */ t("p", { className: `text-xs font-bold ${a ? "text-orange-400" : "text-orange-600"}`, children: [
                r.totalCycleDaysSaved ?? 0,
                " days total"
              ] }),
              /* @__PURE__ */ t("div", { className: `mt-2 pt-2 border-t ${a ? "border-orange-800/40" : "border-orange-200"}`, children: [
                /* @__PURE__ */ e("p", { className: `text-[9px] ${a ? "text-neutral-500" : "text-neutral-400"}`, children: "Schedule value" }),
                /* @__PURE__ */ e("p", { className: "text-xs font-bold text-orange-600", children: b(r.cycleSavingsValue || 0) }),
                /* @__PURE__ */ t("p", { className: `text-[9px] ${a ? "text-orange-500" : "text-orange-400"}`, children: [
                  "@ ₹",
                  (d.laborCost || 15e3).toLocaleString(),
                  "/day"
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: `grid grid-cols-4 gap-0 rounded-xl overflow-hidden border ${N}`, children: [
          {
            label: "Net / m³",
            value: `${p ? "+" : "−"}₹${Math.abs(r.netSavingsPerM3 || 0).toLocaleString("en-IN")}`,
            color: p ? a ? "text-green-400" : "text-green-700" : a ? "text-amber-400" : "text-amber-600",
            bg: p ? a ? "bg-green-900/20" : "bg-green-50" : a ? "bg-amber-900/20" : "bg-amber-50"
          },
          {
            label: "Return",
            value: r.roiMultiple ? `${r.roiMultiple}×` : "Quality+",
            color: a ? "text-indigo-400" : "text-indigo-700",
            bg: a ? "bg-indigo-900/20" : "bg-indigo-50"
          },
          {
            label: "28-Day",
            value: `${r.graphAt28DayMPa ?? "—"} MPa`,
            color: a ? "text-green-400" : "text-green-700",
            bg: a ? "bg-green-900/20" : "bg-green-50"
          },
          {
            label: "Cycle Save",
            value: `−${r.deshutterDaysSaved ?? 0}d/flr`,
            color: a ? "text-orange-400" : "text-orange-700",
            bg: a ? "bg-orange-900/20" : "bg-orange-50"
          }
        ].map(({ label: l, value: n, color: c, bg: S }, q) => /* @__PURE__ */ t("div", { className: `${S} py-2.5 px-2 text-center ${q < 3 ? `border-r ${N}` : ""}`, children: [
          /* @__PURE__ */ e("p", { className: `text-[8px] font-bold uppercase tracking-wider ${s} mb-0.5`, children: l }),
          /* @__PURE__ */ e("p", { className: `text-[11px] font-bold font-mono leading-tight ${c}`, children: n })
        ] }, l)) }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5 mb-3", children: [
            /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${s} mr-2`, children: "View" }),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => V("cost"),
                className: `px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors ${C === "cost" ? "bg-indigo-600 text-white" : a ? "text-neutral-400 border border-neutral-700 hover:border-neutral-600" : "text-neutral-500 border border-neutral-200 hover:border-neutral-300 bg-white"}`,
                children: "Cost / m³"
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: () => V("strength"),
                className: `px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors ${C === "strength" ? "bg-green-600 text-white" : a ? "text-neutral-400 border border-neutral-700 hover:border-neutral-600" : "text-neutral-500 border border-neutral-200 hover:border-neutral-300 bg-white"}`,
                children: "Strength (MPa)"
              }
            )
          ] }),
          C === "cost" && /* @__PURE__ */ t(ae, { children: [
            /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${s} mb-3`, children: "Cost per m³ — Grade comparison" }),
            /* @__PURE__ */ e("div", { className: "h-48", children: /* @__PURE__ */ e(O, { width: "100%", height: "100%", children: /* @__PURE__ */ t(U, { data: T, margin: { top: 20, right: 8, bottom: 0, left: -10 }, barSize: 52, children: [
              /* @__PURE__ */ e(z, { strokeDasharray: "3 3", stroke: a ? "#2a2a2a" : "#f1f5f9", vertical: !1 }),
              /* @__PURE__ */ e(E, { dataKey: "name", tick: { fontSize: 11, fill: a ? "#9ca3af" : "#64748b" }, tickLine: !1, axisLine: !1 }),
              /* @__PURE__ */ e(
                F,
                {
                  domain: he,
                  tickFormatter: (l) => `₹${(l / 1e3).toFixed(1)}k`,
                  tick: { fontSize: 10, fill: a ? "#9ca3af" : "#64748b" },
                  tickLine: !1,
                  axisLine: !1
                }
              ),
              /* @__PURE__ */ e(W, { content: /* @__PURE__ */ e(He, {}) }),
              /* @__PURE__ */ t(D, { dataKey: "cost", radius: [6, 6, 0, 0], children: [
                T.map((l, n) => /* @__PURE__ */ e(de, { fill: l.fill }, n)),
                /* @__PURE__ */ e(
                  I,
                  {
                    dataKey: "cost",
                    position: "top",
                    formatter: (l) => `₹${(l / 1e3).toFixed(1)}k`,
                    style: { fontSize: 10, fontWeight: 700, fill: a ? "#e5e7eb" : "#374151" }
                  }
                )
              ] })
            ] }) }) }),
            /* @__PURE__ */ t("p", { className: `text-[11px] text-center mt-1 ${s}`, children: [
              "Gap between green bar and right bar = Net savings per m³ (₹",
              Math.abs(r.netSavingsPerM3 || 0).toLocaleString("en-IN"),
              "/m³)"
            ] })
          ] }),
          C === "strength" && ee.length > 0 && /* @__PURE__ */ t(ae, { children: [
            /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${s} mb-3`, children: "Compressive strength — 7-day & 28-day (MPa)" }),
            /* @__PURE__ */ e("div", { className: "h-48", children: /* @__PURE__ */ e(O, { width: "100%", height: "100%", children: /* @__PURE__ */ t(U, { data: ee, margin: { top: 20, right: 8, bottom: 0, left: -10 }, barSize: 26, barCategoryGap: "28%", children: [
              /* @__PURE__ */ e(z, { strokeDasharray: "3 3", stroke: a ? "#2a2a2a" : "#f1f5f9", vertical: !1 }),
              /* @__PURE__ */ e(E, { dataKey: "name", tick: { fontSize: 11, fill: a ? "#9ca3af" : "#64748b" }, tickLine: !1, axisLine: !1 }),
              /* @__PURE__ */ e(
                F,
                {
                  tickFormatter: (l) => `${l}`,
                  tick: { fontSize: 10, fill: a ? "#9ca3af" : "#64748b" },
                  tickLine: !1,
                  axisLine: !1,
                  unit: " MPa"
                }
              ),
              /* @__PURE__ */ e(W, { content: /* @__PURE__ */ e(Ye, {}) }),
              /* @__PURE__ */ e(D, { dataKey: "base", name: `M${r.baseGrade} standard`, fill: "#94a3b8", radius: [4, 4, 0, 0], children: /* @__PURE__ */ e(I, { dataKey: "base", position: "top", style: { fontSize: 9, fontWeight: 700, fill: a ? "#9ca3af" : "#64748b" } }) }),
              /* @__PURE__ */ e(D, { dataKey: "withG", name: `M${r.baseGrade}+G`, fill: "#22c55e", radius: [4, 4, 0, 0], children: /* @__PURE__ */ e(I, { dataKey: "withG", position: "top", style: { fontSize: 9, fontWeight: 700, fill: a ? "#bbf7d0" : "#166534" } }) }),
              /* @__PURE__ */ e(D, { dataKey: "target", name: `M${r.targetGrade} standard`, fill: "#6366f1", radius: [4, 4, 0, 0], children: /* @__PURE__ */ e(I, { dataKey: "target", position: "top", style: { fontSize: 9, fontWeight: 700, fill: a ? "#c7d2fe" : "#3730a3" } }) })
            ] }) }) }),
            /* @__PURE__ */ e("div", { className: "flex items-center justify-center gap-4 mt-2 flex-wrap", children: [
              { color: "#94a3b8", label: `M${r.baseGrade} (no additive)` },
              { color: "#22c55e", label: `M${r.baseGrade}+Graphacrete` },
              { color: "#6366f1", label: `M${r.targetGrade} standard` }
            ].map(({ color: l, label: n }) => /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ e("div", { className: "w-2.5 h-2.5 rounded-sm flex-shrink-0", style: { backgroundColor: l } }),
              /* @__PURE__ */ e("span", { className: `text-[9px] ${s}`, children: n })
            ] }, n)) }),
            /* @__PURE__ */ t("p", { className: `text-[11px] text-center mt-1 ${s}`, children: [
              "M",
              r.baseGrade,
              "+G delivers ",
              r.graphAt28DayMPa,
              " MPa at 28 days — ",
              r.strengthGrade28Label,
              " performance"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ t("div", { className: `p-4 rounded-2xl border-2 ${p ? a ? "border-green-700 bg-green-900/10" : "border-green-300 bg-green-50" : a ? "border-amber-700 bg-amber-900/10" : "border-amber-200 bg-amber-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${p ? "text-green-600" : a ? "text-amber-400" : "text-amber-600"}`, children: r.netLabel || "Net Savings" }),
              /* @__PURE__ */ e("span", { className: `text-[9px] font-bold px-1.5 py-0.5 rounded ${a ? "bg-neutral-700 text-neutral-300" : "bg-neutral-900 text-white"}`, children: "ALL-IN" })
            ] }),
            /* @__PURE__ */ e("p", { className: `text-2xl font-display font-medium tabular-nums ${p ? "text-green-700" : a ? "text-amber-400" : "text-amber-600"}`, children: b(Math.abs(r.netSavingsTotal || 0)) }),
            p ? /* @__PURE__ */ t("p", { className: `text-xs mt-1.5 ${a ? "text-green-500" : "text-green-600"}`, children: [
              "₹",
              Math.abs(r.netSavingsPerM3 || 0),
              "/m³ · grade + cement − additive"
            ] }) : /* @__PURE__ */ t("p", { className: `text-xs mt-1.5 ${a ? "text-amber-500" : "text-amber-600"}`, children: [
              "₹",
              Math.abs(r.netSavingsPerM3 || 0),
              "/m³ quality premium"
            ] })
          ] }),
          r.cementSavingsValuePerM3 > 0 && /* @__PURE__ */ t("div", { className: `p-4 rounded-2xl border-2 ${a ? "border-teal-700 bg-teal-900/10" : "border-teal-300 bg-teal-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${a ? "text-teal-400" : "text-teal-600"}`, children: "Cement Savings" }),
              /* @__PURE__ */ e("span", { className: `text-[9px] font-bold px-1.5 py-0.5 rounded ${a ? "bg-teal-800 text-teal-300" : "bg-teal-200 text-teal-700"}`, children: "CEMENT" })
            ] }),
            /* @__PURE__ */ e("p", { className: `text-2xl font-display font-medium tabular-nums ${a ? "text-teal-300" : "text-teal-700"}`, children: b((r.cementSavingsValuePerM3 || 0) * (d.projectVolume || 0)) }),
            /* @__PURE__ */ t("p", { className: `text-xs mt-1.5 ${a ? "text-teal-500" : "text-teal-600"}`, children: [
              "₹",
              Math.abs(r.cementSavingsValuePerM3 || 0),
              "/m³ · cement reduction only"
            ] }),
            /* @__PURE__ */ t("p", { className: `text-[10px] font-semibold mt-2 ${a ? "text-teal-400" : "text-teal-500"}`, children: [
              d.cementReductionPct || 15,
              "% less cement · ",
              r.cementSavedBags || 0,
              " bags saved"
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-4 rounded-2xl border ${a ? "border-slate-700 bg-slate-800/30" : "border-slate-200 bg-slate-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-widest ${a ? "text-slate-400" : "text-slate-500"}`, children: [
                "Grade-Only ",
                r.gradeOnlyLabel || "Savings"
              ] }),
              /* @__PURE__ */ e("span", { className: `text-[9px] font-bold px-1.5 py-0.5 rounded ${a ? "bg-slate-700 text-slate-300" : "bg-slate-200 text-slate-600"}`, children: "BROCHURE" })
            ] }),
            /* @__PURE__ */ t("p", { className: `text-2xl font-display font-medium tabular-nums ${P ? a ? "text-slate-200" : "text-slate-700" : a ? "text-slate-500" : "text-slate-400"}`, children: [
              P ? "" : "−",
              b(Math.abs(r.gradeOnlySavingsTotal || 0))
            ] }),
            /* @__PURE__ */ t("p", { className: `text-xs mt-1.5 ${a ? "text-slate-500" : "text-slate-400"}`, children: [
              "₹",
              Math.abs(r.gradeOnlySavingsPerM3 || 0),
              "/m³ · excludes cement reduction"
            ] }),
            r.isNABL && P && /* @__PURE__ */ t("p", { className: "text-[10px] font-semibold text-indigo-500 mt-2", children: [
              "✦ M30+G ≈ M50 @ ₹",
              Math.abs(r.gradeOnlySavingsPerM3 || 0),
              "/m³"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${N} ${a ? "bg-neutral-800/50" : "bg-white"} flex items-center gap-4`, children: [
            /* @__PURE__ */ e(K, { className: "w-5 h-5 text-green-500 flex-shrink-0" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${s}`, children: "ROI" }),
              /* @__PURE__ */ e("p", { className: `text-2xl font-display font-medium tabular-nums ${g}`, children: r.roiPercentage != null ? `${r.roiPercentage}%` : /* @__PURE__ */ e("span", { className: "text-base", children: "Quality+" }) })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${N} ${a ? "bg-neutral-800/50" : "bg-white"} flex items-center gap-4`, children: [
            /* @__PURE__ */ e(me, { className: `w-5 h-5 flex-shrink-0 ${p ? "text-green-500" : a ? "text-amber-400" : "text-amber-500"}` }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${s}`, children: "Payback" }),
              /* @__PURE__ */ e("p", { className: `text-base font-display font-medium ${p ? "text-green-600" : a ? "text-amber-400" : "text-amber-600"}`, children: r.paybackLabel || "—" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${a ? "border-indigo-700 bg-indigo-900/10" : "border-indigo-200 bg-indigo-50"} flex items-center gap-4`, children: [
            /* @__PURE__ */ e(K, { className: "w-5 h-5 text-indigo-500 flex-shrink-0" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${a ? "text-indigo-400" : "text-indigo-600"}`, children: "Return Multiple" }),
              /* @__PURE__ */ e("p", { className: `text-2xl font-display font-medium tabular-nums ${a ? "text-indigo-300" : "text-indigo-700"}`, children: r.roiMultiple != null ? `${r.roiMultiple}×` : /* @__PURE__ */ e("span", { className: "text-base", children: "Quality+" }) }),
              /* @__PURE__ */ e("p", { className: `text-[9px] mt-0.5 ${a ? "text-indigo-500" : "text-indigo-400"}`, children: "net savings ÷ additive cost" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${a ? "border-emerald-700 bg-emerald-900/10" : "border-emerald-200 bg-emerald-50"} flex items-center gap-4`, children: [
            /* @__PURE__ */ e(le, { className: "w-5 h-5 text-emerald-500 flex-shrink-0" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${a ? "text-emerald-400" : "text-emerald-600"}`, children: "Carbon Credit Value" }),
              /* @__PURE__ */ e("p", { className: `text-2xl font-display font-medium tabular-nums ${a ? "text-emerald-300" : "text-emerald-700"}`, children: b(r.carbonCreditValueTotal || 0) }),
              /* @__PURE__ */ t("p", { className: `text-[9px] mt-0.5 ${a ? "text-emerald-500" : "text-emerald-400"}`, children: [
                ((r.co2AvoidedKg || 0) / 1e3).toFixed(2),
                " t CO₂ @ ₹",
                r.carbonCreditRatePerTon || 500,
                "/t"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border ${N} ${a ? "bg-neutral-800/30" : "bg-white"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${s} mb-1`, children: "Investment" }),
            /* @__PURE__ */ e("p", { className: `text-sm font-bold tabular-nums ${g}`, children: b(r.productCostTotal || 0) })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border border-green-500/25 ${a ? "bg-green-900/10" : "bg-green-50"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-green-600/70 mb-1", children: "Cement Saved" }),
            /* @__PURE__ */ t("p", { className: "text-sm font-bold text-green-600 tabular-nums", children: [
              (r.cementSavedKg || 0).toLocaleString(),
              /* @__PURE__ */ e("span", { className: "text-[10px] font-normal ml-0.5", children: "kg" })
            ] }),
            /* @__PURE__ */ t("p", { className: "text-[10px] text-green-500/60", children: [
              r.cementSavedBags || 0,
              " bags"
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border border-teal-500/25 ${a ? "bg-teal-900/10" : "bg-teal-50"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-teal-600/70 mb-1", children: "CO₂ Avoided" }),
            /* @__PURE__ */ t("p", { className: "text-sm font-bold text-teal-600 tabular-nums", children: [
              ((r.co2AvoidedKg || 0) / 1e3).toFixed(2),
              /* @__PURE__ */ e("span", { className: "text-[10px] font-normal ml-0.5", children: "t" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: `flex-grow border ${N} rounded-2xl ${a ? "bg-neutral-800/50" : "bg-white"} p-5`, children: [
          /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${s} mb-3`, children: p ? "10-Year Financial Projection" : "Lifecycle Value Recovery" }),
          J.length > 0 && /* @__PURE__ */ e("div", { className: "h-28", children: /* @__PURE__ */ e(O, { width: "100%", height: "100%", children: /* @__PURE__ */ t(Ge, { data: J, margin: { top: 4, right: 12, bottom: 4, left: -18 }, children: [
            /* @__PURE__ */ e(z, { strokeDasharray: "3 3", stroke: a ? "#2a2a2a" : "#f1f5f9", vertical: !1 }),
            /* @__PURE__ */ e(E, { dataKey: "year", stroke: a ? "#525252" : "#94a3b8", fontSize: 10, tickLine: !1, axisLine: !1, tickMargin: 6, tickFormatter: (l) => `Yr ${l}` }),
            /* @__PURE__ */ e(F, { stroke: a ? "#525252" : "#94a3b8", fontSize: 10, tickLine: !1, axisLine: !1, tickMargin: 6, tickFormatter: b }),
            /* @__PURE__ */ e(oe, { y: 0, stroke: a ? "#555" : "#cbd5e1", strokeDasharray: "4 2" }),
            /* @__PURE__ */ e(
              W,
              {
                contentStyle: { backgroundColor: a ? "#171717" : "#fff", border: `1px solid ${a ? "#404040" : "#e2e8f0"}`, borderRadius: "8px", fontSize: "11px", color: a ? "#fff" : "#111" },
                formatter: (l) => [b(l), "Cumulative"],
                labelFormatter: (l) => l === 0 ? "Construction (immediate)" : `Year ${l}`
              }
            ),
            /* @__PURE__ */ e(je, { type: "monotone", dataKey: "cumulative", stroke: "#6366f1", strokeWidth: 2.5, dot: { fill: "#6366f1", r: 3, strokeWidth: 0 }, activeDot: { r: 5, strokeWidth: 0 } })
          ] }) }) }),
          /* @__PURE__ */ e("p", { className: `text-[10px] ${s} mt-2`, children: "Yr 0 = construction-phase savings (instant). Yr 1–10 adds estimated lifecycle value." })
        ] }),
        (r.totalAllInDelta || 0) > 0 && /* @__PURE__ */ t("div", { className: `rounded-2xl p-6 flex items-center justify-between ${a ? "bg-neutral-800 border border-neutral-700" : "bg-neutral-900"}`, children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ t("p", { className: "text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1", children: [
              "Total value over ",
              d.analysisPeriod || 10,
              " yr · ",
              (d.projectVolume || 0).toLocaleString(),
              " m³"
            ] }),
            /* @__PURE__ */ e("p", { className: "text-3xl font-display font-medium text-white", children: b(r.totalAllInDelta || 0) }),
            /* @__PURE__ */ t("p", { className: "text-[10px] text-neutral-500 mt-1", children: [
              "Construction ",
              b(r.netSavingsTotal || 0),
              " + lifecycle ",
              b(r.lifecycle?.total || 0)
            ] })
          ] }),
          r.allInMultiple && /* @__PURE__ */ t("div", { className: "text-right flex-shrink-0 ml-6", children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1", children: "All-in Multiple" }),
            /* @__PURE__ */ t("p", { className: "text-4xl font-display font-bold text-indigo-400", children: [
              r.allInMultiple,
              "×"
            ] }),
            /* @__PURE__ */ e("p", { className: "text-[10px] text-neutral-500 mt-1", children: "on additive spend" })
          ] })
        ] }),
        /* @__PURE__ */ t("p", { className: `text-[10px] leading-relaxed flex items-start gap-1.5 ${s}`, children: [
          /* @__PURE__ */ e(Ve, { className: "w-3 h-3 flex-shrink-0 mt-0.5 opacity-60" }),
          "Results depend on mix design, site conditions, and local pricing. Calculator uses typical RMC market assumptions and user inputs."
        ] })
      ] })
    ] }),
    u && /* @__PURE__ */ t("div", { className: `border-t ${N} ${Y}`, children: [
      /* @__PURE__ */ t(
        "button",
        {
          onClick: () => j((l) => !l),
          className: `w-full px-8 py-4 flex items-center justify-between text-sm font-medium ${g} transition-colors ${a ? "hover:bg-neutral-800/60" : "hover:bg-neutral-50"}`,
          children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3 flex-wrap", children: [
              /* @__PURE__ */ e("span", { children: "Full Lifecycle Savings" }),
              /* @__PURE__ */ e("span", { className: `text-xs px-1.5 py-0.5 rounded font-medium ${a ? "bg-neutral-700 text-neutral-400" : "bg-neutral-100 text-neutral-500"}`, children: "Estimates" }),
              r.lifecycle && /* @__PURE__ */ t("span", { className: `text-xs px-2.5 py-0.5 rounded-full font-mono ${a ? "bg-green-900/30 text-green-400" : "bg-green-100 text-green-700"}`, children: [
                "+",
                b(r.lifecycle.total),
                " over ",
                d.analysisPeriod,
                " yr"
              ] })
            ] }),
            /* @__PURE__ */ e(Be, { className: `w-4 h-4 flex-shrink-0 transition-transform duration-200 ${s} ${f ? "rotate-180" : ""}` })
          ]
        }
      ),
      /* @__PURE__ */ e(Le, { initial: !1, children: f && /* @__PURE__ */ e(
        B.div,
        {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.22, ease: "easeInOut" },
          className: "overflow-hidden",
          children: /* @__PURE__ */ t("div", { className: `px-8 pb-10 pt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 ${te}`, children: [
            /* @__PURE__ */ t("div", { className: "space-y-5", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-wider ${s}`, children: "Additional Parameters" }),
              Object.keys(u).map((l) => {
                const n = Se(l, u[l]);
                return n ? /* @__PURE__ */ e("div", { children: n }, l) : null;
              })
            ] }),
            /* @__PURE__ */ t("div", { className: "space-y-3", children: [
              /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-wider ${s}`, children: [
                "Estimated Lifecycle Breakdown (",
                d.analysisPeriod,
                " yr)"
              ] }),
              Pe.map(({ icon: l, label: n, value: c, color: S }) => /* @__PURE__ */ t("div", { className: `flex items-center justify-between px-4 py-3 rounded-xl border ${N} ${a ? "bg-neutral-800/30" : "bg-white"}`, children: [
                /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ e(l, { className: `w-4 h-4 flex-shrink-0 ${S}` }),
                  /* @__PURE__ */ e("span", { className: `text-sm ${g}`, children: n })
                ] }),
                /* @__PURE__ */ e("span", { className: `text-sm font-mono font-semibold ${c > 0 ? "text-green-600" : s}`, children: c > 0 ? `+${b(c)}` : "—" })
              ] }, n)),
              /* @__PURE__ */ t("div", { className: `flex items-center justify-between px-4 py-3.5 rounded-xl border-2 mt-1 ${a ? "border-green-800 bg-green-900/20" : "border-green-200 bg-green-50"}`, children: [
                /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e(le, { className: "w-4 h-4 text-green-600" }),
                  /* @__PURE__ */ e("span", { className: `text-sm font-bold ${a ? "text-green-400" : "text-green-800"}`, children: "Total Lifecycle Value" })
                ] }),
                /* @__PURE__ */ t("span", { className: `text-lg font-bold font-mono ${a ? "text-green-400" : "text-green-700"}`, children: [
                  "+",
                  b(r.lifecycle?.total || 0)
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: `px-4 py-3 rounded-xl border ${N} ${a ? "bg-neutral-800/30" : "bg-white"}`, children: [
                /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ t("span", { className: `text-sm font-bold ${g}`, children: [
                    "All-in over ",
                    d.analysisPeriod,
                    " yr"
                  ] }),
                  /* @__PURE__ */ e("span", { className: `text-lg font-bold font-mono ${(r.totalAllInDelta || 0) >= 0 ? a ? "text-green-400" : "text-green-700" : a ? "text-amber-400" : "text-amber-600"}`, children: b(r.totalAllInDelta || 0) })
                ] }),
                /* @__PURE__ */ t("p", { className: `text-[10px] ${s} mt-1`, children: [
                  "Construction ",
                  b(r.netSavingsTotal || 0),
                  " + lifecycle ",
                  b(r.lifecycle?.total || 0),
                  r.totalAllInRoiPct ? ` · ${r.totalAllInRoiPct}% all-in ROI` : ""
                ] })
              ] })
            ] })
          ] })
        },
        "sec"
      ) })
    ] })
  ] });
}, qe = 235, xe = 2, be = qe * xe, Z = 6200, _ = 10500, H = Z + be, se = _ - H, Qe = ({ active: m, payload: i, label: u }) => m && i && i.length ? /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-xl p-4 shadow-lg text-sm", children: [
  /* @__PURE__ */ e("p", { className: "font-bold text-neutral-900 mb-1", children: u }),
  i.map((o, a) => /* @__PURE__ */ t("p", { style: { color: o.fill }, children: [
    "₹",
    o.value?.toLocaleString("en-IN"),
    "/m³"
  ] }, a))
] }) : null, ie = ({ icon: m, label: i, value: u, accent: o }) => /* @__PURE__ */ t("div", { className: `flex items-center gap-3 px-4 py-3 rounded-xl border ${o}`, children: [
  /* @__PURE__ */ e("div", { className: "shrink-0 w-8 h-8 rounded-lg bg-current/10 flex items-center justify-center", children: /* @__PURE__ */ e(m, { className: "w-4 h-4" }) }),
  /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-widest opacity-70", children: i }),
    /* @__PURE__ */ e("p", { className: "text-lg font-display font-semibold leading-tight", children: u })
  ] })
] }), ut = ({ theme: m = "light" }) => {
  const [i, u] = L(1e3), o = m === "dark", a = o ? "bg-neutral-900" : "bg-white", x = o ? "border-neutral-800" : "border-neutral-200", v = o ? "text-white" : "text-neutral-900", h = o ? "text-neutral-400" : "text-neutral-500", w = o ? "bg-neutral-800/60" : "bg-neutral-50", d = G(() => {
    const f = _ * i, j = Z * i, A = be * i, R = H * i, C = se * i, V = (se / _ * 100).toFixed(1), k = xe * i;
    return { totalM50: f, totalM30: j, totalAdditive: A, totalWithGraph: R, totalSavings: C, savingsPct: V, litresRequired: k };
  }, [i]), $ = [
    { name: "Standard M30", cost: Z, fill: "#94a3b8", grade: "M30" },
    { name: "M30 + Graphacrete", cost: H, fill: "#22c55e", grade: "≈M50" },
    { name: "Standard M50", cost: _, fill: "#f87171", grade: "M50" }
  ], M = (f) => f.toLocaleString("en-IN"), y = (f) => f >= 1e7 ? `₹${(f / 1e7).toFixed(2)} Cr` : f >= 1e5 ? `₹${(f / 1e5).toFixed(2)} L` : `₹${M(f)}`;
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${x} overflow-hidden ${a}`, children: [
    /* @__PURE__ */ t("div", { className: `px-8 py-6 border-b ${x} flex flex-wrap gap-4 items-center justify-between`, children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-2 px-3 py-1 rounded-lg mb-2 ${o ? "bg-green-900/30 text-green-400" : "bg-green-50 text-green-700"}`, children: [
          /* @__PURE__ */ e(ce, { className: "w-3.5 h-3.5" }),
          /* @__PURE__ */ e("span", { className: "text-[10px] font-bold uppercase tracking-widest", children: "NABL Certified" })
        ] }),
        /* @__PURE__ */ e("h3", { className: `text-2xl font-display font-medium ${v}`, children: "Cost Benefit Analysis" }),
        /* @__PURE__ */ e("p", { className: `text-sm mt-0.5 ${h}`, children: "M30 + Graphacrete delivers M50 performance at ₹3,830/m³ net savings" })
      ] }),
      /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ e(
          ie,
          {
            icon: Oe,
            label: "Net Savings",
            value: "₹3,830/m³",
            accent: o ? "border-green-700/40 text-green-400" : "border-green-200 text-green-700"
          }
        ),
        /* @__PURE__ */ e(
          ie,
          {
            icon: me,
            label: "Additive Cost",
            value: "₹470/m³",
            accent: o ? "border-blue-700/40 text-blue-400" : "border-blue-200 text-blue-700"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-0", children: [
      /* @__PURE__ */ t("div", { className: `lg:col-span-5 p-8 border-b lg:border-b-0 lg:border-r ${x} space-y-6`, children: [
        /* @__PURE__ */ t("div", { className: `rounded-xl p-4 ${o ? "bg-neutral-800" : "bg-neutral-50"} border ${x}`, children: [
          /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest mb-2 ${h}`, children: "Source data" }),
          /* @__PURE__ */ t("div", { className: `space-y-1.5 text-sm ${v}`, children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e("span", { className: h, children: "Graphacrete price" }),
              /* @__PURE__ */ e("span", { className: "font-mono font-bold", children: "₹235/L" })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ e("span", { className: h, children: "Dosage required" }),
              /* @__PURE__ */ e("span", { className: "font-mono font-bold", children: "2L / m³" })
            ] }),
            /* @__PURE__ */ t("div", { className: `flex justify-between pt-1.5 border-t ${x}`, children: [
              /* @__PURE__ */ e("span", { className: h, children: "Additive cost / m³" }),
              /* @__PURE__ */ e("span", { className: "font-mono font-bold text-blue-500", children: "₹470" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "space-y-3", children: [
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border ${x} ${w}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-widest ${h}`, children: "Standard M50" }),
              /* @__PURE__ */ e("span", { className: "text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600 font-semibold", children: "Baseline" })
            ] }),
            /* @__PURE__ */ t("p", { className: `text-3xl font-display font-medium ${v}`, children: [
              "₹10,500 ",
              /* @__PURE__ */ e("span", { className: `text-sm font-normal ${h}`, children: "/m³" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e("div", { className: `flex-1 h-px ${o ? "bg-neutral-700" : "bg-neutral-200"}` }),
            /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-widest ${h}`, children: "Replace with" }),
            /* @__PURE__ */ e("div", { className: `flex-1 h-px ${o ? "bg-neutral-700" : "bg-neutral-200"}` })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border ${o ? "border-neutral-700 bg-neutral-800/40" : "border-neutral-200 bg-white"}`, children: [
            /* @__PURE__ */ e("div", { className: "flex items-center justify-between mb-1", children: /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-widest ${h}`, children: "Standard M30" }) }),
            /* @__PURE__ */ t("p", { className: `text-2xl font-display font-medium ${v}`, children: [
              "₹6,200 ",
              /* @__PURE__ */ e("span", { className: `text-sm font-normal ${h}`, children: "/m³" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border ${o ? "border-blue-800/40 bg-blue-900/10" : "border-blue-100 bg-blue-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-widest text-blue-500", children: "+ Graphacrete Additive" }),
              /* @__PURE__ */ e("span", { className: "text-xs text-blue-500", children: "2L × ₹235" })
            ] }),
            /* @__PURE__ */ t("p", { className: "text-2xl font-display font-medium text-blue-600", children: [
              "₹470 ",
              /* @__PURE__ */ e("span", { className: "text-sm font-normal text-blue-400", children: "/m³" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border-2 ${o ? "border-green-700 bg-green-900/10" : "border-green-400 bg-green-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-widest text-green-600", children: "M30 + Graphacrete" }),
              /* @__PURE__ */ t("span", { className: "flex items-center gap-1 text-xs text-green-600 font-semibold", children: [
                /* @__PURE__ */ e(X, { className: "w-3.5 h-3.5" }),
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
        /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border ${o ? "border-yellow-700/30 bg-yellow-900/10" : "border-yellow-200 bg-yellow-50"} text-center`, children: [
          /* @__PURE__ */ e("p", { className: "text-xs font-bold text-yellow-600 uppercase tracking-widest mb-1", children: "NABL Certified Test Result" }),
          /* @__PURE__ */ t("p", { className: `text-sm ${o ? "text-yellow-200" : "text-yellow-800"}`, children: [
            "M30 Cube + Graphacrete achieves ",
            /* @__PURE__ */ e("strong", { children: "≈ M50" }),
            " compressive strength"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "lg:col-span-7 p-8 space-y-8", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest mb-4 ${h}`, children: "Cost per m³ comparison" }),
          /* @__PURE__ */ e("div", { className: "h-52", children: /* @__PURE__ */ e(O, { width: "100%", height: "100%", children: /* @__PURE__ */ t(U, { data: $, margin: { top: 20, right: 16, bottom: 0, left: -10 }, barSize: 52, children: [
            /* @__PURE__ */ e(z, { strokeDasharray: "3 3", stroke: o ? "#333" : "#f1f5f9", vertical: !1 }),
            /* @__PURE__ */ e(
              E,
              {
                dataKey: "name",
                tick: { fontSize: 11, fill: o ? "#9ca3af" : "#64748b" },
                tickLine: !1,
                axisLine: !1
              }
            ),
            /* @__PURE__ */ e(
              F,
              {
                tickFormatter: (f) => `₹${(f / 1e3).toFixed(1)}k`,
                tick: { fontSize: 10, fill: o ? "#9ca3af" : "#64748b" },
                tickLine: !1,
                axisLine: !1,
                domain: [4e3, 11500]
              }
            ),
            /* @__PURE__ */ e(W, { content: /* @__PURE__ */ e(Qe, {}) }),
            /* @__PURE__ */ e(
              oe,
              {
                y: H,
                stroke: "#22c55e",
                strokeDasharray: "4 4",
                strokeWidth: 1.5
              }
            ),
            /* @__PURE__ */ t(D, { dataKey: "cost", radius: [6, 6, 0, 0], children: [
              $.map((f, j) => /* @__PURE__ */ e(de, { fill: f.fill }, j)),
              /* @__PURE__ */ e(
                I,
                {
                  dataKey: "grade",
                  position: "top",
                  style: { fontSize: 11, fontWeight: 700, fill: o ? "#e5e7eb" : "#374151" }
                }
              )
            ] })
          ] }) }) }),
          /* @__PURE__ */ e("p", { className: `text-[11px] mt-2 text-center ${h}`, children: "Green bar achieves M50 strength — at M30+additive cost" })
        ] }),
        /* @__PURE__ */ t("div", { className: `rounded-2xl border ${x} ${w} p-6`, children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-5", children: [
            /* @__PURE__ */ e(ze, { className: `w-4 h-4 ${o ? "text-indigo-400" : "text-indigo-600"}` }),
            /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${o ? "text-indigo-400" : "text-indigo-600"}`, children: "Project Savings Calculator" })
          ] }),
          /* @__PURE__ */ t("div", { className: "mb-5", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-baseline mb-2", children: [
              /* @__PURE__ */ e("label", { className: `text-sm font-medium ${v}`, children: "Concrete Volume" }),
              /* @__PURE__ */ t("span", { className: `text-lg font-display font-bold ${o ? "text-indigo-400" : "text-indigo-600"}`, children: [
                M(i),
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
                value: i,
                onChange: (f) => u(Number(f.target.value)),
                className: "w-full h-1.5 rounded-full appearance-none cursor-pointer accent-indigo-600",
                style: { background: o ? "#374151" : "#e5e7eb" }
              }
            ),
            /* @__PURE__ */ t("div", { className: `flex justify-between text-[10px] mt-1 ${h}`, children: [
              /* @__PURE__ */ e("span", { children: "100 m³" }),
              /* @__PURE__ */ e("span", { children: "50,000 m³" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border ${o ? "border-red-800/30 bg-red-900/10" : "border-red-100 bg-red-50"}`, children: [
              /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-widest text-red-500 mb-1", children: "Standard M50 Cost" }),
              /* @__PURE__ */ e("p", { className: `text-xl font-display font-bold ${o ? "text-red-300" : "text-red-700"}`, children: y(d.totalM50) })
            ] }),
            /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border ${o ? "border-green-800/30 bg-green-900/10" : "border-green-100 bg-green-50"}`, children: [
              /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-widest text-green-600 mb-1", children: "With Graphacrete" }),
              /* @__PURE__ */ e("p", { className: `text-xl font-display font-bold ${o ? "text-green-300" : "text-green-700"}`, children: y(d.totalWithGraph) })
            ] }),
            /* @__PURE__ */ t("div", { className: `col-span-2 rounded-xl p-4 border-2 ${o ? "border-green-600 bg-green-900/20" : "border-green-400 bg-green-50"} flex items-center justify-between`, children: [
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-widest text-green-600 mb-0.5", children: "Net Savings vs M50" }),
                /* @__PURE__ */ t("p", { className: `text-[10px] ${h}`, children: [
                  "Additive: ",
                  y(d.totalAdditive),
                  " · Volume: ",
                  M(i),
                  " m³ · ",
                  M(d.litresRequired),
                  "L Graphacrete"
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "text-right", children: [
                /* @__PURE__ */ e("p", { className: `text-3xl font-display font-bold ${o ? "text-green-400" : "text-green-700"}`, children: y(d.totalSavings) }),
                /* @__PURE__ */ t("p", { className: "text-xs text-green-600 font-semibold", children: [
                  d.savingsPct,
                  "% cheaper"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e("p", { className: `text-[11px] mt-3 ${h}`, children: "* 1,000 L MOQ applies. Price ₹235/L. Savings calculated vs standard M50 market rate ₹10,500/m³ (India 2025-26)." })
        ] })
      ] })
    ] })
  ] });
}, gt = ({ productName: m, comparisonData: i, theme: u = "light" }) => {
  if (!i || !i.competitors || !i.metrics)
    return null;
  const { competitors: o, metrics: a } = i, x = u === "dark", v = x ? "bg-neutral-900" : "bg-white", h = x ? "text-white" : "text-neutral-900", w = x ? "text-neutral-400" : "text-neutral-500", d = x ? "border-neutral-800" : "border-neutral-200";
  return /* @__PURE__ */ t("div", { className: `relative overflow-hidden ${v} py-16 px-6 border-b ${d}`, children: [
    x && /* @__PURE__ */ e("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" }),
    /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto relative z-10", children: [
      /* @__PURE__ */ t(
        B.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.6 },
          className: "mb-16 text-center",
          children: [
            /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4 ${x ? "bg-indigo-900/30 text-indigo-400" : "bg-indigo-50 text-indigo-700"}`, children: [
              /* @__PURE__ */ e(K, { className: "w-4 h-4" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-wider", children: "Benchmark Analysis" })
            ] }),
            /* @__PURE__ */ e("h3", { className: `text-4xl md:text-5xl font-display font-medium ${h} mb-4`, children: "Competitive Advantage" }),
            /* @__PURE__ */ t("p", { className: `text-lg ${w} max-w-2xl mx-auto`, children: [
              "See how ",
              m,
              " radically outperforms traditional admixtures and competitors across every critical metric."
            ] })
          ]
        }
      ),
      /* @__PURE__ */ e(
        B.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.6, delay: 0.1 },
          className: `rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-2xl ${x ? "bg-neutral-900/80 backdrop-blur-xl" : "bg-white"}`,
          children: /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ t("table", { className: "w-full text-left border-collapse min-w-[800px]", children: [
            /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ t("tr", { className: `${x ? "bg-neutral-950" : "bg-neutral-50"} border-b ${d}`, children: [
              /* @__PURE__ */ e("th", { className: `p-6 text-sm font-bold uppercase tracking-wider ${w} w-1/4`, children: "Performance Metric" }),
              /* @__PURE__ */ t("th", { className: "p-6 relative w-1/4", children: [
                /* @__PURE__ */ e("div", { className: `absolute inset-0 ${x ? "bg-indigo-500/10" : "bg-indigo-50"} border-t-4 border-indigo-500` }),
                /* @__PURE__ */ t("div", { className: "relative flex items-center gap-2", children: [
                  /* @__PURE__ */ e("span", { className: `text-lg font-display font-bold ${x ? "text-white" : "text-neutral-900"}`, children: m }),
                  /* @__PURE__ */ e("span", { className: "px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500 text-white uppercase tracking-wider", children: "Best in Class" })
                ] })
              ] }),
              o.map(($, M) => /* @__PURE__ */ e(
                "th",
                {
                  className: `p-6 text-sm font-bold uppercase tracking-wider ${w} w-1/6`,
                  children: $
                },
                M
              ))
            ] }) }),
            /* @__PURE__ */ e("tbody", { className: `divide-y ${d}`, children: a.map(($, M) => /* @__PURE__ */ t(
              "tr",
              {
                className: `group transition-colors ${x ? "hover:bg-neutral-800/30" : "hover:bg-neutral-50"}`,
                children: [
                  /* @__PURE__ */ e("td", { className: `p-6 font-medium ${h} text-sm md:text-base`, children: $.metric }),
                  /* @__PURE__ */ t("td", { className: "p-6 relative", children: [
                    /* @__PURE__ */ e("div", { className: `absolute inset-0 ${x ? "bg-indigo-500/5" : "bg-indigo-50/50"} opacity-100 group-hover:opacity-80 transition-opacity` }),
                    /* @__PURE__ */ t("div", { className: "relative flex items-center gap-3", children: [
                      /* @__PURE__ */ e("div", { className: `w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${x ? "bg-indigo-500 text-white" : "bg-indigo-600 text-white"}`, children: /* @__PURE__ */ e(Ee, { className: "w-3.5 h-3.5" }) }),
                      /* @__PURE__ */ e("span", { className: `text-lg font-bold font-mono ${x ? "text-indigo-300" : "text-indigo-700"}`, children: $.productValue })
                    ] })
                  ] }),
                  $.competitorValues.map((y, f) => /* @__PURE__ */ e("td", { className: `p-6 text-sm font-mono ${w}`, children: y === "0%" || y.includes("<") ? /* @__PURE__ */ e("span", { className: "opacity-50", children: y }) : /* @__PURE__ */ e("span", { children: y }) }, f))
                ]
              },
              M
            )) })
          ] }) })
        }
      ),
      i.differentiators && /* @__PURE__ */ e(
        B.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.6, delay: 0.3 },
          className: "mt-12 grid grid-cols-1 md:grid-cols-3 gap-6",
          children: i.differentiators.map(($, M) => /* @__PURE__ */ t(
            "div",
            {
              className: `p-8 rounded-2xl border ${d} ${x ? "bg-neutral-800/30" : "bg-white shadow-sm hover:shadow-md"} transition-all hover:border-indigo-500/30 group`,
              children: [
                /* @__PURE__ */ e("div", { className: `w-12 h-12 rounded-xl mb-6 flex items-center justify-center ${x ? "bg-neutral-800 text-white group-hover:bg-indigo-500 transition-colors" : "bg-neutral-100 text-neutral-900 group-hover:bg-indigo-600 group-hover:text-white transition-colors"}`, children: /* @__PURE__ */ e(Fe, { className: "w-6 h-6" }) }),
                /* @__PURE__ */ e("h4", { className: `text-xl font-display font-bold ${h} mb-3`, children: $.title }),
                /* @__PURE__ */ e("p", { className: `text-sm ${w} leading-relaxed`, children: $.description })
              ]
            },
            M
          ))
        }
      )
    ] })
  ] });
};
export {
  vt as CerapheneCostComparison,
  $t as CerapheneROICalculator,
  rt as CertificationsQuality,
  gt as CompetitiveMatrix,
  at as EnvironmentalImpact,
  yt as GraffisolEnergyCalculator,
  wt as GraffisolROICalculator,
  ut as GraphacreteCostBenefit,
  ot as GraphacreteLabResults,
  ht as GraphacreteROICalculator,
  Mt as HDGPEPerformanceCalculator,
  kt as HDGPEROICalculator,
  Xe as HowItWorks,
  nt as ImpactMap,
  it as IndustrySolutions,
  tt as LongTermSavingsCalculator,
  Je as MarketOpportunityAnalyzer,
  Ze as PerformancePilot,
  st as ProductDataSheet,
  dt as ScienceExplained,
  et as TCOAnalysis,
  lt as TrialToDeployment
};
