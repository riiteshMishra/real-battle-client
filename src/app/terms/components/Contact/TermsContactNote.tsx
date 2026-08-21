import { Mail } from "lucide-react";

const TermsContactNote = () => {
  return (
    <div
      className="
        mt-6
        flex items-start gap-3
        rounded-lg
        border border-slate-200
        bg-slate-50
        p-4
        dark:border-slate-800
        dark:bg-slate-900/50
      "
    >
      <Mail
        aria-hidden="true"
        className="
          mt-0.5
          h-4 w-4 shrink-0
          text-slate-500
          dark:text-slate-400
        "
      />

      <p
        className="
          text-xs md:text-sm
          leading-6
          text-slate-600
          dark:text-slate-400
        "
      >
        When contacting us about a tournament, account, or dispute, please
        provide enough relevant information for our team to understand and
        process your request.
      </p>
    </div>
  );
};

export default TermsContactNote;
