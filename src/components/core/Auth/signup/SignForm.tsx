"use client";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { FormInput } from "@/src/components/common/FormInput";
import { toast } from "sonner";
import { registerUser } from "@/src/services/oprations/auth/register";
import Loader from "@/src/components/common/Loader";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<RegisterForm>();

  const password = watch("password");

  // REGISTER USER MUTATION
  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,

    // HANDLE SUCCESS RESPONSE
    onSuccess: () => {
      toast.success("Registration successful!");

      // RESET FORM AFTER SUCCESSFUL REGISTRATION
      reset();
    },

    // HANDLE ERROR RESPONSE
    onError: (error) => {
      toast.error(error.message || "Registration failed");
    },
  });

  // HANDLE FORM SUBMISSION
  const onSubmit = (data: RegisterForm) => {
    mutate({
      name: data.name,
      email: data.email,
      password: data.password,
    });
  };

  if (isPending) {
    return <Loader />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* FULL NAME */}
      <FormInput
        label="Name"
        placeholder="Your name"
        register={register("name", {
          required: "Name is required",
        })}
        error={errors.name?.message}
        disabled={isPending}
      />

      {/* EMAIL */}
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
        disabled={isPending}
      />

      {/* PASSWORD */}
      <FormInput
        label="Password"
        type="password"
        placeholder="Create a password"
        register={register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
        error={errors.password?.message}
        disabled={isPending}
      />

      {/* CONFIRM PASSWORD */}
      <FormInput
        label="Confirm password"
        type="password"
        placeholder="Confirm your password"
        register={register("confirmPassword", {
          required: "Please confirm your password",
          validate: (value) => value === password || "Passwords do not match",
        })}
        error={errors.confirmPassword?.message}
        disabled={isPending}
      />

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? "Creating account..." : "Create account"}
      </button>
    </form>
  );
};

export default SignForm;
