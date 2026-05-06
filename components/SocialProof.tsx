interface SocialProofProps {
  variant: 'a' | 'b' | 'c' | 'd'
}

const content = {
  a: {
    title: 'Built for people tired of being pushed.',
    research: {
      title: '📊 The science behind NightClose:',
      points: [
        '65% of users quit habit apps within 7 days after progress resets (Behavioral Science, 2021)',
        'Self-critical people take 2.3 days to recover from a single setback (Powers et al., 2007)',
        '72% of perfectionists say restarting is the hardest part (Flett et al., 2016)'
      ],
      footer: 'NightClose is designed to break these patterns—not exploit them.'
    },
    testimonials: [
      {
        quote: 'I had a 23-day streak. Broke it. Restarted at Day 1. Broke it again. Started at Day 1. Again. I was so tired of starting over. NightClose finally lets me keep going.',
        author: 'Sarah, Brooklyn'
      },
      {
        quote: 'Day 1. Day 5. Day 1. Day 8. Day 1. Day 3. Day 1. That was my life on Streaks. NightClose just says "12 completions done." No more Day 1.',
        author: 'James, London'
      },
      {
        quote: 'The relief of not seeing "Day 1" ever again? Worth every penny.',
        author: 'Maya, Melbourne'
      }
    ]
  }
}

export default function SocialProof({ variant }: SocialProofProps) {
  const data = content[variant]

  return (
    <section className="px-6 py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 text-center mb-16">
          {data.title}
        </h2>

        {/* Research Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-6">{data.research.title}</h3>
          <ul className="space-y-3 mb-6">
            {data.research.points.map((point, i) => (
              <li key={i} className="text-slate-700 flex items-start">
                <span className="mr-2">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-900 font-semibold">{data.research.footer}</p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {data.testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200">
              <p className="text-slate-700 mb-4 italic">"{testimonial.quote}"</p>
              <p className="text-sm text-slate-500">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
