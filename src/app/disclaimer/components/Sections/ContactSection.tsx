type ContactSectionProps = {
  section: {
    content?: string[];
  };
};

const ContactSection = ({ section }: ContactSectionProps) => {
  if (!section.content?.length) return null;

  return (
    <div className="space-y-4">
      {section.content.map((line, index) => {
        const emailMatch = line.match(/^(.+?):\s*([^\s@]+@[^\s@]+\.[^\s@]+)$/);

        if (emailMatch) {
          const [, label, email] = emailMatch;

          return (
            <div
              key={index}
              className="
                rounded-xl
                border border-slate-200
                bg-slate-50
                p-5
                dark:border-slate-800
                dark:bg-slate-900/60
              "
            >
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {label}
              </p>

              <a
                href={`mailto:${email}`}
                className="
                  mt-1
                  block
                  break-all
                  text-sm
                  font-semibold
                  text-orange-600
                  underline-offset-4
                  hover:underline
                  md:text-base
                  dark:text-orange-400
                "
              >
                {email}
              </a>
            </div>
          );
        }

        return (
          <p
            key={index}
            className="
              text-sm
              leading-7
              text-slate-700
              md:text-base
              dark:text-slate-300
            "
          >
            {line}
          </p>
        );
      })}
    </div>
  );
};

export default ContactSection;
