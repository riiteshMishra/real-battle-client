// components/Footer/Footer.tsx
import React from "react";
import { footerData } from "@/src/data/footer-data";
import FooterSection from "./FooterSection";
import FooterBottom from "./FooterBottom";
import Details from "./Details";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-12">
          <Details />
        </div>

        <div className="flex flex-wrap gap-8 mb-12 sm:justify-between justify-center">
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
