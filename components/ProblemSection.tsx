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
    <section className="px-6 py-20 md:py-32" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title - Editorial style */}
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
          <div
            className="w-16 h-px"
            style={{ background: 'var(--accent)' }}
          />
        </div>

        {/* Problems - Magazine-style layout */}
        <div className="space-y-20 md:space-y-32">
          {data.problems.map((problem, i) => (
            <article key={i} className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
              {/* Number + Title */}
              <div className="md:col-span-5">
                <span
                  className="text-6xl md:text-7xl font-bold block mb-4"
                  style={{
                    color: 'var(--accent-subtle)',
                    letterSpacing: '-0.04em'
                  }}
                >
                  {problem.number}
                </span>
                <h3
                  className="text-2xl md:text-3xl font-semibold mb-6"
                  style={{
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {problem.title}
                </h3>

                {/* Stat callout if exists */}
                {problem.stat && (
                  <div className="mt-8 pt-6" style={{ borderTop: `1px solid var(--border)` }}>
                    <div
                      className="text-4xl font-bold mb-1"
                      style={{ color: 'var(--accent)' }}
                    >
                      {problem.stat.value}
                    </div>
                    <div
                      className="serif-italic text-sm"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {problem.stat.label}
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="md:col-span-7">
                <div className="serif space-y-4 text-lg" style={{ color: 'var(--text-secondary)' }}>
                  {problem.content.map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
