interface FinalCTAProps {
  variant: 'a' | 'b' | 'c' | 'd'
}

const content = {
  a: {
    headline: 'No more Day 1.',
    subheadline: 'Join 500+ people who never have to start over again.',
    caption: 'Early access opens June 2026',
    cta: 'Join the Waitlist',
    trustBadge: 'We\'ll never spam you. Unsubscribe anytime.'
  }
}

export default function FinalCTA({ variant }: FinalCTAProps) {
  const data = content[variant]

  return (
    <section
      className="px-6 py-24 md:py-32 relative overflow-hidden"
      style={{
        background: 'var(--text-primary)'
      }}
    >
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 30% 50%, var(--accent), transparent 70%)`
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Content */}
        <div className="max-w-3xl">
          {/* Headline */}
          <h2
            className="font-bold mb-6 leading-tight"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              letterSpacing: '-0.03em',
              color: 'var(--surface)'
            }}
          >
            {data.headline}
          </h2>

          {/* Subheadline */}
          <p
            className="serif text-xl md:text-2xl mb-2"
            style={{
              color: 'var(--stone-300)',
              opacity: 0.9
            }}
          >
            {data.subheadline}
          </p>

          <p
            className="text-base mb-12"
            style={{
              color: 'var(--stone-400)'
            }}
          >
            {data.caption}
          </p>

          {/* Email Form */}
          <div className="max-w-xl">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-base font-medium focus:outline-none focus:ring-2 transition-all duration-300"
                style={{
                  background: 'var(--surface)',
                  color: 'var(--text-primary)',
                  border: 'none'
                }}
              />
              <button
                className="px-8 py-4 rounded-full font-medium text-base whitespace-nowrap transition-all duration-300 hover:scale-105"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--text-primary)'
                }}
              >
                {data.cta} →
              </button>
            </div>

            {/* Trust Badge */}
            <p
              className="text-sm"
              style={{
                color: 'var(--stone-500)'
              }}
            >
              <svg
                className="inline w-3 h-3 mr-1"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z"
                  fill="currentColor"
                  opacity="0.5"
                />
              </svg>
              {data.trustBadge}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
