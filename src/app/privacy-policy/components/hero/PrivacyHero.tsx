import PrivacyHeroBrand from "./PrivacyHeroBrand";
import PrivacyHeroContent from "./PrivacyHeroContent";
import PrivacyHeroUpdated from "./PrivacyHeroUpdated";
import PrivacyHeroTrust from "./PrivacyHeroTrust";

const PrivacyHero = () => {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-linear-to-br
        from-blue-700
        via-indigo-700
        to-violet-800
        text-white
        dark:from-slate-950
        dark:via-indigo-950
        dark:to-slate-950
      "
    >
      {/* Top-right glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-72
          w-72
          rounded-full
          bg-violet-400/20
          blur-3xl
          dark:bg-violet-500/10
        "
      />

      {/* Bottom-left glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-24
          h-80
          w-80
          rounded-full
          bg-blue-400/20
          blur-3xl
          dark:bg-blue-500/10
        "
      />

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-4 py-14 md:py-20">
        <div className="max-w-3xl">
          <PrivacyHeroBrand />

          <PrivacyHeroContent />

          <PrivacyHeroUpdated />

          <PrivacyHeroTrust />
        </div>
      </div>
    </section>
  );
};

export default PrivacyHero;
