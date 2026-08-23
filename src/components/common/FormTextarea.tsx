import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormTextareaProps {
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: string;
  disabled?: boolean;
  rows?: number;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  placeholder,
  register,
  error,
  disabled = false,
  rows = 5,
}) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label}
        <span className="text-red-500">*</span>
      </label>
      <textarea
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        {...register}
        className={`w-full resize-none rounded-xl border px-4 py-3 text-sm transition outline-none ${
          error
            ? "border-red-500/50 bg-red-500/5 focus:border-red-500"
            : "border-foreground/10 bg-background focus:border-primary"
        } disabled:cursor-not-allowed disabled:opacity-50`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};
