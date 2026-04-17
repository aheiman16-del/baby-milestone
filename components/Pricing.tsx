'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import CheckoutButton from './CheckoutButton'

const plans = [
  {
    name: 'Essential',
    productKey: 'essential_monthly',
    price: '$14',
    period: '/mo',
    annual: '$112/yr — save 4 months',
    features: [
      'Monthly milestone video',
      'Private baby page',
      '3-5 photos per month',
      'Cancel anytime',
    ],
    popular: false,
  },
  {
    name: 'Keepsake',
    productKey: 'keepsake_monthly',
    price: '$22',
    period: '/mo',
    annual: '$176/yr — save 4 months',
    features: [
      'Everything in Essential',
      'Printed keepsake photo card, mailed monthly',
      'Milestone checklist',
      'Priority support',
    ],
    popular: true,
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24"
      style={{ backgroundColor: 'var(--cream-bg)' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-serif mb-4"
            style={{ color: 'var(--text-main)' }}
          >
            Monthly plans
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
            Pick the rhythm that fits your family.
          </p>
        </motion.div>

        {/* pt-4 on the grid gives the "Most Popular" badge room to sit above the card */}
        <div className="grid md:grid-cols-2 gap-8 pt-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-3 py-1 rounded-full z-10 whitespace-nowrap shadow-sm"
                  style={{ backgroundColor: 'var(--coral)' }}
                >
                  Most Popular
                </div>
              )}

              <div
                className="rounded-3xl border shadow-sm bg-white h-full p-8"
                style={{
                  borderColor: plan.popular ? 'var(--coral)' : 'rgb(243 244 246)',
                  borderWidth: plan.popular ? '2px' : '1px',
                }}
              >
                <h3
                  className="text-2xl font-serif mb-2"
                  style={{ color: 'var(--text-main)' }}
                >
                  {plan.name}
                </h3>
                <div className="mb-1">
                  <span
                    className="text-5xl font-serif"
                    style={{ color: 'var(--text-main)' }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-lg" style={{ color: 'var(--text-muted)' }}>
                    {plan.period}
                  </span>
                </div>
                <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
                  {plan.annual}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--coral)' }}
                      />
                      <span className="text-sm" style={{ color: 'var(--text-main)' }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <CheckoutButton
                  productKey={plan.productKey}
                  label={`Start ${plan.name}`}
                  className="w-full text-white py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: 'var(--coral)' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <p
          className="text-center mt-10 text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          Cancel anytime. 100% satisfaction guarantee.
        </p>
      </div>
    </section>
  )
}
