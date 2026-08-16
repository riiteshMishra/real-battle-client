import React from "react";

const AuthTerms = () => {
  return (
    <p className="mt-5 text-center text-[10px] leading-4 text-muted-foreground">
      By continuing, you agree to our{" "}
      <button
        type="button"
        className="text-foreground underline-offset-2 hover:underline"
      >
        Terms of Service
      </button>{" "}
      and{" "}
      <button
        type="button"
        className="text-foreground underline-offset-2 hover:underline"
      >
        Privacy Policy
      </button>
      .
    </p>
  );
};

export default AuthTerms;
