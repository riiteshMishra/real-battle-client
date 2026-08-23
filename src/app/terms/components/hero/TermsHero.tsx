import TermsHeroBrand from "./TermsHeroBrand";
import TermsHeroContent from "./TermsHeroContent";
import TermsHeroUpdated from "./TermsHeroUpdated";
import TermsHeroTrust from "./TermsHeroTrust";

const TermsHero = () => {
  return (
    <section
      aria-labelledby="terms-hero-title"
      className="relative isolate overflow-hidden bg-linear-to-br from-indigo-600 via-blue-700 to-violet-800 text-white dark:from-slate-950 dark:via-indigo-950 dark:to-slate-950"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl dark:bg-blue-500/10"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-500/10"
      />

      <div className="relative mx-auto max-w-4xl px-4 py-14 md:py-20">
        <div className="max-w-3xl">
          <TermsHeroBrand />

          <TermsHeroContent />

          <TermsHeroUpdated />

          <TermsHeroTrust />
        </div>
      </div>
    </section>
  );
};

export default TermsHero;
