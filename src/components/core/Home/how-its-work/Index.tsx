import { homeData } from "@/src/data/home";
import SubHeading from "../Hero/SubHeading";
import Heading from "./Heading";
import Cards from "./Cards";

const HowItsWork = () => {
  return (
    <section id="how-it-works" className="space-y-10">
      <Heading />
      <SubHeading
        title={homeData.subHeadin3}
        className="text-center capitalize text-sm sm:text max-w-100 mx-auto"
      />
      <div className="max-w-40 bg-primary h-0.5 mx-auto rounded-ful" />
      <Cards />
    </section>
  );
};

export default HowItsWork;
