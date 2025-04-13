import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([]);

  // Function to add an expense
  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  // Function to delete an expense
  const handleDeleteExpense = (index) => {
    setExpenses((prevExpenses) => prevExpenses.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.amount} - {expense.description} - {expense.category}
            <button onClick={() => handleDeleteExpense(index)} style={{ marginLeft: '10px', color: 'red' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
