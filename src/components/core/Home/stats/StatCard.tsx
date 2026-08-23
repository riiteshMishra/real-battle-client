"use client";

import CountUp from "react-countup";
import type { Stat } from "./stats";

interface StatCardProps extends Stat {
  index: number;
}

const StatCard = ({ value, label, suffix, index }: StatCardProps) => {
  return (
    <div
      title={label}
      className={`flex flex-col items-center justify-center px-4 py-4 text-center sm:py-5 ${
        index < 2 ? "border-foreground/10 border-b lg:border-b-0" : ""
      } ${
        index % 2 === 0 ? "border-foreground/10 border-r" : ""
      } lg:border-r lg:last:border-r-0`}
    >
      <div className="text-3xl font-bold sm:text-4xl">
        <CountUp
          end={value}
          duration={2.5}
          enableScrollSpy
          scrollSpyOnce
          useGrouping
        />
        {suffix}
      </div>

      <p className="text-foreground/60 mt-2 text-sm sm:text-base">{label}</p>
    </div>
  );
};

export default StatCard;
