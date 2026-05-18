# Graffisol Catalog - Premium Print UI/UX Recipe

This document outlines the design system and UI/UX patterns established in this project to create a premium, print-optimized catalog. You can follow these principles to upgrade other catalogs or pages to match the Graffisol standard.

## 1. Core Structure & Typography
- **Print Focus:** The primary container has fixed dimensions matching A4 landscape (`width: 297mm; height: 210mm;`) with hidden overflows. 
- **Typography:**
  - **Headings & Numbers:** Use `fontFamily: 'Outfit, sans-serif'`. It provides a structured, modern, and premium feel. Keep headings bold (`fontWeight: 700` or `800`) and use `textTransform: 'uppercase'` with slight `letterSpacing: 0.5` or `1` for formal titles.
  - **Body text & Data Labels:** Use `fontFamily: 'Inter, sans-serif'`. Keep font sizes small for print density (usually `9px` to `10.5px`) with a readable line height (`1.4` to `1.6`).

## 2. Alternating Page Themes (Dark vs Light)
The catalog strictly alternates between dark and light themes to create a rhythmic, engaging reading experience. Avoid leaving pages plain un-styled white or black.

### Dark Theme (`.catalog-page-dark` class)
- **Background Image Variable:** Uses `--dark-bg-img: url('...')` dynamically inline (`style={{...}}`) on React pages to inject a distinct photo behind a highly-tinted radial and linear dark overlay. Defaults to `graffisol-01.jpg`.
- **Texture:** A subtle, repeating overlapping linear-gradient grid layered over the image.
- **Foreground:** Pure white `#ffffff` or off-white `#f8fafc` for primary text. `#9ca3af` for secondary text.
- **Card Backgrounds:** Translucent white overlays (`rgba(255,255,255,0.03)`) with very faint borders (`1px solid rgba(255,255,255,0.08)`).
- **Shadows:** Harder, darker shadows like `0 4px 6px -1px rgba(0,0,0,0.1)`.

### Light Theme (`.catalog-page-light` class)
- **Background Image Variable:** Uses `--light-bg-img: url('...')` dynamically inline on React pages to layer a high-key, faintly visible image beneath a heavy white wash (92% to 98% opacity). Defaults to `graffisol-02.png`.
- **Texture:** A subtle 20px dot or grid pattern (e.g., `#e5e7eb` lines at 1px) layered on top of the image wash.
- **Foreground:** Dark gray/black (`#111827` for headings, `#4b5563` or `#6b7280` for body).
- **Card Backgrounds:** Solid white or slightly off-white (`#f8fafc`).
- **Borders:** Crisp, soft borders (`1px solid #e5e7eb`).
- **Shadows:** Very faint, soft drop shadows (`0 4px 6px -1px rgba(0,0,0,0.02)`).

## 3. De-boxing (Breaking the "Boxy" Feel)
Traditional enterprise technical catalogs rely heavily on square tables with dark borders. The new standard breaks this:
- **Never use standard HTML table borders:** If you must use a table, remove raw borders. Use `border-collapse`, give the header a subtle soft background, and only put very faint `border-bottom` lines (e.g., `1px solid #f1f5f9`) between rows. Keep the last row border-free.
- **High Border Radiuses:** Standardize on `borderRadius: 12` or `16px` for primary cards, `borderRadius: 8` for smaller metric elements or internal tags.
- **Icon Containers:** Never just plop an icon natively. Wrap icons in a small container (`width: 32, height: 32, borderRadius: 8`) with a faint tinted background matching your primary color (e.g. `background: '${COLOR}15'`).

## 4. Visual Flourishes & Hierarchy
- **Use Lucide Icons:** Standardize on `lucide-react` icons. They are visually balanced and scalable. Use size `18-24px` for headers/titles, and `14-16px` for table rows or bullet points.
- **Primary Color Accents:** When using the accent color (e.g., Amber / `#f59e0b`), deploy it heavily in small bursts (icon colors, featured metric values, small progress bars) rather than massive blocks of text.
- **Premium Gradients:** For primary calls-to-actions, "Most Popular" badges, or footer highlight boxes, use a linear gradient instead of a flat color. (e.g. `background: linear-gradient(135deg, #f59e0b, #d97706)`). Add a colored drop shadow (`boxShadow: 0 10px 15px -3px rgba(245,158,11,0.25)`).

## 5. Micro-Interactions (Visual Detail)
Even for print, simulating high digital polish looks incredible:
- Add tiny colored badges for status labels (`<span style={{background: 'rgba(52,211,153,0.15)', color: '#6ee7b7'}}>Passed</span>`).
- Add tiny dot-indicators next to titles (`<div style={{width: 6, height: 6, borderRadius: '50%', background: COLOR}} />`).
- Overlay text on images should use a glassmorphism backdrop (`background: rgba(0,0,0,0.7), backdropFilter: blur(4px)`).

## Summary Checklist for Converting a Legacy Page:
1. Ensure the container has either `catalog-page-dark` or `catalog-page-light` assigned.
2. Confirm typography (Outfit headers, Inter paragraphs).
3. Replace 100% of standard `<ul>`/`<li>` tags with Flexbox containers holding tiny backgrounded Lucide icons + text.
4. Convert clunky tables into horizontal `display: flex` rows or modern grid cards if there's space.
5. Maximize white space (padding). Typical card padding is `16px` or `20px`. Main layout columns should have `24px` gaps.
6. Add `box-shadow` to all floating elements.
