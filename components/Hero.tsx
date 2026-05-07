interface HeroProps {
  variant: 'a' | 'b' | 'c' | 'd'
}

const content = {
  a: {
    headline: 'Stop starting from Day 1.',
    subheadline: [
      'Why do apps reset your progress when you miss a day?',
      'NightClose keeps every win—permanently.',
      'No resets. No "Day 1 again." Just your progress, staying where it belongs.'
    ],
    audience: 'Built for people who are hardest on themselves.',
    cta: 'Join the Waitlist',
    caption: 'Early access · $4.99/mo · iOS launching Summer 2026'
  }
}

export default function Hero({ variant }: HeroProps) {
  const data = content[variant]

  return (
    <section className="px-6 pt-32 pb-40 md:pt-48 md:pb-56">
      <div className="max-w-3xl mx-auto">
        {/* Eyebrow - minimal */}
        <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
          {data.audience}
        </p>

        {/* Headline - restrained, system font */}
        <h1
          className="mb-6"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            fontWeight: '500',
            letterSpacing: '-0.01em',
            lineHeight: '1.15',
            color: 'var(--text-primary)'
          }}
        >
          {data.headline}
        </h1>

        {/* Subheadline - clean, readable */}
        <div className="space-y-3 mb-12 max-w-2xl">
          {data.subheadline.map((line, i) => (
            <p
              key={i}
              className="text-base md:text-lg"
              style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* CTA - minimal button */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
          <button
            className="px-6 py-3 rounded-lg text-base font-medium transition-all duration-200"
            style={{
              background: 'var(--text-primary)',
              color: 'white'
            }}
          >
            {data.cta}
          </button>
        </div>

        {/* Caption */}
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          {data.caption}
        </p>
      </div>
    </section>
  )
}
