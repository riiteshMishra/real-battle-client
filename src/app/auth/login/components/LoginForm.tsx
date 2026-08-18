"use client";

import { useForm } from "react-hook-form";
import { FormInput } from "@/src/components/common/FormInput";
import GoogleLogin from "../../components/GoogleLogin";
import { useAppDispatch, useAppSelector } from "@/src/store/hooks";
import { setLoading, loginSuccess } from "@/src/store/slices/auth.slice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { login } from "@/src/services/oprations/auth/login-api";
import Link from "next/link";
import CTAButton from "@/src/components/common/CTAButton";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      dispatch(setLoading(true));

      const response = await login(data.email, data.password);

      if (response?.success && response?.user) {
        dispatch(loginSuccess(response.user));

        toast.success(response.message || "Login successful!");

        router.push("/dashboard");
      } else {
        toast.error(response?.message || "Login failed");
      }
    } catch (error: unknown) {
      console.error("Login error:", error);

      const message = error instanceof Error ? error.message : "Login failed";

      toast.error(message);
    } finally {
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
        {/* GOOGLE LOGIN */}

        <GoogleLogin />

        {/* DIVIDER */}
        <div className="flex w-full items-center gap-3">
          <div className="h-px flex-1 bg-foreground/10" />

          <span className="shrink-0 text-xs font-medium text-muted-foreground">
            OR
          </span>

          <div className="h-px flex-1 bg-foreground/10" />
        </div>

        {/* LOGIN FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-5"
        >
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

          {/* FORGOT PASSWORD */}
          <div className="-mt-2 flex justify-end">
            <button
              type="button"
              className="
                text-sm
                text-muted-foreground
                transition-colors
                hover:text-foreground
              "
            >
              Forgot password?
            </button>
          </div>

          {/* LOGIN BUTTON */}
          <CTAButton type="submit" disabled={isLoading}>
            <div className="flex items-center justify-center gap-2">
              {isLoading && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              )}

              <span>{isLoading ? "Logging in..." : "Login"}</span>
            </div>
          </CTAButton>
        </form>

        {!isLoading ? (
          <Link
            href="/auth/register"
            className="text-sm font-medium text-primary hover:underline"
          >
            Don&apos;t have an account? Register
          </Link>
        ) : (
          <span className="cursor-not-allowed text-sm font-medium text-muted-foreground">
            Don&apos;t have an account? Register
          </span>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
