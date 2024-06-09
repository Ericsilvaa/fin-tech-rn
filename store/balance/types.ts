export type Transaction = {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

export type BalanceState = {
  transactions: Array<Transaction>;
  runTransaction: (transaction: Transaction) => void;
  balance: () => number;
  clearTransactions: () => void;
}