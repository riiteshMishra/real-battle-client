"use client";

const GoogleLogin = () => {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted active:scale-[0.98]"
    >
      {/* Google Icon */}
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M21.35 12.23c0-.79-.07-1.55-.2-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.42Z"
        />

        <path
          fill="#34A853"
          d="M12 21.7c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.74 9.74 0 0 0 12 21.7Z"
        />

        <path
          fill="#FBBC05"
          d="M6.54 13.8A5.85 5.85 0 0 1 6.23 12c0-.62.11-1.23.31-1.8V7.67H3.3A9.74 9.74 0 0 0 2.26 12c0 1.57.38 3.06 1.04 4.33l3.24-2.53Z"
        />

        <path
          fill="#EA4335"
          d="M12 6.17c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.83 3.29 14.63 2.3 12 2.3a9.74 9.74 0 0 0-8.7 5.37l3.24 2.53C7.31 7.89 9.46 6.17 12 6.17Z"
        />
      </svg>
      Continue with Google
    </button>
  );
};

export default GoogleLogin;
