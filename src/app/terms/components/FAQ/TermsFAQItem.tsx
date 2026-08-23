import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Ban, ShieldCheck, Trophy, WalletCards } from "lucide-react";

type FAQIcon = "shield" | "trophy" | "wallet" | "prize" | "ban";

type TermsFAQItemProps = {
  value: string;
  question: string;
  answer: string;
  icon?: FAQIcon;
};

const TermsFAQItem = ({ value, question, answer, icon }: TermsFAQItemProps) => {
  const icons = {
    shield: ShieldCheck,
    trophy: Trophy,
    wallet: WalletCards,
    prize: Trophy,
    ban: Ban,
  };

  const Icon = icon ? icons[icon] : null;

  return (
    <AccordionItem
      value={value}
      className="rounded-lg border border-slate-200 bg-white px-4 dark:border-slate-800 dark:bg-slate-950/50"
    >
      <AccordionTrigger className="text-left text-sm font-semibold text-slate-900 hover:text-blue-600 hover:no-underline md:text-base dark:text-slate-100 dark:hover:text-blue-400">
        <span className="flex items-center gap-2">
          {Icon && (
            <Icon
              aria-hidden="true"
              className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400"
            />
          )}

          {question}
        </span>
      </AccordionTrigger>

      <AccordionContent className="text-sm leading-7 text-slate-700 md:text-base dark:text-slate-300">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default TermsFAQItem;
