import { RefundSection } from "@/src/content/refund/types";

interface ParagraphSectionProps {
  section: RefundSection;
}

const ParagraphSection = ({ section }: ParagraphSectionProps) => {
  return (
    <div className="space-y-4">
      {section.content?.map((paragraph, index) => (
        <p
          key={index}
          className="
            text-sm
            leading-7
            text-slate-700
            dark:text-slate-300
          "
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default ParagraphSection;
