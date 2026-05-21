import { Brain, Clock, Calendar, Cloud, Users, Bell } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Scheduling",
    description: "Intelligent scheduling that learns your preferences and optimizes your time.",
  },
  {
    icon: Clock,
    title: "Smart Time Blocking",
    description: "Automatically block time for focused work and personal activities.",
  },
  {
    icon: Calendar,
    title: "Predictive Event Planning",
    description: "AI suggests optimal times for meetings and events based on your habits.",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description: "Access your schedule across all devices in real-time.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Easily coordinate schedules with team members and clients.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Contextual notifications that adapt to your schedule and priorities.",
  },
]

export function Features() {
  return (
    <section id="features">
      <div className="sm:py-20 py-12 max-w-screen-lg mx-auto container px-6 sm:px-10">
        <div className="text-center space-y-4 pb-10 mx-auto">
          <ScrollReveal>
            <h2 className="text-sm text-primary text-balance font-mono font-semibold tracking-wider uppercase">
              Features
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h3 className="mx-0 mt-4 max-w-lg text-5xl text-balance font-bold sm:max-w-none sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tighter text-foreground lowercase">
              powerful features
            </h3>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.08}>
              <div className="rounded-lg overflow-hidden bg-card border p-6 flex flex-col items-center text-center h-full">
                <div className="flex flex-col items-center gap-y-4 mb-4">
                  <div className="bg-gradient-to-b from-primary to-primary/80 p-2 rounded-lg text-white">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-semibold text-card-foreground">
                    {feature.title}
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <a className="text-sm text-primary hover:underline mt-auto" href="#">
                  Learn more &gt;
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
