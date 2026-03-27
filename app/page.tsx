import CheckoutButton from '@/components/CheckoutButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-sm uppercase tracking-widest text-rose-400 font-medium mb-4">
          Baby&apos;s First Year, Captured Forever
        </p>
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Monthly milestone videos and keepsakes,<br />
          <span className="text-rose-400">delivered automatically.</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          Submit 3-5 photos each month. We handle everything else: personalized video, photo card, and a private page your whole family can treasure forever.
        </p>
        <a
          href="#pricing"
          className="inline-block bg-rose-400 hover:bg-rose-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition"
        >
          Start Your Baby&apos;s Story
        </a>
      </section>

      {/* How it works */}
      <section className="bg-rose-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">How it works</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { step: '01', title: 'Subscribe', body: 'Pick a plan and tell us about your baby. Takes 2 minutes.' },
              { step: '02', title: 'Submit monthly', body: 'Each month we send you a reminder. Upload 3-5 photos and answer a few questions.' },
              { step: '03', title: 'We deliver', body: 'Your personalized milestone video and photo card land in your inbox within 24-48 hours.' },
            ].map((item) => (
              <div key={item.step}>
                <div className="text-4xl font-bold text-rose-300 mb-3">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entry products */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Start here</h2>
        <p className="text-center text-gray-500 mb-12">
          One-time products. Perfect for the moment you&apos;re in right now.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-2">Gender Reveal Video</h3>
            <p className="text-gray-500 mb-4">A personalized video reveal delivered within 24-48 hours. Share with family, post to Instagram, keep forever.</p>
            <p className="text-3xl font-bold text-rose-400 mb-6">$34</p>
            <CheckoutButton
              productKey="gender_reveal"
              label="Order Gender Reveal"
              className="w-full bg-rose-400 hover:bg-rose-500 text-white font-semibold py-3 rounded-xl transition"
            />
          </div>
          <div className="border border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-2">Birth Announcement Video + Card</h3>
            <p className="text-gray-500 mb-4">Personalized birth announcement video and digital photo card. Ready to send and share in 24-48 hours.</p>
            <p className="text-3xl font-bold text-rose-400 mb-6">$49</p>
            <CheckoutButton
              productKey="birth_announcement"
              label="Order Birth Announcement"
              className="w-full bg-rose-400 hover:bg-rose-500 text-white font-semibold py-3 rounded-xl transition"
            />
          </div>
        </div>
      </section>

      {/* Subscription pricing */}
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Monthly Plans</h2>
          <p className="text-center text-gray-500 mb-12">
            Every month, a new milestone. The longer you subscribe the more irreplaceable it becomes.
          </p>
          <div className="grid md:grid-cols-3 gap-8">

            {/* Essential */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-1">Essential</h3>
              <p className="text-4xl font-bold text-rose-400 mt-3 mb-1">$14<span className="text-base font-normal text-gray-400">/mo</span></p>
              <p className="text-sm text-gray-400 mb-6">or $112/year (2 months free)</p>
              <ul className="text-gray-600 space-y-2 text-sm mb-8">
                <li>Monthly milestone video</li>
                <li>Digital photo card</li>
                <li>Private baby page</li>
              </ul>
              <CheckoutButton
                productKey="essential_monthly"
                label="Get Started"
                className="w-full border border-rose-400 text-rose-400 hover:bg-rose-50 font-semibold py-3 rounded-xl transition"
              />
            </div>

            {/* Keepsake */}
            <div className="bg-rose-400 rounded-2xl p-8 text-white relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-semibold px-4 py-1 rounded-full">
                Most popular
              </div>
              <h3 className="text-xl font-bold mb-1">Keepsake</h3>
              <p className="text-4xl font-bold mt-3 mb-1">$19<span className="text-base font-normal opacity-70">/mo</span></p>
              <p className="text-sm opacity-70 mb-6">or $152/year (2 months free)</p>
              <ul className="space-y-2 text-sm mb-8 opacity-90">
                <li>Everything in Essential</li>
                <li>Stat comparison card</li>
                <li>Monthly letter from parent to baby</li>
                <li>3 Instagram caption options</li>
                <li>Grandparent text template</li>
              </ul>
              <CheckoutButton
                productKey="keepsake_monthly"
                label="Get Started"
                className="w-full bg-white text-rose-400 font-semibold py-3 rounded-xl hover:bg-rose-50 transition"
              />
            </div>

            {/* Legacy */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-1">Legacy</h3>
              <p className="text-4xl font-bold text-rose-400 mt-3 mb-1">$27<span className="text-base font-normal text-gray-400">/mo</span></p>
              <p className="text-sm text-gray-400 mb-6">or $216/year (2 months free)</p>
              <ul className="text-gray-600 space-y-2 text-sm mb-8">
                <li>Everything in Keepsake</li>
                <li>Seasonal holiday cards</li>
                <li>Monthly milestone checklist</li>
                <li>Instagram reel cover graphic</li>
                <li>First foods tracker card</li>
              </ul>
              <CheckoutButton
                productKey="legacy_monthly"
                label="Get Started"
                className="w-full border border-rose-400 text-rose-400 hover:bg-rose-50 font-semibold py-3 rounded-xl transition"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Gift subscription CTA */}
      <section className="py-20 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Give it as a gift</h2>
        <p className="text-gray-500 mb-8">
          The best baby shower gift you&apos;ve ever given. Full year subscription for $179. Grandparents love this.
        </p>
        <CheckoutButton
          productKey="essential_annual"
          label="Gift a Full Year"
          className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition"
        />
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10 text-center text-gray-400 text-sm">
        <p>OurMilestone &copy; {new Date().getFullYear()}</p>
      </footer>

    </main>
  )
}
