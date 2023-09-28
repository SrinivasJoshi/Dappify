"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "../utils/providers";
import "@rainbow-me/rainbowkit/styles.css";
import Navbar from "../components/Navbar";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isConn, setIsConn] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar setIsConn={setIsConn} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
