// src/components/BackOffice.js
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { useOrders } from './OrderContext';

const COLORS = ['#0088FE', '#00C49F'];

const BackOffice = () => {
  const { orders } = useOrders();

  const completedOrders = orders.filter(order => order.status === 'Completed').length;
  const inProgressOrders = orders.filter(order => order.status === 'In Progress').length;

  const orderData = [
    { name: 'Completed', value: completedOrders },
    { name: 'In Progress', value: inProgressOrders }
  ];

  const barData = [
    { name: 'Orders', Completed: completedOrders, 'In Progress': inProgressOrders }
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Back Office - Order Summary
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Order Status Distribution</Typography>
            <PieChart width={300} height={300}>
              <Pie
                data={orderData}
                cx={150}
                cy={150}
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {orderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6">Number of Orders by Status</Typography>
            <BarChart width={300} height={300} data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Completed" fill="#0088FE" />
              <Bar dataKey="In Progress" fill="#00C49F" />
            </BarChart>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BackOffice;
