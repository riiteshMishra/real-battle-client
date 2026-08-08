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
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary  hover:scale-90 active:scale-90 transition-all">
        <Icon className="h-5 w-5 text-accent" />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-muted">{description}</p>

      {image && (
        <div className="mt-5 max-h-20 overflow-hidden rounded-xl hover:scale-95 transition-transform duration-200">
          <Image
            src={image}
            alt={`${title} preview`}
            className="h-auto w-full object-cover pointer-events-none"
          />
        </div>
      )}
    </div>
  );
};

export default Card;
