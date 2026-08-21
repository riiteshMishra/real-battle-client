import { termsData } from "@/src/content/terms/terms-index";

const TermsHeroContent = () => {
  return (
    <>
      <h1
        id="terms-hero-title"
        className="
          text-4xl
          font-bold
          tracking-tight
          sm:text-5xl
          md:text-6xl
        "
      >
        {termsData.title}
      </h1>

      <p
        className="
          mt-5
          max-w-2xl
          text-base
          leading-7
          text-blue-100
          sm:text-lg
          md:text-xl
          dark:text-slate-300
        "
      >
        Read the{" "}
        <strong className="font-semibold text-white">
          Real Battle Terms of Service
        </strong>{" "}
        governing your use of our{" "}
        <strong className="font-semibold text-white">
          online gaming platform
        </strong>
        , Free Fire tournaments, accounts, payments, prizes, and tournament
        participation.
      </p>
    </>
  );
};

export default TermsHeroContent;
