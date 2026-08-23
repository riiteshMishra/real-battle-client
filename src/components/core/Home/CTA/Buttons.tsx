const Buttons = () => {
  return (
    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
      <button className="bg-primary rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90">
        Download App
      </button>

      <button className="border-foreground/10 bg-foreground/5 hover:border-primary/40 hover:bg-primary/10 rounded-xl border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5">
        Explore Tournaments
      </button>
    </div>
  );
};

export default Buttons;
