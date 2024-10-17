import type { Metadata } from "next";
import localFont from "next/font/local";
import { inter } from "@/app/ui/fonts";
import "./globals.css";
import Header from "./ui/header/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Create Next App",
    template: "%s | Products",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <br />
        <Header />
        <br />

        <hr />
        <br />
        <br />
        {children}
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <footer>Footer</footer>
      </body>
    </html>
  );
}