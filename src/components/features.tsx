import { Brain, Clock, Calendar, Cloud, Users, Bell } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Scheduling",
    description:
      "Learns your preferences and automatically finds the best times for everything.",
  },
  {
    icon: Clock,
    title: "Smart Time Blocking",
    description:
      "Protects focus time and balances deep work with meetings.",
  },
  {
    icon: Calendar,
    title: "Predictive Planning",
    description:
      "Suggests optimal slots before you even ask, based on your habits.",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description:
      "Your calendar stays in sync across every device, instantly.",
  },
  {
    icon: Users,
    title: "Team Coordination",
    description:
      "Find overlapping availability with teammates in seconds.",
  },
  {
    icon: Bell,
    title: "Contextual Reminders",
    description:
      "Notifications that adapt to your day, not just the clock.",
  },
]

export function Features() {
  return (
    <section id="features">
      <div className="sm:py-28 py-20 max-w-screen-xl mx-auto container px-6 sm:px-10">
        <div className="pb-16">
          <h2 className="text-sm text-primary text-balance font-mono font-semibold tracking-wider uppercase">
            Features
          </h2>
          <h3 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] text-foreground lowercase whitespace-nowrap">
            powerful features
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {features.map((feature) => (
            <div key={feature.title} className="group">
              <feature.icon
                className="h-7 w-7 text-primary mb-5 transition-transform duration-300 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
              />
              <h4 className="text-lg font-semibold tracking-tight text-foreground mb-2">
                {feature.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
