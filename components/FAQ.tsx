'use client'

import { useState } from 'react'

interface FAQProps {
  variant: 'a' | 'b' | 'c' | 'd'
}

const content = {
  a: {
    items: [
      {
        q: 'Is this just another habit tracker that doesn't push me?',
        a: [
          'No. The core difference is progress storage. Most apps—even gentle ones—still count streaks, which means missing a day resets your number to zero.',
          '',
          'NightClose counts completions, so your progress never goes backward. It\'s not about removing notifications. It\'s about changing what gets erased.'
        ]
      },
      {
        q: 'What if I miss a week? Does it punish me?',
        a: [
          'No. If you logged 30 completions, then took a 10-day break, you still have 30 completions when you return.',
          '',
          'We don\'t subtract. We don\'t nag. Your progress waits for you.'
        ]
      },
      {
        q: 'Can I see my "streak" if I want to?',
        a: [
          'Yes. You can toggle a "current run" view (how many consecutive days).',
          '',
          'But it\'s secondary. The main number you see is total completions—because that\'s what actually measures your effort over time.'
        ]
      },
      {
        q: 'Why isn't this free?',
        a: [
          'Because we don\'t sell your data, and we don\'t use dark patterns to keep you hooked.',
          '',
          '$4.99/month covers development and lets us build a tool that respects your autonomy—not a dopamine slot machine.'
        ]
      }
    ]
  }
}

export default function FAQ({ variant }: FAQProps) {
  const data = content[variant as keyof typeof content] || content.a
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="px-6 py-16 md:py-24" style={{ background: 'var(--bg)' }}>
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
