import { RefundSection } from "../types";

export const failedPaymentSection: RefundSection = {
  id: "failed-payment",
  title: "8. Payment Completed but Entry Not Confirmed",
  type: "paragraphs",
  content: [
    "If your payment is successfully debited but the corresponding tournament entry is not created or confirmed, you should contact Real Battle support with the transaction details.",
    "Real Battle may verify the payment with its payment provider and platform records before processing a refund or correcting the tournament registration.",
    "Participants should not make repeated payments for the same tournament while a previous transaction is still being verified unless instructed by Real Battle.",
  ],
};
