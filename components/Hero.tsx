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
    <section className="relative px-6 pt-24 pb-32 md:pt-32 md:pb-40 max-w-7xl mx-auto">
      {/* Editorial Layout - Left-aligned, asymmetric */}
      <div className="max-w-4xl">
        {/* Eyebrow - subtle serif italic */}
        <p className="serif-italic text-sm md:text-base mb-8" style={{ color: 'var(--text-muted)' }}>
          {data.audience}
        </p>

        {/* Headline - Space Grotesk, ultra-bold */}
        <h1
          className="font-bold mb-8 leading-[0.95]"
          style={{
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)'
          }}
        >
          {data.headline.split(' ').map((word, i) => (
            <span key={i} className="inline-block">
              {word === 'Day' || word === '1.' ? (
                <span style={{ color: 'var(--accent)' }}>{word} </span>
              ) : (
                <>{word} </>
              )}
            </span>
          ))}
        </h1>

        {/* Subheadline - Serif for warmth and readability */}
        <div className="serif space-y-4 mb-12 max-w-2xl text-lg md:text-xl" style={{ color: 'var(--text-secondary)' }}>
          {data.subheadline.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
          <button
            className="group relative px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 ease-out"
            style={{
              background: 'var(--text-primary)',
              color: 'var(--surface)'
            }}
          >
            <span className="relative z-10">{data.cta}</span>
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'var(--accent)',
                transform: 'scale(1.05)'
              }}
            />
          </button>
        </div>

        {/* Caption */}
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          {data.caption}
        </p>
      </div>

      {/* Decorative element - subtle accent line */}
      <div
        className="absolute bottom-0 left-0 h-px w-24"
        style={{ background: 'var(--accent)' }}
      />
    </section>
  )
}
