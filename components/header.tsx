"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "About Us", href: "#about" },
  { label: "Accommodations", href: "#accommodations" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-white text-xl md:text-2xl font-serif tracking-wide">
                <span className="block text-sm md:text-base font-light tracking-widest">Rainbow</span>
                <span className="block text-2xl md:text-3xl font-semibold -mt-1">Beach Resorts</span>
              </span>
              <svg className="w-6 h-8 md:w-8 md:h-10 ml-2 text-[#0c7d9c]" viewBox="0 0 24 32" fill="currentColor">
                <path d="M12 2C6 2 2 8 2 14c0 4 2 8 5 12 1.5 2 3 4 5 6 2-2 3.5-4 5-6 3-4 5-8 5-12 0-6-4-12-10-12zM12 20c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
              </svg>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:7799111273">
              <Button className="bg-[#0c7d9c] hover:bg-[#0a5f78] text-white rounded-sm px-6 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/90 backdrop-blur-sm rounded-lg p-4 mb-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white/90 hover:text-white text-sm font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a href="tel:7799111273" className="w-full">
                <Button className="bg-[#0c7d9c] hover:bg-[#0a5f78] text-white rounded-sm w-full flex items-center gap-2 justify-center">
                  <Phone className="w-4 h-4" />
                  Call: 7799111273
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
