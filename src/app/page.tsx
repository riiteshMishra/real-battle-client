import Footer from "../components/common/footer/Footer";
import ContactUs from "../components/core/Home/contact/Index";
import FinalCta from "../components/core/Home/CTA/Index";
import HomepageFaq from "../components/core/Home/Faq/HomepageFaq";
import Features from "../components/core/Home/Features/Index";
import HeroSection from "../components/core/Home/Hero/HeroSection";
import HowItsWork from "../components/core/Home/how-its-work/Index";
import Stats from "../components/core/Home/stats/Index";
import SupportedGames from "../components/core/Home/supported-games/Index";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-50 bg-[linear-gradient(to_right,rgba(59,130,246,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.06)_1px,transparent_1px)] bg-size-[32px_32px] dark:bg-slate-950 dark:bg-[linear-gradient(to_right,rgba(96,165,250,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.05)_1px,transparent_1px)]">
        <main className="relative min-h-screen overflow-hidden">
          <HeroSection />
          <Features />
          <HowItsWork />
          <Stats />
          <SupportedGames />
          <HomepageFaq />
          <FinalCta />
          <ContactUs />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
