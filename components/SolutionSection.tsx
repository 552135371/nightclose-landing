interface SolutionSectionProps {
  variant: 'a' | 'b' | 'c' | 'd'
}

const content = {
  a: {
    title: 'NightClose breaks the cycle.',
    features: [
      {
        icon: '📊',
        title: 'Progress That Accumulates',
        content: [
          'Every completion counts—forever',
          'No resets. No cycles. Just cumulative progress.',
          '12 completions done—and it never goes back to zero.',
          'Miss a day? Your progress stays.'
        ]
      },
      {
        icon: '✨',
        title: 'Win-Only Timeline',
        content: [
          'See only what went right',
          'Clean timeline showing your wins—no red marks, ever.',
          'Failed days don\'t show up. You only see your successes.',
          'Your brain needs to see progress, not failure.'
        ]
      },
      {
        icon: '🌙',
        title: 'Quiet Closure',
        content: [
          'A gentle exit when you can\'t',
          'Didn\'t do it today? That\'s okay.',
          'One tap closes the day—no guilt, no questions.',
          'Wake up tomorrow with a clean slate.'
        ]
      }
    ]
  }
}

export default function SolutionSection({ variant }: SolutionSectionProps) {
  const data = content[variant]

  return (
    <section className="px-6 py-28 md:py-40 relative overflow-hidden">
      {/* Decorative gradient */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-20"
        style={{
          background: `radial-gradient(ellipse at top right, var(--peach), transparent 60%)`
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2
            className="serif mb-4"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: '400',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)'
            }}
          >
            {data.title}
          </h2>
          <div
            className="w-16 h-1 mx-auto"
            style={{
              background: 'linear-gradient(to right, transparent, var(--coral), transparent)'
            }}
          />
        </div>

        {/* Features - elegant stacked cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {data.features.map((feature, i) => (
            <div
              key={i}
              className="group p-10 rounded-2xl transition-all duration-500"
              style={{
                background: i % 2 === 0 ? 'var(--bg)' : 'var(--surface-elevated)',
                boxShadow: '0 4px 24px rgba(232, 153, 141, 0.08)',
                border: '1px solid var(--warm-200)'
              }}
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  style={{
                    background: 'var(--coral-subtle)'
                  }}
                >
                  {feature.icon}
                </div>

                <div className="flex-1">
                  {/* Title */}
                  <h3
                    className="serif text-3xl md:text-4xl mb-5"
                    style={{
                      color: 'var(--text-primary)',
                      fontWeight: '500',
                      lineHeight: '1.2',
                      letterSpacing: '-0.015em'
                    }}
                  >
                    {feature.title}
                  </h3>

                  {/* Content */}
                  <div className="space-y-3">
                    {feature.content.map((line, j) => (
                      <p
                        key={j}
                        className="text-lg md:text-xl leading-relaxed"
                        style={{
                          color: 'var(--text-secondary)'
                        }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
