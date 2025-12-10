"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const activities = [
  {
    id: "beach",
    label: "Beach Activities",
    title: "Private Beach Access",
    description:
      "Experience the pristine shores of Ramapuram Beach with exclusive private beach access. Enjoy swimming, sunbathing, beach volleyball, and stunning sunrise views on one of the cleanest beaches in Andhra Pradesh.",
    image: "/resort_images/resort-05.png",
  },
  {
    id: "swimming",
    label: "Swimming Pool",
    title: "Luxury Swimming Pool",
    description:
      "Take a refreshing dip in our crystal-clear swimming pool. Perfect for both adults and children, our pool area offers poolside loungers, refreshments, and a relaxing atmosphere away from the beach.",
    image: "/resort_images/resort-06.png",
  },
  {
    id: "dining",
    label: "Coastal Dining",
    title: "Multi-Cuisine Restaurant",
    description:
      "Savor authentic coastal cuisine and multi-cuisine delicacies at our beachfront restaurant. From fresh seafood to traditional Andhra dishes, experience culinary excellence with panoramic sea views.",
    image: "/resort_images/resort-07.png",
  },
]

export default function ActivitiesSection() {
  const [activeTab, setActiveTab] = useState("beach")
  const activeActivity = activities.find((a) => a.id === activeTab)

  return (
    <section id="amenities" className="relative bg-background">
      <div className="grid lg:grid-cols-2">
        {/* Left Side - Tabs & Content */}
        <div className="relative">
          {/* Green accent block */}
          <div className="absolute left-0 top-0 w-16 md:w-24 h-full bg-[#e8f0e8] hidden lg:block" />

          <div className="relative z-10 py-12 md:py-16 lg:py-24 px-4 md:px-8 lg:px-16 lg:pl-32">
            {/* Tabs */}
            <div className="flex flex-col gap-3 mb-8 md:mb-12">
              {activities.map((activity) => (
                <button
                  key={activity.id}
                  onClick={() => setActiveTab(activity.id)}
                  className={cn(
                    "text-left text-sm uppercase tracking-wider font-medium transition-colors",
                    activeTab === activity.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {activity.label}
                </button>
              ))}
            </div>

            {/* Content */}
            {activeActivity && (
              <div className="max-w-md">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground mb-4 md:mb-6">
                  {activeActivity.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                  {activeActivity.description}
                </p>
                <a href="tel:7799111273">
                  <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-none px-6 md:px-8 py-5 md:py-6 text-xs md:text-sm uppercase tracking-wider">
                    Book Now
                  </Button>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative h-[300px] md:h-[400px] lg:h-auto lg:min-h-[500px]">
          {activeActivity && (
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
              style={{ backgroundImage: `url('${activeActivity.image}')` }}
            />
          )}
        </div>
      </div>
    </section>
  )
}
