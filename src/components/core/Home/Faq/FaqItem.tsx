interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  return (
    <details className="group overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/3 transition-all duration-300 hover:border-primary/30 open:border-primary/30 open:bg-primary/3 select-none">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-sm font-semibold sm:px-6 sm:text-base">
        <span>{question}</span>

        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-foreground/10 text-lg text-foreground/60 transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>

      <div className="px-5 pb-5 sm:px-6">
        <div className="h-px bg-foreground/10" />

        <p className="pt-4 text-sm leading-7 text-foreground/60">{answer}</p>
      </div>
    </details>
  );
};

export default FaqItem;
