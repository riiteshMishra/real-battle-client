import { ArrowDown, Mail, RotateCcw } from "lucide-react";

const RefundActions = () => {
  return (
    <section aria-labelledby="refund-actions-title" className="mb-12">
      <h2
        id="refund-actions-title"
        className="
          mb-4
          text-xl
          font-bold
          tracking-tight
          text-slate-900
          dark:text-slate-100
        "
      >
        Need Help With a Refund?
      </h2>

      <div
        className="
          flex flex-col
          gap-3
          sm:flex-row
          sm:flex-wrap
        "
      >
        <a
          href="#refund-process"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-blue-600
            px-5 py-3
            text-sm
            font-semibold
            text-white
            transition-colors
            hover:bg-blue-700
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-500
            focus-visible:ring-offset-2
          "
        >
          <RotateCcw aria-hidden="true" className="h-4 w-4" />
          Refund Process
        </a>

        <a
          href="#refund-eligibility"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-lg
            border
            border-slate-300
            bg-white
            px-5 py-3
            text-sm
            font-semibold
            text-slate-700
            transition-colors
            hover:bg-slate-50
            dark:border-slate-700
            dark:bg-slate-900
            dark:text-slate-200
            dark:hover:bg-slate-800
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-500
            focus-visible:ring-offset-2
          "
        >
          <ArrowDown aria-hidden="true" className="h-4 w-4" />
          Check Eligibility
        </a>

        <a
          href="mailto:support@realbattle.com"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-lg
            border
            border-slate-300
            bg-white
            px-5 py-3
            text-sm
            font-semibold
            text-slate-700
            transition-colors
            hover:bg-slate-50
            dark:border-slate-700
            dark:bg-slate-900
            dark:text-slate-200
            dark:hover:bg-slate-800
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-blue-500
            focus-visible:ring-offset-2
          "
        >
          <Mail aria-hidden="true" className="h-4 w-4" />
          Contact Support
        </a>
      </div>
    </section>
  );
};

export default RefundActions;
