import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import KeyboardEgg from "@/components/KeyboardEgg";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Birthday 🎂",
  description: "A tiny birthday world, made for you.",
  other: {
    "x-secret": "↑↑↓↓←→←→BA 🎮",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#FFF8E7] text-[#1F1F1F]">
        <Nav />
        <main className="flex-1">{children}</main>
        <KeyboardEgg />
      </body>
    </html>
  );
}
