"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What makes Rainbow Beach Resorts the best resort in Chirala?",
    answer:
      "Rainbow Beach Resorts offers the perfect combination of luxury accommodations, private beach access, swimming pool, multi-cuisine restaurant, and exceptional hospitality at Ramapuram Beach. We're rated as one of the best beach resorts in Chirala and Andhra Pradesh.",
  },
  {
    question: "How do I reach Rainbow Beach Resorts from Hyderabad or Vijayawada?",
    answer:
      "Rainbow Beach Resorts is located at Ramapuram Beach Road, Chirala, Andhra Pradesh. From Hyderabad, it's approximately 6 hours by road via NH65. From Vijayawada, it's about 2.5 hours. The nearest railway station is Chirala Railway Station, just 10 km from the resort.",
  },
  {
    question: "What amenities are included in my stay?",
    answer:
      "All rooms include AC, Wi-Fi, private beach access, swimming pool access, complimentary breakfast, and 24/7 room service. We also offer beachfront dining, event spaces, and activities like beach volleyball and sunrise yoga.",
  },
  {
    question: "Is Rainbow Beach Resorts suitable for families with children?",
    answer:
      "Absolutely! We're one of the best family-friendly resorts in Chirala. Our resort features a safe swimming pool, kids' play area, family rooms, and various beach activities perfect for children of all ages.",
  },
  {
    question: "Do you offer packages for honeymoon couples and corporate events?",
    answer:
      "Yes! We offer special honeymoon packages with romantic room setup, candle-light dinner on the beach, and couple activities. For corporate events, we provide conference facilities, team building activities, and customized packages. Call 7799111273 to book.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Frequently Asked Questions</p>
            <h2 className="font-script text-5xl md:text-6xl text-[#0c7d9c]">FAQ</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Everything you need to know about staying at Rainbow Beach Resorts, Chirala
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left bg-[#f5f9fc] hover:bg-secondary transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-medium text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0c7d9c] flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="p-5 bg-white">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
