interface SocialProofProps {
  variant: 'a' | 'b' | 'c' | 'd'
}

const content = {
  a: {
    title: 'From people who've lost streaks before.',
    testimonials: [
      {
        quote: 'I had 67 days on Streaks. Missed one. Couldn\'t open the app for a month. NightClose is the first one that doesn\'t make me feel like I failed.',
        author: 'Sarah K.',
        location: 'beta tester'
      },
      {
        quote: 'Finally an app that gets it. I don\'t need another thing yelling at me. I need something that remembers I\'m trying.',
        author: 'M.L.',
        location: 'r/getdisciplined'
      },
      {
        quote: 'The "only show success" thing sounds small but it changed everything. I actually want to open it now.',
        author: 'Alex T.',
        location: 'early access'
      }
    ]
  }
}

export default function SocialProof({ variant }: SocialProofProps) {
  const data = content[variant as keyof typeof content] || content.a

  return (
    <section className="px-6 py-16 md:py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Title - minimal */}
        <h2
          className="mb-12 md:mb-16"
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: '500',
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)'
          }}
        >
          {data.title}
        </h2>

        {/* Research - Simple cards */}
        <div className="mb-20">
          <h3
            className="text-lg mb-8"
            style={{
              color: 'var(--text-primary)',
              fontWeight: '500'
            }}
          >
            {data.research.title}
          </h3>

          <div className="space-y-6 mb-8">
            {data.research.points.map((point, i) => (
              <div
                key={i}
                className="p-6 rounded-lg"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)'
                }}
              >
                {/* Stat - minimal */}
                <div
                  className="text-2xl md:text-3xl mb-2"
                  style={{
                    color: 'var(--text-primary)',
                    fontWeight: '500'
                  }}
                >
                  {point.stat}
                </div>

                {/* Description */}
                <p
                  className="text-base mb-2"
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6'
                  }}
                >
                  {point.text}
                </p>

                {/* Source */}
                <p
                  className="text-xs"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {point.source}
                </p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <p
            className="text-base"
            style={{
              color: 'var(--text-primary)',
              fontWeight: '500'
            }}
          >
            {data.research.footer}
          </p>
        </div>

        {/* Testimonials - Simple stacked */}
        <div className="space-y-6">
          {data.testimonials.map((testimonial, i) => (
            <blockquote
              key={i}
              className="p-6 rounded-lg"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)'
              }}
            >
              {/* Quote */}
              <p
                className="text-base mb-4"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  fontStyle: 'italic'
                }}
              >
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Attribution */}
              <footer className="flex items-baseline gap-2">
                <div
                  className="text-sm"
                  style={{
                    color: 'var(--text-primary)',
                    fontWeight: '500'
                  }}
                >
                  {testimonial.author}
                </div>
                <div
                  className="text-sm"
                  style={{ color: 'var(--text-muted)' }}
                >
                  · {testimonial.location}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
