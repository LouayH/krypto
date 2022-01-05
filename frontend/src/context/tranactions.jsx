import { createContext } from "react";

export const TransactionContext = createContext({});

export const TransactionProvider = ({ children }) => {
  return (
    <TransactionContext.Provider value={{ value: "transactions" }}>
      { children }
    </TransactionContext.Provider>
  )
}