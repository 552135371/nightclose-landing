'use client'

interface HeroProps {
  variant: 'a' | 'b' | 'c' | 'd'
}

const content = {
  a: {
    headline: "Your streak died. Your progress didn't.",
    subheadline: [
      'You did it 20 times. Then you missed once. And the app acted like those 20 never happened.',
      "Your progress was real. The streak counter just couldn't see it."
    ],
    audience: "Built for people who've lost their streak—but not their commitment.",
    cta: 'Join the Waitlist',
    caption: 'Early access · $4.99/mo · iOS launching Summer 2026'
  }
}

export default function Hero({ variant }: HeroProps) {
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
    <section className="px-6 pt-16 pb-12 md:pt-28 md:pb-16 relative overflow-hidden">
      {/* Soft gradient background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse at top, var(--coral-subtle), transparent 70%)`
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text Content */}
        <div className="max-w-2xl">
          {/* Eyebrow with accent */}
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-8 h-px"
              style={{ background: 'var(--coral)' }}
            />
            <p
              className="text-sm font-medium tracking-wide uppercase"
              style={{ color: 'var(--coral)' }}
            >
              {data.audience}
            </p>
          </div>

          {/* Headline - bold and clear */}
          <h1
            className="serif mb-8"
            style={{
              fontSize: 'clamp(2.5rem, 6vw + 1rem, 5.5rem)',
              fontWeight: '400',
              letterSpacing: '-0.025em',
              lineHeight: '1.1',
              color: 'var(--text-primary)'
            }}
          >
            {data.headline.split('progress').map((part, i, arr) => (
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span style={{
                    color: 'var(--coral)',
                    fontWeight: '400'
                  }}>progress</span>
                </span>
              ) : part
            ))}
          </h1>

          {/* Subheadline - larger and clearer */}
          <div className="space-y-5 mb-12">
            {data.subheadline.map((line, i) => (
              <p
                key={i}
                className="text-lg md:text-xl"
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  fontWeight: '400'
                }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* CTA - elegant button with shadow */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <button
              onClick={openTallyForm}
              className="group px-6 py-3.5 md:px-8 md:py-4 rounded-full text-base font-medium transition-all duration-300 w-full sm:w-auto text-center"
              style={{
                background: 'var(--coral)',
                color: 'white',
                boxShadow: '0 4px 20px rgba(232, 153, 141, 0.3)'
              }}
            >
              <span className="group-hover:tracking-wide transition-all duration-300">
                {data.cta}
              </span>
            </button>
          </div>

          {/* Caption with soft styling */}
          <p
            className="text-sm"
            style={{
              color: 'var(--text-muted)',
              letterSpacing: '0.02em'
            }}
          >
            {data.caption}
          </p>
        </div>

        {/* Right Column: Hero App Screenshot */}
        <div className="relative mx-auto w-full max-w-[320px] lg:max-w-[360px] mt-12 lg:mt-0">
          {/* Subtle glow behind the phone */}
          <div 
            className="absolute inset-0 blur-3xl opacity-30 rounded-full"
            style={{ background: 'var(--coral)' }}
          />
          
          {/* Image Wrapper to clip black corners */}
          <div 
            className="relative w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-[6px] md:border-[8px] transition-transform duration-700 hover:-translate-y-2 z-10"
            style={{ 
              borderColor: 'var(--warm-50)',
              boxShadow: '0 20px 40px -10px rgba(232, 153, 141, 0.3)',
              backgroundColor: 'var(--warm-50)'
            }}
          >
            <img 
              src="/start-small.png" 
              alt="Start with one small thing" 
              className="w-full h-auto block"
              style={{ transform: 'scale(1.03)' }} // scale slightly to crop out the black pixels
            />
          </div>
        </div>
      </div>
    </section>
  )
}
