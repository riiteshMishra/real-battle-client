import { FileSearch } from "lucide-react";
import { Button } from "@/src/components/common/button";

const RequestDataAction = () => {
  const handleRequestData = () => {
    console.log("Request personal data");
  };

  return (
    <Button
      type="button"
      onClick={handleRequestData}
      variant="outline"
      className="h-auto min-h-16 justify-start gap-3 border-blue-200 bg-white px-4 py-4 text-left hover:border-blue-400 hover:bg-blue-50 dark:border-blue-900 dark:bg-slate-950/50 dark:hover:border-blue-700 dark:hover:bg-blue-950/30"
    >
      <FileSearch
        aria-hidden="true"
        className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400"
      />

      <span>
        <span className="block font-semibold text-slate-900 dark:text-slate-100">
          Request My Data
        </span>

        <span className="mt-1 block text-xs font-normal text-slate-500 dark:text-slate-400">
          Request a copy of your data
        </span>
      </span>
    </Button>
  );
};

export default RequestDataAction;
