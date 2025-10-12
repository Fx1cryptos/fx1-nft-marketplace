import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CDP Embedded Wallet Demo",
  description: "A demo of the CDP Embedded Wallet",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
