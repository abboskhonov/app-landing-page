import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"

import appCss from "../styles.css?url"

const SITE_URL = "https://app-landing-page-cyan.vercel.app"
const OG_IMAGE = `${SITE_URL}/og-image.png`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Cal AI | Smart scheduling powered by AI",
      },
      {
        name: "description",
        content:
          "Cal AI auto-schedules your meetings, finds the best times, and keeps your calendar in sync — so you can focus on what actually matters.",
      },
      {
        name: "theme-color",
        content: "#000000",
      },
      /* Open Graph */
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: SITE_URL,
      },
      {
        property: "og:title",
        content: "Cal AI | Smart scheduling powered by AI",
      },
      {
        property: "og:description",
        content:
          "Cal AI auto-schedules your meetings, finds the best times, and keeps your calendar in sync — so you can focus on what actually matters.",
      },
      {
        property: "og:image",
        content: OG_IMAGE,
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      /* Twitter / X */
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:url",
        content: SITE_URL,
      },
      {
        name: "twitter:title",
        content: "Cal AI | Smart scheduling powered by AI",
      },
      {
        name: "twitter:description",
        content:
          "Cal AI auto-schedules your meetings, finds the best times, and keeps your calendar in sync — so you can focus on what actually matters.",
      },
      {
        name: "twitter:image",
        content: OG_IMAGE,
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "canonical",
        href: SITE_URL,
      },
      {
        rel: "icon",
        href: "/favicon.ico",
      },
      {
        rel: "apple-touch-icon",
        href: "/favicon.ico",
      },
      {
        rel: "manifest",
        href: "/manifest.json",
      },
    ],
  }),
  notFoundComponent: () => (
    <main className="container mx-auto p-4 pt-16">
      <h1>404</h1>
      <p>The requested page could not be found.</p>
    </main>
  ),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
