"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="flex min-h-[calc(100vh-61px)] items-center justify-center bg-linear-to-br from-white via-blue-50 to-indigo-100 px-4 text-black transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 dark:text-white">
      <motion.div
        className="w-full max-w-md text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Sad Face */}
        <motion.svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="mx-auto mb-8"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          {/* Face */}
          <circle
            cx="100"
            cy="100"
            r="90"
            className="fill-amber-400 stroke-amber-600 dark:fill-amber-400 dark:stroke-amber-500"
            strokeWidth="4"
          />

          {/* Left Eye */}
          <circle
            cx="70"
            cy="80"
            r="12"
            className="fill-slate-800 dark:fill-slate-900"
          />

          {/* Right Eye */}
          <circle
            cx="130"
            cy="80"
            r="12"
            className="fill-slate-800 dark:fill-slate-900"
          />

          {/* Sad Mouth */}
          <path
            d="M 70 130 Q 100 110 130 130"
            className="stroke-slate-800 dark:stroke-slate-900"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />

          {/* Tear */}
          <circle
            cx="70"
            cy="95"
            r="4"
            className="fill-blue-500 dark:fill-blue-400"
          />
        </motion.svg>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="mb-2 text-5xl font-bold tracking-tight text-black dark:text-white">
            404
          </h1>

          <p className="mb-8 text-lg text-slate-600 dark:text-slate-300">
            Page Not Found
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Home */}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center rounded-lg bg-red-500 px-7 py-3 font-semibold text-white shadow-lg shadow-red-500/20 transition-all duration-200 hover:bg-red-600 hover:shadow-red-500/30 sm:w-auto dark:bg-red-600 dark:hover:bg-red-700"
            >
              Go to Home
            </Link>
          </motion.div>

          {/* Back */}
          <motion.button
            type="button"
            onClick={() => window.history.back()}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white/60 px-7 py-3 font-semibold text-black backdrop-blur-sm transition-all duration-200 hover:border-slate-400 hover:bg-white sm:w-auto dark:border-slate-700 dark:bg-slate-800/60 dark:text-white dark:hover:border-slate-600 dark:hover:bg-slate-800"
          >
            Go Back
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
