const Heading = () => {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
        Get In Touch
      </p>

      <h2 className="text-4xl font-bold sm:text-5xl">
        Let&apos;s{" "}
        <span className="bg-linear-to-r from-purple-500 via-cyan-400 to-orange-500 bg-clip-text text-transparent">
          Connect
        </span>
      </h2>

      <p className="mt-4 text-sm leading-7 text-foreground/60 sm:text-base">
        Have a question, need help, or want to report an issue? We&apos;re here
        to help.
      </p>
    </div>
  );
};

export default Heading;
