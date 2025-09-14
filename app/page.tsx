import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SocialProof from '../components/SocialProof'
import ProductTour from '../components/ProductTour'
import Features from '../components/Features'
import Stats from '../components/Stats'
import Tokenomics from '../components/Tokenomics'
import Roadmap from '../components/Roadmap'
import FAQ from '../components/FAQ'
import Showcase from '../components/Showcase'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Page(){
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <ProductTour />
      <Features />
      <Showcase />
      <Stats />
      <Tokenomics />
      <Roadmap />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
