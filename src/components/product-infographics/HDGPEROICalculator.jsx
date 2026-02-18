import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine, Cell, LabelList
} from 'recharts';
import { Factory, TrendingUp, ChevronDown, Zap, Info } from 'lucide-react';

// ── Log scale helpers (10–10,000 tons) ───────────────────────────────────────
const posToTons = (pos) => {
  const raw = 10 * Math.pow(10, (Number(pos) / 100) * 3); // 3 decades: 10–10,000
  if (raw < 50)   return Math.max(10, Math.round(raw / 5) * 5);
  if (raw < 200)  return Math.round(raw / 10) * 10;
  if (raw < 1000) return Math.round(raw / 50) * 50;
  if (raw < 5000) return Math.round(raw / 500) * 500;
  return Math.round(raw / 1000) * 1000;
};
const tonsToPos = (t) =>
  Math.round((Math.log10(Math.max(10, Math.min(10000, t)) / 10) / 3) * 100);

const PRODUCTION_TICKS = [
  { v: 10,    num: '10',  label: ['Lab',     'scale']   },
  { v: 100,   num: '100', label: ['Small',   'plant']   },
  { v: 500,   num: '500', label: ['Medium',  'plant']   },
  { v: 2000,  num: '2k',  label: ['Large',   'plant']   },
  { v: 10000, num: '10k', label: ['National','scale']   }
];

const getProductionContext = (t) => {
  if (t <= 50)   return 'Lab-scale or pilot facility';
  if (t <= 200)  return 'Small compounder or R&D plant';
  if (t <= 1000) return 'Medium-scale polymer manufacturing';
  if (t <= 5000) return 'Large polymer processing plant';
  return 'National-scale polymer producer';
};

// ── Formatters ────────────────────────────────────────────────────────────────
const fmt = (val) => {
  const abs = Math.abs(val ?? 0);
  const sign = (val ?? 0) < 0 ? '−' : '';
  if (abs >= 10000000) return `${sign}₹${(abs / 10000000).toFixed(1)} Cr`;
  if (abs >= 100000)   return `${sign}₹${(abs / 100000).toFixed(1)} L`;
  if (abs >= 1000)     return `${sign}₹${Math.round(abs / 1000)}k`;
  return `${sign}₹${Math.round(abs)}`;
};

const fmtRaw = (val) => {
  const sign = (val ?? 0) < 0 ? '−' : '';
  return `${sign}₹${Math.abs(Math.round(val ?? 0)).toLocaleString('en-IN')}`;
};

// ── Bar tooltip ───────────────────────────────────────────────────────────────
const BarTip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-3 shadow-lg text-sm">
      <p className="font-bold text-neutral-800 mb-0.5">{label}</p>
      <p className="text-neutral-600">₹{payload[0].value?.toLocaleString('en-IN')}</p>
    </div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
