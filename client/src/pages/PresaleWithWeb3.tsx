import Web3Guard from "@/components/Web3Guard";
import Presale from "./Presale";

export default function PresaleWithWeb3() {
  return (
    <Web3Guard>
      <Presale />
    </Web3Guard>
  );
}
