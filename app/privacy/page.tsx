import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Privacy() {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-16 max-w-3xl mx-auto px-6">
        <h1 className="font-display text-4xl font-bold mb-8" style={{ color: 'var(--navy)' }}>Privacy Policy</h1>
        <div className="prose prose-gray max-w-none text-sm text-gray-600 space-y-6">
          <p><strong>Last updated:</strong> March 30, 2026</p>

          <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: 'var(--navy)' }}>What we collect</h2>
          <p>When you use OurMilestone, we collect the information you provide directly: your name, email address, baby&apos;s name and birthdate, and the photos you submit each month. We also collect basic usage data like page views to improve our service.</p>

          <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: 'var(--navy)' }}>How we use your photos</h2>
          <p>Your photos are used solely to create your personalized milestone videos, cards, and baby page. We do not sell, share, or use your photos for any other purpose. Your photos are stored securely and encrypted at rest.</p>

          <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: 'var(--navy)' }}>Who can see your content</h2>
          <p>Your baby page is private by default. Only people you share the link with can view it. We never make your content public or use it in marketing without your explicit written permission.</p>

          <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: 'var(--navy)' }}>Data retention</h2>
          <p>If you cancel your subscription, your baby page and videos remain accessible for 12 months. After that, we will email you a download link for all your content before removing it from our servers. You can request deletion of your data at any time by emailing hello@ourmilestone.co.</p>

          <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: 'var(--navy)' }}>Payments</h2>
          <p>Payments are processed securely through Stripe. We never store your credit card information on our servers.</p>

          <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: 'var(--navy)' }}>Contact</h2>
          <p>Questions about your privacy? Email us at <a href="mailto:hello@ourmilestone.co" className="underline" style={{ color: 'var(--coral)' }}>hello@ourmilestone.co</a>.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
