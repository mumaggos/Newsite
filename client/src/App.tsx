import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
// SocialFloatingButtons removido do bundle inicial para evitar Framer Motion na Home inicial
import { lazy, Suspense } from "react";

// Lazy load páginas que não são críticas para reduzir bundle inicial
// Páginas com Web3 usam wrappers que carregam Web3Provider apenas quando necessário
const Admin = lazy(() => import("./pages/AdminWithWeb3"));
const Presale = lazy(() => import("./pages/PresaleWithWeb3"));
const Dashboard = lazy(() => import("./pages/DashboardWithWeb3"));
const Dividends = lazy(() => import("./pages/DividendsWithWeb3"));

// Páginas informacionais sem Web3
const Roadmap = lazy(() => import("./pages/Roadmap"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Whitepaper = lazy(() => import("./pages/Whitepaper"));
const Tokenomics = lazy(() => import("./pages/Tokenomics"));

// Loading component simples e leve
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

function Router() {
  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/presale" component={Presale} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/dividends" component={Dividends} />
          <Route path="/roadmap" component={Roadmap} />
          <Route path="/faq" component={FAQ} />
          <Route path="/whitepaper" component={Whitepaper} />
          <Route path="/tokenomics" component={Tokenomics} />
          <Route path="/admin" component={Admin} />
          <Route path="/404" component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

// App sem Web3 providers globais - serão carregados apenas nas páginas que precisam
function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider defaultTheme="dark" storageKey="lubdan-theme">
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
