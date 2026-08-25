import LeftSection from "./left/left-section";
import RightSection from "./right/right-section";

const HomeHero = () => {
  return (
    <div id="home" className="md:20 py-10 sm:py-15 lg:py-24">
      <div className="container mx-auto flex grid-cols-1 flex-col items-center justify-center gap-12 px-4 sm:grid lg:grid-cols-2">
        <LeftSection
          title="India's fastest growing tournament platefom"
          highlightText="Real Battle"
          description="Join Daily Tournaments, Compete With Skilled Players, Win Exciting Rewards And Experience Professional Esports From Your Mobile."
          primaryButtonText="Download App"
          primaryButtonLink="/download"
          secondaryButtonText="How It Works"
          secondaryButtonLink="#how-it-works"
          badges={["Instant Payouts", "Fair Play", "24/7 Support"]}
        />

        <RightSection
          // imageSrc="/images/hero-cyber-league.png" // apna image path
          imageAlt="Cyber League Championship"
        />
      </div>
    </div>
  );
};

export default HomeHero;
