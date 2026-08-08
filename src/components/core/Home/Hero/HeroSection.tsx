import Heading from "./Heading";
import { homeData } from "@/src/data/home";
import SubHeading from "./SubHeading";
import Steps from "./Steps";
import HeroImg from "./HeroImg";

const HeroSection = () => {
  return (
    <section id="home" className=" py-15 md:py-20 px-4">
      <Heading />
      <div className="max-w-40 bg-primary h-0.5 mx-auto rounded-ful my-10" />
      <SubHeading
        title={homeData.subHeading}
        className="text-center capitalize text-sm sm:text max-w-100 mx-auto"
      />
      <Steps />
      <HeroImg />
    </section>
  );
};

export default HeroSection;
