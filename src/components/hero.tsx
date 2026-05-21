import { Calendar } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // As user scrolls: arc → flat line. 0 = arc, 0.3 = flat.
  const mbOuter = useTransform(scrollYProgress, [0, 0.3], [0, 0])
  const mbInner = useTransform(scrollYProgress, [0, 0.3], [24, 0])
  const mbCenter = useTransform(scrollYProgress, [0, 0.3], [48, 0])

  return (
    <section id="hero" ref={sectionRef} className="relative overflow-hidden min-h-[110vh]">
      <div className="pt-20 sm:pt-28 md:pt-36 pb-0 w-full">
        <main className="mx-auto text-center relative px-4">
          {/* App Icon */}
          <motion.div
            className="mb-5 relative z-20"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            <div className="bg-primary text-white p-3 h-[72px] w-[72px] sm:h-20 sm:w-20 flex items-center justify-center rounded-[22px] sm:rounded-3xl mx-auto shadow-lg shadow-primary/20">
              <Calendar className="h-9 w-9 sm:h-10 sm:w-10" strokeWidth={1.6} />
            </div>
            <div className="mt-2 text-base sm:text-lg font-medium text-foreground">
              Cal AI
            </div>
          </motion.div>

          {/* Headline */}
          <div className="max-w-4xl mx-auto px-2">
            <motion.h1
              className="text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] lg:text-[3.2rem] font-bold mb-4 tracking-tighter leading-[1.15]"
              initial="hidden"
              animate="visible"
              custom={0.1}
              variants={fadeUp}
            >
              Schedule smarter, not harder.
            </motion.h1>

            <motion.p
              className="max-w-xl mx-auto text-base sm:text-lg mb-8 font-medium text-balance text-muted-foreground leading-relaxed"
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={fadeUp}
            >
              Cal AI auto-schedules your meetings, finds the best times, and keeps
              your calendar in sync — so you can focus on what actually matters.
            </motion.p>

            <motion.div
              className="flex justify-center mb-10 sm:mb-14"
              initial="hidden"
              animate="visible"
              custom={0.3}
              variants={fadeUp}
            >
              <img
                src="/download-black.svg"
                alt="Download on the App Store"
                className="w-36 sm:w-40 flex-shrink-0 dark:hidden block"
              />
              <img
                src="/download-white.svg"
                alt="Download on the App Store"
                className="w-36 sm:w-40 flex-shrink-0 hidden dark:block"
              />
            </motion.div>
          </div>

          {/* Phone Mockups — scroll-linked arc to flat line */}
          <motion.div
            className="flex items-end justify-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          >
            <motion.img
              src="/Device-1.png"
              alt="iPhone"
              className="w-[20%] sm:w-48 md:w-56 lg:w-64 flex-shrink-0"
              style={{ marginBottom: mbOuter }}
            />
            <motion.img
              src="/Device-2.png"
              alt="iPhone"
              className="w-[20%] sm:w-48 md:w-56 lg:w-64 flex-shrink-0"
              style={{ marginBottom: mbInner }}
            />
            <motion.img
              src="/Device-3.png"
              alt="iPhone"
              className="w-[20%] sm:w-48 md:w-56 lg:w-64 flex-shrink-0"
              style={{ marginBottom: mbCenter }}
            />
            <motion.img
              src="/Device-4.png"
              alt="iPhone"
              className="w-[20%] sm:w-48 md:w-56 lg:w-64 flex-shrink-0"
              style={{ marginBottom: mbInner }}
            />
            <motion.img
              src="/Device-5.png"
              alt="iPhone"
              className="w-[20%] sm:w-48 md:w-56 lg:w-64 flex-shrink-0"
              style={{ marginBottom: mbOuter }}
            />
          </motion.div>
        </main>
      </div>
    </section>
  )
}
