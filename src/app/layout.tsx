import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono, Sora, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { site } from "@/lib/site";
import { activeTheme, themes } from "@/lib/themes";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});
// Display fonts used by the editorial and sunset themes
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", preload: false });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", preload: false });

const description =
  "Full-stack developer with a network operations experience. Python, FastAPI, React, Next.js and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Lokesh Sequeira | Full-Stack Developer",
    template: "%s | Lokesh Sequeira",
  },
  description,
  keywords: [
    "Lokesh Sequeira",
    "full-stack developer",
    "Python",
    "FastAPI",
    "React",
    "Next.js",
    "TypeScript",
    "portfolio",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: "Lokesh Sequeira | Full-Stack Developer",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokesh Sequeira | Full-Stack Developer",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-theme={activeTheme}
      className={`${inter.variable} ${space.variable} ${jetbrains.variable} ${fraunces.variable} ${sora.variable}`}
    >
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme={themes[activeTheme].defaultMode}
          enableSystem={false}
        >
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
