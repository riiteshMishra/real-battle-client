// components/Footer/Footer.tsx
import React from "react";
import { footerData } from "@/src/data/footer-data";
import FooterSection from "./FooterSection";
import FooterBottom from "./FooterBottom";
import Details from "./Details";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-12">
          <Details />
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-8 sm:justify-between">
          {footerData.map((section) => (
            <FooterSection key={`footer-${section.title}`} section={section} />
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <FooterBottom />
    </footer>
  );
};

export default Footer;
