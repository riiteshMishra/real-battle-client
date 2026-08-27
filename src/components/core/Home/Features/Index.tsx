import { homeData } from "@/src/data/home";
import SubHeading from "../Hero/SubHeading";
import Heading from "./Heading";
import FeaturesGrid from "./FeaturesGrid";

const Features = () => {
  return (
    <section id="features" className="py-10 md:py-18">
      <Heading />
      <div className="mx-auto my-10 h-0.5 max-w-40 rounded-full bg-[#0cf]" />

      <SubHeading
        title={homeData.subHeading2}
        className="sm:text mx-auto max-w-100 text-center text-sm capitalize"
      />

      <FeaturesGrid />
    </section>
  );
};

export default Features;
