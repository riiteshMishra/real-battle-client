import { getErrorMessage, getSuccessMessage } from "@/src/utils/getMessages";
import { toast } from "sonner";
import apiConnector from "../../apiConnector";
import { authRoutes } from "../../apis-data";

export const rebaseAuth = async () => {
  try {
    const response = await apiConnector({
      method: "POST",
      url: authRoutes.GET_ME,
    });

    toast.success(getSuccessMessage(response));
  } catch (err) {
    toast.error(getErrorMessage(err));
  }
};
