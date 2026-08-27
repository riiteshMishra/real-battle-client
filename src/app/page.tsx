import Footer from "../components/common/footer/Footer";
// import Heading from "../components/common/Heading";
import ContactUs from "../components/core/Home/contact/Index";
import FinalCta from "../components/core/Home/CTA/Index";
import HomepageFaq from "../components/core/Home/Faq/HomepageFaq";
import Features from "../components/core/Home/Features/Index";
import HowItsWork from "../components/core/Home/how-its-work/Index";
import Stats from "../components/core/Home/stats/Index";
import SupportedGames from "../components/core/Home/supported-games/Index";
import HomeHero from "../components/ui/home/hero/home-hero";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-50 bg-[radial-gradient(rgba(59,130,246,0.18)_1px,transparent_1px)] bg-size-[24px_24px] dark:bg-slate-950 dark:bg-[radial-gradient(rgba(96,165,250,0.12)_1px,transparent_1px)]">
        <main className="relative min-h-screen overflow-hidden">
          {/* <HeroSection /> */}
          <HomeHero />
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
