import { gamesData } from "@/src/data/supported-games";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {gamesData.map((data) => (
        <Card key={data.id} {...data} />
      ))}
    </div>
  );
};

export default Cards;
