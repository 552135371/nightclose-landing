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
    <section className="px-6 py-24 md:py-32" style={{ background: 'var(--bg)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Title - minimal */}
        <h2
          className="mb-12"
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: '500',
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)'
          }}
        >
          Questions
        </h2>

        {/* FAQ Items - clean design */}
        <div className="space-y-4">
          {data.items.map((item, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)'
              }}
            >
              {/* Question Button */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex justify-between items-start gap-4 transition-all duration-200"
              >
                <span
                  className="text-base"
                  style={{
                    color: 'var(--text-primary)',
                    fontWeight: '500'
                  }}
                >
                  {item.q}
                </span>

                {/* Plus/Minus Icon - simple */}
                <span
                  className="text-xl flex-shrink-0 transition-transform duration-200"
                  style={{
                    color: 'var(--text-muted)',
                    transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)'
                  }}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              <div
                className="grid-rows-animate overflow-hidden"
                style={{
                  gridTemplateRows: openIndex === i ? '1fr' : '0fr'
                }}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5">
                    <div
                      className="space-y-2 text-base"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.a.map((line, j) => (
                        line === '' ? <br key={j} /> : <p key={j}>{line}</p>
                      ))}
                    </div>
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
