# Design System - NightClose Landing Pages

## Design Direction

**Aesthetic**: Editorial Minimalism with Emotional Warmth

**Core Principles**:
- **Restrained yet warm**: Not cold, clinical minimalism—emotional warmth through tinted colors and serif typography
- **Magazine/editorial layout**: Asymmetric compositions, generous whitespace, flowing reading rhythm
- **Intentional typography**: Distinctive font pairing, clear hierarchy, fluid sizing
- **Purposeful details**: Every element earns its place—no decoration for decoration's sake

---

## Typography

### Font Pairing

**Display Font**: Space Grotesk
- Geometric sans-serif with character
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- Used for: Headlines, UI elements, navigation
- Features: `font-feature-settings: 'ss01', 'ss02'` for stylistic alternates

**Body Font**: Newsreader (Serif)
- Variable font with optical sizing (6-72pt)
- Weights: 300 (light), 400 (regular), 500 (medium)
- Used for: Body copy, testimonials, subheadlines
- Emotional warmth and readability

**Why not Inter/Roboto/System fonts?**
- Overused in 2024-2025 AI interfaces
- Space Grotesk + Newsreader creates distinctive, memorable typography
- Serif for body adds warmth without feeling corporate

### Type Scale

Fluid sizing with `clamp()` for responsive typography:

```css
/* Headlines */
--text-7xl: clamp(3.5rem, 7vw, 6rem)    /* 56px-96px */
--text-6xl: clamp(3rem, 6vw, 5rem)      /* 48px-80px */
--text-5xl: clamp(2.5rem, 5vw, 4rem)    /* 40px-64px */

/* Body */
--text-lg: clamp(1.125rem, 2vw, 1.25rem) /* 18px-20px */
```

### Hierarchy

1. **Hero Headline**: 7xl, Space Grotesk Bold, -0.03em tracking
2. **Section Headlines**: 5xl, Space Grotesk Semibold, -0.02em tracking
3. **Subheadlines**: 2xl, Newsreader Regular, -0.01em tracking
4. **Body**: lg, Newsreader Regular, normal tracking
5. **Captions**: sm, Space Grotesk Regular, normal tracking

---

## Color System

### Philosophy

**Warm Neutrals**: All grays tinted toward amber (60° hue in OKLCH)
- Creates subconscious warmth
- Avoids cold, clinical feel of pure grays
- Aligns with "restrained yet warm" principle

### Palette (OKLCH)

```css
/* Warm neutrals - tinted toward amber */
--stone-50:  oklch(98% 0.01 60)   /* Almost white, subtle warmth */
--stone-100: oklch(96% 0.012 60)  /* Very light background */
--stone-200: oklch(92% 0.015 60)  /* Borders */
--stone-300: oklch(85% 0.018 60)  /* Disabled states */
--stone-400: oklch(70% 0.02 60)   /* Muted text */
--stone-500: oklch(55% 0.02 60)   /* Secondary text */
--stone-600: oklch(40% 0.018 60)  /* Body text */
--stone-700: oklch(30% 0.015 60)  /* - */
--stone-800: oklch(22% 0.012 60)  /* - */
--stone-900: oklch(15% 0.01 60)   /* Primary text, headings */

/* Accent - warm amber */
--accent:        oklch(75% 0.15 70)  /* Primary accent */
--accent-light:  oklch(85% 0.12 70)  /* Hover states */
--accent-subtle: oklch(92% 0.08 70)  /* Backgrounds */
```

### Why OKLCH?

- Perceptually uniform (unlike HSL/RGB)
- Precise control over lightness
- Consistent chroma across hues
- Future-proof (CSS Color Level 4)

### Usage

- **Primary text**: `--stone-900` (dark, warm)
- **Body text**: `--stone-600` (readable, not harsh)
- **Muted text**: `--stone-500` (subtle, secondary info)
- **Backgrounds**: `--stone-50` (main), `--surface` (cards/sections)
- **Accent**: `--accent` (CTAs, highlights, "Day 1" emphasis)

### What We Avoid

