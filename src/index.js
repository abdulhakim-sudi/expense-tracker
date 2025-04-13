import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Create a root element for React 18+
// Replace ReactDOM.render() with ReactDOM.createRoot()
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
