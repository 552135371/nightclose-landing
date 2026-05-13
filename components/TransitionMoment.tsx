export default function TransitionMoment() {
  return (
    <section className="px-6 py-8 md:py-12 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, var(--peach-light), transparent 70%)'
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Sound familiar? */}
        <div className="text-center mb-8">
          <p
            className="serif text-2xl md:text-3xl mb-4"
            style={{
              color: 'var(--text-primary)',
              fontStyle: 'italic',
            }}
          >
            Sound familiar?
          </p>
          <p
            className="text-base md:text-lg max-w-xl mx-auto mb-8"
            style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.7'
            }}
          >
            <span className="font-semibold" style={{ color: 'var(--coral-dark)' }}>72%</span> of perfectionists say the hardest part isn&apos;t doing the work—it&apos;s starting over after a reset.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center my-8">
          <div className="w-16 h-px" style={{ background: 'var(--warm-300)' }} />
        </div>

        {/* But what if... */}
        <div className="text-center">
          <p
            className="text-xl md:text-2xl"
            style={{
              color: 'var(--text-secondary)',
              fontStyle: 'italic',
              fontWeight: '400'
            }}
          >
            But what if the app remembered what you actually did?
          </p>
        </div>
      </div>
    </section>
  )
}
