import { CreditCard, ShieldCheck } from "lucide-react";
import { refundData } from "@/src/content/refund/refund-index";

const RefundHero = () => {
  const data = refundData;

  return (
    <section
      aria-labelledby="refund-hero-title"
      className="relative isolate overflow-hidden bg-linear-to-br from-emerald-600 via-blue-700 to-indigo-800 text-white dark:from-slate-950 dark:via-emerald-950 dark:to-slate-950"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl dark:bg-emerald-500/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-500/10"
      />

      <div className="relative mx-auto max-w-4xl px-4 py-14 md:py-20">
        <header className="max-w-3xl">
          {/* Brand */}
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm">
              <CreditCard
                aria-hidden="true"
                className="h-5 w-5 text-cyan-200"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-blue-100 dark:text-blue-300">
                Real Battle
              </p>

              <p className="text-xs text-blue-200/80 dark:text-slate-400">
                Free Fire Gaming & Tournament Platform
              </p>
            </div>
          </div>

          {/* Title */}
          <h1
            id="refund-hero-title"
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            {data.title}
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg md:text-xl dark:text-slate-300">
            {data.description}
          </p>

          {/* Last Updated */}
          <div className="mt-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 shadow-lg shadow-blue-950/10 backdrop-blur-md">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.8)]"
              />

              <span className="text-xs text-blue-100 sm:text-sm">
                Last updated
              </span>

              <time className="text-xs font-semibold text-white sm:text-sm">
                {data.lastUpdated}
              </time>
            </div>
          </div>

          {/* Trust Items */}
          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-blue-100/80 dark:text-slate-400">
            <li className="flex items-center gap-2">
              <ShieldCheck
                aria-hidden="true"
                className="h-4 w-4 text-emerald-300"
              />
              Refund Eligibility
            </li>

            <li className="flex items-center gap-2">
              <ShieldCheck
                aria-hidden="true"
                className="h-4 w-4 text-emerald-300"
              />
              Payment Protection
            </li>

            <li className="flex items-center gap-2">
              <ShieldCheck
                aria-hidden="true"
                className="h-4 w-4 text-emerald-300"
              />
              Tournament Cancellations
            </li>
          </ul>
        </header>
      </div>
    </section>
  );
};

export default RefundHero;
