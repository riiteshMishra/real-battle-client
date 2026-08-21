import ActionsHeader from "./ActionsHeader";
import DownloadButton from "./DownloadButton";
import PrintButton from "./PrintButton";
import ContactLink from "./ContactLink";

const TermsActions = () => {
  return (
    <section
      aria-labelledby="terms-actions-title"
      className="
        mb-12
        rounded-xl
        border border-indigo-200
        bg-linear-to-r
        from-indigo-50
        to-blue-50
        p-6 md:p-8
        dark:border-indigo-900/50
        dark:from-indigo-950/30
        dark:to-blue-950/30
      "
    >
      <ActionsHeader
        title="Terms & Documents"
        description="Save a copy of these Terms or contact us if you have questions about our rules and conditions."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <DownloadButton />
        <PrintButton />
        <ContactLink
          email="support@realbattle.com"
          title="Contact Support"
          subtitle="Questions about these Terms"
        />
      </div>
    </section>
  );
};

export default TermsActions;
