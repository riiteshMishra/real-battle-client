import { featuresData } from "@/src/data/features-data";
import Card from "./Card";

const FeaturesGrid = () => {
  return (
    <div className="mx-auto flex max-w-5xl grid-cols-3 flex-col gap-8 px-8 py-10 sm:grid">
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
