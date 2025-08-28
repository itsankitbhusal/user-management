import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AppQueryProvider from "@/providers/QueryProvider";
import "./globals.css";
import "semantic-ui-css/semantic.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "User Management",
  description: "User management task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}  `}>
        <div className="w-full h-full max-w-[1400px] mx-auto">
        <AppQueryProvider>{children}</AppQueryProvider>
        </div>
      </body>
    </html>
  );
}
