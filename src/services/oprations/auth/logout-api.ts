import { signOut } from "firebase/auth";
import { auth } from "@/src/configs/firebase";
import { authRoutes } from "../../apis-data";
import apiConnector from "@/src/services/apiConnector";
import { getErrorMessage } from "@/src/utils/getMessages";
import { logoutSuccess as logoutAction } from "@/src/store/slices/auth.slice";
import { toast } from "sonner";

export const logout = async (dispatch: any) => {
  const toastId = toast.loading("Loging out");
  try {
    // BACKEND COOKIE CLEAR
    await apiConnector({
      method: "POST",
      url: authRoutes.LOGOUT,
    });

    // FIREBASE SIGN OUT
    await signOut(auth);

    // CLEAR REDUX AUTH STATE
    dispatch(logoutAction());

    toast.success("Logged out successfully");
  } catch (err: unknown) {
    const message = getErrorMessage(err);

    toast.error(message || "Logout failed");

    throw new Error(message || "Logout failed");
  } finally {
    toast.dismiss(toastId);
  }
};
