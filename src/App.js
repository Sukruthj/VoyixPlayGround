// src/App.js
import React from 'react';
import Dashboard from './components/Dashboard';
import { OrderProvider } from './components/OrderContext';

function App() {
  return (
    <OrderProvider>
      <div className="App">
        <Dashboard />
      </div>
    </OrderProvider>
  );
}

export default App;
