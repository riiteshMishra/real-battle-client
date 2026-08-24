import { aboutContent } from "./aboutContent";

export const CTA = () => {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          {aboutContent.cta.title}
        </h2>
        <p className="mb-8 text-lg text-blue-600 dark:text-blue-100">
          {aboutContent.cta.description}
        </p>
        <button
          className="cursor-pointer rounded-lg bg-gray-900 px-8 py-4 font-bold text-blue-100 transition hover:bg-gray-950 dark:bg-white dark:text-blue-600 hover:dark:bg-gray-300"
          title="app-download-button"
        >
          {aboutContent.cta.buttonText}
        </button>
      </div>
    </section>
  );
};
