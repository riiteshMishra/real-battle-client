import ParagraphSection from "./ParagraphSection";
import ListSection from "./ListSection";
import SubsectionsSection from "./SubsectionsSection";
import ContactSection from "./ContactSection";

import type { DocumentSection } from "./types";

interface SectionTemplateProps {
  sections: DocumentSection[];
  title: string;
  description?: string;
}

const SectionTemplate = ({
  sections,
  title,
  description,
}: SectionTemplateProps) => {
  return (
    <section aria-labelledby="sections-title" className="mb-12">
      <div className="mb-6">
        <h2
          id="privacy-sections-title"
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          {title ?? "Enter your title"}
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {description ?? "Enter your description"}
        </p>
      </div>

      <div className="space-y-8">
        {sections.map((section) => (
          <article
            key={section.id}
            id={section.id}
            className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 dark:border-slate-800 dark:bg-slate-950/60"
          >
            <h3 className="mb-5 text-xl font-bold tracking-tight text-slate-900 md:text-2xl dark:text-slate-100">
              {section.title}
            </h3>

            {section.type === "paragraphs" && (
              <ParagraphSection section={section} />
            )}

            {section.type === "list" && <ListSection section={section} />}

            {section.type === "subsections" && (
              <SubsectionsSection section={section} />
            )}

            {section.type === "contact" && <ContactSection section={section} />}
          </article>
        ))}
      </div>
    </section>
  );
};

export default SectionTemplate;
