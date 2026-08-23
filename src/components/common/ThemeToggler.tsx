"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      title="Toggle Theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex h-9 w-16 cursor-pointer items-center rounded-full border border-zinc-300 bg-zinc-100 p-1 dark:border-zinc-700 dark:bg-gray-900"
    >
      <motion.div
        animate={{ x: resolvedTheme === "dark" ? 28 : 0 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        className={`flex h-7 w-7 items-center justify-center rounded-full shadow-lg ${
          resolvedTheme === "dark"
            ? "bg-foreground text-zinc-900"
            : "bg-zinc-900 text-white"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={resolvedTheme}
            initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </button>
  );
};

export default ThemeToggler;
