import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, ReferenceLine, Cell
} from 'recharts';
import { FlaskConical, Award, FileCheck, ChevronDown, ChevronUp, TrendingUp, Minus } from 'lucide-react';

/**
 * GraphacreteLabResults
 * Displays real NABL-accredited concrete test report data from Global Lab (Bhubaneswar)
 * Test Reports:
 *   - BNR-1127-TR-790403 : M-20 WITH Graphene (July–Aug 2025)
 *   - BNR-1140-TR-793018 : M-20 WITHOUT Graphene (July 2025)
 *   - BNR-1101-TR-823120 : M-30 WITH Graphene (Oct–Nov 2025)
 */

// ── Custom Recharts Tooltip ────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="bg-white border border-neutral-200 rounded-xl shadow-xl p-4 text-sm min-w-[160px]">
      <p className="font-semibold text-neutral-900 mb-2">{label}</p>
      {payload.map((p, i) => (
        <div key={i} className="flex items-center gap-2 mb-1">
          <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: p.color }} />
          <span className="text-neutral-500">{p.name}:</span>
          <span className="font-mono font-medium text-neutral-900">{p.value}{p.unit ?? ''}</span>
        </div>
      ))}
    </div>
  );
};

// ── Section toggle header ──────────────────────────────────────────────────────
const ToggleSection = ({ title, badge, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-neutral-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-6 py-4 bg-neutral-50 hover:bg-neutral-100 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <span className="font-semibold text-neutral-900">{title}</span>
          {badge && (
            <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
              {badge}
            </span>
          )}
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-neutral-500" /> : <ChevronDown className="w-4 h-4 text-neutral-500" />}
      </button>
      {open && <div className="p-6">{children}</div>}
    </div>
  );
};

// ── Stat box ──────────────────────────────────────────────────────────────────
const StatBox = ({ label, value, unit, sub, highlight, trend }) => (
  <div className={`p-5 rounded-xl border ${highlight ? 'bg-neutral-900 border-neutral-700 text-white' : 'bg-white border-neutral-200 text-neutral-900'}`}>
    <div className={`text-xs font-semibold uppercase tracking-wide mb-2 ${highlight ? 'text-neutral-400' : 'text-neutral-500'}`}>{label}</div>
    <div className="flex items-end gap-1 mb-1">
      <span className={`text-3xl font-display font-medium ${highlight ? 'text-white' : 'text-neutral-900'}`}>{value}</span>
      {unit && <span className={`text-sm mb-1 ${highlight ? 'text-neutral-400' : 'text-neutral-500'}`}>{unit}</span>}
      {trend === 'up' && <TrendingUp className="w-4 h-4 mb-1.5 text-green-500" />}
      {trend === 'down' && <Minus className="w-4 h-4 mb-1.5 text-blue-400" />}
    </div>
    {sub && <div className={`text-xs ${highlight ? 'text-neutral-400' : 'text-neutral-500'}`}>{sub}</div>}
  </div>
);

