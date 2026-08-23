import { ShieldCheck } from "lucide-react";

const PrivacyContactHeader = () => {
  return (
    <div className="mb-8 flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950/60">
        <ShieldCheck
          aria-hidden="true"
          className="h-6 w-6 text-blue-600 dark:text-blue-400"
        />
      </div>

      <div>
        <h2
          id="privacy-contact-title"
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Contact Us
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base dark:text-slate-300">
          If you have questions, concerns, or requests regarding this Privacy
          Policy or your personal information, contact our team.
        </p>
      </div>
    </div>
  );
};

export default PrivacyContactHeader;
