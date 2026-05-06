'use client'

import { useState } from 'react'

interface FAQProps {
  variant: 'a' | 'b' | 'c' | 'd'
}

const content = {
  a: {
    items: [
      {
        q: 'Why do I always have to start from Day 1?',
        a: [
          'You don\'t—at least not with NightClose.',
          '',
          'Traditional apps count consecutive days. Miss one day → reset to zero → back to Day 1. That\'s why 72% of perfectionists say restarting is the hardest part.',
          '',
          'NightClose counts cumulative completions. Miss one day → your total stays → you never restart. You had 15 completions? You still have 15. No "Day 1 again."',
          '',
          '(Source: Flett et al., 2016)'
        ]
      },
      {
        q: 'What if I miss multiple days in a row?',
        a: [
          'Your total completions stay exactly where they are. We don\'t reset, we don\'t judge. When you\'re ready to continue, your progress is right there waiting for you.'
        ]
      },
      {
        q: 'Why show only wins?',
        a: [
          'Research shows that 65% of users quit habit apps within 7 days after seeing their failed days. Staring at red X\'s makes you quit—your brain needs to see progress, not failure. We show only your wins. It\'s that simple.',
          '',
          '(Source: Behavioral Science, 2021)'
        ]
      },
      {
        q: 'Is this a therapy app?',
        a: [
          'No. We\'re a habit tracker for people who need support, not clinical help. If you\'re struggling with mental health, please see a professional. We\'re a tool, not a treatment.'
        ]
      }
    ]
  }
}

export default function FAQ({ variant }: FAQProps) {
  const data = content[variant]
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="px-6 py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
          FAQ
        </h2>

        <div className="space-y-4">
          {data.items.map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-4 font-semibold text-slate-900 hover:bg-slate-50 transition-colors flex justify-between items-center"
              >
                <span>{item.q}</span>
                <span className="text-2xl">{openIndex === i ? '−' : '+'}</span>
              </button>

              {openIndex === i && (
                <div className="px-6 pb-4 text-slate-600 space-y-2">
                  {item.a.map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
