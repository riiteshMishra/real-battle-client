"use client";
import BGlow from "@/src/components/common/BGlow";
import AuthCard from "@/src/components/core/Auth/AuthCard";

const AuthPage = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-6 text-foreground">
      <BGlow />

      <AuthCard />
    </div>
  );
};

export default AuthPage;
