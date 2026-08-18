"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface CTAButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
  width?: string;
  height?: string;
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
  type?: "button" | "submit" | "reset";
}

const CTAButton = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  className = "",
  icon,
  width = "auto",
  height = "auto",
  bgColor,
  textColor,
  hoverColor,
  type = "button",
}: CTAButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles =
    "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-700 text-white hover:bg-gray-800",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-3",
  };

  // HANDLE HOVER COLOR
  const customStyle =
    bgColor || textColor
      ? {
          backgroundColor: isHovered && hoverColor ? hoverColor : bgColor,
          color: textColor,
        }
      : {};

  return (
    <motion.button
      onClick={onClick}
      type={type}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${
        !bgColor && !textColor ? variants[variant] : ""
      } ${sizes[size]} ${className}`}
      style={{
        width,
        height,
        ...customStyle,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.95 }}
    >
      {isLoading ? (
        // LOADING STATE - ONLY SPINNER
        <motion.div
          className="h-5 w-5 rounded-full border-2 border-current border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ) : (
        // NORMAL STATE - ICON + TEXT
        <>
          {icon && <span>{icon}</span>}
          <span>{children}</span>
        </>
      )}
    </motion.button>
  );
};

export default CTAButton;
