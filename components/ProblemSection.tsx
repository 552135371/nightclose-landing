interface ProblemSectionProps {
  variant: 'a' | 'b' | 'c' | 'd'
}

const content = {
  a: {
    title: 'Why you keep starting from zero.',
    cards: [
      {
        icon: '❌',
        title: 'Day 1. Again. And Again.',
        content: [
          'You had a 15-day streak. Then you missed one day.',
          'Now it\'s back to "Day 1."',
          'All that progress—gone. Like it never happened.',
          'Why do you have to prove yourself again?'
        ]
      },
      {
        icon: '❌',
        title: 'The Endless Restart Cycle',
        content: [
          'Break a streak → Feel defeated → Delay restarting → Feel worse',
          '72% of perfectionists say restarting is the hardest part.',
          'You\'re not afraid of doing the work.',
          'You\'re exhausted from always starting over.'
        ]
      },
      {
        icon: '❌',
        title: 'When Apps Make You Quit',
        content: [
          '65% of users quit within a week after their streak resets.',
          'It\'s not lack of discipline. It\'s not laziness.',
          'It\'s the crushing feeling of "Why bother? I\'ll just lose it again."',
          'One bad day shouldn\'t erase all the good ones.'
        ]
      }
    ]
  }
}

export default function ProblemSection({ variant }: ProblemSectionProps) {
  const data = content[variant]

  return (
    <section className="px-6 py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 text-center mb-16">
          {data.title}
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.cards.map((card, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
              <div className="space-y-2 text-slate-600">
                {card.content.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
