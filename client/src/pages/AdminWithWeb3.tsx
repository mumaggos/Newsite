import Web3Guard from "@/components/Web3Guard";
import Admin from "./Admin";

export default function AdminWithWeb3() {
  return (
    <Web3Guard>
      <Admin />
    </Web3Guard>
  );
}
