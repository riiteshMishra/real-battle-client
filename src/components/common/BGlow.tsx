const BGlow = () => {
  return (
    <>
      <div className="pointer-events-none absolute -top-32 -left-32 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-600/15" />

      <div className="pointer-events-none absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-600/15" />
    </>
  );
};

export default BGlow;
