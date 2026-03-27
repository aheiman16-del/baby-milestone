'use client'

import { motion } from 'framer-motion'
import CheckoutButton from './CheckoutButton'

const features = [
  { label: 'Monthly milestone video', essential: true, keepsake: true, legacy: true },
  { label: 'Digital photo card', essential: true, keepsake: true, legacy: true },
  { label: 'Private baby page', essential: true, keepsake: true, legacy: true },
  { label: 'Stat comparison card', essential: false, keepsake: true, legacy: true },
  { label: 'Monthly letter from parent to baby', essential: false, keepsake: true, legacy: true },
  { label: 'Instagram caption options', essential: false, keepsake: true, legacy: true },
  { label: 'Grandparent text template', essential: false, keepsake: true, legacy: true },
  { label: 'Seasonal holiday cards', essential: false, keepsake: false, legacy: true },
  { label: 'Monthly milestone checklist', essential: false, keepsake: false, legacy: true },
  { label: 'Instagram reel cover graphic', essential: false, keepsake: false, legacy: true },
  { label: 'First foods tracker card', essential: false, keepsake: false, legacy: true },
]

const plans = [
  { key: 'essential_monthly' as const, name: 'Essential', price: '$14', annual: '$112', popular: false },
  { key: 'keepsake_monthly' as const, name: 'Keepsake', price: '$19', annual: '$152', popular: true },
  { key: 'legacy_monthly' as const, name: 'Legacy', price: '$27', annual: '$216', popular: false },
]

function Check({ yes }: { yes: boolean }) {
  return yes
    ? <span className="text-lg" style={{ color: 'var(--coral)' }}>✓</span>
    : <span className="text-gray-300">—</span>
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl font-bold mb-3" style={{ color: 'var(--navy)' }}>Monthly Plans</h2>
          <p className="text-gray-500 max-w-lg mx-auto">Every month, a new milestone. The longer you subscribe the more irreplaceable it becomes.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm"
        >
          {/* Header row */}
          <div className="grid grid-cols-4">
            <div className="p-6 bg-gray-50" />
            {plans.map((plan) => (
              <div
                key={plan.key}
                className="p-6 text-center relative"
                style={{ backgroundColor: plan.popular ? 'var(--navy)' : 'var(--cream-bg)' }}
              >
                {plan.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: 'var(--coral)' }}
                  >
                    Most Popular
                  </div>
                )}
                <p
                  className="font-bold text-lg mb-1"
                  style={{ color: plan.popular ? 'white' : 'var(--navy)' }}
                >
                  {plan.name}
                </p>
                <p
                  className="text-3xl font-bold"
                  style={{ color: plan.popular ? 'white' : 'var(--coral)' }}
                >
                  {plan.price}<span className="text-sm font-normal opacity-60">/mo</span>
                </p>
                <div
                  className="text-xs mt-1 px-2 py-0.5 rounded-full inline-block font-medium"
                  style={{
                    backgroundColor: plan.popular ? 'rgba(245,114,123,0.2)' : 'var(--pink-bg)',
                    color: plan.popular ? '#F5727B' : 'var(--coral)',
                  }}
                >
                  {plan.annual}/yr — Save 2 months
                </div>
              </div>
            ))}
          </div>

          {/* Feature rows */}
          {features.map((f, i) => (
            <div
              key={i}
              className="grid grid-cols-4 border-t border-gray-100"
            >
              <div className="p-4 text-sm text-gray-600 bg-gray-50 flex items-center">{f.label}</div>
              <div className="p-4 flex items-center justify-center" style={{ backgroundColor: 'var(--cream-bg)' }}>
                <Check yes={f.essential} />
              </div>
              <div className="p-4 flex items-center justify-center" style={{ backgroundColor: 'var(--navy)', opacity: 0.95 }}>
                <Check yes={f.keepsake} />
              </div>
              <div className="p-4 flex items-center justify-center" style={{ backgroundColor: 'var(--cream-bg)' }}>
                <Check yes={f.legacy} />
              </div>
            </div>
          ))}

          {/* CTA row */}
          <div className="grid grid-cols-4 border-t border-gray-100">
            <div className="p-6 bg-gray-50" />
            {plans.map((plan) => (
              <div
                key={plan.key}
                className="p-6 flex items-center justify-center"
                style={{ backgroundColor: plan.popular ? 'var(--navy)' : 'var(--cream-bg)' }}
              >
                <CheckoutButton
                  productKey={plan.key}
                  label="Get Started"
                  className="w-full font-semibold py-3 rounded-xl text-sm transition"
                  style={
                    plan.popular
                      ? { backgroundColor: 'var(--coral)', color: 'white' }
                      : { border: '2px solid var(--coral)', color: 'var(--coral)', backgroundColor: 'transparent' }
                  }
                />
              </div>
            ))}
          </div>
        </motion.div>

        <p className="text-center text-sm text-gray-400 mt-6">Cancel anytime. 100% satisfaction guarantee.</p>
      </div>
    </section>
  )
}
