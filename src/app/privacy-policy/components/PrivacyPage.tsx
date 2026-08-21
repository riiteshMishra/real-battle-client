"use client";

import PrivacyActions from "./Actions/PrivacyActions";
import PrivacyContact from "./Contact/PrivacyContact";
import PrivacyFAQ from "./FAQ/PrivacyFAQ";
import PrivacyFooter from "./Footer/PrivacyFooter";
import PrivacyHero from "./hero/PrivacyHero";

import PrivacyOverview from "./overview/PrivacyOverview";
import PrivacySections from "./Sections/PrivacySections";
import PrivacyTableOfContents from "./TableOfContents/PrivacyTableOfContents";

export function PrivacyPage() {
  return (
    <div
      className="
        min-h-screen
        bg-slate-50
        dark:bg-slate-950
        bg-[radial-gradient(circle,rgba(59,130,246,0.18)_2px,transparent_1px)]
        dark:bg-[radial-gradient(circle,rgba(96,165,250,0.12)_2px,transparent_1px)]
        bg-size-[24px_24px]
      "
    >
      <PrivacyHero />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <PrivacyOverview />

        <PrivacyTableOfContents />

        <PrivacySections />
        <PrivacyFAQ />
        <PrivacyActions />
        <PrivacyContact />
        <PrivacyFooter />
      </main>
    </div>
  );
}
