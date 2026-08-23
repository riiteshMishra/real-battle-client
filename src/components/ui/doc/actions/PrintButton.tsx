"use client";
import { Printer } from "lucide-react";
import { Button } from "@/src/components/common/button";

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handlePrint}
      className="h-auto min-h-16 justify-start gap-3 border-purple-200 bg-white px-4 py-4 text-left hover:border-purple-400 hover:bg-purple-50 dark:border-purple-900 dark:bg-slate-950/50 dark:hover:border-purple-700 dark:hover:bg-purple-950/30"
    >
      <Printer
        aria-hidden="true"
        className="h-5 w-5 shrink-0 text-purple-600 dark:text-purple-400"
      />

      <span>
        <span className="block font-semibold text-slate-900 dark:text-slate-100">
          Print Terms
        </span>

        <span className="mt-1 block text-xs font-normal text-slate-500 dark:text-slate-400">
          Print or save as PDF
        </span>
      </span>
    </Button>
  );
};

export default PrintButton;
