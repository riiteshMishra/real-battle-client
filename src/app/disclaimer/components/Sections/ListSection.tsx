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
          className="
            flex items-start gap-3
            text-sm md:text-base
            leading-7
            text-slate-700
            dark:text-slate-300
          "
        >
          <span
            aria-hidden="true"
            className="
              mt-3
              h-1.5 w-1.5
              shrink-0
              rounded-full
              bg-orange-500
              dark:bg-orange-400
            "
          />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default ListSection;
