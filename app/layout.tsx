import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Analytics } from "@vercel/analytics/react";
import RecoilRootWrapper from "@/app/recoil";
import Announcement from "@/components/Announcement"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MSF 2024",
  description: "Malaysian Sports Festival 2024",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RecoilRootWrapper>
        <Theme>
          <body className={inter.className}>
          <Announcement /> {/* Add the Announcement component here */}
            {children}
            <Analytics />
          </body>
        </Theme>
      </RecoilRootWrapper>
    </html>
  );
}
