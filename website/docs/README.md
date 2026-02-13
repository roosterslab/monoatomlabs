# Monoatom Labs Website Documentation

Welcome to the Monoatom Labs website documentation. This directory contains comprehensive guides for developers working on the website.

## 📚 Documentation Index

### Components

- **[Background Components Guide](./BACKGROUND-COMPONENTS.md)** ⭐
  - Complete guide for using animated backgrounds
  - DarkHexBackground usage
  - AtomsToIndustryBackground usage (NEW)
  - Examples and best practices
  - Performance optimization

### Getting Started

If you're new to the project:

1. Read the [Background Components Guide](./BACKGROUND-COMPONENTS.md)
2. Review existing implementations in `src/pages/Home.jsx`
3. Check component examples in `src/components/home/`

## 🎨 Design System

### Color Scheme

The website uses a neutral color palette:

- **Primary Text**: White (`text-white`)
- **Secondary Text**: Neutral-500 (`text-neutral-500`)
- **Backgrounds**: Black, Neutral-900, Neutral-950
- **Accents**: Neutral-700, Neutral-800
- **Interactive**: White/Neutral hover states

**Note:** We intentionally avoid colored accents (teal, green, blue) in favor of a monochromatic neutral/white theme that matches the Hero section.

### Typography

- **Display Font**: Used for headings and hero text
- **Body Font**: Inter (system font stack)
- **Font Weights**: 300, 400, 500, 600, 700

### Spacing

- **Section Padding**: `py-24` or `py-32` for major sections
- **Container**: `max-w-7xl mx-auto`
- **Grid Gaps**: `gap-6` or `gap-8`

## 🏗️ Architecture

### Directory Structure

```
src/
├── components/
│   ├── backgrounds/        # Animated backgrounds (DRY)
│   ├── home/              # Homepage sections
│   ├── ui/                # Reusable UI components
│   └── layout/            # Layout components
├── pages/                 # Route pages
├── styles/               # Global styles
└── utils/                # Utility functions
```

### Background Components (DRY Pattern)

All animated backgrounds are centralized in `src/components/backgrounds/`:

- ✅ Single source of truth
- ✅ Easy to update globally
- ✅ Consistent brand identity
- ✅ Better maintainability

Read the [Background Components Guide](./BACKGROUND-COMPONENTS.md) for details.

## 🚀 Quick Links

### Common Tasks

**Add a new section with animated background:**
```jsx
import { AtomsToIndustryBackground } from '@/components/backgrounds';

<AtomsToIndustryBackground className="py-32 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Your content */}
  </div>
</AtomsToIndustryBackground>
```

**Add a standard dark section:**
```jsx
import { DarkHexBackground } from '@/components/backgrounds';

<DarkHexBackground className="py-24 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Your content */}
  </div>
</DarkHexBackground>
```

## 🎯 Best Practices

1. **Use wrapper components** instead of raw canvas components
2. **Follow DRY principle** - don't duplicate background code
3. **Test on mobile** - animations can be intensive
4. **Use white text** on dark backgrounds
5. **Add proper z-index** (`relative z-10`) to content
6. **Keep sections focused** - one clear purpose per section

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Test on: Mobile (375px), Tablet (768px), Desktop (1440px)

## ⚡ Performance

### Optimization Tips

- Use one animated background per viewport
- Consider static backgrounds for very long pages
- Test on lower-end devices
- Monitor FPS with browser DevTools

### Bundle Size

- Canvas animations are lightweight (~5KB)
- Minimal runtime overhead
- No external dependencies

## 🐛 Troubleshooting

### Common Issues

**Text hard to read on animated background?**
- Enable overlays: `showGradient={true}` and `showVignette={true}`

**Animation too fast/slow?**
- Adjust `scrollSpeed` prop

**Performance issues?**
- Use `DarkBackground` (no animation) instead

See [Background Components Guide](./BACKGROUND-COMPONENTS.md) for detailed troubleshooting.

## 📝 Contributing

When adding new features:

1. Follow existing patterns
2. Document in appropriate guide
3. Add usage examples
4. Update this index if needed
5. Test across devices

## 📞 Support

For questions:
- Check relevant documentation in this folder
- Review existing implementations
- Check component source code
- Ask the development team

---

**Documentation Version:** 1.0.0
**Last Updated:** 2026-02-06
**Project:** Monoatom Labs Website
