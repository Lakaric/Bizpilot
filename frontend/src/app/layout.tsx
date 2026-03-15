import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthInitializer } from "@/components/AuthInitializer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome to BizPilot",
  description: "BizPilot helps small business owners manage, track and simplify their finances",
  icons: {
    icon: "/assets/Bizbot-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <AuthInitializer>{children}</AuthInitializer>
      </body>
    </html>
  );
}
