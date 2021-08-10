import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import api from "../services/api";

interface ITransactionsProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<ITransactionsProps, "id" | "createdAt">;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface IContextProps {
  transactions: ITransactionsProps[];
  createTransaction(transaction: TransactionInput): Promise<void>;
}

const transactionContext = createContext<IContextProps>(
  {} as IContextProps
);

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactionsProps[]>([]);

  useEffect(() => {
    api
      .get("transaction")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transaction: TransactionInput) {
    const response = await api.post("/transaction", {
      ...transaction,
      createdAt: new Date(),
    });
    const { transaction: TransactionResponse } = response.data;

    setTransactions([...transactions, TransactionResponse]);
  }

  return (
    <transactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </transactionContext.Provider>
  );
}

export function useTransaction(){
  const context = useContext(transactionContext)

  return context
}
