import CookiesHero from "./hero/CookiesHero";
import CookiesOverview from "./overview/CookiesOverview";
import CookiesTableOfContents from "./TableOfContents/CookiesTableOfContents";
import CookiesSections from "./Sections/CookiesSections";
import Footer from "@/src/components/common/footer/Footer";

const CookiesPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 bg-[radial-gradient(circle,rgba(59,130,246,0.18)_1px,transparent_1px)] bg-size-[24px_24px] dark:bg-slate-950 dark:bg-[radial-gradient(circle,rgba(96,165,250,0.12)_1px,transparent_1px)]">
      <CookiesHero />

      <main className="mx-auto max-w-4xl px-4 py-12">
        <CookiesOverview />
        <CookiesTableOfContents />
        <CookiesSections />
      </main>

      <Footer />
    </div>
  );
};

export default CookiesPage;
