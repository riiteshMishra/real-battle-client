import Image from "next/image";
import type { StaticImageData } from "next/image";

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
    <article className="group overflow-hidden rounded-2xl border border-white bg-[#d0f3fa] px-4 py-5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 dark:border-0 dark:bg-[#2f3f46]">
      <div className="relative aspect-video overflow-hidden rounded-xl border p-4">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="pointer-events-none rounded-2xl object-contain transition-transform duration-500 group-hover:scale-95"
        />

        {/* PIN */}
        <span
          className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-md ${
            isAvailable
              ? "bg-green-500/20 text-green-400"
              : "bg-black/35 text-white"
          }`}
        >
          {isAvailable ? "Available Now" : "Coming Soon"}
        </span>
      </div>

      <div className="p-2 pt-4">
        <h3 className="text-foreground text-xl font-semibold">{name}</h3>

        <p className="text-foreground/60 mt-2 text-xs leading-6 capitalize">
          {description}
        </p>

        {/* BUTTON */}
        <button
          disabled={!isAvailable}
          className={`mt-5 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
            isAvailable
              ? "bg-accent cursor-pointer text-white hover:opacity-90"
              : "cursor-not-allowed bg-[#3d4955] text-white dark:bg-[#90a7ab]"
          }`}
        >
          {isAvailable ? "Explore Tournaments" : "Coming Soon"}
        </button>
      </div>
    </article>
  );
};

export default Card;
