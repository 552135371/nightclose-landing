interface HeroProps {
  variant: 'a' | 'b' | 'c' | 'd'
}

const content = {
  a: {
    headline: 'Stop starting from Day 1.',
    subheadline: [
      'Why do apps reset your progress when you miss a day?',
      'NightClose keeps every win—permanently.',
      'No resets. No "Day 1 again." Just your progress, staying where it belongs.',
      'Built for people who are hardest on themselves.'
    ],
    cta: 'Join the Waitlist',
    caption: 'Early access · $4.99/mo · iOS launching Summer 2026'
  }
}

export default function Hero({ variant }: HeroProps) {
  const data = content[variant]

  return (
    <section className="relative px-6 py-20 md:py-32 max-w-5xl mx-auto text-center">
      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
        {data.headline}
      </h1>

      {/* Subheadline */}
      <div className="text-lg md:text-xl text-slate-600 space-y-2 mb-10 max-w-3xl mx-auto">
        {data.subheadline.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      {/* CTA Button */}
      <button className="bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl mb-4">
        {data.cta} →
      </button>

      {/* Caption */}
      <p className="text-sm text-slate-500">
        {data.caption}
      </p>
    </section>
  )
}
