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
    </>
  );
};

export default Home;
