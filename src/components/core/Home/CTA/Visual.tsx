import Image from "next/image";
import { assets } from "@/src/assets/assets";

const Visual = () => {
  return (
    <div className="relative z-10 mx-auto mt-10 w-full max-w-sm lg:ml-auto lg:mt-0">
      <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-black/10 p-3 shadow-2xl">
        <Image
          src={assets.HeroImage}
          alt="Real Battle"
          className="h-auto w-full rounded-2xl object-cover pointer-events-none"
        />

        <div className="pointer-events-none absolute inset-3 rounded-2xl bg-linear-to-t from-black/50 via-transparent to-transparent" />
      </div>
    </div>
  );
};

export default Visual;
