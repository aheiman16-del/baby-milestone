'use client'

import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section
      className="py-24 text-center"
      style={{ background: 'linear-gradient(135deg, var(--pink-bg) 0%, var(--cream-bg) 100%)' }}
    >
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--navy)' }}>
            Every month matters.<br />
            <span className="italic" style={{ color: 'var(--coral)' }}>Start capturing them.</span>
          </h2>
          <a
            href="#pricing"
            className="inline-block text-white font-semibold px-8 py-4 rounded-full text-base transition hover:opacity-90 shadow-lg"
            style={{ backgroundColor: 'var(--coral)' }}
          >
            Start Your Baby&apos;s Story
          </a>
        </motion.div>
      </div>
    </section>
  )
}
