# Hero Section Lab - Quick Start Guide

**Goal:** Rapidly test and iterate on hero section variations for the Monoatom Labs website

---

## 📂 Lab Structure

```
website-herosection-lab/
├── README.md              # Main documentation
├── QUICKSTART.md          # This file
├── variation-01/          # Current baseline (live on website)
│   ├── Hero.jsx
│   ├── GrapheneLattice.jsx
│   └── README.md
├── variation-02/          # Future iterations
├── variation-03/          # Future iterations
└── ...
```

---

## 🚀 Quick Commands

### Create a New Variation
```bash
# From the lab directory
cd website-herosection-lab

# Create new variation folder
mkdir variation-02

# Copy baseline files
cp variation-01/Hero.jsx variation-02/Hero.jsx
cp variation-01/GrapheneLattice.jsx variation-02/GrapheneLattice.jsx

# Create README
touch variation-02/README.md
```

### Test a Variation Locally
```bash
# Copy variation to website
cp variation-02/Hero.jsx ../website/src/components/hero/Hero.jsx

# Run dev server (from website directory)
cd ../website
npm run dev

# Open browser to http://localhost:5173
```

### Restore Original
```bash
# Copy baseline back to website
cp variation-01/Hero.jsx ../website/src/components/hero/Hero.jsx
```

---

## 📝 Creating a New Variation - Checklist

### Step 1: Create Directory
- [ ] Create `variation-XX/` folder
- [ ] Copy baseline Hero.jsx
- [ ] Copy GrapheneLattice.jsx (if using)
- [ ] Create README.md

### Step 2: Modify Content
- [ ] Update badge/label text
- [ ] Write new headline
- [ ] Write new subheadline
- [ ] Configure CTAs
- [ ] Choose statistics to display

### Step 3: Document Changes
In `variation-XX/README.md`:
- [ ] Describe the variation focus
- [ ] Document content changes
- [ ] Explain strategic rationale
- [ ] Note design modifications
- [ ] List expected improvements

### Step 4: Test
- [ ] Copy to website directory
- [ ] Run local dev server
- [ ] Test on desktop
- [ ] Test on mobile
- [ ] Test on tablet

### Step 5: Review
- [ ] 3-second clarity test (can visitor understand what we do?)
- [ ] Credibility check (trust signals present?)
- [ ] CTA effectiveness (clear next steps?)
- [ ] Mobile responsiveness
- [ ] Visual impact

---

## 🎯 Variation Ideas (Quick Reference)

### Variation 02: Credibility-First
- **Badge:** "6× President of India Awardee • MIT TR35 • NASA Recognized"
- **Headline:** "Award-Winning Nanomaterial Innovations"
- **Focus:** Immediate trust building

### Variation 03: Problem-Solution
- **Badge:** "Solving the Graphene Commercialization Gap"
- **Headline:** "From Lab Prototype to Commercial Reality"
- **Focus:** Address customer pain point

### Variation 04: Performance Metrics
- **Badge:** "NABL Certified Performance"
- **Headline:** "+50% Stronger. 60% Lower Cost."
- **Focus:** Lead with hard numbers

### Variation 05: Manufacturing Focus
- **Badge:** "Lab to Manufacturing Pipeline"
- **Headline:** "We Don't Just Innovate in the Lab"
- **Focus:** Scale-ready capability

### Variation 06: Vision-Driven
- **Badge:** "Advanced Materials for 4th Industrial Revolution"
- **Headline:** "Building the Material Economy of Tomorrow"
- **Focus:** Inspire with mission

---

## 🎨 Quick Component Reference

### Badge Component
```jsx
<div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neutral-700 bg-neutral-900/50 backdrop-blur mb-8">
    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
    <span className="text-xs font-bold text-neutral-300 tracking-wide uppercase">
        YOUR TEXT HERE
    </span>
</div>
```

### Headline
```jsx
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-tight mb-8">
    Your Headline<br />
    <span className="text-neutral-500">Emphasis Text.</span>
</h1>
```

### Subheadline
```jsx
<p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mb-12 font-light leading-relaxed">
    Your subheadline text here. Keep it benefit-focused and specific.
</p>
```

### CTA Buttons
```jsx
<Link to="/your-page">
    <Button variant="primary" theme="dark" icon={ArrowRight}>
        Button Text
    </Button>
</Link>
```

### Statistics Bar
```jsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-800 pt-8">
    <StatCard value="10+" label="Your Label" theme="dark" />
    <StatCard value="5+" label="Your Label" theme="dark" />
    <StatCard value="2" label="Your Label" theme="dark" />
    <StatCard value="5" label="Your Label" theme="dark" />
</div>
```

---

## 📊 Testing Checklist

### Clarity Test (3 seconds)
Show to someone for 3 seconds, then ask:
- [ ] What does this company do?
- [ ] What makes them different?
- [ ] What should I do next?

### Credibility Test
- [ ] Are there trust signals? (awards, certifications, metrics)
- [ ] Does it feel professional and legitimate?
- [ ] Would I trust this company with my business?

