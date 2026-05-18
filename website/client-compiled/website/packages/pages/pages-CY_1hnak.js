import { jsx as e, Fragment as be, jsxs as t } from "react/jsx-runtime";
import We, { lazy as U, Suspense as Ce, useState as A, useRef as $i, useEffect as Me, useMemo as ie } from "react";
import { HomeHero as Ti, Eyebrow as Di, Heading as Ai, Highlight as Li, Lead as Ri, Actions as Ii, ActionGroup as Gi, PrimaryAction as Ei, SecondaryAction as ji, StatGrid as Fi, Stat as xt } from "@monoatom/primitives";
import { Industry40Enabler as Hi } from "@monoatom/sections";
import { Link as L, useLocation as Xr } from "react-router-dom";
import { motion as D, AnimatePresence as de } from "framer-motion";
import { Shield as q, FlaskConical as we, TrendingUp as z, Award as Ze, CheckCircle as $e, Users as ct, FileCheck as Kt, FileText as Re, Download as Da, Phone as Wt, Calculator as Xe, Calendar as ei, Handshake as Ga, ArrowRight as le, Sparkles as dt, Mail as Aa, MapPin as Ea, Atom as ti, Microscope as Ae, Factory as Ie, Package as et, Lightbulb as zi, Check as Ut, Trophy as Wi, Maximize2 as ai, Star as fr, X as Qt, ChevronLeft as Bt, ChevronRight as Ot, Target as mt, Wind as ge, Droplets as ke, Zap as I, Heart as ri, Briefcase as Vt, GraduationCap as ii, Globe as Ge, ClipboardCheck as ni, User as Bi, Building as Oi, Clock as pt, HelpCircle as Vi, Eye as _i, Settings as _t, Building2 as st, Layers as X, Sun as ja, ShieldCheck as xe, Box as La, Thermometer as Yt, Battery as Pe, Activity as ce, LayoutGrid as Ra, DollarSign as Jt, RefreshCw as Fa, Info as ot, ChevronDown as Zt, Leaf as qt, TrendingDown as li, ChevronUp as qi, Truck as nt, PlayCircle as Ki, Coins as Ui, AlertCircle as Qi, ArrowUpRight as si, Table2 as Yi, ExternalLink as Ji, Car as Ha, Rocket as Zi, TestTube as oi, BarChart3 as Ve, PieChart as Xi, Wallet as ci, Recycle as di, Droplet as Be, Wrench as en, Timer as tn, HardHat as an, Scale as rn, Cpu as nn, ArrowDown as ln, ArrowLeft as sn, Lock as on, UserCheck as cn, Server as dn, Smartphone as mn, Plane as vr, Repeat as pn, Gauge as je, Sprout as un, Waves as hn, Filter as oa, Anchor as yr, Component as Nr, Cuboid as ft, Construction as ca, Weight as gn, Hammer as bn, CheckCircle2 as Ia, Shirt as wr, Flame as kr, Beaker as xn } from "lucide-react";
import { ResponsiveContainer as Q, AreaChart as fn, CartesianGrid as ee, XAxis as te, YAxis as ae, Tooltip as J, Area as Oe, LineChart as Xt, Line as ne, BarChart as _e, Bar as Se, Cell as ut, LabelList as za, ReferenceLine as Le, Legend as ze, PieChart as vn, Pie as yn, RadarChart as Nn, PolarGrid as wn, PolarAngleAxis as kn, PolarRadiusAxis as Cn, Radar as Cr, ComposedChart as lt, ReferenceDot as da } from "recharts";
const Pn = ({ children: r }) => /* @__PURE__ */ e(be, { children: r }), Sn = {
  hero: {
    badge: "Unlocking Trillion Dollar Economy",
    headingLine1: "The Future is",
    headingHighlight: "Graphene.",
    tagline: "We engineer Graphene at the atomic level to make the impossible possible.",
    ctaPrimary: { label: "Explore Products", to: "/products" },
    ctaSecondary: { label: "Learn About Us", to: "/about" },
    stats: {
      innovation: { value: "10+", label: "Breakthrough Innovations" },
      commercial: { value: "5", label: "Commercial Products" },
      facilities: { value: "2", label: "Advanced Facilities" },
      pilot: { value: "11", label: "Pilot Technologies" }
    }
  },
  industry40Enabler: {
    badge: "01 — Industry 4.0 Enabler",
    titleAccent: "Advanced",
    titleLine1: "Materials for the",
    titleLine2: "4th Industrial Revolution",
    valueProp: {
      before: "Our breakthrough materials deliver",
      emphasis: "superior strength, conductivity, and durability",
      after: "—essential building blocks for smart manufacturing and autonomous systems."
    },
    features: [
      {
        title: "Ultra Strong but Light",
        description: "200x stronger than steel at a fraction of the weight — enabling structures that were previously impossible to build."
      },
      {
        title: "Super Hard but Flexible",
        description: "The hardest material known, yet it bends without breaking — delivering durability and adaptability at the atomic scale."
      },
      {
        title: "Highly Conductive but Stable",
        description: "Exceptional electrical and thermal conductivity with outstanding chemical stability — performing reliably in extreme conditions."
      }
    ],
    applicationsTitle: "Applications",
    applications: [
      "Smart Manufacturing & Automation",
      "IoT-Enabled Infrastructure",
      "Advanced Robotics & Composites",
      "Clean Energy Systems",
      "Next-Gen Transportation",
      "Digital Supply Chains"
    ],
    differentiator: {
      headingLine1: "From Lab Prototype to",
      headingHighlight: "Mass Manufacturing",
      description: "Unlike academic research that never leaves the lab, we ensure every innovation scales. Our approach bridges deep-tech expertise with real-world deployment.",
      ctaLabel: "View Solutions",
      ctaTo: "/products"
    },
    tagline: "Building the material foundation for tomorrow"
  },
  labToScale: {
    badge: "Our Process",
    titleLine1: "From Atomic Scale to",
    titleLine2: "Industrial Reality",
    description: "We don't just innovate in the lab—we ensure every breakthrough scales from prototype to mass manufacturing, bridging the critical gap between nanoscale research and real-world impact.",
    processes: [
      {
        number: 1,
        title: "Research & Innovation",
        description: "World-class nanomaterials R&D with advanced characterization and testing capabilities",
        features: [
          "Graphene synthesis & functionalization",
          "Surface chemistry modification",
          "Advanced testing (SEM, TEM, Raman)",
          "Pilot-scale dispersion technology"
        ]
      },
      {
        number: 2,
        title: "Application Development",
        description: "Real-world testing across multiple industrial sectors with rigorous validation protocols",
        features: [
          "Multi-sector application testing",
          "Mechanical & durability analysis",
          "Thermal & electrical characterization",
          "Field-scale performance validation"
        ]
      }
    ],
    stats: [
      { value: "2", label: "State-of-the-Art Facilities" },
      { value: "14+", label: "Years R&D Experience" },
      { value: "Ton", label: "Scale Production" },
      { value: "100%", label: "Quality Validated" }
    ]
  },
  productsSection: {
    sectionHeading: {
      number: "02",
      title: "Product Suite",
      subtitle: "Commercially viable graphene solutions — from market-ready products to the next generation in development."
    }
  },
  labToManufacturing: {
    badge: "From Lab to Manufacturing",
    titleLine1: "We Don't Just Innovate",
    titleLine2: "We Scale to Market",
    description: "We don't just innovate in the lab—we ensure every breakthrough can scale from prototype to mass manufacturing. Our approach bridges deep-tech expertise with real-world industrial deployment, supply-chain integration, and national-scale production.",
    stages: [
      { title: "Lab Prototype", description: "Breakthrough innovation" },
      { title: "Field Validation", description: "Real-world testing" },
      { title: "Scale-Up", description: "Process optimization" },
      { title: "Mass Production", description: "Industrial scale" }
    ]
  },
  customerJourney: {
    sectionHeading: {
      number: "02",
      title: "How We Work Together",
      subtitle: "A clear, structured process from discovery to deployment—designed to minimize risk and maximize results"
    },
    steps: [
      {
        step: "1",
        title: "Discovery Call",
        subtitle: "Understanding Your Needs",
        icon: "Phone",
        duration: "1 Week",
        color: "blue",
        activities: [
          "Initial consultation to understand your requirements",
          "Recommend appropriate product solutions",
          "Share technical specifications and performance data",
          "Discuss pricing and implementation options"
        ]
      },
      {
        step: "2",
        title: "Sample & Testing",
        subtitle: "Proof of Performance",
        icon: "FlaskConical",
        duration: "2-4 Weeks",
        color: "purple",
        activities: [
          "Provide product samples for your evaluation",
          "Support pilot testing in your environment",
          "Analyze results and optimize formulation",
          "Address technical questions from your team"
        ]
      },
      {
        step: "3",
        title: "Pilot Deployment",
        subtitle: "Small-Scale Implementation",
        icon: "Rocket",
        duration: "1-2 Months",
        color: "emerald",
        activities: [
          "Limited production run or site trial",
          "Monitor performance metrics closely",
          "Optimize application process",
          "Train your team on best practices"
        ]
      },
      {
        step: "4",
        title: "Full Rollout",
        subtitle: "Scale to Production",
        icon: "CheckCircle",
        duration: "Ongoing",
        color: "orange",
        activities: [
          "Manufacturing partnership or technology licensing",
          "Full-scale production integration",
          "Continuous technical support",
          "Performance monitoring and optimization"
        ]
      }
    ],
    bottomCards: {
      left: {
        title: "Partnership Models",
        items: [
          {
            title: "Technology Licensing",
            description: "Integrate our IP into your production lines with full technical support and royalty-based model"
          },
          {
            title: "JV-SPV Model",
            description: "Joint ventures for co-development, manufacturing, and commercialization with shared IP value"
          }
        ]
      },
      right: {
        title: "What You Get",
        items: [
          "NABL-certified performance guarantees",
          "Full technical documentation",
          "Application training for your team",
          "Ongoing optimization support",
          "Access to R&D expertise",
          "Manufacturing process guidance"
        ]
      }
    }
  },
  faqSection: {
    sectionHeading: {
      number: "11",
      title: "Knowledge Base",
      subtitle: "Expert answers to technical and commercial questions."
    },
    concernsTitle: "Common Concerns",
    faqs: [
      {
        question: "How long does it take to see ROI from your products?",
        answer: "Most customers see positive ROI within 18 months on average. Graffisol (solar coating) typically pays back in 18 months, while Graphacrete shows immediate cost savings through cement reduction. We provide detailed ROI calculators and pilot programs to verify results.",
        icon: "TrendingUp"
      },
      {
        question: "Are your products certified and tested?",
        answer: "Yes, all our products undergo rigorous NABL-certified testing. We maintain two state-of-the-art R&D and testing facilities with ISO-standard equipment. Our products are validated through both lab testing and real-world field trials.",
        icon: "Shield"
      },
      {
        question: "What is the minimum order quantity?",
        answer: "We offer flexible order quantities to suit different project sizes. For pilot programs, we can start with small batches (kg-scale). For full-scale deployment, we have ton-scale manufacturing capabilities.",
        icon: "Clock"
      },
      {
        question: "Do you provide on-site technical support?",
        answer: "Absolutely! We provide comprehensive technical support including on-site training, application guidelines, troubleshooting assistance, and ongoing consultation to ensure optimal performance.",
        icon: "CheckCircle2"
      }
    ],
    objections: [
      {
        title: '"Graphene is too expensive"',
        response: "Our ultra-low dosage (0.05%) makes it highly cost-effective per unit, often reducing total material costs by displacing expensive additives.",
        color: "rose"
      },
      {
        title: `"It's not proven at scale"`,
        response: "We operate a ton-scale facility and have deployed successfully in major infrastructure projects. We are not a lab experiment; we are an industrial supplier.",
        color: "amber"
      },
      {
        title: '"Integration is complex"',
        response: "Our products are designed as drop-in additives. No major machinery changes are required. We provide the dosing protocols.",
        color: "cyan"
      },
      {
        title: '"ROI is uncertain"',
        response: "We offer performance warranties and pilot programs to validate ROI on your specific site before you commit to a full contract.",
        color: "purple"
      }
    ]
  }
}, Mn = U(() => import("@monoatom/sections").then((r) => ({ default: r.LabToScale }))), $n = U(() => import("@monoatom/sections").then((r) => ({ default: r.ProductsSection }))), Tn = U(() => import("@monoatom/sections").then((r) => ({ default: r.LabToManufacturing }))), Dn = U(() => import("@monoatom/sections").then((r) => ({ default: r.CustomerJourney }))), An = U(() => import("@monoatom/sections").then((r) => ({ default: r.FAQSection }))), Ln = () => /* @__PURE__ */ e("div", { style: { height: 80 } });
function ys() {
  const r = Sn, i = r.hero;
  return /* @__PURE__ */ t(Pn, { children: [
    /* @__PURE__ */ t(Ti, { children: [
      /* @__PURE__ */ e(Di, { children: i.badge }),
      /* @__PURE__ */ t(Ai, { children: [
        i.headingLine1,
        " ",
        /* @__PURE__ */ e(Li, { children: i.headingHighlight })
      ] }),
      /* @__PURE__ */ e(Ri, { children: i.tagline }),
      /* @__PURE__ */ e(Ii, { children: /* @__PURE__ */ t(Gi, { children: [
        /* @__PURE__ */ e(Ei, { to: i.ctaPrimary?.to, children: i.ctaPrimary?.label }),
        /* @__PURE__ */ e(ji, { to: i.ctaSecondary?.to, children: i.ctaSecondary?.label })
      ] }) }),
      /* @__PURE__ */ t(Fi, { children: [
        /* @__PURE__ */ e(xt, { value: i.stats?.innovation?.value, label: i.stats?.innovation?.label }),
        /* @__PURE__ */ e(xt, { value: i.stats?.commercial?.value, label: i.stats?.commercial?.label }),
        /* @__PURE__ */ e(xt, { value: i.stats?.facilities?.value, label: i.stats?.facilities?.label }),
        /* @__PURE__ */ e(xt, { value: i.stats?.pilot?.value, label: i.stats?.pilot?.label })
      ] })
    ] }),
    /* @__PURE__ */ e(Hi, { copy: r.industry40Enabler }),
    /* @__PURE__ */ t(Ce, { fallback: /* @__PURE__ */ e(Ln, {}), children: [
      /* @__PURE__ */ e(Mn, { copy: r.labToScale }),
      /* @__PURE__ */ e($n, { copy: r.productsSection }),
      /* @__PURE__ */ e(Tn, { copy: r.labToManufacturing }),
      /* @__PURE__ */ e(Dn, { copy: r.customerJourney }),
      /* @__PURE__ */ e(An, { copy: r.faqSection })
    ] })
  ] });
}
const fe = ({ title: r, subtitle: i, category: n, transparent: o = !1 }) => /* @__PURE__ */ e("section", { className: `pt-40 pb-16 px-6 border-b ${o ? "border-neutral-200 bg-transparent" : "border-neutral-900 bg-black/10"}`, children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ t(
  D.div,
  {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    children: [
      n && /* @__PURE__ */ e("span", { className: "inline-block py-1 px-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-medium mb-6 tracking-wide uppercase", children: n }),
      /* @__PURE__ */ e("h1", { className: "text-4xl md:text-5xl font-display font-medium text-white mb-6", children: r }),
      /* @__PURE__ */ e("p", { className: "text-lg text-neutral-400 max-w-2xl leading-relaxed", children: i })
    ]
  }
) }) }), K = ({ children: r, variant: i = "primary", theme: n = "light", className: o = "", icon: a, onClick: s }) => /* @__PURE__ */ t("button", { onClick: s, className: `inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-sm group shadow-sm relative overflow-hidden ${i === "primary" ? n === "dark" ? "bg-white text-black hover:bg-neutral-200 border border-white z-10 shadow-lg" : "bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-900" : i === "secondary" ? n === "dark" ? "bg-transparent text-white border border-neutral-700 hover:border-white hover:bg-neutral-900 z-10" : "bg-white text-neutral-900 border border-neutral-200 hover:border-neutral-900" : n === "dark" ? "text-neutral-400 hover:text-white px-0 py-2 shadow-none" : "text-neutral-500 hover:text-neutral-900 px-0 py-2 shadow-none"} ${o}`, children: [
  r,
  a && /* @__PURE__ */ e(a, { className: "w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" })
] }), Rn = () => {
  const r = [
    {
      icon: q,
      title: "NABL Certified",
      description: "All performance claims independently verified by National Accreditation Board for Testing",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: we,
      title: "Scientific Validation",
      description: "Partnerships with IISc, IIT, NCL ensure rigorous research standards",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: z,
      title: "Field-Tested Results",
      description: "5 field-scale pilot trials demonstrating real-world performance",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Ze,
      title: "Award-Winning Team",
      description: "Led by 6× President of India Awardee, MIT TR35, NASA recognized founders",
      color: "from-yellow-500 to-orange-600"
    }
  ], i = [
    {
      name: "NABL Accreditation",
      description: "National Accreditation Board for Testing and Calibration Laboratories",
      status: "Certified",
      icon: q
    },
    {
      name: "Field Validation",
      description: "Real-world testing across multiple industrial applications",
      status: "5 Pilot Trials",
      icon: $e
    },
    {
      name: "Scientific Partnerships",
      description: "Collaboration with premier research institutes",
      status: "IISc, IIT, NCL",
      icon: ct
    },
    {
      name: "Performance Verification",
      description: "Independent third-party testing and validation",
      status: "Verified",
      icon: Kt
    }
  ];
  return /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-black/10 border-b border-neutral-800", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ t("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6", children: [
        /* @__PURE__ */ e(q, { className: "w-4 h-4 text-blue-400" }),
        /* @__PURE__ */ e("span", { className: "text-sm font-bold text-blue-300 uppercase tracking-wide", children: "Trust & Validation" })
      ] }),
      /* @__PURE__ */ t("h2", { className: "text-4xl md:text-5xl font-display font-medium text-white mb-6", children: [
        "Every Claim is Verified.",
        /* @__PURE__ */ e("br", {}),
        "Every Result is Certified."
      ] }),
      /* @__PURE__ */ e("p", { className: "text-xl text-neutral-300 max-w-3xl mx-auto font-light", children: "We don't just make promises—we provide NABL-certified proof, scientific validation, and real-world field test results" })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20", children: r.map((n, o) => {
      const a = n.icon;
      return /* @__PURE__ */ t(
        "div",
        {
          className: "bg-white/5 border-2 border-white/10 rounded-2xl p-6 text-center hover:border-white/30 hover:shadow-xl transition-all group backdrop-blur-sm",
          children: [
            /* @__PURE__ */ e("div", { className: `inline-flex p-4 bg-gradient-to-br ${n.color} rounded-xl mb-4 group-hover:scale-110 transition-transform`, children: /* @__PURE__ */ e(a, { className: "w-8 h-8 text-white" }) }),
            /* @__PURE__ */ e("h3", { className: "text-lg font-bold text-white mb-2", children: n.title }),
            /* @__PURE__ */ e("p", { className: "text-sm text-neutral-300 leading-relaxed font-light", children: n.description })
          ]
        },
        o
      );
    }) }),
    /* @__PURE__ */ t("div", { className: "bg-white/5 border-2 border-white/20 rounded-2xl p-10 mb-16 backdrop-blur-sm", children: [
      /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-bold text-white mb-8 text-center", children: "Certifications & Validations" }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: i.map((n, o) => {
        const a = n.icon;
        return /* @__PURE__ */ t(
          "div",
          {
            className: "flex items-start gap-4 p-6 bg-black/20 rounded-xl border border-white/10 hover:border-white/20 transition-all",
            children: [
              /* @__PURE__ */ e("div", { className: "p-3 bg-white/10 rounded-lg shrink-0 border border-white/20", children: /* @__PURE__ */ e(a, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ t("div", { className: "flex-1", children: [
                /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-2", children: [
                  /* @__PURE__ */ e("h4", { className: "font-bold text-white", children: n.name }),
                  /* @__PURE__ */ e("span", { className: "text-xs font-bold text-green-400 bg-green-500/20 px-2 py-1 rounded-full border border-green-500/30", children: n.status })
                ] }),
                /* @__PURE__ */ e("p", { className: "text-sm text-neutral-300 font-light", children: n.description })
              ] })
            ]
          },
          o
        );
      }) })
    ] }),
    /* @__PURE__ */ t("div", { className: "bg-white/5 border-2 border-white/20 rounded-2xl p-10 backdrop-blur-sm", children: [
      /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-bold text-white mb-8 text-center", children: "Backed by India's Premier Research Institutes" }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8", children: [
        {
          name: "Indian Institute of Science",
          acronym: "IISc",
          description: "Advanced materials research collaboration"
        },
        {
          name: "Indian Institute of Technology",
          acronym: "IIT",
          description: "Technology development partnerships"
        },
        {
          name: "National Chemical Laboratory",
          acronym: "NCL",
          description: "Chemical engineering validation"
        }
      ].map((n, o) => /* @__PURE__ */ t(
        "div",
        {
          className: "text-center p-6 bg-black/20 rounded-xl border border-white/10 hover:border-white/20 transition-all",
          children: [
            /* @__PURE__ */ e("div", { className: "w-20 h-20 bg-white/10 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border border-white/20", children: n.acronym }),
            /* @__PURE__ */ e("h4", { className: "font-bold text-white mb-2", children: n.name }),
            /* @__PURE__ */ e("p", { className: "text-sm text-neutral-300 font-light", children: n.description })
          ]
        },
        o
      )) }),
      /* @__PURE__ */ e("p", { className: "text-center text-neutral-300 font-light", children: "Our team includes scientists from these institutes working alongside industrial manufacturing experts to ensure every innovation meets the highest standards of scientific rigor and real-world applicability." })
    ] }),
    /* @__PURE__ */ t("div", { className: "text-center mt-16", children: [
      /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white mb-4", children: "Want to See the Certified Data?" }),
      /* @__PURE__ */ e("p", { className: "text-neutral-300 mb-8 font-light", children: "Download complete technical specifications, NABL certificates, and field test reports" }),
      /* @__PURE__ */ t("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ e(L, { to: "/contact", children: /* @__PURE__ */ e(K, { variant: "primary", theme: "dark", children: "Download Certification Documents" }) }),
        /* @__PURE__ */ e(L, { to: "/contact", children: /* @__PURE__ */ e(K, { variant: "secondary", theme: "dark", children: "Request Field Test Data" }) })
      ] })
    ] })
  ] }) });
}, In = () => {
  const r = [
    {
      audience: "Manufacturers",
      icon: Da,
      ctas: [
        { text: "Download Catalog", icon: Re, link: "/contact" },
        { text: "Tech Specs", icon: Re, link: "/contact" }
      ],
      description: "Get detailed specs, performance data, and application guides for integration."
    },
    {
      audience: "Decision Makers",
      icon: z,
      ctas: [
        { text: "Schedule Consultation", icon: Wt, link: "/contact" },
        { text: "ROI Calculator", icon: Xe, link: "/products/graphacrete" }
      ],
      description: "Understand business impact, ROI, and strategic advantages with expert guidance."
    },
    {
      audience: "Partners",
      icon: Ga,
      ctas: [
        { text: "Licensing Options", icon: Re, link: "/partnership" },
        { text: "JV Opportunities", icon: ei, link: "/contact" }
      ],
      description: "Explore technology licensing, joint ventures, and strategic alliances."
    },
    {
      audience: "Researchers",
      icon: we,
      ctas: [
        { text: "White Papers", icon: Da, link: "/contact" },
        { text: "Sample Kit", icon: we, link: "/contact" }
      ],
      description: "Access technical documentation, validation reports, and material samples."
    }
  ], i = [
    { text: "View All Products", link: "/products" },
    { text: "Competitive Comparison", link: "/products/graphacrete" },
    { text: "Case Studies", link: "/contact" },
    { text: "Certifications", link: "/contact" },
    { text: "Technical Support", link: "/contact" },
    { text: "Schedule Site Visit", link: "/contact" }
  ];
  return /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-neutral-50 border-t border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ t("div", { className: "text-center mb-20", children: [
      /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-6", children: [
        /* @__PURE__ */ e(z, { className: "w-3 h-3" }),
        "Next Steps"
      ] }),
      /* @__PURE__ */ e("h2", { className: "text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-6", children: "Start Your Transformation" }),
      /* @__PURE__ */ e("p", { className: "text-xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed", children: "Choose the path that matches your role and requirements to accelerate your journey with advanced materials." })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24", children: r.map((n, o) => {
      const a = n.icon;
      return /* @__PURE__ */ t(
        "div",
        {
          className: "bg-white p-8 rounded-2xl border border-neutral-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group flex flex-col",
          children: [
            /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ e(a, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ t("h3", { className: "text-lg font-bold text-neutral-900 mb-2", children: [
              "For ",
              n.audience
            ] }),
            /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 leading-relaxed mb-8 flex-grow", children: n.description }),
            /* @__PURE__ */ e("div", { className: "space-y-3 mt-auto", children: n.ctas.map((s, d) => {
              const m = s.icon;
              return /* @__PURE__ */ e(L, { to: s.link, className: "block", children: /* @__PURE__ */ t("button", { className: `w-full flex items-center justify-between text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${d === 0 ? "bg-neutral-900 text-white hover:bg-black group-hover:shadow-md" : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-400 hover:text-neutral-900"}`, children: [
                /* @__PURE__ */ t("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e(m, { className: "w-4 h-4" }),
                  s.text
                ] }),
                d === 0 && /* @__PURE__ */ e(le, { className: "w-4 h-4 opacity-70" })
              ] }) }, d);
            }) })
          ]
        },
        o
      );
    }) }),
    /* @__PURE__ */ t("div", { className: "grid lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ t("div", { className: "lg:col-span-2 bg-white rounded-2xl border border-neutral-200 p-8 md:p-12", children: [
        /* @__PURE__ */ t("h3", { className: "text-xl font-display font-medium text-neutral-900 mb-8 flex items-center gap-3", children: [
          /* @__PURE__ */ e(dt, { className: "w-5 h-5 text-blue-500" }),
          "Quick Access"
        ] }),
        /* @__PURE__ */ e("div", { className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4", children: i.map((n, o) => /* @__PURE__ */ t(L, { to: n.link, className: "flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-colors group", children: [
          /* @__PURE__ */ e("div", { className: "w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-blue-500 transition-colors" }),
          /* @__PURE__ */ e("span", { className: "text-sm font-medium text-neutral-600 group-hover:text-neutral-900 transition-colors", children: n.text })
        ] }, o)) })
      ] }),
      /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-12 text-white flex flex-col justify-between shadow-2xl shadow-neutral-900/20", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("h3", { className: "text-xl font-display font-medium mb-2", children: "Need Guidance?" }),
          /* @__PURE__ */ e("p", { className: "text-neutral-400 text-sm leading-relaxed mb-8", children: "Not sure where to start? Our technical team is ready to help you define your requirements." }),
          /* @__PURE__ */ t("div", { className: "space-y-4 mb-8", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3 text-sm text-neutral-300", children: [
              /* @__PURE__ */ e(Aa, { className: "w-4 h-4 text-blue-400" }),
              "info@monoatomlabs.com"
            ] }),
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3 text-sm text-neutral-300", children: [
              /* @__PURE__ */ e(Wt, { className: "w-4 h-4 text-blue-400" }),
              "+91 989 819 9809"
            ] }),
            /* @__PURE__ */ t("div", { className: "flex items-start gap-3 text-sm text-neutral-300", children: [
              /* @__PURE__ */ e(Ea, { className: "w-4 h-4 text-blue-400 mt-0.5" }),
              /* @__PURE__ */ e("span", { children: "iHub Gujarat, Ahmedabad" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e(L, { to: "/contact", children: /* @__PURE__ */ t("button", { className: "w-full py-4 bg-white text-neutral-900 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ e(Wt, { className: "w-4 h-4" }),
          "Schedule Discovery Call"
        ] }) })
      ] })
    ] })
  ] }) });
}, vt = ({ icon: r, title: i, description: n, benefits: o }) => /* @__PURE__ */ t("div", { className: "p-8 bg-white border border-neutral-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 group", children: [
  /* @__PURE__ */ e(r, { className: "w-10 h-10 text-neutral-400 mb-6 group-hover:text-blue-600 transition-colors" }),
  /* @__PURE__ */ e("h3", { className: "text-xl font-display font-medium text-neutral-900 mb-4", children: i }),
  /* @__PURE__ */ e("p", { className: "text-neutral-600 mb-6 leading-relaxed font-light", children: n }),
  /* @__PURE__ */ e("ul", { className: "space-y-2", children: o.map((a, s) => /* @__PURE__ */ t("li", { className: "flex items-start text-sm text-neutral-600", children: [
    /* @__PURE__ */ e("span", { className: "w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" }),
    a
  ] }, s)) })
] }), Gn = () => /* @__PURE__ */ e("section", { className: "py-24 px-6 border-b border-neutral-200 bg-neutral-50", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ t("div", { className: "mb-16", children: [
    /* @__PURE__ */ e("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-6", children: "04 — Technology" }),
    /* @__PURE__ */ e("h2", { className: "text-4xl font-display font-medium text-neutral-900 mb-4", children: "Core Technology Platform" }),
    /* @__PURE__ */ e("p", { className: "text-neutral-600 max-w-3xl text-lg font-light", children: "A comprehensive technology platform transforming graphene science into verified commercial reality through integrated synthesis, functionalization, and application development." })
  ] }),
  /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
    /* @__PURE__ */ e(
      vt,
      {
        icon: ti,
        title: "Graphene Synthesis",
        description: "Proprietary processes to synthesize high-purity graphene tailored for commercial scalability.",
        benefits: ["99%+ Purity", "Consistent Batch Quality", "Cost-Effective Scale-up"]
      }
    ),
    /* @__PURE__ */ e(
      vt,
      {
        icon: we,
        title: "Functionalization",
        description: "Surface chemistry modification to ensure graphene integrates perfectly with host materials.",
        benefits: ["Covalent Bonding", "Polymer Compatibility", "Dispersion Stability"]
      }
    ),
    /* @__PURE__ */ e(
      vt,
      {
        icon: Ae,
        title: "Advanced Characterization",
        description: "Atomic-scale analysis ensuring every batch meets rigorous performance standards.",
        benefits: ["SEM & TEM Imaging", "Raman Spectroscopy", "Mechanical Testing"]
      }
    ),
    /* @__PURE__ */ e(
      vt,
      {
        icon: Ie,
        title: "Commercial Scale-up",
        description: "Bridging the gap between lab innovation and industrial mass production.",
        benefits: ["Pilot Production", "Process Engineering", "Quality Assurance"]
      }
    )
  ] })
] }) }), k = ({ number: r, title: i, subtitle: n, theme: o = "light", accent: a = !1 }) => /* @__PURE__ */ t("div", { className: "mb-12 md:mb-20 group", children: [
  /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6 transition-all duration-300 ${o === "dark" ? "bg-neutral-800/50 border border-neutral-700/50 backdrop-blur-sm" : a ? "bg-gradient-to-r from-brand-50 to-teal-50 border border-brand-200 shadow-sm group-hover:shadow-md group-hover:border-brand-300" : "bg-gradient-to-r from-neutral-100 to-neutral-50 border border-neutral-200/70 shadow-sm group-hover:shadow-md"}`, children: [
    /* @__PURE__ */ e("span", { className: `font-mono text-xs tracking-widest uppercase font-bold ${o === "dark" ? "text-neutral-400" : a ? "text-brand-600" : "text-neutral-600"}`, children: r }),
    /* @__PURE__ */ e("span", { className: `w-1 h-1 rounded-full ${o === "dark" ? "bg-neutral-600" : a ? "bg-brand-500" : "bg-neutral-400"}` }),
    /* @__PURE__ */ e("span", { className: `font-mono text-xs tracking-wider uppercase font-semibold ${o === "dark" ? "text-neutral-500" : a ? "text-brand-600" : "text-neutral-500"}`, children: i })
  ] }),
  /* @__PURE__ */ e("h2", { className: `text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-2xl ${o === "dark" ? "text-white" : "text-neutral-900"}`, children: n })
] }), ma = ({ icon: r, title: i, subtitle: n, features: o, cta: a, color: s, delay: d, link: m }) => /* @__PURE__ */ t(
  "div",
  {
    className: `group relative bg-white border-2 border-neutral-200 rounded-3xl p-8 hover:border-${s}-300 hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col h-full`,
    style: { animationDelay: `${d}ms` },
    children: [
      /* @__PURE__ */ e("div", { className: `absolute -top-20 -right-20 w-48 h-48 bg-${s}-500/10 rounded-full blur-[80px] group-hover:opacity-100 opacity-0 transition-opacity duration-700 pointer-events-none` }),
      /* @__PURE__ */ e("div", { className: "mb-8 relative z-10", children: /* @__PURE__ */ e("div", { className: `inline-flex p-4 rounded-2xl bg-${s}-50 border border-${s}-100 text-${s}-600 group-hover:bg-${s}-100 group-hover:border-${s}-300 transition-all duration-500`, children: /* @__PURE__ */ e(r, { className: "w-8 h-8", strokeWidth: 1.5 }) }) }),
      /* @__PURE__ */ e("h3", { className: `text-2xl font-display font-medium text-neutral-900 mb-3 group-hover:text-${s}-600 transition-colors`, children: i }),
      /* @__PURE__ */ e("p", { className: "text-neutral-600 mb-8 leading-relaxed h-12", children: n }),
      /* @__PURE__ */ e("ul", { className: "space-y-4 mb-10 flex-grow relative z-10", children: o.map((p, c) => /* @__PURE__ */ t("li", { className: "flex items-start gap-3 text-sm text-neutral-700", children: [
        /* @__PURE__ */ e("div", { className: `mt-0.5 w-5 h-5 rounded-full bg-${s}-50 flex items-center justify-center flex-shrink-0 border border-${s}-200 text-${s}-600`, children: /* @__PURE__ */ e(Ut, { className: "w-3 h-3" }) }),
        /* @__PURE__ */ e("span", { children: p })
      ] }, c)) }),
      /* @__PURE__ */ e(L, { to: m, children: /* @__PURE__ */ t("button", { className: `w-full flex items-center justify-center gap-2 px-6 py-4 bg-neutral-900 border border-neutral-900 text-white rounded-xl hover:bg-${s}-600 hover:border-${s}-600 hover:shadow-lg transition-all duration-300 group-hover:translate-y-[-2px]`, children: [
        /* @__PURE__ */ e("span", { className: "font-semibold tracking-wide", children: a }),
        /* @__PURE__ */ e(le, { className: "w-4 h-4" })
      ] }) })
    ]
  }
), En = () => /* @__PURE__ */ e("section", { className: "py-16 md:py-24 lg:py-32 px-6 bg-gradient-to-b from-white via-neutral-50 to-white border-b border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
  /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-20", children: [
    /* @__PURE__ */ e(
      ma,
      {
        icon: et,
        title: "Direct Supply",
        subtitle: "Purchase market-ready graphene formulations for immediate deployment.",
        features: [
          "Ton-Scale Availability",
          "24h Dispatch for Stock",
          "Volume-Tiered Pricing",
          "Quality Certification (CoA)",
          "Technical Integration Support"
        ],
        cta: "Request Quote",
        color: "cyan",
        delay: 0,
        link: "/contact"
      }
    ),
    /* @__PURE__ */ e(
      ma,
      {
        icon: Ga,
        title: "Strategic Alliance",
        subtitle: "Co-create value with territory exclusivity and joint ventures.",
        features: [
          "Territorial Exclusivity",
          "Co-Branding Options",
          "Joint Go-to-Market",
          "Priority Manufacturing",
          "Revenue Sharing Models"
        ],
        cta: "Partner With Us",
        color: "amber",
        delay: 100,
        link: "/contact"
      }
    ),
    /* @__PURE__ */ e(
      ma,
      {
        icon: zi,
        title: "Custom R&D",
        subtitle: "Leverage our lab to engineer a proprietary material solution.",
        features: [
          "Dedicated Scientist Team",
          "IP Co-Ownership",
          "Application Specific Dev",
          "Pilot Line Priority",
          "Lab-to-Fab Roadmap"
        ],
        cta: "Start R&D Project",
        color: "purple",
        delay: 200,
        link: "/contact"
      }
    )
  ] }),
  /* @__PURE__ */ t("div", { className: "relative rounded-3xl p-12 overflow-hidden text-center border-2 border-neutral-200 bg-neutral-50", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-neutral-100 to-transparent opacity-50" }),
    /* @__PURE__ */ t("div", { className: "relative z-10", children: [
      /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium text-neutral-900 mb-6", children: "Enterprise or Government Inquiry?" }),
      /* @__PURE__ */ e("p", { className: "text-neutral-600 mb-8 max-w-xl mx-auto", children: "We offer specialized procurement channels for large-scale infrastructure projects and government tenders." }),
      /* @__PURE__ */ e(L, { to: "/contact", children: /* @__PURE__ */ t("button", { className: "inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white font-bold rounded-xl hover:bg-neutral-800 transition-all duration-300 shadow-lg hover:shadow-xl", children: [
        "Contact Executive Team",
        /* @__PURE__ */ e(le, { className: "w-5 h-5" })
      ] }) })
    ] })
  ] })
] }) }), jn = () => {
  const [r, i] = A(null), n = [
    {
      src: "/images/hall-of-fame/conf1.jpeg",
      alt: "Conference Presentation",
      caption: "Global Innovation Summit",
      description: "Unveiling our breakthrough graphene dispersion technology to industry leaders from 30 countries."
    },
    {
      src: "/images/hall-of-fame/conf2.jpeg",
      alt: "Award Ceremony",
      caption: "Industry Recognition",
      description: 'Honored with the "Sustainability Tech of the Year" award for our contributions to reducing carbon footprints.'
    },
    {
      src: "/images/hall-of-fame/conf3.jpeg",
      alt: "Panel Discussion",
      caption: "Thought Leadership",
      description: "Our CEO discussing the future of advanced materials policy and standardization."
    }
  ], o = (s) => {
    s.stopPropagation();
    const m = (n.findIndex((p) => p.src === r.src) + 1) % n.length;
    i(n[m]);
  }, a = (s) => {
    s.stopPropagation();
    const m = (n.findIndex((p) => p.src === r.src) - 1 + n.length) % n.length;
    i(n[m]);
  };
  return /* @__PURE__ */ t("section", { className: "py-24 px-6 border-t border-b border-neutral-800 relative overflow-hidden", children: [
    /* @__PURE__ */ t("div", { className: "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ e("div", { className: "absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] animate-pulse" }),
      /* @__PURE__ */ e("div", { className: "absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse", style: { animationDelay: "2s" } })
    ] }),
    /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto relative z-10", children: [
      /* @__PURE__ */ t("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-800/80 border border-neutral-700 text-purple-300 text-xs font-mono font-medium tracking-wider uppercase mb-8 shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-md", children: [
          /* @__PURE__ */ e(Wi, { className: "w-3.5 h-3.5 text-purple-400" }),
          "Milestones & Recognition"
        ] }),
        /* @__PURE__ */ t("h2", { className: "text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: [
          "Hall of ",
          /* @__PURE__ */ e("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400", children: "Fame" })
        ] }),
        /* @__PURE__ */ e("p", { className: "text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed", children: "Celebrating our journey of breakthroughs, global recognitions, and the moments that define our legacy." })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid md:grid-cols-3 gap-8", children: n.map((s, d) => /* @__PURE__ */ t(
        D.div,
        {
          layoutId: `card-${d}`,
          onClick: () => i(s),
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { delay: d * 0.15, duration: 0.6 },
          className: "group relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-500 ring-1 ring-white/5 hover:ring-purple-500/50",
          children: [
            /* @__PURE__ */ e(
              D.img,
              {
                layoutId: `image-${s.src}`,
                src: s.src,
                alt: s.alt,
                className: "object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              }
            ),
            /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" }),
            /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100 translate-y-4 group-hover:translate-y-0", children: /* @__PURE__ */ e("div", { className: "w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.2)]", children: /* @__PURE__ */ e(ai, { className: "w-6 h-6" }) }) }),
            /* @__PURE__ */ t("div", { className: "absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out", children: [
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100", children: [
                /* @__PURE__ */ e(fr, { className: "w-3.5 h-3.5 text-purple-400 fill-purple-400" }),
                /* @__PURE__ */ e("span", { className: "text-xs font-mono text-purple-200 uppercase tracking-widest", children: "Featured Moment" })
              ] }),
              /* @__PURE__ */ e("h3", { className: "text-white font-bold text-xl leading-tight border-l-4 border-purple-500 pl-4 group-hover:border-white transition-colors", children: s.caption })
            ] })
          ]
        },
        d
      )) })
    ] }),
    /* @__PURE__ */ e(de, { children: r && /* @__PURE__ */ t(
      D.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12",
        onClick: () => i(null),
        children: [
          /* @__PURE__ */ e("button", { className: "absolute top-8 right-8 p-3 rounded-full bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-700 text-white transition-all z-50 group", children: /* @__PURE__ */ e(Qt, { className: "w-6 h-6 group-hover:rotate-90 transition-transform" }) }),
          /* @__PURE__ */ e(
            "button",
            {
              className: "absolute left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-700 text-white transition-all z-50 hidden md:flex hover:-translate-x-1",
              onClick: a,
              children: /* @__PURE__ */ e(Bt, { className: "w-8 h-8" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: "absolute right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-neutral-900/50 hover:bg-neutral-800 border border-neutral-700 text-white transition-all z-50 hidden md:flex hover:translate-x-1",
              onClick: o,
              children: /* @__PURE__ */ e(Ot, { className: "w-8 h-8" })
            }
          ),
          /* @__PURE__ */ t(
            D.div,
            {
              layoutId: `card-${n.findIndex((s) => s.src === r.src)}`,
              className: "relative max-w-6xl w-full max-h-[85vh] grid grid-cols-1 lg:grid-cols-3 bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 shadow-[0_0_50px_rgba(0,0,0,0.5)]",
              onClick: (s) => s.stopPropagation(),
              children: [
                /* @__PURE__ */ e("div", { className: "lg:col-span-2 relative h-[50vh] lg:h-auto bg-black flex items-center justify-center p-4", children: /* @__PURE__ */ e(
                  D.img,
                  {
                    layoutId: `image-${r.src}`,
                    src: r.src,
                    alt: r.alt,
                    className: "max-w-full max-h-full object-contain drop-shadow-2xl"
                  }
                ) }),
                /* @__PURE__ */ t("div", { className: "p-8 lg:p-12 flex flex-col justify-center bg-neutral-900 border-t lg:border-t-0 lg:border-l border-neutral-800", children: [
                  /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-widest w-fit mb-8", children: [
                    /* @__PURE__ */ e(fr, { className: "w-3.5 h-3.5 fill-current" }),
                    /* @__PURE__ */ e("span", { children: "Milestone" })
                  ] }),
                  /* @__PURE__ */ e("h3", { className: "text-3xl lg:text-4xl font-display font-bold text-white mb-6 leading-tight", children: r.caption }),
                  /* @__PURE__ */ e("p", { className: "text-neutral-300 text-lg leading-relaxed font-light mb-10", children: r.description }),
                  /* @__PURE__ */ t("div", { className: "mt-auto pt-8 border-t border-neutral-800 flex justify-between items-center text-xs text-neutral-500 font-mono uppercase tracking-wider", children: [
                    /* @__PURE__ */ t("span", { children: [
                      "Image ",
                      n.findIndex((s) => s.src === r.src) + 1,
                      " / ",
                      n.length
                    ] }),
                    /* @__PURE__ */ e("span", { children: "MONOATOM LABS © 2026" })
                  ] })
                ] })
              ]
            }
          )
        ]
      }
    ) })
  ] });
}, Fn = {
  pageHeader: {
    title: "About Monoatom Labs",
    subtitle: "We envision a world where breakthrough materials enable cleaner air, purer water, and sustainable energy."
  }
}, qe = ({ children: r }) => /* @__PURE__ */ t("li", { className: "flex items-start text-neutral-600 gap-3 group", children: [
  /* @__PURE__ */ e("span", { className: "w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 group-hover:bg-blue-600 group-hover:scale-125 transition-all" }),
  /* @__PURE__ */ e("span", { className: "group-hover:text-neutral-900 transition-colors", children: r })
] }), Fe = ({ children: r }) => /* @__PURE__ */ e("span", { className: "inline-flex items-center px-2.5 py-1 rounded bg-neutral-100 border border-neutral-200 text-[10px] font-mono font-medium text-neutral-600 uppercase tracking-wide", children: r }), Hn = () => {
  const r = Fn;
  return /* @__PURE__ */ t("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ e(fe, { category: "Company", title: r.pageHeader.title, subtitle: r.pageHeader.subtitle }),
    /* @__PURE__ */ e("div", { className: "relative -mt-8 mb-24 z-10 px-6", children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ e("div", { className: "bg-white rounded-2xl shadow-xl border border-neutral-100 p-8 grid grid-cols-2 lg:grid-cols-6 gap-8 divide-x divide-neutral-100/50", children: [
      { value: "100+", label: "Installations", color: "text-blue-600" },
      { value: "50M+", label: "kg CO₂ Saved", color: "text-emerald-600" },
      { value: "5", label: "Core Products", color: "text-indigo-600" },
      { value: "15+", label: "Validations", color: "text-purple-600" },
      { value: "2", label: "R&D Facilities", color: "text-amber-600" },
      { value: "99.5%", label: "Satisfaction", color: "text-pink-600" }
    ].map((i, n) => /* @__PURE__ */ t(
      "div",
      {
        className: `text-center ${n % 2 !== 0 ? "border-none md:border-l lg:border-none" : ""}`,
        children: [
          " ",
          /* @__PURE__ */ e(
            "div",
            {
              className: `text-3xl md:text-4xl font-display font-bold ${i.color} mb-1`,
              children: i.value
            }
          ),
          /* @__PURE__ */ e("div", { className: "text-[10px] font-mono text-neutral-400 uppercase tracking-widest", children: i.label })
        ]
      },
      n
    )) }) }) }),
    /* @__PURE__ */ t("section", { className: "py-24 px-6 bg-white text-neutral-900 relative overflow-hidden border-b border-neutral-200", children: [
      /* @__PURE__ */ t("div", { className: "max-w-5xl mx-auto relative z-10 text-center mb-24", children: [
        /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-8", children: [
          /* @__PURE__ */ e(dt, { className: "w-3 h-3" }),
          "Our Vision"
        ] }),
        /* @__PURE__ */ t("h2", { className: "text-4xl md:text-6xl font-display font-medium leading-tight mb-8", children: [
          "Advanced Nanomaterials for ",
          /* @__PURE__ */ e("br", {}),
          /* @__PURE__ */ e("span", { className: "text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600", children: "Better Quality of Life" })
        ] }),
        /* @__PURE__ */ e("p", { className: "text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light", children: "We see graphene and advanced nanomaterials as the foundation of a transformation that will touch every aspect of human life—from the air we breathe to the energy we consume." })
      ] }),
      /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto relative z-10", children: /* @__PURE__ */ t("div", { className: "grid md:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("h3", { className: "text-3xl font-display font-medium mb-8 flex items-center gap-4 text-neutral-900", children: [
            /* @__PURE__ */ e(mt, { className: "w-8 h-8 text-blue-600" }),
            "Our Mission"
          ] }),
          /* @__PURE__ */ e("p", { className: "text-lg text-neutral-600 font-light leading-relaxed mb-10", children: "To create commercially viable graphene solutions for industrial applications. We develop, validate, and commercialize graphene innovations to provide:" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 gap-4", children: [
            { icon: ge, label: "Clean Air" },
            { icon: ke, label: "Clean Water" },
            { icon: I, label: "Clean Energy" },
            { icon: ri, label: "Better Life" }
          ].map((i, n) => /* @__PURE__ */ t(
            "div",
            {
              className: "p-4 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-blue-300 transition-colors flex items-center gap-3",
              children: [
                /* @__PURE__ */ e(i.icon, { className: "w-5 h-5 text-blue-600" }),
                /* @__PURE__ */ e("span", { className: "font-medium text-neutral-900", children: i.label })
              ]
            },
            n
          )) })
        ] }),
        /* @__PURE__ */ t("div", { className: "relative", children: [
          /* @__PURE__ */ e("div", { className: "absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-10 blur-lg" }),
          /* @__PURE__ */ t("div", { className: "relative bg-white border border-neutral-200 rounded-2xl p-10 shadow-sm", children: [
            /* @__PURE__ */ e("h4", { className: "text-sm font-mono text-neutral-500 uppercase tracking-widest mb-6 border-b border-neutral-100 pb-4", children: "Core Identity" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-600 leading-relaxed mb-6", children: "Monoatom Labs develops breakthrough materials engineered for the future—graphene derivatives, functional nanomaterials, bio-inspired chemistries, and performance-enhancing additives." }),
            /* @__PURE__ */ e("p", { className: "text-neutral-600 leading-relaxed", children: "Our innovations are designed to deliver superior strength, conductivity, durability, and environmental efficiency, enabling enterprises to rapidly transition into Industry 4.0." })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-neutral-50 border-b border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ t("div", { className: "mb-16", children: [
        /* @__PURE__ */ e("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200 border border-neutral-300 text-neutral-600 text-xs font-mono font-medium tracking-wider uppercase mb-6", children: "01 — Why Us" }),
        /* @__PURE__ */ e("h2", { className: "text-4xl font-display font-medium text-neutral-900", children: "What Makes Us Different" })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        {
          title: "Deep Scientific Expertise",
          desc: "Combined materials science, chemical engineering, and nanotechnology expertise from IISc, IIT, and NCL."
        },
        {
          title: "Industrial Scale Capability",
          desc: "Scaling from prototype to mass manufacturing with pilot-scale facilities and process optimization."
        },
        {
          title: "Real-World Validation",
          desc: "Rigorous field trials, NABL-certified lab testing, and independent third-party validation."
        },
        {
          title: "IP-Driven Innovation",
          desc: "Proprietary technology, formulation patents, and trade secrets protecting our dispersion technologies."
        }
      ].map((i, n) => /* @__PURE__ */ t(
        "div",
        {
          className: "bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group",
          children: [
            /* @__PURE__ */ e("h3", { className: "text-lg font-bold text-neutral-900 mb-4 group-hover:text-blue-700 transition-colors", children: i.title }),
            /* @__PURE__ */ e("p", { className: "text-sm text-neutral-600 leading-relaxed", children: i.desc })
          ]
        },
        n
      )) })
    ] }) }),
    /* @__PURE__ */ e("section", { id: "founders", className: "py-24 px-6 bg-transparent text-white", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ t("div", { className: "mb-20 border-b border-neutral-800 pb-8", children: [
        /* @__PURE__ */ e("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-400 text-xs font-mono font-medium tracking-wider uppercase mb-6", children: "02 — Leadership" }),
        /* @__PURE__ */ e("h2", { className: "text-4xl md:text-5xl font-display font-medium mb-4", children: "Leadership Team" }),
        /* @__PURE__ */ e("p", { className: "text-neutral-400 max-w-2xl text-lg font-light", children: "Built on decades of innovation expertise and industrial excellence." })
      ] }),
      /* @__PURE__ */ t("div", { className: "grid lg:grid-cols-2 gap-12 mb-24", children: [
        /* @__PURE__ */ t("div", { className: "group", children: [
          /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-6", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-medium mb-1", children: "Sushanth Paatnaik" }),
              /* @__PURE__ */ e("p", { className: "text-blue-400 font-mono text-sm uppercase tracking-wider", children: "Co-Founder & CEO" })
            ] }),
            /* @__PURE__ */ e("div", { className: "p-3 bg-neutral-800 rounded-lg border border-neutral-700 group-hover:border-blue-500/50 transition-colors", children: /* @__PURE__ */ e(Ze, { className: "w-6 h-6 text-blue-400" }) })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-neutral-300 leading-relaxed font-light mb-8 pr-8", children: "Materials innovator and entrepreneur. His innovation journey started at age 11. Focused on building next-generation technologies rooted in graphene, nanomaterials, and advanced chemical engineering. Experts in deep-tech commercialization and scaling science-driven ventures." }),
          /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ e(Fe, { children: "6× President of India Awardee" }),
            /* @__PURE__ */ e(Fe, { children: "MIT TR35" }),
            /* @__PURE__ */ e(Fe, { children: "TED Speaker" }),
            /* @__PURE__ */ e(Fe, { children: "NASA Awardee" })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "group lg:pl-12 lg:border-l border-neutral-800", children: [
          /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-6", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-medium mb-1", children: "Aayush Bansal" }),
              /* @__PURE__ */ e("p", { className: "text-emerald-400 font-mono text-sm uppercase tracking-wider", children: "Co-Founder & Strategic Investor" })
            ] }),
            /* @__PURE__ */ e("div", { className: "p-3 bg-neutral-800 rounded-lg border border-neutral-700 group-hover:border-emerald-500/50 transition-colors", children: /* @__PURE__ */ e(Vt, { className: "w-6 h-6 text-emerald-400" }) })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-neutral-300 leading-relaxed font-light mb-8 pr-8", children: "Promoter of Kalika Steel. Computer Science Engineer with MBA in Technology Management. With over 38 years of experience in steel manufacturing and large-scale industrial operations, he bridges the gap between breakthrough innovations and real-world manufacturing." }),
          /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ e(Fe, { children: "Kalika Steel Promoter" }),
            /* @__PURE__ */ e(Fe, { children: "Industrial Scale-up" }),
            /* @__PURE__ */ e(Fe, { children: "MBA Tech Management" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid md:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800 rounded-2xl overflow-hidden", children: [
        {
          icon: ii,
          title: "Scientific Excellence",
          desc: "Materials science, chem e, and nano experts from premier institutions."
        },
        {
          icon: Ie,
          title: "Industrial Experience",
          desc: "Manufacturing, scale-up, and commercialization specialists."
        },
        {
          icon: ct,
          title: "Research Partnerships",
          desc: "Collaborations with IISc, IIT, and National Chemical Laboratory."
        },
        {
          icon: Ge,
          title: "Global Recognition",
          desc: "Multiple international recognitions for innovation and impact."
        }
      ].map((i, n) => /* @__PURE__ */ t("div", { className: "bg-neutral-900 p-8 hover:bg-neutral-800 transition-colors group", children: [
        /* @__PURE__ */ e(
          i.icon,
          {
            className: "w-8 h-8 text-neutral-500 group-hover:text-white mb-6 transition-colors",
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ e("h4", { className: "text-white font-medium mb-2", children: i.title }),
        /* @__PURE__ */ e("p", { className: "text-sm text-neutral-400 leading-relaxed", children: i.desc })
      ] }, n)) })
    ] }) }),
    /* @__PURE__ */ e("section", { id: "facilities", className: "py-24 px-6 bg-white", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ t("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-6", children: "03 — Infrastructure" }),
          /* @__PURE__ */ e("h2", { className: "text-4xl font-display font-medium text-neutral-900", children: "Facilities & Capabilities" })
        ] }),
        /* @__PURE__ */ e("p", { className: "text-neutral-500 max-w-md text-right md:text-left", children: "State-of-the-art research, testing, and manufacturing facilities designed for scaling deep-tech." })
      ] }),
      /* @__PURE__ */ t("div", { className: "grid lg:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ t("div", { className: "border border-neutral-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-neutral-50/50", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-8 pb-8 border-b border-neutral-200", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-white rounded-xl border border-neutral-200 flex items-center justify-center text-blue-600 shadow-sm", children: /* @__PURE__ */ e(Ae, { className: "w-6 h-6" }) }),
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ e("div", { className: "text-[10px] font-mono uppercase tracking-widest text-neutral-400", children: "Unit 01" }),
                /* @__PURE__ */ e("h3", { className: "text-xl font-bold text-neutral-900", children: "Nanomaterials R&D" })
              ] })
            ] }),
            /* @__PURE__ */ e("div", { className: "px-3 py-1 bg-white border border-neutral-200 rounded text-xs font-medium text-neutral-500", children: "Operational" })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-neutral-600 mb-8 font-light", children: "Focused on graphene processing, dispersion technologies, and high-purity nano-additive development." }),
          /* @__PURE__ */ t("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ e(qe, { children: "Surface chemistry modification" }),
            /* @__PURE__ */ e(qe, { children: "Advanced characterization (SEM, TEM, Raman)" }),
            /* @__PURE__ */ e(qe, { children: "Pilot-scale dispersion & functionalization" })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "border border-neutral-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-neutral-50/50", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-8 pb-8 border-b border-neutral-200", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-white rounded-xl border border-neutral-200 flex items-center justify-center text-blue-600 shadow-sm", children: /* @__PURE__ */ e(ni, { className: "w-6 h-6" }) }),
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ e("div", { className: "text-[10px] font-mono uppercase tracking-widest text-neutral-400", children: "Unit 02" }),
                /* @__PURE__ */ e("h3", { className: "text-xl font-bold text-neutral-900", children: "Application & Testing" })
              ] })
            ] }),
            /* @__PURE__ */ e("div", { className: "px-3 py-1 bg-white border border-neutral-200 rounded text-xs font-medium text-neutral-500", children: "Operational" })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-neutral-600 mb-8 font-light", children: "Real-industry testing for coatings, concrete, composites, energy systems, and bio-chemical applications." }),
          /* @__PURE__ */ t("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ e(qe, { children: "Mechanical & durability testing" }),
            /* @__PURE__ */ e(qe, { children: "Thermal & electrical conductivity labs" }),
            /* @__PURE__ */ e(qe, { children: "Prototype fabrication & field-simulation" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "mt-8 border border-neutral-200 rounded-2xl p-8 bg-white", children: [
        /* @__PURE__ */ e("h4", { className: "text-sm font-mono text-neutral-400 uppercase tracking-widest mb-6", children: "Equipment Specs" }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
          "Graphene synthesis",
          "Process development",
          "Nanomaterial functionalization",
          "Quality control systems",
          "Advanced characterization",
          "Coating application",
          "Dispersion technology",
          "Material testing"
        ].map((i, n) => /* @__PURE__ */ e(
          "div",
          {
            className: "px-4 py-3 bg-neutral-50 rounded border border-neutral-100 text-sm text-neutral-600",
            children: i
          },
          n
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ e(jn, {}),
    /* @__PURE__ */ e(Gn, {}),
    /* @__PURE__ */ e(En, {}),
    /* @__PURE__ */ e(Rn, {}),
    /* @__PURE__ */ e(In, {})
  ] });
}, Ns = () => /* @__PURE__ */ e(Hn, {}), zn = {
  // About Section
  about: {
    company: {
      title: "About Monoatom Labs",
      pageTitle: "About Monoatom Labs | Company Story & Mission",
      metaDescription: "Learn about Monoatom Labs' mission to develop commercially viable graphene solutions for clean air, water, and energy. Advanced nanomaterials for better quality of life.",
      breadcrumb: "Home > About > Company",
      founded: "2025",
      headquarters: "Ahmedabad, Gujarat, India",
      focus: "Advanced Nanomaterials for Better Quality of Life",
      tagline: "Unlocking Trillion Dollar Economy",
      vision: "Advanced Nanomaterials for Better Quality of Life",
      mission: "Creating Commercially Viable Graphene Solutions",
      content: {}
      // Full content to be populated from markdown
    },
    founders: {
      title: "Founders & Team",
      pageTitle: "Founders & Team | Monoatom Labs Leadership",
      metaDescription: "Meet the visionary founders and expert team behind Monoatom Labs' breakthrough graphene technologies.",
      breadcrumb: "Home > About > Founders & Team",
      content: {}
    },
    facilities: {
      title: "Facilities & Capabilities",
      pageTitle: "Facilities & Capabilities | Monoatom Labs R&D",
      metaDescription: "Explore Monoatom Labs' advanced research and testing facilities enabling breakthrough nanomaterial innovations.",
      breadcrumb: "Home > About > Facilities",
      content: {}
    }
  },
  // Products Section
  products: {
    overview: {
      title: "Products Overview",
      pageTitle: "Products | Monoatom Labs - Advanced Graphene Solutions",
      metaDescription: "Explore Monoatom Labs' portfolio of commercially ready graphene products including Graphacrete, Graffisol, Ceraphene, and HD-G-PE.",
      breadcrumb: "Home > Products"
    },
    graphacrete: {
      title: "Graphacrete - High-Performance Concrete Additive",
      pageTitle: "Graphacrete | Graphene Concrete Additive for Superior Strength & Durability",
      metaDescription: "Graphacrete delivers 40-50% compressive strength gain, 15-20% cement reduction, and excellent crack resistance. NABL certified.",
      breadcrumb: "Home > Products > Graphacrete",
      category: "Construction & Infrastructure Additive",
      status: "Commercially Available",
      keyBenefits: [
        "50% increase in compressive & flexural strength",
        "Improved crack resistance and durability",
        "30-45% lower permeability & higher chemical resistance",
        "15-20% cement reduction - reduced carbon footprint",
        "Enhanced thermal dissipation",
        "Excellent micro-crack control"
      ],
      pricing: {
        price: "₹235/L",
        moq: "1000L",
        dosage: "2L per m³ concrete",
        costPerM3: "₹470"
      }
    },
    graffisol: {
      title: "Graffisol - Next-Generation Solar Panel Coating",
      pageTitle: "Graffisol | Graphene Solar Panel Coating for Maximum Efficiency",
      metaDescription: "Graffisol enhances solar panel efficiency by 7-8% with improved thermal management and anti-soiling properties.",
      breadcrumb: "Home > Products > Graffisol",
      category: "Solar & Clean Energy",
      status: "Commercially Available"
    },
    ceraphene: {
      title: "Ceraphene - Ultra-Durable Ceramic Coating",
      pageTitle: "Ceraphene | Graphene-Enhanced Ceramic Coating",
      metaDescription: "Ceraphene provides 9H+ hardness protection at 60-70% lower cost than premium alternatives.",
      breadcrumb: "Home > Products > Ceraphene",
      category: "Automotive & Coatings",
      status: "Commercially Available"
    },
    hdgpe: {
      title: "HD-G-PE - Graphene-Reinforced Polymer Enhancer",
      pageTitle: "HD-G-PE | Graphene HDPE Enhancement",
      metaDescription: "Transform HDPE materials with 30% strength improvement and 20× elongation enhancement.",
      breadcrumb: "Home > Products > HD-G-PE",
      category: "Polymer & Manufacturing",
      status: "Commercially Available"
    }
  },
  // Pipeline Products
  pipeline: {
    overview: {
      title: "Innovation Pipeline",
      pageTitle: "Innovation Pipeline | Next-Generation Graphene Products",
      metaDescription: "Explore Monoatom Labs' pipeline of next-generation graphene products in development.",
      breadcrumb: "Home > Products > Pipeline"
    },
    rustene: {
      title: "Rustene - Anti-Corrosion Paint",
      pageTitle: "Rustene | Graphene Anti-Corrosion Coating",
      metaDescription: "Graphene-based anti-rusting paint forming ultra-thin barrier for extended metal lifespan.",
      breadcrumb: "Home > Products > Pipeline > Rustene",
      status: "Pipeline/Development"
    },
    graphyre: {
      title: "Graphyre - Tire Technology",
      pageTitle: "Graphyre | Graphene-Reinforced Tire Technology",
      metaDescription: "Graphene-reinforced tyres delivering higher strength, lower rolling resistance, and extended service life.",
      breadcrumb: "Home > Products > Pipeline > Graphyre",
      status: "Pipeline/Development"
    },
    graphosite: {
      title: "Graphosite - Advanced Composites",
      pageTitle: "Graphosite | Graphene Composite Materials",
      metaDescription: "Lightweight, high-strength graphene-reinforced fibres for next-generation structural composites.",
      breadcrumb: "Home > Products > Pipeline > Graphosite",
      status: "Pipeline/Development"
    },
    thermaphene: {
      title: "Thermaphene - Heating Solutions",
      pageTitle: "Thermaphene | Graphene Heating Technology",
      metaDescription: "Graphene-based heating solution enabling lightweight and high-performance winter wear.",
      breadcrumb: "Home > Products > Pipeline > Thermaphene",
      status: "Pipeline/Development"
    },
    armophene: {
      title: "Armophene - Protective Armor",
      pageTitle: "Armophene | Graphene Ballistic Protection",
      metaDescription: "Graphene-infused bulletproof jacket delivering lightweight, flexible armor with superior ballistic protection.",
      breadcrumb: "Home > Products > Pipeline > Armophene",
      status: "Pipeline/Development"
    }
  },
  // Technology Section
  technology: {
    platform: {
      title: "Technology Platform",
      pageTitle: "Technology Platform | Monoatom Labs",
      metaDescription: "Discover Monoatom Labs' advanced graphene technology platform enabling breakthrough material innovations.",
      breadcrumb: "Home > Technology > Platform"
    },
    pilotProjects: {
      title: "Pilot Projects",
      pageTitle: "Pilot Projects | Field-Scale Validations",
      metaDescription: "Explore Monoatom Labs' field-scale pilot projects validating graphene technology performance.",
      breadcrumb: "Home > Technology > Pilot Projects"
    },
    capabilities: {
      title: "Technical Capabilities",
      pageTitle: "Capabilities | Research & Development",
      metaDescription: "Learn about Monoatom Labs' comprehensive technical capabilities and R&D infrastructure.",
      breadcrumb: "Home > Technology > Capabilities"
    }
  },
  // Partnership
  partnership: {
    title: "Partnership Opportunities",
    pageTitle: "Partnership | Collaborate with Monoatom Labs",
    metaDescription: "Explore flexible partnership models including Joint Ventures and Technology Licensing with Monoatom Labs.",
    breadcrumb: "Home > Partnership",
    models: {
      jv: "Joint Venture - SPV Model",
      licensing: "Technology Licensing"
    }
  },
  // Industries Section
  industries: {
    overview: {
      title: "Industries We Serve",
      pageTitle: "Industries | Monoatom Labs Applications",
      metaDescription: "Discover how Monoatom Labs' graphene solutions transform multiple industries.",
      breadcrumb: "Home > Industries"
    },
    construction: {
      title: "Construction & Infrastructure",
      pageTitle: "Construction Solutions | Monoatom Labs",
      metaDescription: "High-performance concrete and durable materials for construction and infrastructure.",
      breadcrumb: "Home > Industries > Construction"
    },
    solarEnergy: {
      title: "Solar & Clean Energy",
      pageTitle: "Solar Energy Solutions | Monoatom Labs",
      metaDescription: "Efficiency enhancement and thermal management solutions for solar energy.",
      breadcrumb: "Home > Industries > Solar Energy"
    },
    automotive: {
      title: "Automotive & Coatings",
      pageTitle: "Automotive Solutions | Monoatom Labs",
      metaDescription: "Protective coatings and advanced materials for automotive applications.",
      breadcrumb: "Home > Industries > Automotive"
    },
    advancedMaterials: {
      title: "Advanced Materials",
      pageTitle: "Advanced Materials | Monoatom Labs",
      metaDescription: "Breakthrough materials for aerospace, defense, and specialized applications.",
      breadcrumb: "Home > Industries > Advanced Materials"
    }
  },
  // Contact
  contact: {
    title: "Contact Us",
    pageTitle: "Contact | Get in Touch with Monoatom Labs",
    metaDescription: "Contact Monoatom Labs for product inquiries, technical support, or partnership opportunities.",
    breadcrumb: "Home > Contact",
    email: "info@monoatomlabs.com",
    phone: "+91-989-919-9809",
    address: "3rd Floor, iHub, Ahmedabad-380015, Gujarat, India",
    website: "www.monoatomlabs.com"
  }
}, Wn = {
  pageHeader: {
    title: "Contact Monoatom Labs",
    subtitle: "Reach out for product inquiries, partnerships, or technical discussions."
  }
}, pa = ({ icon: r, title: i, content: n, href: o, subtext: a }) => /* @__PURE__ */ t("div", { className: "group p-8 bg-white border border-neutral-200 rounded-2xl hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 h-full", children: [
  /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-50 group-hover:border-blue-100", children: /* @__PURE__ */ e(r, { className: "w-6 h-6 text-neutral-600 group-hover:text-blue-600 transition-colors", strokeWidth: 1.5 }) }),
  /* @__PURE__ */ e("h3", { className: "text-xl font-display font-medium text-neutral-900 mb-2", children: i }),
  o ? /* @__PURE__ */ e("a", { href: o, className: "text-lg text-neutral-600 hover:text-blue-600 transition-colors font-medium block mb-1", children: n }) : /* @__PURE__ */ e("p", { className: "text-lg text-neutral-600 leading-relaxed max-w-xs font-medium mb-1", children: n }),
  a && /* @__PURE__ */ e("p", { className: "text-sm text-neutral-400", children: a })
] }), ua = ({ question: r, answer: i }) => /* @__PURE__ */ t("div", { className: "mb-6 last:mb-0", children: [
  /* @__PURE__ */ t("h4", { className: "font-bold text-neutral-900 mb-2 flex items-start gap-2", children: [
    /* @__PURE__ */ e(Vi, { className: "w-4 h-4 text-blue-500 mt-1 shrink-0" }),
    r
  ] }),
  /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 leading-relaxed pl-6", children: i })
] }), ws = () => {
  const r = Wn, i = zn.contact, [n, o] = A("idle"), a = (s) => {
    s.preventDefault(), o("submitting"), setTimeout(() => {
      o("success");
    }, 1500);
  };
  return /* @__PURE__ */ t("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ e(
      fe,
      {
        category: "Connect",
        title: r.pageHeader.title,
        subtitle: r.pageHeader.subtitle
      }
    ),
    /* @__PURE__ */ t("div", { className: "bg-white border-t border-neutral-200 relative z-10", children: [
      /* @__PURE__ */ e("section", { className: "py-24 px-6", children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-32 relative z-20", children: [
        /* @__PURE__ */ e(
          pa,
          {
            icon: Aa,
            title: "Email Us",
            content: i.email,
            href: `mailto:${i.email}`,
            subtext: "Response within 24 hours"
          }
        ),
        /* @__PURE__ */ e(
          pa,
          {
            icon: Wt,
            title: "Call Us",
            content: i.phone,
            href: `tel:${i.phone}`,
            subtext: "Mon-Fri, 9am - 6pm IST"
          }
        ),
        /* @__PURE__ */ e(
          pa,
          {
            icon: Ea,
            title: "Visit HQ",
            content: i.address,
            subtext: "Ahmedabad, Gujarat, India"
          }
        )
      ] }) }) }),
      /* @__PURE__ */ e("section", { className: "py-12 px-6 border-b border-neutral-100", children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ t("div", { className: "grid lg:grid-cols-2 gap-16 items-start", children: [
        /* @__PURE__ */ t("div", { className: "bg-neutral-50 rounded-3xl p-8 md:p-12 border border-neutral-200", children: [
          /* @__PURE__ */ e("h2", { className: "text-3xl font-display font-medium text-neutral-900 mb-2", children: "Send us a Message" }),
          /* @__PURE__ */ e("p", { className: "text-neutral-500 mb-8 font-light", children: "Fill out the form below and we'll route your inquiry to the right expert." }),
          n === "success" ? /* @__PURE__ */ t("div", { className: "bg-green-50 border border-green-200 rounded-xl p-8 text-center", children: [
            /* @__PURE__ */ e("div", { className: "w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ e($e, { className: "w-8 h-8" }) }),
            /* @__PURE__ */ e("h3", { className: "text-xl font-bold text-green-800 mb-2", children: "Message Sent!" }),
            /* @__PURE__ */ e("p", { className: "text-green-700", children: "Thank you for contacting Monoatom Labs. We will be in touch shortly." }),
            /* @__PURE__ */ e("button", { onClick: () => o("idle"), className: "mt-6 text-sm font-bold text-green-800 underline", children: "Send another message" })
          ] }) : /* @__PURE__ */ t("form", { onSubmit: a, className: "space-y-6", children: [
            /* @__PURE__ */ t("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ t("div", { className: "space-y-2", children: [
                /* @__PURE__ */ e("label", { className: "text-xs font-bold text-neutral-500 uppercase tracking-wider", children: "Full Name" }),
                /* @__PURE__ */ t("div", { className: "relative", children: [
                  /* @__PURE__ */ e(Bi, { className: "absolute top-3.5 left-4 w-5 h-5 text-neutral-400" }),
                  /* @__PURE__ */ e("input", { type: "text", required: !0, className: "w-full bg-white border border-neutral-200 rounded-xl py-3 pl-12 pr-4 text-neutral-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all", placeholder: "John Doe" })
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "space-y-2", children: [
                /* @__PURE__ */ e("label", { className: "text-xs font-bold text-neutral-500 uppercase tracking-wider", children: "Organization" }),
                /* @__PURE__ */ t("div", { className: "relative", children: [
                  /* @__PURE__ */ e(Oi, { className: "absolute top-3.5 left-4 w-5 h-5 text-neutral-400" }),
                  /* @__PURE__ */ e("input", { type: "text", className: "w-full bg-white border border-neutral-200 rounded-xl py-3 pl-12 pr-4 text-neutral-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all", placeholder: "Company Name" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e("label", { className: "text-xs font-bold text-neutral-500 uppercase tracking-wider", children: "Email Address" }),
              /* @__PURE__ */ t("div", { className: "relative", children: [
                /* @__PURE__ */ e(Aa, { className: "absolute top-3.5 left-4 w-5 h-5 text-neutral-400" }),
                /* @__PURE__ */ e("input", { type: "email", required: !0, className: "w-full bg-white border border-neutral-200 rounded-xl py-3 pl-12 pr-4 text-neutral-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all", placeholder: "john@company.com" })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e("label", { className: "text-xs font-bold text-neutral-500 uppercase tracking-wider", children: "Nature of Inquiry" }),
              /* @__PURE__ */ t("div", { className: "relative", children: [
                /* @__PURE__ */ e(Vt, { className: "absolute top-3.5 left-4 w-5 h-5 text-neutral-400" }),
                /* @__PURE__ */ t("select", { className: "w-full bg-white border border-neutral-200 rounded-xl py-3 pl-12 pr-4 text-neutral-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none", children: [
                  /* @__PURE__ */ e("option", { children: "Product Inquiry" }),
                  /* @__PURE__ */ e("option", { children: "Partnership / JV" }),
                  /* @__PURE__ */ e("option", { children: "Technical Support" }),
                  /* @__PURE__ */ e("option", { children: "Investment" }),
                  /* @__PURE__ */ e("option", { children: "Other" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "space-y-2", children: [
              /* @__PURE__ */ e("label", { className: "text-xs font-bold text-neutral-500 uppercase tracking-wider", children: "Message" }),
              /* @__PURE__ */ e("textarea", { required: !0, rows: 4, className: "w-full bg-white border border-neutral-200 rounded-xl p-4 text-neutral-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all", placeholder: "How can we help you today?" })
            ] }),
            /* @__PURE__ */ e(
              K,
              {
                type: "submit",
                variant: "primary",
                className: "w-full justify-center py-4 text-base",
                disabled: n === "submitting",
                children: n === "submitting" ? "Sending..." : "Send Message"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("div", { className: "mb-12", children: [
            /* @__PURE__ */ e("h3", { className: "text-xl font-display font-medium text-neutral-900 mb-6", children: "Frequently Asked Questions" }),
            /* @__PURE__ */ t("div", { className: "space-y-6", children: [
              /* @__PURE__ */ e(ua, { question: "What is your typical lead time for product samples?", answer: "Standard samples are dispatched within 3-5 business days. Custom formulations may take 2-3 weeks depending on complexity." }),
              /* @__PURE__ */ e(ua, { question: "Do you offer technical support for integration?", answer: "Yes, our application engineering team provides full support to integrate our additives into your existing production lines." }),
              /* @__PURE__ */ e(ua, { question: "Are your products certified?", answer: "Yes, our core products like Graphacrete are NABL certified. Detailed MSDS and TDS are available upon request." })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "bg-blue-50 rounded-2xl p-8 border border-blue-100", children: [
            /* @__PURE__ */ t("h3", { className: "text-lg font-bold text-blue-900 mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ e(pt, { className: "w-5 h-5" }),
              "Business Hours"
            ] }),
            /* @__PURE__ */ t("div", { className: "space-y-2 text-blue-800", children: [
              /* @__PURE__ */ t("div", { className: "flex justify-between border-b border-blue-200 pb-2", children: [
                /* @__PURE__ */ e("span", { children: "Monday - Friday" }),
                /* @__PURE__ */ e("span", { className: "font-medium", children: "9:00 AM - 6:00 PM IST" })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex justify-between border-b border-blue-200 pb-2", children: [
                /* @__PURE__ */ e("span", { children: "Saturday" }),
                /* @__PURE__ */ e("span", { className: "font-medium", children: "10:00 AM - 2:00 PM IST" })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ e("span", { children: "Sunday" }),
                /* @__PURE__ */ e("span", { className: "font-medium", children: "Closed" })
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "mt-4 text-xs text-blue-600", children: "* We typically respond to email inquiries within 24 hours, even on weekends." })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-neutral-50", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ t("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
          /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase mb-6", children: [
            /* @__PURE__ */ e(Ge, { className: "w-3 h-3" }),
            "Strategic Collaboration"
          ] }),
          /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl font-display font-medium text-neutral-900 mb-6", children: "Engagement Models" }),
          /* @__PURE__ */ e("p", { className: "text-lg text-neutral-500 font-light", children: "We offer flexible partnership structures designed to accelerate commercialization and maximize value." })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ t("div", { className: "bg-white p-10 rounded-3xl border border-neutral-200 shadow-sm hover:border-blue-200 hover:shadow-lg transition-all duration-300 group", children: [
            /* @__PURE__ */ e("div", { className: "w-14 h-14 bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-8 rounded-2xl group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors", children: /* @__PURE__ */ e(Ga, { className: "w-7 h-7 text-neutral-700 group-hover:text-blue-600 transition-colors", strokeWidth: 1.5 }) }),
            /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium text-neutral-900 mb-4", children: "JV – SPV Model" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-500 mb-8 leading-relaxed font-light", children: "Co-develop, manufacture, and commercialise graphene-enabled products through Joint Ventures. Shared risk, shared IP value creation, and long-term strategic alignment." }),
            /* @__PURE__ */ e(L, { to: "/contact", children: /* @__PURE__ */ e(K, { variant: "primary", className: "w-full justify-center", children: "Discuss JV Opportunity" }) })
          ] }),
          /* @__PURE__ */ t("div", { className: "bg-white p-10 rounded-3xl border border-neutral-200 shadow-sm hover:border-purple-200 hover:shadow-lg transition-all duration-300 group", children: [
            /* @__PURE__ */ e("div", { className: "w-14 h-14 bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-8 rounded-2xl group-hover:bg-purple-50 group-hover:border-purple-100 transition-colors", children: /* @__PURE__ */ e(Kt, { className: "w-7 h-7 text-neutral-700 group-hover:text-purple-600 transition-colors", strokeWidth: 1.5 }) }),
            /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium text-neutral-900 mb-4", children: "Technology Licensing" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-500 mb-8 leading-relaxed font-light", children: "Rapidly integrate graphene innovations into existing production lines. Access proprietary formulations, processes, and application-specific IP with full technical support." }),
            /* @__PURE__ */ e(L, { to: "/contact", children: /* @__PURE__ */ e(K, { variant: "secondary", className: "w-full justify-center", children: "Explore Licensing" }) })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}, Bn = {
  pageHeader: {
    title: "About Monoatom Labs",
    subtitle: "We envision a world where breakthrough materials enable cleaner air, purer water, sustainable energy, and enhanced quality of life for everyone."
  }
}, ks = () => {
  const r = Bn;
  return /* @__PURE__ */ t("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ e(
      fe,
      {
        category: "Company",
        title: r.pageHeader.title,
        subtitle: r.pageHeader.subtitle
      }
    ),
    /* @__PURE__ */ e("section", { className: "py-16 px-6 bg-gradient-to-b from-neutral-900 to-neutral-950 text-white border-b border-neutral-800", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ t("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-neutral-700 bg-neutral-800/50 backdrop-blur mb-6", children: [
          /* @__PURE__ */ e("span", { className: "w-2 h-2 rounded-full bg-white animate-pulse" }),
          /* @__PURE__ */ e("span", { className: "text-xs font-bold text-neutral-300 tracking-wide uppercase", children: "Our Company" })
        ] }),
        /* @__PURE__ */ e("h2", { className: "text-3xl md:text-4xl font-display font-medium tracking-tight mb-4", children: "Advanced Nanomaterials for Better Quality of Life" }),
        /* @__PURE__ */ e("p", { className: "text-lg text-neutral-400 max-w-3xl mx-auto", children: "Transforming industries through graphene and advanced nanomaterial innovations that enable cleaner air, purer water, sustainable energy, and enhanced quality of life." })
      ] }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ t("div", { className: "text-center p-6 bg-neutral-800/30 border border-neutral-700 rounded-sm", children: [
          /* @__PURE__ */ e("div", { className: "text-3xl font-display font-medium text-white mb-1", children: "2025" }),
          /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 uppercase tracking-wide", children: "Founded" })
        ] }),
        /* @__PURE__ */ t("div", { className: "text-center p-6 bg-neutral-800/30 border border-neutral-700 rounded-sm", children: [
          /* @__PURE__ */ e("div", { className: "text-3xl font-display font-medium text-white mb-1", children: "10+" }),
          /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 uppercase tracking-wide", children: "Innovations" })
        ] }),
        /* @__PURE__ */ t("div", { className: "text-center p-6 bg-neutral-800/30 border border-neutral-700 rounded-sm", children: [
          /* @__PURE__ */ e("div", { className: "text-3xl font-display font-medium text-white mb-1", children: "5+" }),
          /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 uppercase tracking-wide", children: "Commercial Products" })
        ] }),
        /* @__PURE__ */ t("div", { className: "text-center p-6 bg-neutral-800/30 border border-neutral-700 rounded-sm", children: [
          /* @__PURE__ */ e("div", { className: "text-3xl font-display font-medium text-white mb-1", children: "Ahmedabad" }),
          /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 uppercase tracking-wide", children: "Headquarters" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ e("section", { className: "py-24 px-6 border-b border-neutral-200", children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ t("div", { className: "max-w-4xl", children: [
      /* @__PURE__ */ e("h2", { className: "text-3xl font-display font-medium text-neutral-900 mb-8", children: "Who We Are" }),
      /* @__PURE__ */ t("div", { className: "space-y-6 text-lg text-neutral-600 leading-relaxed", children: [
        /* @__PURE__ */ e("p", { children: "Monoatom Labs develops breakthrough materials engineered for the future—graphene derivatives, functional nanomaterials, bio-inspired chemistries, and performance-enhancing additives. Our innovations are designed to deliver superior strength, conductivity, durability, and environmental efficiency, enabling enterprises to rapidly transition into Industry 4.0." }),
        /* @__PURE__ */ e("p", { children: "We combine deep scientific expertise with real-world industrial deployment capabilities, ensuring every innovation can scale from lab prototype to mass manufacturing." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-neutral-50 border-b border-neutral-200", children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-white border border-neutral-200 flex items-center justify-center rounded-sm", children: /* @__PURE__ */ e(_i, { className: "w-6 h-6 text-neutral-900" }) }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("h2", { className: "text-2xl font-display font-medium text-neutral-900", children: "Our Vision" }),
            /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500", children: "What We See" })
          ] })
        ] }),
        /* @__PURE__ */ e("p", { className: "text-lg text-neutral-600 leading-relaxed pl-15", children: "Advanced Nanomaterials for Better Quality of Life. We see graphene and advanced nanomaterials as the foundation of a transformation that will touch every aspect of human life." })
      ] }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-white border border-neutral-200 flex items-center justify-center rounded-sm", children: /* @__PURE__ */ e(mt, { className: "w-6 h-6 text-neutral-900" }) }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("h2", { className: "text-2xl font-display font-medium text-neutral-900", children: "Our Mission" }),
            /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500", children: "What We Do" })
          ] })
        ] }),
        /* @__PURE__ */ e("p", { className: "text-lg text-neutral-600 leading-relaxed pl-15 mb-8", children: "To create commercially viable graphene solutions for industrial applications. We develop, validate, and make commercial-scale manufacturing of graphene innovations to provide:" }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-3 pl-15", children: [
          /* @__PURE__ */ t("div", { className: "p-4 bg-white border border-neutral-200 flex items-center gap-3 hover:border-neutral-300 transition-colors", children: [
            /* @__PURE__ */ e(ge, { className: "w-5 h-5 text-neutral-500" }),
            /* @__PURE__ */ e("span", { className: "text-neutral-900 font-medium", children: "Clean Air" })
          ] }),
          /* @__PURE__ */ t("div", { className: "p-4 bg-white border border-neutral-200 flex items-center gap-3 hover:border-neutral-300 transition-colors", children: [
            /* @__PURE__ */ e(ke, { className: "w-5 h-5 text-neutral-500" }),
            /* @__PURE__ */ e("span", { className: "text-neutral-900 font-medium", children: "Clean Water" })
          ] }),
          /* @__PURE__ */ t("div", { className: "p-4 bg-white border border-neutral-200 flex items-center gap-3 hover:border-neutral-300 transition-colors", children: [
            /* @__PURE__ */ e(I, { className: "w-5 h-5 text-neutral-500" }),
            /* @__PURE__ */ e("span", { className: "text-neutral-900 font-medium", children: "Clean Energy" })
          ] }),
          /* @__PURE__ */ t("div", { className: "p-4 bg-white border border-neutral-200 flex items-center gap-3 hover:border-neutral-300 transition-colors", children: [
            /* @__PURE__ */ e(ri, { className: "w-5 h-5 text-neutral-500" }),
            /* @__PURE__ */ e("span", { className: "text-neutral-900 font-medium", children: "Better Life" })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-neutral-50", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ e(k, { number: "01", title: "What Makes Us Different", theme: "light" }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-12", children: [
        /* @__PURE__ */ t("div", { className: "p-8 bg-white border border-neutral-200 hover:border-neutral-300 transition-colors shadow-sm", children: [
          /* @__PURE__ */ e("h3", { className: "text-xl font-display font-medium text-neutral-900 mb-4", children: "Deep Scientific Expertise" }),
          /* @__PURE__ */ e("p", { className: "text-neutral-600 leading-relaxed", children: "Our team combines materials science, chemical engineering, and nanotechnology expertise with research partners from prestigious institutions including IISc, IIT, and National Chemical Laboratory." })
        ] }),
        /* @__PURE__ */ t("div", { className: "p-8 bg-white border border-neutral-200 hover:border-neutral-300 transition-colors shadow-sm", children: [
          /* @__PURE__ */ e("h3", { className: "text-xl font-display font-medium text-neutral-900 mb-4", children: "Industrial Scale Capability" }),
          /* @__PURE__ */ e("p", { className: "text-neutral-600 leading-relaxed", children: "We don't just innovate in the lab—we ensure every innovation can scale from prototype to mass manufacturing with pilot-scale facilities and process optimization." })
        ] }),
        /* @__PURE__ */ t("div", { className: "p-8 bg-white border border-neutral-200 hover:border-neutral-300 transition-colors shadow-sm", children: [
          /* @__PURE__ */ e("h3", { className: "text-xl font-display font-medium text-neutral-900 mb-4", children: "Real-World Validation" }),
          /* @__PURE__ */ e("p", { className: "text-neutral-600 leading-relaxed", children: "Our products undergo rigorous field trials and real-world testing before commercialization through NABL-certified laboratory testing and independent third-party validation." })
        ] }),
        /* @__PURE__ */ t("div", { className: "p-8 bg-white border border-neutral-200 hover:border-neutral-300 transition-colors shadow-sm", children: [
          /* @__PURE__ */ e("h3", { className: "text-xl font-display font-medium text-neutral-900 mb-4", children: "IP-Driven Innovation" }),
          /* @__PURE__ */ e("p", { className: "text-neutral-600 leading-relaxed", children: "Proprietary technology and process IP protected through patents and trade secrets, including patented formulations and proprietary dispersion technologies." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ e("section", { className: "py-24 px-6 border-t border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ e("h2", { className: "text-3xl font-display font-medium text-neutral-900 mb-6", children: "Connect With Us" }),
      /* @__PURE__ */ e("p", { className: "text-lg text-neutral-600 mb-10", children: "Let's build the future together. Explore partnership opportunities and discover how we can help you succeed." }),
      /* @__PURE__ */ t("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ e(L, { to: "/contact", children: /* @__PURE__ */ e(K, { variant: "primary", theme: "light", className: "h-12 px-8", children: "Partnership Opportunities" }) }),
        /* @__PURE__ */ e(L, { to: "/contact", children: /* @__PURE__ */ e(K, { variant: "secondary", theme: "light", className: "h-12 px-8", children: "Contact Our Team" }) })
      ] })
    ] }) })
  ] });
}, On = {
  pageHeader: {
    title: "Facilities & Capabilities",
    subtitle: "State-of-the-art research, testing, and manufacturing infrastructure designed to scale deep-tech innovations."
  }
}, yt = ({ icon: r, title: i, items: n }) => /* @__PURE__ */ t("div", { className: "p-8 bg-neutral-50 border border-neutral-200 flex flex-col h-full shadow-sm hover:border-neutral-300 transition-colors", children: [
  /* @__PURE__ */ e(r, { className: "w-10 h-10 text-neutral-600 mb-6", strokeWidth: 1.5 }),
  /* @__PURE__ */ e("h3", { className: "text-xl font-display font-medium text-neutral-900 mb-6", children: i }),
  /* @__PURE__ */ e("ul", { className: "space-y-3 mt-auto", children: n.map((o, a) => /* @__PURE__ */ t("li", { className: "flex items-start text-sm text-neutral-600", children: [
    /* @__PURE__ */ e("span", { className: "w-1 h-1 bg-neutral-400 rounded-full mr-3 mt-2 shrink-0" }),
    o
  ] }, a)) })
] }), Cs = () => {
  const r = On;
  return /* @__PURE__ */ t("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ e(
      fe,
      {
        category: "Infrastructure",
        title: r.pageHeader.title,
        subtitle: r.pageHeader.subtitle
      }
    ),
    /* @__PURE__ */ e("section", { className: "py-16 px-6 bg-neutral-50 border-b border-neutral-200", children: /* @__PURE__ */ e("div", { className: "max-w-4xl mx-auto text-center", children: /* @__PURE__ */ t("p", { className: "text-xl text-neutral-600 leading-relaxed", children: [
      "Monoatom Labs operates ",
      /* @__PURE__ */ e("span", { className: "text-neutral-900 font-medium", children: "state-of-the-art research and testing laboratories." }),
      " We have equipment for advanced material synthesis, validation, and scale-up."
    ] }) }) }),
    /* @__PURE__ */ e("section", { className: "py-24 px-6 border-b border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ e(k, { number: "01", title: "Our Facilities", theme: "light", subtitle: "Two specialized laboratories covering the full innovation lifecycle" }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12", children: [
        /* @__PURE__ */ t("div", { className: "p-10 border-2 border-neutral-300 bg-white hover:border-neutral-400 transition-all hover:shadow-lg", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-neutral-900 text-white flex items-center justify-center rounded-sm font-display text-xl font-medium", children: "01" }),
            /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium text-neutral-900", children: "Nanomaterials R&D Facility" })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-neutral-600 mb-8 leading-relaxed text-lg", children: "Focused on graphene processing, dispersion technologies, and high-purity nano-additive development." }),
          /* @__PURE__ */ t("div", { className: "bg-neutral-50 p-6 border border-neutral-200 rounded-sm", children: [
            /* @__PURE__ */ e("h4", { className: "text-sm font-medium text-neutral-900 mb-4 uppercase tracking-wide", children: "Capabilities include:" }),
            /* @__PURE__ */ t("ul", { className: "space-y-3", children: [
              /* @__PURE__ */ t("li", { className: "flex items-start text-neutral-600", children: [
                /* @__PURE__ */ e("span", { className: "mr-3 text-neutral-400 font-bold", children: "•" }),
                /* @__PURE__ */ e("span", { children: "Surface chemistry modification" })
              ] }),
              /* @__PURE__ */ t("li", { className: "flex items-start text-neutral-600", children: [
                /* @__PURE__ */ e("span", { className: "mr-3 text-neutral-400 font-bold", children: "•" }),
                /* @__PURE__ */ e("span", { children: "Advanced characterization (SEM, TEM, Raman)" })
              ] }),
              /* @__PURE__ */ t("li", { className: "flex items-start text-neutral-600", children: [
                /* @__PURE__ */ e("span", { className: "mr-3 text-neutral-400 font-bold", children: "•" }),
                /* @__PURE__ */ e("span", { children: "Pilot-scale dispersion & functionalization units" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "p-10 border-2 border-neutral-300 bg-white hover:border-neutral-400 transition-all hover:shadow-lg", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-neutral-900 text-white flex items-center justify-center rounded-sm font-display text-xl font-medium", children: "02" }),
            /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium text-neutral-900", children: "Application & Testing Facility" })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-neutral-600 mb-8 leading-relaxed text-lg", children: "Designed for real-industry testing across coatings, concrete, composites, energy systems, and bio-chemical applications." }),
          /* @__PURE__ */ t("div", { className: "bg-neutral-50 p-6 border border-neutral-200 rounded-sm", children: [
            /* @__PURE__ */ e("h4", { className: "text-sm font-medium text-neutral-900 mb-4 uppercase tracking-wide", children: "Capabilities include:" }),
            /* @__PURE__ */ t("ul", { className: "space-y-3", children: [
              /* @__PURE__ */ t("li", { className: "flex items-start text-neutral-600", children: [
                /* @__PURE__ */ e("span", { className: "mr-3 text-neutral-400 font-bold", children: "•" }),
                /* @__PURE__ */ e("span", { children: "Mechanical & durability testing" })
              ] }),
              /* @__PURE__ */ t("li", { className: "flex items-start text-neutral-600", children: [
                /* @__PURE__ */ e("span", { className: "mr-3 text-neutral-400 font-bold", children: "•" }),
                /* @__PURE__ */ e("span", { children: "Thermal & electrical conductivity labs" })
              ] }),
              /* @__PURE__ */ t("li", { className: "flex items-start text-neutral-600", children: [
                /* @__PURE__ */ e("span", { className: "mr-3 text-neutral-400 font-bold", children: "•" }),
                /* @__PURE__ */ e("span", { children: "Prototype fabrication & field-simulation setups" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ e("section", { className: "py-24 px-6 border-b border-neutral-200 bg-neutral-50", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ e(k, { number: "02", title: "Core Capabilities", theme: "light", subtitle: "Comprehensive expertise across the innovation value chain" }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-12", children: [
        /* @__PURE__ */ e(
          yt,
          {
            icon: we,
            title: "Materials Innovation",
            items: [
              "Custom formulation development",
              "Bio-inspired chemistry solutions",
              "Performance-enhancing additive systems",
              "Scalable synthesis processes",
              "IP-protected methodologies"
            ]
          }
        ),
        /* @__PURE__ */ e(
          yt,
          {
            icon: Ae,
            title: "Application Development",
            items: [
              "Coatings and surface treatments",
              "Composite materials",
              "Energy storage and conversion",
              "Construction materials",
              "Mobility and aerospace applications"
            ]
          }
        ),
        /* @__PURE__ */ e(
          yt,
          {
            icon: _t,
            title: "Manufacturing Scale-Up",
            items: [
              "Pilot-scale production facilities",
              "Process optimization and validation",
              "Quality control and characterization",
              "Supply chain integration",
              "Technical support and training"
            ]
          }
        ),
        /* @__PURE__ */ e(
          yt,
          {
            icon: ni,
            title: "Testing & Validation",
            items: [
              "NABL-certified laboratory testing",
              "Field deployment and monitoring",
              "Independent third-party validation",
              "Long-term durability studies",
              "Performance characterization"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e("section", { className: "py-24 px-6", children: /* @__PURE__ */ t("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ e(k, { number: "03", title: "Research Equipment", theme: "light", subtitle: "Our state-of-the-art facilities combine advanced instrumentation with expert personnel." }),
      /* @__PURE__ */ e("div", { className: "mt-12 bg-white border border-neutral-200 p-8 shadow-sm", children: /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4", children: [
        "High-resolution microscopy suite",
        "Spectroscopy and analytical systems",
        "Rheology and viscosity measurement",
        "Thermal analysis equipment",
        "Coating application stations",
        "Mechanical testing systems",
        "Environmental chambers",
        "Process automation units"
      ].map((i, n) => /* @__PURE__ */ t("div", { className: "flex items-center py-2 border-b border-neutral-100 last:border-0 md:last:border-b [&:nth-last-child(2)]:border-0", children: [
        /* @__PURE__ */ e("span", { className: "w-1.5 h-1.5 bg-neutral-400 rounded-full mr-3" }),
        /* @__PURE__ */ e("span", { className: "text-neutral-600", children: i })
      ] }, n)) }) })
    ] }) }),
    /* @__PURE__ */ e("section", { className: "py-24 px-6 border-t border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ e(k, { title: "Partnership Network", theme: "light", subtitle: "Collaborating with premier research institutions." }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-12", children: ["IISc", "IIT", "NCL"].map((i) => /* @__PURE__ */ t("div", { className: "h-32 bg-neutral-50 border border-neutral-200 flex flex-col items-center justify-center p-6 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100", children: [
        /* @__PURE__ */ e(st, { className: "w-8 h-8 text-neutral-600 mb-2" }),
        /* @__PURE__ */ e("span", { className: "text-xl font-display font-medium text-neutral-900", children: i }),
        /* @__PURE__ */ e("span", { className: "text-xs text-neutral-500 uppercase tracking-wide mt-1", children: "Research Partner" })
      ] }, i)) })
    ] }) })
  ] });
}, Vn = {
  pageHeader: {
    title: "Our Founders",
    subtitle: "Award-winning innovation leadership combined with proven industrial execution — scaling science into impact."
  }
}, Ps = () => {
  const r = Vn;
  return /* @__PURE__ */ t("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ e(
      fe,
      {
        category: "Leadership",
        title: r.pageHeader.title,
        subtitle: r.pageHeader.subtitle
      }
    ),
    /* @__PURE__ */ e("section", { className: "py-16 px-6 bg-neutral-50 border-b border-neutral-200", children: /* @__PURE__ */ e("div", { className: "max-w-4xl mx-auto text-center", children: /* @__PURE__ */ t("p", { className: "text-xl text-neutral-600 leading-relaxed", children: [
      "Our leadership brings together ",
      /* @__PURE__ */ e("span", { className: "text-neutral-900 font-medium", children: "award-winning innovation expertise and proven industrial execution" }),
      ", combining decades of materials research with large-scale manufacturing operations."
    ] }) }) }),
    /* @__PURE__ */ e("section", { className: "py-24 px-6 border-b border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ e(k, { number: "01", title: "Meet Our Founders", theme: "light" }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12", children: [
        /* @__PURE__ */ t("div", { className: "bg-neutral-50 p-8 border border-neutral-200 hover:border-neutral-300 transition-colors", children: [
          /* @__PURE__ */ t("div", { className: "flex items-start gap-4 mb-6", children: [
            /* @__PURE__ */ e("div", { className: "w-16 h-16 bg-white border border-neutral-200 flex items-center justify-center rounded-sm flex-shrink-0", children: /* @__PURE__ */ e(Ze, { className: "w-8 h-8 text-neutral-900" }) }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("h2", { className: "text-2xl font-display font-medium text-neutral-900 mb-1", children: "Sushanth Paatnaik" }),
              /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 font-medium uppercase tracking-wide", children: "Co-Founder & CEO" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "space-y-4 mb-6", children: [
            /* @__PURE__ */ e("p", { className: "text-neutral-600 leading-relaxed", children: "A materials innovator and entrepreneur. Awarded six times by the President of India, with global recognitions including MIT TR35, TED India Speaker, and NASA-recognised innovator." }),
            /* @__PURE__ */ e("p", { className: "text-neutral-600 leading-relaxed", children: "He is focused on building next-generation technologies rooted in graphene, nano-materials, and advanced chemical engineering. He brings deep experience in deep-tech commercialisation, IP development, and scaling science-driven ventures." }),
            /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 italic", children: "Innovation journey started at the age of 11." })
          ] }),
          /* @__PURE__ */ t("div", { className: "pt-4 border-t border-neutral-200", children: [
            /* @__PURE__ */ e("p", { className: "text-xs text-neutral-500 uppercase tracking-wide mb-3", children: "Key Recognitions" }),
            /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-2", children: [
              /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-white text-xs text-neutral-700 border border-neutral-200 font-medium", children: "6× President of India" }),
              /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-white text-xs text-neutral-700 border border-neutral-200 font-medium", children: "MIT TR35" }),
              /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-white text-xs text-neutral-700 border border-neutral-200 font-medium", children: "TED Speaker" }),
              /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-white text-xs text-neutral-700 border border-neutral-200 font-medium", children: "NASA Awardee" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "bg-neutral-50 p-8 border border-neutral-200 hover:border-neutral-300 transition-colors", children: [
          /* @__PURE__ */ t("div", { className: "flex items-start gap-4 mb-6", children: [
            /* @__PURE__ */ e("div", { className: "w-16 h-16 bg-white border border-neutral-200 flex items-center justify-center rounded-sm flex-shrink-0", children: /* @__PURE__ */ e(Vt, { className: "w-8 h-8 text-neutral-900" }) }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("h2", { className: "text-2xl font-display font-medium text-neutral-900 mb-1", children: "Aayush Bansal" }),
              /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 font-medium uppercase tracking-wide", children: "Co-Founder & Strategic Investor" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "space-y-4 mb-6", children: [
            /* @__PURE__ */ e("p", { className: "text-neutral-600 leading-relaxed", children: "Promoter of Kalika Steel, one of India's leading steel manufacturing groups, and a strategic investor in Monoatom Labs. He is a Computer Science Engineer with an MBA in Technology Management, NMIMS University." }),
            /* @__PURE__ */ e("p", { className: "text-neutral-600 leading-relaxed", children: "His expertise spans large-scale industrial operations and market expansion. Aayush enables Monoatom Labs to bridge breakthrough material innovations with real-world manufacturing, supply-chain integration, and national-scale deployment." }),
            /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 italic", children: "38+ years of experience in steel manufacturing and clothing business." })
          ] }),
          /* @__PURE__ */ t("div", { className: "pt-4 border-t border-neutral-200", children: [
            /* @__PURE__ */ e("p", { className: "text-xs text-neutral-500 uppercase tracking-wide mb-3", children: "Key Expertise" }),
            /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-2", children: [
              /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-white text-xs text-neutral-700 border border-neutral-200 font-medium", children: "Kalika Steel Promoter" }),
              /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-white text-xs text-neutral-700 border border-neutral-200 font-medium", children: "Industrial Scale-up" }),
              /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-white text-xs text-neutral-700 border border-neutral-200 font-medium", children: "MBA Tech Management" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-neutral-50 border-b border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ e(k, { number: "02", title: "Sushanth's Recognitions & Awards", theme: "light", subtitle: "13 major recognitions for innovation and entrepreneurship excellence" }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12", children: [
        { award: "Six times President of India Awardee", highlight: !0 },
        { award: "TED Speaker", highlight: !0 },
        { award: "NASA Awardee", highlight: !0 },
        { award: "MIT TR-35 Awardee", highlight: !0 },
        { award: "CEO Club Speaker", highlight: !1 },
        { award: "Silicon Valley Speaker", highlight: !1 },
        { award: "Intel IRIS Awardee", highlight: !1 },
        { award: "MIT Fab-10 & 11 Awardee", highlight: !1 },
        { award: "ICAI Abu Dhabi Speaker", highlight: !1 },
        { award: "INK Fellow", highlight: !1 },
        { award: "STPI-Chunauti Winner", highlight: !1 },
        { award: "ELECRAMA Winner", highlight: !1 },
        { award: "Mashaal Green Fellowship Awardee", highlight: !1 }
      ].map(({ award: i, highlight: n }) => /* @__PURE__ */ e(
        "div",
        {
          className: `px-4 py-4 ${n ? "bg-neutral-900 text-white border-neutral-900" : "bg-white border-neutral-200"} border text-sm text-center hover:border-neutral-400 transition-all hover:shadow-sm`,
          children: /* @__PURE__ */ e("div", { className: `font-medium ${n ? "text-white" : "text-neutral-700"}`, children: i })
        },
        i
      )) })
    ] }) }),
    /* @__PURE__ */ e("section", { className: "py-24 px-6", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ e(k, { number: "03", title: "Team Composition", theme: "light", subtitle: "Bringing together diverse expertise for breakthrough innovation" }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12", children: [
        /* @__PURE__ */ t("div", { className: "p-6 border border-neutral-200 bg-white shadow-sm", children: [
          /* @__PURE__ */ e(ii, { className: "w-8 h-8 text-neutral-600 mb-6", strokeWidth: 1.5 }),
          /* @__PURE__ */ e("h3", { className: "text-lg font-medium text-neutral-900 mb-2", children: "Scientific Excellence" }),
          /* @__PURE__ */ e("p", { className: "text-sm text-neutral-600", children: "Materials science, chemical engineering, and nanotechnology experts from premier institutions." })
        ] }),
        /* @__PURE__ */ t("div", { className: "p-6 border border-neutral-200 bg-white shadow-sm", children: [
          /* @__PURE__ */ e(Vt, { className: "w-8 h-8 text-neutral-600 mb-6", strokeWidth: 1.5 }),
          /* @__PURE__ */ e("h3", { className: "text-lg font-medium text-neutral-900 mb-2", children: "Industrial Experience" }),
          /* @__PURE__ */ e("p", { className: "text-sm text-neutral-600", children: "Manufacturing, scale-up, and commercialization specialists with proven track records." })
        ] }),
        /* @__PURE__ */ t("div", { className: "p-6 border border-neutral-200 bg-white shadow-sm", children: [
          /* @__PURE__ */ e(ct, { className: "w-8 h-8 text-neutral-600 mb-6", strokeWidth: 1.5 }),
          /* @__PURE__ */ e("h3", { className: "text-lg font-medium text-neutral-900 mb-2", children: "Research Partnerships" }),
          /* @__PURE__ */ e("p", { className: "text-sm text-neutral-600", children: "Collaborations with IISc, IIT, and National Chemical Laboratory." })
        ] }),
        /* @__PURE__ */ t("div", { className: "p-6 border border-neutral-200 bg-white shadow-sm", children: [
          /* @__PURE__ */ e(Ge, { className: "w-8 h-8 text-neutral-600 mb-6", strokeWidth: 1.5 }),
          /* @__PURE__ */ e("h3", { className: "text-lg font-medium text-neutral-900 mb-2", children: "Global Recognition" }),
          /* @__PURE__ */ e("p", { className: "text-sm text-neutral-600", children: "Multiple Presidential awards, TED India, and international recognitions for innovation." })
        ] })
      ] })
    ] }) })
  ] });
}, Nt = {
  // Commercial Products
  ceraphene: {
    image: "/images/ceraphene-studio.png"
  },
  graphacrete: {
    image: "/images/graphacrete-studio.png"
  },
  graffisol: {
    image: "/images/graffisol-studio.png"
  },
  hdgpe: {
    image: "/images/hdgpe-studio.png"
  }
}, _n = {
  pageHeader: {
    title: "All Products",
    subtitle: "Market-available graphene solutions and next-generation innovations — from commercial deployments to cutting-edge R&D."
  }
}, wt = [
  // Commercial Ready
  {
    id: "graphacrete",
    name: "Graphacrete",
    subtitle: "High-Performance Concrete Additive",
    description: "Transform standard concrete into high-performance material with 50% strength increase and NABL-certified results.",
    status: "Commercial Ready",
    type: "Commercial",
    icon: X,
    images: [Nt.graphacrete.image],
    specs: ["+40-50% Strength", "15-20% Cement Savings", "NABL Certified"],
    impact: "Construction",
    path: "/products/graphacrete"
  },
  {
    id: "graffisol",
    name: "Graffisol",
    subtitle: "Next-Generation Solar Panel Coating",
    description: "8-12% increase in solar panel energy output with improved thermal dissipation and long-lasting hydrophobic protection.",
    status: "Commercial Ready",
    type: "Commercial",
    icon: ja,
    images: [Nt.graffisol.image],
    specs: ["+8-12% Energy Output", "Thermal Dissipation", "Anti-Soiling"],
    impact: "Solar Energy",
    path: "/products/graffisol"
  },
  {
    id: "ceraphene",
    name: "Ceraphene",
    subtitle: "Ultra-Durable Ceramic Coating",
    description: "Graphene-enhanced 9H+ ceramic coating delivering industry-leading protection at 60-70% lower cost than premium alternatives.",
    status: "Commercial Ready",
    type: "Commercial",
    icon: xe,
    images: [Nt.ceraphene.image],
    specs: ["9H+ Hardness", "3-4yr Lifecycle", "Ultra-Hydrophobic"],
    impact: "Automotive",
    path: "/products/ceraphene"
  },
  {
    id: "hdgpe",
    name: "HD-G-PE",
    subtitle: "Graphene-Reinforced Polymer Enhancer",
    description: "Transforms HDPE with 30% strength improvement, enhanced thermal stability, and improved barrier properties.",
    status: "Commercial Ready",
    type: "Commercial",
    icon: La,
    images: [Nt.hdgpe.image],
    specs: ["+30% Tensile Strength", "Thermal Stability", "Barrier Properties"],
    impact: "Industrial Polymers",
    path: "/products/hd-g-pe"
  },
  // R&D Pipeline
  {
    id: "rustene",
    name: "Rustene",
    subtitle: "Anti-Corrosion Shield",
    description: "Graphene-based anti-rusting paint forms an ultra-thin barrier preventing corrosion and extending metal lifespan.",
    status: "R&D Pipeline",
    type: "R&D",
    icon: ke,
    images: ["/images/pipeline/application-icon/rustene_studio.png", "/images/pipeline/application-icon/rustene_hero.png", "/images/pipeline/studio/Rustene.png"],
    specs: ["Ultra-thin Barrier", "Corrosion Prevention", "Metal Lifespan Extension"],
    impact: "Infrastructure",
    path: "/products/pipeline/rustene"
  },
  {
    id: "graphyre",
    name: "Graphyre",
    subtitle: "Reinforced Performance Tyres",
    description: "Graphene-reinforced composites delivering higher strength, lower rolling resistance, and extended service life.",
    status: "R&D Pipeline",
    type: "R&D",
    icon: ge,
    images: ["/images/pipeline/application-icon/graphyre_studio.png", "/images/pipeline/studio/Graphyre.png", "/images/pipeline/studio/Graphyre-2.png"],
    specs: ["Reduced Rolling Resistance", "Enhanced Wear Life", "High Tensile Strength"],
    impact: "Automotive",
    path: "/products/pipeline/graphyre"
  },
  {
    id: "graphosite",
    name: "Graphosite",
    subtitle: "Structural Composites",
    description: "Lightweight, high-strength graphene-reinforced fibres for next-generation structural composites.",
    status: "R&D Pipeline",
    type: "R&D",
    icon: X,
    images: ["/images/pipeline/application-icon/graphosite_studio.png", "/images/pipeline/studio/Graphosite.png"],
    specs: ["Lightweighting", "High Strength-to-Weight", "Structural Integrity"],
    impact: "Aerospace & Auto",
    path: "/products/pipeline/graphosite"
  },
  {
    id: "thermaphene",
    name: "Thermaphene",
    subtitle: "Smart Thermal Fabrics",
    description: "Graphene-based heating solution enabling lightweight and high-performance winter wear.",
    status: "R&D Pipeline",
    type: "R&D",
    icon: Yt,
    images: ["/images/pipeline/application-icon/thermaphene-icon.png", "/images/pipeline/application-icon/thermaphene_hero.png", "/images/pipeline/studio/thermophene.png", "/images/pipeline/studio/thermophene-2.png"],
    specs: ["Rapid Heating", "Flexible Integration", "Lightweight Design"],
    impact: "Performance Apparel",
    path: "/products/pipeline/thermaphene"
  },
  {
    id: "armophene",
    name: "Armophene",
    subtitle: "Next-Gen Ballistics",
    description: "Graphene-infused bulletproof jacket delivering lightweight, flexible armor superior to Kevlar.",
    status: "R&D Pipeline",
    type: "R&D",
    icon: q,
    images: ["/images/pipeline/application-icon/armophene_studio.png", "/images/pipeline/studio/Armophene.png", "/images/pipeline/studio/Armophene-2.png"],
    specs: ["High Kinetic Dissipation", "Superior to Kevlar", "Flexible Armor"],
    impact: "Defense & Security",
    path: "/products/pipeline/armophene"
  },
  {
    id: "graphenode",
    name: "Graphenode",
    subtitle: "Nanoplatelet Electrode Material",
    description: "High-purity graphene nanoplatelet material engineered as a superior anode for lithium-ion batteries and supercapacitors.",
    status: "R&D Pipeline",
    type: "R&D",
    icon: Pe,
    images: ["/images/pipeline/application-icon/graphenode-icon.png", "/images/pipeline/studio/Graphenode.png", "/images/pipeline/studio/graphenodes.png", "/images/pipeline/studio/Graphenodes-2.png"],
    specs: [">99% Purity", "NRG-70 & NRG-150 Grades", "5,000-Cycle Durability"],
    impact: "Energy Storage",
    path: "/products/pipeline/graphenode"
  },
  // Pilot Trials
  {
    id: "hydrogen",
    name: "Gryogen",
    subtitle: "Hydrogen Selection Membrane",
    description: "High-selectivity graphene membranes enabling efficient hydrogen separation with reduced energy losses.",
    status: "Pilot Trial",
    type: "Pilot",
    icon: ce,
    images: ["/images/pipeline/application-icon/hydrogen_membrane_studio.png", "/images/pipeline/studio/Gryogen.png", "/images/pipeline/studio/HydrogenMembranes.png"],
    specs: ["High Selectivity", "Energy Efficient", "Pure H₂ Separator"],
    impact: "Green Energy",
    path: "/products/pipeline/hydrogen-membranes"
  },
  {
    id: "desalination",
    name: "Mariphene",
    subtitle: "Desalination Membrane",
    description: "Ultra-thin graphene membranes delivering high-flux, low-energy seawater desalination.",
    status: "Pilot Trial",
    type: "Pilot",
    icon: ke,
    images: ["/images/pipeline/application-icon/mariphene.png", "/images/pipeline/studio/mariphene.png", "/images/desalination_hero.png"],
    specs: ["High Flux", "Low Energy", "Salt Rejection"],
    impact: "Water Security",
    path: "/products/pipeline/desalination-membranes"
  },
  {
    id: "aerowater",
    name: "Aerophenter",
    subtitle: "Atmospheric Harvesting",
    description: "Graphene membranes engineered to harvest atmospheric moisture and convert air into potable water.",
    status: "Pilot Trial",
    type: "Pilot",
    icon: ge,
    images: ["/images/pipeline/application-icon/atmospheric_harvesting_studio.png", "/images/pipeline/studio/aerophenter_studio.png", "/images/pipeline/studio/AtmosphericHarvesting-2.png"],
    specs: ["Moisture Harvesting", "Air-to-Water", "Energy Efficient"],
    impact: "Water Scarcity",
    path: "/products/pipeline/atmospheric-harvesting"
  },
  {
    id: "glassphen",
    name: "Glasphene",
    subtitle: "Reinforced Glass Fibres",
    description: "Graphene-reinforced glass fibres offering enhanced strength, durability, and multifunctional performance.",
    status: "Pilot Trial",
    type: "Pilot",
    icon: X,
    images: ["/images/pipeline/application-icon/graphene_glass_fibres_studio.png", "/images/pipeline/studio/Glasephene.png", "/images/pipeline/studio/Glasephene-2.png", "/images/pipeline/studio/Glasephene-3.png"],
    specs: ["Enhanced Strength", "Durability", "Multifunctional"],
    impact: "Materials Engineering",
    path: "/products/pipeline/graphene-glass-fibres"
  },
  {
    id: "voltaphene",
    name: "Voltaphene",
    subtitle: "Energy Storage Systems",
    description: "Graphene-enabled battery systems delivering higher power density, faster response, and extended lifecycle.",
    status: "Pilot Trial",
    type: "Pilot",
    icon: Pe,
    images: ["/images/pipeline/application-icon/battery_storage_studio.png", "/images/pipeline/studio/Voltaphene.png"],
    specs: ["High Power Density", "Fast Response", "Extended Lifecycle"],
    impact: "Energy Storage",
    path: "/products/pipeline/battery-storage"
  }
], qn = {
  "Commercial Ready": "bg-green-500/80 border-green-400 text-white",
  "R&D Pipeline": "bg-blue-600/80 border-blue-400 text-white",
  "Pilot Trial": "bg-purple-500/80 border-purple-400 text-white"
}, Pr = [
  { key: "all", label: "All Products", color: "bg-neutral-900 text-white" },
  { key: "Commercial", label: "Commercial Ready", color: "bg-green-600 text-white" },
  { key: "R&D", label: "R&D Pipeline", color: "bg-blue-600 text-white" },
  { key: "Pilot", label: "Pilot Trials", color: "bg-purple-600 text-white" }
], Kn = ({ item: r }) => {
  const [i, n] = A(0), o = $i(null), a = r.images || [], s = a.length > 1, d = () => {
    s && (o.current = setInterval(() => {
      n((p) => (p + 1) % a.length);
    }, 1200));
  }, m = () => {
    clearInterval(o.current), n(0);
  };
  return Me(() => () => clearInterval(o.current), []), /* @__PURE__ */ e(L, { to: r.path, className: "block h-full", children: /* @__PURE__ */ t(
    D.div,
    {
      layout: !0,
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
      className: "group relative aspect-square rounded-3xl overflow-hidden cursor-pointer border border-neutral-200 bg-white hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col",
      whileHover: { y: -5 },
      onMouseEnter: d,
      onMouseLeave: m,
      children: [
        /* @__PURE__ */ t("div", { className: "absolute inset-0 bg-neutral-100", children: [
          /* @__PURE__ */ e(de, { mode: "wait", children: a.length > 0 ? /* @__PURE__ */ e(
            D.img,
            {
              src: a[i],
              alt: r.name,
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.5 },
              className: "absolute inset-0 w-full h-full object-cover p-8 group-hover:scale-105 transition-transform duration-700"
            },
            i
          ) : /* @__PURE__ */ e("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ e(r.icon, { size: 64, className: "text-neutral-300" }) }) }),
          /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" }),
          s && /* @__PURE__ */ e("div", { className: "absolute top-4 right-4 flex gap-1 z-20", children: a.map((p, c) => /* @__PURE__ */ e("div", { className: `w-1.5 h-1.5 rounded-full transition-colors ${c === i ? "bg-white" : "bg-white/30"}` }, c)) })
        ] }),
        /* @__PURE__ */ t("div", { className: "relative z-10 h-full flex flex-col justify-end p-6", children: [
          /* @__PURE__ */ e("div", { className: "absolute top-5 left-5", children: /* @__PURE__ */ e("span", { className: `px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border backdrop-blur-md ${qn[r.status]}`, children: r.status }) }),
          /* @__PURE__ */ t("div", { className: "transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500", children: [
            /* @__PURE__ */ e("p", { className: "text-xs font-mono text-neutral-300 uppercase tracking-wide mb-1", children: r.subtitle }),
            /* @__PURE__ */ t("div", { className: "flex justify-between items-end", children: [
              /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium text-white", children: r.name }),
              /* @__PURE__ */ e("div", { className: "bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0", children: /* @__PURE__ */ e(le, { className: "text-white", size: 18 }) })
            ] })
          ] })
        ] })
      ]
    }
  ) });
}, Ss = () => {
  const r = _n, [i, n] = A("all"), o = i === "all" ? wt : wt.filter((s) => s.type === i), a = (s) => s === "all" ? wt.length : wt.filter((d) => d.type === s).length;
  return /* @__PURE__ */ t("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ e(
      fe,
      {
        category: "Portfolio",
        title: r.pageHeader.title,
        subtitle: r.pageHeader.subtitle,
        transparent: !0
      }
    ),
    /* @__PURE__ */ e("div", { className: "sticky top-24 z-30 px-6 mb-12 mt-4", children: /* @__PURE__ */ e("div", { className: "max-w-fit mx-auto bg-white/80 backdrop-blur-xl border border-neutral-200 shadow-xl shadow-black/5 rounded-full p-1.5 flex items-center gap-1", children: Pr.map((s) => /* @__PURE__ */ t(
      "button",
      {
        onClick: () => n(s.key),
        className: `px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${i === s.key ? `${s.color} shadow-md` : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/50"}`,
        children: [
          s.label,
          /* @__PURE__ */ e("span", { className: `ml-2 text-xs font-mono ${i === s.key ? "opacity-70" : "text-neutral-400"}`, children: a(s.key) })
        ]
      },
      s.key
    )) }) }),
    /* @__PURE__ */ e("section", { className: "py-8 px-6 pb-24 bg-neutral-50 border-t border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-10", children: [
        /* @__PURE__ */ e("h2", { className: "text-2xl font-display font-medium text-neutral-900", children: Pr.find((s) => s.key === i)?.label }),
        /* @__PURE__ */ t("span", { className: "text-sm text-neutral-400 font-mono", children: [
          o.length,
          " products"
        ] })
      ] }),
      /* @__PURE__ */ e(D.div, { layout: !0, className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: /* @__PURE__ */ e(de, { children: o.map((s) => /* @__PURE__ */ e(Kn, { item: s }, s.id)) }) })
    ] }) })
  ] });
}, ea = ({ tabs: r, defaultTab: i = 0 }) => {
  const [n, o] = A(i), a = {
    overview: Ra,
    benefits: z,
    howItWorks: _t,
    technical: Re,
    deepDive: Ae
  };
  return /* @__PURE__ */ t("div", { className: "bg-white", children: [
    /* @__PURE__ */ e("div", { className: "sticky top-[112px] z-40 bg-white border-b border-neutral-200 shadow-sm transition-all duration-300", children: /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ e("div", { className: "flex overflow-x-auto no-scrollbar", children: r.map((s, d) => {
      const m = a[s.id] || Ra, p = n === d;
      return /* @__PURE__ */ t(
        "button",
        {
          onClick: () => {
            o(d), window.scrollTo({ top: 0, behavior: "smooth" });
          },
          className: `
                    flex items-center space-x-3 px-8 py-5 text-sm uppercase tracking-widest transition-all duration-300 border-b-2 whitespace-nowrap outline-none
                    ${p ? "border-neutral-900 text-neutral-900 bg-white" : "border-transparent text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50"}
                  `,
          children: [
            /* @__PURE__ */ e(m, { className: `w-4 h-4 ${p ? "text-neutral-900" : "text-neutral-400"}`, strokeWidth: p ? 2 : 1.5 }),
            /* @__PURE__ */ e("span", { className: `font-medium ${p ? "font-bold" : ""}`, children: s.label })
          ]
        },
        d
      );
    }) }) }) }),
    /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto", children: r.map((s, d) => /* @__PURE__ */ e(
      "div",
      {
        className: `
              transition-opacity duration-300
              ${n === d ? "block" : "hidden"}
            `,
        children: s.content
      },
      d
    )) })
  ] });
}, ta = ({ src: r, images: i, alt: n, className: o = "", imageFit: a = "object-cover", innerClassName: s = "bg-neutral-100" }) => {
  const [d, m] = A(!1), [p, c] = A(0), g = i || (r ? [r] : []), b = g.length > 1, x = g[p] || r;
  Me(() => {
    if (!b || d) return;
    const h = setInterval(() => {
      c((l) => (l + 1) % g.length);
    }, 4e3);
    return () => clearInterval(h);
  }, [b, g.length, d]);
  const w = (h) => {
    h?.stopPropagation(), c((l) => (l + 1) % g.length);
  }, N = (h) => {
    h?.stopPropagation(), c((l) => (l - 1 + g.length) % g.length);
  };
  return /* @__PURE__ */ t(be, { children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: `relative rounded-2xl overflow-hidden border border-neutral-200 shadow-sm group cursor-pointer ${o}`,
        onClick: () => m(!0),
        children: [
          /* @__PURE__ */ e("div", { className: `w-full h-full flex items-center justify-center ${s}`, children: /* @__PURE__ */ e(
            "img",
            {
              src: x,
              alt: n,
              className: `w-full h-full ${a} transition-transform duration-700 group-hover:scale-105`
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition-colors duration-300" }),
          b && /* @__PURE__ */ t(be, { children: [
            /* @__PURE__ */ e(
              "button",
              {
                onClick: N,
                className: "absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm text-neutral-800 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white z-10",
                "aria-label": "Previous Image",
                children: /* @__PURE__ */ e(Bt, { size: 20 })
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: w,
                className: "absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm text-neutral-800 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white z-10",
                "aria-label": "Next Image",
                children: /* @__PURE__ */ e(Ot, { size: 20 })
              }
            ),
            /* @__PURE__ */ e("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10", children: g.map((h, l) => /* @__PURE__ */ e(
              "button",
              {
                onClick: (S) => {
                  S.stopPropagation(), c(l);
                },
                className: `w-2 h-2 rounded-full transition-all duration-300 ${l === p ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"}`,
                "aria-label": `Go to image ${l + 1}`
              },
              l
            )) })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              className: "absolute bottom-4 right-4 p-2 bg-white/90 backdrop-blur-sm text-neutral-800 rounded-full shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white z-10",
              "aria-label": "View Full Image",
              children: /* @__PURE__ */ e(ai, { size: 20 })
            }
          )
        ]
      }
    ),
    d && /* @__PURE__ */ t(
      "div",
      {
        className: "fixed inset-0 z-[100] bg-neutral-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-200",
        onClick: () => m(!1),
        children: [
          /* @__PURE__ */ e(
            "button",
            {
              className: "absolute top-6 right-6 p-2 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors z-50 cursor-pointer",
              onClick: (h) => {
                h.stopPropagation(), m(!1);
              },
              children: /* @__PURE__ */ e(Qt, { size: 24 })
            }
          ),
          b && /* @__PURE__ */ t(be, { children: [
            /* @__PURE__ */ e(
              "button",
              {
                onClick: N,
                className: "absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors z-50",
                "aria-label": "Previous Image",
                children: /* @__PURE__ */ e(Bt, { size: 28 })
              }
            ),
            /* @__PURE__ */ e(
              "button",
              {
                onClick: w,
                className: "absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors z-50",
                "aria-label": "Next Image",
                children: /* @__PURE__ */ e(Ot, { size: 28 })
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "relative max-w-6xl w-full h-full flex flex-col items-center justify-center pointer-events-none", children: [
            /* @__PURE__ */ e(
              "div",
              {
                className: "relative w-full max-w-5xl h-full flex items-center justify-center pointer-events-auto",
                onClick: (h) => h.stopPropagation(),
                children: /* @__PURE__ */ e(
                  "img",
                  {
                    src: x,
                    alt: n,
                    className: "max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                  }
                )
              }
            ),
            /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-4 mt-6", children: [
              /* @__PURE__ */ e("h3", { className: "text-white font-display text-2xl font-medium tracking-wide", children: n }),
              b && /* @__PURE__ */ e("div", { className: "flex gap-2", children: g.map((h, l) => /* @__PURE__ */ e(
                "button",
                {
                  onClick: (S) => {
                    S.stopPropagation(), c(l);
                  },
                  className: `w-2.5 h-2.5 rounded-full transition-all duration-300 ${l === p ? "bg-white w-8" : "bg-white/40 hover:bg-white/70"}`,
                  "aria-label": `Go to image ${l + 1}`
                },
                l
              )) })
            ] })
          ] })
        ]
      }
    )
  ] });
}, Un = ({
  images: r = [],
  interval: i = 5e3,
  transitionDuration: n = 1e3,
  className: o = ""
}) => {
  const [a, s] = A(0);
  return Me(() => {
    if (!r || r.length <= 1) return;
    const d = setInterval(() => {
      s((m) => (m + 1) % r.length);
    }, i);
    return () => clearInterval(d);
  }, [r, i]), !r || r.length === 0 ? null : /* @__PURE__ */ e("div", { className: `absolute inset-0 w-full h-full overflow-hidden ${o}`, children: r.map((d, m) => /* @__PURE__ */ e(
    "div",
    {
      className: "absolute inset-0 w-full h-full transition-opacity duration-[1000ms] ease-in-out",
      style: {
        opacity: m === a ? 1 : 0,
        transitionDuration: `${n}ms`,
        zIndex: m === a ? 1 : 0
      },
      children: /* @__PURE__ */ e(
        "img",
        {
          src: d,
          alt: `Background slide ${m + 1}`,
          className: "w-full h-full object-cover"
        }
      )
    },
    m
  )) });
}, ht = ({
  title: r,
  subtitle: i,
  category: n,
  categoryColor: o = "bg-white",
  categoryTone: a,
  images: s = [],
  buttons: d = [],
  className: m = "",
  theme: p = "dark"
}) => {
  const c = p === "light", b = a && {
    commercial: "bg-green-400",
    success: "bg-green-400",
    pipeline: "bg-amber-400",
    warning: "bg-amber-400",
    info: "bg-brand-600",
    brand: "bg-brand-600",
    neutral: "bg-neutral-400"
  }[a] || o;
  return /* @__PURE__ */ t("section", { className: `relative overflow-hidden rounded-3xl ${c ? "bg-neutral-50 text-neutral-900" : "bg-black text-white"} isolate ${m}`, children: [
    /* @__PURE__ */ t("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ e(
        Un,
        {
          images: s,
          interval: 5e3,
          transitionDuration: 2e3
        }
      ),
      /* @__PURE__ */ e(
        "div",
        {
          className: "absolute inset-0 z-10",
          style: {
            background: c ? "linear-gradient(to right, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.6) 35%, transparent 60%)" : "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 35%, transparent 60%)"
          }
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "relative z-10 p-8 md:p-12 lg:p-16 max-w-lg", children: [
      n && /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md text-xs font-bold tracking-widest uppercase mb-6 ${c ? "bg-white/50 border-neutral-200 text-neutral-500" : "bg-white/10 border-white/20 text-white"}`, children: [
        /* @__PURE__ */ e("span", { className: `w-2 h-2 rounded-full ${b}` }),
        n
      ] }),
      /* @__PURE__ */ e("h2", { className: `text-3xl md:text-4xl font-display font-medium mb-4 leading-tight tracking-tight ${c ? "text-neutral-900" : "text-white"}`, children: r }),
      /* @__PURE__ */ e("p", { className: `text-sm md:text-base leading-relaxed mb-8 font-light ${c ? "text-neutral-500" : "text-neutral-300"}`, children: i }),
      d.length > 0 && /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-4", children: d.map((x, w) => /* @__PURE__ */ e(We.Fragment, { children: x.link.startsWith("#") ? /* @__PURE__ */ e("a", { href: x.link, children: /* @__PURE__ */ e(K, { variant: x.variant || "primary", theme: p, children: x.text }) }) : /* @__PURE__ */ e(L, { to: x.link, children: /* @__PURE__ */ e(K, { variant: x.variant || "primary", theme: p, children: x.text }) }) }, w)) })
    ] })
  ] });
}, Qn = {
  hero: {
    title: "A ceramic coating engineered for the graphene era.",
    subtitle: "Ceraphene is a graphene-enhanced 9H+ ceramic coating delivering professional-grade protection with exceptional value.",
    primaryButtonText: "Request Technical Data",
    secondaryButtonText: "View Cost Analysis"
  },
  pageHeader: {
    title: "Ceraphene",
    subtitle: "Ultra-durable graphene-enhanced ceramic coating delivering industry-leading protection at 60-70% lower cost than premium alternatives."
  }
}, Yn = () => {
  const [r, i] = A(500), [n, o] = A(8), [a, s] = A("medium"), [d, m] = A("hot"), p = ie(() => {
    const c = r * 1500, g = 0.075, b = c * g, w = {
      low: { baseline: 0.05, withGraffisol: 0.02 },
      medium: { baseline: 0.15, withGraffisol: 0.08 },
      high: { baseline: 0.25, withGraffisol: 0.12 }
    }[a], N = (w.baseline - w.withGraffisol) * c, l = {
      moderate: { reduction: 4, benefit: 0.01 },
      hot: { reduction: 6, benefit: 0.02 },
      "very-hot": { reduction: 8, benefit: 0.03 }
    }[d], S = c * l.benefit, T = b + N + S, R = T * n, P = r * 500, M = (P / (R / 12)).toFixed(1), f = R * 5, E = f - P, j = (E / P * 100).toFixed(0), W = [];
    for (let F = 0; F <= 60; F++) {
      const B = R / 12 * F - P;
      W.push({
        month: F,
        cumulative: B
      });
    }
    const O = [
      { metric: "Standard", energy: c },
      { metric: "With Graffisol", energy: c + T }
    ];
    return {
      annualGeneration: c,
      totalAdditionalEnergy: T,
      energyGain: g * 100,
      soilingRecovery: N,
      tempBenefit: S,
      tempReduction: l.reduction,
      annualRevenue: R,
      coatingCost: P,
      paybackMonths: M,
      fiveYearRevenue: f,
      netProfit: E,
      roi: j,
      monthlyData: W,
      performanceData: O
    };
  }, [r, n, a, d]);
  return /* @__PURE__ */ t("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-orange-900/20" }),
    /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ t(
        D.div,
        {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-yellow-500/30 bg-yellow-500/10 backdrop-blur mb-6", children: [
              /* @__PURE__ */ e(Xe, { className: "w-4 h-4 text-yellow-400" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-mono text-yellow-400 tracking-widest uppercase", children: "Solar Energy Calculator" })
            ] }),
            /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "Graffisol ROI Calculator" }),
            /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto", children: "Calculate energy gains and return on investment with Graffisol coating technology" })
          ]
        }
      ),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8", children: [
        /* @__PURE__ */ t("div", { className: "lg:col-span-4 space-y-6", children: [
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block", children: "Solar Capacity (kW)" }),
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "range",
                    min: "50",
                    max: "5000",
                    step: "50",
                    value: r,
                    onChange: (c) => i(Number(c.target.value)),
                    className: "w-full accent-brand-500 h-1 bg-neutral-700 rounded-sm"
                  }
                ),
                /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mt-3", children: [
                  r.toLocaleString(),
                  " ",
                  /* @__PURE__ */ e("span", { className: "text-lg text-neutral-400", children: "kW" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.1 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block", children: "Electricity Rate (₹/kWh)" }),
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "range",
                    min: "5",
                    max: "15",
                    step: "0.5",
                    value: n,
                    onChange: (c) => o(Number(c.target.value)),
                    className: "w-full accent-brand-500 h-1 bg-neutral-700 rounded-sm"
                  }
                ),
                /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mt-3", children: [
                  "₹",
                  n,
                  " ",
                  /* @__PURE__ */ e("span", { className: "text-lg text-neutral-400", children: "/kWh" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.2 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block", children: "Soiling Environment" }),
                /* @__PURE__ */ e("div", { className: "space-y-2", children: [
                  { id: "low", label: "Low (Clean areas)" },
                  { id: "medium", label: "Medium (Urban)" },
                  { id: "high", label: "High (Dusty/Industrial)" }
                ].map((c) => /* @__PURE__ */ e(
                  "button",
                  {
                    onClick: () => s(c.id),
                    className: `w-full px-4 py-3 rounded-sm font-mono font-medium transition-all text-sm ${a === c.id ? "bg-brand-500 text-white border border-brand-400" : "bg-neutral-800/50 text-neutral-400 border border-neutral-700 hover:bg-neutral-700 hover:text-white"}`,
                    children: c.label
                  },
                  c.id
                )) })
              ]
            }
          ),
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.3 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block", children: "Location Temperature" }),
                /* @__PURE__ */ e("div", { className: "space-y-2", children: [
                  { id: "moderate", label: "Moderate (<35°C)" },
                  { id: "hot", label: "Hot (35-40°C)" },
                  { id: "very-hot", label: "Very Hot (>40°C)" }
                ].map((c) => /* @__PURE__ */ e(
                  "button",
                  {
                    onClick: () => m(c.id),
                    className: `w-full px-4 py-3 rounded-sm font-mono font-medium transition-all text-sm ${d === c.id ? "bg-brand-500 text-white border border-brand-400" : "bg-neutral-800/50 text-neutral-400 border border-neutral-700 hover:bg-neutral-700 hover:text-white"}`,
                    children: c.label
                  },
                  c.id
                )) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { className: "lg:col-span-8 space-y-6", children: [
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.4 },
              className: "grid grid-cols-2 md:grid-cols-4 gap-4",
              children: [
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-brand-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(z, { className: "w-6 h-6 text-brand-400 mb-3" }),
                  /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                    p.energyGain.toFixed(1),
                    "%"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "Energy Gain" })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-yellow-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(Jt, { className: "w-6 h-6 text-yellow-400 mb-3" }),
                  /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                    "₹",
                    (p.annualRevenue / 1e5).toFixed(1),
                    "L"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "Annual Gain" })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-orange-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(Yt, { className: "w-6 h-6 text-orange-400 mb-3" }),
                  /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                    "-",
                    p.tempReduction,
                    "°C"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "Temp Drop" })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-green-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(I, { className: "w-6 h-6 text-green-400 mb-3" }),
                  /* @__PURE__ */ e("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: p.paybackMonths }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "Payback (mo)" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.5 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white mb-6", children: "Annual Energy Production" }),
                /* @__PURE__ */ e(Q, { width: "100%", height: 250, children: /* @__PURE__ */ t(fn, { data: p.performanceData, children: [
                  /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ t("linearGradient", { id: "energyGradient", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                    /* @__PURE__ */ e("stop", { offset: "5%", stopColor: "#0d9488", stopOpacity: 0.8 }),
                    /* @__PURE__ */ e("stop", { offset: "95%", stopColor: "#0d9488", stopOpacity: 0.1 })
                  ] }) }),
                  /* @__PURE__ */ e(ee, { strokeDasharray: "3 3", stroke: "#404040" }),
                  /* @__PURE__ */ e(te, { dataKey: "metric", stroke: "#9ca3af", style: { fontSize: "12px", fontFamily: "Space Grotesk" } }),
                  /* @__PURE__ */ e(ae, { stroke: "#9ca3af", tickFormatter: (c) => `${(c / 1e3).toFixed(0)}k`, style: { fontSize: "12px", fontFamily: "Space Grotesk" } }),
                  /* @__PURE__ */ e(
                    J,
                    {
                      contentStyle: { backgroundColor: "#1a1a1a", border: "1px solid #404040", borderRadius: "4px", fontFamily: "Space Grotesk" },
                      formatter: (c) => [`${c.toLocaleString()} kWh`, "Output"]
                    }
                  ),
                  /* @__PURE__ */ e(Oe, { type: "monotone", dataKey: "energy", stroke: "#0d9488", fill: "url(#energyGradient)", strokeWidth: 2 })
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white mb-6", children: "5-Year Cumulative Profit" }),
                /* @__PURE__ */ e(Q, { width: "100%", height: 280, children: /* @__PURE__ */ t(Xt, { data: p.monthlyData.filter((c, g) => g % 3 === 0), children: [
                  /* @__PURE__ */ e(ee, { strokeDasharray: "3 3", stroke: "#404040" }),
                  /* @__PURE__ */ e(
                    te,
                    {
                      dataKey: "month",
                      stroke: "#9ca3af",
                      label: { value: "Month", position: "insideBottom", offset: -5, fill: "#9ca3af", fontFamily: "Space Grotesk" },
                      style: { fontSize: "12px", fontFamily: "Space Grotesk" }
                    }
                  ),
                  /* @__PURE__ */ e(
                    ae,
                    {
                      stroke: "#9ca3af",
                      tickFormatter: (c) => `₹${(c / 1e5).toFixed(0)}L`,
                      style: { fontSize: "12px", fontFamily: "Space Grotesk" }
                    }
                  ),
                  /* @__PURE__ */ e(
                    J,
                    {
                      contentStyle: { backgroundColor: "#1a1a1a", border: "1px solid #404040", borderRadius: "4px", fontFamily: "Space Grotesk" },
                      formatter: (c) => [`₹${(c / 1e5).toFixed(2)}L`, "Profit"]
                    }
                  ),
                  /* @__PURE__ */ e(
                    ne,
                    {
                      type: "monotone",
                      dataKey: "cumulative",
                      stroke: "#10b981",
                      strokeWidth: 3,
                      dot: !1
                    }
                  )
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.7 },
              className: "bg-gradient-to-r from-green-500/10 to-brand-500/10 border border-green-500/30 rounded-sm p-8",
              children: [
                /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white mb-6", children: "5-Year Financial Summary" }),
                /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6", children: [
                  /* @__PURE__ */ t("div", { children: [
                    /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 mb-2 font-mono uppercase tracking-wide", children: "Investment" }),
                    /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white", children: [
                      "₹",
                      (p.coatingCost / 1e5).toFixed(1),
                      "L"
                    ] })
                  ] }),
                  /* @__PURE__ */ t("div", { children: [
                    /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 mb-2 font-mono uppercase tracking-wide", children: "Total Revenue" }),
                    /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white", children: [
                      "₹",
                      (p.fiveYearRevenue / 1e5).toFixed(1),
                      "L"
                    ] })
                  ] }),
                  /* @__PURE__ */ t("div", { children: [
                    /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 mb-2 font-mono uppercase tracking-wide", children: "Net Profit" }),
                    /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-green-400", children: [
                      "₹",
                      (p.netProfit / 1e5).toFixed(1),
                      "L"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { className: "pt-6 border-t border-white/10", children: /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ e("span", { className: "text-neutral-300 font-mono", children: "Return on Investment" }),
                  /* @__PURE__ */ t("span", { className: "text-5xl font-mono font-bold text-green-400", children: [
                    p.roi,
                    "%"
                  ] })
                ] }) }),
                /* @__PURE__ */ e("div", { className: "mt-6 text-center text-neutral-400 text-sm font-mono", children: "✓ Field Validated: 1+ MW installations showing 10-12% energy gains" })
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}, Jn = (r) => {
  const i = Math.pow(10, Number(r) / 100 * 4);
  return i < 10 ? Math.max(1, Math.round(i)) : i < 100 ? Math.round(i / 5) * 5 : i < 1e3 ? Math.round(i / 50) * 50 : Math.round(i / 500) * 500;
}, Sr = (r) => Math.round(Math.log10(Math.max(1, Math.min(1e4, r))) / 4 * 100), Zn = [
  { v: 1, num: "1", label: ["Home", "panels"] },
  { v: 10, num: "10", label: ["Rooftop", "home"] },
  { v: 100, num: "100", label: ["Commercial", "roof"] },
  { v: 1e3, num: "1k", label: ["Large", "plant"] },
  { v: 1e4, num: "10k", label: ["Utility", "scale"] }
], Xn = (r) => r <= 5 ? "Small residential panel set" : r <= 20 ? "Residential rooftop system" : r <= 100 ? "Commercial rooftop installation" : r <= 500 ? "Industrial or large commercial plant" : r <= 5e3 ? "Utility-scale solar farm" : "Large-scale utility solar project (10+ MW)", H = (r) => {
  const i = Math.abs(r ?? 0), n = (r ?? 0) < 0 ? "−" : "";
  return i >= 1e7 ? `${n}₹${(i / 1e7).toFixed(1)} Cr` : i >= 1e5 ? `${n}₹${(i / 1e5).toFixed(1)} L` : i >= 1e3 ? `${n}₹${Math.round(i / 1e3)}k` : `${n}₹${Math.round(i)}`;
}, Ne = (r) => `${(r ?? 0) < 0 ? "−" : ""}₹${Math.abs(Math.round(r ?? 0)).toLocaleString("en-IN")}`, Mr = (r) => {
  const i = Math.abs(r ?? 0);
  return i >= 1e6 ? `${(i / 1e6).toFixed(2)} GWh` : i >= 1e3 ? `${(i / 1e3).toFixed(0)} MWh` : `${Math.round(i).toLocaleString()} kWh`;
}, el = ({ active: r, payload: i, label: n }) => !r || !i?.length ? null : /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-xl p-3 shadow-lg text-sm", children: [
  /* @__PURE__ */ e("p", { className: "font-bold text-neutral-800 mb-0.5", children: n }),
  /* @__PURE__ */ t("p", { className: "text-neutral-600", children: [
    "₹",
    i[0].value?.toLocaleString("en-IN"),
    "/kW/yr"
  ] })
] }), tl = ({
  calculations: r,
  defaultInputs: i,
  secondaryInputs: n,
  theme: o = "light"
}) => {
  const a = o === "dark", s = (C) => ({
    background: `linear-gradient(to right, #eab308 ${C.toFixed(1)}%, ${a ? "#374151" : "#e5e7eb"} ${C.toFixed(1)}%)`
  }), d = "w-full h-2 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-yellow-500 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-yellow-500 [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-pointer", m = { ...i, ...n || {} }, p = Object.keys(m).reduce((C, v) => {
    const u = m[v];
    return C[v] = u.default !== void 0 ? u.default : u.min != null ? (u.min + u.max) / 2 : u.options?.[0]?.value, C;
  }, {}), [c, g] = A(p), [b, x] = A(String(p.systemSize || 100)), [w, N] = A(!1), h = (C, v) => g((u) => ({ ...u, [C]: v })), l = ie(() => r(c), [c, r]), S = () => {
    g(p), x(String(p.systemSize || 100));
  }, T = a ? "bg-neutral-900" : "bg-white", R = a ? "bg-neutral-950/40" : "bg-neutral-50/60", P = a ? "border-neutral-700" : "border-neutral-200", M = a ? "text-white" : "text-neutral-900", f = a ? "text-neutral-400" : "text-neutral-500", E = a ? "text-yellow-400" : "text-yellow-600", j = ie(() => {
    const C = l.baselineRevenuePerKw || 0;
    return [
      { name: "Baseline", rev: C, fill: "#94a3b8" },
      { name: "Power Boost", rev: C + (l.powerBoostRevenuePerKw || 0), fill: "#22c55e" },
      { name: "Full Return", rev: C + (l.fullReturnPerKw || 0), fill: "#f59e0b" }
    ];
  }, [l]), W = ie(() => {
    if (!j.length) return [0, 2e4];
    const C = j.map((v) => v.rev);
    return [
      Math.floor(Math.min(...C) * 0.85 / 1e3) * 1e3,
      Math.ceil(Math.max(...C) * 1.08 / 1e3) * 1e3
    ];
  }, [j]), O = ie(() => l.applicationCostTotal ? Array.from({ length: (l.analysisPeriod || 20) + 1 }, (C, v) => ({
    year: v,
    cumulative: Math.round(-(l.applicationCostTotal || 0) + (l.fullReturnTotal || 0) * v)
  })) : [], [l]), F = () => {
    const C = c.systemSize || 1;
    return /* @__PURE__ */ t("div", { className: "space-y-2.5", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${M}`, children: "System Size" }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "number",
              value: b,
              min: 1,
              max: 1e4,
              onChange: (v) => {
                x(v.target.value);
                const u = parseInt(v.target.value, 10);
                !isNaN(u) && u >= 1 && u <= 1e4 && h("systemSize", u);
              },
              onBlur: () => x(String(C)),
              className: `w-20 text-right text-sm font-mono border ${P} rounded px-2 py-1 ${a ? "bg-neutral-800 text-white" : "bg-white text-neutral-900"} focus:outline-none focus:ring-1 focus:ring-yellow-500`
            }
          ),
          /* @__PURE__ */ e("span", { className: `text-sm font-medium ${M}`, children: "kW" })
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: 0,
          max: 100,
          value: Sr(C),
          onChange: (v) => {
            const u = Jn(v.target.value);
            h("systemSize", u), x(String(u));
          },
          className: d,
          style: s(Sr(C))
        }
      ),
      /* @__PURE__ */ e("div", { className: "flex justify-between", children: Zn.map(({ v, num: u, label: y }) => /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-0.5 w-10", children: [
        /* @__PURE__ */ e("span", { className: `text-[10px] font-semibold ${M}`, children: u }),
        y.map(($, Z) => /* @__PURE__ */ e("span", { className: `text-[9px] ${f} text-center leading-tight`, children: $ }, Z))
      ] }, v)) }),
      /* @__PURE__ */ t("p", { className: `text-[11px] italic ${f}`, children: [
        "≈ ",
        Xn(C)
      ] })
    ] });
  }, G = () => {
    const C = i.electricityRate, v = c.electricityRate;
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${M}`, children: "Electricity Rate" }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${E}`, children: [
          "₹",
          v,
          "/kWh"
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: C.min,
          max: C.max,
          step: C.step || 0.5,
          value: v,
          onChange: (u) => h("electricityRate", Number(u.target.value)),
          className: d,
          style: s(Math.max(0, Math.min(100, (v - C.min) / (C.max - C.min) * 100)))
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${f}`, children: [
          "₹",
          C.min
        ] }),
        /* @__PURE__ */ e("span", { className: `text-[10px] ${f}`, children: "avg ₹7" }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${f}`, children: [
          "₹",
          C.max
        ] })
      ] })
    ] });
  }, B = () => {
    const C = i.applicationCostPerKw, v = c.applicationCostPerKw;
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${M}`, children: "Application Cost" }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${E}`, children: [
          "₹",
          (v || 0).toLocaleString(),
          "/kW"
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: C.min,
          max: C.max,
          step: C.step || 100,
          value: v,
          onChange: (u) => h("applicationCostPerKw", Number(u.target.value)),
          className: d,
          style: s(Math.max(0, Math.min(100, (v - C.min) / (C.max - C.min) * 100)))
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${f}`, children: [
          "₹",
          (C.min || 0).toLocaleString()
        ] }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${f}`, children: [
          "₹",
          (C.max || 0).toLocaleString()
        ] })
      ] })
    ] });
  }, re = () => {
    const C = i.outputGainPct, v = c.outputGainPct;
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${M}`, children: "Output Gain" }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${E}`, children: [
          v,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: C.min,
          max: C.max,
          step: 1,
          value: v,
          onChange: (u) => h("outputGainPct", Number(u.target.value)),
          className: d,
          style: s(Math.max(0, Math.min(100, (v - C.min) / (C.max - C.min) * 100)))
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${f}`, children: [
          C.min,
          "% conservative"
        ] }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${f}`, children: [
          C.max,
          "% optimistic"
        ] })
      ] }),
      /* @__PURE__ */ e("p", { className: `text-[11px] ${f}`, children: "Field-validated range: 7–12%" }),
      l.powerBoostRevenuePerKw != null && /* @__PURE__ */ t("p", { className: "text-[11px] font-semibold text-yellow-600", children: [
        "→ +₹",
        (l.powerBoostRevenuePerKw || 0).toLocaleString("en-IN"),
        "/kW/yr power boost · ₹",
        (l.powerOnlySavingsTotal || 0) >= 1e3 ? `${Math.round((l.powerOnlySavingsTotal || 0) / 1e3)}k` : (l.powerOnlySavingsTotal || 0).toLocaleString("en-IN"),
        " project annual"
      ] })
    ] });
  }, V = (C, v) => /* @__PURE__ */ t("div", { className: "space-y-2", children: [
    /* @__PURE__ */ e("label", { className: `text-sm font-medium ${M}`, children: v.label }),
    /* @__PURE__ */ e("div", { className: "flex gap-2", children: v.options.map((u) => /* @__PURE__ */ e(
      "button",
      {
        onClick: () => h(C, u.value),
        className: `flex-1 py-1.5 rounded-lg text-sm font-medium border transition-all ${c[C] === u.value ? a ? "bg-white text-neutral-900 border-white" : "bg-neutral-900 text-white border-neutral-900" : a ? "text-neutral-400 border-neutral-700 hover:border-neutral-500" : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"}`,
        children: u.label
      },
      u.value
    )) })
  ] });
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${P} overflow-hidden shadow-2xl`, children: [
    /* @__PURE__ */ t("div", { className: `px-6 py-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs ${a ? "bg-yellow-950/30 border-b border-yellow-900/50" : "bg-yellow-50 border-b border-yellow-100"}`, children: [
      /* @__PURE__ */ e(ja, { className: "w-3.5 h-3.5 text-yellow-500 flex-shrink-0" }),
      /* @__PURE__ */ e("span", { className: "font-bold uppercase tracking-wider text-yellow-500", children: "Field Validated" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: [
        "Power: +",
        c.outputGainPct || 10,
        "%"
      ] }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: [
        "Soiling: −",
        l.soilingRecoveryPct || 35,
        "%"
      ] }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: [
        "Temp: −",
        l.temperatureReductionC || "5-6",
        "°C"
      ] }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: "font-bold text-green-600", children: [
        "All-in: +",
        Ne(l.fullReturnPerKw || 0),
        "/kW/yr"
      ] }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: `font-semibold ${a ? "text-slate-400" : "text-slate-500"}`, children: [
        "Power-only: +",
        Ne(l.powerOnlySavingsPerKw || 0),
        "/kW/yr"
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: `grid grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-7 border-b ${P} ${T}`, children: [
      /* @__PURE__ */ e(F, {}),
      /* @__PURE__ */ e(G, {}),
      /* @__PURE__ */ e(B, {}),
      /* @__PURE__ */ e(re, {})
    ] }),
    /* @__PURE__ */ t("div", { className: `px-8 py-2.5 flex items-center justify-between border-b ${P} ${a ? "bg-neutral-900/80" : "bg-yellow-50/60"}`, children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5 flex-wrap text-[10px]", children: [
        /* @__PURE__ */ e($e, { className: `w-3 h-3 flex-shrink-0 ${a ? "text-yellow-400" : "text-yellow-600"}` }),
        /* @__PURE__ */ e("span", { className: `font-bold uppercase tracking-wider ${a ? "text-yellow-400" : "text-yellow-600"}`, children: "Verified Assumptions" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: "1,500 kWh/kW/yr baseline" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: "35% soiling recovery" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: "CEA 2023 CO₂ factor" })
      ] }),
      /* @__PURE__ */ t(
        "button",
        {
          onClick: S,
          className: `flex items-center gap-1.5 text-[10px] font-semibold px-3 py-1.5 rounded-lg border transition-colors flex-shrink-0 ${a ? "text-neutral-400 border-neutral-700 hover:bg-neutral-800 hover:text-neutral-200" : "text-neutral-500 border-neutral-200 hover:bg-white hover:text-neutral-700"}`,
          children: [
            /* @__PURE__ */ e(Fa, { className: "w-3 h-3" }),
            "Reset"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: `grid grid-cols-1 lg:grid-cols-12 ${T}`, children: [
      /* @__PURE__ */ t("div", { className: `lg:col-span-5 p-8 border-b lg:border-b-0 lg:border-r ${P} flex flex-col gap-6`, children: [
        /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-wider ${f}`, children: "Per-kW Annual Revenue Breakdown" }),
        /* @__PURE__ */ t("div", { className: "space-y-2", children: [
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border ${P} ${a ? "bg-neutral-800/50" : "bg-neutral-50"}`, children: [
            /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${f} mb-1`, children: "Baseline annual revenue" }),
            /* @__PURE__ */ t("p", { className: `text-2xl font-display font-medium ${M}`, children: [
              Ne(l.baselineRevenuePerKw || 0),
              /* @__PURE__ */ e("span", { className: `text-sm font-normal ${f} ml-1`, children: "/kW/yr" })
            ] }),
            /* @__PURE__ */ t("p", { className: `text-[10px] ${f} mt-0.5`, children: [
              (l.baselineGenPerKw || 1500).toLocaleString(),
              " kWh/kW/yr × ₹",
              c.electricityRate || 7,
              "/kWh"
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl p-3.5 border ${a ? "border-yellow-800/40 bg-yellow-900/10" : "border-yellow-100 bg-yellow-50"}`, children: [
            /* @__PURE__ */ e("p", { className: "text-xs font-bold uppercase tracking-widest text-yellow-600 mb-2", children: "+ Graffisol gains" }),
            /* @__PURE__ */ t("div", { className: "space-y-1 text-xs", children: [
              /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ t("span", { className: a ? "text-yellow-400" : "text-yellow-700", children: [
                  "Power boost (",
                  c.outputGainPct || 10,
                  "%)"
                ] }),
                /* @__PURE__ */ t("span", { className: "font-mono text-yellow-600", children: [
                  "+",
                  Ne(l.powerBoostRevenuePerKw || 0)
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ e("span", { className: "text-green-600", children: "Soiling recovery (35%)" }),
                /* @__PURE__ */ t("span", { className: "font-mono text-green-600", children: [
                  "+",
                  Ne(l.soilingRevenuePerKw || 0)
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ e("span", { className: "text-teal-600", children: "Maintenance saved" }),
                /* @__PURE__ */ t("span", { className: "font-mono text-teal-600", children: [
                  "+",
                  Ne(l.maintenancePerKw || 0)
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: `flex justify-between pt-1 border-t ${a ? "border-yellow-700/30" : "border-yellow-200/60"}`, children: [
                /* @__PURE__ */ e("span", { className: "font-bold text-yellow-700", children: "Net gain/kW/yr" }),
                /* @__PURE__ */ t("span", { className: "font-bold font-mono text-yellow-700", children: [
                  "+",
                  Ne(l.fullReturnPerKw || 0)
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 px-1", children: [
            /* @__PURE__ */ e("div", { className: `flex-1 h-px ${a ? "bg-neutral-700" : "bg-neutral-200"}` }),
            /* @__PURE__ */ e("span", { className: `text-[10px] uppercase font-bold ${f}`, children: "equals" }),
            /* @__PURE__ */ e("div", { className: `flex-1 h-px ${a ? "bg-neutral-700" : "bg-neutral-200"}` })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border-2 ${a ? "border-yellow-700 bg-yellow-900/10" : "border-yellow-300 bg-yellow-50"}`, children: [
            /* @__PURE__ */ e("p", { className: "text-xs font-bold uppercase tracking-widest text-yellow-600", children: "Annual revenue with Graffisol" }),
            /* @__PURE__ */ t("p", { className: "text-2xl font-display font-medium text-yellow-700 mt-1", children: [
              Ne((l.baselineRevenuePerKw || 0) + (l.fullReturnPerKw || 0)),
              /* @__PURE__ */ e("span", { className: "text-sm font-normal text-yellow-500 ml-1", children: "/kW/yr" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl border-2 overflow-hidden ${a ? "border-yellow-800 bg-yellow-950/20" : "border-yellow-200 bg-white"}`, children: [
            /* @__PURE__ */ t("div", { className: `px-4 py-2 flex items-center justify-between ${a ? "bg-yellow-900/40 border-b border-yellow-800/50" : "bg-yellow-50 border-b border-yellow-100"}`, children: [
              /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-widest text-yellow-600", children: "Graffisol Application" }),
              /* @__PURE__ */ t("span", { className: `text-[9px] font-bold px-2 py-0.5 rounded-full ${a ? "bg-yellow-800/70 text-yellow-300" : "bg-yellow-200 text-yellow-700"}`, children: [
                l.applicationRateMlM2 || 65,
                " ml/m²"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `grid grid-cols-2 divide-x ${a ? "divide-yellow-800/40" : "divide-yellow-100"}`, children: [
              /* @__PURE__ */ t("div", { className: "p-4", children: [
                /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider mb-1.5 ${a ? "text-yellow-400" : "text-yellow-600"}`, children: "Volume Needed" }),
                /* @__PURE__ */ t("p", { className: `text-2xl font-display font-bold tabular-nums leading-none ${a ? "text-yellow-200" : "text-yellow-800"}`, children: [
                  l.productLitresTotal || 0,
                  /* @__PURE__ */ e("span", { className: `text-sm font-normal ml-1 ${a ? "text-yellow-400" : "text-yellow-500"}`, children: "L" })
                ] }),
                /* @__PURE__ */ t("p", { className: "text-[10px] mt-1.5 font-mono text-yellow-500", children: [
                  l.applicationRateMlM2 || 65,
                  " ml × ",
                  (c.systemSize || 0).toLocaleString(),
                  " kW × ",
                  l.panelAreaM2PerKw || 5.3,
                  " m²/kW"
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "p-4", children: [
                /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider mb-1.5 ${a ? "text-yellow-400" : "text-yellow-600"}`, children: "Additive Cost" }),
                /* @__PURE__ */ e("p", { className: `text-2xl font-display font-bold tabular-nums leading-none ${a ? "text-yellow-200" : "text-yellow-800"}`, children: H(l.additiveCostTotal || 0) }),
                /* @__PURE__ */ t("p", { className: "text-[10px] mt-1.5 font-mono text-yellow-500", children: [
                  "₹",
                  (l.graffisolProductPricePerLitre || 2500).toLocaleString("en-IN"),
                  "/L × ",
                  l.productLitresTotal || 0,
                  " L"
                ] }),
                /* @__PURE__ */ t("div", { className: `flex items-center justify-between mt-2 pt-1.5 border-t ${a ? "border-yellow-800/40" : "border-yellow-100"}`, children: [
                  /* @__PURE__ */ e("span", { className: "text-[10px] text-yellow-500", children: "+ Installation" }),
                  /* @__PURE__ */ e("span", { className: `text-[10px] font-mono font-semibold ${a ? "text-yellow-400" : "text-yellow-600"}`, children: H(l.serviceCostTotal || 0) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e("div", { className: `px-4 py-2 ${a ? "bg-yellow-900/20 border-t border-yellow-800/30" : "bg-yellow-50/80 border-t border-yellow-100"}`, children: /* @__PURE__ */ t("p", { className: "text-[10px] text-yellow-500", children: [
              "Total: ",
              H(l.applicationCostTotal || 0),
              " · Annual return: ",
              H(l.fullReturnTotal || 0),
              "/yr · Payback: ",
              l.paybackLabel || "—",
              " · ROI: ",
              l.roiPercentage != null ? `${l.roiPercentage}%` : "—"
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: `rounded-xl border ${P} ${a ? "bg-neutral-800/30" : "bg-neutral-50"} p-5 mt-auto`, children: [
          /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-wider ${f} mb-4`, children: [
            "Project Total · ",
            (c.systemSize || 0).toLocaleString(),
            " kW"
          ] }),
          /* @__PURE__ */ t("div", { className: "space-y-2", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ e("span", { className: `text-sm ${f}`, children: "Application cost" }),
              /* @__PURE__ */ e("span", { className: `text-sm font-mono font-semibold ${a ? "text-neutral-300" : "text-neutral-600"}`, children: H(l.applicationCostTotal || 0) })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ e("span", { className: `text-sm ${f}`, children: "Annual full return" }),
              /* @__PURE__ */ t("span", { className: "text-sm font-mono font-semibold text-green-600", children: [
                "+",
                H(l.fullReturnTotal || 0),
                "/yr"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `pt-2 border-t ${P} space-y-1.5`, children: [
              /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ t("span", { className: `text-xs ${f}`, children: [
                  "Power-boost only ",
                  /* @__PURE__ */ e("span", { className: "opacity-60", children: "(conservative)" })
                ] }),
                /* @__PURE__ */ t("span", { className: `text-sm font-mono font-semibold ${a ? "text-slate-300" : "text-slate-600"}`, children: [
                  "+",
                  H(l.powerOnlySavingsTotal || 0),
                  "/yr"
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ t("span", { className: `text-sm font-bold ${M}`, children: [
                  l.analysisPeriod || 20,
                  "-yr net profit"
                ] }),
                /* @__PURE__ */ e("span", { className: `text-xl font-bold font-mono ${a ? "text-green-400" : "text-green-700"}`, children: H(l.netProfitProjected || 0) })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: `lg:col-span-7 ${R} p-8 flex flex-col gap-6`, children: [
        /* @__PURE__ */ e("div", { className: `grid grid-cols-4 gap-0 rounded-xl overflow-hidden border ${P}`, children: [
          {
            label: "Payback",
            value: l.paybackLabel || "—",
            color: a ? "text-yellow-400" : "text-yellow-700",
            bg: a ? "bg-yellow-900/20" : "bg-yellow-50"
          },
          {
            label: "Annual Return",
            value: H(l.fullReturnTotal || 0),
            color: a ? "text-green-400" : "text-green-700",
            bg: a ? "bg-green-900/20" : "bg-green-50"
          },
          {
            label: "Extra Energy",
            value: Mr(l.totalAdditionalKwh || 0),
            color: a ? "text-yellow-400" : "text-yellow-700",
            bg: a ? "bg-yellow-900/20" : "bg-yellow-50"
          },
          {
            label: "CO₂/yr",
            value: `${l.co2AvoidedTPerYear || 0}t`,
            color: a ? "text-teal-400" : "text-teal-700",
            bg: a ? "bg-teal-900/20" : "bg-teal-50"
          }
        ].map(({ label: C, value: v, color: u, bg: y }, $) => /* @__PURE__ */ t("div", { className: `${y} py-2.5 px-2 text-center ${$ < 3 ? `border-r ${P}` : ""}`, children: [
          /* @__PURE__ */ e("p", { className: `text-[8px] font-bold uppercase tracking-wider ${f} mb-0.5`, children: C }),
          /* @__PURE__ */ e("p", { className: `text-[11px] font-bold font-mono leading-tight ${u}`, children: v })
        ] }, C)) }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${f} mb-3`, children: "Annual revenue per kW — method comparison" }),
          /* @__PURE__ */ e("div", { className: "h-48", children: /* @__PURE__ */ e(Q, { width: "100%", height: "100%", children: /* @__PURE__ */ t(_e, { data: j, margin: { top: 20, right: 8, bottom: 0, left: -10 }, barSize: 52, children: [
            /* @__PURE__ */ e(ee, { strokeDasharray: "3 3", stroke: a ? "#2a2a2a" : "#f1f5f9", vertical: !1 }),
            /* @__PURE__ */ e(te, { dataKey: "name", tick: { fontSize: 11, fill: a ? "#9ca3af" : "#64748b" }, tickLine: !1, axisLine: !1 }),
            /* @__PURE__ */ e(
              ae,
              {
                domain: W,
                tickFormatter: (C) => `₹${(C / 1e3).toFixed(1)}k`,
                tick: { fontSize: 10, fill: a ? "#9ca3af" : "#64748b" },
                tickLine: !1,
                axisLine: !1
              }
            ),
            /* @__PURE__ */ e(J, { content: /* @__PURE__ */ e(el, {}) }),
            /* @__PURE__ */ t(Se, { dataKey: "rev", radius: [6, 6, 0, 0], children: [
              j.map((C, v) => /* @__PURE__ */ e(ut, { fill: C.fill }, v)),
              /* @__PURE__ */ e(
                za,
                {
                  dataKey: "rev",
                  position: "top",
                  formatter: (C) => `₹${(C / 1e3).toFixed(1)}k`,
                  style: { fontSize: 10, fontWeight: 700, fill: a ? "#e5e7eb" : "#374151" }
                }
              )
            ] })
          ] }) }) }),
          /* @__PURE__ */ t("p", { className: `text-[11px] text-center mt-1 ${f}`, children: [
            "Gap between green and amber bar = soiling recovery + maintenance ( ₹",
            ((l.soilingRevenuePerKw || 0) + (l.maintenancePerKw || 0)).toLocaleString("en-IN"),
            "/kW/yr)"
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ t("div", { className: `p-5 rounded-2xl border-2 ${a ? "border-yellow-700 bg-yellow-900/10" : "border-yellow-300 bg-yellow-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ e("p", { className: "text-xs font-bold uppercase tracking-widest text-yellow-600", children: l.fullReturnLabel || "Full Annual Return" }),
              /* @__PURE__ */ e("span", { className: `text-[9px] font-bold px-1.5 py-0.5 rounded ${a ? "bg-neutral-700 text-neutral-300" : "bg-neutral-900 text-white"}`, children: "ALL-IN" })
            ] }),
            /* @__PURE__ */ e("p", { className: "text-3xl font-display font-medium tabular-nums text-yellow-700", children: H(l.fullReturnTotal || 0) }),
            /* @__PURE__ */ t("p", { className: "text-xs mt-1.5 text-yellow-600", children: [
              "+",
              Ne(l.fullReturnPerKw || 0),
              "/kW/yr · power + soiling + maintenance"
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-5 rounded-2xl border ${a ? "border-slate-700 bg-slate-800/30" : "border-slate-200 bg-slate-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${a ? "text-slate-400" : "text-slate-500"}`, children: l.powerOnlyLabel || "Power Boost" }),
              /* @__PURE__ */ e("span", { className: `text-[9px] font-bold px-1.5 py-0.5 rounded ${a ? "bg-slate-700 text-slate-300" : "bg-slate-200 text-slate-600"}`, children: "CONSERVATIVE" })
            ] }),
            /* @__PURE__ */ e("p", { className: `text-3xl font-display font-medium tabular-nums ${a ? "text-slate-200" : "text-slate-700"}`, children: H(l.powerOnlySavingsTotal || 0) }),
            /* @__PURE__ */ t("p", { className: `text-xs mt-1.5 ${a ? "text-slate-500" : "text-slate-400"}`, children: [
              "+",
              Ne(l.powerOnlySavingsPerKw || 0),
              "/kW/yr · direct output gain only"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${P} ${a ? "bg-neutral-800/50" : "bg-white"} flex items-center gap-4`, children: [
            /* @__PURE__ */ e(z, { className: "w-5 h-5 text-yellow-500 flex-shrink-0" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${f}`, children: "Annual ROI" }),
              /* @__PURE__ */ e("p", { className: `text-2xl font-display font-medium tabular-nums ${M}`, children: l.roiPercentage != null ? `${l.roiPercentage}%` : "—" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${P} ${a ? "bg-neutral-800/50" : "bg-white"} flex items-center gap-4`, children: [
            /* @__PURE__ */ e(I, { className: "w-5 h-5 text-green-500 flex-shrink-0" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${f}`, children: "Payback" }),
              /* @__PURE__ */ e("p", { className: "text-base font-display font-medium text-green-600", children: l.paybackLabel || "—" })
            ] })
          ] })
        ] }),
        l.roiMultiple != null && /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${a ? "border-yellow-700 bg-yellow-900/10" : "border-yellow-200 bg-yellow-50"} flex items-center gap-4`, children: [
          /* @__PURE__ */ e(z, { className: "w-5 h-5 text-yellow-500 flex-shrink-0" }),
          /* @__PURE__ */ t("div", { className: "flex-1", children: [
            /* @__PURE__ */ t("p", { className: `text-[10px] font-bold uppercase tracking-wider ${a ? "text-yellow-400" : "text-yellow-600"}`, children: [
              l.analysisPeriod || 20,
              "-yr Return Multiple"
            ] }),
            /* @__PURE__ */ t("p", { className: `text-2xl font-display font-medium tabular-nums ${a ? "text-yellow-300" : "text-yellow-700"}`, children: [
              l.roiMultiple,
              "×"
            ] }),
            /* @__PURE__ */ e("p", { className: `text-[9px] mt-0.5 ${a ? "text-yellow-500" : "text-yellow-400"}`, children: "net profit ÷ application cost" })
          ] }),
          /* @__PURE__ */ t("div", { className: "text-right flex-shrink-0", children: [
            /* @__PURE__ */ t("p", { className: `text-[9px] font-bold uppercase tracking-wider ${f} mb-0.5`, children: [
              l.analysisPeriod || 20,
              "-yr Profit"
            ] }),
            /* @__PURE__ */ e("p", { className: `text-lg font-bold font-mono ${a ? "text-yellow-300" : "text-yellow-700"}`, children: H(l.netProfitProjected || 0) })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border ${P} ${a ? "bg-neutral-800/30" : "bg-white"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${f} mb-1`, children: "Investment" }),
            /* @__PURE__ */ e("p", { className: `text-sm font-bold tabular-nums ${M}`, children: H(l.applicationCostTotal || 0) })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border border-yellow-500/25 ${a ? "bg-yellow-900/10" : "bg-yellow-50"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-yellow-600/70 mb-1", children: "Extra Energy" }),
            /* @__PURE__ */ e("p", { className: "text-sm font-bold text-yellow-600 tabular-nums", children: Mr(l.totalAdditionalKwh || 0) }),
            /* @__PURE__ */ e("p", { className: "text-[10px] text-yellow-500/60", children: "per year" })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border border-teal-500/25 ${a ? "bg-teal-900/10" : "bg-teal-50"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-teal-600/70 mb-1", children: "CO₂ Avoided" }),
            /* @__PURE__ */ t("p", { className: "text-sm font-bold text-teal-600 tabular-nums", children: [
              l.co2AvoidedTPerYear || 0,
              /* @__PURE__ */ e("span", { className: "text-[10px] font-normal ml-0.5", children: "t/yr" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: `flex-grow border ${P} rounded-2xl ${a ? "bg-neutral-800/50" : "bg-white"} p-5`, children: [
          /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-widest ${f} mb-3`, children: [
            l.analysisPeriod || 20,
            "-Year ROI Projection — Payback at ",
            l.paybackLabel || "—"
          ] }),
          O.length > 0 && /* @__PURE__ */ e("div", { className: "h-28", children: /* @__PURE__ */ e(Q, { width: "100%", height: "100%", children: /* @__PURE__ */ t(Xt, { data: O, margin: { top: 4, right: 12, bottom: 4, left: -18 }, children: [
            /* @__PURE__ */ e(ee, { strokeDasharray: "3 3", stroke: a ? "#2a2a2a" : "#f1f5f9", vertical: !1 }),
            /* @__PURE__ */ e(te, { dataKey: "year", stroke: a ? "#525252" : "#94a3b8", fontSize: 10, tickLine: !1, axisLine: !1, tickMargin: 6, tickFormatter: (C) => `Yr ${C}` }),
            /* @__PURE__ */ e(ae, { stroke: a ? "#525252" : "#94a3b8", fontSize: 10, tickLine: !1, axisLine: !1, tickMargin: 6, tickFormatter: H }),
            /* @__PURE__ */ e(Le, { y: 0, stroke: a ? "#555" : "#cbd5e1", strokeDasharray: "4 2" }),
            /* @__PURE__ */ e(
              J,
              {
                contentStyle: { backgroundColor: a ? "#171717" : "#fff", border: `1px solid ${a ? "#404040" : "#e2e8f0"}`, borderRadius: "8px", fontSize: "11px", color: a ? "#fff" : "#111" },
                formatter: (C) => [H(C), "Cumulative"],
                labelFormatter: (C) => C === 0 ? "After application (Year 0)" : `Year ${C}`
              }
            ),
            /* @__PURE__ */ e(ne, { type: "monotone", dataKey: "cumulative", stroke: "#f59e0b", strokeWidth: 2.5, dot: { fill: "#f59e0b", r: 3, strokeWidth: 0 }, activeDot: { r: 5, strokeWidth: 0 } })
          ] }) }) }),
          /* @__PURE__ */ t("p", { className: `text-[10px] ${f} mt-2`, children: [
            "Starts at −",
            H(l.applicationCostTotal || 0),
            " (application cost). Line crosses zero at payback. Annual gains added each year."
          ] })
        ] }),
        (l.netProfitProjected || 0) > 0 && /* @__PURE__ */ t("div", { className: `rounded-2xl p-6 flex items-center justify-between ${a ? "bg-neutral-800 border border-neutral-700" : "bg-neutral-900"}`, children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ t("p", { className: "text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1", children: [
              l.analysisPeriod || 20,
              "-yr total · ",
              (c.systemSize || 0).toLocaleString(),
              " kW"
            ] }),
            /* @__PURE__ */ e("p", { className: "text-3xl font-display font-medium text-white", children: H(l.netProfitProjected || 0) }),
            /* @__PURE__ */ t("p", { className: "text-[10px] text-neutral-500 mt-1", children: [
              "Annual ",
              H(l.fullReturnTotal || 0),
              " × ",
              l.analysisPeriod || 20,
              " yr − ",
              H(l.applicationCostTotal || 0),
              " investment"
            ] })
          ] }),
          l.roiMultiple && /* @__PURE__ */ t("div", { className: "text-right flex-shrink-0 ml-6", children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1", children: "Return Multiple" }),
            /* @__PURE__ */ t("p", { className: "text-4xl font-display font-bold text-yellow-400", children: [
              l.roiMultiple,
              "×"
            ] }),
            /* @__PURE__ */ e("p", { className: "text-[10px] text-neutral-500 mt-1", children: "on coating spend" })
          ] })
        ] }),
        /* @__PURE__ */ t("p", { className: `text-[10px] leading-relaxed flex items-start gap-1.5 ${f}`, children: [
          /* @__PURE__ */ e(ot, { className: "w-3 h-3 flex-shrink-0 mt-0.5 opacity-60" }),
          "Results depend on panel type, location, soiling conditions, and local electricity tariff. Calculator uses typical India-average assumptions (1,500 kWh/kW/yr baseline, 15% moderate soiling loss). Field-validated data: 7–12% output gain, 30–40% soiling loss reduction."
        ] })
      ] })
    ] }),
    n && /* @__PURE__ */ t("div", { className: `border-t ${P} ${T}`, children: [
      /* @__PURE__ */ t(
        "button",
        {
          onClick: () => N((C) => !C),
          className: `w-full px-8 py-4 flex items-center justify-between text-sm font-medium ${M} transition-colors ${a ? "hover:bg-neutral-800/60" : "hover:bg-neutral-50"}`,
          children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3 flex-wrap", children: [
              /* @__PURE__ */ e("span", { children: "Lifecycle & Scenario Settings" }),
              /* @__PURE__ */ e("span", { className: `text-xs px-1.5 py-0.5 rounded font-medium ${a ? "bg-neutral-700 text-neutral-400" : "bg-neutral-100 text-neutral-500"}`, children: "Estimates" }),
              l.lifecycle?.total > 0 && /* @__PURE__ */ t("span", { className: `text-xs px-2.5 py-0.5 rounded-full font-mono ${a ? "bg-green-900/30 text-green-400" : "bg-green-100 text-green-700"}`, children: [
                "+",
                H(l.lifecycle.total),
                " panel life extension"
              ] })
            ] }),
            /* @__PURE__ */ e(Zt, { className: `w-4 h-4 flex-shrink-0 transition-transform duration-200 ${f} ${w ? "rotate-180" : ""}` })
          ]
        }
      ),
      /* @__PURE__ */ e(de, { initial: !1, children: w && /* @__PURE__ */ e(
        D.div,
        {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.22, ease: "easeInOut" },
          className: "overflow-hidden",
          children: /* @__PURE__ */ t("div", { className: `px-8 pb-10 pt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 ${R}`, children: [
            /* @__PURE__ */ t("div", { className: "space-y-5", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-wider ${f}`, children: "Scenario Parameters" }),
              Object.entries(n).map(([C, v]) => v.type === "buttongroup" ? /* @__PURE__ */ e("div", { children: V(C, v) }, C) : null)
            ] }),
            /* @__PURE__ */ t("div", { className: "space-y-3", children: [
              /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-wider ${f}`, children: [
                "Lifecycle Value Estimate (",
                c.analysisPeriod || 20,
                " yr)"
              ] }),
              /* @__PURE__ */ t("div", { className: `flex items-center justify-between px-4 py-3 rounded-xl border ${P} ${a ? "bg-neutral-800/30" : "bg-white"}`, children: [
                /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5", children: [
                  /* @__PURE__ */ e(qt, { className: "w-4 h-4 text-green-500 flex-shrink-0" }),
                  /* @__PURE__ */ e("span", { className: `text-sm ${M}`, children: "Panel life extension (reduced thermal stress)" })
                ] }),
                /* @__PURE__ */ t("span", { className: "text-sm font-mono font-semibold text-green-600", children: [
                  "+",
                  H(l.lifecycle?.lifeExtension || 0)
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: `flex items-center justify-between px-4 py-3.5 rounded-xl border-2 mt-1 ${a ? "border-green-800 bg-green-900/20" : "border-green-200 bg-green-50"}`, children: [
                /* @__PURE__ */ t("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ e(qt, { className: "w-4 h-4 text-green-600" }),
                  /* @__PURE__ */ e("span", { className: `text-sm font-bold ${a ? "text-green-400" : "text-green-800"}`, children: "Total Lifecycle Value" })
                ] }),
                /* @__PURE__ */ t("span", { className: `text-lg font-bold font-mono ${a ? "text-green-400" : "text-green-700"}`, children: [
                  "+",
                  H(l.lifecycle?.total || 0)
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: `px-4 py-3 rounded-xl border ${P} ${a ? "bg-neutral-800/30" : "bg-white"}`, children: [
                /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ t("span", { className: `text-sm font-bold ${M}`, children: [
                    "All-in over ",
                    c.analysisPeriod || 20,
                    " yr"
                  ] }),
                  /* @__PURE__ */ e("span", { className: `text-lg font-bold font-mono ${a ? "text-green-400" : "text-green-700"}`, children: H((l.netProfitProjected || 0) + (l.lifecycle?.total || 0)) })
                ] }),
                /* @__PURE__ */ t("p", { className: `text-[10px] ${f} mt-1`, children: [
                  "Net profit ",
                  H(l.netProfitProjected || 0),
                  " + lifecycle ",
                  H(l.lifecycle?.total || 0)
                ] })
              ] })
            ] })
          ] })
        },
        "sec"
      ) })
    ] })
  ] });
}, al = (r) => {
  const i = Math.pow(10, Number(r) / 100 * 3);
  return i < 5 ? Math.max(1, Math.round(i)) : i < 20 ? Math.round(i / 5) * 5 : i < 100 ? Math.round(i / 10) * 10 : Math.round(i / 50) * 50;
}, $r = (r) => Math.round(Math.log10(Math.max(1, Math.min(1e3, r))) / 3 * 100), rl = [
  { v: 1, num: "1", label: ["Single", "vehicle"] },
  { v: 10, num: "10", label: ["Small", "fleet"] },
  { v: 50, num: "50", label: ["Studio", "fleet"] },
  { v: 200, num: "200", label: ["Large", "fleet"] },
  { v: 1e3, num: "1k", label: ["Enterprise", ""] }
], il = (r) => r <= 1 ? "Single personal or collector vehicle" : r <= 5 ? "Personal fleet or small family" : r <= 20 ? "Detailing studio batch" : r <= 75 ? "Small commercial fleet" : r <= 300 ? "Large corporate or taxi fleet" : "Enterprise-scale fleet or national programme", se = (r) => {
  const i = Math.abs(r ?? 0), n = (r ?? 0) < 0 ? "−" : "";
  return i >= 1e7 ? `${n}₹${(i / 1e7).toFixed(1)} Cr` : i >= 1e5 ? `${n}₹${(i / 1e5).toFixed(1)} L` : i >= 1e3 ? `${n}₹${Math.round(i / 1e3)}k` : `${n}₹${Math.round(i)}`;
}, ue = (r) => `${(r ?? 0) < 0 ? "−" : ""}₹${Math.abs(Math.round(r ?? 0)).toLocaleString("en-IN")}`, nl = ({ active: r, payload: i, label: n }) => !r || !i?.length ? null : /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-xl p-3 shadow-lg text-sm", children: [
  /* @__PURE__ */ e("p", { className: "font-bold text-neutral-800 mb-0.5", children: n }),
  /* @__PURE__ */ t("p", { className: "text-neutral-600", children: [
    "₹",
    i[0].value?.toLocaleString("en-IN"),
    "/vehicle/yr"
  ] })
] }), ll = ({
  calculations: r,
  defaultInputs: i,
  secondaryInputs: n,
  theme: o = "light"
}) => {
  const a = o === "dark", s = (u) => ({
    background: `linear-gradient(to right, #3b82f6 ${u.toFixed(1)}%, ${a ? "#374151" : "#e5e7eb"} ${u.toFixed(1)}%)`
  }), d = "w-full h-2 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-blue-500 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-blue-500 [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-pointer", m = { ...i, ...n || {} }, p = Object.keys(m).reduce((u, y) => {
    const $ = m[y];
    return u[y] = $.default !== void 0 ? $.default : $.min != null ? ($.min + $.max) / 2 : $.options?.[0]?.value, u;
  }, {}), [c, g] = A(p), [b, x] = A(String(p.vehicleCount || 5)), [w, N] = A(!1), h = (u, y) => g(($) => ({ ...$, [u]: y })), l = ie(() => r(c), [c, r]), S = () => {
    g(p), x(String(p.vehicleCount || 5));
  }, T = a ? "bg-neutral-900" : "bg-white", R = a ? "bg-neutral-950/40" : "bg-neutral-50/60", P = a ? "border-neutral-700" : "border-neutral-200", M = a ? "text-white" : "text-neutral-900", f = a ? "text-neutral-400" : "text-neutral-500", E = a ? "text-blue-400" : "text-blue-600", j = ie(() => [
    { name: `Competitor
(coating only)`, cost: l.competitorCostAmortized || 0, fill: "#94a3b8" },
    { name: `Ceraphene
(all-in)`, cost: l.cerapheneAnnualEffective || 0, fill: "#3b82f6" },
    { name: `Competitor
(all-in)`, cost: l.competitorAnnualEffective || 0, fill: "#f87171" }
  ], [l]), W = ie(() => {
    const u = j.map((y) => y.cost).filter(Boolean);
    return u.length ? [
      0,
      Math.ceil(Math.max(...u) * 1.15 / 1e3) * 1e3
    ] : [0, 3e4];
  }, [j]), O = ie(() => {
    if (!l.directSavingsTotal) return [];
    const u = (l.annualSavingsPerVehicle || 0) * (l.vehicleCount || 1);
    return Array.from({ length: (c.analysisPeriod || 4) + 1 }, (y, $) => ({
      year: $,
      cumulative: Math.round((l.directSavingsTotal || 0) + u * $)
    }));
  }, [l, c.analysisPeriod]), F = () => {
    const u = c.vehicleCount || 1;
    return /* @__PURE__ */ t("div", { className: "space-y-2.5", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${M}`, children: "Vehicle Count" }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "number",
              value: b,
              min: 1,
              max: 1e3,
              onChange: (y) => {
                x(y.target.value);
                const $ = parseInt(y.target.value, 10);
                !isNaN($) && $ >= 1 && $ <= 1e3 && h("vehicleCount", $);
              },
              onBlur: () => x(String(u)),
              className: `w-20 text-right text-sm font-mono border ${P} rounded px-2 py-1 ${a ? "bg-neutral-800 text-white" : "bg-white text-neutral-900"} focus:outline-none focus:ring-1 focus:ring-blue-500`
            }
          ),
          /* @__PURE__ */ e("span", { className: `text-sm font-medium ${M}`, children: "vehicles" })
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: 0,
          max: 100,
          value: $r(u),
          onChange: (y) => {
            const $ = al(y.target.value);
            h("vehicleCount", $), x(String($));
          },
          className: d,
          style: s($r(u))
        }
      ),
      /* @__PURE__ */ e("div", { className: "flex justify-between", children: rl.map(({ v: y, num: $, label: Z }) => /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-0.5 w-10", children: [
        /* @__PURE__ */ e("span", { className: `text-[10px] font-semibold ${M}`, children: $ }),
        Z.map((pe, gt) => /* @__PURE__ */ e("span", { className: `text-[9px] ${f} text-center leading-tight`, children: pe }, gt))
      ] }, y)) }),
      /* @__PURE__ */ t("p", { className: `text-[11px] italic ${f}`, children: [
        "≈ ",
        il(u)
      ] })
    ] });
  }, G = () => {
    const u = i.competitorCost, y = c.competitorCost;
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${M}`, children: "Competitor Cost" }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${E}`, children: [
          "₹",
          (y || 0).toLocaleString()
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: u.min,
          max: u.max,
          step: u.step || 1e3,
          value: y,
          onChange: ($) => h("competitorCost", Number($.target.value)),
          className: d,
          style: s(Math.max(0, Math.min(100, (y - u.min) / (u.max - u.min) * 100)))
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${f}`, children: [
          "₹",
          (u.min / 1e3).toFixed(0),
          "k"
        ] }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${f}`, children: [
          "₹",
          (u.max / 1e3).toFixed(0),
          "k"
        ] })
      ] }),
      /* @__PURE__ */ t("p", { className: `text-[11px] ${f}`, children: [
        "Ceraphene: ₹",
        (l.ceraphenePrice || 5e3).toLocaleString(),
        " (fixed)"
      ] })
    ] });
  }, B = () => {
    const u = i.annualWashCostPerVehicle, y = c.annualWashCostPerVehicle;
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${M}`, children: "Annual Wash Cost" }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${E}`, children: [
          "₹",
          (y || 0).toLocaleString(),
          "/yr"
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: u.min,
          max: u.max,
          step: u.step || 1e3,
          value: y,
          onChange: ($) => h("annualWashCostPerVehicle", Number($.target.value)),
          className: d,
          style: s(Math.max(0, Math.min(100, (y - u.min) / (u.max - u.min) * 100)))
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${f}`, children: [
          "₹",
          (u.min / 1e3).toFixed(0),
          "k"
        ] }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${f}`, children: [
          "₹",
          (u.max / 1e3).toFixed(0),
          "k"
        ] })
      ] })
    ] });
  }, re = () => {
    const u = i.washReductionPct, y = c.washReductionPct;
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${M}`, children: "Wash Reduction" }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${E}`, children: [
          y,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: u.min,
          max: u.max,
          step: u.step || 5,
          value: y,
          onChange: ($) => h("washReductionPct", Number($.target.value)),
          className: d,
          style: s(Math.max(0, Math.min(100, (y - u.min) / (u.max - u.min) * 100)))
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${f}`, children: [
          u.min,
          "% conservative"
        ] }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${f}`, children: [
          u.max,
          "% optimistic"
        ] })
      ] }),
      /* @__PURE__ */ e("p", { className: `text-[11px] ${f}`, children: "Hydrophobic self-cleaning range" }),
      l.annualWashesSaved != null && /* @__PURE__ */ t("p", { className: "text-[11px] font-semibold text-blue-600", children: [
        "→ ",
        l.annualWashesSaved,
        " washes saved/vehicle/yr · ₹",
        (l.annualSavingsPerVehicle || 0).toLocaleString("en-IN"),
        "/vehicle annual saving"
      ] })
    ] });
  }, V = (u, y) => /* @__PURE__ */ t("div", { className: "space-y-2", children: [
    /* @__PURE__ */ e("label", { className: `text-sm font-medium ${M}`, children: y.label }),
    /* @__PURE__ */ e("div", { className: "flex gap-2", children: y.options.map(($) => /* @__PURE__ */ e(
      "button",
      {
        onClick: () => h(u, $.value),
        className: `flex-1 py-1.5 rounded-lg text-sm font-medium border transition-all ${c[u] === $.value ? a ? "bg-white text-neutral-900 border-white" : "bg-neutral-900 text-white border-neutral-900" : a ? "text-neutral-400 border-neutral-700 hover:border-neutral-500" : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"}`,
        children: $.label
      },
      $.value
    )) })
  ] }), C = (u, y) => {
    const $ = Math.max(0, Math.min(100, (c[u] - y.min) / (y.max - y.min) * 100));
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("label", { className: `text-sm font-medium ${M}`, children: y.label }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${E}`, children: [
          c[u],
          " ",
          y.unit
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: y.min,
          max: y.max,
          step: y.step || 0.5,
          value: c[u],
          onChange: (Z) => h(u, Number(Z.target.value)),
          className: d,
          style: s($)
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${f}`, children: [
          y.min,
          " ",
          y.unit
        ] }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${f}`, children: [
          y.max,
          " ",
          y.unit
        ] })
      ] }),
      y.note && /* @__PURE__ */ e("p", { className: `text-[11px] ${f}`, children: y.note })
    ] });
  }, v = (u, y) => {
    switch (y.type) {
      case "buttongroup":
        return V(u, y);
      case "slider":
        return C(u, y);
      default:
        return null;
    }
  };
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${P} overflow-hidden shadow-2xl`, children: [
    /* @__PURE__ */ t("div", { className: `px-6 py-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs ${a ? "bg-blue-950/30 border-b border-blue-900/50" : "bg-blue-50 border-b border-blue-100"}`, children: [
      /* @__PURE__ */ e(xe, { className: "w-3.5 h-3.5 text-blue-500 flex-shrink-0" }),
      /* @__PURE__ */ e("span", { className: "font-bold uppercase tracking-wider text-blue-500", children: "SGS Certified" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: "9H+ Hardness" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: "3-4+ yr Durability" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: [
        c.washReductionPct || 60,
        "% Wash Reduction"
      ] }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: "font-bold text-green-600", children: [
        "All-in: +",
        ue(l.fullSavingsPerVehicle || 0),
        "/vehicle"
      ] }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: `font-semibold ${a ? "text-slate-400" : "text-slate-500"}`, children: [
        "Direct: +",
        ue(l.directSavingsPerVehicle || 0),
        "/vehicle"
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: `grid grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-7 border-b ${P} ${T}`, children: [
      /* @__PURE__ */ e(F, {}),
      /* @__PURE__ */ e(G, {}),
      /* @__PURE__ */ e(B, {}),
      /* @__PURE__ */ e(re, {})
    ] }),
    /* @__PURE__ */ t("div", { className: `px-8 py-2.5 flex items-center justify-between border-b ${P} ${a ? "bg-neutral-900/80" : "bg-blue-50/60"}`, children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5 flex-wrap text-[10px]", children: [
        /* @__PURE__ */ e($e, { className: `w-3 h-3 flex-shrink-0 ${a ? "text-blue-400" : "text-blue-600"}` }),
        /* @__PURE__ */ e("span", { className: `font-bold uppercase tracking-wider ${a ? "text-blue-400" : "text-blue-600"}`, children: "Verified Data" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: "₹5,000 fixed (brochure)" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: "35 ml/vehicle (TDS)" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: "SGS · 9H+ · 3–4+ yr" })
      ] }),
      /* @__PURE__ */ t(
        "button",
        {
          onClick: S,
          className: `flex items-center gap-1.5 text-[10px] font-semibold px-3 py-1.5 rounded-lg border transition-colors flex-shrink-0 ${a ? "text-neutral-400 border-neutral-700 hover:bg-neutral-800 hover:text-neutral-200" : "text-neutral-500 border-neutral-200 hover:bg-white hover:text-neutral-700"}`,
          children: [
            /* @__PURE__ */ e(Fa, { className: "w-3 h-3" }),
            "Reset"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: `grid grid-cols-1 lg:grid-cols-12 ${T}`, children: [
      /* @__PURE__ */ t("div", { className: `lg:col-span-5 p-8 border-b lg:border-b-0 lg:border-r ${P} flex flex-col gap-6`, children: [
        /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-wider ${f}`, children: "Per-Vehicle Annual Cost Breakdown" }),
        /* @__PURE__ */ t("div", { className: "space-y-2", children: [
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border ${a ? "border-red-800/30 bg-red-900/10" : "border-red-100 bg-red-50"}`, children: [
            /* @__PURE__ */ e("p", { className: "text-xs font-bold uppercase tracking-widest text-red-500 mb-2", children: "Competitor (annual effective cost)" }),
            /* @__PURE__ */ t("p", { className: "text-2xl font-display font-medium text-red-600", children: [
              ue(l.competitorAnnualEffective || 0),
              /* @__PURE__ */ e("span", { className: "text-sm font-normal text-red-400 ml-1", children: "/vehicle/yr" })
            ] }),
            /* @__PURE__ */ e("div", { className: "space-y-0.5 mt-2", children: [
              [`Coating (${ue(c.competitorCost || 15e3)} / ${c.competitorDurability || 1.5} yr)`, l.competitorCostAmortized],
              ["Washing (full frequency)", c.annualWashCostPerVehicle],
              ["Paint correction (amortised)", l.paintCorrectionPerYear]
            ].map(([u, y]) => /* @__PURE__ */ t("div", { className: "flex justify-between text-xs", children: [
              /* @__PURE__ */ e("span", { className: "text-red-400", children: u }),
              /* @__PURE__ */ e("span", { className: "font-mono text-red-500", children: ue(y || 0) })
            ] }, u)) })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 px-1", children: [
            /* @__PURE__ */ e("div", { className: `flex-1 h-px ${a ? "bg-neutral-700" : "bg-neutral-200"}` }),
            /* @__PURE__ */ e("span", { className: `text-[10px] uppercase font-bold ${f}`, children: "vs" }),
            /* @__PURE__ */ e("div", { className: `flex-1 h-px ${a ? "bg-neutral-700" : "bg-neutral-200"}` })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border-2 ${a ? "border-blue-700 bg-blue-900/10" : "border-blue-300 bg-blue-50"}`, children: [
            /* @__PURE__ */ e("p", { className: "text-xs font-bold uppercase tracking-widest text-blue-600 mb-2", children: "Ceraphene (annual effective cost)" }),
            /* @__PURE__ */ t("p", { className: "text-2xl font-display font-medium text-blue-700", children: [
              ue(l.cerapheneAnnualEffective || 0),
              /* @__PURE__ */ e("span", { className: "text-sm font-normal text-blue-400 ml-1", children: "/vehicle/yr" })
            ] }),
            /* @__PURE__ */ e("div", { className: "space-y-0.5 mt-2", children: [
              [`Coating (₹${(l.ceraphenePrice || 5e3).toLocaleString()} / ${c.cerapheneDurability || 3.5} yr)`, l.cerapheneCoatAmortized],
              [`Washing (−${c.washReductionPct || 60}%)`, l.annualWashWithCoating],
              ["Paint correction", 0]
            ].map(([u, y]) => /* @__PURE__ */ t("div", { className: "flex justify-between text-xs", children: [
              /* @__PURE__ */ e("span", { className: "text-blue-400", children: u }),
              /* @__PURE__ */ e("span", { className: "font-mono text-blue-500", children: y === 0 ? "—" : ue(y) })
            ] }, u)) })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl px-4 py-3 border-2 ${a ? "border-green-700 bg-green-900/10" : "border-green-300 bg-green-50"} flex items-center justify-between`, children: [
            /* @__PURE__ */ e("p", { className: "text-xs font-bold uppercase tracking-widest text-green-600", children: "Annual saving per vehicle" }),
            /* @__PURE__ */ t("p", { className: "text-xl font-display font-medium text-green-700", children: [
              ue(l.annualSavingsPerVehicle || 0),
              /* @__PURE__ */ e("span", { className: "text-sm font-normal text-green-500 ml-0.5", children: "/yr" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: `rounded-xl border-2 overflow-hidden ${a ? "border-blue-800 bg-blue-950/20" : "border-blue-200 bg-white"}`, children: [
          /* @__PURE__ */ t("div", { className: `px-4 py-2 flex items-center justify-between ${a ? "bg-blue-900/40 border-b border-blue-800/50" : "bg-blue-50 border-b border-blue-100"}`, children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-widest text-blue-600", children: "Ceraphene Application" }),
            /* @__PURE__ */ t("span", { className: `text-[9px] font-bold px-2 py-0.5 rounded-full ${a ? "bg-blue-800/70 text-blue-300" : "bg-blue-200 text-blue-700"}`, children: [
              l.productMlPerVehicle || 35,
              " ml / vehicle"
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `grid grid-cols-2 divide-x ${a ? "divide-blue-800/40" : "divide-blue-100"}`, children: [
            /* @__PURE__ */ t("div", { className: "p-4", children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider mb-1.5 ${a ? "text-blue-400" : "text-blue-500"}`, children: "Volume Needed" }),
              /* @__PURE__ */ t("p", { className: `text-2xl font-display font-bold tabular-nums leading-none ${a ? "text-blue-200" : "text-blue-800"}`, children: [
                (l.productMlTotal || 0).toLocaleString("en-IN"),
                /* @__PURE__ */ e("span", { className: `text-sm font-normal ml-1 ${a ? "text-blue-400" : "text-blue-500"}`, children: "ml" })
              ] }),
              /* @__PURE__ */ t("p", { className: `text-[10px] mt-1.5 font-mono ${a ? "text-blue-500" : "text-blue-400"}`, children: [
                l.productMlPerVehicle || 35,
                " ml × ",
                (c.vehicleCount || 1).toLocaleString(),
                " vehicles"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "p-4", children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider mb-1.5 ${a ? "text-blue-400" : "text-blue-500"}`, children: "Additive Cost" }),
              /* @__PURE__ */ e("p", { className: `text-2xl font-display font-bold tabular-nums leading-none ${a ? "text-blue-200" : "text-blue-800"}`, children: se(l.cerapheneProductCostTotal || 0) }),
              /* @__PURE__ */ t("p", { className: `text-[10px] mt-1.5 font-mono ${a ? "text-blue-500" : "text-blue-400"}`, children: [
                "₹",
                (l.cerapheneProductCostPerVehicle || 2500).toLocaleString(),
                "/vehicle × ",
                (c.vehicleCount || 1).toLocaleString()
              ] }),
              /* @__PURE__ */ t("div", { className: `flex items-center justify-between mt-2 pt-1.5 border-t ${a ? "border-blue-800/40" : "border-blue-100"}`, children: [
                /* @__PURE__ */ e("span", { className: `text-[10px] ${a ? "text-blue-500" : "text-blue-400"}`, children: "+ Installation" }),
                /* @__PURE__ */ e("span", { className: `text-[10px] font-mono font-semibold ${a ? "text-blue-400" : "text-blue-600"}`, children: se(l.cerapheneServiceCostTotal || 0) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: `px-4 py-2 ${a ? "bg-blue-900/20 border-t border-blue-800/30" : "bg-blue-50/80 border-t border-blue-100"}`, children: /* @__PURE__ */ t("p", { className: `text-[10px] ${a ? "text-blue-500" : "text-blue-400"}`, children: [
            "Total: ₹",
            (l.ceraphenePrice || 5e3).toLocaleString(),
            "/vehicle · vs. ₹",
            (c.competitorCost || 15e3).toLocaleString(),
            " competitor · ",
            l.directSavingsPct,
            "% cheaper"
          ] }) })
        ] }),
        /* @__PURE__ */ t("div", { className: `rounded-xl border ${P} ${a ? "bg-neutral-800/30" : "bg-neutral-50"} p-5 mt-auto`, children: [
          /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-wider ${f} mb-4`, children: [
            "Project Total · ",
            (c.vehicleCount || 0).toLocaleString(),
            " vehicles"
          ] }),
          /* @__PURE__ */ t("div", { className: "space-y-2", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ e("span", { className: `text-sm ${f}`, children: "Ceraphene investment" }),
              /* @__PURE__ */ e("span", { className: `text-sm font-mono font-semibold ${a ? "text-neutral-300" : "text-neutral-600"}`, children: se(l.investmentTotal || 0) })
            ] }),
            /* @__PURE__ */ t("div", { className: `pt-2 border-t ${P} space-y-1.5`, children: [
              /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ t("span", { className: `text-xs ${f}`, children: [
                  "Direct savings ",
                  /* @__PURE__ */ e("span", { className: "opacity-60", children: "(upfront)" })
                ] }),
                /* @__PURE__ */ t("span", { className: `text-sm font-mono font-semibold ${a ? "text-slate-300" : "text-slate-600"}`, children: [
                  "+",
                  se(l.directSavingsTotal || 0)
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ t("span", { className: `text-sm font-bold ${M}`, children: [
                  "Full savings over ",
                  c.analysisPeriod || 4,
                  " yr"
                ] }),
                /* @__PURE__ */ t("span", { className: `text-xl font-bold font-mono ${a ? "text-green-400" : "text-green-700"}`, children: [
                  "+",
                  se(l.fullSavingsTotal || 0)
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: `lg:col-span-7 ${R} p-8 flex flex-col gap-6`, children: [
        /* @__PURE__ */ e("div", { className: `grid grid-cols-4 gap-0 rounded-xl overflow-hidden border ${P}`, children: [
          {
            label: "Payback",
            value: l.paybackLabel || "—",
            color: a ? "text-blue-400" : "text-blue-700",
            bg: a ? "bg-blue-900/20" : "bg-blue-50"
          },
          {
            label: "Fleet Savings",
            value: se(l.fullSavingsTotal || 0),
            color: a ? "text-green-400" : "text-green-700",
            bg: a ? "bg-green-900/20" : "bg-green-50"
          },
          {
            label: "Washes/yr",
            value: `−${l.annualWashesSaved || 0}/veh`,
            color: a ? "text-blue-400" : "text-blue-700",
            bg: a ? "bg-blue-900/20" : "bg-blue-50"
          },
          {
            label: "Water Saved",
            value: `${((l.waterSavedTotal || 0) / 1e3).toFixed(1)}kL/yr`,
            color: a ? "text-teal-400" : "text-teal-700",
            bg: a ? "bg-teal-900/20" : "bg-teal-50"
          }
        ].map(({ label: u, value: y, color: $, bg: Z }, pe) => /* @__PURE__ */ t("div", { className: `${Z} py-2.5 px-2 text-center ${pe < 3 ? `border-r ${P}` : ""}`, children: [
          /* @__PURE__ */ e("p", { className: `text-[8px] font-bold uppercase tracking-wider ${f} mb-0.5`, children: u }),
          /* @__PURE__ */ e("p", { className: `text-[11px] font-bold font-mono leading-tight ${$}`, children: y })
        ] }, u)) }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${f} mb-3`, children: "Annual effective cost per vehicle — comparison" }),
          /* @__PURE__ */ e("div", { className: "h-48", children: /* @__PURE__ */ e(Q, { width: "100%", height: "100%", children: /* @__PURE__ */ t(_e, { data: j, margin: { top: 20, right: 8, bottom: 0, left: -10 }, barSize: 52, children: [
            /* @__PURE__ */ e(ee, { strokeDasharray: "3 3", stroke: a ? "#2a2a2a" : "#f1f5f9", vertical: !1 }),
            /* @__PURE__ */ e(te, { dataKey: "name", tick: { fontSize: 10, fill: a ? "#9ca3af" : "#64748b" }, tickLine: !1, axisLine: !1 }),
            /* @__PURE__ */ e(
              ae,
              {
                domain: W,
                tickFormatter: (u) => `₹${(u / 1e3).toFixed(0)}k`,
                tick: { fontSize: 10, fill: a ? "#9ca3af" : "#64748b" },
                tickLine: !1,
                axisLine: !1
              }
            ),
            /* @__PURE__ */ e(J, { content: /* @__PURE__ */ e(nl, {}) }),
            /* @__PURE__ */ t(Se, { dataKey: "cost", radius: [6, 6, 0, 0], children: [
              j.map((u, y) => /* @__PURE__ */ e(ut, { fill: u.fill }, y)),
              /* @__PURE__ */ e(
                za,
                {
                  dataKey: "cost",
                  position: "top",
                  formatter: (u) => `₹${(u / 1e3).toFixed(1)}k`,
                  style: { fontSize: 10, fontWeight: 700, fill: a ? "#e5e7eb" : "#374151" }
                }
              )
            ] })
          ] }) }) }),
          /* @__PURE__ */ t("p", { className: `text-[11px] text-center mt-1 ${f}`, children: [
            "Gap between blue bar and red bar = annual saving per vehicle (₹",
            (l.annualSavingsPerVehicle || 0).toLocaleString("en-IN"),
            "/yr)"
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ t("div", { className: `p-5 rounded-2xl border-2 ${a ? "border-blue-700 bg-blue-900/10" : "border-blue-300 bg-blue-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ e("p", { className: "text-xs font-bold uppercase tracking-widest text-blue-600", children: l.fullLabel || "Full Ownership Savings" }),
              /* @__PURE__ */ e("span", { className: `text-[9px] font-bold px-1.5 py-0.5 rounded ${a ? "bg-neutral-700 text-neutral-300" : "bg-neutral-900 text-white"}`, children: "ALL-IN" })
            ] }),
            /* @__PURE__ */ e("p", { className: "text-3xl font-display font-medium tabular-nums text-blue-700", children: se(l.fullSavingsTotal || 0) }),
            /* @__PURE__ */ t("p", { className: "text-xs mt-1.5 text-blue-600", children: [
              ue(l.fullSavingsPerVehicle || 0),
              "/vehicle · coating + wash + correction saved"
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-5 rounded-2xl border ${a ? "border-slate-700 bg-slate-800/30" : "border-slate-200 bg-slate-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${a ? "text-slate-400" : "text-slate-500"}`, children: l.directLabel || "Direct Savings" }),
              /* @__PURE__ */ e("span", { className: `text-[9px] font-bold px-1.5 py-0.5 rounded ${a ? "bg-slate-700 text-slate-300" : "bg-slate-200 text-slate-600"}`, children: "BROCHURE" })
            ] }),
            /* @__PURE__ */ e("p", { className: `text-3xl font-display font-medium tabular-nums ${a ? "text-slate-200" : "text-slate-700"}`, children: se(l.directSavingsTotal || 0) }),
            /* @__PURE__ */ t("p", { className: `text-xs mt-1.5 ${a ? "text-slate-500" : "text-slate-400"}`, children: [
              ue(l.directSavingsPerVehicle || 0),
              "/vehicle · upfront price difference only"
            ] }),
            /* @__PURE__ */ t("p", { className: "text-[10px] font-semibold text-blue-500 mt-2", children: [
              "✦ ",
              l.directSavingsPct,
              "% cheaper than competitor per application"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${P} ${a ? "bg-neutral-800/50" : "bg-white"} flex items-center gap-4`, children: [
            /* @__PURE__ */ e(z, { className: "w-5 h-5 text-blue-500 flex-shrink-0" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${f}`, children: "ROI on Investment" }),
              /* @__PURE__ */ e("p", { className: `text-2xl font-display font-medium tabular-nums ${M}`, children: l.roiPercentage != null ? `${l.roiPercentage}%` : "—" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${P} ${a ? "bg-neutral-800/50" : "bg-white"} flex items-center gap-4`, children: [
            /* @__PURE__ */ e(I, { className: "w-5 h-5 text-green-500 flex-shrink-0" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${f}`, children: "Payback" }),
              /* @__PURE__ */ e("p", { className: "text-base font-display font-medium text-green-600", children: l.paybackLabel || "—" })
            ] })
          ] })
        ] }),
        l.roiMultiple != null && /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${a ? "border-blue-700 bg-blue-900/10" : "border-blue-200 bg-blue-50"} flex items-center gap-4`, children: [
          /* @__PURE__ */ e(z, { className: "w-5 h-5 text-blue-500 flex-shrink-0" }),
          /* @__PURE__ */ t("div", { className: "flex-1", children: [
            /* @__PURE__ */ t("p", { className: `text-[10px] font-bold uppercase tracking-wider ${a ? "text-blue-400" : "text-blue-600"}`, children: [
              c.analysisPeriod || 4,
              "-yr Return Multiple"
            ] }),
            /* @__PURE__ */ t("p", { className: `text-2xl font-display font-medium tabular-nums ${a ? "text-blue-300" : "text-blue-700"}`, children: [
              l.roiMultiple,
              "×"
            ] }),
            /* @__PURE__ */ e("p", { className: `text-[9px] mt-0.5 ${a ? "text-blue-500" : "text-blue-400"}`, children: "full savings ÷ Ceraphene investment" })
          ] }),
          /* @__PURE__ */ t("div", { className: "text-right flex-shrink-0", children: [
            /* @__PURE__ */ e("p", { className: `text-[9px] font-bold uppercase tracking-wider ${f} mb-0.5`, children: "Fleet Savings" }),
            /* @__PURE__ */ e("p", { className: `text-lg font-bold font-mono ${a ? "text-blue-300" : "text-blue-700"}`, children: se(l.fullSavingsTotal || 0) })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border ${P} ${a ? "bg-neutral-800/30" : "bg-white"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${f} mb-1`, children: "Investment" }),
            /* @__PURE__ */ e("p", { className: `text-sm font-bold tabular-nums ${M}`, children: se(l.investmentTotal || 0) }),
            /* @__PURE__ */ t("p", { className: `text-[10px] ${f}`, children: [
              "₹",
              (l.ceraphenePrice || 5e3).toLocaleString(),
              " × ",
              (c.vehicleCount || 1).toLocaleString()
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border border-blue-500/25 ${a ? "bg-blue-900/10" : "bg-blue-50"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-blue-600/70 mb-1", children: "Washes Saved" }),
            /* @__PURE__ */ t("p", { className: "text-sm font-bold text-blue-600 tabular-nums", children: [
              (l.annualWashesSaved || 0).toLocaleString(),
              /* @__PURE__ */ e("span", { className: "text-[10px] font-normal ml-0.5", children: "/vehicle/yr" })
            ] }),
            /* @__PURE__ */ t("p", { className: "text-[10px] text-blue-500/60", children: [
              l.annualWashesWith || 0,
              " remaining"
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border border-teal-500/25 ${a ? "bg-teal-900/10" : "bg-teal-50"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-teal-600/70 mb-1", children: "Water Saved" }),
            /* @__PURE__ */ t("p", { className: "text-sm font-bold text-teal-600 tabular-nums", children: [
              ((l.waterSavedTotal || 0) / 1e3).toFixed(1),
              /* @__PURE__ */ e("span", { className: "text-[10px] font-normal ml-0.5", children: "kL/yr" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: `flex-grow border ${P} rounded-2xl ${a ? "bg-neutral-800/50" : "bg-white"} p-5`, children: [
          /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-widest ${f} mb-3`, children: [
            "Cumulative Savings — ",
            c.analysisPeriod || 4,
            "-Year Outlook"
          ] }),
          O.length > 0 && /* @__PURE__ */ e("div", { className: "h-28", children: /* @__PURE__ */ e(Q, { width: "100%", height: "100%", children: /* @__PURE__ */ t(Xt, { data: O, margin: { top: 4, right: 12, bottom: 4, left: -18 }, children: [
            /* @__PURE__ */ e(ee, { strokeDasharray: "3 3", stroke: a ? "#2a2a2a" : "#f1f5f9", vertical: !1 }),
            /* @__PURE__ */ e(te, { dataKey: "year", stroke: a ? "#525252" : "#94a3b8", fontSize: 10, tickLine: !1, axisLine: !1, tickMargin: 6, tickFormatter: (u) => `Yr ${u}` }),
            /* @__PURE__ */ e(ae, { stroke: a ? "#525252" : "#94a3b8", fontSize: 10, tickLine: !1, axisLine: !1, tickMargin: 6, tickFormatter: se }),
            /* @__PURE__ */ e(Le, { y: 0, stroke: a ? "#555" : "#cbd5e1", strokeDasharray: "4 2" }),
            /* @__PURE__ */ e(
              J,
              {
                contentStyle: { backgroundColor: a ? "#171717" : "#fff", border: `1px solid ${a ? "#404040" : "#e2e8f0"}`, borderRadius: "8px", fontSize: "11px", color: a ? "#fff" : "#111" },
                formatter: (u) => [se(u), "Cumulative"],
                labelFormatter: (u) => u === 0 ? "At purchase (immediate)" : `Year ${u}`
              }
            ),
            /* @__PURE__ */ e(ne, { type: "monotone", dataKey: "cumulative", stroke: "#3b82f6", strokeWidth: 2.5, dot: { fill: "#3b82f6", r: 3, strokeWidth: 0 }, activeDot: { r: 5, strokeWidth: 0 } })
          ] }) }) }),
          /* @__PURE__ */ e("p", { className: `text-[10px] ${f} mt-2`, children: "Yr 0 = immediate upfront savings at purchase. Annual wash + durability savings accumulate each year." })
        ] }),
        (l.fullSavingsTotal || 0) > 0 && /* @__PURE__ */ t("div", { className: `rounded-2xl p-6 flex items-center justify-between ${a ? "bg-neutral-800 border border-neutral-700" : "bg-neutral-900"}`, children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ t("p", { className: "text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1", children: [
              c.analysisPeriod || 4,
              "-yr fleet total · ",
              (c.vehicleCount || 1).toLocaleString(),
              " vehicles"
            ] }),
            /* @__PURE__ */ e("p", { className: "text-3xl font-display font-medium text-white", children: se(l.fullSavingsTotal || 0) }),
            /* @__PURE__ */ t("p", { className: "text-[10px] text-neutral-500 mt-1", children: [
              ue(l.annualSavingsPerVehicle || 0),
              "/vehicle/yr × ",
              c.analysisPeriod || 4,
              " yr × ",
              (c.vehicleCount || 1).toLocaleString(),
              " vehicles"
            ] })
          ] }),
          l.roiMultiple && /* @__PURE__ */ t("div", { className: "text-right flex-shrink-0 ml-6", children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1", children: "Return Multiple" }),
            /* @__PURE__ */ t("p", { className: "text-4xl font-display font-bold text-blue-400", children: [
              l.roiMultiple,
              "×"
            ] }),
            /* @__PURE__ */ e("p", { className: "text-[10px] text-neutral-500 mt-1", children: "on Ceraphene spend" })
          ] })
        ] }),
        /* @__PURE__ */ t("p", { className: `text-[10px] leading-relaxed flex items-start gap-1.5 ${f}`, children: [
          /* @__PURE__ */ e(ot, { className: "w-3 h-3 flex-shrink-0 mt-0.5 opacity-60" }),
          "Competitor durability is an estimate — validate with your supplier. Paint correction savings assume periodic professional correction for uncoated vehicles. Wash cost and frequency vary by usage."
        ] })
      ] })
    ] }),
    n && /* @__PURE__ */ t("div", { className: `border-t ${P} ${T}`, children: [
      /* @__PURE__ */ t(
        "button",
        {
          onClick: () => N((u) => !u),
          className: `w-full px-8 py-4 flex items-center justify-between text-sm font-medium ${M} transition-colors ${a ? "hover:bg-neutral-800/60" : "hover:bg-neutral-50"}`,
          children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3 flex-wrap", children: [
              /* @__PURE__ */ e("span", { children: "Advanced Parameters" }),
              /* @__PURE__ */ e("span", { className: `text-xs px-1.5 py-0.5 rounded font-medium ${a ? "bg-neutral-700 text-neutral-400" : "bg-neutral-100 text-neutral-500"}`, children: "Estimates" })
            ] }),
            /* @__PURE__ */ e(Zt, { className: `w-4 h-4 flex-shrink-0 transition-transform duration-200 ${f} ${w ? "rotate-180" : ""}` })
          ]
        }
      ),
      /* @__PURE__ */ e(de, { initial: !1, children: w && /* @__PURE__ */ e(
        D.div,
        {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.22, ease: "easeInOut" },
          className: "overflow-hidden",
          children: /* @__PURE__ */ t("div", { className: `px-8 pb-10 pt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 ${R}`, children: [
            /* @__PURE__ */ t("div", { className: "space-y-5", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-wider ${f}`, children: "Durability & Period Settings" }),
              Object.entries(n).map(([u, y]) => {
                const $ = v(u, y);
                return $ ? /* @__PURE__ */ e("div", { children: $ }, u) : null;
              })
            ] }),
            /* @__PURE__ */ t("div", { className: "space-y-3", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-wider ${f}`, children: "Fleet Impact Summary" }),
              [
                { label: "Washes eliminated (per vehicle/yr)", value: `${l.annualWashesSaved || 0} washes`, color: "text-blue-600" },
                { label: "Water saved (per vehicle/yr)", value: `${(l.waterSavedLitresPerVehicle || 0).toLocaleString()} L`, color: "text-teal-600" },
                { label: "Paint correction eliminated", value: `₹${(l.paintCorrectionPerYear || 0).toLocaleString()}/vehicle/yr`, color: "text-green-600" },
                { label: "Hardness rating", value: "9H+ (SGS Certified)", color: "text-blue-500" }
              ].map(({ label: u, value: y, color: $ }) => /* @__PURE__ */ t("div", { className: `flex items-center justify-between px-4 py-3 rounded-xl border ${P} ${a ? "bg-neutral-800/30" : "bg-white"}`, children: [
                /* @__PURE__ */ e("span", { className: `text-sm ${M}`, children: u }),
                /* @__PURE__ */ e("span", { className: `text-sm font-semibold font-mono ${$}`, children: y })
              ] }, u))
            ] })
          ] })
        },
        "sec"
      ) })
    ] })
  ] });
}, sl = (r) => {
  const i = 10 * Math.pow(10, Number(r) / 100 * 3);
  return i < 50 ? Math.max(10, Math.round(i / 5) * 5) : i < 200 ? Math.round(i / 10) * 10 : i < 1e3 ? Math.round(i / 50) * 50 : i < 5e3 ? Math.round(i / 500) * 500 : Math.round(i / 1e3) * 1e3;
}, Tr = (r) => Math.round(Math.log10(Math.max(10, Math.min(1e4, r)) / 10) / 3 * 100), ol = [
  { v: 10, num: "10", label: ["Lab", "scale"] },
  { v: 100, num: "100", label: ["Small", "plant"] },
  { v: 500, num: "500", label: ["Medium", "plant"] },
  { v: 2e3, num: "2k", label: ["Large", "plant"] },
  { v: 1e4, num: "10k", label: ["National", "scale"] }
], cl = (r) => r <= 50 ? "Lab-scale or pilot facility" : r <= 200 ? "Small compounder or R&D plant" : r <= 1e3 ? "Medium-scale polymer manufacturing" : r <= 5e3 ? "Large polymer processing plant" : "National-scale polymer producer", _ = (r) => {
  const i = Math.abs(r ?? 0), n = (r ?? 0) < 0 ? "−" : "";
  return i >= 1e7 ? `${n}₹${(i / 1e7).toFixed(1)} Cr` : i >= 1e5 ? `${n}₹${(i / 1e5).toFixed(1)} L` : i >= 1e3 ? `${n}₹${Math.round(i / 1e3)}k` : `${n}₹${Math.round(i)}`;
}, oe = (r) => `${(r ?? 0) < 0 ? "−" : ""}₹${Math.abs(Math.round(r ?? 0)).toLocaleString("en-IN")}`, dl = ({ active: r, payload: i, label: n }) => !r || !i?.length ? null : /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-xl p-3 shadow-lg text-sm", children: [
  /* @__PURE__ */ e("p", { className: "font-bold text-neutral-800 mb-0.5", children: n }),
  /* @__PURE__ */ t("p", { className: "text-neutral-600", children: [
    "₹",
    i[0].value?.toLocaleString("en-IN")
  ] })
] }), ml = ({
  calculations: r,
  defaultInputs: i,
  secondaryInputs: n,
  theme: o = "light"
}) => {
  const a = o === "dark", s = (v) => ({
    background: `linear-gradient(to right, #059669 ${v.toFixed(1)}%, ${a ? "#374151" : "#e5e7eb"} ${v.toFixed(1)}%)`
  }), d = "w-full h-2 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-emerald-600 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-emerald-600 [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-pointer", m = { ...i, ...n || {} }, p = Object.keys(m).reduce((v, u) => {
    const y = m[u];
    return v[u] = y.default !== void 0 ? y.default : y.min != null ? y.min : y.options?.[0]?.value, v;
  }, {}), [c, g] = A(p), [b, x] = A(String(p.annualProduction || 500)), [w, N] = A(!1), h = (v, u) => g((y) => ({ ...y, [v]: u })), l = ie(() => r(c), [c, r]), S = () => {
    g(p), x(String(p.annualProduction || 500));
  }, T = a ? "bg-neutral-900" : "bg-white", R = a ? "bg-neutral-950/40" : "bg-neutral-50/60", P = a ? "border-neutral-700" : "border-neutral-200", M = a ? "text-white" : "text-neutral-900", f = a ? "text-neutral-400" : "text-neutral-500", E = a ? "text-emerald-400" : "text-emerald-600", j = ie(() => [
    { name: "Additive Cost", value: l.annualAdditiveCost || 0, fill: "#f87171" },
    { name: "Net Margin", value: Math.max(0, l.netMarginSavingsTotal || 0), fill: "#34d399" },
    { name: "All-In Gain", value: Math.max(0, l.allInSavingsTotal || 0), fill: "#059669" }
  ], [l]), W = ie(() => {
    const v = j.map((u) => u.value).filter(Boolean);
    return v.length ? [0, Math.ceil(Math.max(...v) * 1.18 / 1e4) * 1e4] : [0, 1e5];
  }, [j]), O = ie(() => l.projectionData ? l.projectionData : [], [l]), F = () => {
    const v = c.annualProduction || 500;
    return /* @__PURE__ */ t("div", { className: "space-y-2.5", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${M}`, children: "Annual Production" }),
        /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e(
            "input",
            {
              type: "number",
              value: b,
              min: 10,
              max: 1e4,
              onChange: (u) => {
                x(u.target.value);
                const y = parseInt(u.target.value, 10);
                !isNaN(y) && y >= 10 && y <= 1e4 && h("annualProduction", y);
              },
              onBlur: () => x(String(v)),
              className: `w-20 text-right text-sm font-mono border ${P} rounded px-2 py-1 ${a ? "bg-neutral-800 text-white" : "bg-white text-neutral-900"} focus:outline-none focus:ring-1 focus:ring-emerald-500`
            }
          ),
          /* @__PURE__ */ e("span", { className: `text-sm font-medium ${M}`, children: "tons" })
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: 0,
          max: 100,
          value: Tr(v),
          onChange: (u) => {
            const y = sl(u.target.value);
            h("annualProduction", y), x(String(y));
          },
          className: d,
          style: s(Tr(v))
        }
      ),
      /* @__PURE__ */ e("div", { className: "flex justify-between", children: ol.map(({ v: u, num: y, label: $ }) => /* @__PURE__ */ t("div", { className: "flex flex-col items-center gap-0.5 w-10", children: [
        /* @__PURE__ */ e("span", { className: `text-[10px] font-semibold ${M}`, children: y }),
        $.map((Z, pe) => /* @__PURE__ */ e("span", { className: `text-[9px] ${f} text-center leading-tight`, children: Z }, pe))
      ] }, u)) }),
      /* @__PURE__ */ t("p", { className: `text-[11px] italic ${f}`, children: [
        "≈ ",
        cl(v)
      ] })
    ] });
  }, G = () => {
    const v = i.dosagePercent, u = c.dosagePercent;
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${M}`, children: "Dosage Rate" }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${E}`, children: [
          (u || 0).toFixed(1),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: v.min,
          max: v.max,
          step: v.step || 0.1,
          value: u,
          onChange: (y) => h("dosagePercent", Number(y.target.value)),
          className: d,
          style: s(Math.max(0, Math.min(100, (u - v.min) / (v.max - v.min) * 100)))
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${f}`, children: [
          v.min,
          "%"
        ] }),
        /* @__PURE__ */ e("span", { className: `text-[10px] ${f}`, children: "optimal 0.5–1.5%" }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${f}`, children: [
          v.max,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ t("p", { className: `text-[11px] ${f}`, children: [
        l.dosageKgPerTon ?? ((u || 0.5) / 100 * 1e3).toFixed(1),
        " kg of HD-G-PE per ton polymer"
      ] }),
      l.netMarginPerTon != null && /* @__PURE__ */ t("p", { className: "text-[11px] font-semibold text-emerald-600", children: [
        "→ +",
        oe(l.netMarginPerTon || 0),
        "/ton net · ",
        _(l.netMarginSavingsTotal || 0),
        "/yr project"
      ] })
    ] });
  }, B = () => {
    const v = i.application?.options || [];
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${M} block`, children: "Application Type" }),
      /* @__PURE__ */ e("div", { className: "flex flex-col gap-1.5", children: v.map((u) => /* @__PURE__ */ e(
        "button",
        {
          onClick: () => h("application", u.value),
          className: `px-3 py-1.5 rounded-lg text-sm font-medium border transition-all text-left ${c.application === u.value ? "bg-emerald-600 text-white border-emerald-600" : a ? "text-neutral-400 border-neutral-700 hover:border-neutral-500" : "bg-white text-neutral-600 border-neutral-200 hover:border-emerald-300"}`,
          children: u.label
        },
        u.value
      )) })
    ] });
  }, re = (v, u) => /* @__PURE__ */ t("div", { className: "space-y-2", children: [
    /* @__PURE__ */ e("label", { className: `text-sm font-medium ${M}`, children: u.label }),
    /* @__PURE__ */ e("div", { className: "flex gap-2", children: u.options.map((y) => /* @__PURE__ */ e(
      "button",
      {
        onClick: () => h(v, y.value),
        className: `flex-1 py-1.5 rounded-lg text-sm font-medium border transition-all ${c[v] === y.value ? a ? "bg-white text-neutral-900 border-white" : "bg-neutral-900 text-white border-neutral-900" : a ? "text-neutral-400 border-neutral-700 hover:border-neutral-500" : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"}`,
        children: y.label
      },
      y.value
    )) })
  ] }), V = (v, u) => {
    const y = Math.max(0, Math.min(100, (c[v] - u.min) / (u.max - u.min) * 100));
    return /* @__PURE__ */ t("div", { className: "space-y-2", children: [
      /* @__PURE__ */ t("div", { className: "flex items-baseline justify-between", children: [
        /* @__PURE__ */ e("label", { className: `text-sm font-medium ${M}`, children: u.label }),
        /* @__PURE__ */ t("span", { className: `text-sm font-mono font-bold ${E}`, children: [
          c[v],
          " ",
          u.unit
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          min: u.min,
          max: u.max,
          step: u.step || 0.5,
          value: c[v],
          onChange: ($) => h(v, Number($.target.value)),
          className: d,
          style: s(y)
        }
      ),
      /* @__PURE__ */ t("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ t("span", { className: `text-[10px] ${f}`, children: [
          u.min,
          " ",
          u.unit
        ] }),
        /* @__PURE__ */ t("span", { className: `text-[10px] ${f}`, children: [
          u.max,
          " ",
          u.unit
        ] })
      ] })
    ] });
  }, C = (v, u) => {
    switch (u.type) {
      case "buttongroup":
        return re(v, u);
      case "slider":
        return V(v, u);
      default:
        return V(v, u);
    }
  };
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${P} overflow-hidden shadow-2xl`, children: [
    /* @__PURE__ */ t("div", { className: `px-6 py-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs ${a ? "bg-emerald-950/30 border-b border-emerald-900/50" : "bg-emerald-50 border-b border-emerald-100"}`, children: [
      /* @__PURE__ */ e(Ie, { className: "w-3.5 h-3.5 text-emerald-600 flex-shrink-0" }),
      /* @__PURE__ */ e("span", { className: "font-bold uppercase tracking-wider text-emerald-600", children: "Lab Tested" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: "+30% Tensile Strength" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: "20× Elongation" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: "+20% Lifespan" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-300" : "text-neutral-600", children: "Drop-In Masterbatch" }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: "font-bold text-green-600", children: [
        "Net: ",
        oe(l.netMarginPerTon || 0),
        "/ton"
      ] }),
      /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
      /* @__PURE__ */ t("span", { className: `font-semibold ${a ? "text-slate-400" : "text-slate-500"}`, children: [
        "All-in: ",
        oe(l.allInSavingsPerTon || 0),
        "/ton"
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: `grid grid-cols-1 lg:grid-cols-3 gap-6 px-8 py-7 border-b ${P} ${T}`, children: [
      /* @__PURE__ */ e(F, {}),
      /* @__PURE__ */ e(G, {}),
      /* @__PURE__ */ e(B, {})
    ] }),
    /* @__PURE__ */ t("div", { className: `px-8 py-2.5 flex items-center justify-between border-b ${P} ${a ? "bg-neutral-900/80" : "bg-emerald-50/60"}`, children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2.5 flex-wrap text-[10px]", children: [
        /* @__PURE__ */ e($e, { className: `w-3 h-3 flex-shrink-0 ${a ? "text-emerald-400" : "text-emerald-600"}` }),
        /* @__PURE__ */ e("span", { className: `font-bold uppercase tracking-wider ${a ? "text-emerald-400" : "text-emerald-600"}`, children: "Verified Assumptions" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: "₹1,200/kg masterbatch (TDS)" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: "₹100/kg HDPE baseline" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-600" : "text-neutral-300", children: "·" }),
        /* @__PURE__ */ e("span", { className: a ? "text-neutral-400" : "text-neutral-600", children: "+30% tensile · 20× elongation · −60% defects" })
      ] }),
      /* @__PURE__ */ t(
        "button",
        {
          onClick: S,
          className: `flex items-center gap-1.5 text-[10px] font-semibold px-3 py-1.5 rounded-lg border transition-colors flex-shrink-0 ${a ? "text-neutral-400 border-neutral-700 hover:bg-neutral-800 hover:text-neutral-200" : "text-neutral-500 border-neutral-200 hover:bg-white hover:text-neutral-700"}`,
          children: [
            /* @__PURE__ */ e(Fa, { className: "w-3 h-3" }),
            "Reset"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: `grid grid-cols-1 lg:grid-cols-12 ${T}`, children: [
      /* @__PURE__ */ t("div", { className: `lg:col-span-5 p-8 border-b lg:border-b-0 lg:border-r ${P} flex flex-col gap-6`, children: [
        /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-wider ${f}`, children: [
          "Per-Ton Economics · ",
          l.appLabel || "Pipes & Fittings"
        ] }),
        /* @__PURE__ */ t("div", { className: "space-y-2", children: [
          /* @__PURE__ */ t("div", { className: `rounded-xl border-2 overflow-hidden ${a ? "border-emerald-800 bg-emerald-950/20" : "border-emerald-200 bg-white"}`, children: [
            /* @__PURE__ */ t("div", { className: `px-4 py-2 flex items-center justify-between ${a ? "bg-emerald-900/40 border-b border-emerald-800/50" : "bg-emerald-50 border-b border-emerald-100"}`, children: [
              /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-widest text-emerald-600", children: "Masterbatch Requirement" }),
              /* @__PURE__ */ t("span", { className: `text-[9px] font-bold px-2 py-0.5 rounded-full ${a ? "bg-emerald-800/70 text-emerald-300" : "bg-emerald-200 text-emerald-700"}`, children: [
                l.dosageKgPerTon ?? ((c.dosagePercent || 0.5) / 100 * 1e3).toFixed(1),
                " kg/ton @ ",
                (c.dosagePercent || 0.5).toFixed(1),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `grid grid-cols-2 divide-x ${a ? "divide-emerald-800/40" : "divide-emerald-100"}`, children: [
              /* @__PURE__ */ t("div", { className: "p-4", children: [
                /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider mb-1.5 ${a ? "text-emerald-400" : "text-emerald-600"}`, children: "Annual Volume" }),
                /* @__PURE__ */ t("p", { className: `text-2xl font-display font-bold tabular-nums leading-none ${a ? "text-emerald-200" : "text-emerald-800"}`, children: [
                  (l.annualAdditiveKg || 0).toLocaleString("en-IN"),
                  /* @__PURE__ */ e("span", { className: `text-sm font-normal ml-1 ${a ? "text-emerald-400" : "text-emerald-600"}`, children: "kg" })
                ] }),
                /* @__PURE__ */ t("p", { className: "text-[10px] mt-1.5 font-mono text-emerald-500", children: [
                  l.dosageKgPerTon ?? ((c.dosagePercent || 0.5) / 100 * 1e3).toFixed(1),
                  " kg × ",
                  (c.annualProduction || 0).toLocaleString(),
                  " tons"
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "p-4", children: [
                /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider mb-1.5 ${a ? "text-red-400" : "text-red-500"}`, children: "Annual Spend" }),
                /* @__PURE__ */ e("p", { className: `text-2xl font-display font-bold tabular-nums leading-none ${a ? "text-red-300" : "text-red-700"}`, children: _(l.annualAdditiveCost || 0) }),
                /* @__PURE__ */ t("p", { className: `text-[10px] mt-1.5 font-mono ${a ? "text-red-500" : "text-red-400"}`, children: [
                  "₹",
                  (l.masterbatchPricePerKg || 1200).toLocaleString("en-IN"),
                  "/kg × ",
                  (l.annualAdditiveKg || 0).toLocaleString("en-IN"),
                  " kg"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e("div", { className: `px-4 py-2 ${a ? "bg-emerald-900/20 border-t border-emerald-800/30" : "bg-emerald-50/80 border-t border-emerald-100"}`, children: /* @__PURE__ */ t("p", { className: "text-[10px] text-emerald-500", children: [
              "₹",
              (l.additiveCostPerTon || 0).toLocaleString("en-IN"),
              "/ton · ",
              l.dosageKgPerTon ?? ((c.dosagePercent || 0.5) / 100 * 1e3).toFixed(1),
              " kg/ton @ ₹",
              (l.masterbatchPricePerKg || 1200).toLocaleString("en-IN"),
              "/kg"
            ] }) })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 px-1", children: [
            /* @__PURE__ */ e("div", { className: `flex-1 h-px ${a ? "bg-neutral-700" : "bg-neutral-200"}` }),
            /* @__PURE__ */ e("span", { className: `text-[10px] uppercase font-bold ${f}`, children: "vs" }),
            /* @__PURE__ */ e("div", { className: `flex-1 h-px ${a ? "bg-neutral-700" : "bg-neutral-200"}` })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl p-4 border-2 ${a ? "border-emerald-700 bg-emerald-900/10" : "border-emerald-300 bg-emerald-50"}`, children: [
            /* @__PURE__ */ t("p", { className: "text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2", children: [
              "Gross Benefit — ",
              l.appLabel || "Pipes & Fittings"
            ] }),
            /* @__PURE__ */ t("p", { className: "text-2xl font-display font-medium text-emerald-700", children: [
              oe(l.grossBenefitPerTon || 0),
              /* @__PURE__ */ e("span", { className: "text-sm font-normal text-emerald-500 ml-1", children: "/ton" })
            ] }),
            /* @__PURE__ */ t("div", { className: "space-y-0.5 mt-2", children: [
              l.premiumPerTon > 0 && /* @__PURE__ */ t("div", { className: "flex justify-between text-xs", children: [
                /* @__PURE__ */ e("span", { className: "text-emerald-500", children: "Selling premium" }),
                /* @__PURE__ */ t("span", { className: "font-mono text-emerald-600", children: [
                  "+",
                  oe(l.premiumPerTon)
                ] })
              ] }),
              l.downgaugeSavingsPerTon > 0 && /* @__PURE__ */ t("div", { className: "flex justify-between text-xs", children: [
                /* @__PURE__ */ e("span", { className: "text-emerald-500", children: "Material savings (downgauge)" }),
                /* @__PURE__ */ t("span", { className: "font-mono text-emerald-600", children: [
                  "+",
                  oe(l.downgaugeSavingsPerTon)
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl px-4 py-3 border-2 flex items-center justify-between ${(l.netMarginPerTon || 0) >= 0 ? a ? "border-green-700 bg-green-900/10" : "border-green-300 bg-green-50" : a ? "border-amber-700 bg-amber-900/10" : "border-amber-200 bg-amber-50"}`, children: [
            /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${(l.netMarginPerTon || 0) >= 0 ? "text-green-600" : "text-amber-600"}`, children: "Net margin per ton" }),
            /* @__PURE__ */ t("p", { className: `text-xl font-display font-medium ${(l.netMarginPerTon || 0) >= 0 ? "text-green-700" : "text-amber-600"}`, children: [
              (l.netMarginPerTon || 0) >= 0 ? "+" : "",
              oe(l.netMarginPerTon || 0),
              /* @__PURE__ */ e("span", { className: "text-sm font-normal ml-0.5", children: "/ton" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `rounded-xl p-3.5 border ${a ? "border-neutral-700 bg-neutral-800/30" : "border-neutral-200 bg-neutral-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${f}`, children: "Quality improvement saving" }),
              /* @__PURE__ */ e("span", { className: `text-[10px] px-2 py-0.5 rounded-full font-semibold ${a ? "bg-neutral-700 text-neutral-400" : "bg-neutral-200 text-neutral-500"}`, children: "−60% defects" })
            ] }),
            /* @__PURE__ */ t("p", { className: `text-xl font-display font-medium ${M} mt-0.5`, children: [
              "+",
              oe(l.returnsSavingsPerTon || 0),
              /* @__PURE__ */ e("span", { className: `text-sm font-normal ${f} ml-1`, children: "/ton" })
            ] }),
            /* @__PURE__ */ t("p", { className: `text-xs ${f} mt-0.5`, children: [
              "on ",
              (c.qualityReturnRate || 2).toFixed(1),
              "% current defect rate"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: `rounded-xl border ${P} ${a ? "bg-neutral-800/30" : "bg-neutral-50"} p-5 mt-auto`, children: [
          /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-wider ${f} mb-4`, children: [
            "Project Total · ",
            (c.annualProduction || 0).toLocaleString(),
            " tons/yr"
          ] }),
          /* @__PURE__ */ t("div", { className: "space-y-2", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ e("span", { className: `text-sm ${f}`, children: "Annual additive spend" }),
              /* @__PURE__ */ e("span", { className: `text-sm font-mono font-semibold ${a ? "text-red-400" : "text-red-500"}`, children: _(l.annualAdditiveCost || 0) })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ e("span", { className: `text-sm ${f}`, children: "Annual net margin" }),
              /* @__PURE__ */ t("span", { className: "text-sm font-mono font-semibold text-green-600", children: [
                "+",
                _(l.netMarginSavingsTotal || 0),
                "/yr"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `pt-2 border-t ${P} space-y-1.5`, children: [
              /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ t("span", { className: `text-xs ${f}`, children: [
                  "All-in gain ",
                  /* @__PURE__ */ e("span", { className: "opacity-60", children: "(incl. quality)" })
                ] }),
                /* @__PURE__ */ t("span", { className: `text-sm font-mono font-semibold ${a ? "text-emerald-400" : "text-emerald-600"}`, children: [
                  "+",
                  _(l.allInSavingsTotal || 0),
                  "/yr"
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ t("span", { className: `text-sm font-bold ${M}`, children: [
                  l.analysisPeriod || 3,
                  "-yr net margin"
                ] }),
                /* @__PURE__ */ e("span", { className: `text-xl font-bold font-mono ${a ? "text-green-400" : "text-green-700"}`, children: _((l.netMarginSavingsTotal || 0) * (l.analysisPeriod || 3)) })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: `lg:col-span-7 ${R} p-8 flex flex-col gap-6`, children: [
        /* @__PURE__ */ e("div", { className: `grid grid-cols-4 gap-0 rounded-xl overflow-hidden border ${P}`, children: [
          {
            label: "Payback",
            value: l.paybackLabel || "—",
            color: a ? "text-emerald-400" : "text-emerald-700",
            bg: a ? "bg-emerald-900/20" : "bg-emerald-50"
          },
          {
            label: "Annual Gain",
            value: _(l.allInSavingsTotal || 0),
            color: a ? "text-green-400" : "text-green-700",
            bg: a ? "bg-green-900/20" : "bg-green-50"
          },
          {
            label: "Net/ton",
            value: `+${oe(l.netMarginPerTon || 0)}`,
            color: a ? "text-emerald-400" : "text-emerald-700",
            bg: a ? "bg-emerald-900/20" : "bg-emerald-50"
          },
          {
            label: "CO₂/yr",
            value: l.co2SavedTons > 0 ? `${l.co2SavedTons}t` : "—",
            color: a ? "text-teal-400" : "text-teal-700",
            bg: a ? "bg-teal-900/20" : "bg-teal-50"
          }
        ].map(({ label: v, value: u, color: y, bg: $ }, Z) => /* @__PURE__ */ t("div", { className: `${$} py-2.5 px-2 text-center ${Z < 3 ? `border-r ${P}` : ""}`, children: [
          /* @__PURE__ */ e("p", { className: `text-[8px] font-bold uppercase tracking-wider ${f} mb-0.5`, children: v }),
          /* @__PURE__ */ e("p", { className: `text-[11px] font-bold font-mono leading-tight ${y}`, children: u })
        ] }, v)) }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-widest ${f} mb-3`, children: [
            "Annual totals — ",
            (c.annualProduction || 0).toLocaleString(),
            " tons production"
          ] }),
          /* @__PURE__ */ e("div", { className: "h-48", children: /* @__PURE__ */ e(Q, { width: "100%", height: "100%", children: /* @__PURE__ */ t(_e, { data: j, margin: { top: 20, right: 8, bottom: 0, left: -10 }, barSize: 52, children: [
            /* @__PURE__ */ e(ee, { strokeDasharray: "3 3", stroke: a ? "#2a2a2a" : "#f1f5f9", vertical: !1 }),
            /* @__PURE__ */ e(te, { dataKey: "name", tick: { fontSize: 11, fill: a ? "#9ca3af" : "#64748b" }, tickLine: !1, axisLine: !1 }),
            /* @__PURE__ */ e(
              ae,
              {
                domain: W,
                tickFormatter: (v) => _(v),
                tick: { fontSize: 10, fill: a ? "#9ca3af" : "#64748b" },
                tickLine: !1,
                axisLine: !1
              }
            ),
            /* @__PURE__ */ e(J, { content: /* @__PURE__ */ e(dl, {}) }),
            /* @__PURE__ */ t(Se, { dataKey: "value", radius: [6, 6, 0, 0], children: [
              j.map((v, u) => /* @__PURE__ */ e(ut, { fill: v.fill }, u)),
              /* @__PURE__ */ e(
                za,
                {
                  dataKey: "value",
                  position: "top",
                  formatter: (v) => _(v),
                  style: { fontSize: 10, fontWeight: 700, fill: a ? "#e5e7eb" : "#374151" }
                }
              )
            ] })
          ] }) }) }),
          /* @__PURE__ */ e("p", { className: `text-[11px] text-center mt-1 ${f}`, children: "Red = additive spend · Light green = net margin · Dark green = all-in (incl. quality savings)" })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ t("div", { className: `p-5 rounded-2xl border-2 ${a ? "border-emerald-700 bg-emerald-900/10" : "border-emerald-300 bg-emerald-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ e("p", { className: "text-xs font-bold uppercase tracking-widest text-emerald-600", children: "All-In Annual Gain" }),
              /* @__PURE__ */ e("span", { className: `text-[9px] font-bold px-1.5 py-0.5 rounded ${a ? "bg-neutral-700 text-neutral-300" : "bg-neutral-900 text-white"}`, children: "ALL-IN" })
            ] }),
            /* @__PURE__ */ e("p", { className: "text-3xl font-display font-medium tabular-nums text-emerald-700", children: _(l.allInSavingsTotal || 0) }),
            /* @__PURE__ */ t("p", { className: "text-xs mt-1.5 text-emerald-600", children: [
              "+",
              oe(l.allInSavingsPerTon || 0),
              "/ton · margin + quality"
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-5 rounded-2xl border ${a ? "border-slate-700 bg-slate-800/30" : "border-slate-200 bg-slate-50"}`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-start justify-between mb-2", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-widest ${a ? "text-slate-400" : "text-slate-500"}`, children: "Net Margin" }),
              /* @__PURE__ */ e("span", { className: `text-[9px] font-bold px-1.5 py-0.5 rounded ${a ? "bg-slate-700 text-slate-300" : "bg-slate-200 text-slate-600"}`, children: "NET MARGIN" })
            ] }),
            /* @__PURE__ */ e("p", { className: `text-3xl font-display font-medium tabular-nums ${(l.netMarginSavingsTotal || 0) >= 0 ? a ? "text-slate-200" : "text-slate-700" : "text-red-500"}`, children: _(l.netMarginSavingsTotal || 0) }),
            /* @__PURE__ */ t("p", { className: `text-xs mt-1.5 ${a ? "text-slate-500" : "text-slate-400"}`, children: [
              "+",
              oe(l.netMarginPerTon || 0),
              "/ton · premium / downgauge only"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${P} ${a ? "bg-neutral-800/50" : "bg-white"} flex items-center gap-4`, children: [
            /* @__PURE__ */ e(z, { className: "w-5 h-5 text-emerald-500 flex-shrink-0" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${f}`, children: "ROI on Additive" }),
              /* @__PURE__ */ e("p", { className: `text-2xl font-display font-medium tabular-nums ${M}`, children: l.roiPercentage != null ? `${l.roiPercentage}%` : "—" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${P} ${a ? "bg-neutral-800/50" : "bg-white"} flex items-center gap-4`, children: [
            /* @__PURE__ */ e(I, { className: "w-5 h-5 text-green-500 flex-shrink-0" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${f}`, children: "Per-Batch Payback" }),
              /* @__PURE__ */ e("p", { className: "text-base font-display font-medium text-green-600", children: l.paybackLabel || "—" })
            ] })
          ] })
        ] }),
        l.roiMultiple != null && /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${a ? "border-emerald-700 bg-emerald-900/10" : "border-emerald-200 bg-emerald-50"} flex items-center gap-4`, children: [
          /* @__PURE__ */ e(z, { className: "w-5 h-5 text-emerald-500 flex-shrink-0" }),
          /* @__PURE__ */ t("div", { className: "flex-1", children: [
            /* @__PURE__ */ t("p", { className: `text-[10px] font-bold uppercase tracking-wider ${a ? "text-emerald-400" : "text-emerald-600"}`, children: [
              l.analysisPeriod || 3,
              "-yr Return Multiple"
            ] }),
            /* @__PURE__ */ t("p", { className: `text-2xl font-display font-medium tabular-nums ${a ? "text-emerald-300" : "text-emerald-700"}`, children: [
              l.roiMultiple,
              "×"
            ] }),
            /* @__PURE__ */ e("p", { className: `text-[9px] mt-0.5 ${a ? "text-emerald-500" : "text-emerald-400"}`, children: "net margin ÷ additive spend" })
          ] }),
          /* @__PURE__ */ t("div", { className: "text-right flex-shrink-0", children: [
            /* @__PURE__ */ t("p", { className: `text-[9px] font-bold uppercase tracking-wider ${f} mb-0.5`, children: [
              l.analysisPeriod || 3,
              "-yr Net Gain"
            ] }),
            /* @__PURE__ */ e("p", { className: `text-lg font-bold font-mono ${a ? "text-emerald-300" : "text-emerald-700"}`, children: _(l.periodNetGain || 0) })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-3 gap-3", children: [
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border ${P} ${a ? "bg-neutral-800/30" : "bg-white"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: `text-[10px] font-bold uppercase tracking-wider ${f} mb-1`, children: "Additive / yr" }),
            /* @__PURE__ */ e("p", { className: `text-sm font-bold tabular-nums ${a ? "text-red-400" : "text-red-500"}`, children: _(l.annualAdditiveCost || 0) }),
            /* @__PURE__ */ t("p", { className: `text-[10px] ${f}`, children: [
              "@ ",
              (c.dosagePercent || 0.5).toFixed(1),
              "% dosage"
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border border-emerald-500/25 ${a ? "bg-emerald-900/10" : "bg-emerald-50"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-emerald-600/70 mb-1", children: "Net Gain / ton" }),
            /* @__PURE__ */ t("p", { className: `text-sm font-bold tabular-nums ${(l.netMarginPerTon || 0) >= 0 ? "text-emerald-600" : "text-amber-500"}`, children: [
              (l.netMarginPerTon || 0) >= 0 ? "+" : "",
              oe(l.netMarginPerTon || 0)
            ] }),
            /* @__PURE__ */ e("p", { className: "text-[10px] text-emerald-500/60", children: "per ton produced" })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-3.5 rounded-xl border border-teal-500/25 ${a ? "bg-teal-900/10" : "bg-teal-50"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-teal-600/70 mb-1", children: "CO₂ Avoided" }),
            /* @__PURE__ */ e("p", { className: "text-sm font-bold text-teal-600 tabular-nums", children: l.co2SavedTons > 0 ? `${l.co2SavedTons}t` : "—" }),
            /* @__PURE__ */ e("p", { className: "text-[10px] text-teal-500/60", children: "via material reduction" })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: `flex-grow border ${P} rounded-2xl ${a ? "bg-neutral-800/50" : "bg-white"} p-5`, children: [
          /* @__PURE__ */ t("p", { className: `text-xs font-bold uppercase tracking-widest ${f} mb-3`, children: [
            l.analysisPeriod || 3,
            "-Year Cumulative Net Gain"
          ] }),
          O.length > 0 && /* @__PURE__ */ e("div", { className: "h-28", children: /* @__PURE__ */ e(Q, { width: "100%", height: "100%", children: /* @__PURE__ */ t(Xt, { data: O, margin: { top: 4, right: 12, bottom: 4, left: -18 }, children: [
            /* @__PURE__ */ e(ee, { strokeDasharray: "3 3", stroke: a ? "#2a2a2a" : "#f1f5f9", vertical: !1 }),
            /* @__PURE__ */ e(te, { dataKey: "year", stroke: a ? "#525252" : "#94a3b8", fontSize: 10, tickLine: !1, axisLine: !1, tickMargin: 6 }),
            /* @__PURE__ */ e(ae, { stroke: a ? "#525252" : "#94a3b8", fontSize: 10, tickLine: !1, axisLine: !1, tickMargin: 6, tickFormatter: _ }),
            /* @__PURE__ */ e(Le, { y: 0, stroke: a ? "#555" : "#cbd5e1", strokeDasharray: "4 2" }),
            /* @__PURE__ */ e(
              J,
              {
                contentStyle: { backgroundColor: a ? "#171717" : "#fff", border: `1px solid ${a ? "#404040" : "#e2e8f0"}`, borderRadius: "8px", fontSize: "11px", color: a ? "#fff" : "#111" },
                formatter: (v, u) => [_(v), u === "netMargin" ? "Net Margin" : "All-In"],
                labelFormatter: (v) => v
              }
            ),
            /* @__PURE__ */ e(ne, { type: "monotone", dataKey: "netMargin", name: "Net Margin", stroke: "#34d399", strokeWidth: 2.5, dot: { fill: "#34d399", r: 3, strokeWidth: 0 }, activeDot: { r: 5, strokeWidth: 0 } }),
            /* @__PURE__ */ e(ne, { type: "monotone", dataKey: "allIn", name: "All-In", stroke: "#059669", strokeWidth: 2, dot: !1, strokeDasharray: "4 2" })
          ] }) }) }),
          /* @__PURE__ */ e("p", { className: `text-[10px] ${f} mt-2`, children: "Cumulative net gain grows each year. Additive is a recurring variable cost — no upfront capital required." })
        ] }),
        (l.periodNetGain || 0) > 0 && /* @__PURE__ */ t("div", { className: `rounded-2xl p-6 flex items-center justify-between ${a ? "bg-neutral-800 border border-neutral-700" : "bg-neutral-900"}`, children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ t("p", { className: "text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1", children: [
              l.analysisPeriod || 3,
              "-yr net gain · ",
              (c.annualProduction || 0).toLocaleString(),
              " tons/yr"
            ] }),
            /* @__PURE__ */ e("p", { className: "text-3xl font-display font-medium text-white", children: _(l.periodNetGain || 0) }),
            /* @__PURE__ */ t("p", { className: "text-[10px] text-neutral-500 mt-1", children: [
              _(l.netMarginSavingsTotal || 0),
              "/yr × ",
              l.analysisPeriod || 3,
              " yr · +",
              oe(l.netMarginPerTon || 0),
              "/ton net margin"
            ] })
          ] }),
          l.roiMultiple && /* @__PURE__ */ t("div", { className: "text-right flex-shrink-0 ml-6", children: [
            /* @__PURE__ */ e("p", { className: "text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1", children: "Return Multiple" }),
            /* @__PURE__ */ t("p", { className: "text-4xl font-display font-bold text-emerald-400", children: [
              l.roiMultiple,
              "×"
            ] }),
            /* @__PURE__ */ e("p", { className: "text-[10px] text-neutral-500 mt-1", children: "on additive spend" })
          ] })
        ] }),
        /* @__PURE__ */ t("p", { className: `text-[10px] leading-relaxed flex items-start gap-1.5 ${f}`, children: [
          /* @__PURE__ */ e(ot, { className: "w-3 h-3 flex-shrink-0 mt-0.5 opacity-60" }),
          "Premiums use industry benchmarks (Pipes +12%, Films 15% downgauge, Molding +15%) against ₹100/kg HDPE baseline. Actual results depend on product grades, customer mix, and market pricing. Quality improvement assumes 60% defect reduction. Contact us for application-specific modelling."
        ] })
      ] })
    ] }),
    n && /* @__PURE__ */ t("div", { className: `border-t ${P} ${T}`, children: [
      /* @__PURE__ */ t(
        "button",
        {
          onClick: () => N((v) => !v),
          className: `w-full px-8 py-4 flex items-center justify-between text-sm font-medium ${M} transition-colors ${a ? "hover:bg-neutral-800/60" : "hover:bg-neutral-50"}`,
          children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-3 flex-wrap", children: [
              /* @__PURE__ */ e("span", { children: "Advanced Parameters" }),
              /* @__PURE__ */ e("span", { className: `text-xs px-1.5 py-0.5 rounded font-medium ${a ? "bg-neutral-700 text-neutral-400" : "bg-neutral-100 text-neutral-500"}`, children: "Estimates" })
            ] }),
            /* @__PURE__ */ e(Zt, { className: `w-4 h-4 flex-shrink-0 transition-transform duration-200 ${f} ${w ? "rotate-180" : ""}` })
          ]
        }
      ),
      /* @__PURE__ */ e(de, { initial: !1, children: w && /* @__PURE__ */ e(
        D.div,
        {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.22, ease: "easeInOut" },
          className: "overflow-hidden",
          children: /* @__PURE__ */ t("div", { className: `px-8 pb-10 pt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 ${R}`, children: [
            /* @__PURE__ */ t("div", { className: "space-y-5", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-wider ${f}`, children: "Scenario Parameters" }),
              Object.entries(n).map(([v, u]) => {
                const y = C(v, u);
                return y ? /* @__PURE__ */ e("div", { children: y }, v) : null;
              })
            ] }),
            /* @__PURE__ */ t("div", { className: "space-y-3", children: [
              /* @__PURE__ */ e("p", { className: `text-xs font-bold uppercase tracking-wider ${f}`, children: "Production Impact Summary" }),
              [
                { label: "Annual production", value: `${(c.annualProduction || 0).toLocaleString()} tons` },
                { label: "Application", value: l.appLabel || "—" },
                { label: "Dosage rate", value: `${(c.dosagePercent || 0.5).toFixed(1)}% (${((c.dosagePercent || 0.5) / 100 * 1e3).toFixed(1)} kg/ton)` },
                { label: "Additive spend / yr", value: _(l.annualAdditiveCost || 0), color: "text-red-500" },
                { label: "Net margin / yr", value: _(l.netMarginSavingsTotal || 0), color: "text-emerald-600" },
                { label: "All-in gain / yr", value: _(l.allInSavingsTotal || 0), color: "text-emerald-700" },
                ...l.materialSavedTons > 0 ? [{ label: "Material saved / yr", value: `${l.materialSavedTons} tons` }] : [],
                ...l.co2SavedTons > 0 ? [{ label: "CO₂ avoided", value: `${l.co2SavedTons} tCO₂` }] : [],
                { label: `${l.analysisPeriod || 3}-yr net margin`, value: _((l.netMarginSavingsTotal || 0) * (l.analysisPeriod || 3)), color: "text-green-700" }
              ].map(({ label: v, value: u, color: y }, $) => /* @__PURE__ */ t("div", { className: `flex items-center justify-between px-4 py-3 rounded-xl border ${P} ${a ? "bg-neutral-800/30" : "bg-white"}`, children: [
                /* @__PURE__ */ e("span", { className: `text-sm ${M}`, children: v }),
                /* @__PURE__ */ e("span", { className: `text-sm font-semibold font-mono ${y || M}`, children: u })
              ] }, $))
            ] })
          ] })
        },
        "sec"
      ) })
    ] })
  ] });
}, pl = () => {
  const [r, i] = A(100), [n, o] = A(15e3), [a] = A(5e3), [s, d] = A(3), m = ie(() => {
    const p = r * n, c = r * a, g = p - c, b = (g / p * 100).toFixed(1), x = p * s, w = c * s, N = g * s, h = [
      { name: "Ceraphene Cost", value: c, color: "#0d9488" },
      { name: "Savings", value: g, color: "#10b981" }
    ], l = [];
    for (let S = 1; S <= s; S++)
      l.push({
        year: `Year ${S}`,
        "Premium Coating": p,
        Ceraphene: c
      });
    return {
      annualCostPremium: p,
      annualCostCeraphene: c,
      annualSavings: g,
      savingsPercent: b,
      totalCostPremium: x,
      totalCostCeraphene: w,
      totalSavings: N,
      costBreakdown: h,
      yearlyData: l
    };
  }, [r, n, a, s]);
  return /* @__PURE__ */ t("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" }),
    /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ t(
        D.div,
        {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-purple-500/30 bg-purple-500/10 backdrop-blur mb-6", children: [
              /* @__PURE__ */ e(Xe, { className: "w-4 h-4 text-purple-400" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-mono text-purple-400 tracking-widest uppercase", children: "Cost Analysis" })
            ] }),
            /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "Ceraphene Cost Comparison" }),
            /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto", children: "Premium performance at 60-70% lower cost than competitors" })
          ]
        }
      ),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8", children: [
        /* @__PURE__ */ t("div", { className: "lg:col-span-4 space-y-6", children: [
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block", children: "Annual Units Required" }),
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "range",
                    min: "10",
                    max: "500",
                    step: "10",
                    value: r,
                    onChange: (p) => i(Number(p.target.value)),
                    className: "w-full accent-brand-500 h-1 bg-neutral-700 rounded-sm"
                  }
                ),
                /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mt-3", children: [
                  r,
                  " ",
                  /* @__PURE__ */ e("span", { className: "text-lg text-neutral-400", children: "units/year" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.1 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block", children: "Competitor Price (₹/50ml)" }),
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "range",
                    min: "12000",
                    max: "20000",
                    step: "1000",
                    value: n,
                    onChange: (p) => o(Number(p.target.value)),
                    className: "w-full accent-brand-500 h-1 bg-neutral-700 rounded-sm"
                  }
                ),
                /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mt-3", children: [
                  "₹",
                  n.toLocaleString()
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.2 },
              className: "bg-gradient-to-r from-brand-500/20 to-green-500/20 border border-brand-500/30 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-brand-300 uppercase tracking-wide mb-3 block", children: "Ceraphene Price (₹/50ml)" }),
                /* @__PURE__ */ t("div", { className: "text-4xl font-mono font-bold text-brand-400 mt-3", children: [
                  "₹",
                  a.toLocaleString()
                ] }),
                /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 mt-2 font-mono", children: "Premium quality, affordable price" })
              ]
            }
          ),
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.3 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block", children: "Time Horizon (Years)" }),
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "range",
                    min: "1",
                    max: "10",
                    step: "1",
                    value: s,
                    onChange: (p) => d(Number(p.target.value)),
                    className: "w-full accent-brand-500 h-1 bg-neutral-700 rounded-sm"
                  }
                ),
                /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mt-3", children: [
                  s,
                  " ",
                  /* @__PURE__ */ e("span", { className: "text-lg text-neutral-400", children: "years" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { className: "lg:col-span-8 space-y-6", children: [
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.4 },
              className: "grid grid-cols-2 md:grid-cols-4 gap-4",
              children: [
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-green-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(li, { className: "w-6 h-6 text-green-400 mb-3" }),
                  /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                    m.savingsPercent,
                    "%"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "Cost Reduction" })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-brand-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(Jt, { className: "w-6 h-6 text-brand-400 mb-3" }),
                  /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                    "₹",
                    (m.annualSavings / 1e5).toFixed(1),
                    "L"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "Annual Savings" })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-purple-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(et, { className: "w-6 h-6 text-purple-400 mb-3" }),
                  /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                    "₹",
                    (m.totalSavings / 1e5).toFixed(1),
                    "L"
                  ] }),
                  /* @__PURE__ */ t("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: [
                    s,
                    "-Yr Total"
                  ] })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-yellow-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(Ze, { className: "w-6 h-6 text-yellow-400 mb-3" }),
                  /* @__PURE__ */ e("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: "9H+" }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "Hardness" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.5 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white mb-6", children: "Year-by-Year Cost Comparison" }),
                /* @__PURE__ */ e(Q, { width: "100%", height: 300, children: /* @__PURE__ */ t(_e, { data: m.yearlyData, children: [
                  /* @__PURE__ */ e(ee, { strokeDasharray: "3 3", stroke: "#404040" }),
                  /* @__PURE__ */ e(te, { dataKey: "year", stroke: "#9ca3af", style: { fontSize: "12px", fontFamily: "Space Grotesk" } }),
                  /* @__PURE__ */ e(ae, { stroke: "#9ca3af", tickFormatter: (p) => `₹${(p / 1e5).toFixed(0)}L`, style: { fontSize: "12px", fontFamily: "Space Grotesk" } }),
                  /* @__PURE__ */ e(
                    J,
                    {
                      contentStyle: { backgroundColor: "#1a1a1a", border: "1px solid #404040", borderRadius: "4px", fontFamily: "Space Grotesk" },
                      formatter: (p) => [`₹${p.toLocaleString()}`, ""]
                    }
                  ),
                  /* @__PURE__ */ e(ze, { wrapperStyle: { fontFamily: "Space Grotesk" } }),
                  /* @__PURE__ */ e(Se, { dataKey: "Premium Coating", fill: "#ef4444" }),
                  /* @__PURE__ */ e(Se, { dataKey: "Ceraphene", fill: "#0d9488" })
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6 },
              className: "grid grid-cols-1 md:grid-cols-2 gap-6",
              children: [
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6", children: [
                  /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white mb-4", children: "Cost Allocation" }),
                  /* @__PURE__ */ e(Q, { width: "100%", height: 250, children: /* @__PURE__ */ t(vn, { children: [
                    /* @__PURE__ */ e(
                      yn,
                      {
                        data: m.costBreakdown,
                        cx: "50%",
                        cy: "50%",
                        labelLine: !1,
                        label: ({ name: p, percent: c }) => `${p}: ${(c * 100).toFixed(0)}%`,
                        outerRadius: 80,
                        fill: "#8884d8",
                        dataKey: "value",
                        children: m.costBreakdown.map((p, c) => /* @__PURE__ */ e(ut, { fill: p.color }, `cell-${c}`))
                      }
                    ),
                    /* @__PURE__ */ e(
                      J,
                      {
                        contentStyle: { backgroundColor: "#1a1a1a", border: "1px solid #404040", borderRadius: "4px", fontFamily: "Space Grotesk" },
                        formatter: (p) => `₹${p.toLocaleString()}`
                      }
                    )
                  ] }) })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6", children: [
                  /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white mb-4", children: "Detailed Breakdown" }),
                  /* @__PURE__ */ t("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ t("div", { className: "flex justify-between items-center pb-3 border-b border-neutral-700", children: [
                      /* @__PURE__ */ e("span", { className: "text-sm text-neutral-400 font-mono", children: "Unit Price" }),
                      /* @__PURE__ */ t("div", { className: "text-right", children: [
                        /* @__PURE__ */ t("div", { className: "text-red-400 line-through font-mono", children: [
                          "₹",
                          n.toLocaleString()
                        ] }),
                        /* @__PURE__ */ t("div", { className: "text-brand-400 font-bold font-mono", children: [
                          "₹",
                          a.toLocaleString()
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ t("div", { className: "flex justify-between items-center pb-3 border-b border-neutral-700", children: [
                      /* @__PURE__ */ e("span", { className: "text-sm text-neutral-400 font-mono", children: "Annual Cost" }),
                      /* @__PURE__ */ t("div", { className: "text-right", children: [
                        /* @__PURE__ */ t("div", { className: "text-red-400 line-through font-mono", children: [
                          "₹",
                          (m.annualCostPremium / 1e5).toFixed(2),
                          "L"
                        ] }),
                        /* @__PURE__ */ t("div", { className: "text-brand-400 font-bold font-mono", children: [
                          "₹",
                          (m.annualCostCeraphene / 1e5).toFixed(2),
                          "L"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ t("div", { className: "flex justify-between items-center pb-3 border-b border-neutral-700", children: [
                      /* @__PURE__ */ t("span", { className: "text-sm text-neutral-400 font-mono", children: [
                        s,
                        "-Year Total"
                      ] }),
                      /* @__PURE__ */ t("div", { className: "text-right", children: [
                        /* @__PURE__ */ t("div", { className: "text-red-400 line-through font-mono", children: [
                          "₹",
                          (m.totalCostPremium / 1e5).toFixed(2),
                          "L"
                        ] }),
                        /* @__PURE__ */ t("div", { className: "text-brand-400 font-bold font-mono", children: [
                          "₹",
                          (m.totalCostCeraphene / 1e5).toFixed(2),
                          "L"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ t("div", { className: "flex justify-between items-center pt-3", children: [
                      /* @__PURE__ */ e("span", { className: "text-sm text-white font-mono font-bold", children: "Total Savings" }),
                      /* @__PURE__ */ t("div", { className: "text-2xl text-green-400 font-bold font-mono", children: [
                        "₹",
                        (m.totalSavings / 1e5).toFixed(2),
                        "L"
                      ] })
                    ] })
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.7 },
              className: "bg-gradient-to-r from-brand-500/10 to-purple-500/10 border border-brand-500/30 rounded-sm p-8",
              children: [
                /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-bold text-white mb-6", children: "Why Ceraphene Wins" }),
                /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                  /* @__PURE__ */ t("div", { className: "text-center", children: [
                    /* @__PURE__ */ e("div", { className: "text-4xl font-mono font-bold text-brand-400 mb-2", children: "60-70%" }),
                    /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 font-mono", children: "Lower Cost" })
                  ] }),
                  /* @__PURE__ */ t("div", { className: "text-center", children: [
                    /* @__PURE__ */ e("div", { className: "text-4xl font-mono font-bold text-brand-400 mb-2", children: "9H+" }),
                    /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 font-mono", children: "Scratch Resistance" })
                  ] }),
                  /* @__PURE__ */ t("div", { className: "text-center", children: [
                    /* @__PURE__ */ e("div", { className: "text-4xl font-mono font-bold text-brand-400 mb-2", children: "3-4+yr" }),
                    /* @__PURE__ */ e("div", { className: "text-sm text-neutral-400 font-mono", children: "Durability" })
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { className: "mt-6 text-center text-neutral-400 text-sm font-mono", children: "✓ Graphene-enhanced ceramic coating with premium performance at fraction of the cost" })
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}, ul = () => {
  const [r, i] = A(100), [n, o] = A("packaging"), [a, s] = A(120), [d] = A(5), m = {
    packaging: {
      name: "Packaging Materials",
      elongationGain: 20,
      // 20× (source-backed)
      lifespanGain: 20,
      // +20% (source-backed)
      marketPremium: 15,
      // NEEDS VALIDATION: market premium %
      qualityImpact: "High"
    },
    films: {
      name: "Films & Sheets",
      elongationGain: 22,
      // Conservative estimate (source: 20× base)
      lifespanGain: 25,
      // Conservative estimate (source: +20% base)
      marketPremium: 20,
      // NEEDS VALIDATION: market premium %
      qualityImpact: "Very High"
    },
    pipes: {
      name: "Pipes & Tubes",
      elongationGain: 18,
      // Conservative estimate (source: 20× base)
      lifespanGain: 22,
      // Conservative estimate (source: +20% base)
      marketPremium: 18,
      // NEEDS VALIDATION: market premium %
      qualityImpact: "High"
    }
  }, p = ie(() => {
    const c = m[n], g = r * 1e3, b = g * a, x = g * (a + d), w = g * d, N = c.lifespanGain, h = c.elongationGain, l = c.marketPremium, S = g * a * 1.3, T = S * (1 + l / 100), R = T - S, P = R - w, M = (P / w * 100).toFixed(0), f = [
      { property: "Elongation", Standard: 5, "HD-G-PE": 5 * h },
      { property: "Flexibility", Standard: 70, "HD-G-PE": 90 },
      { property: "Durability", Standard: 70, "HD-G-PE": 90 },
      { property: "Lifespan", Standard: 70, "HD-G-PE": 70 * (1 + N / 100) },
      { property: "Strength", Standard: 75, "HD-G-PE": 85 }
    ], E = [
      { application: "Packaging", improvement: m.packaging.elongationGain },
      { application: "Films", improvement: m.films.elongationGain },
      { application: "Pipes", improvement: m.pipes.elongationGain }
    ];
    return {
      app: c,
      annualVolume: g,
      standardCost: b,
      hdgpeCost: x,
      additionalCost: w,
      lifespanExtension: N,
      elongationImprovement: h,
      marketPremium: l,
      standardRevenue: S,
      premiumRevenue: T,
      additionalRevenue: R,
      netBenefit: P,
      roi: M,
      performanceData: f,
      applicationData: E
    };
  }, [r, n, a, d]);
  return /* @__PURE__ */ t("section", { className: "relative py-24 px-6 bg-black overflow-hidden", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20" }),
    /* @__PURE__ */ t("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ t(
        D.div,
        {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ t("div", { className: "inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-cyan-500/30 bg-cyan-500/10 backdrop-blur mb-6", children: [
              /* @__PURE__ */ e(Xe, { className: "w-4 h-4 text-cyan-400" }),
              /* @__PURE__ */ e("span", { className: "text-xs font-mono text-cyan-400 tracking-widest uppercase", children: "Performance Calculator" })
            ] }),
            /* @__PURE__ */ e("h2", { className: "text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight", children: "HD-G-PE Performance Analysis" }),
            /* @__PURE__ */ e("p", { className: "text-xl text-neutral-400 max-w-3xl mx-auto", children: "Calculate performance gains and value creation with HD-G-PE enhanced polymers" })
          ]
        }
      ),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8", children: [
        /* @__PURE__ */ t("div", { className: "lg:col-span-4 space-y-6", children: [
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block", children: "Production Volume (tons/year)" }),
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "range",
                    min: "10",
                    max: "1000",
                    step: "10",
                    value: r,
                    onChange: (c) => i(Number(c.target.value)),
                    className: "w-full accent-brand-500 h-1 bg-neutral-700 rounded-sm"
                  }
                ),
                /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mt-3", children: [
                  r,
                  " ",
                  /* @__PURE__ */ e("span", { className: "text-lg text-neutral-400", children: "tons/yr" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.1 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block", children: "Application Area" }),
                /* @__PURE__ */ e("div", { className: "space-y-2", children: Object.entries(m).map(([c, g]) => /* @__PURE__ */ e(
                  "button",
                  {
                    onClick: () => o(c),
                    className: `w-full px-4 py-3 rounded-sm font-mono font-medium transition-all text-sm ${n === c ? "bg-brand-500 text-white border border-brand-400" : "bg-neutral-800/50 text-neutral-400 border border-neutral-700 hover:bg-neutral-700 hover:text-white"}`,
                    children: g.name
                  },
                  c
                )) })
              ]
            }
          ),
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.2 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block", children: "Base HDPE Price (₹/kg)" }),
                /* @__PURE__ */ e(
                  "input",
                  {
                    type: "range",
                    min: "80",
                    max: "200",
                    step: "10",
                    value: a,
                    onChange: (c) => s(Number(c.target.value)),
                    className: "w-full accent-brand-500 h-1 bg-neutral-700 rounded-sm"
                  }
                ),
                /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mt-3", children: [
                  "₹",
                  a,
                  " ",
                  /* @__PURE__ */ e("span", { className: "text-lg text-neutral-400", children: "/kg" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.3 },
              className: "bg-gradient-to-r from-brand-500/20 to-cyan-500/20 border border-brand-500/30 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("label", { className: "text-sm font-mono text-brand-300 uppercase tracking-wide mb-3 block", children: "HD-G-PE Additive Cost" }),
                /* @__PURE__ */ t("div", { className: "text-4xl font-mono font-bold text-brand-400 mt-3", children: [
                  "₹",
                  d,
                  " ",
                  /* @__PURE__ */ e("span", { className: "text-lg text-neutral-400", children: "/kg" })
                ] }),
                /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 mt-2 font-mono", children: "Minimal cost for maximum impact" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { className: "lg:col-span-8 space-y-6", children: [
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.4 },
              className: "grid grid-cols-2 md:grid-cols-4 gap-4",
              children: [
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-brand-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(I, { className: "w-6 h-6 text-brand-400 mb-3" }),
                  /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                    p.elongationImprovement,
                    "×"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "Elongation" })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-cyan-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(pt, { className: "w-6 h-6 text-cyan-400 mb-3" }),
                  /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                    "+",
                    p.lifespanExtension,
                    "%"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "Lifespan" })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-purple-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(z, { className: "w-6 h-6 text-purple-400 mb-3" }),
                  /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                    "+",
                    p.marketPremium,
                    "%"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "Premium" })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-green-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e(et, { className: "w-6 h-6 text-green-400 mb-3" }),
                  /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-white mb-1", children: [
                    p.roi,
                    "%"
                  ] }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider font-mono", children: "ROI" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.5 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white mb-6", children: "Multi-Property Performance Comparison" }),
                /* @__PURE__ */ e(Q, { width: "100%", height: 350, children: /* @__PURE__ */ t(Nn, { data: p.performanceData, children: [
                  /* @__PURE__ */ e(wn, { stroke: "#404040" }),
                  /* @__PURE__ */ e(kn, { dataKey: "property", stroke: "#9ca3af", tick: { fill: "#9ca3af", fontSize: 12, fontFamily: "Space Grotesk" } }),
                  /* @__PURE__ */ e(Cn, { angle: 90, domain: [0, 120], stroke: "#9ca3af", tick: { fill: "#9ca3af" } }),
                  /* @__PURE__ */ e(
                    Cr,
                    {
                      name: "Standard HDPE",
                      dataKey: "Standard",
                      stroke: "#ef4444",
                      fill: "#ef4444",
                      fillOpacity: 0.2,
                      strokeWidth: 2
                    }
                  ),
                  /* @__PURE__ */ e(
                    Cr,
                    {
                      name: "HD-G-PE",
                      dataKey: "HD-G-PE",
                      stroke: "#0d9488",
                      fill: "#0d9488",
                      fillOpacity: 0.4,
                      strokeWidth: 3
                    }
                  ),
                  /* @__PURE__ */ e(ze, { wrapperStyle: { fontFamily: "Space Grotesk" } })
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6 },
              className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6",
              children: [
                /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white mb-6", children: "Elongation Improvement by Application" }),
                /* @__PURE__ */ e(Q, { width: "100%", height: 250, children: /* @__PURE__ */ t(_e, { data: p.applicationData, children: [
                  /* @__PURE__ */ e(ee, { strokeDasharray: "3 3", stroke: "#404040" }),
                  /* @__PURE__ */ e(te, { dataKey: "application", stroke: "#9ca3af", style: { fontSize: "12px", fontFamily: "Space Grotesk" } }),
                  /* @__PURE__ */ e(ae, { stroke: "#9ca3af", label: { value: "Improvement (×)", angle: -90, position: "insideLeft", fill: "#9ca3af", fontFamily: "Space Grotesk" }, style: { fontSize: "12px", fontFamily: "Space Grotesk" } }),
                  /* @__PURE__ */ e(
                    J,
                    {
                      contentStyle: { backgroundColor: "#1a1a1a", border: "1px solid #404040", borderRadius: "4px", fontFamily: "Space Grotesk" },
                      formatter: (c) => [`${c}× better`, "Improvement"]
                    }
                  ),
                  /* @__PURE__ */ e(Se, { dataKey: "improvement", fill: "#0d9488" })
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ t(
            D.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.7 },
              className: "grid grid-cols-1 md:grid-cols-2 gap-6",
              children: [
                /* @__PURE__ */ t("div", { className: "bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6", children: [
                  /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white mb-4", children: "Financial Analysis" }),
                  /* @__PURE__ */ t("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ t("div", { className: "flex justify-between items-center pb-3 border-b border-neutral-700", children: [
                      /* @__PURE__ */ e("span", { className: "text-sm text-neutral-400 font-mono", children: "Volume" }),
                      /* @__PURE__ */ t("span", { className: "text-white font-mono", children: [
                        r,
                        " tons"
                      ] })
                    ] }),
                    /* @__PURE__ */ t("div", { className: "flex justify-between items-center pb-3 border-b border-neutral-700", children: [
                      /* @__PURE__ */ e("span", { className: "text-sm text-neutral-400 font-mono", children: "Added Cost" }),
                      /* @__PURE__ */ t("span", { className: "text-white font-mono", children: [
                        "₹",
                        (p.additionalCost / 1e5).toFixed(2),
                        "L"
                      ] })
                    ] }),
                    /* @__PURE__ */ t("div", { className: "flex justify-between items-center pb-3 border-b border-neutral-700", children: [
                      /* @__PURE__ */ e("span", { className: "text-sm text-neutral-400 font-mono", children: "Added Revenue" }),
                      /* @__PURE__ */ t("span", { className: "text-brand-400 font-mono", children: [
                        "₹",
                        (p.additionalRevenue / 1e5).toFixed(2),
                        "L"
                      ] })
                    ] }),
                    /* @__PURE__ */ t("div", { className: "flex justify-between items-center", children: [
                      /* @__PURE__ */ e("span", { className: "text-sm text-white font-mono font-bold", children: "Net Benefit" }),
                      /* @__PURE__ */ t("span", { className: "text-2xl text-green-400 font-mono font-bold", children: [
                        "₹",
                        (p.netBenefit / 1e5).toFixed(2),
                        "L"
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-brand-500/20 to-cyan-500/20 border border-brand-500/30 rounded-sm p-6", children: [
                  /* @__PURE__ */ e("h3", { className: "text-xl font-display font-bold text-white mb-4", children: "Key Benefits" }),
                  /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ t("div", { children: [
                      /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-brand-400 mb-1", children: [
                        p.elongationImprovement,
                        "×"
                      ] }),
                      /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 font-mono", children: "Elongation" })
                    ] }),
                    /* @__PURE__ */ t("div", { children: [
                      /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-brand-400 mb-1", children: [
                        "+",
                        p.lifespanExtension,
                        "%"
                      ] }),
                      /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 font-mono", children: "Lifespan" })
                    ] }),
                    /* @__PURE__ */ t("div", { children: [
                      /* @__PURE__ */ t("div", { className: "text-3xl font-mono font-bold text-brand-400 mb-1", children: [
                        "+",
                        p.marketPremium,
                        "%"
                      ] }),
                      /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 font-mono", children: "Premium" })
                    ] }),
                    /* @__PURE__ */ t("div", { children: [
                      /* @__PURE__ */ e("div", { className: "text-3xl font-mono font-bold text-brand-400 mb-1", children: p.app.qualityImpact }),
                      /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 font-mono", children: "Quality" })
                    ] })
                  ] }),
                  /* @__PURE__ */ t("div", { className: "mt-4 text-xs text-neutral-400 font-mono text-center", children: [
                    "✓ Superior performance for ",
                    p.app.name.toLowerCase()
                  ] })
                ] })
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}, Dr = [
  { wc: 0.25, c1: 47, c2: 58, c3: 72 },
  { wc: 0.3, c1: 40, c2: 51, c3: 63 },
  { wc: 0.35, c1: 34, c2: 44, c3: 55 },
  { wc: 0.37, c1: 32, c2: 42, c3: 52 },
  // ← M-30 + Graphene operating W/C
  { wc: 0.4, c1: 29, c2: 37, c3: 47 },
  { wc: 0.45, c1: 24, c2: 32, c3: 41 },
  { wc: 0.48, c1: 22, c2: 29, c3: 38 },
  // ← M-20 + Graphene operating W/C
  { wc: 0.5, c1: 21, c2: 27, c3: 36 },
  { wc: 0.55, c1: 18, c2: 23, c3: 31 },
  // ← M-20 Control operating W/C
  { wc: 0.6, c1: 16, c2: 20, c3: 27 },
  { wc: 0.65, c1: 14, c2: 17, c3: 23 }
], Ar = [
  { sieve: "0.15", lower: 0, band: 6, m20G: 0.7, m20C: 0.8, m30G: 0.8 },
  { sieve: "0.6", lower: 10, band: 25, m20G: 21.4, m20C: 22.2, m30G: 23 },
  { sieve: "4.75", lower: 30, band: 20, m20G: 42.8, m20C: 44.1, m30G: 45.4 },
  { sieve: "20", lower: 95, band: 5, m20G: 95.6, m20C: 95.7, m30G: 95.8 },
  { sieve: "40", lower: 100, band: 0, m20G: 100, m20C: 100, m30G: 100 }
], hl = [
  { sieve: "0.15", actual: 1.9, lower: 0, upper: 10 },
  { sieve: "0.3", actual: 21.1, lower: 8, upper: 30 },
  { sieve: "0.6", actual: 54.6, lower: 35, upper: 59 },
  { sieve: "1.18", actual: 85.6, lower: 55, upper: 90 },
  { sieve: "2.36", actual: 96.6, lower: 75, upper: 100 },
  { sieve: "4.75", actual: 99.3, lower: 90, upper: 100 },
  { sieve: "10", actual: 100, lower: 100, upper: 100 }
], Lr = hl.map((r) => ({ ...r, band: r.upper - r.lower })), gl = [
  { sieve: "4.75", actual: 0.5, lower: 0, upper: 5 },
  { sieve: "10", actual: 1, lower: 0, upper: 20 },
  { sieve: "20", actual: 84.9, lower: 85, upper: 100 },
  { sieve: "40", actual: 100, lower: 100, upper: 100 }
], Rr = gl.map((r) => ({ ...r, band: r.upper - r.lower })), bl = [
  { sieve: "2.36", actual: 2.9, lower: 0, upper: 5 },
  { sieve: "4.75", actual: 11.4, lower: 0, upper: 20 },
  { sieve: "10", actual: 59.8, lower: 85, upper: 100 },
  { sieve: "12.5", actual: 86.4, lower: 100, upper: 100 }
], Ir = bl.map((r) => ({ ...r, band: r.upper - r.lower })), xl = [{ c: "1", load: 255, ra: 11, r28: 26 }, { c: "2", load: 236, ra: 10.5, r28: 25.5 }, { c: "3", load: 234, ra: 10.5, r28: 25.5 }], fl = [{ c: "1", load: 693.8, str: 30.5 }, { c: "2", load: 668.7, str: 29.5 }, { c: "3", load: 626.8, str: 27.5 }], vl = [{ c: "1", load: 233.3, ra: 10, r28: 24.5 }, { c: "2", load: 239.5, ra: 10.5, r28: 25.5 }, { c: "3", load: 226.8, ra: 10, r28: 24.5 }], yl = [{ c: "1", load: 551, ra: 24, r28: 47.5 }, { c: "2", load: 587.4, ra: 26, r28: 50.5 }, { c: "3", load: 589.2, ra: 26, r28: 50.5 }], Nl = [
  { ingredient: "Cement OPC-53", graphene: 331, control: 371 },
  { ingredient: "20mm CA", graphene: 587, control: 526 },
  { ingredient: "10mm CA", graphene: 633, control: 572 },
  { ingredient: "River Sand", graphene: 789, control: 752 },
  { ingredient: "Free Water", graphene: 159, control: 204 }
], Gr = [
  { name: "M-30 Char. (min)", value: 30, fill: "#e5e7eb" },
  { name: "Target Mean", value: 38.25, fill: "#d4d4d4" },
  { name: "ACT Equiv. 28-Day", value: 49.5, fill: "#171717" }
], He = ({ active: r, payload: i, label: n }) => !r || !i?.length ? null : /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-xl shadow-xl p-4 text-xs min-w-[160px]", children: [
  /* @__PURE__ */ e("p", { className: "font-semibold text-neutral-800 mb-2", children: n }),
  i.map((o, a) => o.value != null && /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-1", children: [
    /* @__PURE__ */ e("span", { className: "inline-block w-2.5 h-2.5 rounded-full shrink-0", style: { background: o.color ?? o.fill } }),
    /* @__PURE__ */ t("span", { className: "text-neutral-500 truncate", children: [
      o.name,
      ":"
    ] }),
    /* @__PURE__ */ e("span", { className: "font-mono font-medium text-neutral-900 ml-auto", children: o.value })
  ] }, a))
] }), at = ({ title: r, badge: i, children: n, defaultOpen: o = !1 }) => {
  const [a, s] = A(o);
  return /* @__PURE__ */ t("div", { className: "border border-neutral-200 rounded-2xl overflow-hidden", children: [
    /* @__PURE__ */ t("button", { onClick: () => s((d) => !d), className: "w-full flex items-center justify-between px-6 py-4 bg-neutral-50 hover:bg-neutral-100 transition-colors text-left", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ e("span", { className: "font-semibold text-neutral-900 text-sm", children: r }),
        i && /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-wider px-2 py-0.5 bg-green-100 text-green-700 rounded-full", children: i })
      ] }),
      a ? /* @__PURE__ */ e(qi, { className: "w-4 h-4 text-neutral-500 shrink-0" }) : /* @__PURE__ */ e(Zt, { className: "w-4 h-4 text-neutral-500 shrink-0" })
    ] }),
    a && /* @__PURE__ */ e("div", { className: "p-6", children: n })
  ] });
}, Te = ({ label: r, value: i, unit: n = "", sub: o, dark: a }) => /* @__PURE__ */ t("div", { className: `p-5 rounded-xl border ${a ? "bg-neutral-900 border-neutral-700" : "bg-white border-neutral-200"}`, children: [
  /* @__PURE__ */ e("div", { className: `text-xs font-semibold uppercase tracking-wide mb-2 ${a ? "text-neutral-400" : "text-neutral-500"}`, children: r }),
  /* @__PURE__ */ t("div", { className: `text-2xl font-display font-medium mb-1 ${a ? "text-white" : "text-neutral-900"}`, children: [
    i,
    /* @__PURE__ */ e("span", { className: `text-sm ml-1 ${a ? "text-neutral-400" : "text-neutral-500"}`, children: n })
  ] }),
  o && /* @__PURE__ */ e("div", { className: `text-xs ${a ? "text-neutral-500" : "text-neutral-400"}`, children: o })
] }), kt = ({ rows: r }) => /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ t("table", { className: "w-full text-sm border-collapse min-w-[520px]", children: [
  /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { className: "border-b border-neutral-200 bg-neutral-50", children: ["Ingredient", "kg/m³", "Proportion", "kg / bag", "L / bag", "Farma (35L)"].map((i) => /* @__PURE__ */ e("th", { className: "py-3 px-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-500 first:pl-4", children: i }, i)) }) }),
  /* @__PURE__ */ e("tbody", { className: "divide-y divide-neutral-100", children: r.map((i, n) => /* @__PURE__ */ t("tr", { className: "hover:bg-neutral-50 transition-colors", children: [
    /* @__PURE__ */ e("td", { className: "py-3 px-3 pl-4 font-medium text-neutral-900", children: i.ingredient }),
    /* @__PURE__ */ e("td", { className: "py-3 px-3 text-right font-mono text-neutral-700", children: i.kgm3 }),
    /* @__PURE__ */ e("td", { className: "py-3 px-3 text-right font-mono text-neutral-500", children: i.prop ?? "—" }),
    /* @__PURE__ */ e("td", { className: "py-3 px-3 text-right font-mono text-neutral-500", children: i.kgbag ?? "—" }),
    /* @__PURE__ */ e("td", { className: "py-3 px-3 text-right font-mono text-neutral-500", children: i.lbag ?? "—" }),
    /* @__PURE__ */ e("td", { className: "py-3 px-3 text-right font-mono text-neutral-500", children: i.farma ?? "—" })
  ] }, n)) })
] }) }), Ct = ({ cubes: r, type: i = "act", grade: n = "" }) => /* @__PURE__ */ t("div", { className: "overflow-x-auto mt-3", children: [
  /* @__PURE__ */ t("table", { className: "w-full text-xs border-collapse min-w-[420px]", children: [
    /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ t("tr", { className: "border-b border-neutral-200 bg-neutral-50", children: [
      /* @__PURE__ */ e("th", { className: "py-2 px-3 text-left font-semibold text-neutral-500", children: "Cube" }),
      /* @__PURE__ */ e("th", { className: "py-2 px-3 text-right font-semibold text-neutral-500", children: "Load (kN)" }),
      i === "act" && /* @__PURE__ */ e("th", { className: "py-2 px-3 text-right font-semibold text-neutral-500", children: "Ra (MPa)" }),
      /* @__PURE__ */ e("th", { className: "py-2 px-3 text-right font-semibold text-neutral-900", children: i === "act" ? "R₂₈ Equiv. (MPa)" : "Strength (MPa)" })
    ] }) }),
    /* @__PURE__ */ t("tbody", { className: "divide-y divide-neutral-100", children: [
      r.map((o, a) => /* @__PURE__ */ t("tr", { children: [
        /* @__PURE__ */ t("td", { className: "py-2 px-3 font-medium text-neutral-700", children: [
          "Cube ",
          o.c
        ] }),
        /* @__PURE__ */ e("td", { className: "py-2 px-3 text-right font-mono text-neutral-600", children: o.load }),
        i === "act" && /* @__PURE__ */ e("td", { className: "py-2 px-3 text-right font-mono text-neutral-600", children: o.ra }),
        /* @__PURE__ */ e("td", { className: "py-2 px-3 text-right font-mono font-semibold text-neutral-900", children: i === "act" ? o.r28 : o.str })
      ] }, a)),
      /* @__PURE__ */ t("tr", { className: "border-t-2 border-neutral-300", children: [
        /* @__PURE__ */ e("td", { colSpan: i === "act" ? 3 : 2, className: "py-2 px-3 text-right font-bold text-neutral-700", children: "Average" }),
        /* @__PURE__ */ t("td", { className: "py-2 px-3 text-right font-bold text-neutral-900", children: [
          i === "act" ? (r.reduce((o, a) => o + a.r28, 0) / r.length).toFixed(1) : (r.reduce((o, a) => o + a.str, 0) / r.length).toFixed(1),
          " MPa"
        ] })
      ] })
    ] })
  ] }),
  i === "act" && /* @__PURE__ */ e("p", { className: "text-xs text-neutral-400 mt-2", children: "Formula: R₂₈ = 8.09 + 1.64 × Ra  ·  IS 9013 : 1978  ·  Cube size 150×150×150 mm" })
] }), Ke = ({ data: r, title: i, zone: n }) => /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-xl p-4", children: [
  /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-1", children: [
    /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-neutral-800", children: i }),
    n && /* @__PURE__ */ t("span", { className: "text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full font-semibold", children: [
      "Zone ",
      n
    ] })
  ] }),
  /* @__PURE__ */ e("p", { className: "text-xs text-neutral-400 mb-3", children: "Cumulative % Passing · IS 383 tolerance band (amber) vs actual (black)" }),
  /* @__PURE__ */ e(Q, { width: "100%", height: 200, children: /* @__PURE__ */ t(lt, { data: r, margin: { top: 5, right: 10, bottom: 20, left: 0 }, children: [
    /* @__PURE__ */ e(ee, { strokeDasharray: "3 3", stroke: "#f5f5f5" }),
    /* @__PURE__ */ e(te, { dataKey: "sieve", tick: { fontSize: 9, fill: "#737373" }, label: { value: "Sieve (mm)", position: "insideBottom", offset: -12, fontSize: 9, fill: "#737373" } }),
    /* @__PURE__ */ e(ae, { domain: [0, 105], tick: { fontSize: 9, fill: "#737373" }, width: 30 }),
    /* @__PURE__ */ e(J, { content: /* @__PURE__ */ e(He, {}) }),
    /* @__PURE__ */ e(Oe, { type: "monotone", dataKey: "lower", stackId: "band", fill: "transparent", stroke: "none", legendType: "none", name: "" }),
    /* @__PURE__ */ e(Oe, { type: "monotone", dataKey: "band", stackId: "band", fill: "#fef3c7", fillOpacity: 0.7, stroke: "#f59e0b", strokeDasharray: "4 2", strokeWidth: 1.5, dot: !1, name: "IS 383 Band" }),
    /* @__PURE__ */ e(ne, { type: "monotone", dataKey: "actual", stroke: "#171717", strokeWidth: 2, dot: { r: 4, fill: "#171717", stroke: "white", strokeWidth: 1 }, name: "Actual" }),
    /* @__PURE__ */ e(Le, { y: 100, stroke: "#d1d5db", strokeDasharray: "2 2" })
  ] }) })
] }), Ms = () => {
  const [r, i] = A("m20"), n = [
    { ingredient: "Cement OPC-53", kgm3: "331", prop: "—", kgbag: "50", lbag: "—", farma: "—" },
    { ingredient: "20 mm CA (SSD)", kgm3: "587", prop: "29.2%", kgbag: "89", lbag: "57", farma: "1.6" },
    { ingredient: "10 mm CA (SSD)", kgm3: "633", prop: "31.5%", kgbag: "96", lbag: "62", farma: "1.8" },
    { ingredient: "River Sand (SSD)", kgm3: "789", prop: "39.3%", kgbag: "119", lbag: "77", farma: "2.2" },
    { ingredient: "Free Water", kgm3: "159", prop: "—", kgbag: "24L", lbag: "24", farma: "—" },
    { ingredient: "Graphene Admixture (PC, 0.8%)", kgm3: "2.6", prop: "0.8% bwc", kgbag: "0.4", lbag: "0.37", farma: "—" }
  ], o = [
    { ingredient: "Cement OPC-53", kgm3: "331", prop: "—", kgbag: "50", lbag: "—", farma: "—" },
    { ingredient: "20 mm CA (DRY)", kgm3: "586", prop: "29.3%", kgbag: "89", lbag: "57", farma: "1.6" },
    { ingredient: "10 mm CA (DRY)", kgm3: "631", prop: "31.6%", kgbag: "95", lbag: "62", farma: "1.8" },
    { ingredient: "River Sand (DRY)", kgm3: "783", prop: "39.2%", kgbag: "118", lbag: "77", farma: "2.2" },
    { ingredient: "Total Water", kgm3: "168", prop: "—", kgbag: "25L", lbag: "25.4", farma: "—" },
    { ingredient: "Graphene Admixture (PC, 0.8%)", kgm3: "2.6", prop: "0.8% bwc", kgbag: "0.4", lbag: "0.37", farma: "—" }
  ], a = [
    { ingredient: "Cement OPC-53", kgm3: "371", prop: "—", kgbag: "50", lbag: "—", farma: "—" },
    { ingredient: "20 mm CA (SSD)", kgm3: "526", prop: "28.4%", kgbag: "71", lbag: "46", farma: "1.3" },
    { ingredient: "10 mm CA (SSD)", kgm3: "572", prop: "30.9%", kgbag: "77", lbag: "50", farma: "1.4" },
    { ingredient: "River Sand (SSD)", kgm3: "752", prop: "40.6%", kgbag: "101", lbag: "66", farma: "1.9" },
    { ingredient: "Free Water", kgm3: "204", prop: "—", kgbag: "27L", lbag: "27.5", farma: "—" },
    { ingredient: "Admixture", kgm3: "—", prop: "None", kgbag: "—", lbag: "—", farma: "—" }
  ], s = [
    { ingredient: "Cement OPC-53", kgm3: "422", prop: "—", kgbag: "50", lbag: "—", farma: "—" },
    { ingredient: "20 mm CA (SSD)", kgm3: "535", prop: "27.8%", kgbag: "63", lbag: "41", farma: "1.2" },
    { ingredient: "10 mm CA (SSD)", kgm3: "579", prop: "30.1%", kgbag: "69", lbag: "45", farma: "1.3" },
    { ingredient: "River Sand (SSD)", kgm3: "812", prop: "42.1%", kgbag: "96", lbag: "62", farma: "1.8" },
    { ingredient: "Free Water", kgm3: "156", prop: "—", kgbag: "19L", lbag: "18.5", farma: "—" },
    { ingredient: "Monoatom Graphene Adm. (PC, 0.8%)", kgm3: "3.4", prop: "0.8% bwc", kgbag: "0.4", lbag: "0.37", farma: "—" }
  ];
  return /* @__PURE__ */ t("div", { className: "space-y-8", children: [
    /* @__PURE__ */ t("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-4", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-3 bg-green-50 text-green-700 border border-green-200", children: [
          /* @__PURE__ */ e(Ze, { className: "w-4 h-4 shrink-0" }),
          /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-wider", children: "NABL Accredited · Global Lab, Bhubaneswar" })
        ] }),
        /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium text-neutral-900", children: "Certified Laboratory Test Results" }),
        /* @__PURE__ */ e("p", { className: "text-neutral-500 mt-1 text-sm max-w-xl", children: "Independent third-party concrete mix design and compressive strength testing as per IS 10262 : 2019 · IS 456 : 2000 · IS 9013 : 1978. All graphs reproduced from official test reports." })
      ] }),
      /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2 shrink-0", children: [
        { label: "M-20 + Graphene" },
        { label: "M-20 Control" },
        { label: "M-30 + Graphene" }
      ].map((d) => /* @__PURE__ */ t("div", { className: "flex items-center gap-1.5 px-3 py-1.5 bg-white border border-neutral-200 rounded-lg text-xs", children: [
        /* @__PURE__ */ e(Kt, { className: "w-3.5 h-3.5 text-green-600 shrink-0" }),
        /* @__PURE__ */ e("span", { className: "text-neutral-500", children: d.label })
      ] }, d.label)) })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex gap-2 border-b border-neutral-200", children: [
      { key: "m20", label: "M-20  ·  Graphene vs Control" },
      { key: "m30", label: "M-30  ·  with Graphene (R&D)" }
    ].map((d) => /* @__PURE__ */ e(
      "button",
      {
        onClick: () => i(d.key),
        className: `px-5 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px ${r === d.key ? "border-neutral-900 text-neutral-900" : "border-transparent text-neutral-500 hover:text-neutral-700"}`,
        children: d.label
      },
      d.key
    )) }),
    r === "m20" && /* @__PURE__ */ t("div", { className: "space-y-10", children: [
      /* @__PURE__ */ t("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ e(Te, { label: "Cement Saved", value: "40", unit: "kg/m³", sub: "331 vs 371 — 10.8% less" }),
        /* @__PURE__ */ e(Te, { label: "W/C Ratio", value: "0.48", sub: "vs 0.55 control · Denser mix" }),
        /* @__PURE__ */ e(Te, { label: "Slump (Workability)", value: "160", unit: "mm", sub: "vs 130 mm control · Better flow" }),
        /* @__PURE__ */ e(Te, { label: "28-Day Actual Strength", value: "29.0", unit: "MPa", sub: "Avg 3 cubes · NABL Certified", dark: !0 })
      ] }),
      /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-6", children: [
        /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-neutral-800 mb-1", children: "IS 10262 : 2019 Figure 1 — Free Water-Cement Ratio vs 28-Day Compressive Strength" }),
        /* @__PURE__ */ t("p", { className: "text-xs text-neutral-400 mb-1", children: [
          "Reference curves for OPC grade selection. All 3 mixes use ",
          /* @__PURE__ */ e("strong", { children: "OPC-53 (Curve 3)" }),
          ". Operating points show actual/ACT-equivalent strength achieved."
        ] }),
        /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-3 mb-4 text-xs", children: [
          /* @__PURE__ */ t("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e("span", { className: "inline-block w-4 h-0.5 bg-neutral-900 rounded" }),
            /* @__PURE__ */ e("span", { className: "font-semibold", children: "M-20 + Graphene" }),
            ": W/C 0.48 → 29.0 MPa (actual 28-day)"
          ] }),
          /* @__PURE__ */ t("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ e("span", { className: "inline-block w-4 h-0.5 bg-neutral-400 rounded" }),
            /* @__PURE__ */ e("span", { className: "font-semibold", children: "M-20 Control" }),
            ": W/C 0.55 → 25.0 MPa (ACT equiv.)"
          ] })
        ] }),
        /* @__PURE__ */ e(Q, { width: "100%", height: 280, children: /* @__PURE__ */ t(lt, { data: Dr, margin: { top: 10, right: 30, bottom: 30, left: 10 }, children: [
          /* @__PURE__ */ e(ee, { strokeDasharray: "3 3", stroke: "#f5f5f5" }),
          /* @__PURE__ */ e(
            te,
            {
              dataKey: "wc",
              type: "number",
              domain: [0.25, 0.65],
              tickCount: 9,
              tickFormatter: (d) => d.toFixed(2),
              tick: { fontSize: 10, fill: "#737373" },
              label: { value: "Free Water-Cement Ratio", position: "insideBottom", offset: -18, fontSize: 11, fill: "#525252" }
            }
          ),
          /* @__PURE__ */ e(
            ae,
            {
              domain: [0, 80],
              tick: { fontSize: 10, fill: "#737373" },
              unit: " MPa",
              width: 52,
              label: { value: "28-Day Strength (N/mm²)", angle: -90, position: "insideLeft", offset: 10, fontSize: 11, fill: "#525252" }
            }
          ),
          /* @__PURE__ */ e(J, { content: /* @__PURE__ */ e(He, {}) }),
          /* @__PURE__ */ e(ze, { verticalAlign: "top", wrapperStyle: { fontSize: 11, paddingBottom: 6 } }),
          /* @__PURE__ */ e(ne, { type: "monotone", dataKey: "c1", stroke: "#d4d4d4", strokeWidth: 1.5, dot: !1, name: "Curve 1 — OPC-33", strokeDasharray: "5 3" }),
          /* @__PURE__ */ e(ne, { type: "monotone", dataKey: "c2", stroke: "#a3a3a3", strokeWidth: 1.5, dot: !1, name: "Curve 2 — OPC-43", strokeDasharray: "5 3" }),
          /* @__PURE__ */ e(ne, { type: "monotone", dataKey: "c3", stroke: "#525252", strokeWidth: 2, dot: !1, name: "Curve 3 — OPC-53 (used)" }),
          /* @__PURE__ */ e(
            Le,
            {
              y: 20,
              stroke: "#ef4444",
              strokeDasharray: "4 2",
              label: { value: "M-20 min (20 MPa)", position: "insideTopRight", fontSize: 9, fill: "#ef4444" }
            }
          ),
          /* @__PURE__ */ e(
            da,
            {
              x: 0.48,
              y: 29,
              r: 8,
              fill: "#171717",
              stroke: "white",
              strokeWidth: 2,
              label: { value: "M-20+G · 29 MPa", position: "top", fontSize: 10, fill: "#171717", fontWeight: 600 }
            }
          ),
          /* @__PURE__ */ e(
            da,
            {
              x: 0.55,
              y: 25,
              r: 7,
              fill: "#9ca3af",
              stroke: "white",
              strokeWidth: 2,
              label: { value: "M-20 Control · 25 MPa", position: "top", fontSize: 10, fill: "#6b7280" }
            }
          )
        ] }) }),
        /* @__PURE__ */ t("p", { className: "text-xs text-neutral-400 mt-2 flex items-start gap-1.5", children: [
          /* @__PURE__ */ e(ot, { className: "w-3.5 h-3.5 shrink-0 mt-0.5" }),
          "Operating points plot below Curve 3 because IS 10262 reference curves represent OPC-53 cement strength potential; actual concrete strength is lower due to aggregate ITZ effects. The Graphene mix (W/C 0.48, MODERATE exposure) achieves higher strength with stricter W/C than the control (W/C 0.55, MILD exposure)."
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-6", children: [
        /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-neutral-800 mb-1", children: "All-in Aggregate Combined Gradation — IS 383 : 2016, Table 10 (20mm Nominal Size)" }),
        /* @__PURE__ */ t("p", { className: "text-xs text-neutral-400 mb-4", children: [
          "Amber band = IS 383 tolerance zone (lower to upper limits). Aggregate proportions: ",
          /* @__PURE__ */ e("strong", { children: "M-20+G" }),
          " — 29.2% / 31.5% / 39.3% · ",
          /* @__PURE__ */ e("strong", { children: "M-20 Control" }),
          " — 28.4% / 30.9% / 40.6% (20mm / 10mm / Sand)"
        ] }),
        /* @__PURE__ */ e(Q, { width: "100%", height: 260, children: /* @__PURE__ */ t(lt, { data: Ar, margin: { top: 5, right: 20, bottom: 30, left: 10 }, children: [
          /* @__PURE__ */ e(ee, { strokeDasharray: "3 3", stroke: "#f5f5f5" }),
          /* @__PURE__ */ e(
            te,
            {
              dataKey: "sieve",
              tick: { fontSize: 10, fill: "#737373" },
              label: { value: "IS Sieve Size (mm)", position: "insideBottom", offset: -18, fontSize: 11, fill: "#525252" }
            }
          ),
          /* @__PURE__ */ e(
            ae,
            {
              domain: [0, 105],
              tick: { fontSize: 10, fill: "#737373" },
              unit: "%",
              width: 38,
              label: { value: "Cumulative % Passing", angle: -90, position: "insideLeft", offset: 10, fontSize: 11, fill: "#525252" }
            }
          ),
          /* @__PURE__ */ e(J, { content: /* @__PURE__ */ e(He, {}) }),
          /* @__PURE__ */ e(ze, { verticalAlign: "top", wrapperStyle: { fontSize: 11, paddingBottom: 6 } }),
          /* @__PURE__ */ e(Oe, { type: "monotone", dataKey: "lower", stackId: "b", fill: "transparent", stroke: "none", legendType: "none", name: "" }),
          /* @__PURE__ */ e(Oe, { type: "monotone", dataKey: "band", stackId: "b", fill: "#fef3c7", fillOpacity: 0.7, stroke: "#f59e0b", strokeDasharray: "4 2", strokeWidth: 1.5, dot: !1, name: "IS 383 Tolerance Band" }),
          /* @__PURE__ */ e(ne, { type: "monotone", dataKey: "m20G", stroke: "#171717", strokeWidth: 2.5, dot: { r: 5, fill: "#171717", stroke: "white", strokeWidth: 1 }, name: "M-20 + Graphene" }),
          /* @__PURE__ */ e(ne, { type: "monotone", dataKey: "m20C", stroke: "#9ca3af", strokeWidth: 2, strokeDasharray: "6 2", dot: { r: 4, fill: "#9ca3af", stroke: "white", strokeWidth: 1 }, name: "M-20 Control" })
        ] }) }),
        /* @__PURE__ */ e("div", { className: "mt-3 overflow-x-auto", children: /* @__PURE__ */ t("table", { className: "text-xs w-full min-w-[480px]", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ t("tr", { className: "border-b border-neutral-200", children: [
            /* @__PURE__ */ e("th", { className: "py-1.5 px-3 text-left text-neutral-500 font-semibold", children: "Sieve (mm)" }),
            /* @__PURE__ */ e("th", { className: "py-1.5 px-3 text-right text-neutral-500 font-semibold", children: "IS Lower (%)" }),
            /* @__PURE__ */ e("th", { className: "py-1.5 px-3 text-right text-neutral-500 font-semibold", children: "IS Upper (%)" }),
            /* @__PURE__ */ e("th", { className: "py-1.5 px-3 text-right text-neutral-900 font-semibold", children: "M-20 + Graphene" }),
            /* @__PURE__ */ e("th", { className: "py-1.5 px-3 text-right text-neutral-500 font-semibold", children: "M-20 Control" })
          ] }) }),
          /* @__PURE__ */ e("tbody", { className: "divide-y divide-neutral-100", children: [
            ["40", 100, 100, 100, 100],
            ["20", 95, 100, 95.6, 95.7],
            ["4.75", 30, 50, 42.8, 44.1],
            ["0.6", 10, 35, 21.4, 22.2],
            ["0.15", 0, 6, 0.7, 0.8]
          ].map(([d, m, p, c, g]) => /* @__PURE__ */ t("tr", { children: [
            /* @__PURE__ */ e("td", { className: "py-1.5 px-3 font-mono", children: d }),
            /* @__PURE__ */ e("td", { className: "py-1.5 px-3 text-right font-mono text-neutral-500", children: m }),
            /* @__PURE__ */ e("td", { className: "py-1.5 px-3 text-right font-mono text-neutral-500", children: p }),
            /* @__PURE__ */ e("td", { className: "py-1.5 px-3 text-right font-mono font-semibold text-neutral-900", children: c }),
            /* @__PURE__ */ e("td", { className: "py-1.5 px-3 text-right font-mono text-neutral-500", children: g })
          ] }, d)) })
        ] }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-6", children: [
        /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-neutral-800 mb-4", children: "Mix Design — Ingredient Quantities per m³" }),
        /* @__PURE__ */ e(Q, { width: "100%", height: 220, children: /* @__PURE__ */ t(_e, { data: Nl, layout: "vertical", margin: { top: 0, right: 30, bottom: 0, left: 90 }, barCategoryGap: "20%", children: [
          /* @__PURE__ */ e(ee, { strokeDasharray: "3 3", stroke: "#f5f5f5", horizontal: !1 }),
          /* @__PURE__ */ e(te, { type: "number", tick: { fontSize: 10, fill: "#737373" }, unit: " kg" }),
          /* @__PURE__ */ e(ae, { type: "category", dataKey: "ingredient", tick: { fontSize: 10, fill: "#525252" }, width: 90 }),
          /* @__PURE__ */ e(J, { content: /* @__PURE__ */ e(He, {}) }),
          /* @__PURE__ */ e(ze, { wrapperStyle: { fontSize: 11 } }),
          /* @__PURE__ */ e(Se, { dataKey: "graphene", name: "M-20 + Graphene", fill: "#171717", radius: [0, 4, 4, 0] }),
          /* @__PURE__ */ e(Se, { dataKey: "control", name: "M-20 Control", fill: "#e5e7eb", radius: [0, 4, 4, 0] })
        ] }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-6", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ e("span", { className: "w-2.5 h-2.5 rounded-full bg-neutral-900 inline-block" }),
            /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-neutral-800", children: "M-20 + Graphene — Cube Results" })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-xs text-neutral-400 mb-1", children: "Casting: 07-07-2025 · Cube 150×150×150 mm" }),
          /* @__PURE__ */ e("p", { className: "text-xs font-semibold text-neutral-600 mt-3 mb-1", children: "ACT (1-day, IS 9013) → R₂₈ Equivalent" }),
          /* @__PURE__ */ e(Ct, { cubes: xl, type: "act" }),
          /* @__PURE__ */ e("p", { className: "text-xs font-semibold text-neutral-600 mt-4 mb-1", children: "Actual 28-Day Compression Test" }),
          /* @__PURE__ */ e(Ct, { cubes: fl, type: "28d" }),
          /* @__PURE__ */ t("div", { className: "mt-3 bg-green-50 border border-green-200 rounded-xl p-3 text-xs text-green-800", children: [
            /* @__PURE__ */ e("strong", { children: "Average 28-day: 29.0 MPa" }),
            " · Exceeds M-20 characteristic (20 MPa) by ",
            /* @__PURE__ */ e("strong", { children: "+45%" })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-6", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ e("span", { className: "w-2.5 h-2.5 rounded-full bg-neutral-400 inline-block" }),
            /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-neutral-800", children: "M-20 Control — Cube Results" })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-xs text-neutral-400 mb-1", children: "Casting: 14-07-2025 · Cube 150×150×150 mm" }),
          /* @__PURE__ */ e("p", { className: "text-xs font-semibold text-neutral-600 mt-3 mb-1", children: "ACT (1-day, IS 9013) → R₂₈ Equivalent" }),
          /* @__PURE__ */ e(Ct, { cubes: vl, type: "act" }),
          /* @__PURE__ */ t("div", { className: "mt-4 bg-neutral-50 border border-neutral-200 rounded-xl p-3 text-xs text-neutral-600", children: [
            /* @__PURE__ */ e("strong", { children: "ACT Average: 25.0 MPa equiv." }),
            " · No actual 28-day cube test in this report (ACT-only study period: 5 days)."
          ] }),
          /* @__PURE__ */ t("div", { className: "mt-3 bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800", children: [
            /* @__PURE__ */ e("strong", { children: "Exposure comparison:" }),
            " Graphene mix = MODERATE (W/C ≤ 0.50 per IS 456) · Control = MILD (W/C ≤ 0.55). Graphene meets a stricter exposure condition at lower W/C."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e(at, { title: "Individual Aggregate Sieve Analysis — IS 383 : 2016 (Common to All 3 Reports)", children: /* @__PURE__ */ t("div", { className: "space-y-4", children: [
        /* @__PURE__ */ e("p", { className: "text-xs text-neutral-500", children: "All 3 reports use identical aggregate sources: Natural Sand from Mahanadi River · Coarse aggregate from Gudhiakatani, Odisha. SG: CA 2.89, Sand 2.62. WA%: 20mm 0.16, 10mm 0.38, Sand 0.73. DLBD: 1.54 kg/l (all)." }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ e(Ke, { data: Lr, title: "Natural Sand (Mahanadi)", zone: "II" }),
          /* @__PURE__ */ e(Ke, { data: Rr, title: "20mm Coarse Aggregate" }),
          /* @__PURE__ */ e(Ke, { data: Ir, title: "10mm Coarse Aggregate" })
        ] }),
        /* @__PURE__ */ t("div", { className: "text-xs text-neutral-400 flex items-start gap-1.5 bg-neutral-50 rounded-lg p-3 border border-neutral-200", children: [
          /* @__PURE__ */ e(ot, { className: "w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-500" }),
          /* @__PURE__ */ e("span", { children: "10mm CA passes 86.4% at 12.5mm sieve (IS 383 requires 100%). This grading deviation is within normal site variation for single-size aggregate and is compensated by the combined all-in grading which meets IS 383 Table 10 requirements at all sieves." })
        ] })
      ] }) }),
      /* @__PURE__ */ e(at, { title: "M-20 + Graphene Full Mix Proportions (SSD & Dry)", badge: "M-20 + Graphene", children: /* @__PURE__ */ t("div", { className: "space-y-6", children: [
        /* @__PURE__ */ e("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 bg-neutral-50 rounded-xl p-4 text-xs", children: [
          ["Grade", "M-20 (RCC)"],
          ["Exposure", "MODERATE"],
          ["W/C", "0.48"],
          ["Target Mean", "26.6 N/mm²"],
          ["Slump", "160 mm"],
          ["Placing", "Pumpable"],
          ["Admixture", "Graphene PC · 0.8%"],
          ["Period", "02/07 – 04/08/2025"]
        ].map(([d, m]) => /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("span", { className: "block font-semibold text-neutral-900", children: d }),
          m
        ] }, d)) }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-xs font-semibold text-neutral-700 mb-2", children: "SSD Condition" }),
          /* @__PURE__ */ e(kt, { rows: n })
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-xs font-semibold text-neutral-700 mb-2", children: "Dry Condition" }),
          /* @__PURE__ */ e(kt, { rows: o })
        ] })
      ] }) }),
      /* @__PURE__ */ e(at, { title: "M-20 Control Full Mix Proportions (SSD & Dry)", badge: "M-20 Control", children: /* @__PURE__ */ t("div", { className: "space-y-6", children: [
        /* @__PURE__ */ e("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 bg-neutral-50 rounded-xl p-4 text-xs", children: [
          ["Grade", "M-20 (RCC)"],
          ["Exposure", "MILD"],
          ["W/C", "0.55"],
          ["Target Mean", "26.6 N/mm²"],
          ["Slump", "130 mm"],
          ["Placing", "Pumpable"],
          ["Admixture", "None"],
          ["Period", "10/07 – 15/07/2025"]
        ].map(([d, m]) => /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("span", { className: "block font-semibold text-neutral-900", children: d }),
          m
        ] }, d)) }),
        /* @__PURE__ */ e(kt, { rows: a })
      ] }) })
    ] }),
    r === "m30" && /* @__PURE__ */ t("div", { className: "space-y-10", children: [
      /* @__PURE__ */ t("div", { className: "bg-neutral-900 text-white rounded-2xl p-8 md:p-10 relative overflow-hidden", children: [
        /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ t("div", { className: "relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-neutral-800", children: [
          /* @__PURE__ */ t("div", { className: "md:pr-8", children: [
            /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 bg-green-900/40 text-green-400 rounded-lg text-xs font-bold uppercase tracking-wider mb-4", children: [
              /* @__PURE__ */ e(we, { className: "w-3.5 h-3.5" }),
              "M-30 R&D Mix"
            ] }),
            /* @__PURE__ */ e("h4", { className: "text-xl font-display font-medium mb-2", children: "Significantly Exceeds Grade Target" }),
            /* @__PURE__ */ t("p", { className: "text-neutral-400 text-sm leading-relaxed", children: [
              "M-30 mix with Monoatom Graphene admixture achieved ACT-equivalent 28-day strength of",
              /* @__PURE__ */ e("strong", { className: "text-white", children: " 49.5 MPa" }),
              " — 65% above M-30's characteristic strength of 30 MPa. Test witnessed by Mr. Sushant Pattnaik (Scientist)."
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col justify-center md:px-8", children: [
            /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider mb-1", children: "ACT Equiv. 28-Day Avg" }),
            /* @__PURE__ */ t("div", { className: "text-5xl font-display font-bold text-white mb-1", children: [
              "49.5 ",
              /* @__PURE__ */ e("span", { className: "text-2xl font-normal text-neutral-400", children: "MPa" })
            ] }),
            /* @__PURE__ */ e("div", { className: "text-xs text-green-400 font-semibold", children: "Target mean: 38.25 MPa (IS 10262)" })
          ] }),
          /* @__PURE__ */ t("div", { className: "flex flex-col justify-center md:pl-8 gap-4", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 mb-0.5", children: "W/C Ratio" }),
              /* @__PURE__ */ e("div", { className: "text-2xl font-display font-medium", children: "0.37" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500", children: "Dense microstructure" })
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 mb-0.5", children: "Initial Slump" }),
              /* @__PURE__ */ e("div", { className: "text-2xl font-display font-medium", children: "220 mm" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500", children: "vs 150 mm design target" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
        /* @__PURE__ */ e(Te, { label: "Cement Content", value: "422", unit: " kg/m³", sub: "OPC-53 · Ultratech" }),
        /* @__PURE__ */ e(Te, { label: "W/C Ratio", value: "0.37", sub: "Target mean 38.25 N/mm²" }),
        /* @__PURE__ */ e(Te, { label: "Admixture Dose", value: "0.8%", sub: "3.4 kg/m³ · Monoatom PC" }),
        /* @__PURE__ */ e(Te, { label: "ACT Equiv. R₂₈", value: "49.5", unit: " MPa", sub: "+29% above target mean", dark: !0 })
      ] }),
      /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-6", children: [
        /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-neutral-800 mb-1", children: "IS 10262 : 2019 Figure 1 — Free Water-Cement Ratio vs 28-Day Compressive Strength" }),
        /* @__PURE__ */ t("p", { className: "text-xs text-neutral-400 mb-1", children: [
          "All 3 IS reference curves shown. M-30 + Graphene mix uses W/C = 0.37 on ",
          /* @__PURE__ */ e("strong", { children: "Curve 3 (OPC-53)" }),
          "."
        ] }),
        /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-3 mb-4 text-xs", children: /* @__PURE__ */ t("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ e("span", { className: "inline-block w-4 h-0.5 bg-green-600 rounded" }),
          /* @__PURE__ */ e("span", { className: "font-semibold", children: "M-30 + Graphene" }),
          ": W/C 0.37 → 49.5 MPa (ACT equiv.)"
        ] }) }),
        /* @__PURE__ */ e(Q, { width: "100%", height: 280, children: /* @__PURE__ */ t(lt, { data: Dr, margin: { top: 10, right: 30, bottom: 30, left: 10 }, children: [
          /* @__PURE__ */ e(ee, { strokeDasharray: "3 3", stroke: "#f5f5f5" }),
          /* @__PURE__ */ e(
            te,
            {
              dataKey: "wc",
              type: "number",
              domain: [0.25, 0.65],
              tickCount: 9,
              tickFormatter: (d) => d.toFixed(2),
              tick: { fontSize: 10, fill: "#737373" },
              label: { value: "Free Water-Cement Ratio", position: "insideBottom", offset: -18, fontSize: 11, fill: "#525252" }
            }
          ),
          /* @__PURE__ */ e(
            ae,
            {
              domain: [0, 80],
              tick: { fontSize: 10, fill: "#737373" },
              unit: " MPa",
              width: 52,
              label: { value: "28-Day Strength (N/mm²)", angle: -90, position: "insideLeft", offset: 10, fontSize: 11, fill: "#525252" }
            }
          ),
          /* @__PURE__ */ e(J, { content: /* @__PURE__ */ e(He, {}) }),
          /* @__PURE__ */ e(ze, { verticalAlign: "top", wrapperStyle: { fontSize: 11, paddingBottom: 6 } }),
          /* @__PURE__ */ e(ne, { type: "monotone", dataKey: "c1", stroke: "#d4d4d4", strokeWidth: 1.5, dot: !1, name: "Curve 1 — OPC-33", strokeDasharray: "5 3" }),
          /* @__PURE__ */ e(ne, { type: "monotone", dataKey: "c2", stroke: "#a3a3a3", strokeWidth: 1.5, dot: !1, name: "Curve 2 — OPC-43", strokeDasharray: "5 3" }),
          /* @__PURE__ */ e(ne, { type: "monotone", dataKey: "c3", stroke: "#525252", strokeWidth: 2, dot: !1, name: "Curve 3 — OPC-53 (used)" }),
          /* @__PURE__ */ e(
            Le,
            {
              y: 30,
              stroke: "#ef4444",
              strokeDasharray: "4 2",
              label: { value: "M-30 min (30 MPa)", position: "insideTopRight", fontSize: 9, fill: "#ef4444" }
            }
          ),
          /* @__PURE__ */ e(
            Le,
            {
              y: 38.25,
              stroke: "#f97316",
              strokeDasharray: "4 2",
              label: { value: "Target mean (38.25 MPa)", position: "insideTopLeft", fontSize: 9, fill: "#f97316" }
            }
          ),
          /* @__PURE__ */ e(
            da,
            {
              x: 0.37,
              y: 49.5,
              r: 9,
              fill: "#059669",
              stroke: "white",
              strokeWidth: 2,
              label: { value: "M-30+G · 49.5 MPa (ACT)", position: "top", fontSize: 10, fill: "#059669", fontWeight: 600 }
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-6", children: [
        /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-neutral-800 mb-1", children: "All-in Aggregate Combined Gradation — IS 383 : 2016, Table 10 (20mm Nominal Size)" }),
        /* @__PURE__ */ e("p", { className: "text-xs text-neutral-400 mb-4", children: "Aggregate proportions: 20mm 27.8% · 10mm 30.1% · River Sand 42.1%. Combined grading falls within IS 383 tolerance band at all sieve sizes." }),
        /* @__PURE__ */ e(Q, { width: "100%", height: 250, children: /* @__PURE__ */ t(lt, { data: Ar, margin: { top: 5, right: 20, bottom: 30, left: 10 }, children: [
          /* @__PURE__ */ e(ee, { strokeDasharray: "3 3", stroke: "#f5f5f5" }),
          /* @__PURE__ */ e(
            te,
            {
              dataKey: "sieve",
              tick: { fontSize: 10, fill: "#737373" },
              label: { value: "IS Sieve Size (mm)", position: "insideBottom", offset: -18, fontSize: 11, fill: "#525252" }
            }
          ),
          /* @__PURE__ */ e(
            ae,
            {
              domain: [0, 105],
              tick: { fontSize: 10, fill: "#737373" },
              unit: "%",
              width: 38,
              label: { value: "Cumulative % Passing", angle: -90, position: "insideLeft", offset: 10, fontSize: 11, fill: "#525252" }
            }
          ),
          /* @__PURE__ */ e(J, { content: /* @__PURE__ */ e(He, {}) }),
          /* @__PURE__ */ e(ze, { verticalAlign: "top", wrapperStyle: { fontSize: 11, paddingBottom: 6 } }),
          /* @__PURE__ */ e(Oe, { type: "monotone", dataKey: "lower", stackId: "b", fill: "transparent", stroke: "none", legendType: "none", name: "" }),
          /* @__PURE__ */ e(Oe, { type: "monotone", dataKey: "band", stackId: "b", fill: "#fef3c7", fillOpacity: 0.7, stroke: "#f59e0b", strokeDasharray: "4 2", strokeWidth: 1.5, dot: !1, name: "IS 383 Tolerance Band" }),
          /* @__PURE__ */ e(ne, { type: "monotone", dataKey: "m30G", stroke: "#059669", strokeWidth: 2.5, dot: { r: 5, fill: "#059669", stroke: "white", strokeWidth: 1 }, name: "M-30 + Graphene" })
        ] }) }),
        /* @__PURE__ */ e("div", { className: "mt-3 overflow-x-auto", children: /* @__PURE__ */ t("table", { className: "text-xs w-full min-w-[400px]", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ t("tr", { className: "border-b border-neutral-200", children: [
            /* @__PURE__ */ e("th", { className: "py-1.5 px-3 text-left text-neutral-500 font-semibold", children: "Sieve (mm)" }),
            /* @__PURE__ */ e("th", { className: "py-1.5 px-3 text-right text-neutral-500 font-semibold", children: "IS Lower (%)" }),
            /* @__PURE__ */ e("th", { className: "py-1.5 px-3 text-right text-neutral-500 font-semibold", children: "IS Upper (%)" }),
            /* @__PURE__ */ e("th", { className: "py-1.5 px-3 text-right text-green-700 font-semibold", children: "M-30 + Graphene" })
          ] }) }),
          /* @__PURE__ */ e("tbody", { className: "divide-y divide-neutral-100", children: [["40", 100, 100, 100], ["20", 95, 100, 95.8], ["4.75", 30, 50, 45.4], ["0.6", 10, 35, 23], ["0.15", 0, 6, 0.8]].map(([d, m, p, c]) => /* @__PURE__ */ t("tr", { children: [
            /* @__PURE__ */ e("td", { className: "py-1.5 px-3 font-mono", children: d }),
            /* @__PURE__ */ e("td", { className: "py-1.5 px-3 text-right font-mono text-neutral-500", children: m }),
            /* @__PURE__ */ e("td", { className: "py-1.5 px-3 text-right font-mono text-neutral-500", children: p }),
            /* @__PURE__ */ e("td", { className: "py-1.5 px-3 text-right font-mono font-semibold text-green-800", children: c })
          ] }, d)) })
        ] }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-6", children: [
          /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-neutral-800 mb-4", children: "M-30 Strength: Target vs Achieved" }),
          /* @__PURE__ */ e(Q, { width: "100%", height: 220, children: /* @__PURE__ */ t(_e, { data: Gr, barCategoryGap: "30%", margin: { top: 5, right: 20, bottom: 20, left: 0 }, children: [
            /* @__PURE__ */ e(ee, { strokeDasharray: "3 3", stroke: "#f5f5f5" }),
            /* @__PURE__ */ e(te, { dataKey: "name", tick: { fontSize: 9, fill: "#737373" } }),
            /* @__PURE__ */ e(ae, { domain: [0, 60], tick: { fontSize: 10, fill: "#737373" }, unit: " MPa", width: 48 }),
            /* @__PURE__ */ e(J, { content: /* @__PURE__ */ e(He, {}) }),
            /* @__PURE__ */ e(Le, { y: 30, stroke: "#ef4444", strokeDasharray: "4 2", label: { value: "30 MPa", position: "right", fontSize: 9, fill: "#ef4444" } }),
            /* @__PURE__ */ e(Se, { dataKey: "value", name: "Strength (MPa)", radius: [6, 6, 0, 0], children: Gr.map((d, m) => /* @__PURE__ */ e(ut, { fill: d.fill }, m)) })
          ] }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-6", children: [
          /* @__PURE__ */ e("p", { className: "text-sm font-semibold text-neutral-800 mb-1", children: "ACT Cube Results — IS 9013 : 1978" }),
          /* @__PURE__ */ e("p", { className: "text-xs text-neutral-400 mb-3", children: "Casting: 31-10-2025 · Testing: 01-11-2025 · 150×150×150 mm" }),
          /* @__PURE__ */ e(Ct, { cubes: yl, type: "act" }),
          /* @__PURE__ */ t("div", { className: "mt-3 grid grid-cols-2 gap-3 text-xs", children: [
            /* @__PURE__ */ t("div", { className: "bg-green-50 border border-green-200 rounded-xl p-3", children: [
              /* @__PURE__ */ e("div", { className: "font-semibold text-green-900", children: "Average Ra" }),
              /* @__PURE__ */ t("div", { className: "text-2xl font-display font-medium text-green-800", children: [
                "25.5 ",
                /* @__PURE__ */ e("span", { className: "text-sm font-normal", children: "MPa" })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "bg-neutral-900 rounded-xl p-3", children: [
              /* @__PURE__ */ e("div", { className: "font-semibold text-neutral-400 text-xs", children: "Avg R₂₈ Equiv." }),
              /* @__PURE__ */ t("div", { className: "text-2xl font-display font-medium text-white", children: [
                "49.5 ",
                /* @__PURE__ */ e("span", { className: "text-sm font-normal text-neutral-400", children: "MPa" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e(at, { title: "Individual Aggregate Sieve Analysis — IS 383 : 2016 (Same aggregates as M-20 reports)", children: /* @__PURE__ */ e("div", { className: "space-y-4", children: /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ e(Ke, { data: Lr, title: "Natural Sand (Zone II)", zone: "II" }),
        /* @__PURE__ */ e(Ke, { data: Rr, title: "20mm Coarse Aggregate" }),
        /* @__PURE__ */ e(Ke, { data: Ir, title: "10mm Coarse Aggregate" })
      ] }) }) }),
      /* @__PURE__ */ e(at, { title: "M-30 + Graphene Full Mix Proportions (SSD)", badge: "M-30 + Graphene", children: /* @__PURE__ */ t("div", { className: "space-y-6", children: [
        /* @__PURE__ */ e("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 bg-neutral-50 rounded-xl p-4 text-xs", children: [
          ["Grade", "M-30 (RCC)"],
          ["Exposure", "MODERATE"],
          ["W/C", "0.37"],
          ["Target Mean", "38.25 N/mm²"],
          ["Design Slump", "150 mm"],
          ["Initial Slump", "220 mm (actual)"],
          ["Admixture", "Monoatom PC · 0.8%"],
          ["Casting", "31/10/2025"]
        ].map(([d, m]) => /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("span", { className: "block font-semibold text-neutral-900", children: d }),
          m
        ] }, d)) }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e("p", { className: "text-xs font-semibold text-neutral-700 mb-2", children: "SSD Condition" }),
          /* @__PURE__ */ e(kt, { rows: s })
        ] }),
        /* @__PURE__ */ e("p", { className: "text-xs text-neutral-400", children: "Total aggregate volume = 0.696 m³ per m³ concrete · Coarse: 20mm 48% + 10mm 52% split · Plasticizer reduction: 25% · Pumpable mix reduction: 8%." })
      ] }) })
    ] }),
    /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2 pt-2 border-t border-neutral-100", children: ["IS 10262 : 2019 — Mix Design", "IS 456 : 2000 (RA 2021 Amd-5) — Structural Concrete", "IS 9013 : 1978 (RA 2013) — Accelerated Curing Test", "IS 383 : 2016 — Aggregates", "IS 516 Part-1 Sec-1 — Cube Testing"].map((d) => /* @__PURE__ */ e("span", { className: "text-xs px-2.5 py-1 bg-neutral-100 text-neutral-500 rounded-lg border border-neutral-200", children: d }, d)) })
  ] });
}, Wa = ({ steps: r, title: i = "How It Works", theme: n = "light" }) => {
  const o = n === "dark", a = o ? "bg-neutral-900" : "bg-white", s = o ? "text-white" : "text-neutral-900", d = o ? "text-neutral-400" : "text-neutral-500", m = o ? "border-neutral-800" : "border-neutral-200", p = (c, g) => {
    if (c.icon) return c.icon;
    const b = [_t, nt, Ki, xe];
    return b[g % b.length];
  };
  return /* @__PURE__ */ t("div", { className: `${a} rounded-3xl border ${m} shadow-xl overflow-hidden relative`, children: [
    o && /* @__PURE__ */ e("div", { className: "absolute inset-0 pointer-events-none", children: /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" }) }),
    /* @__PURE__ */ t("div", { className: "p-8 md:p-16 relative z-10", children: [
      /* @__PURE__ */ t("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8", children: [
        /* @__PURE__ */ t("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${o ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" : "bg-indigo-50 text-indigo-700 border border-indigo-100"}`, children: [
            /* @__PURE__ */ e(_t, { className: "w-3 h-3" }),
            /* @__PURE__ */ e("span", { children: "Integration Protocol" })
          ] }),
          /* @__PURE__ */ e("h3", { className: `text-4xl md:text-5xl font-display font-medium ${s} mb-4 tracking-tight`, children: i }),
          /* @__PURE__ */ e("p", { className: `text-xl ${d} font-light`, children: "A seamless, zero-disruption integration model designed for rapid deployment." })
        ] }),
        /* @__PURE__ */ e("div", { className: "flex gap-6 border-l border-neutral-200 dark:border-neutral-800 pl-6", children: /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("div", { className: `text-3xl font-display font-bold ${s} mb-1`, children: [
            "14",
            /* @__PURE__ */ e("span", { className: "text-base font-normal text-neutral-500 ml-1", children: "days" })
          ] }),
          /* @__PURE__ */ e("div", { className: "text-xs font-bold uppercase tracking-wider text-neutral-400", children: "Typical Deployment" })
        ] }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "relative", children: [
        /* @__PURE__ */ e("div", { className: "hidden lg:block absolute top-[3.5rem] left-8 right-8 h-1 bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800 rounded-full z-0", children: /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-20 blur-sm" }) }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: r.map((c, g) => {
          const b = p(c, g);
          return /* @__PURE__ */ e("div", { className: "relative z-10 group", children: /* @__PURE__ */ t("div", { className: "mb-8 flex items-center gap-6 lg:block relative", children: [
            /* @__PURE__ */ t("div", { className: "lg:mb-8 relative flex justify-center lg:justify-start", children: [
              /* @__PURE__ */ t("div", { className: `w-24 h-24 rounded-3xl ${o ? "bg-neutral-900 border-neutral-800 shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)]" : "bg-white border-neutral-100 shadow-xl"} border flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500`, children: [
                /* @__PURE__ */ e("div", { className: "absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
                /* @__PURE__ */ e(b, { className: `w-10 h-10 ${o ? "text-white" : "text-neutral-900"} relative z-20`, strokeWidth: 1.5 }),
                /* @__PURE__ */ e("div", { className: `absolute -top-3 -right-3 w-8 h-8 rounded-full ${o ? "bg-indigo-600 text-white" : "bg-neutral-900 text-white"} flex items-center justify-center text-sm font-bold shadow-lg border-4 ${o ? "border-neutral-900" : "border-white"}`, children: g + 1 })
              ] }),
              /* @__PURE__ */ e("div", { className: "lg:hidden absolute left-12 top-24 bottom-[-4rem] w-0.5 bg-neutral-200 dark:bg-neutral-800 -z-10" })
            ] }),
            /* @__PURE__ */ t("div", { className: "pt-2", children: [
              /* @__PURE__ */ e("h4", { className: `text-xl font-bold ${s} mb-3 group-hover:text-indigo-500 transition-colors`, children: c.title }),
              /* @__PURE__ */ e("p", { className: `text-sm ${d} leading-relaxed`, children: c.description }),
              c.duration && /* @__PURE__ */ t("div", { className: `mt-4 inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider ${o ? "text-indigo-400 bg-indigo-500/10" : "text-indigo-700 bg-indigo-50"} px-2 py-1 rounded`, children: [
                /* @__PURE__ */ e(pt, { className: "w-3 h-3" }),
                c.duration
              ] })
            ] })
          ] }) }, g);
        }) })
      ] }),
      /* @__PURE__ */ e("div", { className: `mt-20 pt-10 border-t ${m}`, children: /* @__PURE__ */ t("div", { className: "flex flex-col md:flex-row justify-between items-center gap-6", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ e("div", { className: `w-12 h-12 rounded-full ${o ? "bg-green-500/20 text-green-400" : "bg-green-50 text-green-600"} flex items-center justify-center`, children: /* @__PURE__ */ e(xe, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("h5", { className: `font-bold ${s}`, children: "Guaranteed Performance" }),
            /* @__PURE__ */ e("p", { className: `text-sm ${d}`, children: "Pilot program results validated by third-party testing." })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "flex gap-2", children: [1, 2, 3].map((c, g) => /* @__PURE__ */ e("div", { className: `w-2 h-2 rounded-full ${o ? "bg-neutral-800" : "bg-neutral-200"}` }, g)) })
      ] }) })
    ] })
  ] });
}, Ba = ({
  productName: r,
  pilotDetails: i,
  benefits: n,
  pricing: o,
  theme: a = "light"
}) => {
  const s = a === "dark", d = s ? "bg-neutral-900" : "bg-white", m = s ? "text-white" : "text-neutral-900", p = s ? "text-neutral-400" : "text-neutral-500", c = s ? "border-neutral-700" : "border-neutral-200", g = s ? "bg-neutral-800" : "bg-neutral-50", b = [
    { day: "Week 1", title: "Setup & Baseline", desc: "Mix design review & initial metrics", icon: mt },
    { day: "Week 2", title: "Controlled Testing", desc: "Batch production & fresh property analysis", icon: I },
    { day: "Week 3", title: "Performance Data", desc: "Strength gain & durability verification", icon: z },
    { day: "Week 4", title: "Evaluation", desc: "ROI modeling & scale-up roadmap", icon: Re }
  ];
  return /* @__PURE__ */ e("div", { className: `${d} rounded-2xl border ${c} overflow-hidden`, children: /* @__PURE__ */ t("div", { className: "flex flex-col", children: [
    /* @__PURE__ */ e("div", { className: `p-8 md:p-12 bg-gradient-to-br ${s ? "from-neutral-900 to-neutral-800" : "from-neutral-50 to-white"} border-b ${c}`, children: /* @__PURE__ */ t("div", { className: "flex flex-col md:flex-row md:items-start md:justify-between gap-8", children: [
      /* @__PURE__ */ t("div", { className: "md:w-1/2", children: [
        /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-6 ${s ? "bg-blue-900/30 text-blue-400" : "bg-blue-50 text-blue-700"}`, children: [
          /* @__PURE__ */ e(xe, { className: "w-4 h-4" }),
          /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-wider", children: "Risk-Free Validation" })
        ] }),
        /* @__PURE__ */ t("h3", { className: `text-3xl font-display font-medium ${m} mb-4`, children: [
          "Performance ",
          /* @__PURE__ */ e("span", { className: "text-blue-500", children: "Pilot" })
        ] }),
        /* @__PURE__ */ t("p", { className: `text-lg ${p} mb-8 leading-relaxed`, children: [
          "Validate ",
          r,
          " in your specific operational environment before full-scale deployment."
        ] }),
        /* @__PURE__ */ e("div", { className: "space-y-4 mb-8", children: n.map((x, w) => /* @__PURE__ */ t("div", { className: "flex items-start gap-3 group", children: [
          /* @__PURE__ */ e($e, { className: `w-5 h-5 ${s ? "text-blue-500" : "text-blue-600"} mt-0.5 group-hover:scale-110 transition-transform` }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: `font-medium ${m}`, children: x.title }),
            /* @__PURE__ */ e("div", { className: `text-xs ${p}`, children: x.description })
          ] })
        ] }, w)) })
      ] }),
      o && /* @__PURE__ */ t("div", { className: `md:w-1/3 p-6 rounded-xl ${s ? "bg-blue-900/10 border border-blue-800/30" : "bg-blue-50 border border-blue-100"}`, children: [
        /* @__PURE__ */ e("div", { className: "text-xs text-blue-500 uppercase font-bold mb-1", children: "Program Investment" }),
        /* @__PURE__ */ t("div", { className: "flex items-baseline gap-2", children: [
          /* @__PURE__ */ e("span", { className: `text-2xl font-mono font-bold ${m}`, children: o.cost }),
          /* @__PURE__ */ e("span", { className: `text-xs ${p}`, children: "/ 30 Days" })
        ] }),
        o.note && /* @__PURE__ */ e("div", { className: "text-[10px] text-blue-500/80 mt-2 pt-2 border-t border-blue-500/20", children: o.note })
      ] })
    ] }) }),
    /* @__PURE__ */ t("div", { className: "p-8 md:p-12", children: [
      /* @__PURE__ */ e("h4", { className: `text-xs font-bold uppercase tracking-wider ${p} mb-8`, children: "30-Day Execution Roadmap" }),
      /* @__PURE__ */ t("div", { className: "relative mb-12", children: [
        /* @__PURE__ */ e("div", { className: `absolute top-8 left-4 right-4 h-0.5 ${s ? "bg-neutral-800" : "bg-neutral-200"} hidden md:block` }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: b.map((x, w) => /* @__PURE__ */ t("div", { className: "relative z-10 group", children: [
          /* @__PURE__ */ e("div", { className: `w-16 h-16 rounded-xl ${s ? "bg-neutral-800 border-neutral-700" : "bg-white border-neutral-200"} border flex items-center justify-center mb-4 shadow-sm group-hover:border-blue-500 group-hover:shadow-blue-500/20 transition-all duration-300`, children: /* @__PURE__ */ e(x.icon, { className: `w-6 h-6 ${s ? "text-neutral-400" : "text-neutral-500"} group-hover:text-blue-500 transition-colors` }) }),
          /* @__PURE__ */ e("div", { className: `text-xs font-mono font-bold ${s ? "text-blue-400" : "text-blue-600"} mb-1`, children: x.day }),
          /* @__PURE__ */ e("div", { className: `font-bold ${m} text-sm mb-1`, children: x.title }),
          /* @__PURE__ */ e("div", { className: `text-xs ${p} leading-relaxed`, children: x.desc })
        ] }, w)) })
      ] }),
      /* @__PURE__ */ t("div", { className: `border-t ${c} pt-8`, children: [
        /* @__PURE__ */ e("h4", { className: `text-xs font-bold uppercase tracking-wider ${p} mb-6`, children: "Pilot Deliverables" }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: i.map((x, w) => /* @__PURE__ */ t("div", { className: `p-4 rounded-xl border ${c} ${g} flex items-start gap-3`, children: [
          /* @__PURE__ */ e("div", { className: `p-2 rounded-lg ${s ? "bg-neutral-900" : "bg-white"}`, children: /* @__PURE__ */ e(Re, { className: `w-4 h-4 ${m}` }) }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: `font-medium ${m} text-sm`, children: x.title }),
            x.description && /* @__PURE__ */ e("div", { className: `text-xs ${p} mt-0.5`, children: x.description })
          ] })
        ] }, w)) })
      ] })
    ] })
  ] }) });
}, Oa = ({
  productName: r,
  timeframe: i = "5 years",
  traditionalSolution: n,
  productSolution: o,
  breakdown: a,
  highlights: s = [
    { label: "Reduced Maintenance", value: "-40%", color: "green" },
    { label: "Longevity Multiplier", value: "2.5x", color: "blue" }
  ],
  theme: d = "light",
  copy: m
}) => {
  const p = {
    badgeLabel: "Cost Analysis",
    title: "Total Cost of Ownership",
    subtitle: "A comparative 5-year outlook on capital and operational expenditure.",
    projectedSavingsLabel: "Projected Savings",
    traditionalLabel: "Traditional",
    maintenanceLabel: "Maintenance",
    maintenanceValue: "High",
    lifecycleLabel: "Lifecycle",
    lifecycleValue: "Standard",
    withProductLabelTemplate: "With {productName}",
    netValueCreatedLabel: "Net Value Created",
    directCapitalRetainedTemplate: "Direct capital retained over {timeframe}.",
    paybackLabel: "Payback:",
    breakdownHeaders: {
      costCategory: "Cost Category",
      standard: "Standard",
      usingProductTemplate: "Using {productName}",
      delta: "Delta"
    }
  }, c = { ...p, ...m || {} };
  c.breakdownHeaders = { ...p.breakdownHeaders, ...m?.breakdownHeaders || {} };
  const g = (T, R) => typeof T != "string" ? T : T.replace(/\{(\w+)\}/g, (P, M) => {
    const f = R?.[M];
    return f == null ? "" : String(f);
  }), b = d === "dark", x = b ? "bg-neutral-900" : "bg-white", w = b ? "text-white" : "text-neutral-900", N = b ? "text-neutral-400" : "text-neutral-500", h = b ? "border-neutral-700" : "border-neutral-200", l = n.total - o.total, S = (l / n.total * 100).toFixed(1);
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${h} relative overflow-hidden shadow-2xl`, children: [
    b && /* @__PURE__ */ t(be, { children: [
      /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[120px] pointer-events-none" }),
      /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" })
    ] }),
    /* @__PURE__ */ t("div", { className: `p-8 md:p-12 relative z-10 ${x}`, children: [
      /* @__PURE__ */ t("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4 ${b ? "bg-green-900/30 text-green-400" : "bg-green-50 text-green-700"}`, children: [
            /* @__PURE__ */ e(Ui, { className: "w-4 h-4" }),
            /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-wider", children: c.badgeLabel })
          ] }),
          /* @__PURE__ */ e("h3", { className: `text-3xl lg:text-4xl font-display font-medium ${w} mb-2`, children: c.title }),
          /* @__PURE__ */ e("p", { className: `text-lg ${N} max-w-xl`, children: c.subtitle })
        ] }),
        /* @__PURE__ */ t("div", { className: "hidden md:flex flex-col items-end", children: [
          /* @__PURE__ */ e("div", { className: "text-sm font-bold uppercase tracking-widest text-green-500 mb-1", children: c.projectedSavingsLabel }),
          /* @__PURE__ */ t("div", { className: `text-5xl font-display font-bold ${b ? "text-white" : "text-neutral-900"}`, children: [
            S,
            "%"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16", children: [
        /* @__PURE__ */ t("div", { className: `p-8 rounded-2xl border ${h} ${b ? "bg-neutral-800/30 hover:bg-neutral-800/50" : "bg-neutral-50 hover:bg-white hover:shadow-lg"} transition-all duration-300 group`, children: [
          /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-8 group-hover:opacity-100 opacity-60 transition-opacity", children: [
            /* @__PURE__ */ e("div", { className: "text-xs font-bold uppercase tracking-widest text-neutral-500", children: c.traditionalLabel }),
            /* @__PURE__ */ e(Qi, { className: "w-5 h-5 text-neutral-400 group-hover:text-red-400 transition-colors" })
          ] }),
          /* @__PURE__ */ t("div", { className: `text-3xl lg:text-4xl font-display font-medium ${w} mb-2 group-hover:scale-105 origin-left transition-transform`, children: [
            "₹",
            n.total.toLocaleString()
          ] }),
          /* @__PURE__ */ e("div", { className: "w-full bg-neutral-200 dark:bg-neutral-700 h-1.5 rounded-full overflow-hidden mb-6", children: /* @__PURE__ */ e("div", { className: "h-full bg-neutral-400 w-full" }) }),
          /* @__PURE__ */ t("div", { className: "space-y-2", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between text-xs", children: [
              /* @__PURE__ */ e("span", { className: N, children: c.maintenanceLabel }),
              /* @__PURE__ */ e("span", { className: `font-mono ${w}`, children: c.maintenanceValue })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex justify-between text-xs", children: [
              /* @__PURE__ */ e("span", { className: N, children: c.lifecycleLabel }),
              /* @__PURE__ */ e("span", { className: `font-mono ${w}`, children: c.lifecycleValue })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "p-1 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-green-500 shadow-2xl relative z-10 scale-105", children: /* @__PURE__ */ t("div", { className: `h-full w-full rounded-xl ${b ? "bg-neutral-900" : "bg-white"} p-7 flex flex-col relative overflow-hidden`, children: [
          /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 p-6 opacity-[0.03]", children: /* @__PURE__ */ e(Jt, { className: "w-32 h-32" }) }),
          /* @__PURE__ */ t("div", { className: "relative z-10", children: [
            /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-8", children: [
              /* @__PURE__ */ e("div", { className: "text-xs font-bold uppercase tracking-widest text-indigo-500", children: g(c.withProductLabelTemplate, { productName: r }) }),
              /* @__PURE__ */ e("div", { className: "p-1.5 bg-indigo-100 dark:bg-indigo-900/50 rounded text-indigo-600 dark:text-indigo-400", children: /* @__PURE__ */ e(li, { className: "w-4 h-4" }) })
            ] }),
            /* @__PURE__ */ t("div", { className: `text-4xl lg:text-5xl font-display font-medium ${w} mb-2`, children: [
              "₹",
              o.total.toLocaleString()
            ] }),
            /* @__PURE__ */ e("div", { className: "w-full bg-neutral-100 dark:bg-neutral-800 h-1.5 rounded-full overflow-hidden mb-6", children: /* @__PURE__ */ e("div", { className: "h-full bg-gradient-to-r from-blue-500 to-indigo-500", style: { width: `${100 - S}%` } }) }),
            /* @__PURE__ */ e("div", { className: "space-y-3 pt-4 border-t border-neutral-100 dark:border-neutral-800", children: s.map((T, R) => /* @__PURE__ */ t("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ e("span", { className: N, children: T.label }),
              /* @__PURE__ */ e("span", { className: `font-bold font-mono ${T.color === "green" ? "text-green-500" : "text-blue-500"}`, children: T.value })
            ] }, R)) })
          ] })
        ] }) }),
        /* @__PURE__ */ t("div", { className: `p-8 rounded-2xl border ${h} ${b ? "bg-green-900/10 border-green-800/30" : "bg-green-50 border-green-100"} flex flex-col justify-center relative overflow-hidden`, children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-green-500/5 pulse-slow" }),
          /* @__PURE__ */ t("div", { className: "relative z-10", children: [
            /* @__PURE__ */ e("div", { className: "text-xs font-bold uppercase tracking-widest text-green-600 mb-4", children: c.netValueCreatedLabel }),
            /* @__PURE__ */ t("div", { className: "text-4xl font-display font-bold text-green-500 mb-2", children: [
              "₹",
              l.toLocaleString()
            ] }),
            /* @__PURE__ */ e("div", { className: `text-sm ${b ? "text-green-400" : "text-green-700"} mb-8 opacity-80`, children: g(c.directCapitalRetainedTemplate, { timeframe: i }) }),
            /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-lg ${b ? "bg-green-900/30 text-green-300" : "bg-green-100 text-green-800"}`, children: [
              /* @__PURE__ */ e(pt, { className: "w-3.5 h-3.5" }),
              c.paybackLabel,
              " ",
              o.paybackPeriod || "< 18 mo"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: `border ${h} rounded-2xl overflow-hidden`, children: [
        /* @__PURE__ */ t("div", { className: "grid grid-cols-12 bg-neutral-100 dark:bg-neutral-800/50 p-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500", children: [
          /* @__PURE__ */ e("div", { className: "col-span-4", children: c.breakdownHeaders.costCategory }),
          /* @__PURE__ */ e("div", { className: "col-span-3 text-right", children: c.breakdownHeaders.standard }),
          /* @__PURE__ */ e("div", { className: "col-span-3 text-right", children: g(c.breakdownHeaders.usingProductTemplate, { productName: r }) }),
          /* @__PURE__ */ e("div", { className: "col-span-2 text-right", children: c.breakdownHeaders.delta })
        ] }),
        /* @__PURE__ */ e("div", { className: "divide-y divide-neutral-200 dark:divide-neutral-800", children: a.map((T, R) => {
          const P = T.traditional - T.withProduct, M = P < 0;
          return /* @__PURE__ */ t("div", { className: "grid grid-cols-12 p-5 items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors group", children: [
            /* @__PURE__ */ t("div", { className: "col-span-4", children: [
              /* @__PURE__ */ e("div", { className: `font-medium ${w} text-sm`, children: T.category }),
              /* @__PURE__ */ e("div", { className: `text-xs ${N} opacity-0 group-hover:opacity-100 transition-opacity`, children: T.description })
            ] }),
            /* @__PURE__ */ t("div", { className: `col-span-3 text-right font-mono text-sm ${N}`, children: [
              "₹",
              T.traditional.toLocaleString()
            ] }),
            /* @__PURE__ */ t("div", { className: `col-span-3 text-right font-mono text-sm font-medium ${b ? "text-indigo-300" : "text-indigo-700"}`, children: [
              "₹",
              T.withProduct.toLocaleString()
            ] }),
            /* @__PURE__ */ t("div", { className: `col-span-2 text-right font-mono text-sm font-bold ${M ? "text-neutral-400" : "text-green-500"}`, children: [
              M ? "-" : "+",
              "₹",
              Math.abs(P).toLocaleString()
            ] })
          ] }, R);
        }) })
      ] })
    ] })
  ] });
}, Va = ({
  productName: r,
  nationalData: i,
  internationalData: n,
  stats: o,
  theme: a = "light"
}) => {
  const [s, d] = A("national"), m = a === "dark", p = m ? "bg-neutral-900" : "bg-white", c = m ? "text-white" : "text-neutral-900", g = m ? "text-neutral-400" : "text-neutral-500", b = m ? "border-neutral-800" : "border-neutral-200", x = m ? "bg-neutral-800/50" : "bg-neutral-50/50", w = s === "national" ? i : n, N = [
    { top: "40%", left: "30%", city: "Ahmedabad", projects: 12 },
    { top: "55%", left: "25%", city: "Mumbai", projects: 8 },
    { top: "70%", left: "35%", city: "Pune", projects: 4 },
    { top: "75%", left: "45%", city: "Bangalore", projects: 6 },
    { top: "65%", left: "50%", city: "Hyderabad", projects: 5 },
    { top: "30%", left: "40%", city: "Delhi NCR", projects: 7 }
  ];
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${b} ${p} shadow-2xl overflow-hidden relative`, children: [
    m && /* @__PURE__ */ t("div", { className: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ e("div", { className: "absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" }),
      /* @__PURE__ */ e("div", { className: "absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" })
    ] }),
    /* @__PURE__ */ t("div", { className: "p-8 md:p-12 relative z-10", children: [
      /* @__PURE__ */ t("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8", children: [
        /* @__PURE__ */ t("div", { className: "max-w-xl", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ e("div", { className: `p-2 rounded-lg ${m ? "bg-indigo-500/10 text-indigo-400" : "bg-indigo-50 text-indigo-600"}`, children: /* @__PURE__ */ e(Ge, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ e("span", { className: `text-sm font-bold uppercase tracking-wider ${m ? "text-indigo-400" : "text-indigo-600"}`, children: "Global Footprint" })
          ] }),
          /* @__PURE__ */ e("h3", { className: `text-3xl md:text-5xl font-display font-medium ${c} mb-4`, children: "Deployment Map" }),
          /* @__PURE__ */ t("p", { className: `text-lg ${g} font-light`, children: [
            "Visualizing ",
            r,
            "'s expanding infrastructure across key markets."
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: `p-1 rounded-xl flex ${m ? "bg-neutral-800" : "bg-neutral-100"}`, children: [
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => d("national"),
              className: `px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm ${s === "national" ? m ? "bg-neutral-700 text-white shadow-md" : "bg-white text-neutral-900 shadow-md" : m ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-neutral-900"}`,
              children: "National (India)"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => d("international"),
              className: `px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm ${s === "international" ? m ? "bg-neutral-700 text-white shadow-md" : "bg-white text-neutral-900 shadow-md" : m ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-neutral-900"}`,
              children: "International"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-12", children: o.map((h, l) => /* @__PURE__ */ t("div", { className: `relative overflow-hidden p-6 rounded-2xl border ${b} ${x} group hover:border-indigo-500/30 transition-colors`, children: [
        /* @__PURE__ */ e("div", { className: `text-3xl font-mono font-medium ${c} mb-1 group-hover:scale-105 transition-transform origin-left`, children: h.value }),
        /* @__PURE__ */ t("div", { className: `text-xs font-bold uppercase tracking-wider ${g} flex items-center gap-1`, children: [
          h.label,
          l === 0 && /* @__PURE__ */ e(si, { className: "w-3 h-3 text-green-500" })
        ] })
      ] }, l)) }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12", children: [
        /* @__PURE__ */ t("div", { className: `lg:col-span-2 rounded-3xl border ${b} ${m ? "bg-neutral-800" : "bg-neutral-100"} relative min-h-[400px] overflow-hidden`, children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 opacity-20", style: { backgroundImage: `radial-gradient(${m ? "#6366f1" : "#a3a3a3"} 1px, transparent 1px)`, backgroundSize: "24px 24px" } }),
          /* @__PURE__ */ e("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ e("div", { className: `text-[200px] opacity-5 font-display font-bold ${c}`, children: s === "national" ? "INDIA" : "WORLD" }) }),
          s === "national" && N.map((h, l) => /* @__PURE__ */ e(
            D.div,
            {
              initial: { scale: 0, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              transition: { delay: l * 0.1, duration: 0.5 },
              className: "absolute cursor-pointer group",
              style: { top: h.top, left: h.left },
              children: /* @__PURE__ */ t("div", { className: "relative", children: [
                /* @__PURE__ */ e("div", { className: "w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.6)] animate-pulse" }),
                /* @__PURE__ */ t("div", { className: `absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg ${m ? "bg-neutral-900 text-white" : "bg-white text-neutral-900"} text-xs font-bold shadow-lg border ${b} opacity-0 group-hover:opacity-100 transition-opacity`, children: [
                  h.city,
                  " ",
                  /* @__PURE__ */ t("span", { className: "text-indigo-500 ml-1", children: [
                    "(",
                    h.projects,
                    ")"
                  ] })
                ] })
              ] })
            },
            l
          )),
          /* @__PURE__ */ e("div", { className: "absolute bottom-6 left-6", children: /* @__PURE__ */ t("div", { className: `px-4 py-2 rounded-lg ${m ? "bg-neutral-900/90" : "bg-white/90"} backdrop-blur-md border ${b} shadow-lg`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ e(Ea, { className: "w-4 h-4 text-indigo-500" }),
              /* @__PURE__ */ t("span", { className: `text-sm font-bold ${c}`, children: [
                s === "national" ? "India" : "Global",
                " Map"
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `text-xs ${g}`, children: [
              w.locations.length,
              " active hubs detected"
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ t("div", { className: `rounded-3xl border ${b} ${x} overflow-hidden flex flex-col`, children: [
          /* @__PURE__ */ t("div", { className: `p-6 border-b ${b}`, children: [
            /* @__PURE__ */ e("h4", { className: `text-lg font-bold ${c}`, children: "Active Locations" }),
            /* @__PURE__ */ e("p", { className: `text-xs ${g} mt-1`, children: "Click to view project details" })
          ] }),
          /* @__PURE__ */ e("div", { className: "overflow-y-auto max-h-[400px] p-2 space-y-1", children: w.locations.map((h, l) => /* @__PURE__ */ t("button", { className: `w-full text-left p-3 rounded-xl flex items-start gap-4 transition-colors ${m ? "hover:bg-neutral-700/50" : "hover:bg-neutral-200/50"} group`, children: [
            /* @__PURE__ */ e("div", { className: `mt-1 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${m ? "bg-neutral-800 text-neutral-400" : "bg-white text-neutral-500"} border ${b} group-hover:border-indigo-500 transition-colors`, children: /* @__PURE__ */ e(st, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: `font-bold text-sm ${c}`, children: h.city }),
              /* @__PURE__ */ e("div", { className: `text-xs ${g} mb-1`, children: h.state }),
              /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-500 text-[10px] font-bold uppercase tracking-wider", children: [
                h.projects,
                " Active Projects"
              ] })
            ] })
          ] }, l)) })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: `pt-10 border-t ${b} grid grid-cols-1 md:grid-cols-3 gap-8`, children: [
        /* @__PURE__ */ t("div", { className: "flex gap-4 items-start", children: [
          /* @__PURE__ */ e("div", { className: `p-3 rounded-xl ${m ? "bg-neutral-800 text-indigo-400" : "bg-neutral-100 text-indigo-600"}`, children: /* @__PURE__ */ e(z, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: `text-2xl font-mono font-medium ${c}`, children: w.marketPenetration }),
            /* @__PURE__ */ e("div", { className: `text-xs font-bold uppercase tracking-wide ${g} mb-1`, children: "Market Penetration" }),
            /* @__PURE__ */ e("div", { className: `text-sm ${g} leading-snug`, children: w.penetrationDescription })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex gap-4 items-start", children: [
          /* @__PURE__ */ e("div", { className: `p-3 rounded-xl ${m ? "bg-neutral-800 text-indigo-400" : "bg-neutral-100 text-indigo-600"}`, children: /* @__PURE__ */ e(ct, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: `text-2xl font-mono font-medium ${c}`, children: w.partnerships }),
            /* @__PURE__ */ e("div", { className: `text-xs font-bold uppercase tracking-wide ${g} mb-1`, children: "Active Partnerships" }),
            /* @__PURE__ */ e("div", { className: `text-sm ${g} leading-snug`, children: w.partnershipDescription })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex gap-4 items-start", children: [
          /* @__PURE__ */ e("div", { className: `p-3 rounded-xl ${m ? "bg-neutral-800 text-indigo-400" : "bg-neutral-100 text-indigo-600"}`, children: /* @__PURE__ */ e(Ge, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: `text-2xl font-mono font-medium ${c}`, children: w.reach }),
            /* @__PURE__ */ e("div", { className: `text-xs font-bold uppercase tracking-wide ${g} mb-1`, children: "Geographic Reach" }),
            /* @__PURE__ */ e("div", { className: `text-sm ${g} leading-snug`, children: w.reachDescription })
          ] })
        ] })
      ] })
    ] })
  ] });
}, _a = ({
  productName: r,
  specifications: i,
  documents: n,
  theme: o = "light"
}) => {
  const a = o === "dark", s = a ? "bg-neutral-900" : "bg-neutral-50", d = a ? "text-white" : "text-neutral-900", m = a ? "text-neutral-400" : "text-neutral-500", p = a ? "border-neutral-800" : "border-neutral-200", c = a ? "bg-neutral-800/50" : "bg-white";
  return /* @__PURE__ */ t("div", { className: `relative overflow-hidden rounded-3xl border ${p} ${s} shadow-2xl`, children: [
    a && /* @__PURE__ */ t(be, { children: [
      /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" }),
      /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" })
    ] }),
    /* @__PURE__ */ t("div", { className: "p-8 md:p-12 relative z-10", children: [
      /* @__PURE__ */ e("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6", children: /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4 ${a ? "bg-red-900/30 text-red-400" : "bg-red-50 text-red-700"}`, children: [
          /* @__PURE__ */ e(Re, { className: "w-4 h-4" }),
          /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-wider", children: "Technical Data" })
        ] }),
        /* @__PURE__ */ e("h3", { className: `text-3xl lg:text-4xl font-display font-medium ${d} mb-2`, children: "Specifications & Downloads" }),
        /* @__PURE__ */ e("p", { className: `text-lg ${m} max-w-xl`, children: "Comprehensive technical documentation and material properties." })
      ] }) }),
      /* @__PURE__ */ t("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-12", children: [
        /* @__PURE__ */ e("div", { className: "xl:col-span-2", children: /* @__PURE__ */ t("div", { className: `rounded-2xl border ${p} ${c} overflow-hidden`, children: [
          /* @__PURE__ */ t("div", { className: `p-6 border-b ${p} flex items-center justify-between`, children: [
            /* @__PURE__ */ t("h4", { className: `flex items-center gap-2 font-display font-medium ${d}`, children: [
              /* @__PURE__ */ e(Yi, { className: "w-5 h-5 opacity-70" }),
              "Material Specifications"
            ] }),
            /* @__PURE__ */ e("span", { className: "text-xs font-mono uppercase tracking-widest opacity-50", children: "Rev. 2.1" })
          ] }),
          /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ t("table", { className: "w-full text-sm text-left", children: [
            /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ t("tr", { className: `${a ? "bg-neutral-900/50" : "bg-neutral-100/50"} border-b ${p}`, children: [
              /* @__PURE__ */ e("th", { className: `p-5 font-bold uppercase tracking-wider text-xs ${m}`, children: "Parameter" }),
              /* @__PURE__ */ e("th", { className: `p-5 font-bold uppercase tracking-wider text-xs ${m}`, children: "Value" }),
              /* @__PURE__ */ e("th", { className: `p-5 font-bold uppercase tracking-wider text-xs ${m}`, children: "Test Method" })
            ] }) }),
            /* @__PURE__ */ e("tbody", { className: `divide-y ${a ? "divide-neutral-800" : "divide-neutral-100"}`, children: i.map((g, b) => /* @__PURE__ */ t("tr", { className: "group hover:bg-neutral-50 dark:hover:bg-neutral-800/30 transition-colors", children: [
              /* @__PURE__ */ e("td", { className: `p-5 font-medium ${d}`, children: g.parameter }),
              /* @__PURE__ */ e("td", { className: `p-5 font-mono font-medium ${a ? "text-blue-400" : "text-blue-700"}`, children: g.value }),
              /* @__PURE__ */ e("td", { className: `p-5 text-xs font-mono ${m}`, children: g.testMethod })
            ] }, b)) })
          ] }) })
        ] }) }),
        /* @__PURE__ */ t("div", { className: "space-y-6", children: [
          /* @__PURE__ */ e("div", { className: "flex flex-col gap-4", children: n.map((g, b) => /* @__PURE__ */ t(
            "a",
            {
              href: g.url,
              download: g.filename,
              className: `group relative p-5 rounded-xl border ${p} ${c} hover:border-red-500/50 hover:shadow-lg transition-all duration-300 flex items-start gap-4`,
              children: [
                /* @__PURE__ */ e("div", { className: `w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${a ? "bg-neutral-800 text-red-500" : "bg-red-50 text-red-600"} group-hover:scale-110 transition-transform`, children: /* @__PURE__ */ e(Re, { className: "w-5 h-5" }) }),
                /* @__PURE__ */ t("div", { className: "flex-grow min-w-0", children: [
                  /* @__PURE__ */ e("h5", { className: `font-bold ${d} text-sm mb-0.5 truncate group-hover:text-red-500 transition-colors`, children: g.title }),
                  /* @__PURE__ */ e("p", { className: `text-xs ${m} mb-2 line-clamp-1`, children: g.description }),
                  /* @__PURE__ */ t("div", { className: "flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider opacity-60", children: [
                    /* @__PURE__ */ e("span", { className: "bg-neutral-200 dark:bg-neutral-700 px-1.5 py-0.5 rounded text-neutral-600 dark:text-neutral-300", children: g.format }),
                    /* @__PURE__ */ e("span", { children: g.fileSize })
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { className: "opacity-0 group-hover:opacity-100 transition-opacity self-center", children: /* @__PURE__ */ e(Da, { className: "w-4 h-4 text-red-500" }) })
              ]
            },
            b
          )) }),
          /* @__PURE__ */ t("div", { className: `p-8 rounded-2xl ${a ? "bg-gradient-to-br from-neutral-800 to-neutral-900 border-neutral-700" : "bg-gradient-to-br from-neutral-800 to-neutral-900 text-white"} border shadow-xl relative overflow-hidden`, children: [
            /* @__PURE__ */ t("div", { className: "relative z-10", children: [
              /* @__PURE__ */ e("h4", { className: "font-display font-bold text-white mb-2", children: "Need detailed reports?" }),
              /* @__PURE__ */ e("p", { className: "text-sm text-neutral-400 mb-6 leading-relaxed", children: "Request full NABL test reports, custom mix design data, or safety compliance usage guides." }),
              /* @__PURE__ */ t(K, { variant: "primary", theme: "light", className: "w-full justify-between group", children: [
                /* @__PURE__ */ e("span", { children: "Request Custom Data" }),
                /* @__PURE__ */ e(Ji, { className: "w-4 h-4 opacity-70 group-hover:opacity-100" })
              ] })
            ] }),
            /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none" })
          ] })
        ] })
      ] })
    ] })
  ] });
}, qa = ({
  productName: r,
  industries: i,
  theme: n = "light"
}) => {
  const [o, a] = A(0), s = n === "dark", d = s ? "bg-neutral-900" : "bg-white", m = s ? "text-white" : "text-neutral-900", p = s ? "text-neutral-400" : "text-neutral-500", c = s ? "border-neutral-800" : "border-neutral-200", g = s ? "bg-neutral-800/50" : "bg-neutral-50/50", b = {
    construction: st,
    manufacturing: Ie,
    energy: I,
    automotive: Ha,
    packaging: et
  }, x = i[o], w = b[x?.icon] || st;
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${c} ${d} shadow-2xl overflow-hidden relative`, children: [
    s && /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" }),
    /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-12 min-h-[650px]", children: [
      /* @__PURE__ */ t("div", { className: `lg:col-span-4 border-b lg:border-b-0 lg:border-r ${c} ${s ? "bg-neutral-900/80" : "bg-neutral-50/80"} backdrop-blur-md p-6 flex flex-col`, children: [
        /* @__PURE__ */ t("div", { className: "mb-10 px-2 pt-2", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ e("div", { className: `p-2 rounded-md ${s ? "bg-white/10" : "bg-neutral-200"}`, children: /* @__PURE__ */ e(Ra, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-widest text-neutral-500", children: "Sectors" })
          ] }),
          /* @__PURE__ */ e("h3", { className: `text-2xl font-display font-medium ${m} mb-2`, children: "Industry Solutions" }),
          /* @__PURE__ */ e("p", { className: `text-sm ${p} leading-relaxed max-w-xs`, children: "Tailored applications driving performace in critical infrastructure and manufacturing." })
        ] }),
        /* @__PURE__ */ e("div", { className: "space-y-1.5 flex-grow", children: i.map((N, h) => {
          const l = b[N.icon] || st, S = o === h;
          return /* @__PURE__ */ t(
            "button",
            {
              onClick: () => a(h),
              className: `w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${S ? `${s ? "bg-neutral-800 text-white shadow-lg" : "bg-white text-neutral-900 shadow-md"} border ${c}` : "hover:bg-neutral-100 dark:hover:bg-neutral-800/50 border border-transparent opacity-70 hover:opacity-100"}`,
              children: [
                S && /* @__PURE__ */ e("div", { className: `absolute left-0 top-0 bottom-0 w-1 ${s ? "bg-indigo-500" : "bg-indigo-600"}` }),
                /* @__PURE__ */ t("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ e("div", { className: `p-2.5 rounded-lg transition-colors duration-300 ${S ? s ? "bg-indigo-500/20 text-indigo-400" : "bg-indigo-50 text-indigo-600" : "bg-transparent text-neutral-400"}`, children: /* @__PURE__ */ e(l, { className: "w-5 h-5" }) }),
                  /* @__PURE__ */ e("span", { className: `font-medium text-sm tracking-wide ${S ? m : p} group-hover:${m}`, children: N.name })
                ] }),
                S && /* @__PURE__ */ e(le, { className: "w-4 h-4 text-indigo-500 animate-in slide-in-from-left-2" })
              ]
            },
            h
          );
        }) })
      ] }),
      /* @__PURE__ */ e("div", { className: "lg:col-span-8 p-8 md:p-14 flex flex-col relative", children: /* @__PURE__ */ e(de, { mode: "wait", children: x && /* @__PURE__ */ t(
        D.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -20 },
          transition: { duration: 0.4 },
          className: "flex flex-col h-full",
          children: [
            /* @__PURE__ */ t("div", { className: "mb-12", children: [
              /* @__PURE__ */ t("div", { className: "flex items-center gap-4 mb-6", children: [
                /* @__PURE__ */ e("div", { className: `w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${s ? "bg-neutral-800 text-indigo-400 border border-neutral-700" : "bg-white text-indigo-600 border border-neutral-100"}`, children: /* @__PURE__ */ e(w, { className: "w-8 h-8" }) }),
                /* @__PURE__ */ t("div", { children: [
                  /* @__PURE__ */ e("h4", { className: `text-3xl md:text-4xl font-display font-medium ${m}`, children: x.name }),
                  /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mt-1", children: [
                    /* @__PURE__ */ e("span", { className: `w-1.5 h-1.5 rounded-full ${s ? "bg-indigo-400" : "bg-indigo-600"}` }),
                    /* @__PURE__ */ e("span", { className: `text-xs ${p} font-mono uppercase tracking-wide`, children: "Specialized Application" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ e("p", { className: `text-xl ${p} leading-relaxed max-w-3xl font-light`, children: x.description })
            ] }),
            /* @__PURE__ */ t("div", { className: "grid md:grid-cols-2 gap-10 mb-8", children: [
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ t("h5", { className: `text-xs font-bold uppercase tracking-wider ${p} mb-6 flex items-center gap-2`, children: [
                  /* @__PURE__ */ e(le, { className: "w-3 h-3" }),
                  " Core Applications"
                ] }),
                /* @__PURE__ */ e("div", { className: "space-y-4", children: x.useCases.map((N, h) => /* @__PURE__ */ e("div", { className: `p-5 rounded-2xl border ${c} ${g} hover:border-indigo-500/30 transition-all hover:translate-x-1 group`, children: /* @__PURE__ */ t("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ e("div", { className: `mt-1 p-1 rounded-full ${s ? "bg-indigo-500/20 text-indigo-400" : "bg-indigo-50 text-indigo-600"} shrink-0`, children: /* @__PURE__ */ e($e, { className: "w-3 h-3" }) }),
                  /* @__PURE__ */ t("div", { children: [
                    /* @__PURE__ */ e("strong", { className: `block text-base font-bold ${m} mb-1 group-hover:text-indigo-500 transition-colors`, children: N.title }),
                    /* @__PURE__ */ e("p", { className: `text-sm ${p} leading-relaxed`, children: N.description })
                  ] })
                ] }) }, h)) })
              ] }),
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ t("h5", { className: `text-xs font-bold uppercase tracking-wider ${p} mb-6 flex items-center gap-2`, children: [
                  /* @__PURE__ */ e(le, { className: "w-3 h-3" }),
                  "  Impact Metrics"
                ] }),
                /* @__PURE__ */ e("div", { className: "space-y-4", children: x.metrics.map((N, h) => /* @__PURE__ */ t("div", { className: `flex flex-col p-6 rounded-2xl ${s ? "bg-neutral-800 border-neutral-700" : "bg-white border-neutral-100"} border shadow-sm`, children: [
                  /* @__PURE__ */ e("span", { className: `text-4xl font-display font-medium ${s ? "text-white" : "text-neutral-900"} mb-1`, children: N.value }),
                  /* @__PURE__ */ e("span", { className: `text-sm ${p} font-medium uppercase tracking-wide`, children: N.label })
                ] }, h)) }),
                /* @__PURE__ */ t("div", { className: `mt-8 p-6 rounded-2xl border ${s ? "border-indigo-500/30 bg-indigo-500/10" : "border-indigo-100 bg-indigo-50"} text-center`, children: [
                  /* @__PURE__ */ e("p", { className: `text-sm font-medium ${s ? "text-indigo-200" : "text-indigo-800"} mb-3`, children: "Ready to optimize your project?" }),
                  /* @__PURE__ */ e("button", { className: `w-full py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-colors ${s ? "bg-indigo-600 hover:bg-indigo-500 text-white" : "bg-indigo-600 hover:bg-indigo-700 text-white"}`, children: "View Case Study" })
                ] })
              ] })
            ] })
          ]
        },
        o
      ) }) })
    ] })
  ] });
}, Ka = ({
  productName: r,
  sections: i,
  theme: n = "light"
}) => {
  const [o, a] = A(0), s = n === "dark", d = s ? "bg-neutral-900" : "bg-white", m = s ? "text-white" : "text-neutral-900", p = s ? "text-neutral-400" : "text-neutral-500", c = s ? "border-neutral-800" : "border-neutral-200", g = s ? "bg-neutral-800/80" : "bg-neutral-50/80", b = {
    mechanism: ti,
    structure: X,
    properties: I,
    science: Ae
  }, x = i[o], w = b[x?.icon] || Ae;
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${c} ${d} shadow-2xl overflow-hidden relative`, children: [
    s && /* @__PURE__ */ e("div", { className: "absolute inset-x-0 top-0 h-[400px] bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none" }),
    /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-12 min-h-[700px]", children: [
      /* @__PURE__ */ t("div", { className: `lg:col-span-4 border-b lg:border-b-0 lg:border-r ${c} ${s ? "bg-neutral-900" : "bg-neutral-50/50"} p-8 flex flex-col`, children: [
        /* @__PURE__ */ t("div", { className: "mb-10", children: [
          /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-2 px-3 py-1 rounded-lg ${s ? "bg-indigo-500/10 text-indigo-400" : "bg-indigo-50 text-indigo-700"} text-xs font-bold uppercase tracking-widest mb-4`, children: [
            /* @__PURE__ */ e(Ae, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ e("span", { children: "The Technology" })
          ] }),
          /* @__PURE__ */ e("h3", { className: `text-3xl font-display font-medium ${m} mb-4`, children: "Core Science" }),
          /* @__PURE__ */ t("p", { className: `text-sm ${p} leading-relaxed`, children: [
            "Explore the proprietary mechanisms that give ",
            r,
            " its breakthrough capabilities."
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "space-y-2", children: i.map((N, h) => {
          const l = b[N.icon] || Ae, S = o === h;
          return /* @__PURE__ */ e(
            "button",
            {
              onClick: () => a(h),
              className: `w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${S ? `${s ? "bg-neutral-800 text-white shadow-lg" : "bg-white text-neutral-900 shadow-xl"} scale-[1.02]` : "hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 opacity-70 hover:opacity-100"}`,
              children: /* @__PURE__ */ t("div", { className: "flex items-center gap-4 relative z-10", children: [
                /* @__PURE__ */ e("div", { className: `p-2 rounded-lg transition-colors ${S ? "bg-indigo-500 text-white shadow-md" : "bg-transparent text-neutral-400"}`, children: /* @__PURE__ */ e(l, { className: "w-5 h-5" }) }),
                /* @__PURE__ */ t("div", { children: [
                  /* @__PURE__ */ e("span", { className: `block font-bold text-sm ${S ? m : p}`, children: N.title }),
                  S && /* @__PURE__ */ e("span", { className: "text-[10px] text-indigo-400 font-medium uppercase tracking-wider animate-pulse", children: "Viewing" })
                ] })
              ] })
            },
            h
          );
        }) })
      ] }),
      /* @__PURE__ */ e("div", { className: "lg:col-span-8 p-8 md:p-14 relative overflow-y-auto", children: /* @__PURE__ */ e(de, { mode: "wait", children: /* @__PURE__ */ t(
        D.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -10 },
          transition: { duration: 0.3 },
          className: "h-full flex flex-col",
          children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-4 mb-8", children: [
              /* @__PURE__ */ e("div", { className: `p-4 rounded-2xl ${s ? "bg-neutral-800 text-indigo-400" : "bg-white text-indigo-600 shadow-md"} border ${c}`, children: /* @__PURE__ */ e(w, { className: "w-8 h-8" }) }),
              /* @__PURE__ */ e("h2", { className: `text-4xl font-display font-medium ${m}`, children: x.title })
            ] }),
            /* @__PURE__ */ t("div", { className: "grid md:grid-cols-2 gap-10 mb-10", children: [
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ t("h4", { className: `text-xs font-bold uppercase tracking-wider ${p} mb-4 flex items-center gap-2`, children: [
                  /* @__PURE__ */ e("div", { className: "w-6 h-px bg-indigo-500" }),
                  " Technical Breakdown"
                ] }),
                /* @__PURE__ */ e("div", { className: `space-y-4 text-lg ${p} leading-relaxed`, children: x.content.map((N, h) => /* @__PURE__ */ e("p", { children: N }, h)) })
              ] }),
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ e("h4", { className: `text-xs font-bold uppercase tracking-wider ${p} mb-4`, children: "Engineering Advantages" }),
                /* @__PURE__ */ e("div", { className: "space-y-4", children: x.keyPoints.map((N, h) => /* @__PURE__ */ e("div", { className: `p-5 rounded-2xl border ${c} ${g} transition-transform hover:scale-[1.02]`, children: /* @__PURE__ */ t("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ e("div", { className: "mt-1 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0", children: /* @__PURE__ */ e(Ut, { className: "w-3 h-3 text-white", strokeWidth: 3 }) }),
                  /* @__PURE__ */ t("div", { children: [
                    /* @__PURE__ */ e("h5", { className: `font-bold ${m} text-sm mb-1`, children: N.title }),
                    /* @__PURE__ */ e("p", { className: `text-xs ${p}`, children: N.description })
                  ] })
                ] }) }, h)) })
              ] })
            ] }),
            x.technicalData && /* @__PURE__ */ t("div", { className: `mt-auto rounded-2xl border ${s ? "border-indigo-500/30 bg-indigo-500/5" : "border-indigo-100 bg-indigo-50"} p-6`, children: [
              /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ e(I, { className: `w-4 h-4 ${s ? "text-indigo-400" : "text-indigo-600"}` }),
                /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-widest ${s ? "text-indigo-300" : "text-indigo-800"}`, children: "Specifications" })
              ] }),
              /* @__PURE__ */ e("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-6", children: Object.entries(x.technicalData).map(([N, h], l) => /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ e("div", { className: `text-[10px] font-bold uppercase tracking-wider ${p} mb-1`, children: N }),
                /* @__PURE__ */ e("div", { className: `text-lg font-mono font-medium ${m}`, children: h })
              ] }, l)) })
            ] })
          ]
        },
        o
      ) }) })
    ] })
  ] });
}, Ua = ({
  productName: r,
  stages: i,
  theme: n = "light"
}) => {
  const [o, a] = A(0), s = n === "dark", d = s ? "bg-neutral-900" : "bg-white", m = s ? "text-white" : "text-neutral-900", p = s ? "text-neutral-400" : "text-neutral-500", c = s ? "border-neutral-800" : "border-neutral-200", g = s ? "bg-neutral-800/80" : "bg-neutral-50/80", b = {
    trial: we,
    validation: oi,
    scale: z,
    deployment: Zi
  };
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${c} ${d} shadow-2xl p-8 md:p-14 relative overflow-hidden`, children: [
    s && /* @__PURE__ */ e("div", { className: "absolute inset-0 pointer-events-none", children: /* @__PURE__ */ e("div", { className: "absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" }) }),
    /* @__PURE__ */ t("div", { className: "text-center mb-16 relative z-10", children: [
      /* @__PURE__ */ e("h3", { className: `text-4xl md:text-5xl font-display font-medium ${m} mb-4 tracking-tight`, children: "Path to Scale" }),
      /* @__PURE__ */ t("p", { className: `text-xl ${p} max-w-2xl mx-auto font-light`, children: [
        "A structured, low-risk roadmap to deploy ",
        r,
        " across your operations."
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "relative z-10", children: [
      /* @__PURE__ */ e("div", { className: "hidden lg:block absolute top-[4rem] left-16 right-16 h-0.5 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent z-0" }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: i.map((x, w) => {
        const N = b[x.type] || we, h = o === w, l = [
          "text-blue-500 bg-blue-500/10 border-blue-500/20",
          "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
          "text-purple-500 bg-purple-500/10 border-purple-500/20",
          "text-green-500 bg-green-500/10 border-green-500/20"
        ], S = l[w % l.length];
        return /* @__PURE__ */ t(
          "div",
          {
            className: "relative group",
            onMouseEnter: () => a(w),
            children: [
              /* @__PURE__ */ e("div", { className: "flex flex-col items-center mb-8 relative z-10", children: /* @__PURE__ */ t("div", { className: `w-32 h-32 rounded-full border-4 ${s ? "bg-neutral-900 border-neutral-800" : "bg-white border-neutral-100"} flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-indigo-500/30`, children: [
                /* @__PURE__ */ e("div", { className: `w-24 h-24 rounded-full flex items-center justify-center ${S} transition-all duration-300`, children: /* @__PURE__ */ e(N, { className: "w-10 h-10", strokeWidth: 1.5 }) }),
                /* @__PURE__ */ e("div", { className: `absolute top-0 right-0 w-8 h-8 rounded-full ${s ? "bg-neutral-800 border-neutral-700" : "bg-white border-neutral-200"} border flex items-center justify-center text-sm font-bold shadow-lg`, children: w + 1 }),
                x.completed && /* @__PURE__ */ e("div", { className: "absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white dark:border-neutral-900 shadow-lg", children: /* @__PURE__ */ e($e, { className: "w-4 h-4 text-white" }) })
              ] }) }),
              /* @__PURE__ */ t("div", { className: `h-full border ${c} ${g} backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300 ${h ? "-translate-y-2" : ""}`, children: [
                /* @__PURE__ */ t("div", { className: "text-center mb-6", children: [
                  /* @__PURE__ */ e("h4", { className: `text-xl font-bold ${m} mb-3 group-hover:text-indigo-500 transition-colors`, children: x.title }),
                  /* @__PURE__ */ e("p", { className: `text-sm ${p} leading-relaxed`, children: x.description })
                ] }),
                /* @__PURE__ */ e("div", { className: `space-y-3 pt-6 border-t ${c}`, children: x.details.map((T, R) => /* @__PURE__ */ t("div", { className: "flex items-start gap-3 text-left", children: [
                  /* @__PURE__ */ e(le, { className: `w-3.5 h-3.5 mt-1 shrink-0 ${s ? "text-indigo-500" : "text-indigo-600"}` }),
                  /* @__PURE__ */ e("span", { className: `text-xs font-medium ${p}`, children: T })
                ] }, R)) }),
                /* @__PURE__ */ t("div", { className: "mt-6 flex flex-wrap gap-2 justify-center", children: [
                  x.duration && /* @__PURE__ */ t("div", { className: `px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${s ? "bg-neutral-800 text-neutral-400" : "bg-neutral-100 text-neutral-600"} flex items-center gap-1.5`, children: [
                    /* @__PURE__ */ e(pt, { className: "w-3 h-3" }),
                    " ",
                    x.duration
                  ] }),
                  x.investment && /* @__PURE__ */ e("div", { className: `px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${s ? "bg-indigo-900/20 text-indigo-400" : "bg-indigo-50 text-indigo-600"}`, children: x.investment })
                ] })
              ] })
            ]
          },
          w
        );
      }) })
    ] }),
    /* @__PURE__ */ e("div", { className: `mt-16 relative overflow-hidden rounded-2xl ${s ? "bg-gradient-to-br from-indigo-900/20 to-neutral-900" : "bg-gradient-to-br from-indigo-50 to-white"} border ${c} p-8 md:p-10`, children: /* @__PURE__ */ t("div", { className: "relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("h4", { className: `text-2xl font-display font-medium ${m} mb-2`, children: "Full-Spectrum Engineering Support" }),
        /* @__PURE__ */ e("p", { className: `${p} max-w-xl`, children: "Our deployment teams work alongside your engineers from day one, ensuring seamless integration and validating performance metrics." })
      ] }),
      /* @__PURE__ */ e("div", { className: "flex gap-6", children: [
        { label: "On-Site Training", icon: xe },
        { label: "QA Certification", icon: $e }
      ].map((x, w) => /* @__PURE__ */ t("div", { className: `flex flex-col items-center gap-2 p-4 rounded-xl ${s ? "bg-neutral-800/50" : "bg-white/60"} border ${c}`, children: [
        /* @__PURE__ */ e(x.icon, { className: "w-6 h-6 text-green-500" }),
        /* @__PURE__ */ e("span", { className: `text-xs font-bold uppercase tracking-wider ${m}`, children: x.label })
      ] }, w)) })
    ] }) })
  ] });
}, Qa = ({
  productName: r,
  marketData: i,
  industries: n,
  growthMetrics: o,
  theme: a = "light"
}) => {
  const [s, d] = A(n[0]?.id || null), m = a === "dark", p = m ? "bg-neutral-900" : "bg-white", c = m ? "text-white" : "text-neutral-900", g = m ? "text-neutral-400" : "text-neutral-500", b = m ? "border-neutral-800" : "border-neutral-200", x = m ? "bg-neutral-800/80" : "bg-neutral-50/80", w = n.find((N) => N.id === s);
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${b} ${p} overflow-hidden shadow-2xl relative`, children: [
    m ? /* @__PURE__ */ t("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" }),
      /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" })
    ] }) : /* @__PURE__ */ e("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[100px]" }) }),
    /* @__PURE__ */ e("div", { className: `p-8 md:p-12 border-b ${b} relative z-10`, children: /* @__PURE__ */ t("div", { className: "max-w-4xl", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ e("div", { className: `p-2 rounded-lg ${m ? "bg-indigo-500/10 text-indigo-400" : "bg-indigo-50 text-indigo-600"}`, children: /* @__PURE__ */ e(Ge, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ e("span", { className: `text-sm font-bold uppercase tracking-wider ${m ? "text-indigo-400" : "text-indigo-600"}`, children: "Market Intelligence" })
      ] }),
      /* @__PURE__ */ e("h3", { className: `text-3xl md:text-5xl font-display font-medium ${c} mb-4`, children: "Growth Potential Analysis" }),
      /* @__PURE__ */ t("p", { className: `text-lg ${g} max-w-2xl`, children: [
        "Deep-dive into the serviceable market, industry-specific vectors, and revenue modeling for ",
        r,
        "."
      ] })
    ] }) }),
    /* @__PURE__ */ t("div", { className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x ${b} border-b relative z-10 bg-opacity-50 backdrop-blur-sm`, children: [
      /* @__PURE__ */ t("div", { className: "p-8 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group", children: [
        /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-4 opacity-70 group-hover:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ e(z, { className: "w-5 h-5" }),
          /* @__PURE__ */ e("span", { className: "text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border border-current opacity-50", children: "TAM" })
        ] }),
        /* @__PURE__ */ e("div", { className: `text-4xl font-display font-medium ${c} mb-1 tracking-tight`, children: i.tamSize }),
        /* @__PURE__ */ e("div", { className: `text-xs ${g} font-bold uppercase tracking-wide`, children: "Total Addressable Market" })
      ] }),
      /* @__PURE__ */ t("div", { className: "p-8 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group", children: [
        /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-4 opacity-70 group-hover:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ e(Ve, { className: "w-5 h-5" }),
          /* @__PURE__ */ e("span", { className: "text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border border-current opacity-50", children: "CAGR" })
        ] }),
        /* @__PURE__ */ e("div", { className: `text-4xl font-display font-medium ${m ? "text-green-400" : "text-green-600"} mb-1 tracking-tight`, children: i.cagr }),
        /* @__PURE__ */ e("div", { className: `text-xs ${g} font-bold uppercase tracking-wide`, children: "Compound Annual Growth" })
      ] }),
      /* @__PURE__ */ t("div", { className: "p-8 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group", children: [
        /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-4 opacity-70 group-hover:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ e(ct, { className: "w-5 h-5" }),
          /* @__PURE__ */ e("span", { className: "text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border border-current opacity-50", children: "ICP" })
        ] }),
        /* @__PURE__ */ e("div", { className: `text-4xl font-display font-medium ${c} mb-1 tracking-tight`, children: i.targetCustomers }),
        /* @__PURE__ */ e("div", { className: `text-xs ${g} font-bold uppercase tracking-wide`, children: "Target Enterprises" })
      ] }),
      /* @__PURE__ */ t("div", { className: "p-8 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group", children: [
        /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-4 opacity-70 group-hover:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ e(mt, { className: "w-5 h-5" }),
          /* @__PURE__ */ e("span", { className: "text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border border-current opacity-50", children: "SOM" })
        ] }),
        /* @__PURE__ */ e("div", { className: `text-4xl font-display font-medium ${m ? "text-blue-400" : "text-blue-600"} mb-1 tracking-tight`, children: i.marketShare }),
        /* @__PURE__ */ e("div", { className: `text-xs ${g} font-bold uppercase tracking-wide`, children: "Serviceable Share" })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-12 min-h-[600px] relative z-10", children: [
      /* @__PURE__ */ t("div", { className: `lg:col-span-4 border-r ${b} ${m ? "bg-neutral-900/50" : "bg-neutral-50/80"} p-6 backdrop-blur-md`, children: [
        /* @__PURE__ */ e("h4", { className: `text-xs font-bold uppercase tracking-wider ${g} mb-6 px-2 opacity-70`, children: "Select Sector Analysis" }),
        /* @__PURE__ */ e("div", { className: "space-y-3", children: n.map((N) => /* @__PURE__ */ t(
          "button",
          {
            onClick: () => d(N.id),
            className: `w-full text-left p-5 rounded-xl transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${s === N.id ? `${m ? "bg-neutral-800 text-white shadow-lg border-neutral-700" : "bg-white text-neutral-900 shadow-lg border-neutral-200"} border` : `hover:bg-black/5 dark:hover:bg-white/5 border border-transparent ${g}`}`,
            children: [
              /* @__PURE__ */ t("div", { className: "relative z-10", children: [
                /* @__PURE__ */ e("div", { className: `font-bold text-lg mb-1 ${s === N.id ? "" : "opacity-80 group-hover:opacity-100"}`, children: N.name }),
                s === N.id && /* @__PURE__ */ e("div", { className: "text-xs font-mono opacity-70", children: N.marketSize })
              ] }),
              s === N.id && /* @__PURE__ */ e(le, { className: "w-5 h-5 text-indigo-500 relative z-10" }),
              s === N.id && /* @__PURE__ */ e("div", { className: `absolute left-0 bottom-0 top-0 w-1 ${m ? "bg-indigo-500" : "bg-indigo-600"}` })
            ]
          },
          N.id
        )) })
      ] }),
      /* @__PURE__ */ e("div", { className: `lg:col-span-8 p-8 md:p-12 ${m ? "bg-neutral-900/30" : "bg-white/50"}`, children: w && /* @__PURE__ */ t("div", { className: "h-full flex flex-col animate-in fade-in duration-500", children: [
        /* @__PURE__ */ t("div", { className: "mb-10", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-4 opacity-60", children: [
            /* @__PURE__ */ e(Xi, { className: "w-5 h-5" }),
            /* @__PURE__ */ e("span", { className: "text-xs font-mono uppercase tracking-widest", children: "Sector Overview" })
          ] }),
          /* @__PURE__ */ e("h4", { className: `text-3xl md:text-4xl font-display font-medium ${c} mb-4`, children: w.name }),
          /* @__PURE__ */ e("p", { className: `text-lg ${g} leading-relaxed max-w-3xl`, children: w.description })
        ] }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12", children: [
          /* @__PURE__ */ t("div", { className: `p-6 rounded-2xl border ${b} ${x} backdrop-blur-sm`, children: [
            /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 uppercase font-bold mb-2 tracking-wider", children: "Market Size" }),
            /* @__PURE__ */ e("div", { className: `text-2xl font-mono font-medium ${c}`, children: w.marketSize })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-6 rounded-2xl border ${b} ${x} backdrop-blur-sm`, children: [
            /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 uppercase font-bold mb-2 tracking-wider", children: "Revenue Potential" }),
            /* @__PURE__ */ e("div", { className: `text-2xl font-mono font-medium ${c}`, children: w.revenuePotential })
          ] }),
          /* @__PURE__ */ t("div", { className: `p-6 rounded-2xl border ${b} ${x} backdrop-blur-sm`, children: [
            /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 uppercase font-bold mb-2 tracking-wider", children: "Growth Rate" }),
            /* @__PURE__ */ e("div", { className: "text-2xl font-mono font-medium text-green-500", children: w.growthRate })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "mt-auto", children: [
          /* @__PURE__ */ e("h5", { className: `text-xs font-bold uppercase tracking-wider ${g} mb-6 border-b ${b} pb-4`, children: "Strategic Drivers" }),
          /* @__PURE__ */ e("div", { className: "grid gap-4", children: w.keyPoints.map((N, h) => /* @__PURE__ */ t("div", { className: "flex items-start gap-4 group", children: [
            /* @__PURE__ */ e("div", { className: `p-1.5 rounded-full mt-0.5 shrink-0 ${m ? "bg-indigo-900/50 text-indigo-400" : "bg-indigo-50 text-indigo-600"}`, children: /* @__PURE__ */ e(le, { className: "w-3.5 h-3.5" }) }),
            /* @__PURE__ */ e("span", { className: `${c} text-base group-hover:translate-x-1 transition-transform duration-300 block`, children: N })
          ] }, h)) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ t("div", { className: `border-t ${b} bg-opacity-50 p-8 md:p-12 relative z-10`, children: [
      /* @__PURE__ */ e("h4", { className: `text-sm font-bold uppercase tracking-wider ${g} mb-10 text-center opacity-70`, children: "Strategic Growth Vectors" }),
      /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12", children: o.map((N, h) => /* @__PURE__ */ t("div", { className: "text-center group", children: [
        /* @__PURE__ */ e("div", { className: `text-5xl font-display font-medium mb-3 ${m ? "text-white group-hover:text-indigo-400" : "text-neutral-900 group-hover:text-indigo-600"} transition-colors duration-300`, children: N.value }),
        /* @__PURE__ */ e("h5", { className: `font-bold ${c} mb-2 text-lg`, children: N.title }),
        /* @__PURE__ */ e("p", { className: `text-sm ${g} leading-relaxed max-w-xs mx-auto`, children: N.description })
      ] }, h)) })
    ] })
  ] });
}, Ya = ({
  productName: r,
  savingsPerUnit: i,
  volumeOptions: n,
  theme: o = "light"
}) => {
  const [a, s] = A(n.default || 1e3), [d, m] = A(5), p = o === "dark", c = p ? "bg-neutral-900" : "bg-white", g = p ? "text-white" : "text-neutral-900", b = p ? "text-neutral-400" : "text-neutral-500", x = p ? "border-neutral-800" : "border-neutral-200", w = p ? "bg-neutral-800/80" : "bg-neutral-50/80", N = ie(() => {
    const h = [];
    let l = 0;
    for (let S = 1; S <= d; S++) {
      const T = a * i.calculation(a);
      l += T, h.push({
        year: S,
        savings: T,
        cumulative: l
      });
    }
    return {
      yearlyData: h,
      totalSavings: l,
      avgYearlySavings: l / d
    };
  }, [a, d, i]);
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${x} ${c} shadow-2xl overflow-hidden relative p-8 md:p-12`, children: [
    p && /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" }),
    /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-10 relative z-10", children: [
      /* @__PURE__ */ e("div", { className: `p-3 rounded-xl ${p ? "bg-green-500/10 text-green-400" : "bg-green-50 text-green-600"}`, children: /* @__PURE__ */ e(Xe, { className: "w-6 h-6" }) }),
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ e("h3", { className: `text-3xl font-display font-medium ${g}`, children: "ROI Projection" }),
        /* @__PURE__ */ e("p", { className: `text-sm ${b}`, children: "Estimate your long-term value capture." })
      ] })
    ] }),
    /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 relative z-10", children: [
      /* @__PURE__ */ t("div", { className: "lg:col-span-4 space-y-8", children: [
        /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden group", children: [
          /* @__PURE__ */ e("div", { className: "absolute -top-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl group-hover:bg-green-500/30 transition-colors duration-500" }),
          /* @__PURE__ */ t("div", { className: "relative z-10", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-6", children: [
              /* @__PURE__ */ e("div", { className: "p-3 bg-white/10 rounded-xl backdrop-blur-md", children: /* @__PURE__ */ e(ci, { className: "w-6 h-6 text-green-400" }) }),
              /* @__PURE__ */ t("div", { className: "px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider border border-green-500/20", children: [
                d,
                " Year Yield"
              ] })
            ] }),
            /* @__PURE__ */ e("p", { className: "text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2", children: "Cumulative Savings" }),
            /* @__PURE__ */ t("div", { className: "text-4xl lg:text-5xl font-mono font-medium tracking-tight mb-2", children: [
              "₹",
              N.totalSavings.toLocaleString()
            ] }),
            /* @__PURE__ */ e("p", { className: "text-neutral-400 text-sm font-light", children: "Projected return based on current volume." })
          ] })
        ] }),
        /* @__PURE__ */ t("div", { className: "space-y-6", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-end mb-4", children: [
              /* @__PURE__ */ t("label", { className: `text-sm font-bold uppercase tracking-wide ${b} flex items-center gap-2`, children: [
                /* @__PURE__ */ e(Ve, { className: "w-4 h-4" }),
                " ",
                n.label
              ] }),
              /* @__PURE__ */ t("span", { className: `text-xl font-mono font-bold ${p ? "text-indigo-400" : "text-indigo-600"}`, children: [
                a.toLocaleString(),
                " ",
                /* @__PURE__ */ e("span", { className: "text-base text-neutral-400 font-normal", children: n.unit })
              ] })
            ] }),
            /* @__PURE__ */ e("div", { className: "relative h-10 flex items-center", children: /* @__PURE__ */ e(
              "input",
              {
                type: "range",
                min: n.min,
                max: n.max,
                step: n.step,
                value: a,
                onChange: (h) => s(Number(h.target.value)),
                className: "w-full h-2 rounded-lg appearance-none cursor-pointer relative z-20",
                style: {
                  background: (() => {
                    const h = (a - n.min) / (n.max - n.min) * 100, l = p ? "#6366f1" : "#4f46e5", S = p ? "#374151" : "#e5e7eb";
                    return `linear-gradient(to right, ${l} ${h.toFixed(1)}%, ${S} ${h.toFixed(1)}%)`;
                  })()
                }
              }
            ) }),
            /* @__PURE__ */ t("div", { className: "flex justify-between text-[10px] font-mono font-medium text-neutral-400 uppercase", children: [
              /* @__PURE__ */ e("span", { children: n.min.toLocaleString() }),
              /* @__PURE__ */ e("span", { children: n.max.toLocaleString() })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ t("label", { className: `text-sm font-bold uppercase tracking-wide ${b} mb-4 block flex items-center gap-2`, children: [
              /* @__PURE__ */ e(ei, { className: "w-4 h-4" }),
              " Period"
            ] }),
            /* @__PURE__ */ e("div", { className: "grid grid-cols-3 gap-3", children: [3, 5, 10].map((h) => /* @__PURE__ */ t(
              "button",
              {
                onClick: () => m(h),
                className: `py-3 rounded-xl text-sm font-bold transition-all duration-300 ${d === h ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-lg scale-105" : `bg-neutral-100 dark:bg-neutral-800 ${g} hover:bg-neutral-200 dark:hover:bg-neutral-700`}`,
                children: [
                  h,
                  " Years"
                ]
              },
              h
            )) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "lg:col-span-8 flex flex-col justify-between", children: [
        /* @__PURE__ */ t("div", { className: "flex items-end justify-between h-64 mb-8 pt-10 px-4 border-b border-dashed border-neutral-200 dark:border-neutral-800 gap-2 md:gap-4 relative", children: [
          /* @__PURE__ */ t("div", { className: "absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 z-0", children: [
            /* @__PURE__ */ e("div", { className: "w-full h-px border-t border-dashed border-neutral-400" }),
            /* @__PURE__ */ e("div", { className: "w-full h-px border-t border-dashed border-neutral-400" }),
            /* @__PURE__ */ e("div", { className: "w-full h-px border-t border-dashed border-neutral-400" }),
            /* @__PURE__ */ e("div", { className: "w-full h-px border-t border-dashed border-neutral-400" })
          ] }),
          N.yearlyData.map((h, l) => {
            const S = h.cumulative / N.totalSavings * 100;
            return /* @__PURE__ */ t("div", { className: "relative flex flex-col items-center flex-1 group z-10", children: [
              /* @__PURE__ */ t("div", { className: "relative w-full max-w-[60px] flex items-end justify-center h-full group-hover:scale-105 transition-transform origin-bottom duration-300", children: [
                /* @__PURE__ */ t(
                  "div",
                  {
                    className: "w-full rounded-t-lg opacity-80 group-hover:opacity-100 transition-all duration-500 relative overflow-hidden bg-green-500/20",
                    style: { height: `${S}%` },
                    children: [
                      /* @__PURE__ */ e("div", { className: "absolute bottom-0 inset-x-0 bg-green-500 rounded-t-lg transition-all duration-500 ease-out", style: { height: "100%" } }),
                      /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/20 to-transparent pointer-events-none" })
                    ]
                  }
                ),
                /* @__PURE__ */ t("div", { className: "absolute -top-12 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-xs font-bold py-1 px-3 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none", children: [
                  "₹",
                  h.cumulative.toLocaleString(),
                  /* @__PURE__ */ e("div", { className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 rotate-45" })
                ] })
              ] }),
              /* @__PURE__ */ t("span", { className: `mt-3 text-xs font-mono font-bold ${b}`, children: [
                "Y",
                h.year
              ] })
            ] }, h.year);
          })
        ] }),
        /* @__PURE__ */ t("div", { className: "space-y-4", children: [
          N.yearlyData.slice(0, 3).map((h, l) => /* @__PURE__ */ t("div", { className: `flex items-center justify-between p-4 rounded-xl border ${x} ${w} group hover:border-indigo-500/30 transition-colors`, children: [
            /* @__PURE__ */ t("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ t("div", { className: `w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${p ? "bg-neutral-800 text-neutral-400" : "bg-neutral-100 text-neutral-500"}`, children: [
                "Y",
                h.year
              ] }),
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ e("div", { className: `text-xs uppercase font-bold tracking-wide ${b}`, children: "Cumulative Savings" }),
                /* @__PURE__ */ t("div", { className: `font-mono font-medium ${g} group-hover:text-green-500 transition-colors`, children: [
                  "₹",
                  h.cumulative.toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e(le, { className: `w-4 h-4 ${b} group-hover:translate-x-1 transition-transform` })
          ] }, h.year)),
          N.yearlyData.length > 3 && /* @__PURE__ */ t("div", { className: `text-center text-xs font-bold uppercase tracking-widest ${b} pt-2`, children: [
            "& ",
            N.yearlyData.length - 3,
            " more years projected"
          ] })
        ] })
      ] })
    ] })
  ] });
}, Ja = ({
  productName: r,
  impacts: i,
  carbonCredits: n,
  theme: o = "light"
}) => {
  const a = o === "dark", s = a ? "bg-neutral-900" : "bg-white", d = a ? "text-white" : "text-neutral-900", m = a ? "text-neutral-400" : "text-neutral-500", p = a ? "border-neutral-800" : "border-neutral-200", c = a ? "bg-neutral-800/80" : "bg-neutral-50/80", g = {
    carbon: ge,
    water: Be,
    energy: I,
    waste: di
  };
  return /* @__PURE__ */ t("div", { className: `rounded-3xl border ${p} ${s} shadow-xl p-8 md:p-12 relative overflow-hidden`, children: [
    a && /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" }),
    /* @__PURE__ */ t("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 relative z-10", children: [
      /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ e("div", { className: `p-2 rounded-lg ${a ? "bg-green-500/10 text-green-400" : "bg-green-50 text-green-600"}`, children: /* @__PURE__ */ e(qt, { className: "w-4 h-4" }) }),
          /* @__PURE__ */ e("h3", { className: `text-xs font-bold uppercase tracking-widest ${a ? "text-green-400" : "text-green-700"}`, children: "Sustainability Ledger" })
        ] }),
        /* @__PURE__ */ e("p", { className: `text-3xl md:text-4xl font-display font-medium ${d}`, children: "Environmental ROI" })
      ] }),
      n && /* @__PURE__ */ t("div", { className: `flex items-center gap-4 px-5 py-3 rounded-2xl border ${p} ${a ? "bg-neutral-800/50" : "bg-neutral-50"} backdrop-blur-sm`, children: [
        /* @__PURE__ */ t("div", { className: "text-right", children: [
          /* @__PURE__ */ e("div", { className: "text-[10px] uppercase font-bold tracking-wider text-neutral-500 mb-0.5", children: "Carbon Credits" }),
          /* @__PURE__ */ e("div", { className: `text-xl font-mono font-medium ${a ? "text-green-400" : "text-green-600"}`, children: n.value })
        ] }),
        /* @__PURE__ */ e("div", { className: `w-px h-8 ${a ? "bg-neutral-700" : "bg-neutral-200"}` }),
        /* @__PURE__ */ e(si, { className: `w-6 h-6 ${a ? "text-green-500" : "text-green-600"}` })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10", children: i.map((b, x) => {
      const w = g[b.type] || qt;
      return /* @__PURE__ */ t("div", { className: `group relative overflow-hidden border ${p} ${c} backdrop-blur-md p-6 rounded-2xl hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1`, children: [
        /* @__PURE__ */ e("div", { className: "absolute -bottom-4 -right-4 text-current opacity-5 group-hover:opacity-10 transition-opacity transform rotate-12 scale-150", children: /* @__PURE__ */ e(w, { className: `w-24 h-24 ${a ? "text-white" : "text-neutral-900"}` }) }),
        /* @__PURE__ */ t("div", { className: "relative z-10", children: [
          /* @__PURE__ */ e("div", { className: `w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${a ? "bg-neutral-800 text-green-400" : "bg-white text-green-600 shadow-sm"}`, children: /* @__PURE__ */ e(w, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ e("div", { className: `text-3xl font-display font-medium ${d} mb-1 tracking-tight`, children: b.value }),
          /* @__PURE__ */ e("div", { className: `text-xs ${m} font-bold uppercase tracking-wider mb-2`, children: b.label }),
          /* @__PURE__ */ e("div", { className: `w-full h-1 rounded-full ${a ? "bg-neutral-700" : "bg-neutral-200"} mt-4 overflow-hidden`, children: /* @__PURE__ */ e("div", { className: "h-full bg-green-500 rounded-full w-3/4 opacity-70 group-hover:w-full group-hover:opacity-100 transition-all duration-700" }) })
        ] })
      ] }, x);
    }) }),
    n && /* @__PURE__ */ t("div", { className: "mt-8 pt-6 border-t border-dashed border-neutral-700/50 flex items-center gap-3 text-sm text-neutral-500", children: [
      /* @__PURE__ */ e("div", { className: "w-2 h-2 rounded-full bg-green-500 animate-pulse" }),
      /* @__PURE__ */ e("p", { className: "max-w-2xl", children: n.description })
    ] })
  ] });
}, Za = ({
  productName: r,
  certifications: i,
  testingStandards: n,
  qualityMetrics: o,
  theme: a = "light"
}) => {
  const s = a === "dark", d = s ? "bg-neutral-900" : "bg-neutral-50", m = s ? "text-white" : "text-neutral-900", p = s ? "text-neutral-400" : "text-neutral-500", c = s ? "border-neutral-800" : "border-neutral-200", g = s ? "bg-neutral-800/50" : "bg-white";
  return /* @__PURE__ */ t("div", { className: `relative overflow-hidden rounded-3xl border ${c} ${d} shadow-2xl`, children: [
    s && /* @__PURE__ */ t(be, { children: [
      /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" }),
      /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" })
    ] }),
    /* @__PURE__ */ t("div", { className: "p-8 md:p-12 relative z-10", children: [
      /* @__PURE__ */ t("div", { className: "mb-12", children: [
        /* @__PURE__ */ t("div", { className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4 ${s ? "bg-blue-900/30 text-blue-400" : "bg-blue-50 text-blue-700"}`, children: [
          /* @__PURE__ */ e(q, { className: "w-4 h-4" }),
          /* @__PURE__ */ e("span", { className: "text-xs font-bold uppercase tracking-wider", children: "Quality Assurance" })
        ] }),
        /* @__PURE__ */ e("h3", { className: `text-3xl lg:text-4xl font-display font-medium ${m} mb-2`, children: "Certifications & Standards" }),
        /* @__PURE__ */ e("p", { className: `text-lg ${p} max-w-2xl`, children: "rigorous testing protocols ensuring consistency and compliance with global standards." })
      ] }),
      /* @__PURE__ */ e("div", { className: "space-y-4 mb-12", children: i.map((b, x) => /* @__PURE__ */ t("div", { className: `flex items-center gap-6 p-6 rounded-2xl border ${c} ${g} group transition-all hover:border-blue-500/50`, children: [
        /* @__PURE__ */ e("div", { className: `w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${s ? "bg-blue-900/20 text-blue-400" : "bg-blue-50 text-blue-600"}`, children: /* @__PURE__ */ e(Ze, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ t("div", { className: "flex-grow", children: [
          /* @__PURE__ */ e("h4", { className: `text-lg font-display font-bold ${m} mb-1`, children: b.name }),
          /* @__PURE__ */ e("p", { className: `text-sm ${p}`, children: b.description })
        ] }),
        b.certNumber && /* @__PURE__ */ e("div", { className: `hidden md:block px-3 py-1 rounded text-xs font-mono font-bold uppercase ${s ? "bg-neutral-800 text-neutral-400 border border-neutral-700" : "bg-neutral-100 text-neutral-500 border border-neutral-200"}`, children: b.certNumber })
      ] }, x)) }),
      /* @__PURE__ */ t("div", { className: "space-y-12", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("h4", { className: `text-xl font-display font-medium ${m} mb-6 flex items-center gap-3`, children: [
            /* @__PURE__ */ e(Kt, { className: "w-5 h-5 text-neutral-400" }),
            "Testing Protocols"
          ] }),
          /* @__PURE__ */ e("div", { className: `divide-y ${s ? "divide-neutral-800" : "divide-neutral-200"} border-t ${c}`, children: n.map((b, x) => /* @__PURE__ */ t("div", { className: "py-5 flex items-start md:items-center justify-between group px-2", children: [
            /* @__PURE__ */ t("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ e("div", { className: "mt-1.5 md:mt-0", children: /* @__PURE__ */ e("div", { className: `w-2 h-2 rounded-full ${s ? "bg-neutral-700 group-hover:bg-blue-500" : "bg-neutral-300 group-hover:bg-blue-500"} transition-colors` }) }),
              /* @__PURE__ */ t("div", { children: [
                /* @__PURE__ */ e("h5", { className: `font-bold ${m} text-base mb-1`, children: b.name }),
                /* @__PURE__ */ e("p", { className: `text-sm ${p}`, children: b.description })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: `text-xs font-mono tracking-wide uppercase shrink-0 ml-6 ${s ? "text-blue-400" : "text-blue-600"}`, children: [
              "Ref: ",
              b.code
            ] })
          ] }, x)) })
        ] }),
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ t("h4", { className: `text-xl font-display font-medium ${m} mb-6 flex items-center gap-3`, children: [
            /* @__PURE__ */ e(Ut, { className: "w-5 h-5 text-neutral-400" }),
            "Quality Benchmarks"
          ] }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: o.map((b, x) => /* @__PURE__ */ t("div", { className: `p-6 rounded-xl border ${c} ${g} flex flex-col items-center justify-center text-center`, children: [
            /* @__PURE__ */ e("div", { className: `text-3xl font-display font-bold ${m} mb-2`, children: b.value }),
            /* @__PURE__ */ e("div", { className: `text-xs font-bold uppercase tracking-widest ${p}`, children: b.label })
          ] }, x)) }),
          /* @__PURE__ */ t("div", { className: `mt-8 p-6 rounded-xl ${s ? "bg-neutral-800" : "bg-neutral-100"} text-center`, children: [
            /* @__PURE__ */ e("p", { className: `text-sm ${p} mb-3`, children: "Full quality reports available for every batch." }),
            /* @__PURE__ */ e("button", { className: `text-xs font-bold uppercase tracking-widest ${s ? "text-white hover:text-blue-400" : "text-neutral-900 hover:text-blue-600"} transition-colors border-b-2 border-transparent hover:border-current`, children: "Download QC Manual" })
          ] })
        ] })
      ] })
    ] })
  ] });
}, wl = "__MONOATOM_CALC_OVERRIDES__";
function kl(r) {
  return r ? String(r).trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") : "";
}
function me(r) {
  const i = globalThis?.[wl];
  if (!i || typeof i != "object") return null;
  const n = kl(r);
  return i[n] ?? i[r] ?? null;
}
function Ee(r, i) {
  if (!i || typeof i != "object") return r;
  const n = { ...r };
  for (const [o, a] of Object.entries(i)) {
    const s = r?.[o];
    s && a && typeof a == "object" && !Array.isArray(a) ? n[o] = { ...s, ...a } : n[o] = a;
  }
  return n;
}
const ha = {
  // Primary inputs — always visible
  defaultInputs: Ee({
    vehicleCount: {
      label: "Vehicle Count",
      type: "logslider",
      // logarithmic 1–1000
      min: 1,
      max: 1e3,
      unit: "vehicles",
      default: 5
    },
    competitorCost: {
      label: "Competitor Cost",
      type: "slider",
      min: 1e4,
      max: 25e3,
      step: 1e3,
      unit: "₹/vehicle",
      default: 15e3,
      note: "Premium ceramic coating market rate ₹15,000–20,000/vehicle."
    },
    annualWashCostPerVehicle: {
      label: "Annual Wash Cost",
      type: "slider",
      min: 3e3,
      max: 3e4,
      step: 1e3,
      unit: "₹/vehicle/yr",
      default: 12e3,
      note: "Professional wash cost per vehicle per year without coating."
    },
    washReductionPct: {
      label: "Wash Reduction",
      type: "slider",
      min: 40,
      max: 70,
      step: 5,
      unit: "%",
      default: 60,
      note: "Ceraphene hydrophobic effect reduces wash frequency 40–70%."
    }
  }, me("Ceraphene")?.defaultInputs),
  // Secondary inputs — accordion
  secondaryInputs: Ee({
    analysisPeriod: {
      label: "Analysis Period",
      type: "buttongroup",
      default: 4,
      options: [
        { value: 3, label: "3 yr" },
        { value: 4, label: "4 yr" },
        { value: 5, label: "5 yr" }
      ]
    },
    cerapheneDurability: {
      label: "Ceraphene Durability",
      type: "slider",
      min: 3,
      max: 4.5,
      step: 0.5,
      unit: "yr",
      default: 3.5,
      note: "Field-validated 3–4+ years (3.5 yr conservative)."
    },
    competitorDurability: {
      label: "Competitor Durability",
      type: "slider",
      min: 1,
      max: 2.5,
      step: 0.5,
      unit: "yr",
      default: 1.5,
      note: "Standard ceramic coating lifespan. Estimate — validate with supplier."
    }
  }, me("Ceraphene")?.secondaryInputs),
  calculations: (r) => {
    const i = me("Ceraphene")?.constants || {}, {
      vehicleCount: n = 5,
      competitorCost: o = 15e3,
      annualWashCostPerVehicle: a = 12e3,
      washReductionPct: s = 60,
      analysisPeriod: d = 4,
      cerapheneDurability: m = 3.5,
      // years
      competitorDurability: p = 1.5
      // years (⚠ estimate)
    } = r, c = i.ceraphenePrice ?? 5e3, g = i.paintCorrectionPerYear ?? 8750, b = s / 100, x = Math.round(
      o / p + // coating amortized
      a + // full wash cost
      g
      // correction cost
    ), w = Math.round(
      c / m + // coating amortized
      a * (1 - b)
      // reduced washing
      // no paint correction with Ceraphene
    ), N = x - w, h = o - c, l = Math.round(h * n), S = Math.round(h / o * 100), T = Math.round(N * d), R = Math.round(T * n), P = c, M = Math.round(c * n), f = R > 0 && M > 0 ? Math.round(R / M * 100) : null, E = N > 0 ? Math.round(c / N * 12) : null, j = E ? `${E} months` : "Immediate", W = i.washCostPerWash ?? 500, O = Math.round(a / W), F = Math.round(O * (1 - b)), G = O - F, B = i.waterLitresPerWash ?? 100, re = G * B, V = Math.round(re * n), C = i.productMlPerVehicle ?? 35, v = Math.round(C * n), u = i.cerapheneProductCostPerVehicle ?? 2500, y = Math.round(u * n), $ = c - u, Z = Math.round($ * n);
    return {
      // ── Core ──────────────────────────────────────────────────────────────
      vehicleCount: n,
      analysisPeriod: d,
      ceraphenePrice: c,
      investmentPerVehicle: P,
      investmentTotal: M,
      productMlPerVehicle: C,
      // 35 ml / vehicle (TDS coverage spec)
      productMlTotal: v,
      // total ml needed for fleet
      // Product cost split
      cerapheneProductCostPerVehicle: u,
      // ₹/vehicle coating material only (est.)
      cerapheneProductCostTotal: y,
      cerapheneServiceCostPerVehicle: $,
      // ₹/vehicle professional installation
      cerapheneServiceCostTotal: Z,
      // ── Per-vehicle annual cost breakdown ─────────────────────────────────
      competitorAnnualEffective: x,
      cerapheneAnnualEffective: w,
      annualSavingsPerVehicle: N,
      competitorCostAmortized: Math.round(o / p),
      cerapheneCoatAmortized: Math.round(c / m),
      annualWashWithCoating: Math.round(a * (1 - b)),
      paintCorrectionPerYear: g,
      // ── Savings — BOTH methods always returned, always shown ──────────────
      directSavingsPerVehicle: h,
      // ₹/vehicle upfront brochure price difference
      directSavingsTotal: l,
      // ₹ project total
      directSavingsPct: S,
      // % cost advantage (e.g. 67%)
      directLabel: "Direct Savings",
      fullSavingsPerVehicle: T,
      // ₹/vehicle over analysis period
      fullSavingsTotal: R,
      // ₹ total
      fullLabel: "Full Ownership Savings",
      // ── ROI ───────────────────────────────────────────────────────────────
      roiPercentage: f,
      // % on Ceraphene investment (null if not calculable)
      paybackLabel: j,
      // 'X months'
      paybackMonths: E,
      roiMultiple: R > 0 && M > 0 ? parseFloat((R / M).toFixed(1)) : null,
      // ── Environmental ─────────────────────────────────────────────────────
      annualWashesWithout: O,
      annualWashesWith: F,
      annualWashesSaved: G,
      waterSavedLitresPerVehicle: re,
      waterSavedTotal: V,
      // ── Legacy aliases ────────────────────────────────────────────────────
      hardness: "9H+",
      durability: "3-4+ years",
      costSavings: `${S}%`,
      savingsPerUnit: {
        label: "Full Savings per Vehicle",
        value: T,
        description: `vs. ₹${o.toLocaleString()} competitor over ${d} yr`
      },
      summary: [
        { label: "Direct Savings", value: `₹${h.toLocaleString()}` },
        { label: "Durability", value: "3-4+ years" },
        { label: "Cost Advantage", value: `${S}%` }
      ]
    };
  }
}, Cl = [
  {
    title: "Surface Preparation",
    description: "Thorough washing, decontamination, and paint correction to ensure perfect bonding surface.",
    duration: "2-3 hours",
    icon: en
  },
  {
    title: "Coating Application",
    description: "Apply Ceraphene in thin, even layers. Graphene-enhanced formula creates molecular bond with paint.",
    duration: "3-4 hours",
    icon: Be
  },
  {
    title: "Curing Process",
    description: "Coating cures to form ultra-hard, hydrophobic layer. Graphene provides exceptional durability.",
    duration: "12-24 hours",
    icon: q
  },
  {
    title: "Long-Term Protection",
    description: "Enjoy 9H+ hardness, water beading, UV protection, and brilliant shine for 3-4+ years.",
    duration: "3-4+ years",
    icon: dt
  }
], Pt = {
  productName: "Ceraphene",
  pilotDetails: [
    {
      title: "Fleet Trial Package",
      description: "Coat 3-5 vehicles from your fleet"
    },
    {
      title: "Professional Application",
      description: "Certified detailer applies coating properly"
    },
    {
      title: "Documentation",
      description: "Before/after photos and water beading tests"
    },
    {
      title: "Usage Tracking",
      description: "Monitor wash frequency and appearance over 30 days"
    },
    {
      title: "Performance Report",
      description: "Detailed assessment vs. uncoated vehicles"
    }
  ],
  benefits: [
    {
      title: "Fleet Validation",
      description: "Test on your actual vehicles",
      icon: Ha
    },
    {
      title: "See the Difference",
      description: "Compare coated vs. uncoated",
      icon: q
    },
    {
      title: "Verify Claims",
      description: "Confirm durability and performance",
      icon: z
    }
  ],
  pricing: {
    cost: "From ₹15,000",
    description: "Trial for 3 vehicles including application",
    note: "* Fleet discounts available for larger trials"
  }
}, St = {
  productName: "Ceraphene",
  marketData: {
    tamSize: "₹8,000 Cr",
    cagr: "15% CAGR",
    targetCustomers: "50,000+",
    marketShare: "2-5%"
  },
  industries: [
    {
      id: "luxury-automotive",
      name: "Luxury Auto Segment",
      description: "Premium car owners seeking best-in-class protection at accessible pricing.",
      keyPoints: [
        "Growing luxury car market in India",
        "High willingness to pay for protection",
        "Performance comparable to ₹15k+ coatings"
      ],
      marketSize: "₹3,000 Cr",
      revenuePotential: "₹90-180 Cr",
      growthRate: "18% CAGR"
    },
    {
      id: "detailing-studios",
      name: "Detailing Studios",
      description: "Professional detailers offering premium services with better margins.",
      keyPoints: [
        "Growing detailing industry",
        "Higher margins vs. traditional coatings",
        "Customer satisfaction from longevity"
      ],
      marketSize: "₹2,500 Cr",
      revenuePotential: "₹60-120 Cr",
      growthRate: "20% CAGR"
    },
    {
      id: "fleet-operators",
      name: "Fleet Operators",
      description: "Commercial fleets seeking cost-effective vehicle protection.",
      keyPoints: [
        "Large fleet sizes need economies of scale",
        "Reduced wash frequency saves costs",
        "Better resale value protection"
      ],
      marketSize: "₹1,500 Cr",
      revenuePotential: "₹30-60 Cr",
      growthRate: "12% CAGR"
    }
  ],
  growthMetrics: [
    {
      title: "Auto Market Growth",
      description: "Indian automotive market expansion",
      value: "8% annually"
    },
    {
      title: "Premium Segment",
      description: "Luxury car sales growth",
      value: "15% CAGR"
    },
    {
      title: "Aftermarket Services",
      description: "Car care services market",
      value: "₹15,000 Cr by 2025"
    }
  ]
}, Ue = {
  productName: "Ceraphene",
  timeframe: "4 years",
  traditionalSolution: {
    breakdown: {
      "Wax/Sealant (Annual)": 48e3,
      "Frequent Washing": 6e4,
      "Paint Correction": 35e3,
      "Resale Value Loss": 8e4
    },
    total: 223e3
  },
  productSolution: {
    breakdown: {
      "Ceraphene Application": 25e3,
      "Reduced Washing": 24e3,
      "No Paint Correction": 0,
      "Maintained Value": 2e4
    },
    total: 69e3,
    paybackPeriod: "6-8 months"
  },
  breakdown: [
    {
      category: "Initial Protection",
      description: "One-time coating vs. annual wax",
      traditional: 12e3,
      withProduct: 25e3
    },
    {
      category: "Maintenance (4 years)",
      description: "Washing and upkeep",
      traditional: 6e4,
      withProduct: 24e3
    },
    {
      category: "Paint Correction",
      description: "Scratch removal and polishing",
      traditional: 35e3,
      withProduct: 0
    },
    {
      category: "Resale Impact",
      description: "Paint condition affects value",
      traditional: 8e4,
      withProduct: 2e4
    }
  ],
  highlights: [
    { label: "Maintenance Savings", value: "-75%", color: "green" },
    { label: "Coating Durability", value: "4+ Years", color: "blue" }
  ]
}, ga = {
  productName: "Ceraphene",
  savingsPerUnit: {
    calculation: (r) => Math.round(6e3)
  },
  volumeOptions: {
    label: "Fleet Size",
    min: 1,
    max: 200,
    step: 1,
    unit: "vehicles",
    default: 10
  }
}, ba = {
  productName: "Ceraphene",
  impacts: [
    { type: "water", value: "60%", label: "Water Saved" },
    { type: "waste", value: "50%", label: "Less Chemicals" },
    { type: "energy", value: "3-4 years", label: "Durability" },
    { type: "carbon", value: "70%", label: "Fewer Washes" }
  ],
  carbonCredits: {
    value: "Reduced Footprint",
    description: "Significantly lower water and chemical usage"
  }
}, Mt = {
  productName: "Ceraphene",
  certifications: [
    {
      name: "9H+ Hardness",
      description: "Industry-leading scratch resistance",
      certNumber: "H-9PLUS"
    },
    {
      name: "Lab Tested",
      description: "Comprehensive durability and performance testing",
      certNumber: "LT-2024"
    },
    {
      name: "ISO 9001:2015",
      description: "Quality management certified",
      certNumber: "ISO-9001"
    }
  ],
  testingStandards: [
    {
      name: "Hardness Testing",
      description: "Pencil hardness test confirms 9H+ rating",
      code: "ASTM D3363"
    },
    {
      name: "Hydrophobicity",
      description: "Contact angle measurement for water beading",
      code: "JIS R3257"
    },
    {
      name: "UV Resistance",
      description: "Accelerated weathering test",
      code: "ASTM G154"
    },
    {
      name: "Chemical Resistance",
      description: "Resistance to acids, alkalines, and solvents",
      code: "ASTM D1308"
    }
  ],
  qualityMetrics: [
    { value: "9H+", label: "Hardness" },
    { value: "3-4 years", label: "Durability" },
    { value: "110°+", label: "Contact Angle" },
    { value: "UV Stable", label: "Protection" }
  ]
}, Er = {
  productName: "Ceraphene",
  stages: [
    {
      type: "trial",
      title: "Single Vehicle Test",
      description: "Try on one personal or fleet vehicle",
      duration: "30 days",
      investment: "₹5,000",
      details: [
        "Professional application",
        "Before/after documentation",
        "Performance evaluation"
      ]
    },
    {
      type: "validation",
      title: "Small Fleet",
      description: "Coat 3-5 vehicles for comparison",
      duration: "60 days",
      investment: "₹15,000-25,000",
      details: [
        "Multiple vehicle types",
        "Usage tracking",
        "Wash frequency monitoring"
      ]
    },
    {
      type: "scale",
      title: "Fleet Rollout",
      description: "Expand to 10-50 vehicles",
      duration: "3-6 months",
      investment: "Volume pricing",
      details: [
        "Fleet-wide deployment",
        "Maintenance schedule",
        "Performance tracking"
      ]
    },
    {
      type: "deployment",
      title: "Full Fleet",
      description: "Complete fleet protection program",
      duration: "Ongoing",
      investment: "Enterprise pricing",
      details: [
        "All vehicles coated",
        "Re-application program",
        "Long-term partnership"
      ]
    }
  ]
}, $t = {
  productName: "Ceraphene",
  nationalData: {
    locations: [
      { city: "Mumbai", state: "Maharashtra", projects: 15 },
      { city: "Bangalore", state: "Karnataka", projects: 12 },
      { city: "Delhi NCR", state: "Delhi", projects: 18 },
      { city: "Hyderabad", state: "Telangana", projects: 8 },
      { city: "Pune", state: "Maharashtra", projects: 10 },
      { city: "Chennai", state: "Tamil Nadu", projects: 7 }
    ],
    marketPenetration: "0.8%",
    penetrationDescription: "Growing presence in metro cities",
    partnerships: "40+",
    partnershipDescription: "Certified detailing studios",
    reach: "12 cities",
    reachDescription: "Major metros and tier-1 cities"
  },
  internationalData: {
    locations: [
      { city: "Dubai", state: "UAE", projects: 4 }
    ],
    marketPenetration: "0.2%",
    penetrationDescription: "Initial international presence",
    partnerships: "6+",
    partnershipDescription: "Premium detailing partners",
    reach: "1 country",
    reachDescription: "Middle East expansion"
  },
  stats: [
    { value: "70+", label: "Projects" },
    { value: "5,000+", label: "Vehicles Coated" },
    { value: "13", label: "Cities" },
    { value: "46+", label: "Partner Studios" }
  ]
}, xa = {
  productName: "Ceraphene",
  specifications: [
    { parameter: "Hardness", value: "9H+", testMethod: "ASTM D3363" },
    { parameter: "Durability", value: "3-4+ years", testMethod: "Field validation" },
    { parameter: "Hydrophobicity", value: "110°+ contact angle", testMethod: "JIS R3257" },
    { parameter: "UV Resistance", value: "Excellent", testMethod: "ASTM G154" },
    { parameter: "Chemical Resistance", value: "pH 2-12", testMethod: "ASTM D1308" },
    { parameter: "Application Temp", value: "15-25°C", testMethod: "Application guide" },
    { parameter: "Coverage", value: "30-40 ml per vehicle", testMethod: "Application test" },
    { parameter: "Curing Time", value: "12-24 hours", testMethod: "Lab protocol" }
  ],
  documents: [
    {
      title: "Technical Data Sheet",
      description: "Complete specifications and properties",
      fileSize: "1.8 MB",
      format: "PDF",
      filename: "Ceraphene-TDS.pdf",
      url: "#"
    },
    {
      title: "Application Guide",
      description: "Professional application procedures",
      fileSize: "3.2 MB",
      format: "PDF",
      filename: "Ceraphene-Application-Guide.pdf",
      url: "#"
    },
    {
      title: "Test Results",
      description: "Independent lab testing reports",
      fileSize: "2.5 MB",
      format: "PDF",
      filename: "Ceraphene-Test-Report.pdf",
      url: "#"
    },
    {
      title: "Safety Data Sheet",
      description: "Material safety information",
      fileSize: "0.9 MB",
      format: "PDF",
      filename: "Ceraphene-SDS.pdf",
      url: "#"
    }
  ]
}, jr = {
  productName: "Ceraphene",
  industries: [
    {
      name: "Luxury Car Owners",
      icon: "automotive",
      description: "Premium protection for high-value vehicles at a fraction of competitor costs.",
      useCases: [
        { title: "New Car Protection", description: "Protect paint from day one" },
        { title: "Show Cars", description: "Maintain pristine appearance" },
        { title: "Daily Drivers", description: "Durable protection for regular use" }
      ],
      benefits: [
        { title: "60-70% Cost Savings", description: "vs. ₹15k+ premium coatings" },
        { title: "Comparable Performance", description: "Same 9H+ hardness and durability" },
        { title: "Resale Value", description: "Maintain paint condition" }
      ],
      metrics: [
        { value: "₹10,000", label: "Saved" },
        { value: "9H+", label: "Hardness" },
        { value: "3-4 years", label: "Lasts" },
        { value: "95%", label: "Satisfaction" }
      ]
    },
    {
      name: "Fleet Operators",
      icon: "manufacturing",
      description: "Commercial fleets reducing maintenance costs and improving vehicle appearance.",
      useCases: [
        { title: "Taxi Fleets", description: "Reduce wash frequency and costs" },
        { title: "Corporate Fleets", description: "Maintain professional appearance" },
        { title: "Rental Cars", description: "Protect against wear and tear" }
      ],
      benefits: [
        { title: "Lower Maintenance", description: "60% reduction in washing" },
        { title: "Better Resale", description: "Protected paint increases value" },
        { title: "Professional Image", description: "Always looking sharp" }
      ],
      metrics: [
        { value: "₹36,000", label: "Saved/4yr" },
        { value: "-60%", label: "Washing" },
        { value: "+15%", label: "Resale Value" },
        { value: "100+", label: "Fleet Size" }
      ]
    },
    {
      name: "Detailing Studios",
      icon: "construction",
      description: "Professional detailers offering premium services with better profit margins.",
      useCases: [
        { title: "Premium Packages", description: "Top-tier coating offering" },
        { title: "Fleet Contracts", description: "Volume business opportunities" },
        { title: "Specialty Services", description: "Unique value proposition" }
      ],
      benefits: [
        { title: "Higher Margins", description: "40-50% vs. competitor coatings" },
        { title: "Customer Satisfaction", description: "Long-lasting results" },
        { title: "Repeat Business", description: "Re-application after 3-4 years" }
      ],
      metrics: [
        { value: "45%", label: "Margins" },
        { value: "200+", label: "Vehicles/year" },
        { value: "4.8/5", label: "Rating" },
        { value: "80%", label: "Retention" }
      ]
    }
  ]
}, Fr = {
  productName: "Ceraphene",
  sections: [
    {
      icon: "mechanism",
      title: "Graphene-Enhanced Formula",
      summary: "How graphene nano-platelets create superior ceramic coating",
      content: [
        "Ceraphene combines traditional ceramic coating chemistry (silica and siloxane) with graphene nano-platelets. The graphene adds mechanical strength, flexibility, and durability that pure ceramic coatings cannot achieve.",
        "Graphene's 2D structure creates a nano-reinforcement mesh within the ceramic matrix, similar to rebar in concrete. This prevents microcracking and provides exceptional scratch resistance.",
        "The result is a coating that combines the best of both worlds: the hardness and gloss of ceramic with the flexibility and durability of graphene."
      ],
      keyPoints: [
        {
          title: "9H+ Hardness",
          description: "Exceeds pure ceramic coatings"
        },
        {
          title: "Flexibility",
          description: "Graphene prevents brittle failure"
        },
        {
          title: "Extended Life",
          description: "25-40% longer than traditional coatings"
        }
      ],
      technicalData: {
        "GNP Content": "Proprietary blend",
        "Ceramic Matrix": "SiO2 + Si-O-Si",
        "Layer Thickness": "2-3 microns"
      }
    },
    {
      icon: "properties",
      title: "Performance Characteristics",
      summary: "Measurable benefits of Ceraphene coating",
      content: [
        "9H+ hardness rating means exceptional scratch resistance. Most daily scratches (from washing, tree branches, etc.) cannot penetrate the coating.",
        "Ultra-hydrophobic surface (110°+ contact angle) causes water to bead and roll off, carrying dirt and contaminants with it. This self-cleaning effect dramatically reduces wash frequency.",
        "UV stability ensures the coating doesn't degrade or yellow over time. Paint underneath remains protected from UV-induced fading.",
        "3-4+ year lifespan is validated through accelerated aging tests and real-world field data from thousands of vehicles."
      ],
      keyPoints: [
        {
          title: "Scratch Protection",
          description: "9H+ hardness blocks daily damage"
        },
        {
          title: "Self-Cleaning",
          description: "Hydrophobic surface repels dirt"
        },
        {
          title: "UV Protection",
          description: "Prevents paint fading and oxidation"
        },
        {
          title: "Long-Lasting",
          description: "3-4+ years of protection"
        }
      ],
      technicalData: {
        Hardness: "9H+ (ASTM D3363)",
        "Contact Angle": "110°+",
        "UV Stability": ">99% after 2000h",
        Durability: "3-4+ years field"
      }
    },
    {
      icon: "science",
      title: "Application & Bonding",
      summary: "How Ceraphene bonds to automotive paint",
      content: [
        "Ceraphene forms a molecular bond with automotive clear coat through siloxane chemistry. The Si-O bonds create a permanent attachment that won't wash or peel off.",
        "Proper surface preparation is critical. Paint must be decontaminated and polished to remove embedded contaminants and create a smooth bonding surface.",
        "Once applied, the coating undergoes a 12-24 hour curing process. During this time, the ceramic matrix cross-links and the graphene platelets align to form the protective layer."
      ],
      keyPoints: [
        {
          title: "Molecular Bond",
          description: "Permanent attachment to clear coat"
        },
        {
          title: "Surface Preparation",
          description: "Critical for proper bonding"
        },
        {
          title: "Curing Process",
          description: "12-24 hours for full hardness"
        }
      ],
      technicalData: {
        "Bond Type": "Si-O covalent",
        "Cure Time": "12-24 hours",
        "Full Hardness": "7 days",
        "Application Temp": "15-25°C"
      }
    }
  ]
}, $s = () => {
  const r = Qn, i = [
    {
      id: "overview",
      label: "Overview",
      content: /* @__PURE__ */ t("div", { className: "space-y-24 mt-24", children: [
        /* @__PURE__ */ e(
          ht,
          {
            title: r.hero.title,
            subtitle: r.hero.subtitle,
            category: "Automotive & Marine",
            categoryColor: "bg-blue-400",
            images: [
              "/images/ceraphene_lifecycle_lab_making.png",
              "/images/ceraphene_lifecycle_lab_testing.png",
              "/images/ceraphene_lifecycle_studio_application.png",
              "/images/ceraphene_lifecycle_studio_buffing.png",
              "/images/ceraphene_lifecycle_result.png"
            ],
            buttons: [
              { text: r.hero.primaryButtonText, link: "/contact", variant: "primary" },
              { text: r.hero.secondaryButtonText, link: "#specs", variant: "secondary" }
            ]
          }
        ),
        /* @__PURE__ */ t("section", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ e("div", { className: "lg:col-span-1 h-full min-h-[300px]", children: /* @__PURE__ */ e(
            ta,
            {
              src: "/images/ceraphene-studio.png",
              alt: "Ceraphene Studio View",
              className: "h-full",
              imageFit: "object-contain",
              innerClassName: "bg-white p-4"
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "lg:col-span-2 grid grid-cols-2 gap-4", children: [
            { label: "Hardness", value: "9H+", desc: "Scratch Resistance" },
            { label: "Durability", value: "4+ Years", desc: "Long-Lasting Bond" },
            { label: "Cost Savings", value: "60%", desc: "vs Premium Brands" },
            { label: "Contact Angle", value: "115°", desc: "superhydrophobic" }
          ].map((n, o) => /* @__PURE__ */ t("div", { className: "p-8 bg-neutral-50 border border-neutral-200 rounded-xl hover:shadow-md transition-shadow flex flex-col justify-center", children: [
            /* @__PURE__ */ e("div", { className: "text-4xl font-display font-medium text-neutral-900 mb-2", children: n.value }),
            /* @__PURE__ */ e("div", { className: "text-sm font-bold text-neutral-900 uppercase tracking-wide mb-1", children: n.label }),
            /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500", children: n.desc })
          ] }, o)) })
        ] }),
        /* @__PURE__ */ t("section", { className: "py-8", children: [
          /* @__PURE__ */ e(k, { number: "01", title: "Ultimate Protection", theme: "light", subtitle: "Engineered for professionals who demand the best." }),
          /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-12", children: [
            /* @__PURE__ */ t("div", { className: "md:col-span-2 p-8 bg-neutral-900 text-white rounded-2xl relative overflow-hidden group flex flex-col justify-end min-h-[300px]", children: [
              /* @__PURE__ */ e("div", { className: "absolute inset-0 opacity-20", children: /* @__PURE__ */ e("div", { className: "absolute right-0 top-0 p-8 transform rotate-12", children: /* @__PURE__ */ e(xe, { size: 200, strokeWidth: 0.5 }) }) }),
              /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium mb-2 relative z-10", children: "Self-Healing Barrier" }),
              /* @__PURE__ */ e("p", { className: "text-neutral-400 leading-relaxed max-w-lg relative z-10", children: "Minor scratches and swirl marks vanish under heat exposure. The graphene lattice absorbs thermal energy to reform the surface structure, maintaining a flawless mirror finish." })
            ] }),
            /* @__PURE__ */ t("div", { className: "md:row-span-2 p-8 bg-white border border-neutral-200 rounded-2xl flex flex-col", children: [
              /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6", children: /* @__PURE__ */ e(ke, { className: "w-6 h-6" }) }),
              /* @__PURE__ */ e("h3", { className: "text-xl font-display font-medium mb-3 text-neutral-900", children: "Extreme Hydrophobicity" }),
              /* @__PURE__ */ e("p", { className: "text-neutral-600 text-sm leading-relaxed mb-6", children: 'Water beads up and rolls off instantly, taking dirt and grime with it. This "Lotus Effect" significantly reduces wash frequency.' }),
              /* @__PURE__ */ t("div", { className: "mt-auto p-4 bg-neutral-50 rounded-lg", children: [
                /* @__PURE__ */ t("div", { className: "flex justify-between text-xs font-medium text-neutral-500 mb-1", children: [
                  /* @__PURE__ */ e("span", { children: "Standard Ceramic" }),
                  /* @__PURE__ */ e("span", { children: "Ceraphene" })
                ] }),
                /* @__PURE__ */ e("div", { className: "w-full h-2 bg-neutral-200 rounded-full overflow-hidden", children: /* @__PURE__ */ e("div", { className: "h-full bg-blue-500 w-11/12" }) }),
                /* @__PURE__ */ e("div", { className: "text-right text-xs font-bold text-blue-600 mt-1", children: "115° Slide Angle" })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "p-8 bg-neutral-50 border border-neutral-200 rounded-2xl", children: [
              /* @__PURE__ */ t("h3", { className: "text-lg font-bold text-neutral-900 mb-2 flex items-center gap-2", children: [
                /* @__PURE__ */ e(ci, { className: "w-5 h-5 text-neutral-500" }),
                "Cost Disruption"
              ] }),
              /* @__PURE__ */ e("p", { className: "text-neutral-600 text-sm mb-4", children: "Direct-to-installer pricing cuts out the middleman markup common in the detailing industry." }),
              /* @__PURE__ */ t("div", { className: "flex items-baseline gap-2", children: [
                /* @__PURE__ */ e("span", { className: "text-2xl font-bold text-green-600", children: "₹5k" }),
                /* @__PURE__ */ e("span", { className: "text-sm text-neutral-400 line-through", children: "₹15k (Others)" })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "p-8 bg-white border border-neutral-200 rounded-2xl", children: [
              /* @__PURE__ */ t("h3", { className: "text-lg font-bold text-neutral-900 mb-2 flex items-center gap-2", children: [
                /* @__PURE__ */ e(X, { className: "w-5 h-5 text-neutral-500" }),
                "Easy Application"
              ] }),
              /* @__PURE__ */ e("p", { className: "text-neutral-600 text-sm", children: "Extended flash time allows for easier leveling and buffing, reducing installation errors even for less experienced technicians." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("section", { className: "py-8", children: [
          /* @__PURE__ */ e(k, { number: "02", title: "Versatile Application", theme: "light" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-8", children: ["Exotic Cars", "Marine Yachts", "Private Jets", "Industrial"].map((n, o) => /* @__PURE__ */ e("div", { className: "p-6 border border-neutral-200 rounded-lg text-center hover:bg-neutral-50 transition-colors", children: /* @__PURE__ */ e("div", { className: "font-medium text-neutral-900", children: n }) }, o)) })
        ] }),
        /* @__PURE__ */ t("div", { className: "mt-8 pt-12 border-t border-neutral-200", children: [
          /* @__PURE__ */ e("h3", { className: "text-lg font-bold text-neutral-900 mb-8", children: "The Graphene Advantage" }),
          /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ t("table", { className: "w-full text-left text-sm", children: [
            /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ t("tr", { className: "border-b border-neutral-200 bg-neutral-50", children: [
              /* @__PURE__ */ e("th", { className: "p-4 text-neutral-500 font-medium", children: "Feature" }),
              /* @__PURE__ */ e("th", { className: "p-4 text-neutral-900 font-bold bg-white border-x border-neutral-200", children: "Ceraphene" }),
              /* @__PURE__ */ e("th", { className: "p-4 text-neutral-500 font-medium", children: "Standard Ceramic" }),
              /* @__PURE__ */ e("th", { className: "p-4 text-neutral-500 font-medium", children: "Wax / Sealant" })
            ] }) }),
            /* @__PURE__ */ t("tbody", { className: "divide-y divide-neutral-100", children: [
              /* @__PURE__ */ t("tr", { children: [
                /* @__PURE__ */ e("td", { className: "p-4 text-neutral-600 font-medium", children: "Durability" }),
                /* @__PURE__ */ e("td", { className: "p-4 text-neutral-900 font-bold bg-neutral-50 border-x border-neutral-200", children: "4+ Years" }),
                /* @__PURE__ */ e("td", { className: "p-4 text-neutral-500", children: "2-3 Years" }),
                /* @__PURE__ */ e("td", { className: "p-4 text-neutral-500", children: "3-6 Months" })
              ] }),
              /* @__PURE__ */ t("tr", { children: [
                /* @__PURE__ */ e("td", { className: "p-4 text-neutral-600 font-medium", children: "Water Spotting" }),
                /* @__PURE__ */ e("td", { className: "p-4 text-neutral-900 font-bold bg-neutral-50 border-x border-neutral-200", children: "Resistant" }),
                /* @__PURE__ */ e("td", { className: "p-4 text-neutral-500", children: "Prone" }),
                /* @__PURE__ */ e("td", { className: "p-4 text-neutral-500", children: "Vulnerable" })
              ] }),
              /* @__PURE__ */ t("tr", { children: [
                /* @__PURE__ */ e("td", { className: "p-4 text-neutral-600 font-medium", children: "Heat Dissipation" }),
                /* @__PURE__ */ e("td", { className: "p-4 text-neutral-900 font-bold bg-neutral-50 border-x border-neutral-200", children: "High" }),
                /* @__PURE__ */ e("td", { className: "p-4 text-neutral-500", children: "Low" }),
                /* @__PURE__ */ e("td", { className: "p-4 text-neutral-500", children: "None" })
              ] })
            ] })
          ] }) })
        ] })
      ] })
    },
    {
      id: "benefits",
      label: "Benefits & ROI",
      content: /* @__PURE__ */ t("div", { className: "space-y-16 mt-12", children: [
        /* @__PURE__ */ t("section", { className: "rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 text-white p-8 md:p-12 overflow-hidden relative shadow-2xl border border-neutral-800", children: [
          /* @__PURE__ */ t("div", { className: "relative z-10 grid md:grid-cols-3 gap-8 md:divide-x md:divide-neutral-800", children: [
            /* @__PURE__ */ t("div", { className: "md:pr-8", children: [
              /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium mb-2", children: "Protection Economics" }),
              /* @__PURE__ */ e("p", { className: "text-neutral-400 text-sm leading-relaxed", children: "Ceraphene delivers laboratory-verified 9H+ hardness at a disruption-level price point, redefining the cost-benefit analysis of vehicle protection." })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex flex-col justify-center px-4", children: [
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-500 uppercase tracking-wider mb-1", children: "Coating Hardness" }),
              /* @__PURE__ */ e("div", { className: "text-4xl font-display font-medium text-blue-400", children: "9H+" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 mt-1", children: "SGS Certified Resistance" })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex flex-col justify-center pl-4", children: [
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-500 uppercase tracking-wider mb-1", children: "Cost Advantage" }),
              /* @__PURE__ */ e("div", { className: "text-4xl font-display font-medium text-white", children: "60%" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 mt-1", children: "Lower material cost vs competitors" })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" })
        ] }),
        /* @__PURE__ */ t("section", { className: "border border-neutral-200 rounded-2xl overflow-hidden shadow-sm bg-white", children: [
          /* @__PURE__ */ e("div", { className: "p-6 border-b border-neutral-200 flex justify-between items-center bg-neutral-50/50", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-white", children: /* @__PURE__ */ e(Ve, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("h4", { className: "font-medium text-neutral-900", children: "Value Calculator" }),
              /* @__PURE__ */ e("p", { className: "text-xs text-neutral-500", children: "Compare against standard market rates" })
            ] })
          ] }) }),
          /* @__PURE__ */ e("div", { className: "p-0", children: /* @__PURE__ */ e(
            ll,
            {
              defaultInputs: ha.defaultInputs,
              secondaryInputs: ha.secondaryInputs,
              calculations: ha.calculations,
              theme: "light"
            }
          ) })
        ] }),
        /* @__PURE__ */ t("section", { children: [
          /* @__PURE__ */ t("div", { className: "mb-6", children: [
            /* @__PURE__ */ e(k, { number: "02", title: "Competitor Cost Comparison", theme: "light" }),
            /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 mt-2", children: "Ceraphene delivers 9H+ hardness at 60-70% lower cost than premium competitors — model your fleet savings." })
          ] }),
          /* @__PURE__ */ e(pl, {})
        ] }),
        /* @__PURE__ */ t("section", { className: "space-y-8", children: [
          /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow", children: [
            /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(k, { number: "03", title: "Maintenance Savings", theme: "light" }) }),
            /* @__PURE__ */ e(
              Oa,
              {
                productName: Ue.productName,
                timeframe: Ue.timeframe,
                traditionalSolution: Ue.traditionalSolution,
                productSolution: Ue.productSolution,
                breakdown: Ue.breakdown,
                highlights: Ue.highlights,
                theme: "light"
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow", children: [
            /* @__PURE__ */ t("div", { className: "mb-6", children: [
              /* @__PURE__ */ e(k, { number: "04", title: "Resale Value", theme: "light" }),
              /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 mt-2", children: "Vehicles with documented permanent ceramic protection command higher resale prices due to pristine paint condition." })
            ] }),
            /* @__PURE__ */ e(
              Ya,
              {
                productName: ga.productName,
                savingsPerUnit: ga.savingsPerUnit,
                volumeOptions: ga.volumeOptions,
                theme: "light"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e("section", { className: "bg-neutral-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden", children: /* @__PURE__ */ t("div", { className: "relative z-10 grid md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e(k, { number: "05", title: "Eco-Friendly Detailing", theme: "dark", className: "mb-6" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-400 leading-relaxed mb-6", children: "Drastically reduce water usage and chemical runoff by eliminating the need for frequent washes and harsh degreasers." }),
            /* @__PURE__ */ e(K, { variant: "secondary", theme: "dark", className: "w-fit", children: "Start Your Journey" })
          ] }),
          /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
            Ja,
            {
              productName: ba.productName,
              impacts: ba.impacts,
              carbonCredits: ba.carbonCredits,
              theme: "dark"
            }
          ) })
        ] }) })
      ] })
    },
    {
      id: "howItWorks",
      label: "How It Works",
      content: /* @__PURE__ */ t("div", { className: "space-y-24 mt-12", children: [
        /* @__PURE__ */ t("section", { className: "max-w-3xl", children: [
          /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-medium text-neutral-900 mb-4", children: "Molecular Bonding" }),
          /* @__PURE__ */ e("p", { className: "text-lg text-neutral-600 leading-relaxed", children: "Ceraphene permeates the clear coat's microscopic pores, locking in a permanent graphene-ceramic structure that cannot be washed away." })
        ] }),
        /* @__PURE__ */ t("section", { children: [
          /* @__PURE__ */ e("div", { className: "mb-12", children: /* @__PURE__ */ e(k, { number: "01", title: "Installation Steps", theme: "light" }) }),
          /* @__PURE__ */ e(Wa, { steps: Cl, title: "Application Process", theme: "light" })
        ] }),
        /* @__PURE__ */ e("section", { className: "bg-neutral-50 rounded-2xl border border-neutral-200 p-8 md:p-12", children: /* @__PURE__ */ t("div", { className: "space-y-12", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e(k, { number: "02", title: "Detailer Trial", theme: "light", className: "mb-6" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-600 mb-6 max-w-3xl", children: "For professional shops: Verify the ease of application and gloss levels on a test panel or personal vehicle before switching your entire shop." }),
            /* @__PURE__ */ e(
              Ba,
              {
                productName: Pt.productName,
                pilotDetails: Pt.pilotDetails,
                benefits: Pt.benefits,
                pricing: Pt.pricing,
                theme: "light"
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "pt-8 border-t border-neutral-200", children: /* @__PURE__ */ e(
            Ua,
            {
              productName: Er.productName,
              stages: Er.stages,
              theme: "light"
            }
          ) })
        ] }) })
      ] })
    },
    {
      id: "technical",
      label: "Technical Specs",
      content: /* @__PURE__ */ t("div", { className: "space-y-24 mt-12", children: [
        /* @__PURE__ */ t("section", { className: "max-w-3xl", children: [
          /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-medium text-neutral-900 mb-4", children: "Lab Verified Performance" }),
          /* @__PURE__ */ e("p", { className: "text-lg text-neutral-600 leading-relaxed", children: "Tested internationally for hardness, alkali resistance, and hydrophobicity." })
        ] }),
        /* @__PURE__ */ t("section", { id: "specs", children: [
          /* @__PURE__ */ e(k, { number: "01", title: "Coating Properties", theme: "light", className: "mb-12" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4", children: [
            { label: "Pencil Hardness", value: "9H+", unit: "Cert." },
            { label: "Contact Angle", value: ">115", unit: "Deg" },
            { label: "Slide Angle", value: "<10", unit: "Deg" },
            { label: "Thickness", value: "3-4", unit: "µm" },
            { label: "Heat Resist", value: "700", unit: "°C" }
          ].map((n, o) => /* @__PURE__ */ t("div", { className: "p-6 bg-white border border-neutral-200 rounded-xl hover:border-neutral-400 transition-colors", children: [
            /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase font-semibold mb-2", children: n.label }),
            /* @__PURE__ */ t("div", { className: "text-3xl font-display font-medium text-neutral-900", children: [
              n.value,
              /* @__PURE__ */ e("span", { className: "text-sm text-neutral-400 ml-1", children: n.unit })
            ] })
          ] }, o)) })
        ] }),
        /* @__PURE__ */ t("section", { className: "space-y-24", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e(k, { number: "03", title: "Certifications", theme: "light", className: "mb-6" }),
            /* @__PURE__ */ e(
              Za,
              {
                productName: Mt.productName,
                certifications: Mt.certifications,
                testingStandards: Mt.testingStandards,
                qualityMetrics: Mt.qualityMetrics,
                theme: "light"
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e(k, { number: "04", title: "Downloads", theme: "light", className: "mb-6" }),
            /* @__PURE__ */ e(
              _a,
              {
                productName: xa.productName,
                specifications: xa.specifications,
                documents: xa.documents,
                theme: "light"
              }
            )
          ] })
        ] })
      ] })
    },
    {
      id: "deepDive",
      label: "Deep Dive",
      content: /* @__PURE__ */ t("div", { className: "space-y-24 mt-12", children: [
        /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e(
          Qa,
          {
            productName: St.productName,
            marketData: St.marketData,
            industries: St.industries,
            growthMetrics: St.growthMetrics,
            theme: "light"
          }
        ) }),
        /* @__PURE__ */ t("section", { className: "bg-neutral-50 p-8 md:p-12 rounded-2xl border border-neutral-200", children: [
          /* @__PURE__ */ e("div", { className: "mb-8", children: /* @__PURE__ */ e(k, { number: "02", title: "Industry Applications", theme: "light" }) }),
          /* @__PURE__ */ e(
            qa,
            {
              productName: jr.productName,
              industries: jr.industries,
              theme: "light"
            }
          )
        ] }),
        /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e(
          Ka,
          {
            productName: Fr.productName,
            sections: Fr.sections,
            theme: "light"
          }
        ) }),
        /* @__PURE__ */ t("section", { className: "bg-neutral-900 text-white p-8 md:p-12 rounded-2xl", children: [
          /* @__PURE__ */ e(k, { number: "04", title: "Global Impact", theme: "dark", className: "mb-8" }),
          /* @__PURE__ */ e(
            Va,
            {
              productName: $t.productName,
              nationalData: $t.nationalData,
              internationalData: $t.internationalData,
              stats: $t.stats,
              theme: "dark"
            }
          )
        ] })
      ] })
    }
  ];
  return /* @__PURE__ */ t("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ e(
      fe,
      {
        category: "Automotive",
        title: r.pageHeader.title,
        subtitle: r.pageHeader.subtitle
      }
    ),
    /* @__PURE__ */ e(ea, { tabs: i, defaultTab: 0 })
  ] });
}, Pl = {
  hero: {
    title: "Unlock higher solar output with graphene.",
    subtitle: "Graffisol is a next-generation solar panel coating that increases energy output and reduces thermal load with durable hydrophobic protection.",
    primaryButtonText: "Request Technical Data",
    secondaryButtonText: "View Performance Data"
  },
  pageHeader: {
    title: "Graffisol",
    subtitle: "A graphene-enabled solar coating engineered to improve light harvesting, thermal dissipation, and long-term panel performance."
  }
}, fa = {
  // Primary inputs — always visible
  defaultInputs: Ee({
    systemSize: {
      label: "System Size",
      type: "logslider",
      // logarithmic 1–10,000 kW
      min: 1,
      max: 1e4,
      unit: "kW",
      default: 100
    },
    electricityRate: {
      label: "Electricity Rate",
      type: "slider",
      min: 4,
      max: 12,
      step: 0.5,
      unit: "₹/kWh",
      default: 7,
      note: "Commercial/industrial rate ₹7/kWh. Adjust for your tariff."
    },
    applicationCostPerKw: {
      label: "Application Cost",
      type: "slider",
      min: 1e3,
      max: 3e3,
      step: 100,
      unit: "₹/kW",
      default: 1800,
      note: "Installed cost per kW of panel capacity coated."
    },
    outputGainPct: {
      label: "Output Gain",
      type: "slider",
      min: 7,
      max: 12,
      step: 1,
      unit: "%",
      default: 10,
      note: "Field-validated range: 7–12%. Conservative default = 10%."
    }
  }, me("Graffisol")?.defaultInputs),
  // Secondary inputs — lifecycle accordion
  secondaryInputs: Ee({
    analysisPeriod: {
      label: "Analysis Period",
      type: "buttongroup",
      default: 20,
      options: [
        { value: 10, label: "10 yr" },
        { value: 20, label: "20 yr" },
        { value: 25, label: "25 yr" }
      ]
    },
    soilingProfile: {
      label: "Soiling Environment",
      type: "buttongroup",
      default: "moderate",
      options: [
        { value: "low", label: "Low" },
        { value: "moderate", label: "Moderate" },
        { value: "high", label: "High" }
      ]
    }
  }, me("Graffisol")?.secondaryInputs),
  calculations: (r) => {
    const i = me("Graffisol")?.constants || {}, {
      systemSize: n = 100,
      electricityRate: o = 7,
      applicationCostPerKw: a = 1800,
      outputGainPct: s = 10,
      // 7–12%; 10% = conservative field-validated default
      soilingProfile: d = "moderate",
      analysisPeriod: m = 20
    } = r, p = i.baselineGenPerKw ?? 1500, g = (i.soilingLossMap ?? { low: 0.08, moderate: 0.15, high: 0.25 })[d] || 0.15, b = i.soilingRecovery ?? 0.35, x = i.maintenancePerKw ?? 200, w = i.co2Factor ?? 0.82, N = i.panelAreaM2PerKw ?? 5.3, h = i.applicationRateMlM2 ?? 65, l = i.graffisolProductPricePerLitre ?? 2500, S = n * p, T = S * (s / 100), R = S * g * b, P = Math.round(T + R), M = Math.round(p * o), f = Math.round(p * (s / 100) * o), E = Math.round(p * g * b * o), j = f + E + x, W = f, O = Math.round(W * n), F = Math.round(j * n), G = Math.round(a * n), B = F > 0 && G > 0 ? Math.round(F / G * 100) : null, re = F > 0 ? Math.round(G / F * 12) : null, V = re ? `${re} months` : "—", C = "Power Boost", v = "Full Annual Return", u = Math.round(P * w), y = a * 4, $ = Math.round(n * y * 0.02), Z = $, pe = Math.round(F * m - G);
    return {
      // ── Core ─────────────────────────────────────────────────────────────
      systemSize: n,
      analysisPeriod: m,
      baselineAnnualKwh: Math.round(S),
      baselineRevenuePerKw: M,
      totalAdditionalKwh: P,
      // ── Per-kW breakdown ─────────────────────────────────────────────────
      applicationCostPerKw: a,
      powerBoostRevenuePerKw: f,
      soilingRevenuePerKw: E,
      maintenancePerKw: x,
      fullReturnPerKw: j,
      // ── Savings — BOTH methods always returned, always shown ──────────────
      powerOnlySavingsPerKw: W,
      // ₹/kW/yr power-only (conservative)
      powerOnlySavingsTotal: O,
      // ₹ project annual
      powerOnlyLabel: C,
      // 'Power Boost'
      fullReturnPerKw: j,
      // ₹/kW/yr all-in (was fullReturnPerKw)
      fullReturnTotal: F,
      // ₹ project annual
      fullReturnLabel: v,
      // 'Full Annual Return'
      // ── Investment & ROI ──────────────────────────────────────────────────
      applicationCostTotal: G,
      roiPercentage: B,
      // % annual ROI (null if not calculable)
      paybackLabel: V,
      // 'X months'
      paybackMonths: re,
      // number | null
      // ── CO₂ ──────────────────────────────────────────────────────────────
      co2AvoidedKgPerYear: u,
      co2AvoidedTPerYear: parseFloat((u / 1e3).toFixed(2)),
      // ── Lifecycle (estimates) ─────────────────────────────────────────────
      lifecycle: {
        lifeExtension: $,
        total: Z
      },
      netProfitProjected: pe,
      roiMultiple: pe > 0 && G > 0 ? parseFloat((pe / G).toFixed(1)) : null,
      // ── Exposed assumptions (for UI display) ─────────────────────────────
      baselineGenPerKw: p,
      // 1,500 kWh/kW/yr
      soilingRecoveryPct: Math.round(b * 100),
      // 35
      temperatureReductionC: "5-6",
      // °C reduction claim
      // ── Product volume requirement ────────────────────────────────────────
      // 1 kW ≈ 3.3 panels × 1.6 m²/panel ≈ 5.3 m² of panel area
      // Application rate: 50–80 ml/m² (TDS mid-point = 65 ml/m²)
      panelAreaM2PerKw: N,
      applicationRateMlM2: h,
      productLitresTotal: parseFloat(
        (N * n * h / 1e3).toFixed(1)
      ),
      // ── Product cost split: additive (product-only) vs. installation service ─
      // graffisolProductPricePerLitre: estimated product-only price (₹/L)
      // 0.3445 L/kW = 5.3 m²/kW × 65 ml/m² / 1000
      graffisolProductPricePerLitre: l,
      additiveCostPerKw: Math.round(N * h / 1e3 * l),
      additiveCostTotal: Math.round(N * n * h / 1e3 * l),
      serviceCostPerKw: Math.max(0, a - Math.round(N * h / 1e3 * l)),
      serviceCostTotal: Math.max(0, G - Math.round(N * n * h / 1e3 * l)),
      // ── Legacy aliases (other page components) ────────────────────────────
      additionalEnergy: P,
      temperatureReduction: "5-6°C",
      maintenanceSavings: Math.round(n * x),
      savingsPerUnit: {
        label: "Full Annual Return",
        value: F,
        description: `₹${j.toLocaleString("en-IN")}/kW annually`
      },
      summary: [
        { label: "Extra Energy", value: `${P.toLocaleString()} kWh/yr` },
        { label: "Temp Reduction", value: "5-6°C" },
        { label: "Annual ROI", value: B ? `${B}%` : "—" }
      ]
    };
  }
}, Sl = [
  {
    title: "Surface Preparation",
    description: "Clean solar panels thoroughly to remove dirt, dust, and residues. Ensure surface is dry and ready for application.",
    duration: "1-2 hours",
    icon: dt
  },
  {
    title: "Coating Application",
    description: "Apply Graffisol coating uniformly using spray or roller method. Thin, even layer ensures optimal performance.",
    duration: "2-3 hours",
    icon: Be
  },
  {
    title: "Curing & Bonding",
    description: "Graphene molecules bond to panel surface, creating ultra-thin protective layer with hydrophobic and anti-soiling properties.",
    duration: "4-6 hours",
    icon: q
  },
  {
    title: "Enhanced Performance",
    description: "Enjoy 10-12% power output increase, 5-6°C temperature reduction, and 30-40% less soiling loss for years.",
    duration: "3-5 years",
    icon: z
  }
], Tt = {
  productName: "Graffisol",
  pilotDetails: [
    {
      title: "Pilot Array Selection",
      description: "Select representative panels for coating (minimum 10kW)"
    },
    {
      title: "Pre-Application Baseline",
      description: "7 days monitoring to establish performance baseline"
    },
    {
      title: "Professional Application",
      description: "Our team applies Graffisol coating on-site"
    },
    {
      title: "Performance Monitoring",
      description: "Daily power output tracking vs. control panels"
    },
    {
      title: "Comprehensive Report",
      description: "Detailed analysis with ROI projections and recommendations"
    }
  ],
  benefits: [
    {
      title: "Real-World Validation",
      description: "Test in your actual operating conditions",
      icon: q
    },
    {
      title: "Compare Live Data",
      description: "Coated vs. uncoated panel comparison",
      icon: z
    },
    {
      title: "Verify ROI",
      description: "Confirm energy gains and payback period",
      icon: I
    }
  ],
  pricing: {
    cost: "From ₹18,000",
    description: "Pilot for 10kW system including application",
    note: "* Scalable pricing for larger pilot systems"
  }
}, Dt = {
  productName: "Graffisol",
  marketData: {
    tamSize: "₹35,000 Cr",
    cagr: "20% CAGR",
    targetCustomers: "5,000+",
    marketShare: "1-3%"
  },
  industries: [
    {
      id: "utility-scale",
      name: "Utility-Scale Solar",
      description: "Large solar farms (10MW+) where even small efficiency gains translate to massive revenue increases.",
      keyPoints: [
        "India adding 15-20 GW solar capacity annually",
        "Major focus on maximizing generation",
        "Performance optimization critical for PPAs"
      ],
      marketSize: "₹20,000 Cr",
      revenuePotential: "₹400-800 Cr",
      growthRate: "25% CAGR"
    },
    {
      id: "commercial-rooftop",
      name: "Commercial Rooftop",
      description: "Industrial and commercial rooftop installations seeking maximum return on solar investment.",
      keyPoints: [
        "Growing C&I solar adoption",
        "High electricity costs justify premium solutions",
        "Limited space requires performance optimization"
      ],
      marketSize: "₹10,000 Cr",
      revenuePotential: "₹200-400 Cr",
      growthRate: "18% CAGR"
    },
    {
      id: "floating-solar",
      name: "Floating Solar",
      description: "Emerging floating solar installations with unique soiling and cooling challenges.",
      keyPoints: [
        "Fast-growing segment in India",
        "Water vapor and soiling issues",
        "Cooling and anti-soiling benefits critical"
      ],
      marketSize: "₹3,000 Cr",
      revenuePotential: "₹60-120 Cr",
      growthRate: "30% CAGR"
    }
  ],
  growthMetrics: [
    {
      title: "Solar Capacity Target",
      description: "India solar capacity goal",
      value: "500 GW by 2030"
    },
    {
      title: "Soiling Losses",
      description: "Energy lost to dust and soiling",
      value: "15-25% annually"
    },
    {
      title: "Temperature Impact",
      description: "Efficiency loss from heat",
      value: "0.5%/°C above 25°C"
    }
  ]
}, Qe = {
  productName: "Graffisol",
  timeframe: "5 years",
  traditionalSolution: {
    breakdown: {
      "Regular Cleaning": 2e5,
      "Soiling Losses": 45e4,
      "Temperature Losses": 18e4,
      "Panel Degradation": 12e4
    },
    total: 95e4
  },
  productSolution: {
    breakdown: {
      "Graffisol Application": 18e4,
      "Reduced Cleaning": 8e4,
      "Soiling Losses": 27e4,
      "Temperature Losses": 9e4
    },
    total: 62e4,
    paybackPeriod: "18 months"
  },
  breakdown: [
    {
      category: "Cleaning & Maintenance",
      description: "Reduced cleaning frequency",
      traditional: 2e5,
      withProduct: 8e4
    },
    {
      category: "Soiling Energy Loss",
      description: "30-40% soiling reduction",
      traditional: 45e4,
      withProduct: 27e4
    },
    {
      category: "Temperature Derating",
      description: "5-6°C operating temp reduction",
      traditional: 18e4,
      withProduct: 9e4
    },
    {
      category: "Graffisol Coating",
      description: "One-time application cost",
      traditional: 0,
      withProduct: 18e4
    }
  ],
  highlights: [
    { label: "Cleaning Cost Reduction", value: "-60%", color: "green" },
    { label: "Energy Recovery", value: "+7.5%", color: "blue" }
  ]
}, va = {
  productName: "Graffisol",
  savingsPerUnit: {
    calculation: (r) => Math.round(1250)
  },
  volumeOptions: {
    label: "Solar System Capacity",
    min: 10,
    max: 5e3,
    step: 10,
    unit: "kW",
    default: 100
  }
}, ya = {
  productName: "Graffisol",
  impacts: [
    { type: "carbon", value: "10-12%", label: "More Clean Energy" },
    { type: "water", value: "60%", label: "Water Saved" },
    { type: "energy", value: "5-6°C", label: "Cooler Panels" },
    { type: "waste", value: "40%", label: "Less Cleaning" }
  ],
  carbonCredits: {
    value: "Eligible",
    description: "Increased renewable energy generation qualifies for carbon credits"
  }
}, At = {
  productName: "Graffisol",
  certifications: [
    {
      name: "Field Validated",
      description: "Performance validated in utility-scale installations",
      certNumber: "FV-2024"
    },
    {
      name: "Lab Tested",
      description: "IEC 61215 compliant testing for solar applications",
      certNumber: "IEC-61215"
    },
    {
      name: "ISO 9001:2015",
      description: "Quality management system certified",
      certNumber: "ISO-9001"
    }
  ],
  testingStandards: [
    {
      name: "Power Output Testing",
      description: "Field testing vs. control panels under identical conditions",
      code: "IEC 61724"
    },
    {
      name: "Transmission Testing",
      description: "Light transmission >98% verified",
      code: "ASTM E903"
    },
    {
      name: "Durability Testing",
      description: "UV resistance and weathering tests",
      code: "IEC 61215"
    },
    {
      name: "Hydrophobicity Testing",
      description: "Contact angle and self-cleaning properties",
      code: "ASTM D7334"
    }
  ],
  qualityMetrics: [
    { value: ">98%", label: "Light Transmission" },
    { value: "3-5 years", label: "Durability" },
    { value: "10-12%", label: "Output Gain" },
    { value: "Field Proven", label: "Validation" }
  ]
}, Hr = {
  productName: "Graffisol",
  stages: [
    {
      type: "trial",
      title: "Small Array Trial",
      description: "Test on 10-50kW section with performance monitoring",
      duration: "30 days",
      investment: "₹18,000-90,000",
      details: [
        "Baseline data collection",
        "Professional application",
        "Daily performance tracking"
      ]
    },
    {
      type: "validation",
      title: "Pilot Block",
      description: "Scale to 100-500kW block for comprehensive validation",
      duration: "3 months",
      investment: "₹1.8-9 lakhs",
      details: [
        "Multiple string monitoring",
        "Seasonal performance data",
        "ROI validation"
      ]
    },
    {
      type: "scale",
      title: "Phased Rollout",
      description: "Deploy across MW-scale sections",
      duration: "6-12 months",
      investment: "Negotiated",
      details: [
        "Multi-MW deployment",
        "Optimized application process",
        "Performance guarantees"
      ]
    },
    {
      type: "deployment",
      title: "Full Plant",
      description: "Complete solar plant coating with maintenance plan",
      duration: "Ongoing",
      investment: "Volume pricing",
      details: [
        "Entire plant coverage",
        "Re-application schedule",
        "Long-term monitoring"
      ]
    }
  ]
}, Lt = {
  productName: "Graffisol",
  nationalData: {
    locations: [
      { city: "Jodhpur", state: "Rajasthan", projects: 8 },
      { city: "Anantapur", state: "Andhra Pradesh", projects: 5 },
      { city: "Bangalore", state: "Karnataka", projects: 4 },
      { city: "Kutch", state: "Gujarat", projects: 6 },
      { city: "Pavagada", state: "Karnataka", projects: 3 }
    ],
    marketPenetration: "0.3%",
    penetrationDescription: "Early adoption in solar-rich regions",
    partnerships: "15+",
    partnershipDescription: "Solar plant operators and EPCs",
    reach: "5 states",
    reachDescription: "Focused on high-irradiation zones"
  },
  internationalData: {
    locations: [
      { city: "Dubai", state: "UAE", projects: 2 }
    ],
    marketPenetration: "0.05%",
    penetrationDescription: "Initial international trials",
    partnerships: "3+",
    partnershipDescription: "International solar operators",
    reach: "1 country",
    reachDescription: "Middle East pilot projects"
  },
  stats: [
    { value: "26+", label: "Active Projects" },
    { value: "150+ MW", label: "Coated Capacity" },
    { value: "6", label: "States & Countries" },
    { value: "18+", label: "Partner Companies" }
  ]
}, Na = {
  productName: "Graffisol",
  specifications: [
    { parameter: "Active Ingredient", value: "Graphene nano-platelets", testMethod: "Material analysis" },
    { parameter: "Light Transmission", value: ">98%", testMethod: "ASTM E903" },
    { parameter: "Power Output Gain", value: "10-12%", testMethod: "Field validation" },
    { parameter: "Temperature Reduction", value: "5-6°C", testMethod: "Thermal imaging" },
    { parameter: "Soiling Reduction", value: "30-40%", testMethod: "Comparative testing" },
    { parameter: "Durability", value: "3-5 years", testMethod: "Weathering tests" },
    { parameter: "Application Rate", value: "50-80 ml/m²", testMethod: "Coverage test" },
    { parameter: "Curing Time", value: "4-6 hours", testMethod: "Lab protocol" }
  ],
  documents: [
    {
      title: "Technical Data Sheet",
      description: "Complete specifications and application guidelines",
      fileSize: "2.1 MB",
      format: "PDF",
      filename: "Graffisol-TDS.pdf",
      url: "#"
    },
    {
      title: "Field Test Report",
      description: "Real-world performance data from solar installations",
      fileSize: "4.3 MB",
      format: "PDF",
      filename: "Graffisol-Field-Report.pdf",
      url: "#"
    },
    {
      title: "Application Guide",
      description: "Step-by-step coating application procedures",
      fileSize: "2.7 MB",
      format: "PDF",
      filename: "Graffisol-Application-Guide.pdf",
      url: "#"
    },
    {
      title: "Safety Data Sheet",
      description: "Material safety and handling information",
      fileSize: "1.1 MB",
      format: "PDF",
      filename: "Graffisol-SDS.pdf",
      url: "#"
    }
  ]
}, zr = {
  productName: "Graffisol",
  industries: [
    {
      name: "Utility-Scale Solar Parks",
      icon: "energy",
      description: "Large solar farms where marginal efficiency gains translate to significant revenue increases.",
      useCases: [
        { title: "Ground-Mounted Arrays", description: "Soiling reduction in dusty environments" },
        { title: "Tracker Systems", description: "Reduced cleaning on moving panels" },
        { title: "Desert Installations", description: "Combat extreme dust and temperature" }
      ],
      benefits: [
        { title: "10-12% Output Gain", description: "Directly increases revenue" },
        { title: "Reduced O&M", description: "Lower cleaning costs" },
        { title: "Extended Life", description: "Panel protection from elements" }
      ],
      metrics: [
        { value: "+11%", label: "Avg Output" },
        { value: "₹1,200/kW", label: "Annual Gain" },
        { value: "18 months", label: "Payback" },
        { value: "-40%", label: "Cleaning" }
      ],
      caseStudy: {
        preview: "50 MW solar park achieved 11.2% output gain, ROI in 17 months"
      }
    },
    {
      name: "Commercial Rooftop",
      icon: "construction",
      description: "C&I rooftop solar systems maximizing limited space and high electricity costs.",
      useCases: [
        { title: "Factory Roofs", description: "Maximize energy from constrained space" },
        { title: "Office Buildings", description: "Premium performance for corporate sustainability" },
        { title: "Warehouses", description: "Large roofs with dust accumulation" }
      ],
      benefits: [
        { title: "Space Optimization", description: "More energy from same area" },
        { title: "Fast Payback", description: "High tariff rates boost ROI" },
        { title: "Low Maintenance", description: "Reduce manual cleaning needs" }
      ],
      metrics: [
        { value: "+10%", label: "Energy" },
        { value: "₹1,500/kW", label: "Annual Savings" },
        { value: "15 months", label: "Payback" },
        { value: "70%", label: "Less Cleaning" }
      ]
    },
    {
      name: "Floating Solar",
      icon: "energy",
      description: "Water-based solar installations with unique soiling and environmental challenges.",
      useCases: [
        { title: "Reservoir Floating", description: "Water vapor and algae resistance" },
        { title: "Lake Installations", description: "Moisture management" },
        { title: "Coastal Floating", description: "Saltwater protection" }
      ],
      benefits: [
        { title: "Moisture Resistance", description: "Hydrophobic protection" },
        { title: "Cooling Enhancement", description: "Better heat dissipation" },
        { title: "Algae Prevention", description: "Anti-soiling properties" }
      ],
      metrics: [
        { value: "+12%", label: "Output" },
        { value: "-6°C", label: "Cooling" },
        { value: "90%", label: "Water Beading" },
        { value: "4 years", label: "Durability" }
      ]
    },
    {
      name: "Agricultural Solar",
      icon: "energy",
      description: "Agri-PV and farm-based solar with high dust and debris exposure.",
      useCases: [
        { title: "Farm Solar Pumps", description: "Reliable power for irrigation" },
        { title: "Agri-PV Systems", description: "Dual land use optimization" },
        { title: "Remote Installations", description: "Low-maintenance solutions" }
      ],
      benefits: [
        { title: "Dust Resistance", description: "Critical for farm environments" },
        { title: "Self-Cleaning", description: "Natural rain cleaning" },
        { title: "Reliable Output", description: "Consistent power delivery" }
      ],
      metrics: [
        { value: "+10%", label: "Generation" },
        { value: "-50%", label: "Soiling Loss" },
        { value: "80%", label: "Less Manual Cleaning" },
        { value: "₹800/kW", label: "Annual Savings" }
      ]
    },
    {
      name: "Residential Solar",
      icon: "construction",
      description: "Home solar systems seeking maximum performance and minimal maintenance.",
      useCases: [
        { title: "Rooftop Systems", description: "Premium home installations" },
        { title: "Off-Grid Homes", description: "Maximize limited capacity" },
        { title: "Net-Metering", description: "Optimize grid export" }
      ],
      benefits: [
        { title: "Set and Forget", description: "Minimal maintenance required" },
        { title: "Better ROI", description: "Faster payback period" },
        { title: "Aesthetic", description: "Cleaner panel appearance" }
      ],
      metrics: [
        { value: "+8%", label: "Output" },
        { value: "2 years", label: "Payback" },
        { value: "90%", label: "Satisfaction" },
        { value: "₹6,000", label: "Annual Gain" }
      ]
    },
    {
      name: "EPC Contractors",
      icon: "manufacturing",
      description: "Solar EPCs offering value-added services and performance enhancement.",
      useCases: [
        { title: "New Installations", description: "Include Graffisol in project scope" },
        { title: "O&M Services", description: "Add coating to maintenance packages" },
        { title: "Retrofit Projects", description: "Upgrade existing plants" }
      ],
      benefits: [
        { title: "Differentiation", description: "Premium service offering" },
        { title: "Customer Retention", description: "Ongoing O&M contracts" },
        { title: "Higher Margins", description: "Value-added service pricing" }
      ],
      metrics: [
        { value: "25%", label: "Premium" },
        { value: "35+", label: "Partner EPCs" },
        { value: "92%", label: "Retention" },
        { value: "₹500/kW", label: "Margin Gain" }
      ]
    }
  ]
}, Wr = {
  productName: "Graffisol",
  sections: [
    {
      icon: "mechanism",
      title: "Graphene Enhancement Mechanism",
      summary: "How graphene nano-platelets boost solar panel performance",
      content: [
        "Graffisol incorporates graphene nano-platelets (GNPs) into a transparent coating matrix. These atomically thin carbon structures possess exceptional thermal conductivity (5000 W/mK) and optical transparency while being chemically inert.",
        "When applied to solar panel glass, GNPs create a nano-textured surface that enhances light transmission, promotes rapid heat dissipation, and creates super-hydrophobic properties that prevent dust and water adhesion.",
        "The result is a coating that increases power output through multiple mechanisms: better light coupling, lower operating temperature, and dramatically reduced soiling losses."
      ],
      keyPoints: [
        {
          title: "Light Management",
          description: "Anti-reflective properties increase photon capture"
        },
        {
          title: "Thermal Conductivity",
          description: "Rapid heat dissipation lowers panel temperature"
        },
        {
          title: "Hydrophobic Surface",
          description: "Water and dust roll off, maintaining cleanliness"
        }
      ],
      technicalData: {
        "Light Transmission": ">98%",
        "Thermal Conductivity": "500× vs untreated",
        "Contact Angle": ">110° (superhydrophobic)"
      }
    },
    {
      icon: "properties",
      title: "Performance Enhancement",
      summary: "Measurable improvements in solar panel energy generation",
      content: [
        "Field testing across 25+ installations shows consistent 10-12% power output gains. This comes from three primary mechanisms: reduced reflection losses (+2-3%), lower operating temperature (+3-4%), and reduced soiling losses (+5-6%).",
        "Temperature reduction of 5-6°C is particularly valuable. Silicon solar cells lose ~0.5% efficiency per degree above 25°C. In hot climates, panels can reach 65-70°C, losing 20-22% of their rated capacity. Graffisol reduces this to 60-64°C, recovering significant power.",
        "Soiling is the #1 cause of solar underperformance in India, with losses ranging from 15-25% annually. Graffisol's hydrophobic surface causes dust to bead up and wash away with morning dew or light rain, reducing soiling losses by 30-40%."
      ],
      keyPoints: [
        {
          title: "Power Output",
          description: "10-12% generation increase verified in field"
        },
        {
          title: "Temperature Control",
          description: "5-6°C operating temperature reduction"
        },
        {
          title: "Soiling Mitigation",
          description: "30-40% reduction in dust-related losses"
        },
        {
          title: "Self-Cleaning",
          description: "Hydrophobic surface enables natural cleaning"
        }
      ],
      technicalData: {
        "Power Gain": "10-12% validated",
        "Temp Reduction": "5-6°C avg",
        "Soiling Reduction": "35% avg",
        Durability: "3-5 years"
      }
    },
    {
      icon: "structure",
      title: "Coating Technology",
      summary: "Advanced nano-coating formulation and application",
      content: [
        "Graffisol uses a proprietary water-based dispersion system that maintains graphene in a stable, uniform suspension. This is critical - aggregated graphene loses its optical and thermal properties.",
        "The coating self-assembles into a 50-100nm thick layer during curing. This is thin enough to be optically transparent (>98% transmission) while providing durable protection and performance enhancement.",
        "Durability testing shows 3-5 year lifespan under harsh UV exposure, temperature cycling, and environmental stress. Re-application is simple and cost-effective, making it suitable for long-term O&M programs."
      ],
      keyPoints: [
        {
          title: "Nano-Scale Coating",
          description: "Ultra-thin layer maintains transparency"
        },
        {
          title: "Uniform Dispersion",
          description: "Proprietary formulation prevents aggregation"
        },
        {
          title: "Easy Application",
          description: "Spray or roller application, no special equipment"
        },
        {
          title: "Weather Resistant",
          description: "UV, heat, and moisture stable"
        }
      ],
      technicalData: {
        "Coating Thickness": "50-100 nm",
        "Application Rate": "50-80 ml/m²",
        "Curing Time": "4-6 hours",
        Lifespan: "3-5 years"
      }
    },
    {
      icon: "science",
      title: "Field Validation",
      summary: "Real-world testing and performance verification",
      content: [
        "Graffisol has been tested across 25+ solar installations totaling 150+ MW capacity, from utility-scale plants in Rajasthan to commercial rooftops in Bangalore.",
        "Testing protocol involves coating half of an array while leaving the other half as control. Both sections are monitored using identical inverter/monitoring systems. Data is collected at 5-minute intervals over 30-90 days.",
        "Results are remarkably consistent: 10-12% average power gain, 5-6°C temperature reduction, and dramatic improvement in soiling resistance. Performance holds across different panel types, orientations, and environmental conditions."
      ],
      keyPoints: [
        {
          title: "Field Proven",
          description: "25+ installations, 150+ MW tested"
        },
        {
          title: "Controlled Testing",
          description: "Side-by-side comparison methodology"
        },
        {
          title: "Consistent Results",
          description: "Performance validated across diverse sites"
        },
        {
          title: "Long-Term Data",
          description: "Multi-year performance tracking"
        }
      ],
      technicalData: {
        "Test Sites": "25+ installations",
        "Coated Capacity": "150+ MW",
        "Success Rate": "96% meet targets",
        "Data Points": "10M+ collected"
      }
    }
  ]
}, Ts = () => {
  const r = Pl, i = [
    {
      id: "overview",
      label: "Overview",
      content: /* @__PURE__ */ t("div", { className: "space-y-24 mt-24", children: [
        /* @__PURE__ */ e(
          ht,
          {
            title: r.hero.title,
            subtitle: r.hero.subtitle,
            category: "Solar Optimization",
            categoryColor: "bg-yellow-400 animate-pulse",
            images: [
              "/images/graffisol_lifecycle_lab_making.png",
              "/images/graffisol_lifecycle_lab_testing.png",
              "/images/graffisol_lifecycle_factory_coating.png",
              "/images/graffisol_lifecycle_site_cleaning.png",
              "/images/graffisol_lifecycle_site_result.png"
            ],
            buttons: [
              { text: r.hero.primaryButtonText, link: "/contact", variant: "primary" },
              { text: r.hero.secondaryButtonText, link: "#impact", variant: "secondary" }
            ]
          }
        ),
        /* @__PURE__ */ t("section", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ e("div", { className: "lg:col-span-1 h-full min-h-[300px]", children: /* @__PURE__ */ e(
            ta,
            {
              src: "/images/graffisol-02.png",
              alt: "Graffisol Studio View",
              className: "h-full"
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "lg:col-span-2 grid grid-cols-2 gap-4", children: [
            { label: "Energy Boost", value: "+12%", desc: "Annual Yield Increase" },
            { label: "Temp Reduction", value: "-6°C", desc: "Panel Cooling Effect" },
            { label: "Transmission", value: "99.9%", desc: "Optical Clarity" },
            { label: "Payback", value: "18mo", desc: "Typical ROI Period" }
          ].map((n, o) => /* @__PURE__ */ t("div", { className: "p-8 bg-neutral-50 border border-neutral-200 rounded-xl hover:shadow-md transition-shadow flex flex-col justify-center", children: [
            /* @__PURE__ */ e("div", { className: "text-4xl font-display font-medium text-neutral-900 mb-2", children: n.value }),
            /* @__PURE__ */ e("div", { className: "text-sm font-bold text-neutral-900 uppercase tracking-wide mb-1", children: n.label }),
            /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500", children: n.desc })
          ] }, o)) })
        ] }),
        /* @__PURE__ */ t("section", { className: "py-8", children: [
          /* @__PURE__ */ e(k, { number: "01", title: "Triple-Action Performance", theme: "light", subtitle: "Targeting the three main causes of solar efficiency loss." }),
          /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-12", children: [
            /* @__PURE__ */ t("div", { className: "md:col-span-2 p-8 bg-neutral-900 text-white rounded-2xl relative overflow-hidden group", children: [
              /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity", children: /* @__PURE__ */ e(ja, { size: 120, strokeWidth: 1 }) }),
              /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium mb-4 relative z-10", children: "Photon Management" }),
              /* @__PURE__ */ e("p", { className: "text-neutral-400 leading-relaxed max-w-md relative z-10", children: "Our coating modifies the refractive index of the glass surface, capturing off-angle light during morning and evening hours that would otherwise be reflected away." }),
              /* @__PURE__ */ t("div", { className: "mt-8 flex gap-2", children: [
                /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-white/10 rounded text-xs", children: "Anti-Reflective" }),
                /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-white/10 rounded text-xs", children: "Low Angle Capture" })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "md:row-span-2 p-8 bg-neutral-50 border border-neutral-200 rounded-2xl flex flex-col justify-center", children: [
              /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 mb-6", children: /* @__PURE__ */ e(Yt, { className: "w-6 h-6" }) }),
              /* @__PURE__ */ e("h3", { className: "text-xl font-display font-medium mb-3 text-neutral-900", children: "Thermal Regulation" }),
              /* @__PURE__ */ e("p", { className: "text-neutral-600 text-sm leading-relaxed mb-6", children: "Solar panels lose efficiency as they heat up (-0.4% per °C). Graffisol's high thermal conductivity dissipates surface heat, keeping panels cooler and more efficient." }),
              /* @__PURE__ */ t("ul", { className: "space-y-3", children: [
                /* @__PURE__ */ t("li", { className: "flex items-center text-sm text-neutral-700", children: [
                  /* @__PURE__ */ e("div", { className: "w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3" }),
                  "2-5% Efficiency Recovery"
                ] }),
                /* @__PURE__ */ t("li", { className: "flex items-center text-sm text-neutral-700", children: [
                  /* @__PURE__ */ e("div", { className: "w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3" }),
                  "Extended Panel Life"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "p-8 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-400 transition-colors", children: [
              /* @__PURE__ */ e("h3", { className: "text-lg font-bold text-neutral-900 mb-2", children: "Self-Cleaning" }),
              /* @__PURE__ */ e("p", { className: "text-neutral-600 text-sm", children: "Superhydrophobic surface (160° contact angle) means rain washes away dust and bird droppings." })
            ] }),
            /* @__PURE__ */ t("div", { className: "p-8 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-400 transition-colors", children: [
              /* @__PURE__ */ e("h3", { className: "text-lg font-bold text-neutral-900 mb-2", children: "Durability" }),
              /* @__PURE__ */ e("p", { className: "text-neutral-600 text-sm", children: "10H hardness protects against sand abrasion, crucial for desert installations." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e("section", { id: "impact", className: "py-8", children: /* @__PURE__ */ t("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-3xl bg-neutral-50 border border-neutral-200 p-8 md:p-12", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e(k, { number: "02", title: "Financial Impact", theme: "light", className: "mb-6" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-600 leading-relaxed mb-8", children: "For utility-scale projects, even a 1% gain is significant. Graffisol consistently delivers double-digit improvements, slashing the Levelized Cost of Energy (LCOE)." }),
            /* @__PURE__ */ t("div", { className: "space-y-4", children: [
              /* @__PURE__ */ t("div", { className: "flex justify-between items-center p-4 bg-white rounded-lg border border-neutral-100", children: [
                /* @__PURE__ */ e("span", { className: "text-neutral-500 font-medium", children: "Standard 100MW Plant Revenue" }),
                /* @__PURE__ */ e("span", { className: "text-neutral-900 font-bold", children: "$5.2M / yr" })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-100 relative overflow-hidden", children: [
                /* @__PURE__ */ e("div", { className: "absolute left-0 top-0 bottom-0 w-1 bg-green-500" }),
                /* @__PURE__ */ e("span", { className: "text-neutral-700 font-medium", children: "With Graffisol (+10% Yield)" }),
                /* @__PURE__ */ e("span", { className: "text-green-700 font-bold", children: "$5.72M / yr" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm text-center", children: [
            /* @__PURE__ */ e("div", { className: "inline-block p-3 rounded-full bg-neutral-100 mb-4", children: /* @__PURE__ */ e(Ve, { className: "w-6 h-6 text-neutral-600" }) }),
            /* @__PURE__ */ e("h3", { className: "text-lg text-neutral-500 font-medium uppercase tracking-wide mb-2", children: "ROI Timeline" }),
            /* @__PURE__ */ t("div", { className: "text-5xl font-display font-medium text-neutral-900 mb-4", children: [
              "< 18",
              /* @__PURE__ */ e("span", { className: "text-xl text-neutral-400", children: " months" })
            ] }),
            /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 max-w-xs mx-auto", children: "Full payback achieved in under 2 years, with 20+ years of pure profit generation thereafter." }),
            /* @__PURE__ */ e("div", { className: "mt-8 pt-6 border-t border-neutral-100", children: /* @__PURE__ */ e(L, { to: "/contact", children: /* @__PURE__ */ e(K, { variant: "secondary", theme: "light", className: "w-full", children: "Calculate Your Savings" }) }) })
          ] })
        ] }) })
      ] })
    },
    {
      id: "benefits",
      label: "Benefits & ROI",
      content: /* @__PURE__ */ t("div", { className: "space-y-16 mt-12", children: [
        /* @__PURE__ */ t("section", { className: "rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 text-white p-8 md:p-12 overflow-hidden relative shadow-2xl border border-neutral-800", children: [
          /* @__PURE__ */ t("div", { className: "relative z-10 grid md:grid-cols-3 gap-8 md:divide-x md:divide-neutral-800", children: [
            /* @__PURE__ */ t("div", { className: "md:pr-8", children: [
              /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium mb-2", children: "Solar Asset Optimization" }),
              /* @__PURE__ */ e("p", { className: "text-neutral-400 text-sm leading-relaxed", children: "Graffisol transforms solar panels from passive collectors into optimized energy generators, preventing the 15-20% losses typical in deployed assets." })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex flex-col justify-center px-4", children: [
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-500 uppercase tracking-wider mb-1", children: "Energy Yield" }),
              /* @__PURE__ */ e("div", { className: "text-4xl font-display font-medium text-yellow-400", children: "+10-12%" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 mt-1", children: "Annual power generation" })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex flex-col justify-center pl-4", children: [
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-500 uppercase tracking-wider mb-1", children: "Payback Period" }),
              /* @__PURE__ */ e("div", { className: "text-4xl font-display font-medium text-white", children: "< 18mo" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 mt-1", children: "Rapid capital recovery" })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" })
        ] }),
        /* @__PURE__ */ t("section", { className: "border border-neutral-200 rounded-2xl overflow-hidden shadow-sm bg-white", children: [
          /* @__PURE__ */ e("div", { className: "p-6 border-b border-neutral-200 flex justify-between items-center bg-neutral-50/50", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-white", children: /* @__PURE__ */ e(Ve, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("h4", { className: "font-medium text-neutral-900", children: "Yield Calculator" }),
              /* @__PURE__ */ e("p", { className: "text-xs text-neutral-500", children: "Estimate your revenue uplift" })
            ] })
          ] }) }),
          /* @__PURE__ */ e("div", { className: "p-0", children: /* @__PURE__ */ e(
            tl,
            {
              defaultInputs: fa.defaultInputs,
              secondaryInputs: fa.secondaryInputs,
              calculations: fa.calculations,
              theme: "light"
            }
          ) })
        ] }),
        /* @__PURE__ */ t("section", { children: [
          /* @__PURE__ */ t("div", { className: "mb-6", children: [
            /* @__PURE__ */ e(k, { number: "02", title: "Energy Gain Breakdown", theme: "light" }),
            /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 mt-2", children: "Quantify how Graffisol recovers energy from three compounding sources: base output gain, soiling reduction, and thermal derating improvement." })
          ] }),
          /* @__PURE__ */ e(Yn, {})
        ] }),
        /* @__PURE__ */ t("section", { className: "space-y-8", children: [
          /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow", children: [
            /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(k, { number: "03", title: "LCOE Analysis", theme: "light" }) }),
            /* @__PURE__ */ e(
              Oa,
              {
                productName: Qe.productName,
                timeframe: Qe.timeframe,
                traditionalSolution: Qe.traditionalSolution,
                productSolution: Qe.productSolution,
                breakdown: Qe.breakdown,
                highlights: Qe.highlights,
                theme: "light"
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow", children: [
            /* @__PURE__ */ t("div", { className: "mb-6", children: [
              /* @__PURE__ */ e(k, { number: "04", title: "Compound Savings", theme: "light" }),
              /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 mt-2", children: "Cumulative savings from reduced cleaning, lower maintenance, and extended panel lifespan." })
            ] }),
            /* @__PURE__ */ e(
              Ya,
              {
                productName: va.productName,
                savingsPerUnit: va.savingsPerUnit,
                volumeOptions: va.volumeOptions,
                theme: "light"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e("section", { className: "bg-neutral-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden", children: /* @__PURE__ */ t("div", { className: "relative z-10 grid md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e(k, { number: "05", title: "Carbon Credit Ledger", theme: "dark", className: "mb-6" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-400 leading-relaxed mb-6", children: "Increased clean energy generation directly translates to higher carbon offsets. Track your environmental contribution." }),
            /* @__PURE__ */ e(K, { variant: "secondary", theme: "dark", className: "w-fit", children: "View Sustainability Data" })
          ] }),
          /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
            Ja,
            {
              productName: ya.productName,
              impacts: ya.impacts,
              carbonCredits: ya.carbonCredits,
              theme: "dark"
            }
          ) })
        ] }) })
      ] })
    },
    {
      id: "howItWorks",
      label: "How It Works",
      content: /* @__PURE__ */ t("div", { className: "space-y-24 mt-12", children: [
        /* @__PURE__ */ t("section", { className: "max-w-3xl", children: [
          /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-medium text-neutral-900 mb-4", children: "Automated Application" }),
          /* @__PURE__ */ e("p", { className: "text-lg text-neutral-600 leading-relaxed", children: "Applied via robotic sprayers or manual coating during O&M cycles, Graffisol cures instantly to form a permanent bond with the glass substrate." })
        ] }),
        /* @__PURE__ */ t("section", { children: [
          /* @__PURE__ */ e("div", { className: "mb-12", children: /* @__PURE__ */ e(k, { number: "01", title: "Application Process", theme: "light" }) }),
          /* @__PURE__ */ e(
            Wa,
            {
              steps: Sl,
              title: "How Graffisol Works",
              theme: "light"
            }
          )
        ] }),
        /* @__PURE__ */ e("section", { className: "bg-neutral-50 rounded-2xl border border-neutral-200 p-8 md:p-12", children: /* @__PURE__ */ t("div", { className: "space-y-12", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e(k, { number: "02", title: "Pilot Program", theme: "light", className: "mb-6" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-600 mb-6 max-w-3xl", children: "Test Graffisol on a single string or combiner box to verify the uplift before site-wide rollout." }),
            /* @__PURE__ */ e(
              Ba,
              {
                productName: Tt.productName,
                pilotDetails: Tt.pilotDetails,
                benefits: Tt.benefits,
                pricing: Tt.pricing,
                theme: "light"
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "pt-8 border-t border-neutral-200", children: /* @__PURE__ */ e(
            Ua,
            {
              productName: Hr.productName,
              stages: Hr.stages,
              theme: "light"
            }
          ) })
        ] }) })
      ] })
    },
    {
      id: "technical",
      label: "Technical Specs",
      content: /* @__PURE__ */ t("div", { className: "space-y-24 mt-12", children: [
        /* @__PURE__ */ t("section", { className: "max-w-3xl", children: [
          /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-medium text-neutral-900 mb-4", children: "Nanocoating Specifications" }),
          /* @__PURE__ */ e("p", { className: "text-lg text-neutral-600 leading-relaxed", children: "Optical-grade clarity meets industrial-grade durability. Our formulation is tested to IEC standards for harsh environments." })
        ] }),
        /* @__PURE__ */ t("section", { children: [
          /* @__PURE__ */ e(k, { number: "01", title: "Optical & Physical Properties", theme: "light", className: "mb-12" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4", children: [
            { label: "Transmission", value: ">99%", unit: "Visual" },
            { label: "Contact Angle", value: "160", unit: "Deg" },
            { label: "Hardness", value: "10H", unit: "Scale" },
            { label: "Thickness", value: "2-5", unit: "µm" },
            { label: "UV Stability", value: "25", unit: "Years" }
          ].map((n, o) => /* @__PURE__ */ t("div", { className: "p-6 bg-white border border-neutral-200 rounded-xl hover:border-neutral-400 transition-colors", children: [
            /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase font-semibold mb-2", children: n.label }),
            /* @__PURE__ */ t("div", { className: "text-3xl font-display font-medium text-neutral-900", children: [
              n.value,
              /* @__PURE__ */ e("span", { className: "text-sm text-neutral-400 ml-1", children: n.unit })
            ] })
          ] }, o)) })
        ] }),
        /* @__PURE__ */ e("section", { className: "bg-neutral-900 text-white rounded-2xl p-8 md:p-12 overflow-hidden relative", children: /* @__PURE__ */ t("div", { className: "relative z-10", children: [
          /* @__PURE__ */ e(k, { number: "02", title: "Validated Gains", theme: "dark", subtitle: "Real-world performance data from desert deployments.", className: "mb-12" }),
          /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ t("table", { className: "w-full text-left border-collapse min-w-[600px] text-sm", children: [
            /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ t("tr", { className: "border-b border-neutral-800", children: [
              /* @__PURE__ */ e("th", { className: "p-4 text-neutral-500 font-medium tracking-wide", children: "Metric" }),
              /* @__PURE__ */ e("th", { className: "p-4 text-yellow-400 font-bold bg-white/5 rounded-t-lg", children: "Graffisol" }),
              /* @__PURE__ */ e("th", { className: "p-4 text-neutral-500 font-medium", children: "Uncoated Panel" }),
              /* @__PURE__ */ e("th", { className: "p-4 text-neutral-500 font-medium", children: "Standard Hydrophobic" })
            ] }) }),
            /* @__PURE__ */ t("tbody", { className: "divide-y divide-neutral-800", children: [
              /* @__PURE__ */ t("tr", { children: [
                /* @__PURE__ */ e("td", { className: "p-4 font-medium", children: "Daily Energy Yield" }),
                /* @__PURE__ */ e("td", { className: "p-4 font-bold text-white bg-white/5", children: "+10-12%" }),
                /* @__PURE__ */ e("td", { className: "p-4 text-neutral-400", children: "Baseline" }),
                /* @__PURE__ */ e("td", { className: "p-4 text-neutral-400", children: "+2-3%" })
              ] }),
              /* @__PURE__ */ t("tr", { children: [
                /* @__PURE__ */ e("td", { className: "p-4 font-medium", children: "Soiling Loss (Month)" }),
                /* @__PURE__ */ e("td", { className: "p-4 font-bold text-white bg-white/5", children: "< 1%" }),
                /* @__PURE__ */ e("td", { className: "p-4 text-neutral-400", children: "5-15%" }),
                /* @__PURE__ */ e("td", { className: "p-4 text-neutral-400", children: "3-5%" })
              ] }),
              /* @__PURE__ */ t("tr", { children: [
                /* @__PURE__ */ e("td", { className: "p-4 font-medium", children: "Temp Co-efficient" }),
                /* @__PURE__ */ e("td", { className: "p-4 font-bold text-white bg-white/5", children: "-0.1% / °C" }),
                /* @__PURE__ */ e("td", { className: "p-4 text-neutral-400", children: "-0.4% / °C" }),
                /* @__PURE__ */ e("td", { className: "p-4 text-neutral-400", children: "-0.3% / °C" })
              ] })
            ] })
          ] }) })
        ] }) }),
        /* @__PURE__ */ t("section", { className: "space-y-24", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e(k, { number: "03", title: "Certifications", theme: "light", className: "mb-6" }),
            /* @__PURE__ */ e(
              Za,
              {
                productName: At.productName,
                certifications: At.certifications,
                testingStandards: At.testingStandards,
                qualityMetrics: At.qualityMetrics,
                theme: "light"
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e(k, { number: "04", title: "Downloads", theme: "light", className: "mb-6" }),
            /* @__PURE__ */ e(
              _a,
              {
                productName: Na.productName,
                specifications: Na.specifications,
                documents: Na.documents,
                theme: "light"
              }
            )
          ] })
        ] })
      ] })
    },
    {
      id: "deepDive",
      label: "Deep Dive",
      content: /* @__PURE__ */ t("div", { className: "space-y-24 mt-12", children: [
        /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e(
          Qa,
          {
            productName: Dt.productName,
            marketData: Dt.marketData,
            industries: Dt.industries,
            growthMetrics: Dt.growthMetrics,
            theme: "light"
          }
        ) }),
        /* @__PURE__ */ t("section", { className: "bg-neutral-50 p-8 md:p-12 rounded-2xl border border-neutral-200", children: [
          /* @__PURE__ */ e("div", { className: "mb-8", children: /* @__PURE__ */ e(k, { number: "02", title: "Industry Applications", theme: "light" }) }),
          /* @__PURE__ */ e(
            qa,
            {
              productName: zr.productName,
              industries: zr.industries,
              theme: "light"
            }
          )
        ] }),
        /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e(
          Ka,
          {
            productName: Wr.productName,
            sections: Wr.sections,
            theme: "light"
          }
        ) }),
        /* @__PURE__ */ t("section", { className: "bg-neutral-900 text-white p-8 md:p-12 rounded-2xl", children: [
          /* @__PURE__ */ e(k, { number: "04", title: "Global Impact", theme: "dark", className: "mb-8" }),
          /* @__PURE__ */ e(
            Va,
            {
              productName: Lt.productName,
              nationalData: Lt.nationalData,
              internationalData: Lt.internationalData,
              stats: Lt.stats,
              theme: "dark"
            }
          )
        ] })
      ] })
    }
  ];
  return /* @__PURE__ */ t("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ e(
      fe,
      {
        category: "Solar Energy",
        title: r.pageHeader.title,
        subtitle: r.pageHeader.subtitle
      }
    ),
    /* @__PURE__ */ e(ea, { tabs: i, defaultTab: 0 })
  ] });
}, Ml = {
  hero: {
    title: "Reinforcing the future of construction with graphene.",
    subtitle: "Graphacrete is a next-generation concrete admixture that utilizes graphene nano-platelets to significantly enhance structural integrity while reducing cement consumption and carbon footprint.",
    primaryButtonText: "Request Technical Data",
    secondaryButtonText: "View Cost Analysis"
  },
  pageHeader: {
    title: "Graphacrete",
    subtitle: "A high-performance graphene nano-platelet additive that transforms standard concrete grades into superior, high-strength materials with reduced cement usage."
  }
}, rt = {
  productName: "Graphacrete",
  // Primary inputs — always visible in calculator
  defaultInputs: Ee({
    projectVolume: {
      label: "Concrete Volume",
      type: "logslider",
      // logarithmic 1–10,000 m³
      min: 1,
      max: 1e4,
      unit: "m³",
      default: 500
    },
    targetStrength: {
      label: "Target Grade",
      type: "select",
      unit: "",
      default: 50,
      // M50 — NABL certified sweet spot
      options: [
        { value: 20, label: "M20", description: "Residential foundations & slabs" },
        { value: 30, label: "M30", description: "General structural — most common" },
        { value: 40, label: "M40", description: "High-load beams & columns" },
        { value: 50, label: "M50", description: "Premium structural", badge: "NABL Sweet Spot" },
        { value: 60, label: "M60", description: "Bridges & high-rise cores" },
        { value: 70, label: "M70", description: "Ultra-high performance / special structures" }
      ]
    },
    cementPrice: {
      label: "Cement Price",
      type: "slider",
      min: 280,
      max: 350,
      step: 5,
      unit: "₹/bag",
      default: 320,
      note: "Market rate ₹320/bag (50 kg). Adjust for your region."
    },
    cementReductionPct: {
      label: "Cement Reduction",
      type: "slider",
      min: 15,
      max: 20,
      step: 1,
      unit: "%",
      default: 15,
      note: "NABL certified 15–20%. Conservative default = 15%."
    },
    strengthGain28: {
      label: "28-Day Strength Gain",
      type: "slider",
      min: 30,
      max: 67,
      step: 1,
      unit: "%",
      default: 65,
      note: "NABL certified: 65% gain (49.5 MPa on M-30). Field range: 30–67%."
    },
    strengthGain7: {
      label: "7-Day Strength Gain",
      type: "slider",
      min: 10,
      max: 40,
      step: 1,
      unit: "%",
      default: 22,
      note: "Critical for formwork striking time. Default = conservative field value."
    }
  }, me("Graphacrete")?.defaultInputs),
  // Secondary inputs — open by default
  secondaryInputs: Ee({
    waterproofingRate: {
      label: "Waterproofing Cost",
      type: "slider",
      min: 100,
      max: 300,
      step: 10,
      unit: "₹/m²",
      default: 150,
      note: "Dr. Fixit / equivalent system cost per m²"
    },
    laborCost: {
      label: "Daily Site Labour Cost",
      type: "slider",
      min: 5e3,
      max: 5e4,
      step: 1e3,
      unit: "₹/day",
      default: 15e3
    },
    projectType: {
      label: "Project Type",
      type: "buttongroup",
      default: "residential",
      options: [
        { value: "residential", label: "Residential" },
        { value: "commercial", label: "Commercial" },
        { value: "infrastructure", label: "Infrastructure" }
      ]
    },
    analysisPeriod: {
      label: "Analysis Period",
      type: "buttongroup",
      default: 10,
      options: [
        { value: 5, label: "5 yr" },
        { value: 10, label: "10 yr" },
        { value: 20, label: "20 yr" }
      ]
    }
  }, me("Graphacrete")?.secondaryInputs),
  calculations: (r) => {
    const i = me("Graphacrete")?.constants || {}, {
      projectVolume: n = 500,
      targetStrength: o = 50,
      cementPrice: a = 320,
      cementReductionPct: s = 15,
      // 15–20%; 15% = conservative NABL-certified default
      waterproofingRate: d = 150,
      laborCost: m = 15e3,
      projectType: p = "residential",
      analysisPeriod: c = 10,
      strengthGain28: g = 65,
      // % — NABL test: 65% gain (49.5 MPa on M-30, BNR-1101)
      strengthGain7: b = 22
      // % — 7-day early strength gain (field: 10–40%)
    } = r, x = i.additiveVolumeLitresPerM3 ?? 2, w = i.additivePricePerLitre ?? 235, N = x * w, h = i.gradeData ?? {
      20: { bags: 5, fixed: 3250 },
      // 5.00×320+3250  = 4,850
      30: { bags: 6.25, fixed: 4200 },
      // 6.25×320+4200  = 6,200
      40: { bags: 7.5, fixed: 6e3 },
      // 7.50×320+6000  = 8,400
      50: { bags: 8.5, fixed: 7780 },
      // 8.50×320+7780  = 10,500
      60: { bags: 10, fixed: 9800 },
      // 10.0×320+9800  = 13,000
      70: { bags: 12, fixed: 13160 }
      // 12.0×320+13160 = 17,000
    }, l = i.baseGradeFor ?? {
      20: 20,
      // no upgrade; value = cement savings + enhanced durability
      30: 30,
      // no upgrade; value = cement savings + enhanced durability
      40: 30,
      // M30 + Graphacrete → M40 performance
      50: 30,
      // M30 + Graphacrete → M50 (NABL certified sweet spot)
      60: 40,
      // M40 + Graphacrete → M60 performance
      70: 50
      // M50 + Graphacrete → M70 ultra-HPC performance
    }, S = (xr, Mi) => h[xr].fixed + h[xr].bags * Mi, T = l[o], R = S(o, a), P = S(T, a), M = Math.round(R - (P + N)), f = Math.round(M * n), E = s / 100, W = h[T].bags * E, O = Math.round(W * a), F = P - O + N, G = Math.round(R - F), B = Math.round(G * n), re = Math.round(x * n), V = Math.round(N * n), C = B > 0 && V > 0 ? Math.round(B / V * 100) : null, v = G > 0 ? "Immediate" : "Quality+", u = M > 0 ? "Savings" : "Premium", y = G > 0 ? "Net Savings" : "Quality Upgrade Premium", $ = Math.round(W * n), Z = i.cementBagKg ?? 50, pe = i.co2KgPerKgCement ?? 0.9, gt = $ * Z, aa = Math.round(gt * pe), pi = Math.round(n * 0.25), ui = Math.floor(c / 7), Xa = pi * d * 0.7 * (1 + ui), er = Math.round(n / 30 * 0.17 * m * 1.5), tr = n * 15e3, ar = Math.round(tr * 0.03), hi = p === "commercial" ? 120 : 60, rr = p !== "infrastructure" ? Math.round(n * 2 * hi * 0.07 * c) : 0, ir = Math.round(tr * 4e-3 * c), nr = Math.round(
      Xa + er + ar + rr + ir
    ), tt = Math.round(B + nr), gi = V > 0 && tt > 0 ? Math.round(tt / V * 100) : null, ra = T, ia = o, lr = 0.75, na = parseFloat((ra * lr).toFixed(1)), bi = parseFloat((ia * lr).toFixed(1)), la = parseFloat((ra * (1 + g / 100)).toFixed(1)), sr = parseFloat((na * (1 + b / 100)).toFixed(1)), xi = la >= ia - 1 ? `≈ M${o}` : `≈ M${Math.floor(la / 5) * 5}`, or = 15, cr = parseFloat((or / na * 7).toFixed(1)), dr = parseFloat((or / sr * 7).toFixed(1)), mr = Math.max(0, parseFloat((cr - dr).toFixed(1))), pr = Math.max(1, Math.round(n / 300)), ur = Math.round(mr * pr), fi = Math.round(ur * m), bt = 30, vi = Math.round(G * bt), yi = Math.round(N * bt), Ni = Math.round(W * bt), wi = B > 0 && V > 0 ? parseFloat((B / V).toFixed(1)) : null, ki = tt > 0 && V > 0 ? parseFloat((tt / V).toFixed(1)) : null, hr = 500, Ci = Math.round(aa / 1e3 * hr), gr = Math.round(R), br = Math.round(F), sa = gr - br, Pi = Math.round(sa * n), Si = Math.round((sa - N) * n);
    return {
      // ── Core costs ────────────────────────────────────────────────────────────
      baseGrade: T,
      targetGrade: o,
      isNABL: o === 50,
      baseCostPerM3: Math.round(P),
      targetCostPerM3: Math.round(R),
      additiveCostPerM3: N,
      cementSavingsValuePerM3: O,
      netCostWithGraphacretePerM3: Math.round(F),
      // ── Savings — BOTH methods always returned ────────────────────────────────
      gradeOnlySavingsPerM3: M,
      // ₹/m³ grade-only (brochure ₹430 at M50/₹320)
      gradeOnlySavingsTotal: f,
      // ₹ project total
      netSavingsPerM3: G,
      // ₹/m³ all-in net (+ve = savings, −ve = quality premium)
      netSavingsTotal: B,
      // ₹ project total
      // ── Marketing presentation helpers ────────────────────────────────────────
      gradeOnlyLabel: u,
      // 'Savings' | 'Premium'
      netLabel: y,
      // 'Net Savings' | 'Quality Upgrade Premium'
      roiPercentage: C,
      // % (null when not positive — never show negative ROI)
      paybackLabel: v,
      // 'Immediate' | 'Quality+'
      // ── Investment ────────────────────────────────────────────────────────────
      additiveVolumeLitresPerM3: x,
      // 2 L/m³ (fixed dosage)
      additivePricePerLitre: w,
      // ₹235/L
      additiveVolumeLitresTotal: re,
      // total litres for project
      productCostTotal: V,
      additiveMlPerBag: 250,
      // 250 mL per 50 kg cement bag
      cementBagWeightKg: 50,
      // standard Indian bag weight
      baseBagsPerM3: h[T].bags,
      // bags/m³ for base grade
      // ── Cement & CO₂ ─────────────────────────────────────────────────────────
      cementSavedBags: $,
      cementSavedKg: gt,
      co2AvoidedKg: aa,
      // ── Lifecycle ─────────────────────────────────────────────────────────────
      lifecycle: {
        waterproofing: Math.round(Xa),
        construction: er,
        lifeExtension: ar,
        thermal: rr,
        maintenance: ir,
        total: nr
      },
      totalAllInDelta: tt,
      totalAllInRoiPct: gi,
      // ── Strength performance ──────────────────────────────────────────────────
      strengthGain28: g,
      strengthGain7: b,
      baseMPa: ra,
      targetMPa: ia,
      baseAt7DayMPa: na,
      targetAt7DayMPa: bi,
      graphAt28DayMPa: la,
      graphAt7DayMPa: sr,
      strengthGrade28Label: xi,
      nablTestMPa: 49.5,
      // NABL cert BNR-1101: M-30+G ACT equivalent strength
      nablGainPct: 65,
      // 49.5/30 − 1 = 65% (reference anchor)
      // ── Construction schedule ─────────────────────────────────────────────────
      tradDaysToStrike: cr,
      graphDaysToStrike: dr,
      deshutterDaysSaved: mr,
      estimatedFloors: pr,
      totalCycleDaysSaved: ur,
      cycleSavingsValue: fi,
      // ── Per-pour breakdown (30 m³ reference pour) ────────────────────────────
      pourSize: bt,
      netSavingsPerPour: vi,
      additiveCostPerPour: yi,
      cementSavedPerPour: Ni,
      // ── Investor metrics ──────────────────────────────────────────────────────
      roiMultiple: wi,
      allInMultiple: ki,
      carbonCreditRatePerTon: hr,
      carbonCreditValueTotal: Ci,
      // ── Contractor view ───────────────────────────────────────────────────────
      contractorRevenuePerM3: gr,
      contractorCostPerM3: br,
      contractorMarginPerM3: sa,
      contractorMarginTotal: Pi,
      contractorNetOfAdditive: Si,
      // ── Legacy (used by other page components) ────────────────────────────────
      savingsPerUnit: { label: "Net savings per m³", value: G },
      cementSaved: $,
      co2Reduced: aa,
      strengthIncrease: o > T ? `+${Math.round((o - T) / T * 100)}%` : "+45%",
      waterResistance: "+30-45%",
      summary: [
        { label: "Base Mix", value: `M${T} + Graphacrete` },
        { label: "Achieves", value: `M${o} Performance` },
        {
          label: G > 0 ? "Net Savings" : "Quality Premium",
          value: `₹${Math.abs(G)}/m³`
        }
      ]
    };
  },
  impactMetrics: [
    {
      key: "cementSaved",
      label: "Cement Saved",
      unit: "bags",
      trend: "down",
      description: "15–20% cement reduction (NABL certified)"
    },
    {
      key: "co2Avoided",
      label: "CO₂ Emissions Avoided",
      unit: "kg",
      trend: "down",
      description: "Reduced carbon footprint"
    },
    {
      key: "strengthIncrease",
      label: "Strength Gain",
      unit: "",
      trend: "up",
      description: "40–50% compressive strength increase"
    },
    {
      key: "waterResistance",
      label: "Water Resistance",
      unit: "",
      trend: "up",
      description: "30–45% permeability reduction"
    }
  ]
}, $l = [
  {
    title: "Dispersion",
    description: "Proprietary graphene nano-platelets uniformly dispersed in water-based medium for easy mixing with concrete.",
    duration: "5-10 minutes",
    icon: et
  },
  {
    title: "Mixing",
    description: "Add Graphacrete to concrete mix at optimal dosage (0.05-0.10% by weight of cement) during standard batching process.",
    duration: "Standard mix time",
    icon: dt
  },
  {
    title: "Nano-Reinforcement",
    description: "Graphene platelets fill micro-voids and create dense nano-mesh network within cement matrix, enhancing mechanical properties.",
    duration: "During curing",
    icon: q
  },
  {
    title: "Superior Performance",
    description: "Achieve 40-50% strength gain, superior crack resistance, and enhanced durability with reduced cement content.",
    duration: "28 days curing",
    icon: z
  }
], Rt = {
  productName: "Graphacrete",
  pilotDetails: [
    {
      title: "Pilot Quantity Supply",
      description: "100-500L Graphacrete for trial concrete batches"
    },
    {
      title: "Technical Training",
      description: "On-site training for mixing and application procedures"
    },
    {
      title: "Testing Support",
      description: "Guidance on cube preparation and strength testing protocols"
    },
    {
      title: "Performance Monitoring",
      description: "Weekly check-ins and data collection support"
    },
    {
      title: "Comprehensive Report",
      description: "Detailed analysis of performance vs. control samples"
    }
  ],
  benefits: [
    {
      title: "Zero Risk Trial",
      description: "Test in real conditions before committing",
      icon: q
    },
    {
      title: "Proven Results",
      description: "Validate 40-50% strength gain in your mix",
      icon: oi
    },
    {
      title: "Cost Verification",
      description: "Confirm cement savings and ROI projections",
      icon: z
    }
  ],
  pricing: {
    cost: "From ₹25,000",
    description: "Pilot program including technical support",
    note: "* Cost adjustable based on project scale and duration"
  }
}, It = {
  productName: "Graphacrete",
  marketData: {
    tamSize: "₹50,000 Cr",
    cagr: "12% CAGR",
    targetCustomers: "10,000+",
    marketShare: "2-5%"
  },
  industries: [
    {
      id: "infrastructure",
      name: "Infrastructure",
      description: "Roads, highways, bridges, and large-scale civil infrastructure projects requiring high-strength, durable concrete.",
      keyPoints: [
        "Government infrastructure spend: ₹10+ lakh crore annually",
        "Growing demand for high-performance concrete",
        "Sustainability mandates driving adoption"
      ],
      marketSize: "₹25,000 Cr",
      revenuePotential: "₹500-1,000 Cr",
      growthRate: "15% CAGR"
    },
    {
      id: "highrise",
      name: "High-Rise Construction",
      description: "Premium residential and commercial towers requiring superior strength and reduced structural weight.",
      keyPoints: [
        "Metro cities adding 100+ high-rises annually",
        "Weight reduction enables taller structures",
        "Premium segment willing to pay for quality"
      ],
      marketSize: "₹15,000 Cr",
      revenuePotential: "₹300-600 Cr",
      growthRate: "18% CAGR"
    },
    {
      id: "precast",
      name: "Precast Manufacturing",
      description: "Precast concrete manufacturers producing structural elements, panels, and specialized components.",
      keyPoints: [
        "Growing precast market in India",
        "Quality differentiation opportunity",
        "Reduced cement costs improve margins"
      ],
      marketSize: "₹8,000 Cr",
      revenuePotential: "₹150-300 Cr",
      growthRate: "20% CAGR"
    }
  ],
  growthMetrics: [
    {
      title: "Urbanization",
      description: "Rapid urban growth driving construction demand",
      value: "40% urban by 2030"
    },
    {
      title: "Infrastructure Push",
      description: "Government infrastructure investment",
      value: "₹111 lakh Cr by 2025"
    },
    {
      title: "Sustainability Focus",
      description: "Carbon reduction mandates",
      value: "Net Zero 2070"
    }
  ]
}, Ye = {
  productName: "Graphacrete",
  timeframe: "5 years",
  traditionalSolution: {
    breakdown: {
      "Material Cost": 85e4,
      "Labor & Application": 12e4,
      "Maintenance & Repairs": 18e4,
      "Quality Control": 5e4
    },
    total: 12e5
  },
  productSolution: {
    breakdown: {
      "Material Cost (with Graphacrete)": 65e4,
      "Labor & Application": 12e4,
      "Maintenance & Repairs": 8e4,
      "Quality Control": 5e4
    },
    total: 9e5,
    paybackPeriod: "12-18 months"
  },
  breakdown: [
    {
      category: "Cement Cost",
      description: "15-20% cement reduction",
      traditional: 4e5,
      withProduct: 32e4
    },
    {
      category: "Graphacrete Additive",
      description: "Nano-platelet dosage",
      traditional: 0,
      withProduct: 47e3
    },
    {
      category: "Maintenance",
      description: "Reduced due to superior durability",
      traditional: 18e4,
      withProduct: 8e4
    },
    {
      category: "Rework & Repairs",
      description: "Lower failure rates",
      traditional: 12e4,
      withProduct: 4e4
    }
  ],
  highlights: [
    { label: "Maintenance Savings", value: "-55%", color: "green" },
    { label: "Grade Upgrade", value: "M30→M50", color: "blue" }
  ]
}, wa = {
  productName: "Graphacrete",
  savingsPerUnit: {
    calculation: (r) => 430
    // ₹430 per m³ net savings
  },
  volumeOptions: {
    label: "Annual Concrete Volume",
    min: 500,
    max: 1e5,
    step: 500,
    unit: "m³",
    default: 1e4
  }
}, ka = {
  productName: "Graphacrete",
  impacts: [
    { type: "carbon", value: "15-20%", label: "CO₂ Reduction" },
    { type: "cement", value: "15-20%", label: "Cement Saved" },
    { type: "water", value: "30-45%", label: "Permeability Reduction" },
    { type: "waste", value: "25%", label: "Less Material Waste" }
  ],
  carbonCredits: {
    value: "Eligible",
    description: "Cement reduction qualifies for carbon credit programs"
  }
}, Br = {
  productName: "Graphacrete",
  stages: [
    {
      type: "trial",
      title: "Lab Trial",
      description: "Small-scale testing with control samples to validate strength gains",
      duration: "2-3 weeks",
      investment: "From ₹25,000",
      details: [
        "10-20 cube samples",
        "Technical training provided",
        "Strength testing at 7, 14, 28 days"
      ]
    },
    {
      type: "validation",
      title: "Field Validation",
      description: "On-site pilot batch with real project conditions",
      duration: "4-6 weeks",
      investment: "₹1-2 lakhs",
      details: [
        "100-500L pilot quantity",
        "Application support on-site",
        "Performance monitoring"
      ]
    },
    {
      type: "scale",
      title: "Scaled Deployment",
      description: "Partial project deployment with established protocols",
      duration: "2-3 months",
      investment: "₹5-10 lakhs",
      details: [
        "Multiple batches/structures",
        "Quality assurance process",
        "Cost-benefit validation"
      ]
    },
    {
      type: "deployment",
      title: "Full Production",
      description: "Complete integration into standard operations",
      duration: "Ongoing",
      investment: "Negotiated pricing",
      details: [
        "Bulk supply agreements",
        "Long-term technical support",
        "Performance guarantees"
      ]
    }
  ]
}, Gt = {
  productName: "Graphacrete",
  nationalData: {
    locations: [
      { city: "Ahmedabad", state: "Gujarat", projects: 12 },
      { city: "Mumbai", state: "Maharashtra", projects: 8 },
      { city: "Bangalore", state: "Karnataka", projects: 6 },
      { city: "Hyderabad", state: "Telangana", projects: 5 },
      { city: "Delhi NCR", state: "Delhi", projects: 7 },
      { city: "Pune", state: "Maharashtra", projects: 4 }
    ],
    marketPenetration: "0.5%",
    penetrationDescription: "Early adoption in metro markets",
    partnerships: "25+",
    partnershipDescription: "Active construction partners",
    reach: "6 states",
    reachDescription: "Expanding across India"
  },
  internationalData: {
    locations: [
      { city: "Dubai", state: "UAE", projects: 3 },
      { city: "Singapore", state: "Singapore", projects: 2 }
    ],
    marketPenetration: "0.1%",
    penetrationDescription: "International trials underway",
    partnerships: "5+",
    partnershipDescription: "Strategic international partners",
    reach: "2 countries",
    reachDescription: "Initial international presence"
  },
  stats: [
    { value: "42+", label: "Active Projects" },
    { value: "50,000+", label: "Cubic Meters" },
    { value: "8", label: "States & Countries" },
    { value: "30+", label: "Partner Companies" }
  ]
}, Ca = {
  productName: "Graphacrete",
  specifications: [
    { parameter: "Purity", value: "~99%", testMethod: "XRD Analysis" },
    { parameter: "Thickness (Z)", value: "5-10 nm", testMethod: "TEM Imaging" },
    { parameter: "Lateral Size (X&Y)", value: "~20 µm", testMethod: "SEM Analysis" },
    { parameter: "Surface Area", value: "200 m²/g", testMethod: "BET Method" },
    { parameter: "Bulk Density", value: "0.12 g/cm³", testMethod: "ASTM D1895" },
    { parameter: "Dosage", value: "0.05-0.10%", testMethod: "By cement weight" },
    { parameter: "Form", value: "Liquid dispersion", testMethod: "Visual" },
    { parameter: "Storage", value: "6-12 months", testMethod: "Shelf life test" }
  ],
  documents: [
    {
      title: "Technical Data Sheet",
      description: "Complete specifications and application guidelines",
      fileSize: "2.4 MB",
      format: "PDF",
      filename: "Graphacrete-TDS.pdf",
      url: "#"
    },
    {
      title: "NABL Test Report",
      description: "Certified lab test results for strength and durability",
      fileSize: "5.8 MB",
      format: "PDF",
      filename: "Graphacrete-NABL-Report.pdf",
      url: "#"
    },
    {
      title: "Safety Data Sheet (SDS)",
      description: "Material safety and handling information",
      fileSize: "1.2 MB",
      format: "PDF",
      filename: "Graphacrete-SDS.pdf",
      url: "#"
    },
    {
      title: "Application Guide",
      description: "Step-by-step mixing and application procedures",
      fileSize: "3.1 MB",
      format: "PDF",
      filename: "Graphacrete-Application-Guide.pdf",
      url: "#"
    }
  ]
}, Or = {
  productName: "Graphacrete",
  industries: [
    {
      name: "Infrastructure",
      icon: "construction",
      description: "High-performance concrete for roads, bridges, highways, and large-scale infrastructure demanding superior strength and durability.",
      useCases: [
        {
          title: "Highway Construction",
          description: "Enhanced load-bearing capacity and reduced maintenance"
        },
        {
          title: "Bridge Decks",
          description: "Superior crack resistance and longer service life"
        },
        {
          title: "Tunnels",
          description: "Improved water resistance and structural integrity"
        }
      ],
      benefits: [
        { title: "40-50% Higher Strength", description: "Better load capacity" },
        { title: "30-45% Water Resistance", description: "Enhanced durability" },
        { title: "15-20% Cement Savings", description: "Cost and carbon reduction" }
      ],
      metrics: [
        { value: "+50%", label: "Strength" },
        { value: "15-20%", label: "Cost Savings" },
        { value: "25+ years", label: "Service Life" },
        { value: "-20%", label: "Maintenance" }
      ],
      caseStudy: {
        preview: "Major highway project achieved M50 strength with M30 mix, saving ₹2.5 Cr"
      }
    },
    {
      name: "High-Rise Buildings",
      icon: "construction",
      description: "Premium residential and commercial towers requiring reduced weight with superior structural performance.",
      useCases: [
        {
          title: "Structural Columns",
          description: "Higher strength enables slender designs"
        },
        {
          title: "Slabs & Beams",
          description: "Weight reduction without compromising strength"
        },
        {
          title: "Foundation",
          description: "Enhanced load transfer and durability"
        }
      ],
      benefits: [
        { title: "Reduced Dead Load", description: "Enables taller structures" },
        { title: "Faster Construction", description: "Higher early strength" },
        { title: "Premium Quality", description: "Market differentiation" }
      ],
      metrics: [
        { value: "+45%", label: "Strength" },
        { value: "-12%", label: "Weight" },
        { value: "+30%", label: "Floor Space" },
        { value: "₹500/m³", label: "Savings" }
      ]
    },
    {
      name: "Precast Manufacturing",
      icon: "manufacturing",
      description: "Precast concrete products requiring consistent quality, reduced curing time, and cost optimization.",
      useCases: [
        {
          title: "Structural Elements",
          description: "Beams, columns, walls with enhanced properties"
        },
        {
          title: "Architectural Panels",
          description: "Thinner panels with superior finish"
        },
        {
          title: "Paving Blocks",
          description: "Higher durability and wear resistance"
        }
      ],
      benefits: [
        { title: "Quality Consistency", description: "Batch-to-batch uniformity" },
        { title: "Faster Demolding", description: "Higher early strength" },
        { title: "Product Differentiation", description: "Premium quality positioning" }
      ],
      metrics: [
        { value: "+48%", label: "Strength" },
        { value: "-25%", label: "Curing Time" },
        { value: "+35%", label: "Throughput" },
        { value: "18%", label: "Margin Gain" }
      ]
    },
    {
      name: "Marine Structures",
      icon: "construction",
      description: "Coastal and underwater structures requiring extreme durability and corrosion resistance.",
      useCases: [
        {
          title: "Ports & Jetties",
          description: "Saltwater resistance and superior strength"
        },
        {
          title: "Offshore Platforms",
          description: "Enhanced durability in harsh environments"
        },
        {
          title: "Seawalls",
          description: "Superior water resistance and longevity"
        }
      ],
      benefits: [
        { title: "Superior Permeability", description: "30-45% water resistance" },
        { title: "Corrosion Protection", description: "Denser microstructure" },
        { title: "Extended Life", description: "2-3× longer service life" }
      ],
      metrics: [
        { value: "+40%", label: "Durability" },
        { value: "-45%", label: "Permeability" },
        { value: "50+ years", label: "Life Span" },
        { value: "70%", label: "Maintenance ↓" }
      ]
    },
    {
      name: "Ready-Mix Concrete",
      icon: "manufacturing",
      description: "RMC suppliers seeking product differentiation and performance enhancement.",
      useCases: [
        {
          title: "Premium Mix Design",
          description: "High-performance concrete offerings"
        },
        {
          title: "Special Applications",
          description: "Custom solutions for demanding projects"
        },
        {
          title: "Sustainable Concrete",
          description: "Low-carbon, high-performance mixes"
        }
      ],
      benefits: [
        { title: "Product Differentiation", description: "Premium pricing opportunity" },
        { title: "Customer Retention", description: "Superior performance" },
        { title: "Sustainability Edge", description: "Green building compliance" }
      ],
      metrics: [
        { value: "+25%", label: "Premium" },
        { value: "40+", label: "New Customers" },
        { value: "95%", label: "Retention" },
        { value: "₹800/m³", label: "Value Add" }
      ]
    },
    {
      name: "Repair & Rehabilitation",
      icon: "construction",
      description: "Structural repairs and retrofitting requiring high bond strength and durability.",
      useCases: [
        {
          title: "Structural Repairs",
          description: "Enhanced bond and superior strength"
        },
        {
          title: "Surface Protection",
          description: "Durable protective coatings"
        },
        {
          title: "Crack Filling",
          description: "Superior micro-crack control"
        }
      ],
      benefits: [
        { title: "Stronger Bond", description: "Better adhesion to substrate" },
        { title: "Longer Lasting", description: "Reduced re-repair frequency" },
        { title: "Cost Effective", description: "Less material, better results" }
      ],
      metrics: [
        { value: "+55%", label: "Bond Strength" },
        { value: "3-5 years", label: "Repair Life" },
        { value: "-30%", label: "Material Cost" },
        { value: "90%", label: "Success Rate" }
      ]
    }
  ]
}, Vr = {
  productName: "Graphacrete",
  sections: [
    {
      icon: "mechanism",
      title: "Mechanism of Action",
      summary: "How graphene nano-platelets enhance concrete performance at the molecular level",
      content: [
        "Graphacrete introduces graphene nano-platelets (GNPs) into the cement matrix. These atomically thin, two-dimensional carbon structures possess extraordinary mechanical properties: 200× stronger than steel, yet flexible and only nanometers thick.",
        "During hydration, GNPs uniformly disperse throughout the cement paste, creating a nano-reinforcement network. This network bridges micro-cracks, densifies the microstructure, and creates additional nucleation sites for calcium silicate hydrate (C-S-H) formation.",
        "The result is a denser, stronger cement matrix with superior mechanical properties and enhanced durability characteristics."
      ],
      keyPoints: [
        {
          title: "Nano-Bridging Effect",
          description: "GNPs bridge micro-cracks, preventing propagation and failure"
        },
        {
          title: "Nucleation Enhancement",
          description: "More C-S-H formation sites lead to denser microstructure"
        },
        {
          title: "Pore Refinement",
          description: "Reduction in porosity improves water resistance"
        }
      ],
      technicalData: {
        "GNP Thickness": "3-10 graphene layers",
        "Dispersion Quality": ">95% uniformity",
        Dosage: "0.05-0.10% by cement weight"
      }
    },
    {
      icon: "structure",
      title: "Microstructural Enhancement",
      summary: "Changes in concrete microstructure that lead to superior performance",
      content: [
        "Traditional concrete has inherent micro-voids and weak transition zones between cement paste and aggregates. These are failure initiation points under load.",
        "Graphacrete's GNPs fill these micro-voids and strengthen the interfacial transition zone (ITZ). SEM imaging shows a 40% reduction in porosity and significantly denser C-S-H gel formation.",
        "This microstructural densification translates directly into measurable performance gains: higher compressive and flexural strength, reduced permeability, and superior crack resistance."
      ],
      keyPoints: [
        {
          title: "ITZ Strengthening",
          description: "Strongest bond between cement and aggregate"
        },
        {
          title: "Porosity Reduction",
          description: "30-40% fewer micro-voids in the matrix"
        },
        {
          title: "Crack Path Deflection",
          description: "GNPs deflect cracks, dissipating energy"
        }
      ],
      technicalData: {
        "Porosity Reduction": "30-40%",
        "ITZ Enhancement": "Up to 50%",
        "C-S-H Density": "+25%"
      }
    },
    {
      icon: "properties",
      title: "Enhanced Properties",
      summary: "Measurable improvements in concrete performance characteristics",
      content: [
        "Graphacrete delivers 40-50% compressive strength gains compared to control mixes. A standard M30 mix with Graphacrete achieves M50-equivalent strength, enabling significant cement reduction while maintaining performance.",
        "Water permeability drops by 30-45%, dramatically improving durability in aggressive environments. This is critical for marine structures, underground construction, and infrastructure exposed to moisture.",
        "Flexural strength increases by 35-40%, improving crack resistance under dynamic loads. This is particularly valuable in pavements, bridge decks, and industrial floors."
      ],
      keyPoints: [
        {
          title: "Compressive Strength",
          description: "40-50% increase validated by NABL testing"
        },
        {
          title: "Water Resistance",
          description: "30-45% permeability reduction"
        },
        {
          title: "Flexural Performance",
          description: "35-40% higher flexural strength"
        },
        {
          title: "Durability",
          description: "Extended service life in harsh conditions"
        }
      ],
      technicalData: {
        "Compressive Gain": "40-50% @ 28 days",
        Permeability: "-35% avg",
        "Flexural Gain": "+38% avg",
        "Durability Index": "+45%"
      }
    },
    {
      icon: "science",
      title: "Scientific Validation",
      summary: "Independent testing and research backing Graphacrete technology",
      content: [
        "All Graphacrete performance claims are validated through NABL-certified laboratory testing following IS and ASTM standards. Testing includes compressive strength (IS 516), water permeability (IS 3085), and durability assessments.",
        "Microstructural analysis using Scanning Electron Microscopy (SEM), Transmission Electron Microscopy (TEM), and X-Ray Diffraction (XRD) confirms the mechanism of GNP-enhanced concrete.",
        "Field trials across 40+ projects provide real-world validation of lab results, with consistent 40-50% strength gains and superior long-term durability."
      ],
      keyPoints: [
        {
          title: "NABL Certified",
          description: "All testing at accredited labs"
        },
        {
          title: "Field Validated",
          description: "40+ successful projects"
        },
        {
          title: "Peer Reviewed",
          description: "Published research papers"
        }
      ],
      technicalData: {
        "NABL Reports": "NABL Certified · 3 Test Reports",
        "M-20 Actual 28-Day": "29.0 MPa avg (3 cubes)",
        "M-30 ACT Equiv.": "49.5 MPa avg (3 cubes)"
      }
    }
  ]
}, _r = {
  productName: "Graphacrete",
  competitors: ["UltraTech Admixture", "Sika Admixture", "PureGraph"],
  metrics: [
    {
      metric: "Cement Saving",
      productValue: "15-20%",
      competitorValues: ["0%", "0%", "3-5%"]
    },
    {
      metric: "Water Resistance",
      productValue: "30-45%",
      competitorValues: ["<10%", "10-20%", "20-30%"]
    },
    {
      metric: "Dosage Required",
      productValue: "0.05-0.10%",
      competitorValues: ["0.2-1.0%", "0.2-1.0%", "0.2-0.5%"]
    },
    {
      metric: "Compressive Strength Gain",
      productValue: "40-50%",
      competitorValues: ["5-15%", "8-15%", "10-25%"]
    },
    {
      metric: "Micro-Crack Control",
      productValue: "Excellent",
      competitorValues: ["Low", "Medium", "Medium"]
    }
  ],
  differentiators: [
    {
      title: "Highest Performance",
      description: "Best strength gain (40-50%) at lowest dosage (0.05-0.10%) in the industry"
    },
    {
      title: "Complete Solution",
      description: "Only product offering strength + durability + waterproofing + cement reduction"
    },
    {
      title: "Best Value",
      description: "Superior cost-to-performance ratio with environmental benefits"
    }
  ]
}, Tl = U(() => import("./index-DgEAkArk.js").then((r) => ({ default: r.GraphacreteROICalculator }))), Dl = U(() => import("./index-DgEAkArk.js").then((r) => ({ default: r.HowItWorks }))), Al = U(() => import("./index-DgEAkArk.js").then((r) => ({ default: r.PerformancePilot }))), Ll = U(() => import("./index-DgEAkArk.js").then((r) => ({ default: r.MarketOpportunityAnalyzer }))), Rl = U(() => import("./index-DgEAkArk.js").then((r) => ({ default: r.TCOAnalysis }))), Il = U(() => import("./index-DgEAkArk.js").then((r) => ({ default: r.LongTermSavingsCalculator }))), Gl = U(() => import("./index-DgEAkArk.js").then((r) => ({ default: r.EnvironmentalImpact })));
U(() => import("./index-DgEAkArk.js").then((r) => ({ default: r.CertificationsQuality })));
const El = U(() => import("./index-DgEAkArk.js").then((r) => ({ default: r.TrialToDeployment }))), jl = U(() => import("./index-DgEAkArk.js").then((r) => ({ default: r.ImpactMap }))), Fl = U(() => import("./index-DgEAkArk.js").then((r) => ({ default: r.ProductDataSheet }))), Hl = U(() => import("./index-DgEAkArk.js").then((r) => ({ default: r.IndustrySolutions }))), zl = U(() => import("./index-DgEAkArk.js").then((r) => ({ default: r.ScienceExplained }))), Wl = U(() => import("./index-DgEAkArk.js").then((r) => ({ default: r.CompetitiveMatrix })));
U(() => import("./index-DgEAkArk.js").then((r) => ({ default: r.GraphacreteLabResults })));
const Bl = U(() => import("./index-DgEAkArk.js").then((r) => ({ default: r.GraphacreteCostBenefit }))), De = () => /* @__PURE__ */ e("div", { className: "flex items-center justify-center py-20", children: /* @__PURE__ */ t("div", { className: "text-center", children: [
  /* @__PURE__ */ e("div", { className: "inline-block animate-spin rounded-full h-8 w-8 border-4 border-neutral-200 border-t-neutral-600 mb-3" }),
  /* @__PURE__ */ e("p", { className: "text-neutral-500 text-sm", children: "Loading content..." })
] }) }), Et = ({ label: r, value: i, subtext: n }) => /* @__PURE__ */ t("div", { className: "p-6 bg-white border border-neutral-200 shadow-sm", children: [
  /* @__PURE__ */ e("div", { className: "text-sm text-neutral-500 uppercase tracking-wide mb-2", children: r }),
  /* @__PURE__ */ e("div", { className: "text-2xl font-display font-medium text-neutral-900 mb-1", children: i }),
  /* @__PURE__ */ e("div", { className: "text-sm text-neutral-500", children: n })
] }), Ds = () => {
  const r = Ml, i = [
    {
      id: "overview",
      label: "Overview",
      content: /* @__PURE__ */ e(Ce, { fallback: /* @__PURE__ */ e(De, {}), children: /* @__PURE__ */ t("div", { className: "space-y-24 mt-24", children: [
        /* @__PURE__ */ e(
          ht,
          {
            title: r.hero.title,
            subtitle: r.hero.subtitle,
            category: "Commercial Ready",
            categoryColor: "bg-green-400",
            images: [
              "/images/graphacrete_lifecycle_lab_making.png",
              "/images/graphacrete_lifecycle_lab_testing.png",
              "/images/graphacrete_lifecycle_site_pouring.png",
              "/images/graphacrete_lifecycle_site_finishing.png",
              "/images/graphacrete_lifecycle_site_result.png"
            ],
            buttons: [
              { text: r.hero.primaryButtonText, link: "/contact", variant: "primary" },
              { text: r.hero.secondaryButtonText, link: "#impact", variant: "secondary" }
            ]
          }
        ),
        /* @__PURE__ */ t("section", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ e("div", { className: "lg:col-span-1 h-full min-h-[300px]", children: /* @__PURE__ */ e(
            ta,
            {
              src: "/images/graphacrete-studio.png",
              alt: "Graphacrete Studio View",
              className: "h-full",
              imageFit: "object-contain",
              innerClassName: "bg-white p-4"
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "lg:col-span-2 grid grid-cols-2 gap-4", children: [
            { label: "M-20 Compressive Strength", value: "29 MPa", desc: "Actual 28-day · NABL certified" },
            { label: "M-30 ACT Equivalent", value: "49.5 MPa", desc: "65% above M-30 min · NABL certified" },
            { label: "Cement Saved (M-20)", value: "10.8%", desc: "40 kg/m³ less vs control mix" },
            { label: "W/C Ratio (M-30)", value: "0.37", desc: "Denser microstructure · 220 mm slump" }
          ].map((n, o) => /* @__PURE__ */ t("div", { className: "p-8 bg-neutral-50 border border-neutral-200 rounded-xl hover:shadow-md transition-shadow flex flex-col justify-center", children: [
            /* @__PURE__ */ e("div", { className: "text-4xl font-display font-medium text-neutral-900 mb-2", children: n.value }),
            /* @__PURE__ */ e("div", { className: "text-sm font-bold text-neutral-900 uppercase tracking-wide mb-1", children: n.label }),
            /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500", children: n.desc })
          ] }, o)) })
        ] }),
        /* @__PURE__ */ t("section", { className: "py-8", children: [
          /* @__PURE__ */ e(k, { number: "01", title: "Engineered Performance", theme: "light", subtitle: "Why Graphacrete is the superior choice for modern infrastructure." }),
          /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-12", children: [
            /* @__PURE__ */ t("div", { className: "md:col-span-2 p-8 bg-neutral-900 text-white rounded-2xl relative overflow-hidden group", children: [
              /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity", children: /* @__PURE__ */ e(X, { size: 120, strokeWidth: 1 }) }),
              /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium mb-4 relative z-10", children: "Structural Integrity" }),
              /* @__PURE__ */ e("p", { className: "text-neutral-400 leading-relaxed max-w-md relative z-10", children: "Graphacrete creates a denser micro-structure within the concrete matrix, bridging micro-cracks before they propagate. This results in superior load-bearing capacity and fatigue resistance." }),
              /* @__PURE__ */ t("div", { className: "mt-8 flex gap-2", children: [
                /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-white/10 rounded text-xs", children: "High Flexural Strength" }),
                /* @__PURE__ */ e("span", { className: "px-3 py-1 bg-white/10 rounded text-xs", children: "Reduced Creep" })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "md:row-span-2 p-8 bg-neutral-50 border border-neutral-200 rounded-2xl flex flex-col justify-center", children: [
              /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6", children: /* @__PURE__ */ e(Ut, { className: "w-6 h-6" }) }),
              /* @__PURE__ */ e("h3", { className: "text-xl font-display font-medium mb-3 text-neutral-900", children: "Sustainability" }),
              /* @__PURE__ */ e("p", { className: "text-neutral-600 text-sm leading-relaxed mb-6", children: "By enhancing the efficiency of cement hydration, Graphacrete allows for a significant reduction in cement usage—the primary driver of concrete's carbon footprint." }),
              /* @__PURE__ */ t("ul", { className: "space-y-3", children: [
                /* @__PURE__ */ t("li", { className: "flex items-center text-sm text-neutral-700", children: [
                  /* @__PURE__ */ e("div", { className: "w-1.5 h-1.5 bg-green-500 rounded-full mr-3" }),
                  "Lower CO₂ Emissions"
                ] }),
                /* @__PURE__ */ t("li", { className: "flex items-center text-sm text-neutral-700", children: [
                  /* @__PURE__ */ e("div", { className: "w-1.5 h-1.5 bg-green-500 rounded-full mr-3" }),
                  "LEED Credit Points"
                ] }),
                /* @__PURE__ */ t("li", { className: "flex items-center text-sm text-neutral-700", children: [
                  /* @__PURE__ */ e("div", { className: "w-1.5 h-1.5 bg-green-500 rounded-full mr-3" }),
                  "Green Building Certified"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "p-8 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-400 transition-colors", children: [
              /* @__PURE__ */ e("h3", { className: "text-lg font-bold text-neutral-900 mb-2", children: "Durability" }),
              /* @__PURE__ */ e("p", { className: "text-neutral-600 text-sm", children: "45% lower water permeability protects against chloride ingress and freeze-thaw cycles." })
            ] }),
            /* @__PURE__ */ t("div", { className: "p-8 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-400 transition-colors", children: [
              /* @__PURE__ */ e("h3", { className: "text-lg font-bold text-neutral-900 mb-2", children: "Workability" }),
              /* @__PURE__ */ e("p", { className: "text-neutral-600 text-sm", children: "Maintains excellent flow and pumpability without segregation, even at reduced water ratios." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("section", { id: "impact", className: "py-8", children: [
          /* @__PURE__ */ e(k, { number: "02", title: "The Economic Edge", theme: "light", className: "mb-8" }),
          /* @__PURE__ */ t("p", { className: "text-neutral-600 leading-relaxed mb-8 max-w-2xl", children: [
            "Graphacrete delivers value beyond performance. NABL-certified M-20 tests show ",
            /* @__PURE__ */ e("strong", { children: "40 kg/m³ cement saved" }),
            " per cubic metre while achieving higher actual 28-day strength (29 MPa vs 25 MPa control). M-30 tests show the admixture pushing equivalent 28-day strength to 49.5 MPa — enabling significant grade upgrades."
          ] }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8", children: [
            { label: "Cement Saved (M-20)", value: "40 kg/m³", sub: "331 vs 371 kg/m³ · NABL Certified" },
            { label: "Strength Advantage (M-20)", value: "+16%", sub: "29 MPa actual vs 25 MPa est. (control)" },
            { label: "M-30 ACT Strength", value: "49.5 MPa", sub: "65% above M-30 minimum · NABL Certified" }
          ].map((n, o) => /* @__PURE__ */ t("div", { className: "p-6 bg-neutral-50 border border-neutral-200 rounded-xl", children: [
            /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wide mb-2", children: n.label }),
            /* @__PURE__ */ e("div", { className: "text-3xl font-display font-medium text-neutral-900 mb-1", children: n.value }),
            /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500", children: n.sub })
          ] }, o)) }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-6", children: [
            {
              label: "Cost Optimisation",
              headline: "5–20% cost saving",
              desc: "Same target grade — reduce cement by 20–30%, offset with Graphacrete. Net material cost drops immediately.",
              accent: "bg-green-50 border-green-200 text-green-700",
              tag: "Same Grade"
            },
            {
              label: "Strength Upgrade",
              headline: "M30 → M50 performance",
              desc: "Pour M30 concrete with Graphacrete and achieve M50 equivalent compressive strength — NABL certified.",
              accent: "bg-neutral-900 border-neutral-700 text-white",
              tag: "NABL Certified"
            },
            {
              label: "Premium HPC",
              headline: "Cost-neutral vs M50",
              desc: "Graphene HPC delivers M50-class strength at a similar or lower lifecycle cost than conventional M50.",
              accent: "bg-blue-50 border-blue-200 text-blue-700",
              tag: "Best Lifecycle"
            }
          ].map((n, o) => /* @__PURE__ */ t("div", { className: `p-6 rounded-2xl border ${n.accent}`, children: [
            /* @__PURE__ */ e("span", { className: `inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-3 ${o === 1 ? "bg-white/10 text-neutral-300" : "bg-neutral-900/10"}`, children: n.tag }),
            /* @__PURE__ */ e("h4", { className: "text-sm font-bold uppercase tracking-wide mb-1 opacity-70", children: n.label }),
            /* @__PURE__ */ e("p", { className: `text-xl font-display font-medium mb-2 ${o === 1 ? "text-green-400" : ""}`, children: n.headline }),
            /* @__PURE__ */ e("p", { className: `text-sm leading-relaxed ${o === 1 ? "text-neutral-400" : "opacity-70"}`, children: n.desc })
          ] }, o)) }),
          /* @__PURE__ */ e("div", { className: "mt-6 text-center", children: /* @__PURE__ */ e(L, { to: "/contact", children: /* @__PURE__ */ e(K, { variant: "secondary", theme: "light", children: "Get a Custom Quote" }) }) })
        ] })
      ] }) })
    },
    {
      id: "benefits",
      label: "Benefits & ROI",
      content: /* @__PURE__ */ e(Ce, { fallback: /* @__PURE__ */ e(De, {}), children: /* @__PURE__ */ t("div", { className: "space-y-16 mt-12", children: [
        /* @__PURE__ */ t("section", { className: "rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 text-white p-8 md:p-12 overflow-hidden relative shadow-2xl border border-neutral-800", children: [
          /* @__PURE__ */ t("div", { className: "relative z-10 grid md:grid-cols-3 gap-8 md:divide-x md:divide-neutral-800", children: [
            /* @__PURE__ */ t("div", { className: "md:pr-8", children: [
              /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium mb-2", children: "Economic Impact" }),
              /* @__PURE__ */ e("p", { className: "text-neutral-400 text-sm leading-relaxed", children: "Graphacrete delivers immediate material savings while extending asset lifecycles, resulting in a significantly lower Total Cost of Ownership." })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex flex-col justify-center px-4", children: [
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-500 uppercase tracking-wider mb-1", children: "Cement Reduction" }),
              /* @__PURE__ */ e("div", { className: "text-4xl font-display font-medium text-green-400", children: "20-30%" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 mt-1", children: "Direct material cost savings" })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex flex-col justify-center pl-4", children: [
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-500 uppercase tracking-wider mb-1", children: "Lifecycle Value" }),
              /* @__PURE__ */ e("div", { className: "text-4xl font-display font-medium text-white", children: "2.5x" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 mt-1", children: "Extended service life" })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" })
        ] }),
        /* @__PURE__ */ t("section", { className: "border border-neutral-200 rounded-2xl overflow-hidden shadow-sm bg-white", children: [
          /* @__PURE__ */ e("div", { className: "mb-0", children: /* @__PURE__ */ e(k, { number: "01", title: "Cost & ROI Calculator", theme: "light", className: "px-6 pt-6" }) }),
          /* @__PURE__ */ e("div", { className: "p-6 border-b border-neutral-200 flex justify-between items-center bg-neutral-50/50", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-white", children: /* @__PURE__ */ e(Ve, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("h4", { className: "font-medium text-neutral-900", children: "Interactive Yield Model" }),
              /* @__PURE__ */ e("p", { className: "text-xs text-neutral-500", children: "Calculate your project-specific savings" })
            ] })
          ] }) }),
          /* @__PURE__ */ e("div", { className: "p-0", children: /* @__PURE__ */ e(Ce, { fallback: /* @__PURE__ */ e(De, {}), children: /* @__PURE__ */ e(
            Tl,
            {
              productName: rt.productName,
              defaultInputs: rt.defaultInputs,
              secondaryInputs: rt.secondaryInputs,
              calculations: rt.calculations,
              impactMetrics: rt.impactMetrics,
              theme: "light"
            }
          ) }) })
        ] }),
        /* @__PURE__ */ t("section", { children: [
          /* @__PURE__ */ t("div", { className: "mb-6", children: [
            /* @__PURE__ */ e(k, { number: "02", title: "Per-m³ Cost Breakdown", theme: "light" }),
            /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 mt-2", children: "NABL-certified: M30 + Graphacrete achieves M50 compressive strength at a net ₹3,830/m³ saving vs standard M50." })
          ] }),
          /* @__PURE__ */ e(Ce, { fallback: /* @__PURE__ */ e(De, {}), children: /* @__PURE__ */ e(Bl, { theme: "light" }) })
        ] }),
        /* @__PURE__ */ t("section", { className: "space-y-8", children: [
          /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow", children: [
            /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(k, { number: "03", title: "LCOE Analysis", theme: "light" }) }),
            /* @__PURE__ */ e(Ce, { fallback: /* @__PURE__ */ e(De, {}), children: /* @__PURE__ */ e(
              Rl,
              {
                productName: Ye.productName,
                timeframe: Ye.timeframe,
                traditionalSolution: Ye.traditionalSolution,
                productSolution: Ye.productSolution,
                breakdown: Ye.breakdown,
                highlights: Ye.highlights,
                theme: "light"
              }
            ) })
          ] }),
          /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow", children: [
            /* @__PURE__ */ t("div", { className: "mb-6", children: [
              /* @__PURE__ */ e(k, { number: "04", title: "Compound Savings", theme: "light" }),
              /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 mt-2", children: "Cumulative savings over the asset lifespan excluding initial construction gains." })
            ] }),
            /* @__PURE__ */ e(
              Il,
              {
                productName: wa.productName,
                savingsPerUnit: wa.savingsPerUnit,
                volumeOptions: wa.volumeOptions,
                theme: "light"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e("section", { className: "bg-neutral-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden", children: /* @__PURE__ */ t("div", { className: "relative z-10 space-y-12", children: [
          /* @__PURE__ */ t("div", { className: "max-w-3xl", children: [
            /* @__PURE__ */ e(k, { number: "05", title: "Carbon Credit Ledger", theme: "dark", className: "mb-6" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-400 leading-relaxed mb-6", children: "Every ton of Graphacrete poured generates verifiable carbon credits through cement reduction and extended durability." }),
            /* @__PURE__ */ e(K, { variant: "secondary", theme: "dark", className: "w-fit", children: "Download EPD Report" })
          ] }),
          /* @__PURE__ */ e("div", { className: "w-full", children: /* @__PURE__ */ e(
            Gl,
            {
              productName: ka.productName,
              impacts: ka.impacts,
              carbonCredits: ka.carbonCredits,
              theme: "dark"
            }
          ) })
        ] }) })
      ] }) })
    },
    {
      id: "howItWorks",
      label: "How It Works",
      content: /* @__PURE__ */ e(Ce, { fallback: /* @__PURE__ */ e(De, {}), children: /* @__PURE__ */ t("div", { className: "space-y-16 mt-12", children: [
        /* @__PURE__ */ t("section", { className: "rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 text-white p-8 md:p-12 overflow-hidden relative shadow-2xl border border-neutral-800", children: [
          /* @__PURE__ */ t("div", { className: "relative z-10 grid md:grid-cols-3 gap-8 md:divide-x md:divide-neutral-800", children: [
            /* @__PURE__ */ t("div", { className: "md:pr-8", children: [
              /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium mb-2", children: "Construction Integrated" }),
              /* @__PURE__ */ e("p", { className: "text-neutral-400 text-sm leading-relaxed", children: "Graphacrete integrates seamlessly into standard batching protocols. No specialized equipment, just superior performance delivered on-site." })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex flex-col justify-center px-4", children: [
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ e(tn, { className: "w-4 h-4 text-neutral-500" }),
                /* @__PURE__ */ e("div", { className: "text-sm text-neutral-500 uppercase tracking-wider", children: "Implementation" })
              ] }),
              /* @__PURE__ */ e("div", { className: "text-3xl font-display font-medium text-white", children: "< 2 Weeks" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 mt-1", children: "From trial to full pour" })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex flex-col justify-center pl-4", children: [
              /* @__PURE__ */ t("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ e(an, { className: "w-4 h-4 text-neutral-500" }),
                /* @__PURE__ */ e("div", { className: "text-sm text-neutral-500 uppercase tracking-wider", children: "Site Support" })
              ] }),
              /* @__PURE__ */ e("div", { className: "text-3xl font-display font-medium text-blue-400", children: "Full-Service" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 mt-1", children: "On-site technical team" })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" })
        ] }),
        /* @__PURE__ */ t("section", { className: "bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm", children: [
          /* @__PURE__ */ e("div", { className: "p-8 border-b border-neutral-100", children: /* @__PURE__ */ e(k, { number: "01", title: "Implementation Process", theme: "light" }) }),
          /* @__PURE__ */ e("div", { className: "p-0", children: /* @__PURE__ */ e(
            Dl,
            {
              steps: $l,
              title: "Phase-by-Phase Rollout",
              theme: "light"
            }
          ) })
        ] }),
        /* @__PURE__ */ t("section", { className: "bg-neutral-900 rounded-3xl border border-neutral-800 overflow-hidden shadow-2xl text-white relative", children: [
          /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-blue-900/10 pointer-events-none" }),
          /* @__PURE__ */ t("div", { className: "relative z-10 p-8 md:p-12", children: [
            /* @__PURE__ */ t("div", { className: "md:w-2/3 mb-12", children: [
              /* @__PURE__ */ e(k, { number: "02", title: "Performance Pilot", theme: "dark", className: "mb-4" }),
              /* @__PURE__ */ e("p", { className: "text-neutral-400", children: "Validate Graphacrete's performance in your specific mix design before full-scale deployment. Our technical team guides you through every step of the 30-day program." })
            ] }),
            /* @__PURE__ */ e(
              Al,
              {
                productName: Rt.productName,
                pilotDetails: Rt.pilotDetails,
                benefits: Rt.benefits,
                pricing: Rt.pricing,
                theme: "dark"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ t("section", { className: "bg-white border border-neutral-200 rounded-3xl p-8 md:p-12 shadow-sm", children: [
          /* @__PURE__ */ e("div", { className: "mb-8", children: /* @__PURE__ */ e(k, { number: "03", title: "Scale Up Roadmap", theme: "light" }) }),
          /* @__PURE__ */ e(
            El,
            {
              productName: Br.productName,
              stages: Br.stages,
              theme: "light"
            }
          )
        ] })
      ] }) })
    },
    {
      id: "technical",
      label: "Technical Specs",
      content: /* @__PURE__ */ e(Ce, { fallback: /* @__PURE__ */ e(De, {}), children: /* @__PURE__ */ t("div", { className: "space-y-24 mt-12", children: [
        /* @__PURE__ */ t("section", { className: "max-w-3xl", children: [
          /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-medium text-neutral-900 mb-4", children: "Material Specifications" }),
          /* @__PURE__ */ e("p", { className: "text-lg text-neutral-600 leading-relaxed", children: "Engineered at the atomic level, our graphene nano-platelets offer consistent, verified properties ensuring reliable performance in every batch." })
        ] }),
        /* @__PURE__ */ t("section", { children: [
          /* @__PURE__ */ e(k, { number: "01", title: "Physical Properties", theme: "light", subtitle: "High-purity graphene specifications.", className: "mb-12" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4", children: [
            { label: "Purity", value: ">99%", unit: "Carbon" },
            { label: "Thickness", value: "5-10", unit: "nm" },
            { label: "Lateral Size", value: "~20", unit: "µm" },
            { label: "Surface Area", value: "200", unit: "m²/g" },
            { label: "Bulk Density", value: "0.12", unit: "g/cm³" }
          ].map((n, o) => /* @__PURE__ */ t("div", { className: "p-6 bg-white border border-neutral-200 rounded-xl hover:border-neutral-400 transition-colors", children: [
            /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase font-semibold mb-2", children: n.label }),
            /* @__PURE__ */ t("div", { className: "text-3xl font-display font-medium text-neutral-900", children: [
              n.value,
              /* @__PURE__ */ e("span", { className: "text-sm text-neutral-400 ml-1", children: n.unit })
            ] })
          ] }, o)) })
        ] }),
        /* @__PURE__ */ e("section", { className: "bg-neutral-900 text-white rounded-2xl p-8 md:p-12 overflow-hidden relative", children: /* @__PURE__ */ t("div", { className: "relative z-10", children: [
          /* @__PURE__ */ e(k, { number: "02", title: "Performance Benchmarks", theme: "dark", subtitle: "Validated concrete enhancement metrics.", className: "mb-12" }),
          /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16", children: [
            /* @__PURE__ */ e(Et, { label: "Dosage", value: "0.05%", subtext: "Ultra-low addition" }),
            /* @__PURE__ */ e(Et, { label: "Strength Gain", value: "+50%", subtext: "Compressive" }),
            /* @__PURE__ */ e(Et, { label: "Permeability", value: "-45%", subtext: "Water reduction" }),
            /* @__PURE__ */ e(Et, { label: "Cement Saving", value: "20%", subtext: "Target reduction" })
          ] }),
          /* @__PURE__ */ t("div", { className: "mt-12 border-t border-neutral-800 pt-10", children: [
            /* @__PURE__ */ e("p", { className: "text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6", children: "Performance vs Standard RCC" }),
            /* @__PURE__ */ e("div", { className: "overflow-x-auto", children: /* @__PURE__ */ t("table", { className: "w-full text-sm min-w-[500px]", children: [
              /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ t("tr", { className: "border-b border-neutral-800", children: [
                /* @__PURE__ */ e("th", { className: "text-left py-2 pr-6 font-semibold text-neutral-500 text-xs uppercase tracking-wider", children: "Parameter" }),
                /* @__PURE__ */ e("th", { className: "text-center py-2 px-4 font-semibold text-neutral-500 text-xs uppercase tracking-wider", children: "Normal RCC" }),
                /* @__PURE__ */ e("th", { className: "text-center py-2 px-4 font-semibold text-green-400 text-xs uppercase tracking-wider", children: "Graphacrete" })
              ] }) }),
              /* @__PURE__ */ e("tbody", { className: "divide-y divide-neutral-800", children: [
                { param: "Compressive Strength", rcc: "Standard", graph: "Up to +50%", highlight: !0 },
                { param: "Cement Usage", rcc: "100%", graph: "70–80%", highlight: !1 },
                { param: "Crack Resistance", rcc: "Medium", graph: "Very High", highlight: !1 },
                { param: "Durability", rcc: "30–50 yrs", graph: "50–100 yrs", highlight: !1 },
                { param: "Cost / m³", rcc: "Base", graph: "±0 to +15%", highlight: !1 },
                { param: "Life-cycle Cost", rcc: "High", graph: "Low", highlight: !0 }
              ].map((n, o) => /* @__PURE__ */ t("tr", { children: [
                /* @__PURE__ */ e("td", { className: "py-3 pr-6 font-medium text-neutral-200", children: n.param }),
                /* @__PURE__ */ e("td", { className: "py-3 px-4 text-center text-neutral-400", children: n.rcc }),
                /* @__PURE__ */ e("td", { className: `py-3 px-4 text-center font-semibold ${n.highlight ? "text-green-400" : "text-green-300"}`, children: n.graph })
              ] }, o)) })
            ] }) })
          ] })
        ] }) }),
        /* @__PURE__ */ t("section", { children: [
          /* @__PURE__ */ e(k, { number: "03", title: "Downloads", theme: "light", className: "mb-6" }),
          /* @__PURE__ */ e(
            Fl,
            {
              productName: Ca.productName,
              specifications: Ca.specifications,
              documents: Ca.documents,
              theme: "light"
            }
          )
        ] }),
        /* @__PURE__ */ e(
          Wl,
          {
            productName: _r.productName,
            comparisonData: _r,
            theme: "light"
          }
        )
      ] }) })
    },
    {
      id: "deepDive",
      label: "Deep Dive",
      content: /* @__PURE__ */ e(Ce, { fallback: /* @__PURE__ */ e(De, {}), children: /* @__PURE__ */ t("div", { className: "space-y-24 mt-12", children: [
        /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e(
          Ll,
          {
            productName: It.productName,
            marketData: It.marketData,
            industries: It.industries,
            growthMetrics: It.growthMetrics,
            theme: "light"
          }
        ) }),
        /* @__PURE__ */ t("section", { className: "bg-neutral-50 p-8 md:p-12 rounded-2xl border border-neutral-200", children: [
          /* @__PURE__ */ e("div", { className: "mb-8", children: /* @__PURE__ */ e(k, { number: "02", title: "Industry Applications", theme: "light" }) }),
          /* @__PURE__ */ e(
            Hl,
            {
              productName: Or.productName,
              industries: Or.industries,
              theme: "light"
            }
          )
        ] }),
        /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e(
          zl,
          {
            productName: Vr.productName,
            sections: Vr.sections,
            theme: "light"
          }
        ) }),
        /* @__PURE__ */ t("section", { className: "bg-neutral-900 text-white p-8 md:p-12 rounded-2xl", children: [
          /* @__PURE__ */ e(k, { number: "04", title: "Global Impact", theme: "dark", className: "mb-8" }),
          /* @__PURE__ */ e(
            jl,
            {
              productName: Gt.productName,
              nationalData: Gt.nationalData,
              internationalData: Gt.internationalData,
              stats: Gt.stats,
              theme: "dark"
            }
          )
        ] })
      ] }) })
    }
  ];
  return /* @__PURE__ */ t("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ e(
      fe,
      {
        category: "Construction",
        title: r.pageHeader.title,
        subtitle: r.pageHeader.subtitle
      }
    ),
    /* @__PURE__ */ e(ea, { tabs: i, defaultTab: 0 })
  ] });
}, Ol = {
  hero: {
    title: "Engineering polymers with graphene strength.",
    subtitle: "HD-G-PE enhances HDPE with graphene reinforcement for higher strength, improved thermal stability, and better barrier performance.",
    primaryButtonText: "Request Technical Data",
    secondaryButtonText: "Explore Use Cases"
  },
  pageHeader: {
    title: "HD-G-PE",
    subtitle: "Graphene-reinforced polymer enhancer for next-generation pipes, films, and industrial packaging applications."
  }
}, Pa = {
  defaultInputs: Ee({
    annualProduction: {
      label: "Annual Production (Tons)",
      logSlider: !0,
      min: 10,
      max: 1e4,
      default: 500,
      unit: "tons",
      ticks: [10, 100, 500, 2e3, 1e4]
    },
    dosagePercent: {
      label: "HD-G-PE Dosage",
      min: 0.5,
      max: 2,
      step: 0.1,
      unit: "%",
      default: 0.5
    },
    application: {
      label: "Application Type",
      type: "select",
      options: [
        { value: "pipes", label: "Pipes & Fittings" },
        { value: "packaging", label: "Films & Packaging" },
        { value: "molding", label: "Injection Molding" }
      ],
      default: "pipes"
    }
  }, me("HD-G-PE")?.defaultInputs),
  secondaryInputs: Ee({
    analysisPeriod: {
      label: "Analysis Period",
      type: "buttongroup",
      options: [
        { value: 1, label: "1 yr" },
        { value: 3, label: "3 yr" },
        { value: 5, label: "5 yr" }
      ],
      default: 3
    },
    qualityReturnRate: {
      label: "Current Defect / Return Rate",
      min: 0.5,
      max: 5,
      step: 0.5,
      unit: "%",
      default: 2
    }
  }, me("HD-G-PE")?.secondaryInputs),
  calculations: (r) => {
    const i = me("HD-G-PE")?.constants || {}, {
      annualProduction: n,
      dosagePercent: o,
      application: a,
      analysisPeriod: s = 3,
      qualityReturnRate: d = 2
    } = r, m = i.masterbatchPricePerKg ?? 1200, p = i.basePolymerCostPerTon ?? 1e5, c = o / 100 * 1e3, g = c * m, b = n * g, x = i.appMap ?? {
      pipes: { premiumPerTon: 12e3, downgaugeFactor: 0, label: "Pipes & Fittings" },
      packaging: { premiumPerTon: 0, downgaugeFactor: 0.15, label: "Films & Packaging" },
      molding: { premiumPerTon: 15e3, downgaugeFactor: 0.1, label: "Injection Molding" }
    }, w = x[a] || x.pipes, N = p * w.downgaugeFactor, h = w.premiumPerTon + N, l = h - g, S = l * n, T = d / 100, R = i.defectReductionFactor ?? 0.6, P = p * T * R, M = P * n, f = l + P, E = S + M, j = S > 0 && b > 0 ? Math.round(S / b * 100) : null, W = S > 0 ? Math.ceil(b / S * 12) : null, O = W !== null ? W <= 1 ? "< 1 month" : `${W} months` : "Reduce dosage", F = Array.from({ length: s + 1 }, (V, C) => ({
      year: C === 0 ? "Start" : `Yr ${C}`,
      netMargin: Math.round(S * C),
      allIn: Math.round(E * C)
    })), G = n * w.downgaugeFactor, B = i.co2KgPerKgHdpe ?? 1.8, re = Math.round(G * B);
    return {
      additiveCostPerTon: Math.round(g),
      annualAdditiveCost: Math.round(b),
      masterbatchPricePerKg: m,
      dosageKgPerTon: parseFloat(c.toFixed(1)),
      // e.g. 5.0 kg/ton
      annualAdditiveKg: Math.round(c * n),
      // total kg/yr
      grossBenefitPerTon: Math.round(h),
      premiumPerTon: w.premiumPerTon,
      downgaugeSavingsPerTon: Math.round(N),
      netMarginPerTon: Math.round(l),
      netMarginSavingsTotal: Math.round(S),
      returnsSavingsPerTon: Math.round(P),
      annualReturnsSavings: Math.round(M),
      allInSavingsPerTon: Math.round(f),
      allInSavingsTotal: Math.round(E),
      roiPercentage: j,
      paybackLabel: O,
      paybackMonths: W,
      projectionData: F,
      materialSavedTons: Math.round(G),
      co2SavedTons: re,
      appLabel: w.label,
      analysisPeriod: s,
      roiMultiple: S > 0 && b > 0 ? parseFloat((S / b).toFixed(1)) : null,
      periodNetGain: Math.round(S * s),
      periodAllIn: Math.round(E * s)
    };
  }
}, Vl = [
  {
    title: "Master Batch Preparation",
    description: "HD-G-PE masterbatch contains uniformly dispersed graphene nano-platelets ready for polymer processing.",
    duration: "Pre-prepared",
    icon: et
  },
  {
    title: "Polymer Blending",
    description: "Add HD-G-PE masterbatch (0.5-2%) during compounding or extrusion. Mix thoroughly for uniform distribution.",
    duration: "Standard process",
    icon: Ie
  },
  {
    title: "Nano-Reinforcement",
    description: "Graphene platelets integrate into polymer matrix, creating nano-reinforcement network throughout material.",
    duration: "During processing",
    icon: q
  },
  {
    title: "Enhanced Performance",
    description: "Final product exhibits +30% strength, 20× elongation, superior UV stability, and extended lifespan.",
    duration: "Product lifetime",
    icon: z
  }
], jt = {
  productName: "HD-G-PE",
  pilotDetails: [
    {
      title: "Pilot Quantity Supply",
      description: "50-100 kg HD-G-PE masterbatch for trials"
    },
    {
      title: "Technical Consultation",
      description: "Dosage optimization and process integration guidance"
    },
    {
      title: "Sample Production",
      description: "Create test batches with varying dosages"
    },
    {
      title: "Performance Testing",
      description: "Mechanical testing vs. control samples"
    },
    {
      title: "Comprehensive Analysis",
      description: "Detailed report with recommendations and ROI projections"
    }
  ],
  benefits: [
    {
      title: "Risk-Free Testing",
      description: "Validate in your production process",
      icon: q
    },
    {
      title: "Performance Proof",
      description: "Verify strength and durability gains",
      icon: z
    },
    {
      title: "Cost Validation",
      description: "Confirm value proposition",
      icon: I
    }
  ],
  pricing: {
    cost: "From ₹60,000",
    description: "Pilot including technical support and testing",
    note: "* Customized for your polymer type and application"
  }
}, Ft = {
  productName: "HD-G-PE",
  marketData: {
    tamSize: "₹45,000 Cr",
    cagr: "8% CAGR",
    targetCustomers: "2,000+",
    marketShare: "1-2%"
  },
  industries: [
    {
      id: "pipes",
      name: "HDPE Pipe Manufacturing",
      description: "Enhance pipe strength, pressure rating, and lifespan for municipal and industrial applications.",
      keyPoints: [
        "Growing infrastructure demand",
        "Premium pricing for enhanced pipes",
        "Longer warranty periods possible"
      ],
      marketSize: "₹18,000 Cr",
      revenuePotential: "₹180-360 Cr",
      growthRate: "10% CAGR"
    },
    {
      id: "packaging",
      name: "Films & Packaging",
      description: "Stronger, thinner films for packaging applications with material savings.",
      keyPoints: [
        "Growing packaging industry",
        "Downgauging opportunities",
        "Improved barrier properties"
      ],
      marketSize: "₹15,000 Cr",
      revenuePotential: "₹150-300 Cr",
      growthRate: "12% CAGR"
    },
    {
      id: "injection",
      name: "Injection Molding",
      description: "Enhanced mechanical properties for automotive, consumer goods, and industrial parts.",
      keyPoints: [
        "Quality differentiation",
        "Lightweight but strong components",
        "Premium product positioning"
      ],
      marketSize: "₹10,000 Cr",
      revenuePotential: "₹100-200 Cr",
      growthRate: "7% CAGR"
    }
  ],
  growthMetrics: [
    {
      title: "Polymer Market",
      description: "Indian polymer consumption",
      value: "15 MT by 2025"
    },
    {
      title: "Infrastructure Spend",
      description: "Driving pipe demand",
      value: "₹111 lakh Cr"
    },
    {
      title: "Packaging Growth",
      description: "Films and packaging",
      value: "10% CAGR"
    }
  ]
}, Je = {
  productName: "HD-G-PE",
  timeframe: "5 years",
  traditionalSolution: {
    breakdown: {
      "Base Polymer Cost": 45e5,
      "Product Returns": 45e4,
      "Quality Issues": 28e4,
      "Warranty Claims": 32e4
    },
    total: 555e4
  },
  productSolution: {
    breakdown: {
      "Base Polymer + HD-G-PE": 468e4,
      "Product Returns": 18e4,
      "Quality Issues": 8e4,
      "Warranty Claims": 1e5
    },
    total: 504e4,
    paybackPeriod: "6-9 months"
  },
  breakdown: [
    {
      category: "Raw Material Cost",
      description: "HD-G-PE additive cost",
      traditional: 45e5,
      withProduct: 468e4
    },
    {
      category: "Product Returns",
      description: "Reduced failures",
      traditional: 45e4,
      withProduct: 18e4
    },
    {
      category: "Quality Issues",
      description: "Better consistency",
      traditional: 28e4,
      withProduct: 8e4
    },
    {
      category: "Warranty Claims",
      description: "Extended product life",
      traditional: 32e4,
      withProduct: 1e5
    }
  ],
  highlights: [
    { label: "Quality Cost Reduction", value: "-60%", color: "green" },
    { label: "Lifespan Multiplier", value: "2.5x", color: "blue" }
  ]
}, Sa = {
  productName: "HD-G-PE",
  savingsPerUnit: {
    calculation: (r) => Math.round(1e3)
  },
  volumeOptions: {
    label: "Annual Polymer Production",
    min: 10,
    max: 1e4,
    step: 10,
    unit: "tons",
    default: 500
  }
}, Ma = {
  productName: "HD-G-PE",
  impacts: [
    { type: "waste", value: "+20%", label: "Longer Life" },
    { type: "energy", value: "30%", label: "Strength Gain" },
    { type: "carbon", value: "UV Stable", label: "Durability" },
    { type: "waste", value: "-15%", label: "Material Waste" }
  ],
  carbonCredits: {
    value: "Reduced Waste",
    description: "Extended product life reduces replacement frequency"
  }
}, Ht = {
  productName: "HD-G-PE",
  certifications: [
    {
      name: "Lab Tested",
      description: "Comprehensive mechanical and durability testing",
      certNumber: "LT-2024"
    },
    {
      name: "ISO 9001:2015",
      description: "Quality management certified",
      certNumber: "ISO-9001"
    },
    {
      name: "Material Safety",
      description: "Food-grade polymer compatible",
      certNumber: "FDA-COMPATIBLE"
    }
  ],
  testingStandards: [
    {
      name: "Tensile Strength",
      description: "ASTM D638 testing for tensile properties",
      code: "Ref: ASTM D638"
    },
    {
      name: "Elongation at Break",
      description: "Flexibility and toughness measurement",
      code: "Ref: ASTM D638"
    },
    {
      name: "UV Stability",
      description: "Weathering resistance testing",
      code: "Ref: ASTM G154"
    },
    {
      name: "Thermal Stability",
      description: "Heat resistance and processing stability",
      code: "Ref: ASTM D648"
    }
  ],
  qualityMetrics: [
    { value: "+30%", label: "Strength" },
    { value: "20×", label: "Elongation" },
    { value: "+20%", label: "Lifespan" },
    { value: "Superior", label: "UV Stability" }
  ]
}, qr = {
  productName: "HD-G-PE",
  stages: [
    {
      type: "trial",
      title: "Lab-Scale Trial",
      description: "Small batch testing with mechanical characterization",
      duration: "2-3 weeks",
      investment: "₹60,000",
      details: [
        "50-100 kg trial quantity",
        "Dosage optimization",
        "Mechanical testing"
      ]
    },
    {
      type: "validation",
      title: "Production Trial",
      description: "Full-scale production runs with quality monitoring",
      duration: "4-6 weeks",
      investment: "₹2-4 lakhs",
      details: [
        "500-1000 kg production",
        "Process integration",
        "Performance validation"
      ]
    },
    {
      type: "scale",
      title: "Commercial Production",
      description: "Regular production with HD-G-PE integration",
      duration: "3-6 months",
      investment: "Volume pricing",
      details: [
        "Multi-ton orders",
        "Supply chain integration",
        "Quality assurance"
      ]
    },
    {
      type: "deployment",
      title: "Full Integration",
      description: "HD-G-PE as standard additive in formulations",
      duration: "Ongoing",
      investment: "Bulk contracts",
      details: [
        "Long-term supply agreements",
        "Technical support",
        "Performance guarantees"
      ]
    }
  ]
}, zt = {
  productName: "HD-G-PE",
  nationalData: {
    locations: [
      { city: "Ahmedabad", state: "Gujarat", projects: 8 },
      { city: "Mumbai", state: "Maharashtra", projects: 6 },
      { city: "Bangalore", state: "Karnataka", projects: 4 },
      { city: "Delhi NCR", state: "Delhi", projects: 5 },
      { city: "Hyderabad", state: "Telangana", projects: 3 }
    ],
    marketPenetration: "0.4%",
    penetrationDescription: "Early adoption in polymer manufacturing",
    partnerships: "18+",
    partnershipDescription: "Polymer manufacturers and compounders",
    reach: "5 states",
    reachDescription: "Key manufacturing hubs"
  },
  internationalData: {
    locations: [
      { city: "Dubai", state: "UAE", projects: 2 }
    ],
    marketPenetration: "0.1%",
    penetrationDescription: "Initial international presence",
    partnerships: "4+",
    partnershipDescription: "Regional polymer manufacturers",
    reach: "1 country",
    reachDescription: "Middle East trials"
  },
  stats: [
    { value: "26+", label: "Active Projects" },
    { value: "12,000+", label: "Tons Enhanced" },
    { value: "6", label: "States & Countries" },
    { value: "22+", label: "Partner Companies" }
  ]
}, $a = {
  productName: "HD-G-PE",
  specifications: [
    { parameter: "Form", value: "Masterbatch pellets", testMethod: "Visual" },
    { parameter: "GNP Content", value: "5-15%", testMethod: "Material composition" },
    { parameter: "Recommended Dosage", value: "0.5-2.0%", testMethod: "Application guide" },
    { parameter: "Tensile Strength Gain", value: "+30%", testMethod: "ASTM D638" },
    { parameter: "Elongation Improvement", value: "20× baseline", testMethod: "ASTM D638" },
    { parameter: "Processing Temperature", value: "180-240°C", testMethod: "Processing guide" },
    { parameter: "Carrier Polymer", value: "HDPE", testMethod: "Material spec" },
    { parameter: "Shelf Life", value: "12 months", testMethod: "Stability testing" }
  ],
  documents: [
    {
      title: "Technical Data Sheet",
      description: "Complete specifications and properties",
      fileSize: "2.3 MB",
      format: "PDF",
      filename: "HDGPE-TDS.pdf",
      url: "#"
    },
    {
      title: "Processing Guide",
      description: "Compounding and extrusion guidelines",
      fileSize: "3.5 MB",
      format: "PDF",
      filename: "HDGPE-Processing-Guide.pdf",
      url: "#"
    },
    {
      title: "Test Results",
      description: "Independent lab testing reports",
      fileSize: "4.1 MB",
      format: "PDF",
      filename: "HDGPE-Test-Report.pdf",
      url: "#"
    },
    {
      title: "Safety Data Sheet",
      description: "Material safety information",
      fileSize: "1.0 MB",
      format: "PDF",
      filename: "HDGPE-SDS.pdf",
      url: "#"
    }
  ]
}, Kr = {
  productName: "HD-G-PE",
  industries: [
    {
      name: "HDPE Pipe Manufacturing",
      icon: "manufacturing",
      description: "Enhanced pipes with higher pressure ratings and extended service life.",
      useCases: [
        { title: "Water Supply Pipes", description: "Municipal water distribution" },
        { title: "Gas Distribution", description: "High-pressure gas lines" },
        { title: "Industrial Pipes", description: "Chemical and process industries" }
      ],
      benefits: [
        { title: "+30% Strength", description: "Higher pressure ratings" },
        { title: "+20% Lifespan", description: "Extended warranty periods" },
        { title: "Premium Pricing", description: "Quality differentiation" }
      ],
      metrics: [
        { value: "+30%", label: "Strength" },
        { value: "+20%", label: "Life" },
        { value: "₹1,200/ton", label: "Value Add" },
        { value: "98%", label: "Quality" }
      ]
    },
    {
      name: "Films & Packaging",
      icon: "packaging",
      description: "Stronger, thinner films with material savings and improved barrier properties.",
      useCases: [
        { title: "Stretch Films", description: "Pallet wrapping and bundling" },
        { title: "Shopping Bags", description: "Retail and grocery bags" },
        { title: "Agricultural Films", description: "Greenhouse and mulch films" }
      ],
      benefits: [
        { title: "Downgauging", description: "15-20% material savings" },
        { title: "Better Performance", description: "Tear and puncture resistance" },
        { title: "Sustainability", description: "Less material, same performance" }
      ],
      metrics: [
        { value: "+35%", label: "Tear Strength" },
        { value: "-18%", label: "Material Use" },
        { value: "₹800/ton", label: "Savings" },
        { value: "2.5×", label: "Puncture Resist" }
      ]
    },
    {
      name: "Injection Molded Parts",
      icon: "manufacturing",
      description: "Enhanced mechanical properties for automotive, consumer, and industrial components.",
      useCases: [
        { title: "Automotive Parts", description: "Interior and under-hood components" },
        { title: "Consumer Goods", description: "Appliances and housewares" },
        { title: "Industrial Components", description: "Gears, housings, and brackets" }
      ],
      benefits: [
        { title: "Lightweight Design", description: "Strength without weight" },
        { title: "Cost Reduction", description: "Material efficiency" },
        { title: "Quality Upgrade", description: "Premium product positioning" }
      ],
      metrics: [
        { value: "+32%", label: "Impact Strength" },
        { value: "+28%", label: "Tensile" },
        { value: "-12%", label: "Weight" },
        { value: "₹1,500/ton", label: "Premium" }
      ]
    }
  ]
}, Ur = {
  productName: "HD-G-PE",
  sections: [
    {
      icon: "mechanism",
      title: "Nano-Reinforcement Mechanism",
      summary: "How graphene platelets enhance polymer properties",
      content: [
        "HD-G-PE introduces graphene nano-platelets (GNPs) into the polymer matrix. These 2D carbon structures have extraordinary properties: 200× stronger than steel, yet atomically thin and flexible.",
        "During processing (extrusion or injection molding), GNPs uniformly disperse throughout the polymer melt. They align along flow direction, creating a nano-reinforcement network.",
        "This network bridges polymer chains, increases crystallinity, and provides mechanical reinforcement at the molecular level - similar to rebar in concrete but at nanoscale."
      ],
      keyPoints: [
        {
          title: "Molecular Bridging",
          description: "GNPs connect polymer chains"
        },
        {
          title: "Load Transfer",
          description: "Stress distributed across network"
        },
        {
          title: "Crystallinity",
          description: "Nucleation sites increase crystalline content"
        }
      ],
      technicalData: {
        "GNP Loading": "0.5-2.0% by weight",
        "Aspect Ratio": "500-1000",
        Dispersion: ">95% uniform"
      }
    },
    {
      icon: "properties",
      title: "Enhanced Properties",
      summary: "Measurable improvements in polymer performance",
      content: [
        "+30% tensile and flexural strength allows for lightweighting or higher load-bearing capacity. This is achieved with minimal dosage (0.5-2%), making it cost-effective.",
        "20× elongation improvement means dramatically better toughness and impact resistance. Products become more flexible and less brittle.",
        "Superior UV stability from graphene's UV-absorbing properties extends outdoor service life by 20%+. This is critical for pipes, films, and outdoor applications.",
        "Enhanced thermal conductivity improves heat dissipation and dimensional stability during processing."
      ],
      keyPoints: [
        {
          title: "Mechanical Strength",
          description: "+30% tensile, flexural, and impact"
        },
        {
          title: "Flexibility",
          description: "20× elongation at break"
        },
        {
          title: "Durability",
          description: "+20% service life, superior UV"
        },
        {
          title: "Processing",
          description: "Better thermal stability"
        }
      ],
      technicalData: {
        "Tensile Strength": "+30% (ASTM D638)",
        Elongation: "20× baseline",
        "UV Stability": "+20% life",
        "Thermal Conductivity": "3× improvement"
      }
    },
    {
      icon: "science",
      title: "Processing & Compatibility",
      summary: "Easy integration into existing polymer processing",
      content: [
        "HD-G-PE comes as ready-to-use masterbatch pellets. No special equipment or process changes required - simply add to hopper during compounding or direct processing.",
        "Compatible with all standard polymer processing methods: extrusion, injection molding, blow molding, film blowing. Processing temperatures and conditions remain unchanged.",
        "Dosage optimization is straightforward. Start at 0.5%, test mechanical properties, adjust as needed. Most applications find optimal performance at 0.5-1.5%."
      ],
      keyPoints: [
        {
          title: "Masterbatch Form",
          description: "Ready-to-use pellets"
        },
        {
          title: "Drop-In Solution",
          description: "No process changes needed"
        },
        {
          title: "Universal Compatibility",
          description: "All polymer processing methods"
        }
      ],
      technicalData: {
        "Dosage Range": "0.5-2.0%",
        "Processing Temp": "180-240°C",
        Compatibility: "PE, PP, PS, ABS",
        Equipment: "Standard processing"
      }
    }
  ]
}, As = () => {
  const r = Ol, i = [
    {
      id: "overview",
      label: "Overview",
      content: /* @__PURE__ */ t("div", { className: "space-y-24 mt-24", children: [
        /* @__PURE__ */ e(
          ht,
          {
            title: r.hero.title,
            subtitle: r.hero.subtitle,
            category: "Polymer Engineering",
            categoryColor: "bg-blue-500",
            images: [
              "/images/pipeline/studio/HD-G-PE.png",
              "/images/hdgpe_lifecycle_lab_making.png",
              "/images/hdgpe_lifecycle_lab_testing.png",
              "/images/hdgpe_lifecycle_factory_extrusion.png",
              "/images/hdgpe_lifecycle_factory_molding.png",
              "/images/hdgpe_lifecycle_result.png"
            ],
            buttons: [
              { text: r.hero.primaryButtonText, link: "/contact", variant: "primary" },
              { text: r.hero.secondaryButtonText, link: "#specs", variant: "secondary" }
            ]
          }
        ),
        /* @__PURE__ */ t("section", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ e("div", { className: "lg:col-span-1 h-full min-h-[300px]", children: /* @__PURE__ */ e(
            ta,
            {
              images: [
                "/images/pipeline/studio/HD-G-PE.png",
                "/images/hdgpe-studio.png"
              ],
              alt: "HD-G-PE Studio View",
              className: "h-full",
              imageFit: "object-contain",
              innerClassName: "bg-white p-4"
            }
          ) }),
          /* @__PURE__ */ e("div", { className: "lg:col-span-2 grid grid-cols-2 gap-4", children: [
            { label: "Tensile Strength", value: "+40%", desc: "vs Standard HDPE" },
            { label: "Weight", value: "-20%", desc: "Material Reduction" },
            { label: "Durability", value: "2.5x", desc: "Extended Lifespan" },
            { label: "Barrier", value: "100x", desc: "Gas Permeability" }
          ].map((n, o) => /* @__PURE__ */ t("div", { className: "p-8 bg-neutral-50 border border-neutral-200 rounded-xl hover:shadow-md transition-shadow flex flex-col justify-center", children: [
            /* @__PURE__ */ e("div", { className: "text-4xl font-display font-medium text-neutral-900 mb-2", children: n.value }),
            /* @__PURE__ */ e("div", { className: "text-sm font-bold text-neutral-900 uppercase tracking-wide mb-1", children: n.label }),
            /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500", children: n.desc })
          ] }, o)) })
        ] }),
        /* @__PURE__ */ t("section", { className: "py-8", children: [
          /* @__PURE__ */ e(k, { number: "01", title: "Material Reinvented", theme: "light", subtitle: "Surpassing the physical limits of traditional polymers." }),
          /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-12", children: [
            /* @__PURE__ */ t("div", { className: "md:col-span-2 p-8 bg-neutral-900 text-white rounded-2xl relative overflow-hidden group min-h-[320px] flex flex-col justify-end", children: [
              /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity", children: /* @__PURE__ */ e(X, { size: 140, strokeWidth: 1 }) }),
              /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium mb-4 relative z-10", children: "Molecular Reinforcement" }),
              /* @__PURE__ */ e("p", { className: "text-neutral-400 leading-relaxed max-w-lg relative z-10", children: 'Graphene platelets act as "nano-rebar" within the polyethylene matrix. This prevents crack propagation and vastly improves load-bearing capacity without compromising flexibility.' })
            ] }),
            /* @__PURE__ */ t("div", { className: "md:row-span-2 p-8 bg-neutral-50 border border-neutral-200 rounded-2xl flex flex-col", children: [
              /* @__PURE__ */ e("div", { className: "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6", children: /* @__PURE__ */ e(rn, { className: "w-6 h-6" }) }),
              /* @__PURE__ */ e("h3", { className: "text-xl font-display font-medium mb-3 text-neutral-900", children: "Lightweighting" }),
              /* @__PURE__ */ e("p", { className: "text-neutral-600 text-sm leading-relaxed mb-6", children: "Achieve the same structural integrity with 20-30% less material wall thickness. Critical for automotive and aerospace fuel efficiency." }),
              /* @__PURE__ */ t("ul", { className: "space-y-3 mt-auto", children: [
                /* @__PURE__ */ t("li", { className: "flex items-center text-sm text-neutral-700", children: [
                  /* @__PURE__ */ e("div", { className: "w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" }),
                  "Reduced Shipping Costs"
                ] }),
                /* @__PURE__ */ t("li", { className: "flex items-center text-sm text-neutral-700", children: [
                  /* @__PURE__ */ e("div", { className: "w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" }),
                  "Lower CO2 Footprint"
                ] }),
                /* @__PURE__ */ t("li", { className: "flex items-center text-sm text-neutral-700", children: [
                  /* @__PURE__ */ e("div", { className: "w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" }),
                  "Material Savings"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ t("div", { className: "p-8 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-400 transition-colors", children: [
              /* @__PURE__ */ t("h3", { className: "text-lg font-bold text-neutral-900 mb-2 flex items-center gap-2", children: [
                /* @__PURE__ */ e(xe, { className: "w-5 h-5 text-neutral-500" }),
                "Corrosion Proof"
              ] }),
              /* @__PURE__ */ e("p", { className: "text-neutral-600 text-sm", children: "Impervious to salts, acids, and aggressive chemicals that degrade standard plastics and metals." })
            ] }),
            /* @__PURE__ */ t("div", { className: "p-8 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-400 transition-colors", children: [
              /* @__PURE__ */ t("h3", { className: "text-lg font-bold text-neutral-900 mb-2 flex items-center gap-2", children: [
                /* @__PURE__ */ e(di, { className: "w-5 h-5 text-neutral-500" }),
                "100% Recyclable"
              ] }),
              /* @__PURE__ */ e("p", { className: "text-neutral-600 text-sm", children: "Fully compatible with existing HDPE recycling streams. Upcycles the quality of recycled feedstock." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t("section", { className: "py-8", children: [
          /* @__PURE__ */ e(k, { number: "02", title: "Industrial Applications", theme: "light" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-8", children: ["Gas Pipelines", "Fuel Tanks", "Geomembranes", "Offshore Cables", "Packaging", "Ballistics"].map((n, o) => /* @__PURE__ */ e("div", { className: "p-6 border border-neutral-200 rounded-lg text-center hover:bg-neutral-50 transition-colors", children: /* @__PURE__ */ e("div", { className: "font-medium text-neutral-900", children: n }) }, o)) })
        ] }),
        /* @__PURE__ */ e("section", { className: "py-8", children: /* @__PURE__ */ e("div", { className: "bg-neutral-900 rounded-2xl p-8 md:p-12 text-white", children: /* @__PURE__ */ t("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium mb-4", children: "Sustainability at Scale" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-400 leading-relaxed mb-8", children: "By reducing material usage and extending product lifecycles, HD-G-PE represents a massive shift towards sustainable industrial design." }),
            /* @__PURE__ */ e(K, { variant: "secondary", theme: "dark", children: "View Sustainability Report" })
          ] }),
          /* @__PURE__ */ t("div", { className: "grid grid-cols-2 gap-8", children: [
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-4xl font-display font-medium text-blue-400 mb-1", children: "500k+" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wide", children: "Tons Material Saved" })
            ] }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-4xl font-display font-medium text-blue-400 mb-1", children: "30%" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wide", children: "Lower CO2 Emissions" })
            ] })
          ] })
        ] }) }) })
      ] })
    },
    {
      id: "benefits",
      label: "Benefits & ROI",
      content: /* @__PURE__ */ t("div", { className: "space-y-16 mt-12", children: [
        /* @__PURE__ */ t("section", { className: "rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 text-white p-8 md:p-12 overflow-hidden relative shadow-2xl border border-neutral-800", children: [
          /* @__PURE__ */ t("div", { className: "relative z-10 grid md:grid-cols-3 gap-8 md:divide-x md:divide-neutral-800", children: [
            /* @__PURE__ */ t("div", { className: "md:pr-8", children: [
              /* @__PURE__ */ e("h3", { className: "text-2xl font-display font-medium mb-2", children: "The Economics of Longevity" }),
              /* @__PURE__ */ e("p", { className: "text-neutral-400 text-sm leading-relaxed", children: "HD-G-PE redefines infrastructure economics by enabling thinner walls without sacrificing strength, and extending asset lifecycles by decades." })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex flex-col justify-center px-4", children: [
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-500 uppercase tracking-wider mb-1", children: "Material Savings" }),
              /* @__PURE__ */ e("div", { className: "text-4xl font-display font-medium text-blue-400", children: "20-30%" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 mt-1", children: "Reduced wall thickness" })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex flex-col justify-center pl-4", children: [
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-500 uppercase tracking-wider mb-1", children: "Lifecycle Multiplier" }),
              /* @__PURE__ */ e("div", { className: "text-4xl font-display font-medium text-white", children: "2.5x" }),
              /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 mt-1", children: "Vs Standard HDPE" })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" })
        ] }),
        /* @__PURE__ */ t("section", { className: "border border-neutral-200 rounded-2xl overflow-hidden shadow-sm bg-white", children: [
          /* @__PURE__ */ e("div", { className: "p-6 border-b border-neutral-200 flex justify-between items-center bg-neutral-50/50", children: /* @__PURE__ */ t("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-white", children: /* @__PURE__ */ e(Ve, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("h4", { className: "font-medium text-neutral-900", children: "Material Cost Calculator" }),
              /* @__PURE__ */ e("p", { className: "text-xs text-neutral-500", children: "Analyze input savings per metric ton" })
            ] })
          ] }) }),
          /* @__PURE__ */ e("div", { className: "p-0", children: /* @__PURE__ */ e(
            ml,
            {
              defaultInputs: Pa.defaultInputs,
              secondaryInputs: Pa.secondaryInputs,
              calculations: Pa.calculations,
              theme: "light"
            }
          ) })
        ] }),
        /* @__PURE__ */ t("section", { children: [
          /* @__PURE__ */ t("div", { className: "mb-6", children: [
            /* @__PURE__ */ e(k, { number: "02", title: "Multi-Property Performance Analysis", theme: "light" }),
            /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 mt-2", children: "See how HD-G-PE enhances every mechanical property simultaneously — elongation, durability, strength — across your target application." })
          ] }),
          /* @__PURE__ */ e(ul, {})
        ] }),
        /* @__PURE__ */ t("section", { className: "space-y-8", children: [
          /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow", children: [
            /* @__PURE__ */ e("div", { className: "mb-6", children: /* @__PURE__ */ e(k, { number: "03", title: "Lifecycle Cost Analysis", theme: "light" }) }),
            /* @__PURE__ */ e(
              Oa,
              {
                productName: Je.productName,
                timeframe: Je.timeframe,
                traditionalSolution: Je.traditionalSolution,
                productSolution: Je.productSolution,
                breakdown: Je.breakdown,
                highlights: Je.highlights,
                theme: "light"
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { className: "bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow", children: [
            /* @__PURE__ */ t("div", { className: "mb-6", children: [
              /* @__PURE__ */ e(k, { number: "04", title: "Infrastructure Savings", theme: "light" }),
              /* @__PURE__ */ e("p", { className: "text-sm text-neutral-500 mt-2", children: "For utilities and municipalities, doubled lifespan means halved replacement bond costs." })
            ] }),
            /* @__PURE__ */ e(
              Ya,
              {
                productName: Sa.productName,
                savingsPerUnit: Sa.savingsPerUnit,
                volumeOptions: Sa.volumeOptions,
                theme: "light"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e("section", { className: "bg-neutral-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden", children: /* @__PURE__ */ t("div", { className: "relative z-10 grid md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e(k, { number: "05", title: "Carbon Credit Ledger", theme: "dark", className: "mb-6" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-400 leading-relaxed mb-6", children: "Lighter products mean reduced transport emissions, while extended durability lowers the demand for virgin plastic production." }),
            /* @__PURE__ */ e(K, { variant: "secondary", theme: "dark", className: "w-fit", children: "View EPD Data" })
          ] }),
          /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
            Ja,
            {
              productName: Ma.productName,
              impacts: Ma.impacts,
              carbonCredits: Ma.carbonCredits,
              theme: "dark"
            }
          ) })
        ] }) })
      ] })
    },
    {
      id: "howItWorks",
      label: "How It Works",
      content: /* @__PURE__ */ t("div", { className: "space-y-24 mt-12", children: [
        /* @__PURE__ */ t("section", { className: "max-w-3xl", children: [
          /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-medium text-neutral-900 mb-4", children: "Masterbatch Integration" }),
          /* @__PURE__ */ e("p", { className: "text-lg text-neutral-600 leading-relaxed", children: "Provided as a drop-in masterbatch pellet. Manufacturers can use existing extruders and injection molding equipment with zero capex modifications." })
        ] }),
        /* @__PURE__ */ t("section", { children: [
          /* @__PURE__ */ e("div", { className: "mb-12", children: /* @__PURE__ */ e(k, { number: "01", title: "Manufacturing Process", theme: "light" }) }),
          /* @__PURE__ */ e(Wa, { steps: Vl, title: "HD-G-PE Production", theme: "light" })
        ] }),
        /* @__PURE__ */ e("section", { className: "bg-neutral-50 rounded-2xl border border-neutral-200 p-8 md:p-12", children: /* @__PURE__ */ t("div", { className: "space-y-12", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e(k, { number: "02", title: "Validation Pilot", theme: "light", className: "mb-6" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-600 mb-6 max-w-3xl", children: "Run a small batch with our technical team on-site. We will fine-tune the extruder heat/pressure profiles for optimal graphene dispersion." }),
            /* @__PURE__ */ e(
              Ba,
              {
                productName: jt.productName,
                pilotDetails: jt.pilotDetails,
                benefits: jt.benefits,
                pricing: jt.pricing,
                theme: "light"
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "pt-8 border-t border-neutral-200", children: /* @__PURE__ */ e(
            Ua,
            {
              productName: qr.productName,
              stages: qr.stages,
              theme: "light"
            }
          ) })
        ] }) })
      ] })
    },
    {
      id: "technical",
      label: "Technical Specs",
      content: /* @__PURE__ */ t("div", { className: "space-y-24 mt-12", children: [
        /* @__PURE__ */ t("section", { className: "max-w-3xl", children: [
          /* @__PURE__ */ e("h3", { className: "text-3xl font-display font-medium text-neutral-900 mb-4", children: "Engineering Data" }),
          /* @__PURE__ */ e("p", { className: "text-lg text-neutral-600 leading-relaxed", children: "Validated by third-party materials labs. Outperforms standard HDPE across all major mechanical and thermal metrics." })
        ] }),
        /* @__PURE__ */ t("section", { id: "specs", children: [
          /* @__PURE__ */ e(k, { number: "01", title: "Material Properties", theme: "light", className: "mb-12" }),
          /* @__PURE__ */ e("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4", children: [
            { label: "Tensile Strength", value: "38", unit: "MPa" },
            { label: "Elongation", value: "800", unit: "%" },
            { label: "Density", value: "0.96", unit: "g/cm³" },
            { label: "Melt Index", value: "0.5", unit: "g/10m" },
            { label: "Flex Modulus", value: "1.4", unit: "GPa" }
          ].map((n, o) => /* @__PURE__ */ t("div", { className: "p-6 bg-white border border-neutral-200 rounded-xl hover:border-neutral-400 transition-colors", children: [
            /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase font-semibold mb-2", children: n.label }),
            /* @__PURE__ */ t("div", { className: "text-3xl font-display font-medium text-neutral-900", children: [
              n.value,
              /* @__PURE__ */ e("span", { className: "text-sm text-neutral-400 ml-1", children: n.unit })
            ] })
          ] }, o)) })
        ] }),
        /* @__PURE__ */ t("section", { className: "space-y-24", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e(k, { number: "03", title: "Certifications", theme: "light", className: "mb-6" }),
            /* @__PURE__ */ e(
              Za,
              {
                productName: Ht.productName,
                certifications: Ht.certifications,
                testingStandards: Ht.testingStandards,
                qualityMetrics: Ht.qualityMetrics,
                theme: "light"
              }
            )
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e(k, { number: "04", title: "Downloads", theme: "light", className: "mb-6" }),
            /* @__PURE__ */ e(
              _a,
              {
                productName: $a.productName,
                specifications: $a.specifications,
                documents: $a.documents,
                theme: "light"
              }
            )
          ] })
        ] })
      ] })
    },
    {
      id: "deepDive",
      label: "Deep Dive",
      content: /* @__PURE__ */ t("div", { className: "space-y-24 mt-12", children: [
        /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e(
          Qa,
          {
            productName: Ft.productName,
            marketData: Ft.marketData,
            industries: Ft.industries,
            growthMetrics: Ft.growthMetrics,
            theme: "light"
          }
        ) }),
        /* @__PURE__ */ t("section", { className: "bg-neutral-50 p-8 md:p-12 rounded-2xl border border-neutral-200", children: [
          /* @__PURE__ */ e("div", { className: "mb-8", children: /* @__PURE__ */ e(k, { number: "02", title: "Industry Applications", theme: "light" }) }),
          /* @__PURE__ */ e(
            qa,
            {
              productName: Kr.productName,
              industries: Kr.industries,
              theme: "light"
            }
          )
        ] }),
        /* @__PURE__ */ e("section", { children: /* @__PURE__ */ e(
          Ka,
          {
            productName: Ur.productName,
            sections: Ur.sections,
            theme: "light"
          }
        ) }),
        /* @__PURE__ */ t("section", { className: "bg-neutral-900 text-white p-8 md:p-12 rounded-2xl", children: [
          /* @__PURE__ */ e(k, { number: "04", title: "Global Impact", theme: "dark", className: "mb-8" }),
          /* @__PURE__ */ e(
            Va,
            {
              productName: zt.productName,
              nationalData: zt.nationalData,
              internationalData: zt.internationalData,
              stats: zt.stats,
              theme: "dark"
            }
          )
        ] })
      ] })
    }
  ];
  return /* @__PURE__ */ t("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ e(
      fe,
      {
        category: "Material Science",
        title: r.pageHeader.title,
        subtitle: r.pageHeader.subtitle
      }
    ),
    /* @__PURE__ */ e(ea, { tabs: i, defaultTab: 0 })
  ] });
}, _l = {
  pageHeader: {
    title: "Innovation Pipeline",
    subtitle: "Next-generation graphene-enabled technologies under development — from R&D pipeline to pilot trials."
  }
}, he = {
  graphenode: ["/images/pipeline/application-icon/graphenode-icon.png", "/images/pipeline/studio/Graphenode.png", "/images/pipeline/studio/graphenodes.png", "/images/pipeline/studio/Graphenodes-2.png"],
  rustene: ["/images/pipeline/application-icon/rustene_studio.png", "/images/pipeline/application-icon/rustene_hero.png", "/images/pipeline/studio/Rustene.png"],
  graphyre: ["/images/pipeline/application-icon/graphyre_studio.png", "/images/pipeline/studio/Graphyre.png", "/images/pipeline/studio/Graphyre-2.png"],
  graphosite: ["/images/pipeline/application-icon/graphosite_studio.png", "/images/pipeline/studio/Graphosite.png"],
  thermaphene: ["/images/pipeline/application-icon/thermaphene-icon.png", "/images/pipeline/application-icon/thermaphene_hero.png", "/images/pipeline/studio/thermophene.png", "/images/pipeline/studio/thermophene-2.png"],
  armophene: ["/images/pipeline/application-icon/armophene_studio.png", "/images/pipeline/studio/Armophene.png", "/images/pipeline/studio/Armophene-2.png"],
  hydrogen: ["/images/pipeline/application-icon/hydrogen_membrane_studio.png", "/images/pipeline/studio/Gryogen.png", "/images/pipeline/studio/HydrogenMembranes.png"],
  desalination: ["/images/pipeline/application-icon/mariphene.png", "/images/pipeline/studio/mariphene.png", "/images/desalination_hero.png"],
  glass: ["/images/pipeline/application-icon/graphene_glass_fibres_studio.png", "/images/pipeline/studio/Glasephene.png", "/images/pipeline/studio/Glasephene-2.png", "/images/pipeline/studio/Glasephene-3.png"],
  battery: ["/images/pipeline/application-icon/battery_storage_studio.png", "/images/pipeline/studio/Voltaphene.png"],
  aerowater: ["/images/pipeline/application-icon/atmospheric_harvesting_studio.png", "/images/pipeline/studio/aerophenter_studio.png", "/images/pipeline/studio/AtmosphericHarvesting-2.png"]
}, Qr = [
  {
    id: "pipeline",
    title: "Products in Pipeline",
    description: "Advanced material solutions addressing critical industrial challenges.",
    items: [
      {
        id: "rustene",
        name: "Rustene",
        subtitle: "Anti-Corrosion Shield",
        description: "Graphene-based anti-rusting paint forms an ultra-thin barrier preventing corrosion and extending metal lifespan.",
        status: "Development",
        type: "R&D",
        icon: ke,
        image: he.rustene,
        specs: ["Ultra-thin Barrier", "Corrosion Prevention", "Metal Lifespan Extension"],
        impact: "Infrastructure Protection"
      },
      {
        id: "graphyre",
        name: "Graphyre",
        subtitle: "Reinforced Performance Tyres",
        description: "Graphene-reinforced composites delivering higher strength, lower rolling resistance, and extended service life.",
        status: "Development",
        type: "R&D",
        icon: ge,
        image: he.graphyre,
        specs: ["Reduced Rolling Resistance", "Enhanced Wear Life", "High Tensile Strength"],
        impact: "Automotive Efficiency"
      },
      {
        id: "graphosite",
        name: "Graphosite",
        subtitle: "Structural Composites",
        description: "Lightweight, high-strength graphene-reinforced fibres engineered for next-generation structural composites.",
        status: "Development",
        type: "R&D",
        icon: X,
        image: he.graphosite,
        specs: ["Lightweighting", "High Strength-to-Weight", "Structural Integrity"],
        impact: "Aerospace & Automotive"
      },
      {
        id: "thermaphene",
        name: "Thermaphene",
        subtitle: "Smart Thermal Fabrics",
        description: "Graphene-based heating solution enabling lightweight and high-performance winter wear.",
        status: "Development",
        type: "R&D",
        icon: Yt,
        image: he.thermaphene,
        specs: ["Rapid Heating", "Flexible Integration", "Lightweight Design"],
        impact: "Performance Apparel"
      },
      {
        id: "armophene",
        name: "Armophene",
        subtitle: "Next-Gen Ballistics",
        description: "Graphene-infused bulletproof jacket delivering lightweight, flexible armor with superior ballistic protection compared to Kevlar.",
        status: "Development",
        type: "R&D",
        icon: q,
        image: he.armophene,
        specs: ["High Kinetic Dissipation", "Superior to Kevlar", "Flexible Armor"],
        impact: "Defense & Security"
      },
      {
        id: "graphenode",
        name: "Graphenode",
        subtitle: "Nanoplatelet Electrode Material",
        description: "High-purity graphene nanoplatelet material (NRG series) engineered as a superior anode for lithium-ion batteries, supercapacitors, and conductive inks.",
        status: "Development",
        type: "R&D",
        icon: Pe,
        image: he.graphenode,
        specs: [">99% Purity", "NRG-70 & NRG-150 Grades", "5,000-Cycle Durability"],
        impact: "Energy Storage"
      }
    ]
  },
  {
    id: "pilots",
    title: "Field-Scale Pilot Trials",
    description: "Technologies currently undergoing real-world validation and commercial scaling.",
    items: [
      {
        id: "hydrogen",
        name: "Gryogen",
        subtitle: "Hydrogen Selection Membrane",
        description: "High-selectivity graphene membranes enabling efficient hydrogen separation and production with reduced energy losses.",
        status: "Pilot Trial",
        type: "Pilot",
        icon: ce,
        image: he.hydrogen,
        specs: ["High Selectivity", "Energy Efficient", "Pure H2 Separator"],
        impact: "Green Energy"
      },
      {
        id: "desalination",
        name: "Mariphene",
        subtitle: "Desalination Membrane",
        description: "Ultra-thin graphene membranes delivering high-flux, low-energy seawater desalination and industrial water purification.",
        status: "Pilot Trial",
        type: "Pilot",
        icon: ke,
        image: he.desalination,
        specs: ["High Flux", "Low Energy", "Salt Rejection"],
        impact: "Water Security"
      },
      {
        id: "aerowater",
        name: "Aerophenter",
        subtitle: "Atmospheric Harvesting",
        description: "Graphene membranes engineered to harvest atmospheric moisture and convert air into potable water efficiently.",
        status: "Pilot Trial",
        type: "Pilot",
        icon: ge,
        image: he.aerowater,
        specs: ["Moisture Harvesting", "Air-to-Water", "Energy Efficient"],
        impact: "Water Scarcity"
      },
      {
        id: "glassphen",
        name: "Glasphene",
        subtitle: "Reinforced Glass Fibres",
        description: "Graphene-reinforced glass fibres offering enhanced strength, durability, and multifunctional performance in composites.",
        status: "Pilot Trial",
        type: "Pilot",
        icon: X,
        image: he.glass,
        specs: ["Enhanced Strength", "Durability", "Multifunctional"],
        impact: "Materials Engineering"
      },
      {
        id: "voltagraphene",
        name: "Voltaphene",
        subtitle: "Energy Storage Systems",
        description: "Graphene-enabled battery storage systems delivering higher power density, faster response, and extended lifecycle.",
        status: "Pilot Trial",
        type: "Pilot",
        icon: Pe,
        image: he.battery,
        specs: ["High Power Density", "Fast Response", "Extended Lifecycle"],
        impact: "Energy Storage"
      }
    ]
  }
], Yr = [...Qr[0].items, ...Qr[1].items], ql = (r) => ({
  graphenode: "/products/pipeline/graphenode",
  rustene: "/products/pipeline/rustene",
  graphyre: "/products/pipeline/graphyre",
  graphosite: "/products/pipeline/graphosite",
  thermaphene: "/products/pipeline/thermaphene",
  armophene: "/products/pipeline/armophene",
  hydrogen: "/products/pipeline/hydrogen-membranes",
  desalination: "/products/pipeline/desalination-membranes",
  aerowater: "/products/pipeline/atmospheric-harvesting",
  glassphen: "/products/pipeline/graphene-glass-fibres",
  voltagraphene: "/products/pipeline/battery-storage"
})[r] || "/products/pipeline", Kl = ({ item: r, onClose: i }) => {
  if (!r) return null;
  const [n, o] = A(0), a = Array.isArray(r.image) ? r.image : r.image ? [r.image] : [], s = a.length > 1;
  return Me(() => {
    let d;
    return s && (d = setInterval(() => {
      o((m) => (m + 1) % a.length);
    }, 3e3)), () => clearInterval(d);
  }, [s, a.length]), /* @__PURE__ */ e(
    D.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 md:p-8",
      onClick: i,
      children: /* @__PURE__ */ t(
        D.div,
        {
          layoutId: `card-${r.id}`,
          className: "w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]",
          onClick: (d) => d.stopPropagation(),
          transition: { type: "spring", stiffness: 300, damping: 30 },
          children: [
            /* @__PURE__ */ t("div", { className: "w-full md:w-2/5 relative h-64 md:h-auto bg-neutral-900 overflow-hidden", children: [
              /* @__PURE__ */ t(D.div, { className: "absolute inset-0", layoutId: `image-container-${r.id}`, children: [
                /* @__PURE__ */ e(de, { mode: "wait", children: a.length > 0 ? /* @__PURE__ */ e(
                  D.img,
                  {
                    src: a[n],
                    alt: r.name,
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.5 },
                    className: "absolute inset-0 w-full h-full object-cover opacity-80"
                  },
                  n
                ) : /* @__PURE__ */ e("div", { className: "w-full h-full flex items-center justify-center bg-neutral-800", children: /* @__PURE__ */ e(r.icon, { size: 64, className: "text-neutral-700" }) }) }),
                /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" }),
                s && /* @__PURE__ */ e("div", { className: "absolute top-4 left-4 flex gap-1 z-20", children: a.map((d, m) => /* @__PURE__ */ e(
                  "div",
                  {
                    className: `w-1.5 h-1.5 rounded-full transition-colors ${m === n ? "bg-white" : "bg-white/30"}`
                  },
                  m
                )) })
              ] }),
              /* @__PURE__ */ t("div", { className: "absolute bottom-0 left-0 p-8 w-full z-10", children: [
                /* @__PURE__ */ e(D.div, { layoutId: `status-${r.id}`, className: `inline-flex px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border mb-4 ${r.status === "Pilot Trial" ? "bg-purple-500/20 border-purple-500/30 text-purple-200" : "bg-blue-500/20 border-blue-500/30 text-blue-200"}`, children: r.status }),
                /* @__PURE__ */ e(D.h2, { layoutId: `title-${r.id}`, className: "text-4xl font-display font-medium text-white mb-2", children: r.name }),
                /* @__PURE__ */ e(D.p, { layoutId: `subtitle-${r.id}`, className: "text-neutral-400", children: r.subtitle })
              ] }),
              /* @__PURE__ */ e(
                "button",
                {
                  onClick: i,
                  className: "absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors z-20",
                  children: /* @__PURE__ */ e(Qt, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ t(
              D.div,
              {
                className: "w-full md:w-3/5 p-8 md:p-12 overflow-y-auto bg-white custom-scrollbar",
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.2, duration: 0.4 },
                children: [
                  /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-8 pb-8 border-b border-neutral-100", children: [
                    /* @__PURE__ */ e("div", { className: "p-3 bg-neutral-50 rounded-lg border border-neutral-100", children: /* @__PURE__ */ e(r.icon, { className: "w-6 h-6 text-neutral-900" }) }),
                    /* @__PURE__ */ t("div", { children: [
                      /* @__PURE__ */ e("div", { className: "text-xs text-neutral-400 uppercase tracking-widest font-bold", children: "Project ID" }),
                      /* @__PURE__ */ e("div", { className: "text-lg font-mono text-neutral-900", children: r.id.toUpperCase() })
                    ] })
                  ] }),
                  /* @__PURE__ */ t("div", { className: "mb-10", children: [
                    /* @__PURE__ */ e("h3", { className: "text-sm font-bold text-neutral-900 uppercase tracking-wide mb-4", children: "Mission Brief" }),
                    /* @__PURE__ */ e("p", { className: "text-lg text-neutral-600 leading-relaxed font-light", children: r.description })
                  ] }),
                  /* @__PURE__ */ t("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10", children: [
                    /* @__PURE__ */ t("div", { children: [
                      /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4", children: "Technical Targets" }),
                      /* @__PURE__ */ e("ul", { className: "space-y-3", children: r.specs.map((d, m) => /* @__PURE__ */ t("li", { className: "flex items-center text-neutral-700 text-sm", children: [
                        /* @__PURE__ */ e("div", { className: "w-1.5 h-1.5 bg-green-500 rounded-full mr-3 shrink-0" }),
                        d
                      ] }, m)) })
                    ] }),
                    /* @__PURE__ */ t("div", { children: [
                      /* @__PURE__ */ e("h3", { className: "text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4", children: "Sector Impact" }),
                      /* @__PURE__ */ t("div", { className: "p-4 bg-neutral-900 rounded-xl text-white", children: [
                        /* @__PURE__ */ e("div", { className: "text-2xl font-display font-medium mb-1", children: r.impact }),
                        /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 uppercase tracking-wider", children: "Primary Application" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ t("div", { className: "pt-8 border-t border-neutral-100 flex justify-end", children: [
                    /* @__PURE__ */ e(K, { variant: "secondary", onClick: i, className: "mr-4", children: "Close View" }),
                    /* @__PURE__ */ e(L, { to: "/contact", children: /* @__PURE__ */ e(K, { variant: "primary", children: "Request Technical Sheet" }) })
                  ] })
                ]
              }
            )
          ]
        }
      )
    }
  );
}, Ul = ({ item: r, onClick: i }) => {
  const n = r.type === "Pilot", o = ql(r.id), [a, s] = A(0), d = We.useRef(null), m = Array.isArray(r.image) ? r.image : r.image ? [r.image] : [], p = m.length > 1, c = () => {
    p && (d.current = setInterval(() => {
      s((b) => (b + 1) % m.length);
    }, 1200));
  }, g = () => {
    clearInterval(d.current), s(0);
  };
  return Me(() => () => clearInterval(d.current), []), /* @__PURE__ */ e(L, { to: o, className: "block h-full", children: /* @__PURE__ */ t(
    D.div,
    {
      layout: !0,
      layoutId: `card-${r.id}`,
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
      className: "group relative h-full aspect-square rounded-3xl overflow-hidden cursor-pointer border border-neutral-200 bg-white hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col",
      whileHover: { y: -5 },
      onMouseEnter: c,
      onMouseLeave: g,
      children: [
        /* @__PURE__ */ t("div", { className: "absolute inset-0 bg-neutral-100", children: [
          /* @__PURE__ */ e(de, { mode: "wait", children: m.length > 0 ? /* @__PURE__ */ e(
            D.img,
            {
              src: m[a],
              alt: r.name,
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.5 },
              className: "absolute inset-0 w-full h-full object-cover p-8 group-hover:scale-105 transition-transform duration-700"
            },
            a
          ) : /* @__PURE__ */ e("div", { className: "w-full h-full flex items-center justify-center bg-neutral-100", children: /* @__PURE__ */ e(r.icon, { size: 64, className: "text-neutral-300" }) }) }),
          /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" }),
          p && /* @__PURE__ */ e("div", { className: "absolute top-4 right-4 flex gap-1 z-20", children: m.map((b, x) => /* @__PURE__ */ e(
            "div",
            {
              className: `w-1.5 h-1.5 rounded-full transition-colors ${x === a ? "bg-white" : "bg-white/30"}`
            },
            x
          )) })
        ] }),
        /* @__PURE__ */ t("div", { className: "relative z-10 h-full flex flex-col justify-end p-8", children: [
          /* @__PURE__ */ e("div", { className: "absolute top-6 left-6", children: /* @__PURE__ */ e(D.div, { layoutId: `status-${r.id}`, className: `px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border backdrop-blur-md ${n ? "bg-purple-500/80 border-purple-400 text-white" : "bg-blue-600/80 border-blue-400 text-white"}`, children: r.status }) }),
          /* @__PURE__ */ t("div", { className: "transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500", children: [
            /* @__PURE__ */ e(D.p, { layoutId: `subtitle-${r.id}`, className: "text-xs font-mono text-neutral-300 uppercase tracking-wide mb-2", children: r.subtitle }),
            /* @__PURE__ */ t("div", { className: "flex justify-between items-end", children: [
              /* @__PURE__ */ e(D.h3, { layoutId: `title-${r.id}`, className: "text-3xl font-display font-medium text-white mb-2", children: r.name }),
              /* @__PURE__ */ e("div", { className: "bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0", children: /* @__PURE__ */ e(le, { className: "text-white", size: 20 }) })
            ] })
          ] })
        ] })
      ]
    }
  ) });
}, Ls = () => {
  const r = _l, [i, n] = A("all"), [o, a] = A(null), s = i === "all" ? Yr : Yr.filter((d) => i === "r&d" ? d.type === "R&D" : d.type === "Pilot");
  return /* @__PURE__ */ t("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ e(
      fe,
      {
        category: "R&D",
        title: r.pageHeader.title,
        subtitle: r.pageHeader.subtitle
      }
    ),
    /* @__PURE__ */ e("div", { className: "sticky top-32 z-30 px-6 mb-12", children: /* @__PURE__ */ t("div", { className: "max-w-fit mx-auto bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl shadow-black/5 rounded-full p-1.5 flex items-center gap-1", children: [
      /* @__PURE__ */ e(
        "button",
        {
          onClick: () => n("all"),
          className: `px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${i === "all" ? "bg-neutral-900 text-white shadow-md" : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/50"}`,
          children: "All Projects"
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: () => n("r&d"),
          className: `px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${i === "r&d" ? "bg-blue-600 text-white shadow-md" : "text-neutral-500 hover:text-blue-600 hover:bg-blue-50"}`,
          children: "R&D Pipeline"
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          onClick: () => n("pilot"),
          className: `px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${i === "pilot" ? "bg-purple-600 text-white shadow-md" : "text-neutral-500 hover:text-purple-600 hover:bg-purple-50"}`,
          children: "Pilot Trials"
        }
      )
    ] }) }),
    /* @__PURE__ */ e("section", { className: "py-24 px-6 bg-neutral-50 min-h-[800px] border-t border-neutral-200", children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ t("div", { className: "flex items-center justify-between mb-12", children: [
        /* @__PURE__ */ e("h2", { className: "text-3xl font-display font-medium text-neutral-900", children: "Active Development" }),
        /* @__PURE__ */ t("div", { className: "text-sm text-neutral-500 font-mono", children: [
          s.length,
          " Projects Loaded"
        ] })
      ] }),
      /* @__PURE__ */ e(
        D.div,
        {
          layout: !0,
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
          children: /* @__PURE__ */ e(de, { children: s.map((d) => /* @__PURE__ */ e(Ul, { item: d, onClick: a }, d.id)) })
        }
      )
    ] }) }),
    /* @__PURE__ */ e(de, { children: o && /* @__PURE__ */ e(Kl, { item: o, onClose: () => a(null) }) }),
    /* @__PURE__ */ t("section", { className: "py-32 px-6 bg-white border-t border-neutral-200 relative overflow-hidden", children: [
      /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-50" }),
      /* @__PURE__ */ t("div", { className: "max-w-5xl mx-auto text-center relative z-10", children: [
        /* @__PURE__ */ t("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600 text-xs font-mono font-medium tracking-wider uppercase mb-8", children: [
          /* @__PURE__ */ e(nn, { className: "w-3 h-3" }),
          "R&D Partnership"
        ] }),
        /* @__PURE__ */ e("h2", { className: "text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-6", children: "Engineer The Future With Us" }),
        /* @__PURE__ */ e("p", { className: "text-xl text-neutral-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed", children: "Our R&D philosophy is built on iteration, validation, and scale. We don't just invent materials; we engineer solutions for the world's most complex problems." }),
        /* @__PURE__ */ t("div", { className: "flex justify-center gap-4", children: [
          /* @__PURE__ */ e(L, { to: "/partnership", children: /* @__PURE__ */ e(K, { variant: "primary", className: "px-8 py-4", children: "Partner With R&D" }) }),
          /* @__PURE__ */ e(L, { to: "/contact", children: /* @__PURE__ */ e(K, { variant: "secondary", className: "px-8 py-4", children: "Contact Labs" }) })
        ] })
      ] })
    ] })
  ] });
}, Jr = ({ children: r, className: i = "" }) => /* @__PURE__ */ e("div", { className: `grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)] ${i}`, children: r }), it = ({
  children: r,
  className: i = "",
  colSpan: n = 1,
  rowSpan: o = 1,
  theme: a = "light"
}) => {
  const s = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3"
  }, d = {
    1: "md:row-span-1",
    2: "md:row-span-2",
    3: "md:row-span-3"
  }, m = `${s[n] || "md:col-span-1"} ${d[o] || "md:row-span-1"}`;
  return /* @__PURE__ */ e("div", { className: `
            rounded-3xl border p-6 flex flex-col justify-between overflow-hidden relative group transition-all duration-500
            ${m} ${a === "dark" ? "bg-gradient-to-br from-neutral-900 via-neutral-900 to-black border-neutral-800/50 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)]" : "bg-gradient-to-br from-white to-neutral-50/30 border-neutral-200/70 text-neutral-900 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)]"} ${i}
        `, children: r });
}, Ql = ({
  images: r,
  alt: i,
  className: n = "",
  interval: o = 4e3,
  showGradient: a = !1,
  showDots: s = !0,
  showNavigation: d = !0,
  pauseOnHover: m = !0
}) => {
  const [p, c] = A(0), [g, b] = A(!1), x = r.length > 1, w = () => {
    c((l) => (l + 1) % r.length);
  }, N = () => {
    c((l) => (l - 1 + r.length) % r.length);
  }, h = (l) => {
    c(l);
  };
  return Me(() => {
    let l;
    return x && !g && (l = setInterval(() => {
      w();
    }, o)), () => clearInterval(l);
  }, [x, r.length, o, g, p]), /* @__PURE__ */ t(
    "div",
    {
      className: `relative overflow-hidden ${n}`,
      onMouseEnter: () => m && b(!0),
      onMouseLeave: () => m && b(!1),
      children: [
        /* @__PURE__ */ e(de, { mode: "wait", children: /* @__PURE__ */ e(
          D.img,
          {
            src: r[p],
            alt: `${i} - Image ${p + 1}`,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.5 },
            className: "absolute inset-0 w-full h-full object-cover"
          },
          p
        ) }),
        a && /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" }),
        x && d && /* @__PURE__ */ t(be, { children: [
          /* @__PURE__ */ e(
            "button",
            {
              onClick: N,
              className: "absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-lg transition-all opacity-0 hover:opacity-100 group-hover:opacity-100 z-20",
              "aria-label": "Previous image",
              children: /* @__PURE__ */ e(Bt, { className: "w-5 h-5 text-neutral-900" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: w,
              className: "absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full shadow-lg transition-all opacity-0 hover:opacity-100 group-hover:opacity-100 z-20",
              "aria-label": "Next image",
              children: /* @__PURE__ */ e(Ot, { className: "w-5 h-5 text-neutral-900" })
            }
          )
        ] }),
        x && s && /* @__PURE__ */ e("div", { className: "absolute top-4 right-4 flex gap-1.5 z-20", children: r.map((l, S) => /* @__PURE__ */ e(
          "button",
          {
            onClick: () => h(S),
            className: `w-2 h-2 rounded-full transition-all cursor-pointer ${S === p ? "bg-white scale-110" : "bg-white/40 hover:bg-white/60"}`,
            "aria-label": `Go to image ${S + 1}`
          },
          S
        )) })
      ]
    }
  );
}, Yl = ({ items: r = [], theme: i = "light", accentColor: n = "blue" }) => {
  const o = i === "dark", a = {
    blue: { dot: "bg-blue-600", ring: "ring-blue-100" },
    emerald: { dot: "bg-emerald-500", ring: "ring-emerald-100" },
    purple: { dot: "bg-purple-600", ring: "ring-purple-100" },
    slate: { dot: "bg-slate-700", ring: "ring-slate-200" }
  }, s = a[n] || a.blue;
  return /* @__PURE__ */ e("div", { className: "relative pl-8 border-l border-neutral-200 dark:border-neutral-800 space-y-12", children: r.map((d, m) => /* @__PURE__ */ t("div", { className: "relative", children: [
    /* @__PURE__ */ e("div", { className: `
                        absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 
                        ${d.status === "completed" ? "bg-emerald-500 border-white ring-2 ring-emerald-100" : d.status === "current" ? `${s.dot} border-white ring-2 ${s.ring} animate-pulse` : "bg-neutral-300 border-white"}
                    ` }),
    /* @__PURE__ */ t("div", { className: "flex flex-col sm:flex-row gap-2 sm:items-baseline", children: [
      /* @__PURE__ */ e("span", { className: "text-sm font-bold uppercase tracking-wider text-neutral-500", children: d.phase }),
      /* @__PURE__ */ e("h4", { className: `text-lg font-medium ${o ? "text-white" : "text-neutral-900"}`, children: d.title })
    ] }),
    /* @__PURE__ */ e("p", { className: `mt-2 text-base ${o ? "text-neutral-400" : "text-neutral-600"} max-w-lg`, children: d.description }),
    d.date && /* @__PURE__ */ t("span", { className: "mt-2 inline-block px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded font-medium", children: [
      "Target: ",
      d.date
    ] })
  ] }, m)) });
}, Jl = ({ steps: r = [], theme: i = "light", accentColor: n = "blue" }) => {
  const o = i === "dark", a = {
    blue: { bgLight: "bg-blue-50", textLight: "text-blue-600", textDark: "text-blue-400" },
    emerald: { bgLight: "bg-emerald-50", textLight: "text-emerald-600", textDark: "text-emerald-400" },
    purple: { bgLight: "bg-purple-50", textLight: "text-purple-600", textDark: "text-purple-400" },
    slate: { bgLight: "bg-slate-50", textLight: "text-slate-800", textDark: "text-slate-200" }
  }, s = a[n] || a.blue;
  return /* @__PURE__ */ e("div", { className: "flex flex-col md:flex-row gap-4 items-center justify-center py-8", children: r.map((d, m) => /* @__PURE__ */ t(We.Fragment, { children: [
    /* @__PURE__ */ t("div", { className: `
                        relative flex-1 p-6 rounded-2xl border text-center min-h-[160px] flex flex-col items-center justify-center
                        ${o ? "bg-neutral-900 border-neutral-800 text-white" : "bg-white border-neutral-200 text-neutral-900 shadow-sm"}
                    `, children: [
      /* @__PURE__ */ e("div", { className: `
                            w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl
                            ${o ? `bg-neutral-800 ${s.textDark}` : `${s.bgLight} ${s.textLight}`}
                        `, children: d.icon }),
      /* @__PURE__ */ e("h4", { className: "font-semibold mb-2", children: d.title }),
      /* @__PURE__ */ e("p", { className: `text-sm ${o ? "text-neutral-400" : "text-neutral-600"}`, children: d.description }),
      /* @__PURE__ */ t("div", { className: "absolute top-4 right-4 text-xs font-mono opacity-30", children: [
        "0",
        m + 1
      ] })
    ] }),
    m < r.length - 1 && /* @__PURE__ */ t("div", { className: `${o ? "text-neutral-700" : "text-neutral-300"}`, children: [
      /* @__PURE__ */ e(le, { className: "hidden md:block w-6 h-6" }),
      /* @__PURE__ */ e(ln, { className: "block md:hidden w-6 h-6" })
    ] })
  ] }, m)) });
}, ve = ({ data: r, customSections: i }) => {
  const {
    title: n,
    subtitle: o,
    category: a,
    heroImages: s,
    introduction: d,
    processFlow: m,
    features: p,
    gallery: c,
    timeline: g,
    applications: b,
    cta: x
  } = r, [w, N] = A(null);
  return /* @__PURE__ */ t("div", { className: "min-h-screen bg-white font-sans", children: [
    /* @__PURE__ */ t("div", { className: "max-w-[1400px] mx-auto px-6 pt-40 pb-20", children: [
      /* @__PURE__ */ e("div", { className: "mb-8", children: /* @__PURE__ */ t(
        L,
        {
          to: "/products/pipeline",
          className: "inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-brand-600 transition-colors group",
          children: [
            /* @__PURE__ */ e(sn, { className: "w-4 h-4 group-hover:-translate-x-1 transition-transform" }),
            /* @__PURE__ */ e("span", { children: "Back to Innovation Pipeline" })
          ]
        }
      ) }),
      /* @__PURE__ */ e(
        ht,
        {
          title: n,
          subtitle: o,
          category: a,
          categoryColor: "bg-brand-600 text-white",
          images: s,
          theme: "light",
          className: "h-[75vh] rounded-2xl overflow-hidden shadow-xl border border-neutral-200"
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "max-w-[1400px] mx-auto px-6 pb-20", children: [
      /* @__PURE__ */ e("section", { className: "mb-24", children: /* @__PURE__ */ t("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ t("div", { children: [
          /* @__PURE__ */ e(
            k,
            {
              number: "01",
              title: d.title,
              subtitle: d.subtitle
            }
          ),
          d.description.map((h, l) => /* @__PURE__ */ e(
            "p",
            {
              className: `text-lg text-neutral-600 leading-relaxed ${l < d.description.length - 1 ? "mb-6" : ""}`,
              children: h
            },
            l
          ))
        ] }),
        /* @__PURE__ */ e("div", { className: "relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-50", children: /* @__PURE__ */ e(
          Ql,
          {
            images: d.images,
            alt: `${n} Context`,
            className: "absolute inset-0 w-full h-full object-cover"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ t("section", { className: "mb-24", children: [
        /* @__PURE__ */ e(
          k,
          {
            number: "02",
            title: m.title,
            subtitle: m.subtitle
          }
        ),
        /* @__PURE__ */ e("div", { className: "bg-neutral-50 rounded-2xl p-8 md:p-12 border border-neutral-200", children: /* @__PURE__ */ e(
          Jl,
          {
            steps: m.steps.map((h) => ({
              icon: We.createElement(h.icon, { className: "w-6 h-6" }),
              title: h.title,
              description: h.description
            })),
            accentColor: "teal"
          }
        ) })
      ] }),
      /* @__PURE__ */ t("section", { className: "mb-24", children: [
        /* @__PURE__ */ e(
          k,
          {
            number: "03",
            title: p.title,
            subtitle: p.subtitle,
            accent: !0
          }
        ),
        /* @__PURE__ */ t(Jr, { children: [
          p.hero && /* @__PURE__ */ t(
            it,
            {
              colSpan: 2,
              rowSpan: 2,
              theme: "dark",
              className: "relative group overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 border border-brand-500",
              children: [
                /* @__PURE__ */ t("div", { className: "h-full flex flex-col justify-between relative z-10 p-8", children: [
                  /* @__PURE__ */ e("div", { className: "w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center shadow-lg", children: p.hero.icon && We.createElement(p.hero.icon, { className: "w-8 h-8 text-white" }) }),
                  /* @__PURE__ */ t("div", { children: [
                    /* @__PURE__ */ e("h3", { className: "text-3xl md:text-4xl font-display font-semibold text-white mb-4", children: p.hero.title }),
                    /* @__PURE__ */ e("p", { className: "text-lg text-white leading-relaxed max-w-md", children: p.hero.description })
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" })
              ]
            }
          ),
          p.secondary && p.secondary.map((h, l) => /* @__PURE__ */ e(
            it,
            {
              colSpan: 1,
              rowSpan: 1,
              theme: "light",
              className: "bg-white hover:bg-neutral-50 transition-colors border border-neutral-200",
              children: /* @__PURE__ */ t("div", { className: "h-full flex flex-col justify-between p-6", children: [
                /* @__PURE__ */ e("div", { className: "w-14 h-14 rounded-xl bg-brand-600 flex items-center justify-center mb-6", children: h.icon && We.createElement(h.icon, { className: "w-7 h-7 text-white" }) }),
                /* @__PURE__ */ t("div", { children: [
                  /* @__PURE__ */ e("h4", { className: "text-xl font-semibold text-neutral-900 mb-3", children: h.title }),
                  /* @__PURE__ */ e("p", { className: "text-sm text-neutral-600 leading-relaxed", children: h.description })
                ] })
              ] })
            },
            `sec-${l}`
          )),
          p.stats && p.stats.map((h, l) => /* @__PURE__ */ e(
            it,
            {
              colSpan: 1,
              rowSpan: 1,
              theme: "light",
              className: "bg-white hover:bg-neutral-50 transition-colors border border-neutral-200",
              children: /* @__PURE__ */ t("div", { className: "h-full flex flex-col justify-between p-6", children: [
                h.icon ? /* @__PURE__ */ e("div", { className: "w-14 h-14 rounded-xl bg-neutral-800 flex items-center justify-center mb-6", children: We.createElement(h.icon, { className: "w-7 h-7 text-white" }) }) : /* @__PURE__ */ e("div", { className: "text-5xl font-display font-bold mb-4 text-neutral-800", children: h.value }),
                /* @__PURE__ */ t("div", { children: [
                  h.title && /* @__PURE__ */ e("h4", { className: "text-lg font-semibold text-neutral-900 mb-2", children: h.title }),
                  h.label && /* @__PURE__ */ e("div", { className: "text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2", children: h.label }),
                  /* @__PURE__ */ e("p", { className: "text-sm text-neutral-600 leading-relaxed", children: h.description })
                ] })
              ] })
            },
            `stat-${l}`
          )),
          p.metrics && p.metrics.map((h, l) => /* @__PURE__ */ e(
            it,
            {
              colSpan: 1,
              rowSpan: 1,
              theme: "light",
              className: "bg-white hover:bg-neutral-50 border border-neutral-200 flex items-center justify-center text-center transition-colors",
              children: /* @__PURE__ */ t("div", { className: "p-6", children: [
                /* @__PURE__ */ e("div", { className: "text-4xl font-display font-bold mb-2 text-neutral-800", children: h.value }),
                /* @__PURE__ */ e("div", { className: "text-xs font-semibold uppercase tracking-wider text-neutral-500", children: h.label })
              ] })
            },
            `met-${l}`
          ))
        ] })
      ] }),
      i && /* @__PURE__ */ e("div", { className: "mb-24", children: i }),
      /* @__PURE__ */ t("section", { className: "mb-24", children: [
        /* @__PURE__ */ e(
          k,
          {
            number: "04",
            title: c.title,
            subtitle: c.subtitle
          }
        ),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: (c.images || []).map((h, l) => {
          if (typeof h == "object" && h.type === "video")
            return /* @__PURE__ */ t(
              "div",
              {
                className: "relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-neutral-200",
                children: [
                  /* @__PURE__ */ e(
                    "iframe",
                    {
                      src: h.url,
                      title: h.label || "Product Video",
                      className: "absolute inset-0 w-full h-full",
                      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                      allowFullScreen: !0
                    }
                  ),
                  h.label && /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-900/90 to-transparent p-4", children: /* @__PURE__ */ e("p", { className: "text-white text-sm font-medium", children: h.label }) })
                ]
              },
              l
            );
          const S = typeof h == "string" ? h : h.image || h.images && h.images[0], T = typeof h == "string" ? "Gallery Image" : h.label || "View";
          return S ? /* @__PURE__ */ t(
            "div",
            {
              onClick: () => N({ src: S, label: T }),
              className: "group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow border border-neutral-200",
              children: [
                /* @__PURE__ */ e(
                  "img",
                  {
                    src: S,
                    alt: T,
                    className: "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  }
                ),
                /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 right-0 p-6", children: /* @__PURE__ */ e("p", { className: "text-white font-medium", children: T }) }) })
              ]
            },
            l
          ) : null;
        }) })
      ] }),
      /* @__PURE__ */ e("section", { className: "mb-24", children: /* @__PURE__ */ t("div", { className: "grid lg:grid-cols-12 gap-12", children: [
        /* @__PURE__ */ t("div", { className: "lg:col-span-4", children: [
          /* @__PURE__ */ e(
            k,
            {
              number: "05",
              title: g.title,
              subtitle: g.subtitle
            }
          ),
          /* @__PURE__ */ e("p", { className: "text-neutral-600 leading-relaxed mt-6", children: "Our development velocity is accelerating. Track our key milestones from lab synthesization to industrial scale-up." })
        ] }),
        /* @__PURE__ */ e("div", { className: "lg:col-span-8", children: /* @__PURE__ */ e("div", { className: "bg-neutral-50 rounded-2xl p-8 md:p-12 border border-neutral-200", children: /* @__PURE__ */ e(Yl, { items: g.events || [], accentColor: "teal" }) }) })
      ] }) }),
      /* @__PURE__ */ t("section", { className: "mb-24", children: [
        /* @__PURE__ */ e(
          k,
          {
            number: "06",
            title: b.title,
            subtitle: b.subtitle
          }
        ),
        /* @__PURE__ */ e("div", { className: "mt-12", children: /* @__PURE__ */ e(Jr, { children: (b.items || []).map((h, l) => /* @__PURE__ */ e(
          it,
          {
            colSpan: l === 0 ? 2 : 1,
            rowSpan: 1,
            theme: "light",
            className: "bg-white hover:bg-neutral-50 border border-neutral-200 transition-colors",
            children: /* @__PURE__ */ t("div", { className: "h-full flex flex-col justify-between p-6", children: [
              /* @__PURE__ */ t("div", { className: "mb-6", children: [
                /* @__PURE__ */ t("div", { className: "inline-block px-3 py-1.5 rounded-full bg-brand-600 text-xs font-bold uppercase tracking-wider text-white mb-4", children: [
                  "Sector ",
                  l + 1
                ] }),
                /* @__PURE__ */ e("h3", { className: "text-2xl font-semibold text-neutral-900 mb-4", children: h.title }),
                /* @__PURE__ */ e("p", { className: "text-neutral-600 leading-relaxed", children: h.description })
              ] }),
              /* @__PURE__ */ e("div", { className: "w-full h-2 bg-neutral-200 rounded-full overflow-hidden", children: /* @__PURE__ */ e(
                "div",
                {
                  className: "h-full bg-brand-600 rounded-full",
                  style: { width: `${75 - l * 5}%` }
                }
              ) })
            ] })
          },
          l
        )) }) })
      ] }),
      /* @__PURE__ */ t("section", { className: "relative rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden px-8 py-16 md:p-20 text-center border border-neutral-700", children: [
        /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" }),
        /* @__PURE__ */ t("div", { className: "relative z-10 max-w-3xl mx-auto", children: [
          /* @__PURE__ */ e("h2", { className: "text-4xl md:text-6xl font-display font-semibold text-white mb-6", children: x.title }),
          /* @__PURE__ */ e("p", { className: "text-xl text-neutral-300 mb-10 leading-relaxed", children: x.description }),
          /* @__PURE__ */ t("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
            /* @__PURE__ */ e(L, { to: x.primaryButton?.link || "/contact", className: "w-full sm:w-auto", children: /* @__PURE__ */ e("button", { className: "w-full sm:w-auto px-8 py-4 bg-white text-neutral-900 border-2 border-white rounded-lg font-semibold text-base hover:bg-neutral-50 hover:border-neutral-200 transition-all duration-300 shadow-lg", children: x.primaryButton?.text || "Contact Us" }) }),
            /* @__PURE__ */ e(L, { to: x.secondaryButton?.link || "/products/pipeline", className: "w-full sm:w-auto", children: /* @__PURE__ */ e("button", { className: "w-full sm:w-auto px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-base hover:bg-white hover:text-neutral-900 transition-all duration-300", children: x.secondaryButton?.text || "View Full Pipeline" }) })
          ] })
        ] })
      ] })
    ] }),
    w && /* @__PURE__ */ t(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4",
        onClick: () => N(null),
        children: [
          /* @__PURE__ */ e(
            "button",
            {
              onClick: () => N(null),
              className: "absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors",
              children: /* @__PURE__ */ e(Qt, { className: "w-6 h-6" })
            }
          ),
          /* @__PURE__ */ t("div", { className: "max-w-7xl max-h-[90vh] relative", children: [
            /* @__PURE__ */ e(
              "img",
              {
                src: w.src,
                alt: w.label,
                className: "max-w-full max-h-[90vh] object-contain rounded-lg",
                onClick: (h) => h.stopPropagation()
              }
            ),
            /* @__PURE__ */ e("p", { className: "text-white text-center mt-4 text-lg font-medium", children: w.label })
          ] })
        ]
      }
    )
  ] });
}, ye = {
  hydrogenMembranes: {
    id: "hydrogenMembranes",
    title: "Hydrogen Membranes",
    subtitle: "High-selectivity graphene membranes enabling efficient hydrogen separation and production with reduced energy losses for clean energy infrastructure.",
    category: "Pilot Trials",
    categoryColor: "bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-500/30",
    heroImages: ["/images/hydrogen_hero.png"],
    accentColor: "teal",
    introduction: {
      title: "The Challenge",
      subtitle: "Purity is the key to the hydrogen economy.",
      description: [
        "Producing high-purity hydrogen is energy-intensive and expensive. Current separation methods like pressure swing adsorption are bulky and inefficient.",
        "Our graphene membranes offer a molecular sieve solution. With precise atomic-scale pores, they allow small hydrogen molecules to pass through while blocking larger contaminants like CO2 and methane, slashing energy costs by up to 50%."
      ],
      images: ["/images/pipeline/studio/Gryogen.png", "/images/pipeline/studio/HydrogenMembranes.png"]
    },
    processFlow: {
      title: "How It Works",
      subtitle: "Atomic precision filtering.",
      steps: [
        { icon: ce, title: "Synthesis", description: "Growing high-quality single-layer graphene on copper substrates." },
        { icon: oa, title: "Perforation", description: "Creating precise nano-pores using focused ion beams." },
        { icon: X, title: "Transfer", description: "Transferring graphene onto a porous support structure." },
        { icon: je, title: "Assembly", description: "Stacking membranes into high-throughput separation modules." }
      ]
    },
    features: {
      title: "Core Performance",
      subtitle: "Efficiency at scale.",
      hero: {
        icon: oa,
        title: "Tunable Selectivity",
        description: "By controlling pore size at the angstrom level, we can tune our membranes to separate specific gases with unprecedented selectivity, far surpassing polymeric membranes."
      },
      stats: [
        { value: "99.9%", label: "Purity", description: "Meeting fuel cell grade standards directly." },
        { icon: I, title: "Low Energy", description: "Passive separation process requires no heat or phase change." }
      ],
      metrics: [
        { value: ">1000", label: "Selectivity (H2/CO2)" },
        { value: "High", label: "Permeance" },
        { value: "500°C", label: "Thermal Stability" },
        { value: "Compact", label: "Footprint" }
      ]
    },
    gallery: {
      title: "Product Gallery",
      subtitle: "Visualizing the future of hydrogen.",
      images: [
        { image: "/images/pipeline/studio/HydrogenMembranes.png", label: "Hydrogen Membrane" },
        { image: "/images/pipeline/studio/Gryogen.png", label: "Gryogen Studio" },
        { image: "/images/hydrogen_hero.png", label: "Field Application" },
        {
          type: "video",
          url: "https://www.youtube.com/embed/jo5_zAQJozQ",
          label: "Hydrogen Membrane Technology Demo"
        }
      ]
    },
    timeline: {
      title: "Development Roadmap",
      subtitle: "Fueling the future.",
      events: [
        { phase: "Phase 1: R&D", title: "Pore Size Control", description: "Achieving sub-nanometer precision to allow only H2 molecules to pass.", status: "completed", date: "Q3 2024" },
        { phase: "Phase 2: Pilot", title: "Small-Scale Reactor", description: "Testing separation efficiency in a continuous flow setup.", status: "current", date: "Q4 2025" },
        { phase: "Phase 3: Scale-Up", title: "Industrial Module", description: "Developing large-area membranes for commercial hydrogen plants.", status: "upcoming", date: "2027" }
      ]
    },
    applications: {
      title: "Applications",
      subtitle: "Clean energy infrastructure.",
      items: [
        { title: "Hydrogen Production", description: "Purifying hydrogen from natural gas reforming or electrolysis.", icon: Ie },
        { title: "Fuel Cells", description: "Ensuring ultra-pure hydrogen fuel for vehicle stacks.", icon: I },
        { title: "Carbon Capture", description: "Separating CO2 from industrial flue gases.", icon: ge },
        { title: "Gas Processing", description: "Refining natural gas and biogas streams.", icon: ke }
      ]
    },
    cta: {
      title: "Accelerate the H2 economy.",
      description: "Efficient separation is the missing link for affordable hydrogen. Join us in scaling this critical technology.",
      primaryButton: { text: "Partner with Us", link: "/contact" },
      secondaryButton: { text: "Back to Pipeline", link: "/products/pipeline" },
      gradient: "from-indigo-900/30 via-indigo-950/20 to-black"
    },
    // Special sections (optional)
    extraSections: [
      {
        id: "seawater-electrolyzer",
        number: "04",
        type: "custom",
        title: "Seawater Electrolyzer - Experimental Validation",
        subtitle: "Direct hydrogen generation from raw seawater without filtration."
        // This will be rendered with custom JSX in the template
      },
      {
        id: "energy-generation",
        number: "05",
        type: "custom",
        title: "Energy Generation from Hydrogen",
        subtitle: "Fuel cell efficiency and electrical output calculations."
        // This will be rendered with custom JSX in the template
      }
    ]
  },
  desalinationMembranes: {
    id: "desalinationMembranes",
    title: "Mariphene",
    subtitle: "Desalination Membranes | Solving the global water crisis with ultra-permeable graphene membranes that desalinate seawater at a fraction of the energy cost.",
    category: "Pilot Trials",
    categoryColor: "bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-500/30",
    heroImages: ["/images/desalination_hero.png"],
    accentColor: "teal",
    introduction: {
      title: "The Challenge",
      subtitle: "Water is abundant, but fresh water is scarce.",
      description: [
        "Current desalination technologies require immense amounts of energy to force water through thick polymer membranes. This makes desalinated water expensive and environmentally taxing.",
        "Our graphene membranes are just one atom thick. This extreme thinness offers minimal resistance to water flow while perfectly blocking salt ions, reducing energy consumption by up to 40%."
      ],
      images: ["/images/pipeline/studio/mariphene.png", "/images/desalination_hero.png"]
    },
    processFlow: {
      title: "How It Works",
      subtitle: "Sieving salt at the atomic scale.",
      steps: [
        { icon: hn, title: "Intake", description: "Seawater is pre-treated and pressurized." },
        { icon: oa, title: "Filtration", description: "Water passes through graphene nanopores rejected salt ions." },
        { icon: I, title: "Efficiency", description: "Low friction allows high flow rates at lower pressures." },
        { icon: Be, title: "Fresh Water", description: "Pure water is collected for municipal or industrial use." }
      ]
    },
    features: {
      title: "Core Performance",
      subtitle: "More flow. Less energy.",
      hero: {
        icon: Be,
        title: "High-Flux Permeability",
        description: "Water molecules pass through our graphene membranes 100x faster than through traditional polymers, allowing for smaller plants and lower operating pressures.",
        gradient: "from-cyan-900 via-cyan-950 to-black",
        iconBg: "bg-cyan-500/20 border border-cyan-400/30",
        iconColor: "text-cyan-300"
      },
      stats: [
        { value: "-40%", label: "Energy Use", description: "Drastically lowering the cost of water.", bg: "bg-gradient-to-br from-cyan-50 to-cyan-100/50", border: "border-cyan-200", color: "text-cyan-700" },
        { icon: je, title: "Durability", description: "Resistant to chlorine and bio-fouling.", iconColor: "text-emerald-600", iconBg: "bg-emerald-50 border border-emerald-100" }
      ],
      metrics: [
        { value: "99.7%", label: "Salt Rejection", labelColor: "text-cyan-400" },
        { value: "High", label: "Flow Rate", labelColor: "text-cyan-400" },
        { value: "Low", label: "Pressure Req", labelColor: "text-cyan-400" },
        { value: "Long", label: "Lifespan", labelColor: "text-cyan-400" }
      ]
    },
    gallery: {
      title: "Product Gallery",
      subtitle: "Visualizing the future of desalination.",
      images: [
        { image: "/images/pipeline/application-icon/mariphene.png", label: "Mariphene Module" },
        { image: "/images/pipeline/studio/mariphene.png", label: "Mariphene" },
        { image: "/images/desalination_hero.png", label: "Operational Environment" }
      ]
    },
    timeline: {
      title: "Development Roadmap",
      subtitle: "Flowing towards the future.",
      events: [
        { phase: "Phase 1: Lab", title: "Membrane Synthesis", description: "Creating large-area single-layer graphene supports.", status: "completed", date: "Q2 2024" },
        { phase: "Phase 2: Prototype", title: "Module Testing", description: "Validating salt rejection rates of >99% in test cells.", status: "current", date: "Q4 2025" },
        { phase: "Phase 3: Pilot", title: "Desalination Plant Trial", description: "Installing pilot modules at a coastal desalination facility.", status: "upcoming", date: "2027" }
      ]
    },
    applications: {
      title: "Applications",
      subtitle: "Water for a thirsty world.",
      items: [
        { title: "Municipal Water", description: "Providing potable water for coastal cities.", icon: Ge },
        { title: "Industrial Treatment", description: "Purifying process water for manufacturing.", icon: Ie },
        { title: "Agriculture", description: "Desalinating brackish water for irrigation.", icon: un },
        { title: "Emergency Relief", description: "Portable desalination units for disaster zones.", icon: ce }
      ]
    },
    cta: {
      title: "Partner for water security.",
      description: "Help us bring affordable, clean water to the world. We are looking for pilot partners.",
      primaryButton: { text: "Inquire Now", link: "/contact" },
      secondaryButton: { text: "Back to Pipeline", link: "/products/pipeline" },
      gradient: "from-cyan-900/30 via-cyan-950/20 to-black"
    }
  },
  atmosphericHarvesting: {
    id: "atmosphericHarvesting",
    title: "Aerophenter",
    subtitle: "Atmospheric Moisture Harvesting | Graphene membranes engineered to harvest atmospheric moisture and convert air into potable water efficiently for sustainable water production.",
    category: "Pilot Trials",
    categoryColor: "bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-500/30",
    heroImages: ["/images/atmospheric_hero.png"],
    accentColor: "teal",
    introduction: {
      title: "The Challenge",
      subtitle: "Water scarcity is a growing global crisis.",
      description: [
        "Traditional water sources are depleting, and desalination is energy-intensive. Billions of people lack access to clean drinking water, especially in arid regions. We need a decentralized, sustainable solution that taps into the moisture present in the air all around us.",
        "Our Graphene-Enhanced Atmospheric Water Generator (AWG) utilizes the extraordinary surface area and hydrophilic properties of graphene to capture moisture even at low humidity levels, delivering clean water with minimal energy consumption."
      ],
      images: ["/images/pipeline/studio/aerophenter_studio.png", "/images/pipeline/studio/AtmosphericHarvesting-2.png"]
    },
    processFlow: {
      title: "How It Works",
      subtitle: "From thin air to pure water.",
      steps: [
        { icon: ge, title: "Air Intake", description: "Ambient air is drawn through a specialized intake system." },
        { icon: La, title: "Graphene Filtration", description: "Air passes through graphene oxide membranes that selectively adsorb moisture." },
        { icon: Be, title: "Condensation", description: "Captured moisture is released and condensed into pure, liquid water." },
        { icon: xe, title: "Purification", description: "Final mineralization and filtration ensure potable quality." }
      ]
    },
    features: {
      title: "Core Technology",
      subtitle: "Breakthrough efficiency driven by graphene.",
      hero: {
        icon: Be,
        title: "Hyper-Efficient Adsorption",
        description: "Our graphene oxide framework enables moisture capture at humidity levels as low as 20%, significantly outperforming conventional desiccant wheels.",
        gradient: "from-teal-900 via-teal-950 to-black",
        iconBg: "bg-teal-500/20 border border-teal-400/30",
        iconColor: "text-teal-300"
      },
      stats: [
        { value: "30%", label: "More Energy Efficient", description: "Compared to standard compression-based AWGs.", bg: "bg-gradient-to-br from-teal-50 to-teal-100/50", border: "border-teal-200", color: "text-teal-700" },
        { icon: I, title: "Solar Ready", description: "Designed for full integration with solar PV systems for zero-carbon operation.", iconColor: "text-amber-600", iconBg: "bg-amber-50 border border-amber-100" }
      ],
      metrics: [
        { value: "50L", label: "Daily Output (Unit)" },
        { value: "99.9%", label: "Purity Level" },
        { value: "24/7", label: "Operation Cycle" },
        { value: "<0.3", label: "kWh per Liter" }
      ]
    },
    gallery: {
      title: "Product Gallery",
      subtitle: "Visualizing the future of water security.",
      images: [
        { image: "/images/pipeline/studio/aerophenter_studio.png", label: "Aerophenter Studio" },
        { image: "/images/pipeline/studio/AtmosphericHarvesting-2.png", label: "Studio View 2" },
        { image: "/images/atmospheric_hero.png", label: "Field Deployment" },
        {
          type: "video",
          url: "https://www.youtube.com/embed/P25aS8s4ar0",
          label: "Product Demo Video"
        }
      ]
    },
    timeline: {
      title: "Development Roadmap",
      subtitle: "Path to commercialization.",
      events: [
        { phase: "Phase 1: Lab", title: "Material Synthesis", description: "Development of high-surface-area graphene oxide frameworks for maximum moisture adsorption.", status: "completed", date: "Q3 2024" },
        { phase: "Phase 2: Prototype", title: "Small-Scale AWG Unit", description: "Engineering a portable unit capable of harvesting 10L/day in arid conditions.", status: "current", date: "Q2 2025" },
        { phase: "Phase 3: Pilot", title: "Field Deployment", description: "Deployment of community-scale units in water-scarce regions for real-world validation.", status: "upcoming", date: "2026" }
      ]
    },
    applications: {
      title: "Applications",
      subtitle: "Solving water scarcity everywhere.",
      items: [
        { title: "Arid & Desert Regions", description: "Providing a reliable water source in areas with low humidity and no groundwater.", icon: Ge },
        { title: "Emergency Relief", description: "Rapidly deployable water stations for disaster zones and refugee camps.", icon: xe },
        { title: "Off-Grid Communities", description: "Sustainable water independence for remote villages and eco-resorts.", icon: I },
        { title: "Military Operations", description: "Reducing logistical burden by generating water on-site for deployed forces.", icon: La }
      ]
    },
    cta: {
      title: "Partner with us.",
      description: "We are currently seeking pilot partners for our Atmospheric Water Generators. Join us in solving the global water crisis.",
      primaryButton: { text: "Deploy Pilot", link: "/contact" },
      secondaryButton: { text: "Back to Pipeline", link: "/products/pipeline" },
      gradient: "from-teal-900/30 via-teal-950/20 to-black"
    }
  },
  batteryStorage: {
    id: "batteryStorage",
    title: "Voltaphene",
    subtitle: "Graphene Battery Storage | Supercharging energy storage with graphene-enhanced electrodes that deliver higher density, faster charging, and longer lifecycles.",
    category: "Pilot Trials",
    categoryColor: "bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-500/30",
    heroImages: ["/images/battery_hero.png"],
    accentColor: "teal",
    introduction: {
      title: "The Challenge",
      subtitle: "The bottleneck of the electric future.",
      description: [
        "Current lithium-ion batteries are reaching their theoretical limits. They take too long to charge, degrade too quickly, and are heavy. This limits the adoption of EVs and renewable energy.",
        "By integrating graphene into battery electrodes, we drastically improve electrical conductivity and structural stability. This allows for faster electron flow (charging) and prevents the material from cracking during expansion (longevity)."
      ],
      images: ["/images/pipeline/studio/Voltaphene.png"]
    },
    processFlow: {
      title: "How It Works",
      subtitle: "Conductivity at the speed of graphene.",
      steps: [
        { icon: ce, title: "Anode", description: "Graphene-silicon composite anodes for higher capacity." },
        { icon: I, title: "Cathode", description: "Conductive graphene networks improve electron transport." },
        { icon: X, title: "Assembly", description: "Precision stacking of electrodes and separators." },
        { icon: je, title: "Cycling", description: "Rigorous charge/discharge testing to ensure longevity." }
      ]
    },
    features: {
      title: "Core Performance",
      subtitle: "Charge faster. Drive farther.",
      hero: {
        icon: I,
        title: "Rapid Charge Kinetic",
        description: "Graphene's exceptional conductivity allows for ultra-fast charging rates (5C+) without overheating, enabling an 80% charge in under 15 minutes.",
        gradient: "from-amber-900 via-amber-950 to-black",
        iconBg: "bg-amber-500/20 border border-amber-400/30",
        iconColor: "text-amber-300"
      },
      stats: [
        { value: "3x", label: "Capacity", description: "Versus standard graphite anodes.", bg: "bg-gradient-to-br from-amber-50 to-amber-100/50", border: "border-amber-200", color: "text-amber-700" },
        { icon: pn, title: "Lifecycle", description: "Retains 90% capacity after 1000 cycles.", iconColor: "text-emerald-600", iconBg: "bg-emerald-50 border border-emerald-100" }
      ],
      metrics: [
        { value: "20 Min", label: "Charge Time (0-80%)" },
        { value: "400 Wh/kg", label: "Energy Density" },
        { value: "High", label: "Thermal Safety" },
        { value: "-30°C", label: "Low Temp Perf" }
      ]
    },
    gallery: {
      title: "Product Gallery",
      subtitle: "Visualizing the future of energy storage.",
      images: [
        { image: "/images/pipeline/studio/Voltaphene.png", label: "Studio Module" },
        { image: "/images/battery_hero.png", label: "Pack Integration" }
      ]
    },
    timeline: {
      title: "Development Roadmap",
      subtitle: "Energizing the transition.",
      events: [
        { phase: "Phase 1: Lab", title: "Anode Optimization", description: "Achieving 3x capacity of graphite anodes using graphene-silicon.", status: "completed", date: "Q4 2023" },
        { phase: "Phase 2: Prototype", title: "Pouch Cell Testing", description: "Validating 1000+ cycles at high charging rates (5C).", status: "current", date: "Q2 2025" },
        { phase: "Phase 3: Pilot", title: "EV Pack Integration", description: "Demonstrating a 500-mile range battery pack prototype.", status: "upcoming", date: "2026" }
      ]
    },
    applications: {
      title: "Applications",
      subtitle: "Power for every scale.",
      items: [
        { title: "Electric Vehicles", description: "Faster charging and longer range for next-gen EVs.", icon: Ha },
        { title: "Grid Storage", description: "Stabilizing renewable energy grids with rapid response.", icon: dn },
        { title: "Consumer Electronics", description: "Longer lasting batteries for phones and laptops.", icon: mn },
        { title: "Drones", description: "High power-to-weight ratio for extended flight times.", icon: vr }
      ]
    },
    cta: {
      title: "Power the revolution.",
      description: "We are seeking automotive and grid partners to validate our next-gen battery cells.",
      primaryButton: { text: "Partner Inquiry", link: "/contact" },
      secondaryButton: { text: "Back to Pipeline", link: "/products/pipeline" },
      gradient: "from-amber-900/30 via-amber-950/20 to-black"
    }
  },
  grapheneGlassFibres: {
    id: "grapheneGlassFibres",
    title: "Graphene Glass Fibres",
    subtitle: "Revolutionizing composites with graphene-enhanced sizing that bridges the gap between glass and carbon fibre performance at a fraction of the cost.",
    category: "Pilot Trials",
    categoryColor: "bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-500/30",
    heroImages: ["/images/glass_fibres_hero.png"],
    accentColor: "teal",
    introduction: {
      title: "The Challenge",
      subtitle: "The limits of glass fibre.",
      description: [
        "Glass fibre is the workhorse of the composites industry, but it lacks the stiffness and fatigue resistance of carbon fibre. Its weak point is often the interface between the fibre and the resin matrix.",
        'Our solution coats standard glass fibres with graphene. This nano-engineered "sizing" dramatically improves adhesion, transforming affordable glass fibre into a high-performance material that rivals carbon fibre for many structural applications.'
      ],
      images: ["/images/pipeline/studio/Glasephene.png", "/images/pipeline/studio/Glasephene-2.png", "/images/pipeline/studio/Glasephene-3.png"]
    },
    processFlow: {
      title: "How It Works",
      subtitle: "Strengthening the interface.",
      steps: [
        { icon: Nr, title: "Coating", description: "Glass fibres are coated with a graphene-enhanced sizing agent." },
        { icon: X, title: "Bonding", description: "Graphene improves the interface between fibre and resin." },
        { icon: je, title: "Dispersion", description: "Ensuring uniform distribution along the fibre length." },
        { icon: ft, title: "Curing", description: "Forming a composite with superior mechanical properties." }
      ]
    },
    features: {
      title: "Core Performance",
      subtitle: "Bridging the gap to carbon.",
      hero: {
        icon: X,
        title: "Interfacial Toughness",
        description: "The graphene coating acts as a chemical bridge, increasing the interlaminar shear strength by up to 35%. This prevents delamination, the most common failure mode in composites.",
        gradient: "from-purple-900 via-purple-950 to-black",
        iconBg: "bg-purple-500/20 border border-purple-400/30",
        iconColor: "text-purple-300"
      },
      stats: [
        { value: "+50%", label: "Fatigue Life", description: "Withstanding more cycles under load.", bg: "bg-gradient-to-br from-purple-50 to-purple-100/50", border: "border-purple-200", color: "text-purple-700" },
        { icon: ft, title: "Cost Effective", description: "Performance boost without the high price of carbon fibre.", iconColor: "text-emerald-600", iconBg: "bg-emerald-50 border border-emerald-100" }
      ],
      metrics: [
        { value: "High", label: "Tensile Strength" },
        { value: "Yes", label: "Drop-in Ready" },
        { value: "Low", label: "Moisture Absorption" },
        { value: "Light", label: "Weight Impact" }
      ]
    },
    gallery: {
      title: "Product Gallery",
      subtitle: "Visualizing the future of composites.",
      images: [
        { image: "/images/pipeline/studio/Glasephene.png", label: "Studio View" },
        { image: "/images/pipeline/studio/Glasephene-2.png", label: "Studio View 2" },
        { image: "/images/pipeline/studio/Glasephene-3.png", label: "Studio View 3" },
        { image: "/images/glass_fibres_hero.png", label: "Industrial Application" }
      ]
    },
    timeline: {
      title: "Development Roadmap",
      subtitle: "Strengthening industries.",
      events: [
        { phase: "Phase 1: Lab", title: "Sizing Formulation", description: "Developing a stable graphene-based sizing for glass fibres.", status: "completed", date: "Q1 2024" },
        { phase: "Phase 2: Prototype", title: "Composite Testing", description: "Demonstrating 35% increase in interlaminar shear strength.", status: "current", date: "Q3 2025" },
        { phase: "Phase 3: Pilot", title: "Wind Blade Trial", description: "Manufacturing full-scale wind turbine blade sections.", status: "upcoming", date: "2026" }
      ]
    },
    applications: {
      title: "Applications",
      subtitle: "Versatile reinforcement.",
      items: [
        { title: "Wind Energy", description: "Lighter, longer, and stronger turbine blades.", icon: ge },
        { title: "Marine", description: "Osmosis-resistant hulls for boats and yachts.", icon: yr },
        { title: "Automotive", description: "Lightweight body panels and leaf springs.", icon: I },
        { title: "Infrastructure", description: "Corrosion-free rebars for bridges and tunnels.", icon: Nr }
      ]
    },
    cta: {
      title: "Reinforce your future.",
      description: "Upgrade your composites today. Contact us for sample materials and technical data.",
      primaryButton: { text: "Request Samples", link: "/contact" },
      secondaryButton: { text: "Back to Pipeline", link: "/products/pipeline" },
      gradient: "from-purple-900/30 via-purple-950/20 to-black"
    }
  },
  armophene: {
    id: "armophene",
    title: "Armophene",
    subtitle: "Improving personal protection with graphene-reinforced ballistics that are lighter, stronger, and more flexible than traditional aramid fibers.",
    category: "R&D Pipeline",
    categoryColor: "bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-500/30",
    heroImages: ["/images/armophene_hero.png"],
    accentColor: "teal",
    textColorClass: "text-slate-700",
    introduction: {
      title: "The Challenge",
      subtitle: "Protection usually comes at the cost of mobility.",
      description: [
        "Traditional body armor is heavy, hot, and restrictive. Soldiers and officers often have to choose between maximum protection and the ability to move freely.",
        "Armophene changes the equation. By reinforcing ballistic fibers with graphene, we drastically increase the energy absorption capacity of the material. This allows for thinner, lighter plates that stop the same threats."
      ],
      images: ["/images/pipeline/studio/Armophene.png", "/images/pipeline/studio/Armophene-2.png"]
    },
    processFlow: {
      title: "How It Works",
      subtitle: "Dissipating kinetic energy instantly.",
      accentColor: "teal",
      steps: [
        { icon: ce, title: "Synthesis", description: "Graphene oxide reduced to pristine graphene nanoplatelets." },
        { icon: q, title: "Composite", description: "Graphene is embedded into ultra-high-molecular-weight polyethylene (UHMWPE)." },
        { icon: X, title: "Lamination", description: "Layers are cross-plied and fused under high pressure." },
        { icon: mt, title: "Testing", description: "Ballistic verification against NIJ standards." }
      ]
    },
    features: {
      title: "Core Performance",
      subtitle: "Lighter. Stronger. Safer.",
      hero: {
        icon: q,
        title: "Hyper-Velocity Dispersion",
        description: "When a projectile strikes Armophene, the graphene network distributes the impact energy spreads laterally at speeds of 22 km/s—faster than the speed of sound in the material—preventing penetration.",
        gradient: "from-slate-900 to-black",
        iconBg: "bg-slate-800/50 border border-slate-700",
        iconColor: "text-emerald-400",
        overlay: "bg-[url('/grid.svg')] opacity-10",
        badge: { text: "Tested at 900 m/s", color: "emerald" }
      },
      stats: [
        { value: "-35%", label: "Weight Reduction", description: "Significantly lighter than equivalent ceramic plates, reducing fatigue.", bg: "bg-slate-50", border: "border-slate-200", color: "text-slate-900" },
        { icon: I, title: "Multi-Hit Capable", description: "Maintains structural integrity after multiple direct impacts, exceeding standard specs.", iconColor: "text-emerald-600", iconBg: "bg-emerald-50" }
      ],
      metrics: [
        { value: "Level IV", label: "Protection Capable", labelColor: "text-slate-400" },
        { value: "High", label: "Flexibility", labelColor: "text-slate-400" },
        { value: "Yes", label: "Stab Resistant", labelColor: "text-slate-400" },
        { value: "10 Yr", label: "Shelf Life", labelColor: "text-slate-400" }
      ],
      darkBg: "bg-slate-900",
      darkBorder: "border-slate-800"
    },
    gallery: {
      title: "Product Gallery",
      subtitle: "Visualizing the future of protection.",
      images: [
        { image: "/images/pipeline/studio/Armophene.png", label: "Studio View" },
        { image: "/images/pipeline/studio/Armophene-2.png", label: "Studio View 2" },
        { image: "/images/armophene_hero.png", label: "Tactical Context" }
      ]
    },
    timeline: {
      title: "Development Roadmap",
      subtitle: "Protecting those who serve.",
      accentColor: "teal",
      events: [
        { phase: "Phase 1: Lab", title: "Impact Resistance", description: "Micro-ballistic testing showing 200% improvement over Kevlar per unit weight.", status: "completed", date: "Q2 2024" },
        { phase: "Phase 2: Prototype", title: "Vest Fabrication", description: "Creating full tactical vest prototypes for flexibility testing.", status: "current", date: "Q1 2026" },
        { phase: "Phase 3: Certification", title: "NIJ Certification", description: "Official ballistic certification for Level III and IV protection.", status: "upcoming", date: "2026" }
      ]
    },
    applications: {
      title: "Applications",
      subtitle: "Defense and security solutions.",
      items: [
        { title: "Defense", description: "Next-gen body armor for infantry and special forces.", icon: q },
        { title: "Law Enforcement", description: "Lightweight, concealable vests for daily patrol use.", icon: on },
        { title: "Vehicle Armor", description: "Up-armoring for light tactical vehicles without compromising mobility.", icon: nt },
        { title: "Personal Security", description: "Discreet protection for VIPs and security personnel.", icon: cn }
      ],
      cardHoverEffect: !0
    },
    cta: {
      title: "Equip the future.",
      description: "Interested in testing Armophene for your defense applications? Contact our specialized government liaison team.",
      primaryButton: { text: "Request Datasheet", link: "/contact", variant: "white" },
      secondaryButton: { text: "Back to Pipeline", link: "/products/pipeline", variant: "outline-dark" },
      gradient: "from-slate-800 via-slate-900 to-black",
      gradientType: "radial"
    }
  },
  graphyre: {
    id: "graphyre",
    title: "Graphyre",
    subtitle: "Next-generation graphene-enhanced rubber compounds for tyres that deliver superior durability, lower rolling resistance, and smart sensing capabilities.",
    category: "Prototype",
    categoryColor: "bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-500/30",
    heroImages: ["/images/graphyre_hero.png"],
    accentColor: "teal",
    introduction: {
      title: "The Challenge",
      subtitle: "Tyre wear is a major environmental and economic issue.",
      description: [
        "Tyres release microplastics as they wear down, and frequent replacements cost fleet operators billions. Balancing grip, durability, and fuel efficiency has always been an engineering compromise.",
        "Graphyre eliminates this compromise. By integrating graphene into the rubber matrix, we increase tensile strength and heat dissipation simultaneously. This results in a tyre that lasts longer, grips better, and saves fuel."
      ],
      images: ["/images/pipeline/studio/Graphyre.png", "/images/pipeline/studio/Graphyre-2.png"]
    },
    processFlow: {
      title: "How It Works",
      subtitle: "Reinforcing rubber at the molecular level.",
      accentColor: "teal",
      steps: [
        { icon: ce, title: "Integration", description: "Graphene is dispersed into the rubber compound during mixing." },
        { icon: I, title: "Bonding", description: "Graphene forms a reinforcing network within the polymer matrix." },
        { icon: je, title: "Vulcanization", description: "Standard curing locks in the high-performance properties." },
        { icon: nt, title: "Mapping", description: "Smart sensors embedded in the tyre provide real-time data." }
      ]
    },
    features: {
      title: "Core Performance",
      subtitle: "Breaking the magic triangle of tyre performance.",
      hero: {
        icon: je,
        title: "Hyper-Alert Sensing",
        description: "Graphyre isn't just tough; it's smart. The graphene network acts as a conductive sensor, providing real-time data on tread depth, temperature, and pressure directly to the driver.",
        gradient: "from-amber-900 via-orange-950 to-black",
        iconBg: "bg-amber-500/20 border border-amber-400/30",
        iconColor: "text-amber-300"
      },
      stats: [
        { value: "30%", label: "More Mileage", description: "Significantly extending tyre lifespan.", bg: "bg-gradient-to-br from-amber-50 to-orange-100/50", border: "border-amber-200", color: "text-amber-700" },
        { icon: Jt, title: "Fuel Savings", description: "Reduced rolling resistance lowers fuel consumption by up to 10%.", iconColor: "text-emerald-600", iconBg: "bg-emerald-50 border border-emerald-100" }
      ],
      metrics: [
        { value: "A+", label: "Wet Grip Rating", labelColor: "text-amber-500" },
        { value: "-10%", label: "Rolling Resistance", labelColor: "text-amber-500" },
        { value: "Real-time", label: "Wear Monitoring", labelColor: "text-amber-500" },
        { value: "High", label: "Heat Dissipation", labelColor: "text-amber-500" }
      ]
    },
    gallery: {
      title: "Product Gallery",
      subtitle: "Visualizing the future of tire technology.",
      images: [
        { image: "/images/pipeline/studio/Graphyre.png", label: "Studio View" },
        { image: "/images/pipeline/studio/Graphyre-2.png", label: "Studio View 2" },
        { image: "/images/graphyre_hero.png", label: "Performance Test" }
      ]
    },
    timeline: {
      title: "Development Roadmap",
      subtitle: "Rolling out the future.",
      events: [
        { phase: "Phase 1: Lab", title: "Compound Development", description: "Optimizing the graphene-rubber interface for maximum wear resistance.", status: "completed", date: "Q1 2024" },
        { phase: "Phase 2: Prototype", title: "Track Testing", description: "Performance validation on test tracks showing 30% wear reduction.", status: "current", date: "Q3 2025" },
        { phase: "Phase 3: Commercial", title: "Fleet Partnerships", description: "Pilot programs with major logistics fleets to validate fuel savings.", status: "upcoming", date: "2026" }
      ]
    },
    applications: {
      title: "Applications",
      subtitle: "Powering the next generation of transport.",
      items: [
        { title: "Commercial Logistics", description: "Extending tyre life for long-haul trucking fleets.", icon: nt },
        { title: "Electric Vehicles", description: "Handling the higher torque and weight of EVs with ease.", icon: I },
        { title: "Motorsport", description: "High-grip, durable compounds for competitive racing.", icon: je },
        { title: "Mining & Heavy Industry", description: "Extreme durability for off-road industrial vehicles.", icon: ce }
      ],
      noIconWrapper: !0
    },
    cta: {
      title: "Drive with us.",
      description: "We are looking for fleet partners to pilot Graphyre smart tyres. Experience the future of mobility.",
      primaryButton: { text: "Partner Inquiry", link: "/contact" },
      secondaryButton: { text: "Back to Pipeline", link: "/products/pipeline" },
      gradient: "from-amber-900/30 via-amber-950/20 to-black"
    }
  },
  graphosite: {
    id: "graphosite",
    title: "Graphosite",
    subtitle: "Advanced graphene-reinforced composite materials delivering unmatched strength-to-weight ratios for aerospace, automotive, and industrial applications.",
    category: "Prototype",
    categoryColor: "bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-500/30",
    heroImages: ["/images/graphosite_hero.png"],
    accentColor: "teal",
    textColorClass: "text-slate-700",
    introduction: {
      title: "The Challenge",
      subtitle: "Weight is the enemy of efficiency.",
      description: [
        "In aerospace and automotive industries, every kilogram saved translates to fuel efficiency and performance. Traditional carbon fiber is light, but it can be brittle and prone to delamination.",
        "Graphosite solves this. By reinforcing the polymer matrix with graphene, we create a composite that is not only lighter but significantly tougher and more resistant to impact. It's the next evolution of structural materials."
      ],
      images: ["/images/pipeline/studio/Graphosite.png"]
    },
    processFlow: {
      title: "How It Works",
      subtitle: "Synergy between carbon fiber and graphene.",
      accentColor: "teal",
      steps: [
        { icon: X, title: "Layering", description: "Graphene sheets are interleaved with carbon fiber layers." },
        { icon: I, title: "Infusion", description: "Resin is infused under vacuum to ensure void-free composites." },
        { icon: ft, title: "Curing", description: "High-temperature curing activates the graphene reinforcement." },
        { icon: bn, title: "Shaping", description: "Precision machining to final component specifications." }
      ]
    },
    features: {
      title: "Core Performance",
      subtitle: "Stronger. Lighter. Tougher.",
      hero: {
        icon: gn,
        title: "Interlaminar Reinforcement",
        description: "Graphene bridges the gaps between carbon fibers, preventing micro-cracks from propagating and significantly improving the composite's resistance to delamination and fatigue.",
        gradient: "from-purple-900 to-black",
        iconBg: "bg-white/10 border border-white/20",
        iconColor: "text-purple-300",
        overlay: "bg-[url('/grid.svg')] opacity-10"
      },
      stats: [
        { value: "40%", label: "Stronger", description: "Higher tensile strength than standard composites.", bg: "bg-purple-50", border: "border-purple-100", color: "text-purple-600", labelColor: "text-purple-900" },
        { icon: I, title: "Conductive", description: "Built-in lightning strike protection for aircraft.", iconColor: "text-amber-500", iconBg: "bg-amber-50" }
      ],
      metrics: [
        { value: "-20%", label: "Weight Reduction", labelColor: "text-slate-400" },
        { value: "High", label: "Impact Resistance", labelColor: "text-slate-400" },
        { value: "Excellent", label: "Fatigue Life", labelColor: "text-slate-400" },
        { value: "Yes", label: "Recyclable", labelColor: "text-slate-400" }
      ],
      darkBg: "bg-slate-900",
      darkBorder: "border-slate-800"
    },
    gallery: {
      title: "Product Gallery",
      subtitle: "Visualizing the future of composites.",
      images: [
        { image: "/images/pipeline/studio/Graphosite.png", label: "Studio Module" },
        { image: "/images/graphosite_hero.png", label: "Application Context" }
      ]
    },
    timeline: {
      title: "Development Roadmap",
      subtitle: "Taking flight.",
      accentColor: "teal",
      events: [
        { phase: "Phase 1: R&D", title: "Matrix Optimization", description: "Achieving uniform graphene dispersion in epoxy resins.", status: "completed", date: "Q4 2023" },
        { phase: "Phase 2: Prototype", title: "Structural Testing", description: "Validating a 40% increase in tensile strength over standard carbon fiber.", status: "current", date: "Q3 2025" },
        { phase: "Phase 3: Pilot", title: "Aerospace Certification", description: "Beginning rigorous testing for aerospace component approval.", status: "upcoming", date: "2026" }
      ]
    },
    applications: {
      title: "Applications",
      subtitle: "Redefining structural limits.",
      items: [
        { title: "Aerospace", description: "Lightweight wing structures and fuselage components.", icon: vr },
        { title: "Automotive", description: "Chassis and body panels for high-performance vehicles.", icon: ft },
        { title: "Sports Equipment", description: "Next-gen tennis rackets, golf clubs, and bicycle frames.", icon: I },
        { title: "Construction", description: "Corrosion-resistant rebars and structural beams.", icon: ca }
      ],
      cardHoverEffect: !0,
      hoverColors: "purple"
    },
    cta: {
      title: "Build lighter. Build stronger.",
      description: "We are working with aerospace and automotive leaders to validate Graphosite components. Join our pilot program.",
      primaryButton: { text: "Collaborate", link: "/contact", variant: "white" },
      secondaryButton: { text: "Back to Pipeline", link: "/products/pipeline", variant: "outline-dark" },
      gradient: "from-purple-900/40 via-slate-900 to-black",
      gradientType: "radial"
    }
  },
  rustene: {
    id: "rustene",
    title: "Rustene",
    subtitle: "Graphene-based anti-rusting paint that forms an ultra-thin barrier preventing corrosion and extending metal lifespan.",
    category: "R&D Pipeline",
    categoryColor: "bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-500/30",
    heroImages: ["/images/pipeline/application-icon/rustene_hero.png"],
    accentColor: "teal",
    introduction: {
      title: "The Challenge",
      subtitle: "Corrosion costs the global economy $2.5 trillion annually.",
      description: [
        "Traditional anti-corrosion coatings often rely on heavy metals like zinc or toxic chromates, and they eventually degrade, leading to structural failure and costly repairs.",
        "Rustene changes the game by utilizing the impermeability of graphene. It creates a zig-zag path for corrosive elements, effectively blocking oxygen and moisture from reaching the metal surface, extending asset lifespan by up to 5x."
      ],
      images: ["/images/pipeline/studio/Rustene.png"]
    },
    processFlow: {
      title: "How It Works",
      subtitle: "Impermeable protection at the atomic scale.",
      steps: [
        { icon: q, title: "Surface Prep", description: "Standard cleaning and preparation of the metal surface." },
        { icon: ca, title: "Application", description: "Rustene is applied like standard primer, creating an impermeable graphene barrier." },
        { icon: Ia, title: "Curing", description: "Rapid curing process forms a covalent bond with the substrate." },
        { icon: q, title: "Protection", description: "Long-term resistance against moisture, salt, and chemical corrosion." }
      ]
    },
    features: {
      title: "Core Performance",
      subtitle: "Redefining durability standards.",
      hero: {
        icon: q,
        title: "The Tortuous Path Effect",
        description: "Graphene platelets within the coating create a complex maze that corrosive molecules must navigate, increasing the effective diffusion path length by orders of magnitude.",
        gradient: "from-blue-900 via-blue-950 to-black",
        iconBg: "bg-blue-500/20 border border-blue-400/30",
        iconColor: "text-blue-300"
      },
      stats: [
        { value: "5x", label: "Lifespan Extension", description: "Significantly reducing maintenance cycles.", bg: "bg-gradient-to-br from-blue-50 to-blue-100/50", border: "border-blue-200", color: "text-blue-700" },
        { icon: xe, title: "Self-Healing", description: "Smart polymer matrix can self-repair micro-cracks before rust begins.", iconColor: "text-emerald-600", iconBg: "bg-emerald-50 border border-emerald-100" }
      ],
      metrics: [
        { value: "5000h+", label: "Salt Spray Test", labelColor: "text-blue-500" },
        { value: "<15μm", label: "Coating Thickness", labelColor: "text-blue-500" },
        { value: "100%", label: "UV Stable", labelColor: "text-blue-500" },
        { value: "Low VOC", label: "Eco-Friendly", labelColor: "text-blue-500" }
      ]
    },
    gallery: {
      title: "Product Gallery",
      subtitle: "Visualizing the future of corrosion protection.",
      images: [
        { type: "carousel", images: ["/images/pipeline/studio/Rustene.png"], label: "Studio Module", bg: "bg-neutral-100" },
        { type: "single", image: "/images/pipeline/application-icon/rustene_hero.png", label: "Applied Coating", overlay: !0 },
        {
          type: "video",
          url: "https://www.youtube.com/embed/_3oMSMMicxk",
          label: "Rustene in Action"
        }
      ]
    },
    timeline: {
      title: "Development Roadmap",
      subtitle: "Path to market.",
      events: [
        { phase: "Phase 1: R&D", title: "Formulation Optimization", description: "Developing the optimal graphene-to-polymer ratio for maximum adhesion and barrier properties.", status: "completed", date: "Q2 2024" },
        { phase: "Phase 2: Testing", title: "ISO Salt Spray Tests", description: "Achieving 5000+ hours in accelerated weathering tests with zero corrosion.", status: "current", date: "Q4 2025" },
        { phase: "Phase 3: Pilot", title: "Industrial Trials", description: "Field testing on marine vessels and bridge infrastructure.", status: "upcoming", date: "2026" }
      ]
    },
    applications: {
      title: "Applications",
      subtitle: "Protecting critical infrastructure.",
      items: [
        { title: "Marine Vessels", description: "Protecting hulls and decks from aggressive saltwater corrosion.", icon: yr },
        { title: "Infrastructure", description: "Extending the life of bridges, pipelines, and steel structures.", icon: ca },
        { title: "Automotive", description: "Underbody coating for rust prevention in harsh climates.", icon: nt },
        { title: "Industrial Equipment", description: "Durability for machinery exposed to chemical environments.", icon: q }
      ]
    },
    cta: {
      title: "Protect your assets.",
      description: "Looking to extend the life of your infrastructure? We are looking for industrial partners for pilot applications.",
      primaryButton: { text: "Inquire Now", link: "/contact" },
      secondaryButton: { text: "Back to Pipeline", link: "/products/pipeline" },
      gradient: "from-blue-900/30 via-blue-950/20 to-black"
    }
  },
  thermaphene: {
    id: "thermaphene",
    title: "Thermaphene",
    subtitle: "Ultra-thin graphene heating technology delivering lightweight, efficient, and flexible thermal regulation for wearables and industry.",
    category: "Prototype",
    categoryColor: "bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-500/30",
    heroImages: ["/images/pipeline/application-icon/thermaphene_hero.png"],
    accentColor: "teal",
    introduction: {
      title: "The Challenge",
      subtitle: "Cold is inevitable. Discomfort shouldn't be.",
      description: [
        'Traditional heating solutions, whether in clothing or machinery, rely on bulky copper wires that are heavy, prone to breakage, and create uneven "hot spots."',
        "Thermaphene replaces wires with a printable graphene coating. It covers the entire surface area, providing uniform radiant heat that feels more natural and efficient. It's washable, flexible, and virtually weightless."
      ],
      images: ["/images/pipeline/studio/thermophene.png", "/images/pipeline/studio/thermophene-2.png"]
    },
    processFlow: {
      title: "How It Works",
      subtitle: "Electrifying carbon at the atomic level.",
      steps: [
        { icon: ce, title: "Dispersion", description: "Graphene is dispersed into a conductive ink or coating." },
        { icon: wr, title: "Integration", description: "The coating is printed or applied onto textiles or surfaces." },
        { icon: I, title: "Activation", description: "Low-voltage current passes through the graphene network." },
        { icon: kr, title: "Radiation", description: "Efficient far-infrared heat is radiated evenly." }
      ]
    },
    features: {
      title: "Core Performance",
      subtitle: "Warmth without weight.",
      hero: {
        icon: kr,
        title: "Far-Infrared Heating",
        description: "Unlike resistive wires that heat the air, Thermaphene emits far-infrared radiation that penetrates and warms objects directly, mimicking the feeling of sunlight.",
        gradient: "from-orange-900 via-orange-950 to-black",
        iconBg: "bg-orange-500/20 border border-orange-400/30",
        iconColor: "text-orange-300"
      },
      stats: [
        { value: "99%", label: "Efficiency", description: "Almost zero energy loss in conversion.", bg: "bg-gradient-to-br from-orange-50 to-orange-100/50", border: "border-orange-200", color: "text-orange-700" },
        { icon: Pe, title: "Low Power", description: "Runs effectively on standard 5V/12V battery packs.", iconColor: "text-emerald-600", iconBg: "bg-emerald-50 border border-emerald-100" }
      ],
      metrics: [
        { value: "<1mm", label: "Thickness", labelColor: "text-orange-500" },
        { value: "10s", label: "Time to Heat", labelColor: "text-orange-500" },
        { value: "Yes", label: "Machine Washable", labelColor: "text-orange-500" },
        { value: "Zero", label: "Hot Spots", labelColor: "text-orange-500" }
      ]
    },
    gallery: {
      title: "Product Gallery",
      subtitle: "Visualizing the future of thermal wear.",
      images: [
        { image: "/images/pipeline/application-icon/thermaphene-icon.png", label: "Thermaphene" },
        { image: "/images/pipeline/application-icon/thermaphene_hero.png", label: "Thermal Imaging" },
        { image: "/images/pipeline/studio/thermophene.png", label: "Studio View" },
        { image: "/images/pipeline/studio/thermophene-2.png", label: "Studio View 2" }
      ]
    },
    timeline: {
      title: "Development Roadmap",
      subtitle: "Heating up the market.",
      events: [
        { phase: "Phase 1: Lab", title: "Ink Formulation", description: "Creating a stable, washable graphene ink for textiles.", status: "completed", date: "Q1 2024" },
        { phase: "Phase 2: Prototype", title: "Heated Jacket Prototype", description: "Demonstrating uniform heating with a 5V battery pack.", status: "current", date: "Q4 2025" },
        { phase: "Phase 3: Commercial", title: "Apparel Partnerships", description: "Collaborating with outdoor brands for winter 2026 collections.", status: "upcoming", date: "2026" }
      ]
    },
    applications: {
      title: "Applications",
      subtitle: "Versatile thermal solutions.",
      items: [
        { title: "Smart Apparel", description: "Lightweight heated jackets and gloves for extreme cold.", icon: wr },
        { title: "Automotive", description: "Efficient seat and steering wheel heating systems.", icon: I },
        { title: "Aerospace", description: "De-icing solutions for wings and sensors.", icon: ge },
        { title: "Healthcare", description: "Therapeutic wearable heat pads for pain relief.", icon: ce }
      ]
    },
    cta: {
      title: "Feel the warmth.",
      description: "Thermaphene is redefining thermal management. Partner with us to integrate this technology into your next product line.",
      primaryButton: { text: "Get Started", link: "/contact" },
      secondaryButton: { text: "Back to Pipeline", link: "/products/pipeline" },
      gradient: "from-orange-900/30 via-orange-950/20 to-black"
    }
  },
  graphenode: {
    id: "graphenode",
    title: "Graphenode",
    subtitle: "Graphene Nanoplatelet Electrode Material | High-purity, multi-grade graphene nanoplatelets engineered as superior anode materials for lithium-ion batteries and advanced energy storage systems.",
    category: "R&D Pipeline",
    categoryColor: "bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-500/30",
    heroImages: ["/images/pipeline/studio/Graphenode.png"],
    accentColor: "teal",
    introduction: {
      title: "The Challenge",
      subtitle: "Conventional graphite anodes are holding batteries back.",
      description: [
        "Standard graphite anodes in lithium-ion batteries have a theoretical capacity ceiling of 372 mAh/g. As the demand for longer-range EVs, faster-charging devices, and grid-scale storage grows, this limitation becomes a critical bottleneck.",
        "Graphenode NRG-series graphene nanoplatelets address this at the atomic level. With surface areas up to 500 m²/g and carbon purity exceeding 95%, our platelet morphology creates a superior electrode matrix — enabling higher charge capacity, faster ion transport, and dramatically extended cycle life."
      ],
      images: [
        "/images/pipeline/studio/Graphenode.png",
        "/images/pipeline/studio/graphenodes.png",
        "/images/pipeline/studio/Graphenodes-2.png"
      ]
    },
    processFlow: {
      title: "How It Works",
      subtitle: "From nanoplatelet to high-performance electrode.",
      steps: [
        { icon: we, title: "Dispersion", description: "NRG nanoplatelets are dispersed in NMP solvent via ultrasonication for 30–60 minutes to achieve uniform distribution." },
        { icon: X, title: "Slurry Preparation", description: "Graphene (5%), graphite (85%), and PVDF binder (10%) are mixed for 12 hours to form a homogeneous electrode slurry." },
        { icon: ce, title: "Electrode Coating", description: "Slurry is doctor-blade coated onto copper foil at ~100 µm wet thickness and vacuum-dried at 80°C for 12 hours." },
        { icon: I, title: "Formation Cycling", description: "Assembled cells undergo 0.1C formation cycling for 3–5 cycles, then performance-tested at up to 5C fast-charge rates." }
      ]
    },
    features: {
      title: "Core Performance",
      subtitle: "Two grades. One mission.",
      hero: {
        icon: Pe,
        title: "Multi-Grade NRG Platform",
        description: "The NRG series offers two precision-engineered grades: NRG-150 with 130–140 m²/g surface area and ~10 graphene layers for high-conductivity applications, and NRG-70 with 70–75 m²/g and ~20–25 layers for balanced performance — both with >99% purity validated by Raman spectroscopy, XRD, and FE-SEM.",
        gradient: "from-emerald-900 via-emerald-950 to-black",
        iconBg: "bg-emerald-500/20 border border-emerald-400/30",
        iconColor: "text-emerald-300"
      },
      stats: [
        { value: ">99%", label: "Purity", description: "Consistent across all NRG grades for reliable electrochemical performance.", bg: "bg-gradient-to-br from-emerald-50 to-emerald-100/50", border: "border-emerald-200", color: "text-emerald-700" },
        { icon: I, title: "5,000 Cycles", description: "Accelerated simulation projects durability over 5,000 charge-discharge cycles for lifetime reliability.", iconColor: "text-emerald-600", iconBg: "bg-emerald-50 border border-emerald-100" }
      ],
      metrics: [
        { value: "500 m²/g", label: "Max Surface Area" },
        { value: "95%", label: "Carbon Purity (Li-PO)" },
        { value: "3–5C", label: "Fast Charge Capability" },
        { value: "Neutral pH", label: "Safe Handling" }
      ]
    },
    gallery: {
      title: "Product Gallery",
      subtitle: "Visualizing graphene nanoplatelet electrode materials.",
      images: [
        { image: "/images/pipeline/studio/Graphenode.png", label: "Graphenode Studio" },
        { image: "/images/pipeline/studio/graphenodes.png", label: "NRG Nanoplatelets" },
        { image: "/images/pipeline/studio/Graphenodes-2.png", label: "Electrode Coating" }
      ]
    },
    timeline: {
      title: "Development Roadmap",
      subtitle: "From lab synthesis to battery cell integration.",
      events: [
        { phase: "Phase 1: Material R&D", title: "NRG Grade Development", description: "Synthesising and characterising NRG-70 and NRG-150 grades with validated Raman spectroscopy, XRD, and FE-SEM data.", status: "completed", date: "Q2 2024" },
        { phase: "Phase 2: Electrode Prototype", title: "200 mAh Cell Validation", description: "Graphene electrode coating on 200 mAh coin/pouch cells. Formation cycling at 0.1C, rate capability testing up to 5C, and 500-cycle life assessment.", status: "current", date: "Q1 2026" },
        { phase: "Phase 3: Scale-Up", title: "Commercial Cell Integration", description: "Partnering with battery manufacturers for full-scale cell production using NRG anode materials with projected 5,000-cycle durability.", status: "upcoming", date: "2027" }
      ]
    },
    applications: {
      title: "Applications",
      subtitle: "Energy storage across every scale.",
      items: [
        { title: "Li-ion Battery Anodes", description: "Superior anode material for EV, consumer electronics, and grid-scale battery cells.", icon: Pe },
        { title: "Supercapacitors", description: "High surface area nanoplatelets for ultra-fast charge/discharge energy storage devices.", icon: I },
        { title: "Conductive Inks & Coatings", description: "Compatible with most polymers for electrically and thermally conductive ink formulations.", icon: X },
        { title: "Thermal Interface Materials", description: "Heat spreader and thermal management applications leveraging graphene conductivity.", icon: ce }
      ]
    },
    cta: {
      title: "Power the next generation.",
      description: "We are seeking battery manufacturers and R&D partners to integrate Graphenode NRG electrodes into next-generation cell development.",
      primaryButton: { text: "Request Material Sample", link: "/contact" },
      secondaryButton: { text: "Back to Pipeline", link: "/products/pipeline" },
      gradient: "from-emerald-900/30 via-emerald-950/20 to-black"
    }
  }
}, Rs = () => /* @__PURE__ */ e(ve, { data: ye.rustene }), Is = () => /* @__PURE__ */ e(ve, { data: ye.graphyre }), Gs = () => /* @__PURE__ */ e(ve, { data: ye.graphosite }), Es = () => /* @__PURE__ */ e(ve, { data: ye.thermaphene }), js = () => /* @__PURE__ */ e(ve, { data: ye.armophene }), Y = ({
  children: r,
  header: i,
  footer: n,
  variant: o = "default",
  // 'default', 'bordered', 'elevated', 'flat'
  theme: a = "dark",
  // 'dark', 'light'
  hoverable: s = !1,
  clickable: d = !1,
  link: m,
  onClick: p,
  className: c = "",
  icon: g
}) => {
  const b = "rounded-sm transition-all duration-300", x = {
    default: a === "dark" ? "bg-neutral-900 border border-neutral-800" : "bg-white border border-neutral-200",
    bordered: a === "dark" ? "bg-transparent border border-neutral-800" : "bg-transparent border border-neutral-200",
    elevated: a === "dark" ? "bg-neutral-900 border border-neutral-800 shadow-lg" : "bg-white border border-neutral-200 shadow-lg",
    flat: a === "dark" ? "bg-neutral-900" : "bg-white"
  }, w = s || d ? a === "dark" ? "hover:border-neutral-600 hover:shadow-xl hover:-translate-y-1" : "hover:border-neutral-400 hover:shadow-xl hover:-translate-y-1" : "", N = d || m ? "cursor-pointer" : "", h = `${b} ${x[o]} ${w} ${N} ${c}`, l = /* @__PURE__ */ t(be, { children: [
    (i || g) && /* @__PURE__ */ e("div", { className: `p-6 border-b ${a === "dark" ? "border-neutral-800" : "border-neutral-200"}`, children: /* @__PURE__ */ t("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ t("div", { className: "flex-1", children: [
        g && /* @__PURE__ */ e(g, { className: `w-8 h-8 mb-4 ${a === "dark" ? "text-white" : "text-neutral-900"}`, strokeWidth: 1.5 }),
        typeof i == "string" ? /* @__PURE__ */ e("h3", { className: `text-xl font-medium ${a === "dark" ? "text-white" : "text-neutral-900"}`, children: i }) : i
      ] }),
      (d || m) && /* @__PURE__ */ e(le, { className: `w-5 h-5 transition-transform group-hover:translate-x-1 ${a === "dark" ? "text-neutral-500" : "text-neutral-400"}` })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "p-6", children: r }),
    n && /* @__PURE__ */ e("div", { className: `p-6 border-t ${a === "dark" ? "border-neutral-800 bg-neutral-950/50" : "border-neutral-200 bg-neutral-50"}`, children: n })
  ] });
  return m ? /* @__PURE__ */ e(L, { to: m, className: `${h} group block`, children: l }) : d && p ? /* @__PURE__ */ e("div", { onClick: p, className: `${h} group`, children: l }) : /* @__PURE__ */ e("div", { className: h, children: l });
};
Y.Header = ({ children: r, className: i = "", theme: n = "dark" }) => /* @__PURE__ */ e("div", { className: `p-6 border-b ${n === "dark" ? "border-neutral-800" : "border-neutral-200"} ${i}`, children: r });
Y.Body = ({ children: r, className: i = "" }) => /* @__PURE__ */ e("div", { className: `p-6 ${i}`, children: r });
Y.Footer = ({ children: r, className: i = "", theme: n = "dark" }) => /* @__PURE__ */ e("div", { className: `p-6 border-t ${n === "dark" ? "border-neutral-800 bg-neutral-950/50" : "border-neutral-200 bg-neutral-50"} ${i}`, children: r });
Y.Title = ({ children: r, className: i = "", theme: n = "dark" }) => /* @__PURE__ */ e("h3", { className: `text-xl font-medium ${n === "dark" ? "text-white" : "text-neutral-900"} ${i}`, children: r });
Y.Description = ({ children: r, className: i = "", theme: n = "dark" }) => /* @__PURE__ */ e("p", { className: `text-sm ${n === "dark" ? "text-neutral-400" : "text-neutral-600"} ${i}`, children: r });
const Fs = () => {
  const r = /* @__PURE__ */ t(be, { children: [
    /* @__PURE__ */ t("section", { className: "mb-32", children: [
      /* @__PURE__ */ e(
        k,
        {
          number: "04",
          title: "Seawater Electrolyzer - Experimental Validation",
          subtitle: "Direct hydrogen generation from raw seawater without filtration."
        }
      ),
      /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-10 md:p-12 text-white mb-12 relative overflow-hidden shadow-2xl border border-neutral-700", children: [
        /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" }),
        /* @__PURE__ */ e("div", { className: "absolute -bottom-24 -right-24 w-96 h-96 bg-neutral-700/10 rounded-full blur-3xl" }),
        /* @__PURE__ */ t("div", { className: "relative z-10", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ e("div", { className: "w-12 h-12 rounded-full bg-white/10 flex items-center justify-center", children: /* @__PURE__ */ e(xn, { className: "w-6 h-6 text-white" }) }),
            /* @__PURE__ */ e("div", { className: "text-sm font-mono uppercase tracking-widest text-neutral-300", children: "Verified by GC Analysis • August 2025" })
          ] }),
          /* @__PURE__ */ e("h3", { className: "text-4xl md:text-5xl font-display font-semibold mb-4 tracking-tight", children: "99.51% Hydrogen Purity" }),
          /* @__PURE__ */ e("p", { className: "text-xl text-neutral-300 max-w-3xl font-light", children: "Achieved directly from unfiltered seawater electrolysis — no desalination or purification required" })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "grid md:grid-cols-4 gap-6 mb-12", children: [
        /* @__PURE__ */ e(Y, { className: "bg-white border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-lg transition-all duration-500", children: /* @__PURE__ */ t("div", { className: "text-center", children: [
          /* @__PURE__ */ e("div", { className: "text-4xl font-display font-bold text-neutral-800 mb-2", children: "99.51%" }),
          /* @__PURE__ */ e("div", { className: "text-sm font-semibold text-neutral-900 mb-1", children: "H₂ Purity" }),
          /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500", children: "GC-FID Verified" })
        ] }) }),
        /* @__PURE__ */ e(Y, { className: "bg-white border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-lg transition-all duration-500", children: /* @__PURE__ */ t("div", { className: "text-center", children: [
          /* @__PURE__ */ e("div", { className: "text-4xl font-display font-bold text-neutral-800 mb-2", children: "<0.5%" }),
          /* @__PURE__ */ e("div", { className: "text-sm font-semibold text-neutral-900 mb-1", children: "Impurities" }),
          /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500", children: "O₂/N₂/H₂O vapor" })
        ] }) }),
        /* @__PURE__ */ e(Y, { className: "bg-white border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-lg transition-all duration-500", children: /* @__PURE__ */ t("div", { className: "text-center", children: [
          /* @__PURE__ */ e("div", { className: "text-4xl font-display font-bold text-neutral-800 mb-2", children: "Zero" }),
          /* @__PURE__ */ e("div", { className: "text-sm font-semibold text-neutral-900 mb-1", children: "Filtration" }),
          /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500", children: "No pre-treatment" })
        ] }) }),
        /* @__PURE__ */ e(Y, { className: "bg-white border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-lg transition-all duration-500", children: /* @__PURE__ */ t("div", { className: "text-center", children: [
          /* @__PURE__ */ e("div", { className: "text-4xl font-display font-bold text-neutral-800 mb-2", children: "Multi-Cell" }),
          /* @__PURE__ */ e("div", { className: "text-sm font-semibold text-neutral-900 mb-1", children: "Stack Design" }),
          /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500", children: "Scalable system" })
        ] }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "grid lg:grid-cols-2 gap-12 mb-12", children: [
        /* @__PURE__ */ t(Y, { className: "bg-white border-neutral-200 p-8 shadow-lg", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center shadow-lg", children: /* @__PURE__ */ e(we, { className: "w-5 h-5 text-white" }) }),
            /* @__PURE__ */ e("h4", { className: "text-xl font-display font-semibold text-neutral-900", children: "Experimental Setup" })
          ] }),
          /* @__PURE__ */ t("div", { className: "space-y-4", children: [
            /* @__PURE__ */ t("div", { className: "p-3 bg-neutral-50 rounded-lg border border-neutral-200", children: [
              /* @__PURE__ */ e("div", { className: "text-sm font-bold text-neutral-800 mb-2", children: "System Type" }),
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-700 leading-relaxed", children: "Multi-cell stacked seawater electrolyzer with parallel cell assembly, transparent acrylic plates, and stainless-steel bolts" })
            ] }),
            /* @__PURE__ */ t("div", { className: "p-3 bg-white/70 rounded-lg border border-brand-500/10", children: [
              /* @__PURE__ */ e("div", { className: "text-sm font-bold text-brand-700 mb-2", children: "Feedstock" }),
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-700 leading-relaxed", children: "Raw seawater (unfiltered, untreated)" })
            ] }),
            /* @__PURE__ */ t("div", { className: "p-3 bg-white/70 rounded-lg border border-brand-500/10", children: [
              /* @__PURE__ */ e("div", { className: "text-sm font-bold text-brand-700 mb-2", children: "Power Source" }),
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-700 leading-relaxed", children: "DC regulated power supply connected to electrode stack" })
            ] }),
            /* @__PURE__ */ t("div", { className: "p-3 bg-white/70 rounded-lg border border-brand-500/10", children: [
              /* @__PURE__ */ e("div", { className: "text-sm font-bold text-brand-700 mb-2", children: "Gas Collection" }),
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-700 leading-relaxed", children: "Blue pneumatic tubing for H₂ and O₂ segregation and collection" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ t(Y, { className: "bg-white border-neutral-200 p-8 shadow-lg", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center shadow-lg", children: /* @__PURE__ */ e(ce, { className: "w-5 h-5 text-white" }) }),
            /* @__PURE__ */ e("h4", { className: "text-xl font-display font-semibold text-neutral-900", children: "GC Analysis Results" })
          ] }),
          /* @__PURE__ */ t("div", { className: "space-y-3 mb-6", children: [
            /* @__PURE__ */ t("div", { className: "p-3 bg-neutral-50 rounded-lg border border-neutral-200", children: [
              /* @__PURE__ */ e("div", { className: "text-sm font-bold text-neutral-800 mb-2", children: "Technique" }),
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-700", children: "Gas Chromatography (GC) with Flame Ionization Detector (FID)" })
            ] }),
            /* @__PURE__ */ t("div", { className: "p-3 bg-white/70 rounded-lg border border-brand-500/10", children: [
              /* @__PURE__ */ e("div", { className: "text-sm font-bold text-brand-700 mb-2", children: "Analysis Date" }),
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-700", children: "25 August 2025" })
            ] }),
            /* @__PURE__ */ t("div", { className: "p-3 bg-white/70 rounded-lg border border-brand-500/10", children: [
              /* @__PURE__ */ e("div", { className: "text-sm font-bold text-brand-700 mb-2", children: "Sample Source" }),
              /* @__PURE__ */ e("div", { className: "text-sm text-neutral-700", children: "Hydrogen gas directly from electrolyzer outlet (no post-purification)" })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "bg-white border-2 border-neutral-200 rounded-xl overflow-hidden shadow-sm", children: /* @__PURE__ */ t("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ e("thead", { className: "bg-gradient-to-r from-neutral-700 to-neutral-800 border-b border-neutral-800", children: /* @__PURE__ */ t("tr", { children: [
              /* @__PURE__ */ e("th", { className: "py-3 px-4 text-left font-bold text-white", children: "Parameter" }),
              /* @__PURE__ */ e("th", { className: "py-3 px-4 text-left font-bold text-white", children: "Peak 1" }),
              /* @__PURE__ */ e("th", { className: "py-3 px-4 text-left font-bold text-white", children: "Peak 2" })
            ] }) }),
            /* @__PURE__ */ t("tbody", { className: "divide-y divide-neutral-200", children: [
              /* @__PURE__ */ t("tr", { className: "hover:bg-neutral-50 transition-colors", children: [
                /* @__PURE__ */ e("td", { className: "py-3 px-4 font-semibold text-neutral-700", children: "Retention Time" }),
                /* @__PURE__ */ e("td", { className: "py-3 px-4 font-mono text-neutral-900 font-medium", children: "0.49 min" }),
                /* @__PURE__ */ e("td", { className: "py-3 px-4 font-mono text-neutral-900 font-medium", children: "1.42 min" })
              ] }),
              /* @__PURE__ */ t("tr", { className: "hover:bg-teal-50/50 transition-colors", children: [
                /* @__PURE__ */ e("td", { className: "py-3 px-4 font-semibold text-neutral-700", children: "Area (%)" }),
                /* @__PURE__ */ e("td", { className: "py-3 px-4 font-mono font-bold text-neutral-800 text-base", children: "99.51%" }),
                /* @__PURE__ */ e("td", { className: "py-3 px-4 font-mono text-neutral-900 font-medium", children: "0.49%" })
              ] }),
              /* @__PURE__ */ t("tr", { className: "hover:bg-teal-50/50 transition-colors", children: [
                /* @__PURE__ */ e("td", { className: "py-3 px-4 font-semibold text-neutral-700", children: "Interpretation" }),
                /* @__PURE__ */ e("td", { className: "py-3 px-4 text-neutral-900 font-bold", children: "Hydrogen (H₂)" }),
                /* @__PURE__ */ e("td", { className: "py-3 px-4 text-neutral-600 font-medium", children: "Minor impurity" })
              ] })
            ] })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ t(Y, { className: "bg-gradient-to-br from-neutral-900 to-neutral-800 border-neutral-700 p-10 shadow-xl", children: [
        /* @__PURE__ */ t("h4", { className: "text-2xl font-display font-semibold text-white mb-8 flex items-center gap-3", children: [
          /* @__PURE__ */ e(Ia, { className: "w-7 h-7 text-neutral-400" }),
          "Key Takeaways"
        ] }),
        /* @__PURE__ */ t("div", { className: "grid md:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-lg bg-neutral-700 flex items-center justify-center mb-4", children: /* @__PURE__ */ e(I, { className: "w-5 h-5 text-white" }) }),
            /* @__PURE__ */ e("h5", { className: "text-lg font-semibold text-white mb-2", children: "High Purity Achievement" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-400 text-sm leading-relaxed", children: "99.51% H₂ purity achieved directly from seawater demonstrates excellent electrolyzer efficiency and selectivity" })
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-lg bg-neutral-700 flex items-center justify-center mb-4", children: /* @__PURE__ */ e(ke, { className: "w-5 h-5 text-white" }) }),
            /* @__PURE__ */ e("h5", { className: "text-lg font-semibold text-white mb-2", children: "No Filtration Required" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-400 text-sm leading-relaxed", children: "Direct processing of raw seawater without desalination simplifies the system for scalable hydrogen production" })
          ] }),
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-lg bg-neutral-700 flex items-center justify-center mb-4", children: /* @__PURE__ */ e(Ie, { className: "w-5 h-5 text-white" }) }),
            /* @__PURE__ */ e("h5", { className: "text-lg font-semibold text-white mb-2", children: "Robust Performance" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-400 text-sm leading-relaxed", children: "Effective gas segregation even with saline electrolyte proves electrode durability and system reliability" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t("section", { className: "mb-32", children: [
      /* @__PURE__ */ e(
        k,
        {
          number: "05",
          title: "Energy Generation from Hydrogen",
          subtitle: "Fuel cell efficiency and electrical output calculations."
        }
      ),
      /* @__PURE__ */ t("div", { className: "bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-10 md:p-12 text-white mb-12 relative overflow-hidden shadow-2xl border border-neutral-700", children: [
        /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" }),
        /* @__PURE__ */ e("div", { className: "absolute -bottom-24 -right-24 w-96 h-96 bg-neutral-700/10 rounded-full blur-3xl" }),
        /* @__PURE__ */ t("div", { className: "relative z-10", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ e("div", { className: "w-12 h-12 rounded-full bg-white/10 flex items-center justify-center", children: /* @__PURE__ */ e(Pe, { className: "w-6 h-6 text-white" }) }),
            /* @__PURE__ */ e("div", { className: "text-sm font-mono uppercase tracking-widest text-neutral-300", children: "Fuel Cell @ 60% Efficiency" })
          ] }),
          /* @__PURE__ */ e("h3", { className: "text-4xl md:text-5xl font-display font-semibold mb-4 tracking-tight", children: "1 kg H₂ → 20-24 kWh" }),
          /* @__PURE__ */ e("p", { className: "text-xl text-neutral-300 max-w-3xl font-light", children: "High energy density and clean conversion make hydrogen ideal for distributed power generation" })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "grid md:grid-cols-2 gap-6 mb-12", children: [
        /* @__PURE__ */ t(Y, { className: "bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200 p-6 shadow-lg hover:shadow-xl transition-all duration-500", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ e(ke, { className: "w-8 h-8 text-cyan-600" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-sm font-semibold text-neutral-600 uppercase tracking-wider", children: "Water Input" }),
              /* @__PURE__ */ e("div", { className: "text-3xl font-display font-bold text-cyan-600", children: "9-10 L" })
            ] })
          ] }),
          /* @__PURE__ */ t("p", { className: "text-sm text-neutral-700 leading-relaxed", children: [
            "Water required to produce ",
            /* @__PURE__ */ e("strong", { children: "1 kg of hydrogen" }),
            " via electrolysis (approximately 9-10 kg/liters)"
          ] })
        ] }),
        /* @__PURE__ */ t(Y, { className: "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 p-6 shadow-lg hover:shadow-xl transition-all duration-500", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ e(I, { className: "w-8 h-8 text-amber-600" }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("div", { className: "text-sm font-semibold text-neutral-600 uppercase tracking-wider", children: "Electricity Consumption" }),
              /* @__PURE__ */ e("div", { className: "text-3xl font-display font-bold text-amber-600", children: "~40 kWh" })
            ] })
          ] }),
          /* @__PURE__ */ t("p", { className: "text-sm text-neutral-700 leading-relaxed", children: [
            "Electrical energy required to produce ",
            /* @__PURE__ */ e("strong", { children: "1 kg of hydrogen" }),
            " through water electrolysis"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("div", { className: "grid md:grid-cols-2 gap-8 mb-12", children: [
        /* @__PURE__ */ t(Y, { className: "bg-white border-2 border-neutral-200 p-8 shadow-lg hover:shadow-xl transition-all duration-500", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ e("div", { className: "w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center shadow-sm", children: /* @__PURE__ */ e(I, { className: "w-6 h-6 text-neutral-700" }) }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("h4", { className: "text-sm font-semibold text-neutral-500 uppercase tracking-wider", children: "Lower Heating Value" }),
              /* @__PURE__ */ e("div", { className: "text-3xl font-display font-bold text-neutral-800 mt-1", children: "20.0 kWh/kg" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "space-y-4 text-sm", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center pb-3 border-b border-neutral-100", children: [
              /* @__PURE__ */ e("span", { className: "text-neutral-600", children: "Chemical Energy (LHV)" }),
              /* @__PURE__ */ e("span", { className: "font-mono font-semibold text-neutral-900", children: "120 MJ/kg" })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center pb-3 border-b border-neutral-100", children: [
              /* @__PURE__ */ e("span", { className: "text-neutral-600", children: "Fuel Cell Efficiency" }),
              /* @__PURE__ */ e("span", { className: "font-mono font-semibold text-neutral-800", children: "60%" })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center pb-3 border-b border-neutral-100", children: [
              /* @__PURE__ */ e("span", { className: "text-neutral-600", children: "Electrical Output" }),
              /* @__PURE__ */ e("span", { className: "font-mono font-semibold text-neutral-900", children: "72.0 MJ" })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center pt-2", children: [
              /* @__PURE__ */ e("span", { className: "text-neutral-900 font-semibold", children: "Delivered Energy" }),
              /* @__PURE__ */ e("span", { className: "font-mono font-bold text-2xl text-neutral-800", children: "20.0 kWh" })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "mt-6 p-4 bg-neutral-50 rounded-lg border border-neutral-200", children: /* @__PURE__ */ t("p", { className: "text-xs text-neutral-700 font-medium", children: [
            /* @__PURE__ */ e("strong", { children: "Standard Industry Basis:" }),
            " LHV is typically used for fuel cell efficiency reporting in engineering practice."
          ] }) })
        ] }),
        /* @__PURE__ */ t(Y, { className: "bg-white border-2 border-blue-200 p-8 shadow-lg hover:shadow-xl transition-all duration-500", children: [
          /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ e("div", { className: "w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shadow-sm", children: /* @__PURE__ */ e(Pe, { className: "w-6 h-6 text-blue-600" }) }),
            /* @__PURE__ */ t("div", { children: [
              /* @__PURE__ */ e("h4", { className: "text-sm font-semibold text-neutral-500 uppercase tracking-wider", children: "Higher Heating Value" }),
              /* @__PURE__ */ e("div", { className: "text-3xl font-display font-bold text-blue-600 mt-1", children: "23.7 kWh/kg" })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "space-y-4 text-sm", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center pb-3 border-b border-neutral-100", children: [
              /* @__PURE__ */ e("span", { className: "text-neutral-600", children: "Chemical Energy (HHV)" }),
              /* @__PURE__ */ e("span", { className: "font-mono font-semibold text-neutral-900", children: "142 MJ/kg" })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center pb-3 border-b border-neutral-100", children: [
              /* @__PURE__ */ e("span", { className: "text-neutral-600", children: "Fuel Cell Efficiency" }),
              /* @__PURE__ */ e("span", { className: "font-mono font-semibold text-blue-600", children: "60%" })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center pb-3 border-b border-neutral-100", children: [
              /* @__PURE__ */ e("span", { className: "text-neutral-600", children: "Electrical Output" }),
              /* @__PURE__ */ e("span", { className: "font-mono font-semibold text-neutral-900", children: "85.2 MJ" })
            ] }),
            /* @__PURE__ */ t("div", { className: "flex justify-between items-center pt-2", children: [
              /* @__PURE__ */ e("span", { className: "text-neutral-900 font-semibold", children: "Delivered Energy" }),
              /* @__PURE__ */ e("span", { className: "font-mono font-bold text-2xl text-blue-600", children: "23.7 kWh" })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { className: "mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100", children: /* @__PURE__ */ t("p", { className: "text-xs text-blue-800 font-medium", children: [
            /* @__PURE__ */ e("strong", { children: "Alternative Basis:" }),
            " HHV includes water condensation energy, giving higher theoretical yield."
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ t(Y, { className: "bg-white border-neutral-200 p-10 mb-12 shadow-lg", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center gap-3 mb-8", children: [
          /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center shadow-lg", children: /* @__PURE__ */ e(Xe, { className: "w-5 h-5 text-white" }) }),
          /* @__PURE__ */ e("h4", { className: "text-2xl font-display font-semibold text-neutral-900", children: "Step-by-Step Calculation" })
        ] }),
        /* @__PURE__ */ t("div", { className: "space-y-6", children: [
          /* @__PURE__ */ t("div", { className: "bg-white border-2 border-neutral-200 rounded-xl p-6", children: [
            /* @__PURE__ */ e("div", { className: "text-sm font-bold text-neutral-500 uppercase tracking-wider mb-3", children: "Step 1: Energy Content per kg of Hydrogen" }),
            /* @__PURE__ */ t("div", { className: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ t("div", { className: "flex items-center justify-between p-3 bg-neutral-50 rounded-lg", children: [
                /* @__PURE__ */ e("span", { className: "text-sm font-medium text-neutral-700", children: "Lower Heating Value (LHV)" }),
                /* @__PURE__ */ e("span", { className: "font-mono font-bold text-neutral-800", children: "120 MJ/kg" })
              ] }),
              /* @__PURE__ */ t("div", { className: "flex items-center justify-between p-3 bg-blue-50 rounded-lg", children: [
                /* @__PURE__ */ e("span", { className: "text-sm font-medium text-neutral-700", children: "Higher Heating Value (HHV)" }),
                /* @__PURE__ */ e("span", { className: "font-mono font-bold text-blue-600", children: "142 MJ/kg" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "bg-white border-2 border-neutral-200 rounded-xl p-6", children: [
            /* @__PURE__ */ e("div", { className: "text-sm font-bold text-neutral-500 uppercase tracking-wider mb-3", children: "Step 2: Electrical Energy Output (Chemical Energy × 60% Efficiency)" }),
            /* @__PURE__ */ t("div", { className: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ t("div", { className: "p-4 bg-neutral-50 rounded-lg", children: [
                /* @__PURE__ */ e("div", { className: "text-xs text-neutral-600 mb-2", children: "LHV Calculation:" }),
                /* @__PURE__ */ t("div", { className: "font-mono text-sm text-neutral-800", children: [
                  "120 MJ × 0.60 = ",
                  /* @__PURE__ */ e("span", { className: "font-bold text-brand-600", children: "72.0 MJ" })
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "p-4 bg-blue-50 rounded-lg", children: [
                /* @__PURE__ */ e("div", { className: "text-xs text-neutral-600 mb-2", children: "HHV Calculation:" }),
                /* @__PURE__ */ t("div", { className: "font-mono text-sm text-neutral-800", children: [
                  "142 MJ × 0.60 = ",
                  /* @__PURE__ */ e("span", { className: "font-bold text-blue-600", children: "85.2 MJ" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "bg-white border-2 border-neutral-200 rounded-xl p-6", children: [
            /* @__PURE__ */ e("div", { className: "text-sm font-bold text-neutral-500 uppercase tracking-wider mb-3", children: "Step 3: Convert to kWh (1 kWh = 3.6 MJ)" }),
            /* @__PURE__ */ t("div", { className: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ t("div", { className: "p-4 bg-neutral-50 rounded-lg", children: [
                /* @__PURE__ */ e("div", { className: "text-xs text-neutral-600 mb-2", children: "LHV Result:" }),
                /* @__PURE__ */ t("div", { className: "font-mono text-sm text-neutral-800", children: [
                  "72.0 MJ ÷ 3.6 = ",
                  /* @__PURE__ */ e("span", { className: "font-bold text-2xl text-brand-600", children: "20.0 kWh" })
                ] })
              ] }),
              /* @__PURE__ */ t("div", { className: "p-4 bg-blue-50 rounded-lg", children: [
                /* @__PURE__ */ e("div", { className: "text-xs text-neutral-600 mb-2", children: "HHV Result:" }),
                /* @__PURE__ */ t("div", { className: "font-mono text-sm text-neutral-800", children: [
                  "85.2 MJ ÷ 3.6 = ",
                  /* @__PURE__ */ e("span", { className: "font-bold text-2xl text-blue-600", children: "23.7 kWh" })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t(Y, { className: "bg-gradient-to-br from-neutral-900 to-neutral-800 border-neutral-700 p-10 shadow-xl", children: [
        /* @__PURE__ */ t("h4", { className: "text-2xl font-display font-semibold text-white mb-6 flex items-center gap-3", children: [
          /* @__PURE__ */ e(Ia, { className: "w-7 h-7 text-neutral-400" }),
          "Important Notes"
        ] }),
        /* @__PURE__ */ t("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ t("div", { className: "p-6 bg-white/5 border border-white/10 rounded-xl", children: [
            /* @__PURE__ */ e("div", { className: "text-sm font-bold text-neutral-400 uppercase tracking-wider mb-3", children: "Industry Standard" }),
            /* @__PURE__ */ t("p", { className: "text-neutral-300 leading-relaxed", children: [
              "Engineers typically report fuel-cell efficiency relative to the ",
              /* @__PURE__ */ e("strong", { className: "text-white", children: "Lower Heating Value (LHV)" }),
              ", making ",
              /* @__PURE__ */ e("strong", { className: "text-neutral-300", children: "20 kWh/kg" }),
              " the standard figure used in practice."
            ] })
          ] }),
          /* @__PURE__ */ t("div", { className: "p-6 bg-white/5 border border-white/10 rounded-xl", children: [
            /* @__PURE__ */ e("div", { className: "text-sm font-bold text-neutral-400 uppercase tracking-wider mb-3", children: "Real-World Performance" }),
            /* @__PURE__ */ e("p", { className: "text-neutral-300 leading-relaxed", children: "Actual systems may experience additional energy losses due to auxiliary components (air compressors, pumps, inverters), reducing delivered output slightly below the stack's rated value." })
          ] })
        ] })
      ] })
    ] })
  ] });
  return /* @__PURE__ */ e(ve, { data: ye.hydrogenMembranes, customSections: r });
}, Hs = () => /* @__PURE__ */ e(ve, { data: ye.desalinationMembranes }), zs = () => /* @__PURE__ */ e(ve, { data: ye.atmosphericHarvesting }), Ws = () => /* @__PURE__ */ e(ve, { data: ye.grapheneGlassFibres }), Bs = () => /* @__PURE__ */ e(ve, { data: ye.batteryStorage }), Os = () => /* @__PURE__ */ e(ve, { data: ye.graphenode }), Zl = {
  hero: {
    title: "Industries We Serve",
    subtitle: "Transforming multiple industries with graphene solutions"
  }
}, Vs = () => {
  const r = Zl, i = [
    {
      name: "Construction & Infrastructure",
      path: "/industries/construction",
      description: "High-performance concrete and durable materials for construction",
      products: ["Graphacrete"]
    },
    {
      name: "Solar & Clean Energy",
      path: "/industries/solar-energy",
      description: "Efficiency enhancement and thermal management for solar energy",
      products: ["Graffisol"]
    },
    {
      name: "Automotive & Coatings",
      path: "/industries/automotive",
      description: "Protective coatings and advanced materials for vehicles",
      products: ["Ceraphene", "Graphyre"]
    },
    {
      name: "Advanced Materials",
      path: "/industries/advanced-materials",
      description: "Breakthrough materials for aerospace, defense, and specialized applications",
      products: ["Graphosite", "Armophene"]
    }
  ];
  return /* @__PURE__ */ t("div", { className: "min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white", children: [
    /* @__PURE__ */ e("div", { className: "bg-gradient-to-br from-gray-900 via-purple-900/20 to-black py-20", children: /* @__PURE__ */ e("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ t("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ e("h1", { className: "text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text", children: r.hero.title }),
      /* @__PURE__ */ e("p", { className: "text-xl text-gray-300", children: r.hero.subtitle })
    ] }) }) }),
    /* @__PURE__ */ e("div", { className: "container mx-auto px-4 py-16", children: /* @__PURE__ */ t("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ t("section", { className: "mb-16", children: [
        /* @__PURE__ */ e("p", { className: "text-lg text-gray-300 leading-relaxed text-center mb-12", children: "Our graphene-based solutions deliver measurable performance improvements across diverse industries, from construction to clean energy, automotive to aerospace." }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: i.map((n, o) => /* @__PURE__ */ t(
          L,
          {
            to: n.path,
            className: "bg-gray-800/50 p-8 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105",
            children: [
              /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-purple-400 mb-4", children: n.name }),
              /* @__PURE__ */ e("p", { className: "text-gray-300 mb-4", children: n.description }),
              /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-2", children: n.products.map((a, s) => /* @__PURE__ */ e("span", { className: "bg-purple-900/30 px-3 py-1 rounded-full text-purple-300 text-sm", children: a }, s)) })
            ]
          },
          o
        )) })
      ] }),
      /* @__PURE__ */ t("section", { className: "bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-lg border border-purple-500/30 text-center", children: [
        /* @__PURE__ */ e("h2", { className: "text-3xl font-bold mb-4", children: "Don't See Your Industry?" }),
        /* @__PURE__ */ e("p", { className: "text-lg text-gray-300 mb-6", children: "We work across many sectors. Contact us to discuss your specific application needs." }),
        /* @__PURE__ */ e(
          L,
          {
            to: "/contact",
            className: "inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors",
            children: "Contact Us"
          }
        )
      ] })
    ] }) })
  ] });
}, Xl = {
  hero: {
    title: "Construction & Infrastructure",
    subtitle: "High-performance concrete and durable materials for sustainable construction"
  },
  sections: {
    solutions: {
      heading: "Industry Solutions",
      body: "Transform construction projects with graphene-enhanced materials that deliver superior strength, durability, and sustainability while reducing environmental impact."
    },
    applications: {
      heading: "Applications",
      items: [
        "High-Rise Construction",
        "Infrastructure Projects",
        "Precast Manufacturing",
        "Marine Structures",
        "Highway Construction",
        "Sustainable Housing"
      ]
    },
    featuredProduct: {
      heading: "Featured Product",
      name: "Graphacrete",
      body: "High-performance concrete additive delivering 40-50% strength gain, 15-20% cement reduction, and superior durability.",
      ctaLabel: "Learn More"
    },
    related: {
      heading: "Related Pages",
      graphacreteLinkLabel: "→ Graphacrete Product Page",
      contactLinkLabel: "→ Contact Us"
    }
  }
}, _s = () => {
  const r = Xl;
  return /* @__PURE__ */ t("div", { className: "min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white", children: [
    /* @__PURE__ */ e("div", { className: "bg-gradient-to-br from-gray-900 via-purple-900/20 to-black py-20", children: /* @__PURE__ */ e("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ t("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ e("h1", { className: "text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text", children: r.hero.title }),
      /* @__PURE__ */ e("p", { className: "text-xl text-gray-300", children: r.hero.subtitle })
    ] }) }) }),
    /* @__PURE__ */ e("div", { className: "container mx-auto px-4 py-16", children: /* @__PURE__ */ t("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ t("section", { className: "mb-16", children: [
        /* @__PURE__ */ e(k, { title: r.sections.solutions.heading }),
        /* @__PURE__ */ e("p", { className: "text-lg text-gray-300 leading-relaxed", children: r.sections.solutions.body })
      ] }),
      /* @__PURE__ */ t("section", { className: "mb-16", children: [
        /* @__PURE__ */ e(k, { title: r.sections.applications.heading }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: r.sections.applications.items.map((i, n) => /* @__PURE__ */ e("div", { className: "bg-gray-800/50 p-6 rounded-lg border border-purple-500/20", children: /* @__PURE__ */ e("p", { className: "text-lg text-gray-300", children: i }) }, n)) })
      ] }),
      /* @__PURE__ */ t("section", { className: "mb-16", children: [
        /* @__PURE__ */ e(k, { title: r.sections.featuredProduct.heading }),
        /* @__PURE__ */ t("div", { className: "bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-8 rounded-lg border border-purple-500/30", children: [
          /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-purple-400 mb-4", children: r.sections.featuredProduct.name }),
          /* @__PURE__ */ e("p", { className: "text-gray-300 mb-6", children: r.sections.featuredProduct.body }),
          /* @__PURE__ */ e(
            L,
            {
              to: "/products/graphacrete",
              className: "inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors",
              children: r.sections.featuredProduct.ctaLabel
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ t("section", { className: "mt-16", children: [
        /* @__PURE__ */ e("h3", { className: "text-2xl font-bold mb-6", children: r.sections.related.heading }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e(L, { to: "/products/graphacrete", className: "text-purple-400 hover:text-purple-300 transition-colors", children: r.sections.related.graphacreteLinkLabel }),
          /* @__PURE__ */ e(L, { to: "/contact", className: "text-purple-400 hover:text-purple-300 transition-colors", children: r.sections.related.contactLinkLabel })
        ] })
      ] })
    ] }) })
  ] });
}, es = {
  hero: {
    title: "Automotive & Coatings",
    subtitle: "Protective coatings and advanced materials for automotive applications"
  },
  sections: {
    solutions: {
      heading: "Industry Solutions",
      body: "Enhance automotive surfaces and components with graphene-based coatings and materials that provide superior protection, performance, and longevity."
    },
    applications: {
      heading: "Applications",
      items: ["Automotive Surface Protection", "Motorcycles", "Marine Vessels", "Tire Technology", "Anti-Corrosion Coatings"]
    },
    featuredProducts: {
      heading: "Featured Products",
      ceraphene: {
        name: "Ceraphene",
        statusLabel: "Available",
        body: "Ultra-durable ceramic coating with 9H+ hardness at 60-70% lower cost than premium alternatives.",
        linkLabel: "Learn More →"
      },
      graphyre: {
        name: "Graphyre",
        statusLabel: "Pipeline",
        body: "Graphene-reinforced tire technology with improved strength and reduced rolling resistance.",
        linkLabel: "Learn More →"
      }
    },
    related: {
      heading: "Related Pages",
      cerapheneLinkLabel: "→ Ceraphene Product Page",
      contactLinkLabel: "→ Contact Us"
    }
  }
}, qs = () => {
  const r = es;
  return /* @__PURE__ */ t("div", { className: "min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white", children: [
    /* @__PURE__ */ e("div", { className: "bg-gradient-to-br from-gray-900 via-purple-900/20 to-black py-20", children: /* @__PURE__ */ e("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ t("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ e("h1", { className: "text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text", children: r.hero.title }),
      /* @__PURE__ */ e("p", { className: "text-xl text-gray-300", children: r.hero.subtitle })
    ] }) }) }),
    /* @__PURE__ */ e("div", { className: "container mx-auto px-4 py-16", children: /* @__PURE__ */ t("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ t("section", { className: "mb-16", children: [
        /* @__PURE__ */ e(k, { title: r.sections.solutions.heading }),
        /* @__PURE__ */ e("p", { className: "text-lg text-gray-300 leading-relaxed", children: r.sections.solutions.body })
      ] }),
      /* @__PURE__ */ t("section", { className: "mb-16", children: [
        /* @__PURE__ */ e(k, { title: r.sections.applications.heading }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: r.sections.applications.items.map((i, n) => /* @__PURE__ */ e("div", { className: "bg-gray-800/50 p-6 rounded-lg border border-purple-500/20", children: /* @__PURE__ */ e("p", { className: "text-lg text-gray-300", children: i }) }, n)) })
      ] }),
      /* @__PURE__ */ t("section", { className: "mb-16", children: [
        /* @__PURE__ */ e(k, { title: r.sections.featuredProducts.heading }),
        /* @__PURE__ */ t("div", { className: "space-y-6", children: [
          /* @__PURE__ */ t("div", { className: "bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-8 rounded-lg border border-purple-500/30", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-4", children: [
              /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-purple-400", children: r.sections.featuredProducts.ceraphene.name }),
              /* @__PURE__ */ e("span", { className: "bg-green-900/30 px-3 py-1 rounded-full text-green-400 text-sm", children: r.sections.featuredProducts.ceraphene.statusLabel })
            ] }),
            /* @__PURE__ */ e("p", { className: "text-gray-300 mb-4", children: r.sections.featuredProducts.ceraphene.body }),
            /* @__PURE__ */ e(L, { to: "/products/ceraphene", className: "text-purple-400 hover:text-purple-300", children: r.sections.featuredProducts.ceraphene.linkLabel })
          ] }),
          /* @__PURE__ */ t("div", { className: "bg-gradient-to-r from-orange-900/20 to-red-900/20 p-8 rounded-lg border border-orange-500/30", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-4", children: [
              /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-orange-400", children: r.sections.featuredProducts.graphyre.name }),
              /* @__PURE__ */ e("span", { className: "bg-orange-900/30 px-3 py-1 rounded-full text-orange-400 text-sm", children: r.sections.featuredProducts.graphyre.statusLabel })
            ] }),
            /* @__PURE__ */ e("p", { className: "text-gray-300 mb-4", children: r.sections.featuredProducts.graphyre.body }),
            /* @__PURE__ */ e(L, { to: "/products/pipeline/graphyre", className: "text-orange-400 hover:text-orange-300", children: r.sections.featuredProducts.graphyre.linkLabel })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("section", { className: "mt-16", children: [
        /* @__PURE__ */ e("h3", { className: "text-2xl font-bold mb-6", children: r.sections.related.heading }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e(L, { to: "/products/ceraphene", className: "text-purple-400 hover:text-purple-300 transition-colors", children: r.sections.related.cerapheneLinkLabel }),
          /* @__PURE__ */ e(L, { to: "/contact", className: "text-purple-400 hover:text-purple-300 transition-colors", children: r.sections.related.contactLinkLabel })
        ] })
      ] })
    ] }) })
  ] });
}, ts = {
  hero: {
    title: "Solar & Clean Energy",
    subtitle: "Efficiency enhancement and thermal management solutions for solar energy"
  },
  sections: {
    solutions: {
      heading: "Industry Solutions",
      body: "Boost solar panel efficiency with graphene nanocoatings that enhance photon absorption, improve thermal management, and provide superior surface protection."
    },
    applications: {
      heading: "Applications",
      items: ["Utility-Scale Solar Plants", "Rooftop Installations", "Commercial Solar", "Floating Solar Plants"]
    },
    featuredProduct: {
      heading: "Featured Product",
      name: "Graffisol",
      body: "Next-generation solar panel coating delivering 10-12% energy output increase (field & lab validated) with improved thermal management and anti-soiling properties.",
      ctaLabel: "Learn More"
    },
    related: {
      heading: "Related Pages",
      graffisolLinkLabel: "→ Graffisol Product Page",
      contactLinkLabel: "→ Contact Us"
    }
  }
}, Ks = () => {
  const r = ts;
  return /* @__PURE__ */ t("div", { className: "min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white", children: [
    /* @__PURE__ */ e("div", { className: "bg-gradient-to-br from-gray-900 via-purple-900/20 to-black py-20", children: /* @__PURE__ */ e("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ t("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ e("h1", { className: "text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text", children: r.hero.title }),
      /* @__PURE__ */ e("p", { className: "text-xl text-gray-300", children: r.hero.subtitle })
    ] }) }) }),
    /* @__PURE__ */ e("div", { className: "container mx-auto px-4 py-16", children: /* @__PURE__ */ t("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ t("section", { className: "mb-16", children: [
        /* @__PURE__ */ e(k, { title: r.sections.solutions.heading }),
        /* @__PURE__ */ e("p", { className: "text-lg text-gray-300 leading-relaxed", children: r.sections.solutions.body })
      ] }),
      /* @__PURE__ */ t("section", { className: "mb-16", children: [
        /* @__PURE__ */ e(k, { title: r.sections.applications.heading }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: r.sections.applications.items.map((i, n) => /* @__PURE__ */ e("div", { className: "bg-gray-800/50 p-6 rounded-lg border border-purple-500/20", children: /* @__PURE__ */ e("p", { className: "text-lg text-gray-300", children: i }) }, n)) })
      ] }),
      /* @__PURE__ */ t("section", { className: "mb-16", children: [
        /* @__PURE__ */ e(k, { title: r.sections.featuredProduct.heading }),
        /* @__PURE__ */ t("div", { className: "bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-8 rounded-lg border border-purple-500/30", children: [
          /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-purple-400 mb-4", children: r.sections.featuredProduct.name }),
          /* @__PURE__ */ e("p", { className: "text-gray-300 mb-6", children: r.sections.featuredProduct.body }),
          /* @__PURE__ */ e(
            L,
            {
              to: "/products/graffisol",
              className: "inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors",
              children: r.sections.featuredProduct.ctaLabel
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ t("section", { className: "mt-16", children: [
        /* @__PURE__ */ e("h3", { className: "text-2xl font-bold mb-6", children: r.sections.related.heading }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e(L, { to: "/products/graffisol", className: "text-purple-400 hover:text-purple-300 transition-colors", children: r.sections.related.graffisolLinkLabel }),
          /* @__PURE__ */ e(L, { to: "/contact", className: "text-purple-400 hover:text-purple-300 transition-colors", children: r.sections.related.contactLinkLabel })
        ] })
      ] })
    ] }) })
  ] });
}, as = {
  hero: {
    title: "Advanced Materials",
    subtitle: "Breakthrough materials for aerospace, defense, and specialized applications"
  },
  sections: {
    solutions: {
      heading: "Industry Solutions",
      body: "Push the boundaries of material performance with graphene-enhanced solutions for the most demanding applications in aerospace, defense, and advanced manufacturing."
    },
    applications: {
      heading: "Applications",
      items: [
        "Aerospace Structures",
        "Defense & Military",
        "Advanced Composites",
        "Protective Armor",
        "Lightweight Components",
        "High-Performance Equipment"
      ]
    },
    pipelineProducts: {
      heading: "Pipeline Products",
      graphosite: {
        name: "Graphosite",
        statusLabel: "Pipeline",
        body: "Lightweight, high-strength graphene-reinforced fibres for advanced structural composites.",
        linkLabel: "Learn More →"
      },
      armophene: {
        name: "Armophene",
        statusLabel: "Pipeline",
        body: "Graphene-infused bulletproof protection that's lighter and more flexible than Kevlar.",
        linkLabel: "Learn More →"
      }
    },
    related: {
      heading: "Related Pages",
      pipelineLinkLabel: "→ Innovation Pipeline",
      contactLinkLabel: "→ Contact Us"
    }
  }
}, Us = () => {
  const r = as;
  return /* @__PURE__ */ t("div", { className: "min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white", children: [
    /* @__PURE__ */ e("div", { className: "bg-gradient-to-br from-gray-900 via-purple-900/20 to-black py-20", children: /* @__PURE__ */ e("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ t("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ e("h1", { className: "text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text", children: r.hero.title }),
      /* @__PURE__ */ e("p", { className: "text-xl text-gray-300", children: r.hero.subtitle })
    ] }) }) }),
    /* @__PURE__ */ e("div", { className: "container mx-auto px-4 py-16", children: /* @__PURE__ */ t("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ t("section", { className: "mb-16", children: [
        /* @__PURE__ */ e(k, { title: r.sections.solutions.heading }),
        /* @__PURE__ */ e("p", { className: "text-lg text-gray-300 leading-relaxed", children: r.sections.solutions.body })
      ] }),
      /* @__PURE__ */ t("section", { className: "mb-16", children: [
        /* @__PURE__ */ e(k, { title: r.sections.applications.heading }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: r.sections.applications.items.map((i, n) => /* @__PURE__ */ e("div", { className: "bg-gray-800/50 p-6 rounded-lg border border-purple-500/20", children: /* @__PURE__ */ e("p", { className: "text-lg text-gray-300", children: i }) }, n)) })
      ] }),
      /* @__PURE__ */ t("section", { className: "mb-16", children: [
        /* @__PURE__ */ e(k, { title: r.sections.pipelineProducts.heading }),
        /* @__PURE__ */ t("div", { className: "space-y-6", children: [
          /* @__PURE__ */ t("div", { className: "bg-gradient-to-r from-orange-900/20 to-red-900/20 p-8 rounded-lg border border-orange-500/30", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-4", children: [
              /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-orange-400", children: r.sections.pipelineProducts.graphosite.name }),
              /* @__PURE__ */ e("span", { className: "bg-orange-900/30 px-3 py-1 rounded-full text-orange-400 text-sm", children: r.sections.pipelineProducts.graphosite.statusLabel })
            ] }),
            /* @__PURE__ */ e("p", { className: "text-gray-300 mb-4", children: r.sections.pipelineProducts.graphosite.body }),
            /* @__PURE__ */ e(L, { to: "/products/pipeline/graphosite", className: "text-orange-400 hover:text-orange-300", children: r.sections.pipelineProducts.graphosite.linkLabel })
          ] }),
          /* @__PURE__ */ t("div", { className: "bg-gradient-to-r from-orange-900/20 to-red-900/20 p-8 rounded-lg border border-orange-500/30", children: [
            /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-4", children: [
              /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-orange-400", children: r.sections.pipelineProducts.armophene.name }),
              /* @__PURE__ */ e("span", { className: "bg-orange-900/30 px-3 py-1 rounded-full text-orange-400 text-sm", children: r.sections.pipelineProducts.armophene.statusLabel })
            ] }),
            /* @__PURE__ */ e("p", { className: "text-gray-300 mb-4", children: r.sections.pipelineProducts.armophene.body }),
            /* @__PURE__ */ e(L, { to: "/products/pipeline/armophene", className: "text-orange-400 hover:text-orange-300", children: r.sections.pipelineProducts.armophene.linkLabel })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ t("section", { className: "mt-16", children: [
        /* @__PURE__ */ e("h3", { className: "text-2xl font-bold mb-6", children: r.sections.related.heading }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e(L, { to: "/products/pipeline", className: "text-purple-400 hover:text-purple-300 transition-colors", children: r.sections.related.pipelineLinkLabel }),
          /* @__PURE__ */ e(L, { to: "/contact", className: "text-purple-400 hover:text-purple-300 transition-colors", children: r.sections.related.contactLinkLabel })
        ] })
      ] })
    ] }) })
  ] });
}, rs = {
  hero: {
    title: "Technology Platform",
    subtitle: "Advanced graphene technology platform enabling breakthrough material innovations"
  },
  sections: {
    platform: {
      heading: "Our Technology Platform",
      body: "Monoatom Labs has developed a comprehensive technology platform that enables the rapid development, validation, and commercialization of graphene-based solutions across multiple industries."
    },
    capabilities: {
      heading: "Core Capabilities",
      items: [
        {
          title: "Graphene Synthesis",
          body: "Advanced synthesis methods for high-quality graphene production with controlled properties and scalable processes."
        },
        {
          title: "Functionalization",
          body: "Proprietary techniques for functionalizing graphene to achieve specific performance characteristics for diverse applications."
        },
        {
          title: "Dispersion Technology",
          body: "Advanced dispersion methods ensuring uniform distribution of graphene in various matrices and substrates."
        },
        {
          title: "Application Engineering",
          body: "Expertise in adapting graphene technology to specific industrial applications and manufacturing processes."
        }
      ]
    },
    process: {
      heading: "Innovation Process",
      steps: [
        {
          title: "1. Research & Development",
          body: "Breakthrough material formulations through advanced research and scientific expertise"
        },
        {
          title: "2. Validation & Testing",
          body: "NABL-certified laboratory testing and real-world field trials"
        },
        {
          title: "3. Scale-Up & Manufacturing",
          body: "Pilot-scale production and process optimization for commercial deployment"
        },
        { title: "4. Commercial Launch", body: "Market deployment with comprehensive technical support and ongoing innovation" }
      ]
    },
    learnMore: {
      heading: "Learn More",
      pilotProjectsLinkLabel: "→ Pilot Projects",
      capabilitiesLinkLabel: "→ Technical Capabilities",
      productsLinkLabel: "→ Our Products",
      partnershipLinkLabel: "→ Partnership Opportunities"
    }
  }
}, Qs = () => {
  const r = rs;
  return /* @__PURE__ */ t("div", { className: "min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white", children: [
    /* @__PURE__ */ e("div", { className: "bg-gradient-to-br from-gray-900 via-purple-900/20 to-black py-20", children: /* @__PURE__ */ e("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ t("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ e("h1", { className: "text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text", children: r.hero.title }),
      /* @__PURE__ */ e("p", { className: "text-xl text-gray-300", children: r.hero.subtitle })
    ] }) }) }),
    /* @__PURE__ */ e("div", { className: "container mx-auto px-4 py-16", children: /* @__PURE__ */ t("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ t("section", { className: "mb-16", children: [
        /* @__PURE__ */ e(k, { title: r.sections.platform.heading }),
        /* @__PURE__ */ e("p", { className: "text-lg text-gray-300 leading-relaxed", children: r.sections.platform.body })
      ] }),
      /* @__PURE__ */ t("section", { className: "mb-16", children: [
        /* @__PURE__ */ e(k, { title: r.sections.capabilities.heading }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: r.sections.capabilities.items.map((i, n) => /* @__PURE__ */ t("div", { className: "bg-gray-800/50 p-6 rounded-lg border border-purple-500/20", children: [
          /* @__PURE__ */ e("h3", { className: "text-xl font-bold text-purple-400 mb-4", children: i.title }),
          /* @__PURE__ */ e("p", { className: "text-gray-300", children: i.body })
        ] }, n)) })
      ] }),
      /* @__PURE__ */ t("section", { className: "mb-16", children: [
        /* @__PURE__ */ e(k, { title: r.sections.process.heading }),
        /* @__PURE__ */ e("div", { className: "space-y-6", children: r.sections.process.steps.map((i, n) => /* @__PURE__ */ t("div", { className: "bg-purple-900/20 p-6 rounded-lg border border-purple-500/30", children: [
          /* @__PURE__ */ e("h3", { className: "text-xl font-bold text-purple-400 mb-2", children: i.title }),
          /* @__PURE__ */ e("p", { className: "text-gray-300", children: i.body })
        ] }, n)) })
      ] }),
      /* @__PURE__ */ t("section", { className: "mt-16", children: [
        /* @__PURE__ */ e("h3", { className: "text-2xl font-bold mb-6", children: r.sections.learnMore.heading }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e(L, { to: "/technology/pilot-projects", className: "text-purple-400 hover:text-purple-300 transition-colors", children: r.sections.learnMore.pilotProjectsLinkLabel }),
          /* @__PURE__ */ e(L, { to: "/technology/capabilities", className: "text-purple-400 hover:text-purple-300 transition-colors", children: r.sections.learnMore.capabilitiesLinkLabel }),
          /* @__PURE__ */ e(L, { to: "/products", className: "text-purple-400 hover:text-purple-300 transition-colors", children: r.sections.learnMore.productsLinkLabel }),
          /* @__PURE__ */ e(L, { to: "/partnership", className: "text-purple-400 hover:text-purple-300 transition-colors", children: r.sections.learnMore.partnershipLinkLabel })
        ] })
      ] })
    ] }) })
  ] });
}, is = {
  hero: {
    title: "Technical Capabilities",
    subtitle: "Comprehensive R&D infrastructure and expertise"
  },
  sections: {
    research: {
      heading: "Research & Development",
      areas: [
        {
          title: "Materials Science",
          bullets: ["• Graphene synthesis and processing", "• Nanomaterial functionalization", "• Advanced characterization", "• Surface chemistry modification"]
        },
        {
          title: "Process Development",
          bullets: ["• Dispersion technologies", "• Coating application methods", "• Composite formulation", "• Process optimization"]
        },
        {
          title: "Testing & Validation",
          bullets: ["• NABL-certified testing", "• Performance characterization", "• Durability studies", "• Field validation"]
        },
        {
          title: "Scale-Up Engineering",
          bullets: ["• Pilot-scale production", "• Manufacturing integration", "• Quality control systems", "• Supply chain development"]
        }
      ]
    },
    partnership: {
      heading: "Partnership Network",
      intro: "We collaborate with premier research institutions to maintain cutting-edge capabilities:",
      partners: [
        { name: "IISc", label: "Research Collaboration" },
        { name: "IIT", label: "Research Collaboration" },
        { name: "NCL", label: "Research Collaboration" }
      ]
    },
    learnMore: {
      heading: "Learn More",
      facilitiesLinkLabel: "→ Our Facilities",
      platformLinkLabel: "→ Technology Platform",
      pilotProjectsLinkLabel: "→ Pilot Projects",
      contactLinkLabel: "→ Contact Us"
    }
  }
}, Ys = () => {
  const r = is;
  return /* @__PURE__ */ t("div", { className: "min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white", children: [
    /* @__PURE__ */ e("div", { className: "bg-gradient-to-br from-gray-900 via-purple-900/20 to-black py-20", children: /* @__PURE__ */ e("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ t("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ e("h1", { className: "text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text", children: r.hero.title }),
      /* @__PURE__ */ e("p", { className: "text-xl text-gray-300", children: r.hero.subtitle })
    ] }) }) }),
    /* @__PURE__ */ e("div", { className: "container mx-auto px-4 py-16", children: /* @__PURE__ */ t("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ t("section", { className: "mb-16", children: [
        /* @__PURE__ */ e(k, { title: r.sections.research.heading }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: r.sections.research.areas.map((i, n) => /* @__PURE__ */ t("div", { className: "bg-gray-800/50 p-6 rounded-lg border border-purple-500/20", children: [
          /* @__PURE__ */ e("h3", { className: "text-xl font-bold text-purple-400 mb-4", children: i.title }),
          /* @__PURE__ */ e("ul", { className: "space-y-2 text-gray-300", children: i.bullets.map((o, a) => /* @__PURE__ */ e("li", { children: o }, a)) })
        ] }, n)) })
      ] }),
      /* @__PURE__ */ t("section", { className: "mb-16", children: [
        /* @__PURE__ */ e(k, { title: r.sections.partnership.heading }),
        /* @__PURE__ */ e("p", { className: "text-lg text-gray-300 leading-relaxed mb-6", children: r.sections.partnership.intro }),
        /* @__PURE__ */ e("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: r.sections.partnership.partners.map((i, n) => /* @__PURE__ */ t(
          "div",
          {
            className: "bg-purple-900/20 p-6 rounded-lg border border-purple-500/30 text-center",
            children: [
              /* @__PURE__ */ e("h3", { className: "text-xl font-bold text-purple-400 mb-2", children: i.name }),
              /* @__PURE__ */ e("p", { className: "text-gray-400", children: i.label })
            ]
          },
          n
        )) })
      ] }),
      /* @__PURE__ */ t("section", { className: "mt-16", children: [
        /* @__PURE__ */ e("h3", { className: "text-2xl font-bold mb-6", children: r.sections.learnMore.heading }),
        /* @__PURE__ */ t("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ e(L, { to: "/about/facilities", className: "text-purple-400 hover:text-purple-300 transition-colors", children: r.sections.learnMore.facilitiesLinkLabel }),
          /* @__PURE__ */ e(L, { to: "/technology/platform", className: "text-purple-400 hover:text-purple-300 transition-colors", children: r.sections.learnMore.platformLinkLabel }),
          /* @__PURE__ */ e(L, { to: "/technology/pilot-projects", className: "text-purple-400 hover:text-purple-300 transition-colors", children: r.sections.learnMore.pilotProjectsLinkLabel }),
          /* @__PURE__ */ e(L, { to: "/contact", className: "text-purple-400 hover:text-purple-300 transition-colors", children: r.sections.learnMore.contactLinkLabel })
        ] })
      ] })
    ] }) })
  ] });
}, ns = {
  hero: {
    title: "Pilot Projects",
    subtitle: "Field-Scale Validations & Technology Demonstrations"
  },
  intro: {
    body: "Our pilot projects validate breakthrough technologies in real-world conditions, demonstrating performance and preparing for commercial deployment."
  },
  sections: {
    active: {
      heading: "Active Pilot Projects"
    },
    cta: {
      title: "Interested in Our Pilot Technologies?",
      body: "Partner with us to bring these breakthrough technologies to market",
      buttonLabel: "Explore Partnerships"
    }
  },
  projects: [
    {
      title: "Hydrogen Separation Membranes",
      description: "High-selectivity graphene membranes for hydrogen separation and production with reduced energy losses.",
      status: "Field-scale pilot"
    },
    {
      title: "Seawater Desalination Membranes",
      description: "Ultra-thin graphene membranes for high-flux, low-energy seawater desalination and industrial water purification.",
      status: "Field-scale pilot"
    },
    {
      title: "Atmospheric Water Harvesting",
      description: "Graphene membranes for moisture extraction, harvesting atmospheric moisture and converting air into potable water.",
      status: "Field-scale pilot"
    },
    {
      title: "Graphene-Reinforced Glass Fibres",
      description: "Graphene-enhanced glass fibre composites with enhanced strength, durability, and multifunctional performance.",
      status: "Field-scale pilot"
    },
    {
      title: "Graphene Battery Storage Systems",
      description: "Graphene-enabled battery storage with higher power density, faster response, and extended lifecycle.",
      status: "Field-scale pilot"
    }
  ]
}, Js = () => {
  const r = ns, i = r.projects;
  return /* @__PURE__ */ t("div", { className: "min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white", children: [
    /* @__PURE__ */ e("div", { className: "bg-gradient-to-br from-gray-900 via-purple-900/20 to-black py-20", children: /* @__PURE__ */ e("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ t("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ e("h1", { className: "text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text", children: r.hero.title }),
      /* @__PURE__ */ e("p", { className: "text-xl text-gray-300", children: r.hero.subtitle })
    ] }) }) }),
    /* @__PURE__ */ e("div", { className: "container mx-auto px-4 py-16", children: /* @__PURE__ */ t("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ e("section", { className: "mb-16", children: /* @__PURE__ */ e("p", { className: "text-lg text-gray-300 leading-relaxed text-center", children: r.intro.body }) }),
      /* @__PURE__ */ t("section", { className: "mb-16", children: [
        /* @__PURE__ */ e(k, { title: r.sections.active.heading }),
        /* @__PURE__ */ e("div", { className: "space-y-6", children: i.map((n, o) => /* @__PURE__ */ t("div", { className: "bg-gray-800/50 p-8 rounded-lg border border-purple-500/20", children: [
          /* @__PURE__ */ t("div", { className: "flex justify-between items-start mb-4", children: [
            /* @__PURE__ */ e("h3", { className: "text-2xl font-bold text-purple-400", children: n.title }),
            /* @__PURE__ */ e("span", { className: "bg-blue-900/30 px-3 py-1 rounded-full text-blue-400 text-sm", children: n.status })
          ] }),
          /* @__PURE__ */ e("p", { className: "text-gray-300", children: n.description })
        ] }, o)) })
      ] }),
      /* @__PURE__ */ t("section", { className: "bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-lg border border-purple-500/30 text-center", children: [
        /* @__PURE__ */ e("h2", { className: "text-3xl font-bold mb-4", children: r.sections.cta.title }),
        /* @__PURE__ */ e("p", { className: "text-lg text-gray-300 mb-6", children: r.sections.cta.body }),
        /* @__PURE__ */ e(
          L,
          {
            to: "/partnership",
            className: "inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors",
            children: r.sections.cta.buttonLabel
          }
        )
      ] })
    ] }) })
  ] });
};
function ls(r) {
  const i = r.split(`
`), n = {};
  let o = !0;
  for (let a = 1; a < i.length && o; a++) {
    const s = i[a].trim();
    if (s === "---") {
      o = !1;
      break;
    }
    const d = s.match(/\*\*(.+?):\*\*\s*(.+)/);
    if (d) {
      const m = d[1].toLowerCase().replace(/\s+/g, "_");
      n[m] = d[2].replace(/`/g, "");
    }
  }
  return n;
}
function ss(r) {
  const i = r.split(`
`), n = [];
  let o = null, a = !0;
  for (let s = 0; s < i.length; s++) {
    const d = i[s];
    if (a) {
      d.trim() === "---" && s > 0 && (a = !1);
      continue;
    }
    d.startsWith("## ") ? (o && n.push(o), o = {
      title: d.replace("## ", "").trim(),
      content: [],
      subsections: []
    }) : d.startsWith("### ") && o ? o.subsections.push({
      title: d.replace("### ", "").trim(),
      content: []
    }) : o && (o.subsections.length > 0 ? o.subsections[o.subsections.length - 1].content.push(d) : o.content.push(d));
  }
  return o && n.push(o), n;
}
function mi(r) {
  const i = [];
  let n = null;
  for (const o of r) {
    const a = o.trim(), s = a.match(/^[-*]\s+(.+)/), d = a.match(/^\d+\.\s+(.+)/);
    if (s || d) {
      const m = s ? s[1] : d[1], p = m.match(/^\*\*(.+?)\*\*:?\s*(.+)?/);
      p ? (n = {
        title: p[1],
        description: p[2] || "",
        details: []
      }, i.push(n)) : (i.push({
        text: m,
        details: []
      }), n = i[i.length - 1]);
    } else n && a.startsWith("-") && a.length > 1 && n.details.push(a.substring(1).trim());
  }
  return i;
}
function Zr(r) {
  const i = {
    headers: [],
    rows: []
  };
  let n = !1;
  for (let o = 0; o < r.length; o++) {
    const a = r[o].trim();
    if (a.includes("|") && a.includes("---")) {
      if (n = !0, o > 0) {
        const s = r[o - 1].trim();
        i.headers = s.split("|").map((d) => d.trim()).filter((d) => d.length > 0).map((d) => d.replace(/\*\*/g, ""));
      }
      continue;
    }
    if (n && a.includes("|")) {
      const s = a.split("|").map((d) => d.trim()).filter((d) => d.length > 0).map((d) => d.replace(/\*\*/g, ""));
      s.length > 0 && i.rows.push(s);
    } else if (n && !a.includes("|"))
      break;
  }
  return i;
}
function Ta(r) {
  const i = [];
  let n = [], o = !1;
  for (const a of r)
    if (a.trim().includes("|"))
      o = !0, n.push(a);
    else if (o) {
      if (n.length > 0) {
        const s = Zr(n);
        s.headers.length > 0 && i.push(s);
      }
      n = [], o = !1;
    }
  if (n.length > 0) {
    const a = Zr(n);
    a.headers.length > 0 && i.push(a);
  }
  return i;
}
function os(r) {
  const i = {};
  let n = null;
  for (const o of r) {
    const a = o.trim(), s = a.match(/^\*\*(.+?):\*\*$/);
    if (s) {
      n = s[1], i[n] = {};
      continue;
    }
    const d = a.match(/^[-*]?\s*(.+?):\s*(.+)/);
    if (d && n) {
      const m = d[1].trim(), p = d[2].trim();
      i[n][m] = p;
    }
  }
  return i;
}
function cs(r) {
  const i = [];
  for (const n of r.subsections) {
    const a = n.content.join(`
`).matchAll(/\d+\.\s+\*\*(.+?)\*\*\s*\n\s*-?\s*(.+)/g);
    for (const s of a)
      i.push({
        title: s[1].trim(),
        description: s[2].trim(),
        details: []
      });
  }
  return i.length === 0 && r.content.length > 0 ? mi(r.content) : i;
}
function Zs(r) {
  return r ? r.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1").replace(/`(.+?)`/g, "$1").replace(/\[(.+?)\]\(.+?\)/g, "$1").replace(/^#+\s+/gm, "").trim() : "";
}
function ds(r) {
  const i = {
    email: [],
    phone: [],
    address: {},
    social: {}
  }, n = r.matchAll(/(?:Email|E-mail):\s*([^\n]+)/gi);
  for (const d of n) {
    const m = d[1].trim();
    m && !i.email.includes(m) && i.email.push(m);
  }
  const o = r.matchAll(/(?:Phone|Tel|Call):\s*([^\n]+)/gi);
  for (const d of o) {
    const m = d[1].trim();
    m && !i.phone.includes(m) && i.phone.push(m);
  }
  const a = r.match(/Address:\s*([^\n]+(?:\n[^\n]+)*?)(?=\n\n|\n\*\*|$)/i);
  if (a) {
    const d = a[1].trim().split(`
`).map((m) => m.trim());
    i.address = {
      full: d.join(", "),
      lines: d
    };
  }
  const s = r.match(/Website:\s*([^\n]+)/i);
  return s && (i.website = s[1].trim()), i;
}
function Xs(r) {
  const i = {
    price: null,
    currency: "INR",
    unit: null,
    comparison: []
  }, n = r.match(/₹\s*([\d,]+)\s*[/]?\s*(\w+)?/);
  return n && (i.price = n[1].replace(/,/g, ""), i.unit = n[2] || null), i;
}
function ms(r) {
  const i = ls(r), n = ss(r), o = ds(r);
  return {
    metadata: i,
    sections: n,
    contact: o,
    rawContent: r
  };
}
function eo(r) {
  const i = ms(r), n = i.sections, o = {
    ...i.metadata,
    name: i.metadata.page_title?.split("|")[0]?.trim() || "",
    tagline: i.metadata.meta_description || "",
    overview: {},
    benefits: [],
    specifications: {},
    applications: [],
    pricing: {},
    howItWorks: {},
    competitive: {},
    faqs: []
  };
  return n.forEach((a) => {
    const s = a.title.toLowerCase();
    if (s.includes("overview"))
      o.overview = {
        title: a.title,
        content: a.content.join(`
`),
        subsections: a.subsections
      };
    else if (s.includes("benefit"))
      o.benefits = cs(a);
    else if (s.includes("specification") || s.includes("technical"))
      o.specifications = os(a.content), o.specTables = Ta(a.content);
    else if (s.includes("application"))
      o.applications = mi(a.content);
    else if (s.includes("how it works"))
      o.howItWorks = {
        title: a.title,
        subsections: a.subsections
      };
    else if (s.includes("competitive") || s.includes("comparison"))
      o.competitive = {
        title: a.title,
        tables: Ta(a.content),
        content: a.subsections
      };
    else if (s.includes("pricing") || s.includes("cost"))
      o.pricing = {
        title: a.title,
        details: a.content.join(`
`),
        tables: Ta(a.content)
      };
    else if (s.includes("faq")) {
      const m = a.content.join(`
`).matchAll(/\*\*Q:\s*(.+?)\*\*\s*\n\s*A:\s*(.+?)(?=\n\*\*Q:|$)/gs);
      for (const p of m)
        o.faqs.push({
          question: p[1].trim(),
          answer: p[2].trim()
        });
    }
  }), o;
}
const to = () => {
  const [r, i] = A(!1), [n, o] = A(0), [a, s] = A("Loading"), d = Xr();
  return Me(() => {
    const m = (p) => {
      const c = p.target.closest('a[href], [role="link"]');
      if (c && !c.target) {
        const g = c.getAttribute("href"), b = window.location.hash.replace("#", "") || "/";
        if (g === b || g === "#" + b)
          return;
        document.body.classList.add("navigating"), i(!0), o(5), s("Loading");
        const x = setTimeout(() => {
          i(!1), o(0), document.body.classList.remove("navigating");
        }, 2e3);
        window._navSafetyTimeout = x;
      }
    };
    return document.addEventListener("click", m, !0), () => {
      document.removeEventListener("click", m, !0), window._navSafetyTimeout && clearTimeout(window._navSafetyTimeout);
    };
  }, []), Me(() => {
    r ? (o(10), s("Loading")) : (i(!0), o(10), s("Loading"));
    const m = setTimeout(() => {
      o(30), s("Loading");
    }, 50), p = setTimeout(() => {
      o(50), s("Loading page");
    }, 150), c = setTimeout(() => {
      o(70), s("Almost there");
    }, 300), g = setTimeout(() => {
      o(90), s("Finalizing");
    }, 500), b = setTimeout(() => {
      o(100), s("Done!"), setTimeout(() => {
        i(!1), o(0), document.body.classList.remove("navigating"), window._navSafetyTimeout && (clearTimeout(window._navSafetyTimeout), window._navSafetyTimeout = null);
      }, 300);
    }, 700);
    return () => {
      clearTimeout(m), clearTimeout(p), clearTimeout(c), clearTimeout(g), clearTimeout(b);
    };
  }, [d.pathname]), !r && n === 0 ? null : /* @__PURE__ */ t(be, { children: [
    /* @__PURE__ */ e("div", { className: "fixed top-0 left-0 right-0 h-2 z-[9999]", children: /* @__PURE__ */ e(
      "div",
      {
        className: "h-full transition-all duration-300 ease-out",
        style: {
          width: `${n}%`,
          background: "linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)",
          backgroundSize: "200% 100%",
          animation: "shimmer 2s infinite",
          boxShadow: "0 3px 25px rgba(59, 130, 246, 0.7), 0 0 15px rgba(6, 182, 212, 0.5)",
          opacity: r ? 1 : 0
        }
      }
    ) }),
    /* @__PURE__ */ e("style", { children: `
                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }

                /* INSTANT CLICK FEEDBACK: Show loading cursor on links */
                a:active, [role="link"]:active {
                    cursor: wait !important;
                }

                /* INSTANT VISUAL FEEDBACK: Show loading cursor when navigating */
                body.navigating {
                    cursor: wait !important;
                }

                /* Disable interactions during navigation */
                body.navigating main {
                    pointer-events: none;
                }

                /* Pulse effect on click */
                @keyframes clickPulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(0.98); }
                    100% { transform: scale(1); }
                }

                a:active, button:active, [role="link"]:active {
                    animation: clickPulse 0.15s ease-out;
                }
            ` })
  ] });
}, ao = () => {
  const { pathname: r } = Xr();
  return Me(() => {
    window.scrollTo(0, 0);
  }, [r]), null;
};
export {
  zn as $,
  Ns as A,
  Bs as B,
  Za as C,
  Hs as D,
  Ja as E,
  Cs as F,
  Ms as G,
  Wa as H,
  Va as I,
  ys as J,
  Fs as K,
  Ya as L,
  Qa as M,
  Vs as N,
  to as O,
  Ba as P,
  Js as Q,
  Ls as R,
  Ka as S,
  Oa as T,
  Qs as U,
  Ss as V,
  Rs as W,
  ao as X,
  Ks as Y,
  Es as Z,
  Zs as _,
  Ua as a,
  cs as a0,
  Ta as a1,
  ds as a2,
  mi as a3,
  ms as a4,
  ls as a5,
  Xs as a6,
  eo as a7,
  ss as a8,
  os as a9,
  Zr as aa,
  _a as b,
  qa as c,
  pl as d,
  ll as e,
  Yn as f,
  tl as g,
  ul as h,
  ml as i,
  Us as j,
  js as k,
  zs as l,
  qs as m,
  Ys as n,
  $s as o,
  ks as p,
  _s as q,
  ws as r,
  Ps as s,
  Ts as t,
  Ds as u,
  Ws as v,
  Os as w,
  Gs as x,
  Is as y,
  As as z
};
