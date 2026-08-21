import TermsContactHeader from "./TermsContactHeader";
import TermsContactCard from "./TermsContactCard";
import TermsContactNote from "./TermsContactNote";

const TermsContact = () => {
  return (
    <section
      aria-labelledby="terms-contact-title"
      className="
        mb-12
        rounded-xl
        border border-slate-200
        bg-white
        p-6 md:p-8
        dark:border-slate-800
        dark:bg-slate-950/60
      "
    >
      <TermsContactHeader />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <TermsContactCard
          label="Legal & Terms"
          email="legal@realbattle.com"
          description="Questions regarding Terms and legal matters"
          icon="legal"
        />

        <TermsContactCard
          label="Support & Requests"
          email="support@realbattle.com"
          description="Tournament, account, payment, and platform support"
          icon="support"
        />
      </div>

      <TermsContactNote />
    </section>
  );
};

export default TermsContact;
