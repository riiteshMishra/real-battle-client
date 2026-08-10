const Heading = () => {
  return (
    <h3 className="text-[clamp(1.8rem,4vw,3rem)] w-80 sm:w-auto capitalize mx-auto text-center font-sekuya  font-bold max-w-5xl">
      Supported <br className="sm:hidden block" />
      <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-cyan-400 to-orange-500">
        <strong>games !</strong>
      </span>
    </h3>
  );
};

export default Heading;
