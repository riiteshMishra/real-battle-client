import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Heading from "./Heading";

const ContactUs = () => {
  return (
    <section id="contact" className="px-5 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Heading />

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
