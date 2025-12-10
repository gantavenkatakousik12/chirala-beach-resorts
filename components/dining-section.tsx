import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, Clock, UtensilsCrossed } from "lucide-react"

const restaurants = [
  {
    name: "Beachfront Restaurant",
    cuisine: "Multi-Cuisine",
    image: "/resort_images/resort-07.png",
    rating: 4.8,
    specialty: "Seafood",
    hours: "7AM - 10PM",
    description: "Fresh seafood and coastal delicacies with stunning sea views",
  },
  {
    name: "Andhra Kitchen",
    cuisine: "South Indian",
    image: "/resort_images/resort-02.png",
    rating: 4.7,
    specialty: "Traditional",
    hours: "7AM - 10PM",
    description: "Authentic Andhra cuisine with traditional spices and flavors",
  },
  {
    name: "Poolside Café",
    cuisine: "Snacks & Beverages",
    image: "/resort_images/resort-06.png",
    rating: 4.9,
    specialty: "Refreshments",
    hours: "10AM - 8PM",
    description: "Light snacks, fresh juices, and refreshing beverages by the pool",
  },
  {
    name: "Sunset Lounge",
    cuisine: "Continental",
    image: "/resort_images/resort-08.png",
    rating: 4.8,
    specialty: "Evening Dining",
    hours: "5PM - 11PM",
    description: "Fine dining experience with panoramic sunset views over the Bay of Bengal",
  },
]

export default function DiningSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Culinary Excellence</p>
            <h2 className="font-script text-5xl text-[#0c7d9c] mb-4">Resort Dining</h2>
            <p className="text-muted-foreground mb-6">
              Experience the finest coastal cuisine at Rainbow Beach Resorts. From fresh seafood caught daily to authentic Andhra delicacies, our restaurants offer a gastronomic journey with stunning beach views.
            </p>
            <a href="tel:7799111273">
              <Button className="bg-foreground text-background hover:bg-foreground/90">Reserve Your Table</Button>
            </a>
          </div>

          <div className="lg:w-2/3">
            <div className="grid sm:grid-cols-2 gap-4">
              {restaurants.map((restaurant) => (
                <div
                  key={restaurant.name}
                  className="flex gap-4 bg-[#f5f9fc] rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={restaurant.image || "/placeholder.svg"}
                      alt={`${restaurant.name} - Dining at Rainbow Beach Resorts Chirala`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-medium text-sm truncate">{restaurant.name}</h3>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs">{restaurant.rating}</span>
                      </div>
                    </div>
                    <p className="text-xs text-[#0c7d9c] mb-1">{restaurant.cuisine}</p>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{restaurant.description}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {restaurant.hours}
                      </span>
                      <span className="flex items-center gap-1">
                        <UtensilsCrossed className="w-3 h-3" />
                        {restaurant.specialty}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
