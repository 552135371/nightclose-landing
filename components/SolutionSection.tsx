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
    <section className="px-6 py-20 md:py-32" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="max-w-3xl mb-20">
          <h2
            className="font-bold mb-6 leading-tight"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)'
            }}
          >
            {data.title}
          </h2>
        </div>

        {/* Features - Staggered layout */}
        <div className="space-y-16 md:space-y-20">
          {data.features.map((feature, i) => (
            <article
              key={i}
              className={`grid md:grid-cols-12 gap-8 md:gap-12 items-start ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Icon + Title */}
              <div className={`md:col-span-5 ${i % 2 === 1 ? 'md:col-start-8' : ''}`}>
                {/* Icon - larger, more distinctive */}
                <div className="text-6xl mb-6 leading-none">{feature.icon}</div>

                <h3
                  className="text-2xl md:text-3xl font-semibold"
                  style={{
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {feature.title}
                </h3>
              </div>

              {/* Content */}
              <div className={`md:col-span-7 ${i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <div className="serif space-y-3 text-lg" style={{ color: 'var(--text-secondary)' }}>
                  {feature.content.map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Decorative accent */}
        <div className="mt-20 flex justify-end">
          <div
            className="w-32 h-px"
            style={{ background: 'var(--accent)' }}
          />
        </div>
      </div>
    </section>
  )
}
