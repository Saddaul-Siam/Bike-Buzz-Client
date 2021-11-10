import { Container, Grid } from '@mui/material';
import React from 'react';
import { services } from '../../../data/data';
import Product from '../Product/Product';

const Products = () => {
  const Products = services
  return (
    <Container>
      <Grid container spacing={2} >
        {
          Products.map((pd) => <Product pd={pd}></Product>)
        }
      </Grid>
    </Container>
  );
};

export default Products;