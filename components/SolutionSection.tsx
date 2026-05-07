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
        ],
        image: null
      },
      {
        icon: '✨',
        title: 'Win-Only Timeline',
        content: [
          'See only what went right',
          'Clean timeline showing your wins—no red marks, ever.',
          'Failed days don\'t show up. You only see your successes.',
          'Your brain needs to see progress, not failure.'
        ],
        image: '/success-log.png'
      },
      {
        icon: '🌙',
        title: 'Quiet Closure',
        content: [
          'A gentle exit when you can\'t',
          'Didn\'t do it today? That\'s okay.',
          'One tap closes the day—no guilt, no questions.',
          'Wake up tomorrow with a clean slate.'
        ],
        image: '/quiet-closure.png'
      }
    ]
  }
}

export default function SolutionSection({ variant }: SolutionSectionProps) {
  const data = content[variant]

  return (
    <section className="px-6 py-20 md:py-32 relative overflow-hidden">
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
        <div className="space-y-12 max-w-5xl mx-auto">
          {data.features.map((feature, i) => (
            <div
              key={i}
              className="group p-6 md:p-10 rounded-3xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              style={{
                background: i % 2 === 0 ? 'var(--bg)' : 'var(--surface-elevated)',
                boxShadow: '0 8px 32px rgba(232, 153, 141, 0.08)',
                border: '1px solid var(--warm-200)'
              }}
            >
              <div className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}>
                
                {/* Text Side */}
                <div className="flex-1 flex flex-col sm:flex-row items-start gap-6 w-full">
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm"
                    style={{
                      background: 'var(--coral-subtle)'
                    }}
                  >
                    {feature.icon}
                  </div>

                  <div className="flex-1">
                    {/* Title */}
                    <h3
                      className="serif text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6"
                      style={{
                        color: 'var(--text-primary)',
                        fontWeight: '500',
                        lineHeight: '1.2',
                        letterSpacing: '-0.015em'
                      }}
                    >
                      {feature.title}
                    </h3>

                    {/* Content */}
                    <div className="space-y-3">
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
