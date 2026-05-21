import { useState, useEffect } from "react"
import { Calendar, Github, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/60 backdrop-blur">
        <div className="flex items-center container mx-auto px-4 py-2 relative">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 flex-shrink-0">
            <Calendar className="h-6 w-6" />
            <span className="font-bold text-xl">Cal AI</span>
          </a>

          {/* Center nav links — desktop */}
          <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side: CTA (desktop) + hamburger (mobile) */}
          <div className="ml-auto flex items-center gap-3">
            <a
              href="https://github.com/abboskhonov/app-landing-page"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="hidden lg:inline-flex items-center justify-center whitespace-nowrap text-sm font-medium px-4 py-2 h-8 text-white rounded-full bg-primary hover:bg-primary/90 transition-colors"
            >
              Get Started
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative p-2 -mr-2"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <hr className="absolute w-full bottom-0 opacity-50" />
      </header>

      {/* Full-screen mobile overlay */}
      <div
        className={
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-lg lg:hidden transition-all duration-300 ease-out " +
          (mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none")
        }
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={
                "text-3xl font-semibold text-foreground/80 hover:text-foreground transition-all duration-300 " +
                (mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")
              }
              style={{ transitionDelay: `${i * 60 + 120}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/abboskhonov/app-landing-page"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className={
              "inline-flex items-center justify-center whitespace-nowrap text-base font-medium text-foreground/80 hover:text-foreground transition-all duration-300 " +
              (mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")
            }
            style={{ transitionDelay: `${navLinks.length * 60 + 120}ms` }}
          >
            <Github className="h-6 w-6 mr-2" />
            GitHub
          </a>
          <a
            href="#"
            onClick={() => setMobileOpen(false)}
            className={
              "inline-flex items-center justify-center whitespace-nowrap text-base font-medium px-8 py-3 text-white rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 " +
              (mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")
            }
            style={{ transitionDelay: `${(navLinks.length + 1) * 60 + 120}ms` }}
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  )
}
