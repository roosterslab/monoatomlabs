# ROI Calculator Data Lab - Stakeholder Website

**Purpose**: Interactive website for stakeholders to understand ROI calculator formulas and submit required data

**Location**: `website-infographics-data-lab/`

---

## 🎯 What This Is

This is a **stakeholder-facing website** that:
1. Explains all ROI calculator formulas in detail
2. Shows exactly what data is needed and why
3. Provides interactive forms for data submission
4. Visualizes the impact of missing data
5. Tracks overall calculator accuracy

---

## 📁 File Structure

```
website-infographics-data-lab/
├── index.html                      # Main dashboard
├── ceraphene.html                  # Ceraphene formula breakdown
├── graffisol.html                  # Graffisol formula breakdown (TO CREATE)
├── graphacrete.html                # Graphacrete formula breakdown (TO CREATE)
├── hdgpe.html                      # HD-G-PE formula breakdown (TO CREATE)
├── submit-form.html                # Data submission forms
├── README.md                       # This file
└── templates/
    └── Data_Submission_Template.xlsx  # Excel template (TO CREATE)
```

---

## 🚀 How to Use

### **Option 1: Open Locally**
1. Open `index.html` in any modern browser
2. No server required - it's a static website
3. Navigate between sections using the nav bar

### **Option 2: Deploy to Web Server**
1. Upload entire directory to web server
2. Access via URL (e.g., `https://internal.monoatomlabs.com/data-lab/`)
3. Share link with stakeholders

### **Option 3: Host on Internal Network**
```bash
# Simple Python HTTP server
cd website-infographics-data-lab
python -m http.server 8000

# Access at http://localhost:8000
```

---

## 📊 Pages Overview

### **1. index.html - Dashboard**
- **Purpose**: Overview of all calculator status
- **Features**:
  - Overall accuracy metrics (79%)
  - Product cards showing completeness
  - Critical data gap alerts
  - Navigation to detailed formula pages

**Key Sections**:
- Hero section with summary stats
- Data gap analysis dashboard
- Product cards (Ceraphene, Graffisol, Graphacrete, HD-G-PE)
- Critical items alert banner
- Data submission CTA

---

### **2. ceraphene.html - Ceraphene Formulas**
- **Purpose**: Detailed explanation of Ceraphene ROI calculations
- **Features**:
  - Formula breakdowns with LaTeX rendering
  - Source-backed vs needs-validation indicators
  - Customer examples
  - Impact visualization

**Formulas Explained**:
1. **Immediate Price Savings** (Source-backed ✓)
2. **Cost Per Protection-Year** (Source-backed ✓)
3. **Total Cost of Ownership (TCO)** (Needs competitor data ⚠️)

**Data Gaps Highlighted**:
- Competitor durability (High Priority)
- Coverage rate per bottle (Medium Priority)

---

### **3. submit-form.html - Data Submission**
- **Purpose**: Guided forms for stakeholders to submit data
- **Features**:
  - Product selector
  - Guided input fields with validation
  - Priority indicators (CRITICAL, High, Medium)
  - Data source documentation

**Forms Included**:
- Ceraphene: Competitor durability
- Graffisol: Coating cost structure (CRITICAL)
- Graphacrete: Cement content & dosage
- HD-G-PE: Pricing & dosage (CRITICAL)

---

## 🎨 Design System

### **Color Coding**
```
✓ Green   = Source-Backed (verified data)
📊 Yellow  = Validated Range (tested bounds)
⚠️ Orange  = Needs Validation (high priority)
🚨 Red     = CRITICAL (blocking calculator)
⚙️ Blue    = Customer Input (user-provided)
```

