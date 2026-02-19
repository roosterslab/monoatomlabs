import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine, Cell, LabelList
} from 'recharts';
import { ShieldCheck, TrendingUp, ChevronDown, Zap, Info, Droplets, Car } from 'lucide-react';

// ── Log scale helpers (1–1000 vehicles) ──────────────────────────────────────
const posToVehicles = (pos) => {
  const raw = Math.pow(10, (Number(pos) / 100) * 3); // 3 decades: 1–1000
  if (raw < 5)    return Math.max(1, Math.round(raw));
  if (raw < 20)   return Math.round(raw / 5) * 5;
  if (raw < 100)  return Math.round(raw / 10) * 10;
  return Math.round(raw / 50) * 50;
};
const vehiclesToPos = (v) =>
  Math.round((Math.log10(Math.max(1, Math.min(1000, v))) / 3) * 100);

const VEHICLE_TICKS = [
  { v: 1,    num: '1',    label: ['Single', 'vehicle'] },
  { v: 10,   num: '10',   label: ['Small',  'fleet']   },
  { v: 50,   num: '50',   label: ['Studio', 'fleet']   },
  { v: 200,  num: '200',  label: ['Large',  'fleet']   },
  { v: 1000, num: '1k',   label: ['Enterprise', '']    }
];

