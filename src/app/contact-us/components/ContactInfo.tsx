import { ArrowRight, Clock, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <section
      aria-labelledby="contact-information-title"
      className="grid grid-cols-1 gap-6 md:grid-cols-2"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-950/60">
            <Mail
              aria-hidden="true"
              className="h-5 w-5 text-purple-600 dark:text-purple-400"
            />
          </div>

          <div>
            <h2
              id="contact-information-title"
              className="font-semibold text-slate-900 dark:text-slate-100"
            >
              Email Us
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
              For general questions and business inquiries, contact us by email.
            </p>

            <a
              href="mailto:realbattleofficial@gmail.com"
              className="mt-3 inline-block text-sm font-semibold text-purple-600 hover:underline dark:text-purple-400"
            >
              realbattleofficial@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-950/60">
            <Clock
              aria-hidden="true"
              className="h-5 w-5 text-emerald-600 dark:text-emerald-400"
            />
          </div>

          <div>
            <h2 className="font-semibold text-slate-900 dark:text-slate-100">
              Existing Account?
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
              For account, tournament, payment, refund, or technical issues,
              please use our Customer Support system in the Real Battle app.
            </p>

            <a
              href="realbattle://customer-support"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
            >
              Open Customer Support
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
