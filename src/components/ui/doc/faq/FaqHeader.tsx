import { CircleHelp } from "lucide-react";

interface FaqHeaderProps {
  title: string;
  description?: string;
}

const FaqHeader = ({ title, description }: FaqHeaderProps) => {
  return (
    <div className="mb-6 flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950/60">
        <CircleHelp
          aria-hidden="true"
          className="h-5 w-5 text-blue-600 dark:text-blue-400"
        />
      </div>

      <div>
        <h2
          id="faq-title"
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default FaqHeader;
