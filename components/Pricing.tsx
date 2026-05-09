interface PricingProps {
  variant: 'a' | 'b' | 'c' | 'd'
}

const content = {
  a: {
    headline: 'One price. No guilt.',
    price: '$4.99',
    period: 'month',
    features: [
      'Unlimited habits tracked',
      'Progress stored forever—never resets',
      'Success-only timeline (no failure markers)',
      'Gentle daily close (no late-night pushes)',
      'iOS + Cloud sync (Android 2027)'
    ],
    badge: 'Early Bird: Get 2 months free',
    cta: 'Reserve Your Spot'
  }
}

export default function Pricing({ variant }: PricingProps) {
  const data = content[variant as keyof typeof content] || content.a

  return (
    <section
      className="px-6 py-20 md:py-32"
      style={{ background: 'var(--surface)' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2
            className="serif mb-4"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              fontWeight: '400',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)'
            }}
          >
            {data.headline}
          </h2>
          <div
            className="w-16 h-1 mx-auto"
            style={{
              background: 'linear-gradient(to right, transparent, var(--coral), transparent)'
            }}
          />
        </div>

        {/* Pricing card */}
        <div className="max-w-2xl mx-auto">
          <div
            className="p-8 md:p-12 rounded-3xl relative overflow-hidden"
            style={{
              background: 'var(--bg)',
              boxShadow: '0 8px 32px rgba(232, 153, 141, 0.12)',
              border: '1px solid var(--warm-200)'
            }}
          >
            {/* Decorative corner gradient */}
            <div
              className="absolute top-0 right-0 w-48 h-48 opacity-20"
              style={{
                background: `radial-gradient(circle at top right, var(--coral-light), transparent 70%)`
              }}
            />

            <div className="relative z-10">
              {/* Badge */}
              <div
                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-8"
                style={{
                  background: 'var(--coral-subtle)',
                  color: 'var(--coral)'
                }}
              >
                {data.badge}
              </div>

              {/* Price */}
              <div className="mb-10">
                <div className="flex items-baseline gap-3 mb-2">
                  <span
                    className="serif"
                    style={{
                      fontSize: 'clamp(3.5rem, 10vw, 5.5rem)',
                      fontWeight: '500',
                      letterSpacing: '-0.03em',
                      color: 'var(--text-primary)'
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
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {data.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {/* Checkmark */}
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                      style={{
                        background: 'var(--coral-subtle)'
                      }}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 20 20"
                        fill="none"
                        style={{ color: 'var(--coral)' }}
                      >
                        <path
                          d="M4 10L8 14L16 6"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <span
                      className="text-lg md:text-xl"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className="w-full px-6 py-4 md:px-8 md:py-5 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-xl"
                style={{
                  background: 'var(--coral)',
                  color: 'white',
                  boxShadow: '0 4px 20px rgba(232, 153, 141, 0.3)'
                }}
              >
                {data.cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
