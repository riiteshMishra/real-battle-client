import Image from "next/image";
import type { StaticImageData } from "next/image";
import StatusBadge from "./StatusBadge";

interface GameImageProps {
  image: StaticImageData;
  name: string;
  status: "available" | "coming-soon";
}

const GameImage = ({ image, name, status }: GameImageProps) => {
  return (
    <div className="relative mx-3 mt-3 aspect-16/10 overflow-hidden rounded-2xl bg-linear-to-br from-[#d9f8ff] via-[#bceff7] to-[#8edce8] dark:from-[#263b42] dark:via-[#1c3037] dark:to-[#132329]">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-white/40 blur-3xl transition-all duration-700 group-hover:scale-150" />

      <div className="pointer-events-none absolute -bottom-20 -left-10 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl" />

      <Image
        src={image}
        alt={name}
        fill
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="pointer-events-none object-contain p-5 transition-transform duration-700 group-hover:scale-105"
      />

      <StatusBadge status={status} />

      {/* Game tag */}
      <div className="absolute bottom-3 left-3 rounded-lg border border-white/20 bg-black/25 px-2.5 py-1 text-[10px] font-medium tracking-wider text-white uppercase backdrop-blur-md">
        Battle Royale
      </div>
    </div>
  );
};

export default GameImage;
