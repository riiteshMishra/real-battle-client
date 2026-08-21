import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { termsData } from "@/src/content/terms/terms-index";

import ParagraphSection from "./ParagraphSection";
import ListSection from "./ListSection";
import SubsectionsSection from "./SubsectionsSection";
import ContactSection from "./ContactSection";

const TermsSections = () => {
  return (
    <section
      aria-labelledby="terms-sections-title"
      className="mb-12"
    >
      <h2 id="terms-sections-title" className="sr-only">
        Terms of Service Sections
      </h2>

      <Accordion
        type="single"
        collapsible
        className="space-y-3"
      >
        {termsData.sections.map((section) => (
          <AccordionItem
            key={section.id}
            value={section.id}
            id={section.id}
            className="
              overflow-hidden
              rounded-xl
              border border-slate-200
              bg-white
              px-6
              shadow-sm
              transition-colors
              dark:border-slate-800
              dark:bg-slate-950/60
            "
          >
            <AccordionTrigger
              className="
                py-5
                text-left
                text-base
                font-semibold
                tracking-tight
                text-slate-900
                hover:no-underline
                hover:text-blue-600
                md:text-lg
                dark:text-slate-100
                dark:hover:text-blue-400
              "
            >
              {section.title}
            </AccordionTrigger>

            <AccordionContent
              className="
                pb-6
                text-slate-700
                dark:text-slate-300
              "
            >
              {section.type === "paragraphs" && (
                <ParagraphSection section={section} />
              )}

              {section.type === "list" && (
                <ListSection section={section} />
              )}

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

export default TermsSections;