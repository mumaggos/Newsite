import { Web3Provider } from "@/components/Web3Provider";
import Presale from "./Presale";

export default function PresaleWithWeb3() {
  return (
    <Web3Provider>
      <Presale />
    </Web3Provider>
  );
}
