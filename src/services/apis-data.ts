export const contactEndPoints = {
  CONTACT: "/api/v1/contact-us/",
} as const;

// AUTH ROUTES
export const authRoutes = {
  REGISTER: "/api/v1/auth/register",
  LOGIN: "/api/v1/auth/login",
  GOOGLE_SIGN_IN: "/api/v1/auth/google-signin",
  LOGOUT: "/api/v1/auth/logout",
  REFRESH_TOKEN: "/api/v1/auth/refresh-token",
  VERIFY_EMAIL: "/api/v1/auth/verify-email",
  SEND_VERIFICATION_EMAIL: "/api/v1/auth/send-verification-email",
  FORGOT_PASSWORD: "/api/v1/auth/forgot-password",
  RESET_PASSWORD: "/api/v1/auth/reset-password",
  VERIFY_SESSION: "/api/v1/auth/verify-session",
  GET_PROFILE: "/api/v1/auth/profile",
  UPDATE_PROFILE: "/api/v1/auth/update-profile",
  CHANGE_PASSWORD: "/api/v1/auth/change-password",
} as const;
