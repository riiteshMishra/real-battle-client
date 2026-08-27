import { Trophy, Zap } from "lucide-react";

const GameMeta = () => {
  return (
    <div className="mt-5 grid grid-cols-2 gap-2">
      <div className="flex items-center gap-2 rounded-xl border border-black/5 bg-black/2.5 px-3 py-2.5 dark:border-white/5 dark:bg-white/[0.035]">
        <Trophy size={15} className="text-amber-500" />

        <div>
          <p className="text-foreground/40 text-[9px] tracking-wide uppercase">
            Mode
          </p>

          <p className="text-foreground text-xs font-semibold">Tournaments</p>
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-xl border border-black/5 bg-black/2.5 px-3 py-2.5 dark:border-white/5 dark:bg-white/[0.035]">
        <Zap size={15} className="text-cyan-500" />

        <div>
          <p className="text-foreground/40 text-[9px] tracking-wide uppercase">
            Type
          </p>

          <p className="text-foreground text-xs font-semibold">Competitive</p>
        </div>
      </div>
    </div>
  );
};

export default GameMeta;
