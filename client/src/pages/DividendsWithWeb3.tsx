import Web3Guard from "@/components/Web3Guard";
import Dividends from "./Dividends";

export default function DividendsWithWeb3() {
  return (
    <Web3Guard>
      <Dividends />
    </Web3Guard>
  );
}
