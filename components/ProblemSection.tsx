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
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {data.problems.map((problem, i) => (
            <div
              key={i}
              className="group relative p-8 md:p-10 lg:p-12 rounded-[2.5rem] transition-all duration-700 hover:-translate-y-2 overflow-hidden flex flex-col"
              style={{
                background: 'var(--bg)',
                boxShadow: '0 8px 32px rgba(232, 153, 141, 0.08)',
                border: '1px solid var(--warm-200)'
              }}
            >
              {/* Huge subtle number watermark */}
              <div 
                className="absolute -top-8 -right-4 text-[10rem] md:text-[12rem] serif opacity-[0.03] pointer-events-none transition-transform duration-700 group-hover:scale-105"
                style={{ 
                  color: 'var(--text-primary)', 
                  lineHeight: 1,
                  letterSpacing: '-0.05em'
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Pre-title */}
              <div
                className="text-sm font-medium tracking-widest uppercase mb-6 relative z-10"
                style={{ color: 'var(--coral)' }}
              >
                Phase {String(i + 1).padStart(2, '0')}
              </div>

              {/* Title */}
              <h3
                className="serif text-2xl md:text-3xl lg:text-4xl mb-6 relative z-10"
                style={{
                  color: 'var(--text-primary)',
                  fontWeight: '400',
                  lineHeight: '1.2',
                  letterSpacing: '-0.015em'
                }}
              >
                {problem.title}
              </h3>

              {/* Content */}
              <div className="space-y-4 mb-8 flex-1 relative z-10">
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
                  className="pt-6 mt-auto relative z-10"
                  style={{
                    borderTop: '1px solid var(--warm-200)'
                  }}
                >
                  <div
                    className="serif text-4xl lg:text-5xl mb-2 transition-transform duration-500 origin-left group-hover:scale-105"
                    style={{
                      color: 'var(--coral)',
                      fontWeight: '400',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {problem.stat.value}
                  </div>
                  <p
                    className="text-sm md:text-base font-medium"
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
