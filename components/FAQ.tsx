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
    <section className="px-6 py-20 md:py-32" style={{ background: 'var(--bg)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2
          className="font-bold mb-16 leading-tight"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)'
          }}
        >
          Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-px">
          {data.items.map((item, i) => (
            <div
              key={i}
              className="group"
              style={{
                background: 'var(--surface)',
                borderBottom: `1px solid var(--border)`
              }}
            >
              {/* Question Button */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 md:px-8 py-6 md:py-8 flex justify-between items-start gap-6 hover:bg-opacity-50 transition-all duration-300"
              >
                <span
                  className="text-lg md:text-xl font-semibold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.q}
                </span>

                {/* Plus/Minus Icon */}
                <div
                  className="w-6 h-6 flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                  style={{
                    transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {openIndex === i ? (
                      <path
                        d="M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    ) : (
                      <>
                        <path
                          d="M12 5V19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5 12H19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </>
                    )}
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                className="grid-rows-animate overflow-hidden"
                style={{
                  gridTemplateRows: openIndex === i ? '1fr' : '0fr'
                }}
              >
                <div className="overflow-hidden">
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <div
                      className="serif space-y-3 text-base md:text-lg"
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
