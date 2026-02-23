import Footer from '@/components/Footer'
import Hero from './sections/Hero'
import PainPoints from './sections/PainPoints'
import Services from './sections/Services'
import Projects from './sections/Projects'
import HowIWork from './sections/HowIWork'
import TechStack from './sections/TechStack'
import CTA from './sections/CTA'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <PainPoints />
      <Services />
      <Projects />
      <HowIWork />
      <TechStack />
      <CTA />
      <Footer />
    </div>
  )
}