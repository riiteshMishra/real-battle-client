import Image from "next/image";
import { assets } from "@/src/assets/assets";

const HeroImg = () => {
  return (
    <div className="group relative mx-auto w-full max-w-xl">
      <Image
        src={assets.HeroImage}
        alt="Real Battle"
        priority
        sizes="(max-width: 768px) 90vw, 50vw"
        className="pointer-events-none mx-auto w-full select-none rounded-2xl object-cover transition-transform duration-300 group-hover:scale-[0.98]"
      />
    </div>
  );
};

export default HeroImg;
