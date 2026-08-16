import React, { useState } from "react";
import Header from "./Header";
import Login from "./login/Login";
import Register from "./signup/Register";
import AuthSwitch from "./AuthSwitch";
import GoogleLogin from "./google/GoogleLogin";
import AuthTerms from "./AuthTerms";

const AuthCard = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="relative w-full max-w-sm">
      <div className="rounded-2xl border border-border bg-card/80 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-6 dark:shadow-black/30">
        {/* Header */}
        <Header isLogin={isLogin} />

        {/* Form */}
        {isLogin ? <Login /> : <Register />}

        {/* Switch */}
        <AuthSwitch isLogin={isLogin} setIsLogin={setIsLogin} />

        {/* Divider */}
        <div className="flex items-center gap-3 py-4">
          <div className="h-px flex-1 bg-foreground/10" />
          <span className="text-xs text-muted-foreground">OR</span>
          <div className="h-px flex-1 bg-foreground/10" />
        </div>

        <GoogleLogin />

        {/* Terms */}
        <AuthTerms />
      </div>
    </div>
  );
};

export default AuthCard;
