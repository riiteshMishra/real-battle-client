import React from "react";
import CTAButton from "../../common/CTAButton";

interface SwitchProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthSwitch = ({ isLogin, setIsLogin }: SwitchProps) => {
  return (
    <div className="mt-5 text-center">
      <p className="text-xs text-muted-foreground mb-2">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
      </p>

      <CTAButton
        onClick={() => setIsLogin((prev) => !prev)}
        type="button"
        className="mt-1 text-xs font-medium text-primary underline-offset-4 transition hover:underline"
        variant="outline"
      >
        {isLogin ? "Create account" : "Login instead"}
      </CTAButton>
    </div>
  );
};

export default AuthSwitch;
