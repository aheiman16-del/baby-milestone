export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--navy)' }} className="py-12 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-xl font-bold">OurMilestone</div>
          <div className="flex flex-wrap gap-6 text-sm text-white/60 justify-center">
            <a href="#how-it-works" className="hover:text-white transition">How it Works</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#gift" className="hover:text-white transition">Gift</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="mailto:hello@ourmilestone.co" className="hover:text-white transition">Contact</a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} OurMilestone. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
