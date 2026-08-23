"use client";
import { Menu } from "lucide-react";
import { useState } from "react";

const Burger = () => {
  const [open, setOpen] = useState(false);
  // console.log(open);
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      aria-label="Open menu"
      className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-black/5 md:hidden dark:hover:bg-white/10"
    >
      <Menu size={24} />
    </button>
  );
};

export default Burger;
