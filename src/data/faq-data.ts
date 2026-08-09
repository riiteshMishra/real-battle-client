export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category:
    | "general"
    | "tournaments"
    | "matches"
    | "rewards"
    | "wallet"
    | "support"
    | "account";
}

export const faqData: FAQ[] = [
  {
    id: 1,
    category: "general",
    question: "What is Realbattle?",
    answer:
      "Realbattle is India's most trusted Free Fire tournament platform. Join daily tournaments, compete with skilled players, win exciting rewards, and experience professional esports from your mobile. We offer instant payouts, transparent results, and a secure gaming environment.",
  },
  {
    id: 2,
    category: "general",
    question: "How does Realbattle work?",
    answer:
      "Simple process: browse tournaments, join your preferred tournament, compete in the match, submit results, and win rewards. Once results are verified, your prize is instantly credited to your wallet.",
  },
  {
    id: 3,
    category: "general",
    question: "Is Realbattle available on mobile?",
    answer:
      "Yes! Realbattle is fully optimized for mobile gaming. Access tournaments, check match details, track your performance, and manage withdrawals directly from your mobile device.",
  },
  {
    id: 4,
    category: "tournaments",
    question: "How can I find a tournament?",
    answer:
      "Browse our active tournaments section to see daily tournaments filtered by game mode, entry fee, prize pool, and schedule. Each tournament shows complete details including rules, scoring system, and participant count.",
  },
  {
    id: 5,
    category: "tournaments",
    question: "How do I join a tournament?",
    answer:
      "Open the tournament, review the rules and entry requirements, ensure you have sufficient balance in your wallet, and click 'Join Tournament'. You'll receive match details and can participate at the scheduled time.",
  },
  {
    id: 6,
    category: "tournaments",
    question: "What types of tournaments are available?",
    answer:
      "Realbattle offers multiple formats: solo battles, duo tournaments, squad championships, special events, and seasonal competitions. Each tournament has its own unique scoring system and prize structure.",
  },
  {
    id: 7,
    category: "tournaments",
    question: "Which games are supported?",
    answer:
      "Free Fire is currently available on Realbattle with multiple game modes and tournaments running daily. Additional games are planned for future expansion as we grow the platform.",
  },
  {
    id: 8,
    category: "tournaments",
    question: "Can I see the tournament rules before joining?",
    answer:
      "Absolutely! Each tournament displays complete information including format (kills, placement, or combined scoring), schedule, entry requirements, participant limits, and detailed rules. Review all details before joining.",
  },
  {
    id: 9,
    category: "matches",
    question: "How do I participate in a match?",
    answer:
      "After joining a tournament, check your match lobby details including match time, opponent information, and server details. Ensure you're ready at the scheduled time and follow all tournament rules during the match.",
  },
  {
    id: 10,
    category: "matches",
    question: "How are match results recorded?",
    answer:
      "Results are automatically synced through in-game data or manually submitted based on tournament type. Our system verifies results in real-time and updates leaderboards instantly.",
  },
  {
    id: 11,
    category: "matches",
    question: "How are winners determined?",
    answer:
      "Winners are determined by the tournament's scoring system: kills only, placement only, or combined scoring. Final rankings are calculated based on accumulated points across all tournament matches.",
  },
  {
    id: 12,
    category: "matches",
    question: "What happens if there is a dispute about a result?",
    answer:
      "Open a support ticket directly from the platform with match details and your concern. Our 24/7 support team reviews disputes within hours and resolves them according to tournament rules. You can also view ticket history and resolution status anytime.",
  },
  {
    id: 13,
    category: "rewards",
    question: "How do tournament rewards work?",
    answer:
      "Each tournament has a prize pool distributed among top performers. Rewards are credited instantly to your wallet once results are verified. Prize amounts vary based on tournament entry fees and participant count.",
  },
  {
    id: 14,
    category: "rewards",
    question: "When do winners receive their rewards?",
    answer:
      "Rewards are instantly credited to your wallet after match results are verified and tournament ends. No waiting—check your wallet immediately for instant payouts.",
  },
  {
    id: 15,
    category: "rewards",
    question: "Where can I check my rewards?",
    answer:
      "View all your rewards, earnings, and transaction history in the Wallet section of your profile. You'll see real-time balance, transaction details, and withdrawal status.",
  },
  {
    id: 16,
    category: "wallet",
    question: "How do I deposit money into my wallet?",
    answer:
      "Open Wallet section, click 'Add Balance', and choose your payment method. We support multiple payment options including cards, UPI, and digital wallets. Deposits are instant.",
  },
  {
    id: 17,
    category: "wallet",
    question: "How can I withdraw my winnings?",
    answer:
      "Go to Wallet → Withdraw, enter the amount, and confirm your bank account details. Minimum withdrawal amount applies. Withdrawals are processed within 24-48 hours to your bank account.",
  },
  {
    id: 18,
    category: "wallet",
    question: "Is my wallet secure?",
    answer:
      "Yes! Realbattle uses bank-grade encryption for all transactions. Your wallet is protected with 2FA (two-factor authentication), and all payments are verified through secure gateways.",
  },
  {
    id: 19,
    category: "account",
    question: "Do I need an account to participate?",
    answer:
      "Yes. Create a free account using your phone number or email. Account creation is instant and required to track tournaments, manage rewards, and process withdrawals securely.",
  },
  {
    id: 20,
    category: "account",
    question: "Can I track my tournament history?",
    answer:
      "Yes! Your profile shows complete tournament history, match results, earnings, and performance statistics. Track your improvement over time and compete on global leaderboards.",
  },
  {
    id: 21,
    category: "account",
    question: "Can I see my leaderboard position?",
    answer:
      "Absolutely! View global and seasonal leaderboards to see your rank, MMR rating, total winnings, and how you compare with other players. Leaderboards update in real-time.",
  },
  {
    id: 22,
    category: "support",
    question: "What should I do if I face a technical issue?",
    answer:
      "Open the Support section in app, click 'Create Ticket', describe the issue, and attach relevant details. Our support team responds within 30 minutes. You can track ticket status anytime.",
  },
  {
    id: 23,
    category: "support",
    question: "How can I contact Realbattle support?",
    answer:
      "Use the in-app support ticket system available 24/7. Open the Support section, submit your issue with relevant details (tournament name, match ID, screenshots), and our team will assist you immediately.",
  },
  {
    id: 24,
    category: "support",
    question: "What happens if I disconnect during a match?",
    answer:
      "Disconnections are handled based on tournament rules. If a technical issue affects your match, open a support ticket immediately with match details. Our support team can review and assist if necessary.",
  },
  {
    id: 25,
    category: "support",
    question: "How fast is Realbattle support?",
    answer:
      "Realbattle offers 24/7 support with live admins. Most disputes and technical issues are resolved within hours. Critical issues like payment failures are prioritized and handled within 30 minutes.",
  },
];

export const homepageFaqData = faqData.slice(0, 7);
