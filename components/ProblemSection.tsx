interface ProblemSectionProps {
  variant: 'a' | 'b' | 'c' | 'd'
}

const content = {
  a: {
    title: 'Why you keep starting from zero.',
    problems: [
      {
        number: '01',
        title: 'Day 1. Again. And Again.',
        content: [
          'You had a 15-day streak. Then you missed one day.',
          'Now it\'s back to "Day 1."',
          'All that progress—gone. Like it never happened.',
          'Why do you have to prove yourself again?'
        ]
      },
      {
        number: '02',
        title: 'The Endless Restart Cycle',
        content: [
          'Break a streak → Feel defeated → Delay restarting → Feel worse',
          '72% of perfectionists say restarting is the hardest part.',
          'You\'re not afraid of doing the work.',
          'You\'re exhausted from always starting over.'
        ],
        stat: { value: '72%', label: 'say restarting is the hardest part' }
      },
      {
        number: '03',
        title: 'When Apps Make You Quit',
        content: [
          '65% of users quit within a week after their streak resets.',
          'It\'s not lack of discipline. It\'s not laziness.',
          'It\'s the crushing feeling of "Why bother? I\'ll just lose it again."',
          'One bad day shouldn\'t erase all the good ones.'
        ],
        stat: { value: '65%', label: 'quit within a week after reset' }
      }
    ]
  }
}

export default function ProblemSection({ variant }: ProblemSectionProps) {
  const data = content[variant]

  return (
    <section className="px-6 py-24 md:py-32" style={{ background: 'var(--surface)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Section Title - minimal */}
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

        {/* Problems - clean cards */}
        <div className="space-y-6">
          {data.problems.map((problem, i) => (
            <div
              key={i}
              className="p-8 rounded-xl"
              style={{
                background: 'var(--bg)',
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
                {problem.title}
              </h3>

              {/* Content */}
              <div className="space-y-3 mb-6">
                {problem.content.map((line, j) => (
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

              {/* Stat - minimal */}
              {problem.stat && (
                <div className="pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                  <div
                    className="text-2xl mb-1"
                    style={{
                      color: 'var(--text-primary)',
                      fontWeight: '500'
                    }}
                  >
                    {problem.stat.value}
                  </div>
                  <p
                    className="text-sm"
                    style={{
                      color: 'var(--text-muted)'
                    }}
                  >
                    {problem.stat.label}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
