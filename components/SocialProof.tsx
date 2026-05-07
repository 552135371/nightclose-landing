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
  const data = content[variant]

  return (
    <section className="px-6 py-20 md:py-32" style={{ background: 'var(--bg)' }}>
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

        {/* Research - Grid layout */}
        <div className="mb-24">
          <h3
            className="text-xl md:text-2xl font-semibold mb-12"
            style={{ color: 'var(--text-primary)' }}
          >
            {data.research.title}
          </h3>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {data.research.points.map((point, i) => (
              <div key={i}>
                {/* Stat */}
                <div
                  className="text-5xl md:text-6xl font-bold mb-4"
                  style={{
                    color: 'var(--accent)',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {point.stat}
                </div>

                {/* Description */}
                <p
                  className="serif text-lg mb-3"
                  style={{ color: 'var(--text-secondary)' }}
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
            className="text-lg font-medium max-w-2xl"
            style={{ color: 'var(--text-primary)' }}
          >
            {data.research.footer}
          </p>
        </div>

        {/* Testimonials - Masonry-style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.testimonials.map((testimonial, i) => (
            <blockquote
              key={i}
              className="relative"
              style={{
                paddingTop: i % 3 === 1 ? '3rem' : '0'
              }}
            >
              {/* Quote */}
              <p
                className="serif-italic text-lg mb-6 leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                "{testimonial.quote}"
              </p>

              {/* Attribution */}
              <footer>
                <div
                  className="font-medium"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {testimonial.author}
                </div>
                <div
                  className="text-sm"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {testimonial.location}
                </div>
              </footer>

              {/* Decorative quote mark */}
              <div
                className="absolute -top-2 -left-2 text-6xl opacity-10 select-none"
                style={{ color: 'var(--accent)' }}
              >
                "
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
