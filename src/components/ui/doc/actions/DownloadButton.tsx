"use client";

import { Download } from "lucide-react";
import { Button } from "@/src/components/common/button";

interface DownloadButtonProps {
  fileName: string;
  content: string;
  title: string;
  subtitle: string;
}

const DownloadButton = ({
  fileName,
  content,
  title,
  subtitle,
}: DownloadButtonProps) => {
  const handleDownload = () => {
    const file = new Blob([content], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(file);

    const link = document.createElement("a");

    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleDownload}
      className="h-auto min-h-16 justify-start gap-3 border-blue-200 bg-white px-4 py-4 text-left hover:border-blue-400 hover:bg-blue-50 dark:border-blue-900 dark:bg-slate-950/50 dark:hover:border-blue-700 dark:hover:bg-blue-950/30"
    >
      <Download
        aria-hidden="true"
        className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400"
      />

      <span>
        <span className="block font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </span>

        <span className="mt-1 block text-xs font-normal text-slate-500 dark:text-slate-400">
          {subtitle}
        </span>
      </span>
    </Button>
  );
};

export default DownloadButton;
