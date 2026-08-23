"use client";

import Footer from "@/src/components/common/footer/Footer";
import PrivacyActions from "./Actions/PrivacyActions";
import PrivacyContact from "./Contact/PrivacyContact";
import PrivacyFAQ from "./FAQ/PrivacyFAQ";
// import PrivacyFooter from "./Footer/PrivacyFooter";
import PrivacyHero from "./hero/PrivacyHero";

import PrivacyOverview from "./overview/PrivacyOverview";
import PrivacySections from "./Sections/PrivacySections";
import PrivacyTableOfContents from "./TableOfContents/PrivacyTableOfContents";

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 bg-[radial-gradient(circle,rgba(59,130,246,0.18)_1px,transparent_1px)] bg-size-[24px_24px] dark:bg-slate-950 dark:bg-[radial-gradient(circle,rgba(96,165,250,0.12)_1px,transparent_1px)]">
      <PrivacyHero />

      <main className="mx-auto max-w-4xl px-4 py-12">
        <PrivacyOverview />

        <PrivacyTableOfContents />

        <PrivacySections />
        <PrivacyFAQ />
        <PrivacyActions />
        <PrivacyContact />
        {/* <PrivacyFooter /> */}
      </main>
      <Footer />
    </div>
  );
}
