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
    <article className="group overflow-hidden rounded-2xl border border-white dark:border-0 shadow-2xl px-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 bg-[#d0f3fa] dark:bg-[#2f3f46] py-5">
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain transition-transform duration-500 group-hover:scale-95 rounded-2xl "
        />

        {/* PIN */}
        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-md ${
            isAvailable
              ? "bg-green-500/20 text-green-400"
              : "bg-black/35 text-white"
          }`}
        >
          {isAvailable ? "Available Now" : "Coming Soon"}
        </span>
      </div>

      <div className="p-2 pt-4">
        <h3 className="text-xl font-semibold text-foreground">{name}</h3>

        <p className="mt-2 text-xs leading-6 text-foreground/60 capitalize">
          {description}
        </p>

        {/* BUTTON */}
        <button
          disabled={!isAvailable}
          className={`mt-5 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
            isAvailable
              ? "cursor-pointer bg-accent text-white hover:opacity-90"
              : "cursor-not-allowed bg-[#3d4955] dark:bg-[#90a7ab] text-white"
          }`}
        >
          {isAvailable ? "Explore Tournaments" : "Coming Soon"}
        </button>
      </div>
    </article>
  );
};

export default Card;
