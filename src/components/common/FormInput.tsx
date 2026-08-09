import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: string;
  disabled?: boolean;
  type?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  register,
  error,
  disabled = false,
  type = "text",
}) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label}
        <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register}
        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
          error
            ? "border-red-500/50 bg-red-500/5 focus:border-red-500"
            : "border-foreground/10 bg-background focus:border-primary"
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};
