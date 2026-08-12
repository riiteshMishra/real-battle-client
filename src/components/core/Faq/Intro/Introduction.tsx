import Heading from "./Heading";

const Introduction = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <Heading />

      <p className="mx-auto mt-4 max-w-2xl text-xs font-roboto leading-6 text-foreground/80 sm:text-sm text-center">
        Welcome to our FAQ section. Here you&apos;ll find answers to some of the
        most common questions about our platform, services, tournaments, account
        management, payments, and other important features.
      </p>

      <p className="mx-auto mt-4 max-w-2xl text-xs font-roboto leading-6 text-foreground/80 sm:text-sm text-center">
        If you can&apos;t find the answer you&apos;re looking for, feel free to
        contact our support team. We&apos;ll be happy to help you.
      </p>
    </section>
  );
};

export default Introduction;
