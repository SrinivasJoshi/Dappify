"use client";

import React, { useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useAccount } from "wagmi";

const Navbar = ({ setIsConn }) => {
  const { isConnected } = useAccount();

  useEffect(() => {
    setIsConn(isConnected);
  }, [isConnected]);

  return (
    <nav className="w-full flex justify-between items-center p-3 bg-primary fixed">
      <Link href="/">
        <h1 className="text-lg text-white">Logo</h1>
      </Link>

      <ConnectButton showBalance={false} chainStatus="none" />
    </nav>
  );
};

export default Navbar;
