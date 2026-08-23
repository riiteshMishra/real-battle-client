"use client";

import React from "react";
import ContactForm from "../../Home/contact/ContactForm";
import { X } from "lucide-react";

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SupportModal = ({ isOpen, onClose }: SupportModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="bg-background/80 fixed inset-0 z-50 flex items-center justify-center px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="border-border bg-background relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl border shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Line */}
        <div className="via-foreground/30 absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent to-transparent" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="border-border bg-muted text-muted-foreground hover:bg-accent hover:text-foreground absolute top-5 right-5 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border transition-all duration-200"
          aria-label="Close support modal"
        >
          <X size={18} strokeWidth={2} />
        </button>

        {/* Header */}
        <div className="border-border border-b px-6 py-6 pr-16 sm:px-8">
          <p className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase">
            Realbattle Support
          </p>

          <h5 className="text-foreground mt-2 text-2xl font-bold">
            How can we help?
          </h5>

          <p className="text-muted-foreground mt-2 text-sm leading-6">
            Tell us about your issue and our support team will get back to you.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl px-6 py-6 sm:px-8 sm:py-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default SupportModal;
