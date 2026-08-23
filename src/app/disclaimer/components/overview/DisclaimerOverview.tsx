import {
  ExternalLink,
  FileWarning,
  Gamepad2,
  Info,
  ShieldCheck,
} from "lucide-react";

import { disclaimerData } from "@/src/content/disclaimer/disclaimer-index";

const overviewIcons = [
  {
    icon: Info,
    title: "General Information",
    color: "blue",
  },
  {
    icon: Gamepad2,
    title: "Gaming & Tournaments",
    color: "purple",
  },
  {
    icon: ExternalLink,
    title: "Third-Party Services",
    color: "orange",
  },
  {
    icon: ShieldCheck,
    title: "Platform Limitations",
    color: "emerald",
  },
];

const DisclaimerOverview = () => {
  const overviewSections = disclaimerData.sections.slice(0, 4);

  return (
    <section aria-labelledby="disclaimer-overview-title" className="mb-12">
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-950/60">
            <FileWarning
              aria-hidden="true"
              className="h-5 w-5 text-orange-600 dark:text-orange-400"
            />
          </div>

          <div>
            <h2
              id="disclaimer-overview-title"
              className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
            >
              Quick Overview
            </h2>

            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Key areas covered by this Disclaimer.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {overviewSections.map((section, index) => {
          const config = overviewIcons[index];
          const Icon = config.icon;

          return (
            <div
              key={section.id}
              className={`rounded-xl border p-5 ${getColorClasses(config.color)} `}
            >
              <div className="mb-3 flex items-center gap-3">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${getIconBackground(config.color)} `}
                >
                  <Icon
                    aria-hidden="true"
                    className={`h-5 w-5 ${getIconColor(config.color)}`}
                  />
                </div>

                <h3 className={`font-semibold ${getTitleColor(config.color)} `}>
                  {section.title.replace(/^\d+\.\s*/, "")}
                </h3>
              </div>

              <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                {getSectionDescription(section)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const getSectionDescription = (section: any) => {
  if (section.content?.length) {
    return section.content[0];
  }

  if (section.items?.length) {
    return section.items[0];
  }

  if (section.subsections?.length) {
    return section.subsections[0]?.items?.[0] ?? "";
  }

  return "";
};

const getColorClasses = (color: string) => {
  const colors: Record<string, string> = {
    blue: "border-blue-200 bg-blue-50 dark:border-blue-900/60 dark:bg-blue-950/20",
    purple:
      "border-purple-200 bg-purple-50 dark:border-purple-900/60 dark:bg-purple-950/20",
    orange:
      "border-orange-200 bg-orange-50 dark:border-orange-900/60 dark:bg-orange-950/20",
    emerald:
      "border-emerald-200 bg-emerald-50 dark:border-emerald-900/60 dark:bg-emerald-950/20",
  };

  return colors[color];
};

const getIconBackground = (color: string) => {
  const colors: Record<string, string> = {
    blue: "bg-blue-100 dark:bg-blue-950/70",
    purple: "bg-purple-100 dark:bg-purple-950/70",
    orange: "bg-orange-100 dark:bg-orange-950/70",
    emerald: "bg-emerald-100 dark:bg-emerald-950/70",
  };

  return colors[color];
};

const getIconColor = (color: string) => {
  const colors: Record<string, string> = {
    blue: "text-blue-600 dark:text-blue-400",
    purple: "text-purple-600 dark:text-purple-400",
    orange: "text-orange-600 dark:text-orange-400",
    emerald: "text-emerald-600 dark:text-emerald-400",
  };

  return colors[color];
};

const getTitleColor = (color: string) => {
  const colors: Record<string, string> = {
    blue: "text-blue-900 dark:text-blue-300",
    purple: "text-purple-900 dark:text-purple-300",
    orange: "text-orange-900 dark:text-orange-300",
    emerald: "text-emerald-900 dark:text-emerald-300",
  };

  return colors[color];
};

export default DisclaimerOverview;
