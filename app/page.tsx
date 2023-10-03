import ReadERC20 from "@/components/ReadERC20";

export default function Home() {
  return (
    <section className="bg-primary flex flex-col items-center justify-evenly py-10 h-screen">
      <h1 className="text-9xl text-secondary font-Handjet font-semibold mt-3">
        Dappify
      </h1>

      <p>
              This example app shows you how to use wagmi for a basic ERC20 contract :{" "}
      </p>
            <ReadERC20 />
    </section>
  );
}
