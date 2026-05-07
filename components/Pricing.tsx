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
    <section className="px-6 py-20 md:py-32" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Grid layout - price on left, features on right */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
          {/* Left: Headline + Price */}
          <div>
            <h2
              className="font-bold mb-12 leading-tight"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)'
              }}
            >
              {data.headline}
            </h2>

            {/* Price display */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span
                  className="text-7xl md:text-8xl font-bold"
                  style={{
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.04em'
                  }}
                >
                  {data.price}
                </span>
                <span
                  className="text-2xl"
                  style={{ color: 'var(--text-muted)' }}
                >
                  / {data.period}
                </span>
              </div>

              {/* Badge */}
              <div
                className="inline-block px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: 'var(--accent-subtle)',
                  color: 'var(--accent)'
                }}
              >
                {data.badge}
              </div>
            </div>

            {/* CTA */}
            <button
              className="group w-full md:w-auto px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
              style={{
                background: 'var(--text-primary)',
                color: 'var(--surface)'
              }}
            >
              {data.cta} →
            </button>
          </div>

          {/* Right: Features */}
          <div>
            <ul className="space-y-4">
              {data.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  {/* Custom checkmark */}
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300"
                    style={{
                      background: 'var(--accent-subtle)',
                      color: 'var(--accent)'
                    }}
                  >
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 6L5 9L10 3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <span
                    className="text-lg"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
