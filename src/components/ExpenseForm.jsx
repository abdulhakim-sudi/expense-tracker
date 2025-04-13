// src/components/ExpenseForm.jsx
import React, { useState } from 'react';

const ExpenseForm = () => {
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling form submission
    console.log({ expenseName, amount });
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
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
