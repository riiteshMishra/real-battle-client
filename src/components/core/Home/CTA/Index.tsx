import Content from "./Content";
import Visual from "./Visual";

const FinalCta = () => {
  return (
    <section className="px-5 py-16 sm:py-20 md:py-24">
      <div className="relative mx-auto flex max-w-6xl flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/3 px-6 py-12 backdrop-blur-xl sm:px-10 lg:flex-row lg:items-center lg:px-14 lg:py-16">
        {/* Glow */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-purple-500/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-cyan-400/20 blur-[100px]" />

        <Content />
        <Visual />
      </div>
    </section>
  );
};

export default FinalCta;
