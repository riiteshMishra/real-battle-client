import { BriefcaseBusiness, HelpCircle, Headphones } from "lucide-react";

const contactOptions = [
  {
    icon: HelpCircle,
    title: "General Questions",
    description:
      "Have a question about Real Battle, our tournaments, or how the platform works?",
    color: "blue",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business & Partnerships",
    description:
      "Interested in partnerships, collaborations, sponsorships, or other business opportunities?",
    color: "purple",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Already have an account? Sign in and contact our support team for account, tournament, payment, or technical issues.",
    color: "emerald",
  },
];

const ContactOptions = () => {
  return (
    <section aria-labelledby="contact-options-title" className="mb-12">
      <div className="mb-6">
        <h2
          id="contact-options-title"
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
        >
          How Can We Help?
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
          Choose the most relevant option for your question or request.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {contactOptions.map((option) => {
          const Icon = option.icon;

          return (
            <div
              key={option.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-950/70"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-900">
                <Icon
                  aria-hidden="true"
                  className="h-5 w-5 text-purple-600 dark:text-purple-400"
                />
              </div>

              <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                {option.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {option.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContactOptions;
