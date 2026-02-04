/**
 * Hook para obter dados da presale SEM carregar Web3
 * Usado na Home page para evitar carregar wagmi/viem desnecessariamente
 * Retorna valores padrão para não quebrar a UI
 */

import { PRESALE_CONFIG } from '@/lib/contracts';

interface PresaleData {
  currentPhase: number;
  totalSold: number;
  phase1Remaining: number;
  phase2Remaining: number;
  isLoading: boolean;
  isError: boolean;
}

export function usePresaleDataNoWeb3(): PresaleData {
  // Retornar valores padrão sem fazer chamadas Web3
  // A Home não precisa de dados reais on-chain, apenas mostrar informações estáticas
  return {
    currentPhase: 1,
    totalSold: 0,
    phase1Remaining: PRESALE_CONFIG.PHASE_1.ALLOCATION,
    phase2Remaining: PRESALE_CONFIG.PHASE_2.ALLOCATION,
    isLoading: false,
    isError: false,
  };
}
