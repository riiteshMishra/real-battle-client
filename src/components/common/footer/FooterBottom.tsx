// components/Footer/FooterBottom.tsx
import React from "react";
import { footerBottom } from "@/src/data/footer-data";

const FooterBottom: React.FC = () => {
  return (
    <div className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-gray-500">
          <span>{footerBottom.copyright}</span>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <span>{footerBottom.madeWith}</span>
            <footerBottom.madeWithIcon className="w-4 h-4 text-red-500" />
            <span>{footerBottom.by}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
