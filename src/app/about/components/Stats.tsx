import { FaUsers, FaTrophy, FaWallet, FaGlobe } from "react-icons/fa";

import { aboutContent } from "./aboutContent";

const Stats = () => {
  const iconMap = {
    Users: FaUsers,
    Trophy: FaTrophy,
    Wallet: FaWallet,
    Globe: FaGlobe,
  };

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-4">
          {aboutContent.stats.map((stat) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap] ?? FaUsers;

            return (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-900"
              >
                <Icon className="mx-auto mb-4 h-8 w-8 text-blue-500" />

                <div className="mb-2 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
                  {stat.value}
                </div>

                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
