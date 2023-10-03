"use client";

import ClientOnly from "../utils/clientOnly";
import { useAccount, useContractRead } from "wagmi";
import { contractABI, contractAddress } from "@/utils/ContractInfo";

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

  const { data: totalSupply } = useContractRead({
    address: contractAddress,
    abi: contractABI,
    functionName: "totalSupply",
  });

  const { data: balance } = useContractRead({
    address: contractAddress,
    abi: contractABI,
    functionName: "balanceOf",
    args: [address],
  });

  return (
    <ClientOnly>
      <div className="flex px-5 justify-evenly items-center my-3">
        <p className="text-2xl text-secondary font-semibold">Name : {name}</p>
        <p className="text-2xl text-secondary font-semibold">
          Symbol : {symbol}
        </p>
        <p className="text-2xl text-secondary font-semibold">
          Total Supply : {totalSupply}
        </p>
        <p className="text-2xl text-secondary font-semibold">
          Your balance : {balance ? balance : "Connect wallet"}
        </p>
      </div>
    </ClientOnly>
  );
}
