import { FileText, Mail, MessageCircle, ShieldCheck } from "lucide-react";

import { disclaimerData } from "@/src/content/disclaimer/disclaimer-index";

const DisclaimerContact = () => {
  const contactSection = disclaimerData.sections.find(
    (section) => section.type === "contact",
  );

  if (!contactSection || !contactSection.content?.length) {
    return null;
  }

  return (
    <section
      aria-labelledby="disclaimer-contact-title"
      className="
        mb-12
        rounded-xl
        border border-slate-200
        bg-white
        p-6 md:p-8
        dark:border-slate-800
        dark:bg-slate-950/60
      "
    >
      {/* Header */}
      <div className="mb-8 flex items-start gap-4">
        <div
          className="
            flex h-11 w-11 shrink-0
            items-center justify-center
            rounded-lg
            bg-orange-100
            dark:bg-orange-950/60
          "
        >
          <ShieldCheck
            aria-hidden="true"
            className="h-6 w-6 text-orange-600 dark:text-orange-400"
          />
        </div>

        <div>
          <h2
            id="disclaimer-contact-title"
            className="
              text-2xl
              font-bold
              tracking-tight
              text-slate-900
              dark:text-white
            "
          >
            {contactSection.title}
          </h2>

          <p
            className="
              mt-2
              text-sm md:text-base
              leading-relaxed
              text-slate-600
              dark:text-slate-300
            "
          >
            {contactSection.content[0]}
          </p>
        </div>
      </div>

      {/* Contact information */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {contactSection.content.slice(1).map((line, index) => {
          const emailMatch = line.match(
            /^(.+?):\s*([^\s@]+@[^\s@]+\.[^\s@]+)$/,
          );

          if (!emailMatch) {
            return (
              <p
                key={index}
                className="
                  rounded-xl
                  border border-slate-200
                  bg-slate-50
                  p-5
                  text-sm
                  leading-6
                  text-slate-600
                  dark:border-slate-800
                  dark:bg-slate-900/60
                  dark:text-slate-300
                "
              >
                {line}
              </p>
            );
          }

          const [, label, email] = emailMatch;

          return (
            <a
              key={index}
              href={`mailto:${email}`}
              className="
                group
                rounded-xl
                border border-slate-200
                bg-slate-50
                p-5
                transition-all
                hover:border-orange-300
                hover:bg-orange-50
                dark:border-slate-800
                dark:bg-slate-900/60
                dark:hover:border-orange-800
                dark:hover:bg-orange-950/30
              "
            >
              <div className="mb-3 flex items-center gap-3">
                <div
                  className="
                    flex h-9 w-9
                    items-center justify-center
                    rounded-lg
                    bg-orange-100
                    dark:bg-orange-950/70
                  "
                >
                  <Mail
                    aria-hidden="true"
                    className="
                      h-5 w-5
                      text-orange-600
                      dark:text-orange-400
                    "
                  />
                </div>

                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {label}
                </span>
              </div>

              <span
                className="
                  block
                  break-all
                  font-semibold
                  text-slate-900
                  transition-colors
                  group-hover:text-orange-600
                  dark:text-slate-100
                  dark:group-hover:text-orange-400
                "
              >
                {email}
              </span>
            </a>
          );
        })}
      </div>

      {/* Note */}
      {contactSection.content.length > 2 && (
        <div
          className="
            mt-6
            flex items-start gap-3
            rounded-lg
            border border-slate-200
            bg-slate-50
            p-4
            dark:border-slate-800
            dark:bg-slate-900/50
          "
        >
          <MessageCircle
            aria-hidden="true"
            className="
              mt-0.5
              h-4 w-4 shrink-0
              text-slate-500
              dark:text-slate-400
            "
          />

          <p
            className="
              text-xs md:text-sm
              leading-6
              text-slate-600
              dark:text-slate-400
            "
          >
            {contactSection.content[2]}
          </p>
        </div>
      )}
    </section>
  );
};

export default DisclaimerContact;
