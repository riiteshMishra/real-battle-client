import ApiConnector from "@/src/services/apiConnector";
import { SendMessagePayload } from "./types";
import { contactEndPoints } from "../../apis-data";
import { toast } from "sonner";
import { getErrorMessage, getSuccessMessage } from "@/src/utils/getMessages";

// SEND MESSAGE
export const sendMessage = async ({
  name,
  email,
  subject,
  message,
  phone,
}: SendMessagePayload) => {
  try {
    // FETCH DATA
    const response = await ApiConnector({
      method: "POST",
      url: contactEndPoints.CONTACT,
      body: {
        name,
        email,
        subject,
        message,
        phone,
      },
    });

    toast.success(getSuccessMessage(response));
    return response.data;
  } catch (error) {
    console.error("Send message error:", error);
    toast.error(getErrorMessage(error));
    throw error;
  }
};
