import { introductionSection } from "./sections/introduction";
import { eligibilitySection } from "./sections/eligibility";
import { accountSection } from "./sections/account";
import { platformSection } from "./sections/platform";
import { freeFireSection } from "./sections/free-fire";
import { tournamentSection } from "./sections/tournament";
import { tournamentRulesSection } from "./sections/tournament-rules";
import { fairPlaySection } from "./sections/fair-play";
import { proofDisputesSection } from "./sections/proof-disputes";
import { prizesSection } from "./sections/prizes";
import { paymentsSection } from "./sections/payments";
import { refundsSection } from "./sections/refunds";
import { prohibitedActivitiesSection } from "./sections/prohibited-activities";
import { userContentSection } from "./sections/user-content";
import { organizersSection } from "./sections/organizers";
import { adminRightsSection } from "./sections/admin-rights";
import { suspensionSection } from "./sections/suspension";
import { intellectualPropertySection } from "./sections/intellectual-property";
import { thirdPartySection } from "./sections/third-party";
import { liabilitySection } from "./sections/liability";
import { indemnificationSection } from "./sections/indemnification";
import { changesSection } from "./sections/changes";
import { governingLawSection } from "./sections/governing-law";
import { TermsSection } from "./types";

export const termsData: {
  title: string;
  description: string;
  lastUpdated: string;
  sections: TermsSection[];
} = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions governing your use of Real Battle, participation in Free Fire tournaments, gaming services, and related platform features.",

  lastUpdated: "August 21, 2026",

  sections: [
    introductionSection,
    eligibilitySection,
    accountSection,
    platformSection,
    freeFireSection,
    tournamentSection,
    tournamentRulesSection,
    fairPlaySection,
    proofDisputesSection,
    prizesSection,
    paymentsSection,
    refundsSection,
    prohibitedActivitiesSection,
    userContentSection,
    organizersSection,
    adminRightsSection,
    suspensionSection,
    intellectualPropertySection,
    thirdPartySection,
    liabilitySection,
    indemnificationSection,
    changesSection,
    governingLawSection,
  ],
};
