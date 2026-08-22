import { Mail, MessageCircle } from "lucide-react";
import { refundData } from "@/src/content/refund/refund-index";

const RefundContact = () => {
  const contactSection = refundData.sections.find(
    (section) => section.id === "contact",
  );

  if (!contactSection) {
    return null;
  }

  const email =
    contactSection.content
      ?.find((item) => item.startsWith("Support:"))
      ?.replace("Support:", "")
      .trim() ?? "";

  return (
    <section
      aria-labelledby="refund-contact-title"
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
      <div className="mb-6 flex items-start gap-4">
        <div
          className="
            flex h-11 w-11 shrink-0
            items-center justify-center
            rounded-lg
            bg-blue-100
            dark:bg-blue-950/60
          "
        >
          <MessageCircle
            aria-hidden="true"
            className="h-6 w-6 text-blue-600 dark:text-blue-400"
          />
        </div>

        <div>
          <h2
            id="refund-contact-title"
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
              text-sm
              leading-6
              text-slate-600
              dark:text-slate-400
            "
          >
            Questions about refunds, payments, or tournament cancellations?
            Contact the Real Battle support team.
          </p>
        </div>
      </div>

      <div
        className="
          rounded-xl
          border border-blue-200
          bg-blue-50
          p-5
          dark:border-blue-900/60
          dark:bg-blue-950/20
        "
      >
        <div className="flex items-center gap-3">
          <Mail
            aria-hidden="true"
            className="h-5 w-5 text-blue-600 dark:text-blue-400"
          />

          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Refund Support
            </p>

            <a
              href={`mailto:${email}`}
              className="
                font-semibold
                text-slate-900
                hover:text-blue-600
                dark:text-slate-100
                dark:hover:text-blue-400
              "
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundContact;
