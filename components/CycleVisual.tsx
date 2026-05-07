'use client'

import { useEffect, useState } from 'react'

export default function CycleVisual() {
  const [activeRing, setActiveRing] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRing((prev) => (prev + 1) % 3)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const cycles = [
    {
      days: 12,
      attempts: ['Day 1', 'Day 5', 'Day 12'],
      progress: 12,
      color: 'var(--coral)',
      size: 280
    },
    {
      days: 3,
      attempts: ['Day 1', 'Day 3'],
      progress: 3,
      color: 'var(--warm-600)',
      size: 220
    },
    {
      days: 0,
      attempts: ['Day 1'],
      progress: 0,
      color: 'var(--warm-400)',
      size: 160
    }
  ]

  return (
    <section className="px-6 py-32 md:py-48 relative overflow-hidden" style={{ background: 'var(--surface)' }}>
      {/* Decorative background gradient */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at center, var(--peach-light), transparent 60%)'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2
            className="serif mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: '400',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)'
            }}
          >
            The Cycle You're Stuck In
          </h2>
          <p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}
          >
            Each time you restart, the cycle gets shorter. Until you stop trying altogether.
          </p>
        </div>

        {/* Spiral Visualization */}
        <div className="relative flex items-center justify-center min-h-[600px] mb-16">
          {/* Downward spiral rings */}
          <div className="relative" style={{ width: '320px', height: '600px' }}>
            {cycles.map((cycle, i) => (
              <div
                key={i}
                className="absolute left-1/2 transition-all duration-1000"
                style={{
                  top: `${i * 180}px`,
                  transform: 'translateX(-50%)',
                  opacity: activeRing === i ? 1 : 0.4,
                  filter: activeRing === i ? 'none' : 'grayscale(0.3)'
                }}
              >
                {/* Ring container */}
                <div className="relative" style={{ width: `${cycle.size}px`, height: `${cycle.size}px` }}>
                  {/* Circular progress ring */}
                  <svg
                    className="transform -rotate-90"
                    style={{ width: '100%', height: '100%' }}
                    viewBox="0 0 100 100"
                  >
                    {/* Background ring */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="var(--warm-200)"
                      strokeWidth="2"
                    />

                    {/* Progress arc (incomplete) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke={cycle.color}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray={`${(cycle.progress / 15) * 283} 283`}
                      className="transition-all duration-1000"
                    />

                    {/* Break mark - where it stopped */}
                    {cycle.progress > 0 && (
                      <g transform={`rotate(${(cycle.progress / 15) * 360} 50 50)`}>
                        <circle cx="50" cy="5" r="3" fill={cycle.color} />
                        <text
                          x="50"
                          y="5"
                          textAnchor="middle"
                          transform="rotate(90 50 5)"
                          style={{
                            fontSize: '6px',
                            fill: cycle.color,
                            fontWeight: '600'
                          }}
                        >
                          ✕
                        </text>
                      </g>
                    )}
                  </svg>

                  {/* Center content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div
                      className="serif mb-2"
                      style={{
                        fontSize: `${cycle.size / 6}px`,
                        fontWeight: '500',
                        color: cycle.color,
                        letterSpacing: '-0.02em'
                      }}
                    >
                      {cycle.days > 0 ? `${cycle.days} days` : 'Gave up'}
                    </div>
                    <div
                      className="text-sm font-medium"
                      style={{
                        color: 'var(--text-muted)'
                      }}
                    >
                      {cycle.days > 0 ? 'then reset' : 'stopped trying'}
                    </div>
                  </div>

                  {/* Attempt labels */}
                  <div className="absolute -right-16 top-1/2 -translate-y-1/2">
                    <div className="space-y-1">
                      {cycle.attempts.map((day, j) => (
                        <div
                          key={j}
                          className="text-xs px-2 py-1 rounded"
                          style={{
                            background: 'var(--warm-100)',
                            color: 'var(--text-secondary)',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow to next cycle */}
                {i < cycles.length - 1 && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2"
                    style={{
                      bottom: `-${60}px`,
                      color: 'var(--warm-500)'
                    }}
                  >
                    <svg width="24" height="40" viewBox="0 0 24 40">
                      <path
                        d="M12 0 L12 32 M12 32 L6 26 M12 32 L18 26"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                )}

                {/* Loop back arrow for last cycle */}
                {i === cycles.length - 1 && (
                  <div className="absolute -left-20 top-1/2 -translate-y-1/2">
                    <svg width="80" height="400" viewBox="0 0 80 400" style={{ overflow: 'visible' }}>
                      <path
                        d="M 40 200 Q -20 100, 40 0"
                        stroke="var(--warm-400)"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="4 4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 40 0 L 35 8 M 40 0 L 45 8"
                        stroke="var(--warm-400)"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div
                      className="absolute top-0 -left-12 text-sm"
                      style={{
                        color: 'var(--warm-500)',
                        fontStyle: 'italic',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Back to Day 1...
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Side annotations */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 max-w-xs">
            <div className="space-y-6">
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: 'var(--coral-subtle)',
                  border: '1px solid var(--warm-200)'
                }}
              >
                <div
                  className="text-sm font-medium mb-2"
                  style={{ color: 'var(--coral)' }}
                >
                  Attempt 1
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  "I can do this!" → Made it to day 12 → Missed once → <strong>Reset to Day 1</strong>
                </p>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{
                  background: 'var(--warm-100)',
                  border: '1px solid var(--warm-200)'
                }}
              >
                <div
                  className="text-sm font-medium mb-2"
                  style={{ color: 'var(--warm-600)' }}
                >
                  Attempt 2
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  "Let me try again..." → Only 3 days → <strong>Reset to Day 1</strong>
                </p>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{
                  background: 'var(--warm-200)',
                  border: '1px solid var(--warm-300)'
                }}
              >
                <div
                  className="text-sm font-medium mb-2"
                  style={{ color: 'var(--warm-700)' }}
                >
                  Attempt 3
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  "Maybe Monday..." → <strong>Stopped trying</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom question */}
        <div className="text-center">
          <p
            className="serif text-3xl md:text-4xl mb-8"
            style={{
              color: 'var(--text-primary)',
              fontWeight: '400',
              fontStyle: 'italic',
              letterSpacing: '-0.015em'
            }}
          >
            Sound familiar?
          </p>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7'
            }}
          >
            72% of perfectionists say the hardest part isn't doing the work—it's starting over after a reset.
          </p>
        </div>
      </div>
    </section>
  )
}
