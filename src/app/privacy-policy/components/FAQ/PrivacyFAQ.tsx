import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { privacyFAQData } from "./data";
import PrivacyFAQHeader from "./PrivacyFAQHeader";

const PrivacyFAQ = () => {
  return (
    <section
      aria-labelledby="privacy-faq-title"
      className="mb-12 rounded-xl border border-slate-200 bg-slate-50/80 p-6 md:p-8 dark:border-slate-800 dark:bg-slate-900/60"
      title="privacy-faq"
    >
      <PrivacyFAQHeader />

      <Accordion type="single" collapsible className="space-y-2">
        {privacyFAQData.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="rounded-lg border border-slate-200 bg-white px-4 dark:border-slate-800 dark:bg-slate-950/50"
          >
            <AccordionTrigger className="cursor-pointer text-left text-sm font-semibold text-slate-900 hover:text-blue-600 hover:no-underline md:text-base dark:text-slate-100 dark:hover:text-blue-400">
              {faq.question}
            </AccordionTrigger>

            <AccordionContent className="text-sm leading-7 text-slate-700 md:text-base dark:text-slate-300">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default PrivacyFAQ;
