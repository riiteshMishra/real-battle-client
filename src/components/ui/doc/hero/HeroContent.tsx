import { ReactNode } from "react";

export interface HeroContentProps {
  title: string;
  description: ReactNode;
}

const HeroContent: React.FC<HeroContentProps> = ({ title, description }) => {
  return (
    <>
      <h1
        id="hero-title"
        className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
      >
        {title}
      </h1>

      <p className="mt-5 max-w-2xl text-base leading-7 sm:text-lg md:text-xl dark:text-slate-300">
        {description}
      </p>
    </>
  );
};

export default HeroContent;
