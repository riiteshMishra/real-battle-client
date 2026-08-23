"use client";

const Loader = () => {
  return (
    <div className="fixed inset-0">
      <div className="flex items-center justify-center">
        <div className="border-foreground/20 border-t-primary h-6 w-6 animate-spin rounded-full border-2" />
      </div>
    </div>
  );
};

export default Loader;
