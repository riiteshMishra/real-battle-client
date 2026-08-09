import axios from "axios";

// SUCCESS MESSAGE
export const getSuccessMessage = (
  response: unknown,
  fallback = "Message sent successfully!",
) => {
  if (axios.isAxiosError(response)) {
    return (
      response.response?.data?.message ||
      response.response?.data?.success ||
      fallback
    );
  }

  if (
    typeof response === "object" &&
    response !== null &&
    "message" in response
  ) {
    return String(response.message) || fallback;
  }

  return fallback;
};

// ERROR MESSAGE
export const getErrorMessage = (
  err: unknown,
  fallback = "Operation failed",
) => {
  if (axios.isAxiosError(err)) {
    return (
      err.response?.data?.error ||
      err.response?.data?.message ||
      err.message ||
      fallback
    );
  }

  if (err instanceof Error) {
    return err.message || fallback;
  }

  return fallback;
};
