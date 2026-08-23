import DisclaimerHero from "./hero/DisclaimerHero";
import DisclaimerOverview from "./overview/DisclaimerOverview";
import DisclaimerTableOfContents from "./TableOfContents/DisclaimerTableOfContents";
import DisclaimerSections from "./Sections/DisclaimerSections";
import DisclaimerContact from "./Contact/DisclaimerContact";
import Footer from "@/src/components/common/footer/Footer";

const DisclaimerRoute = () => {
  return (
    <div className="min-h-screen bg-slate-50 bg-[radial-gradient(circle,rgba(59,130,246,0.18)_1px,transparent_1px)] bg-size-[24px_24px] dark:bg-slate-950 dark:bg-[radial-gradient(circle,rgba(96,165,250,0.12)_1px,transparent_1px)]">
      <DisclaimerHero />

      <main className="mx-auto max-w-4xl px-4 py-12">
        <DisclaimerOverview />

        <DisclaimerTableOfContents />

        <DisclaimerSections />

        <DisclaimerContact />
      </main>

      <Footer />
    </div>
  );
};

export default DisclaimerRoute;
