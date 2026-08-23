const Heading = () => {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-primary mb-3 text-sm font-semibold tracking-[0.25em] uppercase">
        Get In Touch
      </p>

      <h2 className="font-sekuya mx-auto w-80 max-w-5xl text-center text-[clamp(1.8rem,4vw,3rem)] font-bold capitalize sm:w-auto">
        Let&apos;s{" "}
        <span className="bg-linear-to-r from-purple-500 via-cyan-400 to-orange-500 bg-clip-text text-transparent">
          Connect
        </span>
      </h2>

      <p className="text-foreground/60 mt-4 text-sm leading-7 sm:text-base">
        Have a question, need help, or want to report an issue? We&apos;re here
        to help.
      </p>
    </div>
  );
};

export default Heading;
