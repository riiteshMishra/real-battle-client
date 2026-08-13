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
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-background/80
        px-4 py-6
        backdrop-blur-sm
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          max-h-[80vh]
          w-full max-w-lg
          overflow-y-auto
          rounded-2xl
          border border-border
          bg-background
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Line */}
        <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-foreground/30 to-transparent" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute right-5 top-5 z-10
            flex h-9 w-9 items-center justify-center
            rounded-full
            border border-border
            bg-muted
            text-muted-foreground
            transition-all duration-200
            hover:bg-accent
            hover:text-foreground cursor-pointer
          "
          aria-label="Close support modal"
        >
          <X size={18} strokeWidth={2} />
        </button>

        {/* Header */}
        <div className="border-b border-border px-6 py-6 pr-16 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Realbattle Support
          </p>

          <h5 className="mt-2 text-2xl font-bold text-foreground">
            How can we help?
          </h5>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
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
