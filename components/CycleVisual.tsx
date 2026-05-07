export default function CycleVisual() {
  const cycles = [
    { steps: ['Day 1', 'Day 5', 'Day 12', 'Miss one day', 'Back to Day 1'] },
    { steps: ['Day 1', 'Day 3', 'Miss one day', 'Back to Day 1'] },
    { steps: ['Day 1', 'Miss one day', '"I\'ll start Monday"', '...'] }
  ]

  return (
    <section className="px-6 py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, var(--surface), var(--stone-100))`
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <p
          className="text-xl md:text-2xl font-semibold mb-12 max-w-2xl"
          style={{ color: 'var(--text-primary)' }}
        >
          The Cycle You're Stuck In:
        </p>

        {/* Cycles - Vertical flow with arrows */}
        <div className="space-y-12">
          {cycles.map((cycle, i) => (
            <div key={i} className="relative">
              {/* Cycle flow */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                {cycle.steps.map((step, j) => (
                  <div key={j} className="flex items-center">
                    {/* Step */}
                    <div
                      className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                        step === 'Back to Day 1' || step === '...'
                          ? 'font-semibold'
                          : ''
                      }`}
                      style={{
                        background: step === 'Back to Day 1'
                          ? 'var(--accent-subtle)'
                          : step === 'Miss one day' || step === '"I\'ll start Monday"'
                          ? 'var(--stone-200)'
                          : 'var(--surface)',
                        color: step === 'Back to Day 1'
                          ? 'var(--accent)'
                          : 'var(--text-secondary)',
                        border: `1px solid ${step === 'Back to Day 1' ? 'var(--accent)' : 'var(--border)'}`
                      }}
                    >
                      {step}
                    </div>

                    {/* Arrow */}
                    {j < cycle.steps.length - 1 && (
                      <svg
                        className="w-4 h-4 mx-2 flex-shrink-0"
                        viewBox="0 0 16 16"
                        fill="none"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        <path
                          d="M6 4L10 8L6 12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>

              {/* Connecting line to next cycle */}
              {i < cycles.length - 1 && (
                <div
                  className="w-px h-8 ml-8 my-4"
                  style={{ background: 'var(--border)' }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Question */}
        <p
          className="serif-italic text-xl md:text-2xl mt-16 max-w-xl"
          style={{ color: 'var(--text-secondary)' }}
        >
          Sound familiar?
        </p>
      </div>
    </section>
  )
}
