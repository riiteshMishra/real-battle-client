import { StaticImageData } from "next/image";
import { assets } from "../assets/assets";

export interface Game {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  status: "available" | "coming-soon";
}

export const gamesData: Game[] = [
  {
    id: 1,
    name: "Free Fire",
    description: "Join competitive battles and fight for the top spot.",
    image: assets.FreeFire,
    status: "available",
  },
  {
    id: 2,
    name: "PUBG Mobile",
    description: "Battle royale tournaments are coming soon.",
    image: assets.BGMI,
    status: "coming-soon",
  },
  {
    id: 3,
    name: "Call of Duty Mobile",
    description: "Fast-paced competitive tournaments are coming soon.",
    image: assets.COD,
    status: "coming-soon",
  },
];
