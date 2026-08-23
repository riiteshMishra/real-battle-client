const Heading = () => {
  return (
    <div className="mb-10 text-center">
      <p className="text-primary mb-3 text-sm font-semibold tracking-widest uppercase">
        FAQ
      </p>

      <h2 className="font-sekuya mx-auto w-80 max-w-5xl text-center text-[clamp(1.8rem,4vw,3rem)] font-bold capitalize sm:w-auto">
        Frequently Asked{" "}
        <span className="bg-linear-to-r from-purple-500 via-cyan-400 to-orange-500 bg-clip-text text-transparent">
          Questions
        </span>
      </h2>

      <p className="text-foreground/60 mx-auto mt-4 max-w-2xl text-sm leading-6 sm:text-base">
        Everything you need to know about tournaments, matches, rewards, and
        competing on <br /> Real Battle.
      </p>
    </div>
  );
};

export default Heading;
