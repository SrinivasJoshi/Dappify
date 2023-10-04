import ReadERC20 from "@/components/ReadERC20";
import WriteERC20 from "@/components/WriteERC20";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dappify",
  description: "Nextjs.13 dApp Dev Kit",
  icons: {
    icon: "images/icon.png",
  },
};

export default function Home() {
  return (
    <section className="bg-primary flex flex-col items-center justify-evenly py-10 h-screen">
      <h1 className="text-9xl text-secondary font-Handjet font-semibold mt-3">
        Dappify
      </h1>

      <p className="text-white texl-4xl font-semibold">
        This example app shows you how to use wagmi for a basic ERC20 contract :{" "}
      </p>

      <ReadERC20 />
      <WriteERC20 />
    </section>
  );
}
