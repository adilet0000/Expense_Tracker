import React, { createContext, useState } from 'react';

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
   const [balance, setBalance] = useState(0);
   const [transactions, setTransactions] = useState([]);

   const addTransaction = (amount, description, type) => {
      const newTransaction = {
         id: Date.now(),
         description,
         amount: parseFloat(amount),
         type,
         date: new Date().toLocaleString(),
      };

      setTransactions([newTransaction, ...transactions]);
      setBalance(type === 'income' ? balance + parseFloat(amount) : balance - parseFloat(amount));
   };

   return (
      <ExpenseContext.Provider value={{ balance, transactions, addTransaction }}>
         {children}
      </ExpenseContext.Provider>
   );
};