### Conversion Test
- [ ] Are CTAs clear and compelling?
- [ ] Do I know what happens when I click?
- [ ] Are there CTAs for different user types?

### Mobile Test
- [ ] Does headline fit without awkward breaks?
- [ ] Are CTAs easily tappable?
- [ ] Is statistics bar readable?
- [ ] Does animation perform smoothly?

---

## 🎯 Common Modifications

### Change Statistics Bar Metrics

**From:** Innovation-focused
```jsx
<StatCard value="10+" label="Breakthrough Innovations" />
<StatCard value="5+" label="Commercial Products" />
```

**To:** Performance-focused
```jsx
<StatCard value="+50%" label="Strength Increase" />
<StatCard value="60%" label="Cost Savings" />
```

**To:** Impact-focused
```jsx
<StatCard value="Clean" label="Energy" />
<StatCard value="Clean" label="Water" />
```

### Change Visual Background

**Option 1: Keep GrapheneLattice**
```jsx
<GrapheneLattice />
```

**Option 2: Remove animation (solid gradient)**
```jsx
{/* Remove <GrapheneLattice /> */}
<div className="absolute inset-0 z-0 bg-gradient-to-br from-neutral-900 to-black"></div>
```

**Option 3: Image background**
```jsx
<div className="absolute inset-0 z-0">
    <img src="/path/to/image.jpg" className="w-full h-full object-cover opacity-30" />
</div>
```

### Change CTA Destinations

**Technology Focus:**
```jsx
<Link to="/technology">Our Technology</Link>
<Link to="/technology/platform">View Documentation</Link>
```

**Product Focus:**
```jsx
<Link to="/products">Explore Products</Link>
<Link to="/products/catalog">Download Catalog</Link>
```

**Partnership Focus:**
```jsx
<Link to="/partnership">Partner With Us</Link>
<Link to="/contact">Contact Us</Link>
```

---

## 📈 Success Metrics

Track these for each variation:

### Engagement
- [ ] Bounce rate (target: <60%)
- [ ] Scroll depth (target: >70% scroll past hero)
- [ ] Time on page (target: >1:30 min)

### Conversion
- [ ] CTA click-through rate (target: >15%)
- [ ] Product page visits
- [ ] Contact form submissions

### Comprehension
- [ ] 3-second test pass rate (target: >80% can explain what we do)
- [ ] User feedback scores
- [ ] Qualitative comments

---

## 🔄 Workflow

1. **Review Baseline** → Understand variation-01
2. **Choose Focus** → Select messaging angle to test
3. **Create Variation** → Copy and modify Hero.jsx
4. **Document** → Write README explaining changes
5. **Test Locally** → Run dev server, review
6. **Get Feedback** → Show to 3-5 people, gather reactions
7. **Iterate** → Refine based on feedback
8. **Compare** → Evaluate against baseline
9. **Deploy Winner** → Implement best performer

---

## 💡 Tips

### Writing Headlines
- **Keep it short:** 2-5 words ideal
- **Be specific:** Avoid generic terms
- **Show benefit:** What's in it for them?
- **Test clarity:** 3-second comprehension rule

### Writing Subheadlines
- **Elaborate, don't repeat:** Add new info
- **Use specifics:** "+50% stronger" > "stronger"
- **Build credibility:** Mention certifications/awards
- **Stay concise:** 2 sentences max

### Choosing Statistics
- **Match audience:** Manufacturers want ROI, partners want scale
- **Use real numbers:** Verified metrics only
- **Show variety:** Mix innovation, products, impact
- **Keep it simple:** 4 stats max

### Testing Variations
- **One change at a time:** Isolate variables
- **Test with real users:** Not just team members
- **Get qualitative feedback:** Ask "why?"
- **Document everything:** Track all feedback

---

## 📚 Reference Files

- **Main Lab README:** `README.md`
- **Baseline Variation:** `variation-01/README.md`
- **Live Hero Component:** `../website/src/components/hero/Hero.jsx`
- **Source Materials:** `C:\Users\globql-ws\Documents\project-raj-sir\monoatoms\source-contents\`

---

## 🎯 Next Steps

1. ✅ **Review variation-01** (current baseline)
2. 🔨 **Create variation-02** (choose focus from ideas above)
3. 🧪 **Test locally** (npm run dev)
4. 📝 **Document findings** (README in variation-02/)
5. 🔄 **Iterate** (create variation-03, 04, etc.)
6. 🏆 **Deploy winner** (copy best version to live website)

---

**Ready to innovate? Start with variation-02!**

**Quick Command:**
```bash
mkdir variation-02
cp variation-01/Hero.jsx variation-02/Hero.jsx
cp variation-01/GrapheneLattice.jsx variation-02/GrapheneLattice.jsx
code variation-02/Hero.jsx
```

---

**Monoatom Labs Hero Section Lab**
**Experiment Fast. Learn Faster. Deploy Best.**
