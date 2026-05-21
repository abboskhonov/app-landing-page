import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  })

  // Left phone
  const y1 = useTransform(scrollYProgress, [0, 1], [120, 0])
  const op1 = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  // Center phone — delayed start
  const y2 = useTransform(scrollYProgress, [0.15, 1], [120, 0])
  const op2 = useTransform(scrollYProgress, [0.15, 0.65], [0, 1])

  // Right phone — most delayed
  const y3 = useTransform(scrollYProgress, [0.3, 1], [120, 0])
  const op3 = useTransform(scrollYProgress, [0.3, 0.8], [0, 1])

  return (
    <section id="experience" ref={sectionRef}>
      <div className="sm:py-20 py-12 container px-4 sm:px-10 mx-auto">
        <div className="text-center space-y-4 pb-10 mx-auto">
          <h2 className="text-sm text-primary text-balance font-mono font-semibold tracking-wider uppercase">
            Experience
          </h2>
          <h3 className="mx-0 mt-4 max-w-lg text-5xl text-balance font-bold sm:max-w-none sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tighter text-foreground lowercase">
            an app unlike any other
          </h3>
        </div>

        {/* Horizontal row — same size, staggered scroll-driven animation */}
        <div className="flex items-center justify-center gap-14 sm:gap-24 max-w-5xl mx-auto">
          <motion.div
            className="flex justify-center"
            style={{ y: y1, opacity: op1 }}
          >
            <img
              src="/Device-6.png"
              alt="iPhone 1"
              className="w-full h-auto max-w-[260px] sm:max-w-[300px]"
            />
          </motion.div>

          <motion.div
            className="flex justify-center"
            style={{ y: y2, opacity: op2 }}
          >
            <img
              src="/Device-7.png"
              alt="iPhone 2"
              className="w-full h-auto max-w-[260px] sm:max-w-[300px]"
            />
          </motion.div>

          <motion.div
            className="flex justify-center"
            style={{ y: y3, opacity: op3 }}
          >
            <img
              src="/Device-8.png"
              alt="iPhone 3"
              className="w-full h-auto max-w-[260px] sm:max-w-[300px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