### **Product Colors**
- **Ceraphene**: Purple (#8b5cf6)
- **Graffisol**: Amber (#f59e0b)
- **Graphacrete**: Teal (#0d9488)
- **HD-G-PE**: Cyan (#06b6d4)

---

## 📋 To-Do: Complete Implementation

### **Immediate (High Priority)**

1. **Create Remaining Formula Pages**:
   - [ ] `graffisol.html` - Similar to ceraphene.html
   - [ ] `graphacrete.html` - Similar to ceraphene.html
   - [ ] `hdgpe.html` - Similar to ceraphene.html

2. **Expand Data Submission Forms**:
   - [ ] Complete Graffisol form (coating cost breakdown)
   - [ ] Complete Graphacrete form (cement content + dosage)
   - [ ] Complete HD-G-PE form (pricing + dosage)

3. **Create Excel Template**:
   - [ ] `templates/Data_Submission_Template.xlsx`
   - [ ] Pre-formatted sheets by product
   - [ ] Data validation rules
   - [ ] Instructions tab

### **Nice-to-Have Enhancements**

4. **Interactive Features**:
   - [ ] Live calculator preview as data is entered
   - [ ] Before/after comparison sliders
   - [ ] Data quality score indicator

5. **Backend Integration** (if deploying production):
   - [ ] Form submission to database
   - [ ] Email notifications on submission
   - [ ] Admin dashboard for reviewing submissions

---

## 🔧 Technical Details

### **Dependencies**
- **Tailwind CSS**: Via CDN for styling
- **Google Fonts**: Inter (sans-serif), JetBrains Mono (monospace)
- **MathJax**: For LaTeX formula rendering (used in ceraphene.html)

### **Browser Compatibility**
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ⚠️ IE11 (limited support)

### **No Build Step Required**
- Pure HTML/CSS/JS
- No npm, webpack, or bundlers needed
- Can be edited directly in any text editor

---

## 📖 How to Create Additional Formula Pages

**Template**: Use `ceraphene.html` as a template

**Steps**:
1. Copy `ceraphene.html` → `[product].html`
2. Update colors (purple → product color)
3. Replace formulas with product-specific calculations
4. Update data gaps section
5. Add to navigation in `index.html`

**Formula Sections to Include**:
1. Overview (what we calculate)
2. Source-backed values (green boxes)
3. Formula breakdown (with examples)
4. Missing data (orange/red boxes)
5. Impact visualization
6. Data submission CTA

---

## 📞 Stakeholder Communication

### **Email Template**

```
Subject: ROI Calculator Data Needed - Action Required

Hi [Team],

We've created an interactive website to help you understand our ROI
calculator formulas and submit the data we need:

🔗 Access Here: [URL or attachment]

What You'll Find:
✓ Clear formula explanations for all products
✓ Visual breakdown of what's needed and why
✓ Easy data submission forms
✓ Impact analysis (what happens without your data)

Critical Data Needed By [Date]:
• Graffisol: Installed coating cost (Finance/Operations)
• HD-G-PE: Pricing + dosage (Finance/R&D)

This is the missing piece to launch our calculators with confidence!

Questions? Reply to this email or visit the Help section.

Thanks,
[Your Name]
```

---

## 🎯 Success Metrics

**Track These**:
1. **Completion Rate**: % of stakeholders who submitted data
2. **Time to Submit**: Average time spent on website before submission
3. **Data Quality**: % of submissions requiring follow-up clarification
4. **Calculator Launch**: Days from website launch to 95% accuracy

**Goal**: 100% of P0 (critical) data within 1 week

---

## 🔒 Security Notes

**For Internal Use Only**:
- This website is for internal stakeholders only
- Do not expose publicly (contains internal data gaps)
- If deploying to web, use authentication

**Data Handling**:
- Form submissions should be encrypted
- Store sensitive pricing data securely
- Comply with internal data policies

---

## 📝 Maintenance

### **Regular Updates**
- Update accuracy percentages as data is received
- Mark items as complete when data is validated
- Add new data requirements as needed

### **Version History**
- v1.0 (2026-02-17): Initial release with Ceraphene example
- v1.1 (TBD): Add remaining formula pages
- v1.2 (TBD): Backend integration for form submissions

---

## 🙏 Acknowledgments

**Created For**: Monoatom Labs stakeholder data collection
**Purpose**: Enable accurate, transparent ROI calculators
**Impact**: Unlock ₹600 Cr annual revenue potential

---

## 📧 Support

**Questions?**
- Technical: tech-lead@monoatomlabs.com
- Content: product@monoatomlabs.com
- Data Submission: data-team@monoatomlabs.com

---

**Last Updated**: 2026-02-17
**Status**: v1.0 - Ceraphene example complete, remaining pages in progress
