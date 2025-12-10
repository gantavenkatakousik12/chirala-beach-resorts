import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const attractions = [
  {
    title: "Ramapuram Beach",
    description: "One of the most serene and beautiful beaches in Andhra Pradesh, perfect for sunrise walks and water activities.",
    image: "/resort_images/resort-08.png",
  },
  {
    title: "Vodarevu Beach",
    description: "A popular beach destination near Chirala known for its clean shores and peaceful atmosphere, just 15 minutes away.",
    image: "/resort_images/resort-09.png",
  },
  {
    title: "Chirala Beach",
    description: "The main beach of Chirala town with local attractions, seafood stalls, and vibrant coastal culture.",
    image: "/resort_images/resort-10.png",
  },
  {
    title: "Suryalanka Beach",
    description: "A scenic beach resort area known for its golden sands and excellent swimming conditions, perfect for day trips.",
    image: "/resort_images/resort-11.png",
  },
]

export default function AttractionsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Nearby Attractions</p>
          <h2 className="font-script text-5xl md:text-6xl text-[#0c7d9c] mb-4">Explore Chirala</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the beautiful beaches and attractions near Rainbow Beach Resorts. From pristine shores to local culture, experience the best of coastal Andhra Pradesh.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {attractions.map((attraction, index) => (
            <div
              key={attraction.title}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
            >
              <Image
                src={attraction.image || "/placeholder.svg"}
                alt={`${attraction.title} - Near Rainbow Beach Resorts Chirala`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-serif text-2xl mb-2">{attraction.title}</h3>
                <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {attraction.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-foreground"
                >
                  Explore <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
