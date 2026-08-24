import { Info, ShieldCheck } from "lucide-react";
import HeroTemplet from "@/src/components/ui/doc/hero/HeroTemplet";
const indicators = ["Competitive Gaming", "Fair Play", "Tournament Experience"];

const AboutHero = () => {
  return (
    <HeroTemplet
      background={"text-black"}
      heroBrand={{
        icon: Info,
        title: "Real Battle",
        subtitle: "Free Fire Gaming & Tournament Platform.",
        iconColor: "dark:text-cyan-200 text-orange-400",
        titleColor: "dark:text-blue-400 text-blue-900",
        subtitleColor: "dark:text-white/80",
      }}
      heroContent={{
        title: "About Real Battle",
        description: (
          <>
            Discover{" "}
            <strong className="font-semibold text-blue-800 dark:text-white">
              Real Battle
            </strong>
            , a gaming and tournament platform built to provide players with
            competitive experiences, fair play, and engaging tournaments.
          </>
        ),
      }}
      heroTrust={{
        indicators,
        icon: ShieldCheck,
        iconColor: "dark:text-emerald-300 text-yellow-800",
        textColor: "",
      }}
      updateProps={{
        date: "August 24, 2026",
      }}
    />
  );
};

export default AboutHero;