const HDGPEROICalculator = ({
  calculations,
  defaultInputs,
  secondaryInputs: secCfg,
  theme = 'light'
}) => {
  const isDark = theme === 'dark';

  const allCfg = { ...defaultInputs, ...(secCfg || {}) };
  const init = Object.keys(allCfg).reduce((acc, key) => {
    const c = allCfg[key];
    acc[key] = c.default !== undefined ? c.default
      : c.min != null ? c.min
      : c.options?.[0]?.value;
    return acc;
  }, {});

  const [inputs, setInputs]           = useState(init);
  const [prodText, setProdText]       = useState(String(init.annualProduction || 500));
  const [showSecondary, setShowSecondary] = useState(false);

  const set = (key, val) => setInputs(prev => ({ ...prev, [key]: val }));
  const results = useMemo(() => calculations(inputs), [inputs, calculations]);

  // Theme tokens — same pattern as Graffisol/Ceraphene
  const bg       = isDark ? 'bg-neutral-900'    : 'bg-white';
  const bgSub    = isDark ? 'bg-neutral-950/40' : 'bg-neutral-50/60';
  const border   = isDark ? 'border-neutral-700': 'border-neutral-200';
  const text     = isDark ? 'text-white'        : 'text-neutral-900';
  const sub      = isDark ? 'text-neutral-400'  : 'text-neutral-500';
  const accent   = isDark ? 'text-emerald-400'  : 'text-emerald-600';

  // Bar chart: Additive Cost | Net Margin | All-In Gain (annual totals)
  const barData = useMemo(() => [
    { name: 'Additive Cost', value: results.annualAdditiveCost  || 0, fill: '#f87171' },
    { name: 'Net Margin',    value: Math.max(0, results.netMarginSavingsTotal || 0), fill: '#34d399' },
    { name: 'All-In Gain',   value: Math.max(0, results.allInSavingsTotal    || 0), fill: '#059669' }
  ], [results]);

  const barDomain = useMemo(() => {
    const vals = barData.map(d => d.value).filter(Boolean);
    if (!vals.length) return [0, 100000];
    return [0, Math.ceil(Math.max(...vals) * 1.18 / 10000) * 10000];
  }, [barData]);

  // Projection: cumulative net margin over analysis period
  const projData = useMemo(() => {
    if (!results.projectionData) return [];
    return results.projectionData;
  }, [results]);

  // ── Sub-component: Log Slider ─────────────────────────────────────────────
  const LogSlider = () => {
    const t = inputs.annualProduction || 500;
    return (
      <div className="space-y-2.5">
        <div className="flex items-baseline justify-between">
          <span className={`text-xs font-bold uppercase tracking-wider ${text}`}>Annual Production</span>
          <div className="flex items-center gap-1.5">
            <input
              type="number" value={prodText} min={10} max={10000}
              onChange={(e) => {
                setProdText(e.target.value);
                const v = parseInt(e.target.value, 10);
                if (!isNaN(v) && v >= 10 && v <= 10000) set('annualProduction', v);
              }}
              onBlur={() => setProdText(String(t))}
              className={`w-20 text-right text-sm font-mono border ${border} rounded px-2 py-1 ${isDark ? 'bg-neutral-800 text-white' : 'bg-white text-neutral-900'} focus:outline-none focus:ring-1 focus:ring-emerald-500`}
            />
            <span className={`text-sm font-medium ${text}`}>tons</span>
          </div>
        </div>
        <input
          type="range" min={0} max={100}
          value={tonsToPos(t)}
          onChange={(e) => {
            const v = posToTons(e.target.value);
            set('annualProduction', v);
            setProdText(String(v));
          }}
          className="w-full h-1.5 appearance-none rounded-full cursor-pointer accent-emerald-600"
        />
        <div className="flex justify-between">
          {PRODUCTION_TICKS.map(({ v, num, label }) => (
            <div key={v} className="flex flex-col items-center gap-0.5 w-10">
              <span className={`text-[10px] font-semibold ${text}`}>{num}</span>
              {label.map((l, i) => (
                <span key={i} className={`text-[9px] ${sub} text-center leading-tight`}>{l}</span>
              ))}
            </div>
          ))}
        </div>
        <p className={`text-[11px] italic ${sub}`}>≈ {getProductionContext(t)}</p>
      </div>
    );
  };

  const DosageSlider = () => {
    const cfg = defaultInputs.dosagePercent;
    const val = inputs.dosagePercent;
    return (
      <div className="space-y-2">
        <div className="flex items-baseline justify-between">
          <span className={`text-xs font-bold uppercase tracking-wider ${text}`}>Dosage Rate</span>
          <span className={`text-sm font-mono font-bold ${accent}`}>{(val || 0).toFixed(1)}%</span>
        </div>
        <input
          type="range" min={cfg.min} max={cfg.max} step={cfg.step || 0.1} value={val}
          onChange={(e) => set('dosagePercent', Number(e.target.value))}
          className="w-full h-1.5 appearance-none rounded-full cursor-pointer accent-emerald-600"
        />
        <div className="flex justify-between">
          <span className={`text-[10px] ${sub}`}>{cfg.min}%</span>
          <span className={`text-[10px] ${sub}`}>optimal 0.5–1.5%</span>
          <span className={`text-[10px] ${sub}`}>{cfg.max}%</span>
        </div>
        <p className={`text-[11px] ${sub}`}>
          {((val || 0.5) / 100 * 1000).toFixed(1)} kg of HD-G-PE per ton polymer
        </p>
      </div>
    );
  };

  const ApplicationSelector = () => {
    const apps = defaultInputs.application?.options || [];
    return (
      <div className="space-y-2">
        <span className={`text-xs font-bold uppercase tracking-wider ${text} block`}>Application Type</span>
        <div className="flex flex-col gap-1.5">
          {apps.map(app => (
            <button
              key={app.value}
              onClick={() => set('application', app.value)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all text-left ${
                inputs.application === app.value
                  ? isDark
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-emerald-600 text-white border-emerald-600'
                  : isDark
                    ? 'text-neutral-400 border-neutral-700 hover:border-neutral-500'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:border-emerald-300'
              }`}
            >
              {app.label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  // ── Secondary input renderers ─────────────────────────────────────────────
  const SecButtonGroup = (key, cfg) => (
    <div className="space-y-2">
      <label className={`text-sm font-medium ${text}`}>{cfg.label}</label>
      <div className="flex gap-2">
        {cfg.options.map(opt => (
          <button key={opt.value} onClick={() => set(key, opt.value)}
            className={`flex-1 py-1.5 rounded-lg text-sm font-medium border transition-all ${
              inputs[key] === opt.value
                ? isDark ? 'bg-white text-neutral-900 border-white' : 'bg-neutral-900 text-white border-neutral-900'
                : isDark ? 'text-neutral-400 border-neutral-700 hover:border-neutral-500' : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400'
            }`}
          >{opt.label}</button>
        ))}
      </div>
    </div>
  );

  const SecSlider = (key, cfg) => (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between">
        <label className={`text-sm font-medium ${text}`}>{cfg.label}</label>
        <span className={`text-sm font-mono font-bold ${accent}`}>{inputs[key]} {cfg.unit}</span>
      </div>
      <input
        type="range" min={cfg.min} max={cfg.max} step={cfg.step || 0.5} value={inputs[key]}
        onChange={(e) => set(key, Number(e.target.value))}
        className="w-full h-1.5 appearance-none rounded-full cursor-pointer accent-emerald-600"
      />
      <div className="flex justify-between">
        <span className={`text-[10px] ${sub}`}>{cfg.min} {cfg.unit}</span>
        <span className={`text-[10px] ${sub}`}>{cfg.max} {cfg.unit}</span>
      </div>
    </div>
  );

  const renderSecInput = (key, cfg) => {
    switch (cfg.type) {
      case 'buttongroup': return SecButtonGroup(key, cfg);
      case 'slider':      return SecSlider(key, cfg);
      default:            return SecSlider(key, cfg);
    }
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className={`rounded-3xl border ${border} overflow-hidden shadow-2xl`}>

      {/* ── Performance Banner ───────────────────────────────────────────── */}
      <div className={`px-6 py-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs ${
        isDark ? 'bg-emerald-950/30 border-b border-emerald-900/50' : 'bg-emerald-50 border-b border-emerald-100'
      }`}>
        <Factory className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
        <span className="font-bold uppercase tracking-wider text-emerald-600">Lab Tested</span>
        <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
        <span className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>+30% Tensile Strength</span>
        <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
        <span className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>20× Elongation</span>
        <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
        <span className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>+20% Lifespan</span>
        <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
        <span className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>Drop-In Masterbatch</span>
        <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
        <span className="font-bold text-green-600">
          Net: {fmtRaw(results.netMarginPerTon || 0)}/ton
        </span>
        <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
        <span className={`font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          All-in: {fmtRaw(results.allInSavingsPerTon || 0)}/ton
        </span>
      </div>

      {/* ── Shared Inputs ─────────────────────────────────────────────────── */}
      <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6 px-8 py-7 border-b ${border} ${bg}`}>
        <LogSlider />
        <DosageSlider />
        <ApplicationSelector />
      </div>

      {/* ── Main Grid ─────────────────────────────────────────────────────── */}
      <div className={`grid grid-cols-1 lg:grid-cols-12 ${bg}`}>

        {/* ── LEFT: Per-ton economics ────────────────────────────────────── */}
        <div className={`lg:col-span-5 p-8 border-b lg:border-b-0 lg:border-r ${border} flex flex-col gap-6`}>
          <p className={`text-xs font-bold uppercase tracking-wider ${sub}`}>Per-Ton Economics · {results.appLabel || 'Pipes & Fittings'}</p>

          <div className="space-y-2">
            {/* Additive cost card */}
            <div className={`rounded-xl p-4 border ${isDark ? 'border-red-800/30 bg-red-900/10' : 'border-red-100 bg-red-50'}`}>
              <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">
                HD-G-PE Additive Cost
              </p>
              <p className="text-2xl font-display font-medium text-red-600">
                {fmtRaw(results.additiveCostPerTon || 0)}
                <span className="text-sm font-normal text-red-400 ml-1">/ton</span>
              </p>
              <div className="space-y-0.5 mt-2">
                {[
                  [`Dosage (${(inputs.dosagePercent || 0.5).toFixed(1)}%)`, `${((inputs.dosagePercent || 0.5) / 100 * 1000).toFixed(1)} kg/ton`],
                  ['Masterbatch price',                                     '₹1,200/kg'],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between text-xs">
                    <span className="text-red-400">{label}</span>
                    <span className="font-mono text-red-500">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-2 px-1">
              <div className={`flex-1 h-px ${isDark ? 'bg-neutral-700' : 'bg-neutral-200'}`} />
              <span className={`text-[10px] uppercase font-bold ${sub}`}>vs</span>
              <div className={`flex-1 h-px ${isDark ? 'bg-neutral-700' : 'bg-neutral-200'}`} />
            </div>

            {/* Gross benefit card */}
            <div className={`rounded-xl p-4 border-2 ${isDark ? 'border-emerald-700 bg-emerald-900/10' : 'border-emerald-300 bg-emerald-50'}`}>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">
                Gross Benefit — {results.appLabel || 'Pipes & Fittings'}
              </p>
              <p className="text-2xl font-display font-medium text-emerald-700">
                {fmtRaw(results.grossBenefitPerTon || 0)}
                <span className="text-sm font-normal text-emerald-500 ml-1">/ton</span>
              </p>
              <div className="space-y-0.5 mt-2">
                {results.premiumPerTon > 0 && (
                  <div className="flex justify-between text-xs">
                    <span className="text-emerald-500">Selling premium</span>
                    <span className="font-mono text-emerald-600">+{fmtRaw(results.premiumPerTon)}</span>
                  </div>
                )}
                {results.downgaugeSavingsPerTon > 0 && (
                  <div className="flex justify-between text-xs">
                    <span className="text-emerald-500">Material savings (downgauge)</span>
                    <span className="font-mono text-emerald-600">+{fmtRaw(results.downgaugeSavingsPerTon)}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Net margin row */}
            <div className={`rounded-xl px-4 py-3 border-2 flex items-center justify-between ${
              (results.netMarginPerTon || 0) >= 0
                ? isDark ? 'border-green-700 bg-green-900/10' : 'border-green-300 bg-green-50'
                : isDark ? 'border-amber-700 bg-amber-900/10' : 'border-amber-200 bg-amber-50'
            }`}>
              <p className={`text-xs font-bold uppercase tracking-widest ${
                (results.netMarginPerTon || 0) >= 0 ? 'text-green-600' : 'text-amber-600'
              }`}>Net margin per ton</p>
              <p className={`text-xl font-display font-medium ${
                (results.netMarginPerTon || 0) >= 0 ? 'text-green-700' : 'text-amber-600'
              }`}>
                {(results.netMarginPerTon || 0) >= 0 ? '+' : ''}{fmtRaw(results.netMarginPerTon || 0)}
                <span className="text-sm font-normal ml-0.5">/ton</span>
              </p>
            </div>

            {/* Quality savings card */}
            <div className={`rounded-xl p-3.5 border ${isDark ? 'border-neutral-700 bg-neutral-800/30' : 'border-neutral-200 bg-neutral-50'}`}>
              <div className="flex items-center justify-between">
                <p className={`text-xs font-bold uppercase tracking-widest ${sub}`}>
                  Quality improvement saving
                </p>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${isDark ? 'bg-neutral-700 text-neutral-400' : 'bg-neutral-200 text-neutral-500'}`}>
                  −60% defects
                </span>
              </div>
              <p className={`text-xl font-display font-medium ${text} mt-0.5`}>
                +{fmtRaw(results.returnsSavingsPerTon || 0)}
                <span className={`text-sm font-normal ${sub} ml-1`}>/ton</span>
              </p>
              <p className={`text-xs ${sub} mt-0.5`}>
                on {(inputs.qualityReturnRate || 2.0).toFixed(1)}% current defect rate
              </p>
            </div>
          </div>

          {/* Project Totals */}
          <div className={`rounded-xl border ${border} ${isDark ? 'bg-neutral-800/30' : 'bg-neutral-50'} p-5 mt-auto`}>
            <p className={`text-xs font-bold uppercase tracking-wider ${sub} mb-4`}>
              Project Total · {(inputs.annualProduction || 0).toLocaleString()} tons/yr
            </p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className={`text-sm ${sub}`}>Annual additive spend</span>
                <span className={`text-sm font-mono font-semibold ${isDark ? 'text-red-400' : 'text-red-500'}`}>
                  {fmt(results.annualAdditiveCost || 0)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${sub}`}>Annual net margin</span>
                <span className="text-sm font-mono font-semibold text-green-600">
                  +{fmt(results.netMarginSavingsTotal || 0)}/yr
                </span>
              </div>
              <div className={`pt-2 border-t ${border} space-y-1.5`}>
                <div className="flex justify-between items-center">
                  <span className={`text-xs ${sub}`}>All-in gain <span className="opacity-60">(incl. quality)</span></span>
                  <span className={`text-sm font-mono font-semibold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    +{fmt(results.allInSavingsTotal || 0)}/yr
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-bold ${text}`}>
                    {results.analysisPeriod || 3}-yr net margin
                  </span>
                  <span className={`text-xl font-bold font-mono ${isDark ? 'text-green-400' : 'text-green-700'}`}>
                    {fmt((results.netMarginSavingsTotal || 0) * (results.analysisPeriod || 3))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Charts + Metrics ───────────────────────────────────── */}
        <div className={`lg:col-span-7 ${bgSub} p-8 flex flex-col gap-6`}>

          {/* Bar chart */}
          <div>
            <p className={`text-xs font-bold uppercase tracking-widest ${sub} mb-3`}>
              Annual totals — {(inputs.annualProduction || 0).toLocaleString()} tons production
            </p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 20, right: 8, bottom: 0, left: -10 }} barSize={52}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#2a2a2a' : '#f1f5f9'} vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: isDark ? '#9ca3af' : '#64748b' }} tickLine={false} axisLine={false} />
                  <YAxis
                    domain={barDomain}
                    tickFormatter={(v) => fmt(v)}
                    tick={{ fontSize: 10, fill: isDark ? '#9ca3af' : '#64748b' }}
                    tickLine={false} axisLine={false}
                  />
                  <Tooltip content={<BarTip />} />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {barData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
                    <LabelList
                      dataKey="value" position="top"
                      formatter={(v) => fmt(v)}
                      style={{ fontSize: 10, fontWeight: 700, fill: isDark ? '#e5e7eb' : '#374151' }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className={`text-[11px] text-center mt-1 ${sub}`}>
              Red = additive spend · Light green = net margin · Dark green = all-in (incl. quality savings)
            </p>
          </div>

          {/* ── Two headline cards ────────────────────────────────────── */}
          <div className="grid grid-cols-2 gap-4">

            {/* Card 1: All-in gain (ALL-IN) */}
            <div className={`p-5 rounded-2xl border-2 ${isDark ? 'border-emerald-700 bg-emerald-900/10' : 'border-emerald-300 bg-emerald-50'}`}>
              <div className="flex items-start justify-between mb-2">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                  All-In Annual Gain
                </p>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${isDark ? 'bg-neutral-700 text-neutral-300' : 'bg-neutral-900 text-white'}`}>
                  ALL-IN
                </span>
              </div>
              <p className="text-3xl font-display font-medium tabular-nums text-emerald-700">
                {fmt(results.allInSavingsTotal || 0)}
              </p>
              <p className="text-xs mt-1.5 text-emerald-600">
                +{fmtRaw(results.allInSavingsPerTon || 0)}/ton · margin + quality
              </p>
            </div>

            {/* Card 2: Net margin only (NET MARGIN) */}
            <div className={`p-5 rounded-2xl border ${isDark ? 'border-slate-700 bg-slate-800/30' : 'border-slate-200 bg-slate-50'}`}>
              <div className="flex items-start justify-between mb-2">
                <p className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Net Margin
                </p>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-600'}`}>
                  NET MARGIN
                </span>
              </div>
              <p className={`text-3xl font-display font-medium tabular-nums ${
                (results.netMarginSavingsTotal || 0) >= 0
                  ? isDark ? 'text-slate-200' : 'text-slate-700'
                  : 'text-red-500'
              }`}>
                {fmt(results.netMarginSavingsTotal || 0)}
              </p>
              <p className={`text-xs mt-1.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                +{fmtRaw(results.netMarginPerTon || 0)}/ton · premium / downgauge only
              </p>
            </div>
          </div>

          {/* ROI + Payback */}
          <div className="grid grid-cols-2 gap-3">
            <div className={`p-4 rounded-xl border ${border} ${isDark ? 'bg-neutral-800/50' : 'bg-white'} flex items-center gap-4`}>
              <TrendingUp className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-wider ${sub}`}>ROI on Additive</p>
                <p className={`text-2xl font-display font-medium tabular-nums ${text}`}>
                  {results.roiPercentage != null ? `${results.roiPercentage}%` : '—'}
                </p>
              </div>
            </div>
            <div className={`p-4 rounded-xl border ${border} ${isDark ? 'bg-neutral-800/50' : 'bg-white'} flex items-center gap-4`}>
              <Zap className="w-5 h-5 text-green-500 flex-shrink-0" />
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-wider ${sub}`}>Per-Batch Payback</p>
                <p className="text-base font-display font-medium text-green-600">
                  {results.paybackLabel || '—'}
                </p>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            <div className={`p-3.5 rounded-xl border ${border} ${isDark ? 'bg-neutral-800/30' : 'bg-white'} text-center`}>
              <p className={`text-[10px] font-bold uppercase tracking-wider ${sub} mb-1`}>Additive / yr</p>
              <p className={`text-sm font-bold tabular-nums ${isDark ? 'text-red-400' : 'text-red-500'}`}>
                {fmt(results.annualAdditiveCost || 0)}
              </p>
              <p className={`text-[10px] ${sub}`}>@ {(inputs.dosagePercent || 0.5).toFixed(1)}% dosage</p>
            </div>
            <div className={`p-3.5 rounded-xl border border-emerald-500/25 ${isDark ? 'bg-emerald-900/10' : 'bg-emerald-50'} text-center`}>
              <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600/70 mb-1">Net Gain / ton</p>
              <p className={`text-sm font-bold tabular-nums ${
                (results.netMarginPerTon || 0) >= 0 ? 'text-emerald-600' : 'text-amber-500'
              }`}>
                {(results.netMarginPerTon || 0) >= 0 ? '+' : ''}{fmtRaw(results.netMarginPerTon || 0)}
              </p>
              <p className="text-[10px] text-emerald-500/60">per ton produced</p>
            </div>
            <div className={`p-3.5 rounded-xl border border-teal-500/25 ${isDark ? 'bg-teal-900/10' : 'bg-teal-50'} text-center`}>
              <p className="text-[10px] font-bold uppercase tracking-wider text-teal-600/70 mb-1">CO₂ Avoided</p>
              <p className="text-sm font-bold text-teal-600 tabular-nums">
                {results.co2SavedTons > 0 ? `${results.co2SavedTons}t` : '—'}
              </p>
              <p className="text-[10px] text-teal-500/60">via material reduction</p>
            </div>
          </div>

          {/* Projection chart */}
          <div className={`flex-grow border ${border} rounded-2xl ${isDark ? 'bg-neutral-800/50' : 'bg-white'} p-5`}>
            <p className={`text-xs font-bold uppercase tracking-widest ${sub} mb-3`}>
              {results.analysisPeriod || 3}-Year Cumulative Net Gain
            </p>
            {projData.length > 0 && (
              <div className="h-28">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={projData} margin={{ top: 4, right: 12, bottom: 4, left: -18 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#2a2a2a' : '#f1f5f9'} vertical={false} />
                    <XAxis dataKey="year" stroke={isDark ? '#525252' : '#94a3b8'} fontSize={10} tickLine={false} axisLine={false} tickMargin={6} />
                    <YAxis stroke={isDark ? '#525252' : '#94a3b8'} fontSize={10} tickLine={false} axisLine={false} tickMargin={6} tickFormatter={fmt} />
                    <ReferenceLine y={0} stroke={isDark ? '#555' : '#cbd5e1'} strokeDasharray="4 2" />
                    <Tooltip
                      contentStyle={{ backgroundColor: isDark ? '#171717' : '#fff', border: `1px solid ${isDark ? '#404040' : '#e2e8f0'}`, borderRadius: '8px', fontSize: '11px', color: isDark ? '#fff' : '#111' }}
                      formatter={(v, name) => [fmt(v), name === 'netMargin' ? 'Net Margin' : 'All-In']}
                      labelFormatter={(l) => l}
                    />
                    <Line type="monotone" dataKey="netMargin" name="Net Margin" stroke="#34d399" strokeWidth={2.5} dot={{ fill: '#34d399', r: 3, strokeWidth: 0 }} activeDot={{ r: 5, strokeWidth: 0 }} />
                    <Line type="monotone" dataKey="allIn" name="All-In" stroke="#059669" strokeWidth={2} dot={false} strokeDasharray="4 2" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
            <p className={`text-[10px] ${sub} mt-2`}>
              Cumulative net gain grows each year. Additive is a recurring variable cost — no upfront capital required.
            </p>
          </div>

          {/* Disclaimer */}
          <p className={`text-[10px] leading-relaxed flex items-start gap-1.5 ${sub}`}>
            <Info className="w-3 h-3 flex-shrink-0 mt-0.5 opacity-60" />
            Premiums use industry benchmarks (Pipes +12%, Films 15% downgauge, Molding +15%) against ₹100/kg HDPE baseline. Actual results depend on product grades, customer mix, and market pricing. Quality improvement assumes 60% defect reduction. Contact us for application-specific modelling.
          </p>
        </div>
      </div>

      {/* ── Advanced Parameters Accordion ────────────────────────────────── */}
      {secCfg && (
        <div className={`border-t ${border} ${bg}`}>
          <button
            onClick={() => setShowSecondary(p => !p)}
            className={`w-full px-8 py-4 flex items-center justify-between text-sm font-medium ${text} transition-colors ${isDark ? 'hover:bg-neutral-800/60' : 'hover:bg-neutral-50'}`}
          >
            <div className="flex items-center gap-3 flex-wrap">
              <span>Advanced Parameters</span>
              <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${isDark ? 'bg-neutral-700 text-neutral-400' : 'bg-neutral-100 text-neutral-500'}`}>
                Estimates
              </span>
            </div>
            <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${sub} ${showSecondary ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence initial={false}>
            {showSecondary && (
              <motion.div
                key="sec"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className={`px-8 pb-10 pt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 ${bgSub}`}>
                  <div className="space-y-5">
                    <p className={`text-xs font-bold uppercase tracking-wider ${sub}`}>Scenario Parameters</p>
                    {Object.entries(secCfg).map(([key, cfg]) => {
                      const node = renderSecInput(key, cfg);
                      return node ? <div key={key}>{node}</div> : null;
                    })}
                  </div>
                  <div className="space-y-3">
                    <p className={`text-xs font-bold uppercase tracking-wider ${sub}`}>
                      Production Impact Summary
                    </p>
                    {[
                      { label: 'Annual production',           value: `${(inputs.annualProduction || 0).toLocaleString()} tons` },
                      { label: 'Application',                 value: results.appLabel || '—' },
                      { label: 'Dosage rate',                 value: `${(inputs.dosagePercent || 0.5).toFixed(1)}% (${((inputs.dosagePercent || 0.5) / 100 * 1000).toFixed(1)} kg/ton)` },
                      { label: 'Additive spend / yr',         value: fmt(results.annualAdditiveCost || 0), color: 'text-red-500' },
                      { label: 'Net margin / yr',             value: fmt(results.netMarginSavingsTotal || 0), color: 'text-emerald-600' },
                      { label: 'All-in gain / yr',            value: fmt(results.allInSavingsTotal || 0), color: 'text-emerald-700' },
                      ...(results.materialSavedTons > 0 ? [{ label: 'Material saved / yr', value: `${results.materialSavedTons} tons` }] : []),
                      ...(results.co2SavedTons > 0 ? [{ label: 'CO₂ avoided', value: `${results.co2SavedTons} tCO₂` }] : []),
                      { label: `${results.analysisPeriod || 3}-yr net margin`, value: fmt((results.netMarginSavingsTotal || 0) * (results.analysisPeriod || 3)), color: 'text-green-700' },
                    ].map(({ label, value, color }, i) => (
                      <div key={i} className={`flex items-center justify-between px-4 py-3 rounded-xl border ${border} ${isDark ? 'bg-neutral-800/30' : 'bg-white'}`}>
                        <span className={`text-sm ${text}`}>{label}</span>
                        <span className={`text-sm font-semibold font-mono ${color || text}`}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default HDGPEROICalculator;
