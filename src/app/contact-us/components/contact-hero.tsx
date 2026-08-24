import { HelpCircle } from "lucide-react";

import HeroTemplet from "@/src/components/ui/doc/hero/HeroTemplet";
import { sectionGradient } from "@/src/content/bg-colors";

const ContactHero = () => {
  return (
    <HeroTemplet
      background={sectionGradient.purple}
      heroBrand={{
        icon: HelpCircle,
        title: "Real Battle",
        subtitle: "Support & Assistance",
        iconColor: "text-purple-200",
        titleColor: "text-white",
        subtitleColor: "text-white/80",
      }}
      heroContent={{
        title: "Contact Us",
        description: (
          <>
            Need help with your{" "}
            <strong className="font-semibold text-white">
              account, tournament, payment, or platform
            </strong>{" "}
            experience? Get in touch with the Real Battle support team.
          </>
        ),
      }}
      heroTrust={{
        indicators: [
          "Tournament Support",
          "Payment Assistance",
          "Account Help",
        ],
        icon: HelpCircle,
        iconColor: "text-emerald-300",
      }}

      updateProps={{
        date: "August 24, 2026",
      }}
    />
  );
};

export default ContactHero;
