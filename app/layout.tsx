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

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={kumbhSans.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
