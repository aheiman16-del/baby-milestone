'use client'

import { motion } from 'framer-motion'

// 6 decorative "photo" placeholders. Swap out once real sample assets are in.
const floatingPhotos = [
  { top: '10%', left: '8%', rotate: -8, delay: 0 },
  { top: '15%', right: '10%', rotate: 6, delay: 0.2 },
  { top: '45%', left: '4%', rotate: 4, delay: 0.4 },
  { top: '50%', right: '6%', rotate: -5, delay: 0.6 },
  { bottom: '12%', left: '12%', rotate: -3, delay: 0.8 },
  { bottom: '15%', right: '14%', rotate: 7, delay: 1 },
]

export default function Hero() {
  return (
    <section
      // Reduced from min-h-screen to tighten the fold
      className="relative pt-28 pb-20 md:pt-32 md:pb-24 flex items-center justify-center overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, var(--pink-bg) 0%, var(--cream-bg) 100%)',
      }}
    >
      {/* Floating photo placeholders */}
      {floatingPhotos.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20, rotate: p.rotate }}
          animate={{ opacity: 1, y: 0, rotate: p.rotate }}
          transition={{ duration: 0.8, delay: p.delay }}
          className="absolute w-20 h-20 md:w-28 md:h-28 rounded-2xl shadow-md hidden md:block"
          style={{
            top: p.top,
            left: p.left,
            right: p.right,
            bottom: p.bottom,
            background:
              'linear-gradient(135deg, #ffd6d6 0%, #ffc8a0 100%)',
          }}
        />
      ))}

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif mb-6 leading-tight"
          style={{ color: 'var(--text-main)' }}
        >
          Monthly milestone videos and keepsakes,{' '}
          <span
            className="italic"
            style={{ color: 'var(--coral)', fontFamily: 'var(--font-script, serif)' }}
          >
            delivered automatically.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-8"
          style={{ color: 'var(--text-muted)' }}
        >
          Submit 3-5 photos each month. We turn them into a video and a printed
          photo card you'll actually want to frame.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          href="#pricing"
          className="inline-block text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          style={{ backgroundColor: 'var(--coral)' }}
        >
          Start Your Baby&apos;s Story
        </motion.a>
      </div>
    </section>
  )
}
