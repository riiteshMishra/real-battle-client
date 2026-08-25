import React from "react";
import { Button } from "@/src/components/common/button";

export interface StepItem {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}

export interface LeftSectionProps {
  title: string;
  highlightText?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  steps?: StepItem[];
  badges?: string[];
  className?: string;
}

const LeftSection = ({
  title,
  highlightText,
  description,
  primaryButtonText = "Download App",
  primaryButtonLink = "#",
  secondaryButtonText,
  secondaryButtonLink = "#",
  badges = [],
  className = "",
}: LeftSectionProps) => {
  return (
    <section className={`flex max-w-2xl flex-col gap-6 ${className}`}>
      {/* Headline */}
      <h1 className="text-foreground text-xl leading-tight font-bold tracking-tight capitalize md:text-3xl lg:text-5xl">
        {title} <br />
        {highlightText && (
          <strong className="text-primary gradient-text underline">
            {highlightText}
          </strong>
        )}
      </h1>

      {/* Description */}
      {description && (
        <p className="text-muted-foreground font-roboto max-w-xl text-base leading-relaxed md:text-sm">
          {description}
        </p>
      )}

      {/* Buttons */}
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <Button asChild size="lg" className="rounded-full px-6">
          <a href={primaryButtonLink}>{primaryButtonText}</a>
        </Button>

        {secondaryButtonText && (
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-6"
          >
            <a href={secondaryButtonLink}>{secondaryButtonText}</a>
          </Button>
        )}
      </div>

      {/* Trust Badges */}
      {badges.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="border-border bg-muted/60 text-muted-foreground inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium"
            >
              {badge}
            </span>
          ))}
        </div>
      )}
    </section>
  );
};

export default LeftSection;
