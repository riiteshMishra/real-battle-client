import { ShieldCheck } from "lucide-react";

const PrivacyHeroBrand = () => {
  return (
    <div className="mb-5 flex items-center gap-2">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm">
        <ShieldCheck aria-hidden="true" className="h-5 w-5 text-cyan-200" />
      </div>

      <div>
        <p className="text-sm font-semibold text-blue-100 dark:text-blue-300">
          Real Battle
        </p>

        <p className="text-xs text-blue-200/80 dark:text-slate-400">
          Free Fire Gaming Platform
        </p>
      </div>
    </div>
  );
};

export default PrivacyHeroBrand;
