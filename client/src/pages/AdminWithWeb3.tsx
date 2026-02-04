import { Web3Provider } from "@/components/Web3Provider";
import Admin from "./Admin";

export default function AdminWithWeb3() {
  return (
    <Web3Provider>
      <Admin />
    </Web3Provider>
  );
}
