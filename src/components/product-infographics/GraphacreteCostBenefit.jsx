import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, ReferenceLine, LabelList
} from 'recharts';
import { TrendingDown, Zap, Award, Calculator, CheckCircle } from 'lucide-react';

// ─── Fixed source data (NABL verified, market rates 2025-26) ─────────────────
const PRICE_PER_LITRE = 235;          // ₹235/L (1000L MOQ)
const DOSAGE_LITRES_PER_M3 = 2;       // 2L per m³
const ADDITIVE_COST_PER_M3 = PRICE_PER_LITRE * DOSAGE_LITRES_PER_M3; // ₹470
const M30_COST_PER_M3 = 6200;         // India RMC market 2025-26 (₹5,800–6,800 range)
const M50_COST_PER_M3 = 10500;        // Premium HPC market rate 2025-26 (₹10,000–12,000 range)
const GRAPHACRETE_TOTAL_PER_M3 = M30_COST_PER_M3 + ADDITIVE_COST_PER_M3; // ₹6,670
const SAVINGS_PER_M3 = M50_COST_PER_M3 - GRAPHACRETE_TOTAL_PER_M3; // ₹3,830

// ─── Custom tooltip for chart ─────────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-lg text-sm">
        <p className="font-bold text-neutral-900 mb-1">{label}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.fill }}>
            ₹{p.value?.toLocaleString('en-IN')}/m³
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// ─── Stat pill ───────────────────────────────────────────────────────────────
const StatPill = ({ icon: Icon, label, value, accent }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${accent}`}>
    <div className="shrink-0 w-8 h-8 rounded-lg bg-current/10 flex items-center justify-center">
      <Icon className="w-4 h-4" />
    </div>
    <div>
      <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">{label}</p>
      <p className="text-lg font-display font-semibold leading-tight">{value}</p>
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const GraphacreteCostBenefit = ({ theme = 'light' }) => {
  const [volume, setVolume] = useState(1000); // m³

  const isDark = theme === 'dark';
  const bg      = isDark ? 'bg-neutral-900'   : 'bg-white';
  const border  = isDark ? 'border-neutral-800' : 'border-neutral-200';
  const text    = isDark ? 'text-white'        : 'text-neutral-900';
  const subtext = isDark ? 'text-neutral-400'  : 'text-neutral-500';
  const cardBg  = isDark ? 'bg-neutral-800/60' : 'bg-neutral-50';

  const calc = useMemo(() => {
    const totalM50        = M50_COST_PER_M3 * volume;
    const totalM30        = M30_COST_PER_M3 * volume;
    const totalAdditive   = ADDITIVE_COST_PER_M3 * volume;
    const totalWithGraph  = GRAPHACRETE_TOTAL_PER_M3 * volume;
    const totalSavings    = SAVINGS_PER_M3 * volume;
    const savingsPct      = ((SAVINGS_PER_M3 / M50_COST_PER_M3) * 100).toFixed(1);
    const litresRequired  = DOSAGE_LITRES_PER_M3 * volume;
    return { totalM50, totalM30, totalAdditive, totalWithGraph, totalSavings, savingsPct, litresRequired };
  }, [volume]);

  const barData = [
    { name: 'Standard M30', cost: M30_COST_PER_M3, fill: '#94a3b8', grade: 'M30' },
    { name: 'M30 + Graphacrete', cost: GRAPHACRETE_TOTAL_PER_M3, fill: '#22c55e', grade: '≈M50' },
    { name: 'Standard M50', cost: M50_COST_PER_M3, fill: '#f87171', grade: 'M50' },
  ];

  const fmt = (n) => n.toLocaleString('en-IN');
  const fmtL = (n) => {
    if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`;
    if (n >= 1e5) return `₹${(n / 1e5).toFixed(2)} L`;
    return `₹${fmt(n)}`;
  };

  return (
    <div className={`rounded-3xl border ${border} overflow-hidden ${bg}`}>

      {/* ── Header ────────────────────────────────────────────────────────── */}
      <div className={`px-8 py-6 border-b ${border} flex flex-wrap gap-4 items-center justify-between`}>
        <div>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg mb-2 ${isDark ? 'bg-green-900/30 text-green-400' : 'bg-green-50 text-green-700'}`}>
            <Award className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-widest">NABL Certified</span>
          </div>
          <h3 className={`text-2xl font-display font-medium ${text}`}>
            Cost Benefit Analysis
          </h3>
          <p className={`text-sm mt-0.5 ${subtext}`}>
            M30 + Graphacrete delivers M50 performance at ₹3,830/m³ net savings
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <StatPill
            icon={TrendingDown}
            label="Net Savings"
            value="₹3,830/m³"
            accent={isDark
              ? 'border-green-700/40 text-green-400'
              : 'border-green-200 text-green-700'}
          />
          <StatPill
            icon={Zap}
            label="Additive Cost"
            value="₹470/m³"
            accent={isDark
              ? 'border-blue-700/40 text-blue-400'
              : 'border-blue-200 text-blue-700'}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

        {/* ── Left: price breakdown ──────────────────────────────────────── */}
        <div className={`lg:col-span-5 p-8 border-b lg:border-b-0 lg:border-r ${border} space-y-6`}>

          {/* Source note */}
          <div className={`rounded-xl p-4 ${isDark ? 'bg-neutral-800' : 'bg-neutral-50'} border ${border}`}>
            <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${subtext}`}>Source data</p>
            <div className={`space-y-1.5 text-sm ${text}`}>
              <div className="flex justify-between">
                <span className={subtext}>Graphacrete price</span>
                <span className="font-mono font-bold">₹235/L</span>
              </div>
              <div className="flex justify-between">
                <span className={subtext}>Dosage required</span>
                <span className="font-mono font-bold">2L / m³</span>
              </div>
              <div className={`flex justify-between pt-1.5 border-t ${border}`}>
                <span className={subtext}>Additive cost / m³</span>
                <span className="font-mono font-bold text-blue-500">₹470</span>
              </div>
            </div>
          </div>

          {/* Per m³ cost cards */}
          <div className="space-y-3">
            {/* M50 (baseline) */}
            <div className={`rounded-xl p-4 border ${border} ${cardBg}`}>
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-bold uppercase tracking-widest ${subtext}`}>Standard M50</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600 font-semibold">Baseline</span>
              </div>
              <p className={`text-3xl font-display font-medium ${text}`}>₹10,500 <span className={`text-sm font-normal ${subtext}`}>/m³</span></p>
            </div>

            {/* Divider with arrow */}
            <div className="flex items-center gap-3">
              <div className={`flex-1 h-px ${isDark ? 'bg-neutral-700' : 'bg-neutral-200'}`} />
              <span className={`text-xs font-bold uppercase tracking-widest ${subtext}`}>Replace with</span>
              <div className={`flex-1 h-px ${isDark ? 'bg-neutral-700' : 'bg-neutral-200'}`} />
            </div>

            {/* M30 concrete */}
            <div className={`rounded-xl p-4 border ${isDark ? 'border-neutral-700 bg-neutral-800/40' : 'border-neutral-200 bg-white'}`}>
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-bold uppercase tracking-widest ${subtext}`}>Standard M30</span>
              </div>
              <p className={`text-2xl font-display font-medium ${text}`}>₹6,200 <span className={`text-sm font-normal ${subtext}`}>/m³</span></p>
            </div>

            {/* Additive */}
            <div className={`rounded-xl p-4 border ${isDark ? 'border-blue-800/40 bg-blue-900/10' : 'border-blue-100 bg-blue-50'}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-500">+ Graphacrete Additive</span>
                <span className="text-xs text-blue-500">2L × ₹235</span>
              </div>
              <p className="text-2xl font-display font-medium text-blue-600">₹470 <span className="text-sm font-normal text-blue-400">/m³</span></p>
            </div>

            {/* Result */}
            <div className={`rounded-xl p-4 border-2 ${isDark ? 'border-green-700 bg-green-900/10' : 'border-green-400 bg-green-50'}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-widest text-green-600">M30 + Graphacrete</span>
                <span className="flex items-center gap-1 text-xs text-green-600 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" /> ≈M50 Performance
                </span>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-display font-medium text-green-700">₹6,670 <span className="text-sm font-normal text-green-500">/m³</span></p>
                <div className="text-right">
                  <p className="text-sm font-bold text-green-700">Save ₹3,830/m³</p>
                  <p className="text-xs text-green-600">vs standard M50</p>
                </div>
              </div>
            </div>
          </div>

          {/* NABL badge */}
          <div className={`rounded-xl p-4 border ${isDark ? 'border-yellow-700/30 bg-yellow-900/10' : 'border-yellow-200 bg-yellow-50'} text-center`}>
            <p className="text-xs font-bold text-yellow-600 uppercase tracking-widest mb-1">NABL Certified Test Result</p>
            <p className={`text-sm ${isDark ? 'text-yellow-200' : 'text-yellow-800'}`}>
              M30 Cube + Graphacrete achieves <strong>≈ M50</strong> compressive strength
            </p>
          </div>
        </div>

        {/* ── Right: chart + calculator ──────────────────────────────────── */}
        <div className="lg:col-span-7 p-8 space-y-8">

          {/* Bar chart */}
          <div>
            <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${subtext}`}>Cost per m³ comparison</p>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 20, right: 16, bottom: 0, left: -10 }} barSize={52}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#333' : '#f1f5f9'} vertical={false} />
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 11, fill: isDark ? '#9ca3af' : '#64748b' }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    tickFormatter={(v) => `₹${(v / 1000).toFixed(1)}k`}
                    tick={{ fontSize: 10, fill: isDark ? '#9ca3af' : '#64748b' }}
                    tickLine={false}
                    axisLine={false}
                    domain={[4000, 11500]}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <ReferenceLine
                    y={GRAPHACRETE_TOTAL_PER_M3}
                    stroke="#22c55e"
                    strokeDasharray="4 4"
                    strokeWidth={1.5}
                  />
                  <Bar dataKey="cost" radius={[6, 6, 0, 0]}>
                    {barData.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} />
                    ))}
                    <LabelList
                      dataKey="grade"
                      position="top"
                      style={{ fontSize: 11, fontWeight: 700, fill: isDark ? '#e5e7eb' : '#374151' }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className={`text-[11px] mt-2 text-center ${subtext}`}>
              Green bar achieves M50 strength — at M30+additive cost
            </p>
          </div>

          {/* Project calculator */}
          <div className={`rounded-2xl border ${border} ${cardBg} p-6`}>
            <div className="flex items-center gap-2 mb-5">
              <Calculator className={`w-4 h-4 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
              <p className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                Project Savings Calculator
              </p>
            </div>

            {/* Slider */}
            <div className="mb-5">
              <div className="flex justify-between items-baseline mb-2">
                <label className={`text-sm font-medium ${text}`}>Concrete Volume</label>
                <span className={`text-lg font-display font-bold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                  {fmt(volume)} m³
                </span>
              </div>
              <input
                type="range"
                min={100}
                max={50000}
                step={100}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-indigo-600"
                style={{ background: isDark ? '#374151' : '#e5e7eb' }}
              />
              <div className={`flex justify-between text-[10px] mt-1 ${subtext}`}>
                <span>100 m³</span><span>50,000 m³</span>
              </div>
            </div>

            {/* Results grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className={`rounded-xl p-4 border ${isDark ? 'border-red-800/30 bg-red-900/10' : 'border-red-100 bg-red-50'}`}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-red-500 mb-1">Standard M50 Cost</p>
                <p className={`text-xl font-display font-bold ${isDark ? 'text-red-300' : 'text-red-700'}`}>{fmtL(calc.totalM50)}</p>
              </div>

              <div className={`rounded-xl p-4 border ${isDark ? 'border-green-800/30 bg-green-900/10' : 'border-green-100 bg-green-50'}`}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-green-600 mb-1">With Graphacrete</p>
                <p className={`text-xl font-display font-bold ${isDark ? 'text-green-300' : 'text-green-700'}`}>{fmtL(calc.totalWithGraph)}</p>
              </div>

              <div className={`col-span-2 rounded-xl p-4 border-2 ${isDark ? 'border-green-600 bg-green-900/20' : 'border-green-400 bg-green-50'} flex items-center justify-between`}>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-green-600 mb-0.5">Net Savings vs M50</p>
                  <p className={`text-[10px] ${subtext}`}>
                    Additive: {fmtL(calc.totalAdditive)} · Volume: {fmt(volume)} m³ · {fmt(calc.litresRequired)}L Graphacrete
                  </p>
                </div>
                <div className="text-right">
                  <p className={`text-3xl font-display font-bold ${isDark ? 'text-green-400' : 'text-green-700'}`}>{fmtL(calc.totalSavings)}</p>
                  <p className="text-xs text-green-600 font-semibold">{calc.savingsPct}% cheaper</p>
                </div>
              </div>
            </div>

            {/* MOQ note */}
            <p className={`text-[11px] mt-3 ${subtext}`}>
              * 1,000 L MOQ applies. Price ₹235/L. Savings calculated vs standard M50 market rate ₹10,500/m³ (India 2025-26).
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default GraphacreteCostBenefit;
