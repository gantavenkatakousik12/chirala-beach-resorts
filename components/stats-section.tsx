const stats = [
  { value: "50+", label: "Luxury Rooms & Suites" },
  { value: "1km", label: "Private Beach Access" },
  { value: "500+", label: "Happy Guests Monthly" },
  { value: "4.8★", label: "Guest Rating" },
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0a4d68] via-[#0c7d9c] to-[#05b2dc]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <p className="text-white/80 text-sm uppercase tracking-wider">Best Beach Resort in Chirala, Andhra Pradesh</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-serif text-white mb-2">{stat.value}</p>
              <p className="text-white/80 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
