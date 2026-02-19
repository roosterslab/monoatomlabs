import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine, Cell, LabelList
} from 'recharts';
import { Sun, TrendingUp, ChevronDown, Zap, Info, Leaf, RefreshCw, CheckCircle } from 'lucide-react';

// ── Logarithmic scale helpers (1–10,000 kW) ──────────────────────────────────
const posToSize = (pos) => {
  const raw = Math.pow(10, (Number(pos) / 100) * 4);
  if (raw < 10)   return Math.max(1, Math.round(raw));
  if (raw < 100)  return Math.round(raw / 5) * 5;
  if (raw < 1000) return Math.round(raw / 50) * 50;
  return Math.round(raw / 500) * 500;
};
const sizeToPos = (sz) =>
  Math.round((Math.log10(Math.max(1, Math.min(10000, sz))) / 4) * 100);

const SYSTEM_TICKS = [
  { v: 1,     num: '1',   label: ['Home',       'panels']  },
  { v: 10,    num: '10',  label: ['Rooftop',    'home']    },
  { v: 100,   num: '100', label: ['Commercial', 'roof']    },
  { v: 1000,  num: '1k',  label: ['Large',      'plant']   },
  { v: 10000, num: '10k', label: ['Utility',    'scale']   }
];

const getSystemContext = (kw) => {
  if (kw <= 5)    return 'Small residential panel set';
  if (kw <= 20)   return 'Residential rooftop system';
  if (kw <= 100)  return 'Commercial rooftop installation';
  if (kw <= 500)  return 'Industrial or large commercial plant';
  if (kw <= 5000) return 'Utility-scale solar farm';
  return 'Large-scale utility solar project (10+ MW)';
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

const fmtKwh = (val) => {
  const abs = Math.abs(val ?? 0);
  if (abs >= 1000000) return `${(abs / 1000000).toFixed(2)} GWh`;
  if (abs >= 1000)    return `${(abs / 1000).toFixed(0)} MWh`;
  return `${Math.round(abs).toLocaleString()} kWh`;
};

// ── Bar tooltip ───────────────────────────────────────────────────────────────
const BarTip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-3 shadow-lg text-sm">
      <p className="font-bold text-neutral-800 mb-0.5">{label}</p>
      <p className="text-neutral-600">₹{payload[0].value?.toLocaleString('en-IN')}/kW/yr</p>
    </div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
const GraffisolROICalculator = ({
  calculations,
  defaultInputs,
  secondaryInputs: secCfg,
  theme = 'light'
}) => {
  const isDark = theme === 'dark';

  const sliderBg = (pct) => ({
    background: `linear-gradient(to right, #eab308 ${pct.toFixed(1)}%, ${isDark ? '#374151' : '#e5e7eb'} ${pct.toFixed(1)}%)`
  });
  const sliderCls = 'w-full h-2 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-yellow-500 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-yellow-500 [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-pointer';

  const allCfg = { ...defaultInputs, ...(secCfg || {}) };
  const init = Object.keys(allCfg).reduce((acc, key) => {
    const c = allCfg[key];
    acc[key] = c.default !== undefined ? c.default : (c.min != null ? (c.min + c.max) / 2 : c.options?.[0]?.value);
    return acc;
  }, {});

  const [inputs, setInputs]             = useState(init);
  const [sizeText, setSizeText]         = useState(String(init.systemSize || 100));
  const [showSecondary, setShowSecondary] = useState(false);

  const set = (key, val) => setInputs(prev => ({ ...prev, [key]: val }));
  const results = useMemo(() => calculations(inputs), [inputs, calculations]);

  const resetInputs = () => {
    setInputs(init);
    setSizeText(String(init.systemSize || 100));
  };

  // Theme tokens — identical pattern to Graphacrete ROICalculator
  const bg       = isDark ? 'bg-neutral-900'    : 'bg-white';
  const bgSub    = isDark ? 'bg-neutral-950/40' : 'bg-neutral-50/60';
  const border   = isDark ? 'border-neutral-700': 'border-neutral-200';
  const text     = isDark ? 'text-white'        : 'text-neutral-900';
  const sub      = isDark ? 'text-neutral-400'  : 'text-neutral-500';
  const accent   = isDark ? 'text-yellow-400'   : 'text-yellow-600';
  const inputCls = `w-full border ${border} rounded-lg px-3 py-2.5 text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-500/40 ${isDark ? 'bg-neutral-800 text-white' : 'bg-white text-neutral-900'}`;

  // Bar chart: baseline rev/kW/yr | +power-boost | +full-return
  const barData = useMemo(() => {
    const base = results.baselineRevenuePerKw || 0;
    return [
      { name: 'Baseline',     rev: base,                                      fill: '#94a3b8' },
      { name: 'Power Boost',  rev: base + (results.powerBoostRevenuePerKw || 0), fill: '#22c55e' },
      { name: 'Full Return',  rev: base + (results.fullReturnPerKw || 0),       fill: '#f59e0b' }
    ];
  }, [results]);

  const barDomain = useMemo(() => {
    if (!barData.length) return [0, 20000];
    const vals = barData.map(d => d.rev);
    return [
      Math.floor(Math.min(...vals) * 0.85 / 1000) * 1000,
      Math.ceil(Math.max(...vals)  * 1.08 / 1000) * 1000
    ];
  }, [barData]);

  // Projection: Year 0 = −investment; Year N = −investment + fullReturnTotal × N
  const projData = useMemo(() => {
    if (!results.applicationCostTotal) return [];
    return Array.from({ length: (results.analysisPeriod || 20) + 1 }, (_, yr) => ({
      year: yr,
      cumulative: Math.round(-(results.applicationCostTotal || 0) + (results.fullReturnTotal || 0) * yr)
    }));
  }, [results]);

  // ── Sub-component: Log Slider ─────────────────────────────────────────────
  const LogSlider = () => {
    const sz = inputs.systemSize || 1;
    return (
      <div className="space-y-2.5">
        <div className="flex items-baseline justify-between">
          <span className={`text-xs font-bold uppercase tracking-wider ${text}`}>System Size</span>
          <div className="flex items-center gap-1.5">
            <input
              type="number" value={sizeText} min={1} max={10000}
              onChange={(e) => {
                setSizeText(e.target.value);
                const v = parseInt(e.target.value, 10);
                if (!isNaN(v) && v >= 1 && v <= 10000) set('systemSize', v);
              }}
              onBlur={() => setSizeText(String(sz))}
              className={`w-20 text-right text-sm font-mono border ${border} rounded px-2 py-1 ${isDark ? 'bg-neutral-800 text-white' : 'bg-white text-neutral-900'} focus:outline-none focus:ring-1 focus:ring-yellow-500`}
            />
            <span className={`text-sm font-medium ${text}`}>kW</span>
          </div>
        </div>
        <input
          type="range" min={0} max={100}
          value={sizeToPos(sz)}
          onChange={(e) => {
            const v = posToSize(e.target.value);
            set('systemSize', v);
            setSizeText(String(v));
          }}
          className={sliderCls} style={sliderBg(sizeToPos(sz))}
        />
        <div className="flex justify-between">
          {SYSTEM_TICKS.map(({ v, num, label }) => (
            <div key={v} className="flex flex-col items-center gap-0.5 w-10">
              <span className={`text-[10px] font-semibold ${text}`}>{num}</span>
              {label.map((l, i) => (
                <span key={i} className={`text-[9px] ${sub} text-center leading-tight`}>{l}</span>
              ))}
            </div>
          ))}
        </div>
        <p className={`text-[11px] italic ${sub}`}>≈ {getSystemContext(sz)}</p>
      </div>
    );
  };

  const RateSlider = () => {
    const cfg = defaultInputs.electricityRate;
    const val = inputs.electricityRate;
    return (
      <div className="space-y-2">
        <div className="flex items-baseline justify-between">
          <span className={`text-xs font-bold uppercase tracking-wider ${text}`}>Electricity Rate</span>
          <span className={`text-sm font-mono font-bold ${accent}`}>₹{val}/kWh</span>
        </div>
        <input
          type="range" min={cfg.min} max={cfg.max} step={cfg.step || 0.5} value={val}
          onChange={(e) => set('electricityRate', Number(e.target.value))}
          className={sliderCls} style={sliderBg(Math.max(0, Math.min(100, ((val - cfg.min) / (cfg.max - cfg.min)) * 100)))}
        />
        <div className="flex justify-between">
          <span className={`text-[10px] ${sub}`}>₹{cfg.min}</span>
          <span className={`text-[10px] ${sub}`}>avg ₹7</span>
          <span className={`text-[10px] ${sub}`}>₹{cfg.max}</span>
        </div>
      </div>
    );
  };

  const AppCostSlider = () => {
    const cfg = defaultInputs.applicationCostPerKw;
    const val = inputs.applicationCostPerKw;
    return (
      <div className="space-y-2">
        <div className="flex items-baseline justify-between">
          <span className={`text-xs font-bold uppercase tracking-wider ${text}`}>Application Cost</span>
          <span className={`text-sm font-mono font-bold ${accent}`}>₹{(val || 0).toLocaleString()}/kW</span>
        </div>
        <input
          type="range" min={cfg.min} max={cfg.max} step={cfg.step || 100} value={val}
          onChange={(e) => set('applicationCostPerKw', Number(e.target.value))}
          className={sliderCls} style={sliderBg(Math.max(0, Math.min(100, ((val - cfg.min) / (cfg.max - cfg.min)) * 100)))}
        />
        <div className="flex justify-between">
          <span className={`text-[10px] ${sub}`}>₹{(cfg.min || 0).toLocaleString()}</span>
          <span className={`text-[10px] ${sub}`}>₹{(cfg.max || 0).toLocaleString()}</span>
        </div>
      </div>
    );
  };

  const GainSlider = () => {
    const cfg = defaultInputs.outputGainPct;
    const val = inputs.outputGainPct;
    return (
      <div className="space-y-2">
        <div className="flex items-baseline justify-between">
          <span className={`text-xs font-bold uppercase tracking-wider ${text}`}>Output Gain</span>
          <span className={`text-sm font-mono font-bold ${accent}`}>{val}%</span>
        </div>
        <input
          type="range" min={cfg.min} max={cfg.max} step={1} value={val}
          onChange={(e) => set('outputGainPct', Number(e.target.value))}
          className={sliderCls} style={sliderBg(Math.max(0, Math.min(100, ((val - cfg.min) / (cfg.max - cfg.min)) * 100)))}
        />
        <div className="flex justify-between">
          <span className={`text-[10px] ${sub}`}>{cfg.min}% conservative</span>
          <span className={`text-[10px] ${sub}`}>{cfg.max}% optimistic</span>
        </div>
        <p className={`text-[11px] ${sub}`}>Field-validated range: 7–12%</p>
        {results.powerBoostRevenuePerKw != null && (
          <p className="text-[11px] font-semibold text-yellow-600">
            → +₹{(results.powerBoostRevenuePerKw || 0).toLocaleString('en-IN')}/kW/yr power boost · ₹{(results.powerOnlySavingsTotal || 0) >= 1000 ? `${Math.round((results.powerOnlySavingsTotal || 0) / 1000)}k` : (results.powerOnlySavingsTotal || 0).toLocaleString('en-IN')} project annual
          </p>
        )}
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

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className={`rounded-3xl border ${border} overflow-hidden shadow-2xl`}>

      {/* ── Performance Banner ───────────────────────────────────────────── */}
      <div className={`px-6 py-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs ${
        isDark ? 'bg-yellow-950/30 border-b border-yellow-900/50' : 'bg-yellow-50 border-b border-yellow-100'
      }`}>
        <Sun className="w-3.5 h-3.5 text-yellow-500 flex-shrink-0" />
        <span className="font-bold uppercase tracking-wider text-yellow-500">Field Validated</span>
        <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
        <span className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>Power: +{inputs.outputGainPct || 10}%</span>
        <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
        <span className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>Soiling: −{results.soilingRecoveryPct || 35}%</span>
        <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
        <span className={isDark ? 'text-neutral-300' : 'text-neutral-600'}>Temp: −{results.temperatureReductionC || '5-6'}°C</span>
        <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
        <span className="font-bold text-green-600">
          All-in: +{fmtRaw(results.fullReturnPerKw || 0)}/kW/yr
        </span>
        <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
        <span className={`font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          Power-only: +{fmtRaw(results.powerOnlySavingsPerKw || 0)}/kW/yr
        </span>
      </div>

      {/* ── Shared Inputs — 4 columns ────────────────────────────────────── */}
      <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-7 border-b ${border} ${bg}`}>
        <LogSlider />
        <RateSlider />
        <AppCostSlider />
        <GainSlider />
      </div>

      {/* ── Verified Formulas + Reset bar ───────────────────────────────── */}
      <div className={`px-8 py-2.5 flex items-center justify-between border-b ${border} ${
        isDark ? 'bg-neutral-900/80' : 'bg-yellow-50/60'
      }`}>
        <div className="flex items-center gap-2.5 flex-wrap text-[10px]">
          <CheckCircle className={`w-3 h-3 flex-shrink-0 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} />
          <span className={`font-bold uppercase tracking-wider ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>Verified Assumptions</span>
          <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
          <span className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>1,500 kWh/kW/yr baseline</span>
          <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
          <span className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>35% soiling recovery</span>
          <span className={isDark ? 'text-neutral-600' : 'text-neutral-300'}>·</span>
          <span className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>CEA 2023 CO₂ factor</span>
        </div>
        <button
          onClick={resetInputs}
          className={`flex items-center gap-1.5 text-[10px] font-semibold px-3 py-1.5 rounded-lg border transition-colors flex-shrink-0 ${
            isDark
              ? 'text-neutral-400 border-neutral-700 hover:bg-neutral-800 hover:text-neutral-200'
              : 'text-neutral-500 border-neutral-200 hover:bg-white hover:text-neutral-700'
          }`}
        >
          <RefreshCw className="w-3 h-3" />
          Reset
        </button>
      </div>

      {/* ── Main Grid ────────────────────────────────────────────────────── */}
      <div className={`grid grid-cols-1 lg:grid-cols-12 ${bg}`}>

        {/* ── LEFT: Per-kW Annual Revenue Breakdown ────────────────────── */}
        <div className={`lg:col-span-5 p-8 border-b lg:border-b-0 lg:border-r ${border} flex flex-col gap-6`}>
          <p className={`text-xs font-bold uppercase tracking-wider ${sub}`}>Per-kW Annual Revenue Breakdown</p>

          <div className="space-y-2">
            {/* Baseline */}
            <div className={`rounded-xl p-4 border ${border} ${isDark ? 'bg-neutral-800/50' : 'bg-neutral-50'}`}>
              <p className={`text-xs font-bold uppercase tracking-widest ${sub} mb-1`}>
                Baseline annual revenue
              </p>
              <p className={`text-2xl font-display font-medium ${text}`}>
                {fmtRaw(results.baselineRevenuePerKw || 0)}
                <span className={`text-sm font-normal ${sub} ml-1`}>/kW/yr</span>
              </p>
              <p className={`text-[10px] ${sub} mt-0.5`}>{(results.baselineGenPerKw || 1500).toLocaleString()} kWh/kW/yr × ₹{inputs.electricityRate || 7}/kWh</p>
            </div>

            {/* Graffisol additions */}
            <div className={`rounded-xl p-3.5 border ${isDark ? 'border-yellow-800/40 bg-yellow-900/10' : 'border-yellow-100 bg-yellow-50'}`}>
              <p className="text-xs font-bold uppercase tracking-widest text-yellow-600 mb-2">+ Graffisol gains</p>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className={isDark ? 'text-yellow-400' : 'text-yellow-700'}>
                    Power boost ({inputs.outputGainPct || 10}%)
                  </span>
                  <span className="font-mono text-yellow-600">+{fmtRaw(results.powerBoostRevenuePerKw || 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-600">Soiling recovery (35%)</span>
                  <span className="font-mono text-green-600">+{fmtRaw(results.soilingRevenuePerKw || 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-teal-600">Maintenance saved</span>
                  <span className="font-mono text-teal-600">+{fmtRaw(results.maintenancePerKw || 0)}</span>
                </div>
                <div className={`flex justify-between pt-1 border-t ${isDark ? 'border-yellow-700/30' : 'border-yellow-200/60'}`}>
                  <span className="font-bold text-yellow-700">Net gain/kW/yr</span>
                  <span className="font-bold font-mono text-yellow-700">+{fmtRaw(results.fullReturnPerKw || 0)}</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-2 px-1">
              <div className={`flex-1 h-px ${isDark ? 'bg-neutral-700' : 'bg-neutral-200'}`} />
              <span className={`text-[10px] uppercase font-bold ${sub}`}>equals</span>
              <div className={`flex-1 h-px ${isDark ? 'bg-neutral-700' : 'bg-neutral-200'}`} />
            </div>

            {/* Total with Graffisol */}
            <div className={`rounded-xl p-4 border-2 ${isDark ? 'border-yellow-700 bg-yellow-900/10' : 'border-yellow-300 bg-yellow-50'}`}>
              <p className="text-xs font-bold uppercase tracking-widest text-yellow-600">
                Annual revenue with Graffisol
              </p>
              <p className="text-2xl font-display font-medium text-yellow-700 mt-1">
                {fmtRaw((results.baselineRevenuePerKw || 0) + (results.fullReturnPerKw || 0))}
                <span className="text-sm font-normal text-yellow-500 ml-1">/kW/yr</span>
              </p>
            </div>

            {/* ── Graffisol Application Box ─────────────────────────────────── */}
            <div className={`rounded-xl border-2 overflow-hidden ${isDark ? 'border-yellow-800 bg-yellow-950/20' : 'border-yellow-200 bg-white'}`}>
              {/* Header */}
              <div className={`px-4 py-2 flex items-center justify-between ${isDark ? 'bg-yellow-900/40 border-b border-yellow-800/50' : 'bg-yellow-50 border-b border-yellow-100'}`}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-600">Graffisol Application</p>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${isDark ? 'bg-yellow-800/70 text-yellow-300' : 'bg-yellow-200 text-yellow-700'}`}>
                  {results.applicationRateMlM2 || 65} ml/m²
                </span>
              </div>
              {/* Two columns: Volume Needed | Cost Split */}
              <div className={`grid grid-cols-2 divide-x ${isDark ? 'divide-yellow-800/40' : 'divide-yellow-100'}`}>
                <div className="p-4">
                  <p className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>Volume Needed</p>
                  <p className={`text-2xl font-display font-bold tabular-nums leading-none ${isDark ? 'text-yellow-200' : 'text-yellow-800'}`}>
                    {results.productLitresTotal || 0}
                    <span className={`text-sm font-normal ml-1 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`}>L</span>
                  </p>
                  <p className={`text-[10px] mt-1.5 font-mono ${isDark ? 'text-yellow-500' : 'text-yellow-500'}`}>
                    {results.applicationRateMlM2 || 65} ml × {(inputs.systemSize || 0).toLocaleString()} kW × {results.panelAreaM2PerKw || 5.3} m²/kW
                  </p>
                </div>
                <div className="p-4">
                  <p className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>Additive Cost</p>
                  <p className={`text-2xl font-display font-bold tabular-nums leading-none ${isDark ? 'text-yellow-200' : 'text-yellow-800'}`}>
                    {fmt(results.additiveCostTotal || 0)}
                  </p>
                  <p className={`text-[10px] mt-1.5 font-mono ${isDark ? 'text-yellow-500' : 'text-yellow-500'}`}>
                    ₹{(results.graffisolProductPricePerLitre || 2500).toLocaleString('en-IN')}/L × {results.productLitresTotal || 0} L
                  </p>
                  <div className={`flex items-center justify-between mt-2 pt-1.5 border-t ${isDark ? 'border-yellow-800/40' : 'border-yellow-100'}`}>
                    <span className={`text-[10px] ${isDark ? 'text-yellow-500' : 'text-yellow-500'}`}>+ Installation</span>
                    <span className={`text-[10px] font-mono font-semibold ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>{fmt(results.serviceCostTotal || 0)}</span>
                  </div>
                </div>
              </div>
              {/* Footer */}
              <div className={`px-4 py-2 ${isDark ? 'bg-yellow-900/20 border-t border-yellow-800/30' : 'bg-yellow-50/80 border-t border-yellow-100'}`}>
                <p className={`text-[10px] ${isDark ? 'text-yellow-500' : 'text-yellow-500'}`}>
                  Total: {fmt(results.applicationCostTotal || 0)} · Annual return: {fmt(results.fullReturnTotal || 0)}/yr · Payback: {results.paybackLabel || '—'} · ROI: {results.roiPercentage != null ? `${results.roiPercentage}%` : '—'}
                </p>
              </div>
            </div>
          </div>

          {/* Project Totals */}
          <div className={`rounded-xl border ${border} ${isDark ? 'bg-neutral-800/30' : 'bg-neutral-50'} p-5 mt-auto`}>
            <p className={`text-xs font-bold uppercase tracking-wider ${sub} mb-4`}>
              Project Total · {(inputs.systemSize || 0).toLocaleString()} kW
            </p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className={`text-sm ${sub}`}>Application cost</span>
                <span className={`text-sm font-mono font-semibold ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {fmt(results.applicationCostTotal || 0)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${sub}`}>Annual full return</span>
                <span className="text-sm font-mono font-semibold text-green-600">
                  +{fmt(results.fullReturnTotal || 0)}/yr
                </span>
              </div>
              <div className={`pt-2 border-t ${border} space-y-1.5`}>
                <div className="flex justify-between items-center">
                  <span className={`text-xs ${sub}`}>Power-boost only <span className="opacity-60">(conservative)</span></span>
                  <span className={`text-sm font-mono font-semibold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    +{fmt(results.powerOnlySavingsTotal || 0)}/yr
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-bold ${text}`}>
                    {results.analysisPeriod || 20}-yr net profit
                  </span>
                  <span className={`text-xl font-bold font-mono ${isDark ? 'text-green-400' : 'text-green-700'}`}>
                    {fmt(results.netProfitProjected || 0)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Charts + Metrics ───────────────────────────────────── */}
        <div className={`lg:col-span-7 ${bgSub} p-8 flex flex-col gap-6`}>

          {/* ── At current settings — key numbers snapshot ──────────────── */}
          <div className={`grid grid-cols-4 gap-0 rounded-xl overflow-hidden border ${border}`}>
            {[
              {
                label: 'Payback',
                value: results.paybackLabel || '—',
                color: isDark ? 'text-yellow-400' : 'text-yellow-700',
                bg: isDark ? 'bg-yellow-900/20' : 'bg-yellow-50'
              },
              {
                label: 'Annual Return',
                value: fmt(results.fullReturnTotal || 0),
                color: isDark ? 'text-green-400' : 'text-green-700',
                bg: isDark ? 'bg-green-900/20' : 'bg-green-50'
              },
              {
                label: 'Extra Energy',
                value: fmtKwh(results.totalAdditionalKwh || 0),
                color: isDark ? 'text-yellow-400' : 'text-yellow-700',
                bg: isDark ? 'bg-yellow-900/20' : 'bg-yellow-50'
              },
              {
                label: 'CO₂/yr',
                value: `${results.co2AvoidedTPerYear || 0}t`,
                color: isDark ? 'text-teal-400' : 'text-teal-700',
                bg: isDark ? 'bg-teal-900/20' : 'bg-teal-50'
              }
            ].map(({ label, value, color, bg }, i) => (
              <div key={label} className={`${bg} py-2.5 px-2 text-center ${i < 3 ? `border-r ${border}` : ''}`}>
                <p className={`text-[8px] font-bold uppercase tracking-wider ${sub} mb-0.5`}>{label}</p>
                <p className={`text-[11px] font-bold font-mono leading-tight ${color}`}>{value}</p>
              </div>
            ))}
          </div>

          {/* Bar chart — revenue per kW per year */}
          <div>
            <p className={`text-xs font-bold uppercase tracking-widest ${sub} mb-3`}>
              Annual revenue per kW — method comparison
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
                  <Bar dataKey="rev" radius={[6, 6, 0, 0]}>
                    {barData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
                    <LabelList
                      dataKey="rev" position="top"
                      formatter={(v) => `₹${(v / 1000).toFixed(1)}k`}
                      style={{ fontSize: 10, fontWeight: 700, fill: isDark ? '#e5e7eb' : '#374151' }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className={`text-[11px] text-center mt-1 ${sub}`}>
              Gap between green and amber bar = soiling recovery + maintenance (
              ₹{((results.soilingRevenuePerKw || 0) + (results.maintenancePerKw || 0)).toLocaleString('en-IN')}/kW/yr)
            </p>
          </div>

          {/* ── Two headline cards ────────────────────────────────────── */}
          <div className="grid grid-cols-2 gap-4">

            {/* Card 1: Full Return (primary, ALL-IN) */}
            <div className={`p-5 rounded-2xl border-2 ${isDark ? 'border-yellow-700 bg-yellow-900/10' : 'border-yellow-300 bg-yellow-50'}`}>
              <div className="flex items-start justify-between mb-2">
                <p className="text-xs font-bold uppercase tracking-widest text-yellow-600">
                  {results.fullReturnLabel || 'Full Annual Return'}
                </p>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${isDark ? 'bg-neutral-700 text-neutral-300' : 'bg-neutral-900 text-white'}`}>
                  ALL-IN
                </span>
              </div>
              <p className="text-3xl font-display font-medium tabular-nums text-yellow-700">
                {fmt(results.fullReturnTotal || 0)}
              </p>
              <p className="text-xs mt-1.5 text-yellow-600">
                +{fmtRaw(results.fullReturnPerKw || 0)}/kW/yr · power + soiling + maintenance
              </p>
            </div>

            {/* Card 2: Power-only (conservative, CONSERVATIVE) */}
            <div className={`p-5 rounded-2xl border ${isDark ? 'border-slate-700 bg-slate-800/30' : 'border-slate-200 bg-slate-50'}`}>
              <div className="flex items-start justify-between mb-2">
                <p className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {results.powerOnlyLabel || 'Power Boost'}
                </p>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-200 text-slate-600'}`}>
                  CONSERVATIVE
                </span>
              </div>
              <p className={`text-3xl font-display font-medium tabular-nums ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                {fmt(results.powerOnlySavingsTotal || 0)}
              </p>
              <p className={`text-xs mt-1.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                +{fmtRaw(results.powerOnlySavingsPerKw || 0)}/kW/yr · direct output gain only
              </p>
            </div>
          </div>

          {/* ROI + Payback */}
          <div className="grid grid-cols-2 gap-3">
            <div className={`p-4 rounded-xl border ${border} ${isDark ? 'bg-neutral-800/50' : 'bg-white'} flex items-center gap-4`}>
              <TrendingUp className="w-5 h-5 text-yellow-500 flex-shrink-0" />
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-wider ${sub}`}>Annual ROI</p>
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

          {/* Return Multiple */}
          {results.roiMultiple != null && (
            <div className={`p-4 rounded-xl border ${isDark ? 'border-yellow-700 bg-yellow-900/10' : 'border-yellow-200 bg-yellow-50'} flex items-center gap-4`}>
              <TrendingUp className="w-5 h-5 text-yellow-500 flex-shrink-0" />
              <div className="flex-1">
                <p className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>
                  {results.analysisPeriod || 20}-yr Return Multiple
                </p>
                <p className={`text-2xl font-display font-medium tabular-nums ${isDark ? 'text-yellow-300' : 'text-yellow-700'}`}>
                  {results.roiMultiple}×
                </p>
                <p className={`text-[9px] mt-0.5 ${isDark ? 'text-yellow-500' : 'text-yellow-400'}`}>net profit ÷ application cost</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className={`text-[9px] font-bold uppercase tracking-wider ${sub} mb-0.5`}>{results.analysisPeriod || 20}-yr Profit</p>
                <p className={`text-lg font-bold font-mono ${isDark ? 'text-yellow-300' : 'text-yellow-700'}`}>{fmt(results.netProfitProjected || 0)}</p>
              </div>
            </div>
          )}

          {/* Energy / CO₂ / Investment */}
          <div className="grid grid-cols-3 gap-3">
            <div className={`p-3.5 rounded-xl border ${border} ${isDark ? 'bg-neutral-800/30' : 'bg-white'} text-center`}>
              <p className={`text-[10px] font-bold uppercase tracking-wider ${sub} mb-1`}>Investment</p>
              <p className={`text-sm font-bold tabular-nums ${text}`}>{fmt(results.applicationCostTotal || 0)}</p>
            </div>
            <div className={`p-3.5 rounded-xl border border-yellow-500/25 ${isDark ? 'bg-yellow-900/10' : 'bg-yellow-50'} text-center`}>
              <p className="text-[10px] font-bold uppercase tracking-wider text-yellow-600/70 mb-1">Extra Energy</p>
              <p className="text-sm font-bold text-yellow-600 tabular-nums">
                {fmtKwh(results.totalAdditionalKwh || 0)}
              </p>
              <p className="text-[10px] text-yellow-500/60">per year</p>
            </div>
            <div className={`p-3.5 rounded-xl border border-teal-500/25 ${isDark ? 'bg-teal-900/10' : 'bg-teal-50'} text-center`}>
              <p className="text-[10px] font-bold uppercase tracking-wider text-teal-600/70 mb-1">CO₂ Avoided</p>
              <p className="text-sm font-bold text-teal-600 tabular-nums">
                {results.co2AvoidedTPerYear || 0}
                <span className="text-[10px] font-normal ml-0.5">t/yr</span>
              </p>
            </div>
          </div>

          {/* Projection chart — starts at −investment, crosses 0 at payback */}
          <div className={`flex-grow border ${border} rounded-2xl ${isDark ? 'bg-neutral-800/50' : 'bg-white'} p-5`}>
            <p className={`text-xs font-bold uppercase tracking-widest ${sub} mb-3`}>
              {results.analysisPeriod || 20}-Year ROI Projection — Payback at {results.paybackLabel || '—'}
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
                      labelFormatter={(yr) => yr === 0 ? 'After application (Year 0)' : `Year ${yr}`}
                    />
                    <Line type="monotone" dataKey="cumulative" stroke="#f59e0b" strokeWidth={2.5} dot={{ fill: '#f59e0b', r: 3, strokeWidth: 0 }} activeDot={{ r: 5, strokeWidth: 0 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
            <p className={`text-[10px] ${sub} mt-2`}>
              Starts at −{fmt(results.applicationCostTotal || 0)} (application cost). Line crosses zero at payback. Annual gains added each year.
            </p>
          </div>

          {/* Dark Investor Hero Card */}
          {(results.netProfitProjected || 0) > 0 && (
            <div className={`rounded-2xl p-6 flex items-center justify-between ${isDark ? 'bg-neutral-800 border border-neutral-700' : 'bg-neutral-900'}`}>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                  {results.analysisPeriod || 20}-yr total · {(inputs.systemSize || 0).toLocaleString()} kW
                </p>
                <p className="text-3xl font-display font-medium text-white">
                  {fmt(results.netProfitProjected || 0)}
                </p>
                <p className="text-[10px] text-neutral-500 mt-1">
                  Annual {fmt(results.fullReturnTotal || 0)} × {results.analysisPeriod || 20} yr − {fmt(results.applicationCostTotal || 0)} investment
                </p>
              </div>
              {results.roiMultiple && (
                <div className="text-right flex-shrink-0 ml-6">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">Return Multiple</p>
                  <p className="text-4xl font-display font-bold text-yellow-400">{results.roiMultiple}×</p>
                  <p className="text-[10px] text-neutral-500 mt-1">on coating spend</p>
                </div>
              )}
            </div>
          )}

          {/* Disclaimer */}
          <p className={`text-[10px] leading-relaxed flex items-start gap-1.5 ${sub}`}>
            <Info className="w-3 h-3 flex-shrink-0 mt-0.5 opacity-60" />
            Results depend on panel type, location, soiling conditions, and local electricity tariff. Calculator uses typical India-average assumptions (1,500 kWh/kW/yr baseline, 15% moderate soiling loss). Field-validated data: 7–12% output gain, 30–40% soiling loss reduction.
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
              <span>Lifecycle & Scenario Settings</span>
              <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${isDark ? 'bg-neutral-700 text-neutral-400' : 'bg-neutral-100 text-neutral-500'}`}>
                Estimates
              </span>
              {results.lifecycle?.total > 0 && (
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-mono ${isDark ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'}`}>
                  +{fmt(results.lifecycle.total)} panel life extension
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
                    <p className={`text-xs font-bold uppercase tracking-wider ${sub}`}>Scenario Parameters</p>
                    {Object.entries(secCfg).map(([key, cfg]) => {
                      if (cfg.type === 'buttongroup') return <div key={key}>{SecButtonGroup(key, cfg)}</div>;
                      return null;
                    })}
                  </div>
                  <div className="space-y-3">
                    <p className={`text-xs font-bold uppercase tracking-wider ${sub}`}>
                      Lifecycle Value Estimate ({inputs.analysisPeriod || 20} yr)
                    </p>
                    <div className={`flex items-center justify-between px-4 py-3 rounded-xl border ${border} ${isDark ? 'bg-neutral-800/30' : 'bg-white'}`}>
                      <div className="flex items-center gap-2.5">
                        <Leaf className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className={`text-sm ${text}`}>Panel life extension (reduced thermal stress)</span>
                      </div>
                      <span className="text-sm font-mono font-semibold text-green-600">
                        +{fmt(results.lifecycle?.lifeExtension || 0)}
                      </span>
                    </div>
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
                        <span className={`text-sm font-bold ${text}`}>
                          All-in over {inputs.analysisPeriod || 20} yr
                        </span>
                        <span className={`text-lg font-bold font-mono ${isDark ? 'text-green-400' : 'text-green-700'}`}>
                          {fmt((results.netProfitProjected || 0) + (results.lifecycle?.total || 0))}
                        </span>
                      </div>
                      <p className={`text-[10px] ${sub} mt-1`}>
                        Net profit {fmt(results.netProfitProjected || 0)} + lifecycle {fmt(results.lifecycle?.total || 0)}
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

export default GraffisolROICalculator;
