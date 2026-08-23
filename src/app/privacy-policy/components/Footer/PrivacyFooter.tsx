import { ShieldCheck } from "lucide-react";
import { privacyData } from "@/src/content/privacy/privacy-index";

const PrivacyFooter = () => {
  return (
    <footer className="border-t border-slate-200 pt-8 pb-6 dark:border-slate-800">
      <div className="flex flex-col items-center gap-4 text-center">
        {/* Policy identity */}
        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
          <ShieldCheck
            aria-hidden="true"
            className="h-4 w-4 text-blue-600 dark:text-blue-400"
          />

          <span className="text-sm font-semibold">
            Real Battle Privacy Policy
          </span>
        </div>

        {/* Last updated */}
        <p className="text-sm text-slate-600 dark:text-slate-400">
          This Privacy Policy was last updated on{" "}
          <time
            dateTime="2026-08-21"
            className="font-medium text-slate-900 dark:text-slate-200"
          >
            {privacyData.lastUpdated}
          </time>
          .
        </p>

        {/* Policy notice */}
        <p className="max-w-2xl text-xs leading-relaxed text-slate-500 md:text-sm dark:text-slate-500">
          We may update this Privacy Policy from time to time to reflect changes
          in our services, technology, legal requirements, or data practices.
          Please check this page periodically for updates.
        </p>

        {/* Copyright */}
        <p className="pt-1 text-xs text-slate-400 dark:text-slate-600">
          © {new Date().getFullYear()} Real Battle. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default PrivacyFooter;