- ❌ Pure black (#000) or pure white (#fff)
- ❌ Cold grays (no hue tint)
- ❌ Cyan-on-dark "AI palette"
- ❌ Purple-to-blue gradients everywhere
- ❌ Gradient text on headings

---

## Layout Principles

### Grid Strategy

**Magazine-style asymmetry**:
- `grid-cols-12` for flexible column layouts
- Alternating left/right emphasis
- Generous gutters: `gap-12` (3rem) on desktop

### Spacing Scale

**Fluid spacing** with varied rhythm:
- Section padding: `py-20 md:py-32` (80px-128px)
- Component spacing: `space-y-16 md:space-y-20` (64px-80px)
- Content gaps: `gap-8 md:gap-12` (32px-48px)

**Not uniform**:
- Tight groupings for related content
- Generous separation between sections
- Creates visual breathing room

### Container Widths

- **Hero/Headlines**: `max-w-4xl` (896px)
- **Content**: `max-w-6xl` (1152px)
- **Body text**: `max-w-3xl` (768px) for optimal line length

### What We Avoid

- ❌ Everything wrapped in cards
- ❌ Cards inside cards
- ❌ Same-sized card grids
- ❌ Centered everything
- ❌ Uniform spacing everywhere

---

## Components

### Hero

**Layout**: Left-aligned, asymmetric
**Headline**: Space Grotesk Bold, 7xl, accent on "Day 1"
**Subheadline**: Newsreader Serif, multiple paragraphs
**CTA**: Dark button with accent hover state
**Detail**: Subtle accent line at bottom

### Problem Section

**Layout**: Article-style, grid-cols-12
**Structure**: Number + Title (5 cols) | Content (7 cols)
**Stats**: Large callout boxes with accent color
**Typography**: Newsreader for readability

### Cycle Visual

**Layout**: Vertical flow with arrows
**Visual**: Pills with borders, arrows between
**Emphasis**: "Back to Day 1" highlighted with accent
**Background**: Subtle gradient

### Solution Section

**Layout**: Staggered (alternating left/right)
**Icons**: Large (6xl), no background shapes
**Content**: Serif body text for warmth

### Social Proof

**Research**: Grid-cols-3, large stat numbers (accent)
**Testimonials**: Masonry-style (staggered tops)
**Quote marks**: Decorative, subtle, accent color

### Pricing

**Layout**: Split (price left, features right)
**Price**: Ultra-large (8xl), bold
**Features**: Custom checkmarks with accent
**Badge**: Accent background, rounded pill

### FAQ

**Animation**: Grid-template-rows transition (smooth height)
**Icons**: Plus/minus with rotation
**Typography**: Serif for answers
**Dividers**: Border between items

### Final CTA

**Background**: Dark (--text-primary) with subtle accent gradient
**Layout**: Left-aligned
**Form**: Inline email + button
**Contrast**: Light text on dark background

---

## Motion

### Philosophy

**Purposeful, not excessive**
- Smooth state changes
- Exponential easing (ease-out)
- No bounces, no elastic

### Timing

```css
/* Standard transitions */
transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);

/* Height animations */
transition: grid-template-rows 300ms cubic-bezier(0.16, 1, 0.3, 1);
```

### What We Avoid

- ❌ Animating layout properties (width, height, padding)
- ❌ Bounce or elastic easing
- ❌ Excessive micro-interactions
- ❌ Animation for animation's sake

---

## Responsive Strategy

### Breakpoints

- Mobile-first approach
- Key breakpoint: `md:` (768px)
- Fluid everything: clamp() for sizing, spacing, typography

### Mobile Adaptations

- Single column layouts collapse naturally
- Touch-friendly targets (min 44px)
- Readable text sizes (never below 16px)
- Generous tap areas on buttons

---

## The "Not AI Slop" Checklist

✅ **Distinctive fonts**: Space Grotesk + Newsreader (not Inter/Roboto)  
✅ **Warm neutrals**: OKLCH tinted grays (not pure #000/#fff)  
✅ **Editorial layout**: Asymmetric, magazine-style (not centered cards)  
✅ **Purposeful spacing**: Varied rhythm (not uniform padding)  
✅ **Restrained motion**: Purposeful transitions (no bounces)  
✅ **No generic patterns**: No icon-above-heading, no glass cards, no sparklines  
✅ **Emotional warmth**: Serif quotes, warm colors, gentle accents  

---

## Future Enhancements

### Performance
- [ ] Optimize font loading (font-display: swap)
- [ ] Lazy load below-fold content
- [ ] Add skeleton states for forms

### Accessibility
- [ ] Keyboard navigation review
- [ ] Color contrast audit (WCAG AAA)
- [ ] Screen reader testing
- [ ] Focus indicators

### Polish
- [ ] Scroll-triggered animations (fade-in on view)
- [ ] Refined hover states
- [ ] Custom cursor on interactive elements
- [ ] Dark mode support (future consideration)

---

**Last updated**: 2026-05-07  
**Version**: 1.0 (Variant A)
