// src/components/POS.js
import React, { useState } from 'react';
import { Typography, Card, CardContent, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { useOrders } from './OrderContext';

const POS = () => {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);
  const { addOrder } = useOrders(); // Use context to manage orders

  // Handle adding an item to the current order
  const handleAddItem = () => {
    if (itemName && itemQuantity > 0) {
      const newItem = {
        id: Date.now(), // Use timestamp as a unique ID for simplicity
        name: itemName,
        quantity: itemQuantity,
        status: 'In Progress' // Default status for new items
      };
      addOrder(newItem); // Add the new item to the orders
      setItemName(''); // Clear input fields
      setItemQuantity(1);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Point of Sale (POS)
        </Typography>

        {/* Form to add new order items */}
        <Typography variant="h6">Add Item to Order</Typography>
        <TextField
          label="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Quantity"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(Number(e.target.value))}
          fullWidth
          margin="normal"
          type="number"
          inputProps={{ min: 1 }} // Prevent negative quantities
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddItem}
          disabled={!itemName || itemQuantity < 1} // Disable button if inputs are invalid
        >
          Add to Order
        </Button>
      </CardContent>
    </Card>
  );
};

export default POS;
