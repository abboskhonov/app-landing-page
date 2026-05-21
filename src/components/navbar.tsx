import { useState, useEffect } from "react"
import { Calendar, Menu, X } from "lucide-react"

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
              <svg className="h-5 w-5" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.975 2.44599 10.5656 2.44599 10.5656C1.78773 10.0969 2.49584 10.1068 2.49584 10.1068C3.22353 10.1628 3.60629 10.8561 3.60629 10.8561C4.254 11.931 5.25407 11.6258 5.72037 11.4397C5.79099 10.9765 5.97048 10.6591 6.17081 10.4794C4.54547 10.2976 2.84947 9.67562 2.84947 6.96242C2.84947 6.18985 3.12347 5.56038 3.60629 5.04105C3.52629 4.86034 3.32663 4.1861 3.68612 3.24908C3.68612 3.24908 4.30299 3.05678 5.6843 3.94017C6.26954 3.77695 6.90474 3.69548 7.53936 3.69204C8.17398 3.69548 8.80918 3.77695 9.39442 3.94017C10.7757 3.05678 11.392 3.24908 11.392 3.24908C11.7515 4.1861 11.5519 4.86034 11.4718 5.04105C11.9546 5.56038 12.2286 6.18985 12.2286 6.96242C12.2286 9.68204 10.5295 10.2959 8.89908 10.4733C9.15067 10.6955 9.37255 11.1319 9.37255 11.8047C9.37255 12.7516 9.36455 13.5184 9.36455 13.7458C9.36455 13.9396 9.49472 14.1656 9.86328 14.0947C12.7442 13.1332 14.75 10.4156 14.75 7.50024C14.75 3.49593 11.5037 0.25 7.49933 0.25Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
              </svg>
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
            <svg className="h-6 w-6 mr-2" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.975 2.44599 10.5656 2.44599 10.5656C1.78773 10.0969 2.49584 10.1068 2.49584 10.1068C3.22353 10.1628 3.60629 10.8561 3.60629 10.8561C4.254 11.931 5.25407 11.6258 5.72037 11.4397C5.79099 10.9765 5.97048 10.6591 6.17081 10.4794C4.54547 10.2976 2.84947 9.67562 2.84947 6.96242C2.84947 6.18985 3.12347 5.56038 3.60629 5.04105C3.52629 4.86034 3.32663 4.1861 3.68612 3.24908C3.68612 3.24908 4.30299 3.05678 5.6843 3.94017C6.26954 3.77695 6.90474 3.69548 7.53936 3.69204C8.17398 3.69548 8.80918 3.77695 9.39442 3.94017C10.7757 3.05678 11.392 3.24908 11.392 3.24908C11.7515 4.1861 11.5519 4.86034 11.4718 5.04105C11.9546 5.56038 12.2286 6.18985 12.2286 6.96242C12.2286 9.68204 10.5295 10.2959 8.89908 10.4733C9.15067 10.6955 9.37255 11.1319 9.37255 11.8047C9.37255 12.7516 9.36455 13.5184 9.36455 13.7458C9.36455 13.9396 9.49472 14.1656 9.86328 14.0947C12.7442 13.1332 14.75 10.4156 14.75 7.50024C14.75 3.49593 11.5037 0.25 7.49933 0.25Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
            </svg>
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
