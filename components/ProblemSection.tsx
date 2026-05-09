interface ProblemSectionProps {
  variant: 'a' | 'b' | 'c' | 'd'
}

const content = {
  a: {
    title: 'Why your progress keeps disappearing.',
    problems: [
      {
        number: '01',
        title: 'The moment it breaks',
        content: [
          'You\'re on day 21. Life happens—a deadline, a sick kid, a night you just forgot.',
          'You open the app the next morning. Day 0.',
          'All those green checkmarks, gone. Not paused. Not saved. Erased.'
        ]
      },
      {
        number: '02',
        title: 'The spiral that follows',
        content: [
          'First, you feel shame. Then you think: "I ruined it again."',
          'The app doesn\'t show your 20 wins anymore—just the one miss.',
          'So you stop opening it. Not because you gave up on the habit.',
          'Because seeing zero feels worse than not trying at all.'
        ]
      },
      {
        number: '03',
        title: 'It\'s not your fault. It\'s the system.',
        content: [
          '72% of habit app users quit within 3 weeks—not because they lack discipline, but because the app punishes imperfection.',
          'One miss = total reset. Your brain sees "Day 0" and learns: "Why bother?"',
          'The apps you trusted treated progress like a house of cards.'
        ],
        stat: { value: '72%', label: 'quit within 3 weeks' }
      }
    ]
  }
}

export default function ProblemSection({ variant }: ProblemSectionProps) {
  const data = content[variant as keyof typeof content] || content.a

  return (
    <section className="px-6 py-20 md:py-32" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title - elegant serif */}
        <div className="text-center mb-20">
          <h2
            className="serif mb-4"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
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
              className="group p-6 md:p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1"
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
