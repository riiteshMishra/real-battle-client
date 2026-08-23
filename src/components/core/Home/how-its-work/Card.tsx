import Image from "next/image";
import type { StaticImageData } from "next/image";

interface CardProps {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

const Card = ({ id, title, description, image }: CardProps) => {
  const isOffset = id === 2 || id === 4;

  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border border-white/20 bg-white/5 p-5 shadow-lg shadow-gray-600/30 backdrop-blur-xl transition-all duration-300 select-none hover:-translate-y-1 hover:border-cyan-400/40 active:scale-[0.98] active:border-cyan-400/60 active:bg-white/10 ${isOffset ? "lg:translate-y-8" : ""}`}
    >
      {/* Number */}
      <div className="mb-4 flex items-center gap-2">
        <span className="bg-linear-to-r from-purple-500 via-cyan-400 to-orange-500 bg-clip-text text-2xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110 group-active:scale-105">
          {String(id).padStart(2, "0")}
        </span>

        <div className="h-px w-8 bg-cyan-400/30 transition-colors duration-300 group-active:bg-cyan-400/70" />
      </div>

      {/* Image */}
      <div className="relative mb-5 aspect-square overflow-hidden rounded-xl border border-white/5">
        <Image
          src={image}
          alt={title}
          title={`${title} image`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="pointer-events-none object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-active:scale-[1.02] group-active:opacity-100"
        />

        {/* Overlay */}
        <div className="from-background/80 pointer-events-none absolute inset-0 bg-linear-to-t via-transparent to-transparent transition-opacity duration-300 group-active:opacity-70" />
      </div>

      {/* Content */}
      <h3 className="text-foreground mb-2 text-xl font-semibold transition-colors duration-300 group-active:text-cyan-400">
        {title}
      </h3>

      <p className="text-foreground/60 grow text-sm leading-6">{description}</p>
    </article>
  );
};

export default Card;
