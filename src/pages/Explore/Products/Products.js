import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("https://bike-buzz.herokuapp.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h4" sx={{ fontWeight: 600, color: '#666', py: 3 }}>
        WORLD BEST BIKE COLLECTIONS
      </Typography>
      <Grid container spacing={2} >
        {
          products.map((pd) => <Product key={pd._id} pd={pd}></Product>)
        }
      </Grid>
    </Container>
  );
};

export default Products;