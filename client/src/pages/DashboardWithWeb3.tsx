import { Web3Provider } from "@/components/Web3Provider";
import Dashboard from "./Dashboard";

export default function DashboardWithWeb3() {
  return (
    <Web3Provider>
      <Dashboard />
    </Web3Provider>
  );
}
