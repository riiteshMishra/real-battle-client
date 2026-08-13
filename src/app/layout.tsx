import type { Metadata } from "next";
import { Sekuya, Bricolage_Grotesque, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/common/navbar/Navbar";
import ThemeProvider from "../providers/theme-provider";
import { Toaster } from "sonner";
import SmoothScroll from "../components/common/SmoothScroll";

const sekuya = Sekuya({
  variable: "--font-sekuya",
  subsets: ["latin"],
  weight: "400",
  adjustFontFallback: false,
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Real Battle — Compete, Play & Win",
    template: "%s | Real Battle",
  },

  description:
    "Join Real Battle tournaments, compete with players, play your favorite games, and win exciting rewards.",

  keywords: [
    "Real Battle",
    "gaming tournaments",
    "online gaming tournaments",
    "esports tournaments",
    "Free Fire tournaments",
    "gaming competition",
    "win rewards",
  ],

  applicationName: "Real Battle",

  authors: [
    {
      name: "Real Battle",
    },
  ],

  creator: "Real Battle",
  publisher: "Real Battle",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Real Battle — Compete, Play & Win",
    description:
      "Join tournaments, compete with players and win exciting rewards with Real Battle.",
    siteName: "Real Battle",
  },

  twitter: {
    card: "summary_large_image",
    title: "Real Battle — Compete, Play & Win",
    description:
      "Join tournaments, compete and win exciting rewards with Real Battle.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${roboto.variable} ${sekuya.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body>
        <Toaster position="top-right" />
        <SmoothScroll>
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
