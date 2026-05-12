import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Birthday, QA Baby Boss! 🎂",
  description: "A Bugchan birthday adventure for the ultimate QA Queen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FFF4D6]">
        <Nav />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
