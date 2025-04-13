// src/components/ExpenseTable.jsx
import React from 'react';

const ExpenseTable = ({ expenses }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.name}</td>
            <td>{expense.amount}</td>
            <td>Delete</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
