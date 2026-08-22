import { List } from "lucide-react";
import { disclaimerData } from "@/src/content/disclaimer/disclaimer-index";

const DisclaimerTableOfContents = () => {
  return (
    <section
      aria-labelledby="disclaimer-toc-title"
      className="
        mb-12
        rounded-xl
        border border-slate-200
        bg-slate-50/80
        p-6 md:p-8
        dark:border-slate-800
        dark:bg-slate-900/60
      "
    >
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div
          className="
            flex h-10 w-10 shrink-0
            items-center justify-center
            rounded-lg
            bg-orange-100
            dark:bg-orange-950/60
          "
        >
          <List
            aria-hidden="true"
            className="h-5 w-5 text-orange-600 dark:text-orange-400"
          />
        </div>

        <div>
          <h2
            id="disclaimer-toc-title"
            className="
              text-xl font-bold tracking-tight
              text-slate-900
              dark:text-slate-100
            "
          >
            Table of Contents
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Explore the sections covered in this Disclaimer.
          </p>
        </div>
      </div>

      {/* Section Links */}
      <nav aria-label="Disclaimer sections">
        <div className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
          {disclaimerData.sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="
                group
                flex items-center gap-3
                rounded-lg
                px-3 py-2.5
                text-sm
                text-slate-600
                transition-all
                hover:bg-white
                hover:text-orange-600
                dark:text-slate-400
                dark:hover:bg-slate-950
                dark:hover:text-orange-400
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-1.5 w-1.5 shrink-0
                  rounded-full
                  bg-slate-400
                  transition-all
                  group-hover:bg-orange-600
                  group-hover:shadow-[0_0_8px_rgba(234,88,12,0.7)]
                  dark:bg-slate-600
                  dark:group-hover:bg-orange-400
                  dark:group-hover:shadow-[0_0_8px_rgba(251,146,60,0.7)]
                "
              />

              <span className="leading-5 group-hover:underline">
                {section.title}
              </span>
            </a>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default DisclaimerTableOfContents;
