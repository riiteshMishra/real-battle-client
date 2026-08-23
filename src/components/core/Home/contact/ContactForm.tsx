// components/forms/ContactForm.tsx

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  ContactFormData,
} from "@/src/lib/contact/validations";
import { FormInput } from "@/src/components/common/FormInput";
import { FormTextarea } from "@/src/components/common/FormTextarea";
import { sendMessage } from "@/src/services/oprations/contact/contact-api";

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

export default function ContactForm() {
  const [status] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  // REACT FORM
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  // ON-SUBMIT
  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await sendMessage(data);

      if (!response) {
        throw new Error("Failed to send message");
      }

      reset();
    } catch (error) {
      console.error("Contact form error:", error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-foreground/10 bg-foreground/3 rounded-2xl border p-6 backdrop-blur-xl lg:col-span-3"
    >
      {/* Status Messages */}
      {status.type === "success" && (
        <div className="mb-5 rounded-lg border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-300">
          ✓ {status.message}
        </div>
      )}

      {status.type === "error" && (
        <div className="mb-5 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
          ✗ {status.message}
        </div>
      )}

      {/* Name & Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <FormInput
          label="Name"
          placeholder="Your name"
          register={register("name")}
          error={errors.name?.message}
          disabled={isSubmitting}
        />
        <FormInput
          label="Email"
          type="email"
          placeholder="you@example.com"
          register={register("email")}
          error={errors.email?.message}
          disabled={isSubmitting}
        />
      </div>

      {/* Subject */}
      <div className="mt-5">
        <FormInput
          label="Subject"
          placeholder="How can we help?"
          register={register("subject")}
          error={errors.subject?.message}
          disabled={isSubmitting}
        />
      </div>

      {/* Message */}
      <div className="mt-5">
        <FormTextarea
          label="Message"
          placeholder="Tell us what's on your mind..."
          register={register("message")}
          error={errors.message?.message}
          disabled={isSubmitting}
          rows={5}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-primary mt-5 w-full rounded-xl px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
