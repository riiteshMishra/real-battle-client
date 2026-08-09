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
    <section className="relative min-h-screen overflow-hidden">
      <HeroSection />
      <Features />
      <HowItsWork />
      <Stats />
      <SupportedGames />
      <HomepageFaq />
      <FinalCta />
      <ContactUs />
    </section>
  );
};

export default Home;

{
  /* Content */
}
// <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4">
//   <div className="max-w-2xl">
//     <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
//       India's #1 Free Fire Tournament Platform
//     </span>

//     <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
//       Play.
//       <span className="text-blue-500"> Compete.</span>
//       <br />
//       Win Real Rewards.
//     </h1>

//     <p className="mt-6 max-w-xl text-lg text-gray-300">
//       Join daily Free Fire tournaments, compete with thousands of players,
//       climb the leaderboard, and win exciting cash prizes.
//     </p>
//   </div>
// </div>
