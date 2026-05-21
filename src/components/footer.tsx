import { Calendar } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function Footer() {
  return (
    <ScrollReveal>
      <footer className="flex flex-col gap-y-5 rounded-lg px-7 py-5 md:px-10 container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Calendar className="h-5 w-5" />
            <h2 className="text-lg font-bold text-foreground">Cal AI</h2>
          </div>
          <div className="flex gap-x-2">
            <a
              href="#"
              className="flex h-5 w-5 items-center justify-center text-muted-foreground transition-all duration-100 ease-linear hover:text-foreground"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://github.com/abboskhonov/app-landing-page"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-5 w-5 items-center justify-center text-muted-foreground transition-all duration-100 ease-linear hover:text-foreground"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.975 2.44599 10.5656 2.44599 10.5656C1.78773 10.0969 2.49584 10.1068 2.49584 10.1068C3.22353 10.1628 3.60629 10.8561 3.60629 10.8561C4.254 11.931 5.25407 11.6258 5.72037 11.4397C5.79099 10.9765 5.97048 10.6591 6.17081 10.4794C4.54547 10.2976 2.84947 9.67562 2.84947 6.96242C2.84947 6.18985 3.12347 5.56038 3.60629 5.04105C3.52629 4.86034 3.32663 4.1861 3.68612 3.24908C3.68612 3.24908 4.30299 3.05678 5.6843 3.94017C6.26954 3.77695 6.90474 3.69548 7.53936 3.69204C8.17398 3.69548 8.80918 3.77695 9.39442 3.94017C10.7757 3.05678 11.392 3.24908 11.392 3.24908C11.7515 4.1861 11.5519 4.86034 11.4718 5.04105C11.9546 5.56038 12.2286 6.18985 12.2286 6.96242C12.2286 9.68204 10.5295 10.2959 8.89908 10.4733C9.15067 10.6955 9.37255 11.1319 9.37255 11.8047C9.37255 12.7516 9.36455 13.5184 9.36455 13.7458C9.36455 13.9396 9.49472 14.1656 9.86328 14.0947C12.7442 13.1332 14.75 10.4156 14.75 7.50024C14.75 3.49593 11.5037 0.25 7.49933 0.25Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Cal AI. All rights reserved.
        </div>
      </footer>
    </ScrollReveal>
  )
}
