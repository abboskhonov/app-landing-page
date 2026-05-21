import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const faqs = [
  {
    question: "How does AI improve my scheduling?",
    answer:
      "Our AI analyzes your past scheduling patterns, preferences, and habits to suggest optimal meeting times, block focus time, and minimize conflicts automatically.",
  },
  {
    question: "Can I integrate Cal AI with other apps?",
    answer:
      "Yes! Cal AI integrates with Google Calendar, Outlook, Slack, Zoom, and many other popular productivity tools to keep everything in sync.",
  },
  {
    question: "How does the team collaboration feature work?",
    answer:
      "Team members can share availability, suggest meeting times that work for everyone, and coordinate across different time zones with intelligent scheduling.",
  },
  {
    question: "Is my data secure with Cal AI?",
    answer:
      "Absolutely. We use end-to-end encryption, comply with GDPR and SOC 2 standards, and never sell your data to third parties.",
  },
  {
    question: "Can I use Cal AI offline?",
    answer:
      "Yes, the mobile app supports offline mode. Your changes sync automatically once you're back online.",
  },
]

export function FAQ() {
  return (
    <section id="faq">
      <div className="sm:py-20 py-12 container px-6 sm:px-10 mx-auto max-w-6xl">
        <div className="text-center space-y-4 pb-10 mx-auto">
          <ScrollReveal>
            <h2 className="text-sm text-primary text-balance font-mono font-semibold tracking-wider uppercase">
              FAQ
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h3 className="mx-0 mt-4 max-w-lg text-5xl text-balance font-bold sm:max-w-none sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tighter text-foreground lowercase">
              Frequently Asked Questions
            </h3>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2} className="w-full max-w-2xl mx-auto py-10">
          <Accordion.Root type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="border-b"
              >
                <Accordion.Trigger className="flex flex-1 items-center justify-between py-4 font-medium transition-all text-left hover:no-underline w-full group">
                  {faq.question}
                  <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="pb-4 text-muted-foreground">{faq.answer}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </ScrollReveal>
      </div>
    </section>
  )
}
