import { Check, ChevronRight } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const plans = [
  {
    name: "Basic",
    price: "$0",
    period: "/month",
    description: "Perfect for individual users",
    features: [
      "AI-powered scheduling (up to 10 events/month)",
      "Basic time blocking",
      "Cloud sync for 1 device",
      "Email reminders",
    ],
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "Ideal for professionals and small teams",
    features: [
      "Unlimited AI-powered scheduling",
      "Advanced time blocking and analysis",
      "Cloud sync for unlimited devices",
      "Smart notifications across all devices",
      "Team collaboration features",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing">
      <div className="sm:py-20 py-12 container px-6 sm:px-10 mx-auto max-w-6xl">
        <div className="text-center space-y-4 pb-10 mx-auto">
          <ScrollReveal>
            <h2 className="text-sm text-primary text-balance font-mono font-semibold tracking-wider uppercase">
              Pricing
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h3 className="mx-0 mt-4 max-w-lg text-5xl text-balance font-bold sm:max-w-none sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tighter text-foreground lowercase">
              simple pricing
            </h3>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto py-10">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.15}>
              <div className="bg-muted/60 p-6 rounded-3xl grid grid-rows-[auto_auto_1fr_auto] h-full">
                <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
                <div className="text-4xl font-bold text-primary mb-2">
                  {plan.price}
                  <span className="text-sm font-normal text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <Check className="w-5 h-5 mr-2 text-primary shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium h-9 px-3 rounded-full text-white bg-primary hover:bg-primary/90 transition-colors">
                  Get Started
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
