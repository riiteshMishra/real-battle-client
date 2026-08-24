import AboutHero from "./AboutHero";
import { MissionVision } from "./MissionVision";
import { Values } from "./Values";
import Stats from "./Stats";
import { Timeline } from "./Timeline";
import { Testimonials } from "./Testimonials";
import { FAQ } from "./FAQ";
import { CTA } from "./CTA";
import Footer from "@/src/components/common/footer/Footer";
const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <main>
        <MissionVision />
        <Values />
        <Stats />
        <Timeline />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
