import type { StaticImageData } from "next/image";
import GameCTA from "./GameCTA";
import GameImage from "./GameImage";
import GameMeta from "./GameMeta";

interface CardProps {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  status: "available" | "coming-soon";
}

const Card = ({ name, description, image, status }: CardProps) => {
  const isAvailable = status === "available";

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(0,0,0,0.14)] dark:border-white/10 dark:bg-[#182329]">
      <GameImage image={image} name={name} status={status} />

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-foreground text-xl font-bold tracking-tight">
              {name}
            </h3>

            <p className="text-foreground/55 mt-2 text-sm leading-6">
              {description}
            </p>
          </div>
        </div>

        <GameMeta />

        <GameCTA isAvailable={isAvailable} />
      </div>
    </article>
  );
};

export default Card;
