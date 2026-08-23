import type { LucideIcon } from "lucide-react";

export type ColorTheme =
  | "emerald"
  | "blue"
  | "purple"
  | "orange"
  | "slate"
  | "cyan"
  | "pink"
  | "indigo";

export interface OverviewItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color?: ColorTheme;
}

export interface OverviewProps {
  title: string;
  description: string;
  items: readonly OverviewItem[];
}
