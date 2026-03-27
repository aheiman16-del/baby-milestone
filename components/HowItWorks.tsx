'use client'

import { motion } from 'framer-motion'

const steps = [
  { num: '01', title: 'Subscribe', body: 'Pick a plan and tell us about your baby. Takes 2 minutes.' },
  { num: '02', title: 'Submit monthly', body: 'Each month, upload 3-5 of your favorite photos.' },
  { num: '03', title: 'We deliver', body: 'You get a personalized video, digital card, and updated baby page, automatically.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-bold text-center mb-16"
          style={{ color: 'var(--navy)' }}
        >
          How it works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className="text-5xl font-display font-bold mb-4"
                style={{ color: 'var(--coral)', opacity: 0.4 }}
              >
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--navy)' }}>{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Before / After */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm p-8"
          style={{ backgroundColor: 'var(--cream-bg)' }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">What you send us</p>
              <div className="grid grid-cols-3 gap-2">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="rounded-xl aspect-square"
                    style={{ background: 'linear-gradient(135deg, #ffd6d6, #ffc8a0)' }}
                  />
                ))}
              </div>
            </div>
            <div className="text-3xl text-gray-300 font-light">→</div>
            <div className="flex-1 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">What you get back</p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Video', color: '#ffd6e8' },
                  { label: 'Card', color: '#d6e8ff' },
                  { label: 'Page', color: '#d6ffd8' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl aspect-square flex items-center justify-center text-xs font-semibold text-gray-500"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
