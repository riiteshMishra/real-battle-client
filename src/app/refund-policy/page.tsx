import type { Metadata } from "next";

import RefundPage from "./components/RefundPage";

export const metadata: Metadata = {
  title: "Refund Policy | Real Battle",
  description:
    "Read the Real Battle Refund Policy to understand eligibility, refund conditions, cancellations, entry fees, and refund procedures for gaming tournaments.",
  keywords: [
    "Real Battle Refund Policy",
    "gaming tournament refund policy",
    "Free Fire tournament refund",
    "Real Battle refunds",
    "tournament entry fee refund",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return <RefundPage />;
};

export default Page;
