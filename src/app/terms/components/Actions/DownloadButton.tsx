"use client";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadButton = () => {
  const handleDownload = () => {
    const termsContent = `
Real Battle - Terms of Service
Last Updated: August 21, 2026

[Full terms content here...]
    `.trim();

    const element = document.createElement("a");
    const file = new Blob([termsContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "Real-Battle-Terms-of-Service.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleDownload}
      className="
        h-auto min-h-16
        justify-start gap-3
        border-blue-200
        bg-white
        px-4 py-4
        text-left
        hover:border-blue-400
        hover:bg-blue-50
        dark:border-blue-900
        dark:bg-slate-950/50
        dark:hover:border-blue-700
        dark:hover:bg-blue-950/30
      "
    >
      <Download
        aria-hidden="true"
        className="
          h-5 w-5 shrink-0
          text-blue-600
          dark:text-blue-400
        "
      />

      <span>
        <span className="block font-semibold text-slate-900 dark:text-slate-100">
          Download Terms
        </span>

        <span className="mt-1 block text-xs font-normal text-slate-500 dark:text-slate-400">
          Save a copy for your records
        </span>
      </span>
    </Button>
  );
};

export default DownloadButton;