// ── Mix-design table ──────────────────────────────────────────────────────────
const MixTable = ({ rows }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm border-collapse min-w-[480px]">
      <thead>
        <tr className="border-b border-neutral-200 bg-neutral-50">
          <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-wide text-neutral-500">Ingredient</th>
          <th className="py-3 px-4 text-right text-xs font-semibold uppercase tracking-wide text-neutral-500">kg/m³</th>
          <th className="py-3 px-4 text-right text-xs font-semibold uppercase tracking-wide text-neutral-500">Proportion</th>
          <th className="py-3 px-4 text-right text-xs font-semibold uppercase tracking-wide text-neutral-500">kg / bag</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-neutral-100">
        {rows.map((r, i) => (
          <tr key={i} className="hover:bg-neutral-50 transition-colors">
            <td className="py-3 px-4 font-medium text-neutral-900">{r.ingredient}</td>
            <td className="py-3 px-4 text-right font-mono text-neutral-700">{r.kgM3}</td>
            <td className="py-3 px-4 text-right font-mono text-neutral-500">{r.proportion || '—'}</td>
            <td className="py-3 px-4 text-right font-mono text-neutral-500">{r.kgBag || '—'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ── Main component ─────────────────────────────────────────────────────────────
const GraphacreteLabResults = ({ theme = 'light' }) => {
  const [activeGrade, setActiveGrade] = useState('m20');

  // ── Chart Data ───────────────────────────────────────────────────────────────
  const cementData = [
    { name: 'With Graphene\n(M-20)', value: 331, fill: '#171717' },
    { name: 'Without Graphene\n(M-20)', value: 371, fill: '#d4d4d4' },
  ];

  const wcData = [
    { name: 'With Graphene', value: 0.48, fill: '#171717' },
    { name: 'Without Graphene', value: 0.55, fill: '#d4d4d4' },
  ];

  const slumpData = [
    { name: 'With Graphene', value: 160, fill: '#171717' },
    { name: 'Without Graphene', value: 130, fill: '#d4d4d4' },
  ];

  const strengthCompareData = [
    {
      test: 'ACT Equiv.\n28-Day',
      graphene: 25.5,
      control: 25.0,
    },
    {
      test: 'Actual\n28-Day',
      graphene: 29.0,
      control: null,  // not measured
    },
  ];

  const m30StrengthData = [
    { name: 'Characteristic\nStrength (M-30)', value: 30, fill: '#d4d4d4' },
    { name: 'Target Mean\nStrength (IS 10262)', value: 38.25, fill: '#a3a3a3' },
    { name: 'Achieved\n(ACT Equiv. 28-Day)', value: 49.5, fill: '#171717' },
  ];

  // Mix design rows – M-20 with Graphene
  const m20GrapheneRows = [
    { ingredient: 'Cement OPC-53', kgM3: '331', proportion: '—', kgBag: '50' },
    { ingredient: '20 mm Coarse Aggregate', kgM3: '587', proportion: '29.2%', kgBag: '89' },
    { ingredient: '10 mm Coarse Aggregate', kgM3: '633', proportion: '31.5%', kgBag: '96' },
    { ingredient: 'Natural River Sand', kgM3: '789', proportion: '39.3%', kgBag: '119' },
    { ingredient: 'Free Water', kgM3: '159', proportion: '—', kgBag: '24 L' },
    { ingredient: 'Graphene Admixture (PC)', kgM3: '2.6', proportion: '0.8% by cement wt.', kgBag: '0.4' },
  ];

  // Mix design rows – M-20 without Graphene
  const m20ControlRows = [
    { ingredient: 'Cement OPC-53', kgM3: '371', proportion: '—', kgBag: '50' },
    { ingredient: '20 mm Coarse Aggregate', kgM3: '526', proportion: '28.4%', kgBag: '71' },
    { ingredient: '10 mm Coarse Aggregate', kgM3: '572', proportion: '30.9%', kgBag: '77' },
    { ingredient: 'Natural River Sand', kgM3: '752', proportion: '40.6%', kgBag: '101' },
    { ingredient: 'Free Water', kgM3: '204', proportion: '—', kgBag: '27 L' },
    { ingredient: 'Admixture', kgM3: '—', proportion: 'None', kgBag: '—' },
  ];

  // Mix design rows – M-30 with Graphene
  const m30GrapheneRows = [
    { ingredient: 'Cement OPC-53', kgM3: '422', proportion: '—', kgBag: '50' },
    { ingredient: '20 mm Coarse Aggregate', kgM3: '535', proportion: '27.8%', kgBag: '63' },
    { ingredient: '10 mm Coarse Aggregate', kgM3: '579', proportion: '30.1%', kgBag: '69' },
    { ingredient: 'Natural River Sand', kgM3: '812', proportion: '42.1%', kgBag: '96' },
    { ingredient: 'Free Water', kgM3: '156', proportion: '—', kgBag: '19 L' },
    { ingredient: 'Monoatom Graphene Admixture (PC)', kgM3: '3.4', proportion: '0.8% by cement wt.', kgBag: '0.4' },
  ];

  return (
    <div className="space-y-8">
      {/* ── Section Header ─────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-3 bg-green-50 text-green-700">
            <Award className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">NABL Accredited · Global Lab, Bhubaneswar</span>
          </div>
          <h3 className="text-2xl font-display font-medium text-neutral-900">
            Certified Laboratory Test Results
          </h3>
          <p className="text-neutral-500 mt-1 text-sm max-w-xl">
            Independent third-party concrete mix design and compressive strength testing
            conducted per IS 10262 : 2019, IS 456 : 2000, and IS 9013 : 1978.
          </p>
        </div>
        {/* Report badges */}
        <div className="flex flex-wrap gap-2 shrink-0">
          {[
            { no: 'BNR-1127-TR-790403', label: 'M-20 + Graphene' },
            { no: 'BNR-1140-TR-793018', label: 'M-20 Control' },
            { no: 'BNR-1101-TR-823120', label: 'M-30 + Graphene' },
          ].map(r => (
            <div key={r.no} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-neutral-200 rounded-lg text-xs">
              <FileCheck className="w-3.5 h-3.5 text-green-600" />
              <span className="text-neutral-500">{r.label}</span>
              <span className="font-mono text-neutral-700">{r.no}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Grade selector tabs ────────────────────────────────────────────── */}
      <div className="flex gap-2 border-b border-neutral-200">
        {[
          { key: 'm20', label: 'M-20  Graphene vs Control' },
          { key: 'm30', label: 'M-30  with Graphene' },
        ].map(t => (
          <button
            key={t.key}
            onClick={() => setActiveGrade(t.key)}
            className={`px-5 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
              activeGrade === t.key
                ? 'border-neutral-900 text-neutral-900'
                : 'border-transparent text-neutral-500 hover:text-neutral-700'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ══════════ M-20 COMPARISON ══════════════════════════════════════════ */}
      {activeGrade === 'm20' && (
        <div className="space-y-8">
          {/* Key metrics headline strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatBox label="Cement Saved" value="40" unit=" kg/m³" sub="331 vs 371 kg/m³ · 10.8% less" trend="down" />
            <StatBox label="W/C Ratio" value="0.48" sub="vs 0.55 (control) · Denser mix" trend="down" />
            <StatBox label="Workability (Slump)" value="160" unit=" mm" sub="vs 130 mm (control) · Better flow" trend="up" />
            <StatBox label="28-Day Strength" value="29.0" unit=" MPa" sub="Actual · vs 25 MPa est. (control)" highlight trend="up" />
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cement & W/C */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-6">
              <p className="text-sm font-semibold text-neutral-700 mb-4">Cement Content & W/C Ratio</p>
              <div className="flex gap-4">
                {/* Cement bar */}
                <div className="flex-1">
                  <p className="text-xs text-neutral-500 mb-2 text-center">Cement (kg/m³)</p>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={cementData} barCategoryGap="30%">
                      <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                      <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#737373' }} />
                      <YAxis domain={[280, 400]} tick={{ fontSize: 10, fill: '#737373' }} unit=" kg" width={50} />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="value" name="Cement" radius={[4, 4, 0, 0]}>
                        {cementData.map((e, i) => <Cell key={i} fill={e.fill} />)}
                      </Bar>
                      <ReferenceLine y={331} stroke="#171717" strokeDasharray="4 2" label={{ value: '331', position: 'right', fontSize: 10 }} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                {/* W/C bar */}
                <div className="flex-1">
                  <p className="text-xs text-neutral-500 mb-2 text-center">W/C Ratio</p>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={wcData} barCategoryGap="30%">
                      <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                      <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#737373' }} />
                      <YAxis domain={[0.4, 0.6]} tick={{ fontSize: 10, fill: '#737373' }} width={35} />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="value" name="W/C Ratio" radius={[4, 4, 0, 0]}>
                        {wcData.map((e, i) => <Cell key={i} fill={e.fill} />)}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Compressive Strength */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-6">
              <p className="text-sm font-semibold text-neutral-700 mb-1">Compressive Strength Comparison</p>
              <p className="text-xs text-neutral-400 mb-4">ACT = Accelerated Curing Test (IS 9013). Actual = 28-day cube test.</p>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={strengthCompareData} barCategoryGap="25%">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                  <XAxis dataKey="test" tick={{ fontSize: 10, fill: '#737373' }} />
                  <YAxis domain={[0, 35]} tick={{ fontSize: 10, fill: '#737373' }} unit=" MPa" width={55} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <ReferenceLine y={20} stroke="#ef4444" strokeDasharray="4 2" label={{ value: 'M-20 min', position: 'right', fontSize: 10, fill: '#ef4444' }} />
                  <Bar dataKey="graphene" name="With Graphene" fill="#171717" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="control" name="Without Graphene" fill="#d4d4d4" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Slump comparison */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-6">
            <p className="text-sm font-semibold text-neutral-700 mb-4">Workability — Slump (mm)</p>
            <div className="flex items-end gap-6">
              <div className="flex-1">
                <div className="flex items-end gap-3 mb-2">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl font-display font-medium text-neutral-900">160 mm</span>
                    <div className="w-20 bg-neutral-900 rounded-t-lg" style={{ height: 80 }} />
                    <span className="text-xs text-neutral-600 font-medium">With Graphene</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl font-display font-medium text-neutral-400">130 mm</span>
                    <div className="w-20 bg-neutral-200 rounded-t-lg" style={{ height: 65 }} />
                    <span className="text-xs text-neutral-400">Without Graphene</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-sm text-neutral-600 leading-relaxed border-l border-neutral-100 pl-6">
                <p className="font-semibold text-neutral-900 mb-1">Better pumpability despite less cement</p>
                <p>The Graphene admixture (PC type, Capattery) provides a 23% better slump at a 14% reduction in W/C ratio — enabling smoother site execution and reducing bleed water.</p>
              </div>
            </div>
          </div>

          {/* Mix design tables */}
          <ToggleSection title="M-20 Mix Design — With Graphene Admixture" badge="BNR-1127-TR-790403">
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-neutral-600 bg-neutral-50 rounded-xl p-4">
                <div><span className="font-semibold block text-neutral-900">Grade</span>M-20 (RCC)</div>
                <div><span className="font-semibold block text-neutral-900">Exposure</span>Moderate</div>
                <div><span className="font-semibold block text-neutral-900">W/C Ratio</span>0.48</div>
                <div><span className="font-semibold block text-neutral-900">Target Strength</span>26.6 N/mm²</div>
                <div><span className="font-semibold block text-neutral-900">Slump</span>160 mm</div>
                <div><span className="font-semibold block text-neutral-900">Placing Method</span>Pumpable</div>
                <div><span className="font-semibold block text-neutral-900">Admixture</span>Graphene PC · 0.8%</div>
                <div><span className="font-semibold block text-neutral-900">Testing Period</span>02/07 – 04/08/2025</div>
              </div>
              <MixTable rows={m20GrapheneRows} />
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-green-900 mb-1">Cube Compression Results (28-Day)</p>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div><span className="text-green-700 font-medium">Cube 1:</span> 30.5 MPa</div>
                  <div><span className="text-green-700 font-medium">Cube 2:</span> 29.5 MPa</div>
                  <div><span className="text-green-700 font-medium">Cube 3:</span> 27.5 MPa</div>
                </div>
                <p className="text-green-800 font-bold mt-2">Average: 29.0 MPa · Exceeds M-20 characteristic strength (20 MPa) by 45%</p>
              </div>
            </div>
          </ToggleSection>

          <ToggleSection title="M-20 Mix Design — Control (No Admixture)" badge="BNR-1140-TR-793018" defaultOpen={false}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-neutral-600 bg-neutral-50 rounded-xl p-4">
                <div><span className="font-semibold block text-neutral-900">Grade</span>M-20 (RCC)</div>
                <div><span className="font-semibold block text-neutral-900">Exposure</span>Mild</div>
                <div><span className="font-semibold block text-neutral-900">W/C Ratio</span>0.55</div>
                <div><span className="font-semibold block text-neutral-900">Target Strength</span>26.6 N/mm²</div>
                <div><span className="font-semibold block text-neutral-900">Slump</span>130 mm</div>
                <div><span className="font-semibold block text-neutral-900">Placing Method</span>Pumpable</div>
                <div><span className="font-semibold block text-neutral-900">Admixture</span>None</div>
                <div><span className="font-semibold block text-neutral-900">Testing Period</span>10/07 – 15/07/2025</div>
              </div>
              <MixTable rows={m20ControlRows} />
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-neutral-900 mb-1">ACT Cube Results (Accelerated, IS 9013)</p>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div><span className="text-neutral-700 font-medium">Cube 1:</span> 24.5 MPa (est.)</div>
                  <div><span className="text-neutral-700 font-medium">Cube 2:</span> 25.5 MPa (est.)</div>
                  <div><span className="text-neutral-700 font-medium">Cube 3:</span> 24.5 MPa (est.)</div>
                </div>
                <p className="text-neutral-700 font-semibold mt-2">Average: 25.0 MPa (ACT equivalent) · No 28-day actual test in this report.</p>
              </div>
            </div>
          </ToggleSection>
        </div>
      )}

      {/* ══════════ M-30 SECTION ═════════════════════════════════════════════ */}
      {activeGrade === 'm30' && (
        <div className="space-y-8">
          {/* Headline achievement */}
          <div className="bg-neutral-900 text-white rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-neutral-800">
              <div className="md:pr-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-900/40 text-green-400 rounded-lg text-xs font-bold uppercase tracking-wider mb-4">
                  <FlaskConical className="w-3.5 h-3.5" />
                  M-30 R&D Mix · BNR-1101-TR-823120
                </div>
                <h4 className="text-xl font-display font-medium mb-2">Massively Exceeds Grade Target</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  M-30 mix with Monoatom Graphene admixture achieved an ACT-equivalent 28-day strength of
                  <strong className="text-white"> 49.5 MPa</strong> — 65% above M-30's characteristic strength.
                </p>
                <p className="text-xs text-neutral-500 mt-2">Test witnessed by Mr. Sushant Pattnaik (Scientist), Oct–Nov 2025.</p>
              </div>
              <div className="flex flex-col justify-center md:px-8">
                <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Achieved (ACT Equiv.)</div>
                <div className="text-5xl font-display font-bold text-white mb-1">49.5 <span className="text-2xl font-normal text-neutral-400">MPa</span></div>
                <div className="text-xs text-green-400 font-semibold">vs 38.25 MPa target mean strength</div>
              </div>
              <div className="flex flex-col justify-center md:pl-8 gap-4">
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-0.5">W/C Ratio</div>
                  <div className="text-2xl font-display font-medium text-white">0.37</div>
                  <div className="text-xs text-neutral-500">Very dense microstructure</div>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-0.5">Initial Slump</div>
                  <div className="text-2xl font-display font-medium text-white">220 mm</div>
                  <div className="text-xs text-neutral-500">Excellent site pumpability</div>
                </div>
              </div>
            </div>
          </div>

          {/* Strength chart */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-6">
            <p className="text-sm font-semibold text-neutral-700 mb-1">M-30 Strength: Target vs Achieved (MPa)</p>
            <p className="text-xs text-neutral-400 mb-4">ACT equivalent 28-day strength per IS 9013 : 1978. Cube size: 150 × 150 × 150 mm.</p>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={m30StrengthData} barCategoryGap="30%">
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#737373' }} />
                <YAxis domain={[0, 60]} tick={{ fontSize: 10, fill: '#737373' }} unit=" MPa" width={55} />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine y={30} stroke="#ef4444" strokeDasharray="4 2" label={{ value: 'M-30 min (30 MPa)', position: 'insideTopRight', fontSize: 10, fill: '#ef4444' }} />
                <Bar dataKey="value" name="Strength" radius={[6, 6, 0, 0]}>
                  {m30StrengthData.map((e, i) => <Cell key={i} fill={e.fill} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            {/* Individual cube results */}
            <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
              {[
                { label: 'Cube 1', ra: 24, r28: 47.5 },
                { label: 'Cube 2', ra: 26, r28: 50.5 },
                { label: 'Cube 3', ra: 26, r28: 50.5 },
              ].map((c, i) => (
                <div key={i} className="bg-neutral-50 rounded-xl p-3 text-center">
                  <div className="text-xs text-neutral-500 mb-1">{c.label}</div>
                  <div className="font-mono text-xs text-neutral-500">Ra = {c.ra} MPa</div>
                  <div className="font-mono font-semibold text-neutral-900">R₂₈ = {c.r28} MPa</div>
                </div>
              ))}
            </div>
          </div>

          {/* M-30 key params */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatBox label="Cement Content" value="422" unit=" kg/m³" sub="OPC-53, Ultratech" />
            <StatBox label="W/C Ratio" value="0.37" sub="vs 0.55 typical M-20 control" />
            <StatBox label="Admixture Dose" value="0.8%" unit="" sub="3.4 kg per m³ (Monoatom PC)" />
            <StatBox label="ACT Equiv. 28-Day" value="49.5" unit=" MPa" sub="Avg. of 3 cubes · 29% above target" highlight trend="up" />
          </div>

          {/* M-30 mix design table */}
          <ToggleSection title="M-30 Mix Design — With Monoatom Graphene Admixture" badge="BNR-1101-TR-823120">
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-neutral-600 bg-neutral-50 rounded-xl p-4">
                <div><span className="font-semibold block text-neutral-900">Grade</span>M-30 (RCC)</div>
                <div><span className="font-semibold block text-neutral-900">Exposure</span>Moderate</div>
                <div><span className="font-semibold block text-neutral-900">W/C Ratio</span>0.37</div>
                <div><span className="font-semibold block text-neutral-900">Target Mean</span>38.25 N/mm²</div>
                <div><span className="font-semibold block text-neutral-900">Design Slump</span>150 mm</div>
                <div><span className="font-semibold block text-neutral-900">Initial Slump</span>220 mm</div>
                <div><span className="font-semibold block text-neutral-900">Placing Method</span>Pumpable</div>
                <div><span className="font-semibold block text-neutral-900">Casting Date</span>31/10/2025</div>
              </div>
              <MixTable rows={m30GrapheneRows} />
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-green-900 mb-2">ACT Compressive Test Results (IS 9013 : 1978) — Age: 1 Day</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[400px]">
                    <thead>
                      <tr className="text-xs text-green-700 border-b border-green-200">
                        <th className="py-1 text-left pr-4">Cube</th>
                        <th className="py-1 text-right pr-4">Load (kN)</th>
                        <th className="py-1 text-right pr-4">Ra (MPa)</th>
                        <th className="py-1 text-right">R₂₈ Equiv. (MPa)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-green-100">
                      {[
                        { c: 1, load: 551.0, ra: 24, r28: 47.5 },
                        { c: 2, load: 587.4, ra: 26, r28: 50.5 },
                        { c: 3, load: 589.2, ra: 26, r28: 50.5 },
                      ].map(r => (
                        <tr key={r.c}>
                          <td className="py-2 pr-4 text-green-900 font-medium">Cube {r.c}</td>
                          <td className="py-2 text-right pr-4 font-mono text-neutral-700">{r.load}</td>
                          <td className="py-2 text-right pr-4 font-mono text-neutral-700">{r.ra}</td>
                          <td className="py-2 text-right font-mono font-semibold text-green-900">{r.r28}</td>
                        </tr>
                      ))}
                      <tr className="border-t-2 border-green-300">
                        <td colSpan={3} className="py-2 text-right pr-4 font-bold text-green-900">Average</td>
                        <td className="py-2 text-right font-bold text-green-900 font-mono">49.5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-green-700 mt-2">Formula: R₂₈ = 8.09 + 1.64 × Ra (IS 9013 : 1978). Failure mode: Usual (IS 516 Part-1 Sec-1).</p>
              </div>
            </div>
          </ToggleSection>
        </div>
      )}

      {/* ── Standards footer ───────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 pt-2">
        {[
          'IS 10262 : 2019 — Mix Design',
          'IS 456 : 2000 (RA 2021 Amd-5) — Structural Concrete',
          'IS 9013 : 1978 (RA 2013) — Accelerated Curing',
          'IS 383 : 2016 — Aggregates',
          'IS 516 — Cube Testing',
        ].map(s => (
          <span key={s} className="text-xs px-2.5 py-1 bg-neutral-100 text-neutral-500 rounded-lg border border-neutral-200">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GraphacreteLabResults;
