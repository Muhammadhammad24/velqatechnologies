import { MapPin, Clock, Users, Wifi } from "lucide-react"

const locations = [
  {
    country: "United States",
    role: "Headquarters",
    city: "Sheridan, Wyoming",
    address: "1463 Coffeen Avenue STE 1200\nSheridan, Wyoming 82801\nUnited States",
    features: ["Executive Leadership", "Enterprise Sales", "Strategic Partnerships"],
    image: "/new-york-city-skyline-modern-business-district-sun.jpg",
  },
  {
    country: "Pakistan",
    role: "Operations Center",
    city: "Karachi",
    address: "Business District, Tower A\nKarachi, Pakistan",
    features: ["24/7 Operations", "Technical Support", "Customer Service"],
    image: "/lahore-pakistan-modern-business-district-skyline.jpg",
  },
  {
    country: "Vietnam",
    role: "Service Center",
    city: "Ho Chi Minh City",
    address: "District 1 Business Hub\nHo Chi Minh City, Vietnam",
    features: ["Customer Support", "Technical Services", "Quality Assurance"],
    image: null,
  },
]

export function GlobalPresence() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Global Presence</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">
            Strategic Locations for Optimal Service
          </h2>
          <p className="text-primary-foreground/80">
            Teams across time zones let us provide round-the-clock support while maintaining cost efficiency and
            quality standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {locations.map((location) => (
            <div
              key={location.country}
              className="overflow-hidden rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
            >
              <div className="h-48 overflow-hidden">
                {location.image ? (
                  <img
                    src={location.image}
                    alt={`${location.country} ${location.role.toLowerCase()}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary/30 via-primary-foreground/5 to-transparent">
                    <span className="text-2xl font-bold tracking-wide text-primary-foreground/80">
                      {location.city}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{location.country}</h3>
                    <span className="text-sm text-secondary font-medium">{location.role}</span>
                  </div>
                </div>
                <p className="text-primary-foreground/70 text-sm whitespace-pre-line mb-6">{location.address}</p>
                <ul className="space-y-2">
                  {location.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { icon: Clock, label: "24/7 Coverage" },
            { icon: Users, label: "500+ Professionals" },
            { icon: Wifi, label: "99.9% Uptime" },
            { icon: MapPin, label: "4 Locations" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                <item.icon className="h-5 w-5 text-secondary" />
              </div>
              <span className="text-sm font-medium text-primary-foreground/80">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
