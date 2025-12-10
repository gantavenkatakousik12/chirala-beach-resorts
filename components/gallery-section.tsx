"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  { src: "/resort_images/resort-01.png", alt: "Rainbow Beach Resorts Chirala - Exterior View" },
  { src: "/resort_images/resort-02.png", alt: "Sea View Room at Rainbow Beach Resorts" },
  { src: "/resort_images/resort-03.png", alt: "Beach Facing Suite Chirala Resort" },
  { src: "/resort_images/resort-04.png", alt: "Family Villa at Ramapuram Beach Resort" },
  { src: "/resort_images/resort-05.png", alt: "Swimming Pool at Rainbow Beach Resorts" },
  { src: "/resort_images/resort-06.png", alt: "Private Beach Access Chirala" },
  { src: "/resort_images/resort-07.png", alt: "Beachfront Dining at Rainbow Resorts" },
  { src: "/resort_images/resort-08.png", alt: "Sunset View from Rainbow Beach Resorts Chirala" },
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-20 bg-[#f5f9fc]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Visual Journey</p>
          <h2 className="font-script text-5xl md:text-6xl text-[#0c7d9c] mb-4">Photo Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the stunning beauty of Rainbow Beach Resorts, Chirala - from pristine beaches to luxurious accommodations at Ramapuram Beach.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl cursor-pointer group aspect-square"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-white font-medium text-sm text-center px-3">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-4xl max-h-[80vh] w-full h-full">
            <Image src={selectedImage || "/placeholder.svg"} alt="Rainbow Beach Resorts Chirala Gallery" fill className="object-contain" />
          </div>
        </div>
      )}
    </section>
  )
}
