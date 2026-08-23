import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: string;
  disabled?: boolean;
  type?: string;

  // Custom styling
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  register,
  error,
  disabled = false,
  type = "text",
  containerClassName = "",
  labelClassName = "",
  inputClassName = "",
  errorClassName = "",
}) => {
  return (
    <div className={`w-full ${containerClassName}`}>
      <label
        className={`text-foreground mb-2 block text-sm font-medium ${labelClassName}`}
      >
        {label}
        <span className="ml-1 text-red-500">*</span>
      </label>

      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
        className={`text-foreground placeholder:text-muted-foreground w-full rounded-xl border px-4 py-3 text-sm transition-all duration-200 outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
          error
            ? "border-red-500/50 bg-red-500/5 focus:border-red-500 focus:ring-2 focus:ring-red-500/10"
            : "border-border bg-background hover:border-foreground/20 focus:border-primary focus:ring-primary/10 focus:ring-2"
        } ${inputClassName} `}
      />

      {error && (
        <p className={`mt-1.5 text-xs text-red-500 ${errorClassName}`}>
          {error}
        </p>
      )}
    </div>
  );
};
