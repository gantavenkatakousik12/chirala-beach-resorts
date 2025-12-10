"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Hyderabad, Telangana",
    image: "/people_images/person-01.jpg",
    rating: 5,
    text: "Rainbow Beach Resorts exceeded all our expectations! The private beach access and sea-facing rooms made our family vacation unforgettable. Best resort in Chirala without doubt!",
  },
  {
    name: "Rajesh Kumar",
    location: "Vijayawada, AP",
    image: "/people_images/person-02.jpg",
    rating: 5,
    text: "We hosted our company retreat at Rainbow Beach Resorts and it was perfect. The conference facilities, beachfront dining, and accommodation were all top-notch. Highly recommend for corporate events.",
  },
  {
    name: "Lakshmi Devi",
    location: "Guntur, AP",
    image: "/people_images/person-03.jpg",
    rating: 5,
    text: "Perfect honeymoon destination! The sunset views from our room at Ramapuram Beach were magical. The staff went above and beyond to make our stay special. Best beach resort in Andhra Pradesh!",
  },
  {
    name: "Venkat Rao",
    location: "Chennai, Tamil Nadu",
    image: "/people_images/person-04.jpg",
    rating: 5,
    text: "We've stayed at many Chirala resorts but Rainbow Beach Resorts stands out. The swimming pool, beach activities, and authentic coastal cuisine made it a memorable weekend getaway.",
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/50 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/30 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Guest Reviews</p>
          <h2 className="font-script text-5xl md:text-6xl text-[#0c7d9c]">What Our Guests Say</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#f5f9fc] rounded-2xl p-8 md:p-12 relative">
            <svg className="absolute top-6 left-6 w-12 h-12 text-[#0c7d9c]/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <Image
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-medium text-foreground">{testimonials[current].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[current].location}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full border-[#0c7d9c] text-[#0c7d9c] hover:bg-[#0c7d9c] hover:text-white bg-transparent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-[#0c7d9c] text-[#0c7d9c] hover:bg-[#0c7d9c] hover:text-white bg-transparent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-colors ${index === current ? "bg-[#0c7d9c]" : "bg-muted"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
