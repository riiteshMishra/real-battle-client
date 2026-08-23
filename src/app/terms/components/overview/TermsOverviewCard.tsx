import type { LucideIcon } from "lucide-react";

type TermsOverviewCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: "emerald" | "blue" | "purple" | "orange" | "slate";
};

const TermsOverviewCard = ({
  title,
  description,
  icon: Icon,
  color,
}: TermsOverviewCardProps) => {
  const styles = {
    emerald: {
      card: `
        border-emerald-200
        bg-emerald-50
        dark:border-emerald-900/60
        dark:bg-emerald-950/20
      `,
      iconBox: `
        bg-emerald-100
        dark:bg-emerald-950/70
      `,
      icon: `
        text-emerald-600
        dark:text-emerald-400
      `,
      title: `
        text-emerald-900
        dark:text-emerald-300
      `,
      description: `
        text-emerald-800
        dark:text-emerald-300/80
      `,
    },

    blue: {
      card: `
        border-blue-200
        bg-blue-50
        dark:border-blue-900/60
        dark:bg-blue-950/20
      `,
      iconBox: `
        bg-blue-100
        dark:bg-blue-950/70
      `,
      icon: `
        text-blue-600
        dark:text-blue-400
      `,
      title: `
        text-blue-900
        dark:text-blue-300
      `,
      description: `
        text-blue-800
        dark:text-blue-300/80
      `,
    },

    purple: {
      card: `
        border-purple-200
        bg-purple-50
        dark:border-purple-900/60
        dark:bg-purple-950/20
      `,
      iconBox: `
        bg-purple-100
        dark:bg-purple-950/70
      `,
      icon: `
        text-purple-600
        dark:text-purple-400
      `,
      title: `
        text-purple-900
        dark:text-purple-300
      `,
      description: `
        text-purple-800
        dark:text-purple-300/80
      `,
    },

    orange: {
      card: `
        border-orange-200
        bg-orange-50
        dark:border-orange-900/60
        dark:bg-orange-950/20
      `,
      iconBox: `
        bg-orange-100
        dark:bg-orange-950/70
      `,
      icon: `
        text-orange-600
        dark:text-orange-400
      `,
      title: `
        text-orange-900
        dark:text-orange-300
      `,
      description: `
        text-orange-800
        dark:text-orange-300/80
      `,
    },

    slate: {
      card: `
        border-slate-200
        bg-slate-50
        dark:border-slate-800
        dark:bg-slate-900/50
      `,
      iconBox: `
        bg-slate-200
        dark:bg-slate-800
      `,
      icon: `
        text-slate-600
        dark:text-slate-400
      `,
      title: `
        text-slate-900
        dark:text-slate-200
      `,
      description: `
        text-slate-700
        dark:text-slate-400
      `,
    },
  };

  const style = styles[color];

  return (
    <article
      className={`rounded-xl border p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${style.card} `}
    >
      <div className="mb-3 flex items-center gap-3">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${style.iconBox} `}
        >
          <Icon aria-hidden="true" className={`h-5 w-5 ${style.icon} `} />
        </div>

        <h3 className={`font-semibold ${style.title} `}>{title}</h3>
      </div>

      <p className={`text-sm leading-6 ${style.description} `}>{description}</p>
    </article>
  );
};

export default TermsOverviewCard;
