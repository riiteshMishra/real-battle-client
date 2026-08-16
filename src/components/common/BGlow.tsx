const BGlow = () => {
  return (
    <>
      <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-600/15" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-600/15" />
    </>
  );
};

export default BGlow;
