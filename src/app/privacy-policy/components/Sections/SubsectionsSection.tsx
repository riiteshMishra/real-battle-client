import { Check, ChevronRight } from "lucide-react";

type Subsection = {
  title: string;
  items: string[];
};

type SubsectionsSectionProps = {
  section: {
    subsections: Subsection[];
  };
};

const SubsectionsSection = ({ section }: SubsectionsSectionProps) => {
  return (
    <div className="space-y-8">
      {section.subsections.map((subsection, index) => (
        <div key={index}>
          <h3
            className="
    mb-3
    flex items-center gap-x-4
    text-base md:text-lg
    font-semibold
    tracking-tight
    text-slate-900
    dark:text-slate-100
  "
          >
            <ChevronRight
              aria-hidden="true"
              className="
      h-5 w-5
      shrink-0
      text-orange-500
      dark:text-orange-400
    "
            />

            {subsection.title}
          </h3>
          <ul className="space-y-3 pl-1">
            {subsection.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="
                  flex items-start gap-3
                  text-sm md:text-base
                  leading-7
                  text-slate-700
                  dark:text-slate-300
                "
              >
                <div
                  className="
                    mt-0.5
                    flex h-6 w-6 shrink-0
                    items-center justify-center
                    rounded-full
                    bg-orange-100
                    dark:bg-orange-950/40
                    animate-check-glow
                  "
                >
                  <Check
                    aria-hidden="true"
                    className="
                      h-4 w-4
                      text-orange-600
                      dark:text-orange-400
                      animate-check-color
                    "
                  />
                </div>

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
