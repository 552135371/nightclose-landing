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
      className="px-6 py-32 md:py-40"
      style={{
        background: 'var(--gray-900)'
      }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Headline - restrained */}
        <h2
          className="mb-4"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '500',
            letterSpacing: '-0.01em',
            color: 'white'
          }}
        >
          {data.headline}
        </h2>

        {/* Subheadline */}
        <p
          className="text-lg mb-2"
          style={{
            color: 'rgba(255, 255, 255, 0.7)'
          }}
        >
          {data.subheadline}
        </p>

        <p
          className="text-base mb-12"
          style={{
            color: 'rgba(255, 255, 255, 0.5)'
          }}
        >
          {data.caption}
        </p>

        {/* Email Form - minimal */}
        <div className="max-w-xl">
          <div className="flex flex-col sm:flex-row gap-3 mb-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-lg text-base focus:outline-none focus:ring-2 transition-all duration-200"
              style={{
                background: 'white',
                color: 'var(--text-primary)',
                border: 'none'
              }}
            />
            <button
              className="px-6 py-3 rounded-lg font-medium text-base whitespace-nowrap transition-all duration-200"
              style={{
                background: 'white',
                color: 'var(--text-primary)'
              }}
            >
              {data.cta}
            </button>
          </div>

          {/* Trust Badge */}
          <p
            className="text-sm"
            style={{
              color: 'rgba(255, 255, 255, 0.5)'
            }}
          >
            {data.trustBadge}
          </p>
        </div>
      </div>
    </section>
  )
}
