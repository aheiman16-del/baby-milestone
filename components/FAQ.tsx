'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'What kind of photos should I submit?', a: 'Any photos you love from the month — phone photos are perfect. We recommend a mix: close-up face shots, full body, and a fun candid moment. No professional photography needed.' },
  { q: 'How long does it take to get my video?', a: 'Within 24-48 hours of submitting your photos and monthly form. We send everything straight to your inbox.' },
  { q: 'Can I cancel anytime?', a: 'Yes, completely. No lock-in contracts. Cancel from your account dashboard whenever you want.' },
  { q: 'What if I miss a month?', a: "No penalty — just submit when you're ready. We keep your baby page active and pick back up whenever you submit." },
  { q: 'Is this a good gift for grandparents?', a: "It's genuinely the most-loved baby shower and holiday gift we've seen. Grandparents get shared access to the private baby page and watch videos on repeat." },
  { q: "What's included in the private baby page?", a: "Every video, photo card, stat card, and monthly letter — all in a beautiful timeline at a private URL like ourmilestone.co/emma-johnson. Share it with family via link. No login needed to view." },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-bold text-center mb-12"
          style={{ color: 'var(--navy)' }}
        >
          Frequently asked questions
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border border-gray-100 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-sm" style={{ color: 'var(--navy)' }}>{faq.q}</span>
                <span className="text-xl text-gray-400 ml-4 flex-shrink-0">{open === i ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
