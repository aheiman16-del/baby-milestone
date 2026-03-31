'use client'

import { motion } from 'framer-motion'
import CheckoutButton from './CheckoutButton'

const products = [
  {
    key: 'gender_reveal' as const,
    title: 'Gender Reveal Video',
    desc: 'A personalized video reveal delivered within 24-48 hours. Share with family, post to Instagram, keep forever.',
    price: '$24',
  },
  {
    key: 'birth_announcement' as const,
    title: 'Birth Announcement Video + Card',
    desc: 'Personalized birth announcement video and digital photo card. Ready to send and share in 24-48 hours.',
    price: '$39',
  },
]

export default function EntryProducts() {
  return (
    <section style={{ backgroundColor: 'var(--pink-bg)' }} className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl font-bold mb-3" style={{ color: 'var(--navy)' }}>Start here</h2>
          <p className="text-gray-500">One-time products. Perfect for the moment you&apos;re in right now.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--navy)' }}>{p.title}</h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{p.desc}</p>
              <p className="text-3xl font-bold mb-6" style={{ color: 'var(--coral)' }}>{p.price}</p>
              <CheckoutButton
                productKey={p.key}
                label="Order"
                className="w-full font-semibold py-3 rounded-xl transition text-white hover:opacity-90"
                style={{ backgroundColor: 'var(--coral)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