const getVehicleContext = (v) => {
  if (v <= 1)   return 'Single personal or collector vehicle';
  if (v <= 5)   return 'Personal fleet or small family';
  if (v <= 20)  return 'Detailing studio batch';
  if (v <= 75)  return 'Small commercial fleet';
  if (v <= 300) return 'Large corporate or taxi fleet';
  return 'Enterprise-scale fleet or national programme';
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
      <p className="text-neutral-600">₹{payload[0].value?.toLocaleString('en-IN')}/vehicle/yr</p>
    </div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
const CerapheneROICalculator = ({
  calculations,
  defaultInputs,
  secondaryInputs: secCfg,
  theme = 'light'
}) => {
  const isDark = theme === 'dark';

  const sliderBg = (pct) => ({
    background: `linear-gradient(to right, #3b82f6 ${pct.toFixed(1)}%, ${isDark ? '#374151' : '#e5e7eb'} ${pct.toFixed(1)}%)`
  });
  const sliderCls = 'w-full h-2 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-blue-500 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-blue-500 [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-pointer';

  const allCfg = { ...defaultInputs, ...(secCfg || {}) };
  const init = Object.keys(allCfg).reduce((acc, key) => {
    const c = allCfg[key];
    acc[key] = c.default !== undefined ? c.default
      : c.min != null ? (c.min + c.max) / 2
      : c.options?.[0]?.value;
    return acc;
  }, {});

  const [inputs, setInputs]               = useState(init);
  const [countText, setCountText]         = useState(String(init.vehicleCount || 5));
  const [showSecondary, setShowSecondary] = useState(false);

  const set = (key, val) => setInputs(prev => ({ ...prev, [key]: val }));
  const results = useMemo(() => calculations(inputs), [inputs, calculations]);

  // Theme tokens
  const bg       = isDark ? 'bg-neutral-900'    : 'bg-white';
  const bgSub    = isDark ? 'bg-neutral-950/40' : 'bg-neutral-50/60';
  const border   = isDark ? 'border-neutral-700': 'border-neutral-200';
  const text     = isDark ? 'text-white'        : 'text-neutral-900';
  const sub      = isDark ? 'text-neutral-400'  : 'text-neutral-500';
  const accent   = isDark ? 'text-blue-400'     : 'text-blue-600';
  const inputCls = `w-full border ${border} rounded-lg px-3 py-2.5 text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${isDark ? 'bg-neutral-800 text-white' : 'bg-white text-neutral-900'}`;

  // Bar chart: competitor coating only | Ceraphene all-in | Competitor all-in
  const barData = useMemo(() => [
    { name: 'Competitor\n(coating only)', cost: results.competitorCostAmortized || 0,   fill: '#94a3b8' },
    { name: 'Ceraphene\n(all-in)',         cost: results.cerapheneAnnualEffective || 0,  fill: '#3b82f6' },
    { name: 'Competitor\n(all-in)',        cost: results.competitorAnnualEffective || 0, fill: '#f87171' }
  ], [results]);

  const barDomain = useMemo(() => {
    const vals = barData.map(d => d.cost).filter(Boolean);
    if (!vals.length) return [0, 30000];
    return [
      0,
      Math.ceil(Math.max(...vals) * 1.15 / 1000) * 1000
    ];
  }, [barData]);

  // Projection: Year 0 = directSavingsTotal (immediate), Year N += annual savings
  const projData = useMemo(() => {
    if (!results.directSavingsTotal) return [];
    const annualOngoing = (results.annualSavingsPerVehicle || 0) * (results.vehicleCount || 1);
    // Subtract the one-time direct saving from Year 0 so Year N shows cumulative correctly
    // Year 0: immediate upfront saving (chose Ceraphene over competitor)
    // Year 1+: add annual wash + amortization savings
    return Array.from({ length: (inputs.analysisPeriod || 4) + 1 }, (_, yr) => ({
      year: yr,
      cumulative: Math.round((results.directSavingsTotal || 0) + annualOngoing * yr)
    }));
  }, [results, inputs.analysisPeriod]);

  // ── Sub-component: Log Slider ─────────────────────────────────────────────
  const LogSlider = () => {
    const v = inputs.vehicleCount || 1;
    return (
      <div className="space-y-2.5">
        <div className="flex items-baseline justify-between">
          <span className={`text-xs font-bold uppercase tracking-wider ${text}`}>Vehicle Count</span>
          <div className="flex items-center gap-1.5">
            <input
              type="number" value={countText} min={1} max={1000}
              onChange={(e) => {
                setCountText(e.target.value);
                const n = parseInt(e.target.value, 10);
                if (!isNaN(n) && n >= 1 && n <= 1000) set('vehicleCount', n);
              }}
              onBlur={() => setCountText(String(v))}
              className={`w-20 text-right text-sm font-mono border ${border} rounded px-2 py-1 ${isDark ? 'bg-neutral-800 text-white' : 'bg-white text-neutral-900'} focus:outline-none focus:ring-1 focus:ring-blue-500`}
            />
            <span className={`text-sm font-medium ${text}`}>vehicles</span>
          </div>
        </div>
        <input
          type="range" min={0} max={100}
          value={vehiclesToPos(v)}
          onChange={(e) => {
            const n = posToVehicles(e.target.value);
            set('vehicleCount', n);
            setCountText(String(n));
          }}
          className={sliderCls} style={sliderBg(vehiclesToPos(v))}
        />
        <div className="flex justify-between">
          {VEHICLE_TICKS.map(({ v: tv, num, label }) => (
            <div key={tv} className="flex flex-col items-center gap-0.5 w-10">
              <span className={`text-[10px] font-semibold ${text}`}>{num}</span>
              {label.map((l, i) => (
                <span key={i} className={`text-[9px] ${sub} text-center leading-tight`}>{l}</span>
              ))}
            </div>
          ))}
        </div>
        <p className={`text-[11px] italic ${sub}`}>≈ {getVehicleContext(v)}</p>
      </div>
    );
  };

  const CompetitorSlider = () => {
    const cfg = defaultInputs.competitorCost;
    const val = inputs.competitorCost;
    return (
      <div className="space-y-2">
        <div className="flex items-baseline justify-between">
          <span className={`text-xs font-bold uppercase tracking-wider ${text}`}>Competitor Cost</span>
          <span className={`text-sm font-mono font-bold ${accent}`}>₹{(val || 0).toLocaleString()}</span>
        </div>
        <input
          type="range" min={cfg.min} max={cfg.max} step={cfg.step || 1000} value={val}
          onChange={(e) => set('competitorCost', Number(e.target.value))}
          className={sliderCls} style={sliderBg(Math.max(0, Math.min(100, ((val - cfg.min) / (cfg.max - cfg.min)) * 100)))}
        />
        <div className="flex justify-between">
          <span className={`text-[10px] ${sub}`}>₹{(cfg.min / 1000).toFixed(0)}k</span>
          <span className={`text-[10px] ${sub}`}>₹{(cfg.max / 1000).toFixed(0)}k</span>
        </div>
        <p className={`text-[11px] ${sub}`}>Ceraphene: ₹{(results.ceraphenePrice || 5000).toLocaleString()} (fixed)</p>
      </div>
    );
  };

  const WashCostSlider = () => {
    const cfg = defaultInputs.annualWashCostPerVehicle;
    const val = inputs.annualWashCostPerVehicle;
    return (
      <div className="space-y-2">
        <div className="flex items-baseline justify-between">
          <span className={`text-xs font-bold uppercase tracking-wider ${text}`}>Annual Wash Cost</span>
          <span className={`text-sm font-mono font-bold ${accent}`}>₹{(val || 0).toLocaleString()}/yr</span>
        </div>
        <input
          type="range" min={cfg.min} max={cfg.max} step={cfg.step || 1000} value={val}
          onChange={(e) => set('annualWashCostPerVehicle', Number(e.target.value))}
          className={sliderCls} style={sliderBg(Math.max(0, Math.min(100, ((val - cfg.min) / (cfg.max - cfg.min)) * 100)))}
        />
        <div className="flex justify-between">
          <span className={`text-[10px] ${sub}`}>₹{(cfg.min / 1000).toFixed(0)}k</span>
          <span className={`text-[10px] ${sub}`}>₹{(cfg.max / 1000).toFixed(0)}k</span>
        </div>
      </div>
    );
  };

  const WashReductionSlider = () => {
    const cfg = defaultInputs.washReductionPct;
    const val = inputs.washReductionPct;
    return (
      <div className="space-y-2">
        <div className="flex items-baseline justify-between">
          <span className={`text-xs font-bold uppercase tracking-wider ${text}`}>Wash Reduction</span>
          <span className={`text-sm font-mono font-bold ${accent}`}>{val}%</span>
        </div>
        <input
          type="range" min={cfg.min} max={cfg.max} step={cfg.step || 5} value={val}
          onChange={(e) => set('washReductionPct', Number(e.target.value))}
          className={sliderCls} style={sliderBg(Math.max(0, Math.min(100, ((val - cfg.min) / (cfg.max - cfg.min)) * 100)))}
        />
        <div className="flex justify-between">
          <span className={`text-[10px] ${sub}`}>{cfg.min}% conservative</span>
          <span className={`text-[10px] ${sub}`}>{cfg.max}% optimistic</span>
        </div>
        <p className={`text-[11px] ${sub}`}>Hydrophobic self-cleaning range</p>
      </div>
    );
  };

  // ── Secondary inputs ──────────────────────────────────────────────────────
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

  const SecSlider = (key, cfg) => {
    const secPct = Math.max(0, Math.min(100, ((inputs[key] - cfg.min) / (cfg.max - cfg.min)) * 100));
    return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between">
        <label className={`text-sm font-medium ${text}`}>{cfg.label}</label>
        <span className={`text-sm font-mono font-bold ${accent}`}>{inputs[key]} {cfg.unit}</span>
      </div>
      <input
        type="range" min={cfg.min} max={cfg.max} step={cfg.step || 0.5} value={inputs[key]}
        onChange={(e) => set(key, Number(e.target.value))}
        className={sliderCls} style={sliderBg(secPct)}
      />
      <div className="flex justify-between">
        <span className={`text-[10px] ${sub}`}>{cfg.min} {cfg.unit}</span>
        <span className={`text-[10px] ${sub}`}>{cfg.max} {cfg.unit}</span>
      </div>
      {cfg.note && <p className={`text-[11px] ${sub}`}>{cfg.note}</p>}
    </div>
  );
  };

  const renderSecInput = (key, cfg) => {
    switch (cfg.type) {
      case 'buttongroup': return SecButtonGroup(key, cfg);
      case 'slider':      return SecSlider(key, cfg);
      default:            return null;
    }
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className={`rounded-3xl border ${border} overflow-hidden shadow-2xl`}>

      {/* ── Certification Banner ─────────────────────────────────────────── */}
      <div className={`px-6 py-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs ${
        isDark ? 'bg-blue-950/30 border-b border-blue-900/50' : 'bg-blue-50 border-b border-blue-100'
      }`}>
        <ShieldCheck className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
        <span className="font-bold uppercase tracking-wider text-blue-500">SGS Certified</span>
        <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
        <span className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>9H+ Hardness</span>
        <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
        <span className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>3-4+ yr Durability</span>
        <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
        <span className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>{inputs.washReductionPct || 60}% Wash Reduction</span>
        <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
        <span className="font-bold text-green-600">
          All-in: +{fmtRaw(results.fullSavingsPerVehicle || 0)}/vehicle
        </span>
        <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
        <span className={`font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          Direct: +{fmtRaw(results.directSavingsPerVehicle || 0)}/vehicle
        </span>
      </div>

      {/* ── Shared Inputs ─────────────────────────────────────────────────── */}
      <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-7 border-b ${border} ${bg}`}>
        <LogSlider />
        <CompetitorSlider />
        <WashCostSlider />
        <WashReductionSlider />
      </div>

      {/* ── Main Grid ─────────────────────────────────────────────────────── */}
      <div className={`grid grid-cols-1 lg:grid-cols-12 ${bg}`}>

        {/* ── LEFT: Per-vehicle annual cost breakdown ───────────────────── */}
        <div className={`lg:col-span-5 p-8 border-b lg:border-b-0 lg:border-r ${border} flex flex-col gap-6`}>
          <p className={`text-xs font-bold uppercase tracking-wider ${sub}`}>Per-Vehicle Annual Cost Breakdown</p>

          <div className="space-y-2">
            {/* Competitor card */}
            <div className={`rounded-xl p-4 border ${isDark ? 'border-red-800/30 bg-red-900/10' : 'border-red-100 bg-red-50'}`}>
              <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">Competitor (annual effective cost)</p>
              <p className="text-2xl font-display font-medium text-red-600">
                {fmtRaw(results.competitorAnnualEffective || 0)}
                <span className="text-sm font-normal text-red-400 ml-1">/vehicle/yr</span>
              </p>
              <div className="space-y-0.5 mt-2">
                {[
                  [`Coating (${fmtRaw(inputs.competitorCost || 15000)} / ${inputs.competitorDurability || 1.5} yr)`, results.competitorCostAmortized],
                  ['Washing (full frequency)', inputs.annualWashCostPerVehicle],
                  ['Paint correction (amortised)', results.paintCorrectionPerYear]
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between text-xs">
                    <span className="text-red-400">{label}</span>
                    <span className="font-mono text-red-500">{fmtRaw(val || 0)}</span>
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

            {/* Ceraphene card */}
            <div className={`rounded-xl p-4 border-2 ${isDark ? 'border-blue-700 bg-blue-900/10' : 'border-blue-300 bg-blue-50'}`}>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Ceraphene (annual effective cost)</p>
              <p className="text-2xl font-display font-medium text-blue-700">
                {fmtRaw(results.cerapheneAnnualEffective || 0)}
                <span className="text-sm font-normal text-blue-400 ml-1">/vehicle/yr</span>
              </p>
              <div className="space-y-0.5 mt-2">
                {[
                  [`Coating (₹${(results.ceraphenePrice || 5000).toLocaleString()} / ${inputs.cerapheneDurability || 3.5} yr)`, results.cerapheneCoatAmortized],
                  [`Washing (−${inputs.washReductionPct || 60}%)`, results.annualWashWithCoating],
                  ['Paint correction', 0]
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between text-xs">
                    <span className="text-blue-400">{label}</span>
                    <span className="font-mono text-blue-500">{val === 0 ? '—' : fmtRaw(val)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Annual saving row */}
            <div className={`rounded-xl px-4 py-3 border-2 ${isDark ? 'border-green-700 bg-green-900/10' : 'border-green-300 bg-green-50'} flex items-center justify-between`}>
              <p className="text-xs font-bold uppercase tracking-widest text-green-600">Annual saving per vehicle</p>
              <p className="text-xl font-display font-medium text-green-700">
                {fmtRaw(results.annualSavingsPerVehicle || 0)}
                <span className="text-sm font-normal text-green-500 ml-0.5">/yr</span>
              </p>
            </div>
          </div>

          {/* ── Ceraphene Application Box ─────────────────────────────────── */}
          <div className={`rounded-xl border-2 overflow-hidden ${isDark ? 'border-blue-800 bg-blue-950/20' : 'border-blue-200 bg-white'}`}>
            {/* Header */}
            <div className={`px-4 py-2 flex items-center justify-between ${isDark ? 'bg-blue-900/40 border-b border-blue-800/50' : 'bg-blue-50 border-b border-blue-100'}`}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Ceraphene Application</p>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${isDark ? 'bg-blue-800/70 text-blue-300' : 'bg-blue-200 text-blue-700'}`}>
                {results.productMlPerVehicle || 35} ml / vehicle
              </span>
            </div>
            {/* Two columns: Volume Needed | Cost Split */}
            <div className={`grid grid-cols-2 divide-x ${isDark ? 'divide-blue-800/40' : 'divide-blue-100'}`}>
              <div className="p-4">
                <p className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-blue-400' : 'text-blue-500'}`}>Volume Needed</p>
                <p className={`text-2xl font-display font-bold tabular-nums leading-none ${isDark ? 'text-blue-200' : 'text-blue-800'}`}>
                  {(results.productMlTotal || 0).toLocaleString('en-IN')}
                  <span className={`text-sm font-normal ml-1 ${isDark ? 'text-blue-400' : 'text-blue-500'}`}>ml</span>
                </p>
                <p className={`text-[10px] mt-1.5 font-mono ${isDark ? 'text-blue-500' : 'text-blue-400'}`}>
                  {results.productMlPerVehicle || 35} ml × {(inputs.vehicleCount || 1).toLocaleString()} vehicles
                </p>
              </div>
              <div className="p-4">
                <p className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-blue-400' : 'text-blue-500'}`}>Additive Cost</p>
                <p className={`text-2xl font-display font-bold tabular-nums leading-none ${isDark ? 'text-blue-200' : 'text-blue-800'}`}>
                  {fmt(results.cerapheneProductCostTotal || 0)}
                </p>
                <p className={`text-[10px] mt-1.5 font-mono ${isDark ? 'text-blue-500' : 'text-blue-400'}`}>
                  ₹{(results.cerapheneProductCostPerVehicle || 2500).toLocaleString()}/vehicle × {(inputs.vehicleCount || 1).toLocaleString()}
                </p>
                <div className={`flex items-center justify-between mt-2 pt-1.5 border-t ${isDark ? 'border-blue-800/40' : 'border-blue-100'}`}>
                  <span className={`text-[10px] ${isDark ? 'text-blue-500' : 'text-blue-400'}`}>+ Installation</span>
                  <span className={`text-[10px] font-mono font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{fmt(results.cerapheneServiceCostTotal || 0)}</span>
                </div>
              </div>
            </div>
            {/* Footer */}
            <div className={`px-4 py-2 ${isDark ? 'bg-blue-900/20 border-t border-blue-800/30' : 'bg-blue-50/80 border-t border-blue-100'}`}>
              <p className={`text-[10px] ${isDark ? 'text-blue-500' : 'text-blue-400'}`}>
                Total: ₹{(results.ceraphenePrice || 5000).toLocaleString()}/vehicle · vs. ₹{(inputs.competitorCost || 15000).toLocaleString()} competitor · {results.directSavingsPct}% cheaper
              </p>
            </div>
          </div>

          {/* Project Totals */}
          <div className={`rounded-xl border ${border} ${isDark ? 'bg-neutral-800/30' : 'bg-neutral-50'} p-5 mt-auto`}>
            <p className={`text-xs font-bold uppercase tracking-wider ${sub} mb-4`}>
              Project Total · {(inputs.vehicleCount || 0).toLocaleString()} vehicles
            </p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className={`text-sm ${sub}`}>Ceraphene investment</span>
                <span className={`text-sm font-mono font-semibold ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {fmt(results.investmentTotal || 0)}
                </span>
              </div>
              <div className={`pt-2 border-t ${border} space-y-1.5`}>
                <div className="flex justify-between items-center">
                  <span className={`text-xs ${sub}`}>Direct savings <span className="opacity-60">(upfront)</span></span>
                  <span className={`text-sm font-mono font-semibold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    +{fmt(results.directSavingsTotal || 0)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-bold ${text}`}>
                    Full savings over {inputs.analysisPeriod || 4} yr
                  </span>
                  <span className={`text-xl font-bold font-mono ${isDark ? 'text-green-400' : 'text-green-700'}`}>
                    +{fmt(results.fullSavingsTotal || 0)}
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
              Annual effective cost per vehicle — comparison
            </p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 20, right: 8, bottom: 0, left: -10 }} barSize={52}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#2a2a2a' : '#f1f5f9'} vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 10, fill: isDark ? '#9ca3af' : '#64748b' }} tickLine={false} axisLine={false} />
                  <YAxis
                    domain={barDomain}
                    tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`}
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
              Gap between blue bar and red bar = annual saving per vehicle (₹{(results.annualSavingsPerVehicle || 0).toLocaleString('en-IN')}/yr)
            </p>
          </div>

          {/* ── Two headline cards ────────────────────────────────────── */}
          <div className="grid grid-cols-2 gap-4">

            {/* Card 1: Full ownership savings (ALL-IN) */}
            <div className={`p-5 rounded-2xl border-2 ${isDark ? 'border-blue-700 bg-blue-900/10' : 'border-blue-300 bg-blue-50'}`}>
              <div className="flex items-start justify-between mb-2">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  {results.fullLabel || 'Full Ownership Savings'}
                </p>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${isDark ? 'bg-neutral-700 text-neutral-300' : 'bg-neutral-900 text-white'}`}>
                  ALL-IN
                </span>
              </div>
              <p className="text-3xl font-display font-medium tabular-nums text-blue-700">
                {fmt(results.fullSavingsTotal || 0)}
              </p>
              <p className="text-xs mt-1.5 text-blue-600">
                {fmtRaw(results.fullSavingsPerVehicle || 0)}/vehicle · coating + wash + correction saved
              </p>
            </div>

            {/* Card 2: Direct savings (BROCHURE) */}
            <div className={`p-5 rounded-2xl border ${isDark ? 'border-slate-700 bg-slate-800/30' : 'border-slate-200 bg-slate-50'}`}>
              <div className="flex items-start justify-between mb-2">
                <p className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {results.directLabel || 'Direct Savings'}
                </p>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-600'}`}>
                  BROCHURE
                </span>
              </div>
              <p className={`text-3xl font-display font-medium tabular-nums ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                {fmt(results.directSavingsTotal || 0)}
              </p>
              <p className={`text-xs mt-1.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                {fmtRaw(results.directSavingsPerVehicle || 0)}/vehicle · upfront price difference only
              </p>
              <p className="text-[10px] font-semibold text-blue-500 mt-2">
                ✦ {results.directSavingsPct}% cheaper than competitor per application
              </p>
            </div>
          </div>

          {/* ROI + Payback */}
          <div className="grid grid-cols-2 gap-3">
            <div className={`p-4 rounded-xl border ${border} ${isDark ? 'bg-neutral-800/50' : 'bg-white'} flex items-center gap-4`}>
              <TrendingUp className="w-5 h-5 text-blue-500 flex-shrink-0" />
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-wider ${sub}`}>ROI on Investment</p>
                <p className={`text-2xl font-display font-medium tabular-nums ${text}`}>
                  {results.roiPercentage != null ? `${results.roiPercentage}%` : '—'}
                </p>
              </div>
            </div>
            <div className={`p-4 rounded-xl border ${border} ${isDark ? 'bg-neutral-800/50' : 'bg-white'} flex items-center gap-4`}>
              <Zap className="w-5 h-5 text-green-500 flex-shrink-0" />
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-wider ${sub}`}>Payback</p>
                <p className="text-base font-display font-medium text-green-600">
                  {results.paybackLabel || '—'}
                </p>
              </div>
            </div>
          </div>

          {/* Investment / Wash saved / Water saved */}
          <div className="grid grid-cols-3 gap-3">
            <div className={`p-3.5 rounded-xl border ${border} ${isDark ? 'bg-neutral-800/30' : 'bg-white'} text-center`}>
              <p className={`text-[10px] font-bold uppercase tracking-wider ${sub} mb-1`}>Investment</p>
              <p className={`text-sm font-bold tabular-nums ${text}`}>{fmt(results.investmentTotal || 0)}</p>
              <p className={`text-[10px] ${sub}`}>₹{(results.ceraphenePrice || 5000).toLocaleString()} × {(inputs.vehicleCount || 1).toLocaleString()}</p>
            </div>
            <div className={`p-3.5 rounded-xl border border-blue-500/25 ${isDark ? 'bg-blue-900/10' : 'bg-blue-50'} text-center`}>
              <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600/70 mb-1">Washes Saved</p>
              <p className="text-sm font-bold text-blue-600 tabular-nums">
                {(results.annualWashesSaved || 0).toLocaleString()}
                <span className="text-[10px] font-normal ml-0.5">/vehicle/yr</span>
              </p>
              <p className="text-[10px] text-blue-500/60">{results.annualWashesWith || 0} remaining</p>
            </div>
            <div className={`p-3.5 rounded-xl border border-teal-500/25 ${isDark ? 'bg-teal-900/10' : 'bg-teal-50'} text-center`}>
              <p className="text-[10px] font-bold uppercase tracking-wider text-teal-600/70 mb-1">Water Saved</p>
              <p className="text-sm font-bold text-teal-600 tabular-nums">
                {((results.waterSavedTotal || 0) / 1000).toFixed(1)}
                <span className="text-[10px] font-normal ml-0.5">kL/yr</span>
              </p>
            </div>
          </div>

          {/* Projection chart */}
          <div className={`flex-grow border ${border} rounded-2xl ${isDark ? 'bg-neutral-800/50' : 'bg-white'} p-5`}>
            <p className={`text-xs font-bold uppercase tracking-widest ${sub} mb-3`}>
              Cumulative Savings — {inputs.analysisPeriod || 4}-Year Outlook
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
                      labelFormatter={(yr) => yr === 0 ? 'At purchase (immediate)' : `Year ${yr}`}
                    />
                    <Line type="monotone" dataKey="cumulative" stroke="#3b82f6" strokeWidth={2.5} dot={{ fill: '#3b82f6', r: 3, strokeWidth: 0 }} activeDot={{ r: 5, strokeWidth: 0 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
            <p className={`text-[10px] ${sub} mt-2`}>
              Yr 0 = immediate upfront savings at purchase. Annual wash + durability savings accumulate each year.
            </p>
          </div>

          {/* Disclaimer */}
          <p className={`text-[10px] leading-relaxed flex items-start gap-1.5 ${sub}`}>
            <Info className="w-3 h-3 flex-shrink-0 mt-0.5 opacity-60" />
            Competitor durability is an estimate — validate with your supplier. Paint correction savings assume periodic professional correction for uncoated vehicles. Wash cost and frequency vary by usage.
          </p>
        </div>
      </div>

      {/* ── Lifecycle Accordion ──────────────────────────────────────────── */}
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
                    <p className={`text-xs font-bold uppercase tracking-wider ${sub}`}>Durability & Period Settings</p>
                    {Object.entries(secCfg).map(([key, cfg]) => {
                      const node = renderSecInput(key, cfg);
                      return node ? <div key={key}>{node}</div> : null;
                    })}
                  </div>
                  <div className="space-y-3">
                    <p className={`text-xs font-bold uppercase tracking-wider ${sub}`}>Fleet Impact Summary</p>
                    {[
                      { label: 'Washes eliminated (per vehicle/yr)', value: `${results.annualWashesSaved || 0} washes`, color: 'text-blue-600' },
                      { label: 'Water saved (per vehicle/yr)',        value: `${(results.waterSavedLitresPerVehicle || 0).toLocaleString()} L`, color: 'text-teal-600' },
                      { label: 'Paint correction eliminated',         value: `₹${(results.paintCorrectionPerYear || 0).toLocaleString()}/vehicle/yr`, color: 'text-green-600' },
                      { label: 'Hardness rating',                     value: '9H+ (SGS Certified)', color: 'text-blue-500' }
                    ].map(({ label, value, color }) => (
                      <div key={label} className={`flex items-center justify-between px-4 py-3 rounded-xl border ${border} ${isDark ? 'bg-neutral-800/30' : 'bg-white'}`}>
                        <span className={`text-sm ${text}`}>{label}</span>
                        <span className={`text-sm font-semibold font-mono ${color}`}>{value}</span>
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

export default CerapheneROICalculator;
