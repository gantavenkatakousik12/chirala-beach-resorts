"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const exploreItems = [
  {
    id: 1,
    title: "Private Beach Access",
    description: "Enjoy exclusive access to the pristine shores of Ramapuram Beach, one of the cleanest beaches in Andhra Pradesh.",
    image: "/resort_images/resort-05.png",
    cta: "Explore Beach",
  },
  {
    id: 2,
    title: "Luxury Accommodations",
    description: "Sea-facing rooms and suites with modern amenities, stunning views, and world-class comfort.",
    image: "/resort_images/resort-03.png",
    cta: "View Rooms",
  },
  {
    id: 3,
    title: "Beachfront Dining",
    description: "Savor authentic coastal cuisine and multi-cuisine delicacies at our restaurant with panoramic sea views.",
    image: "/resort_images/resort-07.png",
    cta: "See Menu",
  },
]

export default function ExploreSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % exploreItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + exploreItems.length) % exploreItems.length)
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-muted-foreground text-xs md:text-sm uppercase tracking-[0.2em] mb-4">
            Your Beach Paradise Awaits
          </p>
          <h2 className="font-script text-5xl md:text-6xl lg:text-7xl text-[#0c7d9c] mb-6">Explore Rainbow Beach Resorts</h2>
          <p className="text-foreground text-lg md:text-xl lg:text-2xl font-serif max-w-2xl mx-auto">
            The perfect beach getaway in Chirala, Andhra Pradesh
          </p>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Rainbow Beach Resorts offers an unparalleled coastal experience at Ramapuram Beach, Chirala. Whether you&apos;re
            seeking a romantic honeymoon getaway, a fun-filled family vacation, or a peaceful corporate retreat, our resort
            provides world-class amenities including private beach access, swimming pool, sea-facing rooms, and authentic
            coastal cuisine. Discover why we&apos;re rated among the best beach resorts in Andhra Pradesh.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Background Image Strip */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
              style={{
                backgroundImage: `url('${exploreItems[currentSlide].image}')`,
              }}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Carousel Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-lg mx-auto px-4">
              {/* Card */}
              <div className="bg-white p-6 md:p-8 text-center shadow-xl">
                <h3 className="text-xl md:text-2xl font-serif text-foreground mb-3">
                  {exploreItems[currentSlide].title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">{exploreItems[currentSlide].description}</p>
                <a href="tel:7799111273">
                  <Button
                    variant="outline"
                    className="border-foreground text-foreground hover:bg-foreground hover:text-background rounded-none px-6 py-4 text-xs uppercase tracking-wider bg-transparent"
                  >
                    {exploreItems[currentSlide].cta}
                  </Button>
                </a>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>

          {/* Side Images */}
          <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 w-48 h-64">
            <div
              className="w-full h-full bg-cover bg-center shadow-lg"
              style={{
                backgroundImage: `url('/waterfall-cascading-over-rocks-in-green-forest-nor.jpg')`,
              }}
            />
          </div>
          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-48 h-64">
            <div
              className="w-full h-full bg-cover bg-center shadow-lg"
              style={{
                backgroundImage: `url('/couple-hiking-through-mountain-forest-trail-north-.jpg')`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
