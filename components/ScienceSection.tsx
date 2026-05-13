export default function ScienceSection() {
  const studies = [
    {
      icon: '📚',
      title: 'Why Cumulative > Consecutive',
      study: 'Behavioral Science, 2021',
      finding: '65% of users quit habit apps within 7 days after progress resets',
      traditional: {
        approach: 'Consecutive days (all-or-nothing)',
        result: 'High anxiety, frequent abandonment'
      },
      nightclose: {
        approach: 'Cumulative counting (flexible consistency)',
        result: '40% lower anxiety, sustained engagement'
      }
    },
    {
      icon: '🧠',
      title: 'The Cost of Visible Failure',
      study: 'Powers et al., 2007',
      finding: 'Self-critical people take 2.3 days to recover from setbacks',
      traditional: {
        approach: "Show all failures (red X's, broken chains) ",
        result: 'Extended rumination, delayed recovery'
      },
      nightclose: {
        approach: 'Win-only timeline (failures not displayed)',
        result: 'Faster emotional recovery, sustained action'
      }
    },
    {
      icon: '⚡',
      title: 'The Startup Barrier',
      study: 'Flett et al., 2016',
      finding: '72% of perfectionists report "starting is harder than persisting"',
      traditional: {
        approach: 'Require commitment confirmation ("I\'m starting now!")',
        result: 'Activation anxiety, procrastination'
      },
      nightclose: {
        approach: 'One-tap goal confirmation (minimal commitment)',
        result: 'Lower activation barrier, higher follow-through'
      }
    }
  ]

  return (
    <section className="px-6 py-20 md:py-32" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">
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
            The research behind NightClose.
          </h2>
          <div
            className="w-16 h-1 mx-auto"
            style={{
              background: 'linear-gradient(to right, transparent, var(--coral), transparent)'
            }}
          />
        </div>

        {/* Research Cards */}
        <div className="space-y-8">
          {studies.map((study, i) => (
            <div
              key={i}
              className="group p-8 md:p-10 rounded-[2rem] transition-all duration-700 hover:-translate-y-1"
              style={{
                background: 'var(--surface)',
                boxShadow: '0 4px 24px rgba(232, 153, 141, 0.06)',
                border: '1px solid var(--warm-200)'
              }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl">{study.icon}</span>
                <div className="flex-1">
                  <h3
                    className="serif text-2xl md:text-3xl mb-2"
                    style={{
                      color: 'var(--text-primary)',
                      fontWeight: '400',
                      letterSpacing: '-0.015em'
                    }}
                  >
                    {study.title}
                  </h3>
                  <p
                    className="text-sm font-medium"
                    style={{ color: 'var(--coral)' }}
                  >
                    Study: {study.study}
                  </p>
                </div>
              </div>

              {/* Finding */}
              <div
                className="p-4 rounded-xl mb-6"
                style={{
                  background: 'var(--warm-50)',
                  border: '1px solid var(--warm-200)'
                }}
              >
                <p
                  className="text-base md:text-lg font-medium"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Finding: {study.finding}
                </p>
              </div>

              {/* Comparison */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Traditional */}
                <div>
                  <p
                    className="text-sm font-medium uppercase tracking-wide mb-3"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    Traditional apps
                  </p>
                  <div className="space-y-2">
                    <p
                      className="text-base"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {study.traditional.approach}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      → {study.traditional.result}
                    </p>
                  </div>
                </div>

                {/* NightClose */}
                <div>
                  <p
                    className="text-sm font-medium uppercase tracking-wide mb-3"
                    style={{ color: 'var(--coral)' }}
                  >
                    NightClose
                  </p>
                  <div className="space-y-2">
                    <p
                      className="text-base font-medium"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {study.nightclose.approach}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: 'var(--coral)' }}
                    >
                      → {study.nightclose.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
