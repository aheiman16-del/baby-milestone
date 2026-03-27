'use client'

import { motion } from 'framer-motion'
import CheckoutButton from './CheckoutButton'

export default function Gift() {
  return (
    <section id="gift" style={{ backgroundColor: 'var(--pink-bg)' }} className="py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-6xl mb-6">🎁</div>
          <h2 className="font-display text-4xl font-bold mb-4" style={{ color: 'var(--navy)' }}>
            Give it as a gift
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            The best baby shower gift you&apos;ve ever given. Full year subscription for $179. Grandparents love this.
          </p>
          <CheckoutButton
            productKey="essential_annual"
            label="Gift a Full Year — $179"
            className="inline-block font-semibold px-8 py-4 rounded-full text-white transition hover:opacity-90"
            style={{ backgroundColor: 'var(--navy)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
