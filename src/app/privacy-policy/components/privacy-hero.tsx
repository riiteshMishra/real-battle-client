import HeroTemplet from "@/src/components/ui/doc/hero/HeroTemplet";
import { sectionGradient } from "@/src/content/bg-colors";
import { privacyData } from "@/src/content/privacy/privacy-index";
import { ShieldCheckIcon } from "lucide-react";

export const indicators = [
  "Data Protection",
  "Secure Gaming",
  "Privacy focused",
];
const PrivacyHero = () => {
  return (
    <HeroTemplet
      background={sectionGradient.blue}

      heroBrand={{
        icon: ShieldCheckIcon,
        title: "Real Battle",
        subtitle: "Free Fire Gaming & Tournament Platform.",
        iconColor: "text-cyan-200",
        titleColor: "dark:text-blue-400",
        subtitleColor: "dark:text-gray-400",
      }}

      heroContent={{
        title: "Privacy Policy",
        description: (
          <>
            Learn how{" "}
            <strong className="font-semibold text-white"> Real Battle</strong>
            collects, uses, stores, and protect your
            <strong className="font-semibold text-white">
              {" "}
              Personal Information
            </strong>{" "}
            when you participate in our
            <strong className="font-semibold text-white">
              {" "}
              Free Fire Tournaments and online gaming services.
            </strong>
          </>
        ),
      }}

      updateProps={{ date: privacyData.lastUpdated }}

      heroTrust={{
        indicators,
        icon: ShieldCheckIcon,
        iconColor: "dark:text-green-400 text-orange-400",
      }}
    />
  );
};

export default PrivacyHero;
