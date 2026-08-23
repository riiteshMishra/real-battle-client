import { Mail } from "lucide-react";

type ContactSectionProps = {
  section: {
    content: string[];
  };
};

const ContactSection = ({ section }: ContactSectionProps) => {
  return (
    <div className="space-y-4">
      {section.content.map((line, index) => {
        const emailMatch = line.match(/^(.+?):\s*([^\s@]+@[^\s@]+\.[^\s@]+)$/);

        if (emailMatch) {
          const [, label, email] = emailMatch;

          return (
            <a
              key={index}
              href={`mailto:${email}`}
              className="group flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 transition-all hover:border-blue-300 hover:bg-blue-50 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-blue-800 dark:hover:bg-blue-950/30"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950/70">
                <Mail
                  aria-hidden="true"
                  className="h-5 w-5 text-blue-600 dark:text-blue-400"
                />
              </span>

              <span className="min-w-0">
                <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">
                  {label}
                </span>

                <span className="mt-0.5 block text-sm font-semibold break-all text-blue-600 underline-offset-4 group-hover:underline md:text-base dark:text-blue-400">
                  {email}
                </span>
              </span>
            </a>
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
    </div>
  );
};

export default ContactSection;
