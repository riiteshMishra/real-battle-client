import { Mail, ShieldCheck } from "lucide-react";

type ContactSectionProps = {
  section: {
    content: string[];
  };
};

const ContactSection = ({ section }: ContactSectionProps) => {
  return (
    <div className="space-y-6">
      {section.content.map((line, index) => {
        const emailMatch = line.match(/^(.+?):\s*([^\s@]+@[^\s@]+\.[^\s@]+)$/);

        if (emailMatch) {
          const [, label, email] = emailMatch;

          return (
            <div
              key={index}
              className="flex flex-col gap-2 border-l-2 border-blue-500 bg-blue-50/60 px-4 py-3 sm:flex-row sm:items-center sm:gap-4 dark:border-blue-400 dark:bg-blue-950/20"
            >
              <div className="flex shrink-0 items-center gap-2">
                <Mail
                  aria-hidden="true"
                  className="h-4 w-4 text-blue-600 dark:text-blue-400"
                />

                <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                  {label}
                </span>
              </div>

              <a
                href={`mailto:${email}`}
                className="text-sm font-medium break-all text-blue-600 underline-offset-4 hover:underline md:text-base dark:text-blue-400"
              >
                {email}
              </a>
            </div>
          );
        }

        return (
          <p
            key={index}
            className="text-sm leading-7 text-slate-700 md:text-base dark:text-slate-300"
          >
            {line}
          </p>
        );
      })}

      <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/50">
        <ShieldCheck
          aria-hidden="true"
          className="mt-0.5 h-5 w-5 shrink-0 text-green-600 dark:text-green-400"
        />

        <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
          For privacy-related requests, please provide enough information for
          our team to identify your account and properly process your request.
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
