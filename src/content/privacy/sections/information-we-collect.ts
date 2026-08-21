import { userData } from "../data-definitions/user-data";
import { gamingData } from "../data-definitions/gaming-data";
import { tournamentJoinData } from "../data-definitions/tournament-join-data";
import { technicalInfo } from "../data-definitions/technical-info";
import { userContent } from "../data-definitions/user-content";

export const informationWeCollectSection = {
  id: "information-we-collect",
  title: "2. Information We Collect",
  type: "subsections" as const,
  subsections: [
    {
      title: "Account Information",
      items: userData,
    },
    {
      title: "Gaming Information",
      items: gamingData,
    },
    {
      title: "Tournament Information",
      items: tournamentJoinData,
    },
    {
      title: "Technical Information",
      items: technicalInfo,
    },
    {
      title: "User Content",
      items: userContent,
    },
  ],
};
