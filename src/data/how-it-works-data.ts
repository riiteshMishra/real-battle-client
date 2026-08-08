import { StaticImageData } from "next/image";
import { assets } from "../assets/assets";

interface howItWorks {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}

export const howItWorksData: howItWorks[] = [
  {
    id: 1,
    title: "Choose Your Tournament",
    description:
      "Browse upcoming tournaments, select your game mode, and find the battle that fits you.",
    image: assets.ChooseYourTour,
  },
  {
    id: 2,
    title: "Join and compete",
    description:
      "Register for the tournament, enter the match and compete against other players.",
    image: assets.JoinAndCompete,
  },
  {
    id: 3,
    title: "Playe & get result",
    description:
      "Play your match, submit or sync your score, and watch the leaderboard update in real time.",
    image: assets.PlayAndGetResult,
  },
  {
    id: 4,
    title: "Win & get rewarded",
    description:
      "Finish on top and recieve your directly through your real battle wallet.",
    image: assets.WinAndGetRewarded,
  },
];
