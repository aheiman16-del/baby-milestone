export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold font-display" style={{ color: 'var(--navy)' }}>
            OurMilestone
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#how-it-works" className="hover:text-gray-600 transition">How it Works</a>
            <a href="#pricing" className="hover:text-gray-600 transition">Pricing</a>
            <a href="#gift" className="hover:text-gray-600 transition">Gift</a>
            <a href="#faq" className="hover:text-gray-600 transition">FAQ</a>
            <a href="/privacy" className="hover:text-gray-600 transition">Privacy</a>
            <a href="/terms" className="hover:text-gray-600 transition">Terms</a>
            <a href="mailto:hello@ourmilestone.co" className="hover:text-gray-600 transition">Contact</a>
          </div>
        </div>
        <p className="text-center text-xs text-gray-300 mt-8">&copy; 2026 OurMilestone. All rights reserved.</p>
      </div>
    </footer>
  )
}
