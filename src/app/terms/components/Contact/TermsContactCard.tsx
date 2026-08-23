import { FileText, MessageCircle } from "lucide-react";

type TermsContactCardProps = {
  label: string;
  email: string;
  description: string;
  icon: "legal" | "support";
};

const TermsContactCard = ({
  label,
  email,
  description,
  icon,
}: TermsContactCardProps) => {
  const config = {
    legal: {
      Icon: FileText,
      iconColor: "text-indigo-600 dark:text-indigo-400",
      iconBg: "bg-indigo-100 dark:bg-indigo-950/70",
      hoverBorder: "hover:border-indigo-300 dark:hover:border-indigo-800",
      hoverBg: "hover:bg-indigo-50 dark:hover:bg-indigo-950/30",
      hoverText: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
    },

    support: {
      Icon: MessageCircle,
      iconColor: "text-blue-600 dark:text-blue-400",
      iconBg: "bg-blue-100 dark:bg-blue-950/70",
      hoverBorder: "hover:border-blue-300 dark:hover:border-blue-800",
      hoverBg: "hover:bg-blue-50 dark:hover:bg-blue-950/30",
      hoverText: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    },
  };

  const configItem = config[icon];
  const Icon = configItem.Icon;

  return (
    <a
      href={`mailto:${email}`}
      className={`group rounded-xl border border-slate-200 bg-slate-50 p-5 transition-all ${configItem.hoverBorder} ${configItem.hoverBg} dark:border-slate-800 dark:bg-slate-900/60`}
    >
      <div className="mb-3 flex items-center gap-3">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${configItem.iconBg} `}
        >
          <Icon
            aria-hidden="true"
            className={`h-5 w-5 ${configItem.iconColor}`}
          />
        </div>

        <span className="text-sm text-slate-500 dark:text-slate-400">
          {label}
        </span>
      </div>

      <span
        className={`block font-semibold break-all text-slate-900 transition-colors dark:text-slate-100 ${configItem.hoverText} `}
      >
        {email}
      </span>

      <span className="mt-2 block text-xs text-slate-500 dark:text-slate-500">
        {description}
      </span>
    </a>
  );
};

export default TermsContactCard;
