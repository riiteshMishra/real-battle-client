import { ShieldCheck } from "lucide-react";

const PrivacyActionsHeader = () => {
  return (
    <div className="mb-6 flex items-start gap-3">
      <div
        className="
          flex h-10 w-10 shrink-0
          items-center justify-center
          rounded-lg
          bg-blue-100
          dark:bg-blue-950/70
        "
      >
        <ShieldCheck
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
          id="privacy-actions-title"
          className="
            text-2xl font-bold tracking-tight
            text-slate-900
            dark:text-white
          "
        >
          Manage Your Privacy
        </h2>

        <p className="mt-1 text-sm md:text-base text-slate-600 dark:text-slate-400">
          Manage your personal information, download this Privacy Policy, or
          request deletion of your Real Battle account.
        </p>
      </div>
    </div>
  );
};

export default PrivacyActionsHeader;
