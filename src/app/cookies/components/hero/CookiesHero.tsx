import HeroTemplet from "@/src/components/ui/doc/hero/HeroTemplet";
import { sectionGradient } from "@/src/content/bg-colors";
import { cookiesData } from "@/src/content/cookies/cookies-index";
import { Cookie, ShieldCheck } from "lucide-react";

const indicators = ["Essential Cookies", "Secure Sessions", "Authentication"];

const CookiesHero = () => {
  return (
    <HeroTemplet
      background={sectionGradient.orange}
      heroBrand={{
        icon: Cookie,
        title: "Real Battle",
        subtitle: "Free Fire Gaming & Tournament Platform.",
        iconColor: "text-yellow-200",
        titleColor: "text-orange-200",
      }}
      heroContent={{
        title: cookiesData.title,
        description: cookiesData.description,
      }}
      updateProps={{
        date: cookiesData.lastUpdated,
      }}
      heroTrust={{
        indicators,
        icon: ShieldCheck,
        iconColor: "text-emerald-300",
      }}
    />
  );
};

export default CookiesHero;
