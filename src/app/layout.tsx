import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/components";

export const metadata: Metadata = {
  title: "Liquid Staking Platform",
  description: "Kenneth Verbeure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background p-4 flex flex-col items-center">
        <Header />
        <h1 className="text-center mb-8 text-primary mt-20">
          <span className="text-4xl font-bold">Liquid Staking Platform</span>
        </h1>
        <div className="w-full max-w-screen-xl mx-auto px-4 flex flex-col items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
