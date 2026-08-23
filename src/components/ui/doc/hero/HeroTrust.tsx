import React from "react";
import { LucideIcon, ShieldCheck } from "lucide-react";

export interface HeroTrustProps {
  indicators: string[];
  icon?: LucideIcon;
  iconColor?: string;
  textColor?: string;
}

const HeroTrust: React.FC<HeroTrustProps> = ({
  indicators,
  icon: Icon = ShieldCheck,
  iconColor = "text-emerald-300",
  textColor = "text-blue-100/80 dark:text-slate-400",
}) => {
  return (
    <div
      className={`mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs ${textColor}`}
    >
      {indicators.map((indicator) => (
        <span key={indicator} className="flex items-center gap-2">
          <Icon aria-hidden="true" className={`h-4 w-4 ${iconColor}`} />

          {indicator}
        </span>
      ))}
    </div>
  );
};

export default HeroTrust;
