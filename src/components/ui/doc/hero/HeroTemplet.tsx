import BGlow from "@/src/components/common/BGlow";
import React from "react";
import HeroBrand, { HeroBrandProps } from "./HeroBrand";
import HeroContent, { HeroContentProps } from "./HeroContent";
import HeroUpdate, { HeroUpdateProps } from "./HeroUpdate";
import HeroTrust, { HeroTrustProps } from "./HeroTrust";

interface HeroTempletProps {
  background?: string;
  bgGlow?: React.ReactNode;
  heroBrand: HeroBrandProps;
  heroContent: HeroContentProps;
  updateProps: HeroUpdateProps;
  heroTrust: HeroTrustProps;
}

const HeroTemplet = ({
  background,
  bgGlow,
  heroBrand,
  heroContent,
  updateProps,
  heroTrust,
}: HeroTempletProps) => {
  return (
    <section
      aria-labelledby="hero-title"
      className={`relative isolate overflow-hidden text-white ${background}`}
    >
      {bgGlow ? bgGlow : <BGlow />}

      <div className="relative mx-auto max-w-4xl px-4 py-14 md:py-20">
        <div className="max-w-3xl">
          <HeroBrand {...heroBrand} />

          <HeroContent {...heroContent} />

          <HeroUpdate {...updateProps} />

          <HeroTrust {...heroTrust} />
        </div>
      </div>
    </section>
  );
};

export default HeroTemplet;
