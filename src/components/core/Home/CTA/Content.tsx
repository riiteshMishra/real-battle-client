import Buttons from "./Buttons";

const Content = () => {
  return (
    <div className="relative z-10 max-w-2xl text-center lg:text-left">
      <p className="text-primary mb-4 text-sm font-semibold tracking-[0.25em] uppercase">
        Ready to Battle?
      </p>

      <h2 className="font-sekuya mx-auto w-80 max-w-5xl text-[clamp(1.5rem,4vw,3rem)] font-bold capitalize sm:w-auto">
        Your Next{" "}
        <span className="bg-linear-to-r from-purple-500 via-cyan-400 to-orange-500 bg-clip-text text-transparent">
          Battle
        </span>{" "}
        Starts Here.
      </h2>

      <p className="text-foreground/60 font-bricolage mx-auto mt-5 max-w-xl text-sm leading-7 font-medium sm:text-base lg:mx-0">
        Join competitive tournaments, challenge skilled players, climb the
        leaderboard, and prove that you have what it takes to become the next
        champion.
      </p>

      <Buttons />
    </div>
  );
};

export default Content;
