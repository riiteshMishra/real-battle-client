import type { Metadata } from "next";
import AboutPage from "./components/AboutPage";

export const metadata: Metadata = {
  title: "About Us | Real Battle",
  description:
    "Learn about Real Battle, a gaming and tournament platform built to provide competitive gaming experiences, fair play, and engaging tournaments for players.",
  keywords: [
    "Real Battle",
    "Real Battle gaming",
    "Free Fire tournaments",
    "gaming tournament platform",
    "esports tournaments",
    "competitive gaming",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return <AboutPage />;
};

export default Page;
