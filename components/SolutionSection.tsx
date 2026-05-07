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
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        {/* Title - minimal */}
        <h2
          className="mb-16"
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: '500',
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)'
          }}
        >
          {data.title}
        </h2>

        {/* Features - clean cards */}
        <div className="space-y-6">
          {data.features.map((feature, i) => (
            <div
              key={i}
              className="p-8 rounded-xl"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)'
              }}
            >
              {/* Title */}
              <h3
                className="text-xl mb-4"
                style={{
                  color: 'var(--text-primary)',
                  fontWeight: '500',
                  lineHeight: '1.3'
                }}
              >
                {feature.title}
              </h3>

              {/* Content */}
              <div className="space-y-2">
                {feature.content.map((line, j) => (
                  <p
                    key={j}
                    className="text-base"
                    style={{
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6'
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
