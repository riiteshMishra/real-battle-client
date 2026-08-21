import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { privacyData } from "@/src/content/privacy/privacy-index";

import ParagraphSection from "./ParagraphSection";
import ListSection from "./ListSection";
import SubsectionsSection from "./SubsectionsSection";
import ContactSection from "./ContactSection";

const PrivacySections = () => {
  return (
    <section aria-labelledby="privacy-sections-title" className="mb-12">
      <div className="mb-6">
        <h2
          id="privacy-sections-title"
          className="
            text-2xl font-bold tracking-tight
            text-slate-900 dark:text-white
          "
        >
          Privacy Policy Details
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          Learn more about how Real Battle collects, uses, protects, and manages
          player, gaming, and tournament information.
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {privacyData.sections.map((section) => (
          <AccordionItem
            key={section.id}
            value={section.id}
            id={section.id}
            className="
              overflow-hidden rounded-xl border
              border-slate-200 bg-white
              px-5 md:px-6
              shadow-sm
              dark:border-slate-800
              dark:bg-slate-900/80
              dark:shadow-none
            "
          >
            <AccordionTrigger
              className="
                py-5 text-left text-base font-semibold
                text-slate-900
                hover:no-underline
                hover:text-blue-600
                dark:text-slate-100
                dark:hover:text-blue-400
                data-[state=open]:text-blue-600
                dark:data-[state=open]:text-blue-400
              "
            >
              {section.title}
            </AccordionTrigger>

            <AccordionContent
              className="
                border-t border-slate-100
                pt-5 pb-5
                text-slate-700
                dark:border-slate-800
                dark:text-slate-300
              "
            >
              {section.type === "paragraphs" && (
                <ParagraphSection section={section} />
              )}

              {section.type === "list" && <ListSection section={section} />}

              {section.type === "subsections" && (
                <SubsectionsSection section={section} />
              )}

              {section.type === "contact" && (
                <ContactSection section={section} />
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default PrivacySections;
