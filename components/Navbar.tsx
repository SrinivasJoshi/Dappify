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
        <img src="/images/logo.png" alt="Site Logo" className="w-32" />
      </Link>

      <ConnectButton showBalance={false} />
    </nav>
  );
};

export default Navbar;
