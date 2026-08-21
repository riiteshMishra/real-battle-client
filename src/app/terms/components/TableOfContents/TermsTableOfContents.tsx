import { termsData } from "@/src/content/terms/terms-index";

import TermsTOCHeader from "./TermsTOCHeader";
import TermsTOCLink from "./TermsTOCLink";

const TermsTableOfContents = () => {
  return (
    <section
      aria-labelledby="terms-toc-title"
      className="
        mb-12
        rounded-xl
        border border-slate-200
        bg-slate-50/80
        p-6 md:p-8
        dark:border-slate-800
        dark:bg-slate-900/60
      "
    >
      <TermsTOCHeader />

      <nav aria-label="Terms of Service sections">
        <div className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
          {termsData.sections.map((section) => (
            <TermsTOCLink
              key={section.id}
              id={section.id}
              title={section.title}
            />
          ))}
        </div>
      </nav>
    </section>
  );
};

export default TermsTableOfContents;
