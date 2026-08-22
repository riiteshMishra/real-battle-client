import { RefundSection } from "@/src/content/refund/types";

interface SubsectionsSectionProps {
  section: RefundSection;
}

const SubsectionsSection = ({ section }: SubsectionsSectionProps) => {
  return (
    <div className="space-y-6">
      {section.subsections?.map((subsection) => (
        <section key={subsection.id}>
          <h3
            className="
              mb-2
              text-base
              font-semibold
              text-slate-900
              dark:text-slate-100
            "
          >
            {subsection.title}
          </h3>

          <ul className="space-y-2">
            {subsection.items.map((item, index) => (
              <li
                key={index}
                className="
                  relative
                  pl-6
                  text-sm
                  leading-7
                  text-slate-700
                  dark:text-slate-300
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    left-1.5
                    top-3
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-blue-500
                    dark:bg-blue-400
                  "
                />

                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default SubsectionsSection;
