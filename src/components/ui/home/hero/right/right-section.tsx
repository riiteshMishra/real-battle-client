import React from "react";
import Image, { StaticImageData } from "next/image";
import HeroImg from "@/src/assets/hero_image.jpg";

export interface RightSectionProps {
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  className?: string;
  children?: React.ReactNode;
}

const RightSection = ({
  imageSrc = HeroImg, // apna image path daal dena
  imageAlt = "Real Battle Hero",
  className = "",
  children,
}: RightSectionProps) => {
  return (
    <div
      className={`relative flex w-full max-w-xl items-center justify-center lg:max-w-2xl ${className}`}
    >
      {/* Main Image */}
      <div className="relative h-fit w-fit overflow-hidden rounded-2xl">
        <Image
          src={imageSrc}
          alt={imageAlt}

          className="pointer-events-none rounded-2xl object-contain drop-shadow-2xl"
          priority
        />
      </div>

      {/* Optional extra content (badges, floating cards etc.) */}
      {children}
    </div>
  );
};

export default RightSection;
