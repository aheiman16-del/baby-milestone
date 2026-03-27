import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import HowItWorks from '@/components/HowItWorks'
import EntryProducts from '@/components/EntryProducts'
import Pricing from '@/components/Pricing'
import Gift from '@/components/Gift'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <EntryProducts />
      <Pricing />
      <Gift />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  )
}
