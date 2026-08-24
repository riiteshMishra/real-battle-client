import { aboutContent } from "./aboutContent";

export const Timeline = () => {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
            Our Journey
          </h2>
        </div>

        <div className="space-y-8">
          {aboutContent.timeline.map((item, idx) => (
            <div key={item.year} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="mt-1 h-4 w-4 rounded-full bg-blue-500" />
                {idx !== aboutContent.timeline.length - 1 && (
                  <div className="h-24 w-1 bg-linear-to-b from-blue-500 to-transparent" />
                )}
              </div>
              <div className="pb-8">
                <div className="mb-1 text-sm font-bold text-blue-500">
                  {item.year}
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
