'use client'

import { motion } from 'framer-motion'
import CheckoutButton from './CheckoutButton'

export default function Gift() {
  return (
    <section id="gift" className="py-24" style={{ backgroundColor: 'var(--cream-bg)' }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl font-bold mb-4" style={{ color: 'var(--navy)' }}>Give it as a gift</h2>
          <p className="text-gray-500 mb-2 max-w-lg mx-auto">
            The best baby shower gift you&apos;ve ever given. A full year of the Keepsake plan &mdash; monthly videos, cards, and a private baby page.
          </p>
          <p className="text-gray-400 text-sm mb-8">
            Includes: milestone video, photo card, printed card, baby page, parent letter, and seasonal cards every month for 12 months.
          </p>
          <CheckoutButton
            productKey="gift_annual"
            label="Gift a Full Year &mdash; $179"
            className="inline-block text-white font-semibold px-8 py-4 rounded-full text-base transition hover:opacity-90 shadow-lg"
            style={{ backgroundColor: 'var(--coral)' }}
          />
          <p className="text-xs text-gray-400 mt-4">Grandparents love this one.</p>
        </motion.div>
      </div>
    </section>
  )
}
