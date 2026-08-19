import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/src/configs/firebase";

import { getErrorMessage } from "@/src/utils/getMessages";
import ApiConnector from "../../apiConnector";
import { authRoutes } from "../../apis-data";
import { AUTH_RESPONSE } from "@/src/types/auth";

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export const registerUser = async ({
  name,
  email,
  password,
}: RegisterPayload): Promise<AUTH_RESPONSE> => {
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
    const response = await ApiConnector<AUTH_RESPONSE>({
      method: "POST",
      url: authRoutes.REGISTER,
      body: { name },
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error(getErrorMessage(err, "Registration failed"));
  }
};
