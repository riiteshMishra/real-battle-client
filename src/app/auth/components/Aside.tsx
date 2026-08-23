"use client";
import React from "react";
import { Zap, Users, Trophy } from "lucide-react";

interface LeftSideProps {
  heading: string;
  description: string;
}

const Aside = ({ heading, description }: LeftSideProps) => {
  return (
    <section className="font-roboto flex max-w-2xl flex-col items-start justify-center gap-8 rounded-2xl p-12">
      {/*  LOGO/BRANDING */}
      <div className="flex items-center gap-2">
        <Trophy className="text-primary h-8 w-8" />
        <span className="text-foreground text-xl font-bold">Realbattle</span>
      </div>

      {/*  MAIN HEADING */}
      <div>
        <h1 className="text-foreground font-sekuya mb-4 bg-transparent text-4xl font-bold tracking-tight">
          {heading}
        </h1>
        <p className="text-muted-foreground font-roboto max-w-md text-lg capitalize">
          {description}
        </p>
      </div>

      {/* KEY FEATURES */}
      <div className="mt-8 space-y-4">
        <FeatureItem
          icon={<Zap className="h-5 w-5" />}
          title="Instant Tournaments"
          text="Create and join tournaments in seconds"
        />
        <FeatureItem
          icon={<Users className="h-5 w-5" />}
          title="Pro Players"
          text="Compete with top gaming professionals"
        />
        <FeatureItem
          icon={<Trophy className="h-5 w-5" />}
          title="Real Prizes"
          text="Win cash prizes and exclusive rewards"
        />
      </div>

      {/* STATS/SOCIAL PROOF */}
      <div className="border-border mt-12 grid grid-cols-3 gap-6 border-t pt-8">
        <div>
          <p className="text-primary text-2xl font-bold">50K+</p>
          <p className="text-muted-foreground text-sm">Active Players</p>
        </div>
        <div>
          <p className="text-primary text-2xl font-bold">₹1Cr+</p>
          <p className="text-muted-foreground text-sm">Prize Pool</p>
        </div>
        <div>
          <p className="text-primary text-2xl font-bold">1000+</p>
          <p className="text-muted-foreground text-sm">Daily Matches</p>
        </div>
      </div>
    </section>
  );
};

// HELPER COMPONENT
interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const FeatureItem = ({ icon, title, text }: FeatureItemProps) => (
  <div className="flex items-start gap-3">
    <div className="text-primary mt-1">{icon}</div>
    <div>
      <h3 className="text-foreground font-semibold">{title}</h3>
      <p className="text-muted-foreground text-sm">{text}</p>
    </div>
  </div>
);

export default Aside;
