import { aboutContent } from "./aboutContent";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white md:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          {aboutContent.hero.title.split(" ").map((word, idx) =>
            idx > 1 ? (
              <span
                key={idx}
                className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                {word}{" "}
              </span>
            ) : (
              word + " "
            ),
          )}
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-slate-300 md:text-xl">
          {aboutContent.hero.description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="rounded-lg bg-blue-500 px-8 py-3 font-semibold transition hover:bg-blue-600">
            Download App
          </button>
          <button className="rounded-lg border border-blue-400 px-8 py-3 font-semibold text-blue-400 transition hover:bg-blue-400/10">
            Join Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
