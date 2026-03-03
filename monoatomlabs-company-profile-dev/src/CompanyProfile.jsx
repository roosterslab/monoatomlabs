/**
 * Monoatom Labs — Company Profile
 * 12 pages · A4 Landscape (297 × 210 mm)
 * Content: verbatim from MAL_Profile.md — no additions
 * Redesigned to an innovative borderless alternating dark/light pitch deck aesthetic.
 */

import React from 'react';
import HexagonWave from './components/HexagonWave';

const TOTAL = 12;

/* ── Typographic Helpers ── */
const Eyebrow = ({ children, theme }) => (
    <div className={`font-mono text-[10px] font-bold tracking-[0.2em] uppercase mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
        {children}
    </div>
);

const TitleBig = ({ children, theme }) => (
    <h2 className={`font-display font-bold tracking-tight mb-4 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`} style={{ fontSize: '42px', lineHeight: 1.05 }}>
        {children}
    </h2>
);

const TitleSmall = ({ children, theme }) => (
    <h3 className={`font-display font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`} style={{ fontSize: '24px' }}>
        {children}
    </h3>
);

const BodyText = ({ children, theme }) => (
    <p className={`font-light leading-relaxed mb-6 ${theme === 'dark' ? 'text-white/70' : 'text-neutral-600'}`} style={{ fontSize: '14px' }}>
        {children}
    </p>
);

/* ── Page chrome ── */
const PgH = ({ num, label, theme }) => {
    const isDark = theme === 'dark';
    return (
        <div
            className={`flex items-center justify-between flex-shrink-0 relative z-20 border-b ${isDark ? 'border-white/10' : 'border-neutral-200'}`}
            style={{ padding: '0 12mm', height: '12mm' }}
        >
            <div className="flex items-center gap-4">
                <span className={`font-mono text-[10px] font-bold tracking-[0.2em] ${isDark ? 'text-blue-500/80' : 'text-blue-600'}`}>
                    {String(num).padStart(2, '0')}
                </span>
                <span className={`text-[11px] font-bold tracking-[0.15em] uppercase ${isDark ? 'text-white/40' : 'text-neutral-400'}`}>
                    {label}
                </span>
            </div>
            <div className={`flex items-center gap-2 ${isDark ? 'opacity-30' : 'opacity-40'}`}>
                <svg width="14" height="14" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" stroke={isDark ? "white" : "black"} strokeWidth="1.5" />
                    <path d="M16 8L22 11.5V18.5L16 22L10 18.5V11.5L16 8Z" stroke={isDark ? "white" : "black"} strokeWidth="1" />
                    <circle cx="16" cy="15" r="2" fill={isDark ? "white" : "black"} />
                </svg>
                <span className={`font-display text-[10px] font-bold tracking-[0.2em] uppercase ${isDark ? 'text-white' : 'text-black'}`}>
                    Monoatom Labs
                </span>
            </div>
        </div>
    );
};

const PgF = ({ n, theme }) => {
    const isDark = theme === 'dark';
    return (
        <div
            className={`flex items-center justify-between flex-shrink-0 relative z-20 border-t ${isDark ? 'border-white/10' : 'border-neutral-200'}`}
            style={{ padding: '0 12mm', height: '10mm' }}
        >
            <span className={`text-[10px] font-medium tracking-wide ${isDark ? 'text-white/20' : 'text-neutral-400'}`}>www.monoatomlabs.com</span>
            <div className="flex items-center gap-3">
                <span className={`text-[10px] font-mono font-bold ${isDark ? 'text-white/30' : 'text-neutral-500'}`}>{n} <span className="opacity-50 mx-1">/</span> {TOTAL}</span>
            </div>
            <span className={`text-[10px] font-medium tracking-wide uppercase ${isDark ? 'text-white/20' : 'text-neutral-400'}`}>Company Profile 2025</span>
        </div>
    );
};

const BgGraphics = ({ theme }) => (
    <>
        {theme === 'dark' && <HexagonWave />}
        <div className="vignette" />
        {theme === 'dark' && <div className="gradient-overlay" />}
    </>
);

/* ──────────────────────────────────────────────────────────────
   P01 · Cover (DARK)
────────────────────────────────────────────────────────────── */
const P01Cover = () => (
    <div className="profile-page theme-dark flex flex-row">
        <div className="absolute inset-0 z-0">
            <BgGraphics theme="dark" />
        </div>
        <div className="w-[55%] flex flex-col justify-between relative z-10" style={{ padding: '16mm 20mm' }}>
            <div className="flex justify-between items-start">
                <span className="text-[11px] font-mono font-bold tracking-[0.3em] text-blue-500 uppercase">
                    Company Profile <span className="text-white/20 mx-2">|</span> 2025
                </span>
            </div>

            <div className="max-w-4xl mt-16 mb-auto">
                <h1 className="font-display font-bold text-white leading-none mb-8 tracking-tighter" style={{ fontSize: '110px' }}>
                    MONOATOM<br />LABS
                </h1>

                <div className="pl-6 border-l-[3px] border-l-blue-500 py-2">
                    <p className="font-display text-white mb-3" style={{ fontSize: '24px', fontWeight: '500' }}>
                        Advanced Materials for the 4th Industrial Revolution
                    </p>
                    <p className="font-mono font-bold text-blue-400" style={{ fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                        Unlocking the Trillion Dollar Economy
                    </p>
                </div>
            </div>

            <div className="flex justify-between items-end border-t border-white/10 pt-6 mt-16">
                <div className="flex gap-12">
                    {[
                        { l: 'Email', v: 'info@monoatomlabs.com' },
                        { l: 'Web', v: 'www.monoatomlabs.com' },
                        { l: 'Phone', v: '+91-989-819-9809' }
                    ].map((c, i) => (
                        <div key={i}>
                            <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1.5">{c.l}</p>
                            <p className="text-[12px] font-mono text-white/80">{c.v}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="w-[45%] img-col img-col-lab border-l border-white/10 relative z-10 h-full">
            <div className="absolute bottom-6 right-10 text-right">
                <p className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] mb-1.5 backdrop-blur-sm p-1 rounded">HQ</p>
                <p className="text-[12px] font-mono text-white/90 backdrop-blur-sm p-1 rounded">3rd Floor, iHub<br />Ahmedabad, Gujarat</p>
            </div>
        </div>
    </div>
);

/* ──────────────────────────────────────────────────────────────
   P02 · About Our Company (LIGHT)
────────────────────────────────────────────────────────────── */
const P02About = () => (
    <div className="profile-page theme-light">
        <BgGraphics theme="light" />
        <PgH num={2} label="About" theme="light" />

        <div className="flex flex-1 relative z-10" style={{ padding: '10mm 12mm', gap: '10mm' }}>
            {/* Left — text */}
            <div className="flex flex-col w-[38%]">
                <TitleBig theme="light">Engineering the future of <span className="text-blue-600">industrial materials.</span></TitleBig>
                <div className="accent-bar mt-2 mb-6"></div>
                <BodyText theme="light">
                    Monoatom Labs develops breakthrough materials engineered for the future—graphene derivatives, functional nanomaterials, bio-inspired chemistries, and performance-enhancing additives.
                </BodyText>
                <BodyText theme="light">
                    We combine deep scientific expertise with real-world industrial deployment capabilities, ensuring every innovation can scale from lab prototype to mass manufacturing.
                </BodyText>
            </div>

            {/* Centre — image */}
            <div className="flex-shrink-0 overflow-hidden" style={{ width: '22%', borderRadius: '3px' }}>
                <img
                    src="/images/graffisol_lifecycle_lab_making.png"
                    alt="R&D Lab"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right — vision / mission */}
            <div className="flex flex-col justify-center border-l border-neutral-200 pl-10" style={{ width: '40%' }}>
                <Eyebrow theme="light">Our Vision</Eyebrow>
                <p className="text-neutral-900 font-display font-bold mb-10 leading-tight" style={{ fontSize: '26px' }}>
                    Advanced Nanomaterials for Better Quality of Life.
                </p>

                <Eyebrow theme="light">Our Mission</Eyebrow>
                <p className="text-neutral-700 leading-relaxed mb-6 font-medium" style={{ fontSize: '14px' }}>
                    To create commercially viable graphene solutions for industrial applications. Develop, validate, and make commercial-scale manufacturing of innovations to provide:
                </p>

                <ul className="flex flex-col gap-3">
                    {['Clean Air', 'Clean Water', 'Clean Energy', 'Better Life'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <span className="text-blue-600 font-bold">→</span>
                            <span className="text-neutral-800 font-bold tracking-wide uppercase" style={{ fontSize: '13px' }}>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <PgF n={2} theme="light" />
    </div>
);

/* ──────────────────────────────────────────────────────────────
   P03 · Meet Our Founders (DARK)
────────────────────────────────────────────────────────────── */
const founders = [
    {
        name: 'Sushanth Paatnaik',
        title: 'Co-Founder & CEO',
        highlight: '6× President of India Awardee',
        bio: 'A materials innovator and entrepreneur. Awarded six times by the President of India, with global recognitions including MIT TR35, TED India Speaker, and NASA-recognised innovator. He is focused on building next-generation technologies rooted in graphene, nano-materials, and advanced chemical engineering. He brings deep experience in deep-tech commercialisation, IP development, and scaling science-driven ventures.',
    },
    {
        name: 'Aayush Bansal',
        title: 'Co-Founder & Investor',
        highlight: 'Promoter of Kalika Steel',
        bio: "Promoter of Kalika Steel, one of India's leading steel manufacturing groups, and a strategic investor in Monoatom Labs. He is a Computer Science Engineer with an MBA in Technology Management, NMIMS University. His expertise spans large-scale industrial operations and market expansion. Aayush enables Monoatom Labs to bridge breakthrough material innovations with real-world manufacturing, supply-chain integration, and national-scale deployment.",
    },
];

const P03Founders = () => (
    <div className="profile-page theme-dark flex flex-col">
        <BgGraphics theme="dark" />
        <PgH num={3} label="Meet Our Founders" theme="dark" />

        <div className="flex flex-1 relative z-10 border-t border-white/10" style={{ height: '100%' }}>
            {/* Left — conference photo */}
            <div className="w-[42%] img-col img-col-conf h-full border-r border-white/10 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />
                <div className="absolute bottom-8 left-8 right-8">
                    <p className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-blue-400 mb-2">Monoatom Labs — Mashaal Summit</p>
                    <p className="text-white/60 font-light" style={{ fontSize: '11px' }}>Sushanth Paatnaik presenting Monoatom Labs to industry leaders</p>
                </div>
            </div>

            {/* Right — founders content */}
            <div className="w-[58%] flex flex-col justify-center" style={{ padding: '8mm 12mm' }}>
                <TitleBig theme="dark">Merged <span className="text-white/40">Expertise</span></TitleBig>
                <div className="accent-bar mt-1 mb-8"></div>

                <div className="flex flex-col gap-8">
                    {founders.map((f, i) => (
                        <div key={i} className="flex flex-col">
                            <Eyebrow theme="dark">{f.title}</Eyebrow>
                            <h3 className="font-display font-bold text-white tracking-tight mb-1" style={{ fontSize: '26px' }}>{f.name}</h3>
                            <p className="text-blue-400 font-mono tracking-widest uppercase mb-3" style={{ fontSize: '10px' }}>{f.highlight}</p>
                            <p className="text-white/65 leading-relaxed font-light" style={{ fontSize: '12px' }}>{f.bio}</p>
                            {i < founders.length - 1 && <div className="line-separator mt-6" />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <PgF n={3} theme="dark" />
    </div>
);

/* ──────────────────────────────────────────────────────────────
   P04 · Sushanth's Recognitions (LIGHT)
────────────────────────────────────────────────────────────── */
const awards = [
    'Six times President of India Awardee',
    'TED Speaker',
    'NASA Awardee',
    'MIT TR-35 Awardee',
    'CEO Club Speaker',
    'Silicon Valley Speaker',
    'Intel IRIS Awardee',
    'MIT Fab-10 & 11 Awardee',
    'ICAI Abu Dhabi Speaker',
    'INK Fellow',
    'STPI-Chunauti Winner',
    'ELECRAMA Winner',
    'Mashaal Green Fellowship Awardee',
];

const P04Recognitions = () => (
    <div className="profile-page theme-light">
        <BgGraphics theme="light" />
        <div className="absolute inset-0 flex flex-col z-10">
            <PgH num={4} label="Global Recognitions" theme="light" />

            <div className="flex flex-1" style={{ padding: '10mm 12mm' }}>
                <div className="w-[45%] flex flex-col justify-center border-r border-neutral-200 pr-12">
                    <Eyebrow theme="light">Pioneering Excellence</Eyebrow>
                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="font-display font-bold leading-none text-neutral-900" style={{ fontSize: '160px', letterSpacing: '-0.04em' }}>13</span>
                        <span className="font-display font-bold text-blue-600" style={{ fontSize: '48px' }}>+</span>
                    </div>
                    <p className="text-neutral-500 font-display uppercase tracking-[0.2em] leading-relaxed mb-8" style={{ fontSize: '18px' }}>
                        Major Global &<br />National Awards
                    </p>
                    <BodyText theme="light">
                        Recognized globally by the world's most prestigious institutions for advancing deep-tech materials science and fostering commercial innovation.
                    </BodyText>
                </div>

                <div className="w-[55%] pl-12 flex flex-col justify-center">
                    <ul className="grid grid-cols-2 gap-x-8 gap-y-6">
                        {awards.map((a, i) => (
                            <li key={i} className="flex gap-4">
                                <span className="font-mono text-[10px] text-blue-600 font-bold pt-1">{String(i + 1).padStart(2, '0')}</span>
                                <span className="text-neutral-800 font-medium leading-relaxed" style={{ fontSize: '14px' }}>{a}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <PgF n={4} theme="light" />
        </div>
    </div>
);

/* ──────────────────────────────────────────────────────────────
   P05 · Our Facilities (DARK)
────────────────────────────────────────────────────────────── */
const facilities = [
    {
        num: '01',
        name: 'Nanomaterials R&D Facility',
        desc: 'State-of-the-art laboratory focused on graphene processing, precision dispersion technologies, and high-purity nano-additive development.',
        caps: [
            'Precision surface chemistry modification',
            'Advanced characterization (SEM, TEM, Raman)',
            'Pilot-scale dispersion & functionalization units',
            'Nano-particle synthesization reactors'
        ],
    },
    {
        num: '02',
        name: 'Application & Testing Facility',
        desc: 'Advanced testing grounds designed for real-industry validation across coatings, concrete, composites, energy systems, and bio-chemical applications.',
        caps: [
            'Mechanical strength & extreme durability testing',
            'Thermal & electrical conductivity analysis labs',
            'Prototype fabrication & scaling equipment',
            'Weather-simulated field testing setups'
        ],
    },
];

const P05Facilities = () => (
    <div className="profile-page theme-dark flex flex-col">
        <BgGraphics theme="dark" />
        <PgH num={5} label="Facilities" theme="dark" />

        <div className="relative z-10 flex flex-row flex-1 border-t border-white/10">
            <div className="w-[50%] flex flex-col" style={{ padding: '8mm 12mm' }}>
                <div className="mb-8">
                    <TitleBig theme="dark">Infrastructure for <span className="text-blue-400">Scale</span></TitleBig>
                    <div className="accent-bar mt-2 mb-6"></div>
                    <BodyText theme="dark">
                        Operating state-of-the-art research and testing laboratories globally equipped for advanced material synthesis, rigorous validation, and mass industrial scale-up.
                    </BodyText>
                </div>

                <div className="flex flex-col gap-10 flex-1 justify-center pr-6">
                    {facilities.map((f, i) => (
                        <div key={i} className="flex flex-col">
                            <div className="flex items-end gap-4 border-b border-white/20 pb-2 mb-4">
                                <span className="font-display font-bold text-white/20 leading-none" style={{ fontSize: '42px' }}>{f.num}</span>
                                <h3 className="font-display font-bold text-white mb-1" style={{ fontSize: '20px' }}>{f.name}</h3>
                            </div>
                            <p className="text-white/70 font-light leading-relaxed" style={{ fontSize: '13px' }}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-[50%] img-col img-col-lab border-l border-white/10 relative h-full">
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-12">
                    <Eyebrow theme="dark">Core Capabilities</Eyebrow>
                    <ul className="minimal-list mt-2 grid grid-cols-1 gap-2">
                        {facilities[0].caps.map((c, idx) => <li key={`cap-1-${idx}`}>{c}</li>)}
                        {facilities[1].caps.map((c, idx) => <li key={`cap-2-${idx}`}>{c}</li>)}
                    </ul>
                </div>
            </div>
        </div>
        <PgF n={5} theme="dark" />
    </div>
);

/* ──────────────────────────────────────────────────────────────
   Reusable Borderless Product Structure
────────────────────────────────────────────────────────────── */
const ProdBlock = ({ num, name, desc, benefits, metric, metricLabel, theme }) => (
    <div className="flex flex-col flex-1">
        <div className={`border-b pb-4 mb-4 flex justify-between items-end ${theme === 'dark' ? 'border-white/20' : 'border-neutral-300'}`}>
            <div>
                <Eyebrow theme={theme}>{num}</Eyebrow>
                <TitleSmall theme={theme}>{name}</TitleSmall>
            </div>
            {metric && (
                <div className="text-right">
                    <p className={`font-display font-bold leading-none ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`} style={{ fontSize: '36px' }}>{metric}</p>
                    <p className={`text-[9px] font-bold uppercase tracking-[0.1em] mt-1 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>{metricLabel}</p>
                </div>
            )}
        </div>
        <BodyText theme={theme}>{desc}</BodyText>
        <Eyebrow theme={theme}>Performance Benefits</Eyebrow>
        <ul className="minimal-list">
            {benefits.map((b, i) => <li key={i} className="text-[12px]">{b}</li>)}
        </ul>
    </div>
);

