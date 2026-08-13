"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SupportModal from "./SupportModal";

const FaqHelp = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-foreground/3 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Need Assistance?
            </span>

            <h4 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-roboto">
              Still need help?
            </h4>

            <p className="mx-auto mt-5 max-w-xl text-xs leading-7 text-muted-foreground sm:text-base font-roboto">
              Our support team is here to help you with tournaments, payments,
              technical issues and disputes.
            </p>

            {/* Contact Button */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="
                mt-7 inline-flex items-center gap-2
                rounded-full
                bg-foreground px-6 py-3
                text-sm font-semibold
                text-background
                transition-all duration-300
                hover:-translate-y-0.5
                hover:opacity-90 cursor-pointer
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)]
              "
            >
              Contact Support
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* Trust Text */}
          <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center sm:flex-row">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/60" />

            <p className="text-xs text-muted-foreground">
              Realbattle Support · We&apos;re here to help
            </p>
          </div>
        </div>
      </section>

      <SupportModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default FaqHelp;
