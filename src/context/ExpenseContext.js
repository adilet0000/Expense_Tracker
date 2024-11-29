import React, { createContext, useState } from 'react';

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
   const [expenses, setExpenses] = useState([]);

   const addExpense = (expense) => {
      setExpenses([...expenses, expense]);
   };

   return (
      <ExpenseContext.Provider value={{ expenses, addExpense }}>
         {children}
      </ExpenseContext.Provider>
   );
};