/* ──────────────────────────────────────────────────────────────
   P06 · Our Market-Ready Products (Graphacrete + Graffisol) (LIGHT)
────────────────────────────────────────────────────────────── */
const P06Products1 = () => (
    <div className="profile-page theme-light flex flex-col">
        <BgGraphics theme="light" />
        <PgH num={6} label="Market-Ready Products" theme="light" />

        <div className="flex flex-1 relative z-10 border-t border-neutral-200" style={{ height: '100%' }}>
            <div className="w-[45%] img-col img-col-graphacrete h-full border-r border-neutral-200"></div>

            <div className="w-[55%] flex flex-col justify-center" style={{ padding: '8mm 12mm' }}>
                <ProdBlock
                    theme="light"
                    num="01" name="Graphacrete"
                    metric="+50%" metricLabel="Strength Increase"
                    desc="High-performance additives engineered at the molecular level for dramatically stronger, longer-lasting, and sustainable construction materials."
                    benefits={[
                        '50% increase in baseline compressive & flexural strength',
                        'Drastically improved structural crack resistance & durability',
                        'Lower permeability forming higher core chemical resistance',
                        'Reduced carbon footprint per cubic meter of concrete poured',
                    ]}
                />
                <div className="line-separator my-8 bg-neutral-200" style={{ height: '1px', width: '100%' }}></div>
                <ProdBlock
                    theme="light"
                    num="02" name="Graffisol"
                    metric="+12%" metricLabel="Energy Gain"
                    desc="A next-generation nanocoating designed to enhance photon absorption, surface conductivity, and thermal management of industrial solar panels."
                    benefits={[
                        '10–12% verified increase in solar panel energy output',
                        'Superior thermal dissipation minimizing efficiency degradation',
                        'Active hydrophobic behavior creating self-cleaning surfaces'
                    ]}
                />
            </div>
        </div>
        <PgF n={6} theme="light" />
    </div>
);

