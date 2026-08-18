import BGlow from "@/src/components/common/BGlow";
import AuthCard from "./components/AuthCard";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-6 text-foreground">
      <BGlow />
      <AuthCard>{children}</AuthCard>
    </div>
  );
}
