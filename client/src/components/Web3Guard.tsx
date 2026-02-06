import { lazy, Suspense, ReactNode } from "react";

// Lazy load do Web3Provider para garantir que wagmi/viem não são carregados no bundle inicial
const LazyWeb3Provider = lazy(() => import("../contexts/Web3Provider").then(m => ({ default: m.Web3Provider })));

function Web3Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-muted-foreground">Initializing Web3...</p>
      </div>
    </div>
  );
}

export default function Web3Guard({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<Web3Loader />}>
      <LazyWeb3Provider>
        {children}
      </LazyWeb3Provider>
    </Suspense>
  );
}
