import { Trash2 } from "lucide-react";
import { Button } from "@/src/components/common/button";

const DeleteAccountAction = () => {
  const handleDeleteAccount = () => {
    console.log("Request account deletion");
  };

  return (
    <Button
      type="button"
      onClick={handleDeleteAccount}
      variant="outline"
      className="h-auto min-h-16 justify-start gap-3 border-red-200 bg-white px-4 py-4 text-left text-red-700 hover:border-red-400 hover:bg-red-50 dark:border-red-900/70 dark:bg-slate-950/50 dark:text-red-400 dark:hover:border-red-800 dark:hover:bg-red-950/30"
    >
      <Trash2 aria-hidden="true" className="h-5 w-5 shrink-0" />

      <span>
        <span className="block font-semibold">Delete My Account</span>

        <span className="mt-1 block text-xs font-normal text-red-500 dark:text-red-400/80">
          Request account deletion
        </span>
      </span>
    </Button>
  );
};

export default DeleteAccountAction;
