import type { Metadata } from "next";
import CookiesPage from "./components/CookiesPage";

export const metadata: Metadata = {
  title: "Cookie Policy | Real Battle",

  description:
    "Learn how Real Battle uses essential cookies for authentication, secure sessions, account access, and reliable gaming and tournament services.",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/cookies",
  },

  openGraph: {
    title: "Cookie Policy | Real Battle",
    description:
      "Learn how Real Battle uses essential cookies for authentication, secure sessions, account access, and gaming services.",
    type: "website",
    url: "/cookies",
    siteName: "Real Battle",
  },

  twitter: {
    card: "summary",
    title: "Cookie Policy | Real Battle",
    description:
      "Learn how Real Battle uses essential cookies for authentication, secure sessions, and account access.",
  },
};

const CookiesRoute = () => {
  return <CookiesPage />;
};

export default CookiesRoute;
