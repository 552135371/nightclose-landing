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
    <section className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 text-center mb-16">
          {data.title}
        </h2>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.features.map((feature, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <div className="space-y-2 text-slate-600">
                {feature.content.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
