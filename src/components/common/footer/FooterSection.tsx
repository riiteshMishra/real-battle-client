// components/Footer/FooterSection.tsx
import React from "react";
import { FooterSection as FooterSectionType } from "@/src/data/footer-data";
import FooterLink from "./FooterLink";

interface FooterSectionProps {
  section: FooterSectionType;
}

const FooterSection: React.FC<FooterSectionProps> = ({ section }) => {
  return (
    <div className=" min-w-80 sm:min-w-60 flex flex-col items-center py-4 ">
      <h3 className="text-white font-semibold text-lg uppercase tracking-widest mb-5">
        {section.title}
      </h3>
      <ul className="flex flex-col items-center sm:items-start gap-y-4">
        {section.links.map((link) => (
          <FooterLink key={link.id} link={link} />
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
