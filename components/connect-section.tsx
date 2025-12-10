"use client"

import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const instagramImages = [
  {
    id: 1,
    image: "/resort_images/resort-01.png",
    alt: "Rainbow Beach Resorts Chirala - Main View",
  },
  {
    id: 2,
    image: "/resort_images/resort-05.png",
    alt: "Swimming Pool at Rainbow Beach Resorts",
  },
  {
    id: 3,
    image: "/resort_images/resort-08.png",
    alt: "Sunset at Ramapuram Beach",
  },
  {
    id: 4,
    image: "/resort_images/resort-07.png",
    alt: "Beachfront Dining Experience",
  },
]

export default function ConnectSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground mb-2">Connect With Us</h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Share your beach memories with us on Instagram{" "}
              <a href="https://www.instagram.com/rainbowbeachresorts" target="_blank" rel="noopener noreferrer" className="text-[#0c7d9c] hover:underline">
                @rainbowbeachresorts
              </a>
            </p>
          </div>
          <a href="https://www.instagram.com/rainbowbeachresorts" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background rounded-none px-6 py-4 text-xs uppercase tracking-wider w-fit bg-transparent"
            >
              Follow @rainbowbeachresorts
            </Button>
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {instagramImages.map((item) => (
            <a
              key={item.id}
              href="https://www.instagram.com/rainbowbeachresorts"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group aspect-square overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
