import ActionsHeader from "./ActionsHeader";
import DownloadButton from "./DownloadButton";
import PrintButton from "./PrintButton";
import ContactLink from "./ContactLink";

interface ActionsSecProps {
  title: string;
  description: string;
  email: string;
  contactTitle: string;
  contactSubtitle: string;
}

const ActionsSec = ({
  title,
  description,
  email,
  contactTitle,
  contactSubtitle,
}: ActionsSecProps) => {
  return (
    <section
      aria-labelledby="actions-title"
      className="mb-12 rounded-xl border border-indigo-200 bg-linear-to-r from-indigo-50 to-blue-50 p-6 md:p-8 dark:border-indigo-900/50 dark:from-indigo-950/30 dark:to-blue-950/30"
    >
      <ActionsHeader title={title} description={description} />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <DownloadButton
          fileName="Real-Battle-Terms-of-Service.txt"
          content={""}
          title="Download Terms"
          subtitle="Save a copy for your records"
        />

        <PrintButton />

        <ContactLink
          email={email}
          title={contactTitle}
          subtitle={contactSubtitle}
        />
      </div>
    </section>
  );
};

export default ActionsSec;
