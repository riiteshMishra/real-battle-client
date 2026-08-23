import React from "react";
import type { OverviewProps } from "./types";
import OverviewHeding from "./OverviewHeding";
import OverviewCard from "./OverviewCard";

const OverviewTemplate = ({ title, description, items }: OverviewProps) => {
  return (
    <section aria-labelledby="overview-title" className="mb-12">
      <OverviewHeding title={title} description={description} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <OverviewCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default OverviewTemplate;
