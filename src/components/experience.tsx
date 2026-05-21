import { ScrollReveal } from "./scroll-reveal"

export function Experience() {
  return (
    <section id="experience">
      <div className="sm:py-20 py-12 container px-4 sm:px-10 mx-auto">
        <div className="text-center space-y-4 pb-10 mx-auto">
          <ScrollReveal>
            <h2 className="text-sm text-primary text-balance font-mono font-semibold tracking-wider uppercase">
              Experience
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h3 className="mx-0 mt-4 max-w-lg text-5xl text-balance font-bold sm:max-w-none sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tighter text-foreground lowercase">
              an app unlike any other
            </h3>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mx-auto select-none max-w-5xl">
          <ScrollReveal delay={0}>
            <img
              src="/Device-6.png"
              alt="iPhone 1"
              className="w-full h-auto max-w-[300px] mx-auto"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <img
              src="/Device-7.png"
              alt="iPhone 2"
              className="w-full h-auto max-w-[300px] mx-auto"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <img
              src="/Device-8.png"
              alt="iPhone 3"
              className="w-full h-auto max-w-[300px] mx-auto"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
