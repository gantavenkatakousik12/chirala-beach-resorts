import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function MapSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Find Us</p>
          <h2 className="font-script text-5xl md:text-6xl text-[#0c7d9c] mb-4">Location & Directions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Rainbow Beach Resorts is located on the scenic Ramapuram Beach Road in Chirala, Andhra Pradesh - easily accessible from major cities like Hyderabad, Vijayawada, and Chennai.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.123456789!2d80.385055!3d15.779845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2715f8b5c1d4c003!2sRainbow%20Beach%20Resorts!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rainbow Beach Resorts Chirala Location Map"
              className="w-full"
            />
          </div>

          <div className="bg-[#f5f9fc] rounded-xl p-8">
            <h3 className="font-serif text-xl mb-6">Resort Information</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0c7d9c] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Address</p>
                  <p className="text-muted-foreground text-sm">
                    Ramapuram Beach Road
                    <br />
                    Kotha Peta Rural
                    <br />
                    Chirala, Andhra Pradesh 523157
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0c7d9c] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a href="tel:7799111273" className="text-muted-foreground text-sm hover:text-[#0c7d9c] block">
                    +91 7799111273
                  </a>
                  <a href="tel:7799111274" className="text-muted-foreground text-sm hover:text-[#0c7d9c]">
                    +91 7799111274
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0c7d9c] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href="mailto:rainbowbeachresorts@gmail.com"
                    className="text-muted-foreground text-sm hover:text-[#0c7d9c]"
                  >
                    rainbowbeachresorts@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0c7d9c] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Check-in / Check-out</p>
                  <p className="text-muted-foreground text-sm">
                    Check-in: 12:00 PM
                    <br />
                    Check-out: 11:00 AM
                    <br />
                    Front Desk: 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
