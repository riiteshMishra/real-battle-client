import { RefundSection } from "../types";

export const technicalIssuesSection: RefundSection = {
  id: "technical-issues",
  title: "5. Technical Issues",
  type: "subsections",
  subsections: [
    {
      id: "platform-issues",
      title: "Platform or Service Issues",
      items: [
        "If a verified technical failure on the Real Battle platform materially prevents a participant from taking part in a tournament, the issue may be reviewed for a refund or other appropriate resolution.",
        "Real Battle may review server logs, tournament records, payment records, screenshots, videos, or other available evidence before making a decision.",
      ],
    },
    {
      id: "third-party-issues",
      title: "Game or Third-Party Service Issues",
      items: [
        "Issues caused by Free Fire game servers, internet service providers, device manufacturers, payment providers, or other third-party services may be reviewed separately.",
        "A third-party outage does not automatically guarantee a refund unless the applicable tournament rules or Real Battle's review determine that a refund is appropriate.",
      ],
    },
    {
      id: "player-side-issues",
      title: "Player-Side Technical Issues",
      items: [
        "Internet disconnection, device failure, battery problems, application crashes, incorrect device settings, or other issues originating from the participant's device or connection generally do not qualify for a refund.",
      ],
    },
  ],
};
