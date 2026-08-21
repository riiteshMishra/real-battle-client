import { ShieldCheck } from "lucide-react";

const TermsHeroTrust = () => {
  const indicators = ["Fair Play", "Tournament Rules", "Player Protection"];

  return (
    <div
      className="
        mt-8
        flex flex-wrap
        items-center
        gap-x-6
        gap-y-3
        text-xs
        text-blue-100/80
        dark:text-slate-400
      "
    >
      {indicators.map((indicator) => (
        <span key={indicator} className="flex items-center gap-2">
          <ShieldCheck
            aria-hidden="true"
            className="
              h-4 w-4
              text-emerald-300
            "
          />

          {indicator}
        </span>
      ))}
    </div>
  );
};

export default TermsHeroTrust;
