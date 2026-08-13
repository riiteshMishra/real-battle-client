import Footer from "@/src/components/common/footer/Footer";
import FaqHelp from "@/src/components/core/Faq/help/FaqHelp";
import Introduction from "@/src/components/core/Faq/Intro/Introduction";
import FaqList from "@/src/components/core/Home/Faq/FaqList";
import { faqData } from "@/src/data/faq-data";

const FaqPage = () => {
  return (
    <>
      <main className="pb-20">
        <Introduction />
        <FaqList faqList={faqData} />
        <FaqHelp />
      </main>
      <Footer />
    </>
  );
};

export default FaqPage;
