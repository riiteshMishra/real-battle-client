import { CircleHelp } from "lucide-react";

const PrivacyFAQHeader = () => {
  return (
    <div className="mb-6 flex items-start gap-3">
      <div
        className="
          flex h-10 w-10 shrink-0
          items-center justify-center
          rounded-lg
          bg-blue-100
          dark:bg-blue-950/60
        "
      >
        <CircleHelp
          aria-hidden="true"
          className="
            h-5 w-5
            text-blue-600
            dark:text-blue-400
          "
        />
      </div>

      <div>
        <h2
          id="privacy-faq-title"
          className="
            text-2xl
            font-bold
            tracking-tight
            text-slate-900
            dark:text-white
          "
        >
          Frequently Asked Questions
        </h2>

        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Common questions about Real Battle, gaming data, tournament
          information, and your privacy.
        </p>
      </div>
    </div>
  );
};

export default PrivacyFAQHeader;
