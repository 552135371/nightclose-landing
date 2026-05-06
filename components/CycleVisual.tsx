export default function CycleVisual() {
  const cycles = [
    'Day 1 → Day 5 → Day 12 → Miss one day → Back to Day 1',
    'Day 1 → Day 3 → Miss one day → Back to Day 1',
    'Day 1 → Miss one day → "I\'ll start Monday" → ...'
  ]

  return (
    <section className="px-6 py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-xl font-semibold text-slate-900 mb-6 text-center">
          The Cycle You're Stuck In:
        </p>

        <div className="bg-slate-100 border-2 border-slate-300 rounded-xl p-8 space-y-3">
          {cycles.map((cycle, i) => (
            <p key={i} className="font-mono text-slate-700 text-sm md:text-base">
              {cycle}
            </p>
          ))}
        </div>

        <p className="text-center text-slate-600 italic mt-6 text-lg">
          Sound familiar?
        </p>
      </div>
    </section>
  )
}
