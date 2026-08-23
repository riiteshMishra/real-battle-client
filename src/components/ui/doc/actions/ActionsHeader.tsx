import { Scale } from "lucide-react";

interface ActionsHeaderProps {
  title: string;
  description: string;
}

const ActionsHeader = ({ title, description }: ActionsHeaderProps) => {
  return (
    <div className="mb-6 flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-950/70">
        <Scale
          aria-hidden="true"
          className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h2>

        <p className="mt-1 text-sm text-slate-600 md:text-base dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ActionsHeader;
