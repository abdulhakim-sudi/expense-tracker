// src/components/ExpenseTable.jsx
import React from 'react';

const ExpenseTable = () => {
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
        <tr>
          <td>Sample Expense</td>
          <td>$100</td>
          <td>Delete</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpenseTable;
