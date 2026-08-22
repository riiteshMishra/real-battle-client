import { introductionSection } from "./sections/introduction";
import { generalRefundSection } from "./sections/general-refund";
import { tournamentCancellationSection } from "./sections/tournament-cancellation";
import { tournamentPostponementSection } from "./sections/tournament-postponement";
import { technicalIssuesSection } from "./sections/technical-issues";
import { playerWithdrawalSection } from "./sections/player-withdrawal";
import { disqualificationSection } from "./sections/disqualification";
import { failedPaymentSection } from "./sections/failed-payment";
import { duplicatePaymentSection } from "./sections/duplicate-payment";
import { refundEligibilitySection } from "./sections/refund-eligibility";
import { refundProcessSection } from "./sections/refund-process";
import { refundMethodSection } from "./sections/refund-method";
import { processingTimeSection } from "./sections/processing-time";
import { chargebackSection } from "./sections/chargeback";
import { changesSection } from "./sections/changes";
import { contactSection } from "./sections/contact";

import { RefundSection } from "./types";

export const refundData: {
  title: string;
  description: string;
  lastUpdated: string;
  sections: RefundSection[];
} = {
  title: "Refund Policy",

  description:
    "Learn when Real Battle tournament entry fees and eligible payments may be refunded, how cancellations and technical issues are handled, and how to request a refund.",

  lastUpdated: "August 22, 2026",

  sections: [
    introductionSection,
    generalRefundSection,
    tournamentCancellationSection,
    tournamentPostponementSection,
    technicalIssuesSection,
    playerWithdrawalSection,
    disqualificationSection,
    failedPaymentSection,
    duplicatePaymentSection,
    refundEligibilitySection,
    refundProcessSection,
    refundMethodSection,
    processingTimeSection,
    chargebackSection,
    changesSection,
    contactSection,
  ],
};
