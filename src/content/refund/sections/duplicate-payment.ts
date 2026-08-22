import { RefundSection } from "../types";

export const duplicatePaymentSection: RefundSection = {
  id: "duplicate-payment",
  title: "9. Duplicate Payments",
  type: "paragraphs",
  content: [
    "If the same tournament entry fee is charged more than once because of a payment or platform error, the duplicate transaction may be eligible for a refund after verification.",
    "The original valid tournament entry will normally remain associated with the tournament, while the verified duplicate transaction may be refunded.",
    "Users should provide transaction IDs or other payment information necessary to identify the duplicate transaction.",
  ],
};
