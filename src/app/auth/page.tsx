import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Authentication | Real Battle",
  description:
    "Login or create your Real Battle account to access tournaments, games, and your player dashboard.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function AuthPage() {
  redirect("/auth/login");
}
