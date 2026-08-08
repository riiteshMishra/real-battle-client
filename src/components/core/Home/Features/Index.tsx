import { homeData } from "@/src/data/home";
import SubHeading from "../Hero/SubHeading";
import Heading from "./Heading";
import FeaturesGrid from "./FeaturesGrid";

const Features = () => {
  return (
    <section id="features" className="py-10 md:py-18">
      <Heading />
      <div className="max-w-40 bg-primary h-0.5 mx-auto rounded-ful my-10" />

      <SubHeading
        title={homeData.subHeading2}
        className="text-center capitalize text-sm sm:text max-w-100 mx-auto"
      />

      <FeaturesGrid />
    </section>
  );
};

export default Features;
