import {
  CheckCircle2,
  ShieldCheck,
  Share2,
  UserRoundCheck,
} from "lucide-react";

const PrivacyOverview = () => {
  return (
    <section aria-labelledby="privacy-overview-title" className="mb-12">
      <div className="mb-6">
        <h2
          id="privacy-overview-title"
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Privacy Policy Overview
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          A quick overview of how Real Battle handles player information, Free
          Fire gaming data, tournament information, data sharing, security, and
          privacy rights.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* What We Collect */}
        <article
          className="
            rounded-xl border border-blue-200 bg-blue-50 p-6
            transition-colors
            hover:border-blue-300
            dark:border-blue-900/50 dark:bg-blue-950/30
            dark:hover:border-blue-800
          "
        >
          <div className="mb-3 flex items-center gap-3">
            <CheckCircle2
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400"
            />

            <h3 className="font-semibold text-blue-950 dark:text-blue-300">
              What Information We Collect
            </h3>
          </div>

          <p className="text-sm leading-relaxed text-blue-900 dark:text-blue-200">
            Real Battle may collect account information, player and
            <strong className="font-semibold">
              {" "}
              Free Fire gaming information
            </strong>
            , tournament participation data, match results, submitted proof,
            device information, and other information required to provide our
            online gaming and tournament services.
          </p>
        </article>

        {/* Why We Collect */}
        <article
          className="
            rounded-xl border border-green-200 bg-green-50 p-6
            transition-colors
            hover:border-green-300
            dark:border-green-900/50 dark:bg-green-950/30
            dark:hover:border-green-800
          "
        >
          <div className="mb-3 flex items-center gap-3">
            <ShieldCheck
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400"
            />

            <h3 className="font-semibold text-green-950 dark:text-green-300">
              Why We Collect Your Information
            </h3>
          </div>

          <p className="text-sm leading-relaxed text-green-900 dark:text-green-200">
            We use information to manage player accounts, operate
            <strong className="font-semibold"> Free Fire tournaments</strong>,
            verify matches and results, maintain platform security, prevent
            fraud and abuse, provide customer support, and improve Real Battle
            services.
          </p>
        </article>

        {/* Who We Share With */}
        <article
          className="
            rounded-xl border border-orange-200 bg-orange-50 p-6
            transition-colors
            hover:border-orange-300
            dark:border-orange-900/50 dark:bg-orange-950/30
            dark:hover:border-orange-800
          "
        >
          <div className="mb-3 flex items-center gap-3">
            <Share2
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-orange-600 dark:text-orange-400"
            />

            <h3 className="font-semibold text-orange-950 dark:text-orange-300">
              Who We May Share Information With
            </h3>
          </div>

          <p className="text-sm leading-relaxed text-orange-900 dark:text-orange-200">
            Where necessary, information may be shared with trusted service
            providers, payment providers, authentication services, tournament
            organizers, security providers, and other providers that help us
            operate Real Battle.
          </p>
        </article>

        {/* Your Rights */}
        <article
          className="
            rounded-xl border border-purple-200 bg-purple-50 p-6
            transition-colors
            hover:border-purple-300
            dark:border-purple-900/50 dark:bg-purple-950/30
            dark:hover:border-purple-800
          "
        >
          <div className="mb-3 flex items-center gap-3">
            <UserRoundCheck
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-purple-600 dark:text-purple-400"
            />

            <h3 className="font-semibold text-purple-950 dark:text-purple-300">
              Your Privacy Rights
            </h3>
          </div>

          <p className="text-sm leading-relaxed text-purple-900 dark:text-purple-200">
            Depending on applicable law, you may have rights to request access,
            correction, deletion, or other assistance regarding your personal
            information and privacy requests.
          </p>
        </article>
      </div>
    </section>
  );
};

export default PrivacyOverview;
