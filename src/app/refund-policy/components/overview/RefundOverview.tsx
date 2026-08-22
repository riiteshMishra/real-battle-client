import { CircleCheck, CreditCard, RotateCcw, ShieldCheck } from "lucide-react";

import { refundData } from "@/src/content/refund/refund-index";

const RefundOverview = () => {
  const data = refundData;

  const overviewItems = [
    {
      sectionId: "general-refund",
      title: "General Refunds",
      icon: RotateCcw,
      color: "blue",
    },
    {
      sectionId: "tournament-cancellation",
      title: "Tournament Cancellation",
      icon: ShieldCheck,
      color: "emerald",
    },
    {
      sectionId: "failed-payment",
      title: "Payment Issues",
      icon: CreditCard,
      color: "orange",
    },
    {
      sectionId: "refund-eligibility",
      title: "Refund Eligibility",
      icon: CircleCheck,
      color: "purple",
    },
  ] as const;

  return (
    <section aria-labelledby="refund-overview-title" className="mb-12">
      <div className="mb-6">
        <h2
          id="refund-overview-title"
          className="
            text-2xl
            font-bold
            tracking-tight
            text-slate-900
            dark:text-slate-100
          "
        >
          Quick Overview
        </h2>

        <p
          className="
            mt-2
            text-sm
            leading-6
            text-slate-600
            dark:text-slate-400
          "
        >
          {data.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {overviewItems.map((item) => {
          const section = data.sections.find(
            (section) => section.id === item.sectionId,
          );

          if (!section) return null;

          const Icon = item.icon;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`
                group
                rounded-xl
                border
                p-5
                transition-all
                hover:-translate-y-0.5

                ${
                  item.color === "blue"
                    ? "border-blue-200 bg-blue-50 hover:border-blue-300 dark:border-blue-900/60 dark:bg-blue-950/20 dark:hover:border-blue-800"
                    : ""
                }

                ${
                  item.color === "emerald"
                    ? "border-emerald-200 bg-emerald-50 hover:border-emerald-300 dark:border-emerald-900/60 dark:bg-emerald-950/20 dark:hover:border-emerald-800"
                    : ""
                }

                ${
                  item.color === "orange"
                    ? "border-orange-200 bg-orange-50 hover:border-orange-300 dark:border-orange-900/60 dark:bg-orange-950/20 dark:hover:border-orange-800"
                    : ""
                }

                ${
                  item.color === "purple"
                    ? "border-purple-200 bg-purple-50 hover:border-purple-300 dark:border-purple-900/60 dark:bg-purple-950/20 dark:hover:border-purple-800"
                    : ""
                }
              `}
            >
              <div className="mb-3 flex items-center gap-3">
                <div
                  className={`
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-lg

                    ${
                      item.color === "blue"
                        ? "bg-blue-100 dark:bg-blue-950/70"
                        : ""
                    }

                    ${
                      item.color === "emerald"
                        ? "bg-emerald-100 dark:bg-emerald-950/70"
                        : ""
                    }

                    ${
                      item.color === "orange"
                        ? "bg-orange-100 dark:bg-orange-950/70"
                        : ""
                    }

                    ${
                      item.color === "purple"
                        ? "bg-purple-100 dark:bg-purple-950/70"
                        : ""
                    }
                  `}
                >
                  <Icon
                    aria-hidden="true"
                    className={`
                      h-5 w-5

                      ${
                        item.color === "blue"
                          ? "text-blue-600 dark:text-blue-400"
                          : ""
                      }

                      ${
                        item.color === "emerald"
                          ? "text-emerald-600 dark:text-emerald-400"
                          : ""
                      }

                      ${
                        item.color === "orange"
                          ? "text-orange-600 dark:text-orange-400"
                          : ""
                      }

                      ${
                        item.color === "purple"
                          ? "text-purple-600 dark:text-purple-400"
                          : ""
                      }
                    `}
                  />
                </div>

                <h3
                  className="
                    font-semibold
                    text-slate-900
                    dark:text-slate-100
                  "
                >
                  {item.title}
                </h3>
              </div>

              <p
                className="
                  text-sm
                  leading-6
                  text-slate-700
                  dark:text-slate-300
                "
              >
                {section.content?.[0] ??
                  section.items?.[0] ??
                  section.subsections?.[0]?.items?.[0] ??
                  "Learn more about this section."}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default RefundOverview;
