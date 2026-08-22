import { List } from "lucide-react";
import { refundData } from "@/src/content/refund/refund-index";

const RefundTableOfContents = () => {
  const data = refundData;

  return (
    <section
      aria-labelledby="refund-toc-title"
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
      <div className="mb-5 flex items-center gap-3">
        <div
          className="
            flex h-10 w-10 shrink-0
            items-center justify-center
            rounded-lg
            bg-blue-100
            dark:bg-blue-950/60
          "
        >
          <List
            aria-hidden="true"
            className="h-5 w-5 text-blue-600 dark:text-blue-400"
          />
        </div>

        <div>
          <h2
            id="refund-toc-title"
            className="
              text-xl
              font-bold
              tracking-tight
              text-slate-900
              dark:text-slate-100
            "
          >
            Table of Contents
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Explore the refund rules, eligibility requirements, payment
            handling, and refund procedures.
          </p>
        </div>
      </div>

      <nav aria-label="Refund Policy sections">
        <ol
          className="
            grid
            grid-cols-1
            gap-x-8
            gap-y-2
            md:grid-cols-2
          "
        >
          {data.sections.map((section) => (
            <li key={section.id}>
              <a
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
                  hover:text-blue-600
                  dark:text-slate-400
                  dark:hover:bg-slate-950
                  dark:hover:text-blue-400
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    h-1.5 w-1.5 shrink-0
                    rounded-full
                    bg-slate-400
                    transition-all
                    group-hover:bg-blue-600
                    group-hover:shadow-[0_0_8px_rgba(37,99,235,0.7)]
                    dark:bg-slate-600
                    dark:group-hover:bg-blue-400
                  "
                />

                <span className="leading-5 group-hover:underline">
                  {section.title}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
};

export default RefundTableOfContents;
