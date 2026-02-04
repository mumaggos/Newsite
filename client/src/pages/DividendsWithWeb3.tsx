import { Web3Provider } from "@/components/Web3Provider";
import Dividends from "./Dividends";

export default function DividendsWithWeb3() {
  return (
    <Web3Provider>
      <Dividends />
    </Web3Provider>
  );
}
