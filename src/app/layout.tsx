import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeLayouts, MainLayout } from "@/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Portfolio",
  description: "Generated by Ahmet Topal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeLayouts>
          <MainLayout>{children}</MainLayout>
        </ThemeLayouts>
      </body>
    </html>
  );
}
