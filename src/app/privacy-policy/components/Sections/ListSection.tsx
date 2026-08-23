import { Check } from "lucide-react";

type ListSectionProps = {
  section: {
    items: string[];
  };
};

const ListSection = ({ section }: ListSectionProps) => {
  return (
    <ul className="space-y-3">
      {section.items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 text-sm leading-7 text-slate-700 md:text-base dark:text-slate-300"
        >
          <div className="animate-check-glow mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 shadow-[0_0_12px_rgba(249,115,22,0.35)] dark:bg-orange-950/40 dark:shadow-[0_0_14px_rgba(249,115,22,0.45)]">
            <Check
              aria-hidden="true"
              className="animate-check-color h-4 w-4 text-orange-600 dark:text-orange-400"
            />
          </div>

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default ListSection;
