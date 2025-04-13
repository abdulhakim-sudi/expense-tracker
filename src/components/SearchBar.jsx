// src/components/ExpenseTable.jsx
import React, { useState } from 'react';
import SearchBar from './SearchBar';

const ExpenseTable = ({ expenses }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExpenses = expenses.filter(expense => 
    expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar onSearch={(term) => setSearchTerm(term)} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.name}</td>
              <td>{expense.amount}</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
