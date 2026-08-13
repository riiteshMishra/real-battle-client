import Link from "next/link";

const ViewAll = () => {
  return (
    <div className="mt-10 text-center">
      <Link
        href="/faq"
        className="inline-flex items-center gap-2 rounded-xl border border-foreground/10 bg-foreground/5 px-6 py-3 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 font-roboto"
      >
        View All FAQs
        <span>→</span>
      </Link>
    </div>
  );
};

export default ViewAll;
