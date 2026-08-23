import Heading from "./Heading";

const Introduction = () => {
  return (
    <section className="mx-auto max-w-4xl px-6 py-12">
      <Heading />

      <p className="font-roboto text-foreground/80 mx-auto mt-4 max-w-2xl text-center text-xs leading-6 sm:text-sm">
        Welcome to our FAQ section. Here you&apos;ll find answers to some of the
        most common questions about our platform, services, tournaments, account
        management, payments, and other important features.
      </p>

      <p className="font-roboto text-foreground/80 mx-auto mt-4 max-w-2xl text-center text-xs leading-6 sm:text-sm">
        If you can&apos;t find the answer you&apos;re looking for, feel free to
        contact our support team. We&apos;ll be happy to help you.
      </p>
    </section>
  );
};

export default Introduction;
