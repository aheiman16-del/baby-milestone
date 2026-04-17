'use client'

import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section
      // Reduced from py-24 — this section is intentionally sparse, so the padding was stacking up.
      className="py-16 text-center"
      style={{
        background:
          'linear-gradient(135deg, var(--pink-bg) 0%, var(--cream-bg) 100%)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto px-6"
      >
        <h2
          className="text-4xl md:text-5xl font-serif mb-6"
          style={{ color: 'var(--text-main)' }}
        >
          Every month matters.
          <br />
          <span
            className="italic"
            style={{ color: 'var(--coral)', fontFamily: 'var(--font-script, serif)' }}
          >
            Start capturing them.
          </span>
        </h2>
        <a
          href="#pricing"
          className="inline-block text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          style={{ backgroundColor: 'var(--coral)' }}
        >
          Start Your Baby&apos;s Story
        </a>
      </motion.div>
    </section>
  )
}
