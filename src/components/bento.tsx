import { ScrollReveal } from "./scroll-reveal"

const bentoItems = [
  {
    title: "AI-Powered Scheduling",
    description:
      "Our app uses advanced AI to optimize your calendar, suggesting the best times for meetings and tasks based on your preferences and habits.",
    image: "/Device-1.png",
    alt: "AI scheduling illustration",
    span: "md:col-span-2",
  },
  {
    title: "Smart Time Blocking",
    description:
      "Automatically block out time for focused work, breaks, and personal activities to maintain a balanced and productive schedule.",
    image: "/Device-2.png",
    alt: "Time blocking illustration",
    span: "",
  },
  {
    title: "Intelligent Reminders",
    description:
      "Receive context-aware notifications that adapt to your schedule, ensuring you never miss important events or deadlines.",
    image: "/Device-3.png",
    alt: "Smart reminders illustration",
    span: "",
  },
  {
    title: "Team Collaboration",
    description:
      "Effortlessly coordinate schedules with team members and clients, finding optimal meeting times across different time zones.",
    image: "/Device-4.png",
    alt: "Team collaboration illustration",
    span: "md:col-span-2",
  },
]

export function Bento() {
  return (
    <section id="bento">
      <div className="sm:py-20 py-12 mx-auto max-w-screen-md px-6 sm:px-10">
        <div className="text-center space-y-4 pb-10 mx-auto">
          <ScrollReveal>
            <h2 className="text-sm text-primary text-balance font-mono font-semibold tracking-wider uppercase">
              Benefits
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h3 className="mx-0 mt-4 max-w-lg text-5xl text-balance font-bold sm:max-w-none sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tighter text-foreground lowercase">
              it does a lot of things
            </h3>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bentoItems.map((item, i) => (
            <ScrollReveal
              key={item.title}
              delay={i * 0.1}
              className={`bg-muted p-4 sm:p-6 !pb-0 rounded-3xl grid grid-rows-1 ${item.span}`}
            >
              <div className="flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-foreground mb-4">
                  {item.description}
                </p>
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-64 sm:h-96 rounded-xl object-cover object-top"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
