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
      className={`group shadow shadow-gray-600 flex h-full flex-col rounded-2xl border border-white/40 bg-white/5 p-6 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 ${
        isOffset ? "lg:translate-y-8" : ""
      }`}
    >
      {/* Number */}
      <div className="mb-4 flex items-center gap-2">
        <span className="text-2xl font-bold bg-linear-to-r from-purple-500 via-cyan-400 to-orange-500 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110">
          {String(id).padStart(2, "0")}
        </span>

        <div className="h-px w-8 bg-cyan-400/30" />
      </div>

      {/* Image */}
      <div className="relative mb-6 aspect-square overflow-hidden rounded-xl border border-white/5">
        <Image
          src={image}
          alt={title}
          title={`${title} image`}
          fill
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 active:opacity-100"
        />
      </div>

      {/* Content */}
      <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>

      <p className="grow text-sm leading-6 text-foreground/60">{description}</p>
    </article>
  );
};

export default Card;
