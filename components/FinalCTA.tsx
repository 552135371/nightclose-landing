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
      className="px-6 py-32 md:py-48 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--coral) 0%, var(--coral-dark) 100%)'
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 20% 80%, white, transparent 40%),
                       radial-gradient(circle at 80% 20%, white, transparent 40%)`
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Headline */}
        <h2
          className="serif mb-6"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: '300',
            letterSpacing: '-0.02em',
            color: 'white',
            textShadow: '0 2px 20px rgba(0,0,0,0.1)'
          }}
        >
          {data.headline}
        </h2>

        {/* Subheadline */}
        <p
          className="text-xl md:text-2xl mb-3 max-w-2xl mx-auto"
          style={{
            color: 'rgba(255, 255, 255, 0.95)',
            lineHeight: '1.6'
          }}
        >
          {data.subheadline}
        </p>

        <p
          className="text-base mb-12"
          style={{
            color: 'rgba(255, 255, 255, 0.75)'
          }}
        >
          {data.caption}
        </p>

        {/* Email Form */}
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-base focus:outline-none focus:ring-4 transition-all duration-300"
              style={{
                background: 'white',
                color: 'var(--text-primary)',
                border: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
            />
            <button
              className="px-8 py-4 rounded-full font-medium text-base whitespace-nowrap transition-all duration-300 hover:scale-105"
              style={{
                background: 'white',
                color: 'var(--coral)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
              }}
            >
              {data.cta}
            </button>
          </div>

          {/* Trust Badge */}
          <p
            className="text-sm flex items-center justify-center gap-2"
            style={{
              color: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            {data.trustBadge}
          </p>
        </div>
      </div>
    </section>
  )
}
