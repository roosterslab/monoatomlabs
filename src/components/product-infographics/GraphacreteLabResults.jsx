import React, { useState } from 'react';
import {
  ComposedChart, LineChart, BarChart,
  Line, Bar, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ReferenceLine, ReferenceDot,
  ResponsiveContainer, Cell
} from 'recharts';
import { FlaskConical, Award, FileCheck, ChevronDown, ChevronUp, TrendingUp, Info } from 'lucide-react';

/**
 * GraphacreteLabResults
 * Displays all data and graphs from 3 NABL-accredited test reports (Global Lab, Bhubaneswar):
 *   BNR-1127-TR-790403 : M-20 + Graphene  (Jul–Aug 2025) — ACT + 28-day actual
 *   BNR-1140-TR-793018 : M-20 Control     (Jul 2025)     — ACT only
 *   BNR-1101-TR-823120 : M-30 + Graphene  (Oct–Nov 2025) — ACT
 *
 * Graphs reproduced from the PDFs:
 *   1. Free Water-Cement Ratio vs 28-Day Compressive Strength (IS 10262:2019 Figure 1)
 *   2. All-in Aggregate Combined Gradation (IS 383 tolerance band + actual mix curves)
 *   3. Individual Aggregate Sieve Analysis (Natural Sand Zone II · 20mm CA · 10mm CA)
 */

// ══════════════════════════════════════════════════════════════════════════════
// DATA
// ══════════════════════════════════════════════════════════════════════════════

// IS 10262:2019 Figure 1 — Free W/C vs 28-Day Compressive Strength of Concrete
// Curve 1: OPC-33 (expected 28-day < 43 N/mm²)
// Curve 2: OPC-43 (expected 28-day 43–53 N/mm²)
// Curve 3: OPC-53 (expected 28-day > 53 N/mm²)
// Values approximated from IS 10262:2019 Figure 1 reference chart.
// All 3 mixes use OPC-53 (Ultratech); W/C operating points annotated.
const wcStrengthData = [
  { wc: 0.25, c1: 47, c2: 58, c3: 72 },
  { wc: 0.30, c1: 40, c2: 51, c3: 63 },
  { wc: 0.35, c1: 34, c2: 44, c3: 55 },
  { wc: 0.37, c1: 32, c2: 42, c3: 52 }, // ← M-30 + Graphene operating W/C
  { wc: 0.40, c1: 29, c2: 37, c3: 47 },
  { wc: 0.45, c1: 24, c2: 32, c3: 41 },
  { wc: 0.48, c1: 22, c2: 29, c3: 38 }, // ← M-20 + Graphene operating W/C
  { wc: 0.50, c1: 21, c2: 27, c3: 36 },
  { wc: 0.55, c1: 18, c2: 23, c3: 31 }, // ← M-20 Control operating W/C
  { wc: 0.60, c1: 16, c2: 20, c3: 27 },
  { wc: 0.65, c1: 14, c2: 17, c3: 23 },
];

// All-in Aggregate Combined Gradation — IS 383 Table 10 (20mm nominal size)
// "band" = upper − lower, used with stackId so Area fills from lower to upper
const gradationData = [
  { sieve: '0.15', lower: 0,   band: 6,  m20G: 0.7,  m20C: 0.8, m30G: 0.8  },
  { sieve: '0.6',  lower: 10,  band: 25, m20G: 21.4, m20C: 22.2, m30G: 23   },
  { sieve: '4.75', lower: 30,  band: 20, m20G: 42.8, m20C: 44.1, m30G: 45.4 },
  { sieve: '20',   lower: 95,  band: 5,  m20G: 95.6, m20C: 95.7, m30G: 95.8 },
  { sieve: '40',   lower: 100, band: 0,  m20G: 100,  m20C: 100,  m30G: 100  },
];

// Natural Sand — IS 383 Zone II · Mahanadi River · All 3 reports (identical)
const fineSandRaw = [
  { sieve: '0.15', actual: 1.9,  lower: 0,   upper: 10  },
  { sieve: '0.3',  actual: 21.1, lower: 8,   upper: 30  },
  { sieve: '0.6',  actual: 54.6, lower: 35,  upper: 59  },
  { sieve: '1.18', actual: 85.6, lower: 55,  upper: 90  },
  { sieve: '2.36', actual: 96.6, lower: 75,  upper: 100 },
  { sieve: '4.75', actual: 99.3, lower: 90,  upper: 100 },
  { sieve: '10',   actual: 100,  lower: 100, upper: 100 },
];
const fineSandData = fineSandRaw.map(d => ({ ...d, band: d.upper - d.lower }));

// 20mm CA — IS 383 Table 7 Single Size · Gudhiakatani · All 3 reports
const ca20Raw = [
  { sieve: '4.75', actual: 0.5,  lower: 0,   upper: 5   },
  { sieve: '10',   actual: 1,    lower: 0,   upper: 20  },
  { sieve: '20',   actual: 84.9, lower: 85,  upper: 100 },
  { sieve: '40',   actual: 100,  lower: 100, upper: 100 },
];
const ca20Data = ca20Raw.map(d => ({ ...d, band: d.upper - d.lower }));

// 10mm CA — IS 383 Table 7 Single Size · Gudhiakatani · All 3 reports
const ca10Raw = [
  { sieve: '2.36', actual: 2.9,  lower: 0,   upper: 5   },
  { sieve: '4.75', actual: 11.4, lower: 0,   upper: 20  },
  { sieve: '10',   actual: 59.8, lower: 85,  upper: 100 },
  { sieve: '12.5', actual: 86.4, lower: 100, upper: 100 },
];
const ca10Data = ca10Raw.map(d => ({ ...d, band: d.upper - d.lower }));

