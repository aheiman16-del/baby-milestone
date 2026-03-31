import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Terms() {
  return (
    <>
      <Nav />
      <main className="pt-24 pb-16 max-w-3xl mx-auto px-6">
        <h1 className="font-display text-4xl font-bold mb-8" style={{ color: 'var(--navy)' }}>Terms of Service</h1>
        <div className="prose prose-gray max-w-none text-sm text-gray-600 space-y-6">
          <p><strong>Last updated:</strong> March 30, 2026</p>

          <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: 'var(--navy)' }}>The service</h2>
          <p>OurMilestone creates personalized milestone videos, photo cards, and private baby pages from photos you submit. We deliver these digitally unless you are on a plan that includes printed cards.</p>

          <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: 'var(--navy)' }}>Your content</h2>
          <p>You own all rights to the photos you submit. By uploading photos, you grant OurMilestone a limited license to use them solely for creating your personalized content. We will never use your photos for marketing, advertising, or any other purpose without your explicit written consent.</p>

          <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: 'var(--navy)' }}>Subscriptions and billing</h2>
          <p>Monthly subscriptions renew automatically. You can cancel at any time from your account or by emailing hello@ourmilestone.co. Cancellations take effect at the end of your current billing period. If you don&apos;t submit photos in a given month, your subscription pauses and you are not charged.</p>

          <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: 'var(--navy)' }}>Refunds</h2>
          <p>We offer a 100% satisfaction guarantee. If you&apos;re not happy with your first video, we&apos;ll refund your payment in full. For one-time products, refund requests must be made within 7 days of delivery.</p>

          <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: 'var(--navy)' }}>Delivery</h2>
          <p>Monthly milestone videos are delivered within 3-5 business days of photo submission. One-time products are delivered within 24-48 hours. Delivery times are estimates and not guaranteed.</p>

          <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: 'var(--navy)' }}>Contact</h2>
          <p>Questions? Email us at <a href="mailto:hello@ourmilestone.co" className="underline" style={{ color: 'var(--coral)' }}>hello@ourmilestone.co</a>.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
