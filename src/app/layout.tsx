import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AppQueryProvider from "@/providers/QueryProvider";
import "./globals.css";
import Head from "next/head";

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
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppQueryProvider>{children}</AppQueryProvider>
      </body>
    </html>
  );
}
