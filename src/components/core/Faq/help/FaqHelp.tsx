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
        <div className="bg-foreground/3 pointer-events-none absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-muted-foreground mb-4 inline-block text-xs font-semibold tracking-[0.25em] uppercase">
              Need Assistance?
            </span>

            <h4 className="font-roboto text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Still need help?
            </h4>

            <p className="text-muted-foreground font-roboto mx-auto mt-5 max-w-xl text-xs leading-7 sm:text-base">
              Our support team is here to help you with tournaments, payments,
              technical issues and disputes.
            </p>

            {/* Contact Button */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="bg-foreground text-background mt-7 inline-flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
            >
              Contact Support
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* Trust Text */}
          <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center sm:flex-row">
            <span className="bg-foreground/60 h-1.5 w-1.5 rounded-full" />

            <p className="text-muted-foreground text-xs">
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
