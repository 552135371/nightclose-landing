interface FinalCTAProps {
  variant: 'a' | 'b' | 'c' | 'd'
}

const content = {
  a: {
    headline: 'No more Day 1.',
    subheadline: 'Join 500+ people who never have to start over again.',
    caption: 'Early access opens June 2026',
    cta: 'Join the Waitlist',
    trustBadge: '🔒 We\'ll never spam you. Unsubscribe anytime.'
  }
}

export default function FinalCTA({ variant }: FinalCTAProps) {
  const data = content[variant]

  return (
    <section className="px-6 py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-3xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          {data.headline}
        </h2>

        {/* Subheadline */}
        <p className="text-xl text-slate-300 mb-2">
          {data.subheadline}
        </p>
        <p className="text-slate-400 mb-10">
          {data.caption}
        </p>

        {/* Email Form */}
        <div className="max-w-md mx-auto mb-4">
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors">
              {data.cta} →
            </button>
          </div>
        </div>

        {/* Trust Badge */}
        <p className="text-sm text-slate-400">
          {data.trustBadge}
        </p>
      </div>
    </section>
  )
}
