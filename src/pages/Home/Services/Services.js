import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("https://bike-buzz.herokuapp.com/products")
      .then(res => res.json())
      .then(data => {
        const sliceData = data.slice(0, 6);
        setProducts(sliceData);
      })
  }, []);
  return (
    <Container>
      <Typography variant="h4" sx={{ fontWeight: 700, fontSize: "34px", color: '#666', py: 5 }}>
        WORLD BEST BIKE COLLECTIONS
      </Typography>
      <Grid container spacing={2} >
        {
          products.map((data) => <Service key={data._id} data={data}></Service>)
        }
      </Grid>
    </Container>
  );
};

export default Services;