/**
 * build-client-package.js
 * Builds the client delivery package at website/client-compiled/
 *
 * Output structure:
 *   client-compiled/website/
 *   ├── packages/              ← compiled bundles (auto-generated, do not edit)
 *   │   ├── backgrounds/
 *   │   ├── ui/
 *   │   ├── calculators/
 *   │   ├── sections/
 *   │   └── pages/
 *   ├── src/
 *   │   ├── data/              ← source (editable)
 *   │   └── components/
 *   │       ├── layout/        ← source (editable)
 *   │       ├── Logo.jsx       ← source
 *   │       └── [shims]        ← delegate to @monoatom/ packages
 *   ├── public/
 *   └── App.jsx, main.jsx, index.css, package.json, vite.config.js, ...
 *
 * Run: node build-client-package.js
 */

import { execSync } from 'child_process'
import {
  cpSync, mkdirSync, writeFileSync, readFileSync,
  rmSync, existsSync
} from 'fs'
import { join, resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SRC     = __dirname                                    // website/main/
const OUT     = resolve(__dirname, '../client-compiled')     // website/client-compiled/
const WEBSITE = join(OUT, 'website')
const PKGS    = join(WEBSITE, 'packages')                    // packages inside website/ for correct npm resolution
const OUT_README = join(OUT, 'README.md')
const OUT_TECHNICAL = join(OUT, 'TECHNICAL.md')

// ─── helpers ────────────────────────────────────────────────────────────────

function log(msg) { console.log(`\n→ ${msg}`) }

function mkdir(p) { mkdirSync(p, { recursive: true }) }

function write(p, content) {
  mkdir(dirname(p))
  writeFileSync(p, content, 'utf8')
}

function copy(src, dest) {
  if (!existsSync(src)) { console.warn(`  skip (not found): ${src}`); return }
  cpSync(src, dest, { recursive: true, force: true })
}

function run(cmd, opts = {}) {
  console.log(`  $ ${cmd}`)
  execSync(cmd, { cwd: SRC, stdio: 'inherit', ...opts })
}

function removeDir(p) {
  if (!existsSync(p)) return

  // On Windows, removal can fail due to locked native binaries under node_modules.
  // Try Node's rmSync first, then fall back to OS-level deletion.
  try {
    rmSync(p, { recursive: true, force: true })
  } catch {
    const winPath = p.replace(/\//g, '\\')
    try {
      run(`cmd /c rd /s /q "${winPath}"`, { cwd: '/' })
    } catch {
      console.warn(`  WARN: Could not fully remove: ${p}`)
      console.warn('        Close any dev servers / file watchers using client-compiled and try again.')
    }
  }
}

// ─── step 1: build all library bundles ──────────────────────────────────────

log('Building library bundles...')

const bundles = ['backgrounds', 'ui', 'calculators', 'sections', 'pages', 'shell', 'primitives']

for (const name of bundles) {
  log(`  Building @monoatom/${name}`)
  run(`npx vite build --config vite.lib.${name}.js`)
}

// ─── step 2: set up client-compiled/ directory ──────────────────────────────

log('Setting up client-compiled/ directory...')

// Ensure prior output (and any accidental node_modules) is removed.
removeDir(OUT)
removeDir(join(OUT, 'website', 'node_modules'))
mkdir(OUT)
mkdir(PKGS)
mkdir(WEBSITE)

// ─── step 3: copy compiled bundles → packages/ ──────────────────────────────

log('Copying compiled bundles to packages/...')

for (const name of bundles) {
  const srcDir = join(SRC, `dist-lib/${name}`)
  const destDir = join(PKGS, name)
  mkdir(destDir)
  copy(srcDir, destDir)

  const pkgJson = {
    name: `@monoatom/${name}`,
    version: '1.0.0',
    type: 'module',
    main: 'index.js',
    peerDependencies: {
      react: '>=18.0.0',
      'react-dom': '>=18.0.0',
    },
  }

  // If the library emits a CSS file, expose it via the standard "style" field.
  if (existsSync(join(destDir, 'website.css'))) {
    pkgJson.style = 'website.css'
  }

  write(join(destDir, 'package.json'), JSON.stringify(pkgJson, null, 2) + '\n')
}

// ─── step 4: copy source files → website/ ───────────────────────────────────

log('Copying source files...')

// Only data/ — the editable product content
copy(join(SRC, 'src/data'), join(WEBSITE, 'src/data'))

// Shared runtime helpers used by editable data modules (e.g., calculator overrides)
copy(join(SRC, 'src/utils'), join(WEBSITE, 'src/utils'))

// Presentation layer (editable copy + structured content, page-by-page)
copy(join(SRC, 'src/presentation'), join(WEBSITE, 'src/presentation'))

// Layout components (source — client may need to customize Navbar/Footer)
// NOTE: Layout + branding are intentionally NOT shipped as readable source.
// They are compiled into @monoatom/shell and exposed via tiny shim files below.

// App shell
copy(join(SRC, 'src/App.jsx'),   join(WEBSITE, 'src/App.jsx'))
copy(join(SRC, 'src/main.jsx'),  join(WEBSITE, 'src/main.jsx'))
copy(join(SRC, 'src/index.css'), join(WEBSITE, 'src/index.css'))

// Ensure compiled shell CSS is included for client dev/build.
// (In main repo, styles still come from index.css; this line is harmless there too.)
try {
  const mainPath = join(WEBSITE, 'src/main.jsx')
  const current = readFileSync(mainPath, 'utf8')
  if (!current.includes("@monoatom/shell/website.css")) {
    const updated = current.replace(
      /import\s+['"]\.\/index\.css['"];?/,
      (m) => `${m}\nimport '@monoatom/shell/website.css';`
    )
    writeFileSync(mainPath, updated, 'utf8')
  }
} catch {}

// Static assets & configs
copy(join(SRC, 'public'),            join(WEBSITE, 'public'))
copy(join(SRC, 'index.html'),        join(WEBSITE, 'index.html'))
copy(join(SRC, 'postcss.config.js'), join(WEBSITE, 'postcss.config.js'))
copy(join(SRC, 'eslint.config.js'),  join(WEBSITE, 'eslint.config.js'))

// Never ship node_modules in the delivery package.
removeDir(join(WEBSITE, 'node_modules'))

// ─── step 5: generate shim files ────────────────────────────────────────────

log('Generating shim files...')

function defaultShim(pkg, exportName) {
  return `export { ${exportName} as default } from '${pkg}';\n`
}
function namedShim(pkg) {
  return `export * from '${pkg}';\n`
}

function relativeDefaultShim(relativePath) {
  return `export { default } from '${relativePath}';\n`
}

// ── page shims — delegate to semantic presentation pages (editable source) ──
write(join(WEBSITE, 'src/pages/Home.jsx'), relativeDefaultShim('../presentation/pages/home'))
write(join(WEBSITE, 'src/pages/About.jsx'), relativeDefaultShim('../presentation/pages/about'))
write(join(WEBSITE, 'src/pages/Contact.jsx'), relativeDefaultShim('../presentation/pages/contact'))

write(join(WEBSITE, 'src/pages/about/Company.jsx'), relativeDefaultShim('../../presentation/pages/about-company'))
write(join(WEBSITE, 'src/pages/about/Facilities.jsx'), relativeDefaultShim('../../presentation/pages/about-facilities'))
write(join(WEBSITE, 'src/pages/about/Founders.jsx'), relativeDefaultShim('../../presentation/pages/about-founders'))

write(join(WEBSITE, 'src/pages/products/ProductsOverview.jsx'), relativeDefaultShim('../../presentation/pages/products-overview'))
write(join(WEBSITE, 'src/pages/products/Ceraphene.jsx'), relativeDefaultShim('../../presentation/pages/product-ceraphene'))
write(join(WEBSITE, 'src/pages/products/Graffisol.jsx'), relativeDefaultShim('../../presentation/pages/product-graffisol'))
write(join(WEBSITE, 'src/pages/products/Graphacrete.jsx'), relativeDefaultShim('../../presentation/pages/product-graphacrete'))
write(join(WEBSITE, 'src/pages/products/HDGPE.jsx'), relativeDefaultShim('../../presentation/pages/product-hdgpe'))

write(join(WEBSITE, 'src/pages/products/pipeline/PipelineOverview.jsx'), relativeDefaultShim('../../../presentation/pages/pipeline-overview'))
write(join(WEBSITE, 'src/pages/products/pipeline/Rustene.jsx'), relativeDefaultShim('../../../presentation/pages/pipeline-rustene'))
write(join(WEBSITE, 'src/pages/products/pipeline/Graphyre.jsx'), relativeDefaultShim('../../../presentation/pages/pipeline-graphyre'))
write(join(WEBSITE, 'src/pages/products/pipeline/Graphosite.jsx'), relativeDefaultShim('../../../presentation/pages/pipeline-graphosite'))
write(join(WEBSITE, 'src/pages/products/pipeline/Thermaphene.jsx'), relativeDefaultShim('../../../presentation/pages/pipeline-thermaphene'))
write(join(WEBSITE, 'src/pages/products/pipeline/Armophene.jsx'), relativeDefaultShim('../../../presentation/pages/pipeline-armophene'))
write(join(WEBSITE, 'src/pages/products/pipeline/HydrogenMembranes.jsx'), relativeDefaultShim('../../../presentation/pages/pipeline-hydrogen-membranes'))
write(join(WEBSITE, 'src/pages/products/pipeline/DesalinationMembranes.jsx'), relativeDefaultShim('../../../presentation/pages/pipeline-desalination-membranes'))
write(join(WEBSITE, 'src/pages/products/pipeline/AtmosphericHarvesting.jsx'), relativeDefaultShim('../../../presentation/pages/pipeline-atmospheric-harvesting'))
write(join(WEBSITE, 'src/pages/products/pipeline/GrapheneGlassFibres.jsx'), relativeDefaultShim('../../../presentation/pages/pipeline-graphene-glass-fibres'))
write(join(WEBSITE, 'src/pages/products/pipeline/BatteryStorage.jsx'), relativeDefaultShim('../../../presentation/pages/pipeline-battery-storage'))
write(join(WEBSITE, 'src/pages/products/pipeline/Graphenode.jsx'), relativeDefaultShim('../../../presentation/pages/pipeline-graphenode'))

// Industries/Technology shims — delegate to semantic presentation pages (editable source)
write(join(WEBSITE, 'src/pages/industries/IndustriesOverview.jsx'), relativeDefaultShim('../../presentation/pages/industries-overview'))
write(join(WEBSITE, 'src/pages/industries/Construction.jsx'), relativeDefaultShim('../../presentation/pages/industries-construction'))
write(join(WEBSITE, 'src/pages/industries/Automotive.jsx'), relativeDefaultShim('../../presentation/pages/industries-automotive'))
write(join(WEBSITE, 'src/pages/industries/SolarEnergy.jsx'), relativeDefaultShim('../../presentation/pages/industries-solar-energy'))
write(join(WEBSITE, 'src/pages/industries/AdvancedMaterials.jsx'), relativeDefaultShim('../../presentation/pages/industries-advanced-materials'))

write(join(WEBSITE, 'src/pages/technology/Platform.jsx'), relativeDefaultShim('../../presentation/pages/technology-platform'))
write(join(WEBSITE, 'src/pages/technology/Capabilities.jsx'), relativeDefaultShim('../../presentation/pages/technology-capabilities'))
write(join(WEBSITE, 'src/pages/technology/PilotProjects.jsx'), relativeDefaultShim('../../presentation/pages/technology-pilot-projects'))

// ── utility shims — not needed as source, hide them ──
write(join(WEBSITE, 'src/utils/contentData.js'),  namedShim('@monoatom/pages'))
write(join(WEBSITE, 'src/utils/contentParser.js'), namedShim('@monoatom/pages'))

// ── small utility component shims (imported by App.jsx / layout) ──
write(join(WEBSITE, 'src/components/NavigationProgress.jsx'), defaultShim('@monoatom/pages', 'NavigationProgress'))
write(join(WEBSITE, 'src/components/ScrollToTop.jsx'),        defaultShim('@monoatom/pages', 'ScrollToTop'))

// ── backgrounds shims — imported by layout source files ──
write(join(WEBSITE, 'src/components/backgrounds/index.js'), namedShim('@monoatom/backgrounds'))
write(join(WEBSITE, 'src/components/hero/MonochromeGrid.jsx'), defaultShim('@monoatom/backgrounds', 'MonochromeGrid'))

// ── shell shims — layout + branding (compiled-only) ──
mkdir(join(WEBSITE, 'src/components/layout'))
write(join(WEBSITE, 'src/components/layout/MainLayout.jsx'), defaultShim('@monoatom/shell', 'MainLayout'))
write(join(WEBSITE, 'src/components/layout/Navbar.jsx'),     defaultShim('@monoatom/shell', 'Navbar'))
write(join(WEBSITE, 'src/components/layout/Footer.jsx'),     defaultShim('@monoatom/shell', 'Footer'))
write(join(WEBSITE, 'src/components/Logo.jsx'),              defaultShim('@monoatom/shell', 'Logo'))

// ── ui shims — layout source files (Navbar/Footer) may import these ──
mkdir(join(WEBSITE, 'src/components/ui'))
write(join(WEBSITE, 'src/components/ui/index.js'), namedShim('@monoatom/ui'))
for (const name of [
  'BackNavigation', 'BackgroundSlideshow', 'BentoGrid', 'Button', 'CallToAction',
  'Card', 'FloatingBackNav', 'ImageCarousel', 'PageHeader', 'ProcessFlow',
  'ProductHero', 'ProductLightbox', 'ProductTabs', 'SectionHeading', 'StatCard', 'Tabs', 'Timeline',
]) {
  write(join(WEBSITE, `src/components/ui/${name}.jsx`), defaultShim('@monoatom/ui', name))
}

// NOTE: home/, about/, content/, products/, pipeline/, templates/,
// product-infographics/ are NOT included — those folders are only
// ever imported by compiled code (pages/sections bundles), never by source files.

// ─── step 6: generate website/ config files ─────────────────────────────────

log('Generating website config files...')

write(join(WEBSITE, 'package.json'), JSON.stringify({
  name: 'monoatom-website',
  private: true,
  version: '1.0.0',
  type: 'module',
  scripts: { dev: 'vite', build: 'vite build', lint: 'eslint .', preview: 'vite preview' },
  dependencies: {
    '@monoatom/backgrounds': 'file:./packages/backgrounds',
    '@monoatom/ui':          'file:./packages/ui',
    '@monoatom/calculators': 'file:./packages/calculators',
    '@monoatom/sections':    'file:./packages/sections',
    '@monoatom/pages':       'file:./packages/pages',
    '@monoatom/shell':       'file:./packages/shell',
    '@monoatom/primitives':  'file:./packages/primitives',
    'framer-motion':    '^12.31.0',
    'lucide-react':     '^0.563.0',
    'prop-types':       '^15.8.1',
    'react':            '^19.2.0',
    'react-dom':        '^19.2.0',
    'react-router-dom': '^7.13.0',
    'recharts':         '^3.7.0',
  },
  devDependencies: {
    '@eslint/js': '^9.39.1', '@types/react': '^19.2.5', '@types/react-dom': '^19.2.3',
    '@vitejs/plugin-react': '^5.1.1', autoprefixer: '^10.4.24', eslint: '^9.39.1',
    'eslint-plugin-react-hooks': '^7.0.1', 'eslint-plugin-react-refresh': '^0.4.24',
    globals: '^16.5.0', postcss: '^8.5.6', tailwindcss: '^3.4.17', vite: '^7.2.4',
  },
}, null, 2) + '\n')

write(join(WEBSITE, 'vite.config.js'), `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom', 'react-router-dom'],
  },
  optimizeDeps: {
    include: [
      '@monoatom/backgrounds',
      '@monoatom/ui',
      '@monoatom/calculators',
      '@monoatom/sections',
      '@monoatom/pages',
      '@monoatom/shell',
      '@monoatom/primitives',
    ],
  },
})
`)

write(join(WEBSITE, 'tailwind.config.js'), `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./packages/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff', foreground: '#0f172a',
        brand: { 500: '#0d9488', 600: '#0f766e' },
        neutral: {
          50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1',
          400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155',
          800: '#1e293b', 900: '#0f172a', 950: '#0a0a0a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        spin: { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
      }
    },
  },
  plugins: [],
}
`)

// ─── done ────────────────────────────────────────────────────────────────────

write(OUT_README, `# Monoatom Labs — Client Delivery Package

For a deep dive (architecture, what is editable, and why), see \`TECHNICAL.md\`.

## Delivery

Zip the \`client-compiled/\` folder and send it to the client.

When zipping, exclude \`website/node_modules/\` — the client should run \`npm install\` after unzipping.

\`\`\`
client-compiled/
├── README.md
└── website/
    ├── packages/           # compiled bundles (do not edit)
    ├── src/                # limited editable source (layout, routing shims)
    ├── public/             # editable runtime overrides and static assets
    ├── package.json
    └── ...
\`\`\`

## Getting Started (client)

\`\`\`bash
cd website
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
\`\`\`

## Calculator Changes (without source access)

Edit:

- \`website/public/calculator-overrides.js\`

This file is loaded before the app and can override:

- Slider/select ranges and defaults (\`defaultInputs\`, \`secondaryInputs\`)
- Key numeric assumptions used in calculations (\`constants\`)

Example:

\`\`\`js
window.__MONOATOM_CALC_OVERRIDES__ = {
  'graphacrete': {
    constants: { additivePricePerLitre: 250, co2KgPerKgCement: 0.92 },
    defaultInputs: { cementPrice: { default: 330, min: 280, max: 380 } },
  },
};
\`\`\`

## Website Text Changes (presentation layer)

Edit the semantic presentation layer (no Tailwind required):

- \`website/src/presentation/pages/**\`
- \`website/src/data/**\`

These files are shipped as readable source specifically so you can update copy and structured content without needing access to the proprietary Tailwind-heavy UI implementation.

## What NOT to Edit

Do not modify \`website/packages/\` — those files are compiled/minified and changes will be overwritten.
`)

write(OUT_TECHNICAL, `# Monoatom Labs Website — Technical Deep Dive (Client Delivery)

## Goals of This Delivery

- Keep core React page/source code in compiled bundles (no readable JSX pages in the client package).
- Still allow safe, client-editable customization for:
  - calculators (ranges/defaults/constants)
  - website copy (titles, subtitles, paragraphs, lists, CTA labels) via per-page files

## What Is In The Package

\`client-compiled/website/\` contains:

- \`packages/\`: compiled library bundles (minified)
  - \`@monoatom/pages\`, \`@monoatom/sections\`, \`@monoatom/calculators\`, \`@monoatom/ui\`, \`@monoatom/backgrounds\`
- \`src/\`: small editable shell
  - routing + shims
  - \`src/presentation/**\` and \`src/data/**\` are the client-editable content layer
- \`public/\`: editable runtime overrides and static assets

## How "No Page Source" Works

The proprietary Tailwind-heavy implementation lives inside compiled bundles (\`packages/**\`).

The client-editable layer is:\
\`src/presentation/**\` + \`src/data/**\`.

For compatibility, \`src/pages/**\` modules in the client package are tiny shims that re-export the presentation pages.

## Runtime Overrides (Editable Without Proprietary Source)

### Calculator Overrides

File:

- \`website/public/calculator-overrides.js\`

Mechanism:

- This script runs before React boots.
- It sets \`window.__MONOATOM_CALC_OVERRIDES__\`.
- The calculator config/data modules merge these overrides with defaults at runtime.

### Website Copy / Content

Edit the presentation-layer sources in:\
\`website/src/presentation/**\` and \`website/src/data/**\`.

## Why We Can't "Remove Tailwind" But Keep The Same Styling

Tailwind is not a separate “theme file” — it works by attaching class names in the markup (e.g. \`class=\"text-xl text-gray-300\"\`).
The compiled CSS contains rules that **target those class names**.

So if you remove Tailwind classes from the page markup, the compiled CSS no longer matches, and the page becomes unstyled.

Similarly, if you want “page source” but “no React code”, you must switch to a different rendering model (static HTML templates, CMS, or server rendering), which is a larger architectural change.

## Practical Options (Pick What You Want)

1) **Current model (recommended)**
  - proprietary UI stays compiled (Tailwind-heavy)
  - client edits \`src/presentation/**\` + \`src/data/**\`

2) **Ship full UI/page source**
  - client can edit everything
  - proprietary layout/UI is no longer secret

3) **HTML-based content blocks per page** (bigger refactor)
   - keep React pages compiled
   - client edits \`.html\` content blocks (no Tailwind classes inside)
   - the app injects those blocks into the UI
   - requires careful constraints (layout control, XSS safety, and stable schemas)

If you tell us which option you want, we can align the delivery structure accordingly.
`)

log('Done! client-compiled/ is ready.')
console.log(`
  website/client-compiled/website/
  ├── packages/
  │   ├── backgrounds/  ← compiled
  │   ├── ui/           ← compiled
  │   ├── calculators/  ← compiled
  │   ├── sections/     ← compiled
  │   └── pages/        ← compiled
  └── src/
  ├── data/               ← editable content/data
  ├── presentation/       ← editable semantic pages (no Tailwind)
  ├── pages/              ← small shims → presentation pages
  ├── components/layout/  ← small shims → compiled shell (Navbar/Footer/Layout)
  ├── App.jsx             ← routing skeleton
  └── main.jsx, index.css

  To run:
    cd website/client-compiled/website
    npm install
    npm run dev
`)
