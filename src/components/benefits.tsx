import { useRef, useEffect, useState, useCallback } from "react"
import { ScrollReveal } from "./scroll-reveal"
import { ChevronLeft, ChevronRight } from "lucide-react"

const benefits = [
  { title: "Save hours each week with AI-optimized scheduling", image: "/Device-1.png" },
  { title: "Reduce scheduling conflicts and double-bookings", image: "/Device-2.png" },
  { title: "Improve work-life balance with smart time allocation", image: "/Device-3.png" },
  { title: "Sync across all your calendars in real time", image: "/Device-4.png" },
  { title: "Get smart reminders so nothing slips through", image: "/Device-5.png" },
  { title: "Visualize your week with beautiful analytics", image: "/Device-6.png" },
  { title: "Team scheduling without the back-and-forth", image: "/Device-7.png" },
  { title: "Focus blocks that protect deep work time", image: "/Device-8.png" },
]

const SCROLL_SPEED = 0.4 // pixels per frame
const PAUSE_AFTER_NAV_MS = 900
const AUTO_ADVANCE_MS = 3500

function CarouselItem({ item }: { item: (typeof benefits)[0] }) {
  return (
    <div className="flex-shrink-0 w-[calc(90%-1rem)] md:w-1/3 lg:w-1/3 xl:w-1/4 select-none px-4">
      <div className="h-[500px] relative rounded-xl overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out object-[0px_10px] hover:object-top"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-muted to-transparent pointer-events-none" />
      </div>
      <div className="mt-4">
        <h3 className="text-balance text-xl tracking-tight font-semibold leading-[1.25] text-left text-foreground/80">
          {item.title}
        </h3>
      </div>
    </div>
  )
}

export function Benefits() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isPausedRef = useRef(false)
  const [isHovered, setIsHovered] = useState(false)

  const smoothScrollByOne = useCallback((direction: "left" | "right") => {
    const el = containerRef.current
    if (!el || el.children.length < 2) return

    // Pause ambient auto-scroll so this smooth animation isn't interrupted
    isPausedRef.current = true
    window.clearTimeout((smoothScrollByOne as any)._timeout)
    ;(smoothScrollByOne as any)._timeout = window.setTimeout(
      () => { isPausedRef.current = false },
      PAUSE_AFTER_NAV_MS
    )

    // Exact step = offset from card N to card N+1 (includes padding/gap)
    const first = el.children[0] as HTMLElement
    const second = el.children[1] as HTMLElement
    const step = second.offsetLeft - first.offsetLeft

    el.scrollBy({ left: direction === "right" ? step : -step, behavior: "smooth" })
  }, [])

  // Auto-advance to next card every 5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      if (!isHovered) smoothScrollByOne("right")
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(id)
  }, [isHovered, smoothScrollByOne])

  // Continuous ambient micro-scroll (infinite loop feel)
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let rafId: number
    const tick = () => {
      if (!isHovered && !isPausedRef.current) {
        el.scrollLeft += SCROLL_SPEED
        const half = el.scrollWidth / 2
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half
        }
      }
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [isHovered])

  return (
    <section id="benefits">
      <div className="sm:py-20 py-12 bg-muted relative overflow-hidden">
        <div className="text-center space-y-4 pb-10 mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-sm text-primary text-balance font-mono font-semibold tracking-wider uppercase">
              Benefits
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h3 className="mx-0 mt-4 max-w-lg text-5xl text-balance font-bold sm:max-w-none sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tighter text-foreground lowercase">
              what you can do with cal ai
            </h3>
          </ScrollReveal>
        </div>

        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-4 pb-4"
        >
          {benefits.map((item, i) => (
            <CarouselItem key={`a-${i}`} item={item} />
          ))}
          {benefits.map((item, i) => (
            <CarouselItem key={`b-${i}`} item={item} />
          ))}
        </div>

        <div className="flex justify-end gap-3 px-6 sm:px-10 pt-2">
          <button
            onClick={() => smoothScrollByOne("left")}
            aria-label="Previous"
            className="w-10 h-10 rounded-full border border-border bg-background text-foreground flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => smoothScrollByOne("right")}
            aria-label="Next"
            className="w-10 h-10 rounded-full border border-border bg-background text-foreground flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
