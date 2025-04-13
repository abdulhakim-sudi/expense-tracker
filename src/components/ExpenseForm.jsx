import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  // State to track form input values
  const [expense, setExpense] = useState({
    amount: '',
    description: '',
    category: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass data back to parent (if you have an `onAddExpense` callback passed as prop)
    onAddExpense(expense);
    // Clear form after submitting
    setExpense({
      amount: '',
      description: '',
      category: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={expense.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={expense.category}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
