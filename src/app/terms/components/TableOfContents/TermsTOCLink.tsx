type TermsTOCLinkProps = {
  id: string;
  title: string;
};

const TermsTOCLink = ({ id, title }: TermsTOCLinkProps) => {
  return (
    <a
      href={`#${id}`}
      className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition-all hover:bg-white hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-950 dark:hover:text-blue-400"
    >
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 transition-all group-hover:bg-blue-600 group-hover:shadow-[0_0_8px_rgba(37,99,235,0.7)] dark:bg-slate-600 dark:group-hover:bg-blue-400 dark:group-hover:shadow-[0_0_8px_rgba(96,165,250,0.7)]"
      />

      <span className="leading-5 group-hover:underline">{title}</span>
    </a>
  );
};

export default TermsTOCLink;
