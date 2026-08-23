import ContactForm from "@/src/components/core/Home/contact/ContactForm";
import ContactHeader from "./ContactHeader";
import ContactNote from "./ContactNote";

export interface ContactItem {
  id: string;
  label: string;
  email: string;
  description: string;
  icon?: "legal" | "support";
}

interface ContactSectionProps {
  title: string;
  description: string;
  note?: string;
}

const ContactSection = ({ title, description }: ContactSectionProps) => {
  return (
    <section
      aria-labelledby="contact-title"
      className="mb-12 rounded-xl border border-slate-200 bg-white p-6 md:p-8 dark:border-slate-800 dark:bg-slate-950/60"
    >
      <ContactHeader title={title} description={description} />
      <ContactForm />
      <ContactNote />
    </section>
  );
};

export default ContactSection;
