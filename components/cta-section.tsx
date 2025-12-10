import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <Image src="/resort_images/resort-01.png" alt="Rainbow Beach Resorts Chirala - Beach View" fill className="object-cover" />
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="font-script text-5xl md:text-7xl text-[#05b2dc] mb-4">Book Your Beach Getaway</h2>
          <p className="text-xl md:text-2xl font-serif mb-4">Experience the best beach resort in Chirala, Andhra Pradesh</p>
          <p className="text-white/80 mb-8">
            From romantic honeymoons to family vacations, corporate retreats to weekend getaways - discover why Rainbow Beach Resorts is the top choice for beach lovers at Ramapuram Beach, Chirala.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:7799111273">
              <Button size="lg" className="bg-[#0c7d9c] hover:bg-[#0a5f78] text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call: 7799111273
              </Button>
            </a>
            <a href="https://www.instagram.com/rainbowbeachresorts" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
              >
                Follow on Instagram <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
