import { Calendar, MapPin, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const events = [
  {
    title: "Weekend Beach Getaway Package",
    date: "Available Year Round",
    time: "Check-in: 12:00 PM",
    location: "Rainbow Beach Resorts",
    description: "2 nights stay with breakfast, beach activities, and pool access. Perfect for families and couples.",
    category: "Package",
  },
  {
    title: "Corporate Retreat Package",
    date: "Weekdays Available",
    time: "Flexible Timing",
    location: "Conference Hall & Beach",
    description: "Team building activities, meeting facilities, accommodation, and beachfront dining for corporate groups.",
    category: "Corporate",
  },
  {
    title: "Honeymoon Special Package",
    date: "Available Year Round",
    time: "Romantic Setup",
    location: "Sea-Facing Suite",
    description: "Romantic room decoration, candle-light dinner on the beach, and special couple activities.",
    category: "Romance",
  },
  {
    title: "Beach Wedding & Events",
    date: "Book in Advance",
    time: "Customizable",
    location: "Beach & Resort Grounds",
    description: "Host your dream beach wedding or special celebration at our scenic venue with complete catering services.",
    category: "Events",
  },
]

export default function EventsSection() {
  return (
    <section className="py-20 bg-[#f5f9fc]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Special Offers</p>
            <h2 className="font-script text-5xl md:text-6xl text-[#0c7d9c]">Packages & Events</h2>
          </div>
          <a href="tel:7799111273">
            <Button className="mt-4 lg:mt-0 bg-foreground text-background hover:bg-foreground/90 w-fit">
              Book Now: 7799111273
            </Button>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-medium uppercase tracking-wider text-[#0c7d9c] bg-secondary px-3 py-1 rounded-full">
                  {event.category}
                </span>
              </div>
              <h3 className="font-serif text-xl mb-3 group-hover:text-[#0c7d9c] transition-colors">{event.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#0c7d9c]" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0c7d9c]" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0c7d9c]" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
