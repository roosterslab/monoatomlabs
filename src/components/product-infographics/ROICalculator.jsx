import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine, Cell, LabelList
} from 'recharts';
import {
  TrendingUp, ChevronDown, CheckCircle, Award,
  Clock, Wrench, Droplets, Thermometer, Leaf, Zap, Info
} from 'lucide-react';

// ── Logarithmic scale helpers ─────────────────────────────────────────────────
const posToVolume = (pos) => {
  const raw = Math.pow(10, (Number(pos) / 100) * 4);
  if (raw < 10)   return Math.max(1, Math.round(raw));
  if (raw < 100)  return Math.round(raw / 5) * 5;
  if (raw < 1000) return Math.round(raw / 10) * 10;
  return Math.round(raw / 100) * 100;
};
const volumeToPos = (vol) =>
  Math.round((Math.log10(Math.max(1, Math.min(10000, vol))) / 4) * 100);

const VOLUME_TICKS = [
  { v: 1,     num: '1',   label: ['Small', 'pour']      },
  { v: 10,    num: '10',  label: ['House', 'slab']      },
  { v: 100,   num: '100', label: ['Building', 'floor']  },
  { v: 1000,  num: '1k',  label: ['Complex', 'block']   },
  { v: 10000, num: '10k', label: ['Township', 'project'] }
];

const getVolumeContext = (vol) => {
  if (vol <= 5)    return 'Small column or footing';
  if (vol <= 50)   return 'House slab or foundation';
  if (vol <= 300)  return 'Building floor or structure';
  if (vol <= 1000) return 'Multi-storey residential block';
  if (vol <= 5000) return 'Large complex or infrastructure';
  return 'Township-scale or major infrastructure project';
};

// ── Currency formatter ────────────────────────────────────────────────────────
const fmt = (val) => {
  const abs = Math.abs(val ?? 0);
  const sign = val < 0 ? '−' : '';
  if (abs >= 10000000) return `${sign}₹${(abs / 10000000).toFixed(1)} Cr`;
  if (abs >= 100000)   return `${sign}₹${(abs / 100000).toFixed(1)} L`;
  if (abs >= 1000)     return `${sign}₹${Math.round(abs / 1000)}k`;
  return `${sign}₹${Math.round(abs)}`;
};

const fmtRaw = (val) => {
  const sign = (val ?? 0) < 0 ? '−' : '';
  return `${sign}₹${Math.abs(Math.round(val ?? 0)).toLocaleString('en-IN')}`;
};

// ── Bar chart tooltip ─────────────────────────────────────────────────────────
const BarTip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-3 shadow-lg text-sm">
      <p className="font-bold text-neutral-800 mb-0.5">{label}</p>
      <p className="text-neutral-600">₹{payload[0].value?.toLocaleString('en-IN')}/m³</p>
    </div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
