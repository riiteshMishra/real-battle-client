"use client";

import { FormInput } from "@/src/components/common/FormInput";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import { setLoading, loginSuccess } from "@/src/store/slices/auth.slice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { registerUser } from "@/src/services/oprations/auth/register";
import GoogleLogin from "../../components/GoogleLogin";
import Link from "next/link";
import CTAButton from "@/src/components/common/CTAButton";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const password = watch("password");

  const onSubmit = async (data: RegisterFormData) => {
    try {
      // VALIDATE PASSWORDS MATCH
      if (data.password !== data.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      // SET LOADING
      dispatch(setLoading(true));

      // CALL REGISTER SERVICE
      const form = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      const response = await registerUser(form);

      if (response?.success && response?.user) {
        // DISPATCH LOGIN SUCCESS
        dispatch(loginSuccess(response.user));

        toast.success(response.message || "Registration successful!");
        router.push("/dashboard");
      } else {
        toast.error(response?.message || "Registration failed");
      }
    } catch (error: any) {
      console.error("Register error:", error);
      toast.error(error.message || "Registration failed");
    } finally {
      // SET LOADING FALSE
      dispatch(setLoading(false));
    }
  };

  return (
    <div
      className="
        w-full max-w-md
        rounded-2xl
        border border-accent dark:border-white/20
        bg-[#d1dce9] dark:bg-[#11213e]
        px-5 py-8
        sm:px-8 sm:py-10
        shadow-sm
      "
    >
      {/* CONTENT */}
      <div className="flex flex-col items-center gap-6">
        <GoogleLogin />

        {/* DIVIDER */}
        <div className="flex w-full items-center gap-3">
          <div className="h-px flex-1 bg-foreground/10" />
          <span className="shrink-0 text-xs font-medium text-muted-foreground">
            OR
          </span>
          <div className="h-px flex-1 bg-foreground/10" />
        </div>

        {/* REGISTRATION FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4"
        >
          {/* FULL NAME */}
          <FormInput
            label="Full name"
            type="text"
            placeholder="Enter your name"
            register={register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
            inputClassName="w-full"
            error={errors.name?.message}
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
            inputClassName="w-full"
            error={errors.email?.message}
          />

          {/* PASSWORD */}
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
            inputClassName="w-full"
            error={errors.password?.message}
          />

          {/* CONFIRM PASSWORD */}
          <FormInput
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            register={register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            inputClassName="w-full"
            error={errors.confirmPassword?.message}
          />

          {/* SUBMIT BUTTON */}
          <CTAButton type="submit" disabled={isLoading}>
            <div className="flex items-center justify-center gap-2">
              {isLoading && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              )}

              <span>
                {isLoading ? "Creating account..." : "Create account"}
              </span>
            </div>
          </CTAButton>
        </form>

        {/* LOGIN PAGE */}
        {!isLoading ? (
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-medium text-primary hover:underline"
            >
              Login
            </Link>
          </p>
        ) : (
          <span className="text-sm text-muted-foreground">
            Already have an account? Login
          </span>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
