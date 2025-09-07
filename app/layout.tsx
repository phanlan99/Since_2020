import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import Navbar from "@/components/navbar/Navbar";
import Providers from "./providers";
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: "Since 2020",
  description: "App booking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <Navbar />
            <main className="container py-10">{children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
