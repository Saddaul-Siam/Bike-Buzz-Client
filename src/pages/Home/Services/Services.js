import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/mainServices")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <Container>
      <Typography variant="h4" sx={{ fontWeight: 600,color:'#666',py:3 }}>
        WORLD BEST BIKE COLLECTIONS
      </Typography>
      <Grid container spacing={2} >
        {
          products.map((data) => <Service data={data}></Service>)
        }
      </Grid>
    </Container>
  );
};

export default Services;