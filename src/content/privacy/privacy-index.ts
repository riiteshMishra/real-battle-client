import { introductionSection } from "./sections/introduction";
import { informationWeCollectSection } from "./sections/information-we-collect";
import { freeFireDataSection } from "./sections/free-fire-data";
import { tournamentDataSection } from "./sections/tournament-data";
import { publicInformationSection } from "./sections/public-information";
import { howWeUseSection } from "./sections/how-we-use";
import { adminInformationSection } from "./sections/admin-information";
import { securitySection } from "./sections/security";
import { cookiesAnalyticsSection } from "./sections/cookies-analytics";
import { dataSharingSection } from "./sections/data-sharing";
import { thirdPartySection } from "./sections/third-party";
import { dataRetentionSection } from "./sections/data-retention";
import { dataSecuritySection } from "./sections/data-security";
import { userRightsSection } from "./sections/user-rights";
import { accountDeletionSection } from "./sections/account-deletion";
import { childrenSection } from "./sections/children";
import { internationalSection } from "./sections/international";
import { policyChangesSection } from "./sections/policy-changes";

export const privacyData = {
  title: "Privacy Policy",
  description:
    "Learn how Real Battle collects, uses, stores, and protects your personal information.",
  lastUpdated: "August 21, 2026",
  sections: [
    introductionSection,
    informationWeCollectSection,
    freeFireDataSection,
    tournamentDataSection,
    publicInformationSection,
    howWeUseSection,
    adminInformationSection,
    securitySection,
    cookiesAnalyticsSection,
    dataSharingSection,
    thirdPartySection,
    dataRetentionSection,
    dataSecuritySection,
    userRightsSection,
    accountDeletionSection,
    childrenSection,
    internationalSection,
    policyChangesSection,
  ],
};

export * from "./sections/introduction";
export * from "./sections/information-we-collect";
