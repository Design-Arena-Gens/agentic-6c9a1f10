import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Penetration Testing: 7 Steps & Practical Demonstrations",
  description: "Comprehensive presentation on penetration testing methodology with practical demonstrations using Kali Linux tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
