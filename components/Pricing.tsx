interface PricingProps {
  variant: 'a' | 'b' | 'c' | 'd'
}

const content = {
  a: {
    headline: 'Simple, honest pricing.',
    price: '$4.99 / month',
    features: [
      'One habit to start',
      'Progress that never resets',
      'Win-only timeline',
      'Clean, simple interface',
      'No ads, no tricks'
    ],
    badge: 'Early Bird: Get 2 months free',
    cta: 'Reserve Your Spot'
  }
}

export default function Pricing({ variant }: PricingProps) {
  const data = content[variant]

  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-16">
          {data.headline}
        </h2>

        {/* Price Card */}
        <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-10 max-w-md mx-auto">
          <p className="text-4xl font-bold text-slate-900 mb-6">{data.price}</p>

          <ul className="space-y-3 mb-8 text-left">
            {data.features.map((feature, i) => (
              <li key={i} className="flex items-center text-slate-700">
                <span className="text-green-600 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
            <p className="text-blue-900 font-semibold">{data.badge}</p>
          </div>

          <button className="w-full bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transition-colors shadow-lg">
            {data.cta} →
          </button>
        </div>
      </div>
    </section>
  )
}
