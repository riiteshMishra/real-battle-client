import SubHeading from "../Hero/SubHeading";
import Cards from "./Cards";
import Heading from "./Heading";

const SupportedGames = () => {
  return (
    <section id="supported-games" className="px-5 py-10 md:py-18">
      <Heading />

      <SubHeading
        title="Your favorite games, one competitive arena."
        className="mx-auto my-10 max-w-100 text-center text-sm capitalize"
      />

      <div className="mx-auto h-0.5 w-40 rounded-full bg-primary" />

      <Cards />
    </section>
  );
};

export default SupportedGames;
