import React from "react";
import { LucideIcon } from "lucide-react";

export interface HeroBrandProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  titleColor?: string;
  subtitleColor?: string;
  iconColor?: string;
  iconSize?: number;
}

const HeroBrand: React.FC<HeroBrandProps> = ({
  icon: Icon,
  title,
  subtitle,
  titleColor = "text-blue-100 dark:text-blue-300",
  subtitleColor = "text-blue-200/80 dark:text-slate-400",
  iconColor = "text-cyan-200",
  iconSize = 5,
}) => {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm">
        <Icon
          aria-hidden="true"
          className={`h-${iconSize} w-${iconSize} ${iconColor}`}
        />
      </div>

      <div>
        <p className={`text-sm font-semibold ${titleColor}`}>{title}</p>

        <p className={`text-xs ${subtitleColor}`}>{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroBrand;
