"use client";

import { motion, type Variants } from "framer-motion";

export interface HeadingProps {
  title?: string;
  className?: string;
  headingType?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  highlightText?: string;
  highlightTextClass?: string;
  description?: string;
  descriptionClass?: string;
}

const Heading = ({
  title = "Enter Your Heading",
  className,
  headingType = "h1",
  highlightText,
  highlightTextClass,
  description,
  descriptionClass,
}: HeadingProps) => {
  // DEFAULT CLASSESS
  const defaultClasses: Record<string, string> = {
    h1: "text-4xl font-bold leading-tight text-gray-900",
    h2: "text-3xl font-bold leading-tight text-gray-900",
    h3: "text-2xl font-bold leading-tight text-gray-900",
    h4: "text-xl font-bold leading-tight text-gray-900",
    h5: "text-lg font-bold leading-tight text-gray-900",
    h6: "text-base font-bold leading-tight text-gray-900",
  };

  const HeadingElement = headingType;
  const finalClassName = className || defaultClasses[headingType];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const highlightVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-3"
    >
      <motion.div variants={itemVariants}>
        <HeadingElement className={finalClassName}>{title}</HeadingElement>
      </motion.div>

      {highlightText && (
        <motion.span
          variants={highlightVariants}
          whileHover="hover"
          className={
            highlightTextClass || "inline-block font-semibold text-blue-600"
          }
        >
          {highlightText}
        </motion.span>
      )}

      {description && (
        <motion.p
          variants={itemVariants}
          className={descriptionClass || "mt-2 text-gray-600"}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Heading;
