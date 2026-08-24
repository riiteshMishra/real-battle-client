import { File, ShieldCheck } from "lucide-react";

import HeroTemplet from "@/src/components/ui/doc/hero/HeroTemplet";
import { sectionGradient } from "@/src/content/bg-colors";
import { disclaimerData } from "@/src/content/disclaimer/disclaimer-index";

export const indicators = [
  "Important Information",
  "Gaming Services",
  "Platform Limitations",
];

const DisclaimerHero = () => {
  return (
    <HeroTemplet
      background={sectionGradient.orange}
      heroBrand={{
        icon: File,
        title: "Real Battle",
        subtitle: "Free Fire Gaming & Tournament Platform.",
        iconColor: "text-yellow-200",
        titleColor: "text-white",
        subtitleColor: "text-white/80",
      }}
      heroContent={{
        title: "Disclaimer",
        description: (
          <>
            Important information about{" "}
            <strong className="font-semibold text-white">
              Real Battle gaming platform, tournaments, content, and third-party
              services
            </strong>{" "}
            , including limitations of responsibility.
          </>
        ),
      }}
      updateProps={{
        date: disclaimerData.lastUpdated,
      }}
      heroTrust={{
        indicators,
        icon: ShieldCheck,
        iconColor: "text-emerald-300",
        textColor: "text-white",
      }}
    />
  );
};

export default DisclaimerHero;
