import { FileWarning, ShieldAlert } from "lucide-react";
import { disclaimerData } from "@/src/content/disclaimer/disclaimer-index";

const DisclaimerHero = () => {
  return (
    <section
      aria-labelledby="disclaimer-hero-title"
      className="relative isolate overflow-hidden bg-linear-to-br from-amber-500 via-orange-600 to-red-700 text-white dark:from-slate-950 dark:via-orange-950 dark:to-slate-950"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-yellow-300/20 blur-3xl dark:bg-orange-500/10"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-red-400/20 blur-3xl dark:bg-red-500/10"
      />

      <div className="relative mx-auto max-w-4xl px-4 py-14 md:py-20">
        <div className="max-w-3xl">
          {/* Brand */}
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm">
              <FileWarning
                aria-hidden="true"
                className="h-5 w-5 text-yellow-200"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-orange-100 dark:text-orange-300">
                Real Battle
              </p>

              <p className="text-xs text-orange-200/80 dark:text-slate-400">
                Free Fire Gaming & Tournament Platform
              </p>
            </div>
          </div>

          {/* Heading */}
          <h1
            id="disclaimer-hero-title"
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            {disclaimerData.title}
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-orange-100 sm:text-lg md:text-xl dark:text-slate-300">
            {disclaimerData.description}
          </p>

          {/* Last Updated */}
          <div className="mt-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 shadow-lg shadow-orange-950/10 backdrop-blur-md">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.8)]"
              />

              <span className="text-xs text-orange-100 sm:text-sm">
                Last updated
              </span>

              <span className="text-xs font-semibold text-white sm:text-sm">
                {disclaimerData.lastUpdated}
              </span>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-orange-100/80 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <ShieldAlert
                aria-hidden="true"
                className="h-4 w-4 text-yellow-300"
              />
              Important Information
            </span>

            <span className="flex items-center gap-2">
              <ShieldAlert
                aria-hidden="true"
                className="h-4 w-4 text-yellow-300"
              />
              Gaming Services
            </span>

            <span className="flex items-center gap-2">
              <ShieldAlert
                aria-hidden="true"
                className="h-4 w-4 text-yellow-300"
              />
              Platform Limitations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerHero;
