import RefundHero from "./RefundHero";
import RefundOverview from "./RefundOverview";
import Footer from "@/src/components/common/footer/Footer";
import SectionTemplate from "@/src/components/ui/doc/section/SectionTemplate";
import { refundData } from "@/src/content/refund/refund-index";
import ContactSection from "@/src/components/ui/doc/contact/ContactSection";

const RefundPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 bg-[radial-gradient(circle,rgba(59,130,246,0.18)_1px,transparent_1px)] bg-size-[24px_24px] dark:bg-slate-950 dark:bg-[radial-gradient(circle,rgba(96,165,250,0.12)_1px,transparent_1px)]">
      <RefundHero />

      <main className="mx-auto max-w-4xl px-4 py-12">
        <RefundOverview />
        <SectionTemplate
          title="Refund Policy"
          description="Review the terms and conditions that govern refunds, cancellations, payments, and refund eligibility on Real Battle."
          sections={refundData.sections}
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

export default RefundPage;
