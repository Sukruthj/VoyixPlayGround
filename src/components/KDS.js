// src/components/KDS.js
import React from 'react';
import { Typography, Card, CardContent, Button, List, ListItem, ListItemText } from '@mui/material';
import { useOrders } from './OrderContext';

const KDS = () => {
  const { orders, updateOrderStatus } = useOrders();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Kitchen Display System (KDS)</Typography>
        <List>
          {orders.map((order) => (
            <ListItem key={order.id}>
              <ListItemText primary={`${order.name} (x${order.quantity})`} secondary={`Status: ${order.status}`} />
              <Button
                variant="contained"
                color="primary"
                onClick={() => updateOrderStatus(order.id, 'In Progress')}
                disabled={order.status === 'In Progress'}
              >
                Mark In Progress
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => updateOrderStatus(order.id, 'Completed')}
                disabled={order.status === 'Completed'}
                style={{ marginLeft: '10px' }}
              >
                Mark Completed
              </Button>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default KDS;
