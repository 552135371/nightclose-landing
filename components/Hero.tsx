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
    <section className="px-6 pt-20 pb-32 md:pt-32 md:pb-48 relative overflow-hidden">
      {/* Soft gradient background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse at top, var(--coral-subtle), transparent 70%)`
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Eyebrow with accent */}
        <div className="flex items-center gap-3 mb-8">
          <div
            className="w-8 h-px"
            style={{ background: 'var(--coral)' }}
          />
          <p
            className="text-sm font-medium tracking-wide uppercase"
            style={{ color: 'var(--coral)' }}
          >
            {data.audience}
          </p>
        </div>

        {/* Headline - elegant serif, larger */}
        <h1
          className="serif mb-8 max-w-4xl"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: '300',
            letterSpacing: '-0.02em',
            lineHeight: '1.1',
            color: 'var(--text-primary)'
          }}
        >
          {data.headline.split('Day 1').map((part, i, arr) => (
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <span style={{
                  color: 'var(--coral)',
                  fontWeight: '400'
                }}>Day 1</span>
              </span>
            ) : part
          ))}
        </h1>

        {/* Subheadline - refined spacing */}
        <div className="space-y-4 mb-14 max-w-2xl">
          {data.subheadline.map((line, i) => (
            <p
              key={i}
              className="text-lg md:text-xl"
              style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                fontWeight: '400'
              }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* CTA - elegant button with shadow */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
          <button
            className="group px-8 py-4 rounded-full text-base font-medium transition-all duration-300"
            style={{
              background: 'var(--coral)',
              color: 'white',
              boxShadow: '0 4px 20px rgba(232, 153, 141, 0.3)'
            }}
          >
            <span className="group-hover:tracking-wide transition-all duration-300">
              {data.cta}
            </span>
          </button>
        </div>

        {/* Caption with soft styling */}
        <p
          className="text-sm"
          style={{
            color: 'var(--text-muted)',
            letterSpacing: '0.02em'
          }}
        >
          {data.caption}
        </p>
      </div>
    </section>
  )
}
