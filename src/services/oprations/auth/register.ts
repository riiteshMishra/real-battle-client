import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/src/configs/firebase";

import { getErrorMessage } from "@/src/utils/getMessages";
import ApiConnector from "../../apiConnector";
import { authRoutes } from "../../apis-data";

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export const registerUser = async ({
  name,
  email,
  password,
}: RegisterPayload) => {
  try {
    // FIREBASE ME USER CREATE
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const user = userCredential.user;

    // FIREBASE ID-TOKEN
    const idToken = await user.getIdToken();

    // BACKEND KO SEND
    const response = await ApiConnector({
      method: "POST",
      url: authRoutes.REGISTER,
      body: { name },
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
    console.log("response", response);
    return response;
  } catch (err) {
    throw new Error(getErrorMessage(err, "Registration failed"));
  }
};
