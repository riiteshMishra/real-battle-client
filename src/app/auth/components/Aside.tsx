"use client";
import React from "react";
import { Zap, Users, Trophy } from "lucide-react";

interface LeftSideProps {
  heading: string;
  description: string;
}

const Aside = ({ heading, description }: LeftSideProps) => {
  return (
    <section className="flex flex-col justify-center items-start gap-8 p-12 rounded-2xl font-roboto max-w-2xl">
      {/*  LOGO/BRANDING */}
      <div className="flex items-center gap-2">
        <Trophy className="w-8 h-8 text-primary" />
        <span className="text-xl font-bold text-foreground">Realbattle</span>
      </div>

      {/*  MAIN HEADING */}
      <div>
        <h1 className="text-4xl tracking-tight font-bold text-foreground mb-4 font-sekuya bg-transparent">
          {heading}
        </h1>
        <p className="text-lg text-muted-foreground max-w-md font-roboto capitalize">
          {description}
        </p>
      </div>

      {/* KEY FEATURES */}
      <div className="space-y-4 mt-8">
        <FeatureItem
          icon={<Zap className="w-5 h-5" />}
          title="Instant Tournaments"
          text="Create and join tournaments in seconds"
        />
        <FeatureItem
          icon={<Users className="w-5 h-5" />}
          title="Pro Players"
          text="Compete with top gaming professionals"
        />
        <FeatureItem
          icon={<Trophy className="w-5 h-5" />}
          title="Real Prizes"
          text="Win cash prizes and exclusive rewards"
        />
      </div>

      {/* STATS/SOCIAL PROOF */}
      <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
        <div>
          <p className="text-2xl font-bold text-primary">50K+</p>
          <p className="text-sm text-muted-foreground">Active Players</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-primary">₹1Cr+</p>
          <p className="text-sm text-muted-foreground">Prize Pool</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-primary">1000+</p>
          <p className="text-sm text-muted-foreground">Daily Matches</p>
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
      <h3 className="font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  </div>
);

export default Aside;
