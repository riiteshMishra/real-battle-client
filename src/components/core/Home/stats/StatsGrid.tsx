import { statsData } from "./stats";
import StatCard from "./StatCard";

const StatsGrid = () => {
  return (
    <div className="border-foreground/10 bg-foreground/5 mx-auto grid max-w-5xl grid-cols-2 overflow-hidden rounded-3xl border backdrop-blur-xl lg:grid-cols-4">
      {statsData.map((stat, index) => (
        <StatCard key={stat.label} {...stat} index={index} />
      ))}
    </div>
  );
};

export default StatsGrid;