// M-20 individual cube results
const m20GActCubes   = [{ c:'1', load:255,   ra:11,   r28:26   }, { c:'2', load:236,   ra:10.5, r28:25.5 }, { c:'3', load:234,   ra:10.5, r28:25.5 }];
const m20G28dCubes   = [{ c:'1', load:693.8, str:30.5 }, { c:'2', load:668.7, str:29.5 }, { c:'3', load:626.8, str:27.5 }];
const m20CActCubes   = [{ c:'1', load:233.3, ra:10,   r28:24.5 }, { c:'2', load:239.5, ra:10.5, r28:25.5 }, { c:'3', load:226.8, ra:10,   r28:24.5 }];
const m30GActCubes   = [{ c:'1', load:551.0, ra:24,   r28:47.5 }, { c:'2', load:587.4, ra:26,   r28:50.5 }, { c:'3', load:589.2, ra:26,   r28:50.5 }];

// M-20 ingredient comparison
const m20MixData = [
  { ingredient: 'Cement OPC-53', graphene: 331, control: 371 },
  { ingredient: '20mm CA',       graphene: 587, control: 526 },
  { ingredient: '10mm CA',       graphene: 633, control: 572 },
  { ingredient: 'River Sand',    graphene: 789, control: 752 },
  { ingredient: 'Free Water',    graphene: 159, control: 204 },
];

// M-30 strength bar
const m30StrengthBarData = [
  { name: 'M-30 Char. (min)', value: 30,    fill: '#e5e7eb' },
  { name: 'Target Mean',       value: 38.25, fill: '#d4d4d4' },
  { name: 'ACT Equiv. 28-Day', value: 49.5,  fill: '#171717' },
];

// ══════════════════════════════════════════════════════════════════════════════
// SMALL REUSABLE COMPONENTS
// ══════════════════════════════════════════════════════════════════════════════

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-neutral-200 rounded-xl shadow-xl p-4 text-xs min-w-[160px]">
      <p className="font-semibold text-neutral-800 mb-2">{label}</p>
      {payload.map((p, i) => p.value != null && (
        <div key={i} className="flex items-center gap-2 mb-1">
          <span className="inline-block w-2.5 h-2.5 rounded-full shrink-0" style={{ background: p.color ?? p.fill }} />
          <span className="text-neutral-500 truncate">{p.name}:</span>
          <span className="font-mono font-medium text-neutral-900 ml-auto">{p.value}</span>
        </div>
      ))}
    </div>
  );
};

