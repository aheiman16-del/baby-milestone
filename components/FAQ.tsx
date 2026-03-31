'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
  {
    q: 'What kind of photos should I submit?',
    a: 'Everyday moments are perfect! Bath time, tummy time, first foods, smiles, even the messy ones. We recommend 3-5 of your favorites each month. No professional photography needed.',
  },
  {
    q: 'How long does it take to get my video?',
    a: 'Monthly milestone videos are delivered within 3-5 business days of your photo submission. One-time products (gender reveals, birth announcements) are delivered within 24-48 hours.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes, cancel anytime with no fees or penalties. Your baby page and all past videos remain accessible even after canceling.',
  },
  {
    q: 'What if I miss a month?',
    a: 'No problem! Your subscription pauses automatically if you don\u2019t submit photos. You\u2019re never charged for a month you skip. Just pick back up whenever you\u2019re ready.',
  },
  {
    q: 'Is this a good gift for grandparents?',
    a: 'It\u2019s our most popular gift. Grandparents get a new video of their grandchild every month, delivered right to their phone. Many grandparents say it\u2019s the best gift they\u2019ve ever received.',
  },
  {
    q: 'What\u2019s included in the private baby page?',
    a: 'A beautiful, shareable web page for your baby with all their monthly videos, photos, and milestones in one place. Share the link with family so they can follow along. It\u2019s like a living baby book.',
  },
  {
    q: 'How is this different from doing it myself?',
    a: 'You could absolutely do it yourself with Canva or CapCut. But most parents don\u2019t \u2014 life gets busy and months slip by. We make sure every milestone gets captured, professionally, without you having to find the time.',
  },
  {
    q: 'What does the Keepsake plan\u2019s printed card include?',
    a: 'Each month we mail you a high-quality printed photo card featuring your baby\u2019s milestone photo and stats. It\u2019s a physical keepsake you can put on the fridge, in a scrapbook, or send to grandparents.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left border-b border-gray-100 py-5 group"
    >
      <div className="flex items-center justify-between">
        <span className="font-semibold text-sm pr-4" style={{ color: 'var(--navy)' }}>{q}</span>
        <span className="text-gray-400 text-xl flex-shrink-0 transition-transform group-hover:text-gray-600" style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
      </div>
      {open && (
        <p className="text-sm text-gray-500 mt-3 leading-relaxed pr-8">{a}</p>
      )}
    </button>
  )
}

export default function FAQ() {
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
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
