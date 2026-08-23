import { homeData } from "@/src/data/home";
import SubHeading from "../Hero/SubHeading";
import Heading from "./Heading";
import Cards from "./Cards";

const HowItsWork = () => {
  return (
    <section id="how-it-works" className="py-10 md:py-18">
      <Heading />
      <SubHeading
        title={homeData.subHeadin3}
        className="sm:text mx-auto my-10 max-w-100 text-center text-sm capitalize"
      />
      <div className="bg-primary rounded-ful mx-auto h-0.5 max-w-40" />
      <Cards />
    </section>
  );
};

export default HowItsWork;
