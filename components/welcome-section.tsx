import { Button } from "@/components/ui/button"

export default function WelcomeSection() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        {/* Subtitle */}
        <p className="text-muted-foreground text-xs md:text-sm uppercase tracking-[0.2em] mb-4">
          Ramapuram Beach Road, Chirala, Andhra Pradesh
        </p>

        {/* Script Title */}
        <h2 className="font-script text-5xl md:text-6xl lg:text-7xl text-[#0c7d9c] mb-8">Welcome</h2>

        {/* Main Text */}
        <p className="text-foreground text-base md:text-lg lg:text-xl leading-relaxed mb-6 font-serif">
          Rainbow Beach Resorts is the premier beach destination in Chirala, offering an unparalleled coastal experience
          on the pristine shores of Ramapuram Beach in Andhra Pradesh.
        </p>

        {/* Secondary Text */}
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
          Nestled along the beautiful Bay of Bengal coastline, our resort offers the perfect blend of luxury and natural
          beauty. Whether you're seeking a romantic getaway, a family vacation, or a corporate retreat, Rainbow Beach
          Resorts provides world-class amenities including private beach access, swimming pool, sea-facing rooms, and
          authentic coastal cuisine. Discover why we're rated as one of the best resorts in Chirala.
        </p>

        {/* CTA Button */}
        <a href="tel:7799111273">
          <Button
            variant="outline"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background rounded-none px-8 py-6 text-sm uppercase tracking-wider font-medium bg-transparent"
          >
            Book Your Stay
          </Button>
        </a>
      </div>
    </section>
  )
}
