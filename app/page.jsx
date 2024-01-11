import About from '@/components/About'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Cta from '@/components/ui/Cta'
import Reviews from '@/components/ui/Reviews'

export default function Home() {
   return (
      <main>
         <Hero />
         <About />
         <Services />
         <Work />
         <Reviews />
         <Cta />
      </main>
   )
}
