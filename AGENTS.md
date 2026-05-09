<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Project Conventions

### Component Structure
All landing page components accept a `variant` prop: `'a' | 'b' | 'c' | 'd'`

```typescript
interface ComponentProps {
  variant: 'a' | 'b' | 'c' | 'd'
}

const content = {
  a: { /* Variant A content */ },
  b: { /* Variant B content */ },
  // ...
}
```

### Client Components
Components that require interactivity MUST have `'use client'` directive:
- `Hero.tsx` (Tally popup)
- `FinalCTA.tsx` (Tally popup)
- `FAQ.tsx` (accordion state)

### Tally Integration
- Form ID: `0Q1EEA`
- Script loaded in `layout.tsx`
- Popup config: `{ layout: 'modal', width: 600, autoClose: 3000 }`

### Design System
- Colors: Use CSS variables from `globals.css` (e.g., `var(--coral)`)
- Never hardcode colors
- Refer to `/ProductForge/projects/NightClose/.ai/marketing/landing-page-implementation-guide.md` for full design system

### Routes
- `/a` - Variant A (Pain-First) ✅ Complete
- `/b` - Variant B (Science-First) ⏳ Pending
- `/c` - Variant C (Empathy-First) ⏳ Pending
- `/d` - Variant D (Competitive) ⏳ Pending
