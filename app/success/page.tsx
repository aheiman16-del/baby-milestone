import Link from 'next/link'

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-rose-50 flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="text-6xl mb-6">🎀</div>
        <h1 className="text-3xl font-bold mb-4">You&apos;re all set!</h1>
        <p className="text-gray-500 mb-4">
          Check your email for a confirmation and next steps. Your video will be ready within 24-48 hours.
        </p>
        <p className="text-gray-400 text-sm mb-8">
          Questions? Email us at hello@ourmilestone.com
        </p>
        <Link
          href="/"
          className="inline-block text-rose-400 font-semibold hover:underline"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
