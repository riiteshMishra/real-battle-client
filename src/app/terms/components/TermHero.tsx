import HeroTemplet from "@/src/components/ui/doc/hero/HeroTemplet";
import { sectionGradient } from "@/src/content/bg-colors";
import { termsData } from "@/src/content/terms/terms-index";
import { FileText, ShieldCheck } from "lucide-react";

export const indicators = [
  "Fair Play",
  "Tournament Rules",
  "Player Protection",
];

const TermHero = () => {
  return (
    <HeroTemplet
      background={sectionGradient.blue}

      heroBrand={{
        icon: FileText,
        title: "Real Battle",
        subtitle: "Free Fire Gaming & Tournament Platform.",
        iconColor: "text-cyan-200",
        titleColor: "text-blue-400 ",
      }}

      heroContent={{
        title: "Terms of Service",
        description: (
          <>
            Read the{" "}
            <strong className="font-semibold text-white">
              Real Battle Terms of Service{" "}
            </strong>
            governing your use of our{" "}
            <strong className="font-semibold text-white">
              online gaming platform
            </strong>
            , Free Fire tournaments, accounts, payments, prizes, and tournament
            participation.
          </>
        ),
      }}
      updateProps={{
        date: termsData.lastUpdated,
      }}
      heroTrust={{
        indicators,
        icon: ShieldCheck,
        iconColor: "text-emerald-300",
      }}
    />
  );
};

export default TermHero;
