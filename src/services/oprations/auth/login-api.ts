import { signInWithEmailAndPassword } from "firebase/auth";
import { authRoutes } from "../../apis-data";
import apiConnector from "@/src/services/apiConnector";
import { auth } from "@/src/configs/firebase";
import { toast } from "sonner";
import { getErrorMessage } from "@/src/utils/getMessages";
import { AUTH_RESPONSE } from "@/src/types/auth";

// LOGIN WITH EMAIL AND PASSWORD
export const login = async (
  email: string,
  password: string,
): Promise<AUTH_RESPONSE> => {
  const toastId = toast.loading("Loggin in system.....");
  try {
    // FIREBASE AUTHENTICATION
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    // GET ID TOKEN
    const idToken = await userCredential.user.getIdToken();

    // SEND TO BACKEND
    const response = await apiConnector<AUTH_RESPONSE>({
      method: "POST",
      url: authRoutes.LOGIN,
      body: {},
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
    // RETURN RESPONSE
    return response.data;
  } catch (err) {
    console.log("err", err);
    const errorMessage = getErrorMessage(err);
    toast.error(errorMessage || "Login failed");
    throw new Error(errorMessage);
  } finally {
    toast.dismiss(toastId);
  }
};
