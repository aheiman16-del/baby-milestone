'use client'

import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Sarah M.', quote: 'I ugly-cried watching the first video. This is the best thing I\u2019ve done for our family.' },
  { name: 'Jessica R.', quote: 'So much easier than I expected. I just upload photos and magic happens.' },
  { name: 'Alyssa T.', quote: 'My mom watches the videos on repeat. Best gift ever.' },
]

export default function SocialProof() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs uppercase tracking-widest font-semibold mb-10"
          style={{ color: 'var(--coral)' }}
        >
          From our early families
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: 'var(--coral)' }}>
                {t.name.split(' ').map(n => n[0]).join('')}
              </div>
              <p className="font-semibold text-sm mb-2" style={{ color: 'var(--navy)' }}>{t.name}</p>
              <p className="text-gray-500 text-sm italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
