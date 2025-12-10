"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-20 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-background/60 mb-2">Stay Connected</p>
          <h2 className="font-script text-5xl md:text-6xl text-[#05b2dc] mb-4">Newsletter</h2>
          <p className="text-background/80 mb-8">
            Subscribe to receive exclusive offers, seasonal packages, and updates from Rainbow Beach Resorts, Chirala.
          </p>

          {submitted ? (
            <div className="bg-[#0c7d9c] text-white py-4 px-6 rounded-lg">
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-sm text-white/80">You&apos;ll receive updates about our beach resort offers and packages.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-background text-foreground border-0"
              />
              <Button type="submit" className="bg-[#0c7d9c] hover:bg-[#0a5f78] text-white">
                Subscribe <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
