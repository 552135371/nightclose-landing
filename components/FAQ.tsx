'use client'

import { useState } from 'react'

interface FAQProps {
  variant: 'a' | 'b' | 'c' | 'd'
}

const content = {
  a: {
    items: [
      {
        q: 'What if I miss multiple days in a row?',
        a: [
          'Your total stays exactly where it is. Always.',
          '',
          '20 completions done → miss one day → still 20',
          'Miss three days → still 20',
          'Miss two weeks → still 20',
          '',
          'When you\'re ready to continue, your progress is right there. Not gone. Not reset. Just waiting.',
          '',
          'You never lose what you\'ve already done.'
        ]
      },
      {
        q: "Doesn't that mean there's no accountability?",
        a: [
          'Every completion still counts. We\'re not letting you off the hook—we\'re not erasing your progress.',
          '',
          'The difference: we don\'t punish you by deleting 20 days of effort because you missed once.',
          '',
          'Traditional apps reset your count to create anxiety ("Don\'t lose your streak!"). We count every win—because research shows that seeing accumulated progress motivates you more than fear of loss.',
          '',
          'You\'re accountable for every completion. But you\'re not penalized for being human.'
        ]
      },
      {
        q: 'Why only show wins?',
        a: [
          'Because seeing what you didn\'t do makes you quit.',
          '',
          'Research: 65% of users quit within 7 days after seeing their progress reset.',
          '',
          'Staring at red X\'s, broken chains, and "0 days" doesn\'t motivate you. It demoralizes you.',
          '',
          'Your brain needs to see progress, not failure. We show you: 20 completions. 35 completions. 52 completions. Not: 18 failures, 7 missed days, 0-day streak.',
          '',
          'You already know when you didn\'t do it. You don\'t need the app rubbing it in.',
          '',
          '(Source: Behavioral Science, 2021)'
        ]
      },
      {
        q: 'Is this a therapy app?',
        a: [
          'No. We\'re a habit tracker that doesn\'t punish you for missing a day.',
          '',
          'If you\'re struggling with mental health, please see a licensed professional. We\'re a tool—not a treatment.'
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
