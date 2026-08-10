const Heading = () => {
  return (
    <div className="mb-10 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
        FAQ
      </p>

      <h2 className="text-[clamp(1.8rem,4vw,3rem)] w-80 sm:w-auto capitalize mx-auto text-center font-sekuya  font-bold max-w-5xl">
        Frequently Asked{" "}
        <span className="bg-linear-to-r from-purple-500 via-cyan-400 to-orange-500 bg-clip-text text-transparent">
          Questions
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-foreground/60 sm:text-base">
        Everything you need to know about tournaments, matches, rewards, and
        competing on <br /> Real Battle.
      </p>
    </div>
  );
};

export default Heading;
