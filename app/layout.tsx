import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import CursorSpotlight from "@/components/CursorSpotlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tezos Jamia Hamdard",
  description:
    "Official Website of Tezos Jamia Hamdard | Fostering Innovation on the Tezos Blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/icon2.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} bg-[#020204] text-gray-100 overflow-x-hidden antialiased selection:bg-[#2C7DF7] selection:text-white`}
      >
        <div className="aurora-mesh" />
        <CursorSpotlight />
        <div className="relative z-10">
          <NavbarWrapper />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
