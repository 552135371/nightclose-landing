interface PricingProps {
  variant: 'a' | 'b' | 'c' | 'd'
}

const content = {
  a: {
    headline: 'Simple, honest pricing.',
    price: '$4.99',
    period: 'month',
    features: [
      'One habit to start',
      'Progress that never resets',
      'Win-only timeline',
      'Clean, simple interface',
      'No ads, no tricks'
    ],
    badge: 'Early Bird: Get 2 months free',
    cta: 'Reserve Your Spot'
  }
}

export default function Pricing({ variant }: PricingProps) {
  const data = content[variant]

  return (
    <section className="px-6 py-24 md:py-32" style={{ background: 'var(--surface)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2
          className="mb-12"
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: '500',
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)'
          }}
        >
          {data.headline}
        </h2>

        {/* Pricing card */}
        <div
          className="p-8 rounded-xl"
          style={{
            background: 'var(--bg)',
            border: '1px solid var(--border)'
          }}
        >
          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline gap-2 mb-3">
              <span
                className="text-5xl"
                style={{
                  color: 'var(--text-primary)',
                  fontWeight: '500',
                  letterSpacing: '-0.02em'
                }}
              >
                {data.price}
              </span>
              <span
                className="text-lg"
                style={{ color: 'var(--text-muted)' }}
              >
                / {data.period}
              </span>
            </div>

            {/* Badge */}
            <div
              className="inline-block px-3 py-1 rounded-md text-sm"
              style={{
                background: 'var(--gray-100)',
                color: 'var(--text-secondary)'
              }}
            >
              {data.badge}
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {data.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                {/* Checkmark - minimal */}
                <svg
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="none"
                  style={{ color: 'var(--accent)' }}
                >
                  <path
                    d="M4 10L8 14L16 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span
                  className="text-base"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            className="w-full px-6 py-3 rounded-lg text-base font-medium transition-all duration-200"
            style={{
              background: 'var(--text-primary)',
              color: 'white'
            }}
          >
            {data.cta}
          </button>
        </div>
      </div>
    </section>
  )
}
