import React from "react";
import { CalendarDays } from "lucide-react";

export interface HeroUpdateProps {
  title?: string;
  date: string | Date;
}

const HeroUpdate: React.FC<HeroUpdateProps> = ({
  title = "Last updated",
  date,
}) => {
  // Format date properly
  const formattedDate = date instanceof Date ? date.toLocaleDateString() : date;

  return (
    <div className="mt-7">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 shadow-lg shadow-blue-950/10 backdrop-blur-md">
        <CalendarDays aria-hidden="true" className="h-4 w-4 text-cyan-200" />

        <span className="text-xs text-blue-100 sm:text-sm">{title}</span>

        <span className="text-xs font-semibold text-white sm:text-sm">
          {formattedDate}
        </span>
      </div>
    </div>
  );
};

export default HeroUpdate;
