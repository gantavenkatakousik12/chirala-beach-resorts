import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Wifi, Car, Coffee, MapPin, Waves, Wind } from "lucide-react"

const accommodations = [
  {
    name: "Sea View Deluxe Room",
    type: "Premium Room",
    image: "/resort_images/resort-02.png",
    rating: 4.9,
    reviews: 128,
    price: "₹3,500",
    amenities: ["wifi", "ac", "breakfast"],
  },
  {
    name: "Beach Facing Suite",
    type: "Luxury Suite",
    image: "/resort_images/resort-03.png",
    rating: 4.8,
    reviews: 95,
    price: "₹5,500",
    amenities: ["wifi", "ac", "beach"],
  },
  {
    name: "Family Beach Villa",
    type: "Family Room",
    image: "/resort_images/resort-04.png",
    rating: 4.9,
    reviews: 67,
    price: "₹7,500",
    amenities: ["wifi", "ac", "breakfast", "beach"],
  },
]

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-4 h-4" />,
  ac: <Wind className="w-4 h-4" />,
  breakfast: <Coffee className="w-4 h-4" />,
  beach: <Waves className="w-4 h-4" />,
}

export default function AccommodationsSection() {
  return (
    <section id="accommodations" className="py-20 bg-[#f5f9fc]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Luxury Accommodations</p>
          <h2 className="font-script text-5xl md:text-6xl text-[#0c7d9c] mb-4">Where to Stay</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the finest beach resort accommodations in Chirala. Our sea-facing rooms and suites offer breathtaking views of Ramapuram Beach with modern amenities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {accommodations.map((place) => (
            <div key={place.name} className="bg-white rounded-xl overflow-hidden shadow-sm group">
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={place.image || "/placeholder.svg"}
                  alt={`${place.name} - Beach Resort Room in Chirala`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                  {place.type}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-lg">{place.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{place.rating}</span>
                    <span className="text-xs text-muted-foreground">({place.reviews})</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>Ramapuram Beach, Chirala</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  {place.amenities.map((amenity) => (
                    <span key={amenity} className="text-muted-foreground" title={amenity}>
                      {amenityIcons[amenity]}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-semibold text-foreground">{place.price}</span>
                    <span className="text-sm text-muted-foreground">/night</span>
                  </div>
                  <a href="tel:7799111273">
                    <Button size="sm" className="bg-[#0c7d9c] hover:bg-[#0a5f78] text-white">
                      Book Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="tel:7799111274">
            <Button
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background bg-transparent"
            >
              Call for Special Packages
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
