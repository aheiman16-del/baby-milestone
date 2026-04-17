'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, XCircle, Lock, Heart } from 'lucide-react'

const signals = [
  {
    icon: ShieldCheck,
    title: '100% satisfaction guarantee',
    body: 'Not in love with your first month? We\'ll make it right or refund you.',
  },
  {
    icon: XCircle,
    title: 'Cancel anytime',
    body: 'No contracts, no hoops. Pause or cancel from your account in two clicks.',
  },
  {
    icon: Lock,
    title: 'Secure checkout',
    body: 'Payments handled by Stripe. Your card details never touch our servers.',
  },
  {
    icon: Heart,
    title: 'Made by parents',
    body: 'Built by a dad who wanted these memories captured without another app to babysit.',
  },
]

export default function SocialProof() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl md:text-3xl font-serif mb-12"
          style={{ color: 'var(--text-main)' }}
        >
          Built to earn your trust.
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {signals.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center p-4"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--pink-bg)' }}
                >
                  <Icon className="w-6 h-6" style={{ color: 'var(--coral)' }} />
                </div>
                <h3
                  className="font-semibold text-sm mb-2"
                  style={{ color: 'var(--text-main)' }}
                >
                  {s.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {s.body}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
