// src/components/ExpenseForm.jsx
import React from 'react';

const ExpenseForm = () => {
  return (
    <form>
      <input type="text" placeholder="Expense Name" />
      <input type="number" placeholder="Amount" />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;

