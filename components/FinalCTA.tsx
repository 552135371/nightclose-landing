'use client'

interface FinalCTAProps {
  variant: 'a' | 'b' | 'c' | 'd'
}

const content = {
  a: {
    headline: 'Your progress deserves an app that keeps it.',
    subheadline: '500+ people waiting. Early access Summer 2026.',
    caption: '',
    cta: 'Join the Waitlist',
    trustBadge: 'We\'ll never spam you. Unsubscribe anytime.'
  }
}

export default function FinalCTA({ variant }: FinalCTAProps) {
  const data = content[variant as keyof typeof content] || content.a

  const openTallyForm = () => {
    // @ts-expect-error - Tally is loaded via script tag
    if (typeof window !== 'undefined' && window.Tally) {
      // @ts-expect-error - Tally types not available
      window.Tally.openPopup('0Q1EEA', {
        layout: 'modal',
        width: 600,
        autoClose: 3000,
      })
    }
  }

  return (
    <section
      className="px-6 py-24 md:py-40 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--coral) 0%, var(--coral-dark) 100%)'
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 20% 80%, white, transparent 40%),
                       radial-gradient(circle at 80% 20%, white, transparent 40%)`
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Headline */}
        <h2
          className="serif mb-8"
          style={{
            fontSize: 'clamp(2.5rem, 6vw + 1rem, 5.5rem)',
            fontWeight: '400',
            letterSpacing: '-0.025em',
            color: 'white',
            textShadow: '0 2px 20px rgba(0,0,0,0.1)'
          }}
        >
          {data.headline}
        </h2>

        {/* Subheadline */}
        <p
          className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto"
          style={{
            color: 'rgba(255, 255, 255, 0.95)',
            lineHeight: '1.5'
          }}
        >
          {data.subheadline}
        </p>

        <p
          className="text-base mb-12"
          style={{
            color: 'rgba(255, 255, 255, 0.75)'
          }}
        >
          {data.caption}
        </p>

        {/* CTA Button */}
        <div className="max-w-xl mx-auto">
          <button
            onClick={openTallyForm}
            className="px-12 py-5 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'white',
              color: 'var(--coral)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.2)'
            }}
          >
            {data.cta} →
          </button>

          {/* Trust Badge */}
          <p
            className="text-sm flex items-center justify-center gap-2 mt-6"
            style={{
              color: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            {data.trustBadge}
          </p>
        </div>
      </div>
    </section>
  )
}
