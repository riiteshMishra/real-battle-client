import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Ban, ShieldCheck, Trophy, WalletCards } from "lucide-react";

import type { FAQIcon } from "./FaqSection";

interface FaqItemProps {
  value: string;
  question: string;
  answer: string;
  icon?: FAQIcon;
}

const FaqItem = ({ value, question, answer, icon }: FaqItemProps) => {
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
      <AccordionTrigger className="text-left text-sm font-semibold text-slate-900 hover:text-blue-600 hover:no-underline md:text-base dark:text-slate-100 dark:hover:text-blue-400 cursor-pointer">
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

      <AccordionContent className="text-sm leading-7 text-slate-900 md:text-base dark:text-slate-300 bg-slate-100 dark:bg-gray-950 rounded-lg px-4 py-5 my-2 h-fit w-fit">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqItem;
