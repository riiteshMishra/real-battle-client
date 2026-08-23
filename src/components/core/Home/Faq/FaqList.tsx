import { FAQ, faqData } from "@/src/data/faq-data";
import FaqItem from "./FaqItem";

interface FaqListProp {
  faqList?: FAQ[];
}

const FaqList = ({ faqList }: FaqListProp) => {
  const topFaqs = faqList ? faqList : faqData.slice(0, 7);

  return (
    <div className="mx-auto w-11/12 max-w-xl space-y-3">
      {topFaqs.map((faq) => (
        <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FaqList;
