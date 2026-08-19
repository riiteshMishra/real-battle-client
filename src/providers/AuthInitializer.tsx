"use client";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configs/firebase";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loginSuccess, logoutSuccess } from "../store/slices/auth.slice";
import apiConnector from "../services/apiConnector";
import { authRoutes } from "../services/apis-data";
import { AUTH_RESPONSE } from "../types/auth";

// AUTH REBASE - BACKEND SE USER DATA FETCH
const authRebase = async (): Promise<AUTH_RESPONSE> => {
  try {
    const response = await apiConnector<AUTH_RESPONSE>({
      method: "GET",
      url: authRoutes.GET_ME,
    });

    return response.data;
  } catch (error: unknown) {
    console.error("Auth rebase failed:", error);
    throw error;
  }
};

// AUTH INITIALIZER
const AuthInitializer = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      // !USER -> RETURN
      if (!user) {
        dispatch(logoutSuccess());
        return;
      }

      try {
        const response = await authRebase();

        if (response.success && response.user) {
          dispatch(loginSuccess(response.user));
        } else {
          // BACKEND SE LOGOUT SIGNAL
          dispatch(logoutSuccess());
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
