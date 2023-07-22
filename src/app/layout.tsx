import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Homez",
  description: "Homez - The best way to find your dream home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ScriptComponent = dynamic(
    () => import("./components/ScriptComponent"),
    { ssr: false }
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ScriptComponent />
      </body>
    </html>
  );
}
