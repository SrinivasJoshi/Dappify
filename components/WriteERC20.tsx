import ClientOnly from "@/utils/clientOnly";
import { contractABI, contractAddress } from "@/utils/ContractInfo";
import { parseEther } from "ethers";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

export default function WriteERC20() {
  const { isConnected, address } = useAccount();
  const { config, error: prepError } = usePrepareContractWrite({
    address: contractAddress,
    abi: contractABI,
    functionName: "mint",
    args: [address, parseEther("100")],
  });

  const { write, data } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  return (
    <ClientOnly>
      {isConnected ? (
        <button onClick={() => write?.()}>Mint 100 MTK</button>
      ) : (
        <p>Connect to Wallet to Mint MTK</p>
      )}
      {isLoading && (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-secondary"></div>
        </div>
      )}
    </ClientOnly>
  );
}
