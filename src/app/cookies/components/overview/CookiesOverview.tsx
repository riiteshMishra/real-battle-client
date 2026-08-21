import { Cookie, LockKeyhole, ShieldCheck, Settings2 } from "lucide-react";
import { cookiesData } from "@/src/content/cookies/cookies-index";

const CookiesOverview = () => {
  const overviewItems = [
    {
      sectionId: "essential-cookies",
      title: "Essential Cookies",
      icon: Cookie,
      color: "orange",
    },
    {
      sectionId: "authentication-cookies",
      title: "Authentication",
      icon: LockKeyhole,
      color: "blue",
    },
    {
      sectionId: "cookie-information",
      title: "Cookie Information",
      icon: ShieldCheck,
      color: "emerald",
    },
    {
      sectionId: "manage-cookies",
      title: "Cookie Management",
      icon: Settings2,
      color: "purple",
    },
  ] as const;

  return (
    <section aria-labelledby="cookies-overview-title" className="mb-12">
      <div className="mb-6">
        <h2
          id="cookies-overview-title"
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

        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
          An overview of the cookie-related topics covered by the{" "}
          {cookiesData.title}.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {overviewItems.map((item) => {
          const section = cookiesData.sections.find(
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
                  {
                    orange: `
                    border-orange-200
                    bg-orange-50
                    hover:border-orange-300
                    hover:shadow-orange-100/60
                    dark:border-orange-900/60
                    dark:bg-orange-950/20
                    dark:hover:border-orange-800
                  `,
                    blue: `
                    border-blue-200
                    bg-blue-50
                    hover:border-blue-300
                    hover:shadow-blue-100/60
                    dark:border-blue-900/60
                    dark:bg-blue-950/20
                    dark:hover:border-blue-800
                  `,
                    emerald: `
                    border-emerald-200
                    bg-emerald-50
                    hover:border-emerald-300
                    hover:shadow-emerald-100/60
                    dark:border-emerald-900/60
                    dark:bg-emerald-950/20
                    dark:hover:border-emerald-800
                  `,
                    purple: `
                    border-purple-200
                    bg-purple-50
                    hover:border-purple-300
                    hover:shadow-purple-100/60
                    dark:border-purple-900/60
                    dark:bg-purple-950/20
                    dark:hover:border-purple-800
                  `,
                  }[item.color]
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
                      {
                        orange: "bg-orange-100 dark:bg-orange-950/70",
                        blue: "bg-blue-100 dark:bg-blue-950/70",
                        emerald: "bg-emerald-100 dark:bg-emerald-950/70",
                        purple: "bg-purple-100 dark:bg-purple-950/70",
                      }[item.color]
                    }
                  `}
                >
                  <Icon
                    aria-hidden="true"
                    className={`
                      h-5 w-5
                      ${
                        {
                          orange: "text-orange-600 dark:text-orange-400",
                          blue: "text-blue-600 dark:text-blue-400",
                          emerald: "text-emerald-600 dark:text-emerald-400",
                          purple: "text-purple-600 dark:text-purple-400",
                        }[item.color]
                      }
                    `}
                  />
                </div>

                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                {section.content?.[0] ??
                  section.items?.[0] ??
                  "Learn more about this topic in our Cookie Policy."}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default CookiesOverview;
