export default function CycleVisual() {
  const cycles = [
    { steps: ['Day 1', 'Day 5', 'Day 12', 'Miss one day', 'Back to Day 1'] },
    { steps: ['Day 1', 'Day 3', 'Miss one day', 'Back to Day 1'] },
    { steps: ['Day 1', 'Miss one day', '"I\'ll start Monday"', '...'] }
  ]

  return (
    <section className="px-6 py-24 md:py-32" style={{ background: 'var(--surface)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Title - minimal */}
        <p
          className="text-lg mb-12"
          style={{
            color: 'var(--text-primary)',
            fontWeight: '500'
          }}
        >
          The Cycle You're Stuck In:
        </p>

        {/* Cycles - Simple vertical flow */}
        <div className="space-y-8">
          {cycles.map((cycle, i) => (
            <div key={i}>
              {/* Cycle flow */}
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                {cycle.steps.map((step, j) => (
                  <div key={j} className="flex items-center">
                    {/* Step - minimal pills */}
                    <div
                      className="px-4 py-2 rounded-lg text-sm font-medium"
                      style={{
                        background: step === 'Back to Day 1'
                          ? 'var(--gray-200)'
                          : 'var(--bg)',
                        color: 'var(--text-secondary)',
                        border: `1px solid var(--border)`
                      }}
                    >
                      {step}
                    </div>

                    {/* Arrow - simple */}
                    {j < cycle.steps.length - 1 && (
                      <span className="mx-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Connecting line */}
              {i < cycles.length - 1 && (
                <div className="w-px h-6 ml-6 my-3" style={{ background: 'var(--border)' }} />
              )}
            </div>
          ))}
        </div>

        {/* Question */}
        <p
          className="text-lg mt-12"
          style={{
            color: 'var(--text-secondary)',
            fontStyle: 'italic'
          }}
        >
          Sound familiar?
        </p>
      </div>
    </section>
  )
}
