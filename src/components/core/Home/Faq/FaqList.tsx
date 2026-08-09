import { faqData } from "@/src/data/faq-data";
import FaqItem from "./FaqItem";

const FaqList = () => {
  const topFaqs = faqData.slice(0, 7);

  return (
    <div className="space-y-3">
      {topFaqs.map((faq) => (
        <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqList;
