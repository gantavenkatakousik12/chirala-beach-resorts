import Link from "next/link"
import { Instagram, Phone, Mail } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Accommodations", href: "#accommodations" },
  { label: "Gallery", href: "#gallery" },
]

const amenities = [
  { label: "Private Beach", href: "#amenities" },
  { label: "Swimming Pool", href: "#amenities" },
  { label: "Restaurant", href: "#amenities" },
  { label: "Event Spaces", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="bg-[#f5f9fc] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center">
                <span className="text-foreground text-xl font-serif tracking-wide">
                  <span className="block text-sm font-light tracking-widest">Rainbow</span>
                  <span className="block text-2xl font-semibold -mt-1">Beach Resorts</span>
                </span>
                <svg className="w-6 h-8 ml-2 text-[#0c7d9c]" viewBox="0 0 24 32" fill="currentColor">
                  <path d="M12 2C6 2 2 8 2 14c0 4 2 8 5 12 1.5 2 3 4 5 6 2-2 3.5-4 5-6 3-4 5-8 5-12 0-6-4-12-10-12zM12 20c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
                </svg>
              </div>
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Rainbow Beach Resorts - The premier beach resort in Chirala, Andhra Pradesh. Experience luxury accommodations, private beach access, and world-class amenities at Ramapuram Beach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-medium text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 mt-4">
              {amenities.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-foreground font-medium text-sm mb-4">Address</h4>
            <address className="text-muted-foreground text-sm not-italic leading-relaxed">
              Ramapuram Beach Road
              <br />
              Kotha Peta Rural
              <br />
              Chirala, Andhra Pradesh 523157
              <br />
              India
            </address>

            <h4 className="text-foreground font-medium text-sm mt-6 mb-4">Connect</h4>
            <div className="space-y-1">
              <p className="text-muted-foreground text-sm">
                <Phone className="w-3 h-3 inline mr-1" />
                <a href="tel:7799111273" className="hover:text-foreground transition-colors">
                  +91 7799111273
                </a>
              </p>
              <p className="text-muted-foreground text-sm">
                <Phone className="w-3 h-3 inline mr-1" />
                <a href="tel:7799111274" className="hover:text-foreground transition-colors">
                  +91 7799111274
                </a>
              </p>
              <p className="text-muted-foreground text-sm">
                <Mail className="w-3 h-3 inline mr-1" />
                <a href="mailto:rainbowbeachresorts@gmail.com" className="hover:text-foreground transition-colors">
                  rainbowbeachresorts@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-foreground font-medium text-sm mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/rainbowbeachresorts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0c7d9c] flex items-center justify-center hover:bg-[#0a5f78] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>

            <h4 className="text-foreground font-medium text-sm mt-6 mb-4">SEO Keywords</h4>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Chirala resorts, resorts in chirala, chirala beach resort, ramapuram beach resorts, best resorts in chirala, beach resorts in chirala, chirala resorts with private beach, chirala resorts with swimming pool
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted-foreground">
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-foreground transition-colors text-[#0c7d9c]">
                Terms & Conditions
              </Link>
              <span>|</span>
              <Link href="/refund" className="hover:text-foreground transition-colors">
                Refund Policy
              </Link>
            </div>
            <p>
              Copyright © 2024 Rainbow Beach Resorts, Chirala, Andhra Pradesh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
