// FEATURES SECTION

import {
  Activity,
  Award,
  Wallet,
  TrendingUp,
  Headphones,
  Users,
  Trophy,
  Shield,
  Bell,
  Zap,
  LucideIcon,
} from "lucide-react";
import { assets } from "../assets/assets";
import { StaticImageData } from "next/image";

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: "purple" | "cyan" | "orange" | "green" | "pink";
  image?: StaticImageData;
}

export const featuresData: Feature[] = [
  {
    id: "1",
    title: "Live Match Management",
    description:
      "Real-time synchronization, automatic score tracking, and seamless dispute resolution. Our engine handles the logistics so you can focus on the game.",
    icon: Activity,
    color: "purple",
    image: assets.GridCard,
  },
  {
    id: "2",
    title: "Smart Prize Distribution",
    description:
      "Automated payouts to wallets the instant the match concludes. No more waiting for manual processing.",
    icon: Award,
    color: "cyan",
  },
  {
    id: "3",
    title: "Secure Wallet System",
    description:
      "Bank-grade encryption for all your transactions. Deposit, play, and withdraw with complete peace of mind.",
    icon: Wallet,
    color: "orange",
  },
  {
    id: "4",
    title: "Advanced Leaderboard",
    description:
      "Track your MMR, view detailed match history and see how you stack up against the best players globally.",
    icon: TrendingUp,
    color: "purple",
  },
  {
    id: "5",
    title: "24/7 Support System",
    description:
      "Live admins available round the clock to resolve disputes and assist with technical issues instantly.",
    icon: Headphones,
    color: "cyan",
  },
  {
    id: "6",
    title: "Player Profiles",
    description:
      "Detailed stats, achievements, and verified credentials for every player. Build your reputation.",
    icon: Users,
    color: "green",
  },
  {
    id: "7",
    title: "Multiple Tournament Types",
    description:
      "Solo tournaments, team battles, squad championships, and seasonal events. Something for everyone.",
    icon: Trophy,
    color: "pink",
    image: assets.GridCard,
  },
  {
    id: "8",
    title: "Fair & Transparent System",
    description:
      "Verified results, automated scoring, and complete audit trail. No manipulation, no hidden processes.",
    icon: Shield,
    color: "cyan",
  },
  {
    id: "9",
    title: "Instant Notifications",
    description:
      "Get real-time updates on match results, prize confirmations, withdrawals, and support replies.",
    icon: Bell,
    color: "orange",
  },
  {
    id: "10",
    title: "Gamified Experience",
    description:
      "Earn badges, unlock achievements, climb seasonal leaderboards, and compete for exclusive rewards.",
    icon: Zap,
    color: "purple",
  },
];
