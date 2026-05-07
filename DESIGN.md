# Design System - NightClose Landing Pages

## Design Direction

**Aesthetic**: Restrained Minimalism with Quiet Warmth

**Core Principles**:
- **Restrained yet warm**: Minimal but not cold—quiet warmth through careful color choices and generous spacing
- **Clean layout**: Simple, readable layouts with ample whitespace
- **System typography**: Native system fonts for familiarity and performance
- **Purposeful simplicity**: Every element serves a clear function—no decoration for decoration's sake

---

## Typography

### Font Stack

**System Fonts Only**:
- `-apple-system, BlinkMacSystemFont, "SF Pro Text", "PingFang SC", system-ui, sans-serif`
- Native to each platform for optimal performance and familiarity
- No custom font loading = instant text rendering

**Why System Fonts?**
- Zero loading time—instant render
- Familiar to users on their platform
- Respects user's accessibility settings
- Aligns with Things 3, Notion's restrained aesthetic

### Type Scale

Restrained sizing with `clamp()` for responsive typography:

```css
/* Headlines */
--text-3xl: clamp(2rem, 5vw, 3.25rem)    /* 32px-52px */
--text-2xl: clamp(1.5rem, 3vw, 2rem)     /* 24px-32px */
--text-xl: clamp(1.125rem, 2vw, 1.25rem) /* 18px-20px */

/* Body */
--text-base: 16px
--text-sm: 14px
```

### Hierarchy

1. **Hero Headline**: 3xl, Medium (500), -0.01em tracking
2. **Section Headlines**: 2xl, Medium (500), -0.01em tracking
3. **Card Titles**: xl, Medium (500), normal tracking
4. **Body**: base, Regular (400), normal tracking
5. **Captions**: sm, Regular (400), normal tracking

**Font Weights**: Regular (400) and Medium (500) only—no Bold to maintain restraint

---

## Color System

### Philosophy

**Deep Blue-Gray & Warm Gray**: Calm, neutral palette that feels professional yet approachable
- Creates a sense of quiet authority
- Avoids cold sterility of pure grays
- Aligns with "restrained yet warm" principle

### Palette

```css
/* Deep blue-gray neutrals - calm and restrained */
--gray-50: #f8f9fa;
--gray-100: #f1f3f5;
--gray-200: #e9ecef;   /* Borders */
--gray-300: #dee2e6;
--gray-400: #ced4da;
--gray-500: #adb5bd;
--gray-600: #868e96;   /* Muted text */
--gray-700: #495057;   /* Secondary text */
--gray-800: #343a40;
--gray-900: #212529;   /* Primary text */

/* Warm gray for subtle warmth */
--warm-gray-50: #fafaf9;
--warm-gray-100: #f5f5f4;

/* Accent - warm green for completion */
--accent: #22c55e;        /* Completion, success */
--accent-light: #86efac;
--accent-subtle: #dcfce7;

/* Semantic colors */
--text-primary: var(--gray-900);
--text-secondary: var(--gray-700);
--text-muted: var(--gray-600);
--bg: #ffffff;
--surface: var(--gray-50);
--border: var(--gray-200);
```

### Usage

- **Primary text**: `--gray-900` (dark, readable)
- **Body text**: `--gray-700` (softer, secondary info)
- **Muted text**: `--gray-600` (subtle, tertiary info)
- **Backgrounds**: `white` (main), `--gray-50` (surface/cards)
- **Accent**: `--accent` (completion states, checkmarks)

### What We Avoid

