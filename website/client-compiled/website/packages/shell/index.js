import { jsxs as a, jsx as e, Fragment as H } from "react/jsx-runtime";
import { useState as A, useEffect as F, useRef as R } from "react";
import { useLocation as G, Link as l, Outlet as W } from "react-router-dom";
import { Layers as j, Shield as I, Zap as q, Box as U, AppWindow as K, ChevronDown as X, X as V, Menu as Z, MapPin as J, Mail as Q, Phone as ee } from "lucide-react";
const _ = ({ children: h, variant: m = "primary", theme: c = "light", className: i = "", icon: o, onClick: d }) => /* @__PURE__ */ a("button", { onClick: d, className: `inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-sm group shadow-sm relative overflow-hidden ${m === "primary" ? c === "dark" ? "bg-white text-black hover:bg-neutral-200 border border-white z-10 shadow-lg" : "bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-900" : m === "secondary" ? c === "dark" ? "bg-transparent text-white border border-neutral-700 hover:border-white hover:bg-neutral-900 z-10" : "bg-white text-neutral-900 border border-neutral-200 hover:border-neutral-900" : c === "dark" ? "text-neutral-400 hover:text-white px-0 py-2 shadow-none" : "text-neutral-500 hover:text-neutral-900 px-0 py-2 shadow-none"} ${i}`, children: [
  h,
  o && /* @__PURE__ */ e(o, { className: "w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" })
] }), B = ({ size: h = 120, theme: m = "light", showText: c = !0, className: i = "" }) => /* @__PURE__ */ a(
  "div",
  {
    className: `monoatom-logo-container ${m === "dark" ? "text-white" : "text-neutral-900"} ${i}`,
    style: {
      "--logo-base-size": `${h}px`
    },
    role: "banner",
    "aria-label": "Monoatom Labs Logo",
    children: [
      /* @__PURE__ */ e(
        "svg",
        {
          className: "logo-icon",
          role: "img",
          "aria-label": "Monoatom Labs Icon",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          viewBox: "0 0 320 496",
          xmlSpace: "preserve",
          fill: "currentColor",
          children: /* @__PURE__ */ e("path", { opacity: "1.000000", stroke: "none", d: "M214.564758,97.412476 C216.109802,85.798714 224.922775,76.701988 235.215485,75.732178 C248.038223,74.523979 258.312561,81.217422 262.110748,93.253731 C265.439423,103.802200 260.622284,115.370049 249.963531,121.023911 C246.005051,123.123672 243.769058,125.207565 244.113693,130.072266 C244.355469,133.485168 245.390564,135.515274 248.329819,137.205246 C261.757111,144.925491 274.975220,153.014679 288.490814,160.573669 C293.867310,163.580612 296.461304,167.110718 296.236389,173.589081 C295.768402,187.067307 296.170227,200.574203 296.087982,214.068527 C296.068665,217.240967 296.717102,219.602859 299.420593,221.805420 C305.033722,226.378510 305.799896,234.113037 301.836365,240.316910 C298.230896,245.960312 291.310303,248.056870 284.684540,245.017151 C282.151550,243.855087 280.472870,244.245041 278.309723,245.590103 C268.127960,251.921158 257.912170,258.203125 247.573135,264.271942 C244.762115,265.921936 243.756851,267.746490 243.809418,271.030029 C244.028076,284.688293 243.981400,298.352264 243.883652,312.013062 C243.859451,315.392792 244.643478,317.872559 247.463135,320.189667 C252.791367,324.568268 253.680954,331.582977 250.312088,337.377472 C247.070740,342.952606 240.174026,345.744995 233.910629,343.224335 C230.202637,341.732086 227.390152,342.157959 224.164703,344.112274 C216.616928,348.685547 208.954025,353.072571 201.269653,357.414520 C198.740250,358.843689 197.111130,360.490723 197.285294,363.663025 C197.428070,366.264008 196.370773,368.784271 194.368927,370.326599 C190.399170,373.385071 190.084702,377.377899 190.200546,381.884766 C190.423111,390.542847 190.340424,399.210480 190.274017,407.873260 C190.254990,410.355042 190.876053,412.213470 192.835083,413.983643 C198.872604,419.439178 199.970306,426.735870 195.997192,432.804749 C192.324188,438.415222 185.545670,440.293549 178.396027,437.405884 C176.273697,436.548737 174.649918,436.819458 172.789200,437.886688 C163.543167,443.190155 154.279083,448.463654 144.961029,453.639069 C142.528183,454.990265 141.489655,456.710083 141.269394,459.559937 C140.781815,465.868073 135.385803,470.764343 128.976089,471.257324 C122.553352,471.751282 115.744064,467.349457 114.979485,460.946777 C114.305748,455.304871 111.211418,452.700867 106.818123,450.147369 C94.291870,442.866730 82.001198,435.181885 69.525681,427.812073 C66.143707,425.814178 64.702637,423.367462 64.778374,419.337738 C65.031944,405.846985 64.874985,392.348969 65.014572,378.855225 C65.044456,375.966492 64.177452,373.884369 62.042847,371.867096 C56.150135,366.298401 55.379688,359.134216 59.669773,352.955017 C63.531605,347.392670 70.172508,345.812805 77.462929,349.084106 C79.737373,350.104706 81.420639,349.938812 83.493111,348.772858 C92.200378,343.874084 100.953705,339.054230 109.763100,334.341797 C112.323753,332.971985 113.796791,331.141632 114.331963,328.279022 C114.925697,325.103119 116.225555,322.020752 119.009949,320.278900 C122.149002,318.315186 122.895615,315.753540 122.842316,312.307922 C122.695465,302.813904 122.755035,293.315186 122.857590,283.819672 C122.888321,280.974243 122.379517,278.637421 119.809990,276.938812 C117.046570,275.112091 115.302315,272.311188 114.782791,269.148834 C114.164291,265.384003 111.929741,263.554047 108.811737,261.855255 C100.184944,257.155060 91.705971,252.181534 83.207993,247.248169 C80.756851,245.825165 78.612556,245.430923 75.768631,246.736237 C69.703506,249.520020 62.715302,247.177536 59.164913,241.711807 C55.312531,235.781158 56.103527,228.113434 61.518688,223.594788 C64.111008,221.431641 65.064629,219.152161 65.073601,215.891769 C65.098793,206.735245 65.344986,197.577881 65.620445,188.424347 C65.711594,185.395370 64.859138,183.220795 62.378410,181.157654 C56.496700,176.265991 55.361183,169.319031 58.921883,163.263138 C62.500568,157.176651 69.190773,154.769165 76.195282,157.481110 C78.877518,158.519608 80.928528,158.107635 83.211967,156.773438 C92.271118,151.480331 101.315071,146.155685 110.493889,141.076263 C113.307503,139.519241 113.643974,137.216003 114.115074,134.515762 C115.341888,127.483940 119.873306,123.199738 126.318764,122.580467 C132.907135,121.947472 138.169174,124.881058 140.485474,130.477051 C140.549118,130.630814 140.698334,130.784607 140.687012,130.928909 C140.029663,139.304169 146.816910,141.343979 152.250427,144.543549 C159.138702,148.599762 166.041626,152.632019 172.888260,156.757538 C175.321930,158.223969 177.652588,158.821121 180.398911,157.552643 C182.910019,156.392838 185.674576,156.212799 188.150192,157.523834 C191.415833,159.253265 194.025040,158.380081 196.953094,156.564377 C207.427200,150.069290 217.933853,143.611298 228.649597,137.529343 C232.562973,135.308228 233.070221,132.327682 233.168167,128.435211 C233.265045,124.584190 231.296844,122.936455 228.215118,121.335655 C218.772598,116.430695 213.968811,108.634499 214.564758,97.412476 M144.401138,152.141968 C140.274033,149.629288 136.413391,146.920700 131.110748,150.047516 C128.597153,151.529709 125.157471,150.988129 122.418045,149.505569 C120.035744,148.216278 118.141914,148.625732 115.938568,149.925644 C106.620552,155.423080 97.260315,160.852585 87.822327,166.140610 C85.345222,167.528503 84.192581,169.176102 84.262016,172.059036 C84.351929,175.791977 82.646355,178.995590 79.594231,180.990814 C76.795677,182.820282 76.215790,185.112091 76.256401,188.157639 C76.378502,197.313965 76.406151,206.475037 76.237701,215.629974 C76.174767,219.050446 76.853325,221.594757 79.942261,223.650299 C82.831093,225.572693 84.036034,228.922485 84.201050,232.336990 C84.320297,234.804367 85.250175,236.244400 87.388161,237.434067 C96.841934,242.694595 106.235558,248.064728 115.600029,253.483200 C117.809959,254.761902 119.834183,255.049149 122.186752,253.891434 C125.637436,252.193344 129.291656,251.900681 132.769882,253.679596 C135.491821,255.071716 137.770493,254.623230 140.268723,253.173096 C149.193344,247.992661 158.164307,242.890732 167.168579,237.849945 C169.374680,236.614929 170.615234,235.159317 170.845001,232.453415 C171.176834,228.545425 172.712860,224.944458 176.123245,222.659653 C178.385376,221.144104 178.864029,219.154343 178.847214,216.679550 C178.781525,207.022461 178.756058,197.364471 178.825775,187.707596 C178.842880,185.340118 178.085693,183.564728 176.252640,182.087845 C172.959671,179.434723 171.124329,175.846268 170.994537,171.708908 C170.889771,168.369186 169.224762,166.616364 166.590103,165.106964 C159.368988,160.969986 152.219376,156.708191 144.401138,152.141968 M155.858734,435.306061 C159.193939,433.427277 162.485168,431.464111 165.877625,429.695129 C168.841995,428.149475 170.849121,426.379639 171.020844,422.543854 C171.169281,419.228241 172.878555,416.134857 175.895340,414.194519 C178.283798,412.658234 178.900238,410.474609 178.876526,407.781891 C178.795914,398.625122 178.726364,389.465027 178.898605,380.310822 C178.968460,376.598206 178.338989,373.570129 175.215698,371.106995 C172.960693,369.328674 171.816681,366.619873 171.487076,363.691040 C171.163620,360.816864 169.674942,358.944305 167.106354,357.520782 C158.518555,352.761353 149.998886,347.875153 141.535110,342.898102 C138.982010,341.396790 136.779449,341.172852 134.103577,342.655701 C130.423096,344.695282 126.391640,345.034241 122.608635,342.971588 C120.058365,341.581055 117.976601,341.961792 115.618240,343.269592 C106.304192,348.434509 96.945076,353.518646 87.575523,358.582520 C85.508881,359.699463 84.275650,361.086823 84.258148,363.635376 C84.233757,367.186707 82.488976,370.126587 79.661400,372.112640 C77.040421,373.953583 76.213707,376.149017 76.254326,379.276733 C76.405685,390.929688 76.419312,402.587708 76.233345,414.239838 C76.176018,417.831940 77.354584,420.042175 80.487152,421.884674 C91.533257,428.381866 102.485558,435.044739 113.344887,441.849915 C117.125587,444.219177 120.550301,446.473969 125.236237,444.027161 C126.546844,443.342834 128.884842,443.246948 130.091049,443.975159 C136.037918,447.565582 140.528152,444.139954 145.247711,441.369385 C148.549210,439.431274 151.890182,437.560364 155.858734,435.306061 M134.102066,289.542175 C134.099167,297.363953 133.802902,305.199829 134.178177,313.003418 C134.533737,320.396881 142.278015,324.488220 143.285843,331.750366 C143.314194,331.954620 143.826172,332.093475 144.114502,332.259583 C153.339798,337.575439 162.571869,342.879517 171.785873,348.214813 C173.902283,349.440277 175.898911,350.039337 178.338943,348.796661 C182.123779,346.869080 186.109100,347.020813 189.907837,348.815826 C191.951828,349.781738 193.639633,349.592865 195.527847,348.491943 C204.007004,343.548370 212.512985,338.649780 221.055283,333.816284 C223.256226,332.570923 224.606857,331.058472 224.703384,328.366486 C224.835785,324.673798 226.505280,321.555328 229.542328,319.483154 C232.061707,317.764191 232.765640,315.595978 232.750534,312.701965 C232.678436,298.889618 232.697113,285.076050 232.810577,271.264008 C232.833618,268.459229 231.950714,266.660065 229.435135,265.231293 C218.441788,258.987335 207.527847,252.602524 196.630386,246.191849 C194.601898,244.998535 192.889435,244.564346 190.650055,245.884277 C186.840546,248.129639 182.699829,248.423172 178.730698,246.287033 C176.427460,245.047470 174.642624,245.775772 172.690598,246.890671 C164.456772,251.593216 156.261398,256.369324 147.921295,260.876770 C144.076797,262.954529 140.821228,264.971130 141.154083,270.139648 C141.246262,271.571075 140.240189,273.694763 139.059250,274.479828 C133.747482,278.010864 133.690262,283.150879 134.102066,289.542175 M190.252640,213.373047 C188.571899,222.776154 199.332809,227.052780 199.519363,235.723328 C199.527206,236.087540 200.565369,236.448563 201.142044,236.778793 C212.259018,243.144913 223.415359,249.443649 234.469681,255.916702 C236.931610,257.358337 238.826096,257.394653 241.295685,255.867737 C251.910172,249.304794 262.633789,242.917358 273.358002,236.533783 C275.536987,235.236771 276.796844,233.716583 276.777863,230.988647 C276.748291,226.735596 278.535675,223.211441 282.186737,220.883362 C284.283081,219.546661 284.821930,217.739487 284.814331,215.393372 C284.770599,201.910873 284.751770,188.427292 284.895081,174.945892 C284.928009,171.847992 283.624207,170.025558 281.095551,168.558762 C268.429871,161.211716 255.761887,153.866302 243.199799,146.344803 C240.091721,144.483856 237.519196,144.515137 234.466187,146.371902 C223.806320,152.854919 213.073837,159.220886 202.293518,165.501831 C199.605301,167.068100 198.123672,168.846939 198.157211,172.182449 C198.193756,175.814865 196.501419,179.084793 193.543442,181.208771 C190.730438,183.228622 190.095047,185.724854 190.160385,188.936920 C190.319458,196.757294 190.236404,204.582596 190.252640,213.373047 z" })
        }
      ),
      c && /* @__PURE__ */ a("div", { className: "logo-text", children: [
        /* @__PURE__ */ e("span", { className: "monoatom", children: "MONOATOM" }),
        /* @__PURE__ */ e("span", { className: "labs", children: "LABS" })
      ] })
    ]
  }
), te = () => {
  const [h, m] = A(!1), [c, i] = A(!1), [o, d] = A(null), [C, u] = A(null), p = G();
  F(() => {
    const n = () => m(window.scrollY > 50);
    return window.addEventListener("scroll", n), () => window.removeEventListener("scroll", n);
  }, []), F(() => {
    const n = () => {
      d(null);
    };
    if (o)
      return document.addEventListener("click", n), () => document.removeEventListener("click", n);
  }, [o]);
  const g = {
    Products: [
      { name: "Graphacrete", path: "/products/graphacrete", desc: "Nano-engineered concrete", icon: j },
      { name: "Graffisol", path: "/products/graffisol", desc: "Anti-corrosion coating", icon: I },
      { name: "Ceraphene", path: "/products/ceraphene", desc: "Thermal management", icon: q },
      { name: "HD-G-PE", path: "/products/hd-g-pe", desc: "Advanced polymers", icon: U },
      { name: "View All Products", path: "/products", desc: "Full catalog overview", icon: K }
    ]
  }, M = [
    { name: "About", path: "/about" }
  ], x = (n) => p.pathname === n || p.pathname.startsWith(n + "/"), f = p.pathname.startsWith("/products/pipeline/"), T = (n = !1) => h ? n ? "text-white" : "text-neutral-400 hover:text-white" : f && !h ? n ? "text-neutral-900" : "text-neutral-600 hover:text-neutral-900" : n ? "text-white" : "text-neutral-400 hover:text-white", L = f && !h ? "light" : "dark", D = (n) => {
    p.pathname === "/" && (n.preventDefault(), window.scrollTo({ top: 0, behavior: "smooth" }));
  }, y = (n, t) => {
    t.stopPropagation(), d(o === n ? null : n);
  }, v = (n) => {
    u(C === n ? null : n);
  };
  return /* @__PURE__ */ a("nav", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${h ? "bg-neutral-950/90 backdrop-blur-md border-neutral-800 py-6" : "bg-transparent border-transparent py-8"}`, children: [
    /* @__PURE__ */ e("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ a("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ e(l, { to: "/", onClick: D, className: "hover:opacity-80 transition-opacity", children: /* @__PURE__ */ e(B, { size: h ? 15 : 22, theme: L, className: "transition-all duration-300" }) }),
      /* @__PURE__ */ a("div", { className: "hidden md:flex items-center space-x-8", children: [
        Object.keys(g).map((n) => /* @__PURE__ */ a("div", { className: "relative group", children: [
          /* @__PURE__ */ a(
            "button",
            {
              onClick: (t) => y(n, t),
              className: `flex items-center gap-1 text-sm font-medium transition-colors ${T(x(`/#${n.toLowerCase()}`))}`,
              children: [
                n,
                /* @__PURE__ */ e(X, { className: `w-4 h-4 transition-transform ${o === n ? "rotate-180" : ""}` })
              ]
            }
          ),
          o === n && /* @__PURE__ */ e("div", { className: "absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[90vw] sm:w-[600px] max-w-[600px] bg-neutral-950/95 backdrop-blur-xl border border-neutral-800 rounded-2xl shadow-2xl p-3 animate-in fade-in slide-in-from-top-2 duration-200 ring-1 ring-white/5 grid grid-cols-1 sm:grid-cols-2 gap-2", children: g[n].map((t) => /* @__PURE__ */ a(
            l,
            {
              to: t.path,
              className: `flex items-start gap-4 p-3 rounded-xl transition-all duration-200 group/item ${x(t.path) ? "bg-neutral-800/50 ring-1 ring-white/5" : "hover:bg-neutral-800/50 hover:ring-1 hover:ring-white/5"}`,
              onClick: () => {
                d(null);
              },
              children: [
                /* @__PURE__ */ e("div", { className: `p-2 rounded-lg ${x(t.path) ? "bg-blue-500/20 text-blue-400" : "bg-neutral-900 text-neutral-500 group-hover/item:text-blue-400 group-hover/item:bg-blue-500/10"} transition-colors`, children: /* @__PURE__ */ e(t.icon, { size: 20 }) }),
                /* @__PURE__ */ a("div", { children: [
                  /* @__PURE__ */ e("div", { className: `text-sm font-bold mb-0.5 ${x(t.path) ? "text-white" : "text-neutral-300 group-hover/item:text-white"}`, children: t.name }),
                  /* @__PURE__ */ e("div", { className: "text-xs text-neutral-500 leading-snug group-hover/item:text-neutral-400", children: t.desc })
                ] })
              ]
            },
            t.path
          )) })
        ] }, n)),
        M.map((n) => /* @__PURE__ */ e(
          l,
          {
            to: n.path,
            className: `text-sm font-medium transition-colors ${T(x(n.path))}`,
            children: n.name
          },
          n.name
        )),
        /* @__PURE__ */ e(l, { to: "/contact", children: /* @__PURE__ */ e(
          _,
          {
            variant: "primary",
            theme: "dark",
            className: "h-9 px-4 text-xs shadow-none",
            children: "Innovate With Us"
          }
        ) })
      ] }),
      /* @__PURE__ */ e("button", { className: `md:hidden ${f && !h ? "text-neutral-900" : "text-white"}`, onClick: () => i(!c), children: c ? /* @__PURE__ */ e(V, {}) : /* @__PURE__ */ e(Z, {}) })
    ] }) }),
    c && /* @__PURE__ */ e("div", { className: "md:hidden bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 absolute top-full left-0 right-0 shadow-xl z-40 overflow-hidden", children: /* @__PURE__ */ a("div", { className: "px-4 py-4 space-y-2", children: [
      Object.keys(g).map((n) => /* @__PURE__ */ a("div", { children: [
        /* @__PURE__ */ a(
          "button",
          {
            onClick: () => v(n),
            className: "flex items-center justify-between w-full text-sm font-medium text-neutral-400 hover:text-white py-2",
            children: [
              n,
              /* @__PURE__ */ e(X, { className: `w-4 h-4 transition-transform ${C === n ? "rotate-180" : ""}` })
            ]
          }
        ),
        C === n && /* @__PURE__ */ e("div", { className: "pl-4 space-y-2 pb-2", children: g[n].map((t) => /* @__PURE__ */ a(
          l,
          {
            to: t.path,
            className: `flex items-center gap-3 py-2 ${x(t.path) ? "text-white" : "text-neutral-400"}`,
            onClick: () => {
              i(!1), u(null);
            },
            children: [
              /* @__PURE__ */ e(t.icon, { size: 16 }),
              /* @__PURE__ */ e("span", { className: "text-sm font-medium", children: t.name })
            ]
          },
          t.path
        )) })
      ] }, n)),
      M.map((n) => /* @__PURE__ */ e(
        l,
        {
          to: n.path,
          className: `block text-sm font-medium py-2 transition-colors ${x(n.path) ? "text-white" : "text-neutral-400 hover:text-white"}`,
          onClick: () => i(!1),
          children: n.name
        },
        n.name
      )),
      /* @__PURE__ */ e(
        l,
        {
          to: "/contact",
          className: "block pt-2",
          onClick: () => i(!1),
          children: /* @__PURE__ */ e(
            _,
            {
              variant: "primary",
              theme: "dark",
              className: "h-9 px-4 text-xs shadow-none w-full",
              children: "Innovate With Us"
            }
          )
        }
      )
    ] }) })
  ] });
}, ne = ({ className: h = "absolute inset-0 z-0" }) => {
  const m = R(null), c = R({ x: -500, y: -500 });
  return F(() => {
    const i = m.current;
    if (!i) return;
    const o = i.getContext("2d");
    let d, C, u;
    const p = 30, g = 4, M = 0.25, x = 0.94;
    let f = [], T = [];
    const L = /* @__PURE__ */ new Map(), D = (t, r) => {
      const k = `${t.toFixed(1)},${r.toFixed(1)}`;
      return L.has(k) || L.set(k, { x: t, y: r, neighbors: [], energy: 0 }), L.get(k);
    }, y = () => {
      d = i.width = window.innerWidth, C = i.height = window.innerHeight;
      const t = i.getBoundingClientRect();
      d = i.width = t.width, C = i.height = t.height, f = [], T = [], L.clear();
      const r = p * 3 / 2, k = p * Math.sqrt(3), w = Math.ceil(d / r) + 2, s = Math.ceil(C / k) + 2;
      for (let b = -1; b < w; b++)
        for (let N = -1; N < s; N++) {
          const S = b * r, P = N * k + (b % 2 !== 0 ? k / 2 : 0), z = [];
          for (let E = 0; E < 6; E++) {
            const $ = Math.PI / 180 * (60 * E), O = S + p * Math.cos($), Y = P + p * Math.sin($);
            z.push(D(O, Y));
          }
          for (let E = 0; E < 6; E++) {
            const $ = z[E], O = z[(E + 1) % 6];
            $.neighbors.includes(O) || ($.neighbors.push(O), O.neighbors.push($));
          }
        }
      f = Array.from(L.values());
    }, v = () => {
      if (o) {
        if (o.fillStyle = "rgba(10, 10, 10, 0.4)", o.fillRect(0, 0, d, C), o.strokeStyle = "#262626", o.lineWidth = 1, o.beginPath(), f.forEach((t) => {
          t.neighbors.forEach((r) => {
            o.moveTo(t.x, t.y), o.lineTo(r.x, r.y);
          });
        }), o.stroke(), Math.random() < M) {
          const t = f[Math.floor(Math.random() * f.length)];
          if (t && t.neighbors.length > 0) {
            const r = t.neighbors[Math.floor(Math.random() * t.neighbors.length)];
            T.push({
              start: t,
              end: r,
              progress: 0,
              type: Math.random() > 0.5 ? "bright" : "dim"
              // Variation in brightness
            });
          }
        }
        o.shadowBlur = 8;
        for (let t = T.length - 1; t >= 0; t--) {
          const r = T[t], k = Math.hypot(r.start.x - r.end.x, r.start.y - r.end.y);
          if (r.progress += g / k, r.progress >= 1)
            if (r.end.energy = 1, Math.random() > 0.1 && r.end.neighbors.length > 0) {
              const w = r.end.neighbors.filter((s) => s !== r.start);
              if (w.length > 0) {
                const s = w[Math.floor(Math.random() * w.length)];
                r.start = r.end, r.end = s, r.progress = 0;
              } else
                T.splice(t, 1);
            } else
              T.splice(t, 1);
          else {
            const w = r.start.x + (r.end.x - r.start.x) * r.progress, s = r.start.y + (r.end.y - r.start.y) * r.progress, b = r.type === "bright" ? "#ffffff" : "#a3a3a3";
            o.shadowColor = "#ffffff", o.fillStyle = b, o.beginPath(), o.arc(w, s, 1.8, 0, Math.PI * 2), o.fill();
          }
        }
        o.shadowBlur = 0, f.forEach((t) => {
          Math.hypot(t.x - c.current.x, t.y - c.current.y) < 150 && (t.energy = Math.min(t.energy + 0.1, 1)), t.energy > 0.01 && (o.fillStyle = `rgba(255, 255, 255, ${t.energy})`, o.beginPath(), o.arc(t.x, t.y, 1.5 + t.energy * 2, 0, Math.PI * 2), o.fill(), t.energy *= x);
        }), u = requestAnimationFrame(v);
      }
    }, n = (t) => {
      const r = i.getBoundingClientRect();
      c.current = {
        x: t.clientX - r.left,
        y: t.clientY - r.top
      };
    };
    return y(), window.addEventListener("resize", y), window.addEventListener("mousemove", n), u = requestAnimationFrame(v), () => {
      window.removeEventListener("resize", y), window.removeEventListener("mousemove", n), cancelAnimationFrame(u);
    };
  }, []), /* @__PURE__ */ e("canvas", { ref: m, className: h });
}, re = () => {
  const h = G();
  return /* @__PURE__ */ a("footer", { id: "contact", className: "relative bg-neutral-950 text-white pt-24 pb-12 px-6 border-t border-neutral-900 overflow-hidden", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0 z-0 opacity-50 transform translate-y-20", children: /* @__PURE__ */ e(ne, {}) }),
    /* @__PURE__ */ a("div", { className: "relative z-10 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ a("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24", children: [
        /* @__PURE__ */ a("div", { children: [
          /* @__PURE__ */ e(B, { size: 20, showText: !1, theme: "dark", className: "mb-8" }),
          /* @__PURE__ */ e("h2", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8", children: "Ready to enable Industry 4.0?" }),
          /* @__PURE__ */ e("p", { className: "text-xl text-neutral-500 max-w-md mb-10", children: "Partner with Monoatom Labs to integrate graphene solutions into your industrial workflow." }),
          /* @__PURE__ */ a("div", { className: "flex flex-col sm:flex-row gap-4", children: [
            /* @__PURE__ */ e(l, { to: "/contact", children: /* @__PURE__ */ e(_, { variant: "primary", theme: "dark", children: "Get in Touch" }) }),
            /* @__PURE__ */ e(l, { to: "/contact", children: /* @__PURE__ */ e(_, { variant: "secondary", theme: "dark", className: "border-neutral-800", children: "Download Company Profile" }) })
          ] })
        ] }),
        /* @__PURE__ */ a("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm lg:pl-12 border-l border-neutral-900", children: [
          /* @__PURE__ */ a("div", { children: [
            /* @__PURE__ */ e("h4", { className: "font-bold mb-6 uppercase tracking-wider text-xs text-neutral-500", children: "Headquarters" }),
            /* @__PURE__ */ a("div", { className: "flex items-start space-x-4 mb-2 text-neutral-300", children: [
              /* @__PURE__ */ e(J, { className: "w-5 h-5 mt-1 shrink-0 text-neutral-500" }),
              /* @__PURE__ */ a("span", { className: "text-base", children: [
                "3rd Floor, iHub Gujarat,",
                /* @__PURE__ */ e("br", {}),
                "Ahmedabad - 380015"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ a("div", { children: [
            /* @__PURE__ */ e("h4", { className: "font-bold mb-6 uppercase tracking-wider text-xs text-neutral-500", children: "Connect" }),
            /* @__PURE__ */ a("div", { className: "space-y-4 text-neutral-300", children: [
              /* @__PURE__ */ a("a", { href: "mailto:info@monoatomlabs.com", className: "flex items-center space-x-4 hover:text-white transition-colors", children: [
                /* @__PURE__ */ e(Q, { className: "w-5 h-5 text-neutral-500" }),
                /* @__PURE__ */ e("span", { className: "text-base", children: "info@monoatomlabs.com" })
              ] }),
              /* @__PURE__ */ a("div", { className: "flex items-center space-x-4", children: [
                /* @__PURE__ */ e(ee, { className: "w-5 h-5 text-neutral-500" }),
                /* @__PURE__ */ e("span", { className: "text-base", children: "+91 989 819 9809" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-16", children: [
        /* @__PURE__ */ a("div", { children: [
          /* @__PURE__ */ e("h4", { className: "font-bold mb-4 uppercase tracking-wider text-xs text-neutral-500", children: "Company" }),
          /* @__PURE__ */ a("ul", { className: "space-y-2.5 text-sm text-neutral-400", children: [
            /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(l, { to: "/about", className: "hover:text-white transition-colors", children: "About Us" }) }),
            /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(l, { to: "/about/company", className: "hover:text-white transition-colors", children: "Our Company" }) }),
            /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(l, { to: "/about/facilities", className: "hover:text-white transition-colors", children: "Facilities" }) }),
            /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(l, { to: "/about/founders", className: "hover:text-white transition-colors", children: "Founders" }) })
          ] })
        ] }),
        /* @__PURE__ */ a("div", { children: [
          /* @__PURE__ */ e("h4", { className: "font-bold mb-4 uppercase tracking-wider text-xs text-neutral-500", children: "Products" }),
          /* @__PURE__ */ a("ul", { className: "space-y-2.5 text-sm text-neutral-400", children: [
            /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(l, { to: "/products", className: "hover:text-white transition-colors", children: "All Products" }) }),
            /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(l, { to: "/products/graphacrete", className: "hover:text-white transition-colors", children: "Graphacrete" }) }),
            /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(l, { to: "/products/graffisol", className: "hover:text-white transition-colors", children: "Graffisol" }) }),
            /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(l, { to: "/products/ceraphene", className: "hover:text-white transition-colors", children: "Ceraphene" }) }),
            /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(l, { to: "/products/hd-g-pe", className: "hover:text-white transition-colors", children: "HD-G-PE" }) })
          ] })
        ] }),
        /* @__PURE__ */ a("div", { children: [
          /* @__PURE__ */ e("h4", { className: "font-bold mb-4 uppercase tracking-wider text-xs text-neutral-500", children: "Innovation Pipeline" }),
          /* @__PURE__ */ a("ul", { className: "space-y-2.5 text-sm text-neutral-400", children: [
            /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(l, { to: "/products/pipeline", className: "hover:text-white transition-colors", children: "Overview" }) }),
            /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(l, { to: "/products/pipeline/rustene", className: "hover:text-white transition-colors", children: "Rustene" }) }),
            /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(l, { to: "/products/pipeline/graphyre", className: "hover:text-white transition-colors", children: "Graphyre" }) }),
            /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(l, { to: "/products/pipeline/graphosite", className: "hover:text-white transition-colors", children: "Graphosite" }) }),
            /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(l, { to: "/products/pipeline/thermaphene", className: "hover:text-white transition-colors", children: "Thermaphene" }) }),
            /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(l, { to: "/products/pipeline/armophene", className: "hover:text-white transition-colors", children: "Armophene" }) })
          ] })
        ] }),
        /* @__PURE__ */ a("div", { children: [
          /* @__PURE__ */ e("h4", { className: "font-bold mb-4 uppercase tracking-wider text-xs text-neutral-500", children: "Connect" }),
          /* @__PURE__ */ e("ul", { className: "space-y-2.5 text-sm text-neutral-400", children: /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(l, { to: "/contact", className: "hover:text-white transition-colors", children: "Contact Us" }) }) })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "pt-8 border-t border-neutral-900", children: /* @__PURE__ */ a("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4", children: [
        /* @__PURE__ */ e(l, { to: "/", onClick: (c) => {
          h.pathname === "/" && (c.preventDefault(), window.scrollTo({ top: 0, behavior: "smooth" }));
        }, className: "hover:opacity-80 transition-opacity", children: /* @__PURE__ */ e(B, { size: 20, theme: "dark" }) }),
        /* @__PURE__ */ e("div", { className: "text-xs text-neutral-600", children: /* @__PURE__ */ a("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Monoatom Labs. All rights reserved."
        ] }) })
      ] }) })
    ] })
  ] });
}, oe = ({ className: h = "absolute inset-0 z-0" }) => {
  const m = R(null);
  R(null);
  const c = R(!1);
  return F(() => {
    const i = m.current;
    if (!i) return;
    const o = i.getContext("2d", {
      alpha: !0,
      desynchronized: !0,
      // Allow async GPU rendering
      willReadFrequently: !1
      // We only write, never read
    });
    let d, C, u = [], p;
    const g = [], M = (y) => {
      const v = [];
      for (let n = 0; n < 6; n++) {
        const t = Math.PI / 3 * n + Math.PI / 6;
        v.push({
          cos: Math.cos(t) * y,
          sin: Math.sin(t) * y
        });
      }
      return v;
    }, x = () => {
      const { offsetWidth: y, offsetHeight: v } = i;
      d = i.width = y, C = i.height = v, u = [];
      const n = 25, t = 60, r = 50, k = Math.ceil(C / r) + 2, w = Math.ceil(d / t) + 2;
      g.length = 0, g.push(...M(n));
      for (let s = -1; s < k; s++)
        for (let b = -1; b < w; b++) {
          let N = b * t, S = s * r;
          s % 2 !== 0 && (N += t / 2), u.push({
            originX: N,
            originY: S,
            x: N,
            y: S,
            size: n,
            // Pre-calculated constants for wave equations
            waveConstY: S * 8e-3,
            waveConstX: N * 5e-3,
            depthConst: N * 0.01
          });
        }
      c.current = !0;
    }, f = (y) => {
      if (!o || !c.current) return;
      o.globalCompositeOperation = "source-over", o.fillStyle = "rgba(0, 0, 0, 0)", o.clearRect(0, 0, d, C);
      const v = y * 8e-4, n = Math.cos(v), t = Math.sin(v * 1.5), r = /* @__PURE__ */ new Map(), k = u.length;
      for (let w = 0; w < k; w++) {
        const s = u[w], b = Math.sin(s.waveConstY + s.waveConstX + v) * 15, N = n * (s.waveConstY + s.waveConstX) * 3;
        s.x = s.originX + b, s.y = s.originY + N;
        const S = t * Math.sin(s.depthConst), P = Math.round((0.1 + (S + 1) * 0.25) * 10) / 10;
        r.has(P) || r.set(P, []), r.get(P).push(s);
      }
      r.forEach((w, s) => {
        o.strokeStyle = `rgba(255, 255, 255, ${s})`, o.fillStyle = `rgba(255, 255, 255, ${s * 0.15})`, o.lineWidth = 1.5, o.beginPath(), w.forEach((b) => {
          g.forEach((N, S) => {
            const P = b.x + N.cos, z = b.y + N.sin;
            S === 0 ? o.moveTo(P, z) : o.lineTo(P, z);
          }), o.closePath();
        }), o.fill(), o.stroke();
      }), p = requestAnimationFrame(f);
    }, L = ((y, v) => {
      let n;
      return function(...r) {
        clearTimeout(n), n = setTimeout(() => y(...r), v);
      };
    })(() => {
      c.current = !1, x();
    }, 250), D = setTimeout(() => {
      x(), p = requestAnimationFrame(f);
    }, 100);
    return window.addEventListener("resize", L), () => {
      clearTimeout(D), window.removeEventListener("resize", L), p && cancelAnimationFrame(p), c.current = !1, u = [], g.length = 0;
    };
  }, []), /* @__PURE__ */ e("canvas", { ref: m, className: h, style: { width: "100%", height: "100%" } });
}, ae = () => {
  const [h, m] = A(!1), [c, i] = A(0), [o, d] = A("Loading"), C = G();
  return F(() => {
    const u = (p) => {
      const g = p.target.closest('a[href], [role="link"]');
      if (g && !g.target) {
        const M = g.getAttribute("href"), x = window.location.hash.replace("#", "") || "/";
        if (M === x || M === "#" + x)
          return;
        document.body.classList.add("navigating"), m(!0), i(5), d("Loading");
        const f = setTimeout(() => {
          m(!1), i(0), document.body.classList.remove("navigating");
        }, 2e3);
        window._navSafetyTimeout = f;
      }
    };
    return document.addEventListener("click", u, !0), () => {
      document.removeEventListener("click", u, !0), window._navSafetyTimeout && clearTimeout(window._navSafetyTimeout);
    };
  }, []), F(() => {
    h ? (i(10), d("Loading")) : (m(!0), i(10), d("Loading"));
    const u = setTimeout(() => {
      i(30), d("Loading");
    }, 50), p = setTimeout(() => {
      i(50), d("Loading page");
    }, 150), g = setTimeout(() => {
      i(70), d("Almost there");
    }, 300), M = setTimeout(() => {
      i(90), d("Finalizing");
    }, 500), x = setTimeout(() => {
      i(100), d("Done!"), setTimeout(() => {
        m(!1), i(0), document.body.classList.remove("navigating"), window._navSafetyTimeout && (clearTimeout(window._navSafetyTimeout), window._navSafetyTimeout = null);
      }, 300);
    }, 700);
    return () => {
      clearTimeout(u), clearTimeout(p), clearTimeout(g), clearTimeout(M), clearTimeout(x);
    };
  }, [C.pathname]), !h && c === 0 ? null : /* @__PURE__ */ a(H, { children: [
    /* @__PURE__ */ e("div", { className: "fixed top-0 left-0 right-0 h-2 z-[9999]", children: /* @__PURE__ */ e(
      "div",
      {
        className: "h-full transition-all duration-300 ease-out",
        style: {
          width: `${c}%`,
          background: "linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)",
          backgroundSize: "200% 100%",
          animation: "shimmer 2s infinite",
          boxShadow: "0 3px 25px rgba(59, 130, 246, 0.7), 0 0 15px rgba(6, 182, 212, 0.5)",
          opacity: h ? 1 : 0
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
}, de = () => /* @__PURE__ */ a("div", { className: "min-h-screen bg-black font-sans selection:bg-white selection:text-black relative", children: [
  /* @__PURE__ */ a("div", { className: "fixed inset-0 z-0 pointer-events-none", children: [
    /* @__PURE__ */ e(oe, { className: "w-full h-full opacity-70" }),
    /* @__PURE__ */ e("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.4)_100%)]" })
  ] }),
  /* @__PURE__ */ e(ae, {}),
  /* @__PURE__ */ a("div", { className: "relative z-10", children: [
    /* @__PURE__ */ e(te, {}),
    /* @__PURE__ */ e("main", { children: /* @__PURE__ */ e(W, {}) }),
    /* @__PURE__ */ e(re, {})
  ] })
] });
export {
  re as Footer,
  B as Logo,
  de as MainLayout,
  te as Navbar
};
