import { RefundSection } from "@/src/content/refund/types";

interface ListSectionProps {
  section: RefundSection;
}

const ListSection = ({ section }: ListSectionProps) => {
  return (
    <ul className="space-y-3">
      {section.items?.map((item, index) => (
        <li
          key={index}
          className="relative pl-6 text-sm leading-7 text-slate-700 dark:text-slate-300"
        >
          <span
            aria-hidden="true"
            className="absolute top-3 left-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400"
          />

          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListSection;
