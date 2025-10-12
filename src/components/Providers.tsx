"use client";

import { CDPReactProvider } from "@coinbase/cdp-react/components/CDPReactProvider";
import { theme } from "@/components/theme";
import { CDP_CONFIG } from "./config.ts";

interface ProvidersProps {
  children: React.ReactNode;
}

const config = {
  ...CDP_CONFIG,
  appName: "CDP Next.js StarterKit",
  appLogoUrl: "http://localhost:3000/logo.svg",
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <CDPReactProvider config={CDP_CONFIG} theme={theme}>
      {children}
    </CDPReactProvider>
  );
}
