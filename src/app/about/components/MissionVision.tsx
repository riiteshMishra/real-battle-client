import { Target, Zap } from "lucide-react";
import { aboutContent } from "./aboutContent";

export const MissionVision = () => {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Mission */}
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900/50 dark:bg-blue-950/30">
            <div className="mb-4 flex items-center gap-3">
              <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {aboutContent.mission.title}
              </h2>
            </div>
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              {aboutContent.mission.description}
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-xl border border-purple-200 bg-purple-50 p-8 dark:border-purple-900/50 dark:bg-purple-950/30">
            <div className="mb-4 flex items-center gap-3">
              <Zap className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {aboutContent.vision.title}
              </h2>
            </div>
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              {aboutContent.vision.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
