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
      <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400 bg-green-100 px-4 py-2 shadow-lg shadow-blue-950/10 backdrop-blur-md dark:border-white/20 dark:bg-white/10">
        <CalendarDays
          aria-hidden="true"
          className="h-4 w-4 dark:text-cyan-200"
        />

        <span className="text-xs sm:text-sm dark:text-blue-100">{title}</span>

        <span className="text-xs font-semibold sm:text-sm dark:text-white">
          {formattedDate}
        </span>
      </div>
    </div>
  );
};

export default HeroUpdate;
