"use client";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configs/firebase";
import { useAppDispatch } from "../store/hooks";
import { loginSuccess, logoutSuccess } from "../store/slices/auth.slice";
import apiConnector from "../services/apiConnector";
import { authRoutes } from "../services/apis-data";

const AuthInitializer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        dispatch(logoutSuccess());
        return;
      }

      try {
        const response = await apiConnector({
          method: "GET",
          url: authRoutes.GET_ME,
        });

        console.log("response", response);

        if (response?.success && response?.user) {
          dispatch(loginSuccess(response.user));
        }
      } catch (error) {
        console.error("Auth restore failed:", error);
        dispatch(logoutSuccess());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return null;
};

export default AuthInitializer;