/* ──────────────────────────────────────────────────────────────
   P07 · Our Market-Ready Products (HD-G-PE + Ceraphene) (DARK)
────────────────────────────────────────────────────────────── */
const P07Products2 = () => (
    <div className="profile-page theme-dark flex flex-col">
        <BgGraphics theme="dark" />
        <PgH num={7} label="Market-Ready Products" theme="dark" />

        <div className="flex flex-1 relative z-10 border-t border-white/10" style={{ height: '100%' }}>
            <div className="w-[55%] flex flex-col justify-center" style={{ padding: '8mm 12mm' }}>
                <ProdBlock
                    theme="dark"
                    num="03" name="HD-G-PE"
                    metric="20x" metricLabel="Elongation Strength"
                    desc="A breakthrough graphene-reinforced polymer enhancer rigorously engineered for HDPE pipes, films, specialized packaging, and complex extrusion applications."
                    benefits={[
                        '+30% immediate improvement in baseline tensile & flexural strength',
                        'Massive 20× exponential improvement in polymer elongation strength',
                        '+20% minimum increase in total product lifecycle and durability'
                    ]}
                />
                <div className="line-separator my-8 bg-white/10" style={{ height: '1px', width: '100%' }}></div>
                <ProdBlock
                    theme="dark"
                    num="04" name="Ceraphene"
                    metric="9H+" metricLabel="Hardness Rating"
                    desc="An ultra-durable graphene-enhanced ceramic matrix coating providing industry-leading surface protection, hardness, and hydrophobic performance."
                    benefits={[
                        'Achieves true 9H+ hardness delivering extreme commercial scratch resistance',
                        'Unparalleled UV, heat, oxidation, and severe chemical durability',
                        'Forms an ultra-hydrophobic & deep-stain-resistant barrier'
                    ]}
                />
            </div>
            <div className="w-[45%] img-col img-col-hdg h-full border-l border-white/10"></div>
        </div>
        <PgF n={7} theme="dark" />
    </div>
);

