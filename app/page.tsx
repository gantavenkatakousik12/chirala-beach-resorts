import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WelcomeSection from "@/components/welcome-section"
import StatsSection from "@/components/stats-section"
import ActivitiesSection from "@/components/activities-section"
import AttractionsSection from "@/components/attractions-section"
import ExploreSection from "@/components/explore-section"
import GallerySection from "@/components/gallery-section"
import EventsSection from "@/components/events-section"
import TestimonialsSection from "@/components/testimonials-section"
import AccommodationsSection from "@/components/accommodations-section"
import DiningSection from "@/components/dining-section"
import FAQSection from "@/components/faq-section"
import NewsletterSection from "@/components/newsletter-section"
import CTASection from "@/components/cta-section"
import MapSection from "@/components/map-section"
import ContactSection from "@/components/contact-section"
import ConnectSection from "@/components/connect-section"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <StatsSection />
      <ActivitiesSection />
      <AttractionsSection />
      <ExploreSection />
      <GallerySection />
      <EventsSection />
      <TestimonialsSection />
      <AccommodationsSection />
      <DiningSection />
      <FAQSection />
      <NewsletterSection />
      <CTASection />
      <MapSection />
      <ContactSection />
      <ConnectSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
