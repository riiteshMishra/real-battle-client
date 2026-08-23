import { Accordion } from "@/components/ui/accordion";

import FaqHeader from "./FaqHeader";
import FaqItem from "./FaqItem";

export type FAQIcon = "shield" | "trophy" | "wallet" | "prize" | "ban";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  icon?: FAQIcon;
}

interface FaqSectionProps {
  title: string;
  description?: string;
  items: readonly FAQItem[];
}

const FaqSection = ({ title, description, items }: FaqSectionProps) => {
  return (
    <section
      aria-labelledby="faq-title"
      className="mb-12 rounded-xl border border-slate-200 bg-slate-50/80 p-6 md:p-8 dark:border-slate-800 dark:bg-slate-900/60"
    >
      <FaqHeader title={title} description={description} />

      <Accordion type="single" collapsible className="space-y-2">
        {items.map((item) => (
          <FaqItem
            key={item.id}
            value={item.id}
            question={item.question}
            answer={item.answer}
            icon={item.icon}
          />
        ))}
      </Accordion>
    </section>
  );
};

export default FaqSection;
