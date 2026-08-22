import { RefundSection } from "../types";

export const chargebackSection: RefundSection = {
  id: "chargebacks-and-abuse",
  title: "14. Chargebacks, Fraud and Refund Abuse",
  type: "subsections",
  subsections: [
    {
      id: "chargebacks",
      title: "Payment Disputes",
      items: [
        "If you believe a payment was unauthorized or incorrect, contact Real Battle support before initiating a payment dispute where possible.",
        "Real Battle may review payment disputes with the relevant payment provider.",
      ],
    },
    {
      id: "fraud",
      title: "Fraudulent Activity",
      items: [
        "Fraudulent transactions, false refund claims, payment manipulation, or abuse of the refund process may result in account restrictions or suspension.",
        "Where permitted by law, refunds may be withheld or reversed in connection with fraudulent activity or abuse.",
      ],
    },
  ],
};
