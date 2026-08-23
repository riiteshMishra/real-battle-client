import { Mail } from "lucide-react";

type PrivacyEmailCardProps = {
  label: string;
  email: string;
  iconColor: "blue" | "purple";
};

const PrivacyEmailCard = ({
  label,
  email,
  iconColor,
}: PrivacyEmailCardProps) => {
  const colors = {
    blue: {
      icon: "text-blue-600 dark:text-blue-400",
      hover: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
      border: "hover:border-blue-300 dark:hover:border-blue-800",
    },
    purple: {
      icon: "text-purple-600 dark:text-purple-400",
      hover: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
      border: "hover:border-purple-300 dark:hover:border-purple-800",
    },
  };

  const color = colors[iconColor];

  return (
    <a
      href={`mailto:${email}`}
      className={`group rounded-lg border border-slate-200 bg-white p-5 transition-all duration-200 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:bg-slate-900 ${color.border} `}
    >
      <div className="mb-2 flex items-center gap-3">
        <Mail aria-hidden="true" className={`h-5 w-5 ${color.icon}`} />

        <span className="text-sm text-slate-500 dark:text-slate-400">
          {label}
        </span>
      </div>

      <span
        className={`block font-semibold break-all text-slate-900 transition-colors duration-200 dark:text-slate-100 ${color.hover} `}
      >
        {email}
      </span>
    </a>
  );
};

export default PrivacyEmailCard;
