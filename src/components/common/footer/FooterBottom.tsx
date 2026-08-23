// components/Footer/FooterBottom.tsx
import React from "react";
import { footerBottom } from "@/src/data/footer-data";

const FooterBottom: React.FC = () => {
  return (
    <div className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center justify-center gap-2 text-xs text-gray-500 sm:flex-row sm:text-sm">
          <span>{footerBottom.copyright}</span>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <span>{footerBottom.madeWith}</span>
            <footerBottom.madeWithIcon className="h-4 w-4 text-red-500" />
            <span>{footerBottom.by}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
