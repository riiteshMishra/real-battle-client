import { IndianRupee, ShieldCheck } from "lucide-react";

import HeroTemplet from "@/src/components/ui/doc/hero/HeroTemplet";
import { sectionGradient } from "@/src/content/bg-colors";
import { refundData } from "@/src/content/refund/refund-index";

export const indicators = [
  "Refund Eligibility",
  "Cancellation Rules",
  "Payment Protection",
];

const RefundHero = () => {
  return (
    <HeroTemplet
      background={sectionGradient.emerald}
      heroBrand={{
        icon: IndianRupee,
        title: "Real Battle",
        subtitle: "Free Fire Gaming & Tournament Platform.",
        iconColor: "text-emerald-200",
        titleColor: "text-white",
        subtitleColor: "text-white/80",
      }}
      heroContent={{
        title: "Refund Policy",
        description: (
          <>
            Understand the{" "}
            <strong className="font-semibold text-white">
              Real Battle Refund Policy
            </strong>{" "}
            covering tournament entry fees, cancellations, refund eligibility,
            payment issues, and applicable refund conditions.
          </>
        ),
      }}
      updateProps={{
        date: refundData.lastUpdated,
      }}
      heroTrust={{
        indicators,
        icon: ShieldCheck,
        iconColor: "text-emerald-300",
      }}
    />
  );
};

export default RefundHero;
