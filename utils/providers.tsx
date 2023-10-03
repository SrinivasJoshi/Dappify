"use client";

import React from "react";
import {
  RainbowKitProvider,
  getDefaultWallets,
  midnightTheme,
} from "@rainbow-me/rainbowkit";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { ToastContainer } from "react-toastify";

const { chains, publicClient } = configureChains(
  // IMPORT YOUR CHAIN AND SET BELOW
  [sepolia],
  [publicProvider()],
);

const { connectors } = getDefaultWallets({
  // ADD YOUR APP NAME AND PROJECT ID
  appName: "YOUR_APP_NAME",
  projectId: "PROJECT_ID",
  chains,
});

const demoAppInfo = {
  appName: "YOUR_APP_NAME",
};

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const Providers = ({ children }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        appInfo={demoAppInfo}
        modalSize="compact"
        theme={midnightTheme({
          // CHANGE COLOR BELOW(OPTIONAL)
          accentColor: "#14BB00",
          accentColorForeground: "#171717",
          borderRadius: "small",
          fontStack: "system",
          overlayBlur: "small",
        })}
      >
        <ToastContainer
          position="top-right"
          autoClose={4500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        {children}
        <ToastContainer />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Providers;
