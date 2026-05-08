'use client'

export default function CycleVisual() {
  const steps = [
    {
      title: "The Streak",
      description: "You build momentum. 12 days strong. You feel like you've finally cracked it.",
      icon: "📈",
      color: "var(--coral)",
      bg: "var(--coral-subtle)",
      border: "var(--coral-light)"
    },
    {
      title: "The Slip",
      description: "Life happens. You miss one day. The chain breaks.",
      icon: "⚠️",
      color: "var(--warm-700)",
      bg: "var(--warm-100)",
      border: "var(--warm-300)"
    },
    {
      title: "The Reset",
      description: "Back to Day 1. Your 12 days of progress vanish like they never happened.",
      icon: "🔄",
      color: "var(--text-muted)",
      bg: "var(--surface-elevated)",
      border: "var(--warm-200)"
    }
  ]

  return (
    <section className="px-6 py-20 md:py-32 relative overflow-hidden" style={{ background: 'var(--surface)' }}>
      {/* Decorative background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at center, var(--peach-light), transparent 70%)'
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16 md:mb-24">
          <h2
            className="serif mb-6"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              fontWeight: '400',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)'
            }}
          >
            The Cycle You&apos;re Stuck In
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}
          >
            Each time you restart, the cycle gets shorter. Until you stop trying altogether.
          </p>
        </div>

        {/* Clear Cycle Layout */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div 
            className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2"
            style={{ background: 'var(--warm-200)', zIndex: 0 }}
          />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative p-6 md:p-8 rounded-2xl flex flex-col h-full bg-white transition-transform hover:-translate-y-1"
                style={{
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
                  border: `1px solid var(--warm-200)`
                }}
              >
                {/* Step Number */}
                <div 
                  className="absolute -top-4 -left-4 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-sm"
                  style={{ background: step.bg, color: step.color, border: `1px solid ${step.border}` }}
                >
                  0{i + 1}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-6">{step.icon}</div>

                {/* Content */}
                <h3 className="serif text-2xl md:text-3xl mb-3" style={{ color: 'var(--text-primary)' }}>
                  {step.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {step.description}
                </p>

                {/* Mobile connecting arrow */}
                {i < steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 text-2xl" style={{ color: 'var(--warm-300)' }}>
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Loop Back Hint */}
        <div className="mt-16 text-center flex flex-col items-center">
          <div className="w-px h-12 mb-4" style={{ background: 'linear-gradient(to bottom, var(--warm-200), transparent)' }} />
          <p
            className="serif text-2xl md:text-3xl mb-4"
            style={{
              color: 'var(--text-primary)',
              fontStyle: 'italic',
            }}
          >
            Sound familiar?
          </p>
          <p
            className="text-base md:text-lg max-w-xl mx-auto"
            style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7'
            }}
          >
            <span className="font-semibold" style={{ color: 'var(--coral-dark)' }}>72%</span> of perfectionists say the hardest part isn&apos;t doing the work—it&apos;s starting over after a reset.
          </p>
        </div>
      </div>
    </section>
  )
}
