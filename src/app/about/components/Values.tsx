import { Shield, Target, Heart, Wallet, type LucideIcon } from "lucide-react";

import { aboutContent } from "./aboutContent";

export const Values = () => {
  const iconMap: Record<string, LucideIcon> = {
    "fair-play": Shield,
    transparency: Target,
    community: Heart,
    security: Wallet,
  };

  const colorMap: Record<number, string> = {
    0: "emerald",
    1: "blue",
    2: "pink",
    3: "purple",
  };

  const colorClass: Record<string, string> = {
    emerald:
      "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/50 text-emerald-600 dark:text-emerald-400",
    blue: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/50 text-blue-600 dark:text-blue-400",
    pink: "bg-pink-50 dark:bg-pink-950/30 border-pink-200 dark:border-pink-900/50 text-pink-600 dark:text-pink-400",
    purple:
      "bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-900/50 text-purple-600 dark:text-purple-400",
  };

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
            Our Core Values
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-400">
            These principles guide every decision we make.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {aboutContent.values.map((value, idx) => {
            const Icon = iconMap[value.id];
            const color = colorMap[idx];

            return (
              <div
                key={value.id}
                className={`rounded-xl border p-6 ${colorClass[color]}`}
              >
                {Icon && <Icon className="mb-3 h-8 w-8" />}

                <h3 className="mb-2 font-bold text-slate-900 dark:text-white">
                  {value.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
