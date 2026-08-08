import React from "react";
import Heading from "../../../common/Heading";
import { homeData } from "@/src/data/home";
import SubHeading from "../../../common/SubHeading";
import Steps from "./Steps";
import Image from "next/image";
import { assets } from "@/src/assets/assets";
import HeroImg from "./HeroImg";

const HeroSection = () => {
  return (
    <section id="home " className=" py-16 md:py-20 px-4">
      <Heading
        title={homeData.heading}
        className="text-center text-5xl capitalize"
      />
      <div className="max-w-40 bg-primary h-0.5 mx-auto rounded-ful my-5" />
      <SubHeading
        title={homeData.subHeadin}
        className="text-center capitalize text-sm sm:text max-w-100 mx-auto"
      />
      <Steps />
      <HeroImg />
    </section>
  );
};

export default HeroSection;
