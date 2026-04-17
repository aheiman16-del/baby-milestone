'use client'

import { motion } from 'framer-motion'
import { Gift as GiftIcon, Check } from 'lucide-react'
import CheckoutButton from './CheckoutButton'

const giftIncludes = [
  'Monthly milestone video',
  'Printed keepsake photo card, mailed monthly',
  'Private baby page',
  'Milestone checklist',
  '12 months of memories, ready-made',
]

export default function Gift() {
  return (
    <section
      id="gift"
      className="py-20"
      style={{ backgroundColor: 'var(--pink-bg)' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5"
            style={{ backgroundColor: 'var(--coral)' }}
          >
            <GiftIcon className="w-7 h-7 text-white" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-serif mb-4"
            style={{ color: 'var(--text-main)' }}
          >
            Give it as a gift
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-muted)' }}
          >
            The best baby shower gift you've ever given. Grandparents love this one.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-sm"
        >
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
            {giftIncludes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: 'var(--coral)' }}
                />
                <span className="text-sm" style={{ color: 'var(--text-main)' }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center">
            <CheckoutButton
              productKey="gift_annual"
              label="Gift a Full Year — $199"
              className="text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--coral)' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
