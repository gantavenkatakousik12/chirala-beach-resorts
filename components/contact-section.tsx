"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 bg-[#f5f9fc]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Get In Touch</p>
            <h2 className="font-script text-5xl md:text-6xl text-[#0c7d9c] mb-4">Contact Us</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ready to book your perfect beach getaway at Rainbow Beach Resorts? Contact us for reservations, special packages, or any inquiries about our Chirala resort.
            </p>
          </div>

          {/* Quick Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="tel:7799111273" className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0c7d9c] rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium mb-1">Call Us</h3>
              <p className="text-[#0c7d9c] font-semibold">7799111273</p>
              <p className="text-muted-foreground text-sm">7799111274</p>
            </a>
            <a href="mailto:rainbowbeachresorts@gmail.com" className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0c7d9c] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium mb-1">Email Us</h3>
              <p className="text-[#0c7d9c] text-sm">rainbowbeachresorts@gmail.com</p>
            </a>
            <a href="https://www.instagram.com/rainbowbeachresorts" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#0c7d9c] rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium mb-1">Follow Us</h3>
              <p className="text-[#0c7d9c] text-sm">@rainbowbeachresorts</p>
            </a>
          </div>

          {submitted ? (
            <div className="bg-white rounded-xl p-12 text-center shadow-sm">
              <div className="w-16 h-16 bg-[#0c7d9c] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl mb-4">Message Sent!</h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. Our team will get back to you within 24-48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 md:p-12 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border-border focus:border-[#0c7d9c] focus:ring-[#0c7d9c]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border-border focus:border-[#0c7d9c] focus:ring-[#0c7d9c]"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Booking Inquiry / Special Package / Event Inquiry"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="border-border focus:border-[#0c7d9c] focus:ring-[#0c7d9c]"
                />
              </div>

              <div className="space-y-2 mb-8">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your preferred dates, number of guests, room preferences..."
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="border-border focus:border-[#0c7d9c] focus:ring-[#0c7d9c] resize-none"
                />
              </div>

              <div className="flex justify-center">
                <Button type="submit" size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-8">
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
