type Subsection = {
  title: string;
  items: string[];
};

type SubsectionsSectionProps = {
  section: {
    subsections?: Subsection[];
  };
};

const SubsectionsSection = ({ section }: SubsectionsSectionProps) => {
  if (!section.subsections?.length) return null;

  return (
    <div className="space-y-8">
      {section.subsections.map((subsection, index) => (
        <div key={index}>
          <h3 className="mb-3 flex items-center gap-3 text-base font-semibold tracking-tight text-slate-900 md:text-lg dark:text-slate-100">
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.65)] dark:bg-orange-400 dark:shadow-[0_0_9px_rgba(251,146,60,0.65)]"
            />

            {subsection.title}
          </h3>

          <ul className="space-y-3 pl-1">
            {subsection.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex items-start gap-3 text-sm leading-7 text-slate-700 md:text-base dark:text-slate-300"
              >
                <span
                  aria-hidden="true"
                  className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400 dark:bg-orange-500"
                />

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
