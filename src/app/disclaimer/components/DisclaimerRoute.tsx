import DisclaimerHero from "./DisclaimerHero";
import DisclaimerOverview from "./DisclaimerOverview";
import Footer from "@/src/components/common/footer/Footer";
import ContactSection from "@/src/components/ui/doc/contact/ContactSection";
import SectionTemplate from "@/src/components/ui/doc/section/SectionTemplate";
import { disclaimerData } from "@/src/content/disclaimer/disclaimer-index";

const DisclaimerRoute = () => {
  return (
    <div className="min-h-screen bg-slate-50 bg-[radial-gradient(circle,rgba(59,130,246,0.18)_1px,transparent_1px)] bg-size-[24px_24px] dark:bg-slate-950 dark:bg-[radial-gradient(circle,rgba(96,165,250,0.12)_1px,transparent_1px)]">
      <DisclaimerHero />

      <main className="mx-auto max-w-4xl px-4 py-12">
        <DisclaimerOverview />
        <SectionTemplate
          title="Disclaimer"
          description="Important information, limitations, and responsibilities related to the use of Real Battle."
          sections={disclaimerData.sections}
        />
        <ContactSection
          title="Contact Us"
          description="Have questions about these Terms of Service, tournament rules, account restrictions, payments, or other Real Battle services? Contact our team."
          note="Please include relevant account, tournament, or transaction details when contacting us so that we can assist you efficiently."
        />{" "}
      </main>

      <Footer />
    </div>
  );
};

export default DisclaimerRoute;
