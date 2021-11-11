import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Order from '../Order/Order';

const Orders = () => {
  const { ordersId } = useParams();
  const [order, setOrder] = useState({});
  const { name, img, price, description } = order;
  // console.log(orders);
  useEffect(() => {
    fetch(`http://localhost:5000/product/${ordersId}`)
      .then(res => res.json())
      .then(data => setOrder(data))
  }, [ordersId])
  return (
    <Container>
      <Typography variant="h4" sx={{py:3,fontWeight: 600}}>Orders pages </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {name}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {price}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Orders;

// {/* <Order dt={data}></Order> */ }