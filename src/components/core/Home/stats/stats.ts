export interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

export const statsData: Stat[] = [
  {
    value: 1398,
    label: "Players",
  },
  {
    value: 250,
    label: "Tournaments",
  },
  {
    value: 12000,
    label: "Matches Played",
  },
  {
    value: 99,
    suffix: "%",
    label: "Fair Play",
  },
];
