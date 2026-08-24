import type { RefundSection } from "../types";

export const refundEligibilitySection: RefundSection = {
  id: "refund-eligibility",
  title: "10. Refund Eligibility",
  type: "subsections",

  subsections: [
    {
      title: "Situations That May Qualify",
      items: [
        "Tournament cancellation by Real Battle.",
        "Verified payment duplication or payment processing error.",
        "Payment successfully debited without a corresponding tournament entry being created.",
        "Verified platform-side technical failure that materially prevented participation.",
        "Other circumstances expressly identified as refundable in the applicable tournament rules.",
      ],
    },

    {
      title: "Situations That Generally Do Not Qualify",
      items: [
        "Player voluntarily withdraws after the applicable cancellation deadline.",
        "Tournament or match has already started.",
        "Player does not join or misses the scheduled match.",
        "Player loses the tournament or fails to qualify for a prize.",
        "Internet, device, battery, or other player-side technical problems.",
        "Disqualification caused by cheating or violation of tournament rules.",
        "Incorrect game ID, UID, account details, or other information provided by the player.",
      ],
    },
  ],
};
