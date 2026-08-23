import PrivacyActionsHeader from "./PrivacyActionsHeader";
import RequestDataAction from "./RequestDataAction";
import DownloadPolicyAction from "./DownloadPolicyAction";
import DeleteAccountAction from "./DeleteAccountAction";

const PrivacyActions = () => {
  return (
    <section
      aria-labelledby="privacy-actions-title"
      className="mb-12 rounded-xl border border-blue-200 bg-linear-to-r from-blue-50 to-purple-50 p-6 md:p-8 dark:border-blue-900/50 dark:from-blue-950/30 dark:to-purple-950/30"
    >
      <PrivacyActionsHeader />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <RequestDataAction />

        <DownloadPolicyAction />

        <DeleteAccountAction />
      </div>
    </section>
  );
};

export default PrivacyActions;
