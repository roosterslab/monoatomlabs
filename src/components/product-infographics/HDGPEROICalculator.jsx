import React, { useState, useMemo, useRef } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList,
  LineChart, Line, ReferenceLine, CartesianGrid, Legend
} from 'recharts';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Factory } from 'lucide-react';

// ─── Theme ────────────────────────────────────────────────────────────────────
const T = {
  bg:         'bg-white',
  bgSub:      'bg-emerald-50',
  border:     'border-emerald-200',
  text:       'text-emerald-700',
  sub:        'text-neutral-500',
  accent:     'bg-emerald-600',
  accentText: 'text-emerald-600',
  badge:      'bg-emerald-100 text-emerald-700',
};

// ─── Formatters ───────────────────────────────────────────────────────────────
const fmtINR = (v) => {
  const abs = Math.abs(v);
  if (abs >= 1e7)  return `₹${(v / 1e7).toFixed(1)} Cr`;
  if (abs >= 1e5)  return `₹${(v / 1e5).toFixed(2)} L`;
  if (abs >= 1000) return `₹${(v / 1000).toFixed(1)}k`;
  return `₹${Math.round(v)}`;
};
const fmtINRShort = (v) => {
  const abs = Math.abs(v);
  if (abs >= 1e7)  return `₹${(v / 1e7).toFixed(1)}Cr`;
  if (abs >= 1e5)  return `₹${(v / 1e5).toFixed(1)}L`;
  if (abs >= 1000) return `₹${(v / 1000).toFixed(0)}k`;
  return `₹${Math.round(v)}`;
};

// ─── Log slider ───────────────────────────────────────────────────────────────
// 10 → 10,000 tons = 3 decades
const DECADES = 3;
const PRODUCTION_TICKS = [10, 100, 500, 2000, 10000];
const posToX = (pos) => Math.round(10 * Math.pow(10, (pos / 100) * DECADES));
const xToPos = (x)   => (Math.log10(x / 10) / DECADES) * 100;

function formatTons(v) {
  if (v >= 1000) return `${(v / 1000).toFixed(v % 1000 === 0 ? 0 : 1)}k tons`;
  return `${v} tons`;
}

// ─── Application options ──────────────────────────────────────────────────────
const APPLICATIONS = [
  { value: 'pipes',     label: 'Pipes & Fittings' },
  { value: 'packaging', label: 'Films & Packaging' },
  { value: 'molding',   label: 'Injection Molding' },
];

// ─── Custom tooltip ───────────────────────────────────────────────────────────
const BarTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-3 shadow-lg text-sm">
      <p className="font-semibold text-neutral-800 mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color }}>
          {p.name}: {fmtINR(p.value)}
        </p>
      ))}
    </div>
  );
};

const LineTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-3 shadow-lg text-sm">
      <p className="font-semibold text-neutral-700 mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color }}>
          {p.name}: {fmtINR(p.value)}
        </p>
      ))}
    </div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────
