import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { FeaturedProjectSection } from "@/components/featured-project-section"
import { WhyTadawulSection } from "@/components/why-tadawul-section"
import { SmartVisionSection } from "@/components/smart-vision-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjectSection />
      <WhyTadawulSection />
      <SmartVisionSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
