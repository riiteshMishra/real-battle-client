import type { Metadata } from "next";
import Aside from "../components/Aside";
import RegisterForm from "./components/RegisterForm";

export const metadata: Metadata = {
  title: "Create Account | Real Battle",
  description:
    "Create your Real Battle account and join tournaments, compete with players, and win exciting rewards.",
  robots: {
    index: false,
    follow: false,
  },
};

// Register page
const Page = () => {
  return (
    <main className="font-roboto mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-10 px-4 py-8 md:flex-row md:gap-12">
      <Aside
        heading="Welcome, soldier"
        description="Create your account and join the battle"
      />
      <RegisterForm />
    </main>
  );
};

export default Page;
