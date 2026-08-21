import { List } from "lucide-react";
import { privacyData } from "@/src/content/privacy/privacy-index";

const PrivacyTableOfContents = () => {
  return (
    <section
      aria-labelledby="privacy-table-of-contents"
      className="
        mb-12 rounded-xl border p-6
        border-slate-200 bg-slate-50
        dark:border-slate-800 dark:bg-slate-900/60
      "
    >
      <div className="mb-5 flex items-center gap-3">
        <div
          className="
            flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
            bg-blue-100 dark:bg-blue-950/60
          "
        >
          <List
            aria-hidden="true"
            className="h-5 w-5 text-blue-600 dark:text-blue-400"
          />
        </div>

        <h2
          id="privacy-table-of-contents"
          className="
            text-xl font-bold tracking-tight
            text-slate-900 dark:text-white
          "
        >
          Privacy Policy Contents
        </h2>
      </div>

      <p className="mb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        Browse the sections below to learn how Real Battle handles your personal
        information, gaming data, tournament information, security, and privacy
        rights.
      </p>

      <nav aria-label="Privacy Policy sections">
        <ol className="grid grid-cols-1 gap-x-8 gap-y-1 md:grid-cols-2">
          {privacyData.sections.map((section, index) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="
                  group flex items-center gap-3 rounded-lg px-3 py-2.5
                  text-sm transition-colors
                  text-slate-600 hover:bg-white hover:text-blue-600
                  dark:text-slate-400 dark:hover:bg-slate-800
                  dark:hover:text-blue-400
                "
              >
                <span
                  className="
                    flex h-6 w-6 shrink-0 items-center justify-center
                    rounded-md text-xs font-medium
                    bg-slate-200 text-slate-600
                    group-hover:bg-blue-100 group-hover:text-blue-600
                    dark:bg-slate-800 dark:text-slate-400
                    dark:group-hover:bg-blue-950
                    dark:group-hover:text-blue-400
                  "
                >
                  {index + 1}
                </span>

                <span className="leading-relaxed group-hover:underline">
                  {section.title.replace(/^\d+\.\s*/, "")}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
};

export default PrivacyTableOfContents;
