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
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/6 bg-linear-to-b from-neutral-900/80 to-neutral-950/90 p-5 shadow-2xl transition-all duration-500 ease-out select-none hover:-translate-y-3 hover:border-cyan-500/30 hover:shadow-[0_20px_50px_-12px_rgba(6,182,212,0.15)] active:scale-[0.99] ${
        isOffset ? "md:translate-y-6 lg:translate-y-12" : ""
      }`}
    >
      {/* Background Interactive Mesh (Halka sa depth dene ke liye) */}
      <div className="absolute top-0 right-0 -z-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-purple-500/15" />

      {/* Main Content Wrapper */}
      <div className="flex flex-col">
        {/* Top Header Section */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text font-mono text-xs font-bold tracking-widest text-transparent uppercase">
              Project
            </span>
            <span className="font-mono text-2xl font-black tracking-tighter text-white/20 transition-all duration-300 group-hover:text-cyan-400/40">
              {String(id).padStart(2, "0")}
            </span>
          </div>

          {/* Futuristic Corner Arrow Accent */}
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/4 bg-white/2 text-neutral-500 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 group-hover:text-cyan-400">
            <svg
              xmlns="http://w3.org"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>

        {/* Premium Image Container */}
        <div className="relative mb-5 aspect-16/10 w-full overflow-hidden rounded-xl border border-white/8 bg-neutral-950 sm:aspect-4/3">
          <Image
            src={image}
            alt={title}
            title={`${title} image`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="pointer-events-none object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
            priority={id <= 2}
          />
        </div>

        {/* Text Section */}
        <h3 className="mb-2 text-xl font-bold tracking-tight text-white/95 transition-colors duration-300 group-hover:text-cyan-400">
          {title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed font-normal text-neutral-400">
          {description}
        </p>
      </div>

      {/* Decorative Bottom Accent Bar */}
      <div className="mt-5 h-0.5 w-0 bg-linear-to-r from-cyan-500 via-purple-500 to-transparent transition-all duration-500 ease-out group-hover:w-full" />
    </article>
  );
};

export default Card;
