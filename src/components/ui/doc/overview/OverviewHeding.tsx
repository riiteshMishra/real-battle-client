import React from "react";

interface OverviewHeding {
  title: string;
  description?: string;
}

const OverviewHeding = ({ title, description }: OverviewHeding) => {
  return (
    <div className="mb-6">
      <h2
        id="overview-title"
        className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
      >
        {title}
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-900 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
};

export default OverviewHeding;
