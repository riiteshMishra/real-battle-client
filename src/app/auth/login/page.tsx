import type { Metadata } from "next";
import Aside from "../components/Aside";
import LoginForm from "./components/LoginForm";

export const metadata: Metadata = {
  title: "Login | Real Battle",
  description:
    "Login to your Real Battle account and access tournaments, games, rewards, and your player dashboard.",
  robots: {
    index: false,
    follow: false,
  },
};

const Page = () => {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-10 px-4 py-8 md:flex-row md:gap-12">
      <Aside
        heading="Welcome back, soldier"
        description="Log in to your account and get back into the battle."
      />

      <LoginForm />
    </main>
  );
};

export default Page;
