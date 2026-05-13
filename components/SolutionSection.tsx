interface SolutionSectionProps {
  variant: 'a' | 'b' | 'c' | 'd'
}

const content = {
  a: {
    title: 'What if your progress stayed?',
    transition: 'But what if the app remembered what you actually did?',
    features: [
      {
        icon: '📊',
        title: '20 completions is still 20—even if you miss a week.',
        content: [
          'Other apps count streaks. NightClose counts completions. Miss a day? Your total doesn\'t go backward. Take a month off? Your 47 workouts are still 47 when you come back.',
          'We don\'t erase progress because you\'re human. We store it—because that\'s what actually happened.',
          'Before: Day 18 → miss once → Day 0.',
          'With NightClose: 18 completions → miss once → still 18 completions.',
          'Your progress doesn\'t depend on perfection. It depends on what you did.'
        ],
        image: null
      },
      {
        icon: '✨',
        title: "You see wins. Not red X's.",
        content: [
          'When you open NightClose, you see a stream of the days you showed up. No failure markers. No guilt-inducing gaps.',
          'Just the proof that you did it—22 times, 104 times, however many.',
          'We make your effort visible. The rest stays quiet.'
        ],
        image: '/success-log.png'
      },
      {
        icon: '🌙',
        title: "We don't chase you. We let you rest.",
        content: [
          'End your day, and NightClose says: "Today\'s done. See you tomorrow."',
          'No push notifications at 11:47pm. No "Don\'t break your streak!" anxiety.',
          'You get a quiet exit—because consistency shouldn\'t feel like surveillance.'
        ],
        image: '/quiet-closure.png'
      }
    ]
  },
  b: {
    title: 'NightClose: Evidence-based habit formation.',
    features: [
      {
        icon: '📊',
        title: 'Every completion adds to your total—permanently',
        content: [
          'No cycles. No time limits. Just cumulative counting.',
          'Behavioral science shows: consistency > perfection.',
          '12 completions done. Miss a day? Still 12.',
          'Your progress accumulates. Your momentum stays.'
        ],
        image: null
      },
      {
        icon: '✨',
        title: 'See only your successes—no red marks',
        content: [
          'Research: Viewing failed days increases quit rate by 65% within 7 days.',
          'We show only completions. Failures don\'t enter the record.',
          'Your timeline is a success-only feed.',
          'Your brain sees progress, not failure.'
        ],
        image: '/success-log.png'
      },
      {
        icon: '🌙',
        title: "Gentle exit protocol when you can't continue",
        content: [
          'Didn\'t complete today? One-tap closure—no guilt, no questions.',
          'Psychological closure reduces next-day anxiety by 40%.',
          'Tomorrow starts clean. Your total stays.',
          'Science-backed support, not pressure.'
        ],
        image: '/quiet-closure.png'
      }
    ]
  }
}

export default function SolutionSection({ variant }: SolutionSectionProps) {
  const data = content[variant as keyof typeof content] || content.a

  return (
    <section className="px-6 pt-12 pb-20 md:pt-16 md:pb-32 relative overflow-hidden">
      {/* Decorative gradient */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-20"
        style={{
          background: `radial-gradient(ellipse at top right, var(--peach), transparent 60%)`
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
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

        {/* Features - elegant stacked cards */}
        <div className="space-y-16 lg:space-y-24 max-w-5xl mx-auto">
          {data.features.map((feature, i) => (
            <div
              key={i}
              className="group p-8 md:p-12 lg:p-16 rounded-[2.5rem] transition-all duration-700 hover:-translate-y-2 overflow-hidden"
              style={{
                background: i % 2 === 0 ? 'var(--bg)' : 'var(--surface-elevated)',
                boxShadow: '0 8px 32px rgba(232, 153, 141, 0.08)',
                border: '1px solid var(--warm-200)'
              }}
            >
              <div className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}>

                {/* Text Side */}
                <div className="flex-1 flex flex-col sm:flex-row items-start gap-8 w-full">
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: 'var(--coral-subtle)'
                    }}
                  >
                    {feature.icon}
                  </div>

                  <div className="flex-1">
                    {/* Title */}
                    <h3
                      className="serif text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8"
                      style={{
                        color: 'var(--text-primary)',
                        fontWeight: '400',
                        lineHeight: '1.15',
                        letterSpacing: '-0.02em'
                      }}
                    >
                      {feature.title}
                    </h3>

                    {/* Content */}
                    <div className="space-y-4">
                      {feature.content.map((line, j) => (
                        <p
                          key={j}
                          className="text-base md:text-lg lg:text-xl leading-relaxed"
                          style={{
                            color: 'var(--text-secondary)'
                          }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                {feature.image && (
                  <div className="w-full sm:w-[280px] md:w-[320px] flex-shrink-0 relative">
                    <div
                      className="absolute inset-0 blur-2xl opacity-20 rounded-full"
                      style={{ background: 'var(--coral)' }}
                    />

                    {/* Image Wrapper to clip black corners */}
                    <div
                      className="relative w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-[6px] md:border-[8px] transition-transform duration-700 group-hover:scale-[1.02] z-10"
                      style={{
                        borderColor: 'var(--warm-50)',
                        backgroundColor: 'var(--warm-50)'
                      }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto block"
                        style={{ transform: 'scale(1.03)' }} // scale slightly to crop out black pixels
                      />
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
