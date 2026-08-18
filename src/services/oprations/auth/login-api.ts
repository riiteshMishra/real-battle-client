import { signInWithEmailAndPassword } from "firebase/auth";
import { authRoutes } from "../../apis-data";
import apiConnector from "@/src/services/apiConnector";
import { auth } from "@/src/configs/firebase";
import { toast } from "sonner";
import { getErrorMessage } from "@/src/utils/getMessages";

// LOGIN WITH EMAIL AND PASSWORD
export const login = async (email: string, password: string) => {
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
    const response = await apiConnector({
      method: "POST",
      url: authRoutes.LOGIN,
      body: {},
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
    console.log("login response ..........", response);
    // RETURN RESPONSE
    return response;
  } catch (err) {
    console.log("err", err);
    const errorMessage = getErrorMessage(err);
    toast.error(errorMessage || "Login failed");
    throw new Error(errorMessage);
  }
};
