import { ScrollReveal } from "./scroll-reveal"

const highlights = [
  {
    title: "AI-Powered Scheduling",
    description:
      "Intelligent scheduling that learns your preferences and optimizes your time.",
    image: "/Device-2.png",
    reverse: false,
  },
  {
    title: "Smart Time Blocking",
    description:
      "Automatically block time for focused work and personal activities.",
    image: "/Device-3.png",
    reverse: true,
  },
  {
    title: "Predictive Event Planning",
    description:
      "AI suggests optimal times for meetings and events based on your habits.",
    image: "/Device-4.png",
    reverse: false,
  },
]

export function FeatureHighlights() {
  return (
    <section id="feature-highlight">
      <div className="sm:py-20 py-12 container px-6 sm:px-10 mx-auto max-w-6xl">
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

        <div className="space-y-20 sm:space-y-28">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`flex flex-col items-center justify-between pb-10 transition-all duration-500 ease-out lg:flex-row ${
                item.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text side — scroll animated */}
              <ScrollReveal
                className={`w-full lg:w-1/2 mb-10 lg:mb-0 ${
                  item.reverse ? "lg:pl-8" : "lg:pr-8"
                }`}
                direction={item.reverse ? "right" : "left"}
                delay={0.1}
              >
                <div className="flex flex-col gap-4 max-w-sm text-center lg:text-left mx-auto">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                    {item.title}
                  </h3>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <div>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center whitespace-nowrap font-medium h-11 px-8 text-white rounded-full bg-primary hover:bg-primary/90 transition-colors text-lg mx-auto lg:mx-0"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Image side — static, no scroll animation */}
              <div className="w-full lg:w-1/2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full max-w-[300px] mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
