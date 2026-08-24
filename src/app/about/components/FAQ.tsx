"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { aboutContent } from "./aboutContent";

export const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {aboutContent.faqs?.map((faq) => (
            <div
              key={faq.id}
              className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="flex w-full items-center justify-between p-4 text-left font-semibold text-slate-900 transition hover:bg-slate-50 dark:text-white dark:hover:bg-slate-900"
              >
                {faq.question}
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openId === faq.id && (
                <div className="border-t border-slate-200 bg-slate-50 px-4 py-4 text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
