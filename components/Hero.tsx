'use client'

import { motion } from 'framer-motion'

const floatingPhotos = [
  { top: '8%', left: '2%', w: 140, h: 170, rotate: '-6deg', delay: 0 },
  { top: '2%', left: '20%', w: 110, h: 130, rotate: '4deg', delay: 0.1 },
  { top: '55%', left: '0%', w: 120, h: 150, rotate: '5deg', delay: 0.2 },
  { top: '5%', right: '18%', w: 130, h: 160, rotate: '-4deg', delay: 0.15 },
  { top: '5%', right: '2%', w: 110, h: 140, rotate: '6deg', delay: 0.05 },
  { top: '55%', right: '0%', w: 125, h: 155, rotate: '-5deg', delay: 0.25 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" style={{ background: 'var(--cream-bg)' }}>
      {/* Floating photos — desktop only */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {floatingPhotos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: photo.delay }}
            className="absolute rounded-2xl overflow-hidden shadow-xl"
            style={{
              top: photo.top,
              left: (photo as any).left,
              right: (photo as any).right,
              width: photo.w,
              height: photo.h,
              transform: `rotate(${photo.rotate})`,
              background: 'linear-gradient(135deg, #ffd6d6 0%, #ffc8a0 100%)',
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-white/40 text-xs">photo</div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-widest font-semibold mb-5"
          style={{ color: 'var(--coral)' }}
        >
          Baby&apos;s First Year, Captured Forever
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6"
          style={{ color: 'var(--navy)' }}
        >
          Monthly milestone videos and keepsakes,{' '}
          <span className="italic font-display" style={{ color: 'var(--coral)' }}>
            delivered automatically.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Submit 3-5 photos each month. We handle everything else: personalized video, photo card, and a private page your whole family can treasure forever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href="#pricing"
            className="inline-block text-white font-semibold px-8 py-4 rounded-full text-base transition hover:opacity-90 shadow-lg"
            style={{ backgroundColor: 'var(--coral)' }}
          >
            Start Your Baby&apos;s Story
          </a>
        </motion.div>
      </div>
    </section>
  )
}
