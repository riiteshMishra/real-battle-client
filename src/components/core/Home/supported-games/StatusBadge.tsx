interface StatusBadgeProps {
  status: "available" | "coming-soon";
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const isAvailable = status === "available";

  return (
    <div
      className={`absolute top-3 right-3 flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold shadow-lg backdrop-blur-xl ${
        isAvailable
          ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
          : "bg-black/40 text-white"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          isAvailable ? "animate-pulse bg-emerald-500" : "bg-white/70"
        }`}
      />

      {isAvailable ? "Available Now" : "Coming Soon"}
    </div>
  );
};

export default StatusBadge;