const HDGPEROICalculator = ({
  defaultInputs,
  secondaryInputs,
  calculations,
  theme = 'light',
}) => {
  const [pos,              setPos]              = useState(() => xToPos(defaultInputs?.annualProduction?.default ?? 500));
  const [dosagePct,        setDosagePct]        = useState(defaultInputs?.dosagePercent?.default ?? 0.5);
  const [application,      setApplication]      = useState(defaultInputs?.application?.default ?? 'pipes');
  const [analysisPeriod,   setAnalysisPeriod]   = useState(secondaryInputs?.analysisPeriod?.default ?? 3);
  const [qualityReturnRate,setQualityReturnRate] = useState(secondaryInputs?.qualityReturnRate?.default ?? 2.0);
  const [showAdvanced,     setShowAdvanced]      = useState(false);

  const annualProduction = posToX(pos);

  const calc = useMemo(() => {
    if (!calculations) return null;
    return calculations(
      { annualProduction, dosagePercent: dosagePct, application },
      { analysisPeriod, qualityReturnRate }
    );
  }, [annualProduction, dosagePct, application, analysisPeriod, qualityReturnRate, calculations]);

  if (!calc) return null;

  // ── Banner values ──
  const bannerNetPerTon = calc.netMarginPerTon;
  const bannerAllInPerTon = calc.allInSavingsPerTon;

  // ── Bar chart data ──
  const barData = [
    { name: 'Additive Cost', value: calc.annualAdditiveCost },
    { name: 'Net Margin',    value: calc.netMarginSavingsTotal },
    { name: 'All-In Gain',   value: calc.allInSavingsTotal },
  ];
  const barColors = ['#f87171', '#34d399', '#059669'];

  return (
    <div className={`${T.bg} rounded-2xl overflow-hidden`}>

      {/* ── Performance banner ── */}
      <div className="bg-emerald-600 text-white px-6 py-3 text-xs font-medium flex flex-wrap gap-x-6 gap-y-1">
        <span>Lab Tested</span>
        <span>· +30% Tensile Strength</span>
        <span>· 20× Elongation</span>
        <span>· +20% Lifespan</span>
        <span>· Drop-In Masterbatch</span>
        <span className="ml-auto font-bold">
          Net: {fmtINR(bannerNetPerTon)}/ton &nbsp;·&nbsp; All-in: {fmtINR(bannerAllInPerTon)}/ton
        </span>
      </div>

      <div className="p-6 md:p-8 space-y-8">

        {/* ── Log Slider ── */}
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <label className="text-sm font-semibold text-neutral-700">
              Annual Polymer Production
            </label>
            <span className="text-2xl font-display font-semibold text-emerald-700">
              {formatTons(annualProduction)}
            </span>
          </div>
          <input
            type="range" min="0" max="100" step="0.5"
            value={pos}
            onChange={e => setPos(Number(e.target.value))}
            className="w-full h-2 rounded-full accent-emerald-600 cursor-pointer"
          />
          <div className="flex justify-between mt-1">
            {PRODUCTION_TICKS.map(t => (
              <span key={t} className="text-xs text-neutral-400">
                {t >= 1000 ? `${t / 1000}k` : t}
              </span>
            ))}
          </div>
        </div>

        {/* ── Application selector ── */}
        <div>
          <label className="text-sm font-semibold text-neutral-700 block mb-2">
            Application Type
          </label>
          <div className="flex gap-2 flex-wrap">
            {APPLICATIONS.map(a => (
              <button
                key={a.value}
                onClick={() => setApplication(a.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                  application === a.value
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:border-emerald-300'
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Dosage slider ── */}
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <label className="text-sm font-semibold text-neutral-700">
              HD-G-PE Dosage
            </label>
            <span className="text-lg font-semibold text-emerald-700">
              {dosagePct.toFixed(1)}%
              <span className="text-xs text-neutral-400 font-normal ml-1">
                ({(dosagePct / 100 * 1000).toFixed(1)} kg/ton)
              </span>
            </span>
          </div>
          <input
            type="range"
            min={defaultInputs?.dosagePercent?.min ?? 0.5}
            max={defaultInputs?.dosagePercent?.max ?? 2.0}
            step="0.1"
            value={dosagePct}
            onChange={e => setDosagePct(Number(e.target.value))}
            className="w-full h-2 rounded-full accent-emerald-600 cursor-pointer"
          />
          <div className="flex justify-between mt-1">
            {[0.5, 1.0, 1.5, 2.0].map(t => (
              <span key={t} className="text-xs text-neutral-400">{t}%</span>
            ))}
          </div>
        </div>

        {/* ── Main two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LEFT: Cost vs Benefit breakdown */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
              Per-Ton Economics · {calc.appLabel}
            </h4>

            {/* Additive cost card */}
            <div className="rounded-xl border border-red-200 bg-red-50 p-4">
              <div className="text-xs font-bold text-red-600 uppercase tracking-wide mb-3">
                HD-G-PE Additive Cost
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Dosage</span>
                  <span className="font-medium text-neutral-800">
                    {(dosagePct / 100 * 1000).toFixed(1)} kg/ton
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Masterbatch price</span>
                  <span className="font-medium text-neutral-800">₹1,200/kg</span>
                </div>
                <div className="flex justify-between border-t border-red-200 pt-2 mt-2">
                  <span className="font-semibold text-red-700">Additive cost/ton</span>
                  <span className="font-bold text-red-700">{fmtINR(calc.additiveCostPerTon)}</span>
                </div>
              </div>
            </div>

            {/* Gross benefit card */}
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-3">
                Gross Benefit — {calc.appLabel}
              </div>
              <div className="space-y-2 text-sm">
                {calc.premiumPerTon > 0 && (
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Selling premium</span>
                    <span className="font-medium text-emerald-700">
                      +{fmtINR(calc.premiumPerTon)}/ton
                    </span>
                  </div>
                )}
                {calc.downgaugeSavingsPerTon > 0 && (
                  <div className="flex justify-between">
                    <span className="text-neutral-600">
                      Downgauging savings
                      {application === 'packaging' ? ' (15% less material)' : ' (10% less material)'}
                    </span>
                    <span className="font-medium text-emerald-700">
                      +{fmtINR(calc.downgaugeSavingsPerTon)}/ton
                    </span>
                  </div>
                )}
                <div className="flex justify-between border-t border-emerald-200 pt-2 mt-2">
                  <span className="font-semibold text-emerald-700">Gross benefit/ton</span>
                  <span className="font-bold text-emerald-700">
                    {fmtINR(calc.grossBenefitPerTon)}
                  </span>
                </div>
              </div>
            </div>

            {/* Net margin highlight */}
            <div className={`rounded-xl p-4 ${
              calc.netMarginPerTon >= 0
                ? 'bg-neutral-900 text-white'
                : 'bg-amber-50 border border-amber-200'
            }`}>
              <div className="flex justify-between items-center">
                <div>
                  <div className={`text-xs font-bold uppercase tracking-wide mb-1 ${
                    calc.netMarginPerTon >= 0 ? 'text-emerald-400' : 'text-amber-600'
                  }`}>
                    Net Margin per Ton
                  </div>
                  <div className={`text-xs ${
                    calc.netMarginPerTon >= 0 ? 'text-neutral-400' : 'text-amber-600'
                  }`}>
                    Gross benefit − additive cost
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-display font-semibold ${
                    calc.netMarginPerTon >= 0 ? 'text-emerald-400' : 'text-amber-600'
                  }`}>
                    {calc.netMarginPerTon >= 0 ? '+' : ''}{fmtINR(calc.netMarginPerTon)}
                  </div>
                  <div className={`text-xs mt-0.5 ${
                    calc.netMarginPerTon >= 0 ? 'text-neutral-400' : 'text-amber-500'
                  }`}>
                    Annual: {fmtINR(calc.netMarginSavingsTotal)}
                  </div>
                </div>
              </div>
              {calc.netMarginPerTon < 0 && (
                <p className="text-xs text-amber-600 mt-2">
                  Dosage cost exceeds benefit at this application — try reducing dosage to 0.5%
                </p>
              )}
            </div>

            {/* Returns/quality saving */}
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
              <div className="text-xs font-bold text-neutral-500 uppercase tracking-wide mb-3">
                Quality Improvement Saving
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">
                    Current return rate ({qualityReturnRate.toFixed(1)}%)
                  </span>
                  <span className="font-medium text-neutral-700">
                    {fmtINR(calc.returnsSavingsPerTon + (100000 * qualityReturnRate / 100 * 0.4))}/ton cost
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">HDGPE defect reduction</span>
                  <span className="font-medium text-neutral-700">−60%</span>
                </div>
                <div className="flex justify-between border-t border-neutral-200 pt-2 mt-2">
                  <span className="font-semibold text-neutral-700">Returns saving/ton</span>
                  <span className="font-bold text-neutral-800">
                    +{fmtINR(calc.returnsSavingsPerTon)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Charts & Cards */}
          <div className="space-y-5">

            {/* Bar chart: Additive cost vs Net vs All-in (annual totals) */}
            <div className="rounded-xl border border-neutral-200 bg-white p-4">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
                Annual Totals ({formatTons(annualProduction)} production)
              </p>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={barData} barCategoryGap="25%">
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip content={<BarTooltip />} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {barData.map((entry, i) => (
                      <Cell key={i} fill={barColors[i]} />
                    ))}
                    <LabelList
                      dataKey="value"
                      position="top"
                      formatter={fmtINRShort}
                      style={{ fontSize: 11, fontWeight: 600, fill: '#374151' }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-xs text-neutral-400 mt-1 text-center">
                Red = additive spend · Green = net margin · Dark green = all-in gain
              </p>
            </div>

            {/* Dual result cards */}
            <div className="grid grid-cols-2 gap-3">
              {/* ALL-IN card */}
              <div className="rounded-xl bg-emerald-600 text-white p-4">
                <div className="text-xs font-bold uppercase tracking-wide text-emerald-200 mb-2 flex items-center gap-1">
                  <span className="bg-white text-emerald-700 rounded px-1 py-0.5 text-[10px]">ALL-IN</span>
                  Annual
                </div>
                <div className="text-2xl font-display font-semibold">
                  {fmtINR(calc.allInSavingsTotal)}
                </div>
                <div className="text-xs text-emerald-200 mt-1">
                  Net margin + quality savings
                </div>
                <div className="text-xs text-emerald-300 mt-2 border-t border-emerald-500 pt-2">
                  {fmtINR(calc.allInSavingsPerTon)}/ton
                </div>
              </div>

              {/* NET MARGIN card */}
              <div className="rounded-xl bg-neutral-100 border border-neutral-200 p-4">
                <div className="text-xs font-bold uppercase tracking-wide text-neutral-500 mb-2 flex items-center gap-1">
                  <span className="bg-neutral-300 text-neutral-700 rounded px-1 py-0.5 text-[10px]">NET MARGIN</span>
                  Annual
                </div>
                <div className={`text-2xl font-display font-semibold ${
                  calc.netMarginSavingsTotal >= 0 ? 'text-neutral-900' : 'text-red-600'
                }`}>
                  {fmtINR(calc.netMarginSavingsTotal)}
                </div>
                <div className="text-xs text-neutral-500 mt-1">
                  Premium / downgauge only
                </div>
                <div className="text-xs text-neutral-400 mt-2 border-t border-neutral-200 pt-2">
                  {fmtINR(calc.netMarginPerTon)}/ton
                </div>
              </div>
            </div>

            {/* ROI & Payback */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-center">
                <div className="text-xs text-neutral-500 uppercase tracking-wide mb-1">ROI on Additive</div>
                <div className={`text-2xl font-display font-semibold ${
                  calc.roiPercentage !== null ? 'text-emerald-600' : 'text-neutral-400'
                }`}>
                  {calc.roiPercentage !== null ? `${calc.roiPercentage}%` : '—'}
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">net gain ÷ additive cost</div>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-center">
                <div className="text-xs text-neutral-500 uppercase tracking-wide mb-1">Per-Batch Payback</div>
                <div className={`text-2xl font-display font-semibold ${
                  calc.paybackMonths !== null ? 'text-emerald-600' : 'text-amber-500'
                }`}>
                  {calc.paybackLabel}
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">additive cost recovery</div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2">
              {[
                {
                  label: 'Additive / yr',
                  value: fmtINR(calc.annualAdditiveCost),
                  sub: `@ ${dosagePct.toFixed(1)}% dosage`,
                  color: 'text-red-500',
                },
                {
                  label: 'Net gain / ton',
                  value: fmtINR(calc.netMarginPerTon),
                  sub: `${formatTons(annualProduction)} production`,
                  color: calc.netMarginPerTon >= 0 ? 'text-emerald-600' : 'text-amber-500',
                },
                {
                  label: 'CO₂ avoided',
                  value: calc.co2SavedTons > 0 ? `${calc.co2SavedTons}t` : '—',
                  sub: 'via material reduction',
                  color: 'text-blue-500',
                },
              ].map((s, i) => (
                <div key={i} className="rounded-xl border border-neutral-100 bg-neutral-50 p-3 text-center">
                  <div className="text-xs text-neutral-400 mb-1">{s.label}</div>
                  <div className={`text-base font-bold ${s.color}`}>{s.value}</div>
                  <div className="text-[10px] text-neutral-400 mt-0.5 leading-tight">{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Projection chart */}
            <div className="rounded-xl border border-neutral-200 bg-white p-4">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">
                {analysisPeriod}-Year Cumulative Net Gain
              </p>
              <ResponsiveContainer width="100%" height={160}>
                <LineChart data={calc.projectionData} margin={{ top: 4, right: 8, left: 8, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip content={<LineTooltip />} />
                  <Line
                    type="monotone" dataKey="netMargin" name="Net Margin"
                    stroke="#34d399" strokeWidth={2} dot={false}
                  />
                  <Line
                    type="monotone" dataKey="allIn" name="All-In"
                    stroke="#059669" strokeWidth={2} dot={false} strokeDasharray="4 2"
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="flex gap-4 justify-center mt-2">
                <span className="flex items-center gap-1 text-xs text-neutral-500">
                  <span className="w-4 h-0.5 bg-emerald-400 inline-block rounded"></span> Net Margin
                </span>
                <span className="flex items-center gap-1 text-xs text-neutral-500">
                  <span className="w-4 h-0.5 bg-emerald-700 inline-block rounded" style={{ borderTop: '2px dashed #059669', background: 'none' }}></span>
                  <span className="w-4 border-t-2 border-dashed border-emerald-700 inline-block"></span> All-In
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Advanced parameters accordion ── */}
        <div className="rounded-xl border border-neutral-200 overflow-hidden">
          <button
            onClick={() => setShowAdvanced(v => !v)}
            className="w-full flex items-center justify-between px-5 py-4 bg-neutral-50 hover:bg-neutral-100 transition-colors text-sm font-semibold text-neutral-700"
          >
            <span>Advanced Parameters</span>
            <ChevronDown
              size={16}
              className={`text-neutral-400 transition-transform duration-200 ${showAdvanced ? 'rotate-180' : ''}`}
            />
          </button>

          <AnimatePresence initial={false}>
            {showAdvanced && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="p-5 border-t border-neutral-200 space-y-6 bg-white">

                  {/* Analysis period */}
                  <div>
                    <label className="text-sm font-semibold text-neutral-700 block mb-2">
                      Analysis Period
                    </label>
                    <div className="flex gap-2">
                      {(secondaryInputs?.analysisPeriod?.options ?? [
                        { value: 1, label: '1 yr' },
                        { value: 3, label: '3 yr' },
                        { value: 5, label: '5 yr' },
                      ]).map(opt => (
                        <button
                          key={opt.value}
                          onClick={() => setAnalysisPeriod(opt.value)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                            analysisPeriod === opt.value
                              ? 'bg-emerald-600 text-white border-emerald-600'
                              : 'bg-white text-neutral-600 border-neutral-200 hover:border-emerald-300'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quality/defect return rate */}
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <label className="text-sm font-semibold text-neutral-700">
                        Current Defect / Return Rate
                      </label>
                      <span className="text-base font-semibold text-neutral-800">
                        {qualityReturnRate.toFixed(1)}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min={secondaryInputs?.qualityReturnRate?.min ?? 0.5}
                      max={secondaryInputs?.qualityReturnRate?.max ?? 5.0}
                      step="0.5"
                      value={qualityReturnRate}
                      onChange={e => setQualityReturnRate(Number(e.target.value))}
                      className="w-full h-2 rounded-full accent-emerald-600 cursor-pointer"
                    />
                    <div className="flex justify-between mt-1">
                      {[0.5, 1.5, 2.5, 3.5, 5.0].map(t => (
                        <span key={t} className="text-xs text-neutral-400">{t}%</span>
                      ))}
                    </div>
                    <p className="text-xs text-neutral-500 mt-2">
                      HD-G-PE reduces defects/returns by ~60%, improving downstream quality costs.
                    </p>
                  </div>

                  {/* Fleet impact summary table */}
                  <div className="rounded-lg bg-neutral-50 border border-neutral-200 overflow-hidden">
                    <div className="px-4 py-3 bg-neutral-100 border-b border-neutral-200">
                      <p className="text-xs font-bold text-neutral-600 uppercase tracking-wide">
                        Production Impact Summary
                      </p>
                    </div>
                    <div className="divide-y divide-neutral-100">
                      {[
                        ['Annual production', formatTons(annualProduction)],
                        ['Application', calc.appLabel],
                        ['Dosage', `${dosagePct.toFixed(1)}% (${(dosagePct / 100 * 1000).toFixed(1)} kg/ton)`],
                        ['Additive spend / yr', fmtINR(calc.annualAdditiveCost)],
                        ['Net margin / yr', fmtINR(calc.netMarginSavingsTotal)],
                        ['All-in gain / yr', fmtINR(calc.allInSavingsTotal)],
                        ...(calc.materialSavedTons > 0 ? [['Material saved / yr', `${calc.materialSavedTons} tons`]] : []),
                        ...(calc.co2SavedTons > 0 ? [['CO₂ avoided', `${calc.co2SavedTons} tCO₂`]] : []),
                        [`${analysisPeriod}-yr net gain`, fmtINR(calc.netMarginSavingsTotal * analysisPeriod)],
                      ].map(([label, value], i) => (
                        <div key={i} className="flex justify-between px-4 py-2.5 text-sm">
                          <span className="text-neutral-500">{label}</span>
                          <span className="font-semibold text-neutral-800">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Disclaimer ── */}
        <p className="text-xs text-neutral-400 leading-relaxed">
          Calculations use indicative industry premiums (Pipes: +12%, Films: 15% downgauge, Molding: +15%) and
          a baseline HDPE price of ₹100/kg. Actual premiums depend on product grade, customer negotiations,
          and end-market pricing. Quality/returns improvement assumes 60% defect reduction at your stated rate.
          CO₂ figures use HDPE production average of 1.8 kg CO₂/kg. Contact us for application-specific ROI modelling.
        </p>

      </div>
    </div>
  );
};

export default HDGPEROICalculator;
