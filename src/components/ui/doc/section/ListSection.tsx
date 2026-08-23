import { Check } from "lucide-react";
import type { DocumentSection } from "./types";

type ListSectionProps = {
  section: Extract<DocumentSection, { type: "list" }>;
};

const ListSection = ({ section }: ListSectionProps) => {
  return (
    <ul className="space-y-4">
      {section.items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 text-sm leading-7 text-slate-700 md:text-base dark:text-slate-300"
        >
          <span
            aria-hidden="true"
            className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 shadow-[0_0_10px_rgba(37,99,235,0.25)] dark:bg-blue-950/70 dark:shadow-[0_0_12px_rgba(59,130,246,0.35)]"
          >
            <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </span>

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default ListSection;
