import Buttons from "./Buttons";

const Content = () => {
  return (
    <div className="relative z-10 max-w-2xl text-center lg:text-left">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
        Ready to Battle?
      </p>

      <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
        Your Next{" "}
        <span className="bg-linear-to-r from-purple-500 via-cyan-400 to-orange-500 bg-clip-text text-transparent">
          Battle
        </span>{" "}
        Starts Here.
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-foreground/60 sm:text-base lg:mx-0">
        Join competitive tournaments, challenge skilled players, climb the
        leaderboard, and prove that you have what it takes to become the next
        champion.
      </p>

      <Buttons />
    </div>
  );
};

export default Content;
