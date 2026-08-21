import { FileText } from "lucide-react";

const TermsHeroBrand = () => {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div
        className="
          flex h-10 w-10 shrink-0
          items-center justify-center
          rounded-lg
          border border-white/20
          bg-white/10
          backdrop-blur-sm
        "
      >
        <FileText aria-hidden="true" className="h-5 w-5 text-cyan-200" />
      </div>

      <div>
        <p className="text-sm font-semibold text-blue-100 dark:text-blue-300">
          Real Battle
        </p>

        <p className="text-xs text-blue-200/80 dark:text-slate-400">
          Free Fire Gaming & Tournament Platform
        </p>
      </div>
    </div>
  );
};

export default TermsHeroBrand;
