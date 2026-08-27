import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: StaticImageData;
}

const Card = ({ title, description, icon: Icon, image }: CardProps) => {
  return (
    <div className="border-border bg-card/50 rounded-2xl border p-5">
      <div className="bg-primary/10 text-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl transition-all hover:scale-90 active:scale-95">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="text-foreground font-roboto mt-4 text-lg font-semibold">
        {title}
      </h3>

      <p className="text-foreground/50 font-roboto mt-2 text-sm leading-6">
        {description}
      </p>

      {image && (
        <div className="mt-5 max-h-20 overflow-hidden rounded-xl transition-transform duration-200 hover:scale-95">
          <Image
            src={image}
            alt={`${title} preview`}
            className="pointer-events-none h-auto w-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Card;
