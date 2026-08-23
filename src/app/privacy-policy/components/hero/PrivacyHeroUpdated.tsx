import { CalendarDays } from "lucide-react";
import { privacyData } from "@/src/content/privacy/privacy-index";

const PrivacyHeroUpdated = () => {
  return (
    <div className="mt-7">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 shadow-lg shadow-blue-950/10 backdrop-blur-md">
        <CalendarDays aria-hidden="true" className="h-4 w-4 text-cyan-200" />

        <span className="text-xs text-blue-100 sm:text-sm">Last updated</span>

        <span className="text-xs font-semibold text-white sm:text-sm">
          {privacyData.lastUpdated}
        </span>
      </div>
    </div>
  );
};

export default PrivacyHeroUpdated;
