export type ColorTheme =
  | "emerald"
  | "blue"
  | "purple"
  | "orange"
  | "slate"
  | "cyan"
  | "pink"
  | "indigo";

export interface CardStyles {
  card: string;
  iconBox: string;
  icon: string;
  title: string;
  description: string;
}

export const OVERVIEW_CARD_STYLES: Record<ColorTheme, CardStyles> = {
  emerald: {
    card: `border-emerald-200 bg-emerald-50 hover:border-emerald-300 hover:shadow-emerald-100/60 dark:border-emerald-900/60 dark:bg-emerald-950/20 dark:hover:border-emerald-800`,
    iconBox: `bg-emerald-100 dark:bg-emerald-950/70`,
    icon: `text-emerald-600 dark:text-emerald-400`,
    title: `text-slate-900 dark:text-slate-100`,
    description: `text-slate-700 dark:text-slate-300`,
  },

  blue: {
    card: `border-blue-200 bg-blue-50 hover:border-blue-300 hover:shadow-blue-100/60 dark:border-blue-900/60 dark:bg-blue-950/20 dark:hover:border-blue-800`,
    iconBox: `bg-blue-100 dark:bg-blue-950/70`,
    icon: `text-blue-600 dark:text-blue-400`,
    title: `text-slate-900 dark:text-slate-100`,
    description: `text-slate-700 dark:text-slate-300`,
  },

  purple: {
    card: `border-purple-200 bg-purple-50 hover:border-purple-300 hover:shadow-purple-100/60 dark:border-purple-900/60 dark:bg-purple-950/20 dark:hover:border-purple-800`,
    iconBox: `bg-purple-100 dark:bg-purple-950/70`,
    icon: `text-purple-600 dark:text-purple-400`,
    title: `text-slate-900 dark:text-slate-100`,
    description: `text-slate-700 dark:text-slate-300`,
  },

  orange: {
    card: `border-orange-200 bg-orange-50 hover:border-orange-300 hover:shadow-orange-100/60 dark:border-orange-900/60 dark:bg-orange-950/20 dark:hover:border-orange-800`,
    iconBox: `bg-orange-100 dark:bg-orange-950/70`,
    icon: `text-orange-600 dark:text-orange-400`,
    title: `text-slate-900 dark:text-slate-100`,
    description: `text-slate-700 dark:text-slate-300`,
  },

  slate: {
    card: `border-slate-200 bg-slate-50 hover:border-slate-300 hover:shadow-slate-100/60 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-slate-700`,
    iconBox: `bg-slate-200 dark:bg-slate-800`,
    icon: `text-slate-600 dark:text-slate-400`,
    title: `text-slate-900 dark:text-slate-100`,
    description: `text-slate-700 dark:text-slate-300`,
  },

  cyan: {
    card: `border-cyan-200 bg-cyan-50 hover:border-cyan-300 hover:shadow-cyan-100/60 dark:border-cyan-900/60 dark:bg-cyan-950/20 dark:hover:border-cyan-800`,
    iconBox: `bg-cyan-100 dark:bg-cyan-950/70`,
    icon: `text-cyan-600 dark:text-cyan-400`,
    title: `text-slate-900 dark:text-slate-100`,
    description: `text-slate-700 dark:text-slate-300`,
  },

  pink: {
    card: `border-pink-200 bg-pink-50 hover:border-pink-300 hover:shadow-pink-100/60 dark:border-pink-900/60 dark:bg-pink-950/20 dark:hover:border-pink-800`,
    iconBox: `bg-pink-100 dark:bg-pink-950/70`,
    icon: `text-pink-600 dark:text-pink-400`,
    title: `text-slate-900 dark:text-slate-100`,
    description: `text-slate-700 dark:text-slate-300`,
  },

  indigo: {
    card: `border-indigo-200 bg-indigo-50 hover:border-indigo-300 hover:shadow-indigo-100/60 dark:border-indigo-900/60 dark:bg-indigo-950/20 dark:hover:border-indigo-800`,
    iconBox: `bg-indigo-100 dark:bg-indigo-950/70`,
    icon: `text-indigo-600 dark:text-indigo-400`,
    title: `text-slate-900 dark:text-slate-100`,
    description: `text-slate-700 dark:text-slate-300`,
  },
};
