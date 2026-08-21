export const tournamentSection = {
  id: "tournament",
  title: "6. Tournament Participation",
  type: "subsections" as const,

  subsections: [
    {
      title: "Tournament Registration",
      items: [
        "You must provide all information required to register for a tournament.",
        "Registration does not guarantee participation if you fail to satisfy eligibility, payment, verification, check-in, or other tournament requirements.",
        "Tournament-specific requirements may be displayed on the tournament page and must be followed.",
      ],
    },

    {
      title: "Participation",
      items: [
        "You must participate using the account, game account, team, and other information associated with your registration.",
        "You are responsible for joining the correct tournament, match, room, lobby, or session at the specified time.",
        "Failure to check in or join within the applicable time period may result in disqualification or loss of participation.",
      ],
    },

    {
      title: "Tournament-Specific Rules",
      items: [
        "Individual tournaments may have additional rules concerning format, scoring, maps, game modes, room settings, player limits, check-in, match timing, evidence, and prizes.",
        "Tournament-specific rules displayed by Real Battle or the applicable organizer must be followed in addition to these Terms.",
      ],
    },
  ],
};
