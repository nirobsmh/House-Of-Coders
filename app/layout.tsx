import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapClient from "../components/BootstrapClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Of Coders | Digital Studio",
  description:
    "Home Of Coders is a full-stack digital studio building premium web and software experiences.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
