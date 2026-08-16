"use client";

import { useForm } from "react-hook-form";
import { FormInput } from "@/src/components/common/FormInput";
import GoogleLogin from "../google/GoogleLogin";

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* <GoogleLogin /> */}

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-foreground/10" />
        <span className="text-xs text-muted-foreground">OR</span>
        <div className="h-px flex-1 bg-foreground/10" />
      </div>

      <FormInput
        label="Email"
        type="email"
        placeholder="you@example.com"
        register={register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email",
          },
        })}
        error={errors.email?.message}
        // inputClassName="max-w-80"
      />

      <FormInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        register={register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
        error={errors.password?.message}
      />

      <div className="flex justify-end">
        <button
          type="button"
          className="text-sm text-muted-foreground transition hover:text-foreground"
        >
          Forgot password?
        </button>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 active:scale-[0.98]"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
