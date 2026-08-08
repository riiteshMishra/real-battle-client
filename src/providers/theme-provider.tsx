"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { PropsWithChildren } from "react";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
