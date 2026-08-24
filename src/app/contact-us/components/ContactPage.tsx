import Footer from "@/src/components/common/footer/Footer";

import ContactHero from "./contact-hero";
import ContactOptions from "./ContactOptions";
import ContactInfo from "./ContactInfo";
import SocialMedia from "./SocialMediaLinks";
import ContactForm from "@/src/components/core/Home/contact/ContactForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 bg-[radial-gradient(circle,rgba(139,92,246,0.15)_1px,transparent_1px)] bg-size-[24px_24px] dark:bg-slate-950 dark:bg-[radial-gradient(circle,rgba(167,139,250,0.1)_1px,transparent_1px)]">
      <ContactHero />

      <main className="mx-auto max-w-5xl px-4 py-12">
        <ContactOptions />

        <ContactInfo />

        <SocialMedia />

        <div className="mx-auto max-w-100">
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
