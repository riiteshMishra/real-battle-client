import { Check, ChevronRight } from "lucide-react";
import type { DocumentSection } from "./types";

type SubsectionsSectionProps = {
  section: Extract<DocumentSection, { type: "subsections" }>;
};

const SubsectionsSection = ({ section }: SubsectionsSectionProps) => {
  return (
    <div className="space-y-8">
      {section.subsections.map((subsection, index) => (
        <div key={index}>
          <h4 className="mb-4 flex items-center gap-3 text-base font-semibold tracking-tight text-slate-900 md:text-lg dark:text-slate-100">
            <ChevronRight
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-orange-500 dark:text-orange-400"
            />

            {subsection.title}
          </h4>

          <ul className="space-y-4 pl-1">
            {subsection.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
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
        </div>
      ))}
    </div>
  );
};

export default SubsectionsSection;
