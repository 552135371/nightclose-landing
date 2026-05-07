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
    <section className="px-6 py-28 md:py-40" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title - elegant serif */}
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

        {/* Problem Items - elevated cards with shadows */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.problems.map((problem, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                background: 'var(--bg)',
                boxShadow: '0 4px 24px rgba(232, 153, 141, 0.08)',
                border: '1px solid var(--warm-200)'
              }}
            >
              {/* Number badge */}
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-6"
                style={{
                  background: 'var(--coral-subtle)',
                  color: 'var(--coral)',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Title */}
              <h3
                className="serif text-2xl md:text-3xl mb-5"
                style={{
                  color: 'var(--text-primary)',
                  fontWeight: '500',
                  lineHeight: '1.25',
                  letterSpacing: '-0.01em'
                }}
              >
                {problem.title}
              </h3>

              {/* Content */}
              <div className="space-y-3 mb-6">
                {problem.content.map((line, j) => (
                  <p
                    key={j}
                    className="text-base md:text-lg leading-relaxed"
                    style={{
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* Stat - highlighted */}
              {problem.stat && (
                <div
                  className="pt-5 mt-5"
                  style={{
                    borderTop: '1px solid var(--warm-200)'
                  }}
                >
                  <div
                    className="serif text-3xl mb-1"
                    style={{
                      color: 'var(--coral)',
                      fontWeight: '400'
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
