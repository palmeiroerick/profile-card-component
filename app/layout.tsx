import "@/style/globals.css";
import type { Metadata } from "next";
import type { NextFont } from "next/dist/compiled/@next/font";
import { Kumbh_Sans } from "next/font/google";
import type { ReactNode } from "react";

const kumbhSans: NextFont = Kumbh_Sans({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Profile Card Component",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} bg-bg flex h-screen w-screen items-center justify-center overflow-hidden bg-darkCyan`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
