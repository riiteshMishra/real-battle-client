import { featuresData } from "@/src/data/features-data";
import Card from "./Card";

const FeaturesGrid = () => {
  return (
    <div className="flex flex-col px-8 sm:grid grid-cols-3 gap-8 max-w-5xl mx-auto py-10">
      {featuresData.map((data) => {
        const fullWidth =
          data.title.startsWith("Live") || data.title.startsWith("Multiple");

        return (
          <div
            key={data.id}
            className={fullWidth ? "col-span-2" : "col-span-1"}
          >
            <Card {...data} />
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesGrid;
