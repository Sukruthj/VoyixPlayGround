// src/components/OrderContext.js
import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const useOrders = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  // Function to add a new order
  const addOrder = (newOrder) => {
    setOrders(prevOrders => [...prevOrders, newOrder]);
  };

  // Function to update order status
  const updateOrderStatus = (id, newStatus) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, updateOrderStatus }}>
      {children}
    </OrderContext.Provider>
  );
};
