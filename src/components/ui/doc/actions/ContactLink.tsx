import { Mail } from "lucide-react";

interface ContactLinkProps {
  email?: string;
  title?: string;
  subtitle?: string;
}

const ContactLink = ({ email, title, subtitle }: ContactLinkProps) => {
  return (
    <a
      href={`mailto:${email}`}
      className="flex min-h-16 items-center gap-3 rounded-md border border-emerald-200 bg-white px-4 py-4 transition-all hover:border-emerald-400 hover:bg-emerald-50 dark:border-emerald-900 dark:bg-slate-950/50 dark:hover:border-emerald-700 dark:hover:bg-emerald-950/30"
    >
      <Mail
        aria-hidden="true"
        className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400"
      />

      <span>
        <span className="block font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </span>

        <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">
          {subtitle}
        </span>
      </span>
    </a>
  );
};

export default ContactLink;
