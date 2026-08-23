import { termsOverviewData } from "@/src/content/terms/terms-overview";
import TermsOverviewCard from "./TermsOverviewCard";

const TermsOverview = () => {
  return (
    <section aria-labelledby="terms-overview-title" className="mb-12">
      <div className="mb-6">
        <h2
          id="terms-overview-title"
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
        >
          Quick Overview
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
          These Terms explain the rules and responsibilities that apply when you
          use Real Battle or participate in our gaming tournaments.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {termsOverviewData.map((item) => (
          <TermsOverviewCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>
    </section>
  );
};

export default TermsOverview;
