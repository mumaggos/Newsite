import Web3Guard from "@/components/Web3Guard";
import Dashboard from "./Dashboard";

export default function DashboardWithWeb3() {
  return (
    <Web3Guard>
      <Dashboard />
    </Web3Guard>
  );
}
