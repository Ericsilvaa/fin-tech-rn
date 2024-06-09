import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { zustandStorage } from '../storage';
import { BalanceState } from './types';


export const useBalanceStore = create<BalanceState>()(
  persist((set, get) => ({
      transactions: [],
      runTransaction: (transaction) => {
        set((state) => ({
          transactions: [...state.transactions, transaction],
        }));
      },
      balance: () => get().transactions.reduce((acc, transaction) => acc + transaction.amount, 0),
      clearTransactions: () => {
        set({ transactions: [] });
      },
    }),{
    name: 'balance',
    storage: createJSONStorage(() => zustandStorage),
  }
  )
)