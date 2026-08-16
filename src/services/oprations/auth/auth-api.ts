import { signInWithEmailAndPassword } from "firebase/auth";
import { authRoutes } from "../../apis-data";

export const login = async (email: string, password: string) => {
  try {
    // Firebase pe login
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    // Backend ko notify karo (session create karne ke liye)
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
