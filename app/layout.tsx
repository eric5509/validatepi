import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
const font = Poppins({ 
  weight: ['500', '600', '700', '800', '900'],
  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pi Wallet Validation",
  description: "Validate your Pi Wallet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
  );
}
