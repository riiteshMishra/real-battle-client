import PrivacyContactHeader from "./PrivacyContactHeader";
import PrivacyEmailCard from "./PrivacyEmailCard";
import PrivacyContactNote from "./PrivacyContactNote";

const PrivacyContact = () => {
  return (
    <section
      aria-labelledby="privacy-contact-title"
      className="
       mb-12
        rounded-xl
        border
        border-blue-200
        bg-linear-to-r from-blue-50 to-purple-50
        p-6 md:p-8
        dark:border-blue-900/50
        dark:from-blue-950/30
        dark:to-purple-950/30
      "
    >
      <PrivacyContactHeader />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <PrivacyEmailCard
          label="Privacy Concerns"
          email="privacy@realbattle.com"
          iconColor="blue"
        />

        <PrivacyEmailCard
          label="Support & Requests"
          email="support@realbattle.com"
          iconColor="purple"
        />
      </div>

      <PrivacyContactNote />
    </section>
  );
};

export default PrivacyContact;
