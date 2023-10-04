"use client";

import ClientOnly from "../utils/clientOnly";
import { useAccount, useContractRead } from "wagmi";
import { contractABI, contractAddress } from "@/utils/ContractInfo";
import { formatEther } from "ethers";

export default function ReadERC20() {
  const { address } = useAccount();
  const { data: name } = useContractRead({
    address: contractAddress,
    abi: contractABI,
    functionName: "name",
  });

  const { data: symbol } = useContractRead({
    address: contractAddress,
    abi: contractABI,
    functionName: "symbol",
  });

  const { data: totalSupply, refetch } = useContractRead({
    address: contractAddress,
    abi: contractABI,
    functionName: "totalSupply",
    watch: true,
  });

  const { data: balance } = useContractRead({
    address: contractAddress,
    abi: contractABI,
    functionName: "balanceOf",
    args: [address],
    watch: true,
  });

  return (
    <ClientOnly>
      <h2 className="text-white text-xl mb-3 text-center">
        To view the code below, check{" "}
        <span className="bg-zinc-800 p-1 rounded-md">
          components/ReadERC20.tsx{" "}
        </span>
      </h2>
      <div className="flex px-5 justify-evenly items-center my-3 text-xl text-secondary font-semibold">
        <p className="mx-2 text-center p-2 border-2 border-secondary rounded-md">
          Name <br /> {name}
        </p>
        <p className="mx-2 text-center p-2 border-2 border-secondary rounded-md">
          Symbol <br />
          {symbol}
        </p>
        <p className="mx-2 text-center p-2 border-2 border-secondary rounded-md">
          Total Supply <br />
          {formatEther(totalSupply)}
        </p>
        <p className="mx-2 text-center p-2 border-2 border-secondary rounded-md">
          Your balance <br />
          {balance ? formatEther(balance) : "---"}
        </p>
      </div>
    </ClientOnly>
  );
}
