import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import { makeStyles } from '@mui/styles';
import Navigation from '../../Shared/Navigation/Navigation';
const Order = () => {
  const { ordersId } = useParams();
  const [order, setOrder] = useState({});
  const Swal = require('sweetalert2');

  const { user } = useAuth()
  useEffect(() => {
    fetch(`https://bike-buzz.herokuapp.com/product/${ordersId}`)
      .then(res => res.json())
      .then(data => setOrder(data))
  }, [ordersId]);

  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const onSubmit = data => {
    data.productName = order.name
    data.price = order.price
    data.status = "pending"
    console.log(data);
    fetch(`https://bike-buzz.herokuapp.com/order`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your order added successfully',
            showConfirmButton: false,
            timer: 1500
          })
          reset()
        }
        console.log(data);
      })
  };

  const useStyle = makeStyles({
    input: {
      width: '100%',
      height: "50px",
      marginBottom: 15,
      border: 0,
      borderBottom: '1px solid black'
    },

  })

  const { input } = useStyle()
  return (
    <Container sx={{ mt: 10 }}>
      <Navigation></Navigation>
      <Typography variant="h4" sx={{ marginTop: 3, fontWeight: 600 }}>Orders pages </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {order.name}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="subtitle" sx={{ fontWeight: 'bold' }}>Product Name</Typography>
            <input className={input} value={order.name} {...register("productName")} type="text" required />

            <Typography variant="subtitle" sx={{ fontWeight: 'bold' }}>Price</Typography>
            <input className={input} value={order.price} {...register("price")} type="number" required />

            <Typography variant="subtitle" sx={{ fontWeight: 'bold' }}>Your Name</Typography>
            <input className={input} defaultValue={user.displayName}  {...register("name")} type="text" required />

            <Typography variant="subtitle" sx={{ fontWeight: 'bold' }}>Email</Typography>
            <input className={input} defaultValue={user.email} {...register("email")} type="email" required />

            <Typography variant="subtitle" sx={{ fontWeight: 'bold' }}>Address</Typography>
            <input className={input} placeholder="Your Address"  {...register("address")} type="text" required />

            <Typography variant="subtitle" sx={{ fontWeight: 'bold' }}>City</Typography>
            <input className={input} placeholder="Your City"   {...register("city")} type="text" required />
            {errors.exampleRequired && <span>This field is required</span>}
            <Button className={input} variant="contained" type="submit">Order Now</Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Order;
