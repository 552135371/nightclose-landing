export default function ComparisonTable() {
  const rows = [
    {
      feature: 'Progress model',
      traditional: 'Consecutive days (resets to 0)',
      nightclose: 'Cumulative total (never resets)'
    },
    {
      feature: 'When you miss',
      traditional: 'Back to Day 1',
      nightclose: 'Your count stays'
    },
    {
      feature: 'Timeline view',
      traditional: 'Success + Failure (red X\'s)',
      nightclose: 'Success only'
    }
  ]

  return (
    <section className="px-6 py-20 md:py-32" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            className="serif mb-4"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              fontWeight: '400',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)'
            }}
          >
            The difference: side by side.
          </h2>
          <div
            className="w-16 h-1 mx-auto"
            style={{
              background: 'linear-gradient(to right, transparent, var(--coral), transparent)'
            }}
          />
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr
                style={{
                  borderBottom: '2px solid var(--warm-200)'
                }}
              >
                <th
                  className="text-left p-4 md:p-6"
                  style={{
                    color: 'var(--text-primary)',
                    fontWeight: '600',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                  }}
                >
                  Feature
                </th>
                <th
                  className="text-left p-4 md:p-6"
                  style={{
                    color: 'var(--text-muted)',
                    fontWeight: '600',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                  }}
                >
                  Streaks / Done / Habitica
                </th>
                <th
                  className="text-left p-4 md:p-6"
                  style={{
                    color: 'var(--coral)',
                    fontWeight: '600',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                  }}
                >
                  NightClose
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="transition-colors duration-200 hover:bg-opacity-50"
                  style={{
                    borderBottom: '1px solid var(--warm-200)',
                    backgroundColor: i % 2 === 0 ? 'transparent' : 'var(--warm-50)'
                  }}
                >
                  <td
                    className="p-4 md:p-6 font-medium"
                    style={{
                      color: 'var(--text-primary)',
                      fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                    }}
                  >
                    {row.feature}
                  </td>
                  <td
                    className="p-4 md:p-6"
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                    }}
                  >
                    {row.traditional}
                  </td>
                  <td
                    className="p-4 md:p-6 font-medium"
                    style={{
                      color: 'var(--text-primary)',
                      fontSize: 'clamp(0.875rem, 2vw, 1rem)'
                    }}
                  >
                    {row.nightclose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p
            className="text-base md:text-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            Same goal. Different approach. Evidence-based results.
          </p>
        </div>
      </div>
    </section>
  )
}
