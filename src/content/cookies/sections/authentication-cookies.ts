export const authenticationCookiesSection = {
  id: "authentication-cookies",
  title: "5. Authentication Cookies",
  type: "subsections" as const,

  subsections: [
    {
      title: "Purpose",
      items: [
        "Maintain your authenticated login session.",
        "Allow our servers to recognize your authenticated requests.",
        "Protect access to account-specific features.",
      ],
    },
    {
      title: "Security",
      items: [
        "Authentication cookies may contain a session or authentication identifier.",
        "Authentication credentials should not be shared with other users.",
        "Where technically supported, authentication cookies may use security attributes such as HttpOnly, Secure, and SameSite.",
      ],
    },
  ],
};
