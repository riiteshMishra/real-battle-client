import BGlow from "@/src/components/common/BGlow";
import AuthCard from "./components/AuthCard";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background text-foreground relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-6">
      <BGlow />
      <AuthCard>{children}</AuthCard>
    </div>
  );
}
