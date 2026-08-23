import { Mail } from "lucide-react";
import { RefundSection } from "@/src/content/refund/types";

interface ContactSectionProps {
  section: RefundSection;
}

const ContactSection = ({ section }: ContactSectionProps) => {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900/60 dark:bg-blue-950/20">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950/70">
            <Mail
              aria-hidden="true"
              className="h-5 w-5 text-blue-600 dark:text-blue-400"
            />
          </div>

          <h3 className="font-semibold text-slate-900 dark:text-slate-100">
            Contact Real Battle
          </h3>
        </div>

        <div className="space-y-2">
          {section.content?.map((content, index) => (
            <p
              key={index}
              className="text-sm leading-7 text-slate-700 dark:text-slate-300"
            >
              {content}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
