import { privacyData } from "@/src/content/privacy/privacy-index";

const PrivacyHeroContent = () => {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        {privacyData.title}
      </h1>

      <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg md:text-xl dark:text-slate-300">
        Learn how{" "}
        <strong className="font-semibold text-white">Real Battle</strong>{" "}
        collects, uses, stores, and protects your{" "}
        <strong className="font-semibold text-white">
          personal information
        </strong>{" "}
        when you participate in our{" "}
        <strong className="font-semibold text-white">
          Free Fire tournaments and online gaming services
        </strong>
        .
      </p>
    </>
  );
};

export default PrivacyHeroContent;
