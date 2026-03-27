'use client'

import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold font-display" style={{ color: 'var(--navy)' }}>
          OurMilestone
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <a href="#how-it-works" className="hover:text-gray-900 transition">How it Works</a>
          <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
          <a href="#gift" className="hover:text-gray-900 transition">Gift</a>
          <a href="#faq" className="hover:text-gray-900 transition">FAQ</a>
        </div>
        <a
          href="#pricing"
          className="text-sm font-semibold text-white px-5 py-2.5 rounded-full transition hover:opacity-90"
          style={{ backgroundColor: 'var(--coral)' }}
        >
          Start Your Baby&apos;s Story
        </a>
      </div>
    </nav>
  )
}
