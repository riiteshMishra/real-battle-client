import Heading from "./Heading";
import FaqList from "./FaqList";
import ViewAll from "./ViewAll";

const HomepageFaq = () => {
  return (
    <section id="faq" className="px-5 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Heading />
        <FaqList />
        <ViewAll />
      </div>
    </section>
  );
};

export default HomepageFaq;
