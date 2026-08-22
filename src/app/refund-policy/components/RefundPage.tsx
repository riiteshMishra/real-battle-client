import RefundHero from "./hero/RefundHero";
import RefundOverview from "./overview/RefundOverview";
import RefundTableOfContents from "./TableOfContents/RefundTableOfContents";
import RefundSections from "./Sections/RefundSections";
import RefundActions from "./Actions/RefundActions";
import RefundContact from "./Contact/RefundContact";
import Footer from "@/src/components/common/footer/Footer";

const RefundPage = () => {
  return (
    <div
      className="
        min-h-screen
        bg-slate-50
        dark:bg-slate-950
        bg-[radial-gradient(circle,rgba(59,130,246,0.18)_1px,transparent_1px)]
        dark:bg-[radial-gradient(circle,rgba(96,165,250,0.12)_1px,transparent_1px)]
        bg-size-[24px_24px]
      "
    >
      <RefundHero />

      <main className="mx-auto max-w-4xl px-4 py-12">
        <RefundOverview />
        <RefundTableOfContents />
        <RefundSections />
        <RefundActions />
        <RefundContact />
      </main>

      <Footer />
    </div>
  );
};

export default RefundPage;