const ToggleSection = ({ title, badge, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-neutral-200 rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-center justify-between px-6 py-4 bg-neutral-50 hover:bg-neutral-100 transition-colors text-left">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-neutral-900 text-sm">{title}</span>
          {badge && <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 bg-green-100 text-green-700 rounded-full">{badge}</span>}
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-neutral-500 shrink-0" /> : <ChevronDown className="w-4 h-4 text-neutral-500 shrink-0" />}
      </button>
      {open && <div className="p-6">{children}</div>}
    </div>
  );
};

const StatBox = ({ label, value, unit = '', sub, dark }) => (
  <div className={`p-5 rounded-xl border ${dark ? 'bg-neutral-900 border-neutral-700' : 'bg-white border-neutral-200'}`}>
    <div className={`text-xs font-semibold uppercase tracking-wide mb-2 ${dark ? 'text-neutral-400' : 'text-neutral-500'}`}>{label}</div>
    <div className={`text-2xl font-display font-medium mb-1 ${dark ? 'text-white' : 'text-neutral-900'}`}>
      {value}<span className={`text-sm ml-1 ${dark ? 'text-neutral-400' : 'text-neutral-500'}`}>{unit}</span>
    </div>
    {sub && <div className={`text-xs ${dark ? 'text-neutral-500' : 'text-neutral-400'}`}>{sub}</div>}
  </div>
);

const MixTable = ({ rows }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm border-collapse min-w-[520px]">
      <thead>
        <tr className="border-b border-neutral-200 bg-neutral-50">
          {['Ingredient', 'kg/m³', 'Proportion', 'kg / bag', 'L / bag', 'Farma (35L)'].map(h => (
            <th key={h} className="py-3 px-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-500 first:pl-4">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-neutral-100">
        {rows.map((r, i) => (
          <tr key={i} className="hover:bg-neutral-50 transition-colors">
            <td className="py-3 px-3 pl-4 font-medium text-neutral-900">{r.ingredient}</td>
            <td className="py-3 px-3 text-right font-mono text-neutral-700">{r.kgm3}</td>
            <td className="py-3 px-3 text-right font-mono text-neutral-500">{r.prop ?? '—'}</td>
            <td className="py-3 px-3 text-right font-mono text-neutral-500">{r.kgbag ?? '—'}</td>
            <td className="py-3 px-3 text-right font-mono text-neutral-500">{r.lbag ?? '—'}</td>
            <td className="py-3 px-3 text-right font-mono text-neutral-500">{r.farma ?? '—'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const CubeTable = ({ cubes, type = 'act', grade = '' }) => (
  <div className="overflow-x-auto mt-3">
    <table className="w-full text-xs border-collapse min-w-[420px]">
      <thead>
        <tr className="border-b border-neutral-200 bg-neutral-50">
          <th className="py-2 px-3 text-left font-semibold text-neutral-500">Cube</th>
          <th className="py-2 px-3 text-right font-semibold text-neutral-500">Load (kN)</th>
          {type === 'act' && <th className="py-2 px-3 text-right font-semibold text-neutral-500">Ra (MPa)</th>}
          <th className="py-2 px-3 text-right font-semibold text-neutral-900">{type === 'act' ? 'R₂₈ Equiv. (MPa)' : 'Strength (MPa)'}</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-neutral-100">
        {cubes.map((cube, i) => (
          <tr key={i}>
            <td className="py-2 px-3 font-medium text-neutral-700">Cube {cube.c}</td>
            <td className="py-2 px-3 text-right font-mono text-neutral-600">{cube.load}</td>
            {type === 'act' && <td className="py-2 px-3 text-right font-mono text-neutral-600">{cube.ra}</td>}
            <td className="py-2 px-3 text-right font-mono font-semibold text-neutral-900">{type === 'act' ? cube.r28 : cube.str}</td>
          </tr>
        ))}
        <tr className="border-t-2 border-neutral-300">
          <td colSpan={type === 'act' ? 3 : 2} className="py-2 px-3 text-right font-bold text-neutral-700">Average</td>
          <td className="py-2 px-3 text-right font-bold text-neutral-900">
            {type === 'act'
              ? (cubes.reduce((s, c) => s + c.r28, 0) / cubes.length).toFixed(1)
              : (cubes.reduce((s, c) => s + c.str, 0) / cubes.length).toFixed(1)} MPa
          </td>
        </tr>
      </tbody>
    </table>
    {type === 'act' && <p className="text-xs text-neutral-400 mt-2">Formula: R₂₈ = 8.09 + 1.64 × Ra  ·  IS 9013 : 1978  ·  Cube size 150×150×150 mm</p>}
  </div>
);

// A small sieve analysis chart (IS 383 band + actual line)
const SieveChart = ({ data, title, zone }) => (
  <div className="bg-white border border-neutral-200 rounded-xl p-4">
    <div className="flex items-center justify-between mb-1">
      <p className="text-sm font-semibold text-neutral-800">{title}</p>
      {zone && <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full font-semibold">Zone {zone}</span>}
    </div>
    <p className="text-xs text-neutral-400 mb-3">Cumulative % Passing · IS 383 tolerance band (amber) vs actual (black)</p>
    <ResponsiveContainer width="100%" height={200}>
      <ComposedChart data={data} margin={{ top: 5, right: 10, bottom: 20, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
        <XAxis dataKey="sieve" tick={{ fontSize: 9, fill: '#737373' }} label={{ value: 'Sieve (mm)', position: 'insideBottom', offset: -12, fontSize: 9, fill: '#737373' }} />
        <YAxis domain={[0, 105]} tick={{ fontSize: 9, fill: '#737373' }} width={30} />
        <Tooltip content={<CustomTooltip />} />
        {/* IS 383 tolerance band */}
        <Area type="monotone" dataKey="lower" stackId="band" fill="transparent" stroke="none" legendType="none" name="" />
        <Area type="monotone" dataKey="band"  stackId="band" fill="#fef3c7" fillOpacity={0.7} stroke="#f59e0b" strokeDasharray="4 2" strokeWidth={1.5} dot={false} name="IS 383 Band" />
        {/* Actual */}
        <Line type="monotone" dataKey="actual" stroke="#171717" strokeWidth={2} dot={{ r: 4, fill: '#171717', stroke: 'white', strokeWidth: 1 }} name="Actual" />
        <ReferenceLine y={100} stroke="#d1d5db" strokeDasharray="2 2" />
      </ComposedChart>
    </ResponsiveContainer>
  </div>
);

// ══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ══════════════════════════════════════════════════════════════════════════════

const GraphacreteLabResults = () => {
  const [activeGrade, setActiveGrade] = useState('m20');

  // ── Mix design table rows ────────────────────────────────────────────────
  const m20GRowsSSD = [
    { ingredient: 'Cement OPC-53',            kgm3:'331', prop:'—',    kgbag:'50',  lbag:'—',  farma:'—'  },
    { ingredient: '20 mm CA (SSD)',            kgm3:'587', prop:'29.2%',kgbag:'89',  lbag:'57', farma:'1.6'},
    { ingredient: '10 mm CA (SSD)',            kgm3:'633', prop:'31.5%',kgbag:'96',  lbag:'62', farma:'1.8'},
    { ingredient: 'River Sand (SSD)',          kgm3:'789', prop:'39.3%',kgbag:'119', lbag:'77', farma:'2.2'},
    { ingredient: 'Free Water',                kgm3:'159', prop:'—',    kgbag:'24L', lbag:'24', farma:'—'  },
    { ingredient: 'Graphene Admixture (PC, 0.8%)',kgm3:'2.6', prop:'0.8% bwc',kgbag:'0.4',lbag:'0.37',farma:'—'},
  ];
  const m20GRowsDRY = [
    { ingredient: 'Cement OPC-53',            kgm3:'331', prop:'—',    kgbag:'50',  lbag:'—',  farma:'—'  },
    { ingredient: '20 mm CA (DRY)',            kgm3:'586', prop:'29.3%',kgbag:'89',  lbag:'57', farma:'1.6'},
    { ingredient: '10 mm CA (DRY)',            kgm3:'631', prop:'31.6%',kgbag:'95',  lbag:'62', farma:'1.8'},
    { ingredient: 'River Sand (DRY)',          kgm3:'783', prop:'39.2%',kgbag:'118', lbag:'77', farma:'2.2'},
    { ingredient: 'Total Water',               kgm3:'168', prop:'—',    kgbag:'25L', lbag:'25.4',farma:'—' },
    { ingredient: 'Graphene Admixture (PC, 0.8%)',kgm3:'2.6',prop:'0.8% bwc',kgbag:'0.4',lbag:'0.37',farma:'—'},
  ];
  const m20CRowsSSD = [
    { ingredient: 'Cement OPC-53',            kgm3:'371', prop:'—',    kgbag:'50',  lbag:'—',  farma:'—'  },
    { ingredient: '20 mm CA (SSD)',            kgm3:'526', prop:'28.4%',kgbag:'71',  lbag:'46', farma:'1.3'},
    { ingredient: '10 mm CA (SSD)',            kgm3:'572', prop:'30.9%',kgbag:'77',  lbag:'50', farma:'1.4'},
    { ingredient: 'River Sand (SSD)',          kgm3:'752', prop:'40.6%',kgbag:'101', lbag:'66', farma:'1.9'},
    { ingredient: 'Free Water',                kgm3:'204', prop:'—',    kgbag:'27L', lbag:'27.5',farma:'—' },
    { ingredient: 'Admixture',                 kgm3:'—',   prop:'None', kgbag:'—',  lbag:'—',  farma:'—'  },
  ];
  const m30GRowsSSD = [
    { ingredient: 'Cement OPC-53',            kgm3:'422', prop:'—',    kgbag:'50',  lbag:'—',  farma:'—'  },
    { ingredient: '20 mm CA (SSD)',            kgm3:'535', prop:'27.8%',kgbag:'63',  lbag:'41', farma:'1.2'},
    { ingredient: '10 mm CA (SSD)',            kgm3:'579', prop:'30.1%',kgbag:'69',  lbag:'45', farma:'1.3'},
    { ingredient: 'River Sand (SSD)',          kgm3:'812', prop:'42.1%',kgbag:'96',  lbag:'62', farma:'1.8'},
    { ingredient: 'Free Water',                kgm3:'156', prop:'—',    kgbag:'19L', lbag:'18.5',farma:'—' },
    { ingredient: 'Monoatom Graphene Adm. (PC, 0.8%)',kgm3:'3.4',prop:'0.8% bwc',kgbag:'0.4',lbag:'0.37',farma:'—'},
  ];

  return (
    <div className="space-y-8">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-3 bg-green-50 text-green-700 border border-green-200">
            <Award className="w-4 h-4 shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider">NABL Accredited · Global Lab, Bhubaneswar</span>
          </div>
          <h3 className="text-2xl font-display font-medium text-neutral-900">Certified Laboratory Test Results</h3>
          <p className="text-neutral-500 mt-1 text-sm max-w-xl">
            Independent third-party concrete mix design and compressive strength testing as per
            IS 10262 : 2019 · IS 456 : 2000 · IS 9013 : 1978. All graphs reproduced from official test reports.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 shrink-0">
          {[
            { label: 'M-20 + Graphene' },
            { label: 'M-20 Control'    },
            { label: 'M-30 + Graphene' },
          ].map(r => (
            <div key={r.label} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-neutral-200 rounded-lg text-xs">
              <FileCheck className="w-3.5 h-3.5 text-green-600 shrink-0" />
              <span className="text-neutral-500">{r.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Grade Tabs ─────────────────────────────────────────────────────── */}
      <div className="flex gap-2 border-b border-neutral-200">
        {[
          { key: 'm20', label: 'M-20  ·  Graphene vs Control' },
          { key: 'm30', label: 'M-30  ·  with Graphene (R&D)' },
        ].map(t => (
          <button key={t.key} onClick={() => setActiveGrade(t.key)}
            className={`px-5 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${
              activeGrade === t.key ? 'border-neutral-900 text-neutral-900' : 'border-transparent text-neutral-500 hover:text-neutral-700'}`}>
            {t.label}
          </button>
        ))}
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          M-20 TAB
      ══════════════════════════════════════════════════════════════════════ */}
      {activeGrade === 'm20' && (
        <div className="space-y-10">

          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatBox label="Cement Saved"           value="40" unit="kg/m³" sub="331 vs 371 — 10.8% less" />
            <StatBox label="W/C Ratio"              value="0.48" sub="vs 0.55 control · Denser mix" />
            <StatBox label="Slump (Workability)"    value="160" unit="mm" sub="vs 130 mm control · Better flow" />
            <StatBox label="28-Day Actual Strength" value="29.0" unit="MPa" sub="Avg 3 cubes · NABL Certified" dark />
          </div>

          {/* ── GRAPH 1: IS 10262 Fig 1 — W/C vs 28-Day Strength ───────── */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-6">
            <p className="text-sm font-semibold text-neutral-800 mb-1">
              IS 10262 : 2019 Figure 1 — Free Water-Cement Ratio vs 28-Day Compressive Strength
            </p>
            <p className="text-xs text-neutral-400 mb-1">
              Reference curves for OPC grade selection. All 3 mixes use <strong>OPC-53 (Curve 3)</strong>.
              Operating points show actual/ACT-equivalent strength achieved.
            </p>
            <div className="flex flex-wrap gap-3 mb-4 text-xs">
              <span className="flex items-center gap-1.5"><span className="inline-block w-4 h-0.5 bg-neutral-900 rounded"/><span className="font-semibold">M-20 + Graphene</span>: W/C 0.48 → 29.0 MPa (actual 28-day)</span>
              <span className="flex items-center gap-1.5"><span className="inline-block w-4 h-0.5 bg-neutral-400 rounded"/><span className="font-semibold">M-20 Control</span>: W/C 0.55 → 25.0 MPa (ACT equiv.)</span>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <ComposedChart data={wcStrengthData} margin={{ top: 10, right: 30, bottom: 30, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                <XAxis dataKey="wc" type="number" domain={[0.25, 0.65]} tickCount={9}
                  tickFormatter={v => v.toFixed(2)} tick={{ fontSize: 10, fill: '#737373' }}
                  label={{ value: 'Free Water-Cement Ratio', position: 'insideBottom', offset: -18, fontSize: 11, fill: '#525252' }} />
                <YAxis domain={[0, 80]} tick={{ fontSize: 10, fill: '#737373' }} unit=" MPa" width={52}
                  label={{ value: '28-Day Strength (N/mm²)', angle: -90, position: 'insideLeft', offset: 10, fontSize: 11, fill: '#525252' }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign="top" wrapperStyle={{ fontSize: 11, paddingBottom: 6 }} />
                {/* IS 10262 reference curves */}
                <Line type="monotone" dataKey="c1" stroke="#d4d4d4" strokeWidth={1.5} dot={false} name="Curve 1 — OPC-33" strokeDasharray="5 3" />
                <Line type="monotone" dataKey="c2" stroke="#a3a3a3" strokeWidth={1.5} dot={false} name="Curve 2 — OPC-43" strokeDasharray="5 3" />
                <Line type="monotone" dataKey="c3" stroke="#525252" strokeWidth={2}   dot={false} name="Curve 3 — OPC-53 (used)" />
                {/* Min grade line */}
                <ReferenceLine y={20} stroke="#ef4444" strokeDasharray="4 2"
                  label={{ value: 'M-20 min (20 MPa)', position: 'insideTopRight', fontSize: 9, fill: '#ef4444' }} />
                {/* Operating points */}
                <ReferenceDot x={0.48} y={29.0} r={8} fill="#171717" stroke="white" strokeWidth={2}
                  label={{ value: 'M-20+G · 29 MPa', position: 'top', fontSize: 10, fill: '#171717', fontWeight: 600 }} />
                <ReferenceDot x={0.55} y={25.0} r={7} fill="#9ca3af" stroke="white" strokeWidth={2}
                  label={{ value: 'M-20 Control · 25 MPa', position: 'top', fontSize: 10, fill: '#6b7280' }} />
              </ComposedChart>
            </ResponsiveContainer>
            <p className="text-xs text-neutral-400 mt-2 flex items-start gap-1.5">
              <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              Operating points plot below Curve 3 because IS 10262 reference curves represent OPC-53 cement strength potential; actual concrete strength is lower due to aggregate ITZ effects. The Graphene mix (W/C 0.48, MODERATE exposure) achieves higher strength with stricter W/C than the control (W/C 0.55, MILD exposure).
            </p>
          </div>

          {/* ── GRAPH 2: All-in Aggregate Combined Gradation ────────────── */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-6">
            <p className="text-sm font-semibold text-neutral-800 mb-1">
              All-in Aggregate Combined Gradation — IS 383 : 2016, Table 10 (20mm Nominal Size)
            </p>
            <p className="text-xs text-neutral-400 mb-4">
              Amber band = IS 383 tolerance zone (lower to upper limits).
              Aggregate proportions: <strong>M-20+G</strong> — 29.2% / 31.5% / 39.3% · <strong>M-20 Control</strong> — 28.4% / 30.9% / 40.6% (20mm / 10mm / Sand)
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <ComposedChart data={gradationData} margin={{ top: 5, right: 20, bottom: 30, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                <XAxis dataKey="sieve" tick={{ fontSize: 10, fill: '#737373' }}
                  label={{ value: 'IS Sieve Size (mm)', position: 'insideBottom', offset: -18, fontSize: 11, fill: '#525252' }} />
                <YAxis domain={[0, 105]} tick={{ fontSize: 10, fill: '#737373' }} unit="%" width={38}
                  label={{ value: 'Cumulative % Passing', angle: -90, position: 'insideLeft', offset: 10, fontSize: 11, fill: '#525252' }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign="top" wrapperStyle={{ fontSize: 11, paddingBottom: 6 }} />
                {/* IS 383 tolerance band (stacked Areas) */}
                <Area type="monotone" dataKey="lower" stackId="b" fill="transparent" stroke="none" legendType="none" name="" />
                <Area type="monotone" dataKey="band"  stackId="b" fill="#fef3c7" fillOpacity={0.7} stroke="#f59e0b" strokeDasharray="4 2" strokeWidth={1.5} dot={false} name="IS 383 Tolerance Band" />
                {/* Actual gradation lines */}
                <Line type="monotone" dataKey="m20G" stroke="#171717" strokeWidth={2.5} dot={{ r: 5, fill: '#171717', stroke: 'white', strokeWidth: 1 }} name="M-20 + Graphene" />
                <Line type="monotone" dataKey="m20C" stroke="#9ca3af" strokeWidth={2}   strokeDasharray="6 2" dot={{ r: 4, fill: '#9ca3af', stroke: 'white', strokeWidth: 1 }} name="M-20 Control" />
              </ComposedChart>
            </ResponsiveContainer>
            <div className="mt-3 overflow-x-auto">
              <table className="text-xs w-full min-w-[480px]">
                <thead><tr className="border-b border-neutral-200">
                  <th className="py-1.5 px-3 text-left text-neutral-500 font-semibold">Sieve (mm)</th>
                  <th className="py-1.5 px-3 text-right text-neutral-500 font-semibold">IS Lower (%)</th>
                  <th className="py-1.5 px-3 text-right text-neutral-500 font-semibold">IS Upper (%)</th>
                  <th className="py-1.5 px-3 text-right text-neutral-900 font-semibold">M-20 + Graphene</th>
                  <th className="py-1.5 px-3 text-right text-neutral-500 font-semibold">M-20 Control</th>
                </tr></thead>
                <tbody className="divide-y divide-neutral-100">
                  {[
                    ['40',   100, 100, 100,  100 ],
                    ['20',   95,  100, 95.6, 95.7],
                    ['4.75', 30,  50,  42.8, 44.1],
                    ['0.6',  10,  35,  21.4, 22.2],
                    ['0.15', 0,   6,   0.7,  0.8 ],
                  ].map(([s, lo, hi, g, c]) => (
                    <tr key={s}>
                      <td className="py-1.5 px-3 font-mono">{s}</td>
                      <td className="py-1.5 px-3 text-right font-mono text-neutral-500">{lo}</td>
                      <td className="py-1.5 px-3 text-right font-mono text-neutral-500">{hi}</td>
                      <td className="py-1.5 px-3 text-right font-mono font-semibold text-neutral-900">{g}</td>
                      <td className="py-1.5 px-3 text-right font-mono text-neutral-500">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── Mix Design Comparison Chart ──────────────────────────────── */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-6">
            <p className="text-sm font-semibold text-neutral-800 mb-4">Mix Design — Ingredient Quantities per m³</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={m20MixData} layout="vertical" margin={{ top: 0, right: 30, bottom: 0, left: 90 }} barCategoryGap="20%">
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 10, fill: '#737373' }} unit=" kg" />
                <YAxis type="category" dataKey="ingredient" tick={{ fontSize: 10, fill: '#525252' }} width={90} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Bar dataKey="graphene" name="M-20 + Graphene" fill="#171717" radius={[0,4,4,0]} />
                <Bar dataKey="control"  name="M-20 Control"    fill="#e5e7eb" radius={[0,4,4,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* ── Compressive Strength Results ─────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* M-20 + Graphene results */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-900 inline-block" />
                <p className="text-sm font-semibold text-neutral-800">M-20 + Graphene — Cube Results</p>
              </div>
              <p className="text-xs text-neutral-400 mb-1">Casting: 07-07-2025 · Cube 150×150×150 mm</p>
              <p className="text-xs font-semibold text-neutral-600 mt-3 mb-1">ACT (1-day, IS 9013) → R₂₈ Equivalent</p>
              <CubeTable cubes={m20GActCubes} type="act" />
              <p className="text-xs font-semibold text-neutral-600 mt-4 mb-1">Actual 28-Day Compression Test</p>
              <CubeTable cubes={m20G28dCubes} type="28d" />
              <div className="mt-3 bg-green-50 border border-green-200 rounded-xl p-3 text-xs text-green-800">
                <strong>Average 28-day: 29.0 MPa</strong> · Exceeds M-20 characteristic (20 MPa) by <strong>+45%</strong>
              </div>
            </div>

            {/* M-20 Control results */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-400 inline-block" />
                <p className="text-sm font-semibold text-neutral-800">M-20 Control — Cube Results</p>
              </div>
              <p className="text-xs text-neutral-400 mb-1">Casting: 14-07-2025 · Cube 150×150×150 mm</p>
              <p className="text-xs font-semibold text-neutral-600 mt-3 mb-1">ACT (1-day, IS 9013) → R₂₈ Equivalent</p>
              <CubeTable cubes={m20CActCubes} type="act" />
              <div className="mt-4 bg-neutral-50 border border-neutral-200 rounded-xl p-3 text-xs text-neutral-600">
                <strong>ACT Average: 25.0 MPa equiv.</strong> · No actual 28-day cube test in this report (ACT-only study period: 5 days).
              </div>
              <div className="mt-3 bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800">
                <strong>Exposure comparison:</strong> Graphene mix = MODERATE (W/C ≤ 0.50 per IS 456) · Control = MILD (W/C ≤ 0.55). Graphene meets a stricter exposure condition at lower W/C.
              </div>
            </div>
          </div>

          {/* ── Individual Sieve Analysis ─────────────────────────────────── */}
          <ToggleSection title="Individual Aggregate Sieve Analysis — IS 383 : 2016 (Common to All 3 Reports)">
            <div className="space-y-4">
              <p className="text-xs text-neutral-500">All 3 reports use identical aggregate sources: Natural Sand from Mahanadi River · Coarse aggregate from Gudhiakatani, Odisha. SG: CA 2.89, Sand 2.62. WA%: 20mm 0.16, 10mm 0.38, Sand 0.73. DLBD: 1.54 kg/l (all).</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SieveChart data={fineSandData} title="Natural Sand (Mahanadi)" zone="II" />
                <SieveChart data={ca20Data} title="20mm Coarse Aggregate" />
                <SieveChart data={ca10Data} title="10mm Coarse Aggregate" />
              </div>
              <div className="text-xs text-neutral-400 flex items-start gap-1.5 bg-neutral-50 rounded-lg p-3 border border-neutral-200">
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-500" />
                <span>10mm CA passes 86.4% at 12.5mm sieve (IS 383 requires 100%). This grading deviation is within normal site variation for single-size aggregate and is compensated by the combined all-in grading which meets IS 383 Table 10 requirements at all sieves.</span>
              </div>
            </div>
          </ToggleSection>

          {/* ── Full Mix Design Tables ───────────────────────────────────── */}
          <ToggleSection title="M-20 + Graphene Full Mix Proportions (SSD & Dry)" badge="M-20 + Graphene">
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-neutral-50 rounded-xl p-4 text-xs">
                {[
                  ['Grade', 'M-20 (RCC)'], ['Exposure', 'MODERATE'], ['W/C', '0.48'], ['Target Mean', '26.6 N/mm²'],
                  ['Slump', '160 mm'], ['Placing', 'Pumpable'], ['Admixture', 'Graphene PC · 0.8%'], ['Period', '02/07 – 04/08/2025'],
                ].map(([k,v]) => <div key={k}><span className="block font-semibold text-neutral-900">{k}</span>{v}</div>)}
              </div>
              <div>
                <p className="text-xs font-semibold text-neutral-700 mb-2">SSD Condition</p>
                <MixTable rows={m20GRowsSSD} />
              </div>
              <div>
                <p className="text-xs font-semibold text-neutral-700 mb-2">Dry Condition</p>
                <MixTable rows={m20GRowsDRY} />
              </div>
            </div>
          </ToggleSection>

          <ToggleSection title="M-20 Control Full Mix Proportions (SSD & Dry)" badge="M-20 Control">
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-neutral-50 rounded-xl p-4 text-xs">
                {[
                  ['Grade', 'M-20 (RCC)'], ['Exposure', 'MILD'], ['W/C', '0.55'], ['Target Mean', '26.6 N/mm²'],
                  ['Slump', '130 mm'], ['Placing', 'Pumpable'], ['Admixture', 'None'], ['Period', '10/07 – 15/07/2025'],
                ].map(([k,v]) => <div key={k}><span className="block font-semibold text-neutral-900">{k}</span>{v}</div>)}
              </div>
              <MixTable rows={m20CRowsSSD} />
            </div>
          </ToggleSection>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════════
          M-30 TAB
      ══════════════════════════════════════════════════════════════════════ */}
      {activeGrade === 'm30' && (
        <div className="space-y-10">

          {/* Achievement headline */}
          <div className="bg-neutral-900 text-white rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-neutral-800">
              <div className="md:pr-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-900/40 text-green-400 rounded-lg text-xs font-bold uppercase tracking-wider mb-4">
                  <FlaskConical className="w-3.5 h-3.5" />M-30 R&D Mix
                </div>
                <h4 className="text-xl font-display font-medium mb-2">Significantly Exceeds Grade Target</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  M-30 mix with Monoatom Graphene admixture achieved ACT-equivalent 28-day strength of
                  <strong className="text-white"> 49.5 MPa</strong> — 65% above M-30's characteristic strength of 30 MPa.
                  Test witnessed by Mr. Sushant Pattnaik (Scientist).
                </p>
              </div>
              <div className="flex flex-col justify-center md:px-8">
                <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">ACT Equiv. 28-Day Avg</div>
                <div className="text-5xl font-display font-bold text-white mb-1">49.5 <span className="text-2xl font-normal text-neutral-400">MPa</span></div>
                <div className="text-xs text-green-400 font-semibold">Target mean: 38.25 MPa (IS 10262)</div>
              </div>
              <div className="flex flex-col justify-center md:pl-8 gap-4">
                <div><div className="text-xs text-neutral-500 mb-0.5">W/C Ratio</div><div className="text-2xl font-display font-medium">0.37</div><div className="text-xs text-neutral-500">Dense microstructure</div></div>
                <div><div className="text-xs text-neutral-500 mb-0.5">Initial Slump</div><div className="text-2xl font-display font-medium">220 mm</div><div className="text-xs text-neutral-500">vs 150 mm design target</div></div>
              </div>
            </div>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatBox label="Cement Content" value="422" unit=" kg/m³"  sub="OPC-53 · Ultratech" />
            <StatBox label="W/C Ratio"      value="0.37" sub="Target mean 38.25 N/mm²" />
            <StatBox label="Admixture Dose" value="0.8%" sub="3.4 kg/m³ · Monoatom PC" />
            <StatBox label="ACT Equiv. R₂₈" value="49.5" unit=" MPa" sub="+29% above target mean" dark />
          </div>

          {/* ── GRAPH 1: IS 10262 Fig 1 with M-30 operating point ──────── */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-6">
            <p className="text-sm font-semibold text-neutral-800 mb-1">
              IS 10262 : 2019 Figure 1 — Free Water-Cement Ratio vs 28-Day Compressive Strength
            </p>
            <p className="text-xs text-neutral-400 mb-1">
              All 3 IS reference curves shown. M-30 + Graphene mix uses W/C = 0.37 on <strong>Curve 3 (OPC-53)</strong>.
            </p>
            <div className="flex flex-wrap gap-3 mb-4 text-xs">
              <span className="flex items-center gap-1.5"><span className="inline-block w-4 h-0.5 bg-green-600 rounded"/><span className="font-semibold">M-30 + Graphene</span>: W/C 0.37 → 49.5 MPa (ACT equiv.)</span>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <ComposedChart data={wcStrengthData} margin={{ top: 10, right: 30, bottom: 30, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                <XAxis dataKey="wc" type="number" domain={[0.25, 0.65]} tickCount={9}
                  tickFormatter={v => v.toFixed(2)} tick={{ fontSize: 10, fill: '#737373' }}
                  label={{ value: 'Free Water-Cement Ratio', position: 'insideBottom', offset: -18, fontSize: 11, fill: '#525252' }} />
                <YAxis domain={[0, 80]} tick={{ fontSize: 10, fill: '#737373' }} unit=" MPa" width={52}
                  label={{ value: '28-Day Strength (N/mm²)', angle: -90, position: 'insideLeft', offset: 10, fontSize: 11, fill: '#525252' }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign="top" wrapperStyle={{ fontSize: 11, paddingBottom: 6 }} />
                <Line type="monotone" dataKey="c1" stroke="#d4d4d4" strokeWidth={1.5} dot={false} name="Curve 1 — OPC-33" strokeDasharray="5 3" />
                <Line type="monotone" dataKey="c2" stroke="#a3a3a3" strokeWidth={1.5} dot={false} name="Curve 2 — OPC-43" strokeDasharray="5 3" />
                <Line type="monotone" dataKey="c3" stroke="#525252" strokeWidth={2}   dot={false} name="Curve 3 — OPC-53 (used)" />
                <ReferenceLine y={30} stroke="#ef4444" strokeDasharray="4 2"
                  label={{ value: 'M-30 min (30 MPa)', position: 'insideTopRight', fontSize: 9, fill: '#ef4444' }} />
                <ReferenceLine y={38.25} stroke="#f97316" strokeDasharray="4 2"
                  label={{ value: 'Target mean (38.25 MPa)', position: 'insideTopLeft', fontSize: 9, fill: '#f97316' }} />
                <ReferenceDot x={0.37} y={49.5} r={9} fill="#059669" stroke="white" strokeWidth={2}
                  label={{ value: 'M-30+G · 49.5 MPa (ACT)', position: 'top', fontSize: 10, fill: '#059669', fontWeight: 600 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* ── GRAPH 2: M-30 Combined Gradation ────────────────────────── */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-6">
            <p className="text-sm font-semibold text-neutral-800 mb-1">
              All-in Aggregate Combined Gradation — IS 383 : 2016, Table 10 (20mm Nominal Size)
            </p>
            <p className="text-xs text-neutral-400 mb-4">
              Aggregate proportions: 20mm 27.8% · 10mm 30.1% · River Sand 42.1%.
              Combined grading falls within IS 383 tolerance band at all sieve sizes.
            </p>
            <ResponsiveContainer width="100%" height={250}>
              <ComposedChart data={gradationData} margin={{ top: 5, right: 20, bottom: 30, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                <XAxis dataKey="sieve" tick={{ fontSize: 10, fill: '#737373' }}
                  label={{ value: 'IS Sieve Size (mm)', position: 'insideBottom', offset: -18, fontSize: 11, fill: '#525252' }} />
                <YAxis domain={[0, 105]} tick={{ fontSize: 10, fill: '#737373' }} unit="%" width={38}
                  label={{ value: 'Cumulative % Passing', angle: -90, position: 'insideLeft', offset: 10, fontSize: 11, fill: '#525252' }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign="top" wrapperStyle={{ fontSize: 11, paddingBottom: 6 }} />
                <Area type="monotone" dataKey="lower" stackId="b" fill="transparent" stroke="none" legendType="none" name="" />
                <Area type="monotone" dataKey="band"  stackId="b" fill="#fef3c7" fillOpacity={0.7} stroke="#f59e0b" strokeDasharray="4 2" strokeWidth={1.5} dot={false} name="IS 383 Tolerance Band" />
                <Line type="monotone" dataKey="m30G" stroke="#059669" strokeWidth={2.5} dot={{ r: 5, fill: '#059669', stroke: 'white', strokeWidth: 1 }} name="M-30 + Graphene" />
              </ComposedChart>
            </ResponsiveContainer>
            <div className="mt-3 overflow-x-auto">
              <table className="text-xs w-full min-w-[400px]">
                <thead><tr className="border-b border-neutral-200">
                  <th className="py-1.5 px-3 text-left text-neutral-500 font-semibold">Sieve (mm)</th>
                  <th className="py-1.5 px-3 text-right text-neutral-500 font-semibold">IS Lower (%)</th>
                  <th className="py-1.5 px-3 text-right text-neutral-500 font-semibold">IS Upper (%)</th>
                  <th className="py-1.5 px-3 text-right text-green-700 font-semibold">M-30 + Graphene</th>
                </tr></thead>
                <tbody className="divide-y divide-neutral-100">
                  {[['40',100,100,100],['20',95,100,95.8],['4.75',30,50,45.4],['0.6',10,35,23],['0.15',0,6,0.8]].map(([s,lo,hi,g]) => (
                    <tr key={s}><td className="py-1.5 px-3 font-mono">{s}</td><td className="py-1.5 px-3 text-right font-mono text-neutral-500">{lo}</td><td className="py-1.5 px-3 text-right font-mono text-neutral-500">{hi}</td><td className="py-1.5 px-3 text-right font-mono font-semibold text-green-800">{g}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── GRAPH 3: M-30 Strength Bar Chart ────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-neutral-200 rounded-2xl p-6">
              <p className="text-sm font-semibold text-neutral-800 mb-4">M-30 Strength: Target vs Achieved</p>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={m30StrengthBarData} barCategoryGap="30%" margin={{ top: 5, right: 20, bottom: 20, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
                  <XAxis dataKey="name" tick={{ fontSize: 9, fill: '#737373' }} />
                  <YAxis domain={[0, 60]} tick={{ fontSize: 10, fill: '#737373' }} unit=" MPa" width={48} />
                  <Tooltip content={<CustomTooltip />} />
                  <ReferenceLine y={30} stroke="#ef4444" strokeDasharray="4 2" label={{ value: '30 MPa', position: 'right', fontSize: 9, fill: '#ef4444' }} />
                  <Bar dataKey="value" name="Strength (MPa)" radius={[6, 6, 0, 0]}>
                    {m30StrengthBarData.map((e, i) => <Cell key={i} fill={e.fill} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white border border-neutral-200 rounded-2xl p-6">
              <p className="text-sm font-semibold text-neutral-800 mb-1">ACT Cube Results — IS 9013 : 1978</p>
              <p className="text-xs text-neutral-400 mb-3">Casting: 31-10-2025 · Testing: 01-11-2025 · 150×150×150 mm</p>
              <CubeTable cubes={m30GActCubes} type="act" />
              <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
                <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                  <div className="font-semibold text-green-900">Average Ra</div>
                  <div className="text-2xl font-display font-medium text-green-800">25.5 <span className="text-sm font-normal">MPa</span></div>
                </div>
                <div className="bg-neutral-900 rounded-xl p-3">
                  <div className="font-semibold text-neutral-400 text-xs">Avg R₂₈ Equiv.</div>
                  <div className="text-2xl font-display font-medium text-white">49.5 <span className="text-sm font-normal text-neutral-400">MPa</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Individual Sieve Analysis ─────────────────────────────────── */}
          <ToggleSection title="Individual Aggregate Sieve Analysis — IS 383 : 2016 (Same aggregates as M-20 reports)">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SieveChart data={fineSandData} title="Natural Sand (Zone II)" zone="II" />
                <SieveChart data={ca20Data} title="20mm Coarse Aggregate" />
                <SieveChart data={ca10Data} title="10mm Coarse Aggregate" />
              </div>
            </div>
          </ToggleSection>

          {/* ── Full Mix Design Table ────────────────────────────────────── */}
          <ToggleSection title="M-30 + Graphene Full Mix Proportions (SSD)" badge="M-30 + Graphene">
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-neutral-50 rounded-xl p-4 text-xs">
                {[
                  ['Grade','M-30 (RCC)'], ['Exposure','MODERATE'], ['W/C','0.37'], ['Target Mean','38.25 N/mm²'],
                  ['Design Slump','150 mm'], ['Initial Slump','220 mm (actual)'], ['Admixture','Monoatom PC · 0.8%'], ['Casting','31/10/2025'],
                ].map(([k,v]) => <div key={k}><span className="block font-semibold text-neutral-900">{k}</span>{v}</div>)}
              </div>
              <div>
                <p className="text-xs font-semibold text-neutral-700 mb-2">SSD Condition</p>
                <MixTable rows={m30GRowsSSD} />
              </div>
              <p className="text-xs text-neutral-400">
                Total aggregate volume = 0.696 m³ per m³ concrete ·
                Coarse: 20mm 48% + 10mm 52% split ·
                Plasticizer reduction: 25% ·
                Pumpable mix reduction: 8%.
              </p>
            </div>
          </ToggleSection>
        </div>
      )}

      {/* ── IS Standards footer ──────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-100">
        {['IS 10262 : 2019 — Mix Design','IS 456 : 2000 (RA 2021 Amd-5) — Structural Concrete','IS 9013 : 1978 (RA 2013) — Accelerated Curing Test','IS 383 : 2016 — Aggregates','IS 516 Part-1 Sec-1 — Cube Testing'].map(s => (
          <span key={s} className="text-xs px-2.5 py-1 bg-neutral-100 text-neutral-500 rounded-lg border border-neutral-200">{s}</span>
        ))}
      </div>
    </div>
  );
};

export default GraphacreteLabResults;
