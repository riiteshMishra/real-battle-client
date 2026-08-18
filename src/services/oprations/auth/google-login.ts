import { getErrorMessage } from "@/src/utils/getMessages";
import { toast } from "sonner";
import apiConnector from "../../apiConnector";
import { authRoutes } from "../../apis-data";
import { auth } from "@/src/configs/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const googleLogin = async () => {
  try {
    // GOOGLE AUTH PROVIDER
    const provider = new GoogleAuthProvider();

    // FIREBASE POPUP
    const userCredential = await signInWithPopup(auth, provider);

    // EXTRACT TOKEN FROM FIREBASE
    const idToken = await userCredential.user.getIdToken();

    // SEND TO BACKEND
    const response = await apiConnector({
      method: "POST",
      url: authRoutes.GOOGLE_SIGN_IN,
      body: {
        token: idToken, // FIREBASE ID-TOKEN
      },
    });

    // RETURN
    return response;
  } catch (error: any) {
    toast.error(getErrorMessage(error));
    throw new Error("Google login failed");
  }
};
