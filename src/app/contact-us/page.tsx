import type { Metadata } from "next";

import ContactPage from "./components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Real Battle",
  description:
    "Contact Real Battle support for help with tournaments, payments, accounts, refunds, and other platform-related questions.",
  keywords: [
    "Real Battle contact",
    "Real Battle support",
    "gaming tournament support",
    "Free Fire tournament support",
    "Real Battle help",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return <ContactPage />;
};

export default Page;
