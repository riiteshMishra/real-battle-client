"use client";

import Footer from "@/src/components/common/footer/Footer";
import PrivacyHero from "./privacy-hero";
import PrivacyOverview from "./privacy-overview";
import SectionTemplate from "@/src/components/ui/doc/section/SectionTemplate";
import { privacyData } from "@/src/content/privacy/privacy-index";
import FaqSection from "@/src/components/ui/doc/faq/FaqSection";
import { privacyFAQData } from "./faq-data";
import ActionsSec from "@/src/components/ui/doc/actions/ActionsSec";
import ContactSection from "@/src/components/ui/doc/contact/ContactSection";

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 bg-[radial-gradient(circle,rgba(59,130,246,0.18)_1px,transparent_1px)] bg-size-[24px_24px] dark:bg-slate-950 dark:bg-[radial-gradient(circle,rgba(96,165,250,0.12)_1px,transparent_1px)]">
      <PrivacyHero />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <PrivacyOverview />
        <FaqSection
          title="Frequently Asked Questions"
          description="Answers to common questions about the Real Battle Terms of Service."
          items={privacyFAQData}
        />
        <SectionTemplate
          title="Privacy Policy Details"
          description="Learn more about how Real Battle collects, uses, protects, and manages player, gaming, and tournament information."
          sections={privacyData.sections}
        />
        <ActionsSec
          title="Privacy & Documents"
          description="Save a copy of our Privacy Policy or contact us if you have questions about how we collect, use, or protect your information."
          email="realbattleofficial@gmail.com"
          contactTitle="Contact Support"
          contactSubtitle="Questions about this Privacy Policy"
        />
        <ContactSection
          title="Contact Us"
          description="Have questions about these Privacy Policy, tournament rules, account restrictions, payments, or other Real Battle services? Contact our team."
          note="Please include relevant account, tournament, or transaction details when contacting us so that we can assist you efficiently."
        />{" "}
      </main>
      <Footer />
    </div>
  );
}
