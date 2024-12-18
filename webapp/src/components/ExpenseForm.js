import React, { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expenseName || !expenseAmount) return;

    const newExpense = {
      name: expenseName,
      amount: parseFloat(expenseAmount),
      id: Math.random().toString(36).substr(2, 9), // unique id for each expense
    };

    addExpense(newExpense);
    setExpenseName('');
    setExpenseAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Expense Name" 
        value={expenseName} 
        onChange={(e) => setExpenseName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Amount" 
        value={expenseAmount} 
        onChange={(e) => setExpenseAmount(e.target.value)} 
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