- ❌ Pure black (#000) or stark contrasts
- ❌ Warm amber/yellow tones (too decorative)
- ❌ Gradient text on headings
- ❌ Purple-to-blue gradients everywhere
- ❌ Red for any state (no failure states shown)

---

## Layout Principles

### Grid Strategy

**Simple, centered layouts**:
- `max-w-3xl` (768px) for hero and body content
- `max-w-4xl` (896px) for sections
- Centered alignment for clean, balanced composition
- Generous whitespace between sections

### Spacing Scale

**Generous, breathable spacing**:
- Section padding: `py-24 md:py-32` (96px-128px)
- Component spacing: `space-y-6 md:space-y-8` (24px-32px)
- Card padding: `p-8` (32px)

**Consistent rhythm**:
- Predictable spacing creates calm
- Generous gaps between sections for breathing room
- Tight groupings within related content

### Container Widths

- **Hero/Headlines**: `max-w-3xl` (768px)
- **Content sections**: `max-w-4xl` (896px)
- **Full-width**: Only for final CTA with dark background

### What We Avoid

- ❌ Magazine-style asymmetry (too busy)
- ❌ Alternating layouts (too dynamic)
- ❌ Large decorative numbers
- ❌ Excessive visual hierarchy variations
- ❌ Large emoji icons (too playful)

---

## Components

### Hero

**Layout**: Centered, generous whitespace
**Headline**: System font Medium, simple presentation
**Subheadline**: Multiple short paragraphs, readable line-height
**CTA**: Simple rounded button with minimal styling
**Detail**: No decorative elements

### Problem Section

**Layout**: Simple vertical stack of cards
**Structure**: Card-based with borders, consistent padding
**Stats**: Minimal presentation at bottom of cards
**Typography**: Medium weight for titles, Regular for body

### Cycle Visual

**Layout**: Simple horizontal pill flow
**Visual**: Minimal pills with subtle borders
**Emphasis**: Subtle gray background for "Back to Day 1"
**Background**: Solid surface color, no gradients

### Solution Section

**Layout**: Simple vertical stack of cards
**Structure**: Same card treatment as Problem section
**Content**: Clean, readable text with no icons

### Social Proof

**Research**: Simple cards with stats
**Testimonials**: Vertical stack with minimal quote styling
**Quote marks**: No decorative quote marks

### Pricing

**Layout**: Single card with all info
**Price**: Large but not excessive (5xl)
**Features**: Simple checkmarks
**Badge**: Minimal gray badge

### FAQ

**Animation**: Grid-template-rows transition (smooth)
**Icons**: Simple + rotation for expand/collapse
**Typography**: Medium for questions, Regular for answers
**Style**: Clean cards with borders

### Final CTA

**Background**: Dark gray-900, no gradients
**Layout**: Centered, generous whitespace
**Form**: Simple rounded inputs
**Contrast**: White text on dark background

---

## Motion

### Philosophy

**Quiet, purposeful transitions**
- Smooth state changes
- Simple easing (ease-out)
- No bounces, no excessive animation

### Timing

```css
/* Standard transitions */
transition: all 200ms ease-out;

/* Height animations */
transition: grid-template-rows 200ms ease-out;
```

### What We Avoid

- ❌ Bounce or elastic easing
- ❌ Hover scale effects
- ❌ Excessive micro-interactions
- ❌ Decorative animations

---

## Responsive Strategy

### Breakpoints

- Mobile-first approach
- Key breakpoint: `md:` (768px)
- Fluid sizing: `clamp()` for typography and spacing

### Mobile Adaptations

- Single column layouts
- Touch-friendly targets (min 44px)
- Readable text sizes (never below 16px)
- Consistent padding adjustments

---

## The "Things 3 / Notion" Aesthetic

✅ **System fonts**: Native to platform, instant rendering
✅ **Restrained colors**: Deep blue-gray, no bright accents
✅ **Simple cards**: Clean borders, consistent padding
✅ **Generous whitespace**: Breathing room, not cramped
✅ **Minimal weight**: Medium (500) for emphasis, Regular (400) for body
✅ **No decoration**: Every element serves a function
✅ **Quiet interactions**: Simple, purposeful transitions

---

## References

- **Things 3**: Restrained visual language, clean cards
- **Notion**: Calm information hierarchy, system fonts
- **Linear**: Minimal color usage, clean interfaces

---

**Last updated**: 2026-05-06
**Version**: 2.0 (Restrained Minimal)