const ROICalculator = ({
  calculations,
  defaultInputs,
  secondaryInputs: secCfg,
  theme = 'light'
}) => {
  const isDark = theme === 'dark';

  // Seed state from all input configs
  const allCfg = { ...defaultInputs, ...(secCfg || {}) };
  const init = Object.keys(allCfg).reduce((acc, key) => {
    const c = allCfg[key];
    acc[key] = c.default !== undefined ? c.default : (c.min + c.max) / 2;
    return acc;
  }, {});

  const [inputs, setInputs]               = useState(init);
  const [volText, setVolText]             = useState(String(init.projectVolume || 500));
  const [showSecondary, setShowSecondary] = useState(false);

  const set = (key, val) => setInputs(prev => ({ ...prev, [key]: val }));
  const results = useMemo(() => calculations(inputs), [inputs, calculations]);

  const netPositive      = (results.netSavingsPerM3 ?? 0) > 0;
  const gradeOnlyPositive = (results.gradeOnlySavingsPerM3 ?? 0) > 0;

  // Dynamic bar chart (spec §12): base | net-cost-with-G | target
  const barData = useMemo(() => {
    if (!results.baseCostPerM3) return [];
    return [
      { name: `M${results.baseGrade}`,   cost: results.baseCostPerM3,              fill: '#94a3b8' },
      { name: `M${results.baseGrade}+G`, cost: results.netCostWithGraphacretePerM3, fill: '#22c55e' },
      { name: `M${results.targetGrade}`, cost: results.targetCostPerM3,
        fill: netPositive ? '#f87171' : '#64748b' }
    ];
  }, [results, netPositive]);

  const barDomain = useMemo(() => {
    if (!barData.length) return [3000, 6000];
    const costs = barData.map(d => d.cost);
    return [
      Math.floor(Math.min(...costs) / 500) * 500 - 300,
      Math.ceil(Math.max(...costs)  / 500) * 500 + 250
    ];
  }, [barData]);

  // Projection: Year 0 = instant net savings; Years 1–N += annual lifecycle
  const projData = useMemo(() => {
    if (results.productCostTotal == null) return [];
    const annualLifecycle = (results.lifecycle?.total || 0) / (inputs.analysisPeriod || 10);
    return Array.from({ length: 11 }, (_, yr) => ({
      year: yr,
      cumulative: Math.round((results.netSavingsTotal || 0) + annualLifecycle * yr)
    }));
  }, [results, inputs.analysisPeriod]);

  // Theme tokens
  const bg       = isDark ? 'bg-neutral-900'    : 'bg-white';
  const bgSub    = isDark ? 'bg-neutral-950/40' : 'bg-neutral-50/60';
  const border   = isDark ? 'border-neutral-700': 'border-neutral-200';
  const text     = isDark ? 'text-white'        : 'text-neutral-900';
  const sub      = isDark ? 'text-neutral-400'  : 'text-neutral-500';
  const inputCls = `w-full border ${border} rounded-lg px-3 py-2.5 text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${isDark ? 'bg-neutral-800 text-white' : 'bg-white text-neutral-900'}`;

  // ── Sub-component: Log Slider ─────────────────────────────────────────────
  const LogSlider = () => {
    const vol = inputs.projectVolume || 1;
    return (
      <div className="space-y-2.5">
        <div className="flex items-baseline justify-between">
          <span className={`text-xs font-bold uppercase tracking-wider ${text}`}>Concrete Volume</span>
          <div className="flex items-center gap-1.5">
            <input
              type="number" value={volText} min={1} max={10000}
              onChange={(e) => {
                setVolText(e.target.value);
                const v = parseInt(e.target.value, 10);
                if (!isNaN(v) && v >= 1 && v <= 10000) set('projectVolume', v);
              }}
              onBlur={() => setVolText(String(vol))}
              className={`w-20 text-right text-sm font-mono border ${border} rounded px-2 py-1 ${isDark ? 'bg-neutral-800 text-white' : 'bg-white text-neutral-900'} focus:outline-none focus:ring-1 focus:ring-indigo-500`}
            />
            <span className={`text-sm font-medium ${text}`}>m³</span>
          </div>
        </div>
        <input
          type="range" min={0} max={100}
          value={volumeToPos(vol)}
          onChange={(e) => {
            const v = posToVolume(e.target.value);
            set('projectVolume', v);
            setVolText(String(v));
          }}
          className="w-full h-1.5 appearance-none rounded-full cursor-pointer accent-indigo-600"
        />
        <div className="flex justify-between">
          {VOLUME_TICKS.map(({ v, num, label }) => (
            <div key={v} className="flex flex-col items-center gap-0.5 w-10">
              <span className={`text-[10px] font-semibold ${text}`}>{num}</span>
              {label.map((l, i) => (
                <span key={i} className={`text-[9px] ${sub} text-center leading-tight`}>{l}</span>
              ))}
            </div>
          ))}
        </div>
        <p className={`text-[11px] italic ${sub}`}>≈ {getVolumeContext(vol)}</p>
      </div>
    );
  };

  const GradeSelect = () => {
    const cfg = defaultInputs.targetStrength;
    if (!cfg) return null;
    return (
      <div className="space-y-2">
        <span className={`text-xs font-bold uppercase tracking-wider ${text}`}>{cfg.label}</span>
        <select
          value={inputs.targetStrength}
          onChange={(e) => set('targetStrength', Number(e.target.value))}
          className={inputCls}
        >
          {cfg.options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}{opt.badge ? ' ✦' : ''} — {opt.description}
            </option>
          ))}
        </select>
        {results.isNABL
          ? <p className="text-[11px] font-semibold text-green-600">✦ NABL certified — M30 + Graphacrete ≈ M50</p>
          : <p className={`text-[11px] ${sub}`}>Cement savings & lifecycle value apply at all grades.</p>
        }
      </div>
    );
  };

  const CementSlider = () => {
    const cfg = defaultInputs.cementPrice;
    if (!cfg) return null;
    const val = inputs.cementPrice;
    return (
      <div className="space-y-2">
        <div className="flex items-baseline justify-between">
          <span className={`text-xs font-bold uppercase tracking-wider ${text}`}>{cfg.label}</span>
          <span className={`text-sm font-mono font-bold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>₹{val}/bag</span>
        </div>
        <input
          type="range" min={cfg.min} max={cfg.max} step={cfg.step} value={val}
          onChange={(e) => set('cementPrice', Number(e.target.value))}
          className="w-full h-1.5 appearance-none rounded-full cursor-pointer accent-indigo-600"
        />
        <div className="flex justify-between">
          <span className={`text-[10px] ${sub}`}>₹{cfg.min}</span>
          <span className={`text-[10px] ${sub}`}>avg ₹320</span>
          <span className={`text-[10px] ${sub}`}>₹{cfg.max}</span>
        </div>
      </div>
    );
  };

  const CementReductionSlider = () => {
    const cfg = defaultInputs.cementReductionPct;
    if (!cfg) return null;
    const val = inputs.cementReductionPct;
    return (
      <div className="space-y-2">
        <div className="flex items-baseline justify-between">
          <span className={`text-xs font-bold uppercase tracking-wider ${text}`}>{cfg.label}</span>
          <span className={`text-sm font-mono font-bold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>{val}%</span>
        </div>
        <input
          type="range" min={cfg.min} max={cfg.max} step={cfg.step} value={val}
          onChange={(e) => set('cementReductionPct', Number(e.target.value))}
          className="w-full h-1.5 appearance-none rounded-full cursor-pointer accent-indigo-600"
        />
        <div className="flex justify-between">
          <span className={`text-[10px] ${sub}`}>15% conservative</span>
          <span className={`text-[10px] ${sub}`}>20% optimistic</span>
        </div>
        <p className={`text-[11px] ${sub}`}>NABL certified range: 15–20%</p>
      </div>
    );
  };

  // ── Secondary input renderers ────────────────────────────────────────────
  const SecToggle = (key, cfg) => (
    <div className="flex items-center justify-between py-0.5">
      <label className={`text-sm font-medium ${text}`}>{cfg.label}</label>
      <button
        onClick={() => set(key, !inputs[key])}
        className={`w-11 h-6 rounded-full relative flex-shrink-0 transition-colors ${
          inputs[key] ? 'bg-indigo-600' : isDark ? 'bg-neutral-700' : 'bg-neutral-300'
        }`}
      >
        <div className={`w-4 h-4 bg-white rounded-full absolute top-1 shadow-sm transition-all ${inputs[key] ? 'left-6' : 'left-1'}`} />
      </button>
    </div>
  );

  const SecSlider = (key, cfg) => (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between">
        <label className={`text-sm font-medium ${text}`}>{cfg.label}</label>
        <span className={`text-sm font-mono font-bold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
          {inputs[key]?.toLocaleString()} {cfg.unit}
        </span>
      </div>
      <input
        type="range" min={cfg.min} max={cfg.max} step={cfg.step || 1} value={inputs[key]}
        onChange={(e) => set(key, Number(e.target.value))}
        className="w-full h-1.5 appearance-none rounded-full cursor-pointer accent-indigo-600"
      />
      <div className="flex justify-between">
        <span className={`text-[10px] ${sub}`}>{cfg.min} {cfg.unit}</span>
        <span className={`text-[10px] ${sub}`}>{cfg.max} {cfg.unit}</span>
      </div>
      {cfg.note && <p className={`text-[11px] ${sub}`}>{cfg.note}</p>}
    </div>
  );

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

  const renderSecInput = (key, cfg) => {
    if (cfg.showWhen && inputs[cfg.showWhen.key] !== cfg.showWhen.value) return null;
    switch (cfg.type) {
      case 'toggle':      return SecToggle(key, cfg);
      case 'slider':      return SecSlider(key, cfg);
      case 'buttongroup': return SecButtonGroup(key, cfg);
      default:            return null;
    }
  };

  const lifecycleRows = results.lifecycle ? [
    { icon: Droplets,    label: 'Waterproofing avoided', value: results.lifecycle.waterproofing, color: 'text-blue-500'   },
    { icon: Clock,       label: 'Construction time',     value: results.lifecycle.construction,  color: 'text-orange-500' },
    { icon: TrendingUp,  label: 'Life extension (est.)', value: results.lifecycle.lifeExtension, color: 'text-green-500'  },
    { icon: Thermometer, label: 'Energy / cooling',      value: results.lifecycle.thermal,       color: 'text-yellow-500' },
    { icon: Wrench,      label: 'Maintenance',           value: results.lifecycle.maintenance,   color: 'text-purple-500' }
  ] : [];

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className={`rounded-3xl border ${border} overflow-hidden shadow-2xl`}>

      {/* ── NABL Banner ─────────────────────────────────────────────────────── */}
      <div className={`px-6 py-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs ${
        isDark ? 'bg-indigo-950/40 border-b border-indigo-900/50' : 'bg-indigo-50 border-b border-indigo-100'
      }`}>
        <Award className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0" />
        <span className="font-bold uppercase tracking-wider text-indigo-500">NABL Certified</span>
        <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
        <span className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>
          M{results.baseGrade || 30} + Graphacrete ≈ M{results.targetGrade || 50}
        </span>
        <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
        {/* Both savings inline — no toggle needed */}
        <span className={`font-bold ${netPositive ? 'text-green-600' : 'text-amber-500'}`}>
          Net: {netPositive ? '+' : '−'}₹{Math.abs(results.netSavingsPerM3 || 0).toLocaleString('en-IN')}/m³
        </span>
        <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
        <span className={`font-semibold ${gradeOnlyPositive ? 'text-slate-600' : isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          Grade-only: {gradeOnlyPositive ? '+' : '−'}₹{Math.abs(results.gradeOnlySavingsPerM3 || 0).toLocaleString('en-IN')}/m³
        </span>
      </div>

      {/* ── Shared Inputs — 4 columns ───────────────────────────────────────── */}
      <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-7 border-b ${border} ${bg}`}>
        <LogSlider />
        <GradeSelect />
        <CementSlider />
        <CementReductionSlider />
      </div>

      {/* ── Main Grid ───────────────────────────────────────────────────────── */}
      <div className={`grid grid-cols-1 lg:grid-cols-12 ${bg}`}>

        {/* ── LEFT: Cost breakdown ─────────────────────────────────────────── */}
        <div className={`lg:col-span-5 p-8 border-b lg:border-b-0 lg:border-r ${border} flex flex-col gap-6`}>
          <p className={`text-xs font-bold uppercase tracking-wider ${sub}`}>Per m³ Cost Breakdown</p>

          <div className="space-y-2">
            {/* Base grade */}
            <div className={`rounded-xl p-4 border ${border} ${isDark ? 'bg-neutral-800/50' : 'bg-neutral-50'}`}>
              <p className={`text-xs font-bold uppercase tracking-widest ${sub} mb-1`}>
                M{results.baseGrade} concrete (base mix)
              </p>
              <p className={`text-2xl font-display font-medium ${text}`}>
                {fmtRaw(results.baseCostPerM3 || 0)}
                <span className={`text-sm font-normal ${sub} ml-1`}>/m³</span>
              </p>
            </div>

            {/* Graphacrete net card */}
            <div className={`rounded-xl p-3.5 border ${isDark ? 'border-blue-800/40 bg-blue-900/10' : 'border-blue-100 bg-blue-50'}`}>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">+ Graphacrete (net)</p>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-blue-400">Additive (2 L × ₹235)</span>
                  <span className="font-mono text-blue-500">+₹470</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-600">Cement saved ({inputs.cementReductionPct}%)</span>
                  <span className="font-mono text-green-600">−₹{(results.cementSavingsValuePerM3 || 0).toLocaleString('en-IN')}</span>
                </div>
                <div className={`flex justify-between pt-1 border-t ${isDark ? 'border-blue-700/30' : 'border-blue-200/60'}`}>
                  <span className="font-bold text-blue-600">Net addition/m³</span>
                  <span className="font-bold font-mono text-blue-600">
                    {(470 - (results.cementSavingsValuePerM3 || 0)) >= 0 ? '+' : '−'}
                    ₹{Math.abs(470 - (results.cementSavingsValuePerM3 || 0)).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-2 px-1">
              <div className={`flex-1 h-px ${isDark ? 'bg-neutral-700' : 'bg-neutral-200'}`} />
              <span className={`text-[10px] uppercase font-bold ${sub}`}>equals</span>
              <div className={`flex-1 h-px ${isDark ? 'bg-neutral-700' : 'bg-neutral-200'}`} />
            </div>

            {/* Net cost with Graphacrete */}
            <div className={`rounded-xl p-4 border-2 ${isDark ? 'border-green-700 bg-green-900/10' : 'border-green-300 bg-green-50'}`}>
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-widest text-green-600">
                  M{results.baseGrade} + Graphacrete
                </p>
                <span className="flex items-center gap-1 text-[10px] text-green-600 font-semibold">
                  <CheckCircle className="w-3 h-3" />
                  ≈ M{results.targetGrade} performance
                </span>
              </div>
              <p className="text-2xl font-display font-medium text-green-700 mt-1">
                {fmtRaw(results.netCostWithGraphacretePerM3 || 0)}
                <span className="text-sm font-normal text-green-500 ml-1">/m³</span>
              </p>
            </div>

            {/* Traditional target baseline */}
            <div className={`rounded-xl p-3.5 border ${isDark ? 'border-neutral-700 bg-neutral-800/30' : 'border-neutral-200 bg-neutral-50'}`}>
              <div className="flex items-center justify-between">
                <p className={`text-xs font-bold uppercase tracking-widest ${sub}`}>
                  Standard M{results.targetGrade} (traditional)
                </p>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${isDark ? 'bg-neutral-700 text-neutral-400' : 'bg-neutral-200 text-neutral-500'}`}>Baseline</span>
              </div>
              <p className={`text-xl font-display font-medium ${text} mt-0.5`}>
                {fmtRaw(results.targetCostPerM3 || 0)}
                <span className={`text-sm font-normal ${sub} ml-1`}>/m³</span>
              </p>
            </div>
          </div>

          {/* Project Totals */}
          <div className={`rounded-xl border ${border} ${isDark ? 'bg-neutral-800/30' : 'bg-neutral-50'} p-5 mt-auto`}>
            <p className={`text-xs font-bold uppercase tracking-wider ${sub} mb-4`}>
              Project Total · {(inputs.projectVolume || 0).toLocaleString()} m³
            </p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className={`text-sm ${sub}`}>Traditional M{results.targetGrade}</span>
                <span className={`text-sm font-mono font-semibold ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {fmt((results.targetCostPerM3 || 0) * (inputs.projectVolume || 0))}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${sub}`}>With Graphacrete</span>
                <span className={`text-sm font-mono font-semibold ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {fmt((results.netCostWithGraphacretePerM3 || 0) * (inputs.projectVolume || 0))}
                </span>
              </div>
              <div className={`pt-2 border-t ${border} space-y-1.5`}>
                <div className="flex justify-between items-center">
                  <span className={`text-xs ${sub}`}>Grade-only savings <span className="opacity-60">(brochure)</span></span>
                  <span className={`text-sm font-mono font-semibold ${
                    gradeOnlyPositive ? isDark ? 'text-slate-300' : 'text-slate-600' : sub
                  }`}>
                    {gradeOnlyPositive ? '' : '−'}{fmt(Math.abs(results.gradeOnlySavingsTotal || 0))}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-bold ${text}`}>Net savings (all-in)</span>
                  <span className={`text-xl font-bold font-mono ${
                    netPositive
                      ? isDark ? 'text-green-400' : 'text-green-700'
                      : isDark ? 'text-amber-400' : 'text-amber-600'
                  }`}>
                    {netPositive ? '' : '−'}{fmt(Math.abs(results.netSavingsTotal || 0))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Charts + Metrics ──────────────────────────────────────── */}
        <div className={`lg:col-span-7 ${bgSub} p-8 flex flex-col gap-6`}>

          {/* Bar chart — spec §12 */}
          <div>
            <p className={`text-xs font-bold uppercase tracking-widest ${sub} mb-3`}>
              Cost per m³ — Grade comparison
            </p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 20, right: 8, bottom: 0, left: -10 }} barSize={52}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#2a2a2a' : '#f1f5f9'} vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: isDark ? '#9ca3af' : '#64748b' }} tickLine={false} axisLine={false} />
                  <YAxis
                    domain={barDomain}
                    tickFormatter={(v) => `₹${(v / 1000).toFixed(1)}k`}
                    tick={{ fontSize: 10, fill: isDark ? '#9ca3af' : '#64748b' }}
                    tickLine={false} axisLine={false}
                  />
                  <Tooltip content={<BarTip />} />
                  <Bar dataKey="cost" radius={[6, 6, 0, 0]}>
                    {barData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
                    <LabelList
                      dataKey="cost" position="top"
                      formatter={(v) => `₹${(v / 1000).toFixed(1)}k`}
                      style={{ fontSize: 10, fontWeight: 700, fill: isDark ? '#e5e7eb' : '#374151' }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className={`text-[11px] text-center mt-1 ${sub}`}>
              Gap between green bar and right bar = Net savings per m³ (₹{Math.abs(results.netSavingsPerM3 || 0).toLocaleString('en-IN')}/m³)
            </p>
          </div>

          {/* ── Two savings headline cards (spec §11A) ───────────────────── */}
          <div className="grid grid-cols-2 gap-4">

            {/* Card 1: Net savings (primary) */}
            <div className={`p-5 rounded-2xl border-2 ${
              netPositive
                ? isDark ? 'border-green-700 bg-green-900/10' : 'border-green-300 bg-green-50'
                : isDark ? 'border-amber-700 bg-amber-900/10' : 'border-amber-200 bg-amber-50'
            }`}>
              <div className="flex items-start justify-between mb-2">
                <p className={`text-xs font-bold uppercase tracking-widest ${
                  netPositive ? 'text-green-600' : isDark ? 'text-amber-400' : 'text-amber-600'
                }`}>{results.netLabel || 'Net Savings'}</p>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                  isDark ? 'bg-neutral-700 text-neutral-300' : 'bg-neutral-900 text-white'
                }`}>ALL-IN</span>
              </div>
              <p className={`text-3xl font-display font-medium tabular-nums ${
                netPositive ? 'text-green-700' : isDark ? 'text-amber-400' : 'text-amber-600'
              }`}>
                {fmt(Math.abs(results.netSavingsTotal || 0))}
              </p>
              {netPositive ? (
                <p className={`text-xs mt-1.5 ${isDark ? 'text-green-500' : 'text-green-600'}`}>
                  ₹{Math.abs(results.netSavingsPerM3 || 0)}/m³ · grade + cement − additive
                </p>
              ) : (
                <>
                  <p className={`text-xs mt-1.5 ${isDark ? 'text-amber-500' : 'text-amber-600'}`}>
                    ₹{Math.abs(results.netSavingsPerM3 || 0)}/m³ quality premium
                  </p>
                  <ul className="mt-3 space-y-1">
                    {[
                      'Higher density & durability',
                      'Reduced permeability',
                      'Lower cracking risk',
                      'Lower maintenance & longer life'
                    ].map(b => (
                      <li key={b} className="flex items-center gap-1.5 text-[10px] text-amber-700">
                        <CheckCircle className="w-3 h-3 text-amber-500 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Card 2: Grade-only (secondary, brochure method) */}
            <div className={`p-5 rounded-2xl border ${isDark ? 'border-slate-700 bg-slate-800/30' : 'border-slate-200 bg-slate-50'}`}>
              <div className="flex items-start justify-between mb-2">
                <p className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Grade-Only {results.gradeOnlyLabel || 'Savings'}
                </p>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                  isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-600'
                }`}>BROCHURE</span>
              </div>
              <p className={`text-3xl font-display font-medium tabular-nums ${
                gradeOnlyPositive ? isDark ? 'text-slate-200' : 'text-slate-700' : isDark ? 'text-slate-500' : 'text-slate-400'
              }`}>
                {gradeOnlyPositive ? '' : '−'}{fmt(Math.abs(results.gradeOnlySavingsTotal || 0))}
              </p>
              <p className={`text-xs mt-1.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                ₹{Math.abs(results.gradeOnlySavingsPerM3 || 0)}/m³ · excludes cement reduction
              </p>
              {results.isNABL && gradeOnlyPositive && (
                <p className="text-[10px] font-semibold text-indigo-500 mt-2">
                  ✦ Brochure headline: M30+G ≈ M50 @ ₹430/m³
                </p>
              )}
            </div>
          </div>

          {/* ROI + Payback */}
          <div className="grid grid-cols-2 gap-3">
            <div className={`p-4 rounded-xl border ${border} ${isDark ? 'bg-neutral-800/50' : 'bg-white'} flex items-center gap-4`}>
              <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0" />
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-wider ${sub}`}>ROI</p>
                <p className={`text-2xl font-display font-medium tabular-nums ${text}`}>
                  {results.roiPercentage != null ? `${results.roiPercentage}%` : <span className="text-base">Quality+</span>}
                </p>
              </div>
            </div>
            <div className={`p-4 rounded-xl border ${border} ${isDark ? 'bg-neutral-800/50' : 'bg-white'} flex items-center gap-4`}>
              <Zap className={`w-5 h-5 flex-shrink-0 ${netPositive ? 'text-green-500' : isDark ? 'text-amber-400' : 'text-amber-500'}`} />
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-wider ${sub}`}>Payback</p>
                <p className={`text-base font-display font-medium ${netPositive ? 'text-green-600' : isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                  {results.paybackLabel || '—'}
                </p>
              </div>
            </div>
          </div>

          {/* Cement + CO₂ + Investment */}
          <div className="grid grid-cols-3 gap-3">
            <div className={`p-3.5 rounded-xl border ${border} ${isDark ? 'bg-neutral-800/30' : 'bg-white'} text-center`}>
              <p className={`text-[10px] font-bold uppercase tracking-wider ${sub} mb-1`}>Investment</p>
              <p className={`text-sm font-bold tabular-nums ${text}`}>{fmt(results.productCostTotal || 0)}</p>
            </div>
            <div className={`p-3.5 rounded-xl border border-green-500/25 ${isDark ? 'bg-green-900/10' : 'bg-green-50'} text-center`}>
              <p className="text-[10px] font-bold uppercase tracking-wider text-green-600/70 mb-1">Cement Saved</p>
              <p className="text-sm font-bold text-green-600 tabular-nums">
                {(results.cementSavedKg || 0).toLocaleString()}
                <span className="text-[10px] font-normal ml-0.5">kg</span>
              </p>
              <p className="text-[10px] text-green-500/60">{results.cementSavedBags || 0} bags</p>
            </div>
            <div className={`p-3.5 rounded-xl border border-teal-500/25 ${isDark ? 'bg-teal-900/10' : 'bg-teal-50'} text-center`}>
              <p className="text-[10px] font-bold uppercase tracking-wider text-teal-600/70 mb-1">CO₂ Avoided</p>
              <p className="text-sm font-bold text-teal-600 tabular-nums">
                {((results.co2AvoidedKg || 0) / 1000).toFixed(2)}
                <span className="text-[10px] font-normal ml-0.5">t</span>
              </p>
            </div>
          </div>

          {/* Projection chart */}
          <div className={`flex-grow border ${border} rounded-2xl ${isDark ? 'bg-neutral-800/50' : 'bg-white'} p-5`}>
            <p className={`text-xs font-bold uppercase tracking-widest ${sub} mb-3`}>
              {netPositive ? '10-Year Financial Projection' : 'Lifecycle Value Recovery'}
            </p>
            {projData.length > 0 && (
              <div className="h-28">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={projData} margin={{ top: 4, right: 12, bottom: 4, left: -18 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#2a2a2a' : '#f1f5f9'} vertical={false} />
                    <XAxis dataKey="year" stroke={isDark ? '#525252' : '#94a3b8'} fontSize={10} tickLine={false} axisLine={false} tickMargin={6} tickFormatter={(v) => `Yr ${v}`} />
                    <YAxis stroke={isDark ? '#525252' : '#94a3b8'} fontSize={10} tickLine={false} axisLine={false} tickMargin={6} tickFormatter={fmt} />
                    <ReferenceLine y={0} stroke={isDark ? '#555' : '#cbd5e1'} strokeDasharray="4 2" />
                    <Tooltip
                      contentStyle={{ backgroundColor: isDark ? '#171717' : '#fff', border: `1px solid ${isDark ? '#404040' : '#e2e8f0'}`, borderRadius: '8px', fontSize: '11px', color: isDark ? '#fff' : '#111' }}
                      formatter={(v) => [fmt(v), 'Cumulative']}
                      labelFormatter={(yr) => yr === 0 ? 'Construction (immediate)' : `Year ${yr}`}
                    />
                    <Line type="monotone" dataKey="cumulative" stroke="#6366f1" strokeWidth={2.5} dot={{ fill: '#6366f1', r: 3, strokeWidth: 0 }} activeDot={{ r: 5, strokeWidth: 0 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
            <p className={`text-[10px] ${sub} mt-2`}>
              Yr 0 = construction-phase savings (instant). Yr 1–10 adds estimated lifecycle value.
            </p>
          </div>

          {/* Disclaimer — spec §11D */}
          <p className={`text-[10px] leading-relaxed flex items-start gap-1.5 ${sub}`}>
            <Info className="w-3 h-3 flex-shrink-0 mt-0.5 opacity-60" />
            Results depend on mix design, site conditions, and local pricing. Calculator uses typical RMC market assumptions and user inputs.
          </p>
        </div>
      </div>

      {/* ── Lifecycle Accordion ──────────────────────────────────────────────── */}
      {secCfg && (
        <div className={`border-t ${border} ${bg}`}>
          <button
            onClick={() => setShowSecondary(p => !p)}
            className={`w-full px-8 py-4 flex items-center justify-between text-sm font-medium ${text} transition-colors ${isDark ? 'hover:bg-neutral-800/60' : 'hover:bg-neutral-50'}`}
          >
            <div className="flex items-center gap-3 flex-wrap">
              <span>Full Lifecycle Savings</span>
              <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${isDark ? 'bg-neutral-700 text-neutral-400' : 'bg-neutral-100 text-neutral-500'}`}>Estimates</span>
              {results.lifecycle && (
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-mono ${isDark ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'}`}>
                  +{fmt(results.lifecycle.total)} over {inputs.analysisPeriod} yr
                </span>
              )}
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
                    <p className={`text-xs font-bold uppercase tracking-wider ${sub}`}>Additional Parameters</p>
                    {Object.keys(secCfg).map(key => {
                      const node = renderSecInput(key, secCfg[key]);
                      return node ? <div key={key}>{node}</div> : null;
                    })}
                  </div>
                  <div className="space-y-3">
                    <p className={`text-xs font-bold uppercase tracking-wider ${sub}`}>
                      Estimated Lifecycle Breakdown ({inputs.analysisPeriod} yr)
                    </p>
                    {lifecycleRows.map(({ icon: Icon, label, value, color }) => (
                      <div key={label} className={`flex items-center justify-between px-4 py-3 rounded-xl border ${border} ${isDark ? 'bg-neutral-800/30' : 'bg-white'}`}>
                        <div className="flex items-center gap-2.5">
                          <Icon className={`w-4 h-4 flex-shrink-0 ${color}`} />
                          <span className={`text-sm ${text}`}>{label}</span>
                        </div>
                        <span className={`text-sm font-mono font-semibold ${value > 0 ? 'text-green-600' : sub}`}>
                          {value > 0 ? `+${fmt(value)}` : '—'}
                        </span>
                      </div>
                    ))}
                    <div className={`flex items-center justify-between px-4 py-3.5 rounded-xl border-2 mt-1 ${isDark ? 'border-green-800 bg-green-900/20' : 'border-green-200 bg-green-50'}`}>
                      <div className="flex items-center gap-2">
                        <Leaf className="w-4 h-4 text-green-600" />
                        <span className={`text-sm font-bold ${isDark ? 'text-green-400' : 'text-green-800'}`}>Total Lifecycle Value</span>
                      </div>
                      <span className={`text-lg font-bold font-mono ${isDark ? 'text-green-400' : 'text-green-700'}`}>
                        +{fmt(results.lifecycle?.total || 0)}
                      </span>
                    </div>
                    <div className={`px-4 py-3 rounded-xl border ${border} ${isDark ? 'bg-neutral-800/30' : 'bg-white'}`}>
                      <div className="flex justify-between items-center">
                        <span className={`text-sm font-bold ${text}`}>All-in over {inputs.analysisPeriod} yr</span>
                        <span className={`text-lg font-bold font-mono ${
                          (results.totalAllInDelta || 0) >= 0 ? isDark ? 'text-green-400' : 'text-green-700' : isDark ? 'text-amber-400' : 'text-amber-600'
                        }`}>{fmt(results.totalAllInDelta || 0)}</span>
                      </div>
                      <p className={`text-[10px] ${sub} mt-1`}>
                        Construction {fmt(results.netSavingsTotal || 0)} + lifecycle {fmt(results.lifecycle?.total || 0)}
                        {results.totalAllInRoiPct ? ` · ${results.totalAllInRoiPct}% all-in ROI` : ''}
                      </p>
                    </div>
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

export default ROICalculator;
