import { howItWorksData } from "@/src/data/how-it-works-data";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
      {howItWorksData.map((data) => (
        <Card key={data.id} {...data} />
      ))}
    </div>
  );
};

export default Cards;
