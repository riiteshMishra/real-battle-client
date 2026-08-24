export const bgColor = {
  one: `
    pointer-events-none
    absolute -right-24 -top-24
    h-72 w-72
    rounded-full
    bg-cyan-400/20
    blur-3xl
    dark:bg-cyan-500/10
  `,

  two: `
    pointer-events-none
    absolute -bottom-32 -left-24
    h-80 w-80
    rounded-full
    bg-violet-400/20
    blur-3xl
    dark:bg-violet-500/10
  `,

  three: `
    pointer-events-none
    absolute left-1/2 top-1/2
    h-64 w-64
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-blue-400/10
    blur-3xl
    dark:bg-blue-500/5
  `,

  four: `
    pointer-events-none
    absolute -left-20 top-16
    h-40 w-40
    rounded-full
    bg-indigo-400/15
    blur-2xl
    dark:bg-indigo-500/10
  `,

  five: `
    pointer-events-none
    absolute -bottom-20 right-20
    h-48 w-48
    rounded-full
    bg-sky-400/15
    blur-3xl
    dark:bg-sky-500/10
  `,

  six: `
    pointer-events-none
    absolute right-[20%] top-1/2
    h-32 w-32
    -translate-y-1/2
    rounded-full
    border border-white/10
    bg-white/5
    backdrop-blur-sm
    dark:border-blue-400/10
    dark:bg-blue-400/5
  `,
};

export const sectionGradient = {
  blue: "bg-linear-to-br from-blue-500 via-indigo-600 to-slate-500 dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-slate-950",

  purple:
    "bg-linear-to-br from-purple-500 via-violet-500 to-slate-500 dark:from-purple-950/40 dark:via-violet-950/30 dark:to-slate-950",

  emerald:
    "bg-linear-to-br from-emerald-800 via-teal-800 to-slate-800 dark:from-emerald-950/40 dark:via-teal-950/30 dark:to-slate-950",

  orange: "bg-linear-to-br from-orange-700 via-amber-700 to-slate-800  ",

  cyan: "bg-linear-to-br from-cyan-50 via-sky-50 to-slate-50 dark:from-cyan-950/40 dark:via-sky-950/30 dark:to-slate-950",

  slate:
    "bg-linear-to-br from-slate-800 via-gray-800 to-zinc-800 dark:from-slate-950 dark:via-gray-950 dark:to-zinc-950",
};
