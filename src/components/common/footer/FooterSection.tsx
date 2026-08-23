// components/Footer/FooterSection.tsx
import React from "react";
import { FooterSection as FooterSectionType } from "@/src/data/footer-data";
import FooterLink from "./FooterLink";

interface FooterSectionProps {
  section: FooterSectionType;
}

const FooterSection: React.FC<FooterSectionProps> = ({ section }) => {
  return (
    <div className="flex min-w-80 flex-col items-center py-4 sm:min-w-60">
      <h3 className="mb-5 text-lg font-semibold tracking-widest text-white uppercase">
        {section.title}
      </h3>
      <ul className="flex flex-col items-center gap-y-4 sm:items-start">
        {section.links.map((link) => (
          <FooterLink key={link.id} link={link} />
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
