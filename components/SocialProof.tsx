interface SocialProofProps {
  variant: 'a' | 'b' | 'c' | 'd'
}

const content = {
  a: {
    title: 'Built for people tired of being pushed.',
    research: {
      title: 'The science behind NightClose',
      points: [
        {
          stat: '65%',
          text: 'of users quit habit apps within 7 days after progress resets',
          source: 'Behavioral Science, 2021'
        },
        {
          stat: '2.3 days',
          text: 'Self-critical people take to recover from a single setback',
          source: 'Powers et al., 2007'
        },
        {
          stat: '72%',
          text: 'of perfectionists say restarting is the hardest part',
          source: 'Flett et al., 2016'
        }
      ],
      footer: 'NightClose is designed to break these patterns—not exploit them.'
    },
    testimonials: [
      {
        quote: 'I had a 23-day streak. Broke it. Restarted at Day 1. Broke it again. Started at Day 1. Again. I was so tired of starting over. NightClose finally lets me keep going.',
        author: 'Sarah',
        location: 'Brooklyn'
      },
      {
        quote: 'Day 1. Day 5. Day 1. Day 8. Day 1. Day 3. Day 1. That was my life on Streaks. NightClose just says "12 completions done." No more Day 1.',
        author: 'James',
        location: 'London'
      },
      {
        quote: 'The relief of not seeing "Day 1" ever again? Worth every penny.',
        author: 'Maya',
        location: 'Melbourne'
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
                "{testimonial.quote}"
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
