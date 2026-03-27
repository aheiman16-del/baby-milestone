'use client'

import { motion } from 'framer-motion'

const quotes = [
  { quote: "I ugly-cried watching the first video. This is the best thing I've done for our family.", name: 'Sarah M.', initials: 'SM' },
  { quote: "So much easier than I expected. I just upload photos and magic happens.", name: 'Jessica R.', initials: 'JR' },
  { quote: "My mom watches the videos on repeat. Best gift ever.", name: 'Alyssa T.', initials: 'AT' },
]

export default function SocialProof() {
  return (
    <section style={{ backgroundColor: 'var(--pink-bg)' }} className="py-16">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {quotes.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: 'var(--coral)' }}
              >
                {q.initials}
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: 'var(--navy)' }}>{q.name}</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} style={{ color: 'var(--coral)' }}>★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{q.quote}&rdquo;</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
