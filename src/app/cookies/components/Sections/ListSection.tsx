type ListSectionProps = {
  section: {
    items?: string[];
  };
};

const ListSection = ({ section }: ListSectionProps) => {
  if (!section.items?.length) return null;

  return (
    <ul className="space-y-3">
      {section.items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 text-sm leading-7 text-slate-700 md:text-base dark:text-slate-300"
        >
          <span
            aria-hidden="true"
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500 shadow-[0_0_7px_rgba(249,115,22,0.6)] dark:bg-orange-400 dark:shadow-[0_0_8px_rgba(251,146,60,0.6)]"
          />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default ListSection;