/* ──────────────────────────────────────────────────────────────
   P08 · Products in Pipeline (LIGHT)
────────────────────────────────────────────────────────────── */
const pipeline = [
    { name: 'Rustene', type: 'Anti-Corrosion Matrix', desc: 'Graphene-based anti-rusting paint forming an impenetrable ultra-thin barrier, fundamentally preventing oxidation and exponentially extending metal asset lifespans.' },
    { name: 'Graphyre', type: 'Reinforced Elastomers', desc: 'Advanced graphene-reinforced tyres engineered to deliver unprecedented structural strength, radically lower rolling resistance, and highly extended service lifecycles.' },
    { name: 'Graphosite', type: 'Structural Fibres', desc: 'Ultra-lightweight, extreme-strength graphene-reinforced fibres architected specifically for next-generation aerospace and automotive structural composites.' },
    { name: 'Thermaphene', type: 'Thermal Management', desc: 'Active graphene-based heating layer solutions enabling highly efficient, lightweight, and extreme-performance winter wear and thermal blankets.' },
    { name: 'Armophene', type: 'Ballistic Protection', desc: 'Graphene-infused bulletproof textiles delivering lightweight, highly flexible armor architecture with superior kinetic dissipation compared to traditional Kevlar.' },
];

const P08Pipeline = () => (
    <div className="profile-page theme-light">
        <BgGraphics theme="light" />
        <div className="absolute inset-0 flex flex-col z-10">
            <PgH num={8} label="R&D Pipeline" theme="light" />

            <div className="flex flex-1" style={{ padding: '10mm 12mm' }}>
                <div className="w-[35%] border-r border-neutral-200 pr-10 flex flex-col justify-center">
                    <TitleBig theme="light">Tomorrow's <span className="text-blue-600">Materials.</span></TitleBig>
                    <div className="accent-bar mt-2 mb-6"></div>
                    <BodyText theme="light">
                        Monoatom Labs engineers advanced material solutions addressing the most severe industrial challenges across industrial coating, mobility, defense, aerospace, and technical fabrics.
                    </BodyText>
                </div>

                <div className="w-[65%] pl-10 flex flex-col justify-center gap-6">
                    {pipeline.map((p, i) => (
                        <div key={i} className="flex items-start gap-6 border-b border-neutral-100 pb-4 last:border-0 last:pb-0">
                            <span className="font-mono text-[16px] font-bold text-blue-600 w-8 flex-shrink-0">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <div className="w-[180px] flex-shrink-0">
                                <TitleSmall theme="light">{p.name}</TitleSmall>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">{p.type}</p>
                            </div>
                            <p className="text-neutral-700 leading-relaxed font-light" style={{ fontSize: '13px' }}>
                                {p.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <PgF n={8} theme="light" />
        </div>
    </div>
);

/* ──────────────────────────────────────────────────────────────
   P09 · Field-Scale Pilot Trials (DARK)
────────────────────────────────────────────────────────────── */
const trials = [
    'High-selectivity graphene membranes enabling hyper-efficient hydrogen separation and clean production with radically reduced energy losses.',
    'Ultra-thin nano-membranes delivering high-flux, low-energy commercial seawater desalination and severe industrial water purification.',
    'Atmospheric graphene membranes rigorously engineered to harvest ambient moisture and convert air into potable water efficiently at scale.',
    'Graphene-reinforced glass fibres offering unmatched enhanced tensile strength, durability, and multifunctional performance in structural composites.',
    'Graphene-enabled advanced battery storage architectures delivering vastly higher power density, faster response times, and extended lifecycles.',
];

const P09Trials = () => (
    <div className="profile-page theme-dark flex flex-col">
        <BgGraphics theme="dark" />
        <PgH num={9} label="Pilot Trials" theme="dark" />

        <div className="flex flex-col flex-1 relative z-10" style={{ padding: '12mm 12mm 8mm 12mm', justifyContent: 'flex-start' }}>
            <div className="mb-12">
                <Eyebrow theme="dark">Validation & Scale</Eyebrow>
                <TitleBig theme="dark">
                    Proven in the lab. Tested in the field.
                </TitleBig>
                <div className="accent-bar mt-2"></div>
            </div>

            <div className="grid grid-cols-2 gap-x-16 gap-y-10">
                {trials.map((t, i) => (
                    <div key={i} className={`flex gap-6 items-start ${i === trials.length - 1 ? 'col-span-2 max-w-2xl' : ''}`}>
                        <span className="font-display font-bold text-blue-500/80 leading-none" style={{ fontSize: '64px', marginTop: '-12px' }}>
                            {String(i + 1).padStart(2, '0')}
                        </span>
                        <div className="flex-1">
                            <p className="text-white/80 font-light leading-relaxed tracking-wide" style={{ fontSize: '15px' }}>{t}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <PgF n={9} theme="dark" />
    </div>
);

/* ──────────────────────────────────────────────────────────────
   P10 · Collaborative Engagement Models (LIGHT)
────────────────────────────────────────────────────────────── */
const models = [
    {
        name: 'JV–SPV Structure',
        sub: 'Strategic Co-Development',
        text: "We partner with select Tier-1 clients through Joint Ventures structured via Special Purpose Vehicles (SPVs) to co-develop, manufacture, and commercialise macro-scale graphene-enabled products. This elite model enables balanced shared risk, immense shared IP value creation, and long-term strategic alignment—perfectly combining Monoatom Labs' deep-tech scientific expertise with our partners' mass manufacturing scale and global market penetration.",
    },
    {
        name: 'Technology Licensing',
        sub: 'Rapid Integration Pipeline',
        text: "Designed for exceedingly fast, capital-efficient deployment, Monoatom Labs provides direct horizontal technology licensing of its closely guarded proprietary formulations, chemical processes, and application-specific intellectual property. This streamlined framework allows industrial partners to rapidly drop-in graphene innovations directly into existing global production lines under a structured royalty and continuous technical support architecture.",
    },
];

const P10Partnership = () => (
    <div className="profile-page theme-light flex flex-col">
        <BgGraphics theme="light" />
        <PgH num={10} label="Engagement Models" theme="light" />

        <div className="flex flex-1 relative z-10" style={{ padding: '12mm 12mm', gap: '16mm' }}>
            <div className="w-[35%] flex flex-col">
                <TitleBig theme="light">Strategic <span className="text-blue-600">Synergy.</span></TitleBig>
                <div className="accent-bar mt-2 mb-6"></div>
                <BodyText theme="light">
                    Monoatom Labs executes a highly flexible, partnership-driven collaboration approach engineered to exponentially accelerate the global industrial adoption of graphene and advanced nanomaterial technologies.
                </BodyText>

                <div className="mt-12">
                    <Eyebrow theme="light">The Core Goal</Eyebrow>
                    <p className="text-neutral-900 font-display font-bold text-[22px] leading-tight">Unhindered scaling of deep-tech solutions through shared infrastructure.</p>
                </div>
            </div>

            <div className="w-[65%] flex flex-col gap-10 justify-center border-l border-neutral-200 pl-16">
                {models.map((m) => (
                    <div key={m.name} className="flex flex-col relative">
                        <Eyebrow theme="light">{m.sub}</Eyebrow>
                        <TitleSmall theme="light">{m.name}</TitleSmall>
                        <p className="text-neutral-700 font-light leading-relaxed" style={{ fontSize: '14px' }}>{m.text}</p>
                    </div>
                ))}
            </div>
        </div>
        <PgF n={10} theme="light" />
    </div>
);

/* ──────────────────────────────────────────────────────────────
   P11 · Why This Works (DARK)
────────────────────────────────────────────────────────────── */
const P11WhyWorks = () => (
    <div className="profile-page theme-dark flex flex-col">
        <BgGraphics theme="dark" />
        <PgH num={11} label="Value Proposition" theme="dark" />

        <div className="flex flex-col flex-1 relative z-10" style={{ padding: '10mm 12mm' }}>
            <div className="mb-14 border-b border-white/20 pb-8 grid grid-cols-2">
                <TitleBig theme="dark">The Architecture<br />of <span className="text-blue-400">Success.</span></TitleBig>
                <div className="flex flex-col justify-end">
                    <p className="text-white/60 font-light" style={{ fontSize: '15px' }}>
                        Transforming high-level material science into immediate industrial capital value through perfectly aligned capabilities.
                    </p>
                </div>
            </div>

            <div className="flex gap-16 flex-1">
                <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="font-mono text-[24px] font-bold text-blue-500">01</span>
                        <TitleSmall theme="dark">We Contribute</TitleSmall>
                    </div>
                    <ul className="flex flex-col gap-5 border-l-2 border-white/10 pl-5">
                        <li className="text-white/90 font-medium" style={{ fontSize: '15px' }}>Proprietary graphene tech & process IP</li>
                        <li className="text-white/90 font-medium" style={{ fontSize: '15px' }}>Deep R&D know-how & formulation synthesis</li>
                        <li className="text-white/90 font-medium" style={{ fontSize: '15px' }}>Technical integration & macro scale-up guidance</li>
                    </ul>
                </div>

                <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="font-mono text-[24px] font-bold text-white/50">02</span>
                        <TitleSmall theme="dark">Partner Contributes</TitleSmall>
                    </div>
                    <ul className="flex flex-col gap-5 border-l-2 border-white/10 pl-5">
                        <li className="text-white/70 font-medium" style={{ fontSize: '15px' }}>Mass manufacturing infrastructure & plants</li>
                        <li className="text-white/70 font-medium" style={{ fontSize: '15px' }}>Established B2B network & customer pipelines</li>
                        <li className="text-white/70 font-medium" style={{ fontSize: '15px' }}>Strategic capital & operational execution</li>
                    </ul>
                </div>

                <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="font-mono text-[24px] font-bold text-blue-500">03</span>
                        <TitleSmall theme="dark">The Outcome</TitleSmall>
                    </div>
                    <ul className="flex flex-col gap-5 border-l-2 border-blue-500/50 pl-5">
                        <li className="text-blue-300 font-bold" style={{ fontSize: '15px' }}>Accelerated commercialization speed</li>
                        <li className="text-blue-300 font-bold" style={{ fontSize: '15px' }}>Highly capital-efficient scaling operations</li>
                        <li className="text-blue-300 font-bold" style={{ fontSize: '15px' }}>Bulletproof IP-protected collaboration</li>
                    </ul>
                </div>
            </div>
        </div>
        <PgF n={11} theme="dark" />
    </div>
);

/* ──────────────────────────────────────────────────────────────
   P12 · Contact Us (LIGHT)
────────────────────────────────────────────────────────────── */
const P12Contact = () => (
    <div className="profile-page theme-light flex flex-col">
        <BgGraphics theme="light" />
        <PgH num={12} label="Contact Connect" theme="light" />

        <div className="flex flex-1 relative z-10 border-t border-neutral-200" style={{ height: '100%' }}>
            <div className="w-[45%] img-col img-col-car h-full border-r border-neutral-200"></div>

            <div className="w-[55%] flex flex-col justify-center" style={{ padding: '8mm 16mm' }}>
                <TitleBig theme="light">Let's build the<br /><span className="text-blue-600">future</span>.</TitleBig>
                <div className="accent-bar mt-2 mb-8"></div>
                <BodyText theme="light">
                    We exclusively collaborate with Tier-1 enterprises, governments, and global innovators to co-create the absolute next generation of material technologies.
                </BodyText>

                <div className="grid grid-cols-2 gap-y-12 gap-x-12 mt-10">
                    {[
                        { label: 'General Inquiry', value: 'info@monoatomlabs.com' },
                        { label: 'Corporate Site', value: 'www.monoatomlabs.com' },
                        { label: 'Direct Line', value: '+91-989-819-9809' },
                        { label: 'Headquarters', value: '3rd Floor, iHub, Ahd' },
                    ].map((c, i) => (
                        <div key={i} className="flex flex-col">
                            <Eyebrow theme="light">{c.label}</Eyebrow>
                            <p className="text-neutral-900 font-mono font-bold" style={{ fontSize: '15px' }}>{c.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <PgF n={12} theme="light" />
    </div>
);

/* ──────────────────────────────────────────────────────────────
   Root
────────────────────────────────────────────────────────────── */
export default function CompanyProfile() {
    return (
        <div className="profile-wrapper">
            <div className="no-print w-[297mm] flex justify-between items-center px-4">
                <div className="text-white/50 font-mono text-[11px]">
                    Optimized for A4 Landscape viewing
                </div>
                <button
                    onClick={() => window.print()}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-mono text-[11px] font-bold py-2 px-6 rounded-md transition-colors"
                >
                    Save as PDF / Print
                </button>
            </div>

            {/* The Pages Alternate Themes */}
            <P01Cover />
            <P02About />
            <P03Founders />
            <P04Recognitions />
            <P05Facilities />
            <P06Products1 />
            <P07Products2 />
            <P08Pipeline />
            <P09Trials />
            <P10Partnership />
            <P11WhyWorks />
            <P12Contact />
        </div>
    );
}
