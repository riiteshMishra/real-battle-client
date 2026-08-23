import { List } from "lucide-react";

const TermsTOCHeader = () => {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950/60">
        <List
          aria-hidden="true"
          className="h-5 w-5 text-blue-600 dark:text-blue-400"
        />
      </div>

      <div>
        <h2
          id="terms-toc-title"
          className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
        >
          Table of Contents
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Explore the rules, responsibilities, and policies covered in these
          Terms of Service.
        </p>
      </div>
    </div>
  );
};

export default TermsTOCHeader;
