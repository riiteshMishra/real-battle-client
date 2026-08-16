import { signInWithEmailAndPassword } from "firebase/auth";
import { authRoutes } from "../../apis-data";
import ApiConnector from "@/src/services/apiConnector";
import { auth } from "@/src/configs/firebase";
import { toast } from "sonner";
import { getErrorMessage } from "@/src/utils/getMessages";

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    const response = await ApiConnector({
      method: "POST",
      url: authRoutes.LOGIN,
      body: {
        uid: user.uid,
        email: user.email,
      },
    });

    toast.success("Login successful!");
    return response.data;
  } catch (err) {
    toast.error(getErrorMessage(err, "Login failed"));
    throw err;
  }
};
