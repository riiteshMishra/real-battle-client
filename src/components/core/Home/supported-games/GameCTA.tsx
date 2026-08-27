import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface GameCTAProps {
  isAvailable: boolean;
}

const GameCTA = ({ isAvailable }: GameCTAProps) => {
  if (!isAvailable) {
    return (
      <button
        disabled
        className="text-foreground/40 mt-5 flex w-full cursor-not-allowed items-center justify-center rounded-xl bg-black/5 px-4 py-3 text-sm font-semibold dark:bg-white/10"
      >
        Coming Soon
      </button>
    );
  }

  return (
    <Link
      href="/leaderboard"
      className="group/button bg-accent shadow-accent/20 hover:shadow-accent/25 text-foreground mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold shadow-lg transition-all duration-300 hover:opacity-90 hover:shadow-xl"
    >
      Explore Leaderboard
      <ArrowUpRight
        size={17}
        className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
      />
    </Link>
  );
};

export default GameCTA;
